const domains = {
  D1: "Domain 1: Cloud Concepts",
  D2: "Domain 2: Security and Compliance",
  D3: "Domain 3: Cloud Technology and Services",
  D4: "Domain 4: Billing, Pricing, and Support"
};

const cards = [
  c("D1.1.1", "Cloud Computing", "What is cloud computing?", "Cloud computing means renting technology resources such as <strong>servers</strong>, <strong>storage</strong>, <strong>databases</strong>, and <strong>software</strong> over the internet instead of buying and running them yourself.", "Like using electricity from the power grid instead of building your own power plant.", "", "Avoid buying hardware or pay only for what you use = cloud computing."),
  c("D1.1.2", "Public Cloud", "What is a public cloud?", "A <strong>public cloud</strong> is cloud infrastructure owned by a provider such as AWS and shared securely by many customers.", "Like renting an apartment in a professionally managed building.", "Shared infrastructure does not mean shared customer data.", ""),
  c("D1.1.3", "Hybrid Cloud", "What is a hybrid cloud?", "A <strong>hybrid cloud</strong> combines on-premises infrastructure with cloud services, usually connected so workloads or data can work across both.", "", "Hybrid cloud is not the same as multi-cloud.", "On-premises plus AWS = hybrid cloud."),
  c("D1.1.4", "IaaS", "What is Infrastructure as a Service?", "<strong>IaaS</strong> provides basic infrastructure such as virtual servers, storage, and networking while you manage the operating system, applications, and data. <strong>Amazon EC2</strong> is the classic example.", "", "", "If you manage the operating system, think IaaS."),
  c("D1.1.5", "PaaS", "What is Platform as a Service?", "<strong>PaaS</strong> gives developers a managed platform for running applications without managing much of the underlying infrastructure. <strong>Elastic Beanstalk</strong> is a common AWS example.", "", "", "Upload code and let AWS set up the environment = PaaS-style."),
  c("D1.1.6", "SaaS", "What is Software as a Service?", "<strong>SaaS</strong> is a complete application delivered over the internet where the provider manages the infrastructure, platform, and application.", "Like eating at a restaurant: you consume the finished meal.", "", "If the customer only uses the app, it is SaaS."),
  c("D1.2.1", "Six Cloud Advantages", "What are the six AWS advantages of cloud computing?", "They are <strong>trade fixed expense for variable expense</strong>, <strong>benefit from massive economies of scale</strong>, <strong>stop guessing capacity</strong>, <strong>increase speed and agility</strong>, <strong>stop spending money running and maintaining data centers</strong>, and <strong>go global in minutes</strong>.", "", "", "Memorize these almost verbatim."),
  c("D1.2.2", "Fixed vs Variable Expense", "What does trading fixed expense for variable expense mean?", "<strong>Fixed expense</strong> means paying upfront for hardware. <strong>Variable expense</strong> means paying for cloud resources as you consume them.", "Buying a car vs paying for rides only when needed.", "", "Avoid upfront investment = fixed to variable."),
  c("D1.2.3", "Stop Guessing Capacity", "What does stop guessing capacity mean?", "<strong>Stop guessing capacity</strong> means you do not have to predict exact server needs months in advance. You can scale based on real demand.", "", "Over-provisioning wastes money; under-provisioning hurts performance.", ""),
  c("D1.2.4", "Go Global", "What does go global in minutes mean?", "<strong>Go global in minutes</strong> means deploying applications in AWS Regions around the world without building physical data centers.", "", "", "Worldwide users with lower latency = global infrastructure."),
  c("D1.3.1", "CapEx", "What is CapEx?", "<strong>CapEx</strong>, or capital expenditure, is large upfront spending on long-term assets such as servers, buildings, and networking equipment.", "Buying a house instead of renting.", "", ""),
  c("D1.3.2", "OpEx", "What is OpEx?", "<strong>OpEx</strong>, or operational expenditure, is ongoing spending for services as they are used. AWS commonly shifts technology spending toward OpEx.", "Paying a utility bill based on usage.", "", ""),
  c("D1.3.3", "TCO", "What is Total Cost of Ownership?", "<strong>Total Cost of Ownership</strong> is the full cost of owning and operating a system, including hardware, software, facilities, staffing, maintenance, and downtime risk.", "", "Purchase price alone is not TCO.", ""),
  c("D1.4.1", "Well-Architected Framework", "What is the AWS Well-Architected Framework?", "The <strong>AWS Well-Architected Framework</strong> is AWS guidance for designing and operating reliable, secure, efficient, cost-effective, and sustainable workloads.", "", "", "Architecture best practices = Well-Architected."),
  c("D1.4.2", "Six Pillars", "What are the six Well-Architected pillars?", "The six pillars are <strong>Operational Excellence</strong>, <strong>Security</strong>, <strong>Reliability</strong>, <strong>Performance Efficiency</strong>, <strong>Cost Optimization</strong>, and <strong>Sustainability</strong>.", "", "Sustainability is easy to forget.", ""),
  c("D1.4.3", "Operational Excellence", "What does Operational Excellence focus on?", "<strong>Operational Excellence</strong> focuses on running and monitoring systems, improving processes, automating changes, and learning from failures.", "", "", "Operations, runbooks, automation = Operational Excellence."),
  c("D1.4.4", "Reliability", "What does the Reliability pillar focus on?", "<strong>Reliability</strong> focuses on a workload performing correctly and recovering from failure.", "", "", "Recovery, backup, Multi-AZ, fault tolerance = Reliability."),
  c("D1.5.1", "AWS CAF", "What is the AWS Cloud Adoption Framework?", "<strong>AWS CAF</strong> helps organizations plan cloud adoption across business, people, governance, platform, security, and operations.", "", "CAF is a framework, not a service to configure.", "Organizational cloud adoption = AWS CAF."),
  c("D1.5.2", "CAF Perspectives", "What are the six AWS CAF perspectives?", "The six <strong>AWS CAF perspectives</strong> are <strong>Business</strong>, <strong>People</strong>, <strong>Governance</strong>, <strong>Platform</strong>, <strong>Security</strong>, and <strong>Operations</strong>.", "", "", "Business, People, Governance, Platform, Security, Operations."),
  c("D1.6.1", "Elasticity", "What is elasticity?", "<strong>Elasticity</strong> is the ability to automatically add or remove resources as demand changes.", "Opening more checkout lanes during a rush.", "", "Elasticity includes scaling down."),
  c("D1.6.2", "Horizontal Scaling", "What is horizontal scaling?", "<strong>Horizontal scaling</strong> means adding more resources of the same type, such as more EC2 instances behind a load balancer.", "More checkout lanes, not one super-cashier.", "", "Scale out = horizontal."),
  c("D1.6.3", "Vertical Scaling", "What is vertical scaling?", "<strong>Vertical scaling</strong> means making one resource bigger, such as moving to a larger EC2 instance.", "Replace a small truck with a larger truck.", "", "Scale up = vertical."),
  c("D1.6.4", "Loose Coupling", "What is loose coupling?", "<strong>Loose coupling</strong> means components depend on each other as little as possible, so one slow or failed part does not break everything.", "A mailbox lets someone leave a message even when you are away.", "", "SQS, SNS, and EventBridge support loose coupling."),

  c("D2.1.1", "Shared Responsibility Model", "What is the AWS Shared Responsibility Model?", "The <strong>Shared Responsibility Model</strong> divides security duties between AWS and the customer. AWS handles <strong>security of the cloud</strong>; the customer handles <strong>security in the cloud</strong>.", "", "", "One of the most tested ideas."),
  c("D2.1.2", "Security of the Cloud", "What is AWS responsible for?", "AWS is responsible for <strong>security of the cloud</strong>, including data centers, physical hardware, host infrastructure, and global networking infrastructure.", "", "", "Physical data center security = AWS."),
  c("D2.1.3", "Security in the Cloud", "What is the customer responsible for?", "The customer is responsible for <strong>security in the cloud</strong>, including data, IAM, application security, network configuration, and guest OS patching on EC2.", "", "AWS provides tools; customers configure them.", ""),
  c("D2.1.4", "EC2 Patching", "Who patches the guest operating system on EC2?", "The <strong>customer</strong> patches the guest operating system on <strong>Amazon EC2</strong>. AWS patches the underlying physical host infrastructure.", "", "This is a classic exam trap.", ""),
  c("D2.1.5", "RDS Patching", "Who patches the operating system for Amazon RDS?", "<strong>AWS</strong> handles the underlying operating system and database platform maintenance for <strong>Amazon RDS</strong> because RDS is managed.", "", "", "EC2 database = customer patches OS; RDS database = AWS handles OS."),
  c("D2.2.1", "IAM", "What is IAM?", "<strong>AWS Identity and Access Management</strong> controls who can access AWS resources and what actions they can perform.", "", "", "Who can do what = IAM."),
  c("D2.2.2", "Root User", "What is the AWS account root user?", "The <strong>root user</strong> is the original account identity with full access to everything in the AWS account. Protect it with MFA and avoid daily use.", "", "Do not use root for everyday work.", ""),
  c("D2.2.3", "IAM Role", "What is an IAM role?", "An <strong>IAM role</strong> is an identity with permissions that can be temporarily assumed by trusted users, AWS services, or applications.", "", "", "EC2 needs S3 access? Use a role, not hard-coded keys."),
  c("D2.2.4", "Least Privilege", "What is least privilege?", "<strong>Least privilege</strong> means granting only the permissions required to perform a task, and no more.", "", "AdministratorAccess for everyone is almost always wrong.", ""),
  c("D2.2.5", "Policy Evaluation", "How does IAM evaluate allow and deny permissions?", "Requests are <strong>implicitly denied</strong> by default. An explicit <strong>Allow</strong> grants access, but any explicit <strong>Deny</strong> overrides allows.", "", "", "Explicit Deny wins."),
  c("D2.2.6", "IAM Identity Center", "What is IAM Identity Center?", "<strong>AWS IAM Identity Center</strong> provides centralized workforce access to multiple AWS accounts and applications. It is the successor name for AWS Single Sign-On.", "", "", "Central workforce login across accounts = IAM Identity Center."),
  c("D2.3.1", "AWS Organizations", "What is AWS Organizations?", "<strong>AWS Organizations</strong> centrally manages multiple AWS accounts and supports consolidated billing, OUs, SCPs, and multi-account governance.", "", "", "Manage many AWS accounts centrally = Organizations."),
  c("D2.3.2", "SCP", "What is a Service Control Policy?", "A <strong>Service Control Policy</strong>, or <strong>SCP</strong>, sets maximum permissions for accounts or OUs. SCPs do not grant permissions by themselves.", "", "SCPs are guardrails, not permission grants.", ""),
  c("D2.3.3", "Control Tower", "What is AWS Control Tower?", "<strong>AWS Control Tower</strong> helps set up and govern a secure multi-account AWS environment using best practices, guardrails, and a landing zone.", "", "", "Governed multi-account landing zone = Control Tower."),
  c("D2.4.1", "Encryption at Rest", "What is encryption at rest?", "<strong>Encryption at rest</strong> protects stored data, such as S3 objects, RDS records, or EBS volumes.", "", "", "Stored data = at rest."),
  c("D2.4.2", "Encryption in Transit", "What is encryption in transit?", "<strong>Encryption in transit</strong> protects data while it moves over a network, usually using TLS/HTTPS.", "", "", "Moving data = in transit."),
  c("D2.4.3", "KMS", "What is AWS KMS?", "<strong>AWS Key Management Service</strong> creates and manages cryptographic keys used by AWS services and applications.", "", "", "Managed encryption keys = KMS."),
  c("D2.4.4", "CloudHSM", "What is AWS CloudHSM?", "<strong>AWS CloudHSM</strong> provides dedicated hardware security modules for customers who need direct control over cryptographic hardware and keys.", "", "", "Dedicated HSM hardware = CloudHSM."),
  c("D2.4.5", "Secrets Manager", "What is AWS Secrets Manager used for?", "<strong>AWS Secrets Manager</strong> stores, encrypts, retrieves, and can rotate secrets such as database passwords and API keys.", "", "", "Automatic secret rotation = Secrets Manager."),
  c("D2.5.1", "GuardDuty", "What is Amazon GuardDuty?", "<strong>Amazon GuardDuty</strong> is a threat detection service that analyzes activity signals to find suspicious behavior.", "", "", "Suspicious activity or threat detection = GuardDuty."),
  c("D2.5.2", "Inspector", "What is Amazon Inspector?", "<strong>Amazon Inspector</strong> scans workloads for software vulnerabilities and unintended network exposure.", "", "", "Vulnerability scanning = Inspector."),
  c("D2.5.3", "Macie", "What is Amazon Macie?", "<strong>Amazon Macie</strong> discovers and helps protect sensitive data in Amazon S3.", "", "", "Sensitive data in S3 = Macie."),
  c("D2.5.4", "CloudTrail", "What is AWS CloudTrail?", "<strong>AWS CloudTrail</strong> records AWS API activity, such as who created, changed, deleted, or accessed resources.", "", "", "Who did what = CloudTrail."),
  c("D2.5.5", "AWS Config", "What is AWS Config?", "<strong>AWS Config</strong> records resource configurations over time and evaluates them against rules.", "", "", "What changed and is it compliant = Config."),
  c("D2.6.1", "Shield Standard", "What is AWS Shield Standard?", "<strong>AWS Shield Standard</strong> provides automatic protection against common DDoS attacks at no extra charge.", "", "", "Free always-on DDoS protection = Shield Standard."),
  c("D2.6.2", "AWS WAF", "What is AWS WAF?", "<strong>AWS WAF</strong> is a web application firewall that filters HTTP and HTTPS requests using rules.", "", "", "SQL injection, XSS, web request filtering = WAF."),
  c("D2.7.1", "AWS Artifact", "What is AWS Artifact?", "<strong>AWS Artifact</strong> provides access to AWS compliance reports and certain agreements.", "", "", "Download AWS compliance reports = Artifact."),
  c("D2.8.1", "Cognito", "What is Amazon Cognito?", "<strong>Amazon Cognito</strong> provides authentication and authorization features for application users, such as sign-up and sign-in.", "", "", "App user login = Cognito."),
  c("D2.8.2", "STS", "What is AWS STS?", "<strong>AWS Security Token Service</strong> issues temporary security credentials for users, applications, or services that assume roles.", "", "", "Temporary credentials = STS."),

  c("D3.1.1", "AWS Region", "What is an AWS Region?", "An <strong>AWS Region</strong> is a physical geographic area containing multiple Availability Zones.", "", "", "Choose Region for latency, compliance, cost, and service availability."),
  c("D3.1.2", "Availability Zone", "What is an Availability Zone?", "An <strong>Availability Zone</strong> is one or more discrete data centers inside a Region, designed for isolation and low-latency connectivity.", "", "", "Multi-AZ = higher availability inside a Region."),
  c("D3.1.3", "Edge Location", "What is an edge location?", "An <strong>edge location</strong> is a site used by CloudFront and related services to cache content closer to users.", "", "", "Content caching near users = edge locations."),
  c("D3.1.4", "Outposts", "What is AWS Outposts?", "<strong>AWS Outposts</strong> brings AWS infrastructure and services into a customer on-premises location.", "", "", "AWS hardware in your data center = Outposts."),
  c("D3.2.1", "EC2", "What is Amazon EC2?", "<strong>Amazon EC2</strong> provides resizable virtual servers in AWS.", "", "", "Virtual server = EC2."),
  c("D3.2.2", "AMI", "What is an AMI?", "An <strong>Amazon Machine Image</strong> is a template used to launch EC2 instances, including an operating system and optional software.", "", "", "EC2 launch image = AMI."),
  c("D3.2.3", "On-Demand Instances", "When should you use EC2 On-Demand Instances?", "Use <strong>On-Demand Instances</strong> for flexible, short-term, unpredictable workloads with no long-term commitment.", "", "", "Unknown usage, no commitment = On-Demand."),
  c("D3.2.4", "Reserved Instances", "When should you use Reserved Instances?", "Use <strong>Reserved Instances</strong> for predictable workloads where you can commit to a 1-year or 3-year term for a discount.", "", "", "Steady predictable EC2 usage = RI or Savings Plan."),
  c("D3.2.5", "Savings Plans", "What are AWS Savings Plans?", "<strong>Savings Plans</strong> provide lower prices in exchange for a commitment to a consistent amount of compute usage per hour for 1 or 3 years.", "", "", "Commit dollars/hour for compute = Savings Plans."),
  c("D3.2.6", "Spot Instances", "When should you use Spot Instances?", "Use <strong>Spot Instances</strong> for fault-tolerant workloads that can handle interruption, such as batch jobs and test environments.", "", "Do not choose Spot for workloads that cannot be interrupted.", ""),
  c("D3.2.7", "Dedicated Hosts", "What are Dedicated Hosts?", "<strong>Dedicated Hosts</strong> provide a physical EC2 server dedicated to your use, useful for compliance and some licensing needs.", "", "", "Physical server dedicated to you = Dedicated Host."),
  c("D3.3.1", "Lambda", "What is AWS Lambda?", "<strong>AWS Lambda</strong> runs code without you managing servers. You pay for requests and compute time while the function runs.", "", "", "Event-driven code with no servers = Lambda."),
  c("D3.3.2", "Lambda Timeout", "What is the maximum Lambda function timeout?", "The maximum <strong>AWS Lambda timeout</strong> is <strong>15 minutes</strong>.", "", "Longer than 15 minutes means not one Lambda invocation.", ""),
  c("D3.3.3", "Fargate", "What is AWS Fargate?", "<strong>AWS Fargate</strong> is serverless compute for containers, letting you run containers without managing EC2 instances.", "", "", "Containers without managing servers = Fargate."),
  c("D3.3.4", "ECS", "What is Amazon ECS?", "<strong>Amazon ECS</strong> is AWS managed container orchestration for running and managing containers.", "", "", "AWS-native containers = ECS."),
  c("D3.3.5", "EKS", "What is Amazon EKS?", "<strong>Amazon EKS</strong> is managed Kubernetes on AWS.", "", "", "Managed Kubernetes = EKS."),
  c("D3.4.1", "Auto Scaling", "What does Auto Scaling do?", "<strong>Auto Scaling</strong> automatically adjusts capacity to maintain performance and control cost.", "", "", "Automatically add or remove capacity = Auto Scaling."),
  c("D3.4.2", "Load Balancer", "What does a load balancer do?", "A <strong>load balancer</strong> distributes incoming traffic across multiple targets such as EC2 instances or containers.", "Like a host seating customers across open restaurant sections.", "", ""),
  c("D3.4.3", "ALB", "When should you use an Application Load Balancer?", "Use an <strong>Application Load Balancer</strong> for HTTP/HTTPS traffic and application-layer routing.", "", "", "HTTP/HTTPS and path routing = ALB."),
  c("D3.4.4", "NLB", "When should you use a Network Load Balancer?", "Use a <strong>Network Load Balancer</strong> for high-performance TCP, UDP, or TLS traffic.", "", "", "TCP/UDP or extreme performance = NLB."),
  c("D3.5.1", "S3", "What is Amazon S3?", "<strong>Amazon S3</strong> is object storage for files, backups, logs, static websites, media, and data lakes.", "", "", "Object storage = S3."),
  c("D3.5.2", "S3 Durability", "What durability is S3 designed for?", "<strong>Amazon S3</strong> is designed for <strong>99.999999999% durability</strong>, often called eleven 9s.", "", "Eleven 9s means durability, not availability.", ""),
  c("D3.5.3", "S3 Intelligent-Tiering", "When should you use S3 Intelligent-Tiering?", "Use <strong>S3 Intelligent-Tiering</strong> when access patterns are unknown or changing, so S3 can move objects between tiers automatically.", "", "", "Unknown access patterns = Intelligent-Tiering."),
  c("D3.5.4", "EBS", "What is Amazon EBS?", "<strong>Amazon EBS</strong> provides block storage volumes for EC2 instances, like virtual hard drives.", "", "", "Block storage for EC2 = EBS."),
  c("D3.5.5", "EFS", "What is Amazon EFS?", "<strong>Amazon EFS</strong> is elastic shared file storage for Linux workloads.", "", "", "Shared Linux file system = EFS."),
  c("D3.5.6", "FSx", "What is Amazon FSx?", "<strong>Amazon FSx</strong> provides managed file systems such as Windows File Server, Lustre, NetApp ONTAP, and OpenZFS.", "", "", "Windows file shares or Lustre HPC = FSx."),
  c("D3.5.7", "Snow Family", "What is the AWS Snow Family?", "The <strong>AWS Snow Family</strong> provides physical devices for offline data transfer and edge computing where networks are limited or unavailable.", "", "", "Offline large data transfer = Snow Family."),
  c("D3.6.1", "RDS", "What is Amazon RDS?", "<strong>Amazon RDS</strong> is a managed relational database service for engines such as MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Db2.", "", "", "Managed relational database = RDS."),
  c("D3.6.2", "RDS Multi-AZ", "What is RDS Multi-AZ used for?", "<strong>RDS Multi-AZ</strong> provides high availability by maintaining a standby database in another Availability Zone for failover.", "", "It is not mainly for read scaling.", "Failover = Multi-AZ."),
  c("D3.6.3", "RDS Read Replicas", "What are RDS Read Replicas used for?", "<strong>RDS Read Replicas</strong> improve read scalability by creating copies that serve read traffic.", "", "Read Replicas are not the primary HA failover feature.", "Read scaling = Read Replicas."),
  c("D3.6.4", "DynamoDB", "What is Amazon DynamoDB?", "<strong>Amazon DynamoDB</strong> is a fully managed NoSQL key-value and document database for high-scale, low-latency applications.", "", "", "Serverless NoSQL = DynamoDB."),
  c("D3.6.5", "Redshift", "What is Amazon Redshift?", "<strong>Amazon Redshift</strong> is a cloud data warehouse used for large-scale analytics and business intelligence queries.", "", "", "Data warehouse = Redshift."),
  c("D3.6.6", "ElastiCache", "What is Amazon ElastiCache?", "<strong>Amazon ElastiCache</strong> is a managed in-memory caching service using Redis or Memcached.", "", "", "In-memory cache = ElastiCache."),
  c("D3.7.1", "VPC", "What is Amazon VPC?", "<strong>Amazon VPC</strong> is a logically isolated virtual network in AWS where you launch resources.", "", "", "Private network in AWS = VPC."),
  c("D3.7.2", "Public vs Private Subnet", "What is the difference between public and private subnets?", "A <strong>public subnet</strong> has a route to an internet gateway. A <strong>private subnet</strong> does not allow direct inbound internet access.", "", "", "Web servers public; databases private."),
  c("D3.7.3", "NAT Gateway", "What is a NAT Gateway used for?", "A <strong>NAT Gateway</strong> lets private subnet resources initiate outbound internet access while blocking unsolicited inbound internet connections.", "", "", "Private subnet needs outbound updates = NAT Gateway."),
  c("D3.7.4", "Security Group", "What is a security group?", "A <strong>security group</strong> is a stateful virtual firewall attached to resources like EC2 instances.", "", "", "Instance-level, stateful, allow rules only = Security Group."),
  c("D3.7.5", "NACL", "What is a network ACL?", "A <strong>network ACL</strong> is a stateless subnet-level traffic filter with allow and deny rules.", "", "", "Subnet-level, stateless, allow and deny = NACL."),
  c("D3.7.6", "Route 53", "What is Amazon Route 53?", "<strong>Amazon Route 53</strong> is AWS's DNS service for routing users to applications and resources.", "", "", "DNS = Route 53."),
  c("D3.7.7", "CloudFront", "What is Amazon CloudFront?", "<strong>Amazon CloudFront</strong> is a content delivery network that caches content at edge locations close to users.", "", "", "CDN/caching = CloudFront."),
  c("D3.8.1", "SQS", "What is Amazon SQS?", "<strong>Amazon SQS</strong> is a managed message queue that decouples application components.", "", "", "Queue and decouple = SQS."),
  c("D3.8.2", "SNS", "What is Amazon SNS?", "<strong>Amazon SNS</strong> is a pub/sub notification service that sends messages from publishers to subscribers.", "", "", "Fan-out notification = SNS."),
  c("D3.8.3", "EventBridge", "What is Amazon EventBridge?", "<strong>Amazon EventBridge</strong> is an event bus that routes events between AWS services, SaaS apps, and custom applications.", "", "", "Event-driven routing = EventBridge."),
  c("D3.8.4", "Step Functions", "What is AWS Step Functions?", "<strong>AWS Step Functions</strong> coordinates multi-step workflows across AWS services using state machines.", "", "", "Workflow orchestration = Step Functions."),
  c("D3.9.1", "Athena", "What is Amazon Athena?", "<strong>Amazon Athena</strong> lets you query data in S3 using SQL without managing servers.", "", "", "SQL on S3 = Athena."),
  c("D3.9.2", "Glue", "What is AWS Glue?", "<strong>AWS Glue</strong> is a serverless data integration service for ETL jobs and data cataloging.", "", "", "ETL and data catalog = Glue."),
  c("D3.9.3", "Kinesis", "What is Amazon Kinesis?", "<strong>Amazon Kinesis</strong> collects, processes, and analyzes streaming data in near real time.", "", "", "Real-time streaming data = Kinesis."),
  c("D3.10.1", "SageMaker AI", "What is Amazon SageMaker AI?", "<strong>Amazon SageMaker AI</strong> helps build, train, and deploy machine learning models.", "", "", "Build/train/deploy ML = SageMaker."),
  c("D3.10.2", "Rekognition", "What is Amazon Rekognition?", "<strong>Amazon Rekognition</strong> analyzes images and videos for labels, objects, faces, and moderation signals.", "", "", "Image/video analysis = Rekognition."),
  c("D3.10.3", "Translate Polly Transcribe", "How do Translate, Polly, and Transcribe differ?", "<strong>Amazon Translate</strong> converts text between languages, <strong>Polly</strong> turns text into speech, and <strong>Transcribe</strong> turns speech into text.", "", "", "Translate text language; Polly speaks; Transcribe listens."),
  c("D3.11.1", "CloudFormation", "What is AWS CloudFormation?", "<strong>AWS CloudFormation</strong> provisions AWS infrastructure from templates, enabling repeatable infrastructure as code.", "", "", "AWS infrastructure as code templates = CloudFormation."),
  c("D3.11.2", "CodePipeline", "What is AWS CodePipeline?", "<strong>AWS CodePipeline</strong> automates software release workflows across source, build, test, and deploy stages.", "", "", "CI/CD pipeline orchestration = CodePipeline."),
  c("D3.12.1", "CloudWatch", "What is Amazon CloudWatch?", "<strong>Amazon CloudWatch</strong> collects metrics, logs, alarms, and dashboards for monitoring AWS resources and applications.", "", "", "Metrics, logs, alarms = CloudWatch."),
  c("D3.12.2", "Systems Manager", "What is AWS Systems Manager?", "<strong>AWS Systems Manager</strong> helps manage AWS and hybrid resources, including patching, inventory, automation, and parameter storage.", "", "", "Operational management of servers/resources = Systems Manager."),
  c("D3.13.1", "Migration Hub", "What is AWS Migration Hub?", "<strong>AWS Migration Hub</strong> provides a central place to track application migration progress.", "", "", "Track migration progress = Migration Hub."),
  c("D3.13.2", "DataSync", "What is AWS DataSync?", "<strong>AWS DataSync</strong> automates and accelerates online data transfer between on-premises storage and AWS storage services.", "", "", "Online data transfer to AWS storage = DataSync."),

  c("D4.1.1", "Pay-As-You-Go", "What is pay-as-you-go pricing?", "<strong>Pay-as-you-go</strong> means paying for AWS services based on actual usage instead of buying infrastructure upfront.", "", "", "Variable cost and no upfront hardware = pay-as-you-go."),
  c("D4.1.2", "Free Tier", "What are the AWS Free Tier types?", "The <strong>AWS Free Tier</strong> includes Always Free offers, 12-month free offers after account creation, and short-term trials.", "", "Free Tier limits vary and should be verified on AWS before exam day.", ""),
  c("D4.2.1", "EC2 Pricing Choice", "How do you choose an EC2 pricing option?", "Use <strong>On-Demand</strong> for flexibility, <strong>Reserved Instances</strong> or <strong>Savings Plans</strong> for predictable usage, <strong>Spot</strong> for interruptible workloads, and <strong>Dedicated Hosts</strong> for physical host needs.", "", "", "This is heavily tested."),
  c("D4.3.1", "Cost Explorer", "What is AWS Cost Explorer?", "<strong>AWS Cost Explorer</strong> visualizes and analyzes AWS costs and usage over time.", "", "", "Analyze cost trends = Cost Explorer."),
  c("D4.3.2", "AWS Budgets", "What is AWS Budgets?", "<strong>AWS Budgets</strong> lets you set cost and usage thresholds and receive alerts.", "", "", "Alert when spend reaches a threshold = Budgets."),
  c("D4.3.3", "Cost Anomaly Detection", "What is AWS Cost Anomaly Detection?", "<strong>AWS Cost Anomaly Detection</strong> uses machine learning to detect unusual spending patterns.", "", "", "Unexpected spend spike = Cost Anomaly Detection."),
  c("D4.3.4", "CUR", "What is the AWS Cost and Usage Report?", "The <strong>Cost and Usage Report</strong>, or <strong>CUR</strong>, provides the most detailed AWS billing and usage data.", "", "", "Most detailed billing data = CUR."),
  c("D4.4.1", "Consolidated Billing", "What is consolidated billing?", "<strong>Consolidated billing</strong> combines charges from multiple AWS accounts into one bill through AWS Organizations.", "", "", "Multiple accounts, one bill = Organizations."),
  c("D4.5.1", "Pricing Calculator", "What is AWS Pricing Calculator?", "<strong>AWS Pricing Calculator</strong> estimates AWS costs before you deploy or migrate workloads.", "", "", "Estimate future costs = Pricing Calculator."),
  c("D4.6.1", "Basic Support", "What is AWS Basic Support?", "<strong>Basic Support</strong> is included for all AWS customers and provides account and billing support, documentation, service health info, and limited Trusted Advisor checks.", "", "", "Free support plan = Basic."),
  c("D4.6.2", "Business Support", "What is AWS Business Support known for?", "<strong>Business Support</strong> provides 24/7 access to Cloud Support Engineers, full Trusted Advisor checks, and production workload support.", "", "", "24/7 technical support and full Trusted Advisor = Business or higher."),
  c("D4.6.3", "Enterprise Support", "What is AWS Enterprise Support known for?", "<strong>Enterprise Support</strong> includes the highest support level, a designated Technical Account Manager, Concierge Support, and proactive programs.", "", "", "Designated TAM and Concierge = Enterprise."),
  c("D4.7.1", "AWS Marketplace", "What is AWS Marketplace?", "<strong>AWS Marketplace</strong> is a digital catalog for finding, buying, deploying, and managing third-party software and services that run on AWS.", "", "", "Buy third-party software for AWS = Marketplace."),
  c("D4.7.2", "AWS Partner Network", "What is the AWS Partner Network?", "The <strong>AWS Partner Network</strong>, or <strong>APN</strong>, is AWS's global network of consulting and technology partners.", "", "", "Find AWS partners = APN.")
];

