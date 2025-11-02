import { createContext, useContext, useState, useMemo } from "react";
import { currentUser as me, members as initialMembers, initialLists } from "../data";

const Ctx = createContext(null);

export function ShoppingListProvider({ children }) {
  const [lists, setLists] = useState(initialLists);
  const [members] = useState(initialMembers);
  const [currentUser] = useState(me);

  const removeList = (id) => setLists((prev) => prev.filter((l) => l.id !== id));
  const toggleItem = (listId, itemId) =>
    setLists((prev) =>
      prev.map((l) =>
        l.id !== listId
          ? l
          : { ...l, items: l.items.map((it) => it.id === itemId ? { ...it, done: !it.done } : it) }
      )
    );
  const removeItem = (listId, itemId) =>
    setLists((prev) =>
      prev.map((l) =>
        l.id !== listId ? l : { ...l, items: l.items.filter((i) => i.id !== itemId) }
      )
    );

  const value = useMemo(() => ({ lists, members, currentUser, removeList, toggleItem, removeItem }), [lists, members, currentUser]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export const useShopping = () => useContext(Ctx);