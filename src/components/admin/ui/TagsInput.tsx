import { useState } from "react";

interface Props {
  tags: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
}

export const TagsInput = ({ tags, onChange, placeholder = "Ajouter et appuyer sur Entrée..." }: Props) => {
  const [input, setInput] = useState("");

  const addTag = () => {
    const trimmed = input.trim();
    if (trimmed && !tags.includes(trimmed)) onChange([...tags, trimmed]);
    setInput("");
  };

  const removeTag = (tag: string) => onChange(tags.filter((t) => t !== tag));

  return (
    <div className="flex flex-col gap-2">
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1 rounded-md bg-neutral-700 px-2 py-0.5 text-xs text-neutral-200">
              {tag}
              <button type="button" onClick={() => removeTag(tag)} className="text-neutral-500 hover:text-red-400 transition-colors leading-none">
                ×
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === ",") { e.preventDefault(); addTag(); }
          }}
          placeholder={placeholder}
          className="flex-1 rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-cyan-500 placeholder:text-neutral-600"
        />
        <button
          type="button"
          onClick={addTag}
          className="rounded-lg bg-neutral-700 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-600 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
};
