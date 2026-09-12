export const profile = {
  name: 'Aakash Sai Raj',
  role: 'Software Engineer',
  location: 'India',
  linkedin: 'https://www.linkedin.com/in/aakashsairaj/',
  github: 'https://github.com/AakashSaiRaj',
}

export const experience = [
  {
    period: '2025 — Present',
    logo: 'amazon',
    company: 'Amazon · Kindle',
    title: 'Software Application Engineer III',
    copy: 'Working in the Kindle organization, contributing to software that supports a product used by readers around the world.',
    tags: ['Amazon', 'Kindle'],
  },
  {
    period: '2023 — 2025',
    logo: 'aws',
    company: 'Amazon Web Services',
    title: 'Cloud Engineer · Deployment',
    copy: 'Started my career in AWS Deployment, collaborating across continents and building a foundation in DevOps, Kubernetes, containers, and AWS services.',
    tags: ['DevOps', 'Kubernetes', 'AWS'],
  },
]

export const education = [
  {
    period: '2019 — 2023',
    school: 'GITAM Deemed University',
    detail: 'B.Tech, Computer Science & Engineering · 9.82 / 10.00',
    medal: true,
    meta: 'Presidential Gold Medalist',
    metaNote: 'Class of 2023',
  },
  {
    period: '2019',
    school: 'Sri Chaitanya',
    detail: 'Higher Secondary · Mathematics, Physics & Science · 9.79 / 10.00',
    meta: 'Visakhapatnam, India',
  },
  {
    period: '2017',
    school: 'Marvel School',
    detail: 'High School · 9.80 / 10.00',
    meta: 'Visakhapatnam, India',
  },
]

export const skillGroups = [
  { number: '01', title: 'Software engineering', skills: ['TypeScript & React', 'Next.js & Node.js', 'Java & Spring Boot', 'Python & Go', 'REST & GraphQL APIs', 'Postgres & Redis', 'Microservices & event-driven'] },
  { number: '02', title: 'Solutions architecture', skills: ['System design', 'Distributed systems', 'Scalability & high availability', 'Well-Architected Framework', 'AWS core services', 'Lambda & serverless', 'VPC & networking', 'Cost optimization'] },
  { number: '03', title: 'Containers & orchestration', skills: ['Kubernetes', 'Docker', 'Helm', 'Autoscaling', 'Service mesh', 'Operators & CRDs'] },
  { number: '04', title: 'Infrastructure & delivery', skills: ['Terraform', 'AWS CDK', 'CloudFormation', 'GitOps', 'Deployment pipelines', 'Canary & blue-green', 'Automated rollback'] },
  { number: '05', title: 'Observability & reliability', skills: ['Metrics & alerting', 'Structured logging', 'Distributed tracing', 'SLOs & error budgets', 'Incident response', 'Chaos & load testing'] },
  { number: '06', title: 'AI engineering', skills: ['LLM applications', 'RAG pipelines', 'Agentic workflows', 'Prompt engineering', 'Evals & guardrails', 'Vector search'] },
]

export const projects = [
  {
    type: 'Selected work',
    title: 'Projects, with context.',
    copy: 'This is ready for the work that best represents your craft — a system you shaped, a technical challenge you solved, or something you made simply because it mattered.',
    action: 'Add a project',
  },
  {
    type: 'Open source',
    title: 'Build in public.',
    copy: 'A space for repositories, experiments, and technical writing. Link each item to a GitHub repo or a deeper case study when you are ready.',
    action: 'View GitHub',
  },
]

