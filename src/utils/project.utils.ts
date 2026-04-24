import type {IProject, IProjectImage, IProjectLink} from "../constants/types";

const LINK_LABELS: Record<string, string> = {
  github: "GitHub",
  demo: "Demo",
  docs: "Docs"
};

export const getLinkLabel = (type: string) => {
  return LINK_LABELS[type.toLowerCase()] ?? type;
};

export const getSafeLinks = (links: unknown): IProjectLink[] => {
  return Array.isArray(links) ? links as IProjectLink[] : [];
};

export const getPrimaryImage = (project: Pick<IProject, "gallery" | "image">, selectedImage?: string) => {
  return selectedImage ?? project.gallery[0]?.src ?? project.image;
};

export const getProjectImages = (project: Pick<IProject, "gallery" | "image" | "title">): IProjectImage[] => {
  if (project.gallery.length > 0) {
    return project.gallery;
  }

  return [{src: project.image, alt: project.title}];
};