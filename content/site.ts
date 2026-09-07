/** Site copy. Source of truth: design/copy.md. Keep the two in sync. */

export const nav = {
  links: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  primaryCta: { label: "Book a call", href: "#book-a-call" },
  resumeLabel: "Resume",
} as const;

export const hero = {
  eyebrow: "Independent AI & product engineering",
  headline:
    "AI products and full-stack apps, shipped by the engineer who built them for LaunchDarkly, CNN, AWS and Fidelity.",
  subhead:
    "Ten years of full-stack application engineering. The last three building AI products end to end: RAG, LLM evals, agentic tool calling, and the React, React Native and Python apps around them.",
  primaryCta: { label: "Book a 30-minute call", href: "#book-a-call" },
  secondaryCta: { label: "Download resume" },
  proofLine:
    "5 written recommendations from directors, CTOs and principal architects · US-based · Remote",
  stats: {
    headline: { value: "0 → ~4,000", label: "daily users on an AI platform I built end to end" },
    small: [
      { value: "10 yrs", label: "full-stack engineering" },
      { value: "14", label: "named clients" },
    ],
  },
} as const;

/**
 * A client's official logo, served from public/logos as a single-colour SVG.
 * `width` and `height` are the desktop box in px, chosen per logo so that
 * wordmarks and symbols carry similar visual weight in the strip.
 */
export type ClientLogo = { src: string; width: number; height: number };
export type Client = { name: string; logo?: ClientLogo };

export const clients = {
  label: "Trusted on production systems at",
  items: [
    { name: "Amazon Web Services", logo: { src: "/logos/aws.svg", width: 47, height: 28 } },
    { name: "LaunchDarkly", logo: { src: "/logos/launchdarkly.svg", width: 143, height: 22 } },
    { name: "Visa", logo: { src: "/logos/visa.svg", width: 56, height: 18 } },
    { name: "Fidelity", logo: { src: "/logos/fidelity.svg", width: 120, height: 26 } },
    { name: "Morgan & Morgan", logo: { src: "/logos/morgan-morgan.svg", width: 141, height: 22 } },
    { name: "CNN", logo: { src: "/logos/cnn.svg", width: 47, height: 22 } },
    { name: "The Home Depot", logo: { src: "/logos/home-depot.svg", width: 40, height: 40 } },
    { name: "KPMG", logo: { src: "/logos/kpmg.svg", width: 65, height: 26 } },
    { name: "Hallmark", logo: { src: "/logos/hallmark.svg", width: 90, height: 34 } },
    { name: "D-ID", logo: { src: "/logos/d-id.svg", width: 32, height: 26 } },
    { name: "Handshake", logo: { src: "/logos/handshake.svg", width: 100, height: 20 } },
    { name: "ZenBusiness", logo: { src: "/logos/zenbusiness.svg", width: 142, height: 28 } },
    { name: "Astrocade", logo: { src: "/logos/astrocade.svg", width: 138, height: 28 } },
    { name: "PBR", logo: { src: "/logos/pbr.svg", width: 132, height: 20 } },
  ],
} as const satisfies { label: string; items: readonly Client[] };

export type Accent = "teal" | "rose" | "white";

export const services = {
  eyebrow: "Services",
  title: "What I do",
  intro:
    "One senior engineer who can own a product surface end to end, or slot into your team and raise the bar.",
  items: [
    {
      icon: "ai",
      accent: "teal",
      title: "AI engineering",
      body: "RAG with per-answer provenance, LLM evaluation harnesses and judge models, agentic tool calling, model management and observability. Shipped to ~4,000 daily users at the largest personal-injury firm in the US.",
      tags: ["Python", "TypeScript", "AWS", "Elasticsearch", "Arize"],
    },
    {
      icon: "devices",
      accent: "rose",
      title: "Web & mobile product engineering",
      body: "Next.js and React on the web, React Native and Expo on mobile, Node and Python on the back end. From greenfield MVPs to hardening legacy apps, with end-to-end tests from day one.",
      tags: ["Next.js", "React Native", "Expo", "Node", "FastAPI", "Vercel", "Terraform"],
    },
    {
      icon: "team",
      accent: "white",
      title: "Senior engineer on your team",
      body: "Embedded with your product and design people, hitting sprint goals, reviewing peers' code and communicating blockers early. It is what every recommendation below says.",
      tags: ["Agile", "Code review", "Onboarding", "Remote"],
    },
  ],
} as const;

