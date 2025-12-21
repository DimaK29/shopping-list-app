import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { useTranslation } from "react-i18next";

export default function ListsBarChart({ lists }) {
  const { t } = useTranslation();

  const data = useMemo(() => {
    return (lists || []).map((l) => ({
      id: l.id,
      name: l.date, 
      items: l.items?.length || 0,
    }));
  }, [lists]);

  if (!lists || lists.length === 0) {
    return (
      <div className="chart-card">
        <p className="chart-title">{t("listsChartTitle")}</p>
        <p style={{ margin: 0, color: "var(--muted)" }}>{t("noLists")}</p>
      </div>
    );
  }

  return (
    <div className="chart-card">
      <p className="chart-title">{t("listsChartTitle")}</p>
      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 8, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="items" fill="var(--accent)" radius={[12, 12, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
