import type { DetectionResult } from "../../types/detection";

export default function HistoryTable({
  history,
}: {
  history: DetectionResult[];
}) {
  if (!history.length) {
    return (
      <p className="text-sm text-gray-500">
        No detection history available.
      </p>
    );
  }

  return (
    <table className="w-full mt-4 rounded-xl overflow-hidden shadow-sm">
      <thead className="bg-indigo-600 text-white">
        <tr>
          <th className="p-3 text-left">Result</th>
          <th className="p-3 text-left">Confidence</th>
          <th className="p-3 text-left">Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {history.map((item, idx) => (
          <tr
            key={idx}
            className="bg-white dark:bg-gray-800
                       hover:bg-gray-50 dark:hover:bg-gray-700
                       transition"
          >
            <td className="p-3 font-medium">
              {item.label}
            </td>
            <td className="p-3">
              {item.confidence}%
            </td>
            <td className="p-3 text-sm text-gray-500">
              {new Date(item.timestamp).toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
