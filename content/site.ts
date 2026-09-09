/** Site copy. Source of truth: design/copy.md. Keep the two in sync. */

export const nav = {
  links: [
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Work",
      href: "#work",
    },
    {
      label: "Team",
      href: "#about",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
  ],
  primaryCta: {
    label: "Request a call",
    href: "#book-a-call",
  },
  resumeLabel: "Ricardo’s résumé",
} as const;

export const hero = {
  eyebrow: "AI, web & mobile development",
  headline: "Your next engineers. Part of your team.",
  subhead:
    "Hire engineers who embed with your team, communicate directly, and share progress every day. Choose the developers, weekly hours, and engagement length that fit your product.",
  primaryCta: {
    label: "Request a 30-minute call",
    href: "#book-a-call",
  },
  secondaryCta: {
    label: "See selected work",
    href: "#work",
  },
  proofLine:
    "A development team. An experienced lead. A direct line to the people building your product.",
} as const;

/**
 * A client's official logo, served from public/logos as a single-colour SVG.
 * `width` and `height` are the desktop box in px, chosen per logo so that
 * wordmarks and symbols carry similar visual weight in the strip.
 */
export type ClientLogo = { src: string; width: number; height: number };
export type Client = { name: string; logo?: ClientLogo };

export const clients = {
  label: "Led by an engineer with experience at",
  items: [
    { name: "Amazon Web Services", logo: { src: "/logos/aws.svg", width: 47, height: 28 } },
    { name: "LaunchDarkly", logo: { src: "/logos/launchdarkly.svg", width: 143, height: 22 } },
    { name: "Visa", logo: { src: "/logos/visa.svg", width: 56, height: 18 } },
    { name: "Fidelity", logo: { src: "/logos/fidelity.svg", width: 120, height: 26 } },
    { name: "Morgan & Morgan", logo: { src: "/logos/morgan-morgan.svg", width: 141, height: 22 } },
    { name: "CNN", logo: { src: "/logos/cnn.svg", width: 47, height: 22 } },
    { name: "The Home Depot", logo: { src: "/logos/home-depot.svg", width: 40, height: 40 } },
    { name: "Handshake", logo: { src: "/logos/handshake.svg", width: 100, height: 20 } },
    { name: "KPMG", logo: { src: "/logos/kpmg.svg", width: 65, height: 26 } },
    { name: "ZenBusiness", logo: { src: "/logos/zenbusiness.svg", width: 142, height: 28 } },
    { name: "Astrocade", logo: { src: "/logos/astrocade.svg", width: 138, height: 28 } },
    { name: "D-ID", logo: { src: "/logos/d-id.svg", width: 32, height: 26 } },
  ],
} as const satisfies { label: string; items: readonly Client[] };

export type Accent = "teal" | "rose" | "white";

export const services = {
  eyebrow: "Services",
  title: "How we can help your team.",
  intro: "Build a product, improve an existing application, or bring developers into your team.",
  items: [
    {
      icon: "ai",
      accent: "teal",
      title: "Build AI into your product",
      body: "Help your users find answers in documents, draft content, and complete tasks. We build the application around the AI, with source references, quality checks, and monitoring.",
      link: { label: "Explore our AI work", href: "/work/morgan-and-morgan" },
    },
    {
      icon: "devices",
      accent: "rose",
      title: "Build better web & mobile apps",
      body: "Turn your idea into a working application, or improve the one you already have. We build the user experience and the backend services that support it.",
      link: { label: "Explore web & mobile work", href: "#more-work" },
    },
    {
      icon: "team",
      accent: "white",
      title: "Extend your development team",
      body: "Add developers who work alongside your product, design, and engineering team. We help deliver features, review code, and keep work moving with clear communication.",
      link: { label: "Discuss your team’s needs", href: "#book-a-call" },
    },
  ],
} as const;

export const process = {
  eyebrow: "Working together",
  title: "Your engineers. Embedded in your team.",
  steps: [
    {
      accent: "teal",
      title: "Work directly with your engineers",
      body: "The engineers you hire embed with your team and communicate with you directly. Work together on your product’s priorities.",
    },
    {
      accent: "rose",
      title: "See progress every day",
      body: "Your engineers share progress during daily standups, so you can review the work, discuss blockers, and agree on next steps.",
    },
    {
      accent: "white",
      title: "Adjust priorities as you go",
      body: "Engineers are hired by the hour. Discuss scope changes directly with them and adjust the work quickly as your needs evolve.",
    },
  ],
} as const;

export const about = {
  eyebrow: "The people behind the work",
  title: "Led by Ricardo. Built together.",
  paragraphs: [
    "Ricardo leads RGD Solutions, bringing experience as a hands-on engineer and technical lead. His background spans startup products and enterprise engineering teams.",
  ],
  primaryCta: "Talk about your project",
  resumeCta: "Ricardo’s résumé",
} as const;

