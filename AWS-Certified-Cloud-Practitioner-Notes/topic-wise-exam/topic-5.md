# Topic 5: Amazon S3

1. The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?
    - A. S3 Intelligent-Tiering.
    - B. AWS Marketplace.
    - C. Amazon S3 Glacier Deep Archive.
    - D. Amazon EBS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

2. Which of the following is not a benefit of Amazon S3? (Choose TWO)
    - A. Amazon S3 provides unlimited storage for any type of data.
    - B. Amazon S3 can run any type of application or backend system.
    - C. Amazon S3 stores any number of objects, but with object size limits.
    - D. Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere.
    - E. Amazon S3 provides 99.999999999% (11 9’s) of data durability.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>

3. Which S3 storage class is best for data with unpredictable access patterns?
    - A. Amazon S3 Intelligent-Tiering.
    - B. Amazon S3 Glacier Flexible Retrieval.
    - C. Amazon S3 Standard.
    - D. Amazon S3 Standard-Infrequent Access.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

4. Which of the following procedures will help reduce your Amazon S3 costs?
    - A. Use the Import/Export feature to move old files automatically to Amazon Glacier.
    - B. Use the right combination of storage classes based on different use cases.
    - C. Pick the right Availability Zone for your S3 bucket.
    - D. Move all the data stored in S3 standard to EBS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

5. What is the AWS service/feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?
    - A. S3 Transfer Acceleration.
    - B. AWS WAF.
    - C. AWS Snowmobile.
    - D. AWS Snowball.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

6. Which AWS service can be used to store and reliably deliver messages across distributed systems?
    - A. Amazon Simple Queue Service.
    - B. AWS Storage Gateway.
    - C. Amazon Simple Email Service.
    - D. Amazon Simple Storage Service.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

7. Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)
    - A. Amazon Redshift.
    - B. AWS Snowball.
    - C. Amazon Simple Storage Service.
    - D. Amazon EBS.
    - E. Amazon DynamoDB.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, E
    </details>

8. Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)
    - A. Active archives.
    - B. Dynamic websites’ assets.
    - C. Long-term analytic data.
    - D. Active databases.
    - E. Cached data.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>

9. How do ELBs improve the reliability of your application?
    - A. By distributing traffic across multiple S3 buckets.
    - B. By replicating data to multiple availability zones.
    - C. By creating database Read Replicas.
    - D. By ensuring that only healthy targets receive traffic.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

10. A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?
    - A. Snowball.
    - B. S3 Transfer Acceleration.
    - C. Snowmobile.
    - D. Amazon VPC.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

11. A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?
    - A. Amazon S3 Glacier.
    - B. Amazon EFS.
    - C. Amazon S3 Standard.
    - D. Amazon EBS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

12. Which of the following are use cases for Amazon S3? (Choose TWO)
    - A. Hosting static websites.
    - B. Hosting websites that require sustained high CPU utilization.
    - C. Cost-effective database and log storage.
    - D. A media store for the CloudFront service.
    - E. Processing data streams at any scale.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, D
    </details>

13. A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?
    - A. AWS Storage Gateway.
    - B. Amazon S3.
    - C. Amazon EBS.
    - D. Amazon Glacier.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

14. Which of the following AWS Services helps with planning application migration to the AWS Cloud?
    - A. AWS Snowball Migration Service.
    - B. AWS Application Discovery Service.
    - C. AWS DMS.
    - D. AWS Migration Hub.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

15. Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)
    - A. Versioning.
    - B. Deduplication.
    - C. Permissions.
    - D. Decryption.
    - E. Conversion.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>

16. Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?
    - A. Amazon Simple Email Service (Amazon SES).
    - B. Amazon Simple Storage Service (Amazon S3).
    - C. Amazon Simple Notification Service (Amazon SNS).
    - D. Amazon Simple Queue Service (Amazon SQS).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

17. Which AWS Service offers volume discounts based on usage?
    - A. Amazon VPC.
    - B. Amazon S3.
    - C. Amazon Lightsail.
    - D. AWS Cost Explorer.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

