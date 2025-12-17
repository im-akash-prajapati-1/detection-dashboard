export default function ConfirmModal({
  open,
  onClose,
  onConfirm,
}: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-80">
        <h3 className="font-semibold mb-2">
          Clear history?
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="text-sm">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-3 py-1 rounded text-sm"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
