import { site } from "@/data/site";
import { QuietLink } from "@/components/links";
import { isFilledUrl } from "@/lib/content";

export function Footer() {
  return (
    <footer className="px-6 sm:px-8">
      <div
        id="contact"
        className="mx-auto grid max-w-6xl scroll-mt-16 gap-3 border-t border-border/70 pt-8 pb-6 sm:pt-10 md:grid-cols-[7.5rem_minmax(0,1fr)] md:gap-x-10"
      >
        <p className="text-sm tracking-wide text-muted-foreground md:pt-2">
          Contact
        </p>
        <div>
          <h2 className="font-heading text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            {site.closing}
          </h2>
          <ul className="mt-5 flex flex-col gap-3 text-base sm:flex-row sm:gap-8">
            <li>
              <QuietLink
                href={site.githubUrl}
                missingLabel="Add your GitHub URL in src/data/site.ts"
              >
                GitHub
              </QuietLink>
            </li>
            <li>
              <QuietLink
                href={site.linkedinUrl}
                missingLabel="Add your LinkedIn URL in src/data/site.ts"
              >
                LinkedIn
              </QuietLink>
            </li>
            <li>
              <QuietLink
                href={isFilledUrl(site.email) ? `mailto:${site.email}` : null}
                missingLabel="Add your email in src/data/site.ts"
              >
                {site.email ?? "Email"}
              </QuietLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-border/70 py-4 text-xs tracking-wide text-muted-foreground">
        <p>{site.name}</p>
        <p>
          <time dateTime="2026">2026</time>
        </p>
      </div>
    </footer>
  );
}
