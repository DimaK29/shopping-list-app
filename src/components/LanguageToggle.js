import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const isCs = i18n.language === "cs";
  const next = isCs ? "en" : "cs";

  return (
    <button
      className="icon-btn"
      onClick={() => i18n.changeLanguage(next)}
      title={isCs ? "English" : "Čeština"}
      aria-label="Switch language"
      type="button"
    >
      {isCs ? "🇨🇿" : "🇬🇧"}
    </button>
  );
}
