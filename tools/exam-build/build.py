"""Build 65-question SAA-C03 mock exams from vetted sources.

usage: python -I build.py raw.json official.json authored.json ../../assets/syllabus.js out.js

- Chỉ giữ câu dạng tình huống (scenario) như đề SAA-C03 thật; loại câu thuộc lòng / Yes-No / < 4 đáp án.
- Gắn domain (D1..D4) và bài học (1..45) cho từng câu, rồi chia đề theo đúng tỷ lệ domain của exam guide.
"""
import json, re, sys, random
from difflib import SequenceMatcher

raw = json.load(open(sys.argv[1], encoding='utf-8'))
official = json.load(open(sys.argv[2], encoding='utf-8'))
authored = json.load(open(sys.argv[3], encoding='utf-8'))
syllabus = open(sys.argv[4], encoding='utf-8').read()
PER_EXAM = 65
QUOTA = {'D1': 20, 'D2': 17, 'D3': 15, 'D4': 13}   # 30% / 26% / 24% / 20% của 65 câu
assert sum(QUOTA.values()) == PER_EXAM

# 1) Duplicates found by dedupe.py (keep the cleaner copy, drop the other).
DUP_DROP = {474, 163, 355, 624, 403, 115}

# 2) Content referring to retired / changed AWS behaviour, or trivia that SAA-C03 no longer tests.
OUTDATED = ['eventual consistency', 'eventually consistent', 'reduced redundancy', 'rrs',
            'simple workflow', 'swf', 'elastic transcoder', 'import/export', 'ec2-classic',
            'simpledb', 'opsworks', 'data pipeline', 'cloudsearch', 'standard rds', 'magnetic',
            'bittorrent', 'raid', 'ecu', 'billing commences', 'nat instance', 'nat instances',
            'elastic map reduce', 'aws sms', 'server migration service', 'snowmobile',
            'cloudwatch logs agent', 'kinesis data analytics', 'classic load balancer']

