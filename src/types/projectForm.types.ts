import type { IFirestoreProject, IProjectLink } from "./index";

export interface GalleryItemDraft {
  file: File;
  alt: string;
  localPreviewUrl: string;
  isMainImage: boolean;
}

export type ProjectSubmissionStep =
  | "idle"
  | "uploading-gallery-images"
  | "saving-to-firestore"
  | "done";

export interface ProjectSubmissionProgress {
  currentStep: ProjectSubmissionStep;
  uploadedImagesCount: number;
  totalImagesToUpload: number;
}

export interface ProjectFormDraft {
  title: string;
  tagline: string;
  description: string;
  level: IFirestoreProject["level"];
  order: number;
  technologies: string[];
  links: IProjectLink[];
  galleryItemDrafts: GalleryItemDraft[];
}

export interface UseAddProjectFormReturn {
  formDraft: ProjectFormDraft;
  submissionProgress: ProjectSubmissionProgress;
  isSubmitting: boolean;
  submissionError: string | null;
  wasSubmittedSuccessfully: boolean;

  setTitle: (title: string) => void;
  setTagline: (tagline: string) => void;
  setDescription: (description: string) => void;
  setLevel: (level: IFirestoreProject["level"]) => void;
  setOrder: (order: number) => void;
  setTechnologies: (technologies: string[]) => void;

  addLink: (link: IProjectLink) => void;
  removeLinkAtIndex: (linkIndex: number) => void;

  addGalleryItemDrafts: (files: File[]) => void;
  updateGalleryItemDraftAlt: (itemIndex: number, newAlt: string) => void;
  markGalleryItemAsMainImage: (itemIndex: number) => void;
  removeGalleryItemDraftAtIndex: (itemIndex: number) => void;

  handleSubmit: (event: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}
