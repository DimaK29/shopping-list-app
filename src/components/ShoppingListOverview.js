import { useShopping } from "../context/ShoppingListContext";
import ShoppingListOverviewItem from "./ShoppingListOverviewItem";
import { useTranslation } from "react-i18next";
import ListsBarChart from "./charts/ListsBarChart";

export default function ShoppingListOverview() {
  const { lists } = useShopping();
  const { t } = useTranslation();

  return (
    <div className="page-grid">
      <div>
        <ListsBarChart lists={lists} />
      </div>

      <section className="overview">
        {lists.map((l) => (
          <ShoppingListOverviewItem key={l.id} list={l} />
        ))}
        {lists.length === 0 && (
          <p style={{ margin: 0, color: "var(--muted)" }}>{t("noLists")}</p>
        )}
      </section>
    </div>
  );
}
