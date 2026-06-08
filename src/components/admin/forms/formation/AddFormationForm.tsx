import { useState } from "react";
import { FormField } from "../../ui/FormField";
import { addFormation } from "../../../../services/formations.service";
import { ADMIN_FORM_INPUT_CLASS, ADMIN_PRIMARY_BUTTON_CLASS } from "../../../../constants/adminForm.constants";
import type { IFirestoreFormation } from "../../../../types";

const empty = (): IFirestoreFormation => ({
  year: "", school: "", grade: "", description: "", order: 0,
});

export const AddFormationForm = () => {
  const [form, setForm] = useState(empty());
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof IFirestoreFormation>(key: K, value: IFirestoreFormation[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.school || !form.grade) { setError("École et diplôme requis."); return; }
    setLoading(true); setError(null);
    try {
      await addFormation(form);
      setSuccess(true);
      setForm(empty());
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError("Erreur lors de l'ajout de la formation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {success && <p className="rounded-md bg-green-900/40 px-3 py-2 text-sm text-green-400">Formation ajoutée ✓</p>}
      {error && <p className="rounded-md bg-red-900/40 px-3 py-2 text-sm text-red-400">{error}</p>}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="École" required>
          <input className={ADMIN_FORM_INPUT_CLASS} value={form.school} onChange={(e) => set("school", e.target.value)} placeholder="Hetic - Montreuil" />
        </FormField>
        <FormField label="Diplôme" required>
          <input className={ADMIN_FORM_INPUT_CLASS} value={form.grade} onChange={(e) => set("grade", e.target.value)} placeholder="Master - CTO & Tech Lead" />
        </FormField>
      </div>

      <FormField label="Période">
        <input className={ADMIN_FORM_INPUT_CLASS} value={form.year} onChange={(e) => set("year", e.target.value)} placeholder="2022 - 2024" />
      </FormField>

      <FormField label="Description">
        <textarea className={`${ADMIN_FORM_INPUT_CLASS} min-h-28 resize-y`} value={form.description} onChange={(e) => set("description", e.target.value)} placeholder="Description de la formation..." />
      </FormField>

      <FormField label="Ordre" hint="Position d'affichage (0 = premier)">
        <input type="number" className={ADMIN_FORM_INPUT_CLASS} value={form.order} onChange={(e) => set("order", Number(e.target.value))} min={0} />
      </FormField>

      <button type="submit" disabled={loading} className={ADMIN_PRIMARY_BUTTON_CLASS}>
        {loading ? "Enregistrement…" : "Ajouter la formation"}
      </button>
    </form>
  );
};
