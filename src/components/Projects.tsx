import { motion } from "framer-motion";
import { ProjectCard } from "./projects/ProjectCard.tsx";
import { ProjectLightbox } from "./projects/ProjectLightbox.tsx";
import { useProjects } from "../hooks/useProjects.ts";
import { logEvent } from "firebase/analytics";
import { analytics } from "../lib/firebase";
import { FiArrowUpRight } from "react-icons/fi";

export const Projects = () => {
  const {
    projects,
    isLoadingProjects,
    projectsLoadError,
    selectedImages,
    activeProject,
    lightboxIndex,
    handleSelectImage,
    handleImageError,
    openLightbox,
    closeLightbox,
    showPreviousImage,
    showNextImage,
    setLightboxIndex,
  } = useProjects();

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-neutral-900">
      <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-neutral-500">
        <span>04 / Projets</span>
        <span className="h-px flex-1 bg-neutral-800" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mt-6 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-100 max-w-4xl leading-[1.05]"
      >
        Une sélection de{" "}
        <span className="font-serif-display italic text-amber-200/90">réalisations</span>.
      </motion.h2>

      <p className="mt-6 max-w-xl text-sm sm:text-base text-neutral-400">
        Du produit livré à la stack technique pensée, chaque projet a sa propre
        contrainte et sa propre histoire.
      </p>

      <div className="mt-16">
        {isLoadingProjects && (
          <p className="py-16 text-center text-neutral-400">Chargement des projets...</p>
        )}

        {projectsLoadError && !isLoadingProjects && (
          <p className="py-16 text-center text-red-400">
            Impossible de charger les projets : {projectsLoadError}
          </p>
        )}

        {!isLoadingProjects && !projectsLoadError && projects.length === 0 && (
          <p className="py-16 text-center text-neutral-400">
            Aucun projet à afficher pour le moment.
          </p>
        )}

        <div>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              className="mb-16"
            >
              <ProjectCard
                project={project}
                variant={"flagship"}
                selectedImage={selectedImages[project.title]}
                onSelectImage={handleSelectImage}
                onOpenLightbox={openLightbox}
                onImageError={handleImageError}
              />
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/30 px-6 py-12 backdrop-blur sm:flex-row sm:justify-between sm:px-10">
          <div className="text-center sm:text-left">
            <p className="font-serif-display italic text-2xl sm:text-3xl text-neutral-100">
              Envie de voir plus ?
            </p>
            <p className="mt-1 text-sm text-neutral-400">
              D'autres projets et itérations sont disponibles sur GitHub.
            </p>
          </div>
          <a
            href={"https://github.com/adem02"}
            target={"_blank"}
            rel={"noreferrer noopener"}
            onClick={() => {
              logEvent(analytics, "github_cta_click");
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-neutral-50 px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-amber-200"
          >
            Voir mon GitHub
            <FiArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      <ProjectLightbox
        project={activeProject}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrevious={showPreviousImage}
        onNext={showNextImage}
        onSelectIndex={setLightboxIndex}
      />
    </section>
  );
};