# 3) Community answers that are wrong on technical grounds: {Ditectrev number: (new answer, reason)}.
ANSWER_FIX = {
    645: ([1], 'Nguồn đánh dấu D. S3 File Gateway giữ cache cục bộ nên file mới vẫn truy cập độ trễ thấp, '
               'còn S3 Lifecycle xử lý file cũ; cài tiện ích trên từng máy (D) không đáp ứng yêu cầu độ trễ thấp.'),
    313: ([0], 'Nguồn đánh dấu D. VPC peering không có tính bắc cầu (non-transitive): Dev và Prod cùng peer với Test '
               'nhưng không tự thông với nhau, nên phải tạo peering Dev–Prod và thêm route ở cả hai phía.'),
    596: ([2], 'Nguồn đánh dấu A. RDS tạo bên trong môi trường Elastic Beanstalk sẽ bị xoá cùng môi trường và gắn chặt vòng đời với app; '
               'nên tạo RDS riêng, truyền DNS name qua biến môi trường và cho phép theo security group của client (C).'),
    # rà soát lại toàn bộ câu tình huống (2026-10-31)
    38: ([2], "Nguồn đánh dấu A. Read Replica giảm tải batch khỏi DB giao dịch, còn SNS có thể đẩy thông báo HTTP/email tới hệ thống on-premises mà không cần sửa hệ thống đó; thay RDS bằng Redshift là sai vì Redshift không dùng cho OLTP và SQS đòi hỏi hệ thống on-prem phải tự poll (phải sửa code)."),
    87: ([1], "Nguồn đánh dấu A. Default route đã trỏ tới Internet Gateway, nên phía Direct Connect chỉ được quảng bá các route cụ thể của mạng on-premises qua BGP; quảng bá thêm một default route qua BGP sẽ xung đột với default route tới IGW."),
    107: ([1, 3], "Nguồn đánh dấu 3,4. Consolidated Billing (nay là AWS Organizations) cho phép giám sát chi phí, còn IAM cross-account role cho admin IT tập đoàn vào từng tài khoản con giúp quản trị mà các division vẫn tự chủ; ghi log vào bucket riêng của từng tài khoản con không giúp IT tập đoàn giám sát."),
    139: ([1], "Nguồn đánh dấu A. DynamoDB với GSI thưa (sparse) trên thuộc tính 'IsActive' chỉ chứa các cuộc gọi đang hoạt động, truy vấn hiệu quả, chịu được đỉnh 1000 calls/s và tiết kiệm chi phí; RDS Multi-AZ phải được cấp sẵn tài nguyên cho mức đỉnh nên tốn kém hơn."),
    152: ([3], "Nguồn đánh dấu C. Bastion host phải nằm trong public subnet (có IP public) và chỉ cho phép RDP từ IP public của công ty; đặt bastion trong private subnet thì không thể truy cập từ Internet nên đáp án C sai."),
    208: ([3], "Nguồn đánh dấu 2. Theo đáp án gốc, giải pháp IDS/IPS mở rộng tới hàng nghìn instance là cài agent trên mỗi host gửi traffic đến nền tảng IDS/IPS; phương án 2 là đoạn văn bị cắt ra từ phương án 0 (định tuyến mọi traffic qua một nền tảng không mở rộng được)."),
    268: ([0], "Nguồn đánh dấu D. S3 cho phép nhiều host song song cùng truy cập dữ liệu vào/ra với độ bền và độ sẵn sàng cao, SQS phân phối việc, còn Auto Scaling co giãn theo độ dài hàng đợi; một volume EBS PIOPS chỉ gắn vào một instance (trong một AZ) nên không dùng chung được cho cả nhóm host."),
    340: ([2], "Nguồn đánh dấu D. Geolocation routing đưa người dùng châu Âu tới eu-west-1 và người dùng Mỹ tới us-east-1, tạo trải nghiệm tương đương; weighted routing chia traffic theo tỉ lệ ngẫu nhiên nên người dùng có thể bị đưa sang region xa."),
    348: ([1, 3, 5], "Nguồn đánh dấu A, B, D. Các instance trải trên nhiều AZ nên không dùng được cluster placement group (vốn chỉ nằm trong một AZ); muốn hiệu năng mạng tốt nhất thì cần Enhanced Networking, và tính năng này đòi hỏi AMI HVM cùng chạy trong Amazon VPC."),
    357: ([3], "Nguồn đánh dấu S3. DynamoDB là kho dữ liệu dùng chung, bền vững và có độ trễ thấp (mili giây), là lựa chọn chuẩn để lưu session/user state cho Auto Scaling; S3 có độ trễ cao hơn và không phù hợp cho dữ liệu trạng thái cập nhật liên tục."),
    414: ([2], "Nguồn đánh dấu D. Cách chuẩn để cho người dùng on-prem đăng nhập Console mà không tạo IAM user là dùng IdP tương thích SAML 2.0 cấp quyền federated qua endpoint đăng nhập SAML (SSO) của AWS; tự lấy temporary credentials rồi dựng URL đăng nhập là cách custom broker, không phải đáp án chuẩn."),
    443: ([3], "Nguồn đánh dấu 'CNAME record aliased'. Zone apex không được phép dùng bản ghi CNAME; phải tạo bản ghi A dạng Alias trỏ tới DNS name của load balancer."),
    559: ([3], "Nguồn đánh dấu 2. Kiến trúc SQS + CloudWatch alarm + Auto Scaling dùng để tự điều chỉnh số EC2 theo số job trong hàng đợi, tối ưu chi phí; nó không dùng để trao đổi message giữa các instance trong cùng batch."),
    574: ([1], "Nguồn đánh dấu C. 'Tận dụng security controls hiện có' nghĩa là dùng AD on-premises: cần kết nối VPN, AWS Directory Service (AD Connector) và Amazon WorkSpaces; IAM không dùng để xác thực người dùng WorkSpaces."),
    585: ([2], "Nguồn đánh dấu 0. Từ 2018, S3 tự hỗ trợ ít nhất 3.500 PUT/s mỗi prefix nên 150 PUT/s không cần xử lý gì thêm; multipart upload chỉ dành cho object lớn, không liên quan tốc độ request."),
    587: ([0], "Nguồn đánh dấu D. Gateway-Cached volume lưu toàn bộ dữ liệu trên S3 (giải quyết thiếu dung lượng local), cache dữ liệu truy cập thường xuyên để có độ trễ thấp và trình bày như một volume logic, kèm snapshot làm backup off-site; VTL là giao diện băng từ, không phải volume truy cập trực tiếp."),
    620: ([2], "Nguồn đánh dấu 0. Tài liệu RDS ghi rằng public key (chứng chỉ CA) được lưu tại URL công khai đó để client xác thực; private key không bao giờ được công bố."),
    641: ([2], "Nguồn đánh dấu 0. Đáp án chuẩn: app gửi vị trí qua SQS, EC2 lấy ưu đãi từ DynamoDB và dùng AWS Mobile Push (SNS) để gửi thông báo — tiết kiệm và mở rộng tốt; tự viết EC2 giao tiếp với nhà mạng/nhà cung cấp thiết bị là không cần thiết."),
    679: ([1], "Nguồn đánh dấu 0. Dashboard QuickSight được chia sẻ cho user và group của QuickSight để phân quyền đầy đủ/hạn chế; QuickSight không chia sẻ dashboard trực tiếp cho IAM role."),
    709: ([0], "Nguồn đánh dấu B. Bật EBS encryption by default (thuộc tính account EC2 theo region) khiến mọi volume mới được mã hóa và không thể tạo volume không mã hóa; AWS Config rule encrypted-volumes chỉ phát hiện, không ngăn chặn."),
}

