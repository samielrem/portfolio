import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { workCategoryIds } from "@/data/categories";
import { getOpenProjectSlugs } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url ?? "https://example.com";

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...workCategoryIds.map((category) => ({
      url: `${base}/work/${category}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: category === "all" ? 0.9 : 0.7,
    })),
    ...getOpenProjectSlugs().map((slug) => ({
      url: `${base}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${base}/projects/07`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
