import { useEffect } from "react";

/**
 * Reusable body scroll locker for modals & lightboxes
 */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [locked]);
}

export const cardBase =
  "relative group overflow-hidden rounded-md border border-border/80 bg-card/75 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-sm";
