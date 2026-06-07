# Topic 2: IAM

1. Which of the below options are related to the reliability of AWS? (Choose TWO)
    - A. Applying the principle of least privilege to all AWS resources.
    - B. Automatically provisioning new resources to meet demand.
    - C. All AWS services are considered Global Services, and this design helps customers serve their international users.
    - D. Providing compensation to customers if issues occur.
    - E. Ability to recover quickly from failures.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>

2. An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?
    - A. IAM roles.
    - B. IAM users.
    - C. IAM user groups.
    - D. AWS Organizations.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

3. What does the "Principle of Least Privilege" refer to?
    - A. You should grant your users only the permissions they need when they need them and nothing more.
    - B. All IAM users should have at least the necessary permissions to access the core AWS services.
    - C. All trusted IAM users should have access to any AWS service in the respective AWS account.
    - D. IAM users should not be granted any permissions; to keep your account safe.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

4. Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)
    - A. Amazon VPC.
    - B. Amazon DynamoDB.
    - C. Amazon Elastic MapReduce.
    - D. AWS IAM.
    - E. Amazon Elastic Compute Cloud.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>

5. As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?
    - A. AWS Identity and Access Management (IAM) user.
    - B. Infrastructure Event Management (IEM) engineer.
    - C. AWS Consulting Partners.
    - D. Technical Account Manager (TAM).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

6. Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?
    - A. Access keys.
    - B. Secret token.
    - C. UserID.
    - D. User name and password.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

7. Select TWO examples of the AWS shared controls.
    - A. Patch Management.
    - B. IAM Management.
    - C. VPC Management.
    - D. Configuration Management.
    - E. Data Center operations.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, D
    </details>

8. What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?
    - A. Encrypted keys.
    - B. Email verification.
    - C. AWS KMS.
    - D. AWS MFA.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

9. Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?
    - A. Instance Password.
    - B. Key pairs.
    - C. Access Keys.
    - D. MFA.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

10. Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?
    - A. Amazon Cognito.
    - B. AWS IAM.
    - C. Amazon Aurora.
    - D. AWS WAF.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

11. What are the default security credentials that are required to access the AWS management console for an IAM user account?
    - A. MFA.
    - B. Security tokens.
    - C. A user name and password.
    - D. Access keys.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

12. An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?
    - A. AWS Identity and Access Management.
    - B. Amazon RDS.
    - C. Network Access Control Lists.
    - D. Amazon EMR.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

13. Which of the below is a best-practice when building applications on AWS?
    - A. Strengthen physical security by applying the principle of least privilege.
    - B. Ensure that the application runs on hardware from trusted vendors.
    - C. Use IAM policies to maintain performance.
    - D. Decouple the components of the application so that they run independently.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

14. Which statement is correct with regards to AWS service limits? (Choose TWO)
    - A. You can contact AWS support to increase the service limits.
    - B. Each IAM user has the same service limit.
    - C. There are no service limits on AWS.
    - D. You can use the AWS Trusted Advisor to monitor your service limits.
    - E. The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, D
    </details>

15. Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)
    - A. AWS CloudHSM.
    - B. Security Groups.
    - C. AWS Batch.
    - D. AWS IAM.
    - E. Network Access Control Lists (Network ACLs).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>

16. A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?
    - A. IAM Principals.
    - B. AWS Service Control Policies (SCPs).
    - C. IAM policies.
    - D. AWS Fargate.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

17. Which of the following is used to control network traffic in AWS? (Choose TWO)
    - A. Network Access Control Lists (NACLs).
    - B. Key Pairs.
    - C. Access Keys.
    - D. IAM Policies.
    - E. Security Groups.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>

18. A developer needs to set up an SSL security certificate for a client's eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)
    - A. Amazon Route 53.
    - B. AWS ACM.
    - C. AWS Directory Service.
    - D. AWS Identity & Access Management.
    - E. AWS Data Pipeline.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>

19. Which AWS Service is used to manage user permissions?
    - A. Security Groups.
    - B. Amazon ECS.
    - C. AWS IAM.
    - D. AWS Support.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

20. What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?
    - A. Key Pair.
    - B. Access Keys.
    - C. SDK.
    - D. MFA.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