# 3b) Câu lỗi thời / hỏng không bắt được bằng từ khoá: {Ditectrev number}.
DROP = {
    54,  # Hiện nay có thể restore snapshot chưa mã hóa thành volume EBS đã mã hóa, nên cả đáp án 'tạo volume mới mã hóa rồi chép dữ liệu' và 'snapshot rồi restore sang volume mã hóa' đều đúng trong khi đề chỉ chọn một.
    118,  # Đề bài (Direct Connect) không khớp với các đáp án (cô lập instance bằng hypervisor), và thông tin Xen đã lỗi thời (EC2 hiện chủ yếu dùng Nitro).
    188,  # Lỗi thời: Direct Connect hiện có dedicated 1/10/100/400 Gbps và hosted từ 50 Mbps đến 25 Gbps (gồm 100 Mbps, 500 Mbps), nên nhiều đáp án cùng đúng một phần.
    207,  # Câu hỏi dựa trên CloudHSM Classic (đã ngừng), vốn yêu cầu security group mở cổng 22/3389. CloudHSM hiện tại dùng security group của cluster với các cổng 2223-2225, nên không còn đáp án nào đúng.
    288,  # Lỗi thời: VPC peering liên Region đã được hỗ trợ từ 2017 và có thể bật phân giải DNS private qua peering, nên có nhiều phát biểu sai cùng lúc.
    372,  # Câu hỏi dựa trên giới hạn cũ của placement group: hiện nay spread/partition placement group có thể trải nhiều AZ, và có thể chuyển instance (đã stop) vào placement group, nên không còn một đáp án 'sai' duy nhất.
    384,  # Câu hỏi về CloudHSM Classic (Luna SA, Luna Backup HSM) – dịch vụ này đã ngừng; CloudHSM hiện tại không dùng thiết bị Luna.
    396,  # Lỗi thời: hạn mức mặc định số Auto Scaling group hiện là 500 mỗi Region, không phải 20.
    417,  # Lỗi thời: EC2-Classic đã bị khai tử hoàn toàn (2023), đáp án dựa trên EIP thuộc EC2-Classic không còn áp dụng.
    457,  # Route 53 hiện đã hỗ trợ DNSSEC (cả domain registration và DNSSEC signing từ 2020), nên không còn phương án nào là 'câu trả lời sai'.
    519,  # VPC Wizard cũ với 4 cấu hình (Public only, Public+Private, có Hardware VPN...) đã bị thay bằng giao diện 'VPC and more'; câu hỏi phụ thuộc giao diện console đã lỗi thời.
    534,  # Đáp án bị cắt cụt ('Amazon EB') và không phương án nào đúng hoàn toàn theo hiện tại (EBS, CloudWatch, ElastiCache, Direct Connect không hỗ trợ resource-based policy).
    611,  # Đã lỗi thời: từ năm 2017 có thể gắn (attach) IAM role trực tiếp vào instance EC2 đang chạy, nên không còn bắt buộc phải tạo image rồi launch instance mới như đáp án.
}

