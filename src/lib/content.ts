import type { OptionalUrl } from "@/data/types";
import { site } from "@/data/site";

export function isFilledUrl(url: OptionalUrl | undefined): url is string {
  return typeof url === "string" && url.length > 0;
}

export function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function sesameDemoMailto() {
  const subject = "Sesame's Adventure | Demo Request";
  const body = "Hi Samiel,\n\nI'd love to see a demo of Sesame's Adventure.\n\nThanks!";

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
