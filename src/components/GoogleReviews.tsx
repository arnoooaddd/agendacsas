import { Star, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { googleReviews, type GoogleReview } from "@/data/googleReviews";

const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/TNdbPMnYo7pMY9e18";

const ReviewCard = ({ review }: { review: GoogleReview }) => (
  <article className="reviews-band-card glass-card border-gradient bg-white/90 p-5 flex flex-col gap-3 shadow-sm">
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

const ReviewsBand = ({
  reviews,
  reverse = false,
}: {
  reviews: GoogleReview[];
  reverse?: boolean;
}) => {
  // Duplicate for seamless infinite loop
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

const GoogleReviews = () => {
  // Split reviews into two bands
  const half = Math.ceil(googleReviews.length / 2);
  const firstBand = googleReviews.slice(0, half);
  const secondBand = googleReviews.slice(half).concat(googleReviews.slice(0, Math.max(0, 6 - (googleReviews.length - half))));

  return (
    <section id="temoignages" className="py-20 relative overflow-hidden bg-[#DFF1FF]">
      <div className="absolute inset-0 gradient-mesh opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 bg-white/80">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-foreground/80">Avis vérifiés Google</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Ce qu'en disent{" "}
              <span className="text-gradient">vos confrères</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground text-lg">+60 entreprises déjà partenaires Agendac · 4.9/5 sur Google</p>
          </AnimatedSection>
        </div>
      </div>

      <div className="space-y-6">
        <ReviewsBand reviews={firstBand} />
        <ReviewsBand reviews={secondBand} reverse />
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-10 flex justify-center">
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
    </section>
  );
};

export default GoogleReviews;
