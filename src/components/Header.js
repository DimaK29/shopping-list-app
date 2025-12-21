import { useShopping } from "../context/ShoppingListContext";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Header({ onCreateNew }) {
  const { currentUser } = useShopping();
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-left">
        <div className="avatar" title={currentUser.name}>
          {currentUser.name?.[0] || "U"}
        </div>
      </div>

      <h1 className="header-title">{t("appTitle")}</h1>

      <div className="header-actions">
        <ThemeToggle />
        <LanguageToggle />

        <button className="icon-btn" title={t("download")} type="button">
          &#8681;
        </button>

        <button className="icon-btn primary" title={t("createNew")} onClick={onCreateNew} type="button">
          ＋
        </button>
      </div>
    </header>
  );
}
