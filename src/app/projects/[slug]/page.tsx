import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { workCategoryHrefs } from "@/data/categories";
import { getProject, getOpenProjectSlugs, isProjectClickable } from "@/data/projects";
import { CaseStudy } from "@/components/projects/case-study";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getOpenProjectSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || !isProjectClickable(project)) {
    return { title: "Project not found" };
  }

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || !isProjectClickable(project)) {
    notFound();
  }

  return (
    <main id="main" className="px-6 pt-24 pb-16 sm:px-8 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <Link
          href={workCategoryHrefs[project.category]}
          transitionTypes={["nav-back"]}
          className="mb-12 inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Selected work
        </Link>
        <CaseStudy project={project} />
      </div>
    </main>
  );
}
