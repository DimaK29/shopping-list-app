import React, { useMemo } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useTranslation } from "react-i18next";

export default function ItemsCompletionPie({ items }) {
  const { t } = useTranslation();

  const { completed, percent, data } = useMemo(() => {
    const total = items?.length || 0;
    const completedCount = (items || []).filter((i) => i.done).length;
    const remainingCount = total - completedCount;
    const pct = total === 0 ? 0 : Math.round((completedCount / total) * 100);

    return {
      completed: completedCount,
      remaining: remainingCount,
      percent: pct,
      data: [
        { name: t("completed"), value: completedCount },
        { name: t("remaining"), value: remainingCount },
      ],
    };
  }, [items, t]);

  return (
    <div className="chart-card">
      <p className="chart-title">{t("completionChartTitle")}</p>

      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
        <div style={{ fontSize: 28, fontWeight: 800 }}>{percent}%</div>
        <div style={{ color: "var(--muted)", fontSize: 13 }}>
          {t("donePercent")} · {completed}/{(items || []).length}
        </div>
      </div>

      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={55}
              outerRadius={90}
              paddingAngle={3}
            >
              <Cell fill="var(--accent)" />
              <Cell fill="var(--border)" />
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {((items || []).length === 0) && (
        <p style={{ margin: "8px 0 0 0", color: "var(--muted)" }}>{t("emptyItems")}</p>
      )}
    </div>
  );
}
