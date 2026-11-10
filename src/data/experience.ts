import { getProject } from "@/data/projects";
import type { ExperienceItem } from "@/data/types";

export const experience: ExperienceItem[] = [
  {
    projectSlug: "mapspg",
    role: "Founder & Product Manager",
    start: "Jul 2026",
    end: "Present",
  },
  {
    projectSlug: "hoop-predict",
    role: "Creator / Contributor",
    start: "Aug 2026",
    end: "Present",
  },
  {
    projectSlug: "thurs",
    label: "thurs",
    role: "AI Browser Assistant",
    start: "Jun 2026",
    end: "Jul 2026",
  },
];

export function getExperienceEntries() {
  return experience.map((item) => {
    const project = getProject(item.projectSlug);

    return {
      ...item,
      name: item.label ?? project?.name ?? item.projectSlug,
      href: `/projects/${item.projectSlug}`,
    };
  });
}
