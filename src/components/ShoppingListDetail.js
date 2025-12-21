import { Link, useParams } from "react-router-dom";
import { useShopping } from "../context/ShoppingListContext";
import ItemRow from "./ItemRow";
import { useTranslation } from "react-i18next";
import ItemsCompletionPie from "./charts/ItemsCompletionPie";

export default function ShoppingListDetail() {
  const { id } = useParams();
  const { lists } = useShopping();
  const { t } = useTranslation();

  const list = lists.find((l) => l.id === id);

  if (!list) {
    return (
      <div className="detail">
        <p style={{ marginTop: 0 }}>{t("notFound")}</p>
        <Link className="back" to="/overview">
          ← {t("back")}
        </Link>
      </div>
    );
  }

  return (
    <div className="page-grid">
      <div>
        <ItemsCompletionPie items={list.items} />
      </div>

      <div className="detail">
        <div className="detail-header">
          <h2 style={{ margin: 0 }}>
            {t("detailTitle")} — {list.date}
          </h2>
          <Link className="back" to="/overview">
            ← {t("back")}
          </Link>
        </div>

        <ul className="items">
          {list.items.map((item) => (
            <ItemRow key={item.id} listId={list.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
