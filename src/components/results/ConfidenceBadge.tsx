export default function ConfidenceBadge({ value }: { value: number }) {
  let color =
    value >= 90
      ? "bg-emerald-600"
      : value >= 70
      ? "bg-yellow-500"
      : "bg-red-600";

  return (
    <span
      className={`${color} text-white text-xs px-2 py-1 rounded-full`}
    >
      {value}%
    </span>
  );
}
