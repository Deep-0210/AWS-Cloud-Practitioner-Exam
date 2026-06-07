# Topic 3: EC2 and Storage

1. Which of the following is an example of horizontal scaling in the AWS Cloud?
    - A. Replacing an existing EC2 instance with a larger, more powerful one.
    - B. Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.
    - C. Adding more RAM capacity to an EC2 instance.
    - D. Adding more EC2 instances of the same size to handle an increase in traffic.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

2. You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?
    - A. Amazon Inspector.
    - B. AWS CloudTrail.
    - C. AWS Trusted Advisor.
    - D. EC2 Instance Usage Report.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

3. A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?
    - A. Applying the Amazon Connect latency-based routing policy.
    - B. Registering a new US domain name to serve the users in the US.
    - C. Building a new data center in the US and implementing a hybrid model.
    - D. Deploying new Amazon EC2 instances in a Region located in the US.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

4. What should you do in order to keep the data on EBS volumes safe? (Choose TWO)
    - A. Regularly update firmware on EBS devices.
    - B. Create EBS snapshots.
    - C. Ensure that EBS data is encrypted at rest.
    - D. Store a backup daily in an external drive.
    - E. Prevent any unauthorized access to AWS data centers.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>

5. A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?
    - A. AWS OpsWorks.
    - B. AWS Storage Gateway.
    - C. Amazon EBS volume.
    - D. Amazon ElastiCache.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

6. You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?
    - A. Reserved instances.
    - B. Spot instances.
    - C. Dedicated instances.
    - D. On-demand instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

7. You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?
    - A. Reserved Instances.
    - B. On-demand Instances.
    - C. Dedicated Instances.
    - D. Spot Instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

8. You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?
    - A. AWS Lambda.
    - B. AWS Config.
    - C. Amazon CloudWatch.
    - D. AWS CloudTrail.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

9. An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?
    - A. Elastic RI.
    - B. Premium RI.
    - C. Standard RI.
    - D. Convertible RI.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

10. Which service provides object-level storage in AWS?
    - A. Amazon EBS.
    - B. Amazon Instance Store.
    - C. Amazon EFS.
    - D. Amazon S3.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

11. A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?
    - A. AWS Elastic Load Balancer.
    - B. AWS Budgets.
    - C. AWS Auto Scaling.
    - D. AWS Cost Explorer.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

12. Which of the following is NOT correct regarding Amazon EC2 On-demand instances?
    - A. You have to pay a start-up fee when launching a new instance for the first time.
    - B. The on-demand instances follow the AWS pay-as-you-go pricing model.
    - C. With on-demand instances, no longer-term commitments or upfront payments are needed.
    - D. When using on-demand Linux instances, you are charged per second based on an hourly rate.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

13. According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?
    - A. Penetration testing is not allowed in AWS.
    - B. Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure.
    - C. Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.
    - D. The AWS customers are only allowed to perform penetration testing on services managed by AWS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

14. According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)
    - A. Managing environmental events of AWS data centers.
    - B. Protecting the confidentiality of data in transit in Amazon S3.
    - C. Controlling physical access to AWS Regions.
    - D. Ensuring that the underlying EC2 host is configured properly.
    - E. Patching applications installed on Amazon EC2.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>

15. Which of the following AWS services can be used as a compute resource? (Choose TWO)
    - A. Amazon VPC.
    - B. Amazon CloudWatch.
    - C. Amazon S3.
    - D. Amazon EC2.
    - E. AWS Lambda.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>

16. Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?
    - A. Amazon EBS.
    - B. Amazon SQS.
    - C. Amazon S3.
    - D. Amazon Instance store.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

17. Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?
    - A. Dedicated Instances.
    - B. Dedicated Hosts.
    - C. On-demand Instances.
    - D. Reserved Instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

18. Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)
    - A. Monitoring network performance.
    - B. Installing software on EC2 instances.
    - C. Creating hypervisors.
    - D. Configuring Access Control Lists (ACLs).
    - E. Hardware maintenance.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, E
    </details>

19. In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?
    - A. IAM.
    - B. An internet gateway.
    - C. EBS Snapshot.
    - D. AMI.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

20. Which of the following aspects of security are managed by AWS? (Choose TWO)
    - A. Encryption of EBS volumes.
    - B. VPC security.
    - C. Access permissions.
    - D. Hardware patching.
    - E. Securing global physical infrastructure.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>

21. Which of the following services allows you to run containerized applications on a cluster of EC2 instances?
    - A. Amazon ECS.
    - B. AWS Data Pipeline.
    - C. AWS Cloud9.
    - D. AWS Personal Health Dashboard.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

22. What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)
    - A. AWS Direct Connect.
    - B. Amazon EC2 Auto Scaling.
    - C. Elastic Load Balancer.
    - D. CloudFormation.
    - E. Network ACLs.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>

23. Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?
    - A. AWS X-Ray.
    - B. Network ACL.
    - C. Security Groups.
    - D. VPC Flow logs.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

24. Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?
    - A. She has properly built an elastic system.
    - B. She has properly built a fault tolerant system.
    - C. She has properly built an encrypted system.
    - D. She has properly built a scalable system.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

25. Where can you store files in AWS? (Choose TWO)
    - A. Amazon EFS.
    - B. Amazon SNS.
    - C. Amazon EBS.
    - D. Amazon ECS.
    - E. Amazon EMR.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>

26. Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?
    - A. Pay less as AWS grows.
    - B. Pay as you go.
    - C. Pay less by using more.
    - D. Save when you reserve.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

27. What is the primary storage service used by Amazon RDS database instances?
    - A. Amazon Glacier.
    - B. Amazon EBS.
    - C. Amazon EFS.
    - D. Amazon S3.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

28. Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?
    - A. Amazon EBS.
    - B. Amazon SQS.
    - C. Amazon Instance store.
    - D. Amazon S3.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

29. What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?
    - A. Amazon Kinesis.
    - B. Security groups.
    - C. Amazon Inspector.
    - D. AWS Network Access Control Lists.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

30. A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?
    - A. AWS EC2 Auto Recovery.
    - B. AWS Auto Scaling.
    - C. AWS Network Load Balancer.
    - D. AWS Application Load Balancer.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

31. How are AWS customers billed for Linux-based Amazon EC2 usage?
    - A. EC2 instances will be billed on one second increments, with a minimum of one minute.
    - B. EC2 instances will be billed on one hour increments, with a minimum of one day.
    - C. EC2 instances will be billed on one minute increments, with a minimum of one hour.
    - D. EC2 instances will be billed on one day increments, with a minimum of one month.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

32. Which of the following will impact the price paid for an EC2 instance? (Choose TWO)
    - A. Instance type.
    - B. The Availability Zone where the instance is provisioned.
    - C. Load balancing.
    - D. Number of buckets.
    - E. Number of private IPs.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>

33. A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?
    - A. By creating an AWS Config template from the old instance and launching a new instance from it.
    - B. By creating an EBS Snapshot of the old instance.
    - C. By installing Aurora on EC2 and launching a new instance from it.
    - D. By creating an AMI from the old instance and launching a new instance from it.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

