import { useEffect, useRef, useState, useCallback } from "react";
import { Camera, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

const exemplesVideos = [
  { url: "https://www.youtube.com/embed/jtxqj3Mm4WM?rel=0&modestbranding=1", title: "Pergola 4 Saisons | Agendac Exemple", isShort: true },
  { url: "https://www.youtube.com/embed/aDHl-oZJ-Uk?rel=0&modestbranding=1", title: "La Boutique du Menuisier 72 | Agendac Exemple", isShort: true },
  { url: "https://www.youtube.com/embed/MDHWvOjH0Ac?rel=0&modestbranding=1", title: "Interview client | Exemple Agendac", isShort: true },
  { url: "https://www.youtube.com/embed/keR0F0VJNsk?rel=0&modestbranding=1", title: "ESF | Exemple Agendac", isShort: false },
  { url: "https://www.youtube.com/embed/hJmqIx0JmM8?rel=0&modestbranding=1", title: "Solaire 2F | Exemple Agendac", isShort: true },
  { url: "https://www.youtube.com/embed/48gviholwLc?rel=0&modestbranding=1", title: "Maisolia | Exemple Agendac", isShort: true },
];

interface ExemplesTournageProps {
  ctaMode?: "tournage" | "contact";
}

const ExemplesTournage = ({ ctaMode = "tournage" }: ExemplesTournageProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    setCanScrollLeft(slider.scrollLeft > 5);
    setCanScrollRight(slider.scrollLeft < slider.scrollWidth - slider.offsetWidth - 5);
  }, []);

  // Infinite auto-scroll: render 3x videos, reset to middle set seamlessly
  const totalVideos = exemplesVideos.length;
  const infiniteVideos = [...exemplesVideos, ...exemplesVideos, ...exemplesVideos];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Start at the beginning of the middle copy
    const slides = slider.querySelectorAll(".shorts-slide");
    if (slides.length > 0) {
      const slideWidth = (slides[0] as HTMLElement).offsetWidth + 20;
      slider.scrollLeft = slideWidth * totalVideos;
    }

    const startAutoScroll = () => {
      if (autoScrollRef.current) return;
      autoScrollRef.current = window.setInterval(() => {
        if (!slider) return;
        const slides = slider.querySelectorAll(".shorts-slide");
        if (slides.length === 0) return;
        const slideWidth = (slides[0] as HTMLElement).offsetWidth + 20;
        const oneSetWidth = slideWidth * totalVideos;

        slider.scrollLeft += 1.5;

        // If we've scrolled past the middle+end set, jump back to middle
        if (slider.scrollLeft >= oneSetWidth * 2) {
          slider.scrollLeft -= oneSetWidth;
        }
        // If somehow scrolled before start of middle, jump forward
        if (slider.scrollLeft < oneSetWidth * 0.1) {
          slider.scrollLeft += oneSetWidth;
        }
      }, 20);
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };

    if (!isHovered) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => stopAutoScroll();
  }, [isHovered, totalVideos]);

  // Pagination bar
  useEffect(() => {
    const slider = sliderRef.current;
    const bar = barRef.current;
    if (!slider || !bar) return;

    const updatePaginationBar = () => {
      const slides = slider.querySelectorAll(".exemple-slide");
      if (slides.length === 0) return;
      const slideCount = slides.length;
      const slideWidth = (slides[0] as HTMLElement).offsetWidth + 20;
      const visibleCount = Math.round(slider.offsetWidth / slideWidth);
      const firstVisibleIndex = Math.round(slider.scrollLeft / slideWidth);
      bar.style.width = `${(visibleCount / slideCount) * 100}%`;
      bar.style.left = `${(firstVisibleIndex / slideCount) * 100}%`;
      updateScrollState();
    };

    updatePaginationBar();
    slider.addEventListener("scroll", updatePaginationBar);
    window.addEventListener("resize", updatePaginationBar);
    return () => {
      slider.removeEventListener("scroll", updatePaginationBar);
      window.removeEventListener("resize", updatePaginationBar);
    };
  }, [updateScrollState]);

  const scrollBy = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;
    const slideEl = slider.querySelector(".shorts-slide") as HTMLElement | null;
    const amount = slideEl ? slideEl.offsetWidth + 20 : 300;
    slider.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const footer = document.getElementById("contact");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="exemples-tournage" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Camera size={16} className="text-secondary" />
              <span className="text-sm font-medium text-foreground/80">Nos réalisations</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Exemples de tournages{" "}
              <span className="text-gradient-warm">réalisés par Agendac</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Découvrez des exemples concrets de vidéos produites pour nos partenaires.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4} direction="up">
          <div
            className="max-w-6xl mx-auto relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Left arrow */}
            <button
              onClick={() => scrollBy("left")}
              className={`slider-arrow slider-arrow-left ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right arrow */}
            <button
              onClick={() => scrollBy("right")}
              className={`slider-arrow slider-arrow-right ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div ref={sliderRef} className="shorts-slider">
              {exemplesVideos.map((video, index) => (
                <div key={index} className="shorts-slide" style={!video.isShort ? { aspectRatio: "16/9", minWidth: "320px" } : undefined}>
                  <iframe src={video.url} loading="lazy" allowFullScreen title={video.title} />
                </div>
              ))}
            </div>

            <div className="pagination-wrapper">
              <div ref={barRef} className="pagination-bar" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="flex justify-center mt-10">
            {ctaMode === "tournage" ? (
              <Button asChild variant="secondary" size="lg" className="group glow-secondary">
                <a href="/tournage" className="flex items-center gap-2">
                  Découvrir notre service de tournage professionnel
                  <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
                </a>
              </Button>
            ) : (
              <Button onClick={scrollToContact} variant="secondary" size="lg" className="group glow-secondary">
                Entrer en contact
                <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
              </Button>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExemplesTournage;
