import { useDropzone } from "react-dropzone";
import { useState } from "react";

const MAX_SIZE = 50 * 1024 * 1024; // 50MB

export default function MediaUploader({ onUpload }: any) {
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
      "audio/*": [".mp3", ".wav"],
      "video/*": [".mp4"],
    },
    maxSize: MAX_SIZE,
    multiple: false,
    onDropRejected: () => {
      setError("File too large or unsupported format (max 50MB)");
    },
    onDrop: (files) => {
      setError(null);
      const file = files[0];
      if (!file) return;

      setPreview(URL.createObjectURL(file));
      setType(file.type);
      onUpload(file);
    },
  });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition
          ${
            isDragActive
              ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40"
              : "border-indigo-300 dark:border-indigo-700 bg-white dark:bg-gray-800"
          }
        `}
      >
        <input {...getInputProps()} />
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Drag & drop image, audio, or video
        </p>
        <p className="text-xs text-gray-400">
          JPG, PNG, MP3, WAV, MP4 • Max 50MB
        </p>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {preview && type?.startsWith("image") && (
        <img src={preview} className="rounded max-h-64" />
      )}

      {preview && type?.startsWith("video") && (
        <video controls className="w-full rounded">
          <source src={preview} />
        </video>
      )}

      {preview && type?.startsWith("audio") && (
        <audio controls className="w-full">
          <source src={preview} />
        </audio>
      )}
    </div>
  );
}