21. Which design principles relate to performance efficiency in AWS? (Choose TWO)
    - A. Build multi-region architectures to better serve global customers.
    - B. Apply security at all layers.
    - C. Implement strong Identity and Access controls.
    - D. Use serverless architectures.
    - E. Enable audit logging.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, D
    </details>

22. A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?
    - A. Least Privilege.
    - B. Pilot Light.
    - C. Fault Tolerance.
    - D. Multi-threading.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

23. What features does AWS offer to help protect your data in the Cloud? (Choose TWO)
    - A. Access control.
    - B. Physical MFA devices.
    - C. Data encryption.
    - D. Unlimited storage.
    - E. Load balancing.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>

24. Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)
    - A. AWS CLI.
    - B. AWS Security Groups.
    - C. AWS SDKs.
    - D. AWS Network Access Control Lists.
    - E. AWS CodeCommit.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>

25. Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)
    - A. AWS Resource Groups.
    - B. IAM Policies.
    - C. IAM Roles.
    - D. IAM Users.
    - E. AWS Organizations.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, D
    </details>

26. Which IAM entity can best be used to grant temporary access to your AWS resources?
    - A. IAM Users.
    - B. Key Pair.
    - C. IAM Roles.
    - D. IAM Groups.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

27. A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?
    - A. Restrict any API call made through SDKs or CLI.
    - B. Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department.
    - C. Require Multi-Factor Authentication (MFA) for all IAM User access.
    - D. Set up two login passwords.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

28. Which of the following is a type of MFA device that customers can use to protect their AWS resources?
    - A. AWS CloudHSM.
    - B. U2F Security Key.
    - C. AWS Access Keys.
    - D. AWS Key Pair.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

29. A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?
    - A. Create an IAM role and attach a policy with Amazon DynamoDB access permissions.
    - B. Create an IAM role and attach a policy with Administrator access permissions.
    - C. Create an IAM user and attach a policy with Amazon DynamoDB access permissions.
    - D. Create an IAM user and attach a policy with Administrator access permissions.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

30. When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?
    - A. Generate new IAM access keys every time you delegate permissions.
    - B. Store the required AWS credentials directly within the application code.
    - C. Use temporary security credentials (IAM roles) instead of long-term access keys.
    - D. Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

31. Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)
    - A. Amazon Connect.
    - B. AWS CLI.
    - C. AWS Identity and Access Management (IAM).
    - D. Amazon SNS.
    - E. Amazon Virtual Private Cloud.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>

32. What should you do if you see resources, which you don’t remember creating, in the AWS Management Console? (Choose TWO)
    - A. Stop all running services and open an investigation.
    - B. Give your root account password to AWS Support so that they can assist in troubleshooting and securing the account.
    - C. Check the AWS CloudTrail logs and delete all IAM users that have access to your resources.
    - D. Open an investigation and delete any potentially compromised IAM users.
    - E. Change your AWS root account password and the passwords of any IAM users.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>

33. A company is developing a mobile application and wants to allow users to use their Amazon, Apple, Facebook, or Google identities to authenticate to the application. Which AWS Service should the company use for this purpose?
    - A. Amazon GuardDuty.
    - B. Amazon Personalize.
    - C. Amazon Cognito.
    - D. AWS IAM.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

34. What are some key benefits of using AWS CloudFormation? (Choose TWO)
    - A. It helps AWS customers deploy their applications without worrying about the underlying infrastructure.
    - B. It applies advanced IAM security features automatically.
    - C. It automates the provisioning and updating of your infrastructure in a safe and controlled manner.
    - D. It allows you to model your entire infrastructure in just a text file.
    - E. It compiles and builds application code in a timely manner.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, D
    </details>

35. Which of the following strategies helps protect your AWS root account?
    - A. Delete root user access keys if you do not need them.
    - B. Apply MFA for the root account and use it for all of your work.
    - C. Access the root account only from your personal Mobile Phone.
    - D. Only share your AWS account password or access keys with trusted persons.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

