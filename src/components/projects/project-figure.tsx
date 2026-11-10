import Image from "next/image";
import type { Project } from "@/data/types";

export function ProjectFigure({ project }: { project: Project }) {
  const { figure } = project;

  return (
    <figure aria-label={figure.alt}>
      {figure.src ? (
        <Image
          src={figure.src}
          alt={figure.alt}
          width={760}
          height={1088}
          sizes="(min-width: 1024px) 38vw, 80vw"
          className="mx-auto h-auto w-full max-h-[22rem] object-contain object-top lg:max-h-[calc(100svh-9.5rem)]"
          priority
        />
      ) : (
        <div className="border border-foreground/12">
          <ProjectIllustration slug={project.slug} name={project.name} />
        </div>
      )}
      {figure.caption ? (
        <figcaption className="mt-4 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
          {figure.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ProjectIllustration({
  slug,
  name,
}: {
  slug: string;
  name: string;
}) {
  if (slug === "gas-wait") {
    return <GasWaitFigure />;
  }

  if (slug === "sesame") {
    return <SesameFigure />;
  }

  if (slug === "mapspg") {
    return <MapsFigure />;
  }

  if (slug === "thurs") {
    return <ThursFigure />;
  }

  if (slug === "hoop-predict") {
    return <HoopFigure />;
  }

  if (slug === "proto-lab") {
    return <ProtoLabFigure />;
  }

  return (
    <div className="flex aspect-[4/5] items-end px-6 py-5">
      <p className="font-heading text-2xl tracking-tight text-foreground/70 italic">
        {name}
      </p>
    </div>
  );
}

function GasWaitFigure() {
  return (
    <svg
      viewBox="0 0 280 340"
      className="h-auto w-full text-foreground/50"
      fill="none"
      aria-hidden
    >
      <path
        d="M36 170h88"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M124 170 214 88"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
      />
      <path
        d="M124 170 214 252"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
      />
      <text
        x="222"
        y="94"
        className="fill-current font-heading text-foreground/80"
        fontSize="18"
      >
        FILL
      </text>
      <text
        x="222"
        y="258"
        className="fill-current font-heading text-foreground/80"
        fontSize="18"
      >
        WAIT
      </text>
    </svg>
  );
}

function SesameFigure() {
  return (
    <svg
      viewBox="0 0 280 340"
      className="h-auto w-full text-foreground/50"
      fill="none"
      aria-hidden
    >
      <circle
        cx="140"
        cy="158"
        r="108"
        stroke="currentColor"
        strokeWidth="0.45"
        className="text-foreground/22"
      />
      <circle
        cx="140"
        cy="158"
        r="68"
        stroke="currentColor"
        strokeWidth="0.55"
        className="text-foreground/32"
      />
      <circle
        cx="140"
        cy="158"
        r="28"
        stroke="currentColor"
        strokeWidth="0.7"
      />
      <circle cx="196" cy="112" r="2.2" fill="currentColor" />
      <circle cx="92" cy="198" r="2.2" fill="currentColor" />
      <circle cx="204" cy="186" r="1.7" fill="currentColor" />
      <circle cx="78" cy="118" r="1.7" fill="currentColor" />
      <g fill="currentColor" transform="translate(140 158) rotate(-8)">
        <ellipse cx="0" cy="7.4" rx="6.4" ry="5" />
        <ellipse cx="-7.1" cy="0.2" rx="2.4" ry="3.2" />
        <ellipse cx="-2.3" cy="-2.5" rx="2.3" ry="3.3" />
        <ellipse cx="2.4" cy="-2.5" rx="2.3" ry="3.3" />
        <ellipse cx="7.1" cy="0.2" rx="2.4" ry="3.2" />
      </g>
    </svg>
  );
}

function MapsFigure() {
  return (
    <svg
      viewBox="0 0 280 340"
      className="h-auto w-full text-foreground/50"
      fill="none"
      aria-hidden
    >
      <path
        d="M36 48v244M88 48v244M140 48v244M192 48v244M244 48v244"
        stroke="currentColor"
        strokeWidth="0.45"
        className="text-foreground/22"
      />
      <path
        d="M24 72h232M24 124h232M24 176h232M24 228h232M24 280h232"
        stroke="currentColor"
        strokeWidth="0.45"
        className="text-foreground/22"
      />
      <path
        d="M48 268C78 248 92 214 118 188c22-22 40-18 62-44 18-22 38-36 72-48"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        className="text-foreground/28"
      />
      <path
        d="M48 268C86 230 104 200 128 168c20-26 48-22 74-52 16-18 32-28 58-34"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="48" cy="268" r="3.2" fill="currentColor" />
      <path
        d="M260 78c0-8.4-6.8-15.2-15.2-15.2S229.6 69.6 229.6 78c0 11.2 15.2 22 15.2 22s15.2-10.8 15.2-22z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <circle cx="244.8" cy="77" r="3.4" fill="currentColor" />
      <text
        x="24"
        y="318"
        className="fill-current font-heading text-foreground/80"
        fontSize="28"
      >
        $8.42
      </text>
    </svg>
  );
}

function ThursFigure() {
  return (
    <svg
      viewBox="0 0 280 340"
      className="h-auto w-full text-foreground/50"
      fill="none"
      aria-hidden
    >
      <rect
        x="18"
        y="22"
        width="244"
        height="196"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path d="M18 44h244" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="32" cy="33" r="2.2" fill="currentColor" />
      <circle cx="42" cy="33" r="2.2" fill="currentColor" />
      <circle cx="52" cy="33" r="2.2" fill="currentColor" />
      <path
        d="M36 64h92M36 78h128M36 92h110M36 106h74"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        className="text-foreground/35"
      />
      <rect
        x="48"
        y="122"
        width="132"
        height="72"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeDasharray="3 2.5"
      />
      <path
        d="M62 142h88M62 156h64"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <rect
        x="148"
        y="208"
        width="114"
        height="108"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path d="M148 226h114" stroke="currentColor" strokeWidth="0.7" />
      <path
        d="M160 244h72M160 256h48"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <rect
        x="160"
        y="272"
        width="90"
        height="28"
        stroke="currentColor"
        strokeWidth="0.7"
      />
      <path
        d="M168 286h52"
        stroke="currentColor"
        strokeWidth="0.65"
        strokeLinecap="round"
        className="text-foreground/40"
      />
    </svg>
  );
}

function HoopFigure() {
  return (
    <svg
      viewBox="0 0 280 340"
      className="h-auto w-full text-foreground/50"
      fill="none"
      aria-hidden
    >
      <text
        x="18"
        y="48"
        className="fill-current font-heading text-foreground/80"
        fontSize="36"
      >
        4.18
      </text>
      <text
        x="20"
        y="68"
        className="fill-current"
        fontSize="9"
        letterSpacing="0.16em"
      >
        MAE
      </text>
      <circle
        cx="232"
        cy="42"
        r="16"
        stroke="currentColor"
        strokeWidth="0.85"
      />
      <path d="M216 42h32M232 26v32" stroke="currentColor" strokeWidth="0.55" />
      <path
        d="M28 268h224"
        stroke="currentColor"
        strokeWidth="0.55"
        className="text-foreground/30"
      />
      <path
        d="M28 132v136"
        stroke="currentColor"
        strokeWidth="0.55"
        className="text-foreground/30"
      />
      <path
        d="M28 232 72 206 108 214 152 168 188 178 236 142"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 246 72 228 108 232 152 198 188 204 236 176"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground/28"
      />
      <circle cx="72" cy="206" r="2.2" fill="currentColor" />
      <circle cx="152" cy="168" r="2.2" fill="currentColor" />
      <circle cx="236" cy="142" r="2.2" fill="currentColor" />
      <text
        x="196"
        y="308"
        className="fill-current font-heading text-foreground/80"
        fontSize="28"
      >
        .57
      </text>
      <text
        x="198"
        y="326"
        className="fill-current"
        fontSize="9"
        letterSpacing="0.16em"
      >
        R²
      </text>
    </svg>
  );
}

function ProtoLabFigure() {
  return (
    <svg
      viewBox="0 0 280 340"
      className="h-auto w-full text-foreground/50"
      fill="none"
      aria-hidden
    >
      <path
        d="M44 36v268"
        stroke="currentColor"
        strokeWidth="0.55"
        className="text-foreground/28"
      />
      <circle cx="44" cy="42" r="2.2" fill="currentColor" />
      <text
        x="62"
        y="46"
        className="fill-current"
        fontSize="8"
        letterSpacing="0.16em"
      >
        PROTOCOL
      </text>
      <text x="62" y="68" className="fill-current font-heading" fontSize="16">
        Scientific protocol
      </text>
      <circle cx="44" cy="104" r="2.2" fill="currentColor" />
      <text
        x="62"
        y="100"
        className="fill-current"
        fontSize="8"
        letterSpacing="0.16em"
      >
        01  ·  MANUAL
      </text>
      <text x="62" y="118" className="fill-current font-heading" fontSize="15">
        Sample preparation
      </text>
      <circle cx="44" cy="156" r="2.2" fill="currentColor" />
      <text
        x="62"
        y="152"
        className="fill-current"
        fontSize="8"
        letterSpacing="0.16em"
      >
        02  ·  AUTOMATED
      </text>
      <text x="62" y="170" className="fill-current font-heading" fontSize="15">
        Liquid handling
      </text>
      <text
        x="62"
        y="188"
        className="fill-current text-foreground/40"
        fontSize="9"
      >
        Opentrons Python  ·  Simulation
      </text>
      <circle cx="44" cy="222" r="2.2" fill="currentColor" />
      <text
        x="62"
        y="218"
        className="fill-current"
        fontSize="8"
        letterSpacing="0.16em"
      >
        03  ·  MANUAL
      </text>
      <text x="62" y="236" className="fill-current font-heading" fontSize="15">
        Operator intervention
      </text>
      <circle cx="44" cy="272" r="2.2" fill="currentColor" />
      <text
        x="62"
        y="268"
        className="fill-current"
        fontSize="8"
        letterSpacing="0.16em"
      >
        04  ·  AUTOMATED
      </text>
      <text x="62" y="286" className="fill-current font-heading" fontSize="15">
        Continue automation
      </text>
      <circle cx="44" cy="318" r="2.2" fill="currentColor" />
      <text
        x="62"
        y="322"
        className="fill-current font-heading"
        fontSize="14"
      >
        Run history
      </text>
    </svg>
  );
}
