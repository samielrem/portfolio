import { ViewTransition } from "react";
import Link from "next/link";
import { CategoryArtifacts } from "@/components/work/category-artifacts";
import {
  workCategoryHrefs,
  workCategoryIds,
  workCategoryLabels,
} from "@/data/categories";

export function WorkChooser() {
  return (
    <section className="flex flex-1 flex-col justify-center px-6 pt-24 pb-16 sm:px-8 sm:pt-28">
      <div className="mx-auto w-full max-w-6xl">
        <p
          className="animate-enter text-sm tracking-wide text-muted-foreground"
          style={{ animationDelay: "40ms" }}
        >
          Selected work
        </p>

        <nav
          aria-label="Work categories"
          className="mt-7 border-t border-border/80 sm:mt-9"
        >
          {workCategoryIds.map((category, index) => (
            <Link
              key={category}
              href={workCategoryHrefs[category]}
              transitionTypes={["nav-forward"]}
              className="animate-enter group flex items-center justify-between gap-6 border-b border-border/80 py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:py-9"
              style={{ animationDelay: `${160 + index * 110}ms` }}
            >
              <span className="flex items-baseline gap-3 sm:gap-4">
                <ViewTransition
                  name={`work-heading-${category}`}
                  share="morph"
                  default="none"
                >
                  <span className="font-heading text-[2.35rem] leading-none tracking-[-0.02em] text-foreground/45 transition-colors duration-500 ease-out group-hover:text-foreground sm:text-[3.15rem] lg:text-[3.75rem]">
                    {workCategoryLabels[category]}
                  </span>
                </ViewTransition>
                <span
                  aria-hidden
                  className="text-lg text-muted-foreground opacity-0 transition-[opacity,transform] duration-500 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                >
                  →
                </span>
              </span>

              <CategoryArtifacts category={category} />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
