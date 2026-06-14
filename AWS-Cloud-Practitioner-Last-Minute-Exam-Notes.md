# AWS Cloud Practitioner Last-Minute Exam Notes

Based on `AWS-Cloud-Practitioner.md`. Use this file for final revision: read service names, keywords, and "when to choose" cues.

## 1. Cloud Computing Basics

### Cloud Computing
- Cloud computing is on-demand delivery of compute, storage, database, networking, analytics, and other IT resources over the internet.
- Main pricing idea: pay as you go. You trade capital expense (CAPEX) for operating expense (OPEX).
- Key benefits: speed, elasticity, global reach, cost optimization, high availability, and reduced data center operations.

### Deployment Models
- Private cloud: used by one organization, usually more control and isolation.
- Public cloud: operated by a cloud provider such as AWS and shared through secure multi-tenancy.
- Hybrid cloud: combines on-premises infrastructure with cloud resources.

### Cloud Characteristics
- On-demand self-service: provision resources when needed.
- Broad network access: access resources over network/internet.
- Multi-tenancy and resource pooling: infrastructure shared securely across customers.
- Rapid elasticity and scalability: scale up/down or out/in based on demand.
- Measured service: usage is metered for billing and monitoring.

### Service Models
- IaaS: you manage OS and above; AWS provides infrastructure. Example: EC2.
- PaaS: you deploy application code; AWS manages infrastructure. Example: Elastic Beanstalk.
- SaaS: complete product managed by provider. Examples: Gmail, Dropbox, Zoom.

## 2. IAM - Identity and Access Management

### Core Ideas
- IAM is a global service used to manage users, groups, roles, and policies.
- Root user is created with the AWS account. Use it only for account-level tasks.
- Users can belong to groups. Groups can contain users, not other groups.
- Policies are JSON permission documents attached to users, groups, or roles.
- Always apply least privilege: grant only the permissions required.

### Access Methods
- AWS Management Console: password plus MFA.
- AWS CLI: access key and secret access key.
- AWS SDK: programmatic access using credentials.

### MFA
- Enable MFA for root and privileged IAM users.
- Common MFA options: virtual MFA app and U2F/security key.

### Roles
- IAM roles provide temporary credentials.
- Use roles for AWS services, applications, federation, and cross-account access.

## 3. EC2 - Elastic Compute Cloud

### EC2 Basics
- EC2 is IaaS virtual server compute.
- You choose OS, CPU, RAM, storage, network settings, and security groups.
- EC2 user data runs at instance launch and is commonly used for bootstrap scripts.

### Instance Families
- General purpose: balanced CPU, memory, and networking. Good for web servers.
- Compute optimized: high CPU workloads such as gaming, batch, and HPC.
- Memory optimized: in-memory databases and large data processing.
- Storage optimized: high sequential read/write workloads and local storage performance.

### EC2 Pricing
- On-Demand: pay as you go, no commitment. Best for short-term or unpredictable workloads.
- Spot Instances: cheapest, uses spare AWS capacity, can be interrupted. Best for fault-tolerant workloads.
- Reserved Instances: 1-year or 3-year commitment for predictable workloads.
- Standard RI: bigger discount, less flexible.
- Convertible RI: can change instance family/type/OS, more flexible.
- Savings Plans: commit to spend per hour for 1 or 3 years.
- Compute Savings Plan: applies to EC2, Fargate, and Lambda.
- EC2 Instance Savings Plan: applies to an instance family in a Region.
- Dedicated Host: physical server dedicated to you, useful for compliance and licensing.

### Security Groups
- Security groups are virtual firewalls at the instance level.
- They contain allow rules only.
- They are stateful: return traffic is automatically allowed.
- Common ports: SSH 22, FTP 21, SFTP 22, HTTP 80, HTTPS 443, RDP 3389.

## 4. EC2 Storage

### EBS - Elastic Block Store
- EBS is a network block storage volume attached to EC2.
- Data can persist after instance stop or termination, depending on delete settings.
- EBS volumes are tied to one Availability Zone.
- To move EBS data across AZs or Regions, create a snapshot and restore/copy it.
- Root EBS volume is usually deleted on termination by default; extra attached volumes usually are not.

