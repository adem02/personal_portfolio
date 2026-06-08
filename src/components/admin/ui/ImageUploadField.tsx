import { useRef, useState } from "react";
import { uploadImageToFolder } from "../../../services/storage.service";

interface Props {
  folder: string;
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export const ImageUploadField = ({ folder, value, onChange, label = "Image" }: Props) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    setUploading(true);
    try {
      const url = await uploadImageToFolder(file, folder);
      onChange(url);
    } catch {
      setError("Échec de l'upload, réessaye.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-neutral-400">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="rounded-lg border border-dashed border-neutral-600 px-4 py-2 text-sm text-neutral-400 hover:border-cyan-500 hover:text-cyan-400 disabled:opacity-50 transition-colors"
        >
          {uploading ? "Upload en cours…" : value ? "Changer l'image" : "Choisir un fichier"}
        </button>
        {value && (
          <img src={value} alt="aperçu" className="h-12 w-20 rounded-md object-cover border border-neutral-700" />
        )}
        <input ref={inputRef} type="file" accept="image/*,image/gif" onChange={handleFile} className="hidden" />
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
};
