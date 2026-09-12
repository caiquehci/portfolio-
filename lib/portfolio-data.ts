export const profile = {
  name: "Carlos Castanheira",
  shortName: "Carlos Castanheira",
  title: "Product Designer",
  positioning:
    "Senior Product Designer | 5+ years in high-volume e-commerce & SaaS. I design high-converting digital products, build scalable design systems, and turn complex business logic into measurable revenue.",
  valueProposition:
    "I ship complete digital products, design flows that reduce cognitive load, and back product decisions with funnels, statistical tests, and documented trade-offs.",
  experienceLine: "Driven by metrics. Hands on.",
  location: "Based in São Paulo, Brazil. Open to new opportunities.",
  aboutIntro: [
    "My name is Carlos Castanheira, and if you've made it this far, you've probably already seen some of my work. I hope you liked it.",
    "I am a Product Designer with a strong background in graphic design, digital, social media, and marketing. I set aside this space to share some of my achievements.",
  ],
  links: {
    email: "mailto:castanheiracmi@gmail.com",
    linkedin: "https://www.linkedin.com/in/carloshenrmcj/",
    // behance: "https://www.behance.net/",
    whatsapp: "https://wa.me/5512988908286",
    resume: "/about",
  },
}

export type Project = {
  slug: string
  name: string
  headline: string
  year: string
  domain: string
  tags: string[]
  summary: string
  role: string
  project: string
  period: string
  cover: string
  featured: boolean
  metric?: { value: string; label: string }
  whatIDid: string[]
  about: string[]
  initiatives: {
    title: string
    challenge: string
    focusLabel: string
    focus: string
    solution: string
  }[]
  outcome: string[]
  team?: string
  hidden?: boolean
  drop?: boolean 
}

