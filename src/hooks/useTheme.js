import { useMemo, useState, useEffect } from "react";

export function useTheme() {
  const [dark, setDark] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem("theme");
    if (saved !== null) {
      return saved === "dark";
    }
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const theme = useMemo(
    () => ({
      bg: dark ? "bg-slate-950" : "bg-slate-50",
      card: dark ? "bg-slate-900/60" : "bg-white",
      text: dark ? "text-slate-100" : "text-slate-900",
      sub: dark ? "text-slate-300" : "text-slate-600",
      ring: dark ? "ring-slate-800" : "ring-slate-200",
    }),
    [dark]
  );

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Update document class for potential CSS custom properties
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return { dark, setDark, theme };
}
