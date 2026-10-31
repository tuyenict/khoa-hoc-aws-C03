/* =====================================================================
 * MỤC LỤC KHÓA HỌC AWS SAA-C03 (Solutions Architect – Associate)
 * ---------------------------------------------------------------------
 * - Mỗi bài có: id, file, title (EN), vi (tiếng Việt), module, domains,
 *   icons (tên file trong assets/icons), docs (link tài liệu AWS gốc).
 * - ready: true  => bài đã được gen (lệnh /aws-bai tự bật cờ này).
 * - games: true  => đã có trang trò chơi ghi nhớ games/<file> (xem assets/games.js).
 * - Domain của đề thi:
 *   D1 Design Secure Architectures (30%)
 *   D2 Design Resilient Architectures (26%)
 *   D3 Design High-Performing Architectures (24%)
 *   D4 Design Cost-Optimized Architectures (20%)
 * ===================================================================== */
window.EXAM = {
  code: "SAA-C03",
  name: "AWS Certified Solutions Architect – Associate",
  vi: "Kiến trúc sư Giải pháp AWS – Cấp độ Associate",
  guide: "https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html",
  page: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
  domains: {
    D1: { en: "Design Secure Architectures", vi: "Thiết kế kiến trúc bảo mật", pct: 30, color: "#DD344C" },
    D2: { en: "Design Resilient Architectures", vi: "Thiết kế kiến trúc có khả năng phục hồi", pct: 26, color: "#7AA116" },
    D3: { en: "Design High-Performing Architectures", vi: "Thiết kế kiến trúc hiệu năng cao", pct: 24, color: "#ED7100" },
    D4: { en: "Design Cost-Optimized Architectures", vi: "Thiết kế kiến trúc tối ưu chi phí", pct: 20, color: "#01A88D" }
  }
};

window.MODULES = [
  { id: 0,  en: "Foundations",                     vi: "Nền tảng",                         icon: "cat/Customer-Enablement.svg" },
  { id: 1,  en: "Identity & Access Management",    vi: "Quản lý định danh & truy cập",     icon: "cat/Security-Identity-Compliance.svg" },
  { id: 2,  en: "Compute",                         vi: "Điện toán",                        icon: "cat/Compute.svg" },
  { id: 3,  en: "Storage",                         vi: "Lưu trữ",                          icon: "cat/Storage.svg" },
  { id: 4,  en: "Networking & Content Delivery",   vi: "Mạng & phân phối nội dung",        icon: "cat/Networking-Content-Delivery.svg" },
  { id: 5,  en: "Databases",                       vi: "Cơ sở dữ liệu",                    icon: "cat/Database.svg" },
  { id: 6,  en: "Application Integration & Serverless", vi: "Tích hợp ứng dụng & Serverless", icon: "cat/Application-Integration.svg" },
  { id: 7,  en: "Analytics & Machine Learning",    vi: "Phân tích dữ liệu & học máy",      icon: "cat/Analytics.svg" },
  { id: 8,  en: "Security & Encryption",           vi: "Bảo mật & mã hóa",                 icon: "cat/Security-Identity-Compliance.svg" },
  { id: 9,  en: "Management & Governance",         vi: "Giám sát & quản trị",              icon: "cat/Management-Governance.svg" },
  { id: 10, en: "Resilience, Migration & Cost",    vi: "Phục hồi, di chuyển & chi phí",    icon: "cat/AWS-Cost-Management.svg" }
];

