import Link from "next/link";
import { GasWaitGraphic, LinesGraphic, PawsGraphic, ProtoLabGraphic } from "@/components/projects/teaser-graphics";

export function HeroArtifacts() {
  return (
    <div className="relative h-full min-h-[30rem] w-full">
      <ArtifactLink
        href="/projects/thurs"
        name="thurs"
        className="top-[0%] left-[2%] w-[6.5rem]"
        tilt="rotate-[1deg]"
      >
        <ThursArtifact />
      </ArtifactLink>

      <ArtifactLink
        href="/projects/mapspg"
        name="MapsPG"
        className="top-[6%] right-[0%] w-[8.25rem]"
        tilt="rotate-[-3.5deg]"
      >
        <MapsArtifact />
      </ArtifactLink>

      <ArtifactLink
        href="/projects/gas-wait"
        name="Gas Wait"
        className="top-[40%] left-[0%] w-[6.75rem]"
        tilt="rotate-[-1.5deg]"
      >
        <GasWaitGraphic className="h-auto w-full" />
      </ArtifactLink>

      <ArtifactLink
        name="Proto-Lab"
        className="top-[22%] left-[34%] w-[7.25rem]"
        tilt="rotate-[2deg]"
      >
        <ProtoLabGraphic className="h-auto w-full" />
      </ArtifactLink>

      <ArtifactLink
        href="/projects/07"
        name="Project 7 · Fall 2026"
        className="top-[44%] right-[2%] w-[6.25rem]"
        tilt="rotate-[1.5deg]"
      >
        <LinesGraphic className="h-auto w-full" />
      </ArtifactLink>

      <ArtifactLink
        href="/projects/hoop-predict"
        name="Hoop Predict"
        className="bottom-[2%] left-[10%] w-[7.25rem]"
        tilt="rotate-[2.5deg]"
      >
        <HoopArtifact />
      </ArtifactLink>

      <ArtifactLink
        href="/projects/sesame"
        name="Sesame's Adventure"
        className="right-[0%] bottom-[0%] w-[6.5rem]"
        tilt="rotate-[-2deg]"
      >
        <PawsGraphic className="h-auto w-full" />
      </ArtifactLink>
    </div>
  );
}

function ArtifactLink({
  href,
  name,
  className,
  tilt,
  children,
}: {
  href?: string;
  name: string;
  className: string;
  tilt: string;
  children: React.ReactNode;
}) {
  const inner = (
    <span className={`block ${tilt}`}>
      {children}
      <span className="hero-artifact-label mt-1.5 block whitespace-nowrap text-[0.65rem] tracking-[0.16em]">
        {name}
      </span>
    </span>
  );

  if (!href) {
    return (
      <div
        className={`hero-artifact pointer-events-none absolute ${className} text-foreground/45`}
      >
        {inner}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={`hero-artifact group absolute ${className} text-foreground/45`}
    >
      {inner}
    </Link>
  );
}

export function MapsArtifact() {
  return (
    <svg viewBox="0 0 160 92" className="h-auto w-full" fill="none">
      <path
        d="M8 18c18-10 34 6 52 2 16-3 22-14 40-12 14 2 28 11 50 6"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <path
        d="M14 70c12 8 30-4 46 2 18 6 24 14 44 8 16-5 28-2 42 6"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <path
        d="M36 8v76M78 6v80M118 12v68M6 36h148M10 58h140"
        stroke="currentColor"
        strokeWidth="0.45"
        className="text-foreground/35"
      />
      <path
        d="M22 64C40 48 58 54 74 38c12-12 28-8 46-22"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <circle cx="22" cy="64" r="2.1" fill="currentColor" />
      <circle cx="120" cy="16" r="2.1" fill="currentColor" />
      <text x="124" y="78" className="fill-current font-heading" fontSize="11">
        $8.42
      </text>
    </svg>
  );
}

export function HoopArtifact() {
  return (
    <svg viewBox="0 0 130 88" className="h-auto w-full" fill="none">
      <path
        d="M18 70 38 48 56 54 78 28 102 36"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 74h86"
        stroke="currentColor"
        strokeWidth="0.55"
        className="text-foreground/40"
      />
      <circle cx="38" cy="48" r="1.7" fill="currentColor" />
      <circle cx="78" cy="28" r="1.7" fill="currentColor" />
      <circle cx="70" cy="16" r="9.5" stroke="currentColor" strokeWidth="0.7" />
      <path d="M64 16h12M70 10v12" stroke="currentColor" strokeWidth="0.55" />
      <text x="18" y="14" className="fill-current font-heading" fontSize="10">
        4.18
      </text>
      <text x="96" y="58" className="fill-current font-heading" fontSize="9">
        .57
      </text>
    </svg>
  );
}

export function ThursArtifact() {
  return (
    <svg viewBox="0 0 124 86" className="h-auto w-full" fill="none">
      <path d="M10 16h104v56H10z" stroke="currentColor" strokeWidth="0.9" />
      <path d="M10 26h104" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="18" cy="21" r="1.3" fill="currentColor" />
      <circle cx="24.5" cy="21" r="1.3" fill="currentColor" />
      <circle cx="31" cy="21" r="1.3" fill="currentColor" />
      <path
        d="M22 38h38"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <path
        d="M22 46h24"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <path d="M68 40h28v18H68z" stroke="currentColor" strokeWidth="0.75" />
      <path
        d="M74 47h16M74 53h10"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

