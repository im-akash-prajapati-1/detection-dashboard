import ConfidenceBadge from "./ConfidenceBadge";

export default function ResultCard({ result }: any) {
  if (!result) return null;

  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
      <h3 className="text-lg font-semibold mb-2">
        Result: {result.label}
      </h3>
      <ConfidenceBadge value={result.confidence} />
    </div>
  );
}
