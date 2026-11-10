import Image from "next/image";
import { QuietLink } from "@/components/links";
import { ProjectFigure } from "@/components/projects/project-figure";
import type { CaseStudySection, Project } from "@/data/types";

export function CaseStudy({ project }: { project: Project }) {
  const hasTech = project.tech.length > 0;
  const hasLinks =
    project.githubUrl !== undefined || project.liveUrl !== undefined;

  return (
    <article className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(15rem,0.8fr)] lg:items-start lg:gap-x-16 lg:gap-y-14 xl:gap-x-24">
      <header>
        {project.kicker || project.status ? (
          <p className="mb-3 text-[0.7rem] tracking-[0.18em] text-muted-foreground">
            {[
              project.kicker,
              project.status === "in-development" ? "IN DEVELOPMENT" : null,
            ]
              .filter(Boolean)
              .join("  ·  ")}
          </p>
        ) : null}
        <h1 className="font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
          {project.name}
        </h1>
        {project.tagline ? (
          <p className="mt-4 font-heading text-xl leading-snug tracking-tight text-foreground italic sm:text-2xl">
            {project.tagline}
          </p>
        ) : null}
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        {hasTech ? (
          <p className="mt-6 text-sm text-muted-foreground">
            {project.tech.join("  ·  ")}
          </p>
        ) : null}
        {project.cta ? (
          <p className="mt-8">
            <CtaLink href={project.cta.href} label={project.cta.label} />
          </p>
        ) : null}
      </header>

      <aside className="lg:sticky lg:top-24 lg:row-span-2">
        <ProjectFigure project={project} />
      </aside>

      <div>
        {project.story ? (
          <p className="text-base leading-relaxed text-muted-foreground">
            {project.story}
          </p>
        ) : null}

        {project.note ? (
          <aside className={project.story ? "mt-10 sm:mt-12" : "max-w-xl"}>
            <h2 className="font-heading text-xl tracking-tight text-foreground sm:text-2xl">
              {project.note.title}
            </h2>
            <div className="mt-3 space-y-3">
              {project.note.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {project.note.footnote ? (
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground/75">
                {project.note.footnote}
              </p>
            ) : null}
          </aside>
        ) : null}

        {project.philosophy ? (
          <p className="mt-12 max-w-md font-heading text-2xl leading-snug tracking-tight text-foreground italic sm:mt-16 sm:text-3xl">
            {project.philosophy}
          </p>
        ) : null}

        <div className="mt-12 space-y-12 sm:mt-16 sm:space-y-14">
          {project.caseStudy.sections.map((section) => (
            <CaseStudyBlock key={section.id} section={section} />
          ))}
        </div>

        {project.echo ? (
          <p className="mt-16 max-w-xs font-heading text-lg leading-snug tracking-tight text-muted-foreground/70 italic sm:mt-20">
            {project.echo}
          </p>
        ) : null}

        {project.closing ? (
          <div className="mt-16 max-w-xl sm:mt-20">
            <p className="font-heading text-2xl leading-snug tracking-tight text-foreground italic sm:text-3xl">
              {project.closing.lead}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {project.closing.body}
            </p>
          </div>
        ) : null}

        {hasLinks ? (
          <section
            className="mt-16 border-t border-border/70 pt-10 sm:mt-20"
            aria-labelledby="links-heading"
          >
            <h2
              id="links-heading"
              className="font-heading text-2xl tracking-tight text-foreground"
            >
              Links
            </h2>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-base">
              {project.githubUrl !== undefined ? (
                <QuietLink
                  href={project.githubUrl}
                  missingLabel="Add a GitHub URL in src/data/projects.ts"
                >
                  GitHub
                </QuietLink>
              ) : null}
              {project.liveUrl !== undefined ? (
                <QuietLink
                  href={project.liveUrl}
                  missingLabel="Add a live demo URL in src/data/projects.ts"
                >
                  Demo
                </QuietLink>
              ) : null}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}

function CtaLink({ href, label }: { href: string; children?: never; label: string }) {
  return (
    <QuietLink href={href} missingLabel="" className="group inline-flex items-center gap-1.5">
      {label}
      <span
        aria-hidden
        className="transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </QuietLink>
  );
}

function CaseStudyBlock({ section }: { section: CaseStudySection }) {
  const hasBody = Boolean(section.body);
  const hasParagraphs = Boolean(section.paragraphs?.length);
  const hasBullets = Boolean(section.bullets?.length);
  const hasMetrics = Boolean(section.metrics?.length);
  const hasMeta = Boolean(section.meta?.length);
  const hasSignals = Boolean(section.signals?.length);
  const hasPipeline = Boolean(section.pipeline?.length);
  const hasWorkflow = Boolean(section.workflow?.steps.length);
  const hasShots = Boolean(section.shots?.length);
  const hasExample = Boolean(section.example);
  const showPlaceholder =
    !hasBody &&
    !hasParagraphs &&
    !hasBullets &&
    !hasMetrics &&
    !hasMeta &&
    !hasSignals &&
    !hasPipeline &&
    !hasWorkflow &&
    !hasShots &&
    !hasExample;

  return (
    <section aria-labelledby={section.title ? section.id : undefined}>
      {section.title ? (
        <h2
          id={section.id}
          className="font-heading text-2xl tracking-tight text-foreground"
        >
          {section.title}
        </h2>
      ) : null}

      {hasMetrics ? (
        <dl
          className={`mt-6 grid grid-cols-2 gap-x-6 gap-y-8 ${
            (section.metrics?.length ?? 0) > 2 ? "" : "sm:max-w-md"
          }`}
        >
          {section.metrics?.map((metric) => (
            <div key={metric.label} className="border-t border-border pt-3">
              <dt className="text-sm text-muted-foreground">{metric.label}</dt>
              <dd className="mt-1 font-heading text-3xl tracking-tight sm:text-4xl">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      {hasBody ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {section.body}
        </p>
      ) : null}

      {hasPipeline ? (
        <ol className="mt-8 space-y-0 text-base">
          {section.pipeline?.map((step, index) => (
            <li key={step} className="flex flex-col items-start">
              <span className="font-heading text-xl tracking-tight text-foreground">
                {step}
              </span>
              {index < (section.pipeline?.length ?? 0) - 1 ? (
                <span
                  aria-hidden
                  className="my-2 text-sm text-muted-foreground/50"
                >
                  ↓
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      ) : null}

      {hasWorkflow && section.workflow ? (
        <ProtocolWorkflow workflow={section.workflow} />
      ) : null}

      {hasShots ? (
        <div className="mt-8 space-y-8">
          {section.shots?.map((shot) => (
            <figure key={shot.src}>
              <div className="overflow-hidden border border-foreground/12">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1440}
                  height={900}
                  sizes="(min-width: 1024px) 48vw, 92vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      {hasParagraphs
        ? section.paragraphs?.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-base leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))
        : null}

      {hasSignals ? (
        <div className="mt-8 space-y-0">
          {section.signals?.map((signal) => (
            <div
              key={signal.label}
              className="border-t border-border/70 py-4 first:border-t-0 first:pt-0"
            >
              <p className="font-heading text-2xl tracking-tight text-foreground">
                {signal.label}
              </p>
              <p className="mt-1 text-base text-muted-foreground">
                {signal.detail}
              </p>
            </div>
          ))}
        </div>
      ) : null}

      {hasBullets ? (
        <ul className="mt-6 space-y-0 text-base leading-relaxed text-muted-foreground">
          {section.bullets?.map((item) => (
            <li key={item} className="border-t border-border/70 py-3">
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {hasMeta ? (
        <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-border/70 pt-6 sm:grid-cols-3">
          {section.meta?.map((item) => (
            <div key={item.label}>
              <dt className="text-xs tracking-wide text-muted-foreground/80">
                {item.label}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      {hasExample && section.example ? (
        <aside className="mt-8 border-t border-border/70 pt-6">
          <p className="text-[0.7rem] tracking-[0.18em] text-muted-foreground">
            {section.example.kicker}
          </p>
          <p className="mt-3 font-heading text-3xl tracking-tight text-foreground">
            {section.example.title}
          </p>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            {section.example.body}
          </p>
          {section.example.note ? (
            <p className="mt-4 text-sm text-muted-foreground/75">
              {section.example.note}
            </p>
          ) : null}
        </aside>
      ) : null}

      {showPlaceholder ? (
        <p className="mt-4 border border-dashed border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground">
          Placeholder — {section.placeholder}
        </p>
      ) : null}
    </section>
  );
}

function ProtocolWorkflow({
  workflow,
}: {
  workflow: NonNullable<CaseStudySection["workflow"]>;
}) {
  return (
    <ol className="mt-8 border-t border-border/70 pt-6">
      {workflow.kicker ? (
        <p className="mb-5 text-[0.7rem] tracking-[0.18em] text-muted-foreground">
          {workflow.kicker}
        </p>
      ) : null}
      {workflow.steps.map((step, index) => (
        <li key={`${step.title}-${index}`} className="flex gap-4">
          <span className="flex w-3 shrink-0 flex-col items-center" aria-hidden>
            <span className="mt-1.5 size-1.5 rounded-full bg-foreground/55" />
            {index < workflow.steps.length - 1 ? (
              <span className="mt-1 min-h-10 w-px flex-1 bg-border" />
            ) : null}
          </span>
          <div className={index < workflow.steps.length - 1 ? "pb-6" : ""}>
            <p className="text-[0.65rem] tracking-[0.16em] text-muted-foreground">
              {[step.index, step.kind].filter(Boolean).join("  ·  ")}
            </p>
            <p className="mt-1 font-heading text-xl tracking-tight text-foreground">
              {step.title}
            </p>
            {step.attachments?.length ? (
              <p className="mt-1.5 text-sm text-muted-foreground">
                {step.attachments.join("  ·  ")}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
