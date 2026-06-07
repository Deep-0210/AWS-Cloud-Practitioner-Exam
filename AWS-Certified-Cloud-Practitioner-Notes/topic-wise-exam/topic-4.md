# Topic 4: Scaling and Load Balancing

1. In order to implement best practices when dealing with a “Single Point of Failure,” you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)
    - A. ELB.
    - B. Auto Scaling.
    - C. Amazon Athen.
    - D. ECR.
    - E. Amazon EC2.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>

2. What does the AWS Health Dashboard provide? (Choose TWO)
    - A. Detailed troubleshooting guidance to address AWS events impacting your resources.
    - B. Health checks for Auto Scaling instances.
    - C. Recommendations for Cost Optimization.
    - D. A dashboard detailing vulnerabilities in your applications.
    - E. Personalized view of AWS service health.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>

3. Which of the following activities may help reduce your AWS monthly costs?
    - A. Enabling Amazon EC2 Auto Scaling for all of your workloads.
    - B. Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests.
    - C. Removing all of your Cost Allocation Tags.
    - D. Deploying your AWS resources across multiple Availability Zones.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

4. What are the advantages of using Auto Scaling Groups for EC2 instances?
    - A. Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance.
    - B. Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.
    - C. Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users.
    - D. Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

5. Which of the below options is a best practice for making your application on AWS highly available?
    - A. Deploy the application to at least two Availability Zones.
    - B. Use Elastic Load Balancing (ELB) across multiple AWS Regions.
    - C. Deploy the application code on at least two servers in the same Availability Zone.
    - D. Rewrite the application code to handle all incoming requests.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

6. Which AWS Service allows customers to create a template that programmatically defines policies and configurations of all AWS resources as code and so that the same template can be reused among multiple projects?
    - A. AWS CloudFormation.
    - B. AWS Config.
    - C. AWS CloudTrail.
    - D. AWS Auto Scaling.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

7. A company experiences fluctuations in traffic patterns to their e-commerce website when running flash sales. What service can help the company dynamically match the required compute capacity to handle spikes in traffic during flash sales?
    - A. AWS Auto Scaling.
    - B. Amazon Elastic Compute Cloud.
    - C. Amazon Elastic File System.
    - D. Amazon ElastiCache.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

8. Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?
    - A. Auto Scaling.
    - B. ELB.
    - C. Amazon Route53.
    - D. Amazon Elastic Container Service.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

9. Which services can be used across hybrid AWS Cloud architectures? (Select TWO)
    - A. Amazon Route 53.
    - B. Virtual Private Gateway.
    - C. Classic Load Balancer.
    - D. Auto Scaling.
    - E. Amazon CloudWatch default metrics.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>

10. What technology enables compute capacity to adjust as loads change?
    - A. Load balancing.
    - B. Automatic failover.
    - C. Round robin.
    - D. Auto Scaling.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

11. Which load balancer types are available with Elastic Load Balancing (ELB)? (Choose two.)
    - A. Public load balancers with AWS Application Auto Scaling capabilities
    - B. F5 Big-IP and Citrix NetScaler load balancers
    - C. Classic Load Balancers
    - D. Cross-zone load balancers with public and private IPs
    - E. Application Load Balancers

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: CE

    Explanation:
    - Elastic Load Balancing supports the following types of load balancers: Application Load Balancers, Network Load Balancers, and Classic Load Balancers.
    - Amazon ECS services can use either type of load balancer.
    - Application Load Balancers are used to route HTTP/HTTPS (or Layer 7) traffic.
    - Network Load Balancers and Classic Load Balancers are used to route TCP (or Layer 4) traffic.

    Reference: <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/load-balancer-types.html>

    </details>

12. What is one of the core principles to follow when designing a highly available application in the AWS Cloud?
    - A. Design using a serverless architecture
    - B. Assume that all components within an application can fail
    - C. Design AWS Auto Scaling into every application
    - D. Design all components using open-source code

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    </details>

