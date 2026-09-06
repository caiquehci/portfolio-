export const profile = {
  name: "Carlos Castanheira",
  shortName: "Carlos Castanheira",
  title: "Product Designer",
  positioning:
    "Senior Product Designer focused on complex digital products, experimentation and measurable outcomes.",
  valueProposition:
    "I ship complete digital products, design flows that reduce cognitive load, and back product decisions with funnels, statistical tests, and documented trade-offs.",
  experienceLine: "Product Designer at Quero Educação (Qeevo Group). Owner of Ditto, AdvLabs and B__mker.",
  location: "Brazil. Open to new opportunities.",
  aboutIntro: [
    "My name is Castanheira, and if you've made it this far, you've probably already seen some of my work. I hope you liked it!",
    "I am a Product Designer with a strong background in graphic design, digital, social media, and marketing. I set aside this space to share some of my achievements.",
  ],
  links: {
    email: "mailto:carlos.hcastanheira04@gmail.com",
    linkedin: "https://www.linkedin.com/in/carloshenrmcj/",
    behance: "https://www.behance.net/",
    whatsapp: "https://wa.me/",
    resume: "#",
  },
}

export type Project = {
  slug: string
  index: string
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
}

export const projects: Project[] = [
  {
    slug: "education-checkout-ab-test",
    index: "01",
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
      "A statistically validated A/B test for a checkout design that converts 45% more enrollments than the old flow, becoming the baseline for one of the business units of the country\u2019s largest education e-commerce platform.",
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
    slug: "bmker-design-system",
    index: "02",
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
    slug: "advlabs-saas",
    index: "03",
    name: "AdvLabs",
    headline: "Improving the health of a live SaaS for environmental lawyers while shipping new features",
    year: "2024",
    domain: "SaaS · Legal",
    tags: ["SaaS", "Product Design", "Chakra UI", "Design System"],
    summary:
      "Screen revamp, implementation of new features, and creation of a design system for an ongoing project.",
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
    slug: "auden-college",
    index: "04",
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
    team: "QE engineering team, Marcas team, and brand stakeholders.",
  },
]

export const moreWork = [
  {
    name: "PD Test - Internet plan purchase assistant",
    category: "Wireframes / Assistant / PD Test",
    summary: "Internet plan purchase assistant, wireframes + process and presentation!",
    href: profile.links.behance,
  },
  {
    name: "Behance archive",
    category: "Graphic design / Social media / Marketing",
    summary: "Complementary visual work from my background in graphic design, digital, and marketing.",
    href: profile.links.behance,
  },
]

export const experience = [
  {
    role: "Product Designer - Ditto (white-label EdTech product)",
    company: "QE (Qeevo Group)",
    period: "2025 - February 2026",
    description:
      "Responsible for Ditto: homepage, lead generation, course listing, PDP, checkout, and digital admissions for higher-education institutions.",
  },
  {
    role: "Product Designer",
    company: "AdvLabs",
    period: "January 2023 - December 2024",
    description:
      "Screen redesigns, new features, and design system creation for a SaaS serving environmental lawyers.",
  },
  {
    role: "Visual and Product Designer | Branding Strategist",
    company: "X6 Tech",
    period: "June 2023 - January 2024",
    description: "End-to-end concept: research, definition, design system, and high-fidelity screens.",
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
    course: "Product Design Certificate - Product Design Program",
    institution: "UX Unicórnio",
    date: "December 2023",
    credential: "cert_hnqcrs2d",
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
  "Stakeholder Management",
]
