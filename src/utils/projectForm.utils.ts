import type { ProjectSubmissionStep } from "../types";

export const buildProjectFolderName = (projectTitle: string): string =>
  projectTitle.trim().toLowerCase().replace(/\s+/g, "-");

export const resolveSubmissionStep = (
  uploadedImagesCount: number,
  totalImagesToUpload: number
): ProjectSubmissionStep => {
  if (uploadedImagesCount < totalImagesToUpload) return "uploading-gallery-images";
  return "saving-to-firestore";
};