export const certifications = [
  { title: 'AWS Certified Solutions Architect – Professional', issuer: 'Amazon Web Services', type: 'AWS certification', image: './badges/aws-solutions-architect-professional.png', url: 'https://www.credly.com/badges/e6f8cf71-12ef-4cd0-97cb-0de5578e8e1f/public_url' },
  { title: 'AWS Certified Generative AI Developer – Professional', issuer: 'Amazon Web Services', type: 'AWS certification', image: './badges/genai-professional.png', url: 'https://www.credly.com/badges/72c64d70-c222-4b42-b6a0-619e98f906a7' },
  { title: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', type: 'AWS certification', image: './badges/aws-solutions-architect.png', url: 'https://www.credly.com/badges/5fcb6e51-7635-4d5e-b9d9-a604ddc97c12/linked_in_profile' },
  { title: 'CKA: Certified Kubernetes Administrator', issuer: 'Cloud Native Computing Foundation', type: 'Kubernetes certification', image: './badges/cka.png', url: 'https://www.credly.com/badges/a44e8027-ec13-40aa-a4f7-5ae8987a444e/public_url' },
  { title: 'CKAD: Certified Kubernetes Application Developer', issuer: 'Cloud Native Computing Foundation', type: 'Kubernetes certification', image: './badges/ckad.png', url: 'https://www.credly.com/badges/fbb6badd-bbee-44aa-a183-a408379da454/public_url' },
  { title: 'KCNA: Kubernetes and Cloud Native Associate', issuer: 'Cloud Native Computing Foundation', type: 'Kubernetes certification', image: './badges/kcna.png', url: 'https://www.credly.com/badges/3c375c44-dbbc-46c5-8e6b-dcee6cb77cad' },
  { title: 'AWS Knowledge: Amazon EKS', issuer: 'Amazon Web Services', type: 'AWS training badge', image: './badges/aws-eks.png', url: 'https://www.credly.com/badges/20f48ba0-82fc-410b-9b37-21e18edf0dc2/public_url' },
  { title: 'AWS Knowledge: Serverless', issuer: 'Amazon Web Services', type: 'AWS training badge', image: './badges/aws-serverless.png', url: 'https://www.credly.com/badges/bb07c25b-4c89-4ec4-8848-d7160d96789a' },
  { title: 'AWS Knowledge: Compute', issuer: 'Amazon Web Services', type: 'AWS training badge', image: './badges/aws-compute.png', url: 'https://www.credly.com/badges/37c64357-aa4d-489b-8935-ccff60b92ab4' },
  { title: 'AWS Partner: Generative AI Essentials', issuer: 'Amazon Web Services', type: 'AWS training badge', image: './badges/aws-genai-essentials.png', url: 'https://www.credly.com/badges/6ea39088-fb43-4ff4-88c5-785305d27528' },
  { title: 'HashiCorp Certified: Terraform Associate (004)', issuer: 'HashiCorp', type: 'Infrastructure certification', image: './badges/terraform.png', url: 'https://www.credly.com/badges/1c258567-5912-44f0-ab90-de2d2c49162c/public_url' },
  { title: 'Claude Certified Architect – Foundations', issuer: 'Anthropic', type: 'AI certification', url: 'https://verify.skilljar.com/c/se38t3bnntfh' },
  { title: 'Most Valuable Player Award', issuer: 'Credly', type: 'Recognition', image: './badges/mvp.png', url: 'https://www.credly.com/badges/e33c7c9c-0609-494a-a97e-4a3a2b03db99' },
  { title: 'AWS Agentic AI Demonstrated', issuer: 'Amazon Web Services', type: 'AWS microcredential', image: 'https://images.credly.com/size/340x340/images/6f40bf38-1725-40d8-99a2-f6bb1bafec0e/blob', url: 'https://www.credly.com/badges/da43081d-cccb-404d-b5a8-550435a59dc5/public_url' },
  { title: 'AWS Serverless Demonstrated', issuer: 'Amazon Web Services', type: 'AWS microcredential', image: 'https://images.credly.com/size/340x340/images/b3885091-25bc-42d0-8989-34cca82f3056/blob', url: 'https://www.credly.com/badges/1403ae65-f0dc-492c-a900-6cf0cadf47cc/public_url' },
]
