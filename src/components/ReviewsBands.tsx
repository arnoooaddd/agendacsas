import { Star, ExternalLink } from "lucide-react";
import { googleReviews, type GoogleReview } from "@/data/googleReviews";
import { useMobileAutoCarousel } from "@/hooks/useMobileAutoCarousel";
import MobileCarouselControls from "./MobileCarouselControls";

const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/TNdbPMnYo7pMY9e18";

const ReviewCard = ({ review }: { review: GoogleReview }) => (
  <article className="reviews-band-card glass-card border-gradient bg-white/90 p-5 flex flex-col gap-3 shadow-sm h-full">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
        {review.initials}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-foreground truncate">{review.author}</p>
        {review.company && (
          <p className="text-xs text-muted-foreground truncate">{review.company}</p>
        )}
      </div>
      <img
        src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
        alt="Google"
        className="w-5 h-5 flex-shrink-0"
        loading="lazy"
      />
    </div>
    <div className="flex items-center gap-1">
      {Array.from({ length: review.rating }).map((_, i) => (
        <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
      ))}
      {review.date && (
        <span className="text-xs text-muted-foreground ml-2">{review.date}</span>
      )}
    </div>
    <p className="text-sm text-foreground/85 leading-relaxed line-clamp-5">{review.text}</p>
  </article>
);

/* ── Desktop: infinite scrolling bands ─────────────────────────── */
const DesktopBand = ({ reviews, reverse = false }: { reviews: GoogleReview[]; reverse?: boolean }) => {
  const items = [...reviews, ...reviews];
  return (
    <div className="reviews-band-wrapper">
      <div className={`reviews-band-track ${reverse ? "reverse" : ""}`}>
        {items.map((r, i) => (
          <ReviewCard key={`${r.author}-${i}`} review={r} />
        ))}
      </div>
    </div>
  );
};

/**
 * Compact two-band scrolling Google reviews — for embedding inside an existing
 * section with its own heading.
 */
const ReviewsBands = ({ showLink = true }: { showLink?: boolean }) => {
  const half = Math.ceil(googleReviews.length / 2);
  const ensure = (arr: GoogleReview[]) =>
    arr.length >= 5 ? arr : arr.concat(googleReviews).slice(0, Math.max(arr.length, 5));
  const band1 = ensure(googleReviews.slice(0, half));
  const band2 = ensure(googleReviews.slice(half));

  /* Mobile: single slide carousel */
  const { wrapperRef, progress, scrollByDir } = useMobileAutoCarousel<HTMLDivElement>({
    itemSelector: ".reviews-slide-card",
    intervalMs: 4000,
    pauseAfterInteractionMs: 8000,
  });

  return (
    <div className="space-y-3">
      {/* Desktop */}
      <div className="hidden md:block space-y-3">
        <DesktopBand reviews={band1} />
        <DesktopBand reviews={band2} reverse />
      </div>

      {/* Mobile: one card at a time */}
      <div className="md:hidden">
        <div ref={wrapperRef} className="reviews-slider-wrapper">
          <div className="reviews-slider-track">
            {googleReviews.map((review, i) => (
              <div key={`mobile-${review.author}-${i}`} className="reviews-slide-card">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
        <MobileCarouselControls
          progress={progress}
          onPrev={() => scrollByDir(-1)}
          onNext={() => scrollByDir(1)}
        />
      </div>

      {showLink && (
        <div className="flex justify-center pt-2">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ExternalLink size={14} />
            Voir tous les avis Google
          </a>
        </div>
      )}
    </div>
  );
};

export default ReviewsBands;
