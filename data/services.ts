export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  targets: string[];
  offers: string[];
  skills: string[];
  pricing: { label: string; range: string }[];
  whyText: string;
  href: string;
}

export const services: Service[] = [
  {
    slug: 'website-development',
    title: 'Website Development',
    shortTitle: 'Web Development',
    tagline: 'Modern, fast websites that turn visitors into customers',
    description:
      'Many small businesses still have outdated websites or no website at all. We build responsive, high-performance websites that help local businesses establish credibility and generate leads around the clock.',
    icon: '🌐',
    color: 'from-emerald-400 to-teal-500',
    gradient: 'from-emerald-500/20 to-teal-500/5',
    targets: ['Plumbers', 'Electricians', 'Restaurants', 'Dentists', 'Real Estate Agents', 'Cleaning Companies'],
    offers: ['Business Website', 'Landing Pages', 'Booking Systems', 'Website Redesign'],
    skills: ['React', 'Next.js', 'WordPress'],
    pricing: [
      { label: 'Per Website', range: '£500–£3,000' },
      { label: 'Monthly Maintenance', range: '£50–£300' },
    ],
    whyText:
      'Your website is your digital storefront. We build fast, mobile-optimised sites that rank well on Google and give your customers a seamless experience from the first click.',
    href: '/services/website-development',
  },
  {
    slug: 'google-business-profile',
    title: 'Google Business Profile Optimization',
    shortTitle: 'Google Optimisation',
    tagline: 'Get found on Google Maps and local search instantly',
    description:
      'Many businesses rank poorly on Google Maps despite having a physical presence. We optimise your Google Business Profile to improve visibility, attract more local customers, and drive foot traffic.',
    icon: '📍',
    color: 'from-blue-400 to-cyan-500',
    gradient: 'from-blue-500/20 to-cyan-500/5',
    targets: ['Local Shops', 'Restaurants', 'Clinics', 'Service Providers'],
    offers: ['Profile Optimization', 'Better Descriptions', 'Image Optimization', 'Review Management', 'Local SEO'],
    skills: ['Google My Business', 'Local SEO', 'Content Strategy'],
    pricing: [
      { label: 'Setup', range: '£100–£500' },
      { label: 'Ongoing Monthly', range: '£100–£1,000/month' },
    ],
    whyText:
      'Google Business Profile is often the first thing customers see. We ensure your profile is fully optimised with accurate info, great photos, and a steady stream of positive reviews.',
    href: '/services/google-business-profile',
  },
  {
    slug: 'local-seo',
    title: 'Local SEO',
    shortTitle: 'Local SEO',
    tagline: 'Help more local customers find you on Google',
    description:
      'One of the easiest services to sell through cold calling. Business owners understand: "I can help you get more calls from Google." We optimise your local presence to dominate search results in your area.',
    icon: '🔍',
    color: 'from-amber-400 to-orange-500',
    gradient: 'from-amber-500/20 to-orange-500/5',
    targets: ['Small Businesses', 'Law Firms', 'Clinics', 'Home Service Companies'],
    offers: ['Local Keyword Optimization', 'Citations', 'Google Business Profile Optimization', 'Review Strategy'],
    skills: ['Local SEO', 'Keyword Research', 'Citation Building', 'Analytics'],
    pricing: [
      { label: 'Monthly Retainer', range: '£300–£2,000/month' },
    ],
    whyText:
      'Local SEO puts your business in front of people actively searching for your services nearby. We help you rank in the local map pack and organic results.',
    href: '/services/local-seo',
  },
  {
    slug: 'ai-chatbot',
    title: 'AI Chatbot for Websites',
    shortTitle: 'AI Chatbot',
    tagline: 'Never miss a lead with 24/7 AI-powered conversations',
    description:
      'Very trendy right now and highly effective. We deploy intelligent chatbots on your website that handle FAQs, collect leads, book appointments, and qualify prospects while you sleep.',
    icon: '🤖',
    color: 'from-purple-400 to-pink-500',
    gradient: 'from-purple-500/20 to-pink-500/5',
    targets: ['Law Firms', 'Clinics', 'Real Estate Agencies', 'Home Service Companies'],
    offers: ['24/7 Website Chatbot', 'FAQ Answering', 'Lead Collection', 'Appointment Booking'],
    skills: ['AI/ML', 'Natural Language Processing', 'Web Integration'],
    pricing: [
      { label: 'Setup Fee', range: '£500–£1,500' },
      { label: 'Monthly Subscription', range: '£100–£500' },
    ],
    whyText:
      'AI chatbots work around the clock, capturing leads and answering questions instantly. They pay for themselves by never letting a potential customer slip away.',
    href: '/services/ai-chatbot',
  },
  {
    slug: 'appointment-booking',
    title: 'Appointment Booking System',
    shortTitle: 'Booking System',
    tagline: 'Streamline your bookings and eliminate no-shows',
    description:
      'Many businesses still manage appointments manually through phone calls and spreadsheets. We build online booking systems with automated reminders that save time and reduce cancellations.',
    icon: '📅',
    color: 'from-sky-400 to-indigo-500',
    gradient: 'from-sky-500/20 to-indigo-500/5',
    targets: ['Dentists', 'Clinics', 'Salons', 'Consultants'],
    offers: ['Online Booking', 'SMS/Email Reminders', 'Calendar Integration', 'Automated Scheduling'],
    skills: ['React', 'Node.js', 'Calendar APIs', 'Twilio'],
    pricing: [
      { label: 'Setup', range: '£300–£2,000' },
      { label: 'Monthly Support', range: '£50–£200' },
    ],
    whyText:
      'An online booking system reduces admin work, eliminates double-booking, and makes it easy for customers to schedule appointments at any time.',
    href: '/services/appointment-booking',
  },
  {
    slug: 'social-media-content',
    title: 'Social Media Content + AI Content',
    shortTitle: 'Social Media',
    tagline: 'Consistent, engaging content that grows your audience',
    description:
      'We create and manage social media content across platforms using a blend of human creativity and AI-powered tools. Keep your brand top-of-mind with regular, high-quality posts.',
    icon: '📱',
    color: 'from-rose-400 to-red-500',
    gradient: 'from-rose-500/20 to-red-500/5',
    targets: ['Small Businesses', 'Agencies', 'Consultants', 'E-commerce Brands'],
    offers: ['Facebook Posts', 'Instagram Posts', 'LinkedIn Content', 'Short Videos'],
    skills: ['Content Strategy', 'AI Content Tools', 'Graphic Design', 'Video Editing'],
    pricing: [
      { label: 'Monthly Retainer', range: '£200–£1,000/month' },
    ],
    whyText:
      'Consistent social media presence builds trust and keeps your business top-of-mind. We handle the content creation so you can focus on running your business.',
    href: '/services/social-media-content',
  },
  {
    slug: 'lead-generation',
    title: 'Lead Generation Service',
    shortTitle: 'Lead Generation',
    tagline: 'Get qualified leads delivered straight to your inbox',
    description:
      'Businesses love customers more than websites. We set up systems that generate and nurture leads through contact forms, landing pages, and targeted outreach so your pipeline stays full.',
    icon: '🎯',
    color: 'from-green-400 to-emerald-500',
    gradient: 'from-green-500/20 to-emerald-500/5',
    targets: ['Realtors', 'Mortgage Brokers', 'Insurance Agents', 'Home Service Pros'],
    offers: ['Generate Leads', 'Contact Form Leads', 'Appointment Leads', 'Lead Nurturing'],
    skills: ['Marketing Automation', 'CRM', 'Landing Page Design', 'Analytics'],
    pricing: [
      { label: 'Per Lead', range: '£5–£50' },
      { label: 'Monthly Retainer', range: '£500–£2,000' },
    ],
    whyText:
      'We don\'t just build websites — we build lead machines. Our systems are designed to capture, qualify, and deliver high-intent leads directly to you.',
    href: '/services/lead-generation',
  },
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    shortTitle: 'Custom Software',
    tagline: 'Tailored software solutions built for your business',
    description:
      'Since you are studying CSE and working with MERN, this is a strong long-term path. We build custom CRM systems, inventory platforms, booking portals, and internal business tools tailored to your exact requirements.',
    icon: '⚙️',
    color: 'from-slate-400 to-slate-600',
    gradient: 'from-slate-500/20 to-slate-600/5',
    targets: ['Growing Businesses', 'Enterprises', 'Startups', 'Agencies'],
    offers: ['CRM Systems', 'Inventory Systems', 'Booking Platforms', 'Internal Business Tools'],
    skills: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'PostgreSQL'],
    pricing: [
      { label: 'Project Rate', range: '£2,000–£20,000+' },
    ],
    whyText:
      'Off-the-shelf software rarely fits perfectly. We build custom solutions that match your workflows, scale with your growth, and give you a competitive edge.',
    href: '/services/custom-software',
  },
];