### EBS Snapshots
- Point-in-time backups of EBS volumes.
- EBS Snapshot Archive reduces snapshot cost but restore takes longer.
- Recycle Bin can retain deleted snapshots for a configured retention period.

### AMI and EC2 Image Builder
- AMI is a reusable image/template for launching EC2 instances.
- AMIs are regional but can be copied to other Regions.
- EC2 Image Builder automates image creation, patching, testing, and distribution.

### Instance Store
- Physically attached temporary storage with very high I/O.
- Data is lost when the instance stops or terminates.
- Best for cache, buffer, scratch data, and temporary files.

### EFS - Elastic File System
- Managed NFS file system for Linux EC2 instances.
- Can be mounted by many EC2 instances across multiple AZs.
- EFS-IA is lower cost for files not accessed often.

### Amazon FSx
- Managed high-performance file systems.
- FSx for Windows File Server: Windows-native, SMB protocol, NTFS.
- FSx for Lustre: high-performance file system for HPC, ML, analytics, and video processing.

## 5. ELB and Auto Scaling

### Scalability
- Vertical scaling: increase instance size. Limited by hardware maximum.
- Horizontal scaling: add more instances. This is elasticity.

### Elastic Load Balancing
- ELB distributes traffic across multiple targets.
- Provides a single DNS endpoint and health checks.
- ALB: Layer 7, HTTP/HTTPS, path/host-based routing.
- NLB: Layer 4, TCP/UDP, very high performance, static IP support.
- Gateway Load Balancer: Layer 3, routes traffic through third-party virtual appliances.
- Classic Load Balancer: legacy option for HTTP/HTTPS/TCP.

### Auto Scaling Groups
- ASG automatically adds EC2 instances during high demand and removes them during low demand.
- Uses minimum, desired, and maximum capacity.
- Helps improve availability and cost control.

## 6. Amazon S3

### S3 Basics
- S3 is object storage with virtually unlimited scale.
- Objects are stored in buckets.
- Bucket names are globally unique, but buckets are created in a Region.
- Maximum object size is 5 TB.
- Use multipart upload for objects larger than 5 GB.
- Common uses: backup, archive, static website hosting, media hosting, software delivery, data lakes, analytics, disaster recovery.

### S3 Security
- User-based control: IAM policies.
- Resource-based control: bucket policies and ACLs.
- S3 supports server-side encryption and client-side encryption.
- S3 Block Public Access helps prevent accidental public exposure.

### Versioning
- Enabled at bucket level.
- Protects against accidental overwrites and deletes.
- Deleted objects can be restored when versioning is enabled.
- Suspending versioning does not delete old versions.

### Replication
- CRR: Cross-Region Replication. Use for compliance, lower latency, and cross-account replication.
- SRR: Same-Region Replication. Use for log aggregation or prod/dev replication.
- Replication is asynchronous and requires proper IAM permissions.

### S3 Storage Classes
- S3 Standard: frequently accessed data, low latency, high throughput.
- S3 Standard-IA: infrequent access but rapid retrieval. Good for backups and DR.
- S3 One Zone-IA: stored in one AZ, cheaper, data lost if AZ is destroyed. Use for recreatable data.
- S3 Glacier Instant Retrieval: archive data with millisecond retrieval, minimum 90 days.
- S3 Glacier Flexible Retrieval: expedited 1-5 minutes, standard 3-5 hours, bulk 5-12 hours.
- S3 Glacier Deep Archive: lowest-cost archive, retrieval around 12-48 hours, minimum 180 days.
- S3 Intelligent-Tiering: automatically moves objects between access tiers based on usage.

### Durability and Availability
- Durability means "will I lose the object?" S3 is designed for 11 nines durability.
- Availability means "can I access it right now?" Availability depends on storage class.

### Snow Family and Storage Gateway
- Snowball Edge: physical device for secure data transfer and edge processing.
- Snowball is useful when network transfer is too slow, expensive, or unavailable.
- Data transfer into S3 is free; data transfer out of AWS is charged.
- Storage Gateway connects on-premises environments with AWS cloud storage.

## 7. Databases and Analytics

### Database Types
- Relational database: tables, relationships, SQL. Example: RDS.
- NoSQL database: key-value, document, graph, in-memory, time series. Designed for flexible scale-out patterns.