export const testimonials = {
  eyebrow: "Testimonials",
  title: "Good work starts with trust.",
  intro: "Recommendations from people who worked with Ricardo, the engineer leading RGD Solutions.",
  featured: [
    {
      name: "David Evans Farinha",
      role: "Engineering colleague · Worked with Ricardo on the same team",
      theme: "Technical quality",
      quote:
        "I've worked with hundreds of developers, and Ricardo stands out as one of the best. He's a rare mix of being proactive, highly collaborative and consistently delivering high-quality code. Also very high communication skills with both technical and non-technical co-workers. Would highly recommend!",
      excerpt:
        "I've worked with hundreds of developers, and Ricardo stands out as one of the best.",
    },
    {
      name: "Joseph Southern",
      role: "Software Engineering Manager · Managed Ricardo at The Home Depot",
      theme: "Complex mobile delivery",
      quote:
        "I worked with Ricardo on a highly visible project at The Home Depot for over 6 months. He is an a great mobile developer with extensive knowledge of React Native. Ricardo took on some of the most difficult features that blew away our stakeholders. On top of Ricardos great dev skills is his amazing attitude. Ricardo is a rock star that will be a lead dev soon.",
      excerpt:
        "Ricardo took on some of the most difficult features that blew away our stakeholders.",
    },
    {
      name: "Benjamin Rusczek",
      role: "Delivery management · Managed Ricardo directly",
      theme: "Reliable delivery",
      quote:
        "Ricardo is the kind of developer management dreams of. He's reliable and seems to always find a way to complete his sprint work even when road bumps are hit. He's an excellent communicator, he's able to speak clearly and concisely about the status of his work or when onboarding new developers. Overall, I would highly recommend Ricardo and hope I get to work more with him in the future.",
      excerpt:
        "He's reliable and seems to always find a way to complete his sprint work even when road bumps are hit.",
    },
  ],
  supporting: [
    {
      name: "Michael Twentyman",
      role: "VP of Engineering · Senior colleague on the PBR project",
      quote:
        "Ricardo was such a pleasure to work with while developing PBRs new flagship mobile application. He quickly worked into a good rhythm with the team, communicated proactively and was a great listener and collaborator. We'd love to work with him again!",
    },
    {
      name: "Jason Butler, CSM",
      role: "Scrum Master · Worked with Ricardo on the same team",
      quote:
        "I worked with Ricardo as his Scrum Master on one of the most complex web development projects I have ever been on. He was very quick to onboard in the new environment and consistently hit his sprint goal while also contributing to peer reviews for the other developers on the team. Always has a great attitude and is a great communicator on any blockers and issues that occur during the sprint. Ricardo is definitely a developer that you want on your team.",
    },
    {
      name: "Kenneth Pascascio",
      role: "Engineering colleague · Worked with Ricardo on the same team",
      quote:
        "Ricardo was a huge asset to our team. He had shown true leadership while on our project. I feel confident in his ability to consult and break down task for a client as well as jump in on multiple sides of the stack to remediate/ write new features.",
    },
  ],
} as const;

export const bookCall = {
  eyebrow: "Next step",
  title: "Let’s talk about your product.",
  body: "Tell us what you are building and where you need help. We’ll arrange a 30-minute conversation about your goals and whether our team is a good fit.",
  preferEmail: "Prefer email?",
  fields: {
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Email", placeholder: "you@company.com" },
    message: {
      label: "What are you building?",
      optional: "(optional)",
      placeholder: "Tell us about your product and the help you need…",
    },
  },
  replyNote: (email: string) =>
    `Our team will reply from ${email} within one business day to arrange a time.`,
  submit: "Request a call",
  submitting: "Sending…",
  success: (email: string) =>
    `Thanks for getting in touch. We’ll reply from ${email} within one business day to arrange your call.`,
  failure: "Your request could not be sent. Please try again or email us directly.",
} as const;

export const footer = {
  copyright: "© 2026 RGD Solutions. AI, web & mobile development.",
  resumeLabel: "Ricardo’s résumé",
} as const;

export const seo = {
  title: "RGD Solutions | AI, Web & Mobile Development Team",
  description:
    "RGD Solutions is a development team led by Ricardo D’Alessandro. We build AI products and web and mobile apps, and work alongside your engineering team.",
} as const;

export const faq = [
  {
    question: "Are engineers available?",
    answer:
      "Yes. We always have engineers available. Tell us the skills you need and the work you have in mind so we can discuss the right fit for your team.",
  },
  {
    question: "How do hourly engagements work?",
    answer:
      "You choose the number of developers, hours per week, and contract duration. Every engagement is hourly and customized to your needs.",
  },
  {
    question: "Will your engineers work directly with our team?",
    answer:
      "Yes. The engineers you hire embed with your team, communicate with you directly, and share progress during daily standups.",
  },
  {
    question: "What happens when our scope changes?",
    answer:
      "Discuss the changes directly with your engineers and adjust priorities together. Hourly billing makes it straightforward to adapt the work as your needs change.",
  },
  {
    question: "Can you support us after launch?",
    answer:
      "Yes. Support after launch is always available and billed by the hour. We can help with fixes, maintenance, and further development as you need them.",
  },
  {
    question: "What happens after we request a call?",
    answer:
      "We reply within one business day to arrange a 30-minute conversation about your product, the skills you need, and how you would like the engagement to work. Submitting the form requests a conversation; it does not reserve a calendar slot.",
  },
] as const;