def blob(q): return (q['q'] + ' ' + ' '.join(q['o'])).lower()
def has(term, text): return re.search(r'(?<![a-z0-9])' + re.escape(term) + r'(?![a-z0-9])', text)
def hasp(term, text): return re.search(r'(?<![a-z0-9])' + re.escape(term), text)   # prefix match

# Câu dạng tình huống: đủ dài hoặc mô tả bối cảnh công ty/ứng dụng, và có >= 4 đáp án.
def scenario(q):
    s = q['q'].lower()
    return len(q['o']) >= 4 and (len(s) >= 250 or bool(re.search(r'\b(company|organization|application|solutions architect)\b', s)) and len(s) >= 150)

removed = {'duplicate': [], 'outdated': [], 'trivia': []}
pool = []
for i, q in enumerate(raw):
    item = {'id': f'D{i+1:03d}', 'src': 'ditectrev', 'q': q['q'], 'o': q['options'],
            'a': q['answer'], **({'img': q['img']} if q['img'] else {})}
    if i in DUP_DROP: removed['duplicate'].append(i); continue
    hit = [t for t in OUTDATED if has(t, blob(item))] + (['DROP'] if i + 1 in DROP else [])
    if hit: removed['outdated'].append((i, hit)); continue
    if not scenario(item): removed['trivia'].append(i); continue
    if i + 1 in ANSWER_FIX:
        item['a'], item['fix'] = ANSWER_FIX[i + 1]
    pool.append(item)

off = [{'id': f'A{k+1:02d}', 'src': 'aws', 'q': q['q'], 'o': q['options'], 'a': q['answer'], 'exp': q['exp']}
       for k, q in enumerate(official)]
own = [{'id': f'C{k+1:02d}', 'src': 'authored', 'q': q['q'], 'o': q['options'], 'a': q['answer'], 'exp': q['exp'],
        'd': q['d'], 'l': q['l']} for k, q in enumerate(authored)]

# 4) Re-check whole pool (incl. official) for near-duplicates.
def norm(s): return re.sub(r'[^a-z0-9 ]', '', re.sub(r'\s+', ' ', s.lower())).strip()
allq = off + own + pool
dups = []
for i in range(len(allq)):
    for j in range(i + 1, len(allq)):
        a, b = norm(allq[i]['q']), norm(allq[j]['q'])
        if a == b or SequenceMatcher(None, a, b).quick_ratio() > 0.9 and SequenceMatcher(None, a, b).ratio() > 0.9:
            if set(map(norm, allq[i]['o'])) == set(map(norm, allq[j]['o'])) or a == b:
                dups.append((allq[i]['id'], allq[j]['id']))
drop_ids = {b for _, b in dups}
pool = [q for q in pool if q['id'] not in drop_ids]

