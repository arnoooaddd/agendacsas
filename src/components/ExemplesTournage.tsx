import { useEffect, useRef } from "react";
import { Camera } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const exemplesVideos = [
  { url: "https://www.youtube.com/embed/jtxqj3Mm4WM?rel=0&modestbranding=1", title: "Pergola 4 Saisons | Agendac Exemple", isShort: true },
  { url: "https://www.youtube.com/embed/aDHl-oZJ-Uk?rel=0&modestbranding=1", title: "La Boutique du Menuisier 72 | Agendac Exemple", isShort: true },
  { url: "https://www.youtube.com/embed/QAXqDLf75I4?rel=0&modestbranding=1", title: "Interview client | Exemple Agendac", isShort: false },
  { url: "https://www.youtube.com/embed/48gviholwLc?rel=0&modestbranding=1", title: "Maisolia | Exemple Agendac", isShort: true },
];

const ExemplesTournage = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

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
    };

    updatePaginationBar();
    slider.addEventListener("scroll", updatePaginationBar);
    window.addEventListener("resize", updatePaginationBar);
    return () => {
      slider.removeEventListener("scroll", updatePaginationBar);
      window.removeEventListener("resize", updatePaginationBar);
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-muted/30">
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
          <div className="max-w-6xl mx-auto">
            <div ref={sliderRef} className="shorts-slider">
              {exemplesVideos.map((video, index) => (
                <div key={index} className={video.isShort ? "shorts-slide" : "shorts-slide"} style={!video.isShort ? { aspectRatio: "16/9", minWidth: "320px" } : undefined}>
                  <iframe src={video.url} loading="lazy" allowFullScreen title={video.title} />
                </div>
              ))}
            </div>

            <div className="pagination-wrapper">
              <div ref={barRef} className="pagination-bar" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExemplesTournage;