const confusedPairs = [
  pair("Security Group vs NACL", ["Resource/instance-level", "Stateful", "Allow rules only", "Return traffic automatically allowed"], ["Subnet-level", "Stateless", "Allow and deny rules", "Return traffic must be explicitly allowed"]),
  pair("S3 vs EBS", ["Object storage", "Buckets and objects", "Great for files, backups, logs, static websites"], ["Block storage", "Volumes attached to EC2", "Great as a server disk"]),
  pair("EFS vs FSx", ["Shared Linux file system", "Elastic and serverless", "Many EC2 instances can mount it"], ["Managed specialized file systems", "Windows, Lustre, ONTAP, OpenZFS", "Choose for specific file-system needs"]),
  pair("Reserved Instances vs Savings Plans", ["Commit to instance usage", "Standard RI = bigger discount, less flexible", "Convertible RI = more flexible"], ["Commit to dollars/hour compute usage", "Compute SP = broad flexibility", "EC2 Instance SP = family/Region specific"]),
  pair("CloudWatch vs CloudTrail", ["Metrics, logs, alarms, dashboards", "How is it performing?", "Operational monitoring"], ["API activity audit", "Who did what?", "Governance and investigation"]),
  pair("CloudTrail vs Config", ["Records API calls and user/service actions", "Who changed it?", "Audit trail"], ["Records resource configuration state", "What changed?", "Compliance rules"]),
  pair("RDS Multi-AZ vs Read Replica", ["High availability", "Automatic failover", "Standby copy"], ["Read scaling", "Serves read traffic", "Can reduce load on primary"]),
  pair("SNS vs SQS", ["Pub/sub notifications", "Push to subscribers", "Fan-out pattern"], ["Message queue", "Consumers poll and process", "Decoupling and buffering"]),
  pair("Direct Connect vs Site-to-Site VPN", ["Dedicated private connection", "More consistent performance", "Takes more setup"], ["Encrypted internet tunnel", "Faster and cheaper to start", "Good backup connection"]),
  pair("WAF vs Shield", ["Filters web requests", "Blocks SQL injection/XSS patterns", "Layer 7 web protection"], ["Protects against DDoS", "Standard is free", "Advanced adds response help and cost protection"]),
  pair("KMS vs Secrets Manager", ["Manages encryption keys", "Used by S3, EBS, RDS, Lambda", "Key rotation"], ["Stores and rotates secrets", "Database passwords/API keys", "Credential retrieval"]),
  pair("Cognito User Pool vs Identity Pool", ["App user directory", "Sign-up and sign-in", "Authentication"], ["Temporary AWS credentials", "Access AWS services", "Authorization to AWS resources"])
];

