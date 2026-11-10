import type { OptionalUrl } from "@/data/types";
import { isFilledUrl } from "@/lib/content";
import { cn } from "@/lib/utils";

export function QuietLink({
  href,
  children,
  missingLabel,
  className,
}: {
  href: OptionalUrl | undefined;
  children: React.ReactNode;
  missingLabel: string;
  className?: string;
}) {
  if (!isFilledUrl(href)) {
    return (
      <span
        className={cn("text-muted-foreground/70", className)}
        title={missingLabel}
      >
        {children}
      </span>
    );
  }

  const isMail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      {...(isMail
        ? {}
        : { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "text-foreground transition-opacity hover:opacity-60",
        className
      )}
    >
      {children}
    </a>
  );
}
