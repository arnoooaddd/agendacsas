import { useEffect, useRef } from "react";
import { Lightbulb, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

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
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Lightbulb size={16} className="text-secondary" />
              <span className="text-sm font-medium text-foreground/80">
                Nos astuces en vidéo
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Conseils disponibles gratuitement{" "}
              <span className="text-gradient-warm">sur notre chaîne YouTube</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground text-lg mb-8">
              Découvrez nos conseils pour optimiser votre acquisition client.
            </p>
          </AnimatedSection>
        </div>

        {/* Shorts Slider */}
        <AnimatedSection delay={0.4} direction="up">
          <div className="max-w-6xl mx-auto">
            <div ref={sliderRef} className="shorts-slider">
              {shortsVideos.map((url, index) => (
                <motion.div 
                  key={index} 
                  className="shorts-slide"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <iframe
                    src={url}
                    allowFullScreen
                    title={`YouTube Short ${index + 1}`}
                  />
                </motion.div>
              ))}
            </div>

            <div className="pagination-wrapper">
              <div ref={barRef} className="pagination-bar" />
            </div>

            {/* YouTube Button */}
            <div className="flex justify-center mt-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  size="xl" 
                  className="bg-[#FF0000] hover:bg-[#CC0000] text-white shadow-lg hover:shadow-xl"
                >
                  <a 
                    href="https://www.youtube.com/@agendac-fr/shorts" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Youtube size={24} />
                    Voir notre chaîne YouTube
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default YouTubeShorts;
