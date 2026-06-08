import {useEffect} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {FiChevronLeft, FiChevronRight, FiX} from "react-icons/fi";
import type {IProject} from "../../types";
import {getProjectImages} from "../../utils/project.utils.ts";

type ProjectLightboxProps = {
  project: IProject | null;
  activeIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onSelectIndex: (index: number) => void;
};

export const ProjectLightbox = ({
  project,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
  onSelectIndex
}: ProjectLightboxProps) => {
  const projectImages = project ? getProjectImages(project) : [];
  const activeImage = projectImages[activeIndex] ?? null;

  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, onNext, onPrevious]);

  return (
    <AnimatePresence>
      {project && activeImage && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.2}}
          className={"fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-6"}
          onClick={onClose}
        >
          <motion.div
            initial={{opacity: 0, y: 16}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 16}}
            transition={{duration: 0.25}}
            className={"relative w-full max-w-6xl rounded-2xl border border-neutral-800 bg-neutral-950 p-3 shadow-2xl sm:p-4"}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={"mb-4 flex items-start justify-between gap-4 border-b border-neutral-800 pb-4"}>
              <div>
                <p className={"mb-1 text-xs uppercase tracking-[0.24em] text-neutral-500"}>Galerie projet</p>
                <h3 className={"text-lg font-semibold text-neutral-100 sm:text-xl"}>{project.title}</h3>
                <p className={"mt-1 text-sm text-neutral-400"}>
                  {activeIndex + 1} / {projectImages.length}
                </p>
              </div>
              <button
                type={"button"}
                onClick={onClose}
                className={"rounded-full border border-neutral-700 p-2 text-neutral-200 transition-colors duration-300 hover:bg-neutral-900"}
                aria-label={"Fermer la galerie"}
              >
                <FiX className={"text-lg"}/>
              </button>
            </div>

            <div className={"relative overflow-hidden rounded-xl bg-neutral-900"}>
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                onError={(event) => {
                  event.currentTarget.src = projectImages[0]?.src ?? project.image;
                }}
                className={"max-h-[56vh] w-full object-contain sm:max-h-[72vh]"}
              />

              {projectImages.length > 1 && (
                <>
                  <button
                    type={"button"}
                    onClick={onPrevious}
                    className={"absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-neutral-700 bg-neutral-950/85 p-2 text-neutral-100 transition-colors duration-300 hover:bg-neutral-900 sm:left-4 sm:p-3"}
                    aria-label={"Image precedente"}
                  >
                    <FiChevronLeft className={"text-lg sm:text-xl"}/>
                  </button>
                  <button
                    type={"button"}
                    onClick={onNext}
                    className={"absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-neutral-700 bg-neutral-950/85 p-2 text-neutral-100 transition-colors duration-300 hover:bg-neutral-900 sm:right-4 sm:p-3"}
                    aria-label={"Image suivante"}
                  >
                    <FiChevronRight className={"text-lg sm:text-xl"}/>
                  </button>
                </>
              )}
            </div>

            {projectImages.length > 1 && (
              <div className={"mt-4 flex gap-2 overflow-x-auto pb-1 md:grid md:grid-cols-6 md:gap-3 md:overflow-visible"}>
                {projectImages.map((image, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={`${project.title}-${image.alt}-lightbox`}
                      type={"button"}
                      onClick={() => onSelectIndex(index)}
                      className={`min-w-[76px] flex-shrink-0 overflow-hidden rounded-lg border transition-colors duration-300 md:min-w-0 ${isActive ? "border-neutral-200" : "border-neutral-800 hover:border-neutral-600"}`}
                      aria-label={`Afficher le media ${index + 1} de ${project.title}`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        onError={(event) => {
                          event.currentTarget.src = projectImages[0]?.src ?? project.image;
                        }}
                        className={"h-14 w-[76px] object-cover md:h-16 md:w-full"}
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};