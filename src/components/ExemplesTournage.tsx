import { useEffect, useRef, useState } from "react";
import { Camera, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

const exemplesVideos = [
  { url: "https://www.youtube.com/embed/jtxqj3Mm4WM?rel=0&modestbranding=1", title: "Pergola 4 Saisons | Agendac Exemple", isShort: true },
  { url: "https://www.youtube.com/embed/lj1n0VSNT2s?rel=0&modestbranding=1", title: "Exemple Agendac", isShort: true },
  { url: "https://www.youtube.com/embed/aDHl-oZJ-Uk?rel=0&modestbranding=1", title: "La Boutique du Menuisier 72 | Agendac Exemple", isShort: true },
  { url: "https://www.youtube.com/embed/MDHWvOjH0Ac?rel=0&modestbranding=1", title: "Interview client | Exemple Agendac", isShort: true },
  { url: "https://www.youtube.com/embed/keR0F0VJNsk?rel=0&modestbranding=1", title: "ESF | Exemple Agendac", isShort: false },
  { url: "https://www.youtube.com/embed/48gviholwLc?rel=0&modestbranding=1", title: "Maisolia | Exemple Agendac", isShort: true },
  { url: "https://www.youtube.com/embed/5DVM6h5Nkaw?rel=0&modestbranding=1", title: "Exemple Agendac", isShort: true },
  { url: "https://www.youtube.com/embed/o_nC1OQoGCc?rel=0&modestbranding=1", title: "Exemple Agendac", isShort: true },
  { url: "https://www.youtube.com/embed/_nk7KDhOVlg?rel=0&modestbranding=1", title: "Exemple Agendac", isShort: true },
  { url: "https://www.youtube.com/embed/_-n1jSy-Ps4?rel=0&modestbranding=1", title: "Exemple Agendac", isShort: true },
  { url: "https://www.youtube.com/embed/LLzJBh9n21E?rel=0&modestbranding=1", title: "Exemple Agendac", isShort: true },
  { url: "https://www.youtube.com/embed/wx8sK6T6J0o?rel=0&modestbranding=1", title: "Exemple Agendac", isShort: true },
];

interface ExemplesTournageProps {
  ctaMode?: "tournage" | "contact";
}

const VideoSlide = ({ video }: { video: typeof exemplesVideos[0] }) => (
  <div
    className="shorts-slide"
    style={!video.isShort ? { aspectRatio: "16/9", minWidth: "320px" } : undefined}
  >
    <iframe src={video.url} loading="lazy" allowFullScreen title={video.title} />
  </div>
);

const ExemplesTournage = ({ ctaMode = "tournage" }: ExemplesTournageProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const userInteractedAtRef = useRef<number>(0);

  const scrollToContact = () => {
    const footer = document.getElementById("contact");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

  // Mobile: auto-advance every 5s + progress tracking
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const isMobile = () => window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile()) return;

    const updateProgress = () => {
      const max = wrapper.scrollWidth - wrapper.clientWidth;
      setProgress(max > 0 ? wrapper.scrollLeft / max : 0);
    };

    const markInteraction = () => {
      userInteractedAtRef.current = Date.now();
    };

    wrapper.addEventListener("scroll", updateProgress, { passive: true });
    wrapper.addEventListener("touchstart", markInteraction, { passive: true });
    wrapper.addEventListener("pointerdown", markInteraction, { passive: true });
    updateProgress();

    const interval = setInterval(() => {
      if (!wrapperRef.current) return;
      // Pause auto-advance 8s after a user interaction
      if (Date.now() - userInteractedAtRef.current < 8000) return;
      const w = wrapperRef.current;
      const slide = w.querySelector(".shorts-slide") as HTMLElement | null;
      const step = slide ? slide.getBoundingClientRect().width + 20 : w.clientWidth * 0.8;
      const max = w.scrollWidth - w.clientWidth;
      const nextLeft = w.scrollLeft + step >= max - 4 ? 0 : w.scrollLeft + step;
      w.scrollTo({ left: nextLeft, behavior: "smooth" });
    }, 5000);

    return () => {
      clearInterval(interval);
      wrapper.removeEventListener("scroll", updateProgress);
      wrapper.removeEventListener("touchstart", markInteraction);
      wrapper.removeEventListener("pointerdown", markInteraction);
    };
  }, []);

  const scrollByDir = (dir: 1 | -1) => {
    const w = wrapperRef.current;
    if (!w) return;
    userInteractedAtRef.current = Date.now();
    const slide = w.querySelector(".shorts-slide") as HTMLElement | null;
    const step = slide ? slide.getBoundingClientRect().width + 20 : w.clientWidth * 0.8;
    w.scrollBy({ left: dir * step, behavior: "smooth" });
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
          <p className="md:hidden text-center text-xs text-muted-foreground mb-3">
            👆 Cliquez sur une vidéo pour la lancer · swipez pour faire défiler
          </p>
          <div className="relative">
            <div
              ref={wrapperRef}
              className="infinite-slider-wrapper"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
            <div
              className="infinite-slider-track"
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
            >
              {/* First set */}
              {exemplesVideos.map((video, index) => (
                <VideoSlide key={`a-${index}`} video={video} />
              ))}
              {/* Duplicate for seamless loop */}
              {exemplesVideos.map((video, index) => (
                <VideoSlide key={`b-${index}`} video={video} />
              ))}
            </div>
            </div>

            {/* Mobile controls: arrows + progress bar */}
            <div className="md:hidden mt-4 flex items-center gap-3 px-4">
              <button
                type="button"
                aria-label="Vidéo précédente"
                onClick={() => scrollByDir(-1)}
                className="shrink-0 w-10 h-10 rounded-full bg-secondary text-secondary-foreground shadow-md flex items-center justify-center active:scale-95 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-secondary rounded-full transition-[width] duration-300"
                  style={{ width: `${Math.max(8, progress * 100)}%` }}
                />
              </div>
              <button
                type="button"
                aria-label="Vidéo suivante"
                onClick={() => scrollByDir(1)}
                className="shrink-0 w-10 h-10 rounded-full bg-secondary text-secondary-foreground shadow-md flex items-center justify-center active:scale-95 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="flex justify-center mt-10">
            {ctaMode === "tournage" ? (
              <Button asChild variant="secondary" size="lg" className="group glow-secondary max-w-full">
                <a href="/tournage" className="flex items-center gap-2 whitespace-normal text-center text-sm sm:text-base px-4 sm:px-8">
                  <span className="sm:hidden">Découvrir notre service tournage</span>
                  <span className="hidden sm:inline">Découvrir notre service de tournage professionnel</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 shrink-0" />
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