34. What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)
    - A. Instances can be shut down by AWS at any time with no notification.
    - B. Reserved instances require at least a one-year pricing commitment.
    - C. There is no additional charge for using dedicated instances.
    - D. Reserved instances provide a significant discount compared to on-demand instances.
    - E. Reserved instances are best suited for periodic workloads.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>

35. What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?
    - A. On-Demand Instances.
    - B. Spot Instances.
    - C. Reserved Instances     - All Upfront.
    - D. Reserved Instances     - No Upfront.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

36. Which of the following AWS services scale automatically without your intervention? (Choose TWO)
    - A. Amazon EC2.
    - B. Amazon S3.
    - C. AWS Lambda.
    - D. Amazon EMR.
    - E. Amazon EBS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>

37. A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?
    - A. On-demand instances.
    - B. Spot instances.
    - C. Dedicated instances.
    - D. Reserved instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

38. How can AWS customers track and avoid over-spending on underutilized reserved instances?
    - A. Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing.
    - B. Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace.
    - C. Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.
    - D. Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

39. Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)
    - A. Protecting sensitive data.
    - B. Patching of the underlying infrastructure.
    - C. Setup and operation of managed databases.
    - D. Maintaining consistent hardware components.
    - E. Installing and configuring third-party software.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>

40. Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?
    - A. Amazon EC2 is considered a Serverless Web Service.
    - B. Amazon EC2 eliminates the need to invest in hardware upfront.
    - C. Amazon EC2 can launch as many or as few virtual servers as needed.
    - D. Amazon EC2 offers scalable computing.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

41. What is the AWS Compute service that executes code only when triggered by events?
    - A. AWS Lambda.
    - B. Amazon CloudWatch.
    - C. AWS Transit Gateway.
    - D. Amazon EC2.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

42. Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers’ requirements. What is the name of these virtual servers in AWS?
    - A. Amazon EBS Snapshots.
    - B. Amazon VPC.
    - C. AWS Managed Servers.
    - D. Amazon EC2 Instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

43. AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?
    - A. Deleting unused EBS volumes after terminating an EC2instance.
    - B. Deleting unused AutoScaling launch configuration.
    - C. Deleting unused Elastic Load Balancers.
    - D. Releasing unused Elastic IPs after terminating an EC2instance.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

44. You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?
    - A. All up-front reservation.
    - B. All reserved instance payment options provide the same discount level.
    - C. Partial up-front reservation.
    - D. No up-front reservation.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

45. Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?
    - A. Use Software test automation tools.
    - B. Use AWS CodeDeploy to build and automate your AWS environment.
    - C. Use code to provision and operate your AWS infrastructure.
    - D. Migrate all of your applications to a dedicated host.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

46. Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)
    - A. The amount of time the instances will be running.
    - B. Number of security groups.
    - C. Allocated Elastic IP Addresses.
    - D. Number of Hosted Zones.
    - E. Number of instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>

47. Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?
    - A. AWS Data Pipeline.
    - B. AWS Storage Gateway.
    - C. Amazon Aurora.
    - D. Amazon EFS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

48. Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)
    - A. Labor and IT costs.
    - B. Cooling and power consumption.
    - C. Amazon EBS computing power.
    - D. Software architecture.
    - E. Software compatibility.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>

49. A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?
    - A. Amazon EBS.
    - B. Amazon EFS.
    - C. Amazon S3.
    - D. Amazon Instance Store.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

50. According to best practices, which of the below options is best suited for processing a large number of binary files?
    - A. Vertically scaling EC2 instances.
    - B. Running RDS instances in parallel.
    - C. Vertically scaling RDS instances.
    - D. Running EC2 instances in parallel.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

51. Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?
    - A. Amazon Elastic File System.
    - B. Amazon Simple Storage Service.
    - C. Amazon Elastic Block Store.
    - D. AWS Storage Gateway.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

52. What are the capabilities of AWS X-Ray? (Choose TWO)
    - A. Automatically decouples application components.
    - B. Facilitates tracking of user requests to identify application issues.
    - C. Helps improve application performance.
    - D. Deploys applications to Amazon EC2 instances.
    - E. Deploys applications to on-premises servers.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>

53. Which AWS Service can perform health checks on Amazon EC2 instances?
    - A. AWS CloudFormation.
    - B. Amazon Route 53.
    - C. Amazon Chime.
    - D. Amazon Aurora.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

54. Which of the following are examples of AWS-managed databases? (Choose TWO)
    - A. Amazon Neptune.
    - B. Amazon CloudSearch.
    - C. Microsoft SQL Server on Amazon EC2.
    - D. MySQL on Amazon EC2.
    - E. Amazon RDS for MySQL.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>

55. A company’s AWS workflow requires that it periodically perform large-scale image and video processing jobs. The customer is seeking to minimize cost and has stated that the amount of time it takes to process these jobs is not critical, but that cost minimization is the most important factor in designing the solution. Which EC2 instance class is best suited for this processing?
    - A. EC2 On-Demand Instances.
    - B. EC2 Reserved Instances     - No Upfront.
    - C. EC2 Spot Instances.
    - D. EC2 Reserved Instances     - All Upfront.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

56. Which statement is true in relation to the security of Amazon EC2?
    - A. You should use instance store volumes to store login data.
    - B. You should regularly patch the operating system and applications on your EC2 instances.
    - C. You should deploy critical components of your application in the Availability Zone that you trust.
    - D. You can track all API calls using Amazon Athena.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

57. You are using several on-demand EC2 Instances to run your development environment. What is the best way to reduce your charges when these instances are not in use?
    - A. Deleting all EBS volumes attached to the instances.
    - B. You cannot minimize charges for on-demand instances.
    - C. Terminating the instances.
    - D. Stopping the instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

58. Which of the following are factors should be considered for Amazon EBS pricing? (Choose TWO)
    - A. The size of volumes provisioned per month.
    - B. The compute capacity you consume.
    - C. The amount of data you have stored in snapshots.
    - D. The compute time you consume.
    - E. The number of Snowball storage devices you request.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>

59. Which of the following is an available option when purchasing Amazon EC2 instances?
    - A. The ability to bid to get the lowest possible prices.
    - B. The ability to register EC2 instances to get volume discounts on every hour the instances are running.
    - C. The ability to buy Dedicated Instances for up to 90% discount.
    - D. The ability to pay upfront to get lower hourly costs.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

60. Your CTO has asked you to contact AWS support using the chat feature to ask for guidance related to EBS. However, when you open the AWS support center you can't see a way to contact support via Chat. What should you do?
    - A. There is no chat feature in AWS support.
    - B. The chat feature is available for all plans for an additional fee, but you have to request it first.
    - C. At a minimum, upgrade to Business support plan.
    - D. Upgrade from the Basic Support plan to Developer Support.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

