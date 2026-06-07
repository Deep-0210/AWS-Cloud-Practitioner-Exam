# Topic 14: Architecture Ecosystem

1. Under the shared responsibility model, which of the following is the responsibility of AWS?
    - A. Client-side encryption.
    - B. Configuring infrastructure devices.
    - C. Server-side encryption.
    - D. Filtering traffic with Security Groups.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

2. In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)
    - A. Disk disposal.
    - B. Controlling physical access to compute resources.
    - C. Patching the Network infrastructure.
    - D. Setting password complexity rules.
    - E. Configuring network access rules.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>

3. Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?
    - A. The ability of a system to recover gracefully from failure.
    - B. The efficient use of computing resources to meet requirements.
    - C. The ability to monitor systems and improve supporting processes and procedures.
    - D. The ability to manage datacenter operations more efficiently.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

4. Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)
    - A. Patch management controls.
    - B. Database controls.
    - C. Awareness & Training.
    - D. Environmental controls.
    - E. Physical controls.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>

5. Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?
    - A. Using AWS Trusted Advisor to find underutilized resources.
    - B. Using AWS CloudTrail to record user activities.
    - C. Using AWS CloudFormation to manage infrastructure as code.
    - D. Deploying an application in multiple Availability Zones.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

6. Which of the following is the responsibility of AWS according to the AWS Shared Responsibility Model?
    - A. Securing regions and edge locations.
    - B. Performing auditing tasks.
    - C. Monitoring AWS resources usage.
    - D. Securing access to AWS resources.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

7. According to the AWS shared responsibility model, what are the controls that customers fully inherit from AWS? (Choose TWO)
    - A. Awareness and Training.
    - B. Communications controls.
    - C. Data center security controls.
    - D. Environmental controls.
    - E. Resource Configuration Management.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, D
    </details>

8. Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?
    - A. Operational Excellence.
    - B. Security.
    - C. Performance Efficiency.
    - D. Reliability.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

9. According to the AWS shared responsibility model what is the sole responsibility of AWS?
    - A. Application security.
    - B. Edge location management.
    - C. Patch management.
    - D. Client-side data.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

10. Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)
    - A. Multiple Availability Zones.
    - B. Performance efficiency.
    - C. Security.
    - D. Encryption usage.
    - E. High availability.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>

11. Under the shared responsibility model, which of the following is a shared control between a customer and AWS?
    - A. Physical controls.
    - B. Patch management.
    - C. Zone security.
    - D. Data center auditing.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

12. What is the AWS customer responsible for according to the AWS shared responsibility model?
    - A. Physical access controls.
    - B. Data encryption.
    - C. Secure disposal of storage devices.
    - D. Environmental risk management.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

13. According to the AWS shared responsibility model who is responsible for configuration management?
    - A. It is solely the responsibility of the customer.
    - B. It is solely the responsibility of AWS.
    - C. It is shared between AWS and the customer.
    - D. It is not part of the AWS shared responsibility model.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

14. Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)
    - A. Ensuring that application data is encrypted at rest.
    - B. Ensuring that AWS NTP servers are set to the correct time.
    - C. Ensuring that users have received security training in the use of AWS services.
    - D. Ensuring that access to data centers is restricted.
    - E. Ensuring that hardware is disposed of properly.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>

15. Under the shared responsibility model, which of the following is the customer responsible for?
    - A. Ensuring that disk drives are wiped after use.
    - B. Ensuring that firmware is updated on hardware devices.
    - C. Ensuring that data is encrypted at rest.
    - D. Ensuring that network cables are category six or higher.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

16. Under the shared responsibility model which of the following areas are the customer’s responsibility? (Select TWO)
    - A. Firmware upgrades of network infrastructure.
    - B. Patching of operating systems.
    - C. Patching of the underlying hypervisor.
    - D. Physical security of data centers.
    - E. Configuration of the security group.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>

17. What is the AWS customer responsible for according to the AWS shared responsibility model?
    - A. Physical access controls
    - B. Data encryption
    - C. Secure disposal of storage devices
    - D. Environmental risk management

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    </details>