# 5) Tag lesson (bài 1..45) and domain (D1..D4).
LESSONS = {
    1: ['availability zone', 'edge location', 'local zone', 'wavelength', 'outposts'],
    2: ['well-architected'],
    3: ['shared responsibility', 'root user', 'mfa', 'multi-factor'],
    4: ['iam user', 'iam group', 'iam role', 'iam polic', 'instance profile', 'least privilege', 'access key'],
    5: ['sts', 'assumerole', 'assume role', 'permissions boundar', 'federat', 'saml', 'cross-account', 'web identity'],
    6: ['organizations', 'scp', 'service control polic', 'control tower', 'identity center', 'single sign-on', 'resource access manager'],
    7: ['cognito', 'directory service', 'active directory', 'ad connector'],
    8: ['ami', 'user data', 'instance type', 'hibernat', 'graviton', 'gpu'],
    9: ['reserved instance', 'savings plan', 'spot', 'on-demand', 'dedicated host', 'dedicated instance', 'capacity reservation'],
    10: ['placement group', 'elastic ip', 'eni', 'elastic network interface', 'enhanced networking', 'elastic fabric'],
    11: ['ebs', 'instance store', 'gp3', 'gp2', 'io1', 'io2', 'provisioned iops', 'snapshot'],
    12: ['application load balancer', 'network load balancer', 'gateway load balancer', 'alb', 'nlb', 'load balancer', 'elb', 'sticky session'],
    13: ['auto scaling', 'scaling polic', 'target tracking', 'launch template', 'scheduled scaling', 'predictive scaling'],
    14: ['s3 standard', 'intelligent-tiering', 'one zone-ia', 'standard-ia', 'glacier', 'versioning', 'deep archive'],
    15: ['lifecycle', 's3 replication', 'cross-region replication', 'transfer acceleration', 'multipart', 'event notification', 's3 select'],
    16: ['bucket polic', 'presigned', 'pre-signed', 'object lock', 'sse-s3', 'sse-kms', 'sse-c', 'block public access', 'origin access'],
    17: ['efs', 'elastic file system', 'fsx', 'lustre', 'ontap', 'openzfs'],
    18: ['storage gateway', 'file gateway', 'volume gateway', 'tape gateway', 'datasync', 'snowball', 'snowcone', 'transfer family', 'sftp'],
    19: ['aws backup', 'backup plan', 'backup vault'],
    20: ['subnet', 'cidr', 'internet gateway', 'nat gateway', 'route table', 'egress-only'],
    21: ['network acl', 'nacl', 'security group', 'flow logs', 'network firewall'],
    22: ['vpc peering', 'peering connection', 'vpc endpoint', 'gateway endpoint', 'interface endpoint', 'privatelink', 'transit gateway'],
    23: ['vpn', 'direct connect', 'customer gateway', 'virtual private gateway'],
    24: ['route 53', 'dns', 'failover routing', 'latency-based', 'geolocation', 'weighted', 'alias record', 'health check'],
    25: ['cloudfront', 'global accelerator', 'lambda@edge'],
    26: ['rds', 'read replica', 'multi-az', 'rds proxy'],
    27: ['aurora'],
    28: ['dynamodb', 'dax'],
    29: ['elasticache', 'redis', 'memcached', 'neptune', 'documentdb', 'keyspaces', 'timestream', 'memorydb'],
    30: ['sqs', 'sns', 'queue', 'fifo', 'dead-letter'],
    31: ['eventbridge', 'cloudwatch events', 'step functions', 'amazon mq', 'activemq', 'rabbitmq'],
    32: ['lambda'],
    33: ['api gateway', 'rest api', 'websocket', 'appsync'],
    34: ['ecs', 'eks', 'fargate', 'ecr', 'container', 'kubernetes', 'docker'],
    35: ['kinesis', 'firehose', 'msk', 'kafka', 'clickstream'],
    36: ['athena', 'glue', 'lake formation', 'redshift', 'emr', 'opensearch', 'elasticsearch', 'quicksight'],
    37: ['sagemaker', 'rekognition', 'comprehend', 'transcribe', 'translate', 'polly', 'textract', 'lex', 'kendra', 'personalize', 'bedrock'],
    38: ['kms', 'cloudhsm', 'secrets manager', 'parameter store', 'acm', 'certificate manager', 'customer managed key'],
    39: ['waf', 'shield', 'firewall manager', 'guardduty', 'inspector', 'macie', 'security hub', 'ddos', 'sql injection'],
    40: ['cloudwatch', 'cloudtrail', 'aws config', 'config rule', 'conformance pack'],
    41: ['cloudformation', 'elastic beanstalk', 'systems manager', 'session manager', 'cdk', 'service catalog'],
    42: ['disaster recovery', 'rpo', 'rto', 'pilot light', 'warm standby', 'backup and restore'],
    43: ['migrat', 'dms', 'database migration service', 'schema conversion', 'application migration service', 'application discovery'],
    44: ['cost explorer', 'aws budgets', 'cost and usage report', 'compute optimizer', 'trusted advisor', 'cost allocation tag'],
}
# Domain theo syllabus.js (bài -> domains), dùng làm phiếu phụ khi câu hỏi không nói rõ yêu cầu.
LESSON_DOM = {int(m.group(1)): re.findall(r'D\d', m.group(2))
              for m in re.finditer(r'\{\s*id:\s*(\d+),\s*module:[^{}]*?domains:\s*\[([^\]]*)\]', syllabus)}
