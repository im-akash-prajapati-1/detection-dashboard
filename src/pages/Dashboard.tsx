import { useState } from "react";
import MediaUploader from "../components/upload/MediaUploader";
import ResultCard from "../components/results/ResultCard";
import HistoryTable from "../components/logs/HistoryTable";
import { detectMedia } from "../services/detectionApi";
import type { DetectionResult } from "../types/detection";
import { useDetectionHistory } from "../hooks/useDetectionHistory";

export default function Dashboard() {
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    history: dashboardHistory,
    addHistory: addDashboardHistory,
    clearHistory: clearDashboardHistory,
  } = useDetectionHistory("dashboard");

  const { addHistory: addGlobalHistory } =
    useDetectionHistory("global");

  const handleUpload = async () => {
    setLoading(true);
    const res = (await detectMedia()) as DetectionResult;

    setResult(res);
    addDashboardHistory(res);
    addGlobalHistory(res);

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pt-6">
      <h1 className="text-2xl font-bold mb-6">
        Detection Dashboard
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <MediaUploader onUpload={handleUpload} />
      </div>

      {loading && (
        <p className="mt-4 text-sm text-gray-500">
          Analyzing media...
        </p>
      )}

      {result && (
        <div className="mt-6">
          <ResultCard result={result} />
        </div>
      )}

      {dashboardHistory.length > 0 && (
        <button
          onClick={clearDashboardHistory}
          className="text-sm text-red-600 hover:underline mt-8"
        >
          Clear History
        </button>
      )}

      <HistoryTable history={dashboardHistory} />
    </div>
  );
}
