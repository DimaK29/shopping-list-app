import { useNavigate } from "react-router-dom";
import { useShopping } from "../context/ShoppingListContext";

export default function ShoppingListOverviewItem({ list }) {
  const navigate = useNavigate();
  const { currentUser, removeList } = useShopping();
  const isOwner = currentUser.role === "owner";

  return (
    <div className="card" onClick={() => navigate(`/list/${list.id}`)}>
      <div className="card-date">{list.date}</div>
      <div className="card-actions" onClick={(e) => e.stopPropagation()}>
        {isOwner && (
          <>
            <button title="Remove list" onClick={() => removeList(list.id)}>🗑️</button>
            <button title="Complete (no-op here)">☑️</button>
          </>
        )}
      </div>
    </div>
  );
}