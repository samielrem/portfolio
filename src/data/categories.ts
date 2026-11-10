import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/data/types";

export type WorkCategoryId = "all" | ProjectCategory;

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  product: "Product & Software",
  modeling: "Data & Modeling",
};

export const workCategoryLabels: Record<WorkCategoryId, string> = {
  all: "All",
  ...projectCategoryLabels,
};

/** Literal hrefs so `Link` keeps working under typed routes. */
export const workCategoryHrefs = {
  all: "/work/all",
  product: "/work/product",
  modeling: "/work/modeling",
} as const;

/** Page metadata only — never rendered as body copy. */
export const workCategoryDescriptions: Record<WorkCategoryId, string> = {
  all: "Software, AI tools, and data-driven products I've built.",
  product:
    "Products and software I've taken from an idea to something people can use.",
  modeling:
    "Prediction, statistical analysis, and data-driven systems I've built.",
};

export const workCategoryIds = ["all", "product", "modeling"] as const;

export function isWorkCategoryId(value: string): value is WorkCategoryId {
  return (workCategoryIds as readonly string[]).includes(value);
}

export function projectsInCategory(category: WorkCategoryId): Project[] {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
}

/** The school teaser is only part of the full view. */
export function showsComingSoon(category: WorkCategoryId): boolean {
  return category === "all";
}
