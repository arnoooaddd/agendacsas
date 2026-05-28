import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  progress: number;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

/**
 * Mobile-only carousel controls: prev arrow, progress bar, next arrow.
 * Colors use Agendac blue (#0074D4).
 */
const MobileCarouselControls = ({ progress, onPrev, onNext, className = "" }: Props) => (
  <div className={`md:hidden mt-4 flex items-center gap-3 px-4 ${className}`}>
    <button
      type="button"
      aria-label="Précédent"
      onClick={onPrev}
      className="shrink-0 w-10 h-10 rounded-full text-white shadow-md flex items-center justify-center active:scale-95 transition"
      style={{ backgroundColor: "#0074D4" }}
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
    <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
      <div
        className="h-full rounded-full transition-[width] duration-300"
        style={{ width: `${Math.max(8, progress * 100)}%`, backgroundColor: "#0074D4" }}
      />
    </div>
    <button
      type="button"
      aria-label="Suivant"
      onClick={onNext}
      className="shrink-0 w-10 h-10 rounded-full text-white shadow-md flex items-center justify-center active:scale-95 transition"
      style={{ backgroundColor: "#0074D4" }}
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  </div>
);

export default MobileCarouselControls;