61. Which of the following are valid Amazon EC2 Reserved Instance types? (Choose TWO)
    - A. Convertible.
    - B. Expedited.
    - C. Bulk.
    - D. Spot.
    - E. Standard.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>

62. For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?
    - A. Use EC2 Dedicated Hosts.
    - B. Use EC2 Reserved Instances.
    - C. Use EC2 Spot Instances.
    - D. Use EC2 On-demand Instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

63. The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?
    - A. AWS allows customers to launch powerful EC2 instances to handle spikes in load.
    - B. AWS allows customers to pay upfront to get bigger discounts.
    - C. AWS allows customers to launch and terminate EC2 instances based on demand.
    - D. AWS allows customers to choose cheaper types of EC2 instances that best fit their needs.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

64. For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?
    - A. Run WordPress on an Amazon Lightsail instance.
    - B. Install WordPress on an Amazon EC2 instance.
    - C. Use the Amazon S3 Web hosting feature.
    - D. Host the website directly on AWS Cloud Development Kit (AWS CDK).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

65. Which of the following procedures can reduce latency when your end users are retrieving data? (Choose TWO)
    - A. Store media assets in the region closest to your end users.
    - B. Store media assets on an additional EBS volume and increase the capacity of your server.
    - C. Replicate media assets to at least two availability zones.
    - D. Reduce the size of media assets using the Amazon Elastic Transcoder.
    - E. Store media assets in S3 and use CloudFront to distribute these assets.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>

66. Which statement is true in relation to security in AWS?
    - A. AWS manages everything related to EC2 operating systems.
    - B. AWS customers are responsible for patching any database software running on Amazon EC2.
    - C. Server side encryption is the responsibility of AWS.
    - D. AWS is responsible for the security of your application.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

67. Amazon EC2 instances are conceptually very similar to traditional servers. However, using Amazon EC2 server instances in the same manner as traditional hardware server instances is only a starting point. What are the main benefits of using the AWS EC2 instances instead of traditional servers? (Choose TWO)
    - A. Improves Fault-Tolerance.
    - B. Provides your business with a seamless remote accessibility.
    - C. Prevents unauthorized users from getting into your network.
    - D. Provides automatic data backups.
    - E. Can be scaled manually in a shorter period of time.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>

68. A company is running a large web application that needs to always be available. The application tends to slow down when CPU usage is greater than 60%. How can they track when CPU usage goes above 60% for any of the EC2 Instances in their account?
    - A. Use CloudFront to monitor the CPU usage.
    - B. Set the AWS Config CPU threshold to 60% to receive a notification when EC2 usage exceeds that value.
    - C. Use CloudWatch Alarms to monitor the CPU and alert when the CPU usage is >= 60%.
    - D. Use SNS to monitor the utilization of the server.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

69. What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?
    - A. Amazon EBS.
    - B. Amazon RDS.
    - C. You can't run a database inside an Amazon EC2 instance.
    - D. Amazon DynamoDB.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

70. Which of the following actions may reduce Amazon EBS costs? (Choose TWO)
    - A. Deleting unused buckets.
    - B. Using reservations.
    - C. Deleting unnecessary snapshots.
    - D. Changing the type of the volume.
    - E. Distributing requests to multiple volumes.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, D
    </details>

71. How can you increase your application’s fault-tolerance while it is being hosted in AWS?
    - A. Deploy your application across multiple EC2 instances.
    - B. Deploy your application across multiple Availability Zones.
    - C. Host your application on one powerful EC2 instance type instead of multiple smaller instances.
    - D. Deploy the underlying application resources across multiple subnets.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

72. A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?
    - A. Amazon Elastic Block Store.
    - B. AWS Storage Gateway.
    - C. Amazon Elastic File System.
    - D. S3.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

73. You are planning to launch an advertising campaign over the coming weekend to promote a new digital product. It is expected that there will be heavy spikes in load during the campaign period, and you can’t afford any downtime. You need additional compute resources to handle the additional load. What is the most cost-effective EC2 instance purchasing option for this job?
    - A. Savings Plans.
    - B. Spot Instances.
    - C. Reserved Instances.
    - D. On-Demand Instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

74. What are some of the benefits of using On-Demand EC2 instances? (Choose TWO)
    - A. They provide free capacity when testing your new applications.
    - B. They are cheaper than all other EC2 options.
    - C. They remove the need to buy “safety net” capacity to handle periodic traffic spikes.
    - D. They only require 1-2 days for setup and configuration.
    - E. You can increase or decrease your compute capacity depending on the demands of your application.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, E
    </details>

75. Which AWS service can be used to manually launch instances based on resource requirements?
    - A. Amazon EBS.
    - B. Amazon S3.
    - C. Amazon EC2.
    - D. Amazon ECS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

76. Which is a recommended pattern for designing a highly available architecture on AWS?
    - A. Ensure that components have low-latency network connectivity.
    - B. Run enough Amazon EC2 instances to operate at peak load.
    - C. Ensure that the application is designed to accommodate failure of any single component.
    - D. Use a monolithic application that handles all operations.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

77. A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?
    - A. Launch the instances across multiple Availability Zones in a single AWS Region.
    - B. Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.
    - C. Launch the instances in multiple AWS Regions but in the same Availability Zone.
    - D. Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

78. Which task is AWS responsible for in the shared responsibility model for security and compliance?
    - A. Granting access to individuals and services.
    - B. Encrypting data in transit.
    - C. Updating Amazon EC2 host firmware.
    - D. Updating operating systems.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

79. A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?
    - A. Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor.
    - B. Enable automate patching for the instances using the Amazon RDS console.
    - C. In AWS Config. configure a rule for the instances and the required patch level.
    - D. Use AWS Systems Manager to automate database patching according to a schedule.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

80. How do customers benefit from Amazon’s massive economies of scale?
    - A. Periodic price reductions as the result of Amazon’s operational efficiencies.
    - B. New Amazon EC2 instance types providing the latest hardware.
    - C. The ability to scale up and down when needed.
    - D. Increased reliability in the underlying hardware of Amazon EC2 instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

81. Which of the following services will automatically scale with an expected increase in web traffic?
    - A. AWS CodePipeline.
    - B. Elastic Load Balancing.
    - C. Amazon EBS.
    - D. AWS Direct Connect.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

82. Which service provides a virtually unlimited amount of online highly durable object storage?
    - A. Amazon Redshift.
    - B. Amazon Elastic File System (Amazon EFS).
    - C. Amazon Elastic Container Service (Amazon ECS).
    - D. Amazon S3.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

83. Which statement best describes Elastic Load Balancing?
    - A. It translates a domain name into an IP address using DNC.
    - B. It distributes incoming application traffic across one or more Amazon EC2 instances.
    - C. It collects metrics on connected Amazon EC2 instances.
    - D. It automatically adjusts the number of Amazon EC2 instances to support incoming traffic.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

84. Which of the following is an AWS-managed compute service?
    - A. Amazon SWF.
    - B. Amazon EC2.
    - C. AWS Lambda.
    - D. Amazon Aurora.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

