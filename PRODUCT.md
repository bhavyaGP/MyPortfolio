# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Hiring managers and recruiters at software companies, deciding in a few minutes whether to interview Bhavya Prajapati for a software or AI engineering role. They arrive from a resume, LinkedIn or a message, often on a laptop between other tabs, sometimes on a phone. The job: find out what he builds, how well, and how to reach him.

## Product Purpose
A single-page personal portfolio for a software engineer who builds backends, retrieval pipelines and the React on top. Success: the visitor understands his real work within the first screen, is curious enough to scroll, and then emails him or opens his resume.

## Positioning
The work is shown as running systems, not screenshots of skills: a live terminal that answers questions about him, architecture figures of the products he built (ValuraAI, QuickLearnAI and its coding evaluation), playable demos, and real hackathon and grant evidence.

## Operating Context
Static React single-page site on Vercel (React 18, Vite, Tailwind for the private page only). `/private/bhavya` is an unrelated internal page and keeps working. The page runs on the taste-skill kit (public/assets) with page CSS in src/site/page.css.

## Capabilities and Constraints
- Interactive hero terminal with commands (help, whoami, now, projects, repos live from GitHub, date, resume, open, and more), suggestion chips, history.
- Project tiles with playable YouTube demos (QuickLearnAI, DevOps automation); ProgressMatrix has only a Drive video link.
- Figures: ValuraAI chat and screener, QuickLearnAI system map, coding evaluation pipeline.
- Hackathon chapters (HackTheSpring 1st, YORK.ie runner-up, CVM University runner-up), grants and awards (SSIP, PlayPower, MakersFest), live GitHub contributions, LeetCode and MonkeyType stats.
- Light and dark theme with an animated switch.
- Content order is fixed: hero, work, experience, hackathons, awards, QuickLearnAI architecture, activity, footer.
- Employer details stay high level: no internal paths, secrets, token lifetimes or audit numbers for ValuraAI. The AI Screener link is global.valura.ai (production).
- No phone number on the page; the ValuraAI WhatsApp bot link is the one allowed number.

## Brand Commitments
Name: Bhavya Prajapati. Voice: plain, exact, dry humour in the hero and terminal only. Never claim Gujarat or any state in the headline. Current role: AI engineering intern at ValuraAI; previously CodemateAI (Aug 2025 to Aug 2026).

## Evidence on Hand
Real photos of hackathon wins and the SSIP handover, demo thumbnails from real videos, resume at flowcv.com/resume/8dqwp06k81l8, live GitHub data. Absent: ProgressMatrix screenshot, ValuraAI screenshots, a production AI Screener URL, ValuraAI start month, testimonials (none, none to be invented).

## Product Principles
1. Show systems running, not adjectives.
2. The first screen must make a recruiter curious and tell them who and what, with one hard fact.
3. Every claim is backed by something on the page: a number, a link, a photo, a diagram.
4. One action matters: email or resume.
5. Nothing is invented; unknowns stay out.

## Accessibility & Inclusion
Text contrast at least 4.5:1, keyboard-operable terminal and chips, reduced-motion respected, usable at 390px.
