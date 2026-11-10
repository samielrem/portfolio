import type { Metadata } from "next";
import { PageTransition } from "@/components/motion/page-transition";
import { ScrollToTop } from "@/components/motion/scroll-to-top";
import { WorkChooser } from "@/components/work/work-chooser";

export const metadata: Metadata = {
  title: "Selected work",
  description: "Software, AI tools, and data-driven products I've built.",
};

export default function WorkPage() {
  return (
    <PageTransition>
      <main id="main" className="flex flex-1 flex-col">
        <ScrollToTop />
        <WorkChooser />
      </main>
    </PageTransition>
  );
}
