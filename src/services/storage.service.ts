import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "../lib/firebase";
import type { ProjectImagesUploadOptions } from "../types";

interface SingleFileUploadResult {
  downloadUrl: string;
  storagePath: string;
}

const sleep = (milliseconds: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const uploadFileToStoragePath = async (
  file: File,
  storageFolderPath: string
): Promise<SingleFileUploadResult> => {
  const storagePath = `${storageFolderPath}/${Date.now()}-${file.name}`;
  const storageRef = ref(storage, storagePath);
  await uploadBytes(storageRef, file);
  const downloadUrl = await getDownloadURL(storageRef);
  return { downloadUrl, storagePath };
};

const deleteFileByStoragePath = (storagePath: string): Promise<void> =>
  deleteObject(ref(storage, storagePath));

const rollbackUploadedImages = (uploadedStoragePaths: string[]): Promise<void[]> =>
  Promise.allSettled(uploadedStoragePaths.map(deleteFileByStoragePath)).then(() => []);

export const uploadImageToFolder = async (file: File, storageFolderPath: string): Promise<string> => {
  const result = await uploadFileToStoragePath(file, storageFolderPath);
  return result.downloadUrl;
};

export const uploadProjectGalleryImagesSequentially = async (
  galleryImageFiles: File[],
  projectFolderName: string,
  options: ProjectImagesUploadOptions = {}
): Promise<string[]> => {
  const { delayBetweenUploadsMs = 500, onImageUploaded } = options;
  const totalImagesToUpload = galleryImageFiles.length;
  const uploadedStoragePaths: string[] = [];
  const uploadedDownloadUrls: string[] = [];

  try {
    for (let imageIndex = 0; imageIndex < galleryImageFiles.length; imageIndex++) {
      if (imageIndex > 0) await sleep(delayBetweenUploadsMs);

      const uploadResult = await uploadFileToStoragePath(
        galleryImageFiles[imageIndex],
        `projects/${projectFolderName}`
      );
      uploadedDownloadUrls.push(uploadResult.downloadUrl);
      uploadedStoragePaths.push(uploadResult.storagePath);
      onImageUploaded?.(uploadedDownloadUrls.length, totalImagesToUpload);
    }

    return uploadedDownloadUrls;
  } catch (uploadError) {
    await rollbackUploadedImages(uploadedStoragePaths);
    throw uploadError;
  }
};