assert len(LESSON_DOM) == 45, len(LESSON_DOM)
DOM_KW = {
    'D1': ['secure', 'security', 'encrypt', 'compliance', 'unauthorized', 'least privilege', 'permission', 'access control',
           'restrict', 'audit', 'attack', 'credential', 'protect', 'sensitive', 'private', 'authenticat', 'authoriz'],
    'D2': ['highly available', 'high availability', 'fault toleran', 'fault-toleran', 'resilien', 'disaster', 'failover',
           'decouple', 'loosely coupled', 'durab', 'outage', 'rpo', 'rto', 'data loss', 'availability', 'reliab', 'fail'],
    'D3': ['performance', 'latency', 'throughput', 'iops', 'scal', 'real time', 'real-time', 'millisecond', 'fast', 'quickly'],
    'D4': ['cost-effective', 'cost effective', 'least expensive', 'lowest cost', 'minimize cost', 'reduce cost', 'cost',
           'cheapest', 'budget', 'saving'],
}

def lesson_of(q):
    stem, full = q['q'].lower(), blob(q)
    # đề bài quyết định chủ đề; đáp án (có cả phương án nhiễu) chỉ để phá hoà
    sc = {l: 10 * sum(1 for k in ks if hasp(k, stem)) + sum(1 for k in ks if hasp(k, full)) for l, ks in LESSONS.items()}
    best = max(sc, key=sc.get)
    return best if sc[best] else 45

def domain_scores(q):
    stem = q['q'].lower()
    ask = ' '.join(re.split(r'(?<=[.?])\s+', stem)[-2:])   # câu yêu cầu thường nằm cuối đề
    sc = {d: sum(1 for k in ks if hasp(k, stem)) + 3 * sum(1 for k in ks if hasp(k, ask)) for d, ks in DOM_KW.items()}
    for d in LESSON_DOM[q['l']]: sc[d] += 1
    return sc

for q in off + pool:
    q['l'] = lesson_of(q)
for q in own:
    q['_sc'] = {d: (100 if d == q['d'] else 0) for d in QUOTA}   # câu tự soạn: domain đã gán tay
for q in off + pool:
    q['_sc'] = domain_scores(q)

# 6) Chọn số đề và gán domain sao cho mỗi domain đủ chỉ tiêu (câu chuyển domain là câu có điểm domain thấp nhất).
total = len(off) + len(own) + len(pool)
N_EXAMS = total // PER_EXAM
need = {d: QUOTA[d] * N_EXAMS for d in QUOTA}
for q in off + own + pool:
    q['d'] = max(q['_sc'], key=lambda d: (q['_sc'][d], -list(QUOTA).index(d)))
