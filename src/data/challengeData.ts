export interface AboutCard {
  number: string;
  title: string;
  description: string;
}

export interface LearningCategory {
  id: string;
  number: string;
  title: string;
  iconName: 'compass' | 'target' | 'briefcase' | 'users' | 'mail' | 'phone';
  topics: string[];
  linkedPhaseNumber: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  dayRange: string;
  topics: string[];
}

export interface ApproachItem {
  number: string;
  title: string;
  description: string;
}

export interface AudienceItem {
  title: string;
  description: string;
  iconName: 'sprout' | 'graduation' | 'laptop' | 'trending';
}

export const ABOUT_CARDS: AboutCard[] = [
  {
    number: '01',
    title: 'Learn',
    description:
      'Understand the foundations of business development, sales, marketing, lead generation, and client acquisition.',
  },
  {
    number: '02',
    title: 'Practice',
    description:
      'Work on practical assignments, prospect research, outreach messages, sales pitches, and real-world scenarios.',
  },
  {
    number: '03',
    title: 'Grow',
    description:
      'Develop professional communication, client acquisition, and business development skills that can help you build a career.',
  },
];

export const LEARNING_CATEGORIES: LearningCategory[] = [
  {
    id: 'fundamentals',
    number: '01',
    title: 'Business Development Fundamentals',
    iconName: 'compass',
    linkedPhaseNumber: '01',
    topics: [
      'Understanding Business Development',
      'Sales vs Marketing vs BD',
      'Understanding Services and Business Models',
      'Ideal Customer Profiles',
      'Target Market Selection',
    ],
  },
  {
    id: 'lead-gen',
    number: '02',
    title: 'Lead Generation & Client Hunting',
    iconName: 'target',
    linkedPhaseNumber: '02',
    topics: [
      'Finding Potential Clients',
      'Identifying Decision Makers',
      'Market Research',
      'Lead Qualification',
      'Building a Prospect Database',
    ],
  },
  {
    id: 'freelancing',
    number: '03',
    title: 'Fiverr & Upwork',
    iconName: 'briefcase',
    linkedPhaseNumber: '03',
    topics: [
      'Understanding Freelancing Marketplaces',
      'Fiverr Profile and Gig Optimization',
      'Upwork Profile Optimization',
      'Writing Winning Proposals',
      'Client Communication',
    ],
  },
  {
    id: 'linkedin',
    number: '04',
    title: 'LinkedIn & Personal Branding',
    iconName: 'users',
    linkedPhaseNumber: '04',
    topics: [
      'LinkedIn Profile Optimization',
      'Finding Business Owners',
      'LinkedIn Prospecting',
      'Connection and Outreach Strategies',
      'Building Professional Authority',
    ],
  },
  {
    id: 'email',
    number: '05',
    title: 'Email Marketing & Cold Outreach',
    iconName: 'mail',
    linkedPhaseNumber: '05',
    topics: [
      'Cold Email Fundamentals',
      'Finding Business Contacts',
      'Writing Effective Emails',
      'Follow-up Sequences',
      'Email Campaign Tracking',
    ],
  },
  {
    id: 'sales',
    number: '06',
    title: 'Cold Calling & Sales',
    iconName: 'phone',
    linkedPhaseNumber: '06',
    topics: [
      'Cold Calling Fundamentals',
      'Opening Sales Conversations',
      'Handling Objections',
      'Understanding Client Pain Points',
      'Sales Pitching and Closing',
    ],
  },
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: '01',
    title: 'FOUNDATION',
    dayRange: 'Days 01 to 04',
    topics: [
      'Introduction to Business Development',
      'Understanding Business Models',
      'Services and Value Propositions',
      'Ideal Customer Profiles',
    ],
  },
  {
    phase: '02',
    title: 'LEAD GENERATION',
    dayRange: 'Days 05 to 08',
    topics: [
      'Lead Generation Fundamentals',
      'Target Market Research',
      'Finding Decision Makers',
      'Prospect Research and CRM',
    ],
  },
  {
    phase: '03',
    title: 'FREELANCING PLATFORMS',
    dayRange: 'Days 09 to 13',
    topics: [
      'Fiverr Fundamentals',
      'Fiverr Profile and Gig Optimization',
      'Fiverr SEO and Positioning',
      'Upwork Fundamentals',
      'Upwork Proposals and Client Communication',
    ],
  },
  {
    phase: '04',
    title: 'LINKEDIN & PERSONAL BRANDING',
    dayRange: 'Days 14 to 18',
    topics: [
      'LinkedIn Profile Optimization',
      'LinkedIn Prospecting',
      'Connection Requests and Outreach',
      'Personal Branding and Content',
      'Advanced Lead Research',
    ],
  },
  {
    phase: '05',
    title: 'EMAIL & COLD CALLING',
    dayRange: 'Days 19 to 23',
    topics: [
      'Email Marketing Fundamentals',
      'Finding Business Contacts',
      'Writing Cold Emails',
      'Follow-up Strategies',
      'Cold Calling and Objection Handling',
    ],
  },
  {
    phase: '06',
    title: 'SALES & EXECUTION',
    dayRange: 'Days 24 to 27',
    topics: [
      'Client Discovery',
      'Sales Pitching and Closing',
      'Complete BD Strategy',
      'Final Practical Challenge',
    ],
  },
];

export const APPROACH_ITEMS: ApproachItem[] = [
  {
    number: '01',
    title: 'Daily Learning',
    description: 'Understand a new concept and business development strategy.',
  },
  {
    number: '02',
    title: 'Practical Assignments',
    description:
      'Apply what you learn through research, writing, prospecting, and sales exercises.',
  },
  {
    number: '03',
    title: 'Real-World Scenarios',
    description:
      'Understand how business developers approach potential clients and identify opportunities.',
  },
  {
    number: '04',
    title: 'Skill Development',
    description:
      'Improve your communication, confidence, research, and sales abilities.',
  },
];

export const AUDIENCE_ITEMS: AudienceItem[] = [
  {
    title: 'Beginners',
    description: 'Individuals who want to enter the business development field.',
    iconName: 'sprout',
  },
  {
    title: 'Students',
    description:
      'Students who want to develop valuable professional and communication skills.',
    iconName: 'graduation',
  },
  {
    title: 'Freelancers',
    description:
      'Freelancers who want to find more clients and expand their business.',
    iconName: 'laptop',
  },
  {
    title: 'Aspiring Business Developers',
    description:
      'Individuals who want to build a career in client acquisition and sales.',
    iconName: 'trending',
  },
];

export const OPPORTUNITY_HIGHLIGHTS: string[] = [
  'Showcase Your Skills',
  'Demonstrate Your Potential',
  'Explore Collaboration Opportunities',
];
