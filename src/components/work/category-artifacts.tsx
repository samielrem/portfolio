import {
  HoopArtifact,
  MapsArtifact,
  ThursArtifact,
} from "@/components/hero/hero-artifacts";
import {
  GasWaitGraphic,
  LinesGraphic,
  PawsGraphic,
  ProtoLabGraphic,
} from "@/components/projects/teaser-graphics";
import type { WorkCategoryId } from "@/data/categories";
import { cn } from "@/lib/utils";

type Artifact = {
  node: React.ReactNode;
  width: string;
  tilt: string;
};

const artifacts: Record<WorkCategoryId, Artifact[]> = {
  all: [
    {
      node: <MapsArtifact />,
      width: "w-[3.25rem] sm:w-[4.25rem]",
      tilt: "rotate-[-3deg] translate-y-1.5",
    },
    {
      node: <HoopArtifact />,
      width: "w-[3rem] sm:w-[4rem]",
      tilt: "rotate-[2.5deg] -translate-y-1",
    },
    {
      node: <LinesGraphic className="h-auto w-full" />,
      width: "w-[2.75rem] sm:w-[3.5rem]",
      tilt: "rotate-[1.5deg] translate-y-1",
    },
  ],
  product: [
    {
      node: <ThursArtifact />,
      width: "w-[2.75rem] sm:w-[3.75rem]",
      tilt: "rotate-[2deg] -translate-y-1",
    },
    {
      node: <MapsArtifact />,
      width: "w-[3.25rem] sm:w-[4.25rem]",
      tilt: "rotate-[-3deg] translate-y-1.5",
    },
    {
      node: <PawsGraphic className="h-auto w-full" />,
      width: "w-[2.75rem] sm:w-[3.75rem]",
      tilt: "rotate-[-1.5deg] -translate-y-0.5",
    },
    {
      node: <ProtoLabGraphic className="h-auto w-full" />,
      width: "w-[2.75rem] sm:w-[3.5rem]",
      tilt: "rotate-[1deg] translate-y-0.5",
    },
  ],
  modeling: [
    {
      node: <HoopArtifact />,
      width: "w-[3.25rem] sm:w-[4.25rem]",
      tilt: "rotate-[2.5deg] translate-y-1",
    },
    {
      node: <GasWaitGraphic className="h-auto w-full" />,
      width: "w-[3.25rem] sm:w-[4.25rem]",
      tilt: "rotate-[-2deg] -translate-y-1",
    },
  ],
};

export function CategoryArtifacts({ category }: { category: WorkCategoryId }) {
  return (
    <span
      aria-hidden
      className="hidden shrink-0 items-end gap-3 text-foreground/25 transition-colors duration-500 ease-out group-hover:text-foreground/55 sm:flex sm:gap-4"
    >
      {artifacts[category].map((artifact, index) => (
        <span
          key={index}
          className={cn(
            "block transition-transform duration-500 ease-out group-hover:-translate-y-1",
            artifact.width,
            artifact.tilt
          )}
          style={{ transitionDelay: `${index * 45}ms` }}
        >
          {artifact.node}
        </span>
      ))}
    </span>
  );
}
