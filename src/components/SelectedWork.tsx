"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/content";

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const isFeatured = project.order === 1; // Kormoo

  if (isFeatured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12 lg:p-16"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Main content */}
          <div className="flex-1">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-xs uppercase tracking-widest text-[var(--accent)]">
              Flagship Project
            </div>

            <h3 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl md:text-5xl">
              {project.title}
            </h3>

            {project.subtitle && (
              <p className="mt-3 text-lg text-[var(--muted)]">
                {project.subtitle}
              </p>
            )}

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
              {project.description}
            </p>

            {project.highlights && (
              <ul className="mt-8 space-y-3">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-[var(--muted)]"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--accent)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-xs text-[var(--muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <div className="mt-8">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] underline-offset-4 hover:underline"
                >
                  Visit {project.title}
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>

          {/* Visual element - abstract architecture diagram */}
          <div className="w-full max-w-sm flex-shrink-0 lg:max-w-xs">
            <div className="relative aspect-square rounded-xl border border-[var(--border)] bg-[var(--background)] p-6">
              <svg
                viewBox="0 0 200 200"
                className="h-full w-full"
                aria-hidden="true"
              >
                {/* Abstract system visualization */}
                <rect
                  x="20"
                  y="20"
                  width="160"
                  height="160"
                  rx="8"
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <rect
                  x="40"
                  y="40"
                  width="120"
                  height="40"
                  rx="4"
                  fill="var(--surface)"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <rect
                  x="40"
                  y="90"
                  width="55"
                  height="55"
                  rx="4"
                  fill="var(--surface)"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <rect
                  x="105"
                  y="90"
                  width="55"
                  height="55"
                  rx="4"
                  fill="var(--surface)"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <rect
                  x="40"
                  y="155"
                  width="120"
                  height="25"
                  rx="4"
                  fill="var(--surface)"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                {/* Connection lines */}
                <line
                  x1="100"
                  y1="80"
                  x2="100"
                  y2="90"
                  stroke="var(--accent)"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <line
                  x1="95"
                  y1="117"
                  x2="105"
                  y2="117"
                  stroke="var(--accent)"
                  strokeWidth="1"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  // Standard project card with editorial layout
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative grid grid-cols-1 gap-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:grid-cols-2 md:gap-8 md:p-8"
    >
      {/* Content side */}
      <div className="flex flex-col justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-xs uppercase tracking-widest text-[var(--muted)]">
            {project.category}
          </div>

          <h3 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="mt-2 text-sm text-[var(--muted)]">
              {project.subtitle}
            </p>
          )}

          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            {project.description}
          </p>

          {project.highlights && (
            <ul className="mt-4 space-y-2">
              {project.highlights.slice(0, 3).map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs text-[var(--muted)]"
                >
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2 py-1 text-xs text-[var(--muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Visual side - minimal graphic */}
      <div className="relative flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] p-6">
        <div className="relative h-32 w-32">
          {/* Category-specific visual */}
          {project.category === "engineering" && (
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <rect
                x="10"
                y="10"
                width="35"
                height="35"
                rx="4"
                fill="none"
                stroke="var(--border)"
                strokeWidth="1.5"
              />
              <rect
                x="55"
                y="10"
                width="35"
                height="35"
                rx="4"
                fill="none"
                stroke="var(--border)"
                strokeWidth="1.5"
              />
              <rect
                x="10"
                y="55"
                width="35"
                height="35"
                rx="4"
                fill="none"
                stroke="var(--border)"
                strokeWidth="1.5"
              />
              <rect
                x="55"
                y="55"
                width="35"
                height="35"
                rx="4"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.5"
              />
            </svg>
          )}

          {project.category === "product" && (
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="var(--border)"
                strokeWidth="1.5"
              />
              <circle
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="var(--border)"
                strokeWidth="1.5"
              />
              <circle
                cx="50"
                cy="50"
                r="8"
                fill="var(--accent)"
                opacity="0.5"
              />
            </svg>
          )}

          {project.category === "startup" && (
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <polygon
                points="50,15 85,85 15,85"
                fill="none"
                stroke="var(--border)"
                strokeWidth="1.5"
              />
              <line
                x1="50"
                y1="15"
                x2="50"
                y2="85"
                stroke="var(--border)"
                strokeWidth="1.5"
              />
              <line
                x1="15"
                y1="85"
                x2="85"
                y2="85"
                stroke="var(--accent)"
                strokeWidth="1.5"
              />
            </svg>
          )}

          {project.category === "ai" && (
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="var(--border)"
                strokeWidth="1.5"
              />
              <circle
                cx="50"
                cy="25"
                r="5"
                fill="var(--accent)"
                opacity="0.6"
              />
              <circle
                cx="70"
                cy="60"
                r="5"
                fill="var(--accent)"
                opacity="0.6"
              />
              <circle
                cx="30"
                cy="60"
                r="5"
                fill="var(--accent)"
                opacity="0.6"
              />
            </svg>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function SelectedWork() {
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section id="work" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl md:text-5xl">
            Selected Work
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)]">
            Projects that demonstrate engineering decisions, product thinking,
            and shipped results.
          </p>
        </motion.div>

        <div className="space-y-8">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
