import { useState } from "react";
import { FormField } from "../../ui/FormField";
import { addTechnology } from "../../../../services/technologies.service";
import { iconRegistry } from "../../../../lib/iconRegistry";
import { ADMIN_FORM_INPUT_CLASS, ADMIN_PRIMARY_BUTTON_CLASS } from "../../../../constants/adminForm.constants";
import type { IFirestoreTechIcon } from "../../../../types";

const ICON_NAMES = Object.keys(iconRegistry).sort();

const empty = (): IFirestoreTechIcon => ({
  iconName: ICON_NAMES[0] ?? "",
  color: "text-neutral-300",
  tooltip: "",
  order: 0,
});

const COLOR_OPTIONS = [
  { label: "Vert", value: "text-green-500" },
  { label: "Bleu", value: "text-blue-500" },
  { label: "Bleu foncé", value: "text-blue-600" },
  { label: "Rouge", value: "text-red-500" },
  { label: "Jaune", value: "text-yellow-500" },
  { label: "Noir", value: "text-neutral-900" },
  { label: "Neutre", value: "text-neutral-300" },
];

export const AddTechnologyForm = () => {
  const [form, setForm] = useState(empty());
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof IFirestoreTechIcon>(key: K, value: IFirestoreTechIcon[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const SelectedIcon = iconRegistry[form.iconName];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.iconName) { setError("Icône requise."); return; }
    setLoading(true); setError(null);
    try {
      await addTechnology(form);
      setSuccess(true);
      setForm(empty());
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError("Erreur lors de l'ajout de la techno.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {success && <p className="rounded-md bg-green-900/40 px-3 py-2 text-sm text-green-400">Technologie ajoutée ✓</p>}
      {error && <p className="rounded-md bg-red-900/40 px-3 py-2 text-sm text-red-400">{error}</p>}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Icône" required>
          <div className="flex items-center gap-3">
            <select
              className={ADMIN_FORM_INPUT_CLASS}
              value={form.iconName}
              onChange={(e) => set("iconName", e.target.value)}
            >
              {ICON_NAMES.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
            {SelectedIcon && (
              <span className={`text-2xl shrink-0 ${form.color}`}>
                <SelectedIcon />
              </span>
            )}
          </div>
        </FormField>

        <FormField label="Couleur">
          <select className={ADMIN_FORM_INPUT_CLASS} value={form.color} onChange={(e) => set("color", e.target.value)}>
            {COLOR_OPTIONS.map(({ label, value }) => (
              <option key={value} value={value}>{label} — {value}</option>
            ))}
          </select>
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Tooltip" hint="Nom affiché au survol">
          <input className={ADMIN_FORM_INPUT_CLASS} value={form.tooltip} onChange={(e) => set("tooltip", e.target.value)} placeholder="Node.js" />
        </FormField>
        <FormField label="Ordre" hint="Position d'affichage">
          <input type="number" className={ADMIN_FORM_INPUT_CLASS} value={form.order} onChange={(e) => set("order", Number(e.target.value))} min={0} />
        </FormField>
      </div>

      <button type="submit" disabled={loading} className={ADMIN_PRIMARY_BUTTON_CLASS}>
        {loading ? "Enregistrement…" : "Ajouter la technologie"}
      </button>
    </form>
  );
};
