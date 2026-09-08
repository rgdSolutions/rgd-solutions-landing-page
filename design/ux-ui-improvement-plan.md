# RGD Solutions: UX/UI and team positioning plan

Date: September 7, 2026  
Status: Proposed implementation plan and draft copy.  
Scope: Improve the existing landing page and present RGD Solutions as a team of developers led by Ricardo D’Alessandro.

This document builds on the live desktop and mobile review. It does not change the deployed page. During implementation, update `design/copy.md` (the copy source of truth) and `content/site.ts` together.

## 1. Outcome and positioning

Help a prospective client quickly understand what RGD Solutions builds, see evidence of relevant experience, understand how an engagement works, and request a conversation.

**Core positioning:** RGD Solutions is a development team led by Ricardo D’Alessandro, building AI products and web and mobile applications.

Lead with the client's product and delivery needs. Explain the technology after establishing the benefit. Make Ricardo visible as the team's leader without implying that he is the only developer.

### Copy rules

- Use “we,” “our team,” and “RGD Solutions” for the current business and service offering.
- Use “Ricardo” for his biography, personal qualifications, historical contributions, and recommendations about him.
- Do not mechanically replace “I” with “we” in past project claims or testimonial quotations.
- Describe historical work as Ricardo's experience unless participation by the RGD Solutions team is established. Distinguish company engagements from work performed through another employer or consultancy where relevant.
- Do not imply every developer has Ricardo's tenure, credentials, location, or client history.
- Do not invent team size, names, seniority, availability, pricing, or guaranteed delivery times.
- Preserve accurate quotations. Label excerpts as excerpts and keep full recommendations available.

### Working audience assumption

Prioritize founders, product leaders, and engineering leaders who need an AI product shipped, a web/mobile application built or improved, or developers integrated into their existing team. Lead with AI delivery while keeping web/mobile services visible. Revisit emphasis if lead quality suggests a different primary audience.

## 2. Proposed page structure

1. **Navigation:** Services, Work, Team, FAQ; primary action “Request a call.”
2. **Hero:** Short outcome-led headline, explicit team positioning, two actions, product visual.
3. **Experience strip:** A small selection of recognizable client logos with accurate attribution.
4. **Featured project:** Morgan & Morgan, with a substantial visual and a link to the project story.
5. **Services:** Three ways to work with the team, described through buyer needs.
6. **Supporting projects:** CNN, LaunchDarkly, Fidelity; links to substantive project stories.
7. **Process:** Three simple steps, shown without another row of heavy cards.
8. **Recommendations:** Three short excerpts, with full versions available.
9. **Team and leadership:** Team introduction, Ricardo's leadership profile, real developer profiles when available.
10. **FAQ:** Engagement model and practical buying questions.
11. **Contact:** Consistent request-a-call flow and a clear response expectation.
12. **Footer:** Contact and relevant social links; Ricardo's résumé as a secondary resource.

Retain existing anchor IDs where practical so saved links keep working. “Team” can initially link to `#about` and “Request a call” to `#book-a-call`.

## 3. Proposed copy

The following is draft replacement copy. Items explicitly marked for confirmation are content dependencies, not claims to publish automatically.

### Navigation and hero

| Element | Proposed copy |
| --- | --- |
| Navigation CTA | Request a call |
| Eyebrow | AI, web & mobile development |
| Headline | Get your AI product into production. |
| Supporting paragraph | RGD Solutions is a team of developers led by Ricardo D’Alessandro. We build AI products and web and mobile apps, working with you from the first version through launch and ongoing development. |
| Primary CTA | Request a 30-minute call |
| Secondary CTA | See selected work |
| Proof line | Led by Ricardo D’Alessandro, whose engineering experience includes LaunchDarkly, CNN, AWS, and Fidelity. |

Move company names out of the headline. Replace the hero résumé action with a link to `#work`. Keep the first screen concise at mobile widths; proof and product imagery should appear early in the scroll.

Use the featured project's visual in the desktop hero's currently underused right side. Put its caption and attribution next to the visual. Avoid repeating the same large image immediately below: the featured section can show a different detail or workflow.

### Experience strip and metrics

**Strip label:** “Our team is led by an engineer with experience at”