36. You have just set up your AWS environment and have created six IAM user accounts for the DevOps team. What is the AWS recommendation when granting permissions to these IAM accounts?
    - A. Attach a separate IAM policy for each individual account.
    - B. Apply the Principle of Least Privilege.
    - C. For security purposes, you should not grant any permission to the DevOps team.
    - D. Create six different IAM passwords.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

37. Which of the following has the greatest impact on cost? (Choose TWO)
    - A. Compute charges.
    - B. The number of services used.
    - C. Data Transfer In charges.
    - D. Data Transfer Out charges.
    - E. The number of IAM roles provisioned.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, D
    </details>

38. Which of the following services provide real-time auditing for compliance and vulnerabilities? (Choose TWO)
    - A. AWS Config.
    - B. Amazon Redshift.
    - C. Amazon MQ.
    - D. AWS Trusted Advisor.
    - E. Amazon Cognito.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, D
    </details>

39. For Amazon RDS databases, what does AWS perform on your behalf? (Choose TWO)
    - A. Database setup.
    - B. Network traffic protection.
    - C. Management of the operating system.
    - D. Access management.
    - E. Management of firewall rules.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>

40. What can you use to assign permissions directly to an IAM user?
    - A. IAM Identity.
    - B. IAM Group.
    - C. IAM Role.
    - D. IAM Policy.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

41. Which of the following services allows you to install and run custom relational database software?
    - A. Amazon EC2.
    - B. Amazon Cognito.
    - C. Amazon RDS.
    - D. Amazon Inspector.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

42. A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?
    - A. AWS IAM.
    - B. AWS Outposts.
    - C. AWS Federation.
    - D. Amazon Redshift.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

43. Which AWS service can be used to route end users to the nearest AWS Region to reduce latency?
    - A. Amazon Cognito.
    - B. AWS Systems Manager.
    - C. AWS Cloud9.
    - D. Amazon Route 53.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

44. Which feature enables users to sign into their AWS accounts with their existing corporate credentials?
    - A. Federation.
    - B. Access keys.
    - C. IAM Permissions.
    - D. WAF rules.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

45. Which of the following are part of the seven design principles for security in the cloud? (Choose TWO)
    - A. Use manual monitoring techniques to protect your AWS resources.
    - B. Use IAM roles to grant temporary access instead of long-term credentials.
    - C. Scale horizontally to protect from failures.
    - D. Enable real-time traceability.
    - E. Never store sensitive data in the cloud.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>

46. What are the main differences between an IAM user and an IAM role in AWS? (Choose TWO)
    - A. An IAM user is uniquely associated with only one person, however a role is intended to be assumable by anyone who needs it.
    - B. An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it.
    - C. IAM users are more cost effective than IAM roles.
    - D. A role is uniquely associated with only one person, however an IAM user is intended to be assumable by anyone who needs it.
    - E. An IAM user has temporary credentials associated with it, however a role has permanent credentials associated with it.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>

47. Which of the following requires an access key ID and a secret access key to get long-lived programmatic access to AWS resources? (Choose TWO)
    - A. IAM group.
    - B. IAM user.
    - C. IAM role.
    - D. AWS account root user.
    - E. TAM.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>

48. The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure? (Choose TWO)
    - A. Download all the attached policies in a safe place.
    - B. Delete all IAM accounts and recreate them.
    - C. Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired.
    - D. Rotate all access keys.
    - E. Change the email address and password of the root user account and enable MFA.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>

49. Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?
    - A. A public and private key-pair.
    - B. Amazon Inspector.
    - C. AWS Identity and Access Management (IAM) policies.
    - D. Security Groups.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

50. How would an AWS customer easily apply common access controls to a large set of users?
    - A. Apply an IAM policy to an IAM group.
    - B. Apply an IAM policy to an IAM role.
    - C. Apply the same IAM policy to all IAM users with access to the same workload.
    - D. Apply an IAM policy to an Amazon Cognito user pool.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

51. Which AWS service allows users to identify the changes made to a resource over time?
    - A. Amazon Inspector.
    - B. AWS Config.
    - C. AWS Service Catalog.
    - D. AWS IAM.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

52. Access keys in AWS Identity and Access Management (IM1) are used to:
    - A. Log in to the AWS Management Console.
    - B. Make programmatic calls to AWS from AWS APIs.
    - C. Log in to Amazon EC2 instances.
    - D. Authenticate to AWS CodeCommit repositories.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

