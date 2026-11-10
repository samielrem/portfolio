import Link from "next/link";
import { site } from "@/data/site";
import { HeroArtifacts } from "@/components/hero/hero-artifacts";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-14 sm:px-8 sm:pt-28 sm:pb-16">
      <div className="relative mx-auto grid w-full max-w-6xl items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,1fr)] lg:gap-10">
        <div>
          <h1 className="font-heading text-[clamp(3.25rem,12vw,6.5rem)] leading-[0.9] tracking-[-0.04em] text-foreground">
            <span className="animate-enter block">{site.firstName}</span>
            <span
              className="animate-enter block"
              style={{ animationDelay: "90ms" }}
            >
              {site.lastName}
            </span>
          </h1>

          <p
            className="animate-enter mt-6 text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase sm:mt-7"
            style={{ animationDelay: "160ms" }}
          >
            Currently
          </p>
          {site.currently.map((item, index) => (
            <div
              key={item.org}
              className="animate-enter"
              style={{ animationDelay: `${200 + index * 70}ms` }}
            >
              <p
                className={`max-w-md text-[0.95rem] leading-relaxed text-foreground sm:text-base ${
                  index === 0 ? "mt-2" : "mt-4"
                }`}
              >
                {item.role}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {"href" in item && item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-60"
                  >
                    {item.org}
                  </a>
                ) : (
                  item.org
                )}
              </p>
            </div>
          ))}

          <p
            className="animate-enter mt-6 max-w-md font-heading text-xl leading-snug tracking-tight text-foreground italic sm:mt-7 sm:text-2xl"
            style={{ animationDelay: "340ms" }}
          >
            {site.headline}
          </p>

          <Link
            href="/work"
            transitionTypes={["nav-forward"]}
            className="animate-enter group mt-8 inline-flex items-center gap-2.5 border border-border/80 bg-background px-5 py-3 text-sm text-foreground transition-[color,background-color,border-color,transform] duration-300 hover:border-foreground/20 hover:bg-muted/40 sm:mt-9 sm:px-6 sm:py-3.5 sm:text-[0.95rem]"
            style={{ animationDelay: "400ms" }}
          >
            Open Portfolio
            <span
              aria-hidden
              className="transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        <div
          className="relative hidden min-h-[30rem] w-full self-stretch lg:block"
          aria-label="Project sketches"
        >
          <HeroArtifacts />
        </div>
      </div>
    </section>
  );
}