const state = {
  index: 0,
  filtered: [...cards],
  flipped: false,
  statuses: JSON.parse(localStorage.getItem("awsFlashcardStatus") || "{}")
};

const els = {
  domainFilter: document.getElementById("domainFilter"),
  modeFilter: document.getElementById("modeFilter"),
  searchBox: document.getElementById("searchBox"),
  deckTitle: document.getElementById("deckTitle"),
  cardCounter: document.getElementById("cardCounter"),
  flashcard: document.getElementById("flashcard"),
  cardId: document.getElementById("cardId"),
  backCardId: document.getElementById("backCardId"),
  cardDomain: document.getElementById("cardDomain"),
  cardTopic: document.getElementById("cardTopic"),
  backTopic: document.getElementById("backTopic"),
  cardQuestion: document.getElementById("cardQuestion"),
  cardAnswer: document.getElementById("cardAnswer"),
  cardExtras: document.getElementById("cardExtras"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  knownBtn: document.getElementById("knownBtn"),
  reviewBtn: document.getElementById("reviewBtn"),
  shuffleBtn: document.getElementById("shuffleBtn"),
  resetBtn: document.getElementById("resetBtn"),
  masteryText: document.getElementById("masteryText"),
  masteryBar: document.getElementById("masteryBar"),
  progressDetail: document.getElementById("progressDetail"),
  pairGrid: document.getElementById("pairGrid")
};

function c(id, topic, q, a, analogy = "", trap = "", tip = "") {
  return { id, topic, q, a, analogy, trap, tip, domain: id.slice(0, 2) };
}

function pair(title, left, right) {
  return { title, left, right };
}

function init() {
  Object.entries(domains).forEach(([key, label]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = label;
    els.domainFilter.append(option);
  });

  renderPairs();
  bindEvents();
  applyFilters();
  updateProgress();
}

function bindEvents() {
  els.domainFilter.addEventListener("change", applyFilters);
  els.modeFilter.addEventListener("change", applyFilters);
  els.searchBox.addEventListener("input", applyFilters);
  els.flashcard.addEventListener("click", flip);
  els.flashcard.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      flip();
    }
  });
  els.prevBtn.addEventListener("click", previousCard);
  els.nextBtn.addEventListener("click", nextCard);
  els.knownBtn.addEventListener("click", () => mark("known"));
  els.reviewBtn.addEventListener("click", () => mark("review"));
  els.shuffleBtn.addEventListener("click", shuffle);
  els.resetBtn.addEventListener("click", resetProgress);
  document.addEventListener("keydown", event => {
    if (event.target.matches("input, select")) return;
    if (event.key === "ArrowRight") nextCard();
    if (event.key === "ArrowLeft") previousCard();
    if (event.key.toLowerCase() === "k") mark("known");
    if (event.key.toLowerCase() === "r") mark("review");
  });
}