18. Which of the following is a component of the shared responsibility model managed entirely by AWS?
    - A. Patching operating system software
    - B. Encrypting data
    - C. Enforcing multi-factor authentication
    - D. Auditing physical data center assets

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - Of course, Amazon is responsible for auditing physical data center assets and resources since it is the property of Amazon Inc. Customers have no access to physical sites, hence they are not responsible for maintaining physical data center assets.

    </details>

19. Under the shared responsibility model, which of the following is a shared control between a customer and AWS?
    - A. Physical controls
    - B. Patch management
    - C. Zone security
    - D. Data center auditing

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:

    - Shared Controls Controls which apply to both the infrastructure layer and customer layers, but in completely separate contexts or perspectives.
    - In a shared control, AWS provides the requirements for the infrastructure and the customer must provide their own control implementation within their use of AWS services.
    - Examples include:
    - Patch Management AWS is responsible for patching and fixing flaws within the infrastructure, but customers are responsible for patching their guest OS and applications.
    - Configuration Management AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications.
    - Awareness & Training AWS trains AWS employees, but a customer must train their own employees.
    - Customer Specific Controls which are solely the responsibility of the customer based on the application they are deploying within AWS services.
    - Service and Communications Protection or Zone Security which may require a customer to route or zone data within specific security environments.

    Reference: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

20. Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO.)
    - A. Ensuring that application data is encrypted at rest
    - B. Ensuring that AWS NTP servers are set to the correct time
    - C. Ensuring that users have received security training in the use of AWS services
    - D. Ensuring that access to data centers is restricted
    - E. Ensuring that hardware is disposed of properly

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

21. According to the AWS shared responsibility model, what is the sole responsibility of AWS?
    - A. Application security
    - B. Edge location management
    - C. Patch management
    - D. Client-side data

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:

    - Client-side data, application security is the sole responsibility of the customer.
    - Patch management is a shared responsibility. That leaves us with edge location management and since this out of the control of the customer, AWS is the one responsible for it.

    Reference: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

22. Under the AWS shared responsibility model, customer responsibilities include which one of the following?
    - A. Securing the hardware, software, facilities, and networks that run all products and services.
    - B. Providing certificates, reports, and other documentation directly to AWS customers under NDA.
    - C. Configuring the operating system, network, and firewall.
    - D. Obtaining industry certifications and independent third-party attestations.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

23. Which of the following is an AWS Well-Architected Framework design principle related to reliability?
    - A. Deployment to a single Availability Zone
    - B. Ability to recover from failure
    - C. Design for cost optimization
    - D. Perform operations as code

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/>

    </details>

24. Which of the following is an important architectural principle when designing cloud applications?
    - A. Store data and backups in the same region.
    - B. Design tightly coupled system components.
    - C. Avoid multi-threading.
    - D. Design for failure

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - There are six design principles for operational excellence in the cloud:
      - Perform operations as code
      - Annotate documentation
      - Make frequent, small, reversible changes
      - Refine operations procedures frequently
      - Anticipate failure
      - Learn from all operational failures

    Reference: <https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/>

    </details>

25. Which principles are used to architect applications for reliability on the AWS Cloud? (Choose two.)
    - A. Design for automated failure recovery
    - B. Use multiple Availability Zones
    - C. Manage changes via documented processes
    - D. Test for moderate demand to ensure reliability
    - E. Backup recovery to an on-premises environment

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AB

    Explanation: <https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/>

    </details>

26. Under the shared responsibility model; which of the following areas are the customer's responsibility? (Choose two.)
    - A. Firmware upgrades of network infrastructure
    - B. Patching of operating systems
    - C. Patching of the underlying hypervisor
    - D. Physical security of data centers
    - E. Configuration of the security group

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BE

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

27. According to the AWS shared responsibility model, who is responsible for configuration management?
    - A. It is solely the responsibility of the customer.
    - B. It is solely the responsibility of AWS.
    - C. It is shared between AWS and the customer.
    - D. It is not part of the AWS shared responsibility model.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications.

    Reference: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

