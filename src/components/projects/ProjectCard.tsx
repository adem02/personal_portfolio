import type {IProject} from "../../constants/types";
import {ProjectPreview} from "./ProjectPreview.tsx";
import {getLinkLabel, getSafeLinks} from "../../utils/project.utils.ts";

type ProjectCardProps = {
  project: IProject;
  variant: "flagship" | "complete";
  selectedImage?: string;
  onSelectImage: (projectTitle: string, imageSrc: string) => void;
  onOpenLightbox: (projectTitle: string, imageSrc: string) => void;
  onImageError: (projectTitle: string, fallbackSrc: string) => void;
};

export const ProjectCard = ({
  project,
  variant,
  selectedImage,
  onSelectImage,
  onOpenLightbox,
  onImageError
}: ProjectCardProps) => {
  const githubLink = getSafeLinks(project.links).find((link) => link.type.toLowerCase() === "github");

  if (variant === "flagship") {
    return (
      <article className={"mb-20 rounded-2xl border border-neutral-800/80 bg-neutral-950/40 p-6 transition-colors duration-300 hover:border-neutral-700 hover:bg-neutral-950/60"}>
        <div className={"flex flex-col gap-6 lg:flex-row"}>
          <div className={"w-full lg:w-5/12"}>
            <ProjectPreview
              project={project}
              selectedImage={selectedImage}
              previewHeightClassName={"h-64 lg:h-72"}
              thumbnailHeightClassName={"h-20"}
              onOpenLightbox={(imageSrc) => onOpenLightbox(project.title, imageSrc)}
              onSelectImage={(imageSrc) => onSelectImage(project.title, imageSrc)}
              onImageError={(fallbackSrc) => onImageError(project.title, fallbackSrc)}
            />
          </div>
          <div className={"w-full lg:w-7/12 lg:pt-2"}>
            <h3 className={"mb-2 font-semibold tracking-tighter"}>{project.title}</h3>
            <p className={"mb-4 max-w-2xl text-sm text-purple-100"}>{project.tagline}</p>
            <p className={"mb-5 max-w-2xl text-neutral-400"}>{project.description}</p>
            <div className={"mb-6 flex flex-wrap"}>
              {project.technologies.map((technology) => (
                <span key={technology} className={"mr-2 mb-2 text-sm bg-neutral-900 px-2 py-1 rounded text-purple-800 font-medium"}>
                  {technology}
                </span>
              ))}
            </div>
            <div className={"flex flex-wrap gap-3"}>
              {getSafeLinks(project.links).slice(0, 2).map((link) => (
                <a
                  key={`${project.title}-${link.type}`}
                  href={link.url}
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  className={"rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-200 transition-colors duration-300 hover:border-neutral-500 hover:bg-neutral-900/80"}
                >
                  {getLinkLabel(link.type)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={"rounded-2xl border border-neutral-800/80 bg-neutral-950/35 p-6 transition-colors duration-300 hover:border-neutral-700 hover:bg-neutral-950/55"}>
      <ProjectPreview
        project={project}
        selectedImage={selectedImage}
        previewHeightClassName={"h-48"}
        thumbnailHeightClassName={"h-16"}
        onOpenLightbox={(imageSrc) => onOpenLightbox(project.title, imageSrc)}
        onSelectImage={(imageSrc) => onSelectImage(project.title, imageSrc)}
        onImageError={(fallbackSrc) => onImageError(project.title, fallbackSrc)}
      />
      <h3 className={"mb-2 font-semibold tracking-tighter"}>{project.title}</h3>
      <p className={"mb-3 text-sm text-purple-100"}>{project.tagline}</p>
      <p className={"mb-4 text-neutral-400"}>{project.description}</p>
      <div className={"mb-5 flex flex-wrap"}>
        {project.technologies.map((technology) => (
          <span key={technology} className={"mr-2 mb-2 text-sm bg-neutral-900 px-2 py-1 rounded text-purple-800 font-medium"}>
            {technology}
          </span>
        ))}
      </div>
      {githubLink && (
        <a
          href={githubLink.url}
          target={"_blank"}
          rel={"noreferrer noopener"}
          className={"inline-block rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-200 transition-colors duration-300 hover:border-neutral-500 hover:bg-neutral-900/80"}
        >
          GitHub
        </a>
      )}
    </article>
  );
};