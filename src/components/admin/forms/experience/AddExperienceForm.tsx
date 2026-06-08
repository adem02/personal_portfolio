import { useState } from "react";
import { FormField } from "../../ui/FormField";
import { TagsInput } from "../../ui/TagsInput";
import { addExperience } from "../../../../services/experiences.service";
import { ADMIN_FORM_INPUT_CLASS, ADMIN_PRIMARY_BUTTON_CLASS } from "../../../../constants/adminForm.constants";
import type { IFirestoreExperience } from "../../../../types";

const empty = (): IFirestoreExperience => ({
  year: "", role: "", company: "", description: "", technologies: [], order: 0,
});

export const AddExperienceForm = () => {
  const [form, setForm] = useState(empty());
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof IFirestoreExperience>(key: K, value: IFirestoreExperience[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.role || !form.company) { setError("Poste et entreprise requis."); return; }
    setLoading(true); setError(null);
    try {
      await addExperience(form);
      setSuccess(true);
      setForm(empty());
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError("Erreur lors de l'ajout de l'expérience.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {success && <p className="rounded-md bg-green-900/40 px-3 py-2 text-sm text-green-400">Expérience ajoutée ✓</p>}
      {error && <p className="rounded-md bg-red-900/40 px-3 py-2 text-sm text-red-400">{error}</p>}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Poste" required>
          <input className={ADMIN_FORM_INPUT_CLASS} value={form.role} onChange={(e) => set("role", e.target.value)} placeholder="Développeur Backend" />
        </FormField>
        <FormField label="Entreprise" required>
          <input className={ADMIN_FORM_INPUT_CLASS} value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="IAD" />
        </FormField>
      </div>

      <FormField label="Période">
        <input className={ADMIN_FORM_INPUT_CLASS} value={form.year} onChange={(e) => set("year", e.target.value)} placeholder="Septembre 2022 - Octobre 2024" />
      </FormField>

      <FormField label="Description">
        <textarea className={`${ADMIN_FORM_INPUT_CLASS} min-h-28 resize-y`} value={form.description} onChange={(e) => set("description", e.target.value)} placeholder="Description du poste et des missions..." />
      </FormField>

      <FormField label="Technologies">
        <TagsInput tags={form.technologies} onChange={(tags) => set("technologies", tags)} placeholder="PHP, Symfony, PostgreSQL..." />
      </FormField>

      <FormField label="Ordre" hint="Position d'affichage (0 = premier)">
        <input type="number" className={ADMIN_FORM_INPUT_CLASS} value={form.order} onChange={(e) => set("order", Number(e.target.value))} min={0} />
      </FormField>

      <button type="submit" disabled={loading} className={ADMIN_PRIMARY_BUTTON_CLASS}>
        {loading ? "Enregistrement…" : "Ajouter l'expérience"}
      </button>
    </form>
  );
};
