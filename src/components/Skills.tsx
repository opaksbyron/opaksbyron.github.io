import { skills } from "../data/content"
import { Section } from "./Section"

export function Skills() {
  return (
    <Section id="skills" index="03" title="Technical skills">
      <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group} className="bg-surface p-6">
            <dt className="font-mono text-xs uppercase tracking-widest text-accent">{g.group}</dt>
            <dd>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line px-2.5 py-1 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
