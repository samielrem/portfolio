import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project 07",
  description: "School workflow made easier. Highlight what matters. Fall 2026.",
};

export default function Project07Page() {
  return (
    <main id="main" className="px-6 pt-24 pb-16 sm:px-8 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/work/all"
          transitionTypes={["nav-back"]}
          className="mb-12 inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Selected work
        </Link>

        <article className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(15rem,0.8fr)] lg:items-start lg:gap-x-16 xl:gap-x-24">
          <header>
            <p className="text-[0.7rem] tracking-[0.18em] text-muted-foreground">
              PROJECT 07  ·  Fall 2026
            </p>
            <h1 className="mt-3 font-heading text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              School workflow made easier.
              <br />
              Highlight what matters.
            </h1>
            <p className="mt-8 text-base text-muted-foreground">Coming soon. Fall 2026.</p>
          </header>

          <aside>
            <figure aria-label="A small hint.">
              <div className="border border-foreground/12">
                <SoonFigure />
              </div>
            </figure>
          </aside>
        </article>
      </div>
    </main>
  );
}

function SoonFigure() {
  return (
    <svg
      viewBox="0 0 280 340"
      className="h-auto w-full text-foreground/45"
      fill="none"
      aria-hidden
    >
      <path
        d="M48 78h128"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        className="text-foreground/28"
      />
      <path
        d="M48 108h168"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        className="text-foreground/28"
      />
      <path
        d="M48 138h148"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M48 168h112"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        className="text-foreground/28"
      />
      <path
        d="M48 198h156"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        className="text-foreground/28"
      />
      <path
        d="M48 228h96"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        className="text-foreground/22"
      />
    </svg>
  );
}
