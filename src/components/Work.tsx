import { contributions } from "../data/content"
import { Section } from "./Section"

export function Work() {
  return (
    <Section id="work" index="01" title="Open-source contributions">
      <p className="mb-10 max-w-2xl text-muted">
        Production codebases I did not write, each with its own conventions, review bar and test
        requirements. The work below is linked in full from my GitHub profile.
      </p>

      <ol className="space-y-5">
        {contributions.map((c) => (
          <li
            key={c.org}
            className="rounded-xl border border-line bg-surface p-6 transition-colors hover:border-faint sm:p-8"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold tracking-tight">
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-accent"
                >
                  {c.org}
                </a>
              </h3>
              <span className="text-sm text-faint">{c.blurb}</span>
              <span className="ml-auto rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-faint">
                {c.role}
              </span>
            </div>

            <p className="mt-1.5 font-mono text-xs text-accent">{c.stack}</p>

            <ul className="mt-5 space-y-3">
              {c.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-faint" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
