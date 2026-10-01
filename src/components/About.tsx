import { education, profile } from "../data/content"
import { Section } from "./Section"

export function About() {
  return (
    <Section id="about" index="04" title="About">
      <div className="grid gap-10 sm:grid-cols-5">
        <div className="space-y-4 sm:col-span-3">
          <p className="leading-relaxed text-muted">
            I am a self-taught developer in {profile.location}, working primarily in React and
            TypeScript. Most of what I know came from reading large codebases I did not write and
            then changing them carefully enough that the change was accepted.
          </p>
          <p className="leading-relaxed text-muted">
            That is the thread through everything here: finding the gap between what a product
            claims and what it does, then closing it in a way the maintainers can review in one
            sitting. A language cookie honoured by one app out of nine. A router that scored every
            request and then threw the score away.
          </p>
          <p className="leading-relaxed text-muted">
            I am looking for a full-time frontend or full-stack role.
          </p>
        </div>

        <div className="sm:col-span-2">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">Education</h3>
          <div className="mt-4 rounded-xl border border-line bg-surface p-5">
            <p className="font-medium">{education.degree}</p>
            <p className="mt-1 text-sm text-muted">{education.status}</p>
            <p className="mt-3 text-sm text-faint">
              {education.school}
              <br />
              {education.place}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
