import { PieChart, Pie, Cell } from "recharts";

export default function ConfidenceChart({ confidence }: { confidence: number }) {
  const data = [
    { name: "Confidence", value: confidence },
    { name: "Remaining", value: 100 - confidence },
  ];

  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={80}
      >
        <Cell fill="#22c55e" />
        <Cell fill="#e5e7eb" />
      </Pie>
    </PieChart>
  );
}
