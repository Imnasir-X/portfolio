(() => {
'use strict';
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const motion=matchMedia('(prefers-reduced-motion: reduce)');
const transition=change=>{if(!motion.matches&&document.startViewTransition){document.startViewTransition(change).finished.catch(()=>{});}else change();};
const themeButton=$('.theme-button');
function setTheme(theme){document.documentElement.dataset.theme=theme;document.querySelector('meta[name="theme-color"]').content=theme==='dark'?'#0A0A0A':'#F3F0E8';themeButton.textContent=theme==='dark'?'Light':'Dark';themeButton.setAttribute('aria-label',`Switch to ${theme==='dark'?'light':'dark'} theme`);}
try{const saved=localStorage.getItem('nasir-theme');if(saved==='light'||saved==='dark')setTheme(saved);}catch{}
themeButton.addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';transition(()=>setTheme(theme));try{localStorage.setItem('nasir-theme',theme);}catch{}});
const projects={
  "kormoo": {
    "name": "Kormoo",
    "kind": "01 / FACTORY OPERATIONS · PRODUCT IN DEVELOPMENT",
    "intro": "A Bengali-first app for recording production, attendance, orders and expenses in small garment factories. Product in development.",
    "stack": [
      "TypeScript",
      "React",
      "NestJS",
      "PostgreSQL"
    ],
    "image": "assets/kormoo-production.webp",
    "imageAlt": "Actual Kormoo production-entry screen showing stage selection, quantity, save and undo with isolated test data",
    "imageWidth": 1440,
    "imageHeight": 1400,
    "imageCaption": "Production entry and undo / actual interface, isolated browser-test data",
    "diagram": "kormoo",
    "sections": [
      {
        "label": "The problem",
        "text": "Small factories often run important workflows across paper records, spreadsheets, calculators and messaging apps. Production, orders, attendance and financial records become fragmented."
      },
      {
        "label": "The product",
        "text": "Kormoo creates a structured operating layer across the customer app, WhatsApp and HQ oversight. These are connected product workflows, with the product still in development.",
        "items": [
          "Production and order records.",
          "Attendance, wage and expense workflows.",
          "Reporting and WhatsApp-linked operations.",
          "HQ oversight and operational intelligence groundwork."
        ]
      },
      {
        "label": "What i built",
        "text": "Production save and undo workflows are implemented; the product is still in development."
      },
      {
        "label": "How i approached it",
        "text": "The work starts with understanding factory workflows, then making their rules explicit in the system.",
        "items": [
          "Workflow discovery and data modelling.",
          "API design, authentication and role-based permissions.",
          "Mobile-first UI and connected operational flows.",
          "Testing and permission checks across application boundaries.",
          "AI and agent groundwork for governed internal operations."
        ]
      },
      {
        "label": "Current state",
        "text": "Product in development. The architecture and operational workflows are real engineering work; this overview makes no claim of launched adoption or proven business outcomes."
      },
      {
        "label": "Decisions",
        "items": [
          "Keep Bengali-first entry close to the factory workflow, rather than forcing an accounting-style interface.",
          "Enforce authentication and role permissions at the API.",
          "Give production entry a recovery path through save and undo."
        ]
      }
    ],
    "evidence": "Product in development. Portfolio-level overview; private source and internal operating details stay private.",
    "role": "Product design · Full-stack engineering",
    "outcome": "Production save and undo workflows are implemented; the product is still in development.",
    "lead": "Factory operations, made clearer.",
    "status": "Product in development",
    "extraImages": [
      {
        "image": "assets/kormoo-payslip.webp",
        "alt": "Kormoo approved payslip for Customer QA Worker using disposable test records",
        "width": 358,
        "height": 684,
        "caption": "Approved payslip / actual customer app with disposable QA records."
      }
    ]
  },
  "sujog": {
    "image": "assets/sujog-interface.webp",
    "imageAlt": "Sujog recruiter interface with an example goal and a human approval control. Local development preview; the goal was not submitted.",
    "imageWidth": 1440,
    "imageHeight": 800,
    "imageCaption": "Interface in development. Local preview; example goal, no agent run.",
    "name": "Sujog.ai",
    "kind": "02 / AGENTIC HIRING SYSTEM · PRIVATE PROJECT · ACTIVE DEVELOPMENT",
    "intro": "Recruiter and applicant agents retrieve matches, score the evidence and propose next steps. People approve controlled actions. The backend and governance foundation are implemented; the product remains in development.",
    "stack": [
      "Python",
      "FastAPI",
      "LangGraph",
      "PostgreSQL",
      "pgvector"
    ],
    "diagram": "sujog",
    "sections": [
      {
        "label": "The problem",
        "text": "Most recruitment software helps users search records. Sujog explores what happens when software can instead participate in the workflow: interpret a goal, retrieve evidence, evaluate options and propose the next step."
      },
      {
        "label": "The agent loop",
        "text": "A goal becomes a sequence of bounded steps. Retrieval and scoring provide evidence; approval gates decide whether a permitted action can proceed. This loop expresses the product direction, rather than a claim that every end-to-end workflow has shipped.",
        "loop": [
          "Goal",
          "Reason",
          "Search",
          "Evaluate",
          "Propose",
          "Approve",
          "Act",
          "Follow up"
        ]
      },
      {
        "label": "What i built",
        "text": "Recruiter/applicant agents and governance controls are implemented. Outreach remains a human-reviewed draft."
      },
      {
        "label": "Two sides",
        "text": "Recruiter and applicant agents work from different perspectives, using the same governance principles.",
        "items": [
          "Recruiter: interpret a job description, retrieve candidates, score evidence and propose a shortlist.",
          "Applicant: interpret a CV and goal, retrieve jobs, score fit and recommend next steps.",
          "Applicant outreach is drafted for human review; it is never automatically sent."
        ]
      },
      {
        "label": "Control",
        "text": "Autonomy is bounded by permissions, approval gates, audit history, runtime configuration, cost constraints and capability boundaries. A kill switch can stop an agent; versioned runtime configuration makes behavior traceable.",
        "items": [
          "RBAC and explicit capability boundaries.",
          "Human approval before controlled actions.",
          "Audit history and versioned runtime.",
          "Cost controls and kill switches."
        ]
      },
      {
        "label": "Decisions",
        "items": [
          "Separate retrieval and evidence from permission to act.",
          "Put approvals, capability boundaries and audit history around the agent loop.",
          "Keep applicant outreach as a draft for human review."
        ]
      }
    ],
    "evidence": "Private project · Active development. Product agents and governance foundation are implemented; production hiring outcomes and a launched recruitment service are not claimed.",
    "role": "Backend architecture · Agent workflows",
    "outcome": "Recruiter/applicant agents and governance controls are implemented. Outreach remains a human-reviewed draft.",
    "lead": "AI that can help act. Humans stay in control.",
    "status": "Private project · Active development"
  },
  "genz": {
    "image": "assets/genz-publishing.webp",
    "imageAlt": "The Age of GenZ publishing homepage with sample articles and its original hourglass artwork. Local preview.",
    "imageWidth": 1440,
    "imageHeight": 950,
    "imageCaption": "Publishing interface. Actual frontend with local sample articles.",
    "sourceUrl": "https://github.com/Imnasir-X/ageofgenz_frontend",
    "name": "The Age of GenZ",
    "kind": "03 / DIGITAL MEDIA · BUILT & OPERATED",
    "intro": "I designed, built, deployed and operated a digital media platform. After launch I worked on publishing, automation and improvements from actual use.",
    "stack": [
      "React",
      "Python",
      "Django",
      "PostgreSQL"
    ],
    "diagram": "genz",
    "sections": [
      {
        "label": "The problem",
        "text": "A publishing platform needs more than a finished homepage. It needs a content structure, editorial workflow and supporting operations that make repeat publishing practical."
      },
      {
        "label": "Designed & built",
        "text": "I designed the product structure and publishing experience, then built the website, backend and supporting system through deployment. Structured content and editorial review provide the foundation for publishing."
      },
      {
        "label": "What i built",
        "text": "Shipped and operated the platform, then improved publishing workflows through actual use."
      },
      {
        "label": "Operated & automated",
        "text": "Day-to-day content operations exposed recurring work and friction. I built publishing workflows and automation to support the process, keeping review and publishing decisions explicit."
      },
      {
        "label": "Improved through use",
        "text": "Feature updates and workflow improvements came from actual use, reader feedback and publishing needs. The work continued after launch: operate the product, understand the friction, then improve the system."
      },
      {
        "label": "Decisions",
        "items": [
          "Model content and editorial review explicitly so publishing can be repeated.",
          "Automate recurring publishing work while keeping review decisions visible.",
          "Use day-to-day publishing feedback to decide what to improve."
        ]
      }
    ],
    "evidence": "Built & operated. This case study describes product ownership and publishing work without invented readership, revenue or engagement metrics.",
    "role": "Design · Full stack · Publishing operations",
    "outcome": "Shipped and operated the platform, then improved publishing workflows through actual use.",
    "lead": "Built. Published. Operated.",
    "status": "Built & operated"
  },
  "pathshala": {
    "image": "assets/pathshala-assignments.webp",
    "imageAlt": "Pathshala student assignment list showing published work. Local preview with sample assignments.",
    "imageWidth": 1440,
    "imageHeight": 360,
    "imageCaption": "Student assignment view. Actual frontend with local sample assignments.",
    "diagram": "pathshala",
    "name": "Pathshala",
    "kind": "04 / FULL-STACK SYSTEM · PUBLIC CODE",
    "intro": "Assignments, submissions and grading for students, teachers and administrators. Permission rules are enforced by the API.",
    "stack": [
      "Next.js",
      "ASP.NET Core",
      "PostgreSQL"
    ],
    "sections": [
      {
        "label": "The problem",
        "text": "The same platform serves three roles without mixing their permissions. Assignments, deadlines, ownership and grading have rules the interface alone cannot enforce."
      },
      {
        "label": "The approach",
        "text": "A Next.js frontend connects to an ASP.NET Core API. Role and ownership checks live in the backend, alongside rules for visibility, deadlines and valid marks."
      },
      {
        "label": "What i built",
        "text": "The API enforces assignment visibility, submission ownership, deadlines and grading rules."
      },
      {
        "label": "How it works",
        "items": [
          "Students see published assignments for their class; drafts stay with teachers.",
          "Only the owning student can revise a submission, and only before the deadline.",
          "Teachers grade their own assignments. Invalid marks and duplicate submissions are rejected.",
          "Admins manage the shared platform."
        ]
      },
      {
        "label": "The system boundary",
        "text": "Permissions enforced at the API. Hiding a button helps someone navigate, but the backend must still reject an operation they do not own."
      },
      {
        "label": "Decisions",
        "items": [
          "Enforce role and ownership rules in the API, even when the interface hides an action.",
          "Reject invalid grades and duplicate submissions at the system boundary."
        ]
      }
    ],
    "evidence": "Public code. The README documents the business rules and backend test suite. This overview does not claim a production rollout.",
    "sourceUrl": "https://github.com/Imnasir-X/pathshala-assignment-system",
    "role": "Frontend · API · Permission rules",
    "outcome": "The API enforces assignment visibility, submission ownership, deadlines and grading rules.",
    "lead": "Assignments, submissions and grading across three roles.",
    "status": "Public code"
  },
  "zephra": {
    "name": "Zephra",
    "kind": "05 / PERSONALIZATION ENGINE · PUBLIC CODE",
    "intro": "The URL selects approved landing-page copy. A deterministic classifier matches intent, and unfamiliar input leaves the original page alone.",
    "stack": [
      "JavaScript",
      "DOM",
      "Zero dependencies"
    ],
    "image": "assets/zephra.webp",
    "imageAlt": "Zephra tool-tracking variation of the landing page",
    "sections": [
      {
        "label": "The problem",
        "text": "Paid traffic arrives with clues about intent. A personalization layer can use those clues, while preserving the original page when the input is unfamiliar."
      },
      {
        "label": "The approach",
        "text": "Read four tracked parameters, normalize values, classify against approved phrases and word lists, then update only five permitted targets. Unknown input keeps the original page intact."
      },
      {
        "label": "What i built",
        "text": "Deterministic matching changes approved copy; unfamiliar input preserves the original page."
      },
      {
        "label": "The decision trace",
        "items": [
          "Parameter precedence: keyword, ad, campaign, then source.",
          "Deterministic matching against approved phrases and words.",
          "URL values never become rendered HTML. Copy comes from approved configuration.",
          "No model call. Fail-open behavior preserves the original page."
        ]
      },
      {
        "label": "An inspectable system",
        "text": "No model, backend or framework is needed for this bounded problem. A pure classifier and one controlled DOM writer keep the behavior inspectable. The live Context Inspector on this portfolio uses the original matching functions."
      },
      {
        "label": "Decisions",
        "items": [
          "Choose from approved copy instead of rendering URL input as HTML.",
          "Use a deterministic classifier for this bounded problem.",
          "Preserve the original page when no approved context matches."
        ]
      }
    ],
    "evidence": "Public code. The live inspector explains the decision without modifying the original landing page.",
    "sourceUrl": "https://github.com/Imnasir-X/zephra-dynamic-landing",
    "role": "Matching logic · DOM integration",
    "outcome": "Deterministic matching changes approved copy; unfamiliar input preserves the original page.",
    "lead": "The URL changes the message. Unknown context leaves it alone.",
    "status": "Public code"
  },
  "xai": {
    "name": "xAI Intelligence Workspace",
    "kind": "PLAYGROUND / INDEPENDENT INTERFACE STUDY",
    "intro": "An exploration of how a dense intelligence product can feel clear, responsive and alive. An independent interface study, with no affiliation with xAI.",
    "stack": [
      "Next.js",
      "WebGL",
      "GSAP"
    ],
    "image": "assets/xai-hero.webp",
    "imageAlt": "Independent xAI frontend interface study",
    "sections": [
      {
        "label": "The question",
        "text": "How can an abstract intelligence product feel understandable? A visual effect earns its place when it communicates the idea without competing with the interface."
      },
      {
        "label": "The exploration",
        "text": "A WebGL lattice transitions from scattered points to a structured grid. Scroll-driven motion connects stages of the insight flow and leads into a dashboard preview."
      },
      {
        "label": "The interaction",
        "items": [
          "Pointer movement creates an eased response in the hero.",
          "Motion connects stages of the product narrative.",
          "Dashboard values are illustrative preview data."
        ]
      },
      {
        "label": "The study",
        "text": "A frontend interface study rather than a shipped intelligence service. The experience explores visual clarity, hierarchy and responsive interaction."
      }
    ],
    "evidence": "Independent interface study. Screenshots come from the public repository; no employment or company affiliation is implied.",
    "sourceUrl": "https://github.com/Imnasir-X/xai-frontend",
    "lead": "An exploration of how a dense intelligence product can feel clear, responsive and alive. An independent interface study, with no affiliation with xAI.",
    "status": "Independent interface study"
  },
  "voiceart": {
    "name": "VoiceArt",
    "kind": "PLAYGROUND / CREATIVE CODING · AUDIO VISUALIZATION",
    "intro": "An exploration of sound as a visual input: changing audio becomes changing bubbles and movement.",
    "stack": [
      "Python",
      "Audio input",
      "Creative coding"
    ],
    "sections": [
      {
        "label": "The question",
        "text": "What could sound look like if it became something you could watch?"
      },
      {
        "label": "The experiment",
        "text": "Capture audio input and connect its activity to evolving visuals. Sound drives changes; silence pauses the movement."
      },
      {
        "label": "The response",
        "items": [
          "Real-time audio is the input to the experiment.",
          "Bubble-like visuals change while sound is active.",
          "The focus is the relationship between sound and visual response."
        ]
      },
      {
        "label": "The exploration",
        "text": "Creative coding gives me a way to follow an interesting technical question and explore a new interaction."
      }
    ],
    "evidence": "Original Python creative-coding experiment. The portfolio adds a WebGL / Web Audio browser adaptation with an opt-in microphone and local analysis; no audio is uploaded.",
    "sourceUrl": "https://github.com/Imnasir-X/VoiceArt",
    "lead": "An exploration of sound as a visual input: changing audio becomes changing bubbles and movement.",
    "status": "Creative coding experiment"
  }
};


// Illustrated covers are editorial interpretations; actual screens stay in Evidence.
projects.strawberry={
 name:'Strawberry Shooter',kind:'PLAYGROUND / GAME EXPERIMENT',
 intro:'A small Python game built with Pygame, exploring simple shooting controls, sprites and sound.',
 lead:'A small game. A playful experiment.',status:'Game experiment',stack:['Python','Pygame'],
 sourceUrl:'https://github.com/Imnasir-X/strawberry-shooter-game',
 sections:[{label:'The experiment',text:'A simple shooter built around strawberries, a background image and sound effects.'},
 {label:'The code',text:'The public repository contains the Python game and its image and sound assets.'}],
 evidence:'Original Python / Pygame game. The playable Canvas 2D preview is a new portfolio browser adaptation, rather than a capture of the original game.'
};
const coverDescriptions={"kormoo": "Watercolor illustration of a garment workshop with sewing tables, fabrics and production records", "sujog": "Watercolor illustration of a person reviewing candidate documents and a proposed next step", "genz": "Watercolor illustration of a publishing workspace with article spreads, photographs and editorial notes", "pathshala": "Watercolor illustration of assignment work and teacher feedback at a shared learning desk", "zephra": "Watercolor illustration of a page shown in different approved paper variations", "xai": "Watercolor illustration of a research workspace with reports and information displays", "voiceart": "Watercolor illustration of a microphone, headphones and flowing painted sound shapes", "strawberry": "Playful watercolor illustration of strawberries and arcade targets"};
for(const [key,d] of Object.entries(projects)){
 d.cover=`assets/illustrations/${key}-1600.webp`;
 d.coverAlt=coverDescriptions[key];
}

const dialog=$('#project-dialog'),content=$('#dialog-content'),homepageTitle=document.title;
let opener=null,openedKey=null;
const create=(tag,cls,text)=>{const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el;};
function figure(src,alt,width,height,caption){const f=create('figure','dialog-figure'),img=create('img','dialog-image');if(height/width>1.3)f.dataset.format='portrait';img.src=src;img.alt=alt;img.width=width||1600;img.height=height||900;img.decoding='async';img.loading='lazy';const frame=create('div','evidence-frame');frame.append(img);f.append(frame);if(caption)f.append(create('figcaption','',caption));const full=create('a','full-image','Open full-size image \u2197');full.href=src;full.target='_blank';full.rel='noopener';f.append(full);return f;}
function renderProject(key){
 const d=projects[key];if(!d)return;openedKey=key;
 const body=create('article','dialog-body');body.dataset.project=key;body.append(create('span','eyebrow',d.kind));const title=create('h2','',d.name);title.id='dialog-title';body.append(title,create('p','dialog-lead',d.lead),create('p','dialog-intro',d.intro));
 const summary=create('section','project-summary');summary.setAttribute('aria-label','Project at a glance');if(d.outcome){const built=create('div');built.append(create('h3','','What I built'),create('p','',d.outcome));summary.append(built);}const state=create('div');state.append(create('h3','','Current state'),create('p','',d.status));if(d.role)state.append(create('p','summary-role',d.role));summary.append(state);body.append(summary);
 if(d.image){const proof=create('section','project-evidence primary-evidence');proof.append(create('h3','','Actual interface'),figure(d.image,d.imageAlt,d.imageWidth,d.imageHeight,d.imageCaption));proof.querySelector('img').loading='eager';body.append(proof);}
 const demoTitle=create('h3','demo-section-title','Try the portfolio demo');body.append(demoTitle);const cover=create('div','dialog-cover project-cover');cover.dataset.demo=key;const fallback=create('img');fallback.src=d.cover;fallback.alt=d.coverAlt;fallback.width=1600;fallback.height=900;cover.append(fallback);body.append(cover);
 const reading=create('div','detail-content'),aside=create('aside');
 for(const [label,value] of [['Tech',d.stack]]){if(!value)continue;const fact=create('div');fact.append(create('h3','',label));if(Array.isArray(value)){const list=create('ul');value.forEach(v=>list.append(create('li','',v)));fact.append(list);}else fact.append(create('p','',value));aside.append(fact);}reading.append(aside);
 d.sections.filter(section=>section.label.toLowerCase()!=='current state').forEach(section=>{const el=create('section','story-section');el.append(create('h3','',section.label));if(section.text)el.append(create('p','',section.text));if(section.items){const ul=create('ul');section.items.forEach(item=>ul.append(create('li','',item)));el.append(ul);}if(section.loop){const ol=create('ol','agent-loop');section.loop.forEach(step=>ol.append(create('li','',step)));el.append(ol);}reading.append(el);});body.append(reading);
 if(d.diagram){const template=document.getElementById('diagram-'+d.diagram);if(template){const diagram=create('section','detail-diagram');diagram.append(create('h3','', 'The system'),template.content.cloneNode(true));body.append(diagram);}}
 if(d.extraImages){const screens=create('section','project-evidence');screens.append(create('h3','', 'More interface evidence'));d.extraImages.forEach(img=>screens.append(figure(img.image,img.alt,img.width,img.height,img.caption)));body.append(screens);}
 const evidence=create('section','story-evidence');evidence.append(create('p','',d.evidence));const link=create('a','',d.sourceUrl?'View source ↗':d.visitUrl?d.visitLabel:'Discuss this project ↗');link.href=d.sourceUrl||d.visitUrl||'#contact';if(d.sourceUrl||d.visitUrl){link.target='_blank';link.rel='noopener noreferrer';}else link.addEventListener('click',e=>{e.preventDefault();closeProject();setTimeout(()=>$('#contact').scrollIntoView(),50);});evidence.append(link);body.append(evidence);
 window.ProjectDemos?.destroyWithin(content);content.replaceChildren(body);window.ProjectDemos?.mount(cover,key);if(!dialog.open)dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');document.title=d.name+' — Nasir Khan';$('.dialog-close').focus();
}
function openProject(key,el){if(!projects[key])return;opener=el||null;const url=new URL(location.href);url.searchParams.set('project',key);history.pushState({portfolioProject:true},'',url);transition(()=>renderProject(key));}
function dismiss(){window.ProjectDemos?.destroyWithin(content);dialog.close();document.body.classList.remove('modal-open');openedKey=null;document.title=homepageTitle;if(opener?.isConnected)opener.focus({preventScroll:true});}
function closeProject(){if(!dialog.open)return;if(history.state?.portfolioProject){history.back();}else{const url=new URL(location.href);url.searchParams.delete('project');history.replaceState(null,'',url);transition(dismiss);}}
$$('[data-project]').forEach(a=>a.addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();openProject(a.dataset.project,a);}));
$('.dialog-close').addEventListener('click',closeProject);dialog.addEventListener('cancel',e=>{e.preventDefault();closeProject();});$('[data-close-home]').addEventListener('click',e=>{e.preventDefault();closeProject();setTimeout(()=>$('#home').scrollIntoView(),50);});
addEventListener('popstate',()=>{const key=new URL(location.href).searchParams.get('project');if(projects[key])transition(()=>renderProject(key));else if(dialog.open)transition(dismiss);});
const initialKey=new URL(location.href).searchParams.get('project');if(projects[initialKey])renderProject(initialKey);
if('IntersectionObserver'in window&&!motion.matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}}),{threshold:.08});const pending=$$('.reveal').filter(el=>el.getBoundingClientRect().top>innerHeight);pending.forEach(el=>{el.classList.add('pre-reveal');observer.observe(el);});motion.addEventListener('change',e=>{if(e.matches){$$('.pre-reveal').forEach(el=>el.classList.remove('pre-reveal'));observer.disconnect();}});}
const nav=$$('nav a[href^="#"]'),sections=['work','about','contact'].map(id=>document.getElementById(id));let ticking=false;
function updateNav(){let active='';sections.forEach(s=>{if(s.getBoundingClientRect().top<$('.site-header').offsetHeight+150)active=s.id;});nav.forEach(a=>{if(a.hash==='#'+active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});ticking=false;}
addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(updateNav);}},{passive:true});updateNav();
})();
