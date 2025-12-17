export default function DetectionTimeline({ status }: { status: string }) {
  const steps = ["Uploaded", "Processing", "Completed"];

  return (
    <div className="flex items-center gap-4 mt-4 text-sm">
      {steps.map((step, i) => (
        <div
          key={step}
          className={`px-3 py-1 rounded-full
          ${
            steps.indexOf(status) >= i
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  );
}
