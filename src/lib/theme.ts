export const THEME_STORAGE_KEY = "theme";

export type Theme = "light" | "dark";

export function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

export function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "light";

  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (isTheme(storedTheme)) return storedTheme;
  } catch {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function persistTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Keep theme switching usable when storage is unavailable.
  }
}
