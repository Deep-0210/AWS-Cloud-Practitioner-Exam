# AWS Cloud Practitioner - Quick Revision Guide

This guide contains highly distilled, meaningful points from all core AWS topics, ideal for last-minute exam prep.

## 1. Cloud Computing Basics
* **Deployment Models**: 
  * **Private**: Single org, full control.
  * **Public**: Third-party owned (AWS).
  * **Hybrid**: Mix of on-premises and cloud.
* **Service Models**:
  * **IaaS**: Infrastructure (EC2, Storage, Networking).
  * **PaaS**: Platform/Deployment focus (Elastic Beanstalk).
  * **SaaS**: Complete software product (Gmail, Rekognition).

## 2. IAM (Identity & Access Management)
* **Global Service**. Root account has full access; use it only to create initial users.
* **Least Privilege Principle**: Give only the permissions necessary.
* **Groups**: Contain users, cannot contain other groups.
* **Access Ways**: Console (Password + MFA), CLI (Access Keys), SDK (Access Keys).

## 3. EC2 & Compute
* **Pricing Models**:
  * **On-Demand**: Pay-as-you-go, no commitment.
  * **Spot**: Unused capacity, highly discounted, can be reclaimed (cheapest).
  * **Reserved**: 1-3 year commitment for steady usage.
  * **Dedicated Hosts**: Compliance/licensing needs, no sharing of physical servers.
  * **Savings Plans**: 1-3 year dollar commitment for flexible usage.
* **EBS (Elastic Block Store)**: Network drive attached to ONE EC2 instance. Bound to an AZ.
* **Instance Store**: Temporary, high I/O, local storage. Data lost on stop.
* **EFS (Elastic File System)**: Shared network file system, mounts to multiple instances across multiple AZs (Linux only).
* **FSx**: High performance (Lustre for Linux/HPC, Windows File Server for Windows).

## 4. ELB & Auto Scaling (ASG)
* **ALB (Application LB)**: HTTP/HTTPS, Layer 7.
* **NLB (Network LB)**: TCP/UDP, Layer 4, millions of requests, ultra-high performance.
* **ASG**: Automatically scales EC2 instances OUT (add) or IN (remove) based on load.

## 5. Amazon S3 & Storage
* **Global namespace, regional buckets**.
* **Storage Classes**:
  * **Standard**: Frequently accessed data, multi-AZ.
  * **Standard-IA**: Infrequent access, rapid retrieval needed.
  * **One Zone-IA**: Secondary backups, reproducible data (lost if AZ fails).
  * **Glacier Instant Retrieval**: Access once a quarter (min 90 days).
  * **Glacier Flexible Retrieval**: 1-5 min to 12 hours retrieval.
  * **Glacier Deep Archive**: Longest storage, 12-48 hours retrieval (cheapest).
  * **Intelligent-Tiering**: Auto-moves data to save money without retrieval fees.
* **Snowball / Snow Family**: Physical devices for migrating TBs/PBs of data securely into AWS. Storage Gateway links on-premise to cloud storage.

## 6. Databases & Analytics
* **RDS**: SQL, managed relational DB (Postgres, MySQL, Oracle, etc.). Multi-AZ (Disaster Recovery), Read Replicas (Performance).
* **Aurora**: AWS proprietary, 5x faster than MySQL, 3x faster than Postgres. Serverless option available.
* **DynamoDB**: NoSQL, serverless, single-digit ms latency, key-value. DAX for in-memory caching.
* **ElastiCache**: Redis/Memcached, in-memory cache to speed up read-heavy workloads.
* **Redshift**: OLAP, Data Warehousing, analytics, columnar storage.
* **Athena**: Query data directly in S3 using serverless SQL.
* **DocumentDB**: MongoDB compatible.
* **Neptune**: Graph database (social networks, knowledge graphs).
* **EMR**: Hadoop/Big Data processing.

## 7. Containers & Serverless
* **ECS**: Run Docker containers (EC2 backed).
* **Fargate**: Serverless containers (no EC2 provisioning, pay for usage).
* **EKS**: Managed Kubernetes.
* **Lambda**: Serverless compute, pay per call/duration, time-limited, event-driven.
* **API Gateway**: Serverless, create/manage APIs.