18. A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?
    - A. Amazon Simple Storage Service.
    - B. Amazon Elastic Block Store.
    - C. Amazon Elastic Container Service.
    - D. AWS Storage Gateway.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

19. You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?
    - A. EBS and S3 are accessible only to the root account owner.
    - B. The systems administrator must contact AWS Support first to activate his new IAM account.
    - C. There is not enough space in S3 to store the snapshots.
    - D. There is a non-explicit deny to all new users.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

20. Which of the following S3 storage classes is most appropriate to host static assets for a popular e-commerce website with stable access patterns?
    - A. S3 Standard-IA.
    - B. S3 Intelligent-Tiering.
    - C. S3 Glacier Deep Archive.
    - D. S3 Standard.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

21. To protect against data loss, you need to backup your database regularly. What is the most cost-effective storage option that provides immediate retrieval of your backups?
    - A. Amazon S3 Glacier Deep Archive.
    - B. Amazon S3 Standard-Infrequent Access.
    - C. Amazon S3 Glacier.
    - D. Instance Store.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

22. You want to transfer 200 Terabytes of data from on-premises locations to the AWS Cloud, which of the following can do the job in a cost-effective way?
    - A. AWS Snowmobile.
    - B. AWS Import/Export.
    - C. AWS DMS.
    - D. AWS Snowball.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

23. Which of the following can help secure your sensitive data in Amazon S3? (Choose TWO)
    - A. Delete the encryption keys once your data is encrypted.
    - B. With AWS you do not need to worry about encryption.
    - C. Enable S3 Encryption.
    - D. Encrypt the data prior to uploading it.
    - E. Delete all IAM users that have access to S3.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, D
    </details>

24. Which of the following will affect how much you are charged for storing objects in S3? (Choose TWO)
    - A. Using default encryption for any number of S3 buckets.
    - B. The number of EBS volumes attached to your instances.
    - C. The storage class used for the objects stored.
    - D. Creating and deleting S3 buckets.
    - E. The total size in gigabytes of all objects stored.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, E
    </details>

25. Which of the following AWS services would help you migrate on-premise databases to AWS?
    - A. AWS DMS.
    - B. Amazon S3 Transfer Acceleration.
    - C. AWS Directory Service.
    - D. AWS Transit Gateway.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

26. Which of the following factors affect Amazon CloudFront cost? (Choose TWO)
    - A. Number of Requests.
    - B. Traffic Distribution.
    - C. Number of Volumes.
    - D. Instance type.
    - E. Storage Class.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>

27. How can you protect data stored on Amazon S3 from accidental deletion?
    - A. By enabling S3 Versioning.
    - B. By configuring S3 Bucket Policies.
    - C. By configuring S3 Lifecycle Policies.
    - D. By disabling S3 Cross-Region Replication (CRR).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

28. What should you consider when storing data in Amazon Glacier?
    - A. Amazon Glacier only accepts data in a compressed format.
    - B. Glacier can only be used to store frequently accessed data and data archives.
    - C. Amazon Glacier does not provide immediate retrieval of data.
    - D. Attach Glacier to an EC2 Instance to be able to store data.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

29. What is the maximum amount of data that can be stored in S3 in a single AWS account?
    - A. 100 PetaBytes.
    - B. Virtually unlimited storage.
    - C. 5TeraBytes.
    - D. 10 Exabytes.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

30. Which storage service can be used as a low-cost option for hosting static websites?
    - A. Amazon Glacier.
    - B. Amazon DynamoDB.
    - C. Amazon Elastic File System (Amazon EFS).
    - D. Amazon Simple Storage Service (Amazon S3).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

31. Which AWS service can serve a static website?
    - A. Amazon S3.
    - B. Amazon Route 53.
    - C. Amazon QuickSight.
    - D. AWS X-Ray.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

32. If each department within a company has its own AWS account, what is one way to enable consolidated billing?
    - A. Use AWS Budgets on each account to pay only to budget.
    - B. Contact AWS Support for a monthly bill.
    - C. Create an AWS Organization from the payer account and invite the other accounts to join.
    - D. Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

33. Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)
    - A. AWS Concierge.
    - B. AWS CloudFormation.
    - C. Amazon Simple Storage Service (Amazon S3).
    - D. Amazon EC2 Auto Scaling.
    - E. AWS Management Console.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>

34. Which AWS services should be used for read/write of constantly changing data? (Select TWO)
    - A. Amazon Glacier.
    - B. Amazon RDS.
    - C. AWS Snowball.
    - D. Amazon Redshift.
    - E. Amazon EFS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>

35. Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?
    - A. AWS Glue.
    - B. AWS Data Pipeline.
    - C. Amazon CloudSearch.
    - D. Amazon Athena.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

36. Which of the following are characteristics of Amazon S3? (Select TWO)
    - A. A global file system.
    - B. An object store.
    - C. A local file store.
    - D. A network file system.
    - E. A durable storage system.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>

37. Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?
    - A. Amazon Glacier.
    - B. AWS Storage Gateway.
    - C. Amazon S3.
    - D. Amazon EBS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

38. For which auditing process does AWS have sole responsibility?
    - A. AWS IAM policies.
    - B. Physical security.
    - C. Amazon S3 bucket policies.
    - D. AWS CloudTrail Logs.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

39. Which AWS service should be used for long-term, low-cost storage of data backups?
    - A. Amazon RDS.
    - B. Amazon Glacier.
    - C. AWS Snowball.
    - D. AWS EBS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

40. Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO)
    - A. appGateway.
    - B. Amazon S3.
    - C. Amazon Elastic File System (EFS).
    - D. Amazon Glacier.
    - E. Amazom CloudFront.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>

41. Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?
    - A. Amazon Glacier
    - B. AWS Snowball
    - C. AWS Storage Gateway
    - D. Amazon Elastic Block Storage (Amazon EBS)

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

42. Which of the following security-related services does AWS offer? (Select TWO)
    - A. Multi-factor authentication physical tokens.
    - B. AWS Trusted Advisor security checks.
    - C. Data encryption.
    - D. Automated penetration testing.
    - E. Amazon S3 copyrighted content detection.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>

43. A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company’s needs?
    - A. Amazon Simple Storage Service (Amazon S3).
    - B. Amazon DynamoDB.
    - C. Amazon Kinesis.
    - D. Amazon Redshift.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

44. Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?
    - A. A public and private key-pair
    - B. Amazon Inspector
    - C. AWS Identity and Access Management (IAM) policies
    - D. Security Groups

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - To allow users to perform S3 actions on the bucket from the VPC endpoints or IP addresses, you must explicitly grant those user-level permissions.
    - You can grant user-level permissions on either an AWS Identity and Access Management (IAM) policy or another statement in the bucket policy.

    Reference: <https://aws.amazon.com/premiumsupport/knowledge-center/block-s3-traffic-vpc-ip/>

    </details>

45. How is asset management on AWS easier than asset management in a physical data center?
    - A. AWS provides a Configuration Management Database that users can maintain.
    - B. AWS performs infrastructure discovery scans on the customer's behalf.
    - C. Amazon EC2 automatically generates an asset report and places it in the customer's specified Amazon S3 bucket.
    - D. Users can gather asset metadata reliably with a few API calls.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - AWS assets are centrally managed through an inventory management system that stores and tracks owner, location, status, maintenance, and descriptive information for AWS-owned assets.
    - Following procurement, assets are scanned and tracked, and assets undergoing maintenance are checked and monitored for
    ownership, status, and resolution.

    Reference: <https://aws.amazon.com/compliance/data-center/controls/>

    </details>

