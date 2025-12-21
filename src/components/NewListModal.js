import { useState } from "react";
import { useShopping } from "../context/ShoppingListContext";
import { useTranslation } from "react-i18next";

export default function NewListModal({ isOpen, onClose }) {
  const { addList } = useShopping();
  const { t, i18n } = useTranslation();

  const [date, setDate] = useState("");
  const [itemsText, setItemsText] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedItems = itemsText
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    if (!date || trimmedItems.length === 0) {
      alert(t("fillDateAndItem"));
      return;
    }

    const locale = i18n.language === "en" ? "en-GB" : "cs-CZ";
    const dateStr = new Date(date).toLocaleDateString(locale);

    addList(dateStr, trimmedItems);

    setDate("");
    setItemsText("");
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{t("newList")}</h2>

        <form onSubmit={handleSubmit}>
          <label>
            {t("date")}
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>

          <label>
            {t("itemsPlaceholder")}
            <textarea
              rows="4"
              value={itemsText}
              onChange={(e) => setItemsText(e.target.value)}
            />
          </label>

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              {t("cancel")}
            </button>
            <button type="submit" className="btn-primary">
              {t("create")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