Initially show a curated set of approximately five or six recognizable logos. Confirm the displayed relationship for each, and use more precise wording when an engagement was through another company.

Remove the generic “14 named clients” hero metric. If retained elsewhere, reconcile the count with the actual project list and attribute it correctly.

Move Ricardo's tenure into his leadership profile. Move product adoption metrics into the corresponding project, with a definition and date. Current copy alternates between “daily users” and “active legal staff”; resolve that discrepancy before reusing the ~4,000 figure.

### Featured project

**Eyebrow:** Featured experience  
**Title:** AI document intelligence for legal teams  
**Client:** Morgan & Morgan  
**Draft summary:** “Ricardo's work at Morgan & Morgan included document retrieval with source references, AI drafting, and tools for evaluating answer quality.”  
**CTA:** Read the project story

Add the verified adoption result as a separate, dated metric. Confirm Ricardo's exact responsibility and whether other RGD Solutions developers participated before describing the work as a team engagement.

Each project story should include:

- The client's problem and users.
- Who did the work, their role, and the engagement context.
- What was built and the relevant constraints.
- One or two useful screenshots, a short demo, or a clearly labeled illustrative diagram.
- Results attributable to the work, with definitions and dates for metrics.
- Technology details below the business explanation.
- A relevant CTA, such as “Discuss a similar project.”

For LaunchDarkly, explain the actual feature contribution. Its overall customer count and flag-evaluation volume are company context, not an outcome attributable to RGD Solutions. For CNN and Fidelity, confirm the scope behind the platform and MVP counts before presenting them as results.

Replace the dense “More” paragraph with a short, readable list of additional experience or a dedicated work index. Publish project links only when their destinations contain a real story.

### Services

**Title:** How we can help  
**Intro:** “Bring us a new product, an application that needs improvement, or a roadmap your team needs help delivering.”

**1. Build AI into your product**

“Give your users tools to find answers in documents, draft content, and complete tasks. We build the application around the AI, including source references, quality checks, and monitoring.”

Secondary technical detail: Retrieval-augmented generation, evaluations, tool calling, Python, TypeScript, AWS.

**2. Build and improve web & mobile apps**

“Turn your product idea into a working application, or improve the one you already have. Our team builds web and mobile experiences and the backend services that support them.”

Secondary technical detail: React, Next.js, React Native, Expo, Node, Python.

**3. Extend your development team**

“Add developers who work alongside your product, design, and engineering team. We help deliver features, review code, and keep work moving with clear communication.”

Secondary detail: Feature delivery, code review, collaboration, ongoing development.

Keep technology tags subordinate to the service explanation. Confirm the proposed engagement options match how RGD Solutions currently operates before publishing.

### Process

**Title:** From first conversation to working software

1. **Tell us what you need.** “In a 30-minute conversation, we discuss your product, priorities, and constraints.”
2. **Agree on the scope and team.** “We outline the work, milestones, and developers involved so you know how the engagement will run.”
3. **Build, review, and launch.** “We share progress, review working software with you, and prepare for release. Ongoing support is agreed as part of the engagement.”

Confirm the operating process before publishing. Avoid promises of fixed launch dates or unlimited support.

### Recommendations

**Title:** What colleagues and clients say about Ricardo  
**Intro:** “Recommendations about the engineer leading RGD Solutions.”

Feature three distinct themes using accurate excerpts from the existing recommendations:

- **Communication:** Benjamin Rusczek — “He's an excellent communicator, he's able to speak clearly and concisely about the status of his work or when onboarding new developers.”
- **Onboarding:** Matt Pavelle — “He was able to quickly become familiar with and contribute to our codebase, was excellent at communicating his task progress, and was very proactive when finding himself blocked and reaching out as needed to unblock himself.”
- **Reliability:** Gregory Lund — “He was responsive, helpful, and reliable, coming through in a pinch on several occasions.”

Keep original names and role attribution. Provide “Read full recommendation” disclosures and source links where available. Do not change “Ricardo” to “RGD Solutions” within quotations. Add team-specific testimonials when available.

### Team and leadership

**Eyebrow:** Our team  
**Title:** A development team led by Ricardo D’Alessandro

