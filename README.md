# Nasir Khan ? Portfolio

Product engineering, full-stack systems and AI agents, with eight working project previews.

Public portfolio: https://nasir-khan-portfolio-cyan.vercel.app/

GitHub Pages mirror: https://imnasir-x.github.io/portfolio/

## Local preview

Run `python -m http.server 4268 --bind 127.0.0.1` from this repository, then open http://127.0.0.1:4268.

This site uses static HTML, CSS and JavaScript. No installation or build step is required. `live-previews.js` and `live-previews.css` implement the homepage and Explore artifacts. Actual product interfaces remain in the detail views, and the original watercolor images remain available as fallbacks and editorial material.

## Live artifacts

- Kormoo: SVG factory flow, simulated orders, packing counter and attendance.
- Sujog: scripted agent state machine, human approval, audit history and kill switch. No model or external action.
- The Age of GenZ: scroll-responsive publication stages with explicit stage controls. Sample spread, not a live publication claim.
- Pathshala: role-dependent assignment, teacher-review and class-roster illustrations, plus a role switcher and simulated API outcomes, separate from the real backend implementation linked in the case study.
- Zephra: the original deterministic classifier, editable URL context, illustrated landing-page variations and an expandable decision trace. Unknown context restores the baseline. Automatic examples stop when the visitor interacts.
- xAI study: an original WebGL data field and selectable relationships, with no company affiliation.
- VoiceArt: a WebGL orb with local Web Audio analysis, generated tone sample and opt-in microphone. Audio is never recorded or uploaded. Stop, offscreen, hidden-tab and dialog cleanup release microphone tracks.
- Strawberry Shooter: a keyboard and pointer playable Canvas 2D adaptation of the original Python/Pygame experiment.

Animation pauses offscreen and respects reduced motion. Explicit controls remain available without continuous animation. WebGL is limited to the data field and orb; contexts are released offscreen and while the homepage is covered by a project dialog. Canvas pixel ratio is capped at 2. No animation libraries, AI calls or runtime dependencies are added.

## Hosting

GitHub Pages serves the root of the `main` branch. The existing `portfolio.html` address redirects to the current homepage.

For Vercel, import this repository with Framework Other, Root Directory at the repository root and no build command. `vercel.json` serves the static root directly. No secrets or environment variables are needed. Use the confirmed public production URL for canonical and Open Graph URLs after deployment.

## Truth and privacy

Kormoo and Sujog.ai are in development. The Age of GenZ was built and operated. Pathshala and Zephra have public code. The xAI project is an independent interface study with no affiliation. Illustrations are editorial representations, not screenshots or customer photographs. Private project sources, credentials and production records are excluded.

The selected r?sum? is served unchanged. Image-generation prompts are documented in `illustration-prompts.json`; responsive exports are in `assets/illustrations/`.
