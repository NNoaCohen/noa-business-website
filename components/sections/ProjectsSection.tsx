"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

function ProjectVisuals({ project }: { project: Project }) {
  return (
    <span className="featured-project__visuals" aria-label={`תצוגות אתר ${project.name}`}>
      <span className="featured-project__browser">
        <span className="featured-project__browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <Image
          src={project.desktopImage.src}
          alt={project.desktopImage.alt}
          width={project.desktopImage.width}
          height={project.desktopImage.height}
          sizes="(max-width: 820px) 100vw, 58vw"
          className="featured-project__desktop-image"
        />
      </span>

      <span className="featured-project__phone">
        <span className="featured-project__phone-screen">
          <Image
            src={project.mobileImage.src}
            alt={project.mobileImage.alt}
            width={project.mobileImage.width}
            height={project.mobileImage.height}
            sizes="(max-width: 820px) 35vw, 16vw"
            className="featured-project__mobile-image"
          />
        </span>
      </span>
    </span>
  );
}

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const isSingleProject = featuredProjects.length === 1;

  function openDetails(project: Project, opener: HTMLButtonElement) {
    openerRef.current = opener;
    setActiveProject(project);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !activeProject) return;

    const rootOverflow = document.documentElement.style.overflow;
    const bodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    dialog.scrollTop = 0;
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    closeButtonRef.current?.focus();

    return () => {
      if (dialog.open) dialog.close();
      document.documentElement.style.overflow = rootOverflow;
      document.body.style.overflow = bodyOverflow;
    };
  }, [activeProject]);

  function closeDetails() {
    dialogRef.current?.close();
  }

  function handleDialogClose() {
    setActiveProject(null);
    openerRef.current?.focus();
  }

  if (featuredProjects.length === 0) return null;

  return (
    <section className="content-section featured-work" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <h2 className="featured-work__title" id="work-title">
          עבודות נבחרות
        </h2>

        <div
          className={`featured-work__list${isSingleProject ? "" : " featured-work__list--grid"}`}
        >
          {featuredProjects.map((project) => (
            <article
              className={`featured-project${isSingleProject ? "" : " featured-project--grid-card"}`}
              key={project.id}
            >
              {isSingleProject ? (
                <>
                  <ProjectVisuals project={project} />
                  <div className="featured-project__copy">
                    <span className="featured-project__eyebrow">פרויקט נבחר</span>
                    <h3>{project.name}</h3>
                    <p className="featured-project__description">{project.description}</p>

                    <blockquote className="featured-project__testimonial">
                      <p>״{project.testimonial.quote}״</p>
                      <footer>
                        <strong>{project.testimonial.author}</strong>
                        <span>{project.testimonial.organization}</span>
                      </footer>
                    </blockquote>

                    <div className="featured-project__actions">
                      <a
                        className="button button-dark"
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        לצפייה באתר
                      </a>
                      <button
                        className="button featured-project__details-button"
                        type="button"
                        onClick={(event) => openDetails(project, event.currentTarget)}
                      >
                        עוד על הפרויקט
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <button
                  className="featured-project__card-trigger"
                  type="button"
                  aria-label={`פתיחת פרטי הפרויקט ${project.name}`}
                  onClick={(event) => openDetails(project, event.currentTarget)}
                >
                  <ProjectVisuals project={project} />
                  <span className="featured-project__card-copy">
                    <span className="featured-project__eyebrow">פרויקט נבחר</span>
                    <span className="featured-project__card-title" role="heading" aria-level={3}>
                      {project.name}
                    </span>
                    <span className="featured-project__description">{project.description}</span>
                    <span className="featured-project__card-link">עוד על הפרויקט</span>
                  </span>
                </button>
              )}
            </article>
          ))}
        </div>

        <dialog
          className="project-dialog"
          ref={dialogRef}
          aria-labelledby="project-dialog-title"
          aria-describedby="project-dialog-description"
          onClose={handleDialogClose}
          onCancel={(event) => {
            event.preventDefault();
            closeDetails();
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              closeDetails();
            }
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeDetails();
          }}
        >
          {activeProject && (
            <div className="project-dialog__content">
              <header className="project-dialog__header">
                <div>
                  <span className="featured-project__eyebrow">פרויקט נבחר</span>
                  <h2 id="project-dialog-title">{activeProject.name}</h2>
                </div>
                <button
                  className="project-dialog__close"
                  type="button"
                  ref={closeButtonRef}
                  onClick={closeDetails}
                  aria-label="סגירת פרטי הפרויקט"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </header>

              <p className="project-dialog__description" id="project-dialog-description">
                {activeProject.description}
              </p>

              <div
                className="project-dialog__gallery"
                aria-label={`צילומי מסך נוספים מאתר ${activeProject.name}`}
              >
                {activeProject.gallery.map((image) => (
                  <figure className="project-dialog__image" key={image.src}>
                    <figcaption>{image.label}</figcaption>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes="(max-width: 720px) 100vw, 850px"
                    />
                  </figure>
                ))}
              </div>

              <blockquote className="project-dialog__testimonial">
                <p>״{activeProject.testimonial.quote}״</p>
                <footer>
                  <strong>{activeProject.testimonial.author}</strong>
                  <span>{activeProject.testimonial.organization}</span>
                </footer>
              </blockquote>

              <a
                className="button button-dark project-dialog__link"
                href={activeProject.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                לצפייה באתר
              </a>
            </div>
          )}
        </dialog>
      </div>
    </section>
  );
}
