import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTransition } from "@/components/motion/page-transition";
import { ScrollToTop } from "@/components/motion/scroll-to-top";
import { WorkList } from "@/components/work/work-list";
import {
  isWorkCategoryId,
  workCategoryDescriptions,
  workCategoryIds,
  workCategoryLabels,
} from "@/data/categories";

type WorkCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return workCategoryIds.map((category) => ({ category }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: WorkCategoryPageProps): Promise<Metadata> {
  const { category } = await params;

  if (!isWorkCategoryId(category)) {
    return { title: "Selected work" };
  }

  const title =
    category === "all" ? "Selected work" : workCategoryLabels[category];

  return {
    title,
    description: workCategoryDescriptions[category],
  };
}

export default async function WorkCategoryPage({
  params,
}: WorkCategoryPageProps) {
  const { category } = await params;

  if (!isWorkCategoryId(category)) {
    notFound();
  }

  return (
    <PageTransition>
      <main id="main">
        <ScrollToTop />
        <WorkList category={category} />
      </main>
    </PageTransition>
  );
}
