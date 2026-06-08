export interface ProjectImagesUploadOptions {
  delayBetweenUploadsMs?: number;
  onImageUploaded?: (uploadedImagesCount: number, totalImagesToUpload: number) => void;
}
