export const profile = {
  name: "Carlos Castanheira",
  shortName: "Carlos Castanheira",
  title: "Product Designer",
  positioning:
    "Senior Product Designer | 5+ years in high-volume e-commerce & SaaS. I engineer high-converting digital products, architect scalable design systems, and turn complex business logic into measurable revenue.",
  valueProposition:
    "I ship complete digital products, design flows that reduce cognitive load, and back product decisions with funnels, statistical tests, and documented trade-offs.",
  experienceLine: "Driven by metrics. Hands on.",
  location: "Brazil. Open to new opportunities.",
  aboutIntro: [
    "My name is Carlos Castanheira, and if you've made it this far, you've probably already seen some of my work. I hope you liked it!",
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
  limitations?: string[]
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
    domain: "EdTech · White-Label E-Commerce",
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
      "Operating as the sole Product Designer inside the Marcas business unit over a ten-month development cycle, I owned the complete interface architecture and resolved deep systemic friction between legacy marketplace models and modern monobrand e-commerce needs.",
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
        title: "Unlocking marketing agility via Jiractus",
        challenge:
          "Rigid content hierarchies on Product Detail Pages restricted marketing teams from testing content ordering (e.g., course grading vs. curriculum highlights) without engineering deployments.",
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
          "Audit MEC legal baselines against partner intake habits to eliminate friction and form fatigue.",
        solution:
          "Cut 3 mandatory fields out of the 12-step checkout form, reducing estimated completion time from 6 minutes down to 4.5 minutes, while migrating payment infrastructure to the proprietary Paystation engine.",
      },
    ],
    outcome: [
      "Ditto successfully launched as a fully operational white-label e-commerce engine, proving that a dedicated monobrand experience could capture high-intent traffic outside the core marketplace.",
      "The scalable architecture absorbed major expansion smoothly—such as onboarding 21 partner institutions for internal business units like Branded—without requiring custom code rewrites or fragmenting brand integrity.",
      "The project underscored core senior product design principles: balancing political navigation, respecting technical boundaries, and ruthlessly scoping MVPs to deliver real business value under pressure.",
    ],
    limitations: [
      "Navigation and feature rollout had to constantly weigh immediate high-impact conversion levers against long-term QoL expansions due to tight delivery windows.",
      "Early data silos required proactive daily monitoring and manual session audits (via Microsoft Clarity) to bridge tracking gaps before structured telemetry matured.",
    ],
    team: "Marcas business unit, internal engineering teams, and enterprise business stakeholders. Sensitive and/or protected information has been strategically omitted.",
  },
  {
    slug: "education-checkout-ab-test",
    name: "Education Checkout A/B Test",
    // aqui


    // aqui
    //imageUrl: "/portfolio-images/education-checkout-ab-test/43viJqTo95TPIJGNeBCHnlUTaaQ.png",
    headline:
      "Redesigning a checkout: how a \u201cnew baseline\u201d proved, with data, that it wasn\u2019t the culprit behind the conversion decline",
    year: "2026",
    domain: "Payments · EdTech",
    tags: ["Product Design", "A/B Test", "Payments", "Data Analysis"],
    summary:
      "A conversion drop that looked like a UX failure. The data showed something else.",
    role: "Product Designer",
    project: "Marcas - QE (Qeevo Group)",
    period: "December 2025 - February 2026",
    cover: "/portfolio-images/education-checkout-ab-test/43viJqTo95TPIJGNeBCHnlUTaaQ.png",
    featured: true,
    metric: { value: "6.85% vs 4.72%", label: "conversion, p = 0.0000403" },
    whatIDid: [
      "Owned Ditto, the white-label product for higher-education institutions: homepage, lead generation, course listing, PDP, checkout, and digital admissions.",
      "Redesigned UFBRA\u2019s checkout, integrated with Paystation (internal payment gateway).",
      "Investigated data daily in Google Analytics, Clarity, Metabase, and internal dashboard 902.",
      "Structured the A/B test funnel, applied a Z-Test, and documented the decisions.",
    ],
    about: [
      "During my time at QE (Qeevo Group), I was responsible for Ditto, a white-label product for higher education institutions, operated via CMS by the Marcas team and developed by QE\u2019s engineering team.",
      "Within this context, I redesigned UFBRA\u2019s checkout, which went live in December already integrated with Paystation, but was strongly accused of \u201cbeing worse than its predecessor.\u201d",
    ],
    initiatives: [
      {
        title: "Separating the price effect from the interface effect",
        challenge:
          "The Pagar.me → Paystation migration happened in December without an initial A/B test. A few days later, conversion dropped and, in an environment with high targets and little room for error, fingers pointed at the redesign.",
        focusLabel: "Strategic focus",
        focus:
          "Go beyond the interface role: cross-reference internal events and daily analytics to understand what actually changed at the same time as the redesign.",
        solution:
          "We identified that on 12/11 the PEF (enrollment fee) increased from R$49.90 to R$74.90, effective 12/12 - exactly when the conversion curve began to decline. Price and experience had changed together.",
      },
      {
        title: "Reducing cognitive load at the moment of decision",
        challenge:
          "The old checkout, originally designed for another business unit, collected unnecessary fields and blocked the journey when a previous campus selection was wrong.",
        focusLabel: "Strategic focus",
        focus:
          "Market benchmarks and a shorter, clearer funnel: purchase summary in focus, form in the background, and only the data QE really needed.",
        solution:
          "Three decisions: (1) reorganized the page with the purchase summary - course, modality, current and future prices - in focus; (2) allowed the campus to be corrected directly within the checkout; (3) removed unnecessary fields collected from the old version.",
      },
      {
        title: "Proving it with a statistically robust A/B test",
        challenge:
          "Because the new checkout went live first, it appears as the \u201cBaseline\u201d in the report and the old Pagar.me flow as the \u201cProposal\u201d - a counterintuitive setup that had created confusion.",
        focusLabel: "Transformation / Value",
        focus:
          "Three segments (80/20, 50/50, and 50/50 with Google OAuth during Carnival) analyzed from checkout start to payment, validated with a Z-Test.",
        solution:
          "Baseline: 6,425 checkouts started, 440 payments, 6.85% conversion. Proposal: 3,220 checkouts, 152 payments, 4.72%. Z-Score 4.1056, p-value 0.0000403. A 2.13 percentage-point difference, statistically significant.",
      },
    ],
    outcome: [
      "The chance of the Baseline appearing better than the Proposal purely by chance is virtually zero. The new checkout outperforms the old one across all relevant segments, with robust statistical evidence.",
      "Beyond conversion, moving from Pagar.me to Paystation reduced infrastructure fees from approximately 2% to approximately 0.5%; with QE retaining 70% of revenue, the new checkout would have paid for itself within weeks.",
      "This case summarizes how I work as a Product Designer: I create complete digital products, design flows focused on reducing friction, and when questions arise I can dive into the data, structure hypotheses, and validate them.",
    ],
    limitations: [
      "Gains are only from PEF (a one-time enrollment amount). LTV was not tracked, since each course has a unique monthly tuition and this was not part of the study.",
      "The test started only after performance concerns arose; a pre-launch A/B test would have avoided weeks of doubt. Profit is lost, experience is gained.",
    ],
    team: "Marcas team (CMS operation), QE engineering team, and business stakeholders. Sensitive and/or protected information has been strategically omitted.",
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
    period: "January 2023 - December 2024",
    cover: "/portfolio-images/advlabs-saas/advlabs-cover.png",
    featured: true,
    metric: { value: "2 years", label: "of continuous product evolution" },
    whatIDid: [
      "Redesign of existing screens: Admin Dashboard, Cases and Petitions, Subscription, Networks.",
      "New features: My clients and calculator, Courses, Classes.",
      "Design system creation for an interface originally built on Chakra UI.",
    ],
    about: [
      "When I joined this project, its interface had already been developed using Chakra UI. The challenge was to support improvement processes after the system\u2019s initial conception and create consistency.",
      "Everything looked great on the surface, but the lack of documentation, design principles, branding, and resistance to change were the biggest obstacles - along with journey abandonments caused by poor information architecture.",
    ],
    initiatives: [
      {
        title: "Redesigning screens without a guideline to follow",
        challenge:
          "Chakra UI made the system pleasant on the surface, but wherever the framework did not provide a ready-made path, creation had been left to the development team.",
        focusLabel: "Strategic focus",
        focus: "Improve product health while new features were being adopted, without introducing noise.",
        solution:
          "Revamped the Admin Dashboard, Cases and Petitions, Subscription screen, and Networks, addressing the design flaws that were causing journey abandonments.",
      },
      {
        title: "Creating new capabilities",
        challenge: "A high volume of corrections competed for time with the need to grow the product.",
        focusLabel: "Strategic focus",
        focus: "Ship new value without breaking consistency with the existing system.",
        solution:
          "Designed and delivered new screens and features: My clients and calculator, Courses, and Classes.",
      },
      {
        title: "Prioritizing the design system",
        challenge:
          "In the daily flow of requests it is common to solve isolated problems without looking at the whole.",
        focusLabel: "Transformation / Value",
        focus: "Scaling product quality requires solid foundations before micro-optimizations.",
        solution:
          "I learned in practice that postponing a robust design system only creates rework and inconsistency. It became the foundation for every subsequent screen - and, in hindsight, should have been the first priority.",
      },
    ],
    outcome: [
      "Integrating with the AdvLabs team was easy and my entry created no friction, even while recreating a design without guidelines.",
      "A design system and redesigned core flows now support the product\u2019s ongoing evolution.",
    ],
    limitations: [
      "I would have advocated more strongly for a mobile version - usage data showed people accessing a desktop-designed product on their phones.",
      "The side menu reached 19 items at times; I would group functions into subgroups and make it collapsible to reduce cognitive load.",
      "More validation with users, not only stakeholders.",
    ],
    team: "",
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
    period: "June 2023 - January 2024",
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
      "B__mker is a new social network concept that promotes interaction while also standing out by putting you in control of what you see. With no constraints or labels, the platform seeks to foster genuine community without algorithmic manipulation.",
      "The design challenge: how can people enjoy using social networks again, simply browsing light content while still having the option - and a place - for specific and intellectual content?",
    ],
    initiatives: [
      {
        title: "Understanding that I am not my user",
        challenge:
          "The maxim \u201cyou are not your user\u201d became as real as a toothache in the very first stages of research.",
        focusLabel: "Strategic focus",
        focus:
          "Establish research objectives as a compass, then validate assumptions with real people before defining anything.",
        solution:
          "A survey with linear-scale questions was sent to 104 people, of whom 84 were classified as valid. From the data I derived personas, user stories, and user journeys - artifacts that made the project possible.",
      },
      {
        title: "Turning research into shared statements",
        challenge:
          "Insights were fresh only in my mind; the team needed the same clarity to address constraints and pain points.",
        focusLabel: "Strategic focus",
        focus:
          "Condense every artifact into a problem statement and a value proposition the whole team could use.",
        solution:
          "Using the 5W2H technique (without cost analysis) I produced a 5W1H table and a value proposition describing the product\u2019s benefits and functions. Conversations with stakeholders aligned everyone on what we were trying to solve.",
      },
      {
        title: "Giving control back to the user: Special Swipes",
        challenge:
          "Feeds are shaped by algorithms the user cannot influence; light and intellectual content compete for the same space.",
        focusLabel: "Transformation / Value",
        focus: "Use a familiar gesture to let each post train the algorithm explicitly.",
        solution:
          "Special swipes bring the right/left gesture into the feed: for each post the user tells the algorithm what type of content they want to see more or less of. Wireframes evolved into high-fidelity prototypes, and the interaction felt natural and satisfying.",
      },
    ],
    outcome: [
      "A complete concept - from research to design system - that demonstrates end-to-end product thinking on an individual project.",
      "The design system structure allowed high-fidelity screens to be produced consistently and validated with feedback.",
    ],
    limitations: [
      "As a concept project, results are qualitative: validation happened through feedback sessions, not production metrics.",
    ],
    team: "",
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
      "Decision to use Framer instead of the internal Ditto product.",
      "Data analysis in Clarity across other brands to validate the happy path.",
      "Design and build of the website and CMS.",
      "Trade-off documentation on stack, cost, and governance.",
    ],
    about: [
      "AUDEN was a new, young, bold brand focused on Gen Z, but it had no live website or e-commerce. Without a digital presence, it could not sell.",
      "The only \u201cofficial\u201d option was to integrate it into Ditto, an internal product I had designed myself, but it could not support the brand\u2019s stylistic needs without several improvements.",
    ],
    initiatives: [
      {
        title: "Optimizing a proven pattern instead of guessing",
        challenge:
          "My biggest pain point was time. Every day without a website, AUDEN was losing leads and enrollments while targets put us under intense pressure.",
        focusLabel: "Strategic focus",
        focus: "Use data from other brands in Ditto to support the decision rather than intuition.",
        solution:
          "Clarity flow analysis, page performance, and heatmaps showed a robust, validated happy path (home > optional PLP > PDP > checkout). I wasn\u2019t \u201cguessing with Framer\u201d; I was applying patterns validated by real data.",
      },
      {
        title: "Three decisions",
        challenge: "A new brand with no history had to feel bold to Gen Z and convert immediately.",
        focusLabel: "Strategic focus",
        focus: "Personality up front, proven structure underneath, independence from the backlog.",
        solution:
          "(1) Make the home page a showcase for the brand\u2019s personality. (2) Keep the validated happy path even when moving to Framer, so as not to discard what Ditto had taught us through data. (3) Preserve independence from Ditto\u2019s roadmap.",
      },
      {
        title: "Owning the trade-offs",
        challenge:
          "Framer\u2019s visual capabilities and iteration speed were so superior that the team began asking \u201cwhy not migrate everything to Framer?\u201d",
        focusLabel: "Transformation / Value",
        focus: "Make the stack and cost risks explicit so the business could decide consciously.",
        solution:
          "Costs and risks identified: images tied to Framer\u2019s infrastructure, risk of exceeding bandwidth limits, limited room for cache/proxy, potential impact on Core Web Vitals and SEO if we scaled.",
      },
    ],
    outcome: [
      "Immediate business result: the brand went from zero to a functional website + CMS in 3 days, allowing sales to begin well before the \u201cofficial\u201d Ditto launch window.",
      "The case exposed limitations of the internal product (Ditto) and generated strategic discussions about stack and governance for brand websites.",
    ],
    limitations: [
      "With hindsight from a product perspective, it would have been better to invest in evolving Ditto, despite Framer\u2019s tactical time-to-market advantage.",
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
    role: "Product Designer / Lead",
    project: "QE (Qeevo Group)",
    period: "2026",
    cover: "/portfolio-images/rapid-churn-retention-intervention/IMAGEM_01.png", 
    featured: false,
    metric: { value: "n=200", label: "quantitative validation sample" },
    whatIDid: [
      "Architected, proposed, and secured approval for a rapid-response product discovery framework.",
      "Conducted deep-dive qualitative causal mapping interviews.",
      "Established a quantitative validation baseline (n=200) with recency weighting for dropout cohorts.",
      "Structured a high-impact executive product narrative for leadership."
    ],
    about: [
      "With annual performance stuck at 60% right at the start of the peak conversion window, sales stalled completely as long-term product engagement and user LTV collapsed.",
      "The root cause was structural following federal guidelines (Decreto nº 12.456/2025 and Portaria MEC nº 378/2025) which banned 100% remote courses without physical presence requirements, breaking our nationwide scholarship model."
    ],
    initiatives: [
      {
        title: "Product problem statement",
        challenge: "Federal policy shifts banned 100% remote delivery and mandated physical attendance thresholds while partner institutions lacked physical polos.",
        focusLabel: "Strategic focus",
        focus: "Diagnose why prospective and active users were abandoning the product after purchase under severe time constraints.",
        solution: "Identified that the underlying product-market value proposition broke mid-stream when students could no longer fit rigid on-site schedules."
      },
      {
        title: "Methodology: Rapid mixed-methods discovery",
        challenge: "Lack of clear behavioral telemetry from leadership and internal teams during a critical sales season.",
        focusLabel: "Strategic focus",
        focus: "Deploy a pragmatic, rigorous mixed-methods framework combining qualitative causal mapping and quantitative validation.",
        solution: "Executed deep-dive interviews and established an n=200 quantitative baseline with recency weighting and strict actionability guardrails."
      },
      {
        title: "Product storyline and executive architecture",
        challenge: "Translating complex empirical findings into a direct, high-impact narrative for leadership.",
        focusLabel: "Transformation / Value",
        focus: "Structure data into clear frameworks for decision-making.",
        solution: "Delivered a 4-step framework covering user segmentation, retention drivers, churn drivers, and comparative NPS impact."
      }
    ],
    outcome: [
      "Built the blueprint and hard data required to confront the structural brick wall the business model had hit.",
      "Demonstrated rigorous empirical problem-solving under extreme pressure and regulatory shock."
    ],
    limitations: [
      "Faced severe organizational resistance and structural inertia when presenting hard operational truths."
    ],
    team: "QE (Qeevo Group) stakeholders and leadership.",
    hidden: true,
  },
  {
    slug: "engineering-enablement",
    name: "Engineering enablement without the bottleneck",
    headline: "Removing the design-to-engineering bottleneck by changing how design information is delivered.",
    year: "2023",
    domain: "Developer Experience · Frontend Architecture",
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
      "Proved that systemic consistency can be achieved organically through technical empathy and strategic facilitation rather than rigid enterprise tooling."
    ],
    limitations: [
      "Faced initial resistance from team members before the quality improvements drove organic bottom-up adoption."
    ],
    team: "",
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
    period: "March 2025 - March 2026",
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
    date: "Conclusion 2021",
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
