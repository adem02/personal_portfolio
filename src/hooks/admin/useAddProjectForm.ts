import { useState } from "react";
import { addProject } from "../../services/projects.service";
import { uploadProjectGalleryImagesSequentially } from "../../services/storage.service";
import type { IFirestoreProject, IProjectLink } from "../../types";
import type { UseAddProjectFormReturn, ProjectFormDraft, ProjectSubmissionProgress } from "../../types";
import { IDLE_SUBMISSION_PROGRESS, MAX_GALLERY_IMAGES_COUNT, buildEmptyProjectFormDraft } from "../../constants/projectForm.constants";
import { buildProjectFolderName, resolveSubmissionStep } from "../../utils/projectForm.utils";

export type { GalleryItemDraft, ProjectSubmissionStep, ProjectSubmissionProgress, UseAddProjectFormReturn } from "../../types/projectForm.types";

export const useAddProjectForm = (): UseAddProjectFormReturn => {
  const [formDraft, setFormDraft] = useState<ProjectFormDraft>(buildEmptyProjectFormDraft());
  const [submissionProgress, setSubmissionProgress] = useState<ProjectSubmissionProgress>(IDLE_SUBMISSION_PROGRESS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [wasSubmittedSuccessfully, setWasSubmittedSuccessfully] = useState(false);

  const updateFormField = <K extends keyof ProjectFormDraft>(
    field: K,
    value: ProjectFormDraft[K]
  ) => setFormDraft((current) => ({ ...current, [field]: value }));

  const setTitle = (title: string) => updateFormField("title", title);
  const setTagline = (tagline: string) => updateFormField("tagline", tagline);
  const setDescription = (description: string) => updateFormField("description", description);
  const setLevel = (level: IFirestoreProject["level"]) => updateFormField("level", level);
  const setOrder = (order: number) => updateFormField("order", order);
  const setTechnologies = (technologies: string[]) => updateFormField("technologies", technologies);

  const addLink = (link: IProjectLink) =>
    setFormDraft((current) => ({ ...current, links: [...current.links, link] }));

  const removeLinkAtIndex = (linkIndex: number) =>
    setFormDraft((current) => ({
      ...current,
      links: current.links.filter((_, index) => index !== linkIndex),
    }));

  const addGalleryItemDrafts = (files: File[]) =>
    setFormDraft((current) => {
      const remainingSlotsCount = MAX_GALLERY_IMAGES_COUNT - current.galleryItemDrafts.length;
      if (remainingSlotsCount <= 0) return current;

      const filesToAdd = files.slice(0, remainingSlotsCount);
      const noMainImageYet = current.galleryItemDrafts.every((item) => !item.isMainImage);

      const newDrafts = filesToAdd.map((file, indexAmongNewFiles) => ({
        file,
        alt: "",
        localPreviewUrl: URL.createObjectURL(file),
        isMainImage: noMainImageYet && indexAmongNewFiles === 0,
      }));

      return {
        ...current,
        galleryItemDrafts: [...current.galleryItemDrafts, ...newDrafts],
      };
    });

  const updateGalleryItemDraftAlt = (itemIndex: number, newAlt: string) =>
    setFormDraft((current) => ({
      ...current,
      galleryItemDrafts: current.galleryItemDrafts.map((item, index) =>
        index === itemIndex ? { ...item, alt: newAlt } : item
      ),
    }));

  const markGalleryItemAsMainImage = (itemIndex: number) =>
    setFormDraft((current) => ({
      ...current,
      galleryItemDrafts: current.galleryItemDrafts.map((item, index) => ({
        ...item,
        isMainImage: index === itemIndex,
      })),
    }));

  const removeGalleryItemDraftAtIndex = (itemIndex: number) =>
    setFormDraft((current) => {
      const removedItem = current.galleryItemDrafts[itemIndex];
      if (removedItem) URL.revokeObjectURL(removedItem.localPreviewUrl);

      const remainingItems = current.galleryItemDrafts.filter((_, index) => index !== itemIndex);
      const lostMainImage = removedItem?.isMainImage === true;

      const reassignedItems = lostMainImage && remainingItems.length > 0
        ? remainingItems.map((item, index) => ({ ...item, isMainImage: index === 0 }))
        : remainingItems;

      return { ...current, galleryItemDrafts: reassignedItems };
    });

  const resetForm = () => {
    setFormDraft((current) => {
      current.galleryItemDrafts.forEach((item) => URL.revokeObjectURL(item.localPreviewUrl));
      return buildEmptyProjectFormDraft();
    });
    setSubmissionProgress(IDLE_SUBMISSION_PROGRESS);
    setSubmissionError(null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formDraft.title.trim()) {
      setSubmissionError("Le titre du projet est requis.");
      return;
    }
    if (formDraft.galleryItemDrafts.length === 0) {
      setSubmissionError("Au moins une image est requise.");
      return;
    }
    const mainImageDraftIndex = formDraft.galleryItemDrafts.findIndex((item) => item.isMainImage);
    if (mainImageDraftIndex === -1) {
      setSubmissionError("Sélectionne une image principale.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    const projectFolderName = buildProjectFolderName(formDraft.title);
    const galleryFiles = formDraft.galleryItemDrafts.map((draft) => draft.file);
    const totalImagesToUpload = galleryFiles.length;

    setSubmissionProgress({
      currentStep: "uploading-gallery-images",
      uploadedImagesCount: 0,
      totalImagesToUpload,
    });

    try {
      const uploadedImageUrls = await uploadProjectGalleryImagesSequentially(
        galleryFiles,
        projectFolderName,
        {
          delayBetweenUploadsMs: 500,
          onImageUploaded: (uploadedImagesCount, totalImages) =>
            setSubmissionProgress({
              currentStep: resolveSubmissionStep(uploadedImagesCount, totalImages),
              uploadedImagesCount,
              totalImagesToUpload: totalImages,
            }),
        }
      );

      setSubmissionProgress({
        currentStep: "saving-to-firestore",
        uploadedImagesCount: totalImagesToUpload,
        totalImagesToUpload,
      });

      const projectDataToSave: IFirestoreProject = {
        title: formDraft.title.trim(),
        tagline: formDraft.tagline.trim(),
        description: formDraft.description.trim(),
        level: formDraft.level,
        order: formDraft.order,
        technologies: formDraft.technologies,
        links: formDraft.links,
        image: uploadedImageUrls[mainImageDraftIndex],
        gallery: formDraft.galleryItemDrafts.map((draft, index) => ({
          src: uploadedImageUrls[index],
          alt: draft.alt,
        })),
      };

      await addProject(projectDataToSave);

      setSubmissionProgress({ currentStep: "done", uploadedImagesCount: totalImagesToUpload, totalImagesToUpload });
      setWasSubmittedSuccessfully(true);
      resetForm();
      setTimeout(() => {
        setWasSubmittedSuccessfully(false);
        setSubmissionProgress(IDLE_SUBMISSION_PROGRESS);
      }, 4000);
    } catch {
      setSubmissionError(
        "Échec de l'envoi. Toutes les images uploadées ont été supprimées automatiquement."
      );
      setSubmissionProgress(IDLE_SUBMISSION_PROGRESS);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formDraft,
    submissionProgress,
    isSubmitting,
    submissionError,
    wasSubmittedSuccessfully,
    setTitle,
    setTagline,
    setDescription,
    setLevel,
    setOrder,
    setTechnologies,
    addLink,
    removeLinkAtIndex,
    addGalleryItemDrafts,
    updateGalleryItemDraftAlt,
    markGalleryItemAsMainImage,
    removeGalleryItemDraftAtIndex,
    handleSubmit,
    resetForm,
  };
};