for _ in range(total):
    cnt = {d: sum(q['d'] == d for q in off + own + pool) for d in QUOTA}
    over = [d for d in QUOTA if cnt[d] > need[d]]
    under = [d for d in QUOTA if cnt[d] < need[d]]
    if not over or not under: break
    # chuyển câu "lệch ít nhất" từ domain thừa sang domain thiếu
    cand = [(q['_sc'][q['d']] - q['_sc'][u], k, q, u) for k, q in enumerate(pool + off) if q['d'] in over for u in under]
    _, _, q, u = min(cand, key=lambda c: (c[0], c[1]))
    q['d'] = u

# 7) Chia đề: câu AWS chính thức rải đều; trong mỗi domain sắp theo bài học rồi chia vòng để mỗi đề phủ nhiều bài.
rng = random.Random(2026)
exams = [[] for _ in range(N_EXAMS)]
rng.shuffle(off)
for k, q in enumerate(off): exams[k % N_EXAMS].append(q)
leftover = []
for d in QUOTA:
    items = [q for q in own + pool if q['d'] == d]
    rng.shuffle(items)
    items.sort(key=lambda q: q['src'] != 'authored')   # ưu tiên câu tự soạn (bù bài yếu)
    # xen kẽ theo bài: lấy lần lượt 1 câu của mỗi bài -> câu bị thừa (leftover) rơi vào các bài đang có nhiều câu
    by_l = {}
    for q in items: by_l.setdefault(q['l'], []).append(q)
    items = [g[r] for r in range(max(map(len, by_l.values()), default=0)) for g in by_l.values() if r < len(g)]
    k = 0
    for q in items:
        for _ in range(N_EXAMS):
            e = exams[k % N_EXAMS]; k += 1
            if sum(x['d'] == d for x in e) < QUOTA[d]:
                e.append(q); break
        else:
            leftover.append(q)
for e in exams:
    rng.shuffle(e)
for q in off + own + pool:
    q.pop('_sc', None)

# 8) Verify: no question repeated across or within exams; quota per domain respected.
seen = {}
for n, e in enumerate(exams):
    assert len(e) == PER_EXAM, (n, len(e))
    for d in QUOTA: assert sum(q['d'] == d for q in e) == QUOTA[d], (n, d)
    for q in e:
        key = norm(q['q']) + '|' + '|'.join(sorted(map(norm, q['o'])))
        assert key not in seen, (q['id'], seen.get(key))
        seen[key] = (n, q['id'])

meta = {
    'generated': '2026-10-31',
    'perExam': PER_EXAM, 'minutes': 130, 'passPct': 72, 'quota': QUOTA,
    'stats': {'raw': len(raw), 'official': len(off), 'authored': len(own),
              'dupRemoved': len(removed['duplicate']) + len(drop_ids),
              'outdatedRemoved': len(removed['outdated']), 'triviaRemoved': len(removed['trivia']),
              'answerFixed': len(ANSWER_FIX), 'exams': N_EXAMS, 'used': N_EXAMS * PER_EXAM,
              'leftover': len(leftover)},
}
with open(sys.argv[5], 'w', encoding='utf-8') as f:
    f.write('/* Generated by build.py — đừng sửa tay. */\n')
    f.write('window.EXAM_META = ' + json.dumps(meta, ensure_ascii=False) + ';\n')
    f.write('window.EXAMS = ' + json.dumps(exams, ensure_ascii=False, separators=(',', ':')) + ';\n')

print(json.dumps(meta['stats']))
print('extra near-dups dropped:', dups)
print('outdated sample:', removed['outdated'][:8])
used = [q for e in exams for q in e]
print('lessons covered:', len({q['l'] for q in used}), '/ 45; per lesson:',
      {l: sum(q['l'] == l for q in used) for l in range(1, 46)})
print('per-exam lessons covered:', [len({q['l'] for q in e}) for e in exams])
