import Link from "next/link";
import type { Project } from "@/data/types";
import { projectCategoryLabels } from "@/data/categories";
import { isProjectClickable } from "@/data/projects";
import { QuietLink } from "@/components/links";
import { ProjectPreview } from "@/components/projects/project-preview";

export function ProjectRow({ project }: { project: Project }) {
  const clickable = isProjectClickable(project);

  return (
    <article className="group relative">
      <div className="py-5 sm:py-6 lg:pr-64">
        {project.kicker || project.status ? (
          <p className="mb-2 text-[0.7rem] tracking-[0.18em] text-muted-foreground">
            {[
              project.kicker,
              project.status === "in-development" ? "IN DEVELOPMENT" : null,
            ]
              .filter(Boolean)
              .join("  ·  ")}
          </p>
        ) : null}
        {clickable ? (
          <Link href={`/projects/${project.slug}`} className="block">
            <ProjectRowCopy project={project} />
          </Link>
        ) : (
          <div>
            <ProjectRowCopy project={project} linked={false} />
          </div>
        )}
        {project.blurb ? (
          <p className="mt-3 max-w-xl text-[0.9rem] leading-relaxed text-muted-foreground/90">
            {project.blurb}
          </p>
        ) : null}

        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm">
          {project.githubUrl !== undefined ? (
            <QuietLink
              href={project.githubUrl}
              missingLabel="Add a GitHub URL in src/data/projects.ts"
            >
              GitHub
            </QuietLink>
          ) : null}
          {project.liveUrl !== undefined ? (
            <QuietLink
              href={project.liveUrl}
              missingLabel="Add a live demo URL in src/data/projects.ts"
            >
              Demo
            </QuietLink>
          ) : null}
          {project.cta ? (
            <QuietLink
              href={project.cta.href}
              missingLabel=""
              className="group/cta inline-flex items-center gap-1.5"
            >
              {project.cta.label}
              <span
                aria-hidden
                className="transition-transform duration-300 ease-out group-hover/cta:translate-x-1"
              >
                →
              </span>
            </QuietLink>
          ) : null}
        </div>
      </div>

      <ProjectPreview project={project} />
    </article>
  );
}

function ProjectRowCopy({
  project,
  linked = true,
}: {
  project: Project;
  linked?: boolean;
}) {
  return (
    <>
      <h3
        className={`font-heading text-[1.85rem] leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[2.35rem] ${
          linked
            ? "transition-opacity duration-300 group-hover:opacity-70"
            : ""
        }`}
      >
        {project.name}
      </h3>
      <p className="mt-2 text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
        {projectCategoryLabels[project.category]}
      </p>
      <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
        {project.line}
      </p>
    </>
  );
}
