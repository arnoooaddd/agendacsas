import { useEffect, useRef } from "react";
import { Video, Lightbulb } from "lucide-react";
import SectionCTA from "./SectionCTA";

const shortsVideos = [
  "https://www.youtube.com/embed/Y68enwjao4k?rel=0&modestbranding=1",
  "https://www.youtube.com/embed/JjjtvUlBqOg?rel=0&modestbranding=1",
  "https://www.youtube.com/embed/aPxxveSQpOs?rel=0&modestbranding=1",
  "https://www.youtube.com/embed/vXolQuDhVWY?rel=0&modestbranding=1",
  "https://www.youtube.com/embed/rl1F0jPImIE?rel=0&modestbranding=1",
  "https://www.youtube.com/embed/P1NE-6dauMQ?rel=0&modestbranding=1",
  "https://www.youtube.com/embed/j4C8xgYMfdE?rel=0&modestbranding=1",
  "https://www.youtube.com/embed/GNq_1jMdJgE?rel=0&modestbranding=1",
];

const YouTubeShorts = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const bar = barRef.current;

    if (!slider || !bar) return;

    const updatePaginationBar = () => {
      const slides = slider.querySelectorAll(".shorts-slide");
      if (slides.length === 0) return;
      
      const slideCount = slides.length;
      const slideWidth = (slides[0] as HTMLElement).offsetWidth + 20;
      const visibleCount = Math.round(slider.offsetWidth / slideWidth);
      const firstVisibleIndex = Math.round(slider.scrollLeft / slideWidth);

      const barWidthPercent = (visibleCount / slideCount) * 100;
      const barLeftPercent = (firstVisibleIndex / slideCount) * 100;

      bar.style.width = `${barWidthPercent}%`;
      bar.style.left = `${barLeftPercent}%`;
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
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 animate-slide-up">
            <Lightbulb size={16} className="text-secondary" />
            <span className="text-sm font-medium text-foreground/80">
              Nos astuces en vidéo
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Conseils{" "}
            <span className="text-gradient-warm">gratuits</span>
          </h2>
          <p className="text-muted-foreground text-lg animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Découvrez nos conseils pour optimiser votre acquisition client.
          </p>
        </div>

        {/* Shorts Slider */}
        <div className="max-w-6xl mx-auto">
          <div ref={sliderRef} className="shorts-slider">
            {shortsVideos.map((url, index) => (
              <div 
                key={index} 
                className="shorts-slide animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <iframe
                  src={url}
                  allowFullScreen
                  title={`YouTube Short ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="pagination-wrapper">
            <div ref={barRef} className="pagination-bar" />
          </div>
        </div>

        <SectionCTA className="mt-16" />
      </div>
    </section>
  );
};

export default YouTubeShorts;