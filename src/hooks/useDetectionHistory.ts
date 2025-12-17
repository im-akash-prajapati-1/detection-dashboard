import { useEffect, useState } from "react";
import type { DetectionResult } from "../types/detection";

type HistoryType = "dashboard" | "global";

const STORAGE_KEYS: Record<HistoryType, string> = {
  dashboard: "dashboard-history",
  global: "global-history",
};

export function useDetectionHistory(type: HistoryType) {
  const storageKey = STORAGE_KEYS[type];
  const [history, setHistory] = useState<DetectionResult[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(history));
  }, [history, storageKey]);

  const addHistory = (result: DetectionResult) => {
    setHistory((prev) => [result, ...prev]);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(storageKey);
  };

  return {
    history,
    addHistory,
    clearHistory,
  };
}
