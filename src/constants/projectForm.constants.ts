import type { ProjectFormDraft, ProjectSubmissionProgress, ProjectSubmissionStep } from "../types/projectForm.types";

export const MAX_GALLERY_IMAGES_COUNT = 10;

export const IDLE_SUBMISSION_PROGRESS: ProjectSubmissionProgress = {
  currentStep: "idle",
  uploadedImagesCount: 0,
  totalImagesToUpload: 0,
};

export const SUBMISSION_STEP_LABELS: Record<ProjectSubmissionStep, string> = {
  "idle": "",
  "uploading-gallery-images": "Upload des images…",
  "saving-to-firestore": "Enregistrement dans la base…",
  "done": "Projet ajouté avec succès !",
};

export const EMPTY_PROJECT_FORM_DRAFT: ProjectFormDraft = {
  title: "",
  tagline: "",
  description: "",
  level: "complete",
  order: 0,
  technologies: [],
  links: [],
  galleryItemDrafts: [],
};

export const buildEmptyProjectFormDraft = (): ProjectFormDraft => ({
  ...EMPTY_PROJECT_FORM_DRAFT,
  technologies: [],
  links: [],
  galleryItemDrafts: [],
});
