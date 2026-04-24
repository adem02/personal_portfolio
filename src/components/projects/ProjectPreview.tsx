import {FiImage, FiMaximize2} from "react-icons/fi";
import type {IProject} from "../../constants/types";
import {getPrimaryImage} from "../../utils/project.utils.ts";

type ProjectPreviewProps = {
  project: IProject;
  selectedImage?: string;
  thumbnailHeightClassName: string;
  previewHeightClassName: string;
  onOpenLightbox: (imageSrc: string) => void;
  onSelectImage: (imageSrc: string) => void;
  onImageError: (fallbackSrc: string) => void;
};

export const ProjectPreview = ({
  project,
  selectedImage,
  thumbnailHeightClassName,
  previewHeightClassName,
  onOpenLightbox,
  onSelectImage,
  onImageError
}: ProjectPreviewProps) => {
  const primaryImage = getPrimaryImage(project, selectedImage);
  const hasGallery = project.gallery.length > 1;

  return (
    <div>
      <button
        type={"button"}
        className={"group relative mb-3 block w-full overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-950/40"}
        onClick={() => onOpenLightbox(primaryImage)}
        aria-label={`Ouvrir la galerie de ${project.title}`}
      >
        <img
          src={primaryImage}
          alt={project.title}
          onError={(event) => {
            event.currentTarget.src = project.gallery[0]?.src ?? project.image;
            onImageError(project.gallery[0]?.src ?? project.image);
          }}
          className={`${previewHeightClassName} w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-[1.015]`}
        />
        <div className={"pointer-events-none absolute inset-0 flex items-start justify-between bg-gradient-to-t from-black/35 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"}>
          <span className={"inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-950/75 px-3 py-1 text-[11px] text-neutral-100"}>
            <FiImage className={"text-sm"}/>
            Galerie
          </span>
          <span className={"rounded-full border border-neutral-700 bg-neutral-950/75 p-2 text-neutral-100"}>
            <FiMaximize2 className={"text-base"}/>
          </span>
        </div>
      </button>

      {hasGallery && (
        <div className={"grid grid-cols-4 gap-3"}>
          {project.gallery.slice(0, 4).map((image, index) => {
            const isActive = primaryImage === image.src;

            return (
              <button
                key={`${project.title}-${image.alt}`}
                type={"button"}
                onClick={() => onSelectImage(image.src)}
                className={`overflow-hidden rounded-xl border bg-neutral-950/30 transition-colors duration-300 ${isActive ? "border-purple-200/70" : "border-neutral-800 hover:border-neutral-600"}`}
                aria-label={`Afficher ${project.title} visuel ${index + 1}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  onError={(event) => {
                    event.currentTarget.src = project.gallery[0]?.src ?? project.image;
                  }}
                  className={`${thumbnailHeightClassName} w-full object-cover`}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};