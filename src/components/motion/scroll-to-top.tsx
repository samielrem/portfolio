"use client";

import { useLayoutEffect } from "react";

export function ScrollToTop() {
  useLayoutEffect(() => {
    const reset = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    reset();
    const frame = requestAnimationFrame(reset);
    const later = window.setTimeout(reset, 50);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(later);
    };
  }, []);

  return null;
}
