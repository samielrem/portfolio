import Image from "next/image";
import type { Project } from "@/data/types";

export function ProjectPreview({ project }: { project: Project }) {
  const { preview } = project;
  const containImage = preview.kind === "image" && preview.fit === "contain";

  return (
    <div
      aria-hidden
      className={`project-preview pointer-events-none absolute top-1/2 right-0 z-10 hidden -translate-y-1/2 overflow-hidden border border-border/80 bg-background group-hover:z-20 group-focus-within:z-20 lg:block ${
        containImage ? "w-[20rem]" : "w-[13.75rem]"
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          containImage
            ? "aspect-video"
            : preview.kind === "image"
              ? "aspect-[3/5]"
              : "aspect-[3/2]"
        }`}
      >
        {preview.kind === "image" ? (
          <Image
            src={preview.src}
            alt=""
            fill
            sizes={containImage ? "320px" : "220px"}
            className={
              containImage
                ? "object-contain object-center"
                : `object-cover transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-[1.03] group-focus-within:scale-[1.03] ${
                    preview.object === "left"
                      ? "object-left"
                      : preview.object === "center"
                        ? "object-center"
                        : "object-top"
                  }`
            }
          />
        ) : null}

        {preview.kind === "metrics" ? (
          preview.metrics.length === 1 ? (
            <div className="flex h-full flex-col justify-between px-5 py-4">
              <p className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                {preview.kicker}
              </p>
              <div>
                <p className="font-heading text-[2.55rem] leading-none tracking-tight text-foreground">
                  {preview.metrics[0].value}
                </p>
                {preview.note ? (
                  <p className="mt-3 max-w-[11rem] text-[11px] leading-snug text-muted-foreground">
                    {preview.note}
                  </p>
                ) : (
                  <p className="mt-1.5 text-[11px] text-muted-foreground">
                    {preview.metrics[0].label}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col justify-between px-5 py-4">
              <p className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                {preview.kicker}
              </p>
              <dl className="grid grid-cols-2 gap-4">
                {preview.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dd className="font-heading text-[1.85rem] leading-none tracking-tight text-foreground">
                      {metric.value}
                    </dd>
                    <dt className="mt-1.5 text-[11px] text-muted-foreground">
                      {metric.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          )
        ) : null}

        {preview.kind === "frame" ? (
          <div className="flex h-full flex-col justify-between px-5 py-4">
            <div className="flex flex-1 items-center justify-center border border-dashed border-foreground/20">
              <p className="font-heading text-xl tracking-tight text-foreground italic">
                {preview.caption}
              </p>
            </div>
            <p className="mt-3 text-[11px] tracking-wide text-muted-foreground">
              {preview.note}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
