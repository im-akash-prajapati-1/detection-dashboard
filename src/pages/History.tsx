import HistoryTable from "../components/logs/HistoryTable";
import { useDetectionHistory } from "../hooks/useDetectionHistory";

export default function History() {
  const {
    history: globalHistory,
    clearHistory: clearGlobalHistory,
  } = useDetectionHistory("global");

  return (
    <div className="max-w-4xl mx-auto px-6 pt-6">
      <h1 className="text-2xl font-bold mb-4">
        Detection History
      </h1>

      {globalHistory.length > 0 && (
        <button
          onClick={clearGlobalHistory}
          className="text-sm text-red-600 hover:underline mb-4"
        >
          Clear History
        </button>
      )}

      <HistoryTable history={globalHistory} />
    </div>
  );
}
