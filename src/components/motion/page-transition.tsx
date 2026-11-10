import { ViewTransition } from "react";

const directions = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  "cat-switch": "cat-switch",
  default: "none",
} as const;

/**
 * Maps navigation intent to a directional animation. Must live in a page, not a
 * layout — layouts persist across navigation, so enter/exit never fire there.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter={directions} exit={directions} default="none">
      {children}
    </ViewTransition>
  );
}
