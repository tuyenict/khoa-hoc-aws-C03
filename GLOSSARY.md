# Bảng thuật ngữ dùng chung (AWS SAA-C03)

Lệnh `/aws-bai` tra bảng này để dịch nhất quán và tự thêm thuật ngữ mới vào cuối.

| English term | Nghĩa tiếng Việt | Ghi chú |
|---|---|---|
| Region | Vùng địa lý | Khu vực địa lý chứa nhiều AZ |
| Availability Zone (AZ) | Vùng sẵn sàng | 1+ data center tách biệt trong Region |
| Edge Location | Vị trí biên | Điểm hiện diện của CloudFront/Route 53 |
| High availability | Tính sẵn sàng cao | |
| Fault tolerance | Khả năng chịu lỗi | |
| Durability | Độ bền dữ liệu | |
| Scalability | Khả năng mở rộng | |
| Elasticity | Tính co giãn | |
| Latency | Độ trễ | |
| Throughput | Thông lượng | |
| Decouple | Tách rời (giảm phụ thuộc) | |
| Serverless | Không máy chủ | Không quản lý server |
| Managed service | Dịch vụ được quản lý | AWS lo vận hành |
| Operational overhead | Gánh nặng vận hành | “least operational overhead” |
| Cost-effective | Tiết kiệm chi phí | |
| Least privilege | Đặc quyền tối thiểu | |
| Encryption at rest | Mã hóa khi lưu trữ | |
| Encryption in transit | Mã hóa khi truyền | |
| Disaster recovery (DR) | Khôi phục sau thảm họa | |
| Recovery Point Objective (RPO) | Mục tiêu điểm khôi phục | Lượng dữ liệu tối đa chấp nhận mất |
| Recovery Time Objective (RTO) | Mục tiêu thời gian khôi phục | Thời gian tối đa để khôi phục |
| AZ ID | Mã định danh AZ | vd use1-az1; cùng vị trí vật lý ở mọi tài khoản |
| Opt-in Region | Region phải bật thủ công | Region ra mắt sau 20/3/2019 |
| Partition | Phân vùng | aws, AWS GovCloud (US), AWS China |
| Point of Presence (POP) | Điểm hiện diện | Đồng nghĩa Edge Location của CloudFront |
| Regional Edge Cache | Bộ đệm biên khu vực | Tầng cache giữa POP và origin |
| Origin | Nguồn gốc nội dung | S3/ALB/HTTP server phía sau CloudFront |
| Local Zone | Vùng cục bộ | Mở rộng Region tới gần thành phố lớn |
| Wavelength Zone | Vùng Wavelength | Zone trong mạng 5G của nhà mạng |
| Carrier gateway | Cổng nhà mạng | Traffic vào/ra Wavelength subnet |
| AWS Outposts | Hạ tầng AWS tại chỗ | Rack/server AWS tại site khách hàng |
| Network border group | Nhóm biên mạng | Tập zone AWS quảng bá IP |
| Fault isolation boundary | Ranh giới cô lập lỗi | Zonal / Regional / Global |
| Control plane | Mặt phẳng điều khiển | Tạo/sửa/xóa tài nguyên |
| Data plane | Mặt phẳng dữ liệu | Xử lý traffic thực tế |
| Data residency | Nơi lưu trú dữ liệu | Dữ liệu phải ở quốc gia/vị trí nhất định |
| Synchronous replication | Sao chép đồng bộ | |
| Regional endpoint | Điểm cuối theo vùng | |
| Multiple choice | Câu hỏi một lựa chọn | 1 đúng / 3 sai |
| Multiple response | Câu hỏi nhiều lựa chọn | ≥2 đúng trong ≥5 phương án |
| Distractor | Phương án gây nhiễu | |
| Scaled score | Điểm quy đổi | 100–1.000, đậu 720 |
| Compensatory scoring | Chấm điểm bù trừ | Không cần đậu từng domain |
| Well-Architected Framework | Khung kiến trúc tối ưu | 6 pillars + design principles + câu hỏi review |
| Pillar | Trụ cột | OE, Security, Reliability, Performance, Cost, Sustainability |
| Design principle | Nguyên tắc thiết kế | |
| Best practice area | Nhóm thực hành tốt nhất | |
| Component | Thành phần | Code + cấu hình + tài nguyên đáp ứng 1 yêu cầu |
| Workload | Khối lượng công việc / hệ thống nghiệp vụ | Tập component tạo giá trị kinh doanh |
| Technology portfolio | Danh mục công nghệ | Tập workload của doanh nghiệp |
| Milestone | Cột mốc | WA Tool: ảnh chụp trạng thái workload |
| Level of effort | Mức độ nỗ lực | High / Medium / Low |
| Trade-off | Sự đánh đổi | |
| Game day | Buổi diễn tập sự cố | |
| Observability | Khả năng quan sát | Metrics, logs, traces |
| Guardrails | Rào chắn an toàn | |
| Blast radius | Phạm vi ảnh hưởng khi có lỗi | |
| Separation of duties | Phân tách nhiệm vụ | |
| Defense in depth | Phòng thủ nhiều lớp | |
| Long-term static credentials | Thông tin xác thực tĩnh dài hạn | Access key IAM user |
| Resource saturation | Bão hòa tài nguyên | |
| Single point of failure (SPOF) | Điểm lỗi đơn lẻ | |
| Mechanical sympathy | Thấu hiểu cơ chế máy móc | Chọn công nghệ theo access pattern |
| Cloud Financial Management (CFM) | Quản lý tài chính đám mây | |
| Undifferentiated heavy lifting | Việc nặng nhọc không tạo khác biệt | |
| Over-provisioning | Cấp phát dư thừa | |
| Right-sizing | Chọn đúng kích cỡ | |
| One-way door / Two-way door | Quyết định một chiều / hai chiều | Khó / dễ đảo ngược |
| Root Cause Analysis (RCA) | Phân tích nguyên nhân gốc rễ | |
| Lens | Lăng kính / bộ câu hỏi chuyên biệt | Lens Catalog, Custom lens |
| High risk issue (HRI) / Medium risk issue (MRI) | Vấn đề rủi ro cao / trung bình | WA Tool |
| Improvement plan | Kế hoạch cải thiện | |
| Principal engineer | Kỹ sư chính | |
| Blame-free | Không đổ lỗi | Tinh thần review |
| Best practice | Thực hành tốt nhất | |
| Remediation | Biện pháp khắc phục | |
| Shared Responsibility Model | Mô hình trách nhiệm chia sẻ | AWS: OF the cloud; khách hàng: IN the cloud |
| Security OF the cloud | Bảo mật của đám mây | Phần AWS chịu trách nhiệm (hạ tầng) |
| Security IN the cloud | Bảo mật trong đám mây | Phần khách hàng, tùy dịch vụ chọn |
| Infrastructure as a Service (IaaS) | Hạ tầng như một dịch vụ | vd EC2 |
| Abstracted service | Dịch vụ được trừu tượng hóa | vd S3, DynamoDB |
| Guest operating system | Hệ điều hành khách | OS trong EC2, khách hàng vá |
| Inherited Controls | Control được kế thừa | Physical & environmental |
| Shared Controls | Control dùng chung | Patch, configuration, awareness & training |
| Customer Specific Controls | Control riêng của khách hàng | vd zone security |
| AWS account root user | Người dùng gốc của tài khoản | Email + mật khẩu tạo account, toàn quyền |
| Multi-factor authentication (MFA) | Xác thực đa yếu tố | Tối đa 8 thiết bị/identity |
| Passkey / Security key (FIDO) | Khóa truy cập / khóa bảo mật | MFA chống phishing |
| TOTP | Mật khẩu dùng một lần theo thời gian | Virtual MFA app, hardware token |
| Phishing-resistant MFA | MFA chống lừa đảo | |
| Temporary credentials | Thông tin xác thực tạm thời | IAM role / STS |
| Account recovery mechanisms | Cơ chế khôi phục tài khoản | Email + số điện thoại root |
| Multi-person approval | Phê duyệt nhiều người | |
| Management account / Member account | Tài khoản quản lý / Tài khoản thành viên | AWS Organizations |
| Centralized root access | Quản lý root tập trung | Xóa root credentials ở member accounts |
| Privileged task (sts:AssumeRoot) | Tác vụ đặc quyền | Phiên root ngắn hạn trên member account |
| Delegated administrator | Quản trị viên được ủy quyền | |
| MFA Delete | Xóa có MFA | S3; chỉ root bật được |
| Support plan | Gói hỗ trợ | Basic, Business Support+, Enterprise, Unified Operations |
| Technical Account Manager (TAM) | Quản lý tài khoản kỹ thuật | Enterprise trở lên |
| Case severity | Mức độ nghiêm trọng của case | |
| Infrastructure Event Management (IEM) | Quản lý sự kiện hạ tầng | |
| Concierge Support | Hỗ trợ tận tình về billing/account | |
| AWS Identity and Access Management (IAM) | Dịch vụ quản lý định danh và truy cập | Global, miễn phí, eventually consistent |
| Authentication | Xác thực | Chứng minh là ai |
| Authorization | Phân quyền | Được phép làm gì |
| Principal | Chủ thể thực hiện request | Root, IAM user, role, federated, service |
| Service principal | Chủ thể dịch vụ | vd ec2.amazonaws.com |
| IAM identity / IAM entity | Định danh / Thực thể IAM | Entity = user + role (xác thực được) |
| IAM user | Người dùng IAM | Long-term credentials |
| IAM user group | Nhóm người dùng IAM | Không lồng nhau, không làm Principal |
| IAM role | Vai trò IAM | Assume để nhận temporary credentials |
| Role session | Phiên làm việc của vai trò | 15 phút–12 giờ, mặc định 1 giờ |
| Trust policy | Chính sách tin cậy | Ai được assume role |
| Permissions policy | Chính sách quyền | Role/user được làm gì |
| AWS service role | Vai trò dịch vụ | Dịch vụ assume thay bạn |
| Service-linked role | Vai trò liên kết dịch vụ | Dịch vụ sở hữu, không sửa quyền |
| Instance profile | Hồ sơ instance | Gắn role vào EC2 |
| Delegation | Ủy quyền | Trusting account ↔ trusted account |
| External ID | Mã định danh bên ngoài | Chống confused deputy khi cho bên thứ ba |
| Confused deputy problem | Vấn đề “người ủy nhiệm bị lừa” | |
| Role chaining | Chuỗi vai trò | Session tối đa 1 giờ |
| Identity federation | Liên kết định danh | SAML 2.0, OIDC |
| Identity provider (IdP) | Nhà cung cấp định danh | AD, Okta, Entra ID |
| Service account | Tài khoản dịch vụ | IAM user đại diện ứng dụng |
| Identity-based policy | Chính sách gắn vào định danh | Managed / inline |
| Resource-based policy | Chính sách gắn vào tài nguyên | Có Principal, luôn inline |
| Resource-level permission | Quyền cấp tài nguyên | Chỉ định ARN trong Resource |
| AWS managed policy | Chính sách do AWS quản lý | Không sửa được |
| Customer managed policy | Chính sách do khách hàng quản lý | Tối đa 5 versions |
| Inline policy | Chính sách nhúng | 1-1 với identity |
| Job function policy | Chính sách theo chức năng công việc | AdministratorAccess, PowerUserAccess |
| Access level | Mức truy cập | List, Read, Write, Permissions management, Tagging |
| Implicit deny / Explicit deny | Từ chối ngầm định / tường minh | Explicit Deny luôn thắng |
| Cross-account access | Truy cập liên tài khoản | Cần Allow ở cả hai phía |
| Permissions boundary | Giới hạn quyền | Quyền tối đa, không cấp quyền |
| Session policy | Chính sách phiên | Giới hạn quyền của session |
| Access key | Khóa truy cập | Access key ID + secret; tối đa 2/user |
| Access key rotation | Xoay vòng khóa truy cập | |
| Password policy | Chính sách mật khẩu | |
| IAM Access Analyzer | Bộ phân tích quyền truy cập IAM | External/unused access, policy generation/validation |
| Last accessed information (Access Advisor) | Thông tin truy cập gần nhất | |
| Credential report | Báo cáo thông tin xác thực | CSV trạng thái credentials của IAM user |
| IAM Roles Anywhere | IAM Roles ở mọi nơi | Workload ngoài AWS dùng X.509 |
| Eventual consistency | Tính nhất quán cuối cùng | |
| Amazon Resource Name (ARN) | Tên tài nguyên Amazon | |
| Policy evaluation logic | Logic đánh giá chính sách | Deny → RCP → SCP → resource → identity → boundary → session |
| Request context | Ngữ cảnh của request | Action, resource, principal, môi trường |
| Enforcement code | Mã thực thi đánh giá quyền | Ra quyết định Allow/Deny cuối cùng |
| Effective permissions | Quyền hiệu lực | Kết quả sau khi kết hợp mọi policy |
| Union / Intersection (policy) | Hợp / Giao | Identity + resource = hợp; với boundary/SCP/session = giao |
| Service control policy (SCP) | Chính sách kiểm soát dịch vụ | Trần quyền cho principal trong account/OU |
| Resource control policy (RCP) | Chính sách kiểm soát tài nguyên | Trần quyền cho resource; mặc định RCPFullAWSAccess |
| Privilege escalation | Leo thang đặc quyền | Boundary + iam:PermissionsBoundary để ngăn |
| Session principal | Chủ thể phiên | Role session hoặc STS federated user session |
| Role session ARN | ARN phiên vai trò | arn:aws:sts::acct:assumed-role/role/session |
| AWS STS federated user principal | Chủ thể người dùng liên kết qua STS | Tạo bởi GetFederationToken |
| AWS Security Token Service (AWS STS) | Dịch vụ cấp token bảo mật | Global endpoint + Regional endpoints |
| Session token | Token phiên | Phần thứ ba của temporary credentials |
| GetSessionToken | API lấy token phiên | Hỗ trợ MFA, không hỗ trợ session policy; IAM user tối đa 36 giờ |
| GetFederationToken | API lấy token liên kết | Custom identity broker, SSO console |
| Trusted account / Trusting account | Tài khoản được tin cậy / Tài khoản tin cậy | Chứa principal / chứa resource |
| SAML 2.0 | Ngôn ngữ đánh dấu xác nhận bảo mật 2.0 | AssumeRoleWithSAML |
| SAML assertion | Xác nhận SAML | IdP ký, gửi cho STS |
| Service provider (SP) | Nhà cung cấp dịch vụ | AWS là SP đối với IdP |
| OpenID Connect (OIDC) | Chuẩn định danh OpenID Connect | AssumeRoleWithWebIdentity |
| JSON Web Token (JWT) | Token web JSON | Token OIDC; IAM cho lệch đồng hồ 5 phút |
| Custom identity broker | Bộ môi giới định danh tùy chỉnh | Gọi STS + federation endpoint |
| Amazon Cognito user pool / identity pool | Kho người dùng / Kho định danh Cognito | Sign-in / đổi token lấy IAM credentials |
| Zone of trust | Vùng tin cậy | Account hoặc organization của analyzer |
| Analyzer / Finding | Bộ phân tích / Phát hiện | IAM Access Analyzer |
| Unused access | Truy cập không dùng | Role, access key, password không dùng |
| Custom policy checks | Kiểm tra policy tùy chỉnh | Kiểm tra policy có cấp quyền mới không |
| Revoke active sessions | Thu hồi phiên đang hoạt động | Deny theo aws:TokenIssueTime |
| AWS Organizations | Dịch vụ quản lý nhiều tài khoản | Global, đặt tại us-east-1 |
| Multi-account environment | Môi trường nhiều tài khoản | Best practice khi mở rộng |
| Organization | Tổ chức | Tập account quản lý theo cây |
| Root (Organizations) | Gốc quản trị | 1 root/org; khác root user |
| Organizational unit (OU) | Đơn vị tổ chức | Tối đa 5 cấp dưới root, 2.000 OU |
| Feature set (All features / Consolidated billing) | Bộ tính năng | SCP cần All features |
| Consolidated billing | Thanh toán hợp nhất | 1 hóa đơn, chia sẻ volume discount/RI/SP, miễn phí |
| Payer account | Tài khoản thanh toán | Management account |
| Volume pricing discount | Giảm giá theo khối lượng | |
| Invitation / Handshake | Lời mời / Bắt tay | INVITE hết hạn 15 ngày |
| OrganizationAccountAccessRole | Role truy cập do Organizations tạo | Trong account tạo mới |
| FullAWSAccess | SCP cho phép tất cả (mặc định) | Gỡ không thay ⇒ chặn hết |
| Permission guardrail | Rào chắn quyền | SCP/RCP không cấp quyền |
| Deny list / Allow list strategy | Chiến lược danh sách cấm / cho phép | SCP |
| Service last accessed data | Dữ liệu dịch vụ truy cập gần nhất | Tinh chỉnh SCP |
| Authorization policy / Declarative policy | Chính sách phân quyền / Chính sách khai báo | SCP, RCP / tag, backup… |
| Tag policy | Chính sách chuẩn hóa tag | |
| Backup policy | Chính sách sao lưu | AWS Backup toàn org |
| AI services opt-out policy | Chính sách từ chối thu thập dữ liệu AI | |
| Organization trail | Trail cấp tổ chức | Member không tắt/sửa được |
| Trusted access | Truy cập tin cậy | Dịch vụ tích hợp Organizations |
| AWS Control Tower | Dịch vụ dựng & quản trị môi trường đa tài khoản | Orchestrate Organizations, Service Catalog, Identity Center |
| Landing zone | Vùng hạ cánh | Môi trường multi-account well-architected |
| Control (Control Tower) | Rào chắn kiểm soát | Preventive / Detective / Proactive |
| Preventive / Detective / Proactive control | Control phòng ngừa / phát hiện / chủ động | SCP-RCP / Config rules / CloudFormation hooks |
| Mandatory / Strongly recommended / Elective | Bắt buộc / Rất khuyến nghị / Tùy chọn | Mức hướng dẫn của control |
| Account Factory | Nhà máy tạo tài khoản | “Vending machine” trên Service Catalog |
| Drift | Trôi lệch cấu hình | |
| Log Archive account / Audit account | Tài khoản lưu log / Tài khoản kiểm toán | Shared accounts trong Security OU |
| Home Region | Region chính | Nơi dựng landing zone |
| AWS IAM Identity Center | Đăng nhập một lần cho workforce | Tên cũ AWS Single Sign-On |
| Workforce user | Người dùng là nhân sự nội bộ | Khác end user ứng dụng (Cognito) |
| Organization instance / Account instance | Instance cấp tổ chức / cấp tài khoản | Chỉ organization instance quản lý AWS accounts |
| Identity source | Nguồn định danh | Identity Center directory / AD / external IdP; 1 nguồn/org |
| Permission set | Bộ quyền | Template tạo IAM role trong từng account; session 1–12 giờ |
| Account assignment | Gán truy cập tài khoản | User/group + permission set + account |
| AWS access portal | Cổng truy cập AWS | Mặc định 8 giờ, tối đa 90 ngày |
| SCIM | Giao thức đồng bộ định danh tự động | Provisioning từ IdP |
| Trusted identity propagation | Truyền định danh tin cậy | |
| AWS Resource Access Manager (AWS RAM) | Dịch vụ chia sẻ tài nguyên | Chia sẻ VPC subnet… |
| Amazon Cognito | Nền tảng định danh cho web & mobile app | User directory + auth server + cấp AWS credentials |
| CIAM (Customer identity and access management) | Quản lý định danh khách hàng | Đối lập workforce identity |
| Local user / Federated user | Người dùng cục bộ / Người dùng liên kết | Tạo trong user pool / qua IdP ngoài |
| ID token / Access token / Refresh token | Token định danh / Token truy cập / Token làm mới | Refresh mặc định 30 ngày (60 phút – 10 năm) |
| Refresh token rotation | Xoay vòng refresh token | Grace period ≤ 60 giây |
| Managed login (classic hosted UI) | Trang đăng nhập do AWS host | User pool |
| App client | Ứng dụng khách của user pool | Client secret, grant, thời hạn token |
| Feature plan (Lite / Essentials / Plus) | Gói tính năng của user pool | Mặc định Essentials; Plus có threat protection |
| Monthly active users (MAU) | Người dùng hoạt động hằng tháng | Cơ sở tính phí Cognito |
| Threat protection (advanced security features) | Bảo vệ trước mối đe dọa | Compromised credentials, adaptive authentication |
| Adaptive authentication | Xác thực thích ứng | Theo mức rủi ro đăng nhập |
| Passwordless sign-in | Đăng nhập không mật khẩu | OTP email/SMS, passkey |
| Lambda trigger (Cognito) | Hàm Lambda kích hoạt theo sự kiện user pool | Phải trả lời trong 5 giây |
| Migrate user trigger | Trigger di chuyển người dùng | Just-in-time migration, giữ mật khẩu |
| Pre token generation trigger | Trigger trước khi phát token | Thêm/sửa/ẩn claim |
| Custom authentication flow | Luồng xác thực tùy chỉnh | Define/Create/Verify auth challenge |
| Machine-to-machine (M2M) / Client credentials grant | Ủy quyền máy với máy | Chỉ cấp access token |
| Resource server / Custom scope | Máy chủ tài nguyên / Phạm vi tùy chỉnh | Access token của user pool |
| Cognito user pool authorizer | Bộ ủy quyền API Gateway dùng user pool | Xác minh JWT |
| authenticate-cognito / authenticate-oidc | Action xác thực của ALB | Chỉ HTTPS listener; cookie AWSELB |
| Authenticated / Unauthenticated (guest) identity | Định danh đã xác thực / Khách vãng lai | Identity pool |
| Developer-authenticated identities | Định danh do back-end nhà phát triển xác thực | Identity pool |
| Attributes for access control / Principal tag | Thuộc tính cho kiểm soát truy cập / Tag của principal | ABAC trong identity pool |
| Basic (classic) flow / Enhanced flow | Luồng cơ bản / Luồng nâng cao | Identity pool |
| AWS Directory Service | Dịch vụ thư mục | Microsoft AD trên AWS |
| Active Directory (AD) / Domain controller (DC) | Dịch vụ thư mục Microsoft / Máy chủ điều khiển miền | |
| LDAP / LDAPS | Giao thức truy cập thư mục hạng nhẹ / bản mã hóa | |
| AWS Managed Microsoft AD | AD thật do AWS vận hành | 2 DC ở 2 AZ; Standard ~30k / Enterprise ~500k objects |
| Trust relationship (external / forest) | Quan hệ tin cậy | One-way incoming/outgoing, two-way |
| Resource forest | Rừng tài nguyên | Định danh ở forest khác |
| Selective authentication | Xác thực có chọn lọc | Giới hạn tài khoản qua trust |
| Multi-Region replication (Managed AD) | Sao chép thư mục đa Region | Chỉ Enterprise Edition |
| Directory sharing | Chia sẻ thư mục | Managed AD cho account khác |
| Group Policy (GPO) | Chính sách nhóm | Windows AD |
| Seamless domain join | Gia nhập miền tự động | EC2 |
| AD Connector | Cổng proxy thư mục | Không cache; 1-1 domain; không chia sẻ |
| RADIUS | Giao thức xác thực từ xa | Tích hợp MFA Directory Service |
| Simple AD | Thư mục tương thích AD (Samba 4) | 500 / 5.000 user; không trust, không MFA |
| Instance type / Instance family / Instance size | Loại / Họ / Kích cỡ máy chủ | vd c7gn.xlarge = series c, gen 7, options gn, size xlarge |
| General purpose / Compute / Memory / Storage optimized | Đa dụng / Tối ưu tính toán / bộ nhớ / lưu trữ | M,T / C / R,X,U / I,D |
| Accelerated computing | Tăng tốc phần cứng | P, G, Inf, Trn, F |
| Bare metal | Máy chủ vật lý không qua hypervisor | Size `metal` |
| AWS Graviton / Trainium / Inferentia | Chip Arm của AWS / chip huấn luyện ML / chip suy luận ML | Chữ g / Trn / Inf |
| Nitro / Xen hypervisor | Trình ảo hóa thế hệ mới / cũ | |
| HVM / PV | Máy ảo phần cứng / Ảo hóa song song | Current generation chỉ HVM |
| Burstable performance instance | Máy chủ hiệu năng bùng nổ | Dòng T |
| CPU credit / Baseline utilization | Tín dụng CPU / Mức sử dụng nền | 1 credit = 1 vCPU × 100% × 1 phút |
| Standard mode / Unlimited mode | Chế độ tiêu chuẩn / không giới hạn | T2 mặc định standard; T3+ mặc định unlimited |
| Surplus credits / Launch credits | Credit vượt mức / Credit khởi động | Surplus tính phí; launch credits chỉ T2 standard |
| Amazon Machine Image (AMI) | Ảnh máy Amazon | Tài nguyên cấp Region |
| Block device mapping | Bản đồ thiết bị khối | Volume gắn vào instance khi launch |
| Launch permission | Quyền khởi chạy AMI | public / explicit / implicit |
| EBS-backed AMI / S3-backed (instance store-backed) AMI | AMI root EBS / AMI root instance store | S3-backed đã end of life, không stop được |
| Golden AMI | AMI chuẩn cài sẵn | Rút ngắn thời gian boot |
| Deprecate / Disable / Deregister (AMI) | Đánh dấu lỗi thời / Tạm vô hiệu / Hủy đăng ký | Snapshot không tự xóa |
| Recycle Bin | Thùng rác | Khôi phục AMI/snapshot theo retention rule |
| Block public access for AMIs | Chặn chia sẻ công khai AMI | Cấp account, từng Region; bật mặc định account mới |
| Verified provider | Nhà cung cấp đã xác minh | AMI công khai của Amazon/đối tác |
| EC2 Image Builder | Dịch vụ tự động dựng image | Tạo, patch, phân phối AMI |
| User data | Dữ liệu người dùng | ≤16 KB, base64, chạy root, chỉ lần boot đầu |
| Bootstrapping | Khởi tạo tự động | |
| cloud-init | Gói khởi tạo Linux | `#cloud-config` |
| Instance metadata / Dynamic data | Siêu dữ liệu của instance / Dữ liệu động | 169.254.169.254 |
| Instance Metadata Service (IMDS) / IMDSv2 | Dịch vụ siêu dữ liệu / phiên bản có session token | Token TTL 1 giây – 6 giờ |
| Hop limit (PUT response) | Giới hạn số bước mạng | 1–64, mặc định 1; container nên 2 |
| Link-local address | Địa chỉ nội bộ liên kết | Chỉ truy cập từ instance |
| SSRF (Server-side request forgery) | Giả mạo yêu cầu phía máy chủ | IMDSv2 giảm thiểu |
| Instance identity document | Tài liệu định danh instance | Có chữ ký để xác minh |
| Instance state | Trạng thái máy chủ | pending, running, stopping, stopped, shutting-down, terminated |
| Termination protection | Bảo vệ chống xóa instance | DisableApiTermination |
| InstanceInitiatedShutdownBehavior | Hành vi khi tắt máy từ trong OS | stop (mặc định) / terminate |
| DeleteOnTermination | Xóa volume khi terminate | Mặc định true với root volume |
| Hibernate | Ngủ đông | Lưu RAM vào root EBS mã hóa; bật lúc launch |
| Pre-warm | Làm nóng trước | Dùng hibernate |
| Purchasing option | Phương thức mua | On-Demand, SP, RI, Spot, Dedicated Host/Instance, Capacity Reservation |
| On-Demand Instance | Máy chủ trả theo nhu cầu | Theo giây, tối thiểu 60 s, không cam kết |
| Insufficient capacity error (ICE) | Lỗi không đủ năng lực | AZ hết capacity cho instance type |
| On-Demand Instance quota | Hạn mức On-Demand | Tính theo vCPU; Standard mặc định 5 vCPU |
| Reserved Instance (RI) | Máy chủ đặt trước | Billing discount 1/3 năm, không hủy được |
| Billing discount | Chiết khấu trên hóa đơn | RI không phải instance vật lý |
| All Upfront / Partial Upfront / No Upfront | Trả trước toàn bộ / một phần / không trả trước | |
| Standard RI / Convertible RI | RI tiêu chuẩn / RI chuyển đổi được | Tới 72% (bán được) / tới 66% (exchange được) |
| Offering class | Hạng gói RI | Standard hoặc Convertible |
| Regional RI / Zonal RI | RI cấp vùng / RI cấp AZ | Zonal giữ capacity; regional linh hoạt AZ + size |
| Instance size flexibility | Linh hoạt kích cỡ | Regional RI, Linux/Unix, default tenancy |
| Normalization factor | Hệ số chuẩn hóa | small = 1, large = 4, xlarge = 8 |
| Reserved Instance Marketplace | Chợ bán lại RI | Chỉ Standard RI, phí 12% |
| Savings Plans | Gói tiết kiệm | Cam kết USD/giờ trong 1/3 năm |
| Compute Savings Plans / EC2 Instance Savings Plans | Gói tiết kiệm compute / gói theo instance family | Tới 66% (EC2+Fargate+Lambda) / tới 72% (1 family, 1 Region) |
| Database / SageMaker AI Savings Plans | Gói tiết kiệm CSDL / SageMaker AI | Tới 35% / tới 64% |
| Hourly commitment | Mức cam kết theo giờ | Vượt mức ⇒ giá On-Demand |
| Spot Instance | Máy chủ dùng năng lực dư thừa | Tới 90%, bị thu hồi với 2 phút báo trước |
| Spot capacity pool | Bể năng lực Spot | Cùng instance type + cùng AZ |
| Spot price / Maximum price | Giá Spot / Giá tối đa chấp nhận | |
| One-time / Persistent Spot request | Yêu cầu Spot một lần / bền vững | Persistent tự gửi lại sau interrupt |
| Spot Instance interruption / Interruption notice | Gián đoạn Spot / Thông báo gián đoạn | EventBridge + metadata `spot/instance-action` |
| Interruption behavior | Hành vi khi bị gián đoạn | terminate (mặc định), stop, hibernate |
| EC2 instance rebalance recommendation | Khuyến nghị tái cân bằng | Rủi ro interrupt cao, đến sớm hơn 2 phút |
| Capacity Rebalancing | Tái cân bằng năng lực | ASG/EC2 Fleet chủ động thay Spot |
| Spot Fleet / EC2 Fleet | Đội máy Spot / Đội máy EC2 | RequestSpotFleet là legacy API |
| Allocation strategy | Chiến lược phân bổ | price-capacity-optimized (khuyến nghị), capacity-optimized, diversified, lowest-price |
| Attribute-based instance type selection | Chọn instance type theo thuộc tính | |
| Spot placement score | Điểm khả năng có Spot | 1–10 theo Region/AZ |
| Tenancy (default / dedicated / host) | Chế độ thuê phần cứng | |
| Dedicated Host | Máy chủ vật lý dành riêng | Thấy socket/core, BYOL, tính theo host |
| Dedicated Instance | Instance trên phần cứng riêng | Tính theo instance + 2 USD/giờ/Region |
| Host affinity | Gắn kết với host | |
| Bring Your Own License (BYOL) | Mang license sẵn có | |
| Dedicated Host Reservation | Đặt trước Dedicated Host | Tới 70% |
| On-Demand Capacity Reservation (ODCR) | Đặt trước năng lực theo nhu cầu | 1 AZ, không cam kết, không giảm giá |
| Open / Targeted Capacity Reservation | Giữ chỗ mở / chỉ định | |
| Future-dated Capacity Reservation | Giữ chỗ cho ngày tương lai | ≥ 32 vCPU, có thời gian cam kết |
| Capacity Blocks for ML | Khối năng lực GPU cho học máy | Đặt trước tới 8 tuần, ≤ 64 instance/block |
| Security group | Nhóm bảo mật (tường lửa ảo) | Gắn vào ENI; chỉ allow; stateful; 5 SG/ENI (tới 16), 60 rule mỗi chiều |
| Inbound rule / Outbound rule | Quy tắc chiều vào / chiều ra | SG mới: không inbound, outbound all |
| Stateful / Stateless | Có trạng thái / Không trạng thái | SG stateful; NACL stateless |
| Default security group | Nhóm bảo mật mặc định | Inbound từ chính nó, outbound all; không xóa được |
| Security group referencing | Tham chiếu nhóm bảo mật | Source/destination = sg-xxx; qua peering/TGW |
| Managed prefix list | Danh sách tiền tố được quản lý | Rule tính theo max entries |
| Stale security group rule | Quy tắc lỗi thời | Tham chiếu SG ở VPC peer đã xóa |
| Connection tracking | Theo dõi kết nối | Sửa rule không cắt kết nối tracked |
| Tracked / Untracked connection | Kết nối được / không được theo dõi | Untracked cắt ngay khi xóa rule |
| Connection tracking allowance | Hạn mức kết nối được theo dõi | Vượt ⇒ drop gói tin |
| Idle connection tracking timeout | Thời gian chờ kết nối nhàn rỗi | TCP established mặc định 432.000 s (Nitro v6: 350 s) |
| Asymmetric routing | Định tuyến bất đối xứng | Vào một ENI, ra ENI khác |
| Route 53 Resolver DNS Firewall | Tường lửa DNS | Lọc DNS mà SG không chặn được |
| Public IPv4 address | Địa chỉ IPv4 công cộng | Tự gán, đổi khi stop/start/hibernate |
| Elastic IP address (EIP) | Địa chỉ IP tĩnh co giãn | 5/Region, tính phí cả khi nhàn rỗi |
| Allocate / Associate / Disassociate / Release | Cấp phát / Gắn / Gỡ / Trả lại | Vòng đời Elastic IP |
| Bring Your Own IP (BYOIP) | Mang dải IP của mình | EIP từ pool BYOIP không tính quota |
| Reverse DNS record | Bản ghi DNS ngược | Gửi email từ EC2 |
| Public DNS hostname | Tên DNS công cộng | Từ trong VPC phân giải ra private IP |
| Elastic network interface (ENI) | Card mạng ảo co giãn | Gắn với một AZ |
| Primary / Secondary network interface | Card mạng chính / Card mạng phụ | Primary (eth0) không tháo được |
| Hot / Warm / Cold attach | Gắn khi chạy / khi dừng / khi launch | |
| Secondary private IPv4 address | Địa chỉ IPv4 riêng phụ | Reassign được |
| Source/destination check | Kiểm tra nguồn/đích | Tắt cho NAT/router/firewall |
| Requester-managed network interface | ENI do dịch vụ AWS quản lý | RDS, NAT gateway, VPC endpoint; không detach |
| Prefix delegation | Ủy quyền tiền tố | Gán dải CIDR cho ENI |
| Network card | Card mạng | Nhiều card ⇒ > 100 Gbps |
| Dual-homed / Multi-homed instance | Instance nối hai / nhiều mạng | Nhiều ENI, cùng AZ |
| Placement group | Nhóm sắp đặt | Cluster / Partition / Spread / Precision time |
| Cluster placement group | Nhóm sắp đặt dồn cụm | 1 AZ, 10 Gbps/flow, HPC |
| Partition placement group | Nhóm sắp đặt phân vùng | ≤ 7 partition/AZ, HDFS/Cassandra/Kafka |
| Spread placement group | Nhóm sắp đặt trải rộng | ≤ 7 instance đang chạy/AZ |
| Precision time placement group | Nhóm sắp đặt thời gian chính xác | Enhanced Time Sync, PTP |
| Correlated failure | Lỗi tương quan | Hỏng cùng lúc do chung phần cứng |
| Topology-aware application | Ứng dụng nhận biết cấu trúc liên kết | Dùng thông tin partition |
| High-bisection bandwidth | Băng thông chia đôi cao | Segment mạng của cluster PG |
| Enhanced networking | Mạng tăng cường | SR-IOV, miễn phí |
| SR-IOV | Ảo hóa I/O gốc đơn | |
| Elastic Network Adapter (ENA) | Bộ điều hợp mạng co giãn | Tới 100 Gbps, mọi Nitro |
| Intel 82599 VF | Giao diện Virtual Function Intel | Tới 10 Gbps, đời cũ |
| ENA Express | ENA tăng tốc bằng SRD | Single-flow 5 ⇒ 25 Gbps |
| Scalable Reliable Datagram (SRD) | Giao thức datagram tin cậy có khả năng mở rộng | Dùng bởi ENA Express, EFA |
| Packets per second (PPS) | Số gói tin mỗi giây | |
| Single-flow bandwidth | Băng thông một luồng | |
| Tail latency | Độ trễ đuôi | p99… |
| Elastic Fabric Adapter (EFA) / EFA-only | Bộ điều hợp fabric co giãn / bản chỉ EFA | HPC/ML; không cross-AZ, không routable |
| OS-bypass | Bỏ qua hệ điều hành | Libfabric nói trực tiếp với EFA |
| Libfabric / MPI / NCCL | Thư viện fabric / Giao diện truyền thông điệp / Thư viện giao tiếp tập thể NVIDIA | |
| RDMA | Truy cập bộ nhớ từ xa trực tiếp | |
| Tightly coupled | Liên kết chặt | Node trao đổi liên tục |
| Block storage | Lưu trữ khối | EBS, instance store |
| Amazon Elastic Block Store (EBS) / EBS volume | Kho lưu trữ khối co giãn / Ổ đĩa EBS | Zonal, bền vững, gắn qua mạng |
| IOPS | Số thao tác I/O mỗi giây | Thước đo SSD, workload giao dịch |
| General Purpose SSD (gp3 / gp2) | SSD đa dụng | gp3: 3.000 IOPS + 125 MiB/s baseline, tới 80.000 IOPS; gp2: 3 IOPS/GiB |
| Provisioned IOPS SSD (io2 Block Express / io1) | SSD IOPS cấp phát trước | io2 BX: 256.000 IOPS, 99,999%; io1: 64.000 IOPS |
| Throughput Optimized HDD (st1) / Cold HDD (sc1) | HDD tối ưu thông lượng / HDD dữ liệu lạnh | 500 / 250 MiB/s, không boot |
| I/O credits / Burst balance | Tín dụng I/O / Số dư bùng nổ | gp2, st1, sc1; metric BurstBalance |
| Annual failure rate (AFR) | Tỉ lệ hỏng hằng năm | |
| EBS-optimized instance | Máy chủ tối ưu cho EBS | Băng thông riêng cho EBS |
| Elastic Volumes | Ổ đĩa co giãn | Tăng size, đổi type/IOPS không downtime; không giảm size |
| EBS snapshot (incremental / full) | Bản chụp ổ đĩa (gia tăng / đầy đủ) | Lưu S3, nhân bản mọi AZ trong Region |
| Multi-volume snapshot | Chụp đồng thời nhiều volume | Crash-consistent |
| Volume initialization | Khởi tạo ổ đĩa | Tải block từ S3 khi tạo volume từ snapshot |
| Fast Snapshot Restore (FSR) | Khôi phục snapshot nhanh | Theo cặp snapshot + AZ, 5/Region |
| Provisioned Rate for Volume Initialization | Tốc độ khởi tạo cấp phát | 100–300 MiB/s |
| EBS Snapshots Archive | Tầng lưu trữ lâu dài cho snapshot | Rẻ hơn tới 75%, ≥ 90 ngày |
| Amazon Data Lifecycle Manager (DLM) | Trình quản lý vòng đời dữ liệu | Tự động tạo/giữ/copy/xóa snapshot, AMI |
| Snapshot lock | Khóa snapshot | Chống xóa trong thời hạn |
| Block public access for EBS snapshots | Chặn chia sẻ công khai snapshot | Cấp Region |
| EBS direct APIs | API truy cập trực tiếp nội dung snapshot | |
| Multi-Attach | Gắn một ổ vào nhiều máy | io1/io2, ≤ 16 Nitro instance cùng AZ |
| Clustered file system | Hệ thống tệp cụm | Bắt buộc với Multi-Attach |
| I/O fencing / NVMe reservations | Rào chắn I/O / Đặt chỗ NVMe | |
| EBS encryption / Encryption by default | Mã hóa EBS / Mã hóa mặc định | KMS; thiết lập theo Region |
| AWS managed key (aws/ebs) / Customer managed key | Khóa do AWS quản lý / Khóa do khách hàng quản lý | Share snapshot mã hóa cần customer managed key |
| Instance store / Ephemeral storage | Ổ đĩa tạm trên host / Lưu trữ tạm thời | Reboot giữ; stop/hibernate/terminate mất |
| Cryptographically erased | Xóa bằng mật mã | |
| RAID 0 | Ghép đĩa dạng stripe | Cộng dồn hiệu năng, không dư thừa |
| Elastic Load Balancing (ELB) | Cân bằng tải co giãn | ALB, NLB, GWLB, CLB; regional |
| Load balancer node | Nút cân bằng tải | Một node mỗi AZ đã bật; DNS TTL 60 giây |
| Internet-facing / Internal load balancer | LB hướng Internet / LB nội bộ | Node có IP public / chỉ IP private |
| Listener | Bộ lắng nghe | Protocol + port 1–65535 |
| Listener rule / Default rule | Quy tắc định tuyến / Quy tắc mặc định | Priority số nhỏ trước; default rule xét cuối, không xóa |
| Target group | Nhóm đích | Health check riêng; 1 TG – 1 LB |
| Target type | Loại đích | instance, ip, lambda (chỉ ALB), alb (chỉ NLB); không đổi được |
| Application Load Balancer (ALB) | Cân bằng tải tầng ứng dụng | Layer 7; ≥ 2 AZ; idle timeout 60 s |
| Network Load Balancer (NLB) | Cân bằng tải tầng mạng | Layer 4; IP tĩnh/Elastic IP mỗi AZ |
| Gateway Load Balancer (GWLB) | Cân bằng tải cổng | Layer 3; virtual appliance; GENEVE 6081 |
| Gateway Load Balancer endpoint (GWLBE) | Điểm cuối GWLB | VPC endpoint làm next hop trong route table |
| Classic Load Balancer (CLB) | Bộ cân bằng tải thế hệ cũ | Nên migrate sang ALB/NLB |
| Path-based / Host-based routing | Định tuyến theo đường dẫn / theo tên miền | Condition path-pattern / host-header của ALB |
| Weighted target groups | Nhóm đích có trọng số | Weight 0–999; canary, blue/green |
| Round robin / Least outstanding requests / Weighted random | Xoay vòng / Ít request tồn đọng nhất / Ngẫu nhiên có trọng số | Routing algorithm của ALB target group |
| Automatic Target Weights (ATW) | Tự động điều chỉnh trọng số target | Anomaly mitigation; cần weighted random |
| Flow hash algorithm | Thuật toán băm luồng | NLB/GWLB chọn target theo 5-tuple |
| X-Forwarded-For | Header chứa IP client | ALB thêm vào request |
| Client IP preservation | Giữ nguyên IP client | NLB; mặc định tắt với target ip + TCP/TLS |
| Proxy protocol v2 | Giao thức proxy phiên bản 2 | Header nhị phân mang IP gốc |
| GENEVE | Giao thức đóng gói mạng ảo | UDP 6081 giữa GWLB và appliance |
| Flow stickiness | Dính luồng | GWLB 5-tuple (mặc định) / 3-tuple / 2-tuple |
| Health check (ELB) | Kiểm tra sức khỏe | Theo target group; ALB 30 s/5 s/5/2/200 |
| Healthy / Unhealthy threshold | Ngưỡng khỏe / không khỏe | Mặc định 5 / 2 lần liên tiếp |
| Fail open | Mở khi lỗi | Mọi target unhealthy ⇒ gửi tới tất cả |
| DNS failover / Routing failover | Chuyển đổi dự phòng qua DNS / qua định tuyến | Ngưỡng target group health |
| Cross-zone load balancing | Cân bằng tải liên vùng | ALB luôn bật; NLB/GWLB mặc định tắt |
| Zonal shift | Dịch chuyển khỏi vùng | ARC; rút LB khỏi một AZ suy giảm |
| Sticky sessions (session affinity) | Phiên dính | Cookie AWSALB / app cookie (1 s – 7 ngày); NLB theo source IP |
| Deregistration delay (connection draining) | Độ trễ hủy đăng ký / Xả kết nối | Mặc định 300 s, 0–3.600 s |
| Slow start mode | Chế độ khởi động chậm | 30–900 s; chỉ round robin |
| SSL/TLS termination (offloading) | Kết thúc SSL/TLS tại bộ cân bằng tải | HTTPS listener (ALB) / TLS listener (NLB) |
| TLS passthrough | Chuyển tiếp nguyên trạng | NLB TCP listener 443, LB không giải mã |
| Server Name Indication (SNI) | Chỉ báo tên máy chủ | Nhiều certificate trên một listener |
| Default certificate / Certificate list | Chứng chỉ mặc định / Danh sách chứng chỉ | HTTPS/TLS listener |
| Security policy (ELB) | Chính sách bảo mật TLS | Tổ hợp protocol + cipher |
| Mutual TLS (mTLS) | TLS hai chiều | Xác thực certificate client; ALB có, NLB TLS listener không |
| Amazon EC2 Auto Scaling | Tự động co giãn EC2 | Miễn phí, chỉ trả tài nguyên |
| Auto Scaling group (ASG) | Nhóm tự động co giãn | Regional, trải nhiều AZ, cân bằng AZ |
| Minimum / Desired / Maximum capacity | Dung lượng tối thiểu / mong muốn / tối đa | Scaling luôn đổi desired trong [min, max] |
| Launch template | Mẫu khởi chạy | Có version; bắt buộc cho mixed instances |
| Launch configuration | Cấu hình khởi chạy (thế hệ cũ) | Bất biến; account mới từ 01/10/2024 không tạo được |
| Scaling policy | Chính sách co giãn | Target tracking, step, simple, predictive |
| Scale out / Scale in | Mở rộng ngang / Thu hẹp ngang | Thêm / bớt instance |
| Dynamic scaling | Co giãn động | Phản ứng theo CloudWatch metric |
| Target tracking scaling | Co giãn theo giá trị mục tiêu | Như bộ điều nhiệt; tự tạo alarm |
| Step scaling / Step adjustment | Co giãn theo bậc / Bậc điều chỉnh | Điều chỉnh theo mức vượt ngưỡng |
| Simple scaling | Co giãn đơn giản | Một điều chỉnh + cooldown; không khuyến nghị |
| Scaling adjustment type | Kiểu điều chỉnh | ChangeInCapacity, ExactCapacity, PercentChangeInCapacity |
| Scheduled scaling / Scheduled action | Co giãn theo lịch / Hành động theo lịch | Cron + time zone; 125 action/ASG |
| Predictive scaling | Co giãn dự đoán | ≥ 24 giờ dữ liệu; forecast 48 giờ, cập nhật mỗi 6 giờ |
| Forecast only / Forecast and scale | Chỉ dự báo / Dự báo và co giãn | Hai mode của predictive scaling |
| Scaling cooldown | Thời gian chờ giữa hai lần co giãn | Mặc định 300 s; chỉ simple scaling |
| Default instance warmup | Thời gian làm nóng instance mặc định | Instance chưa tính vào metric; nên bật |
| Health check grace period | Thời gian ân hạn kiểm tra sức khỏe | 300 s (console) / 0 (CLI, SDK) |
| Backlog per instance | Tồn đọng trên mỗi instance | Scale theo SQS: messages ÷ InService |
| Flapping | Dao động co giãn liên tục | Scale out/in lặp vô hạn |
| Lifecycle hook | Móc vòng đời | Pending:Wait / Terminating:Wait; CONTINUE / ABANDON |
| Heartbeat timeout / Global timeout | Thời gian chờ nhịp / Giới hạn chờ tổng | 1 giờ / min(48 giờ, 100 × heartbeat) |
| Warm pool | Vùng chứa instance làm nóng sẵn | Stopped / Hibernated / Running |
| Standby (Auto Scaling) | Trạng thái chờ | Rút instance khỏi service, không health check |
| Termination policy | Chính sách chọn instance để kết thúc | Default: AZ nhiều nhất ⇒ cấu hình cũ ⇒ giờ tính tiền |
| Instance scale-in protection | Bảo vệ khỏi thu hẹp | Instance không bị chọn khi scale in |
| Suspend / Resume processes | Tạm dừng / Tiếp tục các tiến trình | Launch, Terminate, HealthCheck, ReplaceUnhealthy… |
| Instance refresh | Làm mới instance cuốn chiếu | Rolling update; checkpoint, auto rollback |
| Minimum / Maximum healthy percentage | Tỉ lệ khỏe tối thiểu / tối đa | Mặc định 90% / 100% |
| Instance maintenance policy | Chính sách bảo trì instance | Điều chỉnh tốc độ thay instance |
| Maximum instance lifetime | Tuổi thọ tối đa của instance | Tự thay instance quá hạn (≥ 1 ngày) |
| Mixed instances group | Nhóm trộn nhiều loại instance | On-Demand + Spot, nhiều instance type |
| Amazon S3 (Simple Storage Service) | Dịch vụ lưu trữ đối tượng | Regional, dung lượng không giới hạn |
| Object storage | Lưu trữ đối tượng | Dữ liệu + metadata, truy cập qua HTTP API |
| Bucket | Thùng chứa | Tên duy nhất trong partition; 3–63 ký tự; 10.000/account mặc định |
| General purpose bucket / Directory bucket | Bucket đa dụng / Bucket thư mục | Directory bucket: 1 AZ, Express One Zone, 100/account |
| Table bucket / Vector bucket | Bucket dữ liệu bảng / Bucket vector | Apache Iceberg / vector embedding |
| Global namespace / Account regional namespace | Không gian tên toàn cục / theo account và Region | Hậu tố `-<account>-<region>-an` |
| Object | Đối tượng | 0 byte – 50 TB (tài liệu cũ: 5 TB) |
| Object key (key name) | Khóa / tên đối tượng | ≤ 1.024 byte UTF-8, phân biệt hoa thường |
| Prefix / Delimiter | Tiền tố / Ký tự phân tách | “Folder” logic trong cấu trúc phẳng |
| Version ID | Mã phiên bản | `null` khi chưa bật versioning |
| System-defined / User-defined metadata | Siêu dữ liệu hệ thống / do người dùng định nghĩa | `x-amz-meta-`, ≤ 2 KB; sửa phải copy |
| Object tag | Thẻ đối tượng | ≤ 10 tag/object |
| Multipart upload | Tải lên nhiều phần | 5 MB – 50 TB, ≤ 10.000 part; bắt buộc khi > 5 GB |
| Strong read-after-write consistency | Nhất quán mạnh đọc-sau-ghi | PUT/DELETE/LIST ở mọi Region |
| Last-writer-wins | Người ghi sau cùng thắng | Hai PUT đồng thời cùng key |
| Storage class | Lớp lưu trữ | Gắn với từng object; mặc định STANDARD |
| S3 Standard-IA / S3 One Zone-IA | Lớp truy cập không thường xuyên (nhiều AZ / một AZ) | 30 ngày, 128 KB; One Zone 99.5% |
| S3 Express One Zone | Lớp một AZ hiệu năng cao | Single-digit ms, directory bucket |
| S3 Intelligent-Tiering / Access tier | Phân tầng thông minh / Tầng truy cập | 30 / 90 ngày tự động; Archive ≥ 90, Deep ≥ 180 (tối đa 730) |
| S3 Glacier Instant / Flexible Retrieval / Deep Archive | Lưu trữ lâu dài lấy tức thì / lấy linh hoạt / lưu trữ sâu | 90 / 90 / 180 ngày |
| Reduced Redundancy Storage (RRS) | Lưu trữ giảm dư thừa | Lớp cũ, durability 99.99%, không khuyến nghị |
| Minimum storage duration / Minimum billable object size | Thời gian lưu tối thiểu tính phí / Kích thước tối thiểu tính phí | |
| Retrieval fee | Phí truy xuất | IA, Glacier |
| Restore (RestoreObject) | Khôi phục từ archive | Tạo bản sao tạm đọc được |
| Expedited / Standard / Bulk retrieval | Truy xuất khẩn cấp / tiêu chuẩn / hàng loạt | Flexible: 1–5 phút / 3–5 giờ / 5–12 giờ |
| Provisioned capacity (Glacier) | Dung lượng truy xuất đặt trước | ≥ 3 Expedited mỗi 5 phút, 300 MB/s |
| S3 Versioning | Quản lý phiên bản S3 | Unversioned / Enabled / Suspended |
| Current / Noncurrent version | Phiên bản hiện hành / không hiện hành | |
| Delete marker | Dấu xóa | GET ⇒ 404; xóa marker để khôi phục |
| S3 Lifecycle configuration / Lifecycle rule | Cấu hình vòng đời / Quy tắc vòng đời | 1 config/bucket, ≤ 1.000 rule (không tăng); filter prefix/tag/size |
| Transition action / Expiration action | Hành động chuyển lớp / Hành động hết hạn (xóa) | Bucket versioning: Expiration chỉ tạo delete marker |
| NoncurrentVersionTransition / NoncurrentVersionExpiration | Chuyển lớp / xóa vĩnh viễn phiên bản không hiện hành | NoncurrentDays + NewerNoncurrentVersions (1–100) |
| Expired object delete marker | Dấu xóa hết hạn | Marker không còn version nào; action ExpiredObjectDeleteMarker |
| AbortIncompleteMultipartUpload | Hủy multipart upload dở dang | Part dở dang vẫn tính phí lưu trữ |
| Waterfall model (lifecycle) | Mô hình thác nước | Transition chỉ nóng ⇒ lạnh; Deep Archive là điểm cuối |
| Object size filter | Bộ lọc theo kích thước object | Object < 128 KB mặc định không transition |
| Live replication / On-demand replication | Sao chép trực tiếp / theo yêu cầu | CRR, SRR / S3 Batch Replication |
| Cross-Region Replication (CRR) | Sao chép xuyên Region | Versioning cả 2 bucket; bất đồng bộ |
| Same-Region Replication (SRR) | Sao chép cùng Region | Gom log, prod–test, data sovereignty; không phí transfer |
| S3 Batch Replication | Sao chép hàng loạt | Object có sẵn, FAILED, replica |
| S3 Replication Time Control (RTC) | Kiểm soát thời gian sao chép | 99.99% trong 15 phút, có SLA |
| Replica / Owner override | Bản sao / Ghi đè chủ sở hữu bản sao | Replica thuộc account đích |
| Delete marker replication | Sao chép dấu xóa | Mặc định tắt; DELETE kèm versionId không bao giờ replicate |
| Replica modification sync / Two-way replication | Đồng bộ thay đổi trên bản sao / Sao chép hai chiều | Dùng với Multi-Region Access Points |
| Partitioned prefix | Tiền tố đã phân vùng | ≥ 3.500 ghi / 5.500 đọc mỗi giây mỗi prefix |
| 503 Slow Down | Lỗi yêu cầu giảm tốc | Nhiều prefix + exponential backoff |
| Exponential backoff | Thử lại với thời gian chờ tăng theo cấp số nhân | SDK tự làm |
| Upload ID / Part number / ETag | Mã phiên upload / Số thứ tự phần / Thẻ định danh nội dung | Part number 1–10.000 |
| Byte-range fetch | Tải theo dải byte | Header `Range`, đọc song song |
| S3 Transfer Acceleration | Tăng tốc truyền tải S3 | Edge location CloudFront; `bucket.s3-accelerate.amazonaws.com`; tên không có dấu chấm |
| Amazon S3 Select | Truy vấn SQL lọc nội dung một object | Không còn cho khách hàng mới ⇒ Athena |
| S3 Event Notifications | Thông báo sự kiện S3 | SNS, SQS (không FIFO), Lambda, EventBridge |
| At-least-once delivery | Giao ít nhất một lần | Có thể trùng, không bảo đảm thứ tự ⇒ idempotent |
| Fan-out | Phát tán một sự kiện tới nhiều consumer | SNS ⇒ nhiều SQS |
| Requester Pays bucket | Bucket người yêu cầu trả phí | Requester trả request + transfer; owner trả lưu trữ; không anonymous |
| Bucket policy | Chính sách bucket | Resource-based policy của S3, có Principal |
| S3 Object Ownership / Bucket owner enforced | Quyền sở hữu object / Chủ bucket sở hữu tất cả | Mặc định; vô hiệu mọi ACL |
| ACL (access control list) | Danh sách kiểm soát truy cập | Legacy; AllUsers / AuthenticatedUsers = public |
| S3 Block Public Access | Chặn truy cập công khai S3 | 4 setting; cấp Organization / account / bucket / access point; lấy tổ hợp chặt nhất |
| BlockPublicAcls / IgnorePublicAcls / BlockPublicPolicy / RestrictPublicBuckets | 4 thiết lập chặn public | BlockPublicPolicy nên bật cấp account |
| aws:SecureTransport | Điều kiện kết nối mã hóa | Deny khi false ⇒ ép HTTPS |
| aws:PrincipalOrgID | Mã tổ chức của principal | Giới hạn truy cập trong AWS Organization |
| aws:SourceVpce / aws:SourceVpc | VPC endpoint / VPC nguồn | Giới hạn truy cập qua mạng riêng |
| SSE-S3 | Mã hóa phía máy chủ với khóa do S3 quản lý | Mặc định từ 05/01/2023 |
| SSE-KMS | Mã hóa phía máy chủ với khóa AWS KMS | Audit CloudTrail; cross-account cần customer managed key |
| DSSE-KMS | Mã hóa phía máy chủ hai lớp với KMS | 2 lớp AES-256; không hỗ trợ Bucket Keys |
| SSE-C | Mã hóa phía máy chủ với khóa khách hàng cung cấp | Bắt buộc HTTPS; chặn mặc định từ 04/2026 |
| Client-side encryption | Mã hóa phía client | Mã hóa trước khi upload |
| Envelope encryption / Data key | Mã hóa phong bì / Khóa dữ liệu | Data key mã hóa dữ liệu, KMS key mã hóa data key |
| Encryption context | Ngữ cảnh mã hóa | Mặc định ARN object (hoặc ARN bucket khi bật Bucket Key) |
| S3 Bucket Key | Khóa cấp bucket | Giảm tới 99% chi phí request KMS |
| S3 Object Lock | Khóa đối tượng S3 | WORM; cần versioning; bật rồi không tắt được |
| WORM (write-once-read-many) | Ghi một lần, đọc nhiều lần | SEC 17a-4, FINRA, CFTC |
| Governance mode / Compliance mode | Chế độ quản trị / Chế độ tuân thủ | Bypass bằng s3:BypassGovernanceRetention / kể cả root không xóa được |
| Retention period / Retain Until Date | Thời hạn lưu giữ / Ngày giữ đến | Fixed hoặc variable; chỉ kéo dài được ở Compliance |
| Variable retention / Event hold | Lưu giữ thay đổi được / Giữ theo sự kiện | Hết hạn = lúc release + duration |
| Legal hold | Giữ pháp lý | Không thời hạn; s3:PutObjectLegalHold |
| Glacier Vault Lock / Vault Lock policy | Khóa kho Glacier / Chính sách khóa kho | Initiate ⇒ 24 giờ kiểm thử ⇒ complete, bất biến |
| Presigned URL | URL ký sẵn | Console ≤ 12 giờ; CLI/SDK ≤ 7 ngày; hết sớm theo credential tạm |
| Bearer token | Mã thông báo người cầm | Ai có cũng dùng được |
| S3 Access Point / Network origin | Điểm truy cập S3 / Nguồn mạng | Internet hoặc VPC; 10.000/account/Region |
| S3 Object Lambda Access Point | Điểm truy cập biến đổi dữ liệu bằng Lambda | Vd che PII khi GET |
| CORS (cross-origin resource sharing) | Chia sẻ tài nguyên khác nguồn gốc | Cấu hình trên bucket bị gọi tới; ≤ 100 rule |
| Preflight request | Request kiểm tra trước | OPTIONS; cache theo MaxAgeSeconds |
| Amazon Macie | Dịch vụ phát hiện dữ liệu nhạy cảm | PII trong S3 |
| CloudTrail data events | Sự kiện dữ liệu CloudTrail | API cấp object; phải bật trên trail |
| File storage / Shared file system | Lưu trữ tệp / Hệ thống tệp dùng chung | EFS, FSx; nhiều client mount đồng thời |
| NFS (Network File System) | Hệ thống tệp mạng | EFS: NFSv4.0/4.1; OpenZFS: v3–v4.2 |
| SMB (Server Message Block) | Giao thức chia sẻ tệp của Windows | FSx for Windows: SMB 2.0–3.1.1 |
| POSIX permissions | Quyền POSIX | UID/GID, owner/group/other |
| Mount target | Điểm gắn kết | EFS: 1/AZ, SG mở TCP 2049 |
| Regional / One Zone file system | Hệ thống tệp đa vùng / một vùng sẵn sàng | EFS: ≥ 3 AZ 99,99% / 1 AZ 99,9% |
| Performance mode (General Purpose / Max I/O) | Chế độ hiệu năng | GP mặc định, khuyến nghị; Max I/O thế hệ trước |
| Throughput mode (Elastic / Provisioned / Bursting) | Chế độ thông lượng | Elastic mặc định; Bursting 50 KiBps/GiB |
| Burst credits | Tín dụng bùng nổ | EFS Bursting, FSx HDD |
| EFS Infrequent Access (IA) / EFS Archive | Lớp truy cập không thường xuyên / Lớp lưu trữ dài hạn | Mặc định 30 / 90 ngày; tối thiểu 128 KiB/file; Archive ≥ 90 ngày |
| Lifecycle management (EFS) | Quản lý vòng đời EFS | Theo lần truy cập cuối; On first access về Standard |
| EFS Access Point | Điểm truy cập EFS | Ép POSIX user + root directory |
| File system policy | Chính sách hệ thống tệp | Resource-based policy của EFS |
| EFS Replication | Sao chép hệ thống tệp EFS | Cross-Region, RPO/RTO phút |
| Cloud bursting | Bùng nổ lên đám mây | Đẩy tải từ on-premises lên AWS |
| Preferred / Standby file server | Máy chủ tệp ưu tiên / dự phòng | FSx Windows Multi-AZ, failover < 30 giây |
| DFS Namespaces | Không gian tên DFS | Gom nhiều share dưới một đường dẫn |
| Shadow Copies | Bản sao bóng | User tự khôi phục phiên bản file trước |
| Data Deduplication | Khử trùng lặp dữ liệu | FSx Windows, FSx ONTAP |
| Continuously available (CA) share | Share khả dụng liên tục | SQL Server HA trên FSx Windows |
| Parallel file system (Lustre) | Hệ thống tệp song song | HPC/ML, FSx for Lustre |
| Scratch / Persistent file system | Hệ thống tệp tạm / bền | Scratch không replication, burst 6× |
| Data repository association (DRA) | Liên kết kho dữ liệu | FSx Lustre ↔ S3; auto import cùng Region |
| Lazy loading | Nạp lười (nạp khi cần) | Nội dung file nạp từ S3 khi truy cập lần đầu |
| Capacity pool tier | Tầng lưu trữ đàn hồi giá rẻ | FSx ONTAP, dữ liệu lạnh |
| Tiering policy / Cooling period | Chính sách phân tầng / Thời gian nguội | ONTAP: Auto 31 ngày, Snapshot Only 2 ngày |
| SnapMirror / FlexClone / SnapLock | Sao chép NetApp / Bản sao volume tức thì / Khóa WORM NetApp | FSx for ONTAP |
| iSCSI / NVMe over TCP | Giao thức block storage qua mạng IP | FSx for ONTAP |
| Thin provisioning | Cấp phát mỏng | Chỉ tiêu dung lượng khi ghi |
| Hybrid cloud / Hybrid storage | Đám mây lai / Lưu trữ lai | Kết hợp on-premises với AWS |
| Data migration | Di chuyển dữ liệu | Một lần hoặc theo đợt |
| AWS Storage Gateway | Cổng lưu trữ lai | VM / hardware appliance / EC2 |
| Software appliance / Hardware appliance | Thiết bị phần mềm (VM) / Thiết bị phần cứng | Nơi chạy gateway |
| Gateway activation | Kích hoạt gateway | Gắn gateway với account + Region |
| Cache storage | Bộ nhớ đệm cục bộ | Dữ liệu nóng + chờ upload |
| Upload buffer | Vùng đệm tải lên | Staging trước khi gửi lên AWS |
| S3 File Gateway | Cổng tệp S3 | NFS v3/4.1, SMB 2/3; 1 file = 1 object |
| FSx File Gateway | Cổng tệp FSx | Không còn cho khách hàng mới |
| File share (gateway) | Thư mục chia sẻ | Gắn với S3 bucket/prefix |
| RefreshCache | Làm mới bộ nhớ đệm | Khi object ghi thẳng vào bucket |
| Volume Gateway | Cổng ổ đĩa | iSCSI, snapshot = EBS snapshot |
| Cached volume / Stored volume | Volume lưu đệm / Volume lưu tại chỗ | 32 TiB (1 PiB/gw) / 16 TiB (512 TiB/gw) |
| Tape Gateway | Cổng băng từ | Archive Glacier Flexible / Deep Archive |
| Virtual tape / Virtual tape library (VTL) | Băng từ ảo / Thư viện băng từ ảo | Tape 100 GiB–15 TiB |
| Media changer / Tape drive | Bộ đổi băng / Ổ băng | 1 và 10 mỗi VTL |
| Virtual tape shelf (VTS) | Kệ băng từ ảo | Retrieve 3–5 h / ~12 h |
| AWS DataSync | Dịch vụ truyền dữ liệu trực tuyến | NFS/SMB/HDFS/object → S3/EFS/FSx |
| DataSync agent | Tác tử DataSync | VM; tối đa 4/location, không HA |
| Location / Task / Task execution | Vị trí nguồn-đích / Tác vụ truyền / Lần chạy tác vụ | DataSync |
| Basic mode / Enhanced mode | Chế độ cơ bản / nâng cao | Tuần tự / song song |
| Data integrity verification | Kiểm tra toàn vẹn dữ liệu | Checksum + metadata |
| HDFS | Hệ thống tệp phân tán Hadoop | Nguồn của DataSync |
| AWS Snowball Edge | Thiết bị chuyển dữ liệu vật lý có compute | 210 TB; không còn cho KH mới |
| Edge computing | Điện toán biên | Xử lý tại nơi phát sinh dữ liệu |
| Import job / Export job | Tác vụ nhập / xuất | Snowball ⇄ S3 |
| AWS OpsHub | Ứng dụng quản lý thiết bị Snow | Unlock, copy, quản lý |
| AWS Data Transfer Terminal | Điểm truyền dữ liệu vật lý | Thay thế Snow cho KH mới |
| AWS Transfer Family | Dịch vụ truyền file được quản lý | SFTP/FTPS/FTP/AS2 → S3/EFS |
| SFTP / FTPS / FTP | Truyền file qua SSH / FTP qua TLS / FTP không mã hóa | |
| AS2 (Applicability Statement 2) | Giao thức trao đổi dữ liệu B2B | |
| Endpoint type (Public / VPC internal / VPC internet-facing) | Kiểu điểm cuối | Transfer Family |
| IP allow list | Danh sách IP được phép | Security group + Elastic IP |
| Service managed / Custom identity provider | Nhà cung cấp danh tính do dịch vụ quản lý / tùy chỉnh | Lambda / API Gateway |
| Managed workflows (Transfer Family) | Luồng xử lý được quản lý | Xử lý file sau upload |
| AWS Backup | Dịch vụ sao lưu tập trung | Theo chính sách, đa dịch vụ, đa account |
| Backup plan / Backup rule | Kế hoạch sao lưu / Quy tắc sao lưu | Tần suất, window, vault, lifecycle, copy |
| Backup window (Start within / Complete within) | Cửa sổ sao lưu | Mặc định 12:30 AM, 8 giờ, 7 ngày |
| Resource assignment (backup selection) | Gán tài nguyên vào kế hoạch | ARN / resource type / tag |
| Service opt-in (AWS Backup) | Chọn tham gia dịch vụ | Vẫn áp dụng khi gán bằng tag |
| On-demand backup | Sao lưu theo yêu cầu | Chạy ngay; không thể là continuous |
| Backup vault | Kho sao lưu | KMS key + access policy |
| Recovery point | Điểm khôi phục | Bản sao lưu bất biến trong vault |
| Vault access policy | Chính sách truy cập kho | backup:CopyIntoBackupVault cho cross-account |
| Warm storage / Cold storage (AWS Backup) | Tầng lưu trữ nóng / lạnh | Cold ≥ 90 ngày |
| Full AWS Backup management | Quản lý hoàn toàn bởi AWS Backup | Mã hóa độc lập, ARN arn:aws:backup |
| AWS Backup Vault Lock | Khóa kho sao lưu | Governance / compliance; khác Glacier Vault Lock |
| Grace time (cooling-off period) | Thời gian ân hạn | Compliance mode ≥ 3 ngày (ChangeableForDays 3–36.500) |
| Logically air-gapped vault | Kho sao lưu cách ly logic | Compliance lock sẵn, AWS owned key, share qua RAM |
| Multi-party approval (MPA) | Phê duyệt nhiều bên | Truy cập air-gapped vault khi account bị mất |
| Cross-Region backup / Cross-account backup | Sao lưu liên vùng / liên tài khoản | Copy đầu full; không copy từ cold tier |
| Fan-in / Fan-out (backup) | Gom về / Tỏa ra | Account kho trung tâm |
| Continuous backup | Sao lưu liên tục | Full + transaction log, ≤ 35 ngày |
| Point-in-time recovery (PITR) | Khôi phục về một thời điểm | Chính xác 1 giây |
| Snapshot backup (AWS Backup) | Sao lưu dạng bản chụp | Tới mỗi giờ, giữ ≤ 100 năm |
| Windows VSS | Dịch vụ bản sao bóng của Windows | Backup application-consistent trên EC2 |
| Item-level restore | Khôi phục từng mục | File, thư mục, object |
| AWS Backup Audit Manager | Trình kiểm toán sao lưu | Control, framework, báo cáo hằng ngày |
| Restore testing | Kiểm thử khôi phục | Tự restore định kỳ, đo thời gian, tự dọn |
| Amazon VPC (Virtual Private Cloud) | Đám mây riêng ảo | Mạng ảo cô lập logic, thuộc một Region |
| Default VPC / Nondefault VPC | VPC mặc định / VPC tự tạo | Default: 172.31.0.0/16, subnet /20 mỗi AZ, có IGW |
| CIDR block | Khối địa chỉ CIDR | VPC/subnet /16 → /28 |
| RFC 1918 | Dải IPv4 riêng | 10/8, 172.16/12, 192.168/16 |
| Secondary CIDR block | Khối CIDR phụ | Thêm khi hết IP; 5/VPC (tới 50) |
| Subnet | Mạng con | Nằm trọn trong một AZ |
| Public / Private / VPN-only / Isolated subnet | Mạng con công khai / riêng / chỉ VPN / cô lập | Do route table quyết định |
| Dual-stack / IPv6-only subnet | Mạng con hai ngăn xếp / chỉ IPv6 | |
| Reserved IP addresses (subnet) | Địa chỉ IP bị AWS giữ lại | 4 đầu + 1 cuối: network, router, DNS, dự phòng, broadcast |
| Auto-assign public IP | Tự động gán IP công khai | Thuộc tính subnet |
| Implicit router (VPC router) | Bộ định tuyến ngầm của VPC | Địa chỉ base+1 của subnet |
| Route table | Bảng định tuyến | Destination → target; 1 route table/subnet |
| Main route table / Custom route table | Bảng định tuyến chính / tùy chỉnh | Subnet không gắn ⇒ main |
| Local route | Tuyến cục bộ | Giao tiếp trong VPC, có trong mọi route table |
| Longest prefix match | Khớp tiền tố dài nhất | Route cụ thể nhất thắng |
| Route propagation / Propagated route | Lan truyền tuyến | Route VPN tự thêm từ VGW |
| Gateway route table / Edge association | Bảng định tuyến của gateway / Liên kết biên | Chèn appliance cho traffic đi vào |
| Internet gateway (IGW) | Cổng Internet | HA, miễn phí, NAT 1:1 IPv4, 1 IGW/VPC |
| NAT gateway (public / private) | Cổng NAT được quản lý | Chỉ outbound; 5→100 Gbps; 55.000 kết nối/IP/đích |
| Zonal / Regional NAT gateway | Cổng NAT theo AZ / cấp vùng | Regional tự trải đa AZ, không cần public subnet |
| NAT instance | Máy chủ NAT tự quản | Tắt source/dest check; có SG, port forwarding |
| NAT64 / DNS64 | Dịch IPv6 → IPv4 / DNS tổng hợp AAAA | NAT gateway + Route 53 Resolver |
| Egress-only internet gateway | Cổng Internet chỉ đi ra | Outbound-only cho IPv6, stateful, miễn phí |
| Bastion host (jump box) | Máy chủ trung gian (máy nhảy) | Public subnet, SSH chỉ từ IP tin cậy |
| EC2 Instance Connect Endpoint (EICE) | Điểm cuối EC2 Instance Connect | Proxy TCP xác thực IAM; 1/VPC, 20 kết nối, 1 giờ |
| VPC Block Public Access (BPA) | Chặn truy cập công khai VPC | Bidirectional / ingress-only + exclusion |
| Defense in depth | Phòng thủ theo chiều sâu | Nhiều lớp: NACL + SG + Network Firewall |
| Network ACL (NACL) | Danh sách kiểm soát truy cập mạng | Cấp subnet; allow + deny; stateless; 20 rule/chiều (tới 40) |
| Default / Custom network ACL | NACL mặc định / tự tạo | Default allow all (rule 100/101); custom deny all |
| Rule number (NACL) | Số thứ tự rule | 1–32766; xét tăng dần, khớp đầu tiên thắng |
| Asterisk (*) rule | Rule mặc định cuối cùng | DENY phần còn lại; không xóa được |
| Ephemeral port | Cổng tạm thời | Linux 32768–61000; Win 2008+ 49152–65535; ELB/NAT GW/Lambda 1024–65535 |
| Reachability Analyzer | Trình phân tích khả năng kết nối | Phân tích cấu hình tĩnh, chỉ ra thành phần chặn |
| VPC Flow Logs | Nhật ký luồng VPC | Cấp VPC/subnet/ENI → CloudWatch Logs / S3 / Data Firehose |
| Flow log record (default / custom format) | Bản ghi luồng (định dạng mặc định / tùy chỉnh) | Default v2: 14 trường; không sửa được sau khi tạo |
| Aggregation interval (capture window) | Khoảng gộp dữ liệu | 10 phút mặc định hoặc 1 phút; Nitro ≤ 1 phút |
| Flow log subscription | Đăng ký nhận log | Đường đi + quyền gửi log; 250/tài nguyên |
| ACCEPT / REJECT (flow log) | Được chấp nhận / Bị từ chối | Inbound ACCEPT + outbound REJECT ⇒ NACL |
| Traffic Mirroring | Sao chép lưu lượng | Copy gói tin đầy đủ (payload) từ ENI |
| AWS Network Firewall | Tường lửa mạng AWS | Managed stateful firewall + IPS (Suricata) ở biên VPC |
| IDS / IPS | Hệ thống phát hiện / ngăn chặn xâm nhập | |
| Deep packet inspection (DPI) | Kiểm tra sâu gói tin | Xem nội dung gói, không chỉ header |
| Suricata | IPS mã nguồn mở | Ngôn ngữ rule stateful của Network Firewall |
| Firewall endpoint / Firewall subnet | Điểm cuối tường lửa / Mạng con dành cho tường lửa | Mỗi AZ một; endpoint không lọc subnet chứa nó |
| Firewall policy / Rule group | Chính sách tường lửa / Nhóm quy tắc | Rule group stateless hoặc stateful |
| Stateless engine / Stateful engine | Bộ máy không trạng thái / có trạng thái | Stateless trước (pass/drop/forward), stateful sau (pass/drop/reject/alert) |
| Domain list rule group | Nhóm quy tắc danh sách tên miền | Allow list / deny list theo domain |
| Inspection VPC | VPC kiểm tra tập trung | Firewall trung tâm, nối VPC khác qua Transit Gateway |
| AWS Firewall Manager | Quản lý tường lửa tập trung | Áp chính sách WAF/Shield/SG/Network Firewall cho Organizations |
| VPC peering connection | Kết nối ngang hàng VPC | 1–1, pcx-…; 50/VPC (tối đa 125); không CIDR chồng lấn |
| Requester VPC / Accepter VPC | VPC yêu cầu / VPC chấp nhận | Request hết hạn sau 7 ngày nếu không accept |
| Inter-Region VPC peering | Peering liên vùng | Mã hóa, backbone AWS; MTU 8500; không tham chiếu SG |
| Transitive peering | Peering bắc cầu | Không hỗ trợ ⇒ dùng Transit Gateway |
| Edge-to-edge routing | Định tuyến biên-tới-biên | Không dùng IGW/NAT/VPN/DX/gateway endpoint của VPC peer |
| VPC endpoint | Điểm cuối VPC | Gateway / Interface / GWLB / Resource / Service network |
| Gateway endpoint | Điểm cuối kiểu cổng | S3 + DynamoDB; route table + prefix list; miễn phí; không từ on-prem |
| Interface endpoint | Điểm cuối kiểu giao diện mạng | ENI IP private mỗi AZ, có SG; phí giờ × AZ + GB; 10→100 Gbps |
| Endpoint network interface | Giao diện mạng của điểm cuối | ENI requester-managed trong mỗi subnet của endpoint |
| Private DNS (interface endpoint) | DNS riêng của endpoint | Private hosted zone ẩn; cần enableDnsHostnames + enableDnsSupport |
| VPC endpoint policy | Chính sách điểm cuối | IAM resource policy trên endpoint; mặc định allow all; ≤ 20.480 ký tự |
| AWS PrivateLink | Liên kết riêng AWS | Kết nối private tới dịch vụ như thể nằm trong VPC |
| Endpoint service | Dịch vụ điểm cuối | Provider host sau NLB/GWLB; allowed principals; acceptance |
| Service provider / Service consumer | Nhà cung cấp / Người dùng dịch vụ | Một chiều, consumer khởi tạo; CIDR trùng vẫn được |
| Resource endpoint / Resource gateway | Điểm cuối tài nguyên / Cổng tài nguyên | Truy cập DB/IP/domain chia sẻ qua RAM, không cần LB |
| AWS Transit Gateway | Cổng trung chuyển | Router ảo cấp Region, hub-and-spoke, bắc cầu; 5.000 attachment |
| Transit gateway attachment | Gắn kết transit gateway | VPC, VPN, DX gateway, peering, Connect, network function |
| Transit gateway route table | Bảng định tuyến của transit gateway | Static / propagated; blackhole; 20 bảng/TGW |
| Association / Route propagation | Liên kết / Lan truyền tuyến | 1 attachment ↔ 1 RT; propagate tới nhiều RT |
| Blackhole route | Tuyến hố đen | Drop traffic khớp đích |
| Appliance mode | Chế độ thiết bị | Định tuyến đối xứng qua cùng AZ cho firewall stateful |
| Transit gateway peering | Peering giữa transit gateway | Cùng/khác Region; chỉ static route |
| Hub-and-spoke | Mô hình trục-nan hoa | Một hub trung tâm nối các spoke |
| Network segmentation | Phân đoạn mạng | Nhiều TGW route table (giống VRF) |
| Resource share | Gói chia sẻ tài nguyên | RAM: tài nguyên + principal + managed permission |
| VPC sharing (shared subnet) | Chia sẻ VPC (subnet dùng chung) | Owner chia sẻ subnet cho participant cùng organization |
| VPC owner / Participant | Chủ VPC / Bên tham gia | Participant không sửa subnet/route table/NACL |
| Hybrid networking | Mạng lai | Nối on-premises / người dùng từ xa với VPC bằng IP private |
| AWS Site-to-Site VPN | VPN giữa hai mạng | IPsec qua internet; 2 tunnel/connection; 1,25 Gbps/tunnel; MTU 1446 |
| VPN tunnel | Đường hầm VPN | Mỗi VPN connection có 2 tunnel tới 2 endpoint AWS |
| Customer gateway (CGW) | Cổng phía khách hàng | Tài nguyên AWS mô tả thiết bị on-prem (IP, BGP ASN) |
| Customer gateway device | Thiết bị cổng phía khách hàng | Router/firewall thật ở on-premises |
| Target gateway | Cổng đích | VGW / transit gateway / Cloud WAN phía Amazon |
| Virtual private gateway (VGW) | Cổng riêng ảo | Gắn 1 VPC; ASN mặc định 64512; không ECMP, không IPv6 VPN |
| Static routing / Dynamic routing (BGP) | Định tuyến tĩnh / động | BGP khuyến nghị; bắt buộc cho CloudHub và ECMP |
| Border Gateway Protocol (BGP) | Giao thức cổng biên | Trao đổi route cho VPN động và Direct Connect |
| Autonomous System Number (ASN) | Số hiệu hệ thống tự trị | Private 16-bit 64512–65534; mỗi CGW trong CloudHub ASN riêng |
| ECMP (Equal Cost Multipath) | Định tuyến đa đường chi phí bằng nhau | Gộp tunnel VPN trên TGW; cần BGP |
| Accelerated Site-to-Site VPN | VPN được tăng tốc | Qua Global Accelerator; chỉ VPN gắn TGW; NAT-T bắt buộc |
| Large Bandwidth Tunnel | Tunnel băng thông lớn | 5 Gbps/tunnel; chỉ TGW / Cloud WAN |
| AWS VPN CloudHub | Trung tâm VPN đám mây | 1 VGW + nhiều VPN BGP ⇒ các chi nhánh nói chuyện với nhau |
| AWS Client VPN | VPN cho người dùng cá nhân | Managed, OpenVPN/TLS; tính giờ theo association + kết nối |
| Client VPN endpoint | Điểm cuối Client VPN | Nơi kết thúc phiên VPN của client |
| Target network | Mạng đích | Subnet VPC (1 subnet/AZ) hoặc Transit Gateway |
| Authorization rule | Quy tắc phân quyền | Nhóm AD/IdP được vào mạng nào; mặc định không có |
| Client CIDR range | Dải IP của client | /22 → /12; không chồng lấn VPC; không đổi được |
| Mutual authentication (Client VPN) | Xác thực hai chiều bằng chứng chỉ | Certificate trong ACM; kết hợp được với AD/SAML |
| Split-tunnel | Chia đường hầm | Chỉ traffic tới mạng có route đi qua VPN; giảm data transfer |
| AWS Direct Connect (DX) | Kết nối trực tiếp | Cáp quang riêng tới DX location; không mã hóa mặc định |
| Direct Connect location | Điểm kết nối Direct Connect | Data center có router AWS; gắn với một Region |
| Dedicated connection | Kết nối chuyên dụng | 1/10/100/400 Gbps; tự đặt; LOA-CFA; ≤ 51 VIF |
| Hosted connection | Kết nối qua đối tác | 50 Mbps–25 Gbps qua DX Partner; 1 VIF |
| LOA-CFA | Thư ủy quyền và chỉ định điểm kết nối | Dùng để đặt cross connect; tính phí sau 90 ngày nếu chưa active |
| Cross connect | Đấu nối chéo | Dây nối vật lý tới router AWS tại DX location |
| Virtual interface (VIF) | Giao diện ảo | VLAN 802.1Q + phiên BGP trên DX connection |
| Private / Public / Transit VIF | Giao diện ảo riêng / công khai / trung chuyển | VPC (MTU 9001) / dịch vụ AWS public / TGW qua DXGW (MTU 8500) |
| Direct Connect gateway | Cổng Direct Connect | Toàn cầu; 20 VGW / 6 TGW mỗi DXGW; không VPC↔VPC |
| Association proposal | Đề xuất liên kết | Account khác xin gắn VGW/TGW vào DX gateway |
| Link Aggregation Group (LAG) | Nhóm gộp liên kết | Gộp dedicated connection cùng tốc độ, cùng location |
| MACsec | Bảo mật lớp MAC | Mã hóa tầng 2 trên dedicated connection |
| Private IP VPN | VPN dùng IP riêng | IPsec trên transit VIF; cần DX gateway + TGW |
| Direct Connect Resiliency Toolkit | Bộ công cụ khả năng phục hồi Direct Connect | Maximum (99,99%) / High (99,9%) / Dev-test |
| SiteLink | Liên kết giữa các site | Nối hai DX location qua mạng AWS, không qua Region |
| Domain Name System (DNS) | Hệ thống phân giải tên miền | Dịch tên miền sang IP; cổng 53 |
| Amazon Route 53 | Dịch vụ DNS của AWS | Domain registration + DNS routing + health checking |
| Domain registrar / Domain registry | Nhà đăng ký tên miền / Cơ quan quản lý TLD | Registrar được ICANN công nhận; registry giữ CSDL của TLD |
| Top-level domain (TLD) | Tên miền cấp cao nhất | .com, .org (generic), .vn (geographic) |
| DNS resolver (recursive name server) | Bộ phân giải DNS đệ quy | Hỏi root → TLD → authoritative, cache theo TTL |
| Authoritative name server | Máy chủ tên có thẩm quyền | Route 53: 4 name server mỗi hosted zone |
| Hosted zone (public / private) | Vùng được lưu trữ (công khai / riêng tư) | Private: associate VPC, cần enableDnsHostnames + enableDnsSupport |
| Zone apex | Đỉnh vùng | example.com; không đặt CNAME, dùng alias |
| Alias record | Bản ghi bí danh | Tới ELB, CloudFront, S3 website…; miễn phí truy vấn; không đặt TTL |
| CNAME record | Bản ghi tên chuẩn | Trỏ tới tên miền bất kỳ; không ở apex; tính phí |
| Time to live (TTL) | Thời gian sống trong cache | Dài ⇒ rẻ, chậm cập nhật; NS điển hình 172.800 s |
| NS record / SOA record | Bản ghi máy chủ tên / Bản ghi khởi đầu thẩm quyền | Tự tạo; không xóa/sửa |
| Negative caching | Cache câu trả lời phủ định | NXDOMAIN/NODATA theo minimum TTL của SOA |
| Reusable delegation set | Bộ name server dùng lại | Cùng 4 name server cho nhiều hosted zone; chỉ qua API |
| Split-view DNS (split-horizon) | DNS chia góc nhìn | Public + private hosted zone cùng tên |
| Routing policy (Route 53) | Chính sách định tuyến | Simple, Weighted, Latency, Failover, Geolocation, Geoproximity, Multivalue, IP-based |
| Weighted / Latency-based routing | Định tuyến theo trọng số / theo độ trễ | Weight 0–255; latency chọn Region nhanh nhất |
| Failover routing | Định tuyến dự phòng | Primary/secondary – active-passive |
| Geolocation / Geoproximity routing | Định tuyến theo vị trí người dùng / theo khoảng cách địa lý | Geolocation cần default record; geoproximity có bias |
| Bias (geoproximity) | Độ lệch | -99 → +99; mở rộng/thu hẹp vùng phục vụ |
| Multivalue answer routing | Định tuyến trả nhiều giá trị | ≤ 8 record khỏe; không thay thế load balancer |
| IP-based routing / CIDR collection | Định tuyến theo IP nguồn / Bộ sưu tập dải IP | IPv4 /1–/24, IPv6 /1–/48; không dùng trong private zone |
| EDNS0 (edns-client-subnet) | Phần mở rộng DNS gửi subnet client | Ước lượng vị trí người dùng chính xác hơn |
| Traffic Flow / Traffic policy | Luồng lưu lượng / Chính sách lưu lượng | Trình soạn thảo trực quan kết hợp nhiều routing policy |
| Health check (Route 53) | Kiểm tra sức khỏe | Endpoint / calculated / CloudWatch alarm; >18% checker healthy |
| Calculated health check | Kiểm tra sức khỏe tổng hợp | Parent theo dõi tối đa 256 child; AND / OR / x of y |
| Evaluate Target Health | Đánh giá sức khỏe của đích | Alias dùng sức khỏe tài nguyên đích thay health check riêng |
| Active-active / Active-passive failover | Dự phòng chủ động kép / chủ động – chờ | Mọi policy trừ Failover / Failover policy |
| Route 53 (VPC) Resolver | Bộ phân giải DNS trong VPC | Địa chỉ VPC+2; có sẵn trong mọi VPC |
| Inbound / Outbound Resolver endpoint | Điểm cuối Resolver chiều vào / chiều ra | On-prem → VPC / VPC → on-prem qua VPN/DX |
| Resolver forwarding rule | Quy tắc chuyển tiếp DNS | Mỗi rule một domain; chia sẻ qua AWS RAM; thắng private zone trùng tên |
| Conditional forwarder | Chuyển tiếp có điều kiện | DNS on-prem gửi một domain tới inbound endpoint |
| Route 53 Profiles | Hồ sơ cấu hình DNS | Áp dụng cấu hình DNS cho nhiều VPC/account |
| DNSSEC | Mở rộng bảo mật DNS | Signing (KSK dựa trên KMS) và validation |
| Amazon CloudFront | Mạng phân phối nội dung (CDN) của AWS | Cache tại POP; AWS origin → CloudFront miễn phí data transfer |
| Origin Shield | Lá chắn origin | Tầng cache tập trung trước origin; gộp request; có phí |
| Distribution (CloudFront) | Bản phân phối | Cấu hình origin + cache behavior; tên *.cloudfront.net |
| Custom origin | Origin tùy biến | HTTP server: EC2, ALB, S3 website endpoint, on-prem |
| Origin group (origin failover) | Nhóm origin | Primary/secondary; mã 400/403/404/416/429/5xx; chỉ GET/HEAD/OPTIONS |
| Alternate domain name (CloudFront) | Tên miền thay thế | Chứng chỉ ACM phải ở us-east-1 |
| Origin Access Control (OAC) | Kiểm soát truy cập origin | SigV4; principal cloudfront.amazonaws.com + AWS:SourceArn; hỗ trợ SSE-KMS |
| Origin Access Identity (OAI) | Danh tính truy cập origin (cũ) | Legacy; không SSE-KMS, PUT/DELETE, Region mới |
| VPC origin | Origin trong VPC | ALB/NLB/EC2 ở private subnet; CloudFront là điểm vào duy nhất |
| Cache behavior / Path pattern | Hành vi cache / Mẫu đường dẫn | Khớp đầu tiên thắng; default * xét cuối |
| Cache key | Khóa cache | URL + header/cookie/query string trong cache policy |
| Cache hit ratio | Tỉ lệ trúng cache | Cache key nhỏ, TTL dài ⇒ cao |
| Cache policy / Origin request policy | Chính sách cache / Chính sách request tới origin | Cache key + TTL / chỉ gửi tới origin |
| Minimum / Default / Maximum TTL (CloudFront) | TTL tối thiểu / mặc định / tối đa | 0 / 86.400 / 31.536.000 giây |
| Invalidation | Vô hiệu hóa cache | 1.000 path/tháng miễn phí; wildcard = 1 path |
| Versioned file name | Tên file có phiên bản | Thay invalidation khi cập nhật thường xuyên |
| Signed URL / Signed cookie (CloudFront) | URL có chữ ký / Cookie có chữ ký | Một file / nhiều file, giữ nguyên URL |
| Canned policy / Custom policy | Chính sách dựng sẵn / tùy biến | Custom: thêm thời điểm bắt đầu, IP, wildcard |
| Trusted key group | Nhóm khóa tin cậy | Signer khuyến nghị; không cần root; 4 group/distribution, 5 key/group |
| Geo restriction (geo blocking) | Giới hạn địa lý | Allow/block list quốc gia; cả distribution; HTTP 403 |
| Price class | Hạng giá | All / 200 / 100 – giới hạn edge để giảm chi phí |
| CloudFront Functions | Hàm siêu nhẹ tại biên | JavaScript; viewer request/response; < 1 ms; triệu req/s |
| Lambda@Edge | Hàm Lambda tại biên | Node.js/Python; 4 sự kiện; tới 30 s; có mạng, đọc body |
| Viewer request / Origin request / Origin response / Viewer response | Bốn sự kiện của CloudFront | Origin trigger chỉ chạy khi cache miss |
| AWS Global Accelerator | Bộ tăng tốc toàn cầu | 2 static anycast IP; TCP/UDP; không cache |
| Anycast IP | IP quảng bá từ nhiều vị trí | Client tới edge gần nhất |
| Standard / Custom routing accelerator | Bộ tăng tốc chuẩn / định tuyến tùy biến | Endpoint tối ưu / EC2 + port cụ thể (VoIP, game) |
| Endpoint group (Global Accelerator) | Nhóm điểm cuối theo Region | Một Region; có traffic dial |
| Traffic dial | Núm điều chỉnh lưu lượng | % traffic endpoint group chấp nhận |
| Endpoint weight (Global Accelerator) | Trọng số điểm cuối | 0–255, mặc định 128 |
| Network zone | Vùng mạng cô lập | Mỗi static IP phục vụ từ một zone riêng |
| Amazon RDS (Relational Database Service) | Dịch vụ CSDL quan hệ được quản lý | Db2, MariaDB, SQL Server, MySQL, Oracle, PostgreSQL |
| DB instance (RDS) | Phiên bản CSDL | Khối xây dựng cơ bản của RDS; truy cập qua endpoint DNS |
| DB engine | Phần mềm CSDL | Mỗi engine có tính năng riêng |
| DB instance class | Lớp instance CSDL | db.m* / db.r*, x*, z* / db.c* / db.t* |
| DB parameter group / DB cluster parameter group | Nhóm tham số CSDL / Nhóm tham số cụm | Cấu hình engine |
| DB subnet group | Nhóm subnet của CSDL | Subnet ≥ 2 AZ; tối đa 20 subnet |
| Multi-AZ DB instance deployment | Triển khai đa AZ một standby | Đồng bộ; standby không đọc được; failover 60–120 s |
| Multi-AZ DB cluster deployment | Cụm CSDL đa AZ | 1 writer + 2 reader / 3 AZ; bán đồng bộ; failover < 35 s |
| Standby replica (RDS) | Bản sao dự phòng | Chỉ để failover |
| Semisynchronous replication | Sao chép bán đồng bộ | Commit khi ≥ 1 replica xác nhận |
| Asynchronous replication | Sao chép bất đồng bộ | Replica có thể trễ |
| Reboot with failover | Khởi động lại kèm chuyển dự phòng | Test failover Multi-AZ DB instance |
| Read replica (RDS) | Bản sao chỉ đọc | Async; tối đa 15/primary; cần automated backup |
| Cross-Region read replica | Bản sao đọc xuyên Region | DR, đọc gần người dùng; có phí transfer; KMS key Region đích |
| Promote (read replica) | Nâng bản sao thành độc lập | Thủ công; cắt sao chép |
| Replica lag | Độ trễ sao chép | Metric ReplicaLag |
| Automated backup (RDS) | Sao lưu tự động | Retention 0–35 ngày (console 7, CLI 1); log mỗi 5 phút |
| Manual DB snapshot / Final snapshot | Bản chụp thủ công / Bản chụp cuối | Giữ tới khi xóa; 100/Region |
| Latest restorable time | Thời điểm khôi phục mới nhất | ~5 phút trước; PITR tạo instance mới |
| Storage autoscaling (RDS) / Maximum storage threshold | Tự động mở rộng lưu trữ / Ngưỡng dung lượng tối đa | Free ≤ 10%, ≥ 5 phút; không bao giờ giảm |
| Amazon RDS Proxy | Proxy CSDL được quản lý | Pooling, failover nhanh, IAM auth; 20 proxy/Region |
| Connection pooling / Multiplexing | Gom kết nối / Ghép kênh kết nối | Tái sử dụng kết nối sau mỗi transaction |
| Pinning (RDS Proxy) | Ghim phiên | Giữ phiên trên một kết nối cố định |
| IAM database authentication | Xác thực CSDL bằng IAM | Token 15 phút; MariaDB/MySQL/PostgreSQL; bắt buộc SSL |
| Authentication token (RDS) | Mã xác thực tạm thời | Sinh bằng SigV4, generate-db-auth-token |
| Managed master user password | Mật khẩu master do RDS quản lý | Lưu Secrets Manager, rotate mặc định 7 ngày |
| Transparent Data Encryption (TDE) | Mã hóa dữ liệu trong suốt | Oracle / SQL Server |
| RDS Custom | RDS tùy biến | Có quyền OS; Oracle / SQL Server |
| Blue/Green Deployment (RDS) | Triển khai xanh/lam | Môi trường green đồng bộ rồi switchover |
| Enhanced Monitoring / Performance Insights | Giám sát OS thời gian thực / Phân tích tải CSDL | |
| Maintenance window (RDS) | Khung giờ bảo trì | Áp bản vá OS/engine hằng tuần |
| Amazon Aurora | CSDL quan hệ cloud-native của AWS | MySQL/PostgreSQL-compatible; throughput tới 6× |
| Aurora DB cluster | Cụm CSDL Aurora | 1 writer + 0–15 Aurora Replicas + 1 cluster volume |
| Cluster volume | Ổ đĩa ảo dùng chung của cụm | 6 bản sao / 3 AZ; tự tăng tới 256 TiB, tự giảm |
| Primary (writer) DB instance (Aurora) | Instance ghi chính | Xử lý DDL/DML; mỗi cluster một |
| Aurora Replica (reader instance) | Bản sao Aurora | Chỉ đọc, dùng chung volume; lag < 100 ms; đích failover |
| Cluster endpoint / Reader endpoint | Điểm cuối ghi / Điểm cuối đọc | Writer hiện tại / cân bằng kết nối giữa replica |
| Custom endpoint (Aurora) | Điểm cuối tùy chỉnh | Nhóm instance tự chọn; tối đa 5 / cluster |
| Instance endpoint (Aurora) | Điểm cuối của từng instance | Chẩn đoán, tuning |
| Promotion tier (failover priority) | Bậc ưu tiên nâng cấp | 0 (cao nhất) – 15; cùng tier ⇒ replica lớn nhất |
| Aurora Auto Scaling | Tự co giãn số Aurora Replica | Target tracking CPU/kết nối; 0–15; cooldown 300 s |
| Aurora Standard / Aurora I/O-Optimized | Cấu hình lưu trữ tiêu chuẩn / tối ưu I/O | I/O-Optimized khi phí I/O ≥ 25% tổng chi phí |
| Storage auto-repair | Tự sửa chữa lưu trữ | Sửa segment hỏng từ bản sao khác |
| Survivable page cache | Bộ đệm trang sống sót qua khởi động lại | Cache “ấm” sau restart |
| Aurora Serverless v2 | Aurora không máy chủ | Class db.serverless; scale từng 0,5 ACU; v1 đã deprecated |
| Aurora capacity unit (ACU) | Đơn vị năng lực Aurora | ≈ 2 GiB RAM; 0–256 (MySQL) / 384 (PostgreSQL) |
| Mixed-configuration cluster | Cụm cấu hình hỗn hợp | Trộn instance provisioned và serverless |
| Auto-pause (scale to zero) | Tự tạm dừng / co về 0 | Min 0 ACU; chờ 300 s–1 ngày; resume ~15 s |
| Aurora Global Database | CSDL toàn cầu Aurora | 1 primary + ≤ 10 secondary Region; lag < 1 s; RPO giây, RTO phút |
| Primary / Secondary cluster (Global Database) | Cụm chính / Cụm phụ | Nhận ghi / chỉ đọc (≤ 16 instance) |
| Global writer endpoint | Điểm cuối ghi toàn cầu | Luôn trỏ writer cluster chính, kể cả sau đổi Region |
| Write forwarding | Chuyển tiếp ghi | Cluster phụ gửi lệnh ghi về cluster chính |
| Switchover / Failover (Global Database) | Chuyển vai trò có kế hoạch / Chuyển dự phòng khi sự cố | RPO 0 / có thể mất dữ liệu (--allow-data-loss) |
| Split-brain / Write fencing | Hai nơi cùng nhận ghi / Rào chặn ghi | Rủi ro và biện pháp khi failover đa Region |
| Headless secondary cluster | Cụm phụ không instance | Chỉ có storage; thêm instance trước khi promote |
| Backtrack | Tua ngược cụm CSDL | Chỉ Aurora MySQL; ≤ 72 giờ; tại chỗ; bật khi tạo/restore/clone |
| Target / Actual backtrack window | Cửa sổ tua ngược mục tiêu / thực tế | Thực tế nhỏ hơn khi ghi nặng |
| Aurora cloning / Copy-on-write | Nhân bản cụm / Sao chép khi ghi | ≤ 15 clone COW; cùng Region; cross-account qua RAM |
| DB cluster snapshot | Bản chụp cụm CSDL | Thủ công, không hết hạn |
| Amazon DynamoDB | CSDL NoSQL serverless của AWS | Key-value & document; single-digit ms; 3 AZ; SLA 99,99% |
| NoSQL / Key-value / Document | CSDL phi quan hệ / Khóa – giá trị / Tài liệu | Không JOIN; denormalize |
| Table / Item / Attribute (DynamoDB) | Bảng / Mục / Thuộc tính | Item ≤ 400 KB; schemaless ngoài primary key |
| Partition key (hash attribute) | Khóa phân vùng | Băm để chọn partition |
| Sort key (range attribute) | Khóa sắp xếp | Sắp item cùng partition key |
| Composite primary key | Khóa chính tổng hợp | Partition key + sort key |
| Hot partition / Write sharding | Phân vùng nóng / Chia nhỏ ghi | Partition ≤ 3.000 RU/s + 1.000 WU/s |
| Adaptive capacity | Năng lực thích ứng | Cân bằng capacity cho partition nóng |
| Eventually / Strongly consistent read | Đọc nhất quán cuối cùng / Đọc nhất quán mạnh | Strongly chỉ cho table + LSI; eventually rẻ 1/2 |
| Read / Write capacity unit (RCU / WCU) | Đơn vị năng lực đọc / ghi | 4 KB (1 strongly / 2 eventually) / 1 KB mỗi giây |
| Read / Write request unit (RRU / WRU) | Đơn vị request đọc / ghi | Đơn vị tính tiền on-demand |
| On-demand / Provisioned capacity mode | Chế độ theo nhu cầu / Chế độ cấp phát trước | Provisioned→on-demand ≤ 4 lần/24 h |
| Throttling | Bóp băng thông | Request bị từ chối khi vượt capacity |
| Warm throughput | Thông lượng “ấm” | Mức phục vụ tức thì; pre-warm |
| Reserved capacity (DynamoDB) | Năng lực đặt trước | Giảm giá RCU/WCU provisioned |
| Table class (Standard / Standard-IA) | Lớp bảng | Standard-IA: storage rẻ, request đắt |
| Global secondary index (GSI) | Chỉ mục phụ toàn cục | Khóa bất kỳ; thêm lúc nào; eventually consistent; 20/bảng |
| Local secondary index (LSI) | Chỉ mục phụ cục bộ | Cùng partition key; tạo cùng bảng; ≤ 10 GB/key; 5/bảng |
| Projected attributes | Thuộc tính được chiếu | KEYS_ONLY / INCLUDE / ALL |
| DynamoDB Accelerator (DAX) | Bộ tăng tốc DynamoDB | Cache micro-giây; ≤ 11 node; prod ≥ 3 node/3 AZ |
| Item cache / Query cache | Bộ đệm item / Bộ đệm truy vấn | TTL item cache mặc định 5 phút; LRU |
| Write-through | Ghi xuyên | Ghi bảng rồi cache trong cùng thao tác |
| DynamoDB Streams / Stream record | Luồng thay đổi / Bản ghi luồng | CDC, giữ 24 giờ, exactly once |
| StreamViewType | Kiểu nội dung luồng | KEYS_ONLY, NEW_IMAGE, OLD_IMAGE, NEW_AND_OLD_IMAGES |
| Change data capture (CDC) | Thu thập dữ liệu thay đổi | |
| Time to Live (TTL – DynamoDB) | Thời gian sống của item | Number epoch giây; xóa trong vài ngày; không tốn WCU |
| Global table / Replica table | Bảng toàn cầu / Bảng bản sao | Multi-active; SLA 99,999%; 1 replica/Region |
| MREC / MRSC | Nhất quán cuối cùng đa Region / Nhất quán mạnh đa Region | MRSC: đúng 3 Region, RPO 0 |
| Last writer wins | Ghi sau cùng thắng | Giải quyết xung đột MREC |
| Witness (MRSC) | Nhân chứng | Giữ dữ liệu, không đọc/ghi |
| Fine-grained access control (DynamoDB) | Kiểm soát truy cập chi tiết | IAM tới mức item/attribute |
| Purpose-built database | CSDL chuyên dụng | Mỗi mô hình dữ liệu một dịch vụ |
| Polyglot persistence | Đa CSDL | Một ứng dụng dùng nhiều loại CSDL |
| In-memory data store | Kho dữ liệu trong bộ nhớ | Đọc micro-giây |
| Amazon ElastiCache | Bộ nhớ đệm in-memory được quản lý | Valkey, Memcached, Redis OSS; cache ephemeral |
| ElastiCache Serverless / Node-based cluster | Cache không máy chủ / Cụm theo node | Serverless: tạo < 1 phút, tự scale; node-based: tự chọn node type, số node, AZ |
| Valkey / Redis OSS / Memcached | Các engine cache | Memcached: multi-threaded, không replication/failover |
| Cluster mode (disabled / enabled) | Chế độ cụm | 1 shard scale dọc / nhiều shard scale ngang, online resharding |
| Shard (ElastiCache) | Phân mảnh | 1 primary + replica giữ một phần keyspace |
| Global Datastore | Kho dữ liệu toàn cầu | Cross-Region bất đồng bộ; secondary chỉ đọc, promote khi DR; chỉ node-based |
| Data tiering (ElastiCache) | Phân tầng dữ liệu | RAM + SSD, node r6gd |
| Lazy loading (cache-aside) | Nạp lười | Chỉ nạp khi cache miss; stale data |
| Cache hit / Cache miss | Trúng / trượt cache | Miss penalty = 3 lượt |
| Stale data | Dữ liệu cũ | Cache không khớp DB |
| Cache churn | Xáo trộn cache | Ghi dữ liệu không ai đọc (write-through) |
| Eviction | Loại bỏ key | Khi cache đầy, vd LRU |
| Session store | Kho lưu phiên tập trung | Giúp tầng web stateless |
| Sorted set | Tập có thứ tự | Leaderboard (ZADD, ZREVRANK) |
| Semantic caching | Cache ngữ nghĩa | Cache câu trả lời LLM theo độ tương đồng prompt |
| Amazon MemoryDB | CSDL in-memory bền vững | Valkey/Redis OSS, Multi-AZ durability, DB chính |
| Amazon DocumentDB | CSDL tài liệu tương thích MongoDB | 0–16 instance, 15 replica, 6 bản sao/3 AZ, 256 TiB |
| Document database | CSDL tài liệu | JSON bán cấu trúc |
| Elastic cluster (DocumentDB) | Cụm co giãn | Hàng triệu read/write/giây, petabyte |
| Amazon Neptune | CSDL đồ thị | Hàng tỉ quan hệ, ms; 15 replica |
| Property graph / RDF | Đồ thị thuộc tính / Khung mô tả tài nguyên | Gremlin, openCypher / SPARQL |
| Neptune Analytics | Neptune phân tích | Phân tích đồ thị in-memory, GraphRAG |
| Amazon Keyspaces | CSDL cột rộng tương thích Cassandra | Serverless, CQL, 3 bản sao |
| Wide-column | Cột rộng | Partition key + clustering column |
| CQL (Cassandra Query Language) | Ngôn ngữ truy vấn Cassandra | Giống SQL, không JOIN |
| Amazon Timestream | CSDL chuỗi thời gian | Serverless, trillions điểm/ngày |
| Memory store / Magnetic store | Kho bộ nhớ / Kho từ tính | Dữ liệu gần đây / lịch sử chi phí thấp |
| Ledger database (QLDB) | CSDL sổ cái | Journal bất biến, SHA-256; end of support |
| Loosely coupled | Ghép lỏng | Thành phần giao tiếp qua lớp bất đồng bộ (SQS/SNS) |
| Amazon SQS (Simple Queue Service) | Dịch vụ hàng đợi tin nhắn | Pull; retention 4 ngày (60 s – 14 ngày); message ≤ 1 MiB |
| Amazon SNS (Simple Notification Service) | Dịch vụ thông báo pub/sub | Push tới nhiều subscriber; message 256 KiB (nâng tới 1 MiB) |
| Producer / Consumer | Bên gửi / Bên nhận – xử lý | Consumer phải DeleteMessage sau khi xử lý |
| Publisher / Subscriber | Bên phát hành / Bên đăng ký nhận | Mô hình pub/sub |
| Topic / Subscription (SNS) | Chủ đề / Đăng ký nhận | Endpoint: SQS, Lambda, HTTP/S, Firehose, email, SMS, mobile push |
| Standard queue | Hàng đợi tiêu chuẩn | Throughput gần như không giới hạn, at-least-once, best-effort ordering |
| FIFO queue / FIFO topic | Hàng đợi / Chủ đề vào trước ra trước | Tên .fifo; 300 TPS, 3.000 msg/s có batch; SNS FIFO chỉ giao tới SQS |
| Best-effort ordering | Cố gắng giữ thứ tự | Không bảo đảm thứ tự |
| Exactly-once processing | Xử lý đúng một lần | FIFO, khoảng khử trùng 5 phút |
| Idempotent | Lũy đẳng | Xử lý lặp không đổi kết quả |
| MessageGroupId | Mã nhóm message | Thứ tự trong nhóm, song song giữa các nhóm; bắt buộc với FIFO |
| MessageDeduplicationId / Content-based deduplication | Mã khử trùng lặp / Khử trùng dựa trên nội dung | SHA-256 của body (không tính attributes) |
| High throughput mode (SQS FIFO) | Chế độ thông lượng cao | Tới 70.000 TPS ở một số Region |
| Visibility timeout | Thời gian ẩn message | Sau khi nhận; 30 s mặc định, 0 s – 12 giờ |
| In-flight message | Message đang được xử lý | Đã nhận chưa xóa; standard ~120.000 |
| Short polling / Long polling | Thăm dò ngắn / Thăm dò dài | Long polling tối đa 20 s, giảm empty response |
| Empty response | Phản hồi rỗng | ReceiveMessage không có message |
| Delay queue / Message timer | Hàng đợi trì hoãn / Hẹn giờ từng message | 0 – 15 phút, ẩn ngay khi vào queue |
| Message retention period | Thời gian lưu giữ message | SQS: 60 s – 14 ngày, mặc định 4 ngày |
| Dead-letter queue (DLQ) | Hàng đợi thư chết | Cùng account + Region; SNS DLQ gắn vào subscription |
| Redrive policy / maxReceiveCount | Chính sách chuyển hướng / Số lần nhận tối đa | Vượt maxReceiveCount ⇒ vào DLQ |
| Redrive allow policy / DLQ redrive | Chính sách cho phép redrive / Đẩy message về queue nguồn | byQueue tối đa 10 queue |
| Poison message | Message “độc” | Luôn làm consumer lỗi ⇒ DLQ |
| Extended Client Library (SQS/SNS) | Thư viện client mở rộng | Payload lớn lưu S3, tới 2 GB |
| A2A / A2P | Ứng dụng tới ứng dụng / Ứng dụng tới con người | SQS, Lambda, HTTP / email, SMS, push |
| Delivery policy (SNS) | Chính sách giao nhận | SQS/Lambda 100.015 lần/23 ngày; email/SMS 50 lần/6 giờ |
| Raw message delivery | Giao message nguyên bản | Bỏ JSON metadata của SNS; SQS, HTTP/S, Firehose |
| Subscription filter policy | Chính sách lọc của subscription | MessageAttributes / MessageBody; 200/topic; hiệu lực ≤ 15 phút |
| Event-driven architecture | Kiến trúc hướng sự kiện | Thành phần phát & phản ứng với event, ghép lỏng |
| Choreography / Orchestration | Biên đạo (phi tập trung) / Điều phối (tập trung) | EventBridge / Step Functions |
| Amazon EventBridge | Bộ định tuyến sự kiện serverless | Event bus + Pipes + Scheduler |
| Event bus (default / custom / partner) | Kênh sự kiện (mặc định / tự tạo / đối tác SaaS) | Default nhận event dịch vụ AWS |
| Event pattern | Mẫu khớp sự kiện | JSON lọc theo source, detail-type, detail… |
| Rule / Target (EventBridge) | Quy tắc / Đích nhận | Rule gắn 1 bus; ≤ 5 target/rule, chạy song song |
| Input transformer | Bộ biến đổi đầu vào | Đổi hình dạng event trước khi tới target |
| Managed rule | Rule do dịch vụ AWS quản lý | Chỉ xóa bằng Force delete |
| Archive / Replay (EventBridge) | Kho lưu sự kiện / Phát lại sự kiện | Replay chỉ về source bus; ≤ 10 replay đồng thời |
| API destination / Connection | Đích là API HTTPS / Kết nối xác thực | Basic, OAuth, API key (Secrets Manager); timeout 5 s |
| EventBridge Pipes / Enrichment | Đường ống điểm–điểm / Làm giàu dữ liệu | Source → filter → enrichment → target |
| Partner event source | Nguồn sự kiện đối tác | Event từ SaaS vào partner event bus |
| Subscriber (Custom Event Bus) | Bên đăng ký trên bus mới | 1 target/subscriber; retention 1–365 ngày, replay theo starting position |
| EventBridge Scheduler | Bộ lập lịch serverless | One-time/cron/rate, time zone; 10 triệu lịch/Region; retry ≤ 185 lần/24 giờ |
| One-time / Recurring schedule | Lịch chạy một lần / Lịch lặp lại | ActionAfterCompletion để tự xóa |
| Flexible time window | Cửa sổ thời gian linh hoạt | Dàn trải thời điểm gọi target |
| Templated / Universal target | Đích mẫu / Đích vạn năng | SQS, SNS, Lambda, PutEvents / 270+ dịch vụ, 6.000+ API |
| Schema / Schema registry | Lược đồ event / Kho lược đồ | OpenAPI 3, JSONSchema Draft4 |
| Schema discovery / Code bindings | Khám phá lược đồ / Mã ràng buộc sinh từ schema | Suy schema từ event trên bus; code có kiểu trong IDE |
| AWS Step Functions | Dịch vụ điều phối luồng công việc | State machine viết bằng ASL |
| State machine / Workflow | Máy trạng thái / Luồng công việc | Mỗi bước là một state, mỗi lần chạy là execution |
| Amazon States Language (ASL) | Ngôn ngữ định nghĩa state machine | JSON; JSONata hoặc JSONPath |
| Task / Choice / Parallel / Map / Wait state | Bước làm việc / Rẽ nhánh / Song song nhánh / Lặp trên dataset / Chờ | Pass, Succeed, Fail là các state khác |
| Distributed Map | Map phân tán | ≤ 10.000 child execution song song; chỉ Standard |
| Retry / Catch (Step Functions) | Thử lại / Bắt lỗi | Mặc định 1 s, 3 lần, backoff 2.0 |
| Activity (Step Functions) | Worker hoạt động bên ngoài | Poll GetActivityTask; chỉ Standard |
| Service integration pattern | Mẫu tích hợp dịch vụ | Request Response / .sync / .waitForTaskToken |
| Task token / Callback | Mã tác vụ / Gọi lại | SendTaskSuccess / SendTaskFailure; human approval |
| Standard / Express workflow | Luồng chuẩn / Luồng nhanh | ≤ 1 năm exactly-once / ≤ 5 phút at-least-once (sync: at-most-once) |
| At-most-once | Thực thi tối đa một lần | Synchronous Express workflow |
| Redrive (Step Functions) | Chạy tiếp execution lỗi | Từ bước hỏng, trong 14 ngày |
| Amazon MQ / Message broker | Message broker được quản lý / Bộ môi giới tin nhắn | ActiveMQ Classic, RabbitMQ; migrate không sửa code |
| JMS / AMQP / MQTT / STOMP / OpenWire | API / protocol messaging chuẩn | Dấu hiệu chọn Amazon MQ |
| Active/standby broker | Cặp broker chủ/dự phòng | ActiveMQ, 2 AZ, dùng chung EFS |
| Cluster deployment (RabbitMQ) | Triển khai cụm | 3 node nhiều AZ sau NLB, classic mirroring |
| Quorum queue | Hàng đợi nhân bản theo đa số | Leader/follower ở các AZ khác nhau |
| Failover transport | Cơ chế kết nối dự phòng | Client ActiveMQ nối endpoint -1/-2 |
| Serverless compute | Điện toán không máy chủ | AWS Lambda – trả theo request + GB-giây |
| Function / Handler (Lambda) | Hàm / Hàm xử lý chính | Điểm vào code mỗi lần invoke |
| Runtime (Lambda) | Môi trường ngôn ngữ chạy code | Node.js, Python, Java, .NET… / custom runtime |
| Trigger (Lambda) | Bộ kích hoạt | Dịch vụ push event; cấu hình ở dịch vụ nguồn (S3, SNS, API Gateway) |
| Execution environment | Môi trường thực thi | Firecracker microVM; Init → Invoke → Shutdown |
| Execution role (Lambda) | Vai trò thực thi | IAM role function assume để gọi dịch vụ AWS |
| Synchronous / Asynchronous invocation | Gọi đồng bộ / bất đồng bộ | RequestResponse / Event (202); async retry 2 lần, giữ ≤ 6 giờ |
| Event source mapping (ESM) | Ánh xạ nguồn sự kiện | Lambda poll SQS/Kinesis/DynamoDB Streams/MSK/MQ theo batch |
| Batching window | Cửa sổ gom lô | 0–300 giây; batch payload ≤ 6 MB |
| Function URL | URL gọi hàm | Endpoint HTTPS riêng của function |
| $LATEST / Function version / Function alias | Bản chưa phát hành / Phiên bản bất biến / Bí danh trỏ tới version | Provisioned concurrency & SnapStart chỉ trên version/alias |
| Qualified / Unqualified ARN | ARN có / không hậu tố version | Unqualified ⇒ gọi $LATEST |
| Ephemeral storage (/tmp) | Bộ nhớ đĩa tạm | 512 MB – 10.240 MB |
| Lambda destination (on success / on failure) | Đích nhận bản ghi kết quả | SQS, SNS, Lambda, EventBridge, S3 (chỉ failure); không FIFO |
| Maximum event age / Retry attempts | Tuổi tối đa của event / Số lần thử lại | ≤ 6 giờ / 0–2 (async) |
| Concurrency (Lambda) | Số lời gọi đồng thời | = RPS × thời gian xử lý; quota 1.000/Region |
| Reserved concurrency | Concurrency dành riêng | Trần + sàn, miễn phí; giữ 100 cho unreserved; = 0 để tắt |
| Unreserved concurrency | Concurrency dùng chung | Tối thiểu luôn 100 |
| Provisioned concurrency | Concurrency khởi tạo sẵn | Môi trường ấm, chống cold start, có phí |
| Concurrency scaling rate | Tốc độ tăng concurrency | 1.000 môi trường / 10 giây mỗi function |
| Cold start / Warm start | Khởi động lạnh / ấm | Init môi trường mới / tái sử dụng; cold start < 1% lời gọi |
| Init phase / Static initialization | Pha khởi tạo / Khởi tạo tĩnh | Code ngoài handler; giới hạn 10 giây |
| Lambda SnapStart | Khởi động nhanh từ ảnh chụp | Java 11+, Python 3.12+, .NET 8+; không cùng provisioned concurrency/EFS |
| Runtime hooks (SnapStart) | Móc trước snapshot / sau khôi phục | Khôi phục tính duy nhất (ID, seed) |
| Hyperplane ENI | Card mạng Hyperplane | ENI Lambda quản lý, dùng chung theo subnet + SG; 65.000 kết nối |
| AWSLambdaVPCAccessExecutionRole | Policy cho phép Lambda tạo ENI | Cần khi gắn function vào VPC |
| Lambda layer / Layer version | Lớp thư viện dùng chung / Phiên bản lớp | Giải nén vào /opt; tối đa 5; ≤ 250 MB giải nén |
| Container image (Lambda) | Ảnh container của hàm | Tới 10 GB, lưu ở ECR; không dùng layer |
| Amazon API Gateway | Cổng API được quản lý | REST / HTTP / WebSocket API; front door của serverless |
| Front door (API) | Cửa trước – điểm vào duy nhất | Client → API Gateway → back end |
| REST API / HTTP API (API Gateway) | API REST đầy đủ tính năng / API HTTP tối giản giá rẻ | REST: API key, cache, WAF, private; HTTP: JWT authorizer, rẻ hơn |
| WebSocket API | API giao tiếp hai chiều | Stateful; kết nối ≤ 2 giờ, idle 10 phút |
| Route / Route selection expression | Tuyến / Biểu thức chọn tuyến | $connect, $disconnect, $default (WebSocket) |
| @connections API | API đẩy message tới client WebSocket | POST theo connection ID |
| Resource / Method (API Gateway) | Đường dẫn / Phương thức HTTP | Vd GET /pets; {proxy+} gom đường dẫn |
| Integration (API Gateway) | Tích hợp back end | AWS_PROXY, AWS, HTTP, HTTP_PROXY, MOCK |
| Lambda proxy integration | Tích hợp ủy nhiệm Lambda | AWS_PROXY – chuyển nguyên request; khuyến nghị |
| AWS service integration | Tích hợp trực tiếp dịch vụ AWS | Gọi SQS/DynamoDB/Kinesis không cần Lambda |
| Mock integration | Tích hợp giả lập | API Gateway tự trả response |
| Mapping template | Mẫu ánh xạ dữ liệu | VTL, biến đổi request/response (REST) |
| VPC link | Liên kết VPC | Private integration tới NLB/ALB (Cloud Map với HTTP API) |
| Deployment (API Gateway) | Bản triển khai | Snapshot cấu hình API |
| Stage (API Gateway) | Giai đoạn triển khai | Tên tham chiếu tới deployment; cache, throttling, WAF, log |
| Stage variables | Biến của stage | ≤ 100/stage; trỏ tới Lambda alias |
| Canary release deployment | Triển khai thử nghiệm theo tỉ lệ | % traffic của stage sang bản mới; promote/rollback |
| Endpoint type (API Gateway) | Kiểu điểm cuối | Edge-optimized / Regional / private |
| Edge-optimized endpoint | Điểm cuối tối ưu biên | Qua CloudFront POP; mặc định REST API |
| Private API | API riêng tư | Chỉ từ VPC qua interface endpoint execute-api + resource policy |
| Custom domain name / Base path mapping | Tên miền tùy chỉnh / Ánh xạ đường dẫn gốc | Cert ACM; Route 53 alias |
| Token bucket | Thùng token | Rate = tốc độ nạp, burst = sức chứa |
| Rate / Burst (throttling) | Tốc độ ổn định / Sức chứa đột biến | 10.000 RPS / 5.000 mỗi account mỗi Region |
| Usage plan | Gói sử dụng | Throttling + quota theo API key (REST) |
| API key | Khóa API | Nhận diện client; không dùng để xác thực |
| API caching | Bộ nhớ đệm của API | Theo stage; TTL 300 s, tối đa 3.600 s; chỉ GET mặc định |
| Cache invalidation (API Gateway) | Vô hiệu mục cache | Cache-Control: max-age=0 + execute-api:InvalidateCache |
| Authorizer | Bộ ủy quyền | IAM, Cognito user pool, Lambda, JWT |
| IAM authorization (AWS_IAM) | Ủy quyền bằng IAM | Ký SigV4; execute-api:Invoke |
| Lambda authorizer (TOKEN / REQUEST) | Bộ ủy quyền bằng Lambda | Trả IAM policy + principalId; có authorization caching |
| JWT authorizer | Bộ ủy quyền JWT | Native trên HTTP API; Cognito/OIDC |
| Resource policy (API Gateway) | Chính sách gắn trên API | Cross-account, aws:SourceIp, aws:SourceVpce |
| 504 Gateway Timeout (API Gateway) | Hết thời gian chờ cổng | Back end vượt integration timeout 29 giây |
| Container / Container image (ECS, EKS) | Vùng chứa / Ảnh container | Docker/OCI; lưu ở ECR |
| Container orchestration | Điều phối container | ECS hoặc EKS (Kubernetes) |
| Amazon ECS | Dịch vụ điều phối container của AWS | Không vận hành control plane; 3 lớp capacity – controller – provisioning |
| Task definition / Revision | Bản thiết kế ứng dụng / Phiên bản | JSON: image, CPU/memory, network mode, IAM role, log, secrets |
| Task (ECS) | Bản chạy của task definition | Batch, chạy xong thì dừng (RunTask) |
| Service (ECS) | Dịch vụ chạy dài hạn | Duy trì desired count, thay task lỗi, gắn ALB/NLB |
| Scheduling strategy (REPLICA / DAEMON) | Chiến lược lập lịch | Duy trì số task / 1 task mỗi instance |
| Container agent | Tác tử container | Chạy trên instance, nhận lệnh start/stop từ ECS |
| Network mode (awsvpc / bridge / host) | Chế độ mạng của task | awsvpc: 1 ENI + SG / task, target type ip; Fargate bắt buộc awsvpc |
| Launch type (ECS) | Kiểu khởi chạy | EC2, Fargate, External; dùng để khai báo requiresCompatibilities |
| Capacity provider / Capacity provider strategy | Nhà cung cấp năng lực / Chiến lược phân bổ | FARGATE, FARGATE_SPOT, ASG, Managed Instances; base + weight |
| AWS Fargate | Compute serverless cho container | Mỗi task/Pod cô lập; 0,25–32 vCPU, ≤ 244 GB |
| Fargate Spot | Fargate dùng capacity dư giá rẻ | Cảnh báo 2 phút; EKS không hỗ trợ |
| Platform version (Fargate) | Phiên bản nền tảng Fargate | Kernel + runtime; task mới luôn chạy revision mới nhất |
| ECS Managed Instances | EC2 do ECS vận hành | AWS lo provision/patch/scale; chọn được GPU, loại instance |
| ECS Anywhere | ECS trên máy on-premises | External instance |
| Task IAM role | Vai trò IAM của task | Quyền cho code trong container; trust ecs-tasks.amazonaws.com |
| Task execution role | Vai trò thực thi task | Agent kéo ECR, ghi CloudWatch Logs, lấy secret; AmazonECSTaskExecutionRolePolicy |
| Container instance role | Vai trò của EC2 chạy container | AmazonEC2ContainerServiceforEC2Role; đăng ký cluster |
| Service Auto Scaling (ECS) | Tự động co giãn số task | Application Auto Scaling: target tracking, step, scheduled, predictive |
| Cluster Auto Scaling / Managed scaling | Tự động co giãn số EC2 của cluster | Qua ASG capacity provider |
| Backlog per task | Số message tồn mỗi task | Metric scale worker theo SQS |
| Amazon EKS | Kubernetes được quản lý | Control plane ≥ 2 API server + 3 etcd / 3 AZ; phí theo cluster |
| Control plane / Data plane (Kubernetes) | Mặt điều khiển / Mặt dữ liệu | API server + etcd / node chạy Pod |
| Pod / Node (Kubernetes) | Đơn vị chạy nhỏ nhất / Máy chạy Pod | |
| Managed node group | Nhóm node được quản lý | ASG do EKS quản lý, tự drain, On-Demand/Spot, không thêm phí |
| Self-managed nodes | Node tự quản lý | Toàn quyền, nhiều công nhất |
| Fargate profile | Hồ sơ Fargate | Chọn Pod chạy Fargate theo namespace/label; chỉ private subnet |
| EKS Auto Mode | Chế độ tự động của EKS | AWS quản lý cả node (data plane) |
| Karpenter | Bộ tự động co giãn cluster Kubernetes | Launch node đúng cỡ just-in-time |
| EKS Hybrid Nodes / EKS Anywhere | Node on-prem cho cluster EKS / Kubernetes on-prem do AWS hỗ trợ | |
| IAM roles for service accounts (IRSA) / EKS Pod Identity | Gán IAM role cho Pod | Qua Kubernetes service account |
| DaemonSet | Tập daemon – 1 Pod mỗi node | Không chạy trên Fargate |
| Amazon ECR / Private registry / Repository | Kho image / Kho đăng ký riêng / Kho chứa image | URL account.dkr.ecr.region.amazonaws.com |
| Authorization token (ECR) | Mã ủy quyền ECR | get-login-password; hiệu lực 12 giờ |
| Lifecycle policy (ECR) | Chính sách vòng đời image | imageCountMoreThan / sinceImagePushed; thực thi trong 24 giờ |
| Basic / Enhanced scanning (ECR) | Quét cơ bản / Quét nâng cao | OS, manual/on push / OS + package ngôn ngữ qua Inspector, continuous |
| Pull through cache | Bộ đệm kéo qua | Cache image từ registry upstream (Docker Hub, ECR Public…) |
| Tag immutability | Tag bất biến | Chặn ghi đè tag image |
| Registry permissions policy (ECR) | Chính sách quyền của registry | Đặt ở account đích cho cross-account replication |
| AWS App Runner | Chạy web app từ code/image | Fully managed; không nhận khách mới (thay bằng ECS Express Mode) |
| Streaming data | Dữ liệu luồng | Sinh liên tục, xử lý trong vài giây |
| Amazon Kinesis Data Streams (KDS) | Luồng dữ liệu thời gian thực | Shard, replay, put-to-get < 1 s |
| Data stream (Kinesis) | Luồng dữ liệu | Tập hợp các shard |
| Shard (Kinesis) | Phân mảnh | Ghi 1 MB/s · 1.000 rec/s; đọc 2 MB/s · 5 TPS |
| Data record / Data blob (Kinesis) | Bản ghi / Khối dữ liệu | Sequence number + partition key + blob bất biến |
| Partition key (Kinesis) | Khóa phân vùng | ≤ 256 ký tự, băm MD5 chọn shard; giữ thứ tự theo key |
| Sequence number (Kinesis) | Số thứ tự | Kinesis gán, tăng dần trong shard |
| Retention period (Kinesis) | Thời gian lưu giữ | 24 giờ mặc định → tối đa 365 ngày |
| On-demand Standard / On-demand Advantage (Kinesis) | Chế độ theo nhu cầu tiêu chuẩn / nâng cao | Advantage: cấp account, warm throughput, ≥ 25 MiB/s cam kết |
| Resharding (shard split / shard merge) | Chia lại shard (tách / gộp) | Theo cặp; UpdateShardCount; chỉ provisioned |
| Parent shard / Child shard | Shard cha / Shard con | Đọc hết shard cha trước shard con |
| Hot shard | Shard nóng | Key lệch ⇒ ProvisionedThroughputExceededException |
| Kinesis Producer Library (KPL) | Thư viện producer Kinesis | Batch, aggregation, retry |
| Kinesis Client Library (KCL) | Thư viện consumer Kinesis | Lease & checkpoint trong DynamoDB |
| Kinesis Agent | Tác tử gửi log | Theo dõi file log, gửi vào KDS/Firehose |
| Shared throughput consumer | Consumer dùng chung throughput | GetRecords, 2 MB/s/shard chia chung, ~200 ms |
| Enhanced fan-out (EFO) | Phân phối mở rộng | 2 MB/s/shard riêng mỗi consumer, HTTP/2 push, ~70 ms, ≤ 20 consumer |
| Shard iterator | Con trỏ đọc shard | Hết hạn sau 5 phút |
| Parallelization factor | Hệ số song song | Lambda 1–10 batch đồng thời/shard, giữ thứ tự theo key |
| IteratorAge | Tuổi iterator (độ trễ đọc) | Tăng ⇒ consumer xử lý không kịp |
| Amazon Data Firehose / Firehose stream | Dịch vụ chuyển dữ liệu luồng / Luồng Firehose | Tên cũ Kinesis Data Firehose / delivery stream |
| Direct PUT | Ghi trực tiếp | PutRecord/PutRecordBatch (500 rec hoặc 4 MiB) |
| Buffer size / Buffer interval | Kích thước / Thời gian bộ đệm | S3 mặc định 5 MB / 300 s; cái nào đạt trước giao trước |
| Zero buffering | Không đệm | Interval 0 s, giao trong vài giây (đích ứng dụng) |
| Data transformation (Firehose) | Biến đổi dữ liệu | Lambda đồng bộ, payload ≤ 6 MB, ≤ 5 phút |
| Record format conversion | Chuyển định dạng bản ghi | JSON → Parquet/ORC, schema trong Glue Data Catalog |
| Dynamic partitioning | Phân vùng động | Ghi vào S3 prefix theo khóa trong dữ liệu |
| Amazon Managed Service for Apache Flink | Xử lý luồng bằng Apache Flink | Tên cũ Kinesis Data Analytics |
| Amazon Kinesis Video Streams | Luồng video | Video từ camera/thiết bị |
| Amazon MSK | Apache Kafka được quản lý | Kafka mã nguồn mở, không sửa code |
| Broker / Topic / Partition (Kafka) | Máy chủ Kafka / Chủ đề / Phân vùng | Partition replicate giữa các AZ |
| ZooKeeper / KRaft controller | Bộ điều phối metadata Kafka | KRaft thay ZooKeeper, không tính phí |
| Standard broker / Express broker (MSK) | Broker tiêu chuẩn / Broker tốc hành | EBS ≤ 16 TiB / storage tự scale, 3× throughput, 3 AZ |
| MSK Serverless | MSK không máy chủ | Bắt buộc IAM auth; 200/400 MBps mỗi cluster |
| Tiered storage (MSK) | Lưu trữ phân tầng | Tầng rẻ, gần như vô hạn; chỉ Standard broker |
| MSK Connect / Source & sink connector | Kafka Connect được quản lý / Bộ kết nối nguồn & đích | Vd Debezium CDC, S3 sink |
| MSK Replicator | Bộ sao chép MSK | Giữa cluster cùng/khác Region |
| SASL/SCRAM | Xác thực bằng tên/mật khẩu | Lưu credential trong Secrets Manager (MSK) |
| Data lake | Hồ dữ liệu | S3 + Glue Data Catalog + Lake Formation; schema-on-read |
| Data warehouse | Kho dữ liệu | Redshift; schema-on-write, join lớn, BI |
| OLAP / OLTP | Xử lý phân tích / Xử lý giao dịch trực tuyến | OLAP ⇒ Redshift; OLTP ⇒ RDS/Aurora/DynamoDB |
| ETL / ELT | Trích xuất – Biến đổi – Nạp / Nạp rồi biến đổi | Glue job, EMR |
| Amazon Athena | Truy vấn SQL serverless trên S3 | Trả theo dữ liệu quét |
| Columnar format (Parquet / ORC) | Định dạng lưu theo cột | Nén theo cột, predicate pushdown, splitting |
| Predicate pushdown | Đẩy điều kiện lọc xuống tầng lưu trữ | Dùng min/max của block để bỏ qua block |
| Hive-style partition / MSCK REPAIR TABLE | Phân vùng dạng key=value / Lệnh nạp partition mới | Non-Hive ⇒ ALTER TABLE ADD PARTITION |
| Partition projection | Dự đoán partition | Athena tính partition từ thuộc tính bảng |
| CTAS (CREATE TABLE AS SELECT) | Tạo bảng từ kết quả truy vấn | Đổi CSV/JSON sang Parquet một lần |
| Workgroup (Athena) | Nhóm làm việc Athena | Tách team, data usage controls; ≤ 1.000/Region |
| Athena Federated Query / Data source connector | Truy vấn liên kết / Bộ kết nối nguồn | SQL trên DynamoDB, RDS…; connector chạy Lambda |
| SerDe | Bộ tuần tự hóa / giải tuần tự hóa | Cách đọc/ghi một định dạng |
| AWS Glue Data Catalog | Danh mục dữ liệu Glue | Chỉ metadata; 1 catalog/account/Region |
| Crawler / Classifier (Glue) | Trình thu thập / Bộ phân loại | Suy ra schema, tạo bảng & partition |
| Glue job / DPU | Tác vụ ETL / Đơn vị xử lý dữ liệu | Spark serverless, tính theo DPU-giờ |
| DynamicFrame | Khung dữ liệu động | Record tự mô tả schema |
| Job bookmark | Dấu trang tác vụ | Chỉ xử lý dữ liệu mới; mặc định Disable |
| Glue Studio / Glue DataBrew | Trình dựng ETL trực quan / Chuẩn bị dữ liệu không cần code | |
| FindMatches | Khử trùng lặp bằng ML | Tính năng Glue |
| AWS Lake Formation | Quản trị & phân quyền data lake | Grant/revoke mức database/bảng/cột/hàng/ô |
| Data filter / Cell-level security | Bộ lọc dữ liệu / Bảo mật mức ô | Tổ hợp cột + hàng (Lake Formation) |
| LF-Tags (LF-TBAC) | Kiểm soát truy cập dựa trên thẻ Lake Formation | Cách khuyến nghị để scale quyền |
| Credential vending | Cấp phát thông tin xác thực tạm thời | Lake Formation cấp cho engine đọc S3 |
| Resource link (Lake Formation) | Liên kết tài nguyên | Bên nhận cross-account tạo để Athena/Spectrum truy vấn |
| Hybrid access mode | Chế độ truy cập lai | Bật quyền Lake Formation dần dần cùng IAM |
| Leader node / Compute node / Slice | Node điều phối / Node tính toán / Lát xử lý | Redshift; chỉ trả tiền compute node |
| MPP | Xử lý song song quy mô lớn | Kiến trúc Redshift |
| RA3 / Redshift managed storage | Node RA3 / Lưu trữ được quản lý | SSD + S3; scale storage độc lập compute |
| Redshift Serverless / RPU | Redshift không máy chủ / Đơn vị xử lý Redshift | Không phí khi idle |
| Redshift Spectrum / External table | Truy vấn S3 từ Redshift / Bảng ngoài | Không nạp dữ liệu; cùng Region; chỉ đọc |
| Concurrency scaling (Redshift) | Mở rộng đồng thời | Thêm cluster tạm theo WLM queue |
| Cross-Region snapshot copy | Sao chép snapshot sang Region khác | DR cho Redshift |
| COPY / UNLOAD (Redshift) | Nạp song song từ S3 / Xuất ra S3 | |
| Primary / Core / Task node (EMR) | Node chính / Node lõi / Node tác vụ | Core giữ HDFS; task dùng Spot |
| EMRFS | Hệ thống tệp EMR | Truy cập S3 như file system |
| Transient cluster / Step (EMR) | Cluster tạm thời / Bước công việc | Chạy xong tự terminate |
| EMR Serverless / Pre-initialized capacity | EMR không máy chủ / Năng lực khởi tạo sẵn | Warm pool worker |
| Domain (OpenSearch) | Miền OpenSearch | Tương đương một cluster |
| Dedicated master node | Node quản lý cluster chuyên dụng | Bắt buộc khi dùng UltraWarm |
| UltraWarm / Cold storage | Tầng ấm / Tầng lạnh | S3, read-only, rẻ |
| OpenSearch Serverless / Collection / OCU | OpenSearch không máy chủ / Bộ sưu tập / Đơn vị tính toán | Time series, search, vector; OCU = 6 GiB RAM |
| OpenSearch Dashboards | Giao diện trực quan OpenSearch | Tương đương Kibana |
| Business intelligence (BI) | Trí tuệ kinh doanh | Dashboard, báo cáo |
| SPICE | Engine tính toán in-memory của QuickSight | Nhanh, dùng lại không tốn thêm |
| Row-level security (RLS) | Bảo mật mức hàng | QuickSight Enterprise |
| Machine learning (ML) / Artificial intelligence (AI) | Học máy / Trí tuệ nhân tạo | |
| Pretrained AI service | Dịch vụ AI huấn luyện sẵn | Chỉ gọi API, không cần chuyên môn ML |
| Model / Training / Inference | Mô hình / Huấn luyện / Suy luận (dự đoán) | |
| Computer vision | Thị giác máy tính | Rekognition, Lookout for Vision |
| Content moderation | Kiểm duyệt nội dung | Rekognition: ảnh/video không phù hợp |
| Face collection | Bộ sưu tập khuôn mặt | Storage-based API của Rekognition |
| Custom Labels (Rekognition) | Nhãn tùy chỉnh | Tự train bộ phân loại vật thể riêng |
| Face Liveness | Kiểm tra người thật | Chống giả mạo bằng ảnh in, video, deepfake |
| PPE detection | Phát hiện thiết bị bảo hộ cá nhân | Rekognition |
| OCR | Nhận dạng ký tự quang học | Textract còn trích form, bảng |
| Key-value pair (form) | Cặp khóa – giá trị trong biểu mẫu | Textract Analyze Document |
| Amazon Augmented AI (A2I) / Human review | Con người duyệt lại dự đoán ML | Textract, Rekognition, model riêng |
| NLP | Xử lý ngôn ngữ tự nhiên | Comprehend |
| Entity / Key phrase | Thực thể / Cụm từ khóa | Comprehend |
| Sentiment analysis / Targeted sentiment | Phân tích cảm xúc / Cảm xúc theo thực thể | positive / neutral / negative / mixed |
| PII redaction | Che thông tin nhận dạng cá nhân | Comprehend, Transcribe |
| Topic modeling | Mô hình hóa chủ đề | Gom tài liệu theo tần suất từ |
| Custom classification / Custom entity recognition | Phân loại tùy chỉnh / Nhận diện thực thể tùy chỉnh | Comprehend Custom (AutoML) |
| Neural machine translation | Dịch máy nơ-ron | Amazon Translate |
| Custom terminology | Thuật ngữ tùy chỉnh | Giữ đúng tên thương hiệu khi dịch |
| Enterprise search / Index (Kendra) | Tìm kiếm doanh nghiệp / Chỉ mục | Không còn nhận khách mới ⇒ Bedrock KB |
| Conversational interface / Chatbot | Giao diện hội thoại / Bot trò chuyện | Amazon Lex |
| ASR / NLU | Nhận dạng giọng nói tự động / Hiểu ngôn ngữ tự nhiên | Lex, Transcribe |
| Intent / Slot / Utterance | Ý định / Ô thông tin / Câu mẫu | Lex; fulfillment bằng Lambda |
| Speech-to-text / Text-to-speech (TTS) | Giọng nói → văn bản / Văn bản → giọng nói | Transcribe / Polly |
| Speaker diarization | Tách lời theo người nói | Transcribe |
| Custom vocabulary | Từ vựng tùy chỉnh | Transcribe; từ chuyên ngành |
| SSML / Lexicon | Ngôn ngữ đánh dấu tổng hợp giọng nói / Từ điển phát âm | Polly |
| Neural TTS (NTTS) | Giọng tổng hợp nơ-ron | Polly; tự nhiên hơn standard |
| Time-series forecasting | Dự báo chuỗi thời gian | Forecast (không nhận khách mới) ⇒ SageMaker Canvas |
| Data labeling / Ground Truth | Gán nhãn dữ liệu | SageMaker AI |
| Feature / Feature Store | Đặc trưng / Kho đặc trưng | Dùng chung giữa train và inference |
| AutoML / Autopilot | Học máy tự động | Dataset dạng bảng + cột mục tiêu |
| SageMaker Canvas | ML không cần code | Cho business analyst |
| Bias / Explainability (Clarify) | Thiên lệch / Khả năng giải thích | SageMaker Clarify |
| MLOps / SageMaker Pipelines | Vận hành ML / CI/CD cho ML | |
| Real-time / Serverless / Asynchronous inference | Suy luận thời gian thực / không máy chủ / bất đồng bộ | Serverless 1–6 GB, không GPU/VPC; Async ≤ 1 GB, ≤ 1 giờ |
| Batch transform | Suy luận theo lô | Không cần endpoint thường trực |
| Generative AI / Foundation model (FM) / LLM | AI tạo sinh / Mô hình nền tảng / Mô hình ngôn ngữ lớn | Amazon Bedrock |
| Prompt / Token | Câu lệnh đầu vào / Đơn vị tính văn bản | Bedrock tính giá theo token |
| RAG / Knowledge Base | Sinh có tăng cường truy xuất / Cơ sở tri thức | Bedrock Knowledge Bases, có citation |
| Embedding / Vector store | Vector biểu diễn ngữ nghĩa / Kho vector | OpenSearch Serverless, Aurora… |
| Hallucination | Ảo giác của model | Contextual grounding check |
| Guardrails (Bedrock) | Rào chắn an toàn GenAI | Content/topic/word/PII filter, input & output |
| Fine-tuning / Model distillation | Tinh chỉnh model / Chưng cất model | |
| AI agent | Tác tử AI | Bedrock Agents / AgentCore |
| Provisioned Throughput (Bedrock) | Năng lực xử lý cam kết | |
| AWS owned key | Khóa thuộc sở hữu AWS | Trong account dịch vụ; miễn phí, không audit, không quản lý |
| KMS key / Key material | Khóa KMS / Vật liệu khóa | Key material không rời HSM ở dạng plaintext |
| Key material origin (AWS_KMS / EXTERNAL) | Nguồn gốc vật liệu khóa | EXTERNAL = import (BYOK) |
| Bring your own key (BYOK) / Imported key material | Mang khóa của mình / Vật liệu khóa nhập vào | Không auto rotation; đặt hạn hoặc xóa để thu hồi |
| Symmetric / Asymmetric / HMAC key | Khóa đối xứng / bất đối xứng / khóa HMAC | Chỉ symmetric sinh data key, dùng cho dịch vụ AWS |
| KMS alias | Bí danh khóa KMS | `alias/...`; `aws/` dành cho AWS managed key; đổi trỏ khi manual rotation |
| Root key / Wrapping key (key-encryption key) | Khóa gốc / Khóa bọc | KMS key mã hóa data key |
| Data key caching | Lưu đệm khóa dữ liệu | AWS Encryption SDK; giảm request KMS |
| Key policy | Chính sách khóa | Bắt buộc, mỗi key đúng một, Regional; thiếu thì IAM allow vô hiệu |
| Grant / Grant token | Ủy quyền dùng khóa / Mã thông báo ủy quyền | Quyền tạm thời, chỉ allow; 50.000 grant/key |
| Key rotation (automatic / on-demand / manual) | Xoay vòng khóa (tự động / theo yêu cầu / thủ công) | Auto 90–2560 ngày (mặc định 365); manual cho asymmetric/HMAC |
| Waiting period / Pending deletion | Thời gian chờ xóa / Trạng thái chờ xóa | 7–30 ngày (mặc định 30), hủy được |
| Multi-Region key (primary / replica) | Khóa đa Region (chính / bản sao) | Cùng key ID `mrk-` + key material; policy độc lập |
| Hardware security module (HSM) | Mô-đun bảo mật phần cứng | |
| Single-tenant | Dành riêng một khách hàng | CloudHSM |
| FIPS 140-2 / 140-3 Level 3 | Chuẩn kiểm định mô-đun mật mã mức 3 | KMS HSM và CloudHSM |
| CloudHSM cluster | Cụm HSM | 1–28 HSM, đồng bộ, trải nhiều AZ |
| Custom key store (CloudHSM key store / External key store – XKS) | Kho khóa tùy chỉnh | Chỉ symmetric; 1.800 req/s; không SLA |
| Secret / Hard-coded credentials | Bí mật / Thông tin xác thực ghi cứng | Secrets Manager lấy lúc runtime |
| Secret rotation (managed / Lambda) | Xoay vòng bí mật | Managed: RDS, Aurora, DocumentDB, Redshift; Lambda: create→set→test→finish; dày nhất 4 giờ |
| Single user / Alternating users rotation | Xoay vòng một user / luân phiên hai user | Alternating cho high availability |
| Staging label (AWSCURRENT / AWSPENDING / AWSPREVIOUS) | Nhãn phiên bản secret | |
| Replica secret | Secret bản sao ở Region khác | Promote to standalone khi failover |
| Parameter / Parameter hierarchy | Tham số / Phân cấp tham số | Parameter Store, đường dẫn `/env/app/...` |
| SecureString | Chuỗi bảo mật | Parameter mã hóa bằng KMS |
| Standard / Advanced parameter tier | Bậc tiêu chuẩn / nâng cao | 10.000 & 4 KB miễn phí / 100.000 & 8 KB có phí, không hạ cấp |
| Parameter policy | Chính sách tham số | Expiration, ExpirationNotification, NoChangeNotification (Advanced) |
| Public parameter | Tham số công khai | AMI ID mới nhất do AWS công bố |
| AWS Private CA / Certificate authority (CA) | CA riêng / Cơ quan cấp chứng chỉ | Private certificate, export dùng nội bộ |
| DNS validation / Email validation | Xác thực tên miền qua DNS / qua email | DNS ⇒ ACM tự gia hạn |
| Managed renewal (ACM) | Gia hạn được quản lý | Bắt đầu 45 ngày trước hạn; cert 198 ngày; ARN không đổi |
| Wildcard certificate / Subject Alternative Name (SAN) | Chứng chỉ ký tự đại diện / Tên thay thế của chủ thể | `*.example.com` không gồm apex |
| Imported certificate | Chứng chỉ nhập từ ngoài | ACM không tự gia hạn |
| Certificate Transparency log | Nhật ký minh bạch chứng chỉ | Bắt buộc cho cert public ACM |
| ACME | Giao thức tự động cấp/gia hạn chứng chỉ | RFC 8555; cert public trên EC2 |
| Web ACL (protection pack) | Danh sách kiểm soát truy cập web | AWS WAF; default action Allow/Block; CloudFront scope ở us-east-1 |
| Rule / Rule group / Rule statement (WAF) | Quy tắc / Nhóm quy tắc / Câu lệnh kiểm tra | Rule group có capacity cố định |
| AWS Managed Rules | Bộ quy tắc WAF do AWS quản lý | Core rule set, Known bad inputs, SQL database, IP reputation |
| Terminating / Non-terminating action | Hành động kết thúc / không kết thúc đánh giá | Allow, Block / Count |
| CAPTCHA / Challenge action | Câu đố xác minh người / Thử thách ngầm JavaScript | Chống bot, có phí thêm, cần HTTPS |
| Web ACL capacity unit (WCU) | Đơn vị dung lượng web ACL | Tối đa 5.000; giá cơ bản gồm 1.500 |
| Rate-based rule | Quy tắc giới hạn tốc độ request | Window 60/120/300/600 s; limit tối thiểu 10; action khác Allow |
| Evaluation window / Aggregation key | Cửa sổ đánh giá / Khóa gom nhóm | Rate-based rule; IP, forwarded IP, custom keys |
| Scope-down statement | Câu lệnh thu hẹp phạm vi kiểm tra | Rate-based rule, managed rule group |
| Geo match / IP set / Regex pattern set | Khớp địa lý / Tập IP / Tập mẫu regex | Statement của WAF |
| Label (WAF) | Nhãn gắn vào request | Rule sau dùng label match |
| SQL injection / Cross-site scripting (XSS) | Chèn mã SQL / Chèn script chéo trang | Chặn bằng WAF |
| Bot Control / Fraud Control (ATP, ACFP) | Kiểm soát bot / Chống chiếm & tạo tài khoản gian lận | Managed rule group có phí |
| DDoS / HTTP flood | Tấn công từ chối dịch vụ phân tán / Làm ngập HTTP | L3/L4 Shield; L7 WAF rate-based |
| SYN flood / UDP reflection | Làm ngập gói SYN / Tấn công phản xạ UDP | Shield Standard chống |
| Application perimeter | Vành đai ứng dụng | Edge (CloudFront/Route 53/GA) hoặc VPC |
| Shield Standard / Shield Advanced | Chống DDoS cơ bản miễn phí / nâng cao trả phí | Advanced: SRT, cost protection, L7 auto mitigation |
| Shield Response Team (SRT) | Đội phản ứng DDoS của AWS | Cần Business/Enterprise Support |
| Proactive engagement | SRT chủ động liên hệ | Khi Route 53 health check unhealthy |
| Health-based detection | Phát hiện dựa trên health check | Shield Advanced, trừ hosted zone |
| Cost protection (Shield) | Bảo vệ chi phí | Service credit cho phí tăng do DDoS |
| Protection group (Shield) | Nhóm bảo vệ | Gom tài nguyên để phát hiện/giảm thiểu chung |
| Threat detection / Threat intelligence | Phát hiện mối đe dọa / Tình báo mối đe dọa | GuardDuty |
| Foundational data sources (GuardDuty) | Nguồn dữ liệu nền tảng | CloudTrail mgmt events, VPC Flow Logs, DNS logs; luồng độc lập |
| Protection plan (GuardDuty) | Gói bảo vệ mở rộng | S3, EKS, Runtime Monitoring, Malware, RDS, Lambda |
| Extended Threat Detection / Attack sequence | Phát hiện mở rộng / Chuỗi tấn công nhiều giai đoạn | GuardDuty, tự bật, miễn phí |
| Finding severity | Mức độ nghiêm trọng của phát hiện | Low 1-3,9 / Medium 4-6,9 / High 7-8,9 / Critical 9-10 |
| Cryptomining | Đào tiền mã hóa trái phép | Finding GuardDuty |
| Suppression rule / Trusted IP list / Threat list | Quy tắc ẩn finding / Danh sách IP tin cậy / Danh sách mối đe dọa | GuardDuty |
| Vulnerability management / CVE / CVSS | Quản lý lỗ hổng / Mã lỗ hổng công khai / Thang điểm lỗ hổng | Amazon Inspector |
| Network reachability / Unintended network exposure | Khả năng tiếp cận mạng / Phơi nhiễm mạng ngoài ý muốn | Inspector EC2 scanning |
| Inspector risk score | Điểm rủi ro theo ngữ cảnh | Điều chỉnh CVSS theo môi trường |
| Agent-based / Agentless / Hybrid scanning | Quét có agent / không agent / kết hợp | Inspector EC2: SSM Agent hoặc EBS snapshot |
| Managed / Custom data identifier | Bộ nhận dạng dữ liệu dựng sẵn / tùy chỉnh | Macie; custom = regex |
| Allow list (Macie) | Danh sách bỏ qua khi phát hiện | Tên/số công khai, dữ liệu test |
| Automated sensitive data discovery / Discovery job | Phát hiện tự động lấy mẫu / Tác vụ phát hiện chuyên sâu | Macie |
| Policy finding / Sensitive data finding | Phát hiện về cấu hình bucket / về dữ liệu nhạy cảm | Macie |
| Cloud Security Posture Management (CSPM) | Quản lý tư thế bảo mật đám mây | AWS Security Hub CSPM |
| Security standard / Security control / Security score | Chuẩn / Kiểm soát / Điểm bảo mật | FSBP, CIS, PCI DSS, NIST; cần AWS Config |
| AWS Security Finding Format (ASFF) | Định dạng finding bảo mật chuẩn | Security Hub |
| Cross-Region aggregation / Home Region / Linked Region | Tổng hợp xuyên Region / Region chính / Region liên kết | Security Hub, miễn phí, đồng bộ 2 chiều |
| Automation rule / Custom action (Security Hub) | Quy tắc tự động hóa / Hành động tùy chỉnh | Sửa/suppress finding; gửi EventBridge |
| Behavior graph / Finding group | Đồ thị hành vi / Nhóm phát hiện liên quan | Amazon Detective, tới 1 năm dữ liệu |
| Indicator of compromise (IOC) | Dấu hiệu xâm nhập | Detective Investigation |
| Namespace (CloudWatch) | Không gian tên metric | `AWS/<service>`; agent mặc định `CWAgent`; không có namespace mặc định |
| Dimension (CloudWatch) | Chiều phân loại metric | Cặp name/value, tối đa 30; mỗi tổ hợp là một metric riêng |
| Statistic / Period / Percentile | Thống kê / Chu kỳ tổng hợp / Bách phân vị | Average, Sum, Min, Max, SampleCount, p95/p99; period mặc định 60 giây |
| Standard / High-resolution metric | Metric độ phân giải chuẩn / cao | 1 phút / 1 giây (chỉ custom); high-res giữ 3 giờ |
| Metrics retention | Lịch lưu giữ metric | <60 s: 3 giờ; 1 phút: 15 ngày; 5 phút: 63 ngày; 1 giờ: 455 ngày (15 tháng) |
| Basic / Detailed monitoring (EC2) | Giám sát cơ bản / chi tiết | 5 phút miễn phí / 1 phút trả phí; không có memory |
| Custom metric / PutMetricData | Chỉ số tùy chỉnh / API publish metric | Mỗi lời gọi tính phí; timestamp -2 tuần đến +2 giờ |
| Statistic set | Tập thống kê gộp sẵn | Sum/Min/Max/SampleCount; mất percentile |
| Metric math | Phép toán trên metric | Gộp metric, tính tỷ lệ, gộp qua Region |
| Metric alarm / Composite alarm | Cảnh báo theo metric / Cảnh báo tổng hợp | Composite: AND/OR/NOT trạng thái alarm khác; không có EC2/ASG action |
| Evaluation Periods / Datapoints to Alarm (M out of N) | Số chu kỳ đánh giá / Số điểm vượt ngưỡng cần có | Điểm vượt không cần liên tiếp |
| Treat missing data | Cách xử lý dữ liệu thiếu | missing (mặc định), notBreaching, breaching, ignore |
| Anomaly detection (CloudWatch) | Phát hiện bất thường | Dải giá trị kỳ vọng học từ lịch sử metric |
| EC2 recover action | Hành động khôi phục instance | Chỉ với StatusCheckFailed_System; giữ instance ID, private IP, EIP |
| Log event / Log stream / Log group | Sự kiện log / Luồng log / Nhóm log | Retention, KMS, metric filter, subscription đặt ở log group |
| Log retention setting | Thời gian lưu giữ log | Mặc định Never Expire |
| Log class (Standard / Essentials) | Hạng log group | Essentials (trước là Infrequent Access) rẻ hơn, không metric/subscription filter; không đổi sau khi tạo |
| Metric filter | Bộ lọc biến log thành metric | Không hồi tố; chỉ Standard class |
| Subscription filter (CloudWatch Logs) | Bộ lọc chuyển tiếp log | Kinesis Data Streams / Data Firehose / Lambda / OpenSearch; ≤ 5/log group |
| Export task (CloudWatch Logs) | Tác vụ xuất log theo lô | Sang S3; log sẵn sàng tới 12 giờ; không dùng để archive liên tục |
| CloudWatch Logs Insights | Truy vấn & phân tích log tương tác | Logs Insights QL / PPL / SQL; timeout 60 phút; tính phí theo GB quét |
| CloudWatch agent (unified) | Tác nhân CloudWatch hợp nhất | Memory, disk, log file, StatsD/collectd, trace; EC2 + on-premises |
| Cross-account observability / Monitoring account | Quan sát xuyên account / Account giám sát | Xem metric, log, trace của source account |
| Synthetics canary / Real User Monitoring (RUM) | Script giám sát chủ động / Giám sát người dùng thật | |
| Event history (CloudTrail) | Lịch sử sự kiện | 90 ngày management events, theo Region, miễn phí |
| Trail / Multi-Region trail / Organization trail | Đường ghi log / cho mọi Region / cho cả Organization | Giao S3 (+ CloudWatch Logs, EventBridge); tối đa 5 trail/Region |
| Management events (control plane) | Sự kiện quản lý | Mặc định được ghi; Read / Write |
| Network activity events | Sự kiện hoạt động mạng | API call qua VPC endpoint |
| CloudTrail Insights | Phát hiện hoạt động API bất thường | API call rate / API error rate so với baseline |
| Log file integrity validation / Digest file | Xác thực toàn vẹn file log / File tóm lược | SHA-256 + RSA; digest mỗi giờ |
| CloudTrail Lake / Event data store | Kho dữ liệu sự kiện CloudTrail | SQL, ORC; giữ tới 3.653 ngày |
| Event selector (basic / advanced) | Bộ chọn sự kiện | Lọc eventName, eventSource, userIdentity.arn, readOnly |
| Configuration recorder / Configuration item (CI) | Bộ ghi cấu hình / Mục cấu hình | Ảnh chụp tài nguyên tại một thời điểm |
| Configuration history / snapshot / stream | Lịch sử / Ảnh chụp toàn cảnh / Luồng cấu hình | History & snapshot vào S3; stream qua SNS |
| Delivery channel (AWS Config) | Kênh phân phối | S3 bucket + SNS topic |
| Config rule (managed / custom Lambda / custom Guard) | Quy tắc đánh giá tuân thủ | Chỉ phát hiện, không chặn |
| Trigger type (configuration changes / periodic / hybrid) | Kiểu kích hoạt đánh giá rule | |
| COMPLIANT / NON_COMPLIANT / NOT_APPLICABLE | Tuân thủ / Không tuân thủ / Không áp dụng | Kết quả đánh giá Config rule (thêm ERROR) |
| Conformance pack | Gói tuân thủ | Rule + remediation trong YAML; account/Region hoặc cả Organization |
| Aggregator (AWS Config) | Bộ tổng hợp dữ liệu Config | Nhiều account/Region; chỉ đọc; miễn phí |
| SSM Automation document (runbook) | Tài liệu tự động hóa | Dùng cho Config remediation; manual/automatic, retries |
| Infrastructure as Code (IaC) | Hạ tầng dưới dạng mã | CloudFormation, CDK, Terraform |
| CloudFormation template / Stack | Mẫu mô tả hạ tầng / Ngăn xếp tài nguyên | YAML/JSON; chỉ Resources bắt buộc; 500 resource/template |
| Logical ID / Physical ID | Định danh logic / Định danh vật lý | Tên trong template / ID tài nguyên thật |
| Parameters / Mappings / Conditions / Outputs (template) | Tham số / Bảng tra cứu / Điều kiện / Đầu ra | Fn::FindInMap, Export |
| Intrinsic function | Hàm nội tại | Ref, GetAtt, Sub, FindInMap, ImportValue |
| Transform / AWS SAM / AWS CDK | Macro template / Mô hình ứng dụng serverless / Bộ công cụ hạ tầng bằng code | AWS::Serverless, AWS::Include |
| Stack failure options | Tùy chọn khi stack lỗi | Roll back all / Preserve successfully provisioned resources |
| DeletionPolicy | Chính sách khi xóa | Delete (mặc định), Retain, RetainExceptOnCreate, Snapshot |
| Stack policy | Chính sách bảo vệ stack | Chỉ áp dụng khi update; Deny thắng Allow |
| Termination protection (stack) | Chống xóa nhầm stack | |
| Nested stack / Root stack | Stack lồng / Stack gốc | AWS::CloudFormation::Stack |
| Cross-stack reference | Tham chiếu chéo giữa stack | Outputs Export + Fn::ImportValue |
| Change set | Bộ thay đổi đề xuất | Xem trước Add/Modify/Remove, Replacement |
| Update with No Interruption / Some Interruption / Replacement | Cập nhật không gián đoạn / có gián đoạn / thay thế | Replacement tạo physical ID mới |
| StackSets / Stack instance | Bộ stack đa account-Region / Thực thể stack | Một instance cho mỗi cặp account–Region |
| Administrator account / Target account (StackSets) | Tài khoản quản trị / Tài khoản đích | |
| Self-managed / Service-managed permissions | Quyền tự quản lý / Quyền do dịch vụ quản lý | Service-managed qua Organizations, có automatic deployment |
| Maximum concurrent accounts / Failure tolerance | Số account chạy đồng thời / Ngưỡng lỗi chấp nhận | Tính mỗi Region |
| Elastic Beanstalk application / Application version / Environment | Ứng dụng / Phiên bản ứng dụng / Môi trường | Version là source bundle trên S3 |
| Web server tier / Worker tier | Tầng web / Tầng xử lý nền | Worker: SQS + daemon sqsd, cron.yaml |
| Saved configuration | Cấu hình đã lưu | API gọi là configuration template |
| Deployment policy (Elastic Beanstalk) | Chính sách triển khai | All at once, Rolling, Rolling with additional batch, Immutable, Traffic splitting |
| Immutable update | Cập nhật bất biến | ASG thứ hai, rollback bằng terminate instance mới |
| Traffic splitting | Chia traffic kiểu canary | Cần ALB |
| Swap environment URLs (CNAME swap) | Hoán đổi URL môi trường | Blue/green trên Beanstalk |
| Managed node / SSM Agent | Node được quản lý / Tác nhân SSM | Agent chủ động kết nối ra 443 |
| Default Host Management Configuration | Cấu hình quản lý host mặc định | Quyền SSM cho mọi EC2 IMDSv2 trong account/Region |
| Hybrid Activation | Kích hoạt máy ngoài AWS | Activation code + ID |
| Session Manager | Trình quản lý phiên | Không inbound port, không bastion, không SSH key |
| Run Command / Command document | Chạy lệnh từ xa / Tài liệu lệnh SSM | AWS-RunShellScript; miễn phí trên EC2 |
| Rate control (max-concurrency / max-errors) | Kiểm soát tốc độ | Mặc định 50 / 0 |
| Patch Manager / Patch baseline | Trình quản lý bản vá / Đường cơ sở bản vá | Auto-approve sau N ngày; Scan / Scan and install |
| Patch policy (Quick Setup) | Chính sách vá | Nhiều account/Region trong Organization |
| Maintenance Windows (Systems Manager) | Cửa sổ bảo trì | Lịch chạy tác vụ quản trị |
| State Manager / Association | Bộ quản lý trạng thái / Liên kết | Giữ node ở cấu hình mong muốn |
| Inventory / Fleet Manager | Kiểm kê phần mềm / Quản lý fleet | |
| Business continuity plan (BCP) | Kế hoạch kinh doanh liên tục | Kế hoạch DR là tập con của BCP |
| Business impact analysis (BIA) | Phân tích tác động kinh doanh | Xác định RTO/RPO cho từng workload |
| Risk assessment | Đánh giá rủi ro | Loại thảm họa, phạm vi, xác suất |
| Backup and restore (DR) | Sao lưu và khôi phục | Rẻ nhất; RPO/RTO giờ; cần IaC để dựng lại |
| Pilot light | Ngọn lửa mồi | Dữ liệu live, app server "tắt" ở Region DR |
| Warm standby | Dự phòng ấm | Bản thu nhỏ đầy đủ chức năng luôn chạy, chỉ cần scale up |
| Hot standby | Dự phòng nóng | Đủ capacity production nhưng không nhận traffic |
| Multi-site active/active | Đa địa điểm cùng hoạt động | Mọi Region phục vụ; RTO gần 0; đắt nhất |
| Statically stable | Ổn định tĩnh | Chịu tải khi sự cố mà không cần thao tác control plane |
| Failback | Quay về hệ thống chính | Chuyển traffic từ hệ thống khôi phục về site gốc |
| Read local | Đọc tại chỗ | Đọc từ Region gần người dùng nhất |
| Write global / Write local / Write partitioned | Ghi tập trung / Ghi tại chỗ / Ghi phân vùng theo khóa | Aurora Global DB / DynamoDB global tables / S3 replication hai chiều |
| Amazon Application Recovery Controller (ARC) | Bộ điều khiển khôi phục ứng dụng | Routing control = công tắc failover trên data plane |
| AWS Resilience Hub | Trung tâm đánh giá khả năng phục hồi | Theo dõi khả năng đạt RTO/RPO |
| AWS Elastic Disaster Recovery (DRS) | Dịch vụ khôi phục thảm họa đàn hồi | Block-level liên tục; RPO giây, RTO 5–20 phút |
| Source server (DRS) | Máy chủ nguồn | Cài AWS Replication Agent |
| Staging area subnet / Replication server | Subnet vùng trung chuyển / Máy chủ sao chép | TCP 1500 dữ liệu, TCP 443 điều khiển |
| Recovery instance / Drill | Instance khôi phục / Diễn tập khôi phục | Drill không gián đoạn production |
| Point-in-time (PIT) snapshot (DRS) | Ảnh chụp tại một thời điểm | 10 phút/1 giờ, 1 giờ/24 giờ, ngày/1–365 ngày (mặc định 7) |
| Crash-consistent | Nhất quán như sau sự cố mất điện | Không gồm dữ liệu chỉ nằm trong RAM |
| Failback Client | Trình khách quay về | Sao chép ngược về site gốc; chỉ x86_64 |
| Migration strategy / 7 Rs | Chiến lược di chuyển | Retire, Retain, Rehost, Relocate, Repurchase, Replatform, Refactor |
| Retire | Ngừng sử dụng | Tắt/lưu trữ ứng dụng không còn giá trị |
| Retain | Giữ lại | Để ở môi trường nguồn (mainframe, data residency, mới nâng cấp) |
| Rehost (lift and shift) | Chuyển nguyên trạng | Không đổi ứng dụng; AWS MGN |
| Relocate | Chuyển nguyên nền tảng | Cùng nền tảng trên cloud; hoặc sang VPC/Region/account khác |
| Repurchase (drop and shop) | Mua lại sản phẩm khác | Thường chuyển sang SaaS |
| Replatform (lift, tinker, and shift) | Đổi nền tảng, tối ưu một phần | Vd SQL Server → Amazon RDS for SQL Server |
| Refactor / Re-architect | Tái cấu trúc | Cloud-native; phức tạp, tốn kém nhất |
| Zombie / Idle application | Ứng dụng xác sống / nhàn rỗi | CPU & RAM < 5% / 5–20% trong 90 ngày |
| Wave (migration) | Đợt di chuyển | Nhóm ứng dụng di chuyển cùng nhau |
| Cutover | Chuyển giao sang hệ thống mới | Thời điểm chuyển production sang AWS |
| AWS Application Discovery Service | Dịch vụ khám phá ứng dụng | Không còn mở cho KH mới; dữ liệu ở Migration Hub home Region |
| Agentless Collector / Discovery Agent | Bộ thu thập không cần agent / Agent khám phá | OVA trên vCenter (~60 phút) / cài từng server (~15 giây, có process) |
| AWS Migration Hub / Home Region | Trung tâm di chuyển / Vùng gốc | Theo dõi tiến độ từ MGN, DMS; không còn mở cho KH mới từ 11/2025 |
| DMS Fleet Advisor | Bộ tư vấn đội database | Kiểm kê SQL Server, MySQL, Oracle, PostgreSQL |
| AWS Application Migration Service (MGN) | Dịch vụ di chuyển ứng dụng | Tên mới AWS Transform MGN; block-level liên tục; cutover vài phút |
| Replication / Launch / Post-launch template (MGN) | Mẫu sao chép / khởi chạy / sau khởi chạy | Override được theo từng server |
| Test instance / Cutover instance (MGN) | Instance kiểm thử / Instance chuyển giao | Test ≥ 2 tuần trước cutover; ≤ 100 server mỗi lần launch |
| Conversion server (MGN) | Máy chủ chuyển đổi | Chỉnh disk để boot native trên EC2 |
| Finalize cutover | Hoàn tất chuyển giao | Dừng sao chép, terminate tài nguyên staging, rồi archive |
| AWS Database Migration Service (DMS) | Dịch vụ di chuyển cơ sở dữ liệu | Homogeneous & heterogeneous |
| Replication instance (DMS) | Instance sao chép | EC2 được quản lý; 50/100 GB; Multi-AZ |
| Source / Target endpoint (DMS) | Điểm kết nối nguồn / đích | Phải test connection thành công |
| Replication task (DMS) | Tác vụ sao chép | Full load / Full load + CDC / CDC only |
| Full load | Nạp toàn bộ | Copy dữ liệu hiện có |
| Ongoing replication (DMS CDC) | Sao chép liên tục | Đọc transaction log; không real-time, không SLA latency |
| LOB mode (Full / Limited) | Chế độ xử lý đối tượng lớn | Full chậm hơn; Limited cắt theo Max LOB Size |
| DMS Serverless / DMS capacity unit (DCU) | DMS không máy chủ / Đơn vị năng lực DMS | 1 DCU = 2 GB RAM; autoscale min–max |
| Homogeneous / Heterogeneous migration | Di chuyển cùng loại / khác loại engine | Khác loại cần chuyển schema trước |
| DMS Schema Conversion / AWS SCT | Chuyển đổi lược đồ (managed) / Công cụ chuyển đổi lược đồ (cài máy) | Chuyển schema + code, không chuyển dữ liệu |
| Extension pack | Gói mở rộng | Giả lập tính năng nguồn mà đích không có |
| Bidirectional replication / Loopback prevention | Sao chép hai chiều / Chống vòng lặp | Không phải multi-master, không giải quyết xung đột |
| VM Import/Export | Nhập/xuất máy ảo | Image VM ↔ AMI; không sao chép liên tục |
| Consumption model | Mô hình trả theo mức dùng | Dev/test tắt ngoài giờ tiết kiệm ~75% (40/168 giờ) |
| Cost allocation tag | Thẻ phân bổ chi phí | Phải activate ở management account; ≤ 24 giờ để hiện; ≤ 500 active key |
| User-defined tag / AWS-generated tag | Tag do người dùng định nghĩa / Tag do AWS tạo | Tiền tố user: / aws: (vd aws:createdBy) |
| AWS Cost Categories | Danh mục chi phí | Rule theo account/tag/service…; hiệu lực từ đầu tháng |
| Split charges | Chia chi phí dùng chung | Phân bổ chi phí shared cho các cost category value |
| Chargeback / Showback | Tính lại chi phí / Hiển thị chi phí cho bộ phận | FinOps |
| AWS Cost Explorer | Công cụ khám phá chi phí | 13 tháng (38 nếu bật), dự báo 18 tháng, API $0.01/request |
| Unblended / Amortized cost | Chi phí chưa phân bổ / Chi phí phân bổ đều | Amortized chia phí upfront RI/SP theo thời gian |
| Utilization / Coverage (RI, SP) | Mức sử dụng cam kết / Độ phủ của cam kết | Theo dõi bằng Cost Explorer report hoặc Budgets |
| AWS Budgets | Ngân sách AWS | Cost, usage, RI/SP utilization & coverage; cập nhật ≤ 3 lần/ngày |
| Actual / Forecasted alert | Cảnh báo theo thực tế / theo dự báo | Forecast cần ~5 tuần dữ liệu; 10 email + 1 SNS/alert |
| Budget action | Hành động ngân sách | IAM policy, SCP, stop EC2/RDS; 2 budget có action miễn phí, sau đó $0.10/ngày |
| AWS Cost Anomaly Detection | Phát hiện chi phí bất thường | ML, root cause theo service/account/Region/usage type, ~3 lần/ngày |
| AWS Cost and Usage Report (CUR) | Báo cáo chi phí và mức sử dụng | Chi tiết nhất, giao vào S3, Athena/Redshift/QuickSight |
| AWS Data Exports / CUR 2.0 / FOCUS | Xuất dữ liệu billing / CUR thế hệ 2 / Chuẩn mở dữ liệu chi phí | CUR 2.0 là cách khuyến nghị |
| AWS Compute Optimizer | Bộ tối ưu tài nguyên tính toán | Opt in; lookback 14 ngày; memory cần CloudWatch agent |
| Under-provisioned / Over-provisioned / Optimized | Thiếu / Thừa tài nguyên / Đã tối ưu | Finding classification của Compute Optimizer |
| Enhanced infrastructure metrics | Metrics hạ tầng nâng cao | Lookback 93 ngày, trả phí |
| Lookback period | Khoảng thời gian nhìn lại | |
| Performance risk / Migration effort | Rủi ro hiệu năng / Công sức chuyển đổi | Compute Optimizer (vd sang Graviton) |
| Cost Optimization Hub | Trung tâm tối ưu chi phí | Gom, khử trùng lặp khuyến nghị đa account/Region |
| Idle resource | Tài nguyên nhàn rỗi | |
| Data transfer cost / Data transfer modeling | Chi phí truyền dữ liệu / Mô hình hóa luồng dữ liệu | COST08; cross-AZ, cross-Region, Internet out có phí |
| NAT gateway data processing charge | Phí xử lý dữ liệu NAT gateway | Theo GB; giảm bằng gateway endpoint, NAT mỗi AZ |
| AWS Pricing Calculator | Công cụ ước tính giá | Ước tính trước khi triển khai |
| Unscored question | Câu hỏi không tính điểm | 15 câu thử nghiệm ẩn trong 65 câu SAA-C03 |
| Flag for review | Đánh dấu để xem lại | Chọn tạm đáp án, quay lại ở lượt 2 |
| Process of elimination | Phương pháp loại trừ | Loại phương án vi phạm ràng buộc trước |
| AWS Decision Guides | Hướng dẫn ra quyết định của AWS | So sánh có cấu trúc giữa các dịch vụ (vd SQS/SNS/EventBridge) |
| Reference architecture | Kiến trúc tham chiếu | Sơ đồ mẫu có bước đánh số (AWS Reference Architecture Diagrams) |
| Multi-tier / 3-tier architecture | Kiến trúc nhiều tầng / ba tầng | Presentation (web), application (logic), data |
| Queue-based load leveling | Cân bằng tải bằng hàng đợi | SQS đệm đỉnh tải; scale worker theo độ sâu queue |
| Saga pattern | Mẫu giao dịch phân tán có bù trừ | Step Functions + bước compensating khi lỗi |
| CQRS (Command Query Responsibility Segregation) | Tách luồng ghi (command) và đọc (query) | Dùng trong kiến trúc global serverless |
| Event sourcing | Lưu trạng thái dưới dạng chuỗi sự kiện | |
| Keyword → service mapping | Ánh xạ từ khóa đề sang dịch vụ | Cheat sheet Bài 45 |
