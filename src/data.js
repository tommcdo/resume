export default {

  name: 'Tom McDonald',

  contact: {
    city: 'Windsor, ON',
    phone: '(519) 567-8941',
    email: 'tommcdo@gmail.com',
  },

  objective: 'Experienced software engineer with a passion for mentoring others and helping to improve team standards and practices.',

  experience: [
    {
      commpany: 'Rocket Mortgage Canada',
      location: 'Windsor, ON',
      title: 'Senior Software Developer II',
      date: 'October 2022 - Present',
      highlights: [
        'Worked in .NET and Angular on AWS (ECS, EKS, S3 + CloudFront)',
        'Created internal tools to assist with on-call responsibilities',
        'Led efforts to adopt an architecture style more suited to business and team size.',
        'Mentored junior developers in best practices and coding standards.',
        'Published libraries to improve developer experience and reduce boilerplate code.',
      ]
    },
    {
      commpany: 'Rocket Companies',
      location: 'Detroit, MI',
      title: 'Senior Software Engineer',
      date: 'September 2019 - October 2022',
      highlights: [
        'Worked in .NET and Angular on AWS (ECS, S3 + CloudFront)',
        'Developed applications to service the enterprise messaging platform used across the company.',
        'Built tools to help on-prem messaging tenants transition to AWS cloud.',
        'Created systems and libraries to support multi-AZ failover for enterprise Kafka consumers.',
      ]
    },
    {
      commpany: 'Amazon',
      location: 'Detroit, MI',
      title: 'Software Development Engineer II',
      date: 'August 2014 - July 2019',
      highlights: [
        'Worked in Java/Spring Boot on AWS (in-house infrastructure tooling over EC2)',
        'Maintained components and platforms used by teams across the organization.',
        'Built a data pipeline using DynamoDB Streams to track user preference updates in the data warehouse.',
        'Retro-fitted a legacy Perl Mason website to implement a multi-backend protocol for website rendering.',
      ]
    },
    {
      commpany: 'Progressive Software',
      location: 'Windsor, ON',
      title: 'Software Developer',
      date: 'August 2012 - August 2014',
      highlights: [
        'Worked in PHP/Kohana and jQuery UI on AWS (EC2)',
        'Integrated a front-end data table with a back-end API to allow for real-time data updates.',
      ]
    },
  ],

  education: [
    {
      school: 'University of Windsor',
      location: 'Windsor, ON',
      title: 'B. Computer Science',
      date: 'September 2006 - April 2011',
    }
  ],

  lists: [
    {
      title: 'Skills',
      items: [
        'Creative problem solving.',
        'Mentoring and team leadership.',
        'Written and verbal communication.',
      ],
    },
    {
      title: 'Technologies',
      items: [
        'DynamoDB, EC2, S3, SQS, SNS, Lambda, CloudWatch.',
        'Docker, CircleCI, Terraform, Kubernetes.',
        '.NET, EntityFramework, Moq, NUnit, FluentAssertions.',
        'Splunk, Grafana, InfluxDB.',
        'Spring Boot, Mockito, JUnit, AssertJ.',
        'SaaS, Microservices, Containers.',
        'GNU/Linux, Git, Vim.',
        'Angular, React, Node.js, npm.'
      ],
    },
    {
      title: 'Programming Languages',
      items: [
        'C#, Java, PHP.',
        'JavaScript, TypeScript, CSS, HTML.',
        'Python, Perl, Shell.',
        'XML, JSON, YAML.',
      ],
    },
  ],

};