export const work = {
  eyebrow: "Case studies",
  title: "Selected work",
  items: [
    {
      client: "Morgan & Morgan",
      stat: "0 → ~4,000 daily users",
      accent: "teal",
      span: "wide",
      title: "AI document intelligence for the largest US personal-injury firm",
      body: "Grown from zero to ~4,000 active legal staff, 80% of the firm's attorneys and paralegals. Built RAG retrieval with per-answer provenance, an eval harness with five judge models, agentic tool calling, demand-letter generation on AWS and AI drafting inside Microsoft Word.",
      stack: "Python · TypeScript · AWS · Elasticsearch · Terraform",
    },
    {
      client: "LaunchDarkly",
      stat: "5,500+ enterprise customers",
      accent: "rose",
      span: "narrow",
      title: "Experimentation and Observability features",
      body: "Feature-management platform serving 5,500+ enterprise customers and 45 trillion daily flag evaluations.",
      stack: "TypeScript · Next.js · React · Storybook",
    },
    {
      client: "CNN",
      stat: "3 platforms, 1 codebase",
      accent: "white",
      span: "narrow",
      title: "One React Native codebase to Roku, Apple TV and Fire TV",
      body: "Shipped an OTT app to three TV platforms from a single codebase.",
      stack: "React Native · You.i Kit",
    },
    {
      client: "Fidelity",
      stat: "2 MVPs shipped",
      accent: "teal",
      span: "wide",
      title: "Tokenized investment product, MVP1 and MVP2",
      body: "Customer-facing UI from scratch for shares of Bitcoin mining hash-rate profits.",
      stack: "React · Redux · Storybook · ethers.js",
    },
  ],
  moreLabel: "More",
  more: "Amazon Web Services (re:Invent conference apps) · Handshake (80% of accessibility violations remediated, 20M+ students) · ZenBusiness (cart and checkout, ~1M businesses formed) · KPMG (BLE hotel-room unlock app) · PBR (fan app) · D-ID (AI talking-avatar video app, 120+ languages) · Astrocade (AI moderation pipeline, 130+ Playwright specs) · DFlow (Solana DEX mobile app, passkeys + MPC wallets) · SeeOnMe (AI virtual try-on UI) · Visa (Visa Checkout)",
} as const;

export const process = {
  eyebrow: "Process",
  title: "How it works",
  steps: [
    {
      accent: "teal",
      title: "Tell me the vision",
      body: "A 30-minute call. You bring the product problem; I bring questions and, usually, a first plan.",
    },
    {
      accent: "rose",
      title: "I build it with your team",
      body: "Scoped milestones, working software every sprint, code your team can own.",
    },
    {
      accent: "white",
      title: "You ship and grow",
      body: "Launch, measure, iterate. I stay on as long as it is useful and no longer.",
    },
  ],
} as const;

export const about = {
  eyebrow: "About",
  title: "Meet Ricardo",
  paragraphs: [
    "Ricardo has been building software for ten years, the last eight as an independent consultant through RGD Solutions. He started at Visa shipping features for Visa Checkout, came through Hack Reactor, and before that earned a master's in structural engineering, which is why his code tends to be load-bearing.",
    "Since 2017 he has worked with lean startups and Fortune 500 teams alike: LaunchDarkly, CNN, AWS, Fidelity, KPMG, Morgan & Morgan. In the last three years that work has shifted toward AI products: retrieval, evals, agents and the apps around them. He holds Anthropic's Claude Certified Architect certification (2026).",
  ],
  facts: [
    { value: "10", label: "years engineering" },
    { value: "8", label: "years independent" },
    { value: "14", label: "named clients" },
    { value: "US", label: "citizen, remote" },
  ],
  resumeCta: "Download resume",
} as const;