## 8. Deployment & Infrastructure
* **CloudFormation**: Infrastructure as Code (JSON/YAML). Automate resource provisioning.
* **Elastic Beanstalk**: PaaS, deploy web apps quickly, handles capacity, LB, and scaling.
* **CodeCommit** (Git Repo), **CodeBuild** (Compile/Test), **CodeDeploy** (Deploy), **CodePipeline** (CI/CD orchestration).
* **SSM (Systems Manager)**: Manage EC2/On-prem patches, run commands securely via Session Manager (no SSH/port 22 required).

## 9. Global Infrastructure & Networking
* **Route 53**: Managed DNS. Routing policies (Simple, Weighted, Latency, Failover).
* **CloudFront**: CDN, caches content at Edge Locations for low latency worldwide.
* **Global Accelerator**: Uses AWS global network to improve global app performance.
* **VPC**: Virtual Private Cloud (Regional).
  * **Subnets**: Public (Internet access) vs Private (No Internet).
  * **Internet Gateway / NAT Gateway**: IGW for Public access, NAT for Private outbound access.
  * **Security Groups (SG)**: Firewall for EC2 instances (Stateful, allow rules only).
  * **NACL**: Firewall for Subnets (Stateless, allow & deny rules).
* **Transit Gateway**: Connects thousands of VPCs and on-premise networks.

## 10. Application Integration
* **SQS (Simple Queue Service)**: Decouple applications. Standard (at-least-once) vs FIFO (ordered, exactly-once).
* **SNS (Simple Notification Service)**: Pub/Sub, send notifications/messages to multiple subscribers.
* **Kinesis**: Real-time big data streaming.
* **Amazon MQ**: Managed message broker for migrating legacy apps (ActiveMQ, RabbitMQ).

## 11. Monitoring & Logging
* **CloudWatch**: Metrics, Alarms, Logs (Performance monitoring).
* **CloudTrail**: API call logging, audits, governance (Who did what).
* **X-Ray**: Trace requests, troubleshoot microservices performance.
* **EventBridge**: Cron jobs / event rules.

## 12. Security & Compliance
* **Shared Responsibility Model**: AWS manages security OF the cloud; Customer manages security IN the cloud.
* **AWS Shield**: DDoS protection (Standard is free, Advanced is paid).
* **AWS WAF**: Web Application Firewall (Layer 7 protection, SQLi, XSS).
* **KMS**: Managed encryption keys.
* **Secrets Manager**: Store and auto-rotate database credentials (ideal for RDS).
* **GuardDuty**: Threat detection using Machine Learning.
* **Macie**: Discover and protect sensitive data (PII) in S3.
* **Inspector**: Automated security assessment for EC2 vulnerabilities.
* **Artifact**: On-demand access to AWS compliance reports.

## 13. Machine Learning
* **Rekognition**: Image and video analysis.
* **Transcribe**: Speech to text.
* **Polly**: Text to speech.
* **Lex**: Conversational bots (Alexa technology).
* **SageMaker**: Build, train, deploy ML models.
* **Comprehend**: Natural Language Processing (NLP).

## 14. Account Management, Billing & Support
* **AWS Organizations**: Manage multiple accounts, consolidated billing, Service Control Policies (SCPs).
* **AWS Control Tower**: Automate multi-account setup with guardrails.
* **Cost Explorer**: Visualize, understand, and forecast costs.
* **Pricing Models**: Pay as you go, save when you reserve, pay less with volume.
* **Support Plans**: 
  * Basic (Free, Trusted Advisor core checks).
  * Developer (Business hours email).
  * Business (24x7 phone/email/chat, 1hr response for production down).
  * Enterprise (15 min response for mission critical, designated Technical Account Manager - TAM).

## 15. Migration & Other Services
* **Migration Strategies**: Rehost (Lift & shift), Replatform (Lift & reshape), Refactor (Re-architect), Repurchase (Drop & shop), Retire, Retain.
* **Workspace / AppStream**: Virtual desktop / Streaming desktop apps.
* **Cognito**: Authentication/DB for mobile & web apps.
* **Directory Service**: Managed Active Directory in AWS.
* **Elastic Disaster Recovery (DRS)**: Replicate/recover physical, virtual servers in AWS.

## 16. Well-Architected Framework (6 Pillars)
1. **Operational Excellence**: Operations as code, frequent small changes.
2. **Security**: Strong identity, traceability, protect data.
3. **Reliability**: Recover from failure, scale horizontally.
4. **Performance Efficiency**: Serverless, go global in minutes.
5. **Cost Optimization**: Pay only for what you use, right-sizing.
6. **Sustainability**: Reduce environmental impact.