53. Which AWS IAM feature allows developers to access AWS services through the AWS CLI?
    - A. API keys.
    - B. Access keys.
    - C. User names/Passwords.
    - D. SSH keys.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

54. Which service should a customer use to consolidate and centrally manage multiple AWS accounts?
    - A. AWS IAM.
    - B. AWS Organizations.
    - C. AWS Schema Conversion Tool.
    - D. AWS Config.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

55. Which of the following will enhance the security of access to the AWS Management Console’? (Select TWO)
    - A. AWS Secrets Manager.
    - B. AWS Certificate Manager.
    - C. AWS Multi-Factor Authentication (AWS MFA).
    - D. Security groups.
    - E. Password policies.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, E
    </details>

56. Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?
    - A. IAM group.
    - B. IAM user.
    - C. IAM role.
    - D. IAM policy.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

57. Which of the following security measures protect access to an AWS account? (Select TWO)
    - A. Enable AWS CloudTrail.
    - B. Grant least privilege access to IAM users.
    - C. Create one IAM user and share with many developers and users.
    - D. Enable Amazon CloudFront.
    - E. Activate multi-factor authentication (MFA) for privileged users.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>

58. Which service’s PRIMARY purpose is software version control?
    - A. Amazon CodeStar.
    - B. AWS Command Line Interface (AWS CLI).
    - C. Amazon Cognito.
    - D. AWS CodeCommit.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

59. How can a customer increase security to AWS account logons? (Select TWO)
    - A. Configure AWS Certificate Manager
    - B. Enable Multi-Factor Authentication (MFA)
    - C. Use Amazon Cognito to manage access
    - D. Configure a strong password policy
    - E. Enable AWS Organizations

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>

60. AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO)
    - A. Implementing Amazon Rekognition.
    - B. Using AWS Shield-protected resources.
    - C. Blocking access with Security Groups.
    - D. Using Multi-Factor Authentication (MFA).
    - E. Enforcing password strength and expiration.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>

61. A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?
    - A. Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.
    - B. Run AWS Trusted Advisor and review the findings.
    - C. Open the AWS IAM console and check the inbound rule filters for open access.
    - D. In AWS Config, create a custom rule that invokes an AWS Lambda function to review firewall rules for inbound access.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

62. Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?
    - A. A public and private key-pair.
    - B. Amazon Inspector.
    - C. AWS Identity and Access Management (IAM) policies.
    - D. Security Groups.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

63. Which of the following tasks is the responsibility of AWS?
    - A. Encrypting client-side data.
    - B. Configuring AWS Identity and Access Management (IAM) roles.
    - C. Securing the Amazon EC2 hypervisor.
    - D. Setting user password policies.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

64. Which of the following can limit Amazon Storage Service (Amazon S3) bucket access to specific users?
    - A. A public and private key-pair
    - B. Amazon Inspector
    - C. AWS Identity and Access Management (IAM) policies
    - D. Security Groups

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/blogs/security/how-to-restrict-amazon-s3-bucket-access-to-a-specific-iam-role/>

    </details>

65. AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO.)
    - A. Implementing Amazon Rekognition
    - B. Using AWS Shield-protected resources
    - C. Blocking access with Security Groups
    - D. Using Multi-Factor Authentication (MFA)
    - E. Enforcing password strength and expiration

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: DE

    </details>

66. Which AWS IAM feature allows developers to access AWS services through the AWS CLI?
    - A. API keys
    - B. Access keys
    - C. User names/Passwords
    - D. SSH keys

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html>

    </details>

67. Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?
    - A. IAM group
    - B. IAM user
    - C. IAM role
    - D. IAM policy

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - Access keys are long-term credentials for an IAM user or the AWS account root user.
    - You can use access keys to sign programmatic requests to the AWS CLI or API (directly or using the AWS SDK).
    - For more information, see Signing AWS API Requests in the Amazon Web Services General Reference.

    </details>

