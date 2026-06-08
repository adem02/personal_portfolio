import {useEffect, useState} from "react";
import {getProjectImages} from "../utils/project.utils.ts";
import {logEvent} from "firebase/analytics";
import {analytics} from "../lib/firebase";
import {getProjects} from "../services/projects.service";
import type {IFirestoreProject, WithId} from "../types";

export const useProjects = () => {
  const [projects, setProjects] = useState<WithId<IFirestoreProject>[]>([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState<boolean>(true);
  const [projectsLoadError, setProjectsLoadError] = useState<string | null>(null);

  const [selectedImages, setSelectedImages] = useState<Record<string, string>>({});
  const [lightboxProjectTitle, setLightboxProjectTitle] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const fetchProjectsFromFirestore = async () => {
      try {
        setIsLoadingProjects(true);
        setProjectsLoadError(null);
        const fetchedProjects = await getProjects();
        if (!isMounted) return;

        setProjects(fetchedProjects);
        setSelectedImages(
          Object.fromEntries(
            fetchedProjects.map((project) => [project.title, project.gallery[0]?.src ?? project.image])
          )
        );
      } catch (error) {
        if (!isMounted) return;
        setProjectsLoadError(error instanceof Error ? error.message : "Failed to load projects");
      } finally {
        if (isMounted) setIsLoadingProjects(false);
      }
    };

    fetchProjectsFromFirestore();

    return () => {
      isMounted = false;
    };
  }, []);

  const activeProject = lightboxProjectTitle
    ? projects.find((project) => project.title === lightboxProjectTitle) ?? null
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
    const project = projects.find((currentProject) => currentProject.title === projectTitle);
    const images = project ? getProjectImages(project) : [];
    const imageIndex = images.findIndex((image) => image.src === imageSrc);

    setLightboxProjectTitle(projectTitle);
    setLightboxIndex(imageIndex >= 0 ? imageIndex : 0);

    // Analytics
    logEvent(analytics, "project_lightbox_open", {
      project_title: projectTitle
    });
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
    projects,
    isLoadingProjects,
    projectsLoadError,
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
