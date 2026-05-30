// AWS CCP exam domains with keyword patterns
const DOMAIN_PATTERNS: { domain: string; keywords: RegExp }[] = [
  {
    domain: "Security & Compliance",
    keywords:
      /\b(security|iam|encrypt|firewall|compliance|shield|waf|guard ?duty|inspector|macie|kms|acm|certificate|mfa|authentication|authorization|access control|least privilege|shared responsibility|artifact|trusted advisor security|ddos|penetration|vulnerability|audit|cloudtrail|detective|secrets? manager|cognito|sso|identity|permission|policy|role|security group|nacl|network acl)\b/i,
  },
  {
    domain: "Billing & Pricing",
    keywords:
      /\b(pricing|cost|bill|budget|free tier|savings? plan|reserved instance|on.demand|spot instance|consolidated billing|cost explorer|cost allocation|tag|pricing model|pay.as.you.go|total cost|tco|calculator|pricing calculator|organizations|account|credits?|charge|invoice|marketplace pricing|cost management|cost optimization)\b/i,
  },
  {
    domain: "Cloud Concepts",
    keywords:
      /\b(cloud computing|well.architected|pillar|availability|reliability|scalability|elasticity|agility|high availability|fault toleran|disaster recovery|region|availability zone|edge location|global infrastructure|cloud adoption|migration|hybrid|multi.cloud|serverless concept|microservice|devops|ci.?cd|infrastructure as code|benefit|advantage|cloud value)\b/i,
  },
  {
    domain: "Technology",
    keywords:
      /\b(ec2|s3|lambda|rds|dynamodb|vpc|cloudfront|route.?53|elb|load balanc|auto.?scal|ebs|efs|glacier|sqs|sns|kinesis|redshift|athena|emr|glue|sage ?maker|ecs|eks|fargate|elastic beanstalk|lightsail|cloudformation|terraform|cdk|codepipeline|codebuild|codedeploy|codecommit|cloudwatch|x.ray|config|systems manager|opsworks|batch|step functions|api gateway|appflow|eventbridge|storage gateway|snowball|snowmobile|direct connect|transit gateway|database|compute|storage|network|container|deploy|instance|bucket|cluster|endpoint|ami|snapshot)\b/i,
  },
];

export function classifyDomain(questionText: string, optionsText: string): string {
  const combined = `${questionText} ${optionsText}`;
  // Score each domain by number of keyword matches
  let best = "Technology";
  let bestScore = 0;
  for (const { domain, keywords } of DOMAIN_PATTERNS) {
    const matches = combined.match(new RegExp(keywords, "gi"));
    const score = matches ? matches.length : 0;
    if (score > bestScore) {
      bestScore = score;
      best = domain;
    }
  }
  return best;
}