window.SYLLABUS = [
  /* ---------------- MODULE 0: FOUNDATIONS ---------------- */
  { id: 1, module: 0, file: "bai-01-exam-global-infrastructure.html", ready: true, games: true,
    title: "Exam Overview & AWS Global Infrastructure",
    vi: "Tổng quan kỳ thi & hạ tầng toàn cầu của AWS",
    domains: ["D2", "D3"],
    icons: ["res/Internet.svg", "svc/AWS-Local-Zones.svg", "svc/AWS-Outposts.svg", "svc/AWS-Wavelength.svg"],
    topics: ["Exam format", "Region", "Availability Zone", "Edge Location", "Local Zones", "Wavelength", "Outposts"],
    docs: [
      { t: "SAA-C03 Exam Guide", u: "https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html" },
      { t: "Global Infrastructure (Overview of AWS)", u: "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html" },
      { t: "Regions and Zones", u: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html" },
      { t: "AWS Global Infrastructure", u: "https://aws.amazon.com/about-aws/global-infrastructure/" }
    ] },
  { id: 2, module: 0, file: "bai-02-well-architected.html", ready: true, games: true,
    title: "AWS Well-Architected Framework",
    vi: "Khung kiến trúc tối ưu của AWS (6 trụ cột)",
    domains: ["D1", "D2", "D3", "D4"],
    icons: ["svc/AWS-Well-Architected-Tool.svg", "svc/AWS-Trusted-Advisor.svg"],
    topics: ["Operational Excellence", "Security", "Reliability", "Performance Efficiency", "Cost Optimization", "Sustainability"],
    docs: [
      { t: "Well-Architected Framework – Welcome", u: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html" },
      { t: "The pillars of the framework", u: "https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html" },
      { t: "General design principles", u: "https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html" }
    ] },
  { id: 3, module: 0, file: "bai-03-shared-responsibility.html", ready: true, games: true,
    title: "Shared Responsibility Model & AWS Account Basics",
    vi: "Mô hình trách nhiệm chia sẻ & tài khoản AWS",
    domains: ["D1"],
    icons: ["svc/AWS-Identity-and-Access-Management.svg", "res/Users.svg"],
    topics: ["Security OF the cloud", "Security IN the cloud", "Root user", "MFA", "AWS Support plans"],
    docs: [
      { t: "Shared Responsibility Model", u: "https://aws.amazon.com/compliance/shared-responsibility-model/" },
      { t: "Root user best practices", u: "https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html" },
      { t: "Compare AWS Support plans", u: "https://aws.amazon.com/premiumsupport/plans/" }
    ] },

  /* ---------------- MODULE 1: IAM ---------------- */
  { id: 4, module: 1, file: "bai-04-iam-basics.html", ready: true, games: true,
    title: "IAM Fundamentals: Users, Groups, Roles, Policies",
    vi: "IAM cơ bản: người dùng, nhóm, vai trò, chính sách",
    domains: ["D1"],
    icons: ["svc/AWS-Identity-and-Access-Management.svg", "res/AWS-Identity-Access-Management_Role.svg", "res/AWS-Identity-Access-Management_Permissions.svg", "res/AWS-Identity-Access-Management_MFA-Token.svg"],
    topics: ["IAM User", "IAM Group", "IAM Role", "Identity-based policy", "Resource-based policy", "Least privilege", "MFA", "Access keys"],
    docs: [
      { t: "What is IAM?", u: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html" },
      { t: "IAM Identities", u: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html" },
      { t: "Policies and permissions", u: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html" },
      { t: "Security best practices in IAM", u: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html" }
    ] },
  { id: 5, module: 1, file: "bai-05-iam-advanced-sts.html", ready: true, games: true,
    title: "IAM Advanced: Policy Evaluation, Boundaries, STS & Federation",
    vi: "IAM nâng cao: đánh giá chính sách, giới hạn quyền, STS & liên kết định danh",
    domains: ["D1"],
    icons: ["res/AWS-Identity-Access-Management_AWS-STS.svg", "res/AWS-Identity-Access-Management_Temporary-Security-Credential.svg", "res/AWS-Identity-Access-Management_AWS-IAM-Access-Analyzer.svg"],
    topics: ["Policy evaluation logic", "Explicit deny", "Permissions boundary", "AssumeRole", "Cross-account access", "SAML 2.0 federation", "IAM Access Analyzer"],
    docs: [
      { t: "Policy evaluation logic", u: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html" },
      { t: "Permissions boundaries", u: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html" },
      { t: "Temporary security credentials (STS)", u: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html" },
      { t: "Identity providers and federation", u: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers.html" }
    ] },
  { id: 6, module: 1, file: "bai-06-organizations-scp.html", ready: true, games: true,
    title: "AWS Organizations, SCPs, Control Tower & IAM Identity Center",
    vi: "Quản lý nhiều tài khoản: Organizations, SCP, Control Tower, Identity Center",
    domains: ["D1", "D4"],
    icons: ["svc/AWS-Organizations.svg", "svc/AWS-Control-Tower.svg", "svc/AWS-Single-Sign-On.svg"],
    topics: ["Organizational Unit (OU)", "Service Control Policy (SCP)", "Consolidated billing", "Landing zone", "Guardrails", "IAM Identity Center (SSO)"],
    docs: [
      { t: "What is AWS Organizations?", u: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html" },
      { t: "Service control policies (SCPs)", u: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html" },
      { t: "What is AWS Control Tower?", u: "https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html" },
      { t: "What is IAM Identity Center?", u: "https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html" }
    ] },
  { id: 7, module: 1, file: "bai-07-cognito-directory.html", ready: true, games: true,
    title: "Amazon Cognito & AWS Directory Service",
    vi: "Xác thực người dùng ứng dụng: Cognito & Directory Service",
    domains: ["D1"],
    icons: ["svc/Amazon-Cognito.svg", "svc/AWS-Directory-Service.svg", "res/Mobile-client.svg"],
    topics: ["User pools", "Identity pools", "AWS Managed Microsoft AD", "AD Connector", "Simple AD"],
    docs: [
      { t: "What is Amazon Cognito?", u: "https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html" },
      { t: "What is AWS Directory Service?", u: "https://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html" }
    ] },

  /* ---------------- MODULE 2: COMPUTE ---------------- */
  { id: 8, module: 2, file: "bai-08-ec2-basics.html", ready: true, games: true,
    title: "Amazon EC2 Fundamentals: Instance Types, AMI, User Data",
    vi: "EC2 cơ bản: loại máy chủ, AMI, User Data",
    domains: ["D3"],
    icons: ["svc/Amazon-EC2.svg", "res/Amazon-EC2_Instance.svg", "res/Amazon-EC2_AMI.svg"],
    topics: ["Instance families", "AMI", "User data", "Instance metadata (IMDSv2)", "Instance lifecycle", "Hibernate"],
    docs: [
      { t: "What is Amazon EC2?", u: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html" },
      { t: "Instance types", u: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html" },
      { t: "Amazon Machine Images (AMI)", u: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html" },
      { t: "Instance metadata and user data", u: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html" }
    ] },
  { id: 9, module: 2, file: "bai-09-ec2-purchasing.html", ready: true, games: true,
    title: "EC2 Purchasing Options: On-Demand, Reserved, Savings Plans, Spot",
    vi: "Các phương thức mua EC2 & tối ưu chi phí",
    domains: ["D4"],
    icons: ["svc/Amazon-EC2.svg", "svc/AWS-Cost-Explorer.svg", "svc/Savings-Plans.svg"],
    topics: ["On-Demand", "Reserved Instances", "Savings Plans", "Spot Instances", "Spot Fleet", "Dedicated Hosts", "Dedicated Instances", "Capacity Reservations"],
    docs: [
      { t: "Instance purchasing options", u: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html" },
      { t: "Spot Instances", u: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html" },
      { t: "What are Savings Plans?", u: "https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html" }
    ] },
  { id: 10, module: 2, file: "bai-10-ec2-networking-placement.html", ready: true, games: true,
    title: "EC2 Networking: Security Groups, ENI, Elastic IP, Placement Groups",
    vi: "Mạng của EC2: Security Group, ENI, Elastic IP, Placement Group",
    domains: ["D1", "D3"],
    icons: ["res/Amazon-VPC_Elastic-Network-Interface.svg", "res/Amazon-EC2_Elastic-IP-Address.svg", "res/Amazon-EC2_Instances.svg"],
    topics: ["Security Group", "Elastic Network Interface (ENI)", "Elastic IP", "Cluster / Spread / Partition placement group", "Enhanced networking", "EFA"],
    docs: [
      { t: "Security groups", u: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html" },
      { t: "Elastic network interfaces", u: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html" },
      { t: "Elastic IP addresses", u: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html" },
      { t: "Placement groups", u: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html" }
    ] },
  { id: 11, module: 2, file: "bai-11-ebs-instance-store.html", ready: true, games: true,
    title: "EC2 Storage: Amazon EBS & Instance Store",
    vi: "Lưu trữ cho EC2: EBS & Instance Store",
    domains: ["D2", "D3"],
    icons: ["svc/Amazon-Elastic-Block-Store.svg", "res/Amazon-Elastic-Block-Store_Volume.svg", "res/Amazon-Elastic-Block-Store_Snapshot.svg"],
    topics: ["gp3 / gp2", "io2 Block Express", "st1 / sc1", "EBS Snapshots", "Multi-Attach", "EBS encryption", "Instance store"],
    docs: [
      { t: "What is Amazon EBS?", u: "https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html" },
      { t: "EBS volume types", u: "https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html" },
      { t: "EBS snapshots", u: "https://docs.aws.amazon.com/ebs/latest/userguide/ebs-snapshots.html" },
      { t: "Instance store", u: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html" }
    ] },
  { id: 12, module: 2, file: "bai-12-elastic-load-balancing.html", ready: true, games: true,
    title: "Elastic Load Balancing: ALB, NLB, GWLB",
    vi: "Cân bằng tải: ALB, NLB, GWLB",
    domains: ["D2", "D3"],
    icons: ["svc/Elastic-Load-Balancing.svg", "res/Elastic-Load-Balancing_Application-Load-Balancer.svg", "res/Elastic-Load-Balancing_Network-Load-Balancer.svg", "res/Elastic-Load-Balancing_Gateway-Load-Balancer.svg"],
    topics: ["Listener", "Target group", "Health checks", "Path/host-based routing", "Sticky sessions", "Cross-zone load balancing", "Connection draining", "SSL/TLS termination (SNI)"],
    docs: [
      { t: "What is Elastic Load Balancing?", u: "https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html" },
      { t: "Application Load Balancer", u: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html" },
      { t: "Network Load Balancer", u: "https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html" },
      { t: "Gateway Load Balancer", u: "https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html" }
    ] },
  { id: 13, module: 2, file: "bai-13-auto-scaling.html", ready: true, games: true,
    title: "Amazon EC2 Auto Scaling",
    vi: "Tự động co giãn EC2",
    domains: ["D2", "D3", "D4"],
    icons: ["svc/Amazon-EC2-Auto-Scaling.svg", "svc/Amazon-CloudWatch.svg", "res/Elastic-Load-Balancing_Application-Load-Balancer.svg"],
    topics: ["Launch template", "Auto Scaling group", "Target tracking", "Step / simple scaling", "Scheduled scaling", "Predictive scaling", "Cooldown", "Lifecycle hooks"],
    docs: [
      { t: "What is Amazon EC2 Auto Scaling?", u: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html" },
      { t: "Scaling policies", u: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html" },
      { t: "Launch templates", u: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-templates.html" }
    ] },

  /* ---------------- MODULE 3: STORAGE ---------------- */
  { id: 14, module: 3, file: "bai-14-s3-basics.html", ready: true, games: true,
    title: "Amazon S3 Fundamentals: Buckets, Objects, Storage Classes, Versioning",
    vi: "S3 cơ bản: bucket, object, lớp lưu trữ, phiên bản",
    domains: ["D2", "D4"],
    icons: ["svc/Amazon-Simple-Storage-Service.svg", "res/Amazon-Simple-Storage-Service_Bucket.svg", "res/Amazon-Simple-Storage-Service_Object.svg", "svc/Amazon-Simple-Storage-Service-Glacier.svg"],
    topics: ["Bucket", "Object / Key", "Durability 11 9s", "S3 Standard / Standard-IA / One Zone-IA", "Intelligent-Tiering", "Glacier Instant / Flexible / Deep Archive", "Versioning"],
    docs: [
      { t: "What is Amazon S3?", u: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html" },
      { t: "Storage classes", u: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html" },
      { t: "Versioning", u: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html" }
    ] },
  { id: 15, module: 3, file: "bai-15-s3-advanced.html", ready: true, games: true,
    title: "Amazon S3 Advanced: Lifecycle, Replication, Performance, Events",
    vi: "S3 nâng cao: vòng đời, sao chép, hiệu năng, sự kiện",
    domains: ["D2", "D3", "D4"],
    icons: ["svc/Amazon-Simple-Storage-Service.svg", "res/Amazon-Simple-Storage-Service_S3-Replication.svg", "svc/Amazon-EventBridge.svg"],
    topics: ["Lifecycle rules", "CRR / SRR", "Multipart upload", "Transfer Acceleration", "Byte-range fetch", "S3 Select", "Event notifications", "Requester Pays"],
    docs: [
      { t: "Managing the lifecycle of objects", u: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html" },
      { t: "Replicating objects", u: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html" },
      { t: "Best practices for performance", u: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html" },
      { t: "Transfer Acceleration", u: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html" },
      { t: "Event notifications", u: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html" }
    ] },
  { id: 16, module: 3, file: "bai-16-s3-security.html", ready: true, games: true,
    title: "Amazon S3 Security: Policies, Encryption, Object Lock, Presigned URLs",
    vi: "Bảo mật S3: chính sách, mã hóa, khóa đối tượng, URL ký sẵn",
    domains: ["D1"],
    icons: ["svc/Amazon-Simple-Storage-Service.svg", "svc/AWS-Key-Management-Service.svg", "res/AWS-Identity-Access-Management_Encrypted-Data.svg"],
    topics: ["Bucket policy", "Block Public Access", "SSE-S3 / SSE-KMS / SSE-C / DSSE-KMS", "Object Lock (WORM)", "Glacier Vault Lock", "Presigned URL", "Access Points", "CORS"],
    docs: [
      { t: "Security best practices for S3", u: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html" },
      { t: "Protecting data with encryption", u: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryption.html" },
      { t: "Blocking public access", u: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html" },
      { t: "Object Lock", u: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html" },
      { t: "Presigned URLs", u: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html" }
    ] },
  { id: 17, module: 3, file: "bai-17-efs-fsx.html", ready: true, games: true,
    title: "Shared File Storage: Amazon EFS & Amazon FSx",
    vi: "Lưu trữ file dùng chung: EFS & FSx",
    domains: ["D2", "D3"],
    icons: ["svc/Amazon-Elastic-File-System.svg", "svc/Amazon-FSx-for-Windows-File-Server.svg", "svc/Amazon-FSx-for-Lustre.svg", "svc/Amazon-FSx.svg"],
    topics: ["EFS performance / throughput modes", "EFS storage classes", "FSx for Windows File Server", "FSx for Lustre", "FSx for NetApp ONTAP", "FSx for OpenZFS"],
    docs: [
      { t: "What is Amazon EFS?", u: "https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html" },
      { t: "FSx for Windows File Server", u: "https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html" },
      { t: "FSx for Lustre", u: "https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html" },
      { t: "FSx for NetApp ONTAP", u: "https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/what-is-fsx-ontap.html" }
    ] },
  { id: 18, module: 3, file: "bai-18-hybrid-storage-transfer.html", ready: true, games: true,
    title: "Hybrid Storage & Data Transfer: Storage Gateway, DataSync, Snow Family, Transfer Family",
    vi: "Lưu trữ lai & truyền dữ liệu",
    domains: ["D2", "D3"],
    icons: ["svc/AWS-Storage-Gateway.svg", "svc/AWS-DataSync.svg", "svc/AWS-Snowball-Edge.svg", "svc/AWS-Transfer-Family.svg"],
    topics: ["S3 File Gateway", "Volume Gateway", "Tape Gateway", "DataSync agent", "Snowball Edge / Snowcone", "Transfer Family (SFTP)"],
    docs: [
      { t: "What is Storage Gateway?", u: "https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html" },
      { t: "What is AWS DataSync?", u: "https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html" },
      { t: "AWS Snowball Edge", u: "https://docs.aws.amazon.com/snowball/latest/developer-guide/whatisedge.html" },
      { t: "AWS Transfer Family", u: "https://docs.aws.amazon.com/transfer/latest/userguide/what-is-aws-transfer-family.html" }
    ] },
  { id: 19, module: 3, file: "bai-19-aws-backup.html", ready: true, games: true,
    title: "AWS Backup",
    vi: "Sao lưu tập trung với AWS Backup",
    domains: ["D2"],
    icons: ["svc/AWS-Backup.svg", "res/AWS-Backup_Backup-Plan.svg", "res/AWS-Backup_Backup-Vault.svg"],
    topics: ["Backup plan", "Backup vault", "Vault Lock", "Cross-Region / cross-account backup", "Point-in-time recovery"],
    docs: [
      { t: "What is AWS Backup?", u: "https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html" },
      { t: "AWS Backup Vault Lock", u: "https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html" }
    ] },

  /* ---------------- MODULE 4: NETWORKING ---------------- */
  { id: 20, module: 4, file: "bai-20-vpc-basics.html", ready: true, games: true,
    title: "Amazon VPC Fundamentals: CIDR, Subnets, Route Tables, IGW, NAT",
    vi: "VPC cơ bản: dải IP, mạng con, bảng định tuyến, IGW, NAT",
    domains: ["D1", "D2"],
    icons: ["svc/Amazon-Virtual-Private-Cloud.svg", "res/Amazon-VPC_Internet-Gateway.svg", "res/Amazon-VPC_NAT-Gateway.svg", "res/Amazon-VPC_Router.svg"],
    topics: ["CIDR", "Public / private subnet", "Route table", "Internet Gateway", "NAT Gateway vs NAT instance", "Bastion host", "IPv6 / Egress-only IGW"],
    docs: [
      { t: "What is Amazon VPC?", u: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html" },
      { t: "Subnets for your VPC", u: "https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html" },
      { t: "Route tables", u: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html" },
      { t: "Internet gateways", u: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html" },
      { t: "NAT gateways", u: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html" }
    ] },
  { id: 21, module: 4, file: "bai-21-vpc-security.html", ready: true, games: true,
    title: "VPC Security: Security Groups vs NACLs, Flow Logs, Network Firewall",
    vi: "Bảo mật VPC: Security Group, NACL, Flow Logs, Network Firewall",
    domains: ["D1"],
    icons: ["res/Amazon-VPC_Network-Access-Control-List.svg", "res/Amazon-VPC_Flow-Logs.svg", "svc/AWS-Network-Firewall.svg"],
    topics: ["Stateful vs stateless", "Network ACL rules", "Ephemeral ports", "VPC Flow Logs", "AWS Network Firewall"],
    docs: [
      { t: "Security groups (VPC)", u: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html" },
      { t: "Network ACLs", u: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html" },
      { t: "VPC Flow Logs", u: "https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html" },
      { t: "What is AWS Network Firewall?", u: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html" }
    ] },
  { id: 22, module: 4, file: "bai-22-vpc-connectivity.html", ready: true, games: true,
    title: "VPC Connectivity: Peering, Endpoints, PrivateLink, Transit Gateway",
    vi: "Kết nối VPC: Peering, Endpoint, PrivateLink, Transit Gateway",
    domains: ["D1", "D3", "D4"],
    icons: ["res/Amazon-VPC_Peering-Connection.svg", "res/Amazon-VPC_Endpoints.svg", "svc/AWS-PrivateLink.svg", "svc/AWS-Transit-Gateway.svg"],
    topics: ["VPC peering (non-transitive)", "Gateway endpoint (S3, DynamoDB)", "Interface endpoint", "PrivateLink endpoint service", "Transit Gateway", "AWS RAM"],
    docs: [
      { t: "What is VPC peering?", u: "https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html" },
      { t: "What is AWS PrivateLink?", u: "https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html" },
      { t: "Gateway endpoints", u: "https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html" },
      { t: "What is a transit gateway?", u: "https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html" }
    ] },
  { id: 23, module: 4, file: "bai-23-hybrid-networking.html", ready: true, games: true,
    title: "Hybrid Networking: Site-to-Site VPN & AWS Direct Connect",
    vi: "Kết nối lai: VPN & Direct Connect",
    domains: ["D2", "D3"],
    icons: ["svc/AWS-Direct-Connect.svg", "res/Amazon-VPC_VPN-Gateway.svg", "res/Amazon-VPC_Customer-Gateway.svg", "svc/AWS-Client-VPN.svg"],
    topics: ["Virtual private gateway", "Customer gateway", "Site-to-Site VPN", "Client VPN", "Direct Connect (dedicated / hosted)", "Direct Connect Gateway", "VPN over DX", "VPN CloudHub"],
    docs: [
      { t: "What is Site-to-Site VPN?", u: "https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html" },
      { t: "What is AWS Direct Connect?", u: "https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html" },
      { t: "What is AWS Client VPN?", u: "https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html" }
    ] },
  { id: 24, module: 4, file: "bai-24-route-53.html", ready: true, games: true,
    title: "Amazon Route 53",
    vi: "Dịch vụ DNS Route 53 & các chính sách định tuyến",
    domains: ["D2", "D3"],
    icons: ["svc/Amazon-Route-53.svg", "res/Amazon-Route-53-Hosted-Zone.svg", "res/Amazon-Route-53_Route-Table.svg"],
    topics: ["Hosted zone", "A / AAAA / CNAME / Alias", "TTL", "Simple / Weighted / Latency / Failover / Geolocation / Geoproximity / Multivalue / IP-based routing", "Health checks", "Route 53 Resolver"],
    docs: [
      { t: "What is Amazon Route 53?", u: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html" },
      { t: "Choosing a routing policy", u: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html" },
      { t: "Configuring DNS failover", u: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html" }
    ] },
  { id: 25, module: 4, file: "bai-25-cloudfront-global-accelerator.html", ready: true, games: true,
    title: "Amazon CloudFront & AWS Global Accelerator",
    vi: "Phân phối nội dung toàn cầu: CloudFront & Global Accelerator",
    domains: ["D1", "D3"],
    icons: ["svc/Amazon-CloudFront.svg", "res/Amazon-CloudFront_Edge-Location.svg", "svc/AWS-Global-Accelerator.svg"],
    topics: ["Distribution / Origin", "Origin Access Control (OAC)", "Cache behavior / TTL", "Signed URL / Signed cookie", "Geo restriction", "Lambda@Edge / CloudFront Functions", "Anycast IP"],
    docs: [
      { t: "What is Amazon CloudFront?", u: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html" },
      { t: "Restricting access to an S3 origin (OAC)", u: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html" },
      { t: "What is AWS Global Accelerator?", u: "https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html" }
    ] },

  /* ---------------- MODULE 5: DATABASES ---------------- */
  { id: 26, module: 5, file: "bai-26-rds.html", ready: true, games: true,
    title: "Amazon RDS: Multi-AZ, Read Replicas, RDS Proxy",
    vi: "CSDL quan hệ RDS: Multi-AZ, bản sao đọc, RDS Proxy",
    domains: ["D2", "D3"],
    icons: ["svc/Amazon-RDS.svg", "res/Amazon-Aurora_Amazon-RDS-Instance.svg", "svc/AWS-Secrets-Manager.svg"],
    topics: ["DB engines", "Multi-AZ deployment", "Read replica", "Automated backup / snapshot", "Storage auto scaling", "RDS Proxy", "IAM DB authentication", "Encryption at rest"],
    docs: [
      { t: "What is Amazon RDS?", u: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html" },
      { t: "Multi-AZ deployments", u: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html" },
      { t: "Read replicas", u: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html" },
      { t: "Amazon RDS Proxy", u: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html" }
    ] },
  { id: 27, module: 5, file: "bai-27-aurora.html", ready: true, games: true,
    title: "Amazon Aurora: Cluster, Serverless v2, Global Database",
    vi: "Amazon Aurora: cụm, Serverless v2, CSDL toàn cầu",
    domains: ["D2", "D3"],
    icons: ["svc/Amazon-Aurora.svg", "res/Amazon-Aurora-MySQL-Instance.svg", "res/Amazon-Aurora-PostgreSQL-Instance.svg"],
    topics: ["Cluster volume (6 copies / 3 AZ)", "Writer / reader endpoint", "Aurora Replicas", "Aurora Serverless v2", "Global Database", "Backtrack", "Cloning"],
    docs: [
      { t: "What is Amazon Aurora?", u: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html" },
      { t: "Aurora Serverless v2", u: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html" },
      { t: "Aurora Global Database", u: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html" }
    ] },
  { id: 28, module: 5, file: "bai-28-dynamodb.html", ready: true, games: true,
    title: "Amazon DynamoDB",
    vi: "CSDL NoSQL DynamoDB",
    domains: ["D2", "D3", "D4"],
    icons: ["svc/Amazon-DynamoDB.svg", "res/Amazon-DynamoDB_Table.svg", "res/Amazon-DynamoDB_Amazon-DynamoDB-Accelerator.svg", "res/Amazon-DynamoDB_Global-secondary-index.svg"],
    topics: ["Partition key / sort key", "On-demand vs provisioned capacity", "RCU / WCU", "GSI / LSI", "DAX", "DynamoDB Streams", "Global Tables", "TTL", "PITR"],
    docs: [
      { t: "What is Amazon DynamoDB?", u: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html" },
      { t: "Read/write capacity mode", u: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html" },
      { t: "DynamoDB Accelerator (DAX)", u: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html" },
      { t: "Global tables", u: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html" }
    ] },
  { id: 29, module: 5, file: "bai-29-elasticache-purpose-built-db.html", ready: true, games: true,
    title: "Amazon ElastiCache & Purpose-Built Databases",
    vi: "Bộ nhớ đệm ElastiCache & các CSDL chuyên dụng",
    domains: ["D3"],
    icons: ["svc/Amazon-ElastiCache.svg", "svc/Amazon-DocumentDB.svg", "svc/Amazon-Neptune.svg", "svc/Amazon-Keyspaces.svg", "svc/Amazon-Timestream.svg"],
    topics: ["Redis OSS / Valkey vs Memcached", "Lazy loading / Write-through", "Session store", "DocumentDB", "Neptune", "Keyspaces", "Timestream", "QLDB"],
    docs: [
      { t: "What is Amazon ElastiCache?", u: "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html" },
      { t: "Caching strategies", u: "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Strategies.html" },
      { t: "Amazon DocumentDB", u: "https://docs.aws.amazon.com/documentdb/latest/developerguide/what-is.html" },
      { t: "Amazon Neptune", u: "https://docs.aws.amazon.com/neptune/latest/userguide/intro.html" },
      { t: "Choosing an AWS database service", u: "https://docs.aws.amazon.com/decision-guides/latest/databases-on-aws-how-to-choose/databases-on-aws-how-to-choose.html" }
    ] },

  /* ---------------- MODULE 6: APP INTEGRATION & SERVERLESS ---------------- */
  { id: 30, module: 6, file: "bai-30-sqs-sns.html", ready: true, games: true,
    title: "Decoupling: Amazon SQS & Amazon SNS",
    vi: "Tách rời ứng dụng: hàng đợi SQS & thông báo SNS",
    domains: ["D2", "D3"],
    icons: ["svc/Amazon-Simple-Queue-Service.svg", "svc/Amazon-Simple-Notification-Service.svg", "res/Amazon-Simple-Queue-Service_Queue.svg", "res/Amazon-Simple-Notification-Service_Topic.svg"],
    topics: ["Standard vs FIFO queue", "Visibility timeout", "Long polling", "Dead-letter queue", "Delay queue", "SNS topic / subscription", "Fan-out (SNS + SQS)", "Message filtering"],
    docs: [
      { t: "What is Amazon SQS?", u: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html" },
      { t: "SQS visibility timeout", u: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html" },
      { t: "What is Amazon SNS?", u: "https://docs.aws.amazon.com/sns/latest/dg/welcome.html" },
      { t: "Fanout to SQS queues", u: "https://docs.aws.amazon.com/sns/latest/dg/sns-sqs-as-subscriber.html" }
    ] },
  { id: 31, module: 6, file: "bai-31-eventbridge-stepfunctions-mq.html", ready: true, games: true,
    title: "Amazon EventBridge, AWS Step Functions & Amazon MQ",
    vi: "Kiến trúc hướng sự kiện & điều phối luồng công việc",
    domains: ["D2"],
    icons: ["svc/Amazon-EventBridge.svg", "svc/AWS-Step-Functions.svg", "svc/Amazon-MQ.svg"],
    topics: ["Event bus / rule / target", "Scheduler", "Schema registry", "State machine", "Standard vs Express workflow", "Amazon MQ (ActiveMQ / RabbitMQ)"],
    docs: [
      { t: "What is Amazon EventBridge?", u: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html" },
      { t: "What is AWS Step Functions?", u: "https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html" },
      { t: "What is Amazon MQ?", u: "https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/welcome.html" }
    ] },
  { id: 32, module: 6, file: "bai-32-lambda.html", ready: true, games: true,
    title: "AWS Lambda",
    vi: "Điện toán không máy chủ với Lambda",
    domains: ["D2", "D3", "D4"],
    icons: ["svc/AWS-Lambda.svg", "res/AWS-Lambda_Lambda-Function.svg"],
    topics: ["Function / trigger", "Memory & timeout limits", "Concurrency (reserved / provisioned)", "Cold start", "Lambda in VPC", "Layers", "Destinations", "SnapStart"],
    docs: [
      { t: "What is AWS Lambda?", u: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html" },
      { t: "Lambda concurrency", u: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html" },
      { t: "Lambda in a VPC", u: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html" },
      { t: "Lambda quotas", u: "https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html" }
    ] },
  { id: 33, module: 6, file: "bai-33-api-gateway.html", ready: true, games: true,
    title: "Amazon API Gateway & Serverless Architectures",
    vi: "API Gateway & kiến trúc serverless",
    domains: ["D1", "D3"],
    icons: ["svc/Amazon-API-Gateway.svg", "svc/AWS-Lambda.svg", "svc/Amazon-DynamoDB.svg", "svc/Amazon-Cognito.svg"],
    topics: ["REST / HTTP / WebSocket API", "Edge-optimized / Regional / Private endpoint", "Stages", "Throttling", "Caching", "Authorizers (IAM, Cognito, Lambda)"],
    docs: [
      { t: "What is Amazon API Gateway?", u: "https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html" },
      { t: "Throttle requests", u: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html" },
      { t: "API caching", u: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html" }
    ] },
  { id: 34, module: 6, file: "bai-34-containers.html", ready: true, games: true,
    title: "Containers: Amazon ECS, EKS, AWS Fargate, ECR",
    vi: "Container trên AWS: ECS, EKS, Fargate, ECR",
    domains: ["D3", "D4"],
    icons: ["svc/Amazon-Elastic-Container-Service.svg", "svc/Amazon-Elastic-Kubernetes-Service.svg", "svc/AWS-Fargate.svg", "svc/Amazon-Elastic-Container-Registry.svg"],
    topics: ["Task definition / Service / Cluster", "EC2 launch type vs Fargate", "Task IAM role", "ECS Service Auto Scaling", "EKS node groups", "ECR", "App Runner"],
    docs: [
      { t: "What is Amazon ECS?", u: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html" },
      { t: "AWS Fargate for ECS", u: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html" },
      { t: "What is Amazon EKS?", u: "https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html" },
      { t: "What is Amazon ECR?", u: "https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html" }
    ] },

  /* ---------------- MODULE 7: ANALYTICS & ML ---------------- */
  { id: 35, module: 7, file: "bai-35-streaming-kinesis-msk.html", ready: true, games: true,
    title: "Streaming Data: Kinesis Data Streams, Data Firehose, MSK",
    vi: "Dữ liệu luồng thời gian thực: Kinesis & MSK",
    domains: ["D3"],
    icons: ["svc/Amazon-Kinesis-Data-Streams.svg", "svc/Amazon-Kinesis-Firehose.svg", "svc/Amazon-Managed-Streaming-for-Apache-Kafka.svg"],
    topics: ["Shard", "Partition key", "Retention", "Provisioned vs on-demand", "Firehose destinations", "Buffering", "Amazon MSK"],
    docs: [
      { t: "What is Kinesis Data Streams?", u: "https://docs.aws.amazon.com/streams/latest/dev/introduction.html" },
      { t: "What is Amazon Data Firehose?", u: "https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html" },
      { t: "What is Amazon MSK?", u: "https://docs.aws.amazon.com/msk/latest/developerguide/what-is-msk.html" }
    ] },
  { id: 36, module: 7, file: "bai-36-analytics.html", ready: true, games: true,
    title: "Analytics: Athena, Glue, Lake Formation, Redshift, EMR, OpenSearch, QuickSight",
    vi: "Phân tích dữ liệu & data lake",
    domains: ["D3", "D4"],
    icons: ["svc/Amazon-Athena.svg", "svc/AWS-Glue.svg", "svc/AWS-Lake-Formation.svg", "svc/Amazon-Redshift.svg", "svc/Amazon-EMR.svg", "svc/Amazon-Elasticsearch-Service.svg", "svc/Amazon-QuickSight.svg"],
    topics: ["Serverless SQL on S3", "Columnar formats (Parquet)", "Glue Data Catalog / Crawler / ETL", "Data lake permissions", "Redshift Spectrum", "EMR", "OpenSearch", "QuickSight dashboards"],
    docs: [
      { t: "What is Amazon Athena?", u: "https://docs.aws.amazon.com/athena/latest/ug/what-is.html" },
      { t: "What is AWS Glue?", u: "https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html" },
      { t: "What is Lake Formation?", u: "https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-lake-formation.html" },
      { t: "Amazon Redshift overview", u: "https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html" },
      { t: "What is Amazon EMR?", u: "https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-what-is-emr.html" },
      { t: "What is Amazon OpenSearch Service?", u: "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html" }
    ] },
  { id: 37, module: 7, file: "bai-37-machine-learning.html", ready: true, games: true,
    title: "AI/ML Services Overview",
    vi: "Tổng quan các dịch vụ AI/ML",
    domains: ["D3"],
    icons: ["svc/Amazon-SageMaker.svg", "svc/Amazon-Rekognition.svg", "svc/Amazon-Comprehend.svg", "svc/Amazon-Textract.svg", "svc/Amazon-Polly.svg", "svc/Amazon-Transcribe.svg"],
    topics: ["SageMaker", "Rekognition", "Comprehend", "Textract", "Transcribe", "Polly", "Translate", "Lex", "Kendra", "Forecast", "Bedrock"],
    docs: [
      { t: "Machine Learning (Overview of AWS)", u: "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/machine-learning.html" },
      { t: "What is Amazon Rekognition?", u: "https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html" },
      { t: "What is Amazon SageMaker AI?", u: "https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html" }
    ] },

  /* ---------------- MODULE 8: SECURITY & ENCRYPTION ---------------- */
  { id: 38, module: 8, file: "bai-38-kms-secrets.html", ready: true, games: true,
    title: "Encryption & Secrets: KMS, CloudHSM, Secrets Manager, Parameter Store, ACM",
    vi: "Mã hóa & quản lý bí mật",
    domains: ["D1"],
    icons: ["svc/AWS-Key-Management-Service.svg", "svc/AWS-CloudHSM.svg", "svc/AWS-Secrets-Manager.svg", "svc/AWS-Certificate-Manager.svg"],
    topics: ["AWS managed key vs customer managed key", "Envelope encryption", "Key policy", "Multi-Region keys", "CloudHSM", "Secret rotation", "SSM Parameter Store", "ACM certificates"],
    docs: [
      { t: "AWS KMS concepts", u: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html" },
      { t: "What is AWS CloudHSM?", u: "https://docs.aws.amazon.com/cloudhsm/latest/userguide/introduction.html" },
      { t: "What is Secrets Manager?", u: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html" },
      { t: "Parameter Store", u: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html" },
      { t: "What is ACM?", u: "https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html" }
    ] },
  { id: 39, module: 8, file: "bai-39-threat-protection.html", ready: true, games: true,
    title: "Threat Protection: WAF, Shield, Firewall Manager, GuardDuty, Inspector, Macie, Security Hub",
    vi: "Phòng chống tấn công & phát hiện mối đe dọa",
    domains: ["D1"],
    icons: ["svc/AWS-WAF.svg", "svc/AWS-Shield.svg", "svc/AWS-Firewall-Manager.svg", "svc/Amazon-GuardDuty.svg", "svc/Amazon-Inspector.svg", "svc/Amazon-Macie.svg", "svc/AWS-Security-Hub.svg"],
    topics: ["Web ACL / rate-based rule", "Shield Standard vs Advanced", "DDoS", "GuardDuty findings", "Inspector vulnerability scan", "Macie PII discovery", "Security Hub", "Amazon Detective"],
    docs: [
      { t: "What is AWS WAF?", u: "https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html" },
      { t: "AWS Shield", u: "https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html" },
      { t: "What is GuardDuty?", u: "https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html" },
      { t: "What is Amazon Inspector?", u: "https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html" },
      { t: "What is Amazon Macie?", u: "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html" },
      { t: "What is Security Hub?", u: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html" }
    ] },

  /* ---------------- MODULE 9: MANAGEMENT & GOVERNANCE ---------------- */
  { id: 40, module: 9, file: "bai-40-cloudwatch-cloudtrail-config.html", ready: true, games: true,
    title: "Monitoring & Auditing: CloudWatch, CloudTrail, AWS Config",
    vi: "Giám sát & kiểm toán: CloudWatch, CloudTrail, Config",
    domains: ["D1", "D2"],
    icons: ["svc/Amazon-CloudWatch.svg", "svc/AWS-CloudTrail.svg", "svc/AWS-Config.svg", "res/Amazon-CloudWatch_Alarm.svg"],
    topics: ["Metrics / alarms", "CloudWatch Logs / Logs Insights", "CloudWatch agent", "Custom metrics", "CloudTrail management / data events", "Config rules", "Remediation"],
    docs: [
      { t: "What is Amazon CloudWatch?", u: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html" },
      { t: "What is AWS CloudTrail?", u: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html" },
      { t: "What is AWS Config?", u: "https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html" }
    ] },
  { id: 41, module: 9, file: "bai-41-iac-deployment.html", ready: true, games: true,
    title: "Infrastructure as Code & Operations: CloudFormation, Elastic Beanstalk, Systems Manager",
    vi: "Hạ tầng dưới dạng mã & vận hành",
    domains: ["D2"],
    icons: ["svc/AWS-CloudFormation.svg", "svc/AWS-Elastic-Beanstalk.svg", "svc/AWS-Systems-Manager.svg", "res/AWS-CloudFormation_Template.svg"],
    topics: ["Template / Stack / StackSets", "Change sets", "Elastic Beanstalk environments", "SSM Session Manager", "Patch Manager", "Run Command"],
    docs: [
      { t: "What is CloudFormation?", u: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html" },
      { t: "What is Elastic Beanstalk?", u: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html" },
      { t: "What is Systems Manager?", u: "https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html" }
    ] },

  /* ---------------- MODULE 10: RESILIENCE, MIGRATION, COST ---------------- */
  { id: 42, module: 10, file: "bai-42-disaster-recovery.html", ready: true, games: true,
    title: "Disaster Recovery Strategies: RPO & RTO",
    vi: "Chiến lược khôi phục thảm họa: RPO & RTO",
    domains: ["D2", "D4"],
    icons: ["svc/CloudEndure-Disaster-Recovery.svg", "svc/AWS-Backup.svg", "svc/Amazon-Route-53.svg"],
    topics: ["RPO / RTO", "Backup & Restore", "Pilot Light", "Warm Standby", "Multi-site active/active", "AWS Elastic Disaster Recovery"],
    docs: [
      { t: "Disaster recovery options in the cloud", u: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html" },
      { t: "What is Elastic Disaster Recovery?", u: "https://docs.aws.amazon.com/drs/latest/userguide/what-is-drs.html" }
    ] },
  { id: 43, module: 10, file: "bai-43-migration.html", ready: true, games: true,
    title: "Migration: 7 Rs, DMS, Application Migration Service, Migration Hub",
    vi: "Di chuyển hệ thống lên AWS",
    domains: ["D2", "D4"],
    icons: ["svc/AWS-Database-Migration-Service.svg", "svc/CloudEndure-Migration.svg", "svc/AWS-Migration-Hub.svg"],
    topics: ["Rehost / Replatform / Refactor / Repurchase / Retire / Retain / Relocate", "DMS + Schema Conversion", "Continuous replication (CDC)", "AWS MGN", "Application Discovery Service"],
    docs: [
      { t: "Migration strategies (7 Rs)", u: "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html" },
      { t: "What is AWS DMS?", u: "https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html" },
      { t: "What is Application Migration Service?", u: "https://docs.aws.amazon.com/mgn/latest/ug/what-is-application-migration-service.html" }
    ] },
  { id: 44, module: 10, file: "bai-44-cost-optimization.html", ready: true, games: true,
    title: "Cost Management: Cost Explorer, Budgets, CUR, Compute Optimizer, Trusted Advisor",
    vi: "Quản lý & tối ưu chi phí",
    domains: ["D4"],
    icons: ["svc/AWS-Cost-Explorer.svg", "svc/AWS-Budgets.svg", "svc/AWS-Cost-and-Usage-Report.svg", "svc/AWS-Compute-Optimizer.svg", "svc/AWS-Trusted-Advisor.svg"],
    topics: ["Cost allocation tags", "AWS Budgets", "Cost Explorer", "Cost and Usage Report", "Compute Optimizer", "Trusted Advisor", "Data transfer cost"],
    docs: [
      { t: "Cost Optimization Pillar", u: "https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html" },
      { t: "AWS Cost Explorer", u: "https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html" },
      { t: "AWS Budgets", u: "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html" },
      { t: "What is Compute Optimizer?", u: "https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html" }
    ] },
  { id: 45, module: 10, file: "bai-45-review-architecture-patterns.html", ready: true, games: true,
    title: "Final Review: Architecture Patterns & Exam Strategy",
    vi: "Ôn tập tổng: mẫu kiến trúc & chiến thuật làm bài",
    domains: ["D1", "D2", "D3", "D4"],
    icons: ["svc/AWS-Well-Architected-Tool.svg", "cat/Serverless.svg", "cat/Compute.svg", "cat/Database.svg"],
    topics: ["3-tier web app", "Serverless web app", "Event-driven pipeline", "Multi-Region active-active", "Keyword → service cheat sheet", "Time management"],
    docs: [
      { t: "Reference Architecture Diagrams", u: "https://aws.amazon.com/architecture/reference-architecture-diagrams/" },
      { t: "AWS Decision Guides", u: "https://docs.aws.amazon.com/decision-guides/" },
      { t: "SAA-C03 Exam Guide", u: "https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html" }
    ] }
];
