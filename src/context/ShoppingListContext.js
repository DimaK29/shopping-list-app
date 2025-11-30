import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { currentUser as me, members as initialMembers } from "../data";
import {
  fetchLists,
  createList,
  deleteList,
  toggleItem as apiToggleItem,
  deleteItem as apiDeleteItem,
} from "../api/shoppingListApi";

const Ctx = createContext(null);

export function ShoppingListProvider({ children }) {
  const [lists, setLists] = useState([]);
  const [members] = useState(initialMembers);
  const [currentUser] = useState(me);

  
  useEffect(() => {
    fetchLists().then(setLists);
  }, []);

  
  const addList = async (date, itemNames) => {
    const newList = await createList(date, itemNames);
    setLists((prev) => [...prev, newList]);
  };

  
  const removeList = async (id) => {
    await deleteList(id);
    setLists((prev) => prev.filter((l) => l.id !== id));
  };

  
  const toggleItem = async (listId, itemId) => {
    await apiToggleItem(listId, itemId);

    setLists((prev) =>
      prev.map((l) =>
        l.id !== listId
          ? l
          : {
              ...l,
              items: l.items.map((it) =>
                it.id === itemId ? { ...it, done: !it.done } : it
              ),
            }
      )
    );
  };

  
  const removeItem = async (listId, itemId) => {
    await apiDeleteItem(listId, itemId);

    setLists((prev) =>
      prev.map((l) =>
        l.id !== listId
          ? l
          : { ...l, items: l.items.filter((i) => i.id !== itemId) }
      )
    );
  };

  const value = useMemo(
    () => ({
      lists,
      members,
      currentUser,
      addList,
      removeList,
      toggleItem,
      removeItem,
    }),
    [lists, members, currentUser]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useShopping = () => useContext(Ctx);