function applyFilters() {
  const domain = els.domainFilter.value;
  const mode = els.modeFilter.value;
  const term = els.searchBox.value.trim().toLowerCase();

  state.filtered = cards.filter(card => {
    const status = state.statuses[card.id];
    const rapid = card.tip || card.trap || ["D1.2.1", "D1.4.2", "D2.1.1", "D3.5.2", "D4.2.1"].includes(card.id);
    const matchesDomain = domain === "all" || card.domain === domain;
    const matchesMode =
      mode === "all" ||
      (mode === "unseen" && !status) ||
      (mode === "review" && status === "review") ||
      (mode === "known" && status === "known") ||
      (mode === "rapid" && rapid);
    const haystack = `${card.id} ${card.topic} ${card.q} ${card.a} ${card.analogy} ${card.trap} ${card.tip}`.toLowerCase();
    return matchesDomain && matchesMode && haystack.includes(term);
  });

  state.index = 0;
  state.flipped = false;
  els.flashcard.classList.remove("is-flipped");
  renderCard();
  renderTitle();
}

function renderTitle() {
  const domainText = els.domainFilter.value === "all" ? "All domains" : domains[els.domainFilter.value];
  const modeText = els.modeFilter.options[els.modeFilter.selectedIndex].textContent;
  els.deckTitle.textContent = `${domainText} · ${modeText}`;
}

