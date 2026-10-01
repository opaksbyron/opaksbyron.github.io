import { profile, stats } from "../data/content"

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative pt-44 pb-16 sm:pt-60 sm:pb-24">
      {/* Decorative wash behind the heading; never announced. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-96"
        style={{
          background: "radial-gradient(60% 60% at 30% 0%, var(--glow), transparent 70%)",
        }}
      />

      <p className="mb-5 flex items-center gap-2.5 font-mono text-sm text-accent">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        Open to frontend &amp; full-stack roles
      </p>

      <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
        {profile.name}
      </h1>

      <p className="mt-4 text-xl text-muted sm:text-2xl">
        {profile.role} <span className="text-faint">·</span>{" "}
        <span className="text-ink">{profile.focus}</span>
      </p>

      <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {profile.intro}
      </p>

      <dl className="mt-12 grid max-w-xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col bg-surface px-5 py-4">
            <dt className="order-2 mt-1 text-xs leading-snug text-faint">{s.label}</dt>
            <dd className="order-1 font-mono text-2xl font-medium text-ink">{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
        >
          Get in touch
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
        >
          View GitHub
        </a>
        <span className="font-mono text-sm text-faint">{profile.location}</span>
      </div>
    </section>
  )
}
