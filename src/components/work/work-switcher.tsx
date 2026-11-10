import Link from "next/link";
import {
  workCategoryHrefs,
  workCategoryIds,
  workCategoryLabels,
  type WorkCategoryId,
} from "@/data/categories";

export function WorkSwitcher({ active }: { active: WorkCategoryId }) {
  return (
    <div className="flex flex-wrap items-baseline text-sm leading-relaxed text-muted-foreground">
      {workCategoryIds.map((category, index) => {
        const isActive = category === active;

        return (
          <span key={category} className="inline-flex items-baseline">
            {index > 0 ? (
              <span aria-hidden className="mx-2.5 text-muted-foreground/45">
                ·
              </span>
            ) : null}
            {isActive ? (
              <span
                aria-current="page"
                className="text-foreground underline decoration-foreground/35 underline-offset-[5px]"
              >
                {workCategoryLabels[category]}
              </span>
            ) : (
              <Link
                href={workCategoryHrefs[category]}
                transitionTypes={["cat-switch"]}
                className="transition-colors duration-200 hover:text-foreground"
              >
                {workCategoryLabels[category]}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