function renderCard() {
  if (!state.filtered.length) {
    els.cardId.textContent = "No match";
    els.backCardId.textContent = "No match";
    els.cardDomain.textContent = "Adjust filters";
    els.cardTopic.textContent = "No cards match this filter";
    els.backTopic.textContent = "No cards match this filter";
    els.cardQuestion.textContent = "Try another domain, mode, or search term.";
    els.cardAnswer.innerHTML = "No matching <strong>flashcards</strong> are currently visible.";
    els.cardExtras.innerHTML = "";
    els.cardCounter.textContent = "0 / 0";
    return;
  }

  const card = state.filtered[state.index];
  els.cardId.textContent = card.id;
  els.backCardId.textContent = card.id;
  els.cardDomain.textContent = domains[card.domain];
  els.cardTopic.textContent = card.topic;
  els.backTopic.textContent = card.topic;
  els.cardQuestion.textContent = card.q;
  els.cardAnswer.innerHTML = card.a;
  els.cardExtras.innerHTML = [
    card.analogy ? `<div class="extra"><strong>Analogy:</strong> ${card.analogy}</div>` : "",
    card.trap ? `<div class="extra trap"><strong>Trap:</strong> ${card.trap}</div>` : "",
    card.tip ? `<div class="extra"><strong>Exam tip:</strong> ${card.tip}</div>` : ""
  ].join("");
  els.cardCounter.textContent = `${state.index + 1} / ${state.filtered.length}`;
  els.knownBtn.textContent = state.statuses[card.id] === "known" ? "Known ✓" : "Known";
  els.reviewBtn.textContent = state.statuses[card.id] === "review" ? "Needs review ✓" : "Needs review";
}