export const testimonials = {
  eyebrow: "Testimonials",
  title: "What teams say",
  intro: "Five written recommendations, unedited.",
  featured: {
    quote:
      "Ricardo is the kind of developer management dreams of. He's reliable and seems to always find a way to complete his sprint work even when road bumps are hit. He's an excellent communicator, he's able to speak clearly and concisely about the status of his work or when onboarding new developers. Overall, I would highly recommend Ricardo and hope I get to work more with him in the future.",
    name: "Benjamin Rusczek (CSPO, CSM)",
    role: "Director of Delivery Management at T3",
  },
  others: [
    {
      quote:
        "Ricardo is a skilled engineer and pleasure to work with. He was able to quickly become familiar with and contribute to our codebase, was excellent at communicating his task progress, and was very proactive when finding himself blocked and reaching out as needed to unblock himself. I hope to work with him again in the future.",
      name: "Matt Pavelle",
      role: "CTO at Piñata",
    },
    {
      quote:
        "I worked with Ricardo on a challenging project and he was an amazing asset to our team! He was responsive, helpful, and reliable, coming through in a pinch on several occasions. Knowledgeable and professional, it was a pleasure having the opportunity to work with him!",
      name: "Gregory Lund",
      role: "Director of Engineering at Mobiquity Inc.",
    },
    {
      quote:
        "I worked with Ricardo as his Scrum Master on one of the most complex web development projects I have ever been on. He was very quick to onboard in the new environment and consistently hit his sprint goal while also contributing to peer reviews for the other developers on the team. Always has a great attitude and is a great communicator on any blockers and issues that occur during the sprint. Ricardo is definitely a developer that you want on your team.",
      name: "Jason Butler, CSM",
      role: "Principal Project Manager at Blackbaud",
    },
    {
      quote:
        "Ricardo joined a large scale eCommerce website project for one of our Fortune 500 clients. The project was very dynamic, fast moving, in which agile mindset was very necessary to get things done. Ricardo was able to work in an agile way as required by the project, stick to the Acceptance Criteria mentioned in the Jira tickets, and collaborate with the team in getting tasks done. Most importantly, he is a great team player, and will be a valuable addition to any team.",
      name: "Hersh Amin",
      role: "Principal Architect at WellSky",
    },
  ],
} as const;

export const bookCall = {
  eyebrow: "Next step",
  title: "Book a call",
  body: "Thirty minutes, no pitch. Tell me what you are building and I will tell you honestly whether I am the right person to build it.",
  preferEmail: "Prefer email?",
  fields: {
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Work email", placeholder: "you@company.com" },
    phone: { label: "Phone", optional: "(optional)", placeholder: "+1" },
    preferredDate: { label: "Preferred date" },
    message: {
      label: "What are you building?",
      optional: "(optional)",
      placeholder: "A sentence or two is plenty.",
    },
  },
  replyNote: (email: string) => `Reply from ${email} within one business day.`,
  submit: "Request a call",
  submitting: "Sending…",
  success: (email: string) =>
    `Got it. I'll reply from ${email} within one business day with a time.`,
  failure: "Something went wrong sending your request. Please email me directly instead.",
} as const;

export const footer = {
  copyright: "© 2026 RGD Solutions. Remote, US-based.",
  resumeLabel: "Resume",
} as const;

export const seo = {
  title: "RGD Solutions · AI products and full-stack apps, shipped",
  description:
    "Independent AI and product engineering by Ricardo D'Alessandro: RAG, LLM evals, agentic tool calling, and the React, React Native and Python apps around them. Ten years of full-stack work for LaunchDarkly, CNN, AWS, Fidelity and Morgan & Morgan.",
} as const;
