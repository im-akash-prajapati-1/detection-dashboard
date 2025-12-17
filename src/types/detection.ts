export interface DetectionResult {
  label: "REAL" | "FAKE";
  confidence: number;
  timestamp: string;
}
