export const projects = [
  {
    slug: 'cloud-resume',
    title: 'Cloud Resume Challenge',
    summary: 'Designed and deployed a serverless AWS application with persistent data, infrastructure as code, and automated deployment.',
    built: 'Static frontend delivery through S3 and CloudFront, with API Gateway, Lambda, and DynamoDB powering a persistent visitor counter.',
    demonstrates: 'Cloud architecture, infrastructure as code, deployment automation, API integration, and end to end ownership.',
    focus: 'Cloud infrastructure',
    technologies: ['AWS', 'Lambda', 'DynamoDB', 'CloudFront', 'CloudFormation', 'GitHub Actions'],
    repo: 'https://github.com/ericnbello/serverless',
    live: 'https://cloud-resume.ericnbello.com',
    diagram: 'cloud'
  },
  {
    slug: 'active-directory-lab',
    title: 'Active Directory and Identity Lab',
    summary: 'Built and administered a virtualized Windows domain environment for identity, network services, policy management, and support workflows.',
    built: 'Windows Server environment with Active Directory Domain Services, DNS, DHCP, organizational units, security groups, and Group Policy.',
    demonstrates: 'Windows administration, identity management, networking fundamentals, access control, and structured troubleshooting.',
    focus: 'Infrastructure and identity',
    technologies: ['Windows Server', 'Active Directory', 'Group Policy', 'DNS', 'DHCP', 'VMware'],
    diagram: 'identity'
  },
  {
    slug: 'weather-dashboard',
    title: 'AWS Weather Application',
    summary: 'Built a cloud hosted Python application that retrieves live API data, processes structured responses, and presents forecast trends.',
    built: 'Python and Django application integrating the OpenWeather API, interactive Plotly visualizations, and AWS based deployment.',
    demonstrates: 'Python development, REST API integration, JSON data handling, application deployment, and cloud based delivery.',
    focus: 'Cloud application',
    technologies: ['Python', 'Django', 'REST API', 'Plotly', 'AWS', 'S3'],
    repo: 'https://github.com/ericnbello/weather-dashboard',
    live: 'https://d3lgvgrrop0yu.cloudfront.net/',
    diagram: 'weather'
  }
] as const;
