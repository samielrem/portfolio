import Link from "next/link";
import { site } from "@/data/site";

export default function NotFound() {
  return (
    <main id="main" className="flex flex-1 items-center px-6 py-32 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="font-heading text-5xl tracking-tight">
          This page isn&apos;t here.
        </h1>
        <p className="mt-5 max-w-md text-muted-foreground">
          The link may be old, or the project has not been added yet.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex text-foreground transition-opacity hover:opacity-60"
        >
          ← {site.name}
        </Link>
      </div>
    </main>
  );
}