### Amazon RDS
- Managed relational database service.
- Supports engines such as PostgreSQL, MySQL, MariaDB, Oracle, SQL Server, IBM Db2, and Aurora.
- AWS manages provisioning, OS patching, backups, monitoring, and maintenance.
- You cannot SSH into RDS instances.
- Read Replicas improve read performance.
- Multi-AZ improves high availability and failover.
- Multi-Region is used for disaster recovery and global read performance.

### Amazon Aurora
- AWS proprietary relational database compatible with MySQL and PostgreSQL.
- Higher performance than standard MySQL/PostgreSQL RDS.
- Storage auto-scales.
- Aurora Serverless scales capacity based on usage and reduces capacity planning.

### ElastiCache
- Managed in-memory cache using Redis or Memcached.
- Reduces database read load and improves low-latency reads.
- Best keyword: cache, session store, low-latency repeated reads.

### DynamoDB
- Fully managed serverless NoSQL key-value/document database.
- Single-digit millisecond latency at massive scale.
- Replicated across multiple AZs.
- Integrated with IAM.
- Table classes: Standard and Standard-IA.
- DAX is an in-memory cache only for DynamoDB.
- Global Tables provide multi-Region active-active reads and writes.

### Analytics Services
- Redshift: OLAP data warehouse, columnar storage, SQL analytics, BI tools.
- Redshift Serverless: analytics without managing warehouse capacity.
- EMR: managed Hadoop/Spark clusters for big data processing.
- Athena: serverless SQL queries directly on S3 data.
- QuickSight: BI dashboards and visualization.
- Glue: serverless ETL and Data Catalog.
- Glue Data Catalog: metadata catalog used by Athena, Redshift, and EMR.

### Specialized Databases
- DocumentDB: MongoDB-compatible document database.
- Neptune: graph database for relationships, social networks, recommendations, knowledge graphs.
- Timestream: time-series database for events, metrics, IoT, and monitoring data.
- QLDB: immutable ledger database for financial/transaction history.
- Managed Blockchain: blockchain networks such as Hyperledger Fabric and Ethereum.

### Migration
- DMS migrates databases while the source remains available.
- Homogeneous migration: same engine, such as Oracle to Oracle.
- Heterogeneous migration: different engines, such as SQL Server to Aurora.

## 8. Containers, Serverless, and Other Compute

### Docker and Containers
- Containers package application code and dependencies to run consistently across environments.
- ECR stores private Docker images in AWS.

### ECS, Fargate, and EKS
- ECS runs Docker containers on AWS.
- ECS on EC2: you manage/provision EC2 capacity.
- Fargate: serverless containers; no EC2 instances to manage.
- EKS: managed Kubernetes service on AWS.

### Lambda
- Serverless functions. No servers to manage.
- Event-driven and automatically scales.
- Pay for requests and execution duration.
- Best for short-running tasks, automation, APIs, event processing.
- Lambda supports container images, but ECS/Fargate are usually preferred for general container workloads.

### API Gateway
- Fully managed service to create, publish, secure, monitor, and throttle APIs.
- Supports REST APIs and WebSocket APIs.
- Common serverless pattern: API Gateway plus Lambda.

### AWS Batch
- Fully managed batch jobs at scale.
- Runs jobs using ECS, EC2, and Spot Instances.
- Best for jobs with start and end, such as image processing, simulations, and scheduled compute.

### Lightsail
- Simplified virtual servers, storage, databases, and networking.
- Predictable pricing and easy setup.
- Good for beginners and simple applications.
- Less flexible than EC2 and limited AWS integration.

## 9. Deployment and Infrastructure Management

### CloudFormation
- Infrastructure as Code using templates.
- Creates and manages AWS resources in correct order.
- Benefits: repeatability, reviewable changes, cost tracking by stack, easy teardown/recreate.

### AWS CDK
- Define infrastructure using programming languages.
- CDK code synthesizes to CloudFormation templates.
- Useful for Lambda, ECS/EKS, and application infrastructure.

### Elastic Beanstalk
- PaaS for deploying applications.
- You upload code; Beanstalk handles capacity provisioning, load balancing, auto scaling, health monitoring, and deployment.
- You pay for underlying AWS resources, not Beanstalk itself.
- Architectures: single instance, load balancer plus ASG, or worker/ASG style non-web app.

