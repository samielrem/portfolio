import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { LinesGraphic } from "@/components/projects/teaser-graphics";

export function ComingSoon() {
  return (
    <aside
      id="coming-soon"
      aria-label="Upcoming project"
      className="pt-6 pb-1 sm:pt-7"
    >
      <FadeIn>
        <Link href="/projects/07" className="group block">
          <span className="mb-4 block text-foreground/40 transition-colors duration-300 group-hover:text-foreground/65">
            <LinesGraphic className="h-auto w-[6.5rem]" />
          </span>
          <p className="text-[0.7rem] tracking-[0.18em] text-muted-foreground">
            PROJECT 07  ·  Fall 2026
          </p>
          <p className="mt-2.5 font-heading text-[1.85rem] leading-[1.1] tracking-[-0.02em] text-foreground transition-opacity duration-300 group-hover:opacity-70 sm:text-[2.35rem]">
            School workflow made easier.
            <br />
            Highlight what matters.
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
            Coming soon
            <span
              aria-hidden
              className="transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </Link>
      </FadeIn>
    </aside>
  );
}
