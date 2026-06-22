## 3 . What is cloud computing

- Cloud computing is on demand delivery of compute power, database application, other IT resources
- pay as you go pricing

	### Deployment model of Cloud
	- **Private Cloud** - used by single organization and not exposed publicly - complete control
	- **Public Cloud** - owned and operated by third party
	- **Hybrid Cloud** - keep some server on premises and some on cloud

  ### Characteristics of cloud computing:
	- on-demand self service
	- Broad network access
	- Multi-tenancy and resource pooling
	- Rapid elasticity and scalability
	- Measured service
	- Trade capital expenses for operational expense (OPEX)

	### Types of cloud computing:
	- **Infrastructure as a Service (IaaS)** - provide networking - computers - data storage space - EC2, Azure, Linode, GCP, Rackspace, Digital Ocean - User will maintain OS | runtime | application | 	security patches
	- **Platform as a Service (PaaS)** - Focus on the deployment - management of application - Elastic Beanstalk, Heroku, Google App Engine, Windows Azure - User will maintain application code | data
	- **Software as a Service (SaaS)** - complete product run and manage by service provider - Gmail, dropbox, Zoom, Rekognition for Machine Learning - User maintain nothing

- **Compliance** - with data governance and legal requirements - data never leave region without your explicit permission
- **Proximity** - reduce latency

## 4. IAM - Identity and Access Management

- Global service
- Root account created by default
- Users can be grouped
- Group can only contain users not another group - means groups inside group is not allowed

- Users or Groups can be assigned JSON document called policy
- AWS apply `least privilege principle - don't give more permission than a need`

	### MFA device option in AWS:
	- Virtual MFA device
	- Universal 2nd factor (U2F) security key

	### 3 ways to access AWS account 
	- **AWS management console** - protected password + MFA (Authenticator app)
	- **AWS command line interface (CLI)** - protected by access key
	- **AWS Software developer Kit (SDK)** - for code: protected by access key

## 5. EC2 - Elastic Compute Cloud

- `Infrastructure as a Service`

	### EC2 configuration options:
	- OS: Linux, windows, or Mac
	- Compute power or cores (CPU)
	- RAM
	- Storage Space
	- Network card - Public IP
	- Firewall rules - Security group

- EC2 user data script runs with root user only 

	### EC2 instance types:
	- **General purpose** - great for web servers and code repositories
	- **Compute optimized** - great for compute-intensive task - require high performance
	- **Memory optimized** - great for process large data-set in memory
	- **Storage optimized** - great for storage intensive task - high read and write on large data set in local

	### EC2 Pricing Models
	- **On-Demand Instance** - pay-as-you-go model - no long-term commitment
	- **Spot Instances** - Allow to give unused instance - `cheapest` - AWS can reclaim these instance with few minutes warning
	- **Reserved Instance** - you can `purchase instance` for `1 or 3 years` if you know the hardware you need
		- **Standard RIs** - you will be locked into specific family - if you need changes in existing you can sell them in AWS marketplace
		- **Convertible RIs** - allow you to change instance family 
	- **Savings Plan** - you commit specific `dollar spent per hour` for `1 or 3 year term`
		- **Compute Savings Plan** - most flexible option - applies to EC2, Fargate and AWS Lambda
		- **EC2 Instance Saving Plan** - restrict you to be specified with any specific instance family and region
	- **Dedicated Host** - with standard EC2 instance your virtual machine shares physical server with other AWS customer
 
	### Security Groups: 
	- network security of AWS 
	- control how traffic allowed into or out of EC2 instance
	- Only contain allow rules

	- **22** - SSH - Login into an instance 
	- **21** - FTP - File Transfer Protocol
	- **22** - SFTP - Secure File Transfer Protocol
	- **80** - HTTP - Access unsecured website
	- **443** - HTTPS - Access secured website
	- **3389** - RDP - Remote Desktop Protocol - log-in into windows instance 

## 6. EC2 instance storage

- ### Elastic Block Store (EBS) volume
	- It's a `network drive` that can attach to the instance
	- It allow to persist the data even after the termination
	- Can be mount at the one instance only at CCP (Certified Cloud Practitioner) level
	- Can be bound to specific availability zone
	- It's network drive - use network to communicate 
	- To move from one Availability Zone to another need to take a snapshot

	- Default root EBS volume is deleted
	- Attached EBS volume is not deleted	
		
	### EBS snapshot feature:
	- **EBS snapshot archive**
		- Move snapshot in archive that is 75% cheaper 
		- Take within 24hr to 72hr for restoring

	- **Recycle bin for EBS snapshot**
		- restore deleted snapshot
		- specify retention from 1day to 1year

	### AMI - Amazon Machine Image
	- It's customization of EC2 instance
	- AMI can be built for specific region and can be copy to another region as well

	### EC2 Image builder:
	- Automate creation of container Image in a scheduled crone
	- **Ex** - Let's assume we have a EC2 instance that have a some packages, and when scheduled crone will run it will check of existing OS and packages latest version, if have any; based on that updates it will create new image and test it well and for further new instance it will use that, and for old instance will roll out for new update so for this it will run new instance with new image and shout down old one.

	### EC2 - Instance Store
	- Better I/O performance
	- loss the store when stopped
	- good for buffer / cache / temporary content / scratch data

	### EFS - Elastic File system
	- Managed NFS (Network File System) - can be mounted with 100s of EC2
	- Works with Linux EC2 instance in multi availability zone

	### EFS Infrequent access (EFS-IA)
	- Storage class - cost optimized - for not accessed file every day
	- 92% lower cost compared to EFS standard 

	### Amazon FSx:
	- Launch 3rd party high performance file system

	### Amazon Fsx for windows File Server:
	- fully managed, highly reliable, scalable windows native shared file system
	- built on windows file server
	- support SMB protocol & windows NTFS

	### Amazon FSx for luster:
	- fully managed, high performance, scalable file storage for High Performance Computing
	- Name derived from Linux and Cluster
	- Machine Learning, Analytics, Video Processing

## 7. ELB (Elastic Load Balancing) & ASG (Auto Scaling Groups):

- ### 2 types of scalability:
	- Vertical scalability
	- Horizontal scalability - known as elasticity 

	### Vertical scalability:
	- increase size of instance
	- Hardware limit while scaling

	### Horizontal scalability:
	- increase number of instance

	### Elastic Load Balancer:
	- it's a server that forward internet traffic to multiple servers
	- Expose single point of access (DNS) 
	- Do regular health check of available instance

	### 4 types of Load Balancer:
	1. Application Load Balancer (ALB) - HTTP / HTTPS only - layer 7 - Static DNS
	2. Network Load Balancer - TCP / UDP - layer 4 - High performance - millions of request per second - Static Ip - Elastic Ip
	3. Gateway Load Balancer - for third party virtual appliances - layer 3 - GENEVE protocol - route traffic to firewall
	4. Classic Load Balancer - HTTP / HTTPS / TCP - layer 7 & layer 4 - (retired)

	### Auto Scaling Group (ASG):
	- Scale out (add EC2) to match increased load
	- Scale In (remove EC2) to match decreased load
	- Ensure have a minimum and maximum running instances