46. Which AWS hybrid storage service enables on-premises applications to seamlessly use AWS Cloud storage through standard file-storage protocols?
    - A. AWS Direct Connect
    - B. AWS Snowball
    - C. AWS Storage Gateway
    - D. AWS Snowball Edge

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - The AWS Storage Gateway service enables hybrid cloud storage between on-premises environments and the AWS Cloud.
    - It seamlessly integrates on-premises enterprise applications and workflows with Amazon's block and object cloud storage services through industry standard storage protocols.
    - It provides low-latency performance by caching frequently accessed data on premises, while storing data securely and durably in Amazon cloud storage services.
    - It provides an optimized data transfer mechanism and bandwidth management, which tolerates unreliable networks and minimizes the amount of data being transferred.
    - It brings the security, manageability, durability, and scalability of AWS to existing enterprise environments through native integration with AWS encryption, identity management, monitoring, and storage services. Typical use cases include backup and archiving, disaster recovery, moving data to S3 for in-cloud workloads, and tiered storage.

    Reference: <https://aws.amazon.com/storagegateway/faqs/>

    </details>

47. Which AWS service provides a secure, fast, and cost-effective way to migrate or transport exabyte-scale datasets into AWS?
    - A. AWS Batch
    - B. AWS Snowball
    - C. AWS Migration Hub
    - D. AWS Snowmobile

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - AWS Snowmobile is an exabyte-scale data transfer service that can move extremely large amounts of data to AWS in a fast, secure, and cost-effective manner.
    - You can transfer up to 100PB per Snowmobile, a 45-foot long ruggedized shipping container, pulled by a semi-trailer truck. - Snowmobile makes it easy to move massive volumes of data to the cloud, including video libraries, image repositories, or even a complete data center migration.
    - All data is encrypted with 256-bit encryption and you can manage your encryption keys with AWS Key Management Service (AWS KMS).
    - Snowmobile includes GPS tracking, alarm monitoring, 24/7 video surveillance and an optional escort security vehicle while in transit.

    Reference: <https://aws.amazon.com/about-aws/whats-new/2016/11/move-exabyte-scale-data-sets-with>- aws-snowmobile/

    </details>

48. Which of the following is an AWS database service?
    - A. Amazon Redshift
    - B. Amazon Elastic Block Store (Amazon EBS)
    - C. Amazon S3 Glacier
    - D. AWS Snowball

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://www.sisense.com/glossary/redshift-database/>

    </details>

49. A Cloud Practitioner needs to store data for 7 years to meet regulatory requirements. <br/> Which AWS service will meet this requirement at the LOWEST cost?
    - A. Amazon S3
    - B. AWS Snowball
    - C. Amazon Redshift
    - D. Amazon S3 Glacier

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - S3 Glacier Deep Archive is Amazon S3's lowest-cost storage class and supports long-term retention and digital preservation for data that may be accessed once or twice in a year.
    - It is designed for customers --particularly those in highly-regulated industries, such as the Financial Services, Healthcare, and Public Sectors -- that retain data sets for 7-10 years or longer to meet regulatory compliance requirements.
    - S3 Glacier Deep Archive can also be used for backup and disaster recovery use cases, and is a cost-effective and easy-to-manage alternative to magnetic tape systems, whether they are on-premises libraries or off-premises services.

    Reference: <https://aws.amazon.com/s3/storage-classes/>

    </details>

50. Which situation should be reported to the AWS Abuse team?
    - A. In Availability Zone has a service disruption
    - B. An intrusion attempt is made from an AWS IP address
    - C. A user has trouble accessing an Amazon S3 bucket from an AWS IP address
    - D. A user needs to change payment methods due to a compromise

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/premiumsupport/knowledge-center/report-aws-abuse/>

    </details>

51. The AWS Trusted Advisor checks include recommendations regarding which of the following? (Choose two.)
    - A. Information on Amazon S3 bucket permissions
    - B. AWS service outages
    - C. Multi-factor authentication enabled on the AWS account root user
    - D. Available software patches
    - E. Number of users in the account

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    Explanation: <https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/>

    </details>

52. What is a characteristic of Amazon S3 cross-region replication?
    - A. Both source and destination S3 buckets must have versioning disabled
    - B. The source and destination S3 buckets cannot be in different AWS Regions
    - C. S3 buckets configured for cross-region replication can be owned by a single AWS account or by different accounts
    - D. The source S3 bucket owner must have the source and destination AWS Regions disabled for their account

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html>

    </details>

