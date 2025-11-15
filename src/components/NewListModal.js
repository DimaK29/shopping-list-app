import { useState } from "react";
import { useShopping } from "../context/ShoppingListContext";

export default function NewListModal({ isOpen, onClose }) {
  const { addList } = useShopping();
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
      alert("Vyplňte prosím datum a alespoň jednu položku.");
      return;
    }

    const dateStr = new Date(date).toLocaleDateString("cs-CZ");
    addList(dateStr, trimmedItems);

    setDate("");
    setItemsText("");
    onClose();
  };

  const handleBackdropClick = () => {
    onClose();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal" onClick={stopPropagation}>
        <h2>Nový nákupní seznam</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Datum
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label>
            Položky (každá na nový řádek)
            <textarea
              rows="4"
              value={itemsText}
              onChange={(e) => setItemsText(e.target.value)}
            />
          </label>
          <div className="modal-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={onClose}
            >
              Zrušit
            </button>
            <button type="submit" className="btn-primary">
              Vytvořit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}