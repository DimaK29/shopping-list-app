import { useShopping } from "../context/ShoppingListContext";

export default function Header() {
  const { currentUser } = useShopping();
  return (
    <header className="header">
      <div className="header-left">
        <div className="avatar" title={currentUser.name}>{currentUser.name[0]}</div>
      </div>
      <h1>Main page</h1>
      <div className="header-actions">
        <button title="Download">&#8681;</button>
        <button title="Create new">＋</button>
      </div>
    </header>
  );
}