### Developer Tools
- CodeCommit: managed Git repositories.
- CodeBuild: compiles code, runs tests, creates build artifacts.
- CodeDeploy: automates deployments to EC2 and on-premises servers.
- CodePipeline: orchestrates CI/CD stages.
- CodeArtifact: managed artifact/package repository for dependencies.

### Systems Manager
- Manages EC2 and on-premises servers at scale.
- Supports patching, run command, inventory, automation, and compliance.
- Session Manager provides shell access without SSH keys, bastion hosts, or port 22.

## 10. Global Infrastructure

### Global Concepts
- Region: geographic area with multiple Availability Zones.
- Availability Zone: isolated data center group inside a Region.
- Edge Location: used by services like CloudFront to cache content closer to users.
- AWS does not move customer data out of a Region without explicit action.

### Why Build Global Applications
- Lower latency by serving users closer to their location.
- Disaster recovery by failing over to another Region.
- Better availability and attack resistance.

### Route 53
- Managed DNS service.
- Routing policies: simple, weighted, latency, and failover.
- Exam cue: DNS, domain registration, route users, health checks, failover.

### CloudFront
- CDN that caches content at edge locations.
- Improves read performance and reduces latency.
- Integrates with Shield and WAF.
- Can securely access S3 origins using Origin Access Control.

### S3 Transfer Acceleration and Global Accelerator
- S3 Transfer Acceleration speeds uploads/downloads to S3 using edge locations.
- Global Accelerator improves global application performance and availability over the AWS global network.

### Hybrid and Low-Latency Edge
- Outposts: AWS racks installed on-premises for hybrid cloud, low latency, local processing, and data residency.
- Wavelength: AWS infrastructure in telecom networks for 5G ultra-low-latency apps.
- Local Zones: AWS resources placed close to large population/industry centers for latency-sensitive workloads.

## 11. Application Integration

### Communication Patterns
- Synchronous: direct application-to-application call.
- Asynchronous/event-based: producers send messages/events; consumers process later.
- Decoupling improves reliability and scalability.

### SQS
- Queue service for decoupling applications.
- Consumers poll messages from the queue.
- Standard queue: very high throughput, at-least-once delivery, best-effort ordering.
- FIFO queue: exactly-once processing and strict ordering, lower throughput.
- Exam keyword: decouple apps with a queue.

### SNS
- Pub/sub notification service.
- One message can be pushed to many subscribers.
- Subscribers can include email, Lambda, HTTP endpoints, and SQS queues.
- Exam keyword: fan-out or push notifications.

### Kinesis
- Real-time streaming data service.
- Use for logs, metrics, clickstreams, IoT data, and real-time analytics.

### Amazon MQ
- Managed message broker for ActiveMQ and RabbitMQ.
- Use when migrating applications that already use standard broker protocols such as MQTT, AMQP, STOMP, or OpenWire.

## 12. Monitoring, Auditing, and Operations

### CloudWatch
- Collects metrics, logs, alarms, and dashboards.
- EC2 default metrics include CPU, status checks, and network, not memory.
- Custom metrics can be pushed by applications or agents.
- Billing metrics are stored in `us-east-1`.

### CloudWatch Logs
- Centralized log storage.
- Collects logs from Lambda, ECS, Elastic Beanstalk, CloudTrail filters, Route 53, EC2 agents, and on-premises servers.

### EventBridge
- Event bus and scheduler.
- Use for cron jobs and event-driven automation.

### CloudTrail
- Records API calls and user activity.
- Used for governance, compliance, audit, and "who did what" questions.
- Enabled by default for recent event history.
- Trails can be single-Region or all-Region.

### X-Ray
- Distributed tracing for applications and microservices.
- Helps troubleshoot latency, errors, dependencies, and request flow.

### CodeGuru
- ML-powered code review and application profiling.
- Reviewer: static code analysis.
- Profiler: runtime performance recommendations.

### AWS Health Dashboard
- Personalized alerts and remediation guidance when AWS events affect your resources.

## 13. VPC and Networking

### VPC Basics
- VPC is a private network in AWS and is a regional resource.
- Subnets divide a VPC and live in one Availability Zone.
- Public subnet has a route to an Internet Gateway.
- Private subnet does not receive direct inbound internet access.
- Route tables control where network traffic goes.