85. Which of the following is the customer’s responsibility under the AWS shared responsibility model?
    - A. Patching underlying infrastructure
    - B. Physical security
    - C. Patching Amazon EC2 instances
    - D. Patching network infrastructure

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

86. Which Amazon EC2 pricing model offers the MOST significant discount when compared to OnDemand Instances?
    - A. A Partial Upfront Reserved Instances for a 1-year term.
    - B. All Upfront Reserved instances for a 1 year form.
    - C. All Upfront Reserved Instances for a 3 year term.
    - D. No Upfront Reserved Instances for a 3 year term.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

87. A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. When Amazon EC2 instance pricing option will meet these requirements?
    - A. Dedicated Hosts.
    - B. Dedicated Instances.
    - C. Spot Instances.
    - D. Reserved Instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

88. Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?
    - A. Dedicated RIs.
    - B. Scheduled RIs.
    - C. Convertible RIs.
    - D. Standard RIs.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

89. Which service is best for storing common database query results, which helps to alleviate database access load?
    - A. Amazon Machine Learning.
    - B. Amazon SQS.
    - C. Amazon ElastiCache.
    - D. Amazon EC2 Instance Store.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

90. When should a company consider using Amazon EC2 Spot Instances? (Select TWO)
    - A. For non-production applications.
    - B. For stateful workloads.
    - C. For applications that cannot have interruptions.
    - D. For fault-tolerant flexible applications.
    - E. For sensitive database applications.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, D
    </details>

91. A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?
    - A. Elastic Load Balancer.
    - B. Amazon EC2 Auto Scaling.
    - C. Amazon Route 53.
    - D. Amazon CloudFront.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

92. Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?
    - A. Cloud-native.
    - B. Partner network.
    - C. Hybrid architecture.
    - D. Infrastructure as a service.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

93. A company’s web application currently has light dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?
    - A. Implementing elasticity enabling the application to scale up or scale down as demand changes.
    - B. Enabling several EC2 instances to run in parallel to achieve better performance.
    - C. Focusing on decoupling components by isolating them and ensuring individual components can function when other components.
    - D. Doubling EC2 computing resources to increase system fault tolerance.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

94. What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?
    - A. Amazon S3.
    - B. Amazon Glacier.
    - C. Amazon EBS.
    - D. Amazon EC2 Instance Store.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

95. Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?
    - A. Amazon S3.
    - B. Amazon Glacier.
    - C. Amazon EBS.
    - D. Amazon EFS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

96. Which of the following is a shared control between the customer and AWS?
    - A. Providing a key for Amazon S3 client-side encryption.
    - B. Configuration of an Amazon EC2 instance.
    - C. Environmental controls of physical AWS data centers.
    - D. Awareness.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

97. Which type of AWS storage is ephemeral and is deleted when an instance is stopped Of terminated?
    - A. Amazon EBS.
    - B. Amazon EC2 instance store.
    - C. Amazon EFS.
    - D. Amazon S3.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

98. Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?
    - A. Spot Instances.
    - B. Reserved Instances.
    - C. Dedicated Hosts.
    - D. On-Demand Instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

99. Which Amazon EC2 instance pricing model can provide discounts of up to 90%?
    - A. Reserved Instances.
    - B. On-Demand.
    - C. Dedicated Hosts.
    - D. Spot Instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

100. Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?
    - A. Ensuring network connectivity from AWS to the internet.
    - B. Patching and fixing flaws within the AWS Cloud infrastructure.
    - C. Ensuring the physical security of cloud data centers.
    - D. Ensuring Amazon EBS volumes are backed up.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

101. In which scenario should Amazon EC2 Spot Instances be used?
    - A. A company wants to move its main website to AWS from an on-premises web server.
    - B. A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.
    - C. A company’s heavily used legacy database is currently running on-premises.
    - D. A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

102. A characteristic of edge locations is that they:
    - A. Host Amazon EC2 instances closer to users.
    - B. Help lower latency and improve performance for users.
    - C. Cache frequently changing data without reaching the origin server.
    - D. Refresh data changes daily.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

103. A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?
    - A. Amazon EC2 Spot Instances.
    - B. Amazon EC2 Dedicated Instances.
    - C. Amazon EC2 On-Demand Instances.
    - D. Amazon EC2 Reserved Instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

104. Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?
    - A. On-Demand Instances.
    - B. Reserved Instances.
    - C. Spot Instances.
    - D. Convertible Reserved Instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

105. Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?
    - A. Amazon Elastic Block Store (Amazon EBS).
    - B. Amazon Machine Image.
    - C. Amazon EC2 Systems Manager.
    - D. Amazon AppStream 2.0.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

106. How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?
    - A. They automatically add more instances across multiple AWS Regions based on global demand of the application.
    - B. They automatically add or replace instances across multiple Availability Zones when the application needs it.
    - C. They enable the application’s stalk: content to reside closer to end users.
    - D. They are able to distribute incoming requests across a tier of web server instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

107. A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?
    - A. Amazon Redshift.
    - B. Amazon DynamoDB.
    - C. Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store.
    - D. Amazon EC2 with Amazon Elastic Block Store (Amazon EBS).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

108. Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software license ?
    - A. Spot Instances
    - B. Reserved Instances
    - C. Dedicated Hosts
    - D. On-Demand Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/ec2/pricing/>

    </details>

109. A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. <br/> Which service should the company use?
    - A. Amazon Redshift
    - B. Amazon DynamoDB
    - C. Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store
    - D. Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    </details>

110. A characteristic of edge locations is that they:
    - A. host Amazon EC2 instances closer to users.
    - B. help lower latency and improve performance for users.
    - C. cache frequently changing data without reaching the origin server.
    - D. refresh data changes daily.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    </details>

111. Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?
    - A. Dedicated RIs
    - B. Scheduled RIs
    - C. Convertible RIs
    - D. Standard RIs

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/ec2/pricing/reserved-instances/>

    </details>

112. Which of the following services will automatically scale with an expected increase in web traffic?
    - A. AWS CodePipeline
    - B. Elastic Load Balancing
    - C. Amazon EBS
    - D. AWS Direct Connect

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/elasticloadbalancing/>

    </details>

113. Which is a recommended pattern for designing a highly available architecture on AWS?
    - A. Ensure that components have low-latency network connectivity.
    - B. Run enough Amazon EC2 instances to operate at peak load.
    - C. Ensure that the application is designed to accommodate failure of any single component.
    - D. Use a monolithic application that handles all operations.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

114. Which of the following is a shared control between the customer and AWS?
    - A. Providing a key for Amazon S3 client-side encryption
    - B. Configuration of an Amazon EC2 instance
    - C. Environmental controls of physical AWS data centers
    - D. Awareness and training

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

115. What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?
    - A. Amazon S3
    - B. Amazon Glacier
    - C. Amazon EBS
    - D. Amazon EC2 Instance Store

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    </details>

