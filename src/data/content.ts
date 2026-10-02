export type Link = { label: string; href: string }

export type Contribution = {
  org: string
  blurb: string
  stack: string
  role: string
  href: string
  items: string[]
}

export type Project = {
  name: string
  tagline: string
  href: string
  live?: string
  stack: string[]
  body: string[]
}

export const profile = {
  name: "Opakrwoth Byron Peter",
  role: "Frontend Software Developer",
  focus: "React / TypeScript",
  location: "Kampala, Uganda",
  email: "opaks0256@gmail.com",
  github: "https://github.com/opaksbyron",
  linkedin: "https://www.linkedin.com/in/opakrwoth-byron-peter-45649a331",
  intro:
    "I learn by shipping real code. Seventeen pull requests across three production open-source codebases I did not write, covering message rendering, notification pipelines, internationalisation and UI state, each to its own conventions and test requirements.",
}

export const stats = [
  { value: "17", label: "pull requests" },
  { value: "3", label: "production codebases" },
  { value: "3,255", label: "tests green on the i18n suite" },
] as const

export const contributions: Contribution[] = [
  {
    org: "ibl.ai",
    blurb: "Sovereign AI platform for education and enterprise",
    stack: "Next.js · React · TypeScript",
    role: "Contributor",
    href: "https://github.com/iblai",
    items: [
      "Identified that the cross-app language cookie was honoured by only one of nine front-end applications, and filed the finding against their Agentic LMS.",
      "Built the internationalisation layer for that LMS with next-intl, English and French catalogues, a converted navigation shell, and <html lang> driven by the resolved locale (WCAG 3.1.1). The full suite stayed green at 3,255 tests.",
      "Made the app scaffold bilingual so every newly generated project inherits i18n instead of the gap, and fixed the scaffold failing typecheck immediately after their own documented install command.",
      "Contributed an independent reproduction to a live platform bug, disproving the leading hypothesis by testing it against a second organisation.",
    ],
  },
  {
    org: "Mattermost",
    blurb: "Open-source Slack alternative",
    stack: "React · TypeScript",
    role: "Contributor",
    href: "https://github.com/mattermost/mattermost",
    items: [
      "Added HCL/Terraform syntax highlighting to the message code-block renderer: vendored grammar plus loader, with tests.",
      "Built a “show online only” filter for the Channel Members panel, and auto-continuation of markdown lists on Shift+Enter.",
      "Reworked the send-DM flow from the user popover, and fixed @mention notifications on edited posts.",
      "Fixed message-rendering bugs across emoticons, hashtags and KaTeX chemistry macros.",
    ],
  },
  {
    org: "Rocket.Chat",
    blurb: "Open-source team communication",
    stack: "React · TypeScript",
    role: "Contributor",
    href: "https://github.com/RocketChat/Rocket.Chat",
    items: [
      "Fixed the room-name-changed message preview, and thread-sidebar auto-close when a parent message is unavailable.",
      "Synced the profile avatar editor state across cancel and save, so a pending preview survives a failed request.",
    ],
  },
]

export const projects: Project[] = [
  {
    name: "Uganda Web Performance Index",
    tagline: "What the country's public web costs to load, measured and published",
    href: "https://github.com/opaksbyron/uganda-web-performance",
    live: "https://opaksbyron.github.io/uganda-web-performance",
    stack: ["React", "TypeScript", "Vite", "Tailwind", "Lighthouse", "Node"],
    body: [
      "Core Web Vitals set one bar for the whole web, but almost all published performance data is gathered on fast networks and recent phones. I measured a sample that is rarely measured: 35 Ugandan government, banking and university sites, from Kampala, on a throttled mobile profile, with five well-optimised international sites as controls.",
      "Not one Ugandan site in the sample reaches the 2.5 second target. The median is 19.2 seconds against 3.6 for the controls. GOV.UK serves its homepage in 0.19 MB; the heaviest site measured ships 61 MB, which is 323 times the bytes.",
      "Three sites could not be measured at all because the browser refused to load them, including a licensed bank serving an expired TLS certificate. Those are reported exactly as observed, with the error strings and no inference about cause.",
      "Every run is published: the site list, the measurement script, 96 raw Lighthouse results, and the dashboard that reads them. The sweep flushes after each site and resumes where it stopped, because the first attempt died partway through and took its results with it.",
    ],
  },
  {
    name: "Router Insight",
    tagline: "Routing observability for an open-source model router",
    href: "https://github.com/opaksbyron/router-insight",
    stack: ["Next.js", "React 19", "TypeScript", "Tailwind", "Radix"],
    body: [
      "ibl.ai’s model router reported what you spent. It could not answer the question underneath that number: was this request routed correctly?",
      "The router already scored every request across fourteen dimensions, then wrote the result to stdout and dropped it. Router Insight surfaces that judgement and narrows it to the two cases worth a human look: decisions that landed within 0.08 of a tier boundary, and those the router itself flagged as ambiguous.",
      "Getting there meant patching the router to expose per-request decisions: 77 lines, zero new dependencies, loopback-only CORS, and prompt text excluded unless explicitly opted into.",
    ],
  },
]

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML", "SCSS / CSS", "Go (working knowledge)", "Node.js"],
  },
  {
    group: "Frameworks",
    items: ["React", "Next.js (App Router)", "Redux", "Tailwind CSS", "Radix UI"],
  },
  {
    group: "Practices",
    items: ["Internationalisation (next-intl)", "Accessibility (WCAG)", "Unit testing (Vitest)", "REST APIs"],
  },
  {
    group: "Tools",
    items: ["Git & GitHub", "pnpm", "AI-assisted development"],
  },
]

export const education = {
  degree: "BSc Computer Science",
  status: "In progress, Year 3",
  school: "ISBAT University",
  place: "Kampala, Uganda",
}

export const nav: Link[] = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
]
