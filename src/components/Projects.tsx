import { projects } from "../data/content"
import { Section } from "./Section"

export function Projects() {
  return (
    <Section id="projects" index="02" title="Projects">
      <div className="space-y-6">
        {projects.map((p) => (
          <article
            key={p.name}
            className="rounded-xl border border-line bg-surface p-6 transition-colors hover:border-faint sm:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-sm text-accent transition hover:underline"
              >
                View source ↗
              </a>
            </div>

            <p className="mt-1 text-muted">{p.tagline}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent"
                >
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-4 border-t border-line pt-6">
              {p.body.map((para) => (
                <p key={para} className="text-sm leading-relaxed text-muted">
                  {para}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