53. Which AWS services can be used to move data from on-premises data centers to AWS? (Choose two.)
    - A. AWS Snowball
    - B. AWS Lambda
    - C. AWS ElastiCache
    - D. AWS Database Migration Service (AWS DMS)
    - E. Amazon API Gateway

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AD

    Explanation: <https://aws.amazon.com/snowball/>

    </details>

54. A company needs an Amazon S3 bucket that cannot have any public objects due to compliance requirements. <br/> How can this be accomplished?
    - A. Enable S3 Block Public Access from the AWS Management Console.
    - B. Hold a team meeting to discuss the importance if only uploading private S3 objects.
    - C. Require all S3 objects to be manually approved before uploading.
    - D. Create a service to monitor all S3 uploads and remove any public uploads.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html>

    </details>

55. Under the AWS shared responsibility model, which of the following are customer responsibilities? (Choose two.)
    - A. Setting up server-side encryption on an Amazon S3 bucket
    - B. Amazon RDS instance patching
    - C. Network and firewall configurations
    - D. Physical security of data center facilities
    - E. Compute capacity availability

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

56. Which Amazon S3 storage class is optimized to provide access to data with lower resiliency requirements, but rapid access when needed such as duplicate backups?
    - A. Amazon S3 Standard
    - B. Amazon S3 Glacier Deep Archive
    - C. Amazon S3 One Zone-Infrequent Access
    - D. Amazon S3 Glacier

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/s3/storage-classes/>

    </details>

57. A company must store critical business data in Amazon S3 with a backup to another AWS Region. <br/> How can this be achieved?
    - A. Use an Amazon CloudFront Content Delivery Network (CDN) to cache data globally
    - B. Set up Amazon S3 cross-region replication to another AWS Region
    - C. Configure the AWS Backup service to back up to the data to another AWS Region
    - D. Take Amazon S3 bucket snapshots and copy that data to another AWS Region

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    </details>

58. During a compliance review, one of the auditors requires a copy of the AWS SOC 2 report. <br/> Which service should be used to submit this request?
    - A. AWS Personal Health Dashboard
    - B. AWS Trusted Advisor
    - C. AWS Artifact
    - D. Amazon S3

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

59. A company has a 500 TB image repository that needs to be transported to AWS for processing. <br/> Which AWS service can import this data MOST cost-effectively?
    - A. AWS Snowball
    - B. AWS Direct Connect
    - C. AWS VPN
    - D. Amazon S3

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/blogs/storage/migrating-hundreds-of-tb-of-data-to-amazon-s3-with-aws-datasync/>

    </details>

60. A company wants to allow full access to an Amazon S3 bucket for a particular user. <br/> Which element in the S3 bucket policy holds the user details that describe who needs access to the S3 bucket?
    - A. Principal
    - B. Action
    - C. Resource
    - D. Statement

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://docs.aws.amazon.com/AmazonS3/latest/dev/walkthrough1.html>

    </details>

61. What does the Amazon S3 Intelligent-Tiering storage class offer?
    - A. Payment flexibility by reserving storage capacity
    - B. Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume
    - C. Automatic cost savings by moving objects between tiers based on access pattern changes
    - D. Secure, durable, and lowest cost storage for data archival

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/about-aws/whats-new/2018/11/s3-intelligent-tiering/>

    </details>

62. Which AWS storage service is designed to transfer petabytes of data in and out of the cloud?
    - A. AWS Storage Gateway
    - B. Amazon S3 Glacier Deep Archive
    - C. Amazon Lightsail
    - D. AWS Snowball

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://docs.aws.amazon.com/snowball/latest/ug/transfer-petabytes.html>

    </details>

63. A company is building an application that needs to deliver images and videos globally with minimal latency. <br/> Which approach can the company use to accomplish this in a cost effective manner?
    - A. Deliver the content through Amazon CloudFront.
    - B. Store the content on Amazon S3 and enable S3 cross-region replication.
    - C. Implement a VPN across multiple AWS Regions.
    - D. Deliver the content through AWS PrivateLink.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/blogs/industries/how-to-build-a-global-scalable-low-latency-and-secure-machine-learning-medical-imaging-analysis-platform-on-aws/>

    </details>

