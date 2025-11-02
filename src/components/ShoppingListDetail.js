import { Link, useParams } from "react-router-dom";
import { useShopping } from "../context/ShoppingListContext";
import ItemRow from "./ItemRow";

export default function ShoppingListDetail() {
  const { id } = useParams();
  const { lists } = useShopping();
  const list = lists.find((l) => l.id === id);

  if (!list) return <div className="detail"><p>List not found</p><Link to="/overview">← Back</Link></div>;

  return (
    <div className="detail">
      <div className="detail-header">
        <h2>Shopping list — {list.date}</h2>
        <Link className="back" to="/overview">← Back</Link>
      </div>

      <ul className="items">
        {list.items.map((item) => <ItemRow key={item.id} listId={list.id} item={item} />)}
      </ul>
    </div>
  );
}