### IP Addresses
- Public IPv4: internet-routable address.
- Private IPv4: internal address within private networks.
- Elastic IP: fixed public IPv4 address attachable to resources such as EC2.
- IPv6: much larger address space.

### Internet Gateway and NAT Gateway
- Internet Gateway allows resources in public subnets to access the internet.
- NAT Gateway allows private subnet resources to initiate internet access while remaining private.
- NAT Gateway is AWS managed; NAT Instance is self managed.

### Security Groups vs NACLs
- Security Group: instance-level firewall, allow rules only, stateful, can reference IPs or other security groups.
- NACL: subnet-level firewall, allow and deny rules, stateless, rules use IP addresses.

### VPC Flow Logs
- Capture IP traffic metadata for VPCs, subnets, or network interfaces.
- Used to troubleshoot connectivity and monitor traffic.

### Connectivity
- VPC Peering connects two VPCs privately. It is not transitive.
- VPC Endpoint connects privately to AWS services without public internet.
- PrivateLink is secure and scalable for exposing services to many VPCs.
- Site-to-Site VPN connects on-premises to AWS over encrypted public internet.
- Direct Connect is a private physical connection to AWS and can take weeks to set up.
- Client VPN connects individual users to AWS/on-prem networks using OpenVPN.
- Transit Gateway connects many VPCs and on-premises networks using hub-and-spoke architecture.

## 14. Security and Compliance

### Shared Responsibility Model
- AWS is responsible for security of the cloud: facilities, hardware, infrastructure, managed service foundation.
- Customer is responsible for security in the cloud: data, IAM, network rules, OS/app patching for self-managed services, encryption choices.
- The exact customer responsibility changes based on IaaS, PaaS, or SaaS.

### DDoS and Firewall Services
- Shield Standard: free automatic DDoS protection.
- Shield Advanced: paid 24/7 advanced DDoS protection and response.
- WAF: Layer 7 web application firewall for HTTP(S), SQL injection, and XSS rules.
- Network Firewall: managed network firewall for VPC traffic, Layer 3 to Layer 7.
- Firewall Manager: centrally manages firewall/security rules across AWS Organizations accounts.

### Encryption and Keys
- Data at rest: stored data.
- Data in transit: data moving across a network.
- KMS: managed service for encryption keys.
- Customer managed key: created and managed by customer.
- AWS managed key: created and managed by AWS for customer account/service use.
- AWS owned key: owned and managed by AWS, not visible to customer.
- CloudHSM: dedicated hardware security module where customer controls keys and cryptographic operations.

### Certificates and Secrets
- ACM provisions and manages SSL/TLS certificates.
- Public certificates from ACM are free and can renew automatically.
- Secrets Manager stores secrets and supports automatic rotation, especially for RDS credentials.

### Security Detection and Compliance
- Artifact: access AWS compliance reports and agreements.
- GuardDuty: threat detection for accounts, workloads, and data sources; can detect suspicious activity such as crypto mining.
- Inspector: automated vulnerability management/security assessment.
- Config: records resource configuration history and compliance.
- Macie: discovers sensitive data such as PII in S3.
- Security Hub: central security posture management across accounts.
- Detective: investigates root cause of suspicious activity.
- AWS Abuse: report suspected abusive or illegal use of AWS resources.

### Root User Tasks
- Keep root credentials locked away and enable MFA.
- Root-only or root-important tasks include closing the account, changing account settings, changing support plan, and registering as RI marketplace seller.

## 15. Machine Learning

### Service Selection Cues
- Rekognition: image/video analysis, objects, people, faces, text in images.
- Transcribe: speech to text, automatic speech recognition, PII redaction.
- Polly: text to speech.
- Translate: language translation.
- Lex: chatbots and voice bots using Alexa-style ASR/NLU.
- Connect: cloud contact center.
- Comprehend: natural language processing and sentiment/entity analysis.
- SageMaker: build, train, and deploy ML models.
- Kendra: enterprise/document search with natural language.
- Personalize: real-time personalized recommendations.
- Textract: extract text and data from documents/images/forms.

## 16. Account Management, Billing, and Support

### AWS Organizations
- Manage multiple AWS accounts centrally.
- Provides consolidated billing and volume discounts.
- Can automate account creation.
- Uses Organizational Units (OUs) and Service Control Policies.
- SCPs restrict permissions at account/OU level and apply even to root users in member accounts.
- SCPs do not grant permissions; they only set maximum allowed permissions.

### Consolidated Billing
- One bill for accounts in the organization.
- Combines usage for volume discounts.
- Can share Reserved Instance and Savings Plans discounts across accounts, depending on settings.

### Control Tower
- Sets up and governs a secure multi-account AWS environment.
- Uses AWS Organizations underneath.
- Provides guardrails, account factory, compliance dashboard, and policy detection/remediation.

### RAM and Service Catalog
- Resource Access Manager (RAM): share AWS resources across accounts or within an organization.
- Service Catalog: self-service portal of approved products/templates created by admins.

### Pricing Models
- Pay as you go: pay only for usage.
- Save when you reserve: discounts for commitment.
- Pay less by using more: volume-based discounts.
- AWS pricing can reduce as AWS grows.

### Savings Plans and Compute Optimizer
- EC2 Instance Savings Plan: biggest EC2-specific discount, tied to instance family and Region.
- Compute Savings Plan: flexible across EC2, Fargate, and Lambda.
- SageMaker Savings Plan: for SageMaker workloads.
- Compute Optimizer recommends better resource choices using CloudWatch metrics and ML.

### Billing and Cost Tools
- Pricing Calculator: estimate costs before deployment.
- Billing Dashboard: billing overview.
- Cost Allocation Tags: track costs by tag.
- Cost and Usage Report: most detailed billing data.
- Cost Explorer: visualize and forecast costs.
- Billing Alarm: CloudWatch alarm on estimated charges, in `us-east-1`.
- Budgets: alerts when cost/usage/reservation targets are exceeded.
- Cost Anomaly Detection: ML-based unusual spend detection.

### Support Plans
- Basic: free, account/customer service, documentation, community, limited Trusted Advisor, Health Dashboard.
- Developer: business-hours email support for non-production/general guidance.
- Business: 24x7 phone/email/chat, full Trusted Advisor, production workload support.
- Enterprise On-Ramp: production/business-critical support, pool of TAMs, concierge, reviews.
- Enterprise: mission-critical support, designated TAM, fastest business-critical response target.

## 17. Advanced Identity

### STS
- Security Token Service issues temporary, limited-privilege credentials.
- Used with IAM roles, federation, cross-account access, and short-lived access.

### Cognito
- Identity and user management for web and mobile apps.
- Exam cue: sign-up/sign-in for application users.

### Directory Services
- AWS Managed Microsoft AD: managed AD in AWS; supports trust with on-premises AD.
- AD Connector: proxy to on-premises AD; users remain managed on-premises.
- Simple AD: basic AD-compatible directory in AWS; cannot join to on-premises AD.

### IAM Identity Center
- Single sign-on access to multiple AWS accounts and applications.
- Best cue: one login for all AWS accounts in an organization.

## 18. Other Services, Migration, and Disaster Recovery

### End-User and App Services
- WorkSpaces: managed desktop as a service for Windows/Linux desktops.
- AppStream 2.0: stream desktop applications through a browser.
- IoT Core: connect IoT devices securely to AWS.
- Elastic Transcoder: convert media files in S3 to formats needed by devices.
- AppSync: managed GraphQL API and real-time data sync.
- Amplify: tools/services for full-stack web and mobile apps.
- Infrastructure Composer: visually design serverless apps and generate IaC.
- Device Farm: test web/mobile apps on real browsers and devices.

### Backup and DR
- AWS Backup: centrally manage and automate backups across AWS services; supports point-in-time recovery for supported services.
- Backup and Restore: cheapest DR strategy.
- Pilot Light: minimal core components running; scale during disaster.
- Warm Standby: smaller full environment running; scale up during disaster.
- Multi-site/Hot-site: fully active environment; most expensive and fastest recovery.
- Elastic Disaster Recovery (DRS): recover physical, virtual, and cloud servers into AWS.

### Data Transfer and Migration
- DataSync: move large amounts of data between on-premises and AWS; incremental after first full load.
- Application Discovery Service: gather on-premises data for migration planning.
- Agentless Discovery: discovers VMware/on-prem data without installing agents on every server.
- Agent-based Discovery: installs agents for detailed server data.
- Application Migration Service (MGN): lift-and-shift/rehost applications to AWS.
- Migration Evaluator: build a data-driven business case for migration.
- Migration Hub: central place to discover, plan, track, and orchestrate migrations.

### 7 Rs of Migration
- Retire: turn off what is no longer needed.
- Retain: keep as-is for now.
- Relocate: move platform to cloud version with minimal changes.
- Rehost: lift and shift.
- Replatform: lift and reshape, such as moving database to RDS.
- Repurchase: replace with another product/SaaS.
- Refactor/Re-architect: redesign using cloud-native features.

### Workflow and Special Services
- Fault Injection Simulator: chaos engineering experiments to test resilience.
- Step Functions: serverless visual workflows and orchestration, including human approval.
- Ground Station: control satellite communications and process satellite data.
- Pinpoint: two-way marketing communication and customer engagement.

## 19. Architecting and AWS Ecosystem

### General Guiding Principles
- Stop guessing capacity.
- Test systems at production scale.
- Automate to make experiments easier.
- Design for changing requirements.
- Drive architecture using data.
- Improve through game days.

### Cloud Best Practices
- Scalability: vertical and horizontal scaling.
- Disposable resources: servers should be easy to replace.
- Automation: use IaC, serverless, and auto scaling.
- Loose coupling: reduce dependencies so one failure does not break everything.
- Services, not servers: prefer managed services when possible.

### Well-Architected Framework Pillars
- Operational Excellence: run, monitor, and improve systems and processes.
- Security: protect systems and data through risk assessment and controls.
- Reliability: recover from failures and meet availability requirements.
- Performance Efficiency: use resources efficiently as demand changes.
- Cost Optimization: deliver business value at the lowest cost.
- Sustainability: reduce environmental impact of workloads.

### Well-Architected Tool and Carbon Tool
- Well-Architected Tool reviews architecture against AWS best practices.
- Customer Carbon Footprint Tool tracks, measures, reviews, and forecasts carbon emissions from AWS usage.

### AWS Cloud Adoption Framework
- Six perspectives: Business, People, Governance, Platform, Security, Operations.
- Business: align cloud investment with business value.
- People: bridge technology and business; skills and organizational change.
- Governance: manage benefits and transformation risks.
- Platform: build scalable hybrid/cloud platform.
- Security: confidentiality, integrity, and availability.
- Operations: deliver cloud services to meet business needs.

### CAF Transformation
- Domains: Technology, Process, Organization, Products.
- Phases: Envision, Align, Launch, Scale.

### Right Sizing
- Match instance type and size to workload at the lowest possible cost.
- Start small because scaling up is easy.
- Right size before migration and continuously after migration.

### AWS Managed Services, IQ, re:Post, Knowledge Center
- AWS Managed Services (AMS): AWS experts operate infrastructure for security, reliability, and availability.
- AWS IQ: find AWS experts for projects.
- AWS re:Post: community Q&A; not for time-sensitive or proprietary questions.
- AWS Knowledge Center: common AWS questions, FAQs, and best practices.

## Final Exam Memory Cues

- IAM policy grants permissions; SCP sets maximum permissions but does not grant permissions.
- Security Group is stateful and instance-level; NACL is stateless and subnet-level.
- Multi-AZ is for high availability/failover; Read Replica is for read scaling.
- SQS decouples with queues; SNS fans out notifications; Kinesis streams real-time data.
- CloudWatch monitors metrics/logs; CloudTrail audits API calls.
- KMS manages encryption keys; CloudHSM gives dedicated hardware key control.
- GuardDuty detects threats; Inspector finds vulnerabilities; Macie finds sensitive data in S3; Config tracks configuration compliance.
- Route 53 is DNS; CloudFront is CDN; Global Accelerator improves global app routing.
- EBS is block storage for one AZ; EFS is shared Linux file storage across AZs; S3 is object storage.
- DynamoDB is serverless NoSQL; RDS/Aurora are relational; Redshift is data warehouse; Athena queries S3.
- Backup and Restore is cheapest DR; Multi-site/Hot-site is most expensive and fastest.
- Use managed services when the question asks for less operational overhead.