“RGD Solutions brings together developers to build AI products and web and mobile applications. Ricardo leads the team, drawing on his experience working with startups and enterprise engineering organizations.”

**Leadership profile heading:** Meet Ricardo, our team lead

“Ricardo's background spans full-stack applications, React Native, and AI product engineering. His experience includes work with LaunchDarkly, CNN, AWS, Fidelity, and Morgan & Morgan.”

**Secondary links:** Ricardo's résumé · Ricardo on LinkedIn · Ricardo on GitHub

Use Ricardo's existing portrait and add real developer portraits, names, roles, and short specialties when supplied. The team introduction can ship before individual profiles are ready. Do not use stock portraits to represent actual team members.

Replace personal citizenship and “years independent” badges with information that helps buyers understand the team. Publish team location, working-hour overlap, and Ricardo's specific involvement only once established.

### FAQ

**Title:** Working with RGD Solutions

Draft answers supported by the proposed positioning:

- **Who will build our product?** “Your project will be built by developers from RGD Solutions, led by Ricardo D’Alessandro. We will discuss the people involved and their responsibilities when defining the engagement.”
- **Can you work with our existing team?** “Yes. We can collaborate with your product, design, and engineering team on an existing application or a new product.”
- **What happens after we request a call?** “We reply within one business day to arrange a 30-minute conversation about your goals, current product, and the help you need.”

Prepare factual answers before publishing the following:

- What engagement lengths and commercial models do you offer?
- What is the typical starting budget, if there is a consistent minimum?
- When can a project start?
- Which time zones and working hours does the team cover?
- How involved is Ricardo during delivery?
- What does handover and post-launch support include?

If an answer is unavailable, omit that FAQ until it can be answered meaningfully. Do not publish placeholders or invented ranges.

### Contact flow

**Default decision:** Retain the existing request form and make the language accurately describe it. Real-time scheduling is a later option, not a dependency for these improvements.

| Element | Proposed copy |
| --- | --- |
| Section heading | Request a 30-minute call |
| Introduction | Tell us what you are building and where you need help. We will discuss your goals and whether our team is a good fit. |
| Name label | Name |
| Email label | Email |
| Message label | What are you building? (optional) |
| Message placeholder | Tell us about your product and the help you need. |
| Submit | Request a call |
| Pending state | Sending… |
| Response note | Our team will reply from [CONTACT_EMAIL] within one business day to arrange a time. |
| Success | Thanks for getting in touch. We will reply within one business day to arrange your call. |
| Failure | Your request could not be sent. Please try again or email us at [CONTACT_EMAIL]. |

Keep name and email required. Recommended simplification: remove phone and preferred date from the initial form; agree on a time in the response. Update the schema, handler, and notification template together if changing fields. If preferred date remains, make it optional and explain that it is a request, not a reserved appointment.

Keep contact details sourced from existing configuration. If immediate booking is added later, offer actual available times, timezone selection, and a clear booking confirmation before changing CTAs back to “Book.”

### Footer and metadata

**Footer descriptor:** “AI, web & mobile development. Led by Ricardo D’Alessandro.”  
**Résumé link:** “Ricardo's résumé”  
**Page title:** “RGD Solutions | AI, Web & Mobile Development Team”  
**Meta description:** “RGD Solutions is a development team led by Ricardo D’Alessandro. We build AI products and web and mobile apps, and work alongside your engineering team.”

Update social preview text and any organization/person structured data to match. Keep personal social profiles clearly labeled as Ricardo's. Confirm business location before retaining “US-based” as a company-wide descriptor.

## 4. Visual and interaction changes

- Preserve the existing dark palette, readable typography, and obvious primary buttons.
- Shorten the hero and balance the desktop columns with meaningful product imagery.
- Establish variety: large project feature, compact service blocks, unboxed process, selected quotes, and a human team section.
- Reduce decorative glow and repetitive card borders where they compete with content.
- Give screenshots enough space to communicate the product. Use legible crops and captions rather than tiny device mockups.
- Bring client evidence closer to the hero. Keep logos recognizable and correctly proportioned.
- Use readable body text and secondary labels; measure contrast instead of assuming muted text passes.
- On mobile, keep the primary action prominent and avoid making the headline, biography, or testimonials dominate several screens.
- Make project links explicit, keyboard accessible, and visually distinguishable from noninteractive content.
- Keep anchor targets clear of the sticky header. Verify the mobile menu closes and keyboard focus remains usable.
- Ensure core content remains accessible with reduced motion and does not depend on decorative scroll reveals to be discoverable.
- Keep the contact form's loading state understandable and ensure direct CTA navigation reliably loads it.

