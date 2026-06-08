import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { AddProjectForm } from "../../components/admin/forms/project/AddProjectForm";
import { AddExperienceForm } from "../../components/admin/forms/experience/AddExperienceForm";
import { AddFormationForm } from "../../components/admin/forms/formation/AddFormationForm";
import { AddTechnologyForm } from "../../components/admin/forms/technology/AddTechnologyForm";
import { EditContactForm } from "../../components/admin/forms/contact/EditContactForm";

type Tab = "projects" | "experiences" | "formations" | "technologies" | "contact";

const TABS: { id: Tab; label: string }[] = [
  { id: "projects", label: "Projets" },
  { id: "experiences", label: "Expériences" },
  { id: "formations", label: "Formations" },
  { id: "technologies", label: "Technologies" },
  { id: "contact", label: "Contact" },
];

export const ProjectsAdmin = () => {
  const { handleLogout } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>("projects");

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300">
      {/* Header */}
      <header className="border-b border-neutral-800 px-8 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-neutral-100">Admin — Portfolio</h1>
        <button
          onClick={handleLogout}
          className="rounded-lg border border-neutral-700 px-4 py-1.5 text-sm text-neutral-400 hover:text-neutral-100 hover:border-neutral-500 transition-colors"
        >
          Déconnexion
        </button>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-8">
        {/* Tabs */}
        <div className="mb-8 flex gap-1 rounded-xl bg-neutral-900 p-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-neutral-700 text-neutral-100"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form panels */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="mb-6 text-base font-semibold text-neutral-200">
            {activeTab === "contact" ? "Modifier le contact" : `Ajouter — ${TABS.find((t) => t.id === activeTab)?.label}`}
          </h2>

          {activeTab === "projects" && <AddProjectForm />}
          {activeTab === "experiences" && <AddExperienceForm />}
          {activeTab === "formations" && <AddFormationForm />}
          {activeTab === "technologies" && <AddTechnologyForm />}
          {activeTab === "contact" && <EditContactForm />}
        </div>
      </div>
    </div>
  );
};
