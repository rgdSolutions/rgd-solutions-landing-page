# RGD Solutions — site copy and information architecture

Copy source of truth for the team positioning implemented on `codex-ui-facelift`.
Keep this file, `content/site.ts`, `content/projects.ts`, and section-specific copy in sync.
Implementation plan: [UX/UI improvement plan](ux-ui-improvement-plan.md).

## Brand facts and attribution

- RGD Solutions is a development team led by Ricardo D’Alessandro.
- Services use “we” and “our team.” Historical contributions and personal recommendations are attributed to Ricardo until team participation is confirmed.
- Team size, member profiles, location, commercial terms, and adoption metrics await factual input. Do not invent them.
- Contact and social URLs come from `lib/site-config.ts` and environment configuration. Use [CONTACT_EMAIL] in copy documents.
- The résumé belongs to Ricardo and is served from `/resume`.
- The hero visual explains an AI workflow; it is explicitly labeled as an illustration, not a client screenshot.

## Page order

Navigation → Hero → Experience strip → Featured Morgan & Morgan project → Services → Supporting projects → Process → Recommendations → Team → FAQ → Contact → Footer.

## Navigation

Services (#services) · Work (#work) · Team (#about) · FAQ (#faq)

Primary CTA: **Request a call** (#book-a-call). No résumé in primary navigation.

## Hero

Eyebrow: AI, web & mobile development

Headline: **Get your AI product into production.**

RGD Solutions is a team of developers led by Ricardo D’Alessandro. We build AI products and web and mobile apps, from the first working version through launch and beyond.

Primary: **Request a 30-minute call**. Secondary: **See selected work**.

A development team. An experienced lead. A direct line to the people building your product.

## Hero illustration

Title: From information to action

Your documents — Knowledge your team already has.

Retrieve. Check. Respond. — Connect relevant sources, evaluate answer quality, and put the result to work.

Outputs: Answers with sources · Drafts to review · Actions to take

Caption: Illustrative AI workflow · Not a client product screenshot

## Experience strip

Led by an engineer with experience at

Amazon Web Services · LaunchDarkly · Visa · Fidelity · Morgan & Morgan · CNN · The Home Depot · Handshake · KPMG · ZenBusiness · Astrocade · D-ID

## Featured experience

Eyebrow: Selected experience

Title: **Built for real work.**

A closer look at the products Ricardo has helped build—and the experience behind our team.

Feature: Morgan & Morgan (project copy below). CTA: Read the project story.

Answers with provenance — Document retrieval connected to source material.

Quality that can be evaluated — An evaluation harness with five judge models.

AI inside the workflow — Demand-letter generation and drafting in Word.

## Services

Eyebrow: How we can help

Title: **Your next step. Our kind of work.**

A new product, an application that needs improvement, or a roadmap your team needs help delivering.

### Build AI into your product

Help your users find answers in documents, draft content, and complete tasks. We build the application around the AI, with source references, quality checks, and monitoring.

Supporting tags: AI applications · Retrieval & evaluations · Python · TypeScript

### Build better web & mobile apps

Turn your idea into a working application, or improve the one you already have. We build the user experience and the backend services that support it.

Supporting tags: React · Next.js · React Native · Expo · Node · Python

### Extend your development team

Add developers who work alongside your product, design, and engineering team. We help deliver features, review code, and keep work moving with clear communication.

Supporting tags: Feature delivery · Code review · Team collaboration

## Project stories

Supporting-work heading: **More product experience.** Eyebrow: Web & mobile. CTA: Explore (accessible name identifies each client).

### Morgan & Morgan: AI document intelligence for legal teams

Route: /work/morgan-and-morgan

Category: AI product engineering

Attribution: Ricardo’s engineering experience

Summary: Document retrieval, source-backed answers, and AI drafting brought into the tools legal teams use.

Ricardo’s work at Morgan & Morgan spanned retrieval, evaluation, and AI-assisted drafting. The application connected document intelligence to practical legal workflows, including demand-letter generation and drafting inside Microsoft Word.

**From documents to useful answers**

Ricardo built retrieval-augmented generation with per-answer provenance. Answers were connected to their source material, giving legal staff a way to review the underlying information rather than relying on generated text alone.

**Make quality part of the system**

An evaluation harness with five judge models supported answer-quality assessment. The work also included agentic tool calling, extending the application beyond retrieving information to performing tasks.

**Meet people where they work**

Demand-letter generation ran on AWS, while AI drafting was integrated into Microsoft Word. These were distinct parts of the same product engineering challenge: connect AI capabilities to the places where legal work happens.

Technology: Python · TypeScript · AWS · Elasticsearch · Terraform

### CNN+: CNN+, built for the big screen.

Route: /work/cnn

Category: Connected TV · Streaming

Attribution: Ricardo’s engineering work for CNN

Summary: A React Native OTT app bringing CNN’s streaming service to connected TVs through a shared codebase.

Ricardo built the CNN+ OTT app for CNN, working with React Native and You.i Kit across Roku, Apple TV, and Fire TV. The project brought his cross-platform application experience to a major news organization’s subscription streaming launch.

**The product: a new destination for CNN programming**

CNN+ launched in March 2022 with original live programs and an on-demand library of series and films. It offered a separate programming lineup from CNN’s cable channel, with Interview Club adding a way for subscribers to submit questions to guests.

**The engineering: one foundation across TV platforms**

Ricardo’s work centered on the OTT application: a shared React Native codebase using You.i Kit across Roku, Apple TV, and Fire TV. Reusing the application foundation across television platforms was the central delivery approach. These are the platforms in his project scope, not a claim that each was available on the service’s first day.

**The experience: discovery on the big screen**

CNN’s published product imagery shows featured programs, rows of titles, and watch and information actions on television, alongside the service’s desktop and mobile experiences. The images provide product context; Ricardo’s contribution described here is the connected-TV application.

**A shipped product, now part of CNN’s history**

CNN+ launched on March 29, 2022 and was discontinued the following month. This case study documents the engineering work on that original service. CNN All Access, introduced in October 2025, is a later offering.

Technology: React Native · You.i Kit · Roku · Apple TV · Fire TV

### LaunchDarkly: Experimentation and AI, ready for rollout.

Route: /work/launchdarkly

Category: Experimentation · AI product engineering

Attribution: Ricardo’s work as frontend engineer, core engineer, and tech lead

Summary: Experimentation interfaces and AI Configs engineering—from reusable React workflows to approvals and evaluation before rollout.

Ricardo contributed to two areas of LaunchDarkly’s platform: Experimentation and AI Configs. His work combined frontend development for experimentation workflows with architecture, APIs, and technical leadership for a new AI product, helping carry AI Configs from inception through beta to General Access.

**Experimentation: make complex workflows usable**

As a frontend engineer on the Experimentation Platform, Ricardo developed complex React applications with reusable components, dynamic data handling, and responsive layouts. The project focused on improving feature experimentation workflows and collaboration for engineering teams. His stack included TypeScript, React, Redux, Storybook, and REST API integration.

**From experiment design to results**

The screenshots show the product workflows: defining a hypothesis and funnel metrics, allocating traffic across variations, reviewing experiment results, and connecting feature-flag targeting with experiment holdouts. They illustrate the application context for Ricardo’s frontend work; the example conversion figures are product demonstration data, not business outcomes attributed to his contribution.

**AI Configs: from inception to General Access**

As a core engineer on AI Configs, Ricardo contributed to the architecture, APIs, and data model for a new addition to LaunchDarkly’s flag-management portfolio. He worked with Product, Design, Security, and SRE on reliability and auditability, helping drive the product from beta to General Access.

**Approvals and evaluation before rollout**

Ricardo served as tech lead for AI Configs approval workflows, including role-aware rules, audit logs, and guarded change management. He also led Test Runs, a sandbox and evaluation framework for safely executing and comparing configuration changes before rollout.

**Team leadership and product impact**

Ricardo managed three team members, mentored new engineers, and addressed technical debt that slowed developer productivity. During this work, AI Configs reached the company’s first-quarter revenue goals two months into the quarter—a product-level milestone reported by Ricardo, achieved through the broader team’s work.

Technology: React · TypeScript · Redux · Storybook · REST APIs · AWS · SQL

### D-ID: Bring digital presenters to life.

Route: /work/d-id

Category: AI video · Mobile apps

Attribution: Ricardo’s engineering experience

Summary: An AI video app for creating talking avatars from images, text, and audio.

Ricardo’s experience includes work on D-ID’s AI talking-avatar video app. The product lets people create videos featuring digital presenters from a still image, a script, or an audio recording.

**A mobile creative workflow**

The app brings avatar selection, scripts, and voice inputs into a mobile creation flow. The store images below introduce the product and show the steps from choosing a presenter to supplying the words they will speak.

**Engineering experience**

D-ID is part of Ricardo’s background in AI-powered applications. The gallery shows D-ID’s published product marketing; it does not identify individual feature ownership.

Technology:

### Astrocade: A place to play. A way to create.

Route: /work/astrocade

Category: AI gaming · Product quality

Attribution: Ricardo’s engineering experience

Summary: A platform for discovering community-made games and creating new ones with AI.

Ricardo’s work at Astrocade included an AI moderation pipeline and more than 130 Playwright specifications. The product combines game discovery, AI-assisted creation, and social play.

**Support a platform built around creation**

Astrocade lets people turn ideas into playable games and discover work from other creators. Ricardo’s work on an AI moderation pipeline supported this user-generated content environment.

**Put product quality into practice**

Ricardo’s contribution also included more than 130 Playwright specifications. This testing work sits behind the product experience shown in Astrocade’s store imagery.

Technology: Playwright

Project-page closing: **Building something similar?** Tell us where you are today and what you need to ship next. CTA: Discuss your project.

## Process

Eyebrow: Working together

Title: **A clear path to working software.**

1. **Start with your priorities** — Tell us about your product, the problem you need to solve, and the constraints we should understand.

2. **Define the work together** — We discuss the scope, developers involved, and milestones so you know how the engagement will run.

3. **Build, review, and launch** — Review working software with us as the product takes shape. We agree on release and ongoing support needs together.

## Recommendations

Title: **Good work starts with trust.**

Recommendations about Ricardo, the engineer leading RGD Solutions.

The default layout shows verbatim excerpts from Benjamin (communication), Matt (onboarding), and Gregory (reliability). Each links to its full text through a native disclosure. Jason and Hersh remain available under “Two more recommendations.”

### Benjamin Rusczek (CSPO, CSM)

Director of Delivery Management at T3

> Ricardo is the kind of developer management dreams of. He's reliable and seems to always find a way to complete his sprint work even when road bumps are hit. He's an excellent communicator, he's able to speak clearly and concisely about the status of his work or when onboarding new developers. Overall, I would highly recommend Ricardo and hope I get to work more with him in the future.

### Matt Pavelle

CTO at Piñata

> Ricardo is a skilled engineer and pleasure to work with. He was able to quickly become familiar with and contribute to our codebase, was excellent at communicating his task progress, and was very proactive when finding himself blocked and reaching out as needed to unblock himself. I hope to work with him again in the future.

### Gregory Lund

Director of Engineering at Mobiquity Inc.

> I worked with Ricardo on a challenging project and he was an amazing asset to our team! He was responsive, helpful, and reliable, coming through in a pinch on several occasions. Knowledgeable and professional, it was a pleasure having the opportunity to work with him!

### Jason Butler, CSM

Principal Project Manager at Blackbaud

> I worked with Ricardo as his Scrum Master on one of the most complex web development projects I have ever been on. He was very quick to onboard in the new environment and consistently hit his sprint goal while also contributing to peer reviews for the other developers on the team. Always has a great attitude and is a great communicator on any blockers and issues that occur during the sprint. Ricardo is definitely a developer that you want on your team.

### Hersh Amin

Principal Architect at WellSky

> Ricardo joined a large scale eCommerce website project for one of our Fortune 500 clients. The project was very dynamic, fast moving, in which agile mindset was very necessary to get things done. Ricardo was able to work in an agile way as required by the project, stick to the Acceptance Criteria mentioned in the Jira tickets, and collaborate with the team in getting tasks done. Most importantly, he is a great team player, and will be a valuable addition to any team.

## Team

Eyebrow: The people behind the work

Title: **A team of developers. Led by Ricardo.**

RGD Solutions brings together developers to build AI products and web and mobile applications. Ricardo D’Alessandro leads the team, drawing on his experience with startups and enterprise engineering organizations.

His background spans full-stack applications, React Native, and AI product engineering, with experience at LaunchDarkly, CNN, AWS, Fidelity, and Morgan & Morgan.

Portrait caption: Ricardo D’Alessandro · Team lead

Secondary links: Ricardo’s résumé · Ricardo on LinkedIn · Ricardo on GitHub. Social links are shown only when configured.

## FAQ

Eyebrow: A few useful answers

Title: **Working with us.**

### Who will build our product?

Developers from RGD Solutions, led by Ricardo D’Alessandro. We discuss the people involved and their responsibilities when defining the engagement.

### Can you work with our existing team?

Yes. We can collaborate with your product, design, and engineering team on an existing application or a new product.

### Do you only build AI products?

No. We also build and improve web and mobile applications, including the backend services that support them. AI is one part of our work.

### What happens after we request a call?

We reply within one business day to arrange a 30-minute conversation about your goals, current product, and the help you need. Submitting the form requests a conversation; it does not reserve a calendar slot.

## Contact

Title: **Let’s talk about your product.**

Tell us what you are building and where you need help. We’ll arrange a 30-minute conversation about your goals and whether our team is a good fit.

Fields: Name (required), Email (required), What are you building? (optional). Hidden honeypot: company.

Message placeholder: Tell us about your product and the help you need…

The UI no longer requests phone or preferred date. The API continues accepting these as optional fields for compatibility.

Submit: **Request a call**. Pending: Sending…

Our team will reply from [CONTACT_EMAIL] within one business day to arrange a time.

Success: Thanks for getting in touch. We’ll reply from [CONTACT_EMAIL] within one business day to arrange your call.

Failure: Your request could not be sent. Please try again or email us directly. Follow with a configured email link.

Aside: Prefer email? [CONTACT_EMAIL]

## Footer and metadata

© 2026 RGD Solutions. AI, web & mobile development.

Links: [CONTACT_EMAIL] · Ricardo on LinkedIn · Ricardo on GitHub · Ricardo’s résumé. Theme switch available.

Page title: RGD Solutions | AI, Web & Mobile Development Team

Meta description: RGD Solutions is a development team led by Ricardo D’Alessandro. We build AI products and web and mobile apps, and work alongside your engineering team.

## Store image galleries

D-ID and Astrocade each show two intact store marketing images on the homepage and three on their project page. Mobile uses a static stacked layout; wider screens use columns. No autoplay or carousel controls.

- D-ID: Create a digital presenter; Choose your avatar; Add a script or recording.
- Astrocade: Discover games to play; Turn an idea into a game; Share and compete.
- Captions link to the official listing. Original assets and retrieval provenance are in `design/assets/store-marketing`; selections and alt text are in `content/project-media.ts`.
- Images use Next.js responsive optimization, intrinsic dimensions, and default lazy loading.

### CNN+ case study and archive gallery

The existing `/work/cnn` route now identifies the original CNN+ product. Homepage: the first landscape product collage only. Project page: those collages plus the launch campaign, all credited per image to CNN via the publishing source. Product history cites Next TV, Business Insider, Android Authority, and CNN’s 2025 All Access explainer. The newer service is distinguished from Ricardo’s CNN+ work.

Sources and exact URLs are maintained in `content/projects.ts` (`projectReferences.cnn`) and `design/assets/cnn-plus/sources.json`. The gallery presents published product context, including other device types, while Ricardo’s stated scope remains the React Native/You.i Kit connected-TV application.