68. How would an AWS customer easily apply common access controls to a large set of users?
    - A. Apply an IAM policy to an IAM group.
    - B. Apply an IAM policy to an IAM role.
    - C. Apply the same IAM policy to all IAM users with access to the same workload.
    - D. Apply an IAM policy to an Amazon Cognito user pool.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - Instead of defining permissions for individual IAM users, it's usually more convenient to create groups that relate to job functions (administrators, developers, accounting, etc.).
    - Next, define the relevant permissions for each group. Finally, assign IAM users to those groups. All the users in an IAM group inherit the permissions assigned to the group.
    - That way, you can make changes for everyone in a group in just one place. As people move around in your company, you can
    simply change what IAM group their IAM user belongs to.

    Reference: <https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html>

    </details>

69. Which of the following security measures protect access to an AWS account? (Select TWO.)
    - A. Enable AWS CloudTrail.
    - B. Grant least privilege access to IAM users.
    - C. Create one IAM user and share with many developers and users.
    - D. Enable Amazon CloudFront.
    - E. Activate multi-factor authentication (MFA) for privileged users.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BE

    Explanation:
    - If you decided to create service accounts (that is, accounts used for programmatic access by applications running outside of the AWS environment) and generate access keys for them, you should create a dedicated service account for each use case.
    - This will allow you to restrict the associated policy to only the permissions needed for the particular use case, limiting the blast radius if the credentials are compromised.
    - For example, if a monitoring tool and a release management tool both require access to your AWS environment, create two separate service accounts with two separate policies that define the minimum set of permissions for each tool.

    Reference: <https://aws.amazon.com/blogs/security/guidelines-for-protecting-your-aws-account-while-using-programmatic-access/>

    </details>

70. Which of the following tasks is the responsibility of AWS?
    - A. Encrypting client-side data
    - B. Configuring AWS Identity and Access Management (IAM) roles
    - C. Securing the Amazon EC2 hypervisor
    - D. Setting user password policies

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - In EC2, the AWS IaaS offering, everything from the hypervisor layer down is AWS's responsibility.
    - A customer's poorly coded applications, misconfigured operating systems, or insecure firewall settings will not affect the hypervisor, it will only affect the customer's virtual machines running on that hypervisor.

    Reference: <https://www.mindpointgroup.com/blog/the-aws-shared-responsibility-model-part-1-security-in>- the-cloud/

    </details>

71. Which of the following is entirely the responsibility of AWS, according to the AWS shared responsibility model?
    - A. Patching of the guest operating system
    - B. Security awareness and training
    - C. Physical and environmental controls
    - D. Development of an IAM password policy

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

72. Which AWS IAM feature is used to associate a set of permissions with multiple users?
    - A. Multi-factor authentication
    - B. Groups
    - C. Password policies
    - D. Access keys

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:

    - An IAM group is a collection of IAM users. You can use groups to specify permissions for a collection of users, which can make those permissions easier to manage for those users.
    - For example, you could have a group called Admins and give that group the types of permissions that administrators typically need.

    Reference: <https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html>

    </details>

73. Which of the following can a customer use to enable single sign-on (SSO) to the AWS Console?
    - A. Amazon Connect
    - B. AWS Directory Service
    - C. Amazon Pinpoint
    - D. Amazon Rekognition

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:

    - Single sign-on only works when used on a computer that is joined to the AWS Directory Service directory.
    - It cannot be used on computers that are not joined to the directory.

    Reference: <https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_single_sign_on.html>

    </details>

74. As part of the AWS shared responsibility model, which of the following operational controls do users fully inherit from AWS?
    - A. Security management of data center
    - B. Patch management
    - C. Configuration management
    - D. User and access management

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

75. Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:
    - A. restricted access.
    - B. as-needed access.
    - C. least privilege access.
    - D. token access.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - When you create IAM policies, follow the standard security advice of granting least privilege, or granting only the permissions required to perform a task.
    - Determine what users (and roles) need to do and then craft policies that allow them to perform only those tasks.

    Reference: <https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html>

    </details>