## 5. Reference sites

Use these as pattern references from the review, not templates to copy wholesale:

| Site | Pattern to adopt | Application to RGD Solutions |
| --- | --- | --- |
| [Infinite Red](https://infinite.red/) | Product imagery, concise buyer-focused hero, recognizable proof | Show software immediately and shorten the initial promise. |
| [thoughtbot](https://thoughtbot.com/) | Featured customer story near the top; human team presence | Feature one well-explained result and present the developers behind the service. |
| [Callstack](https://www.callstack.com/) | Specific service paths and project outcomes | Help buyers identify their need and explore relevant evidence. |

## 6. Implementation sequence

### Phase 1 — Positioning and conversion clarity

- [ ] Apply team language to service, hero, process, contact, footer, and metadata copy.
- [ ] Preserve individual attribution in historical work and recommendations.
- [ ] Replace hero résumé action with “See selected work”; remove résumé from primary navigation.
- [ ] Standardize request-a-call wording, including success and error states.
- [ ] Simplify the contact fields and update affected validation and notification behavior.
- [ ] Reconcile metrics and logo attribution before reusing them.

Likely files: `design/copy.md`, `content/site.ts`, `components/sections/nav.tsx`, `components/sections/hero.tsx`, `components/sections/about.tsx`, `components/sections/book-call-form.tsx`, `components/sections/footer.tsx`, `lib/schedule-call/schema.ts`, and related contact handling/templates. Inspect metadata consumers in `app/` before editing.

### Phase 2 — Visual proof and page hierarchy

- [ ] Prepare one substantive featured project and its visual assets.
- [ ] Add project story destinations and meaningful links from the landing page.
- [ ] Reorder sections and give the featured project clear visual priority.
- [ ] Revise hero composition, logo strip, service blocks, and process layout.
- [ ] Replace the dense additional-work paragraph with scannable entries.
- [ ] Show selected testimonial excerpts with access to full versions.

Likely files: `app/page.tsx`, `components/sections/work.tsx`, `components/sections/clients.tsx`, `components/sections/services.tsx`, `components/sections/process.tsx`, `components/sections/testimonials.tsx`, shared UI/styles, and new project routes/assets as needed.

### Phase 3 — Team and buying details

- [ ] Add the team introduction and Ricardo's leadership profile.
- [ ] Add real developer profiles when details are available.
- [ ] Publish factual engagement FAQs.
- [ ] Align footer, social previews, and structured data with the team positioning.

### Phase 4 — Verification and measurement

- [ ] Read applicable `AGENTS.md` instructions and relevant guides in `node_modules/next/dist/docs/` before writing Next.js code.
- [ ] Use relevant frontend/React skills during implementation.
- [ ] Check desktop and mobile layouts at 1440px, 768px, 390px, and 320px; verify no horizontal overflow or clipped controls.
- [ ] Check keyboard navigation, visible focus, contrast, zoom, reduced motion, and FAQ/testimonial disclosures.
- [ ] Verify hero/nav CTA anchors, menu behavior, project routes, résumé download, and configured contact links.
- [ ] Check form loading from direct anchor navigation, required-field errors, pending state, failure, and success using mocked delivery.
- [ ] Update meaningful existing tests for changed behavior; run repository checks and a production build. Do not send test emails to real recipients without authorization.
- [ ] Compare image weight, layout shifts, and loading performance before and after the visual changes.
- [ ] Measure call-request CTA clicks, project-story visits, successful requests, and qualified inquiries where supported. Keep form contents and personal data out of analytics events.
- [ ] Review lead quality and conversion after a meaningful traffic sample; set targets after establishing a baseline.

## 7. Content dependencies and completion criteria

### Content to gather during implementation

- Team members, roles, portraits, and how Ricardo participates in delivery.
- Actual engagement models, location/timezone coverage, availability, and support terms.
- Exact project responsibilities and individual versus team participation.
- Definitions, dates, and evidence for published metrics.
- Suitable product screenshots or demos and what may be shown publicly; use labeled illustrative visuals when real screens cannot be shown.
- Source links for recommendations and additional team-level testimonials when available.

These dependencies should not delay supported copy and layout improvements. Omit unsupported claims and unfinished content from the published version.

### Definition of done

- The first screen clearly introduces RGD Solutions as a development team led by Ricardo.
- The headline communicates a concise buyer outcome, with web/mobile scope visible in supporting copy.
- At least one project has meaningful visual evidence and a complete linked story.
- Historical experience and quotations remain accurately attributed.
- Visitors can identify a relevant service and understand the next step.
- Contact language matches the actual request or booking behavior.
- The page has varied, readable layouts on desktop and mobile and passes the relevant interaction checks.
- `design/copy.md`, `content/site.ts`, visible UI, and metadata agree.

## 8. Implementation status — September 7, 2026

Implemented on `codex-ui-facelift`:

- Team-led positioning throughout hero, services, process, about, form, footer, and metadata.
- Shortened hero with a labeled HTML/CSS workflow illustration and a selected-work CTA.
- Curated six-logo experience strip with individual leadership attribution.
- Featured Morgan & Morgan project and four linked, statically generated project stories with metadata and sitemap entries.
- Removed unverified adoption/client-count hero badges and company-scale outcome claims.
- Varied layouts for services, projects, process, testimonials, and team.
- Three recommendation excerpts with full originals available; two additional originals retained in a disclosure.
- Team introduction and Ricardo's leadership portrait; factual FAQs with native disclosures.
- Three-field request form; date/phone remain optional in the API for compatibility. Email formatting supports requests without dates.
- Server-rendered form and visible section content; no scroll-reveal dependency for core content.
- Skip link, focus outlines, updated mobile navigation, and project-page return links.
- Synchronized implemented copy in `design/copy.md`.

Still pending owner input or later measurement:

- Real product screenshots/demos and richer first-hand project details. Current illustration is explicitly illustrative.
- Developer identities, roles, portraits, and team-level recommendations.
- Ricardo's day-to-day involvement, time zones, budgets, availability, and engagement terms.
- Confirmation of individual versus team project participation and the ~4,000 adoption metric's definition/date.
- Quantitative before/after performance and lead-conversion baselines; existing Vercel analytics remain installed.
- Immediate calendar booking, if wanted later; current copy accurately describes a call request.

The supported changes can be reviewed without those inputs. No deployment or real email submission is included in implementation verification.

### Verification completed

- `pnpm checks`: TypeScript, lint, formatting, and 62 tests pass.
- `pnpm build`: production build passes; all four project pages are prerendered.
- Chrome: no horizontal overflow at 320, 390, 768, or 1440px; sticky header remains at the viewport top.
- Mobile menu, FAQ disclosures, direct contact anchor, field validation, and mocked successful submission checked.
- All four project routes return 200; no page errors in the interaction run.
- Automated axe checks found no violations on the homepage in dark/light themes, the form error state, or the featured project page after fixing light-theme teal contrast.
- Core page content is visible with JavaScript disabled. These checks do not replace a full manual accessibility audit or field performance measurements.

### Store imagery implemented — September 8, 2026

D-ID and Astrocade now have two homepage images each and three-image project galleries, with intact store artwork, mobile stacking, descriptive alt text, and official store links. Their project pages are included automatically in the sitemap and prerendered routes. Other client screenshots and team profiles remain pending.

### CNN+ case study — September 8, 2026

Expanded the existing CNN route with the confirmed CNN+ product name, engineering scope, original-service history, linked source coverage, and three CNN-credited archive images. Two appear on the homepage. Added landscape gallery support and per-image credits while retaining the portrait app galleries. The 2025 All Access service is explicitly separate.

CNN+ gallery refinement: show only the first image on the homepage. Keep all three original images on the detail page, including the original white-background artwork; the transparent edit was reverted.
