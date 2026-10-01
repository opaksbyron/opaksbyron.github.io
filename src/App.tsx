import { About } from "./components/About"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Nav } from "./components/Nav"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Work } from "./components/Work"

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main" className="mx-auto max-w-5xl px-6">
        <Hero />
        <Work />
        <Projects />
        <Skills />
        <About />
        <Footer />
      </main>
    </>
  )
}