76. Under the AWS shared responsibility model, customers are responsible for which aspects of security in the cloud? (Choose two.)
    - A. Visualization management
    - B. Hardware management
    - C. Encryption management
    - D. Facilities management
    - E. Firewall management

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: CE

    Explanation:
    - With the basic Cloud infrastructure secured and maintained by AWS, the responsibility for what goes into the cloud falls on you. This covers both client and server side encryption and network traffic protection, security of the operating system, network, and firewall configuration, followed by application security and identity and access management.
    - Firewall configuration remains the responsibility of the end user, which integrates at the platform and application management level. For example, RDS utilizes security groups, which you would be responsible for configuring and implementing.

    Reference: <https://cloudacademy.com/blog/aws-shared-responsibility-model-security/>

    </details>

77. What does it mean to grant least privilege to AWS IAM users?
    - A. It is granting permissions to a single user only.
    - B. It is granting permissions using AWS IAM policies only.
    - C. It is granting AdministratorAccess policy permissions to trustworthy users.
    - D. It is granting only the permissions required to perform a given task.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - When you create IAM policies, follow the standard security advice of granting least privilege, or granting only the permissions required to perform a task.
    - Determine what users (and roles) need to do and then craft policies that allow them to perform only those tasks.

    Reference: <https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege>

    </details>

78. How can a customer increase security to AWS account logons? (Choose two.)
    - A. Configure AWS Certificate Manager
    - B. Enable Multi-Factor Authentication (MFA)
    - C. Use Amazon Cognito to manage access
    - D. Configure a strong password policy
    - E. Enable AWS Organizations

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BD

    Explanation:
    - Your root account should always be protected by Multi-Factor Authentication (MFA).
    - This additional layer of security helps protect against unauthorized logins to your account by requiring two factors: something you know (a password) and something you have (for example, an MFA device).
    - AWS supports virtual and hardware MFA devices and U2F security keys.
    - Cognito can be used as an Identity Provider (IdP), where it stores and maintains users and credentials securely for your applications, or it can be integrated with OpenID Connect, SAML, and other popular web identity providers like Amazon.com.
    - Using Amazon Cognito, you can generate temporary access credentials for your clients to access AWS services, eliminating the need to store long-term credentials in client applications.

    Reference: <https://aws.amazon.com/blogs/security/guidelines-for-protecting-your-aws-account-while-using-programmatic-access/>

    </details>

79. Which of the following is the responsibility of AWS?
    - A. Setting up AWS Identity and Access Management (IAM) users and groups
    - B. Physically destroying storage media at end of life
    - C. Patching guest operating systems
    - D. Configuring security settings on Amazon EC2 instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - Media storage devices used to store customer data are classified by AWS as Critical and treated accordingly, as high impact, throughout their life-cycles.
    - AWS has exacting standards on how to install, service, and eventually destroy the devices when they are no longer useful. - When a storage device has reached the end of its useful life, AWS decommissions media using techniques detailed in NIST 800-88.
    - Media that stored customer data is not removed from AWS control until it has been securely decommissioned.

    Reference: <https://aws.amazon.com/compliance/data-center/controls/>

    </details>

80. What tasks should a customer perform when that customer suspects an AWS account has been compromised? (Choose two.)
    - A. Rotate passwords and access keys.
    - B. Remove MFA tokens.
    - C. Move resources to a different AWS Region.
    - D. Delete AWS CloudTrail Resources.
    - E. Contact AWS Support.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AE

    Explanation: <https://aws.amazon.com/premiumsupport/knowledge-center/potential-account-compromise/>

    </details>

81. What is an AWS Identity and Access Management (IAM) role?
    - A. A user associated with an AWS resource
    - B. A group associated with an AWS resource
    - C. An entity that defines a set of permissions for use with an AWS resource
    - D. An authentication credential associated with a multi-factor authentication (MFA) token

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely.
    - Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.

    Reference: <https://aws.amazon.com/iam/>

    </details>

82. Under the AWS shared responsibility model, AWS is responsible for which security-related task?
    - A. Lifecycle management of IAM credentials
    - B. Physical security of global infrastructure
    - C. Encryption of Amazon EBS volumes
    - D. Firewall configuration

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://cloudacademy.com/blog/aws-shared-responsibility-model-security/>

    </details>

