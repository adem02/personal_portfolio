import { useRef } from "react";
import { ADMIN_FORM_INPUT_CLASS, ADMIN_SECONDARY_BUTTON_CLASS } from "../../../../constants/adminForm.constants";
import { MAX_GALLERY_IMAGES_COUNT } from "../../../../constants/projectForm.constants";
import type { GalleryItemDraft } from "../../../../types/projectForm.types";

interface Props {
  galleryItemDrafts: GalleryItemDraft[];
  onGalleryItemDraftsAdded: (files: File[]) => void;
  onGalleryItemDraftAltUpdated: (itemIndex: number, newAlt: string) => void;
  onGalleryItemMarkedAsMainImage: (itemIndex: number) => void;
  onGalleryItemDraftRemovedAtIndex: (itemIndex: number) => void;
}

export const ProjectGalleryEditor = ({
  galleryItemDrafts,
  onGalleryItemDraftsAdded,
  onGalleryItemDraftAltUpdated,
  onGalleryItemMarkedAsMainImage,
  onGalleryItemDraftRemovedAtIndex,
}: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const hasReachedMaximumImagesCount = galleryItemDrafts.length >= MAX_GALLERY_IMAGES_COUNT;

  const handleFilesSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []);
    if (selectedFiles.length > 0) onGalleryItemDraftsAdded(selectedFiles);
    event.target.value = "";
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-neutral-400">
          Galerie d'images ({galleryItemDrafts.length}/{MAX_GALLERY_IMAGES_COUNT})
        </span>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={hasReachedMaximumImagesCount}
          className={`${ADMIN_SECONDARY_BUTTON_CLASS} px-3 py-1.5 disabled:opacity-40 disabled:cursor-not-allowed`}
        >
          Sélectionner des images
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,image/gif"
          multiple
          onChange={handleFilesSelected}
          className="hidden"
        />
      </div>

      {galleryItemDrafts.length > 0 && (
        <div className="flex flex-col gap-2">
          {galleryItemDrafts.map((galleryItemDraft, itemIndex) => (
            <div key={itemIndex} className="flex items-center gap-3 rounded-lg bg-neutral-800/50 px-3 py-2">
              <label
                className="flex items-center gap-1.5 text-xs text-neutral-400 cursor-pointer shrink-0"
                title="Définir comme image principale"
              >
                <input
                  type="radio"
                  name="main-image-radio"
                  checked={galleryItemDraft.isMainImage}
                  onChange={() => onGalleryItemMarkedAsMainImage(itemIndex)}
                  className="accent-cyan-500"
                />
                <span>Principale</span>
              </label>
              <img
                src={galleryItemDraft.localPreviewUrl}
                alt={galleryItemDraft.alt || "aperçu"}
                className="h-10 w-16 rounded-md object-cover border border-neutral-700 shrink-0"
              />
              <input
                className={`${ADMIN_FORM_INPUT_CLASS} flex-1`}
                placeholder="Texte alternatif (alt)"
                value={galleryItemDraft.alt}
                onChange={(e) => onGalleryItemDraftAltUpdated(itemIndex, e.target.value)}
              />
              <button
                type="button"
                onClick={() => onGalleryItemDraftRemovedAtIndex(itemIndex)}
                className="text-neutral-500 hover:text-red-400 transition-colors shrink-0"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