export const projects: Project[] = [
  {
    slug: "ditto",
    name: "Ditto: Multi-tenant white-label e-commerce",
    headline:
      "Architecting a scalable white-label e-commerce engine from the ground up for higher-education institutions",
    year: "2025 – 2026",
    domain: "End-to-end · White-Label E-Commerce",
    tags: ["Product Design", "Design Systems", "Multi-Tenant Architecture", "E-Commerce"],
    summary:
      "Building a zero-to-one white-label e-commerce engine, replacing legacy marketplace constraints with modular architecture and direct institutional enrollments.",
    role: "Product Designer",
    project: "Marcas - Quero Educação",
    period: "2025/2026",
    cover: "/portfolio-images/ditto/cover.png",
    featured: true,
    metric: { value: "6m → 4.5m", label: "form completion time reduction" },
    whatIDid: [
      "Owned end-to-end interface architecture across mobile and web for Ditto: homepages, PLPs, PDPs, checkouts, and admissions workflows.",
      "Modularized the legacy Zilla design system in Figma to support multi-tenant branding and component scalability.",
      "Integrated Tailwind parameters into Jiractus, empowering marketing and operations to independently manage brand styling and dynamic content reordering.",
      "Re-architected the checkout and admissions pipeline, cutting 3 redundant fields and migrating to the proprietary Paystation gateway.",
    ],
    about: [
      "Quero Educação needed to capture high-intent student traffic slipping through the cracks of its flagship marketplace, Quero Bolsa. The solution was Ditto: a multi-tenant, white-label e-commerce engine built to deploy individual, brand-agnostic storefronts for top-tier educational partners.",
      "Operating as the sole Product Designer inside the Marcas business unit, I owned the complete interface architecture and resolved deep systemic friction between legacy marketplace models and modern monobrand e-commerce needs.",
    ],
    initiatives: [
      {
        title: "The operational reality and the Zilla constraint",
        challenge:
          "Our core design system, Zilla, was rigidly hardcoded for Quero Bolsa, lacking multi-brand flexibility, tokenization, or internal hierarchy for critical components like product cards.",
        focusLabel: "Strategic focus",
        focus:
          "Approach Zilla modularly rather than attempting a political rewrite of the legacy system.",
        solution:
          "Combined isolated atomic elements in Figma into scalable component libraries, aligned nomenclature with code standards, and integrated Tailwind parameters into Jiractus so teams could configure brand skins and campaign updates without engineering bottlenecks.",
      },
      {
        title: "Shifting the mental model: Marketplace vs. Monobrand",
        challenge:
          "Quero Bolsa operated on an affiliate voucher model (buying a discount coupon). Under Ditto, legal agreements allowed presenting directly as the institution under a direct enrollment model.",
        focusLabel: "Strategic focus",
        focus:
          "Align internal stakeholders on semantic and contractual realities across multi-step checkout copy.",
        solution:
          "Restructured transactional copy and multi-step workflows from 'purchase the discount' to 'enroll now', bridging legal compliance and user expectations without exposing underlying infrastructure.",
      },
      {
        title: "The hero section trade-off",
        challenge:
          "An initial high-fidelity discovery hero design featured complex multi-step search interactions, intelligent draft-saving states, and deep database scraping.",
        focusLabel: "Strategic focus",
        focus:
          "Evaluate design ambition against Zilla limitations, early frontend friction, and aggressive MVP delivery windows.",
        solution:
          "Recognized the over-engineering trap, stepped back, and reduced the hero section to a streamlined, high-efficiency search mechanism that preserved velocity and launch targets.",
      },
      {
        title: "Unlocking marketing agility",
        challenge:
          "Rigid content hierarchies on Product Detail Pages restricted marketing teams from testing content ordering without engineering deployments.",
        focusLabel: "Strategic focus",
        focus:
          "Build operational flexibility directly into the internal management interface.",
        solution:
          "Designed an internal capability within Jiractus featuring a draggable interface, enabling marketing to dynamically reorder content blocks for any institution or course combination in seconds.",
      },
      {
        title: "Re-engineering the checkout and admissions pipeline",
        challenge:
          "Absence of institutional compliance documentation led to data redundancy, where automated payloads collected data that partner back-offices redundantly asked for again during downstream enrollment.",
        focusLabel: "Strategic focus",
        focus:
          "Audit legal baselines against partner intake habits to eliminate friction and form fatigue.",
        solution:
          "Cut 3 mandatory fields out of the 12-step checkout form, reducing estimated completion time from 6 minutes down to 4.5 minutes, while migrating payment infrastructure to the proprietary Paystation engine.",
      },
    ],
    outcome: [
      "Ditto successfully launched as a fully operational white-label e-commerce engine, proving that a dedicated monobrand experience could capture high-intent traffic outside the core marketplace.",
      "The scalable architecture absorbed major expansion smoothly—such as onboarding partner institutions for internal business units like Branded—without requiring custom code rewrites or fragmenting brand integrity.",
      "The project underscored core senior product design principles: balancing political navigation, respecting technical boundaries, and ruthlessly scoping MVPs to deliver real business value under pressure.",
    ],
    team: "Marcas business unit, internal engineering teams, and enterprise business stakeholders.",
  },
  {
    slug: "education-checkout-ab-test",
    name: "Education Checkout A/B Test",
    headline:
      "Redesigning a checkout: how a “new baseline” proved, with data, that it wasn’t the culprit behind the conversion decline",
    year: "2026",
    domain: "Payments · EdTech",
    tags: ["Product Design", "A/B Test", "Payments", "Data Analysis"],
    summary:
      "A conversion drop that looked like a UX failure. The data showed something else.",
    role: "Product Designer",
    project: "Marcas - QE (Qeevo Group)",
    period: "December 2025 – February 2026",
    cover: "/portfolio-images/education-checkout-ab-test/43viJqTo95TPIJGNeBCHnlUTaaQ.png",
    featured: true,
    metric: { value: "6.85% vs 4.72%", label: "conversion, p = 0.0000403" },
    whatIDid: [
      "Owned interface architecture for Ditto across homepages, lead generation, course listings, PDPs, checkouts, and digital admissions workflows.",
      "Redesigned UFBRA’s checkout integrated with Paystation (internal payment gateway).",
      "Investigated data daily across Google Analytics, Clarity, Metabase, and internal dashboards.",
      "Structured the A/B test funnel, applied a Z-Test, and documented strategic decisions.",
    ],
    about: [
      "During my time at QE, I was responsible for Ditto, a white-label product for higher education institutions, operated via CMS by the Marcas team and developed by QE’s engineering team.",
      "Within this context, I redesigned UFBRA’s checkout, which went live in December integrated with Paystation, but was initially blamed for a drop in conversion rates.",
    ],
    initiatives: [
      {
        title: "Separating the price effect from the interface effect",
        challenge:
          "The migration happened in December without an initial A/B test. When conversion dropped amidst high targets, fingers pointed immediately at the redesign.",
        focusLabel: "Strategic focus",
        focus:
          "Go beyond interface design: cross-reference internal events and daily analytics to isolate what actually shifted concurrently with the launch.",
        solution:
          "Discovered that the enrollment fee increased right as the conversion curve began to decline, proving price and experience changed simultaneously.",
      },
      {
        title: "Reducing cognitive load at the moment of decision",
        challenge:
          "The legacy checkout collected unnecessary fields and blocked user progression if a previous campus selection contained errors.",
        focusLabel: "Strategic focus",
        focus:
          "Streamline the funnel layout: put the purchase summary in focus, background the form, and limit collection to essential data fields.",
        solution:
          "Reorganized the page to highlight course details, modality, and pricing; enabled inline campus correction directly within checkout; and removed redundant fields.",
      },
      {
        title: "Proving it with a statistically robust A/B test",
        challenge:
          "Because the new checkout went live first, it appeared as the 'Baseline' in reports while the old flow acted as the 'Proposal', creating reporting confusion.",
        focusLabel: "Transformation / Value",
        focus:
          "Analyze multiple test segments across checkout-to-payment funnels, validating results through a rigorous Z-Test.",
        solution:
          "Baseline achieved 6.85% conversion vs 4.72% for the proposal (Z-Score 4.1056, p = 0.0000403), proving the new checkout significantly outperformed the old one.",
      },
    ],
    outcome: [
      "Statistical validation proved the new checkout outperformed the legacy flow with a p-value near zero, eliminating false assumptions about the redesign.",
      "Transitioning from Pagar.me to Paystation cut gateway fees significantly, securing rapid financial return on top of conversion gains.",
      "Demonstrated rigorous product design capability: building complete digital experiences, optimizing friction points, and backing design decisions with deep data analysis.",
    ],
    team: "Marcas team, QE engineering team, and business stakeholders.",
  },
  {
    slug: "advlabs-saas",
    name: "AdvLabs SaaS",
    headline: "Improving the health of a live SaaS for environmental lawyers while shipping new features",
    year: "2024",
    domain: "SaaS · Legal",
    tags: ["SaaS", "Product Design", "Chakra UI", "Design System"],
    summary:
      "Rebuilding a fragmented SaaS product around a coherent system.",
    role: "Product Designer",
    project: "X6 Tech",
    period: "January 2023 – December 2024",
    cover: "/portfolio-images/advlabs-saas/advlabs-cover.png",
    featured: true,
    metric: { value: "2 years", label: "of continuous product evolution" },
    whatIDid: [
      "Redesign of existing core screens: Admin Dashboard, Cases and Petitions, Subscription, and Networks.",
      "Delivered new features including My clients, calculator, Courses, and Classes.",
      "Established a cohesive design system bridging gaps in an interface originally built on Chakra UI.",
    ],
    about: [
      "When I joined this project, its interface had already been developed using Chakra UI. The challenge was to support ongoing improvements after the system’s initial launch and bring visual consistency.",
      "While the surface looked clean, the lack of documentation, formal design principles, and information architecture flaws were causing user drop-offs and journey abandonments.",
    ],
    initiatives: [
      {
        title: "Redesigning screens without prior guidelines",
        challenge:
          "Chakra UI provided a pleasant visual baseline, but wherever the framework fell short, ad-hoc choices by the development team had fractured the user experience.",
        focusLabel: "Strategic focus",
        focus: "Improve product health and fix usability bottlenecks while new features were being actively adopted.",
        solution:
          "Revamped the Admin Dashboard, Cases and Petitions, Subscription flows, and Networks to eliminate design flaws driving user drop-offs.",
      },
      {
        title: "Expanding core capabilities",
        challenge: "A heavy volume of tactical corrections constantly competed with the strategic need to grow the product roadmap.",
        focusLabel: "Strategic focus",
        focus: "Ship high-value features without breaking consistency with the existing interface.",
        solution:
          "Designed and delivered entirely new product modules: My clients and calculator, Courses, and Classes.",
      },
      {
        title: "Prioritizing the design system",
        challenge:
          "In high-speed delivery cycles, it is easy to default to isolated, one-off fixes rather than addressing systemic consistency.",
        focusLabel: "Transformation / Value",
        focus: "Scaling product quality requires solid foundational components before micro-optimizations.",
        solution:
          "Established a centralized design system that became the blueprint for all subsequent screen iterations, eliminating technical debt and rework.",
      },
    ],
    outcome: [
      "Successfully integrated with the AdvLabs team and stabilized core workflows without introducing deployment friction.",
      "Delivered a structured design system and redesigned core flows that continue to support the product’s long-term evolution.",
    ],
    team: "X6 Tech and AdvLabs product teams.",
  },
  {
    slug: "bmker-design-system",
    name: "B__mker",
    headline: "A social network concept that gives users control over what they see - with a design system built to scale it",
    year: "2024",
    domain: "Social · Design System",
    tags: ["Figma", "Product Design", "Design System"],
    summary:
      "B__mker is a new social network concept that gives you control over what you see in your feed. No constraints or labels.",
    role: "Visual and Product Designer | Branding Strategist",
    project: "Individual",
    period: "June 2023 – January 2024",
    cover: "/portfolio-images/bmker-design-system/bmker-cover.png",
    featured: true,
    metric: { value: "84", label: "valid survey responses" },
    whatIDid: [
      "Research planning, survey design, personas, user stories, and user journeys.",
      "Problem statement and value proposition (5W1H).",
      "Wireframes, high-fidelity screens, and the design system.",
      "Branding strategy and stakeholder alignment.",
    ],
    about: [
      "B__mker is a new social network concept that promotes interaction while standing out by putting users in control of what they see. With no artificial constraints or labels, the platform fosters genuine community without hidden algorithmic manipulation.",
      "The core design challenge: how can people enjoy using social networks again, balancing casual light content with a dedicated space for specific, intellectual engagement?",
    ],
    initiatives: [
      {
        title: "Understanding that I am not my user",
        challenge:
          "The maxim “you are not your user” became an immediate priority during the initial discovery stages.",
        focusLabel: "Strategic focus",
        focus:
          "Establish research objectives as a compass and validate assumptions with real people before building.",
        solution:
          "Distributed a structured survey, capturing 84 valid responses from 104 total entries to build data-backed personas, user stories, and user journeys.",
      },
      {
        title: "Turning research into shared statements",
        challenge:
          "Raw qualitative insights needed to be distilled into clear, actionable alignment artifacts for the project.",
        focusLabel: "Strategic focus",
        focus:
          "Condense findings into a unified problem statement and a concrete value proposition.",
        solution:
          "Applied the 5W1H framework to map out product benefits, functions, and core requirements to maintain strategic clarity.",
      },
      {
        title: "Giving control back to the user: Special Swipes",
        challenge:
          "Traditional feeds are dictated by opaque algorithms where light and intellectual content awkwardly compete.",
        focusLabel: "Transformation / Value",
        focus: "Leverage familiar gestures to let users actively shape and train their own feed curation.",
        solution:
          "Designed 'Special Swipes'—integrating directional feed gestures so users can explicitly signal what content they want more or less of, validated through high-fidelity prototyping.",
      },
    ],
    outcome: [
      "A complete end-to-end concept—from foundational user research to a scalable design system—demonstrating rigorous product design thinking.",
      "Structured design systems and modular components allowed high-fidelity screens to be iterated and validated efficiently.",
    ],
    team: "Individual project.",
  },
  {
    slug: "auden-college",
    name: "AUDEN College",
    headline: "From zero to a selling e-commerce with CMS in 3 days - and the product debate it started",
    year: "2025",
    domain: "E-commerce · Framer CMS",
    tags: ["Framer", "CMS", "E-commerce", "Product Strategy"],
    summary: "E-commerce, built to start selling immediately. Full of personality!",
    role: "Product Designer",
    project: "Marcas - QE (Qeevo Group)",
    period: "2025",
    cover: "/portfolio-images/auden-college/auden-cover.png",
    featured: true,
    metric: { value: "3 days", label: "to a live website + CMS" },
    whatIDid: [
      "Decided to use Framer instead of the internal Ditto product to accelerate speed-to-market.",
      "Conducted data analysis in Clarity across other brands to validate the happy path.",
      "Designed and built the website and integrated CMS.",
      "Documented technical trade-offs concerning stack, cost, and governance.",
    ],
    about: [
      "AUDEN was a new, bold brand focused on Gen Z, but it lacked a live website or e-commerce presence to begin selling.",
      "While the official option was integrating into Ditto—an internal product I designed—it could not support the brand’s specific stylistic needs without heavy modifications.",
    ],
    initiatives: [
      {
        title: "Optimizing a proven pattern instead of guessing",
        challenge:
          "Time was critical; every day without a website meant losing leads and enrollments under intense target pressure.",
        focusLabel: "Strategic focus",
        focus: "Leverage data from other brands in Ditto to back strategic decisions rather than relying on intuition.",
        solution:
          "Used Clarity flow analysis, heatmaps, and performance metrics to validate a robust happy path (home > optional PLP > PDP > checkout) within Framer.",
      },
      {
        title: "Three decisions",
        challenge: "A new brand with no history had to feel bold to Gen Z while converting immediately.",
        focusLabel: "Strategic focus",
        focus: "Put personality upfront, maintain proven structure underneath, and preserve independence from internal roadmaps.",
        solution:
          "(1) Showcase brand personality on the homepage; (2) preserve the data-backed happy path in Framer; (3) remain independent from Ditto's backlog.",
      },
      {
        title: "Owning the trade-offs",
        challenge:
          "Framer’s visual capabilities and speed prompted internal questions about migrating everything off the core stack.",
        focusLabel: "Transformation / Value",
        focus: "Make stack, cost, and infrastructure risks explicit so stakeholders could decide consciously.",
        solution:
          "Identified risks including infrastructure coupling, bandwidth limits, cache/proxy constraints, and potential impacts on Core Web Vitals and SEO at scale.",
      },
    ],
    outcome: [
      "Achieved an immediate business win by taking the brand from zero to a functional website and CMS in 3 days, enabling early sales.",
      "Highlighted internal product limitations and sparked key strategic discussions regarding tech stack selection and governance.",
    ],
    hidden: true,
    team: "QE engineering team, Marcas team, and brand stakeholders.",
  },
  {
    slug: "rapid-churn-retention-intervention",
    name: "Rapid churn and retention intervention",
    headline: "Rapid churn and retention intervention under regulatory shock",
    year: "2026",
    domain: "EdTech · Product Strategy",
    tags: ["Product Strategy", "User Research", "Data Analysis", "Regulatory Shock"],
    summary: "Architected a rapid-response product discovery framework to diagnose and address retention collapse under sudden federal regulatory shifts.",
    role: "Product Designer",
    project: "QE (Qeevo Group)",
    period: "2026",
    cover: "/portfolio-images/rapid-churn-retention-intervention/IMAGEM_01.png",
    featured: false,
    metric: { value: "Architecture & Baseline", label: "rapid diagnostic framework delivered" },
    whatIDid: [
      "Architected, proposed, and secured approval for a rapid-response product discovery framework.",
      "Conducted deep-dive qualitative causal mapping interviews.",
      "Engineered an asynchronous quantitative validation pipeline.",
      "Structured a high-impact executive product narrative for leadership."
    ],
    about: [
      "With annual performance facing constraints at the start of the peak conversion window, sales stalled as long-term product engagement and user lifetime value were impacted.",
      "The root cause was structural following federal guidelines which disrupted the nationwide scholarship model and remote delivery assumptions."
    ],
    initiatives: [
      {
        title: "Product problem statement",
        challenge: "Federal policy shifts introduced strict physical attendance thresholds while partner ecosystems faced operational hurdles.",
        focusLabel: "Strategic focus",
        focus: "Diagnose why users were abandoning the product after purchase under severe time constraints.",
        solution: "Identified that the underlying product-market value proposition broke down when students encountered unexpected structural constraints."
      },
      {
        title: "Methodology: Rapid mixed-methods discovery",
        challenge: "Lack of clear behavioral telemetry from leadership and internal teams during a critical sales season.",
        focusLabel: "Strategic focus",
        focus: "Deploy a pragmatic, rigorous mixed-methods framework combining qualitative causal mapping and quantitative validation.",
        solution: "Executed deep-dive interviews and established a quantitative baseline with recency weighting and strict actionability guardrails."
      },
      {
        title: "Product storyline and executive architecture",
        challenge: "Translating complex empirical findings into a direct, high-impact narrative for leadership.",
        focusLabel: "Transformation / Value",
        focus: "Structure data into clear frameworks for executive decision-making.",
        solution: "Delivered a structured framework covering user segmentation, retention drivers, churn drivers, and comparative impact."
      }
    ],
    outcome: [
      "Built the blueprint and hard data required to confront the structural challenges the business model encountered.",
      "Demonstrated rigorous empirical problem-solving under extreme pressure and regulatory shock."
    ],
    team: "QE (Qeevo Group) stakeholders and leadership.",
    hidden: true,
  },
  {
    slug: "engineering-enablement",
    name: "Engineering enablement without the bottleneck",
    headline: "Removing the design-to-engineering bottleneck by changing how design information is delivered.",
    year: "2023",
    domain: "Developer handoff · Deliverables",
    tags: ["Developer Experience", "Design Systems", "Workflow Optimization", "Prototyping"],
    summary: "Removing the design-to-engineering bottleneck by changing how design information is delivered.",
    role: "Product Designer",
    project: "X6 Tech",
    period: "2023",
    cover: "/portfolio-images/engineering-enablement/IMAGEM_01.png",
    featured: false,
    metric: { value: "80%", label: "sprint capacity dedicated to new features" },
    whatIDid: [
      "Spearheaded a scrappy, highly experimental developer experience workflow on a cross-functional product team.",
      "Introduced portable HTML specification files and Markdown context documents paired with Figma designs as a universal translation layer.",
      "Operationalized core foundational components like the Tabela de Processos to bring component systematization and predictability to engineering sprints."
    ],
    about: [
      "When joining a cross-functional product team consisting of one product designer and four engineers, the workflow suffered from a classic bottleneck. Despite having design files available, the team lacked a shared design system or experience working with a dedicated product designer.",
      "This resulted in fragmented component choices, heavy reliance on synchronous back-and-forth communication, and inflated sprint hours spent clarifying layout decisions rather than shipping features."
    ],
    initiatives: [
      {
        title: "The challenge: friction in a greenfield design environment",
        challenge: "Engineers sourced arbitrary third-party libraries, leading to visual inconsistencies, technical debt, and mismatched component implementations.",
        focusLabel: "Strategic focus",
        focus: "Eliminating synchronous communication bottlenecks and resistance to perceived bureaucratic overhead.",
        solution: "Identified the need for an accessible, zero-friction communication and translation layer that respected engineering velocity."
      },
      {
        title: "The solution: scrappy experimentation with portable HTML specs",
        challenge: "The team had no prior exposure to structured design systems and lacked a shared vocabulary.",
        focusLabel: "Implementation",
        focus: "Reversing online code library logic to craft standalone HTML specification files alongside Markdown context notes.",
        solution: "Created self-explanatory files allowing developers to inspect behaviors, variants, and tokens at their own pace without navigating complex design tool licenses."
      },
      {
        title: "Organic adoption and systematization",
        challenge: "Overcoming initial team hesitation toward new workflows without enforcing heavy top-down governance.",
        focusLabel: "Outcome / Value",
        focus: "Demonstrating quality improvements through small, collaborative experiments.",
        solution: "Won the team over within two sprints, shifting our sprint capacity from fighting debt to dedicating 80% of our time to high-value new features."
      }
    ],
    outcome: [
      "Transformed delivery velocity and recovered hours previously lost to redundant alignment.",
      "Shifted sprint capacity from fighting debt to dedicating 80% of time to high-value new features.",
      "Proved that systemic consistency can be achieved through technical empathy and facilitation rather than rigid enterprise tooling."
    ],
    team: "X6 Tech product and engineering team.",
    hidden: true,
  }
]

