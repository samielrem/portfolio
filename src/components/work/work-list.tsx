import { ViewTransition } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { ProjectRow } from "@/components/projects/project-row";
import { ComingSoon } from "@/components/sections/coming-soon";
import { WorkSwitcher } from "@/components/work/work-switcher";
import {
  projectsInCategory,
  showsComingSoon,
  workCategoryLabels,
  type WorkCategoryId,
} from "@/data/categories";

export function WorkList({ category }: { category: WorkCategoryId }) {
  const visible = projectsInCategory(category);

  return (
    <section className="px-6 pt-24 pb-12 sm:px-8 sm:pt-28 sm:pb-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/work"
          transitionTypes={["nav-back"]}
          className="inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Selected work
        </Link>

        <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <ViewTransition
            name={`work-heading-${category}`}
            share="morph"
            default="none"
          >
            <h1 className="font-heading text-[2.35rem] leading-none tracking-[-0.02em] text-foreground sm:text-[3.15rem]">
              {workCategoryLabels[category]}
            </h1>
          </ViewTransition>

          <WorkSwitcher active={category} />
        </div>

        <ul className="mt-8 border-t border-border/80 sm:mt-10">
          {visible.map((project, index) => (
            <li key={project.slug} className="border-b border-border/80">
              <FadeIn delayMs={index * 60}>
                <ProjectRow project={project} />
              </FadeIn>
            </li>
          ))}
        </ul>

        {showsComingSoon(category) ? <ComingSoon /> : null}
      </div>
    </section>
  );
}
