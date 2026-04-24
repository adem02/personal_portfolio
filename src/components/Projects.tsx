import {SectionTitle} from "./UI/SectionTitle.tsx";
import {Section} from "./UI/Section.tsx";
import {motion} from "framer-motion";
import {ProjectCard} from "./projects/ProjectCard.tsx";
import {ProjectLightbox} from "./projects/ProjectLightbox.tsx";
import {useProjects} from "../hooks/useProjects.ts";

export const Projects = () => {
  const {
    projects,
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
    <Section>
      <SectionTitle title={"Projects"} animation/>
      <div>
        <div>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{opacity: 0, x: index % 2 === 0 ? -60 : 60}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true, amount: 0.1}}
              transition={{duration: 0.6, ease: "easeOut"}}
              className={"mb-20"}
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

        <div className={"py-16 text-center tracking-tighter"}>
          <p className={"mb-4 text-neutral-400"}>D'autres projets et iterations sont disponibles sur GitHub.</p>
          <a
            href={"https://github.com/adem02"}
            target={"_blank"}
            rel={"noreferrer noopener"}
            className={"inline-block rounded-lg border border-neutral-700 bg-neutral-950/40 px-6 py-3 text-sm font-medium text-neutral-200 transition-colors duration-300 hover:border-neutral-500 hover:bg-neutral-900/70"}
          >
            Voir mon GitHub
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
    </Section>
  );
};