function flip() {
  if (!state.filtered.length) return;
  state.flipped = !state.flipped;
  els.flashcard.classList.toggle("is-flipped", state.flipped);
}

function nextCard() {
  if (!state.filtered.length) return;
  state.index = (state.index + 1) % state.filtered.length;
  state.flipped = false;
  els.flashcard.classList.remove("is-flipped");
  renderCard();
}

function previousCard() {
  if (!state.filtered.length) return;
  state.index = (state.index - 1 + state.filtered.length) % state.filtered.length;
  state.flipped = false;
  els.flashcard.classList.remove("is-flipped");
  renderCard();
}

function mark(status) {
  if (!state.filtered.length) return;
  const card = state.filtered[state.index];
  state.statuses[card.id] = status;
  localStorage.setItem("awsFlashcardStatus", JSON.stringify(state.statuses));
  updateProgress();
  renderCard();
  nextCard();
}

function updateProgress() {
  const known = cards.filter(card => state.statuses[card.id] === "known").length;
  const review = cards.filter(card => state.statuses[card.id] === "review").length;
  const percent = Math.round((known / cards.length) * 100);
  els.masteryText.textContent = `${percent}%`;
  els.masteryBar.style.width = `${percent}%`;
  els.progressDetail.textContent = `${known} known · ${review} need review · ${cards.length} total`;
}

function shuffle() {
  for (let i = state.filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.filtered[i], state.filtered[j]] = [state.filtered[j], state.filtered[i]];
  }
  state.index = 0;
  state.flipped = false;
  els.flashcard.classList.remove("is-flipped");
  renderCard();
}

function resetProgress() {
  if (!confirm("Reset all known/review marks?")) return;
  state.statuses = {};
  localStorage.removeItem("awsFlashcardStatus");
  updateProgress();
  applyFilters();
}

function renderPairs() {
  els.pairGrid.innerHTML = confusedPairs.map(item => `
    <article class="pair-card">
      <h3>${item.title}</h3>
      <table>
        <thead>
          <tr><th>First</th><th>Second</th></tr>
        </thead>
        <tbody>
          ${item.left.map((left, index) => `<tr><td>${left}</td><td>${item.right[index] || ""}</td></tr>`).join("")}
        </tbody>
      </table>
    </article>
  `).join("");
}

init();