83. How can a company isolate the costs of production and non-production workloads on AWS?
    - A. Create Identity and Access Management (IAM) roles for production and non-production workloads.
    - B. Use different accounts for production and non-production expenses.
    - C. Use Amazon EC2 for non-production workloads and other services for production workloads.
    - D. Use Amazon CloudWatch to monitor the use of services.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/answers/account-management/aws-multi-account-billing-strategy/>

    </details>

84. Which AWS service allows users to identify the changes made to a resource over time?
    - A. Amazon Inspector
    - B. AWS Config
    - C. AWS Service Catalog
    - D. AWS IAM

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://docs.aws.amazon.com/config/latest/developerguide/view-manage-resource.html>

    </details>

85. How would a system administrator add an additional layer of login security to a user's AWS Management Console?
    - A. Use AWS Cloud Directory
    - B. Audit AWS Identity and Access Management (IAM) roles
    - C. Enable Multi-Factor Authentication
    - D. Enable AWS CloudTrail

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/iam/details/mfa/>

    </details>

86. Which service can identify the user that made the API call when an Amazon Elastic Compute Cloud (Amazon EC2) instance is terminated?
    - A. Amazon CloudWatch
    - B. AWS CloudTrail
    - C. AWS X-Ray
    - D. AWS Identity and Access Management (AWS IAM)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html>

    </details>

87. Where can a customer find information about prohibited actions on AWS infrastructure?
    - A. AWS Trusted Advisor
    - B. AWS Identity and Access Management (IAM)
    - C. AWS Billing Console
    - D. AWS Acceptable Use Policy

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/aup/>

    </details>

88. Which of the following are recommended practices for managing IAM users? (Choose two.)
    - A. Require IAM users to change their passwords after a specified period of time
    - B. Prevent IAM users from reusing previous passwords
    - C. Recommend that the same password be used on AWS and other sites
    - D. Require IAM users to store their passwords in raw text
    - E. Disable multi-factor authentication (MFA) for IAM users

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AB

    Explanation: <https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html>

    </details>

89. Which of the following will enhance the security of access to the AWS Management Console? (Choose two.)
    - A. AWS Secrets Manager
    - B. AWS Certificate Manager
    - C. AWS Multi-Factor Authentication (AWS MFA)
    - D. Security groups
    - E. Password policies

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: CE

    Explanation: <https://aws.amazon.com/blogs/security/guidelines-for-protecting-your-aws-account-while-using-programmatic-access/>

    </details>

90. Which functions can users perform using AWS KMS?
    - A. Create and manage AWS access keys for the AWS account root user
    - B. Create and manage AWS access keys for an AWS account IAM user
    - C. Create and manage keys for encryption and decryption of data
    - D. Create and manage keys for multi-factor authentication

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/kms/latest/developerguide/control-access.html>

    </details>

91. Which actions represent best practices for using AWS IAM? (Choose two.)
    - A. Configure a strong password policy
    - B. Share the security credentials among users of AWS accounts who are in the same Region
    - C. Use access keys to log in to the AWS Management Console
    - D. Rotate access keys on a regular basis
    - E. Avoid using IAM roles to delegate permissions

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AD

    Explanation: <https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html>

    </details>

92. Which service can be used to monitor and receive alerts for AWS account root user AWS Management Console sign-in events?
    - A. Amazon CloudWatch
    - B. AWS Config
    - C. AWS Trusted Advisor
    - D. AWS IAM

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/blogs/mt/monitor-and-notify-on-aws-account-root-user-activity/>

    </details>

93. Which tasks are the customer's responsibility in the AWS shared responsibility model? (Choose two.)
    - A. Infrastructure facilities access management
    - B. Cloud infrastructure hardware lifecycle management
    - C. Configuration management of user's applications
    - D. Networking infrastructure protection
    - E. Security groups configuration

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: CE

    Explanation: <https://cloudacademy.com/blog/aws-shared-responsibility-model-security/>

    </details>

94. Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?
    - A. AWS Direct Connect
    - B. Amazon Connect
    - C. AWS Identity and Access Management (IAM)
    - D. AWS Firewall Manager

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - <https://docs.aws.amazon.com/IAM/latest/UserGuide/console_controlling-access.html>
    - <https://aws.amazon.com/iam/>

    </details>