116. Which of the following is the customer's responsibility under the AWS shared responsibility model?
    - A. Patching underlying infrastructure
    - B. Physical security
    - C. Patching Amazon EC2 instances
    - D. Patching network infrastructure

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

117. Which Amazon EC2 instance pricing model can provide discounts of up to 90%?
    - A. Reserved Instances
    - B. On-Demand
    - C. Dedicated Hosts
    - D. Spot Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/ec2/spot/>

    </details>

118. Which statement best describes Elastic Load Balancing?
    - A. It translates a domain name into an IP address using DNS.
    - B. It distributes incoming application traffic across one or more Amazon EC2 instances.
    - C. It collects metrics on connected Amazon EC2 instances.
    - D. It automatically adjusts the number of Amazon EC2 instances to support incoming traffic.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/elasticloadbalancing/>

    </details>

119. Web servers running on Amazon EC2 access a legacy application running in a corporate data center. <br/> What term would describe this model?
    - A. Cloud-native
    - B. Partner network
    - C. Hybrid architecture
    - D. Infrastructure as a service

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/enterprise/hybrid/>

    </details>

120. Which service provides a virtually unlimited amount of online highly durable object storage?
    - A. Amazon Redshift
    - B. Amazon Elastic File System (Amazon EFS)
    - C. Amazon Elastic Container Service (Amazon ECS)
    - D. Amazon S3

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/what-is-cloud-object-storage/>

    </details>

121. Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?
    - A. Amazon S3
    - B. Amazon Glacier
    - C. Amazon EBS
    - D. Amazon EFS

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - Amazon Elastic File System (Amazon EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources.
    - It is built to scale on demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files, eliminating the need to provision and manage capacity to accommodate growth.
    - Amazon EFS is designed to provide the throughput, IOPS, and low latency needed for Linux workloads.
    - Throughput and IOPS scale as a file system grows and can burst to higher throughput levels for short periods of time to support the unpredictable performance needs of file workloads.
    - For the most demanding workloads, Amazon EFS can support performance over 10 GB/sec and up to 500,000 IOPS.

    </details>

122. Which task is AWS responsible for in the shared responsibility model for security and compliance?
    - A. Granting access to individuals and services
    - B. Encrypting data in transit
    - C. Updating Amazon EC2 host firmware
    - D. Updating operating systems

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - AWS Compliance enables customers to establish and operate in an AWS security control environment The shared responsibility model is part of AWS Compliance
    - The Security of the cloud is managed by Amazon AWS provider
    - The Security in the cloud is responsibility of the customer
    - The customer is responsible for their information and data, their secure transmission, integrity, and encryption Also, the customer is responsible for managing, support, patching and control of the guest operating system and AWS services provided like EC2
    - AWS customers retain control and ownership of their data
    - The AWS network provides significant protection against traditional network security issues and the customer can implement further protection

    Reference: <https://www.whizlabs.com/blog/aws-security-shared-responsibility/>

    </details>

123. Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?
    - A. On-Demand Instances
    - B. Reserved Instances
    - C. Spot Instances
    - D. Convertible Reserved Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - In the new model, the Spot prices are more predictable, updated less frequently, and are determined by supply and demand for Amazon EC2 spare capacity, not bid prices.

    Reference: <https://aws.amazon.com/blogs/compute/new-amazon-ec2-spot-pricing/>

    </details>

124. Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?
    - A. Amazon Elastic Block Store (Amazon EBS)
    - B. Amazon Machine Image
    - C. Amazon EC2 Systems Manager
    - D. Amazon AppStream 2.0

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - To use Amazon EC2, you simply:
    - Select a pre-configured, templated Amazon Machine Image (AMI) to get up and running immediately. Or create an AMI containing your applications, libraries, data, and associated configuration settings.
    - Configure security and network access on your Amazon EC2 instance.
    - Choose which instance type(s) you want, then start, terminate, and monitor as many instances of your AMI as needed, using the web service APIs or the variety of management tools provided.
    - Determine whether you want to run in multiple locations, utilize static IP endpoints, or attach persistent block storage to your instances.
    - Pay only for the resources that you actually consume, like instance-hours or data transfer.

    Reference: <https://aws.amazon.com/ec2/features/>

    </details>

125. Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?
    - A. Amazon RDS
    - B. Amazon EC2
    - C. Amazon ElastiCache
    - D. AWS Fargate

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - The customer is responsible for managing, support, patching and control of the guest operating system and AWS services provided like EC2.

    Reference: <https://www.whizlabs.com/blog/aws-security-shared-responsibility/>

    </details>

126. How do customers benefit from Amazon's massive economies of scale?
    - A. Periodic price reductions as the result of Amazon's operational efficiencies
    - B. New Amazon EC2 instance types providing the latest hardware
    - C. The ability to scale up and down when needed
    - D. Increased reliability in the underlying hardware of Amazon EC2 instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    </details>

127. In which scenario should Amazon EC2 Spot Instances be used?
    - A. A company wants to move its main website to AWS from an on-premises web server.
    - B. A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.
    - C. A company's heavily used legacy database is currently running on-premises.
    - D. A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-leveraging-ec2-spot-instances/spot-instance-interruptions.html>

    </details>

128. Which AWS service can be used to manually launch instances based on resource requirements?
    - A. Amazon EBS
    - B. Amazon S3
    - C. Amazon EC2
    - D. Amazon ECS

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

129. A company is migrating an application that is running non-interruptible workloads for a three-year time frame. <br/> Which pricing construct would provide the MOST cost-effective solution?
    - A. Amazon EC2 Spot Instances
    - B. Amazon EC2 Dedicated Instances
    - C. Amazon EC2 On-Demand Instances
    - D. Amazon EC2 Reserved Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    </details>

130. Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?    - A. Amazon RDS
    - B. Amazon EC2
    - C. Amazon ElastiCache
    - D. AWS Fargate

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:

    - The customer is responsible for managing, support, patching and control of the guest operating system and AWS services provided like EC2.

    Reference: <https://www.whizlabs.com/blog/aws-security-shared-responsibility/>

    </details>

131. When is it beneficial for a company to use a Spot Instance?
    - A. When there is flexibility in when an application needs to run.
    - B. When there are mission-critical workloads.
    - C. When dedicated capacity is needed.
    - D. When an instance should not be stopped.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:

    - The key to understanding spot instances is to look at the way that cloud service providers such as Amazon Web Services (AWS) operate.
    - Cloud service providers invest in hardware resources and then release those resources (often on a per-hour basis) to subscribers.
    - One of the problems with this business model, however, is that at any given time, there are likely to be compute resources that are not being utilized.
    - These resources represent hardware capacity that AWS has paid for but are sitting idle, and not making AWS any money at the moment.
    - Rather than allowing these computing resources to go to waste, AWS offers them at a substantially discounted rate, with the understanding that if someone needs those resources for running a normal EC2 instance, that instance will take priority over spot instances that are using the hardware resources at a discounted rate.
    - In fact, spot instances will be stopped if the resources are needed elsewhere.

    Reference: <https://awsinsider.net/articles/2017/09/25/aws-spot-instances-primer.aspx>

    </details>

132. What function do security groups serve related Amazon Elastic Compute Cloud (Amazon EC2) instance security?
    - A. Act as a virtual firewall for the Amazon EC2 instance.
    - B. Secure AWS user accounts with AWS identity and Access Management (IAM) policies.
    - C. Provide DDoS protection with AWS Shield.
    - D. Use Amazon CloudFront to protect the Amazon EC2 instance.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:

    - AWS Security Groups act like a firewall for your Amazon EC2 instances controlling both inbound and outbound traffic.
    - When you launch an instance on Amazon EC2, you need to assign it to a particular security group.
    - After that, you can set up ports and protocols, which remain open for users and computers over the internet.
    - AWS Security Groups are very flexible. You can use the default security group and still customize it according to your liking (although we don't recommend this practice because groups should be named according to their purpose.) Or you can create a security group that you want for your specific applications.
    - To do this, you can write the corresponding code or use the Amazon EC2 console to make the process easier.

    Reference: <https://www.threatstack.com/blog/aws-security-groups-what-they-are-and-how-to-get-the-most-out-of-them>

    </details>

133. Which of the following provides the ability to share the cost benefits of Reserved Instances across AWS accounts?
    - A. AWS Cost Explorer between AWS accounts
    - B. Linked accounts and consolidated billing
    - C. Amazon Elastic Compute Cloud (Amazon EC2) Reserved Instance Utilization Report
    - D. Amazon EC2 Instance Usage Report between AWS accounts

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - The way that Reserved Instance discounts apply to accounts in an organization's consolidated billing family depends on whether Reserved Instance sharing is turned on or off for the account.
    - By default, Reserved Instance sharing for all accounts in an organization is turned on.
    - You can change this setting by Turning Off Reserved Instance Sharing for an account.
    - The capacity reservation for a Reserved Instance applies only to the account the Reserved Instance was purchased on, regardless of whether Reserved Instance sharing is turned on or off.

    Reference: <https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-consolidated-billing/>

    </details>

134. Which feature adds elasticity to Amazon EC2 instances to handle the changing demand for workloads?
    - A. Resource groups
    - B. Lifecycle policies
    - C. Application Load Balancer
    - D. Amazon EC2 Auto Scaling

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - Support for monitoring the health of each service independently, as health checks are defined at the target group level and many CloudWatch metrics are reported at the target group level.
    - Attaching a target group to an Auto Scaling group enables you to scale each service dynamically based on demand.

    Reference: <https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html>

    </details>

135. What is a responsibility of AWS in the shared responsibility model?
    - A. Updating the network ACLs to block traffic to vulnerable ports.
    - B. Patching operating systems running on Amazon EC2 instances.
    - C. Updating the firmware on the underlying EC2 hosts.
    - D. Updating the security group rules to block traffic to the vulnerable ports.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://cloudacademy.com/blog/aws-shared-responsibility-model-security/>

    </details>

136. A company's web application currently has tight dependencies on underlying components, so when one component fails the entire web application fails. <br> Applying which AWS Cloud design principle will address the current design issue?
    - A. Implementing elasticity, enabling the application to scale up or scale down as demand changes.
    - B. Enabling several EC2 instances to run in parallel to achieve better performance.
    - C. Focusing on decoupling components by isolating them and ensuring individual components can function when other components fail.
    - D. Doubling EC2 computing resources to increase system fault tolerance.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

137. Which type of AWS storage is ephemeral and is deleted when an instance is stopped or terminated?
    - A. Amazon EBS
    - B. Amazon EC2 instance store
    - C. Amazon EFS
    - D. Amazon S3

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - When you stop or terminate an instance, every block of storage in the instance store is reset.
    - Therefore, your data cannot be accessed through the instance store of another instance.

    Reference: <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html>

    </details>

138. Which of the following is an AWS-managed compute service?
    - A. Amazon SWF
    - B. Amazon EC2
    - C. AWS Lambda
    - D. Amazon Aurora

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html>

    </details>

139. Which of the following AWS services can be used to run a self-managed database?
    - A. Amazon Route 53
    - B. AWS X-Ray
    - C. AWS Snowmobile
    - D. Amazon Elastic Compute Cloud (Amazon EC2)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://severalnines.com/news/aws-users-prefer-self-managed-databases>

    </details>

140. Which AWS tool will identify security groups that grant unrestricted Internet access to a limited list of ports?
    - A. AWS Organizations
    - B. AWS Trusted Advisor
    - C. AWS Usage Report
    - D. Amazon EC2 dashboard

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://www.cloudconformity.com/knowledge-base/aws/EC2/security-group-egress-any.html>

    </details>

141. Which Amazon EC2 pricing model offers the MOST significant discount when compared to On-Demand Instances?
    - A. Partial Upfront Reserved Instances for a 1-year term
    - B. All Upfront Reserved Instances for a 1-year term
    - C. All Upfront Reserved Instances for a 3-year term
    - D. No Upfront Reserved Instances for a 3-year term

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/ec2/pricing/reserved-instances/>

    </details>

142. What are the advantages of Reserved Instances? (Choose two.)
    - A. They provide a discount over on-demand pricing.
    - B. They provide access to additional instance types.
    - C. They provide additional networking capability.
    - D. Customers can upgrade instances as new types become available.
    - E. Customers can reserve capacity in an Availability Zone.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AE

    Explanation: <https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-basics/>

    </details>

143. How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?
    - A. They automatically add more instances across multiple AWS Regions based on global demand of the application.
    - B. They automatically add or replace instances across multiple Availability Zones when the application needs it.
    - C. They enable the application's static content to reside closer to end users.
    - D. They are able to distribute incoming requests across a tier of web server instances.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - When the unhealthy Availability Zone returns to a healthy state, Auto Scaling automatically redistributes the application instances evenly across all of the designated Availability Zones.

    Reference: <https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html>

    </details>

144. How can one AWS account use Reserved Instances from another AWS account?
    - A. By using Amazon EC2 Dedicated Instances
    - B. By using AWS Organizations consolidated billing
    - C. By using the AWS Cost Explorer tool
    - D. By using AWS Budgets

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - The account that originally purchased the Reserved Instance receives the discount first.
    - If the purchasing account doesn't have any instances that match the terms of the Reserved Instance, the discount for the Reserved Instance is assigned to any matching usage on another account in the organization.

    Reference: <https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-consolidated-billing/>

    </details>

145. A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds. <br/> For how much time will the customer be billed?
    - A. 3 hours, 5 minutes
    - B. 3 hours, 5 minutes, and 6 seconds
    - C. 3 hours, 6 minutes
    - D. 4 hours

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/premiumsupport/knowledge-center/ec2-instance-hour-billing/>

    </details>

146. What is the value of using third-party software from AWS Marketplace instead of installing third-party software on Amazon EC2? (Choose two.)
    - A. Users pay for software by the hour or month depending on licensing.
    - B. AWS Marketplace enables the user to launch applications with 1-Click.
    - C. AWS Marketplace data encryption is managed by a third-party vendor.
    - D. AWS Marketplace eliminates the need to upgrade to newer software versions.
    - E. Users can deploy third-party software without testing.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AB

    Explanation: <https://aws.amazon.com/partners/aws-marketplace/>

    </details>

147. After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?
    - A. No upfront payment
    - B. Hourly on-demand payment
    - C. Partial upfront payment
    - D. All upfront payment

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/>

    </details>

148. A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. <br/> What is the SIMPLEST way to do this?
    - A. Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.
    - B. Run AWS Trusted Advisor and review the findings.
    - C. Open the AWS IAM console and check the inbound rule filters for open access.
    - D. In AWS Config, create a custom rule that invokes an AWS Lambda function to review rules for inbound access.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-security-groups.html>

    </details>

149. What is the purpose of AWS Storage Gateway?
    - A. It ensures on-premises data storage is 99.999999999% durable.
    - B. It transports petabytes of data to and from AWS.
    - C. It connects to multiple Amazon EC2 instances.
    - D. It connects on-premises data storage to the AWS Cloud.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - Moving data to the cloud is not quite as simple as flipping a switch.
    - For companies that have managed their own data centers or server rooms for decades, there are a few steps to consider --and it's not always wise to pull the plug on an internal infrastructure quite so quickly.
    - If a startup uses on-premise business servers and then experiences unexpected growth, abandoning those servers doesn't make sense (even if the long-term plan is to do exactly that).
    - AWS Storage Gateway is a way to bridge this gap for companies of any size.
    - It's a hybrid storage option that connects on-premise storage including age-old tape backup systems to the cloud in a way that also provides one console to access all storage configurations.

    Reference: <https://www.techradar.com/news/what-is-aws-storage-gateway>

    </details>

150. Which AWS service is used to provide encryption for Amazon EBS?
    - A. AWS Certificate Manager
    - B. AWS Systems Manager
    - C. AWS KMS
    - D. AWS Config

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/kms/latest/developerguide/services-ebs.html>

    </details>

151. What does AWS Marketplace allow users to do? (Choose two.)
    - A. Sell unused Amazon EC2 Spot Instances.
    - B. Sell solutions to other AWS users.
    - C. Buy third-party software that runs on AWS.
    - D. Purchase AWS security and compliance documents.
    - E. Order AWS Snowball.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BC

    Explanation: <https://aws.amazon.com/marketplace>

    </details>

152. Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?
    - A. Ensuring network connectivity from AWS to the internet
    - B. Patching and fixing flaws within the AWS Cloud infrastructure
    - C. Ensuring the physical security of cloud data centers
    - D. Ensuring Amazon EBS volumes are backed up

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/blogs/security/the-aws-shared-responsibility-model-and-gdpr/>

    </details>

153. Why is AWS more economical than traditional data centers for applications with varying compute workloads?
    - A. Amazon Elastic Compute Cloud (Amazon EC2) costs are billed on a monthly basis.
    - B. Customers retain full administrative access to their Amazon EC2 instances.
    - C. Amazon EC2 instances can be launched on-demand when needed.
    - D. Customers can permanently run enough instances to handle peak workloads.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - The ability to launch instances on-demand when needed allows customers launch and terminate instances in response to a varying workload.
    - This is a more economical practice than purchasing enough on-premises servers to handle the peak load.

    </details>

154. Which AWS service would simplify migration of a database to AWS?
    - A. AWS Storage Gateway
    - B. AWS Database Migration Service (AWS DMS)
    - C. Amazon Elastic Compute Cloud (Amazon EC2)
    - D. Amazon AppStream 2.0

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/dms/>

    </details>

155. When designing a typical three-tier web application, which AWS services and/or features improve availability and reduce the impact failures? (Choose two.)
    - A. AWS Auto Scaling for Amazon EC2 instances
    - B. Amazon VPC subnet ACLs to check the health of a service
    - C. Distributed resources across multiple Availability Zones
    - D. AWS Server Migration Service (AWS SMS) to move Amazon EC2 instances into a different Region
    - E. Distributed resources across multiple AWS points of presence

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    Explanation: <https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf>

    </details>

156. A new service using AWS must be highly available. Yet, due to regulatory requirements, all of its Amazon EC2 instances must be located in a single geographic area. <br/> According to best practices, to meet these requirements, the EC2 instances must be placed in at least two:
    - A. AWS Regions
    - B. Availability Zones
    - C. subnets
    - D. placement groups

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    <https://aws.amazon.com/ec2/faqs/>

    </details>

157. A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. <br/> Which Amazon EC2 instance pricing option will meet these requirements?
    - A. Dedicated Hosts
    - B. Dedicated Instances
    - C. Spot Instances
    - D. Reserved Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/ec2/dedicated-hosts/>

    </details>

158. Under the AWS shared responsibility model, the customer manages which of the following? (Choose two.)
    - A. Decommissioning of physical storage devices
    - B. Security group and ACL configuration
    - C. Patch management of an Amazon RDS instance operating system
    - D. Controlling physical access to data centers
    - E. Patch management of an Amazon EC2 instance operating system

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BE

    Explanation: <https://www.whizlabs.com/blog/aws-security-shared-responsibility/>

    </details>

159. A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional. <br/> What is the best cloud architecture to address this consistently growing demand?
    - A. Run the application on a bigger EC2 instance size.
    - B. Switch to an EC2 instance family that better matches batch requirements.
    - C. Distribute the application across multiple EC2 instances and run the workload in parallel.
    - D. Run the application on a bare metal EC2 instance.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

160. An ecommerce company anticipates a huge increase in web traffic for two very popular upcoming shopping holidays. <br/> Which AWS service or feature can be configured to dynamically adjust resources to meet this change in demand?
    - A. AWS CloudTrail
    - B. Amazon EC2 Auto Scaling
    - C. Amazon Forecast
    - D. AWS Config

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/autoscaling/>

    </details>

161. An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously. <br/> Which AWS storage service should be used?
    - A. Amazon EBS
    - B. Amazon EFS
    - C. Amazon S3
    - D. AWS Artifact

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/efs/>

    </details>

162. A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS. <br/> Which security measures fall under the responsibility of AWS? (Choose two.)
    - A. Running a virus scan on EC2 instances
    - B. Protecting against IP spoofing and packet sniffing
    - C. Installing the latest security patches on the RDS instance
    - D. Encrypting communication between the EC2 instances and the Elastic Load Balancer
    - E. Configuring a security group and a network access control list (NACL) for EC2

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BC

    </details>

163. Which Amazon EC2 pricing model should be used to comply with per-core software license requirements?
    - A. Dedicated Hosts
    - B. On-Demand Instances
    - C. Spot Instances
    - D. Reserved Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/ec2/dedicated-hosts/pricing/>

    </details>

164. A company wants to use Amazon Elastic Compute Cloud (Amazon EC2) to deploy a global commercial application. The deployment solution should be built with the highest redundancy and fault tolerance. <br/> Based on this situation, the Amazon EC2 instances should be deployed:
    - A. in a single Availability Zone in one AWS Region
    - B. with multiple Elastic Network Interfaces belonging to different subnets
    - C. across multiple Availability Zones in one AWS Region
    - D. across multiple Availability Zones in two AWS Regions

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://jayendrapatil.com/aws-high-availability-fault-tolerance-architecture-certification/>

    </details>

165. An Amazon EC2 instance runs only when needed yet must remain active for the duration of the process. <br/> What is the most appropriate purchasing option?
    - A. Dedicated Instances
    - B. Spot Instances
    - C. On-Demand Instances
    - D. Reserved Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

166. Which of the following acts as a virtual firewall at the Amazon EC2 instance level to control traffic for one or more instances?
    - A. Access keys
    - B. Virtual private gateways
    - C. Security groups
    - D. Access Control Lists (ACL)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html>

    </details>

167. How can a company separate costs for network traffic, Amazon EC2, Amazon S3, and other AWS services by department?
    - A. Add department-specific tags to each resource
    - B. Create a separate VPC for each department
    - C. Create a separate AWS account for each department
    - D. Use AWS Organizations

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

168. A cloud practitioner has a data analysis workload that is infrequently executed and can be interrupted without harm. To optimize for cost, which Amazon EC2 purchasing option should be used?
    - A. On-Demand Instances
    - B. Reserved Instances
    - C. Spot Instances
    - D. Dedicated Hosts

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/ec2/pricing/>

    </details>

169. Which AWS managed service can be used to distribute traffic between one or more Amazon EC2 instances?
    - A. NAT gateway
    - B. Elastic Load Balancing
    - C. Amazon Athena
    - D. AWS PrivateLink

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    </details>

170. A user is planning to launch two additional Amazon EC2 instances to increase availability. <br/> Which action should the user take?
    - A. Launch the instances across multiple Availability Zones in a single AWS Region.
    - B. Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.
    - C. Launch the instances in multiple AWS Regions, but in the same Availability Zone.
    - D. Launch the instances as EC2 Spot Instances in the same AWS Region, but in different Availability Zones.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    </details>

171. Which Amazon EC2 pricing option is best suited for applications with short-term, spiky, or unpredictable workloads that cannot be interrupted?
    - A. Spot Instances
    - B. Dedicated Hosts
    - C. On-Demand Instances
    - D. Reserved Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

172. Which AWS service offers persistent storage for a file system?
    - A. Amazon S3
    - B. Amazon EC2 instance store
    - C. Amazon Elastic Block Store (Amazon EBS)
    - D. Amazon ElastiCache

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

173. A company is piloting a new customer-facing application on Amazon Elastic Compute Cloud (Amazon EC2) for one month. <br/> What pricing model is appropriate?
    - A. Reserved Instances
    - B. Spot Instances
    - C. On-Demand Instances
    - D. Dedicated Hosts

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/ec2/pricing/>

    </details>

174. Which are benefits of using Amazon RDS over Amazon EC2 when running relational databases on AWS? (Choose two.)
    - A. Automated backups
    - B. Schema management
    - C. Indexing of tables
    - D. Software patching
    - E. Extract, transform, and load (ETL) management

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AD

    Explanation: <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html>

    </details>

175. A cloud practitioner needs an Amazon EC2 instance to launch and run for 7 hours without interruptions. <br/> What is the most suitable and cost-effective option for this task?
    - A. On-Demand Instance
    - B. Reserved Instance
    - C. Dedicated Host
    - D. Spot Instance

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    </details>

176. Which pricing model would result in maximum Amazon Elastic Compute Cloud (Amazon EC2) savings for a database server that must be online for one year?
    - A. Spot Instance
    - B. On-Demand Instance
    - C. Partial Upfront Reserved Instance
    - D. No Upfront Reserved Instance

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html>

    </details>

177. A company has a MySQL database running on a single Amazon EC2 instance. The company now requires higher availability in the event of an outage. <br/> Which set of tasks would meet this requirement?
    - A. Add an Application Load Balancer in front of the EC2 instance
    - B. Configure EC2 Auto Recovery to move the instance to another Availability Zone
    - C. Migrate to Amazon RDS and enable Multi-AZ
    - D. Enable termination protection for the EC2 instance to avoid outages

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html>

    </details>

178. What are the advantages of deploying an application with Amazon EC2 instances in multiple Availability Zones? (Choose two.)
    - A. Preventing a single point of failure
    - B. Reducing the operational costs of the application
    - C. Allowing the application to serve cross-region users with low latency
    - D. Increasing the availability of the application
    - E. Increasing the load of the application

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AD

    Explanation: <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-increase-availability.html>

    </details>

179. A workload on AWS will run for the foreseeable future by using a consistent number of Amazon EC2 instances. <br/> What pricing model will minimize cost while ensuring that compute resources remain available?
    - A. Dedicated Hosts
    - B. On-Demand Instances
    - C. Spot Instances
    - D. Reserved Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html>

    </details>

180. Which AWS service allows customers to purchase unused Amazon EC2 capacity at an often discounted rate?
    - A. Reserved Instances
    - B. On-Demand Instances
    - C. Dedicated Instances
    - D. Spot Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/ec2/spot/>

    </details>

181. Which AWS services offer compute capabilities? (Choose two.)
    - A. Amazon EC2
    - B. Amazon S3
    - C. Amazon Elastic Block Store (Amazon EBS)
    - D. Amazon Cognito
    - E. AWS Lambda

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AE

    Explanation: <https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html>

    </details>

182. How should a web application be deployed to ensure high availability in the AWS Cloud?
    - A. Deploy multiple instances of the application in multiple Availability Zones.
    - B. Deploy multiple instances of the application in a single Availability Zone.
    - C. Deploy the application to a compute-optimized Amazon EC2 instance in a single Availability Zone.
    - D. Deploy the application in one Amazon EC2 instance in an Auto Scaling group.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://www.betsol.com/blog/how-to-make-high-availability-web-applications-on-amazon-web-services/>

    </details>

183. A company is running a self-managed Oracle database directly on Amazon EC2 for its steady-state database. The company wants to reduce compute costs. <br/> Which option should the company use to maximize savings over a 3-year term?
    - A. EC2 Dedicated Instances
    - B. EC2 Spot Instances
    - C. EC2 Reserved Instances
    - D. EC2 On-Demand Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/choosing-a-cloud-platform/>

    </details>

184. A company is expecting a short-term spike in internet traffic for its application. During the traffic increase, the application cannot be interrupted. The company also needs to minimize cost and maximize flexibility. <br/> Which Amazon EC2 instance type should the company use to meet these requirements?
    - A. On-Demand Instances
    - B. Spot Instances
    - C. Reserved Instances
    - D. Dedicated Hosts

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/ec2/faqs/>

    </details>