export const moreWork = [
  {
    name: "PD Test - Internet plan purchase assistant",
    category: "Wireframes / Assistant / PD Test",
    summary: "Internet plan purchase assistant, wireframes + process and presentation!",
    href: "https://www.behance.net/gallery/214123611/Teste-PD",
  },
  {
    name: "B__mker - Visual explore (PT-Br)",
    category: "Social Media / Design System / Design tokens",
    summary: "A new network concept that gives you control over what you see in your feed.",
    href: "https://www.behance.net/gallery/202964509/B__mker",
  },
  {
    name: "AdvLabs - Visual explore (PT-Br)",
    category: "Wireframes / Assistant / PD Test",
    summary: "Screen revamp, implementarion of new features and QoL lifetime changes.",
    href: "https://www.behance.net/gallery/202964267/AdvLabs",
  },
]

export const experience = [
  {
    role: "Senior Product Designer - Ditto (white-label EdTech product)",
    company: "Quero Educação / Qeevo Group",
    period: "May 2025 - March 2026",
    description:
      "Led end-to-end design for Ditto, increasing checkout conversion by 2.1% and reducing friction in higher-education, white-label e-commerce platforms using data-driven discovery, GA4, and Microsoft Clarity.",
  },
  {
    role: "Senior UI/UX Designer",
    company: "X6 TECH",
    period: "January 2023 - December 2024",
    description:
      "Reduced interface development time by 25% by building scalable design systems and tokens, while driving user research and high-fidelity responsive web and mobile solutions.",
  },
  {
    role: "UX/UI & Digital Solutions Designer",
    company: "PRO Marking Laser",
    period: "January 2022 - January 2023",
    description:
      "Designed industrial software interfaces, translating complex technical and operational requirements into intuitive digital experiences and workflows.",
  },
  {
    role: "UI Designer",
    company: "OTREM Comunicação",
    period: "February 2021 - October 2021",
    description:
      "Developed web and mobile application interfaces focused on usability, visual consistency, accessibility, and information architecture.",
  },
  {
    role: "Head Graphic Designer",
    company: "OTREM Comunicação",
    period: "November 2015 - October 2021",
    description:
      "Directed visual identity projects, digital marketing campaigns, and brand collateral while managing and mentoring a team of designers and interns.",
  },
]

export const education = [
  {
    course: "Start the Product Design Process: Empathize, Define, and Ideate",
    institution: "Google · Coursera",
    date: "February 2024",
    href: "https://www.coursera.org/account/accomplishments/verify/2B9MP54PV2VE",
    credential: "2B9MP54PV2VE",
  },
  {
    course: "Product Design Program",
    institution: "Alura",
    date: "January 2024",
    href: "https://cursos.alura.com.br/user/carlos-hcastanheira04/degree-ux-582659/certificate?lang=en",
  },
  {
    course: "Technologist in Systems Analysis and Development",
    institution: "Universidade Paulista (UNIP)",
    date: "January 2024 - Present",
  },
  {
    course: "Product Design Certificate - Product Design Program",
    institution: "UX Unicórnio",
    date: "December 2023",
    credential: "cert_hnqcrs2d",
  },
  {
    course: "B.S in Graphic Design",
    institution: "Unifatecie",
    date: "2021",
  },
]

export const skills = [
  "Product Design",
  "User Research",
  "Design Systems",
  "A/B Testing",
  "Data Analysis",
  "Figma",
  "Framer",
  "Prototyping",
  "Stakeholder Management.",
]