95. A user needs to generate a report that outlines the status of key security checks in an AWS account. The report must include:
    <br/> (The status of Amazon S3 bucket permissions, Whether multi-factor authentication is enabled for the AWS account root user, If any security groups are configured to allow unrestricted access.) <br/> Where can all this information be found in one location?
    - A. Amazon QuickSight dashboard
    - B. AWS CloudTrail trails
    - C. AWS Trusted Advisor report
    - D. IAM credential report

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    <https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/> #Security

    </details>

96. Which of the following describes a security best practice that can be implemented using AWS IAM?
    - A. Disable AWS Management Console access for all users
    - B. Generate secret keys for every IAM user
    - C. Grant permissions to users who are required to perform a given task only
    - D. Store AWS credentials within Amazon EC2 instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://cloudcheckr.com/cloud-security/top-5-iam-best-practices/>

    </details>

97. Which of the following allows an application running on an Amazon EC2 instance to securely write data to an Amazon S3 bucket without using long term credentials?
    - A. Amazon Cognito
    - B. AWS Shield
    - C. AWS IAM role
    - D. AWS IAM user access key

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

98. Which of the following tasks can only be performed after signing in with AWS account root user credentials? (Choose two.)
    - A. Closing an AWS account
    - B. Creating a new IAM policy
    - C. Changing AWS Support plans
    - D. Attaching a role to an Amazon EC2 instance
    - E. Generating access keys for IAM users

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    </details>

99. Under the AWS shared responsibility model, which of the following is a responsibility of AWS?
    - A. Enabling server-side encryption for objects stored in S3
    - B. Applying AWS IAM security policies
    - C. Patching the operating system on an Amazon EC2 instance
    - D. Applying updates to the hypervisor

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/?ref=wellarchitected>

    </details>

100. A developer has been hired by a large company and needs AWS credentials. <br/> Which are security best practices that should be followed? (Choose two.)
    - A. Grant the developer access to only the AWS resources needed to perform the job.
    - B. Share the AWS account root user credentials with the developer.
    - C. Add the developer to the administrator's group in AWS IAM.
    - D. Configure a password policy that ensures the developer's password cannot be changed.
    - E. Ensure the account password policy requires a minimum length.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AE

    </details>

101. A company wants to ensure that AWS Management Console users are meeting password complexity requirements. <br/> How can the company configure password complexity?
    - A. Using an AWS IAM user policy
    - B. Using an AWS Organizations service control policy (SCP)
    - C. Using an AWS IAM account password policy
    - D. Using an AWS Security Hub managed insight

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html>

    </details>

102. A company wants to provide one of its employees with access to Amazon RDS. The company also wants to limit the interaction to only the AWS CLI and AWS software development kits (SDKs). <br/> Which combination of actions should the company take to meet these requirements while following the principles of least privilege? (Choose two.)
    - A. Create an IAM user and provide AWS Management Console access only.
    - B. Create an IAM user and provide programmatic access only.
    - C. Create an IAM role and provide AWS Management Console access only.
    - D. Create an IAM policy with administrator access and attach it to the IAM user.
    - E. Create an IAM policy with Amazon RDS access and attach it to the IAM user.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BE

    </details>

103. An external auditor has requested that a company provide a list of all its IAM users, including the status of users' credentials and access keys. <br/> What it the SIMPLEST way to provide this information?
    - A. Create an IAM user account for the auditor, granting the auditor administrator permissions.
    - B. Take a screenshot of each user's page in the AWS Management Console, then provide the screenshots to the auditor.
    - C. Download the IAM credential report, then provide the report to the auditor.
    - D. Download the AWS Trusted Advisor report, then provide the report to the auditor.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html>

    </details>

104. The AWS IAM best practice for granting least privilege is to:
    - A. apply an IAM policy to an IAM group and limit the size of the group.
    - B. require multi-factor authentication (MFA) for all IAM users.
    - C. require each IAM user who has different permissions to have multiple passwords.
    - D. apply an IAM policy only to IAM users who require it.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://kirkpatrickprice.com/blog/best-practices-for-privilege-management-in-aws/>

    </details>

