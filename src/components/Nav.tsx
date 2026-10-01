import { useEffect, useState } from "react"
import { nav, profile } from "../data/content"
import { ThemeToggle } from "./ThemeToggle"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Condense once the hero's opening line has cleared, so the change reads as
    // deliberate rather than twitching on the first pixel of scroll.
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-bg/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-5xl items-center gap-6 px-6 transition-[height] duration-300 ease-out ${
          scrolled ? "h-16" : "h-36 sm:h-50"
        }`}
      >
        <a href="#top" className="flex items-center">
          {/* The portrait is now the only thing in this link, so its alt text
              becomes the link's accessible name and cannot be decorative. */}
          <img
            src="./avatar.jpg"
            alt="Opakrwoth Byron Peter"
            width={180}
            height={180}
            decoding="async"
            className={`rounded-full object-cover ring-1 ring-line transition-[width,height] duration-300 ease-out ${
              scrolled ? "size-11" : "size-28 sm:size-45"
            }`}
          />
        </a>

        <ul className="ml-auto hidden items-center gap-7 sm:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 sm:ml-0">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile (opens in a new tab)"
            className="grid size-9 place-items-center rounded-lg border border-line text-muted transition hover:border-accent hover:text-accent"
          >
            <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="currentColor">
              <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8 8 0 0 0 8 0Z" />
            </svg>
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
