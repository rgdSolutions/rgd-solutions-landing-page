# RGD Solutions — site copy and information architecture

Single source of copy for every design direction and, later, for `content/site.ts`.
Facts come from `~/RGD_Solutions/resume-typst/out/resume.txt` and the current site only.
Bracketed items like `[HEADSHOT]` are placeholders Ricardo fills in.

## Brand facts
- Name: RGD Solutions
- Person: Ricardo D'Alessandro (Ricardo G. D'Alessandro on the resume)
- Email: `[CONTACT_EMAIL]` (from Vercel env `NEXT_PUBLIC_CONTACT_EMAIL`)
- Phone: `[CONTACT_PHONE]` (Vercel env `CONTACT_PHONE`, server-only; not shown on the site by default)
- LinkedIn: `[LINKEDIN_URL]` (Vercel env `NEXT_PUBLIC_LINKEDIN_URL`)
- GitHub: `[GITHUB_URL]` (Vercel env `NEXT_PUBLIC_GITHUB_URL`)
- Form submissions are emailed to Vercel env `LEAD_INBOX_EMAIL` (server-only)
- Site: rgd-solutions.com
- Resume file: /ricardo-dalessandro-resume.pdf

Contact details are never hardcoded in this repo. Bracketed tokens above are placeholders in the design files; the site reads the real values from Vercel environment variables (`vercel env pull` locally).

