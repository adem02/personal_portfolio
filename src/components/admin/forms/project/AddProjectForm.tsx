import { FormField } from "../../ui/FormField";
import { TagsInput } from "../../ui/TagsInput";
import { useAddProjectForm } from "../../../../hooks/admin/useAddProjectForm";
import { ADMIN_FORM_INPUT_CLASS, ADMIN_PRIMARY_BUTTON_CLASS } from "../../../../constants/adminForm.constants";
import { ProjectLinksEditor } from "./ProjectLinksEditor";
import { ProjectGalleryEditor } from "./ProjectGalleryEditor";
import { SubmissionProgressIndicator } from "./SubmissionProgressIndicator";

export const AddProjectForm = () => {
  const {
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
  } = useAddProjectForm();

  const preventEnterKeyFromSubmittingForm = (event: React.KeyboardEvent<HTMLFormElement>) => {
    const targetElement = event.target as HTMLElement;
    const isTextareaTarget = targetElement.tagName === "TEXTAREA";
    if (event.key === "Enter" && !isTextareaTarget) {
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit} onKeyDown={preventEnterKeyFromSubmittingForm} className="flex flex-col gap-5">
      {wasSubmittedSuccessfully && (
        <p className="rounded-md bg-green-900/40 px-3 py-2 text-sm text-green-400">
          Projet ajouté avec succès ✓
        </p>
      )}
      {submissionError && (
        <p className="rounded-md bg-red-900/40 px-3 py-2 text-sm text-red-400">{submissionError}</p>
      )}

      {/* Basic fields */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Titre" required>
          <input className={ADMIN_FORM_INPUT_CLASS} value={formDraft.title} onChange={(e) => setTitle(e.target.value)} placeholder="URL Shortner" />
        </FormField>
        <FormField label="Niveau">
          <select className={ADMIN_FORM_INPUT_CLASS} value={formDraft.level} onChange={(e) => setLevel(e.target.value as "flagship" | "complete")}>
            <option value="flagship">Flagship</option>
            <option value="complete">Complete</option>
          </select>
        </FormField>
      </div>

      <FormField label="Tagline">
        <input className={ADMIN_FORM_INPUT_CLASS} value={formDraft.tagline} onChange={(e) => setTagline(e.target.value)} placeholder="Courte description en une ligne" />
      </FormField>

      <FormField label="Description">
        <textarea className={`${ADMIN_FORM_INPUT_CLASS} min-h-28 resize-y`} value={formDraft.description} onChange={(e) => setDescription(e.target.value)} placeholder="Description complète du projet" />
      </FormField>

      <FormField label="Ordre" hint="Position d'affichage (0 = premier)">
        <input type="number" className={ADMIN_FORM_INPUT_CLASS} value={formDraft.order} onChange={(e) => setOrder(Number(e.target.value))} min={0} />
      </FormField>

      <FormField label="Technologies">
        <TagsInput tags={formDraft.technologies} onChange={setTechnologies} placeholder="TypeScript, React..." />
      </FormField>

      <ProjectLinksEditor
        links={formDraft.links}
        onLinkAdded={addLink}
        onLinkRemovedAtIndex={removeLinkAtIndex}
      />

      <ProjectGalleryEditor
        galleryItemDrafts={formDraft.galleryItemDrafts}
        onGalleryItemDraftsAdded={addGalleryItemDrafts}
        onGalleryItemDraftAltUpdated={updateGalleryItemDraftAlt}
        onGalleryItemMarkedAsMainImage={markGalleryItemAsMainImage}
        onGalleryItemDraftRemovedAtIndex={removeGalleryItemDraftAtIndex}
      />

      {isSubmitting && (
        <SubmissionProgressIndicator
          currentStep={submissionProgress.currentStep}
          uploadedImagesCount={submissionProgress.uploadedImagesCount}
          totalImagesToUpload={submissionProgress.totalImagesToUpload}
        />
      )}

      <button type="submit" disabled={isSubmitting} className={ADMIN_PRIMARY_BUTTON_CLASS}>
        {isSubmitting ? "En cours…" : "Ajouter le projet"}
      </button>
    </form>
  );
};
