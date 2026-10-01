import { useCallback, useEffect, useState } from "react"

export type Theme = "dark" | "light"

function current(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark"
}

/** The theme is set on <html> before first paint (see index.html), so this hook
 *  reads that as its initial value rather than re-deciding and causing a flash. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(current)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem("theme", theme)
    } catch {
      // Private browsing or blocked storage — the theme still applies for this visit.
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"))
  }, [])

  return { theme, toggle }
}
