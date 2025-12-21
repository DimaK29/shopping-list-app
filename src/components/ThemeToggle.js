import { useTheme } from "../theme/ThemeProvider";
import { useTranslation } from "react-i18next";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const isDark = theme === "dark";

  return (
    <button
      className="icon-btn"
      onClick={toggleTheme}
      title={`${t("theme")}: ${isDark ? t("dark") : t("light")}`}
      aria-label="Toggle theme"
      type="button"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
