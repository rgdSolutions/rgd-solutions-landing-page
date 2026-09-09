/** Historical contributions are attributed to Ricardo until team participation is confirmed. */
export const projects = [
  {
    slug: "morgan-and-morgan",
    client: "Morgan & Morgan",
    title: "AI document intelligence for legal teams",
    summary:
      "Document retrieval, source-backed answers, and AI drafting brought into the tools legal teams use.",
    category: "AI product engineering",
    role: "Ricardo’s engineering experience",
    overview:
      "Ricardo’s work at Morgan & Morgan spanned retrieval, evaluation, and AI-assisted drafting. The application connected document intelligence to practical legal workflows, including demand-letter generation and drafting inside Microsoft Word.",
    sections: [
      {
        title: "From documents to useful answers",
        body: "Ricardo built retrieval-augmented generation with per-answer provenance. Answers were connected to their source material, giving legal staff a way to review the underlying information rather than relying on generated text alone.",
      },
      {
        title: "Make quality part of the system",
        body: "An evaluation harness with five judge models supported answer-quality assessment. The work also included agentic tool calling, extending the application beyond retrieving information to performing tasks.",
      },
      {
        title: "Meet people where they work",
        body: "Demand-letter generation ran on AWS, while AI drafting was integrated into Microsoft Word. These were distinct parts of the same product engineering challenge: connect AI capabilities to the places where legal work happens.",
      },
    ],
    stack: ["Python", "TypeScript", "AWS", "Elasticsearch", "Terraform"],
  },
  {
    slug: "cnn",
    client: "CNN+",
    title: "CNN+, built for the big screen.",
    summary:
      "Ricardo contributed playback integration, registration fixes, and continue-watching progress to CNN’s connected-TV app.",
    category: "Connected TV · Streaming",
    role: "Ricardo’s engineering work for CNN",
    overview:
      "Ricardo built the CNN+ OTT app for CNN, working with React Native and You.i Kit across Roku, Apple TV, and Fire TV. The project brought his cross-platform application experience to a major news organization’s subscription streaming launch.",
    sections: [
      {
        title: "The product: a new destination for CNN programming",
        body: "CNN+ launched in March 2022 with original live programs and an on-demand library of series and films. It offered a separate programming lineup from CNN’s cable channel, with Interview Club adding a way for subscribers to submit questions to guests.",
      },
      {
        title: "The engineering: one foundation across TV platforms",
        body: "Ricardo’s work centered on the OTT application: a shared React Native codebase using You.i Kit across Roku, Apple TV, and Fire TV. Reusing the application foundation across television platforms was the central delivery approach. These are the platforms in his project scope, not a claim that each was available on the service’s first day.",
      },
      {
        title: "The experience: discovery on the big screen",
        body: "CNN’s published product imagery shows featured programs, rows of titles, and watch and information actions on television, alongside the service’s desktop and mobile experiences. The images provide product context; Ricardo’s contribution described here is the connected-TV application.",
      },
      {
        title: "A shipped product, now part of CNN’s history",
        body: "CNN+ launched on March 29, 2022 and was discontinued the following month. This case study documents the engineering work on that original service. CNN All Access, introduced in October 2025, is a later offering.",
      },
    ],
    stack: ["React Native", "You.i Kit", "Roku", "Apple TV", "Fire TV"],
  },
  {
    slug: "launchdarkly",
    client: "LaunchDarkly",
    title: "Experimentation and AI, ready for rollout.",
    summary:
      "Experimentation interfaces and AI Configs engineering—from reusable React workflows to approvals and evaluation before rollout.",
    category: "Experimentation · AI product engineering",
    role: "Ricardo’s work as frontend engineer, core engineer, and tech lead",
    overview:
      "Ricardo contributed to two areas of LaunchDarkly’s platform: Experimentation and AI Configs. His work combined frontend development for experimentation workflows with architecture, APIs, and technical leadership for a new AI product, helping carry AI Configs from inception through beta to General Access.",
    sections: [
      {
        title: "Experimentation: make complex workflows usable",
        body: "As a frontend engineer on the Experimentation Platform, Ricardo developed complex React applications with reusable components, dynamic data handling, and responsive layouts. The project focused on improving feature experimentation workflows and collaboration for engineering teams. His stack included TypeScript, React, Redux, Storybook, and REST API integration.",
      },
      {
        title: "From experiment design to results",
        body: "The screenshots show the product workflows: defining a hypothesis and funnel metrics, allocating traffic across variations, reviewing experiment results, and connecting feature-flag targeting with experiment holdouts. They illustrate the application context for Ricardo’s frontend work; the example conversion figures are product demonstration data, not business outcomes attributed to his contribution.",
      },
      {
        title: "AI Configs: from inception to General Access",
        body: "As a core engineer on AI Configs, Ricardo contributed to the architecture, APIs, and data model for a new addition to LaunchDarkly’s flag-management portfolio. He worked with Product, Design, Security, and SRE on reliability and auditability, helping drive the product from beta to General Access.",
      },
      {
        title: "Approvals and evaluation before rollout",
        body: "Ricardo served as tech lead for AI Configs approval workflows, including role-aware rules, audit logs, and guarded change management. He also led Test Runs, a sandbox and evaluation framework for safely executing and comparing configuration changes before rollout.",
      },
      {
        title: "Team leadership and product impact",
        body: "Ricardo managed three team members, mentored new engineers, and addressed technical debt that slowed developer productivity. During this work, AI Configs reached the company’s first-quarter revenue goals two months into the quarter—a product-level milestone reported by Ricardo, achieved through the broader team’s work.",
      },
    ],
    stack: ["React", "TypeScript", "Redux", "Storybook", "REST APIs", "AWS", "SQL"],
  },
  {
    slug: "d-id",
    client: "D-ID",
    title: "Bring digital presenters to life.",
    summary:
      "Ricardo built video translation and voice-cloning interfaces for D-ID’s mobile creation app.",
    category: "AI video · Mobile apps",
    role: "Ricardo’s engineering experience",
    overview:
      "Ricardo’s experience includes work on D-ID’s AI talking-avatar video app. The product lets people create videos featuring digital presenters from a still image, a script, or an audio recording.",
    sections: [
      {
        title: "A mobile creative workflow",
        body: "The app brings avatar selection, scripts, and voice inputs into a mobile creation flow. The store images below introduce the product and show the steps from choosing a presenter to supplying the words they will speak.",
      },
      {
        title: "Engineering experience",
        body: "Ricardo implemented mobile video translation flows and voice-cloning interfaces, including API integration and tests. His work also included video-sharing analytics and recording fixes. The gallery illustrates the product; it does not show every feature he contributed.",
      },
    ],
    stack: [],
  },
  {
    slug: "astrocade",
    client: "Astrocade",
    title: "A place to play. A way to create.",
    summary:
      "Ricardo contributed web and mobile search interfaces, reliability improvements, and automated testing for an AI game platform.",
    category: "AI gaming · Product quality",
    role: "Ricardo’s engineering experience",
    overview:
      "Ricardo’s work at Astrocade included an AI moderation pipeline and more than 130 Playwright specifications. The product combines game discovery, AI-assisted creation, and social play.",
    sections: [
      {
        title: "Support a platform built around creation",
        body: "Astrocade lets people turn ideas into playable games and discover work from other creators. Ricardo’s work on an AI moderation pipeline supported this user-generated content environment.",
      },
      {
        title: "Put product quality into practice",
        body: "Ricardo’s contribution also included more than 130 Playwright specifications. This testing work sits behind the product experience shown in Astrocade’s store imagery.",
      },
    ],
    stack: ["Playwright"],
  },
] as const;

export const projectReferences: Record<string, readonly { label: string; url: string }[]> = {
  cnn: [
    {
      label: "Next TV · CNN+ launch overview and CNN-credited artwork (2022)",
      url: "https://www.nexttv.com/news/cnn-plus",
    },
    {
      label: "Business Insider · Programming, devices, and product imagery (2022)",
      url: "https://www.businessinsider.com/guides/streaming/cnn-plus-streaming-service",
    },
    {
      label: "Android Authority · CNN+ retrospective and product imagery (2022)",
      url: "https://www.androidauthority.com/what-is-cnn-plus-1647508/",
    },
    {
      label: "CNN · All Access explainer, a later service (2025)",
      url: "https://edition.cnn.com/2025/10/28/media/cnn-all-access-questions-answers-explainer-faq",
    },
  ],
};
