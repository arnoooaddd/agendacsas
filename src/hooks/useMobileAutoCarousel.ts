import { useEffect, useRef, useState } from "react";

/**
 * Mobile-only auto-advancing carousel helper.
 * - Auto-scrolls horizontally every `intervalMs` (default 5s)
 * - Pauses for `pauseAfterInteractionMs` after a touch/pointer/scroll interaction
 * - Exposes a progress value [0..1] and a scrollByDir helper for arrow buttons
 * Returns refs/handlers — caller supplies the scrollable wrapper element.
 */
export function useMobileAutoCarousel<T extends HTMLElement>(opts?: {
  itemSelector?: string;
  intervalMs?: number;
  pauseAfterInteractionMs?: number;
}) {
  const itemSelector = opts?.itemSelector ?? ":scope > *";
  const intervalMs = opts?.intervalMs ?? 5000;
  const pauseMs = opts?.pauseAfterInteractionMs ?? 8000;

  const wrapperRef = useRef<T | null>(null);
  const userInteractedAtRef = useRef<number>(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    if (!window.matchMedia("(max-width: 768px)").matches) return;

    const updateProgress = () => {
      const max = wrapper.scrollWidth - wrapper.clientWidth;
      setProgress(max > 0 ? wrapper.scrollLeft / max : 0);
    };
    const mark = () => {
      userInteractedAtRef.current = Date.now();
    };

    wrapper.addEventListener("scroll", updateProgress, { passive: true });
    wrapper.addEventListener("touchstart", mark, { passive: true });
    wrapper.addEventListener("pointerdown", mark, { passive: true });
    updateProgress();

    const interval = setInterval(() => {
      const w = wrapperRef.current;
      if (!w) return;
      if (Date.now() - userInteractedAtRef.current < pauseMs) return;
      const item = w.querySelector(itemSelector) as HTMLElement | null;
      const gap = 20;
      const step = item ? item.getBoundingClientRect().width + gap : w.clientWidth * 0.8;
      const max = w.scrollWidth - w.clientWidth;
      const next = w.scrollLeft + step >= max - 4 ? 0 : w.scrollLeft + step;
      w.scrollTo({ left: next, behavior: "smooth" });
    }, intervalMs);

    return () => {
      clearInterval(interval);
      wrapper.removeEventListener("scroll", updateProgress);
      wrapper.removeEventListener("touchstart", mark);
      wrapper.removeEventListener("pointerdown", mark);
    };
  }, [itemSelector, intervalMs, pauseMs]);

  const scrollByDir = (dir: 1 | -1) => {
    const w = wrapperRef.current;
    if (!w) return;
    userInteractedAtRef.current = Date.now();
    const item = w.querySelector(itemSelector) as HTMLElement | null;
    const step = item ? item.getBoundingClientRect().width + 20 : w.clientWidth * 0.8;
    w.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return { wrapperRef, progress, scrollByDir };
}