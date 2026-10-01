import type { ReactNode } from "react"

type Props = {
  id: string
  index: string
  title: string
  children: ReactNode
}

export function Section({ id, index, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mb-10 flex items-baseline gap-4 sm:mb-14">
        <span aria-hidden="true" className="font-mono text-sm text-accent">
          {index}
        </span>
        <h2 id={`${id}-heading`} className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>
      {children}
    </section>
  )
}
