import { useShopping } from "../context/ShoppingListContext";
import SidePanelItem from "./SidePanelItem";

export default function SidePanel() {
  const { members } = useShopping();
  return (
    <aside className="side">
      {members.map((m) => <SidePanelItem key={m.id} member={m} />)}
    </aside>
  );
}