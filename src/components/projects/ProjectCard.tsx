import type { IProject } from "../../types";
import { ProjectPreview } from "./ProjectPreview.tsx";
import { getLinkLabel, getSafeLinks } from "../../utils/project.utils.ts";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../lib/firebase";
import { FiArrowUpRight } from "react-icons/fi";

type ProjectCardProps = {
  project: IProject;
  index: number;
  selectedImage?: string;
  onSelectImage: (projectTitle: string, imageSrc: string) => void;
  onOpenLightbox: (projectTitle: string, imageSrc: string) => void;
  onImageError: (projectTitle: string, fallbackSrc: string) => void;
};

export const ProjectCard = ({
  project,
  index,
  selectedImage,
  onSelectImage,
  onOpenLightbox,
  onImageError,
}: ProjectCardProps) => {
  const isReversed = index % 2 === 1;
  const orderedNumber = String(index + 1).padStart(2, "0");
  const links = getSafeLinks(project.links).slice(0, 2);

  return (
    <article className="group/card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Visual */}
      <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : ""}`}>
        <ProjectPreview
          project={project}
          selectedImage={selectedImage}
          previewHeightClassName="h-64 sm:h-80 lg:h-[440px]"
          thumbnailHeightClassName="h-16"
          onOpenLightbox={(imageSrc) => onOpenLightbox(project.title, imageSrc)}
          onSelectImage={(imageSrc) => onSelectImage(project.title, imageSrc)}
          onImageError={(fallbackSrc) => onImageError(project.title, fallbackSrc)}
        />
      </div>

      {/* Content */}
      <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : ""}`}>
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-neutral-500">
          <span className="font-serif-display italic text-amber-200/70 text-sm normal-case tracking-normal">
            {orderedNumber}
          </span>
          <span className="h-px w-8 bg-neutral-800" />
          <span>Projet</span>
        </div>

        <h3 className="mt-5 text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-100 leading-[1.05]">
          {project.title}
        </h3>

        {project.tagline && (
          <p className="mt-3 font-serif-display italic text-lg sm:text-xl text-amber-200/80">
            {project.tagline}
          </p>
        )}

        <p className="mt-5 text-sm sm:text-base leading-relaxed text-neutral-400">
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-neutral-800 bg-neutral-950/40 px-2.5 py-1 text-[11px] text-neutral-300 transition group-hover/card:border-neutral-700"
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        {links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((link, linkIndex) => {
              const isPrimary = linkIndex === 0;
              return (
                <a
                  key={`${project.title}-${link.type}`}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => {
                    logEvent(analytics, "project_link_click", {
                      project_title: project.title,
                      link_type: link.type,
                    });
                  }}
                  className={`group/link inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition ${
                    isPrimary
                      ? "bg-neutral-50 text-neutral-950 hover:bg-amber-200"
                      : "border border-neutral-700 text-neutral-200 hover:border-neutral-400 hover:text-white"
                  }`}
                >
                  {getLinkLabel(link.type)}
                  <FiArrowUpRight className="text-sm transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
};
