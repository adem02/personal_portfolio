import { SUBMISSION_STEP_LABELS } from "../../../../constants/projectForm.constants";
import type { ProjectSubmissionStep } from "../../../../types/projectForm.types";

interface Props {
  currentStep: ProjectSubmissionStep;
  uploadedImagesCount: number;
  totalImagesToUpload: number;
}

const computeUploadProgressPercent = (uploaded: number, total: number): number =>
  total > 0 ? Math.round((uploaded / total) * 100) : 0;

export const SubmissionProgressIndicator = ({
  currentStep,
  uploadedImagesCount,
  totalImagesToUpload,
}: Props) => {
  const uploadProgressPercent = computeUploadProgressPercent(uploadedImagesCount, totalImagesToUpload);
  const shouldShowUploadProgressBar =
    totalImagesToUpload > 0 && currentStep !== "saving-to-firestore";

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-neutral-800/60 p-4">
      <div className="flex items-center gap-2 text-sm text-neutral-300">
        <span className="animate-pulse text-cyan-400">↑</span>
        {SUBMISSION_STEP_LABELS[currentStep]}
      </div>
      {shouldShowUploadProgressBar && (
        <>
          <div className="h-1.5 w-full rounded-full bg-neutral-700 overflow-hidden">
            <div
              className="h-full rounded-full bg-cyan-500 transition-all duration-500"
              style={{ width: `${uploadProgressPercent}%` }}
            />
          </div>
          <span className="text-xs text-neutral-500">
            {uploadedImagesCount} / {totalImagesToUpload} images uploadées
          </span>
        </>
      )}
    </div>
  );
};
