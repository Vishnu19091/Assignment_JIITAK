import React from "react";

export function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload || !payload.length) return null;

  const values = payload.map((entry: any) => ({
    name: entry.name,
    value: entry.value,
    color: entry.color,
  }));

  const maxValue = Math.max(...values.map((v: any) => v.value));

  return (
    <div className="bg-white border border-gray-300 p-2 rounded shadow text-sm">
      <p className="font-semibold">{`Age Group: ${label}`}</p>
      <p
        style={{
          color: "orange",
          fontWeight: "bold",
        }}
      >
        Highest: {maxValue}
      </p>
    </div>
  );
}
