import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {
  applyTheme,
  getPreferredTheme,
  persistTheme,
  type Theme,
} from "../lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(getPreferredTheme());
  }, []);

  function toggleTheme() {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      applyTheme(nextTheme);
      persistTheme(nextTheme);

      return nextTheme;
    });
  }

  return (
    <button
      className="fixed top-5 right-5 grid size-10 cursor-pointer place-items-center rounded-full border border-border bg-background text-foreground"
      type="button"
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      onClick={toggleTheme}
    >
      <Sun className="hidden size-5 dark:block" aria-hidden="true" />
      <Moon className="size-5 dark:hidden" aria-hidden="true" />
    </button>
  );
}
