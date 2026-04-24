import {useMemo, useState} from "react";
import {PROJECTS} from "../constants";
import {getProjectImages} from "../utils/project.utils.ts";

export const useProjects = () => {
  const initialSelectedImages = useMemo(
    () => Object.fromEntries(PROJECTS.map((project) => [project.title, project.gallery[0]?.src ?? project.image])),
    []
  );

  const [selectedImages, setSelectedImages] = useState<Record<string, string>>(initialSelectedImages);
  const [lightboxProjectTitle, setLightboxProjectTitle] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const activeProject = lightboxProjectTitle
    ? PROJECTS.find((project) => project.title === lightboxProjectTitle) ?? null
    : null;
  const activeProjectImages = activeProject ? getProjectImages(activeProject) : [];

  const handleSelectImage = (projectTitle: string, imageSrc: string) => {
    setSelectedImages((current) => ({
      ...current,
      [projectTitle]: imageSrc,
    }));
  };

  const handleImageError = (projectTitle: string, fallbackSrc: string) => {
    setSelectedImages((current) => ({
      ...current,
      [projectTitle]: fallbackSrc,
    }));
  };

  const openLightbox = (projectTitle: string, imageSrc: string) => {
    const project = PROJECTS.find((currentProject) => currentProject.title === projectTitle);
    const images = project ? getProjectImages(project) : [];
    const imageIndex = images.findIndex((image) => image.src === imageSrc);

    setLightboxProjectTitle(projectTitle);
    setLightboxIndex(imageIndex >= 0 ? imageIndex : 0);
  };

  const closeLightbox = () => {
    setLightboxProjectTitle(null);
    setLightboxIndex(0);
  };

  const showPreviousImage = () => {
    if (activeProjectImages.length === 0) return;
    setLightboxIndex((current) => (current - 1 + activeProjectImages.length) % activeProjectImages.length);
  };

  const showNextImage = () => {
    if (activeProjectImages.length === 0) return;
    setLightboxIndex((current) => (current + 1) % activeProjectImages.length);
  };

  return {
    projects: PROJECTS,
    selectedImages,
    activeProject,
    lightboxIndex,
    handleSelectImage,
    handleImageError,
    openLightbox,
    closeLightbox,
    showPreviousImage,
    showNextImage,
    setLightboxIndex,
  };
};
