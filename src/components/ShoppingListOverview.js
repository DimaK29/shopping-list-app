import { useShopping } from "../context/ShoppingListContext";
import ShoppingListOverviewItem from "./ShoppingListOverviewItem";

export default function ShoppingListOverview() {
  const { lists } = useShopping();
  return (
    <section className="overview">
      {lists.map((l) => <ShoppingListOverviewItem key={l.id} list={l} />)}
      {lists.length === 0 && <p>No lists yet.</p>}
    </section>
  );
}