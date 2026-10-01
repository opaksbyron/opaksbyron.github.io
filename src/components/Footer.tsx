import { profile } from "../data/content"

const links = [
  { label: "Email", href: `mailto:${profile.email}`, text: profile.email },
  { label: "GitHub", href: profile.github, text: "github.com/opaksbyron" },
  { label: "LinkedIn", href: profile.linkedin, text: "LinkedIn" },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Get in touch</h2>
      <p className="mt-3 max-w-xl text-muted">
        Open to full-time frontend and full-stack roles, and to contract work. The fastest way to
        reach me is email.
      </p>

      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
        {links.map((l) => (
          <li key={l.label}>
            <p className="font-mono text-xs uppercase tracking-widest text-faint">{l.label}</p>
            <a
              href={l.href}
              {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              className="mt-1 inline-block text-ink transition-colors hover:text-accent"
            >
              {l.text}
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-14 font-mono text-xs text-faint">
        Built with React, TypeScript, Vite and Tailwind. No framework beyond what the page needed.
      </p>
    </footer>
  )
}