## 8. Amazon S3:

- infinite scaling storage

	### Used for:
	- Backup and Storage
	- Disaster Recovery
	- Archive
	- Hybrid Cloud Storage
	- Application hosting
	- Media hosting
	- Data lakes and big data analytics
	- Software delivery
	- Static Website

- Nasdaq store 7 years of data into S3 glacier
- Sysco runs analytics on it's data and gain business insights

- S3 allow store objects (files) in buckets (directories)
- Bucket name must be globally unique name
- Buckets are defined at the region level
- S3 looks global but buckets are created in region
- Max object size of 5TB - if more then 5GB must use "multi-part upload"

### Security:
- #### User based:
	- IAM policy - which API call should allow for specific IAM user

- #### Resource based:
	- Bucket policy - bucket wise rules
	- Object Access Control List - (OCL)
	- Bucket Access Control List - (BCL)

- #### S3-versioning:
	- enable at bucket level
	- same key overwrite will change the version
	- protect against unintended deletes - can be restored
	- Easy to roll-back to previous version
	- any file have not versioning have null version
	- suspending versioning will not delete previous versions

- #### S3-replication:
	- CRR - Cross Region Replication
	- SRR - Same Region Replication
	- Buckets can be in different AWS accounts
	- Coping is asynchronous
	- Must need proper IAM permission
		
	- **CRR**
		- compliance, lower latency, replication across accounts
	- **SRR**
		- log aggregation, live replication between prod and dev accounts

	- **S3-Storage Classes**
		- Can move between classes manually or using s3 lifecycle configuration

		- **Durability**
			- High durability 99.99% (11 9's) across multiple AZ - store of 10000000 object with S3 expect loss of single object once every 10000 years
			- Same for all storage classes
			
		- **Availability**
			- Measure how readily available service 
			- Is Depend on storage class
		
		- **S3 Standard - General Purpose**
			- 99.99% availability
			- Used for frequently accessed data
			- Low latency and high throughput
			- Sustain 2 concurrent facility failure - data in stored in 3 different place in same AZ so if 2 are offline the AWS will fetch data from the 3rd
			- Used for big data analysis, mobile and gaming application, content distribution

		- **S3 Standard - Infrequent Access (IA)**
			- Data less frequently accessed but require rapidly when access needed
			- Lower cost than S3 standard
			- 99.99% availability
			- Disaster recovery and backups

		- **S3 One Zone - Infrequent Access (S3 One Zone - IA)**
			- 99.99% durability in single AZ
			- 99.5% availability
			- Data lost of AZ destroy
			- Store secondary backup, copy of on premise data, data you can recreate

		- **S3 Glacier Instant Retrieval**
			- Millisecond retrieval, great for data access once a quarter
			- Minimum storage duration 90 days - AWS expect that you keep object for 90 days and you have to pay for 90 days - early delete object will lead bill of 90 days and also early deletion charges  

		- **S3 Glacier Flexible Retrieval**
			- Expedite (1 to 5 minutes)
			- Standard (3 to 5 hours)
			- Bulk (5 to 12 hours) - free
			- Minimum storage duration 90 days

		- **S3 Glacier Deep Archive - Long term data**
			- Standard (12 hours)
			- Bulk (24 hours)
			- Minimum storage duration 180 days

		- **S3 Intelligent-Tiering**
			- Small monthly monitoring and auto-tiering fee
			- Moves objects automatically between access tiers based on usage
			- No retrieval charges in S3 intelligent-tiering - If object in infrequent or in archive and suddenly start reading it frequently it will move it in a frequent access tier at no extra cost

		- **Frequent access tier (automatic) - default**
			- Infrequent access tier (automatic) - Object not accessed for 30 days
			- Archive Instant Access tier (automatic) - Object not accessed for 90 days
			- Archive access tier (optional) - Configurable from 90 days to 700+ days
			- Deep Archive Access tier (optional) - Configurable from 180 days to 700+ days 

		- **S3 - Encryption**
			- Server side encryption (default)
			- Client side encryption

		- **Shared Responsibility model for S3**
			- AWS: Infrastructure, global security, durability, availability, sustain concurrent loss of data, configuration and vulnerability analysis, compliance validation
			- Client: S3 versioning, S3 bucket policy, S3 replication, S3 storage class, data encryption   

		- **AWS Snowball**
			- Highly secure
			- portable device to collect and process data at the edge
			- Migrate data into and out of AWS
					
		- Edge storage optimize - 104vCPUs - Memory (416GB) - Storage (210TB) SSD
		- Edge compute optimize - 104vCPUs - Memory (416GB) - Storage (28TB)
		- Used for pre-process data, machine learning, transcoding media

		- **Pricing**
			- Pay for device use and data transfer out of AWS
			- Data transfer IN to S3 is free
			- **On demand**
				- 10 day for Snowball edge storage optimize 80TB
				- 15 day for Snowball edge storage optimize 210TB
				- Shipping days are not included
				- Pay per day for additional days
			- **Committed upfront**
				- Pay in advance for monthly, 1-year or 3-year
				- up to 60% discount

			- **AWS storage gateway**
				- Allow user to create a bridge between on premise device to AWS cloud device

## 9. Database and Analytics
- Store data in disk - EFS, EBS, EC2 instance store, S3
	
	### Relational Databases
	- Looks like Excel spreadsheet, with links between them
	- Can use SQL language
	
	### NoSQL database
	- Non relational databases
	- **Flexibility**: Easy to evolve data model 
	- **Scalability**: design to scale out by using distributed clusters
	- **High-performance**: optimized for specific data model
	- **Highly-functional**: type optimized for data model
	- **Ex**: key-value, document, graph, in memory

	### Amazon RDS
	- RDS - Relational Database Service
	- Use SQL as a query language
	- Allow to create a database in cloud managed by AWS
	- Postgres, MySQL, MariaDB, Oracle, Microsoft SQL Server, IBM DB2, Aurora (AWS Proprietary database)
		
	### Advantages
	- Automated provisioning, OS patching
	- Continuous backup and restore to specific timestamp
	- Monitoring dashboard
	- Read replica for improved read performance
	- Multi AZ setup for DR (Disaster Recovery)
	- Maintenance windows for upgrade
	- Scaling capabilities (Vertical, Horizontal)
	- Storage backed by EBS
	- Can't SSH into your instance

	### Amazon Aurora
	- Aurora is a proprietary technology from AWS (Not Open source)
	- It support PostgresSQL and MySQL
	- 5X performance over MySQL and 3X performance over PostgresSQL
	- Aurora storage automatically increase of 10Gb up to 128TB
	- Aurora cost more than RDS (20% more) - but more efficient

		### Serverless:
		- Automated database instantiation and auto scaling based on actual use
		- PostgresSQL and MySQL both are supported as Aurora serverless DB
		- No capacity planning needed
		- Least management
		- Pay per second

		### RDS Deployment: Read Replicas and Multi-AZ
		- ### Read Replica:
			- Scale the read workload of DB
			- Can create up to 15 read replica
			- Data is only written to the main DB
			
		- ### Multi AZ:
			- Failover in case of AZ (high availability)
			
		- ### Multi-Region:
			- Disaster recovery
			- Local performance for global reads

	###  Amazon Elastic Cache
	- Relational database same as RDS
	- Get managed Redis or Memcache
	- Cache are in-memory database with high performance and low latency
	- Reduce load of database for read intensive workload
	- AWS will take care of OS maintenance/patching, optimization, setup, configuration, monitoring, failure recovery and backup
		
	### DynamoDB
	- Fully managed and highly available with replication across 3 AZ
	- NoSQL database - Not a relational database
	- serverless database
	- Million of request per second, trillion of row, 100s of TB storage
	- Fast and consistence in performance
	- Single-digit millisecond latency - low latency retrieval
	- Integrated with IAM for security, authorization and administration
	- Low cost and auto scaling
	- Standard and Infrequent Access (IA) table class
	- key/value database

		### DynamoDB Accelerator - (DAX)
		- Fully managed in-memory cache for DynamoDB
		- 10X performance improvement
		- DAX is only used for and integrated with DynamoDB only while Elastic Cache can be used for other database as well
			
		### Global Tables:
		- Accessible low latency with multiple region
		- Active-Active replication (read/write to any AWS region)

	### Redshift
	- Based on the PostgreSQL, but not used for OLTP (Online Transaction Processing) - RDS good for this
	- It's OLAP (Online Analysis Processing) - Analytics and data warehousing
	- Load data once every hour, not every second
	- 10X better performance than other data warehouse, scale to PB (Petabyte) of data
	- Data stored in Columnar (Column) - instead of row base
	- Massively parallel execution (MPP), highly available
	- Pay as you go based on the instances
	- Has SQL interface for performing the queries
	- Support BI tools like AWS QuickSight or Tableau

		### Redshift serverless:
		- Provision and scale data warehouse underlying capacity
		- Run analytics workload without managing data warehouse infrastructure
		- Pay only for what you use
		- Reporting, dashboard application, real-time analysis	

	### Amazon EMR (Hadoop Cluster)
	- Elastic Map Reduce (EMR)
	- Help to create Hadoop clusters (Big data) to analyze and process vast amount of data
	- Cluster can be made of hundreds of EC2 instances
	- Takes care of all the provisioning and configuration of EC2
	- Auto scaling and integrated with spot instances
	- Used for data processing, machine learning, web indexing, big data

	### Amazon Athena - `Analyze data in S3 using serverless SQL`
	- Serverless query service to perform analytics against S3 objects
	- Use standard SQL language to query the files
	- Supports CSV, JSON, Avro and Parquet
	- Price are 5$ per TB data scan - Use compressed of columnar data for cost saving
	
	### Amazon QuickSight
	- Serverless machine learning powered intelligence service to create interactive dashboard
	- Fast, automatically scalable, embeddable, pre-session pricing
	- Integrated with RDS, Athena, Redshift, S3

	### Document DB - `if mongoDB in exam use Document DB`
	- Aurora is AWS-implementation of PostgreSQL / MySQL
	- DocumentDB is the same for MongoDB - NoSQL database
	- MongoDB is used to store, query and index JSON data
	- Similar deployment concept of Aurora
	- Fully managed and Highly available with replication of 3AZ
	- Document storage automatically grows in increment of 10GB
	- Automatically scale to workloads with million of request per second

	### Amazon Neptune - `Graph database in exam use Amazon Neptune`
	- Fully managed graph database
	- Popular graph dataset would be a social network
	- Highly available with 3AZ and with up to 15 read replica
	- Store up to billions of relation and query the graph with millisecond
	- Great for knowledge graph (Wikipedia)

	### Amazon Timestream - `Time series data in exam use Amazon Timestream`
	- Fully managed, scalable, serverless time series database
	- Automatically scale up/down to adjust capacity
	- Store and analyze trillions of events per day.
	- 1000 time faster and 1/10th cost of relational database

	### Amazon QLDB - `Financial Transaction / Ledger use Amazon QLDB`
	- Quantum Ledger Database
	- Recording financial transaction
	- Fully managed, serverless, High available, Replication across 3 AZ
	- Used to review history of the changes made to your application data
	- Immutable system: No entry can be removed or modify - cryptographically verify
	- 2-3X better performance than common ledger blockchain framework 
	- Central authority component and ledger

	### Amazon Blockchain - `Hyper ledger fabric | ethereum | blockchain`
	- Make possible to to build application - multiple parties can execute transaction without the need of trusted, central authority
	- Compatible with network like Hyper ledger fabric, ethereum  
	- Decentralize blockchain 

	### Amazon Glue
	- Managed extract, transform, and load service
	- Used to prepare and transform data for analytics
	- Fully serverless service
	- Pay per second for ETL (Extract, Transform, Load) job

		### Glue Data Catalog - Catalog of Dataset
		- Can be used by Athena, Redshift, EMR

	### DMS - Database Migration Service
	- Quickly and securely migrate database
	- The source database remains available during migration
		
		### Support
		- Homogeneous migration: Oracle to Oracle
		- Heterogeneous migration: Microsoft SQL Server to Aurora 

## 10. Other Compute Service ECS (Elastic Container Service | Private), Lambda, Batch, Lightsail

### Docker
- Software Development Platform to deploy apps
- Apps are packaged in container that can be run on any OS
- App run same regardless of where they are run

### ECS - Elastic Container Service
- Lunch docker container on AWS
- You have to provision and maintain the infrastructure to run (EC2 instances)
- AWS will take care of starting and stopping containers
- Has integration with application load balancer

	### Fargate
	- Lunch docker container on AWS
	- You do not provision any infrastructure
	- Serverless offering
	- AWS just run containers for you based on the CPU / RAM you need

	### ECR - Elastic Container Registry
	- Private Docker registry on AWS
	- Here we can store our Docker images so ECS or Fargate can run them

	### Amazon EKS
	- Elastic Kubernetes Service
	- Allow to lunch managed Kubernetes cluster on AWS

		### Serverless:
		- Developer don't have to managed servers anymore
		- Just deploy the code or functions
		- serverless == FaaS (Function as a service)
	
	### AWS Lambda
	- Virtual functions - no servers to manage
	- Limited by time - Sort Execution
	- Run on-demand
	- Scaling is automated
	- Pay per call and execution time
		
		### Benefits
		- Easy pricing
		- Pay per request and compute time
		- Free tier 1M request and 4,00,000 GBs of compute time
		- Integrated with all AWS suit of services
		- Event-driven: Function got invoked by AWS when needed
		- Integrated with many programming languages
		- Easy monitoring with Cloud Watch
		- Easy to get more resource per function (up to 10Gb RAM)
		- Increase RAM will also improve CPU and network

		### Lambda container image
		- The container image must implement the Lambda Runtime API
		- ECS / Fargate are preferred to run Docker images
	
	### Amazon API Gateway
	- Building serverless API
	- Fully managed service - easily create, publish, maintain, monitor, and secure API
	- Serverless and Scalable
	- Support REST API and Websocket API
	- Support for security, user authentication, API throttling, API keys, monitoring

	### AWS Batch
	- Fully managed batch processing at any scale
	- Efficiently run 100000s of computing batch jobs on AWS
	- It's a job with start and end
	- Batch can dynamically lunch EC2 instance or Spot Instance
	- Batch jobs are defined as Docker image and runs in ECS

	### Amazon Lightsail
	- Virtual servers, storage, databases, and networking at same place
	- Low and predictable pricing
	- Simple alternative of using EC2, RDS, ELB, ELS (Amazon Elasticsearch Service)
	- Great for people with little cloud experience
	- High availability but no auto scaling, limited AWS integration

## 11. Deployments & Managing Infrastructure at Scale

### CloudFormation
- It's a declaration way of outlining your AWS Infrastructure for any resource
- Ex. - want security group - want 2 EC2 instance using this security group - want S3 bucket - want load balancer in front of all above
- CloudFormation create those for you in the right order with the extra configuration that you specify

	### Benefits
	- ### Infrastructure as a code
		- No resource are manually created, excellent for control
		- Changes to the infrastructure are reviewed through code
		
	- ### Cost
		- Each resource in stack is tagged with identifier so we can see how much stack cost
		- Estimate your resource using CloudFormation template
		- **Save strategy**: In dev can delete all resource at 5PM and again can create same resource at 9PM
		
	- ### Productivity:
		- Ability to destroy and re-create an infrastructure on cloud easily
		- Automated generation of diagram for your template

### AWS Cloud Development Kit - (CDK)
- Define your cloud infrastructure using the familiar language
- Code will compile into CloudFormation template (JSON/YAML)
- You can deploy infrastructure and application runtime code together
- Great for Lambda function, Docker containers in ECS / EKS

### AWS Elastic Beanstalk
- Developer centric view of deploying an application on AWS
- It uses most of all AWS service
- Beanstalk = Platform as a Service (PaaS)
- Beanstalk is free but need to pay for underlying instances

	### Managed service by Beanstalk
	- Instance configuration / OS is handled by Beanstalk
	- Deployment strategy can be configurable but performed by Elastic Beanstalk
	- Capacity Provisioning
	- Load balancing and auto scaling
	- Application health monitoring 
	- Just application code is the responsibility of Developer

	### Three architecture models
	- **Single instance deployment** - Good for Dev environment
	- **LB + ASG** - Great for production or pre-production web application
	- **ASG only** - Great for non-web apps in production
	- Health agent push metrics to CloudWatch

	### AWS CodeDeploy
	- We want to deploy our application automatically
	- Works with EC2 instances
	- Works with on premises servers
	- Hybrid service
	- **Ex** - When `Code Build` complete process the `Code PipeLine` will store zip in S3 CodeDeploy will take it from there and deploy new build in production

	### AWS Code Commit
	- Before push code to server need to store somewhere
	- Developer store code in the repository, with git technology
	- Source control service that hosts Git based repo
	- Make easy to collaborate with others on code
	- The code changes are automatically versioned
	- Fully managed, scalable and highly available, private, secured, integrated with AWS

	### AWS Code Build
	- Code building service in cloud
	- Compile your source code, run tests, and product packages that are ready to deploy
	- Fully managed, continuously scalable and high available, Secure, pay-as-you-go price - only pay for build time
	- `Same as Github action` to make sure predefine task should be valid for the new code and then only it can be pass on production

	### AWS Code Pipeline
	- different steps to have the code automatically pushed to production

	### AWS Code Artifacts
	- Software packages are depends on each other for built and new once are created
	- Storing and retrieving those dependency is called artifact management
	- It's a middle man between your npm package and system which ask to install it
	- **Ex** - Your node.js server ask to install mongoose, in this case AWS Code Artifacts will install it first and then you can use that package to install on your project, so in case if npm down or package missing the same version you can use from your AWS Code Artifacts

	### AWS System Manager (SSM)
	- Help to manage EC2 and On-Premises system at scale
	- Another Hybrid service
	- Patching automation for enhanced compliance
	- Run command across an entire fleet of servers

	### SSM Session Manager:
	- allow to start a secure shell on EC2 and on premises server
	- No SSH access, bastion host, or SSH keys needed
	- No port 22 needed 
	- Send session log data to S3 or CloudWatch logs

## 12. Leveraging the AWS Global Infrastructure

### Why Global Application
- Global application is deployed in multiple geographies
- In AWS it could be regions / edge location
	
	### Decrease Latency
	- Latency is a time it takes for a network packet to reach a server
	- Deploy server closest to the user to decrease latency and better user experience

	### Disaster Recovery
	- If an AWS region goes down
	- You can fail-over to another region and have application still work
	- Important to increase availability of your application
	
	### Attack protection
	- Distributed global infrastructure is harder to attack
	
	### Global application in AWS
	- ### Global DNS - Route 53
		- Great to route users to nearest deployment with least latency
		- Great for disaster recovery
		
	- ### Global content delivery network (CDN) - Cloudfront
		- Replicate part of application to AWS edge location - decrease latency
		- Cache common request - improve user experience and decrease latency 
		
		- ### S3 Transfer Acceleration:
			- Accelerate global upload and download into S3

		- ### AWS Global Accelerator:
			- Improve global application availability and performance using the global network

### Amazon Route 53
- Route 53 is managed DNS (Domain Name System)
- DNS is a collection of rules and records to help the user to reach server URL
	
	### Routing Policy
	- **Simple Routing Policy** - No Health Check
	- **Weighted Routing Policy** 
	- **Latency Routing Policy**
	- **Failover Routing Policy** - Disaster Recovery

### AWS CloudFront
- CDN - Content Delivery Network
- Improve read performance, content is cached at the edge 
- 216 point of presence globally
- DDoS protection, Integration with shield, AWS wen application Firewall
		
	### S3
	- For distributing files and caching them at the edge
	- Security with Cloudfront Origin Access Control (OAC)

	### S3 Transfer Acceleration
	- Increase transfer speed by transforming file to AWS edge location which will forward data to S3 bucket in target region

	### AWS global accelerator
	- Improve global application availability and performance
		
### AWS Outposts
- Hybrid Cloud
- AWS Outposts are server racks that offer the same infrastructure
- AWS will setup and manage Output Racks within the premise

	### Benefits:
	- Low latency access on-premise system
	- Local data processing
	- Data residency
	- Easier migration from on-premise to cloud
	- Fully Managed
	
### AWS Wavelength - `5G in exam`
- Infrastructure deployment embedded with telecommunication
- Ultra low latency application through 5G network

### AWS Local zone:
- place AWS service closed to the end user to run low latency-sensitive application 

## 13. Cloud Integration

### Deployed application need to communicate with each other
- Synchronous communication - application to application
- Asynchronous / event based - application to queue to application

### Amazon SQS - Simple Queue Service - `decouple application exam`
- Messaged will be deleted after they're read by consumer
- Message delivered in same order but not sure
- message will be delivered once - duplication may occur
- Automatic scale to handle requests

	### FIFO - First In First Out
	- Message delivered in same order for sure
	- Message will be delivered once - no duplication
	- 300 API call/sec allow

### Amazon Kinesis Data streams
- Real-time big data streaming
- Managed service to collect, process, and real-time streaming data at any scale

### Amazon SNS - Simple Notification Service
- If you want to sent one message to many receiver
- Event publisher only send message to one SNS topic
- As many as event subscriber can listen SNS notification

### Amazon MQ
- Managed message broker service for - RabbitMQ, ActiveMQ
- Used only when application used old protocol - MQTT, AMQP, STOMP, Openwire and migrate to the cloud
- Managed message broker for RabbitMQ, ActiveMQ in the cloud

## 14. Cloud Monitoring

- Metric is variable to monitor
- Metrics have timestamps
- Can create cloud watch dashboard

	### Important Metrics
	- **EC2 instance** CPU utilization, status check, Network (Not RAM) - Default 5 min - Can change to 1 min but it's costly
	- **EBS volume** Disk read / write
	- **S3 Bucket** BucketSizeBytes, NumberOfObjects, AllRequests
	- **Billing** Total estimated charge - (Available in us-east-1)
	- **Service Limits** How much you have using a service API
	- **Custom Metrics** Push your own metrics

	### Amazon CloudWatch Logs
	- AWS’s centralized log storage and monitoring system
	- You can see all logs at single place with all available service in your AWS account
	- Monitor servers, applications, CUP, memory, logs, errors, performance, metrics
	- Cloudwatch is used for is app slow?, did lambda fail?

	- ### Can collect logs from
		- **Elastic Beanstalk** Collection of logs from application
		- **ECS** Collection from containers
		- **AWS Lambda** Collection from function logs
		- CloudTrail based on filter
		- **CloudWatch Log Agents** on EC2 machines or on-premise servers
		- **Route53** Log DNS queries
		- Enable real-time monitoring of logs
		- can be setup on on-premise server as well

	### Amazon EventBridge - CloudWatch Events old name
	- It lets AWS services talk to each other automatically when something happens.
	- It listen for events and then trigger action automatically

	### AWS EventBus
	- A central traffic controller for events

	### AWS CloudTrail
	- Watches user/API activity
	- provide governance, compliance, and audit for AWS account
	- enabled by default
	- get history of event / API call made within AWS account
	- A trail can be applied to all regions (default) or a single region
	- It records account activity
	- It logs; who created/delete resource, login activity
	- And it answer: who delete S3 bucket?, Which IAM user created EC2?

	### AWS X-Ray
	- Visual analysis of application
	- Tracing a single request across multiple services
	- **Advantages**
		- Troubleshooting performance
		- Understand dependency in micro-service
		- pinpoint service issue
		- Review request behavior
		- Find error and exception

	### Amazon CodeGuru
	- **ML powered service** - automated code review - application performance recommendations
	- **CodeGuru Reviewer** - automated code reviews for static code analysis
	- **CodeGuru Profiler** - visibility / recommendation about application performance during runtime

	### AWS Health Dashboard
	- Provide alerts and remediation guidance when AWS experience events that may impact you
	- personalized view into the performance and availability of the AWS service underlying your AWS resources

## 15. VPC and NetworkIn

- VPC (Virtual Private Cloud), Subnet, Internet Gateways & NAT Gateways
- Security Groups, Network ACL (NACL), VPC Flow Logs
- VPC, peering, VPC Endpoint
- Site to Site VPN & Direct Connect
- Transit Gateway 

	### IP Address in AWS
	- ### IPV4 - Internet Protocol Version 4 (4.3 Billion Address)
		- Can we used on the Internet
		- Private IPV4 - Can be used on the private Network - Internal AWS network

	- ### Elastic IP
		- Allow to attach a fix public IPV4 address to EC2 instance

	- **IPV6** Internet Protocol Version 6 (3.4 X 10<sup>38</sup>) address

	### VPC & Subnet Primer
	- ### VPC
		- Private network to deploy your resources (regional resource)
	
	- ### Subnets
		- Allow to partition your network inside your VPC (Availability Zone Resource)
		- **Public Subnet** - subnet that is accessible from internet
		- **Private Subnet** subnet that is not accessible from internet
		- To define the access on the internet and between subnet - use Route Tables
	
	- ### Internet Gateway
		- Help VPC instance connect with the internet
		- Public subnet have a route to the internet gateway
	
	- ### NAT Gateways (AWS Managed) & NAT (Network Address Translation) Instances (Self Managed)
		- Allow your instance in your Private Subnet to access the internet while remaining private
		- It define how can private server access internet without being exposed publicly
		- NAT acts as a internet proxy for private servers

	### Network ACL & Security Groups:
	* **NACL**
		- Firewall which control traffic from and to subnet
		- Have allow and deny rules
		- Attached at the subnet level
		- Rules only include IP address

	* **Security Group**
		- firewall that controls traffic to and from EC2 instance
		- Can have only allow rules
		- Rules include IP addresses and other security groups

	### VPC flow logs
	- ### Keep information about IP traffic going into your interface
		- VPC flow logs
		- Subnet flow logs
		- Elastic Network Interface flow Logs
	- ### Help to monitor & troubleshoot connectivity issue
		- Subnets to internet
		- Subnets to subnets
		- Internet to subnets

	### VPC Peering
	- Connect 2 VPC privately using AWS network
	- VPC peering connection is not transitive

	### VPC Endpoint
	- Allow to connect AWS service using a private network instead public network
	- Better security

	### AWS Private Link
	- Most secure & scalable way to expose a service to 1000s of VPC

	### Site to Site VPN & Direct Connect:
	- ### Site to Site Connect
		- Connect on premises VPN to AWS
		- Connectio is encrypted
		- Used public internet
		- On premise: must use customer gateway
		- AWS: must use Virtual Private Gateway
	
	- ### Direct Connect
		- Physical connection between on premises and AWS
		- Connection is private, secure and fast
		- Use private network
		- Tale at least a month to connect 

	### AWS Client VPN
	- Connect from computer using Open VPN to your private network in AWS and on-premises
	- Allow to connect EC2 over a private IP 
	- Use public network

	### Transit Gateway - (Exam - way to connect 100 vpc connect with on premise as well)
	- Transitive peering between thousand of VPC and on premise, hub-and-spoke (star) connection

## 16. Security & Compliance

### AWS Shared Responsibility Model
- **AWS responsibility** - security of cloud - protecting infrastructure
- **Customer responsibility** - Security in cloud

### DDOS protection on AWS
- **AWS Shield Standard** - protect website and application for all customer at no addition cost - free for everyone
- **AWS Shield Advance** - 24/7 premium DDOS protection - response team from AWS
- **AWS WAF (Web Application Firewall)** - Filter specific request based on rules - Layer 7 is HTTP and Layer 4 TCP - SQL Injection - XSS (Cross Site Scripting)
- Cloudfront and Route53

### AWS Network Firewall
- Protect entire Amazon VPC
- From layer 3 to layer 7

### AWS Firewall Manager (VPC security - manage across multiple accounts)
- Manage security rules in all account of an AWS organization 
- Rules are applied to new resources as they are created across all and future accounts in your organization

### Penetration Testing
- Test AWS security without prior approval for 8 services

### Data at rest VS Data in transit
- At rest - data stored or archived on device
- In transit - data is moving from one location to another - data transfer in network
- encryption are used
- encryption for AWS service it's KMS
- `KMS - AWS manages the software for encryption - Key also managed by AWS`
- `CloudHSM - AWS provision encryption hardware - HSM (Hardware Security Module)`
	
	### Type of KMS keys
	- ### Customer managed keys
		- Create, managed and used by customer
		- Can enable and disable
		- Can rotate the keys and also use own key
		
	- ### AWS Managed Keys
		- Create, managed and used by AWS behalf of customer

	- ### AWS Own Keys
		- Collection of CMK that an AWS service own and managed in multiple account
		- AWS can use those key to protect account - we can't see those keys

	- ### CloudHSM key
		- key generated from your own HSM hardware
		- Cryptography operation are performed within HSM cluster

### AWS Certificate Manager - (ACM)
- Easily provision, manage and deploy SSL/TLS certificate
- Use to provide HTTPS endpoint
- Support both public and private TLS certificate
- Free for public TLS
- Automated TLS certificate renewal

### AWS Secret Manager `Secrets to be managing in RDS and to be rotated`
- Service to store secret
- Force to rotate secrets every X days
- Automate generation of secrets on rotation
- Integration with Amazon RDS - Mostly meant for RDS

### AWS Artifacts
- Portal to provide customer with on demand access of AWS compliance documentation and AWS agreements
- Support internal audit or compliance

### Amazon GuardDuty
- Used for threat protection for AWS account
- Can protect against CryptoCurrency attack

### Amazon Inspector
- Automated Security Assessment

### AWS Config
- Auditing and recording compliance of your AWS resource
- Record configuration and changes over time

### Amazon Macie
- Machine learning and pattern matching to discover and protect your sensitive data in AWS

### AWS security Hub
- Central Security Tool to check AWS security across several AWS accounts and automate security checks

### Amazon Detective
- Analyze, investigate and quickly identify the root cause of security issue or suspicious activity
- Automatically collect and process events

### AWS Abuse
- Report suspected AWS resource used for abusive or illegal purpose

### Root User Privileges
- Local away your AWS account root use can access key
	- ### Action can be performed
		- Change account setting
		- Close your AWS account
		- Change or cancel AWS support plan
		- Register as a seller in the reserved instance marketplace

## 17. Machine Learning

### Amazon Rekognition
- Find object, text, people, scenes in image and video using ML
- Facial analysis and facial search

### Amazon Transcribe
- Covert speech to text
- Use deep learning process called automatic speech recognition
- Automatically remove personally identifiable information using redaction
- Supports automatic language identification for multi-language audio

### Amazon Polly
- Turn text into speech

### Amazon Translate
- Language translation
- Translate localize content for international users

### Amazon Lex & Connect
- ### Amazon Lex - (ASR) - Automatic speech recognize
	- Same technology that powers Alexa
	- Automatic speech recognize to convert speech text
	- Natural language understanding to recognize intent of text
	- Help to build chat-bots and call center bots

- ### Amazon Connect - contact center
	- Cloud based virtual contact center

### Amazon Comprehend
- For NLP - Natural Language Processing

### Amazon SageMaker
- Service for developer / data scientist to build ML models

### Amazon Kendra - document search service
- Document search service
- Natural Language Search capability
- Incremental learning

### Amazon Personalize
- Realtime personalize recommendation

### Amazon Textract
- Extract data from documents or image

## 18. Account Management, Billing & Support

### AWS Organization
- Manage multiple AWS accounts
- Main account is master account
- Rest are the child account
- Consolidated billing - across all account - singe payment
- Aggregate use - volume discount for EC2, S3
- Pooling of reserved EC2
- API to automate AWS account creation
- Restrict account privileges using Service Control Polices (SCP)

	### Multi Account Strategies
	- Account per department
	- Cost center per dev / test / prod
	- Regulatory restriction (SCP) for better resource isolation
	- Separate per-account service limit
	
	### Service Control Policies
	* Whitelist or blacklist IAM actions
	* Applied at OU or Account level
	* Does not apply at master account
	* SCP applied all User and Account including root

---

### Consolidated Billing

- ### Combine Usage
	- Share volume pricing
	- Reserved instance
	- Saving plan discount
- One bill - get one bill for all AWS accounts available in organization

---

### AWS Control Tower
- Easy to setup and govern a secure and compliant `multi-account AWS environment`

	### Benefits
	- Automate set up of environment in few click
	- Automate ongoing policy management using guardrails
	- Detect policy violation and remediate them
	- Monitor compliance through an interactive dashboard

- AWS control tower run on top of the AWS Organization
	- Automatically set up AWS Organization to organize accounts and implement SCP (Service Control Policy)

---

### AWS Resource Access Manager (AWS RAM)
- Share AWS resources that you own within other AWS accounts
- Share with any account or within your Organization
- Avoid resource duplication

---

### AWS Service Catalog
- User want a quick `self-service portal` to lunch a set of `authorized products` pre-defined by `admins`

---

### Pricing Models in AWS

- Pay as you go - pay for what you use
- Save when you reserve - comply with long-terms requirement
- Pay less by using more - volume-based discount
- Pay less as AWS grow

	### Saving plan
	- Commit certain $ amount per hour for 1 or 3 year
	- EC2 saving plan
		- 72% discount
		- commit to usage of individual instance families in a region
	- Compute saving plan
		- 66% discount compared On-Demand
		- family, region, compute options
	- Machine Learning Saving Plan
		- Sage Maker

	###  AWS Compute Optimizer
	- Reduce cost and improve performance by recommending optimal AWS resources
	- Use machine learning to analyze resources configuration and their utilization CloudWatch metrics
	- Recommendation exported to S3

### Billing and Costing Tools
- Estimating costs in cloud
	- Pricing Calculator
- Tracking Cost in Cloud
	- Billing Dashboard
	- Cost allocation tags
	- Costs and Usage Report
	- Cost Explorer
- Monitoring against coast plan
	- Billing Alarm
	- Budget

### AWS Billing Dashboard
- Cost Allocation Tags
	- Track AWS costs on a detailed level
	- Aws generated tags - prefix AWS
	- User generated tags - prefix user
- Tagging and Resource Groups
	- Tags are used for organizing resources
	- Tags can be used to create Resources Groups
- Cost and Usage Report
	- most comprehensive set of AWS cost and usage data available
- Cost Explorer
	- Forecast usage up to 12 months based on previous usage

### Billing Alarm in CloudWatch
- Billing data metrics is stored in CloudWatch us-east-1
- for overall worldwide AWS coast

	### AWS Budget
	- Send an alarm when cost exceeds budget

	### AWS Cost Anomaly Detection
	- Continuously monitor yor cost and usage using ML to detect unusual spends

### AWS Support Plan Pricing
- Basic Support - Free
- Developer
- Business
- Enterprise On-Ramp
- Enterprise

	### AWS Basic Support - Free
	- Customer Service and Community
	- AWS Trusted Advisor
	- AWS Personal Health Dashboard

	### AWS Developer Support Plan
	- All Basic support plan
	- Business hours email access - cloud support Associate
	- Unlimited cases / Unlimited contacts
	- Case Severity / Response Time
		- General Guidance - < 24 business hours
		- System impaired - < 12 business hours
	
	### AWS Business Support Plan
	- production workload
	- Trusted Adviser - Full set of checks + API access
	- 24X7 phone, email, and chat access to cloud support engineer
	- Unlimited cases / Unlimited contacts
	- Access to Infrastructure Event Management for additional fee
	- Case Severity / Response Time
		- General Guidance - < 24 business hours
		- System impaired - < 12 business hours
		- Production System impaired - < 4 hours
		- Production System down - < 1 hours

	### AWS Enterprise On-Ramp Support Plan (24/7)
	- production or business critical workloads
	- Access to pool of Technical Account Manager (TAM)
	- Concierge Support Team - for billing and account best practice
	- Infrastructure Event Management, Well-Architected & Operation Reviews
	- Case Severity / Response Time
		- General Guidance - < 24 business hours 
		- System impaired - < 12 business hours
		- Production System impaired - < 4 hours
		- Production System down - < 1 hours
		- Business critical system down - < 30 minutes 
	
	### AWS Enterprise Support Plan (24/7) 
	- mission critical workloads
	- Access to `Designated` Technical Account Manager (TAM)
	- Concierge Support Team - for billing and account best practice
	- Infrastructure Event Management, Well-Architected & Operation Reviews
	- Access to `AWS Accident Detection and Response` - for an additional fee
	- Case Severity / Response Time
		- General Guidance - < 24 business hours 
		- System impaired - < 12 business hours
		- Production System impaired - < 4 hours
		- Production System down - < 1 hours
		- Business critical system down - < 15 minutes 
		
### Advance Identity

- #### AWS STS (Security Token Service)
	- Enable you to create temporary, limited-privileges credentials
	- `Temporary limited privileges credentials`

- ### AWS Cognito
	- create a database for your mobile and web application

- ### Microsoft Active Directory (AD)
	- Database of objects
	### AWS Directory Service
	- **AWS Managed Microsoft AD** - create yor AD in AWS - manages users locally - support MFA - establish trust connection with on-premise AD
	- **AD Connector** - Directory Gateway (proxy) - support MFA - User are managed on the on-premise AD
	- **Simple AD** - AD-compatible managed directory on AWS - Can't joined with on-premise AD

- ### AWS IAM Identity Center
	- one login for all AWS accounts in AWS organization
	- `One access to multiple AWS accounts`

## Other Services - Sometimes, rarely appear in exam

- ### Amazon Workspace 
	- Managed desktop as a service (Daas) solution to easily provision windows or Linux desktop 
	- Great to eliminate management of on-premise VDI (Virtual Desktop Infrastructure)
	- `Virtual Desktop | managed desktop as a service`

- ### Amazon AppStream 2.0
	- application is delivered from within a web browser
	- stream desktop application to web browser - no need to connect VDI
	- works with any device

- ### AWS IoT core
	- IoT - Internet of things
	- easily connect IoT devices to AWS cloud
	- serverless, secure & scalable

- ### Amazon Elastic Transcoder
	- convert media files stored in S3 into media files in the format required by consumer playback devices

- ### AWS AppSync
	- store and sync data across mobile and web apps in real-time
	- Make use of `GraphQL`

- ### AWS Amplify
	- Set of tools and services that help to develop and deploy scalable full stack web and mobile applications

- ### AWS Infrastructure Composer
	- visually design and build serverless application quickly on AWS
	- Generate infrastructure as Code (IaC) using cloud formation

- ### AWS Device Farm
	- Fully managed service that `test your web and mobile apps` against desktop browser, real mobile devices and tablets

- ### AWS Backup
	- Fully managed service to `centrally managed and automate backup` across AWS services
	- Support PITR (Point-in-time Recovery)

- ### Disaster Recovery Strategies
	- cheapest - `Backup and Restore`
	- Pilot Light - medium 
	- Warm Standby - costly
	- Multi-site / Hot-site - more costly

- ### AWS Elastic Disaster Recovery (DRS)
	- used to be named `CloudEndure Disaster Recovery`
	- Quickly and easily recover your physical, virtual and cloud-based servers in AWS

- ### AWS DataSync
	- Move large amount of data from on premised to AWS
	- The replication task are `incremental` after first full load

- ### Cloud Migration Strategies
	- **Retire** - Turn of things you don't need
	- **Retain** - Do nothing for now
	- **Relocate** - Move apps from on premise to it's cloud version
	- **Rehost** - `lift and shift` - Simple migration by re-hosting on AWS
	- **Replatfrom** - `lift and reshape` - migrate database to RDS
	- **Repurchase** - `drop and shop` - Moving to different product while moving to cloud
	- **Refactor / Re-architect** - Reimagine how the application is architected using Cloud Native features

- ### AWS Application Discovery Service
	- Plan migrate project by gathering information about on-premise data centers
	- **Agentless Discovery** - AWS Agentless Discovery Connector 
	- **Agent-based Discovery** - AWS Application Discovery Agent
	
	- ### AWS Application Migration Service (MGN)
		- Lift and Shift (rehost) solution which simplify migrating application to AWS

- ### AWS Migration Evaluator
	- built data driven business case for migration to AWS

- ### AWS Migration Hub
	- `central location to discover, access plan and track your migration and modernization`
	- AWS Migration Hub Orchestrator - provide pre-built template to save time and effort to migrate app

- ### AWS Fault Injection Simulator (FIS)
	- service for running fault injection experiment on AWS workloads
	- **Chaos Engineering** - stressing application with disruptive events, observing how the system respond and implementing improvements 
	- Help to find hidden bugs and performance bottleneck

- ### AWS Step Functions
	- serverless visual workflow to orchestrate your lambda function
	- implementing human approval feature

- ### AWS Ground Station
	- allow to control satellite communication, process data, and scale your satellite operation

- ### AWS Pinpoint
	- Scalable 2 way (out-bounding/in-bounding) marketing communication service

---

### AWS Architecting & Ecosystem

- ### General Guiding Principle
	- Stop guessing your capacity
	- Test system at production scale
	- Automate to make architectural experiment easier
	- Design based on changing requirement
	- Drive architecture using data
	- Improve through game days

	### AWS Cloud Best Practice - Design Principles
	- **Scalability** - Vertical and Horizontal
	- **Disposable Resources** - Servers should be Disposable and easily configured
	- **Automation** - Serverless, Infrastructure as a Service, Autoscaling
	- **Loose Coupling** - Monolith application need to do more over time - Breakdown in smaller component - Failure in one component can't affect other component
	- **Services, not servers** - don't use just EC2 - use managed service

### Well Architecture Framework 6 Pillars
1. Operational Excellence
2. Security
3. Reliability
4. Performance Efficiency
5. Cost Optimization
6. Sustainability

	### 1. Operational Excellence
	- Ability to run and monitor systems to deliver business value and continually improve supporting processes and procedures

		#### Design Principles
		1. Perform operation as code
		2. Make frequent, small, reversible changes
		3. Refine operation procedures frequently
		4. Anticipate failure
		5. Learn from all operational failure
		6. Use managed services
		7. Implement observability for actionable insights

	### 2. Security
	- Ability to protect information, system and asset while delivering business values through rick assessment and strategies

		### Design Principle
		1. Implement strong identity and foundation
		2. Enable traceability
		3. Apply security at all levels
		4. Automate security best practice
		5. Protect data in transit and at rest
		6. Keep people away from data
		7. Prepare for security events

	### 3. Reliability
	- Ability of system to recover from infrastructure or service disruption

		### Design Principle
		1. Test Recovery procedures
		2. Automatically recover from failure
		3. Scale horizontal to increase aggregate system availability
		4. Stop guessing capacity
		5. Manage change in automation 
		
	### 4. Performance Efficiency
	- Ability to use computing resources efficiently to meet system requirements, and to maintain that efficiency
	 
		### Design Principle
		1. Democratize advanced technologies
		2. Go global in minutes
		3. Use serverless architecture
		4. Experiment more often
		5. Mechanical Sympathy

	### 5. Cost Optimization
	- Ability ti run system to deliver business value at lowest price

		### Design Principle
		1. Adopt a consumption mode
		2. Measure overall efficiency
		3. Stop spending money on data center operation
		4. Analyze and attribute expenditure
		5. Use managed and application level services to reduce cost of ownership

	### 6. Sustainability
	-	Focus on minimizing the environmental impacts of running cloud workloads

		### Design Principles
		1. Understand your impact
		2. Establish sustainability goals
		3. Maximize Utilization
		4. Anticipate and adopt new, more efficient hardware and software offering
		5. Use managed service
		6. Reduce the downstream impact of your cloud workloads

### AWS Well-Architected Tool
- review your architecture and adopt architectural best practices

### AWS Customer Carbon Footprint Tool
- Track, measure, review and forecast the carbon emission generated from AWS usage

### AWS Cloud Adoption Framework (CAF)
- AWS CAF group its capability in six perspective
	1. Business
	2. People
	3. Governance
	4. Platform
	5. Security
	6. Operation

### Business Capabilities
- **Business perspective** - ensure that your cloud investment accelerate your digital transformation
- **People perspective** - serves `as a bridge between technology and business`
- **Governance perspective** - orchestrate your cloud initiative while maximizing organizational benefits and minimizing transformation related risk

### Technical Capabilities
- **Platform Perspective** - built an enterprise-grade, scalable, hybrid cloud platform
- **Security Perspective** - achieve the confidentiality, integrity, and availability of your data and cloud workloads.
- **Operation Perspective** - ensure that your cloud services are delivered at a level that meets the need of your business

### Transformation Domains
- **Technology** - cloud to migrate and modernize legacy infrastructure, application, data and analysis platform
- **Process** - digitizing, automating and optimizing your business operations
- **Organization** - Re imagining your operating model
- **Products** - reimagining your business model by creating new value propositions and revenue models

### Transformation Phases
- **Envision** - demonstrate how the cloud will accelerate your business
- **Align** - identify capability gaps across the 6 AWS CAF perspective which result in action plan
- **Launch** - build and deliver pilot initiative in production and demonstrate incremental business value
- **Scale** - expand pilot initiative to the desired scale while realizing the desired business benefits

### AWS Right Sizing
- EC has many instance type - but choosing most powerful instance type isn't best choice, the cloud is `elastic`
- Right size is the process of matching instance type and size to your workload `at the lowest possible cost`
- `Scaling up is easy so always start with small`
- It's important to Right Size
	- before cloud migration
	- continuously after the cloud onboarding processes (requirement change over time)

### AWS Managed Service (AMS)
- `AMS offer a team of AWS expert` who manage and operate your infrastructure for security, reliability and availability

### AWS IQ
- Quickly find professional help for your AWS projects
- **AWS re:Post** - `not intended to be used for questions that are time-sensitive or involve any proprietary information`

### AWS Knowledge Center
-  `place to find very common question, frequently asked question and best practice on AWS`