import { useEffect, useState } from "react";
import { FormField } from "../../ui/FormField";
import { getContact, setContact } from "../../../../services/contact.service";
import { ADMIN_FORM_INPUT_CLASS, ADMIN_PRIMARY_BUTTON_CLASS } from "../../../../constants/adminForm.constants";
import type { IFirestoreContact } from "../../../../types";

const empty = (): IFirestoreContact => ({ address: "", phoneNo: "", email: "" });

export const EditContactForm = () => {
  const [form, setForm] = useState(empty());
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getContact()
      .then((data) => { if (data) setForm({ address: data.address, phoneNo: data.phoneNo, email: data.email }); })
      .catch(() => setError("Impossible de charger les données de contact."))
      .finally(() => setFetching(false));
  }, []);

  const set = <K extends keyof IFirestoreContact>(key: K, value: IFirestoreContact[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) { setError("Email requis."); return; }
    setLoading(true); setError(null);
    try {
      await setContact(form);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError("Erreur lors de la mise à jour du contact.");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <p className="text-sm text-neutral-500">Chargement…</p>;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {success && <p className="rounded-md bg-green-900/40 px-3 py-2 text-sm text-green-400">Contact mis à jour ✓</p>}
      {error && <p className="rounded-md bg-red-900/40 px-3 py-2 text-sm text-red-400">{error}</p>}

      <FormField label="Email" required>
        <input type="email" className={ADMIN_FORM_INPUT_CLASS} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="demahmed02@gmail.com" />
      </FormField>

      <FormField label="Téléphone">
        <input type="tel" className={ADMIN_FORM_INPUT_CLASS} value={form.phoneNo} onChange={(e) => set("phoneNo", e.target.value)} placeholder="+33 6 00 00 00 00" />
      </FormField>

      <FormField label="Adresse">
        <input className={ADMIN_FORM_INPUT_CLASS} value={form.address} onChange={(e) => set("address", e.target.value)} placeholder="Paris, France" />
      </FormField>

      <button type="submit" disabled={loading} className={ADMIN_PRIMARY_BUTTON_CLASS}>
        {loading ? "Enregistrement…" : "Mettre à jour"}
      </button>
    </form>
  );
};
