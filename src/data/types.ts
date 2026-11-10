export type OptionalUrl = string | null;

export type Metric = {
  label: string;
  value: string;
};

export type CaseStudySection = {
  id: string;
  title: string;
  /** Written copy. Use null when the section should show a placeholder instead. */
  body: string | null;
  bullets?: string[];
  metrics?: Metric[];
  /** Quiet label/value facts under the body. */
  meta?: Metric[];
  /** Product signals, shown as an editorial list. */
  signals?: { label: string; detail: string }[];
  /** Vertical process steps. */
  pipeline?: string[];
  /** Nested protocol timeline, used when a simple pipeline is not enough. */
  workflow?: {
    kicker?: string;
    steps: {
      index?: string;
      kind?: string;
      title: string;
      attachments?: string[];
    }[];
  };
  /** Extra paragraphs after body. */
  paragraphs?: string[];
  /** Quiet product screenshots inside a section. */
  shots?: { src: string; alt: string; caption: string }[];
  /** A small worked example. */
  example?: {
    kicker: string;
    title: string;
    body: string;
    note?: string;
  };
  /** Shown when body is empty. Describes what to add in this file. */
  placeholder: string;
};

export type ProjectCategory = "product" | "modeling";

export type ProjectPreview =
  | {
      kind: "image";
      src: string;
      object?: "top" | "left" | "center";
      fit?: "cover" | "contain";
    }
  | { kind: "metrics"; kicker: string; metrics: Metric[]; note?: string }
  | { kind: "frame"; caption: string; note: string };

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  description: string;
  /** Homepage one-liner. */
  line: string;
  /** Optional extra line on the work list. */
  blurb?: string;
  /** Homepage narrative: what it is, and what you actually built. */
  story: string;
  tech: string[];
  highlights: string[];
  preview: ProjectPreview;
  /** Quiet index label, e.g. PROJECT 04. */
  kicker?: string;
  /** Optional quiet status, shown with the kicker. */
  status?: "in-development";
  /** When false, the project stays on the work list but has no case-study link. */
  clickable?: boolean;
  /** Shown under the title on the case-study hero. */
  tagline?: string;
  /** Pull quote on the case-study page. */
  philosophy?: string;
  /** Quiet callback to an earlier teaser. */
  echo?: string;
  /** Closing statement after the case-study sections. */
  closing?: {
    lead: string;
    body: string;
  };
  /** Replaces Demo when the project is private. */
  cta?: {
    label: string;
    href: string;
  };
  /** Case-study figure. Set `src` to a file in /public to replace the illustration. */
  figure: {
    src?: string;
    alt: string;
    caption?: string;
  };
  /** Omit to hide GitHub. `null` shows a disabled GitHub control. */
  githubUrl?: OptionalUrl;
  /** Omit to hide Live Demo. `null` shows a disabled Demo control. */
  liveUrl?: OptionalUrl;
  /** Optional personal note on the project page. */
  note?: {
    title: string;
    paragraphs: string[];
    /** Quieter secondary line under the note. */
    footnote?: string;
  };
  caseStudy: {
    sections: CaseStudySection[];
  };
};

export type ExperienceItem = {
  projectSlug: string;
  role: string;
  start: string;
  end: string;
  /** Optional shorter label when the project name is too long for this list. */
  label?: string;
};

