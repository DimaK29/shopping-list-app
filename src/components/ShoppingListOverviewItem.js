import { useNavigate } from "react-router-dom";
import { useShopping } from "../context/ShoppingListContext";

export default function ShoppingListOverviewItem({ list }) {
  const navigate = useNavigate();
  const { currentUser, removeList } = useShopping();
  const isOwner = currentUser.role === "owner";

  const handleCardClick = () => {
    navigate(`/list/${list.id}`);
  };

  const handleRemoveClick = (e) => {
    // щоб клік по кнопці не відкривав detail
    e.stopPropagation();

    const confirmed = window.confirm(
      "Opravdu chcete smazat tento nákupní seznam?"
    );
    if (confirmed) {
      removeList(list.id);
    }
  };

  const handleActionsClick = (e) => {
    // щоб клік в блоці з кнопками не тригерив клік по картці
    e.stopPropagation();
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="card-date">{list.date}</div>
      <div className="card-actions" onClick={handleActionsClick}>
        {isOwner && (
          <>
            <button title="Remove list" onClick={handleRemoveClick}>
              🗑️
            </button>
            <button title="Complete (no-op here)">☑️</button>
          </>
        )}
      </div>
    </div>
  );
}