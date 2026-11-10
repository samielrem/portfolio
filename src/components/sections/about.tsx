import { site } from "@/data/site";
import { FadeIn } from "@/components/motion/fade-in";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-t border-border/70 px-6 py-10 sm:px-8 sm:py-12"
    >
      <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-[7.5rem_minmax(0,38rem)] md:items-start md:gap-x-10">
        <FadeIn>
          <h2 className="text-sm tracking-wide text-muted-foreground md:pt-0.5">
            About
          </h2>
        </FadeIn>
        <div>
          <FadeIn>
            <div className="space-y-4 text-[0.98rem] leading-[1.7] text-foreground/85 sm:text-base sm:leading-[1.7]">
              {site.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
          <FadeIn delayMs={80}>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              {site.interests.join("  ·  ")}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