28. Under the AWS shared responsibility model, which of the following is an example of security in the AWS Cloud?
    - A. Managing edge locations
    - B. Physical security
    - C. Firewall configuration
    - D. Global infrastructure

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

29. Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)
    - A. Multiple Availability Zones
    - B. Performance efficiency
    - C. Security
    - D. Encryption usage
    - E. High availability

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BC

    Explanation: <https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf>

    </details>

30. Within the AWS shared responsibility model, who is responsible for security and compliance?
    - A. The customer is responsible.
    - B. AWS is responsible.
    - C. AWS and the customer share responsibility.
    - D. AWS shares responsibility with the relevant governing body.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - Security and Compliance is a shared responsibility between AWS and the customer.
    - This shared model can help relieve the customer's operational burden as AWS operates, manages and controls the components from the host operating system and virtualization layer down to the physical security of the facilities in which the service operates.

    Reference: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

31. What is one of the customer's responsibilities according to the AWS shared responsibility model?
    - A. Virtualization infrastructure
    - B. Network infrastructure
    - C. Application security
    - D. Physical security of hardware

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://cloudacademy.com/blog/aws-shared-responsibility-model-security/>

    </details>

32. Which of the following is AWS's responsibility under the AWS shared responsibility model?
    - A. Configuring third-party applications
    - B. Maintaining physical hardware
    - C. Securing application access and data
    - D. Managing custom Amazon Machine Images (AMIs)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

33. A user deploys an Amazon RDS DB instance in multiple Availability Zones. <br/> This strategy involves which pillar of the AWS Well-Architected Framework?
    - A. Performance efficiency
    - B. Reliability
    - C. Cost optimization
    - D. Security

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    <https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/>

    </details>

34. Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?
    - A. Security
    - B. Operational excellence
    - C. Performance efficiency
    - D. Cost optimization

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf>

    </details>

35. What can be used to automate and manage secure, well-architected, multi-account AWS environments?
    - A. AWS shared responsibility model
    - B. AWS Control Tower
    - C. AWS Security Hub
    - D. AWS Well-Architected Tool

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - Control Tower automates the process of setting up a new baseline multi-account AWS environment that is secure, well-architected, and ready to use.
    - Control Tower incorporates the knowledge that AWS Professional Service has gained over the course of thousands of successful customer engagements.

    Reference: <https://aws.amazon.com/blogs/aws/aws-control-tower-set-up-govern-a-multi-account-aws-environment/>

    </details>

36. Under the AWS shared responsibility model, what are the customer's responsibilities? (Choose two.)
    - A. Physical and environmental security
    - B. Physical network devices including firewalls
    - C. Storage device decommissioning
    - D. Security of data in transit
    - E. Data integrity authentication

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: DE

    </details>

37. Performing operations as code is a design principle that supports which pillar of the AWS Well-Architected Framework?
    - A. Performance efficiency
    - B. Operational excellence
    - C. Reliability
    - D. Security

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/>

    </details>

38. Which design principle is achieved by following the reliability pillar of the AWS Well-Architected Framework?
    - A. Vertical scaling
    - B. Manual failure recovery
    - C. Testing recovery procedures
    - D. Changing infrastructure manually

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/>

    </details>

39. Under the AWS shared responsibility model, which of the following is the customer's responsibility?
    - A. Patching guest OS and applications
    - B. Patching and fixing flaws in the infrastructure
    - C. Physical and environmental controls
    - D. Configuration of AWS infrastructure devices

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    </details>

40. Which AWS Cloud design principles can help increase reliability? (Choose two.)
    - A. Using monolithic architecture
    - B. Measuring overall efficiency
    - C. Testing recovery procedures
    - D. Adopting a consumption model
    - E. Automatically recovering from failure

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: CE

    Explanation: <https://wa.aws.amazon.com/wat.pillar.reliability.en.html>

    </details>