## 1. Nav
- Logo (new mark, per direction)
- Links: Services · Work · About · Testimonials
- Primary CTA: **Book a call** (anchors to #book-a-call)
- Secondary: **Resume** (downloads the PDF)

## 2. Hero
- Eyebrow: Independent AI & product engineering
- Headline: **AI products and full-stack apps, shipped by the engineer who built them for LaunchDarkly, CNN, AWS and Fidelity.**
- Alternate shorter headline (for directions with very large type): **Ship the AI product you keep putting off.**
- Subhead: Ten years of full-stack application engineering. The last three building AI products end to end: RAG, LLM evals, agentic tool calling, and the React, React Native and Python apps around them.
- Primary CTA: **Book a 30-minute call**
- Secondary CTA: **Download resume**
- Proof line under CTAs: 5 written recommendations from directors, CTOs and principal architects · US-based · Remote

## 3. Client strip (biggest first)
Morgan & Morgan · LaunchDarkly · CNN · Amazon Web Services · Fidelity · Visa · KPMG · Handshake · ZenBusiness · PBR · D-ID · Astrocade · DFlow · SeeOnMe
- Label: Trusted on production systems at

## 4. Services
Section title: **What I do**
Intro: One senior engineer who can own a product surface end to end, or slot into your team and raise the bar.

1. **AI engineering**
   RAG with per-answer provenance, LLM evaluation harnesses and judge models, agentic tool calling, model management and observability. Shipped to ~4,000 daily users at the largest personal-injury firm in the US.
   Tags: Python · TypeScript · AWS · Elasticsearch · Arize

2. **Web & mobile product engineering**
   Next.js and React on the web, React Native and Expo on mobile, Node and Python on the back end. From greenfield MVPs to hardening legacy apps, with end-to-end tests from day one.
   Tags: Next.js · React Native · Expo · Node · FastAPI · Vercel · Terraform

3. **Senior engineer on your team**
   Embedded with your product and design people, hitting sprint goals, reviewing peers' code and communicating blockers early. It is what every recommendation below says.
   Tags: Agile · Code review · Onboarding · Remote

## 5. Selected work
Section title: **Selected work**

1. **Morgan & Morgan** — AI document intelligence for the largest US personal-injury firm
   Grown from zero to ~4,000 active legal staff, 80% of the firm's attorneys and paralegals. Built RAG retrieval with per-answer provenance, an eval harness with five judge models, agentic tool calling, demand-letter generation on AWS and AI drafting inside Microsoft Word.
   Stat: 0 → ~4,000 daily users
   Stack: Python · TypeScript · AWS · Elasticsearch · Terraform

2. **LaunchDarkly** — Experimentation and Observability features
   Feature-management platform serving 5,500+ enterprise customers and 45 trillion daily flag evaluations.
   Stat: 5,500+ enterprise customers
   Stack: TypeScript · Next.js · React · Storybook

3. **CNN** — One React Native codebase to Roku, Apple TV and Fire TV
   Shipped an OTT app to three TV platforms from a single codebase.
   Stat: 3 platforms, 1 codebase
   Stack: React Native · You.i Kit

4. **Fidelity** — Tokenized investment product, MVP1 and MVP2
   Customer-facing UI from scratch for shares of Bitcoin mining hash-rate profits.
   Stat: 2 MVPs shipped
   Stack: React · Redux · Storybook · ethers.js

More (secondary list): Amazon Web Services (re:Invent conference apps) · Handshake (80% of accessibility violations remediated, 20M+ students) · ZenBusiness (cart and checkout, ~1M businesses formed) · KPMG (BLE hotel-room unlock app) · PBR (fan app) · D-ID (AI talking-avatar video app, 120+ languages) · Astrocade (AI moderation pipeline, 130+ Playwright specs) · DFlow (Solana DEX mobile app, passkeys + MPC wallets) · SeeOnMe (AI virtual try-on UI) · Visa (Visa Checkout)

## 6. How it works
Section title: **How it works**
1. **Tell me the vision** — A 30-minute call. You bring the product problem; I bring questions and, usually, a first plan.
2. **I build it with your team** — Scoped milestones, working software every sprint, code your team can own.
3. **You ship and grow** — Launch, measure, iterate. I stay on as long as it is useful and no longer.

## 7. About
Section title: **Meet Ricardo**
Photo: `[HEADSHOT]` (current site uses a photo of Ricardo in a Polaris RZR in desert dunes)
Bio:
Ricardo has been building software for ten years, the last eight as an independent consultant through RGD Solutions. He started at Visa shipping features for Visa Checkout, came through Hack Reactor, and before that earned a master's in structural engineering, which is why his code tends to be load-bearing.

Since 2017 he has worked with lean startups and Fortune 500 teams alike: LaunchDarkly, CNN, AWS, Fidelity, KPMG, Morgan & Morgan. In the last three years that work has shifted toward AI products: retrieval, evals, agents and the apps around them. He holds Anthropic's Claude Certified Architect certification (2026).

Facts strip: 10 years engineering · 8 years independent · 14 named clients · US citizen, remote
CTA: **Download resume** · secondary: LinkedIn · GitHub

## 8. Testimonials
Section title: **What teams say**
Intro: Five written recommendations, unedited.

1. "Ricardo is the kind of developer management dreams of. He's reliable and seems to always find a way to complete his sprint work even when road bumps are hit. He's an excellent communicator, he's able to speak clearly and concisely about the status of his work or when onboarding new developers. Overall, I would highly recommend Ricardo and hope I get to work more with him in the future."
   — Benjamin Rusczek (CSPO, CSM), Director of Delivery Management at T3

2. "Ricardo is a skilled engineer and pleasure to work with. He was able to quickly become familiar with and contribute to our codebase, was excellent at communicating his task progress, and was very proactive when finding himself blocked and reaching out as needed to unblock himself. I hope to work with him again in the future."
   — Matt Pavelle, CTO at Piñata

3. "I worked with Ricardo on a challenging project and he was an amazing asset to our team! He was responsive, helpful, and reliable, coming through in a pinch on several occasions. Knowledgeable and professional, it was a pleasure having the opportunity to work with him!"
   — Gregory Lund, Director of Engineering at Mobiquity Inc.

4. "I worked with Ricardo as his Scrum Master on one of the most complex web development projects I have ever been on. He was very quick to onboard in the new environment and consistently hit his sprint goal while also contributing to peer reviews for the other developers on the team. Always has a great attitude and is a great communicator on any blockers and issues that occur during the sprint. Ricardo is definitely a developer that you want on your team."
   — Jason Butler, CSM, Principal Project Manager at Blackbaud

5. "Ricardo joined a large scale eCommerce website project for one of our Fortune 500 clients. The project was very dynamic, fast moving, in which agile mindset was very necessary to get things done. Ricardo was able to work in an agile way as required by the project, stick to the Acceptance Criteria mentioned in the Jira tickets, and collaborate with the team in getting tasks done. Most importantly, he is a great team player, and will be a valuable addition to any team."
   — Hersh Amin, Principal Architect at WellSky

## 9. Book a call
Section id: book-a-call
Title: **Book a call**
Body: Thirty minutes, no pitch. Tell me what you are building and I will tell you honestly whether I am the right person to build it.
Form fields:
- Name (required)
- Work email (required)
- Phone (optional)
- Preferred date (date input, required)
- What are you building? (optional, textarea)
- Hidden honeypot: company
Submit: **Request a call**
Success state: "Got it. I'll reply from [CONTACT_EMAIL] within one business day with a time."
Aside: Prefer email? [CONTACT_EMAIL]

## 10. Footer
- Logo + "RGD Solutions"
- [CONTACT_EMAIL] · LinkedIn · GitHub · Resume
- © 2026 RGD Solutions. Remote, US-based.
