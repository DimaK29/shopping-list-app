import { useNavigate } from "react-router-dom";
import { useShopping } from "../context/ShoppingListContext";
import { useTranslation } from "react-i18next";

export default function ShoppingListOverviewItem({ list }) {
  const navigate = useNavigate();
  const { currentUser, removeList } = useShopping();
  const { t } = useTranslation();

  const isOwner = currentUser.role === "owner";

  const done = list.items.filter((i) => i.done).length;
  const total = list.items.length;

  const handleCardClick = () => {
    navigate(`/list/${list.id}`);
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    const confirmed = window.confirm(
      t("removeList") + "?"
    );
    if (confirmed) removeList(list.id);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div>
        <div className="card-date">{list.date}</div>
        <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 6 }}>
          {t("items")}: <b style={{ color: "var(--text)" }}>{total}</b> · {t("completed")}:{" "}
          <b style={{ color: "var(--text)" }}>{done}</b>
        </div>
      </div>

      <div className="card-actions" onClick={(e) => e.stopPropagation()}>
        {isOwner && (
          <button title={t("removeList")} onClick={handleRemoveClick}>
            🗑️
          </button>
        )}
      </div>
    </div>
  );
}
