import Link from "next/link";
import { site } from "@/data/site";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/work", label: "Work", forward: true },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 bg-background"
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="pointer-events-auto font-heading text-[0.95rem] tracking-tight text-foreground transition-opacity hover:opacity-55"
        >
          {site.name}
        </Link>
        <nav
          aria-label="Primary"
          className="pointer-events-auto flex items-center gap-5 text-sm text-muted-foreground sm:gap-7"
        >
          {nav.map((item) =>
            item.forward ? (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            )
          )}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
