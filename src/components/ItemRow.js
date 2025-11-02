import { useShopping } from "../context/ShoppingListContext";

export default function ItemRow({ listId, item }) {
  const { currentUser, toggleItem, removeItem } = useShopping();
  const isOwner = currentUser.role === "owner";

  return (
    <li className={`item ${item.done ? "done" : ""}`}>
      <span>{item.name}</span>
      <div className="item-actions">
        <button title="Toggle complete" onClick={() => toggleItem(listId, item.id)}>☑️</button>
        {isOwner && <button title="Remove item" onClick={() => removeItem(listId, item.id)}>🗑️</button>}
      </div>
    </li>
  );
}