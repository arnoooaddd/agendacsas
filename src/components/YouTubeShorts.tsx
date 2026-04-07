import { useState } from "react";
import { Lightbulb, Youtube } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

const shortsVideos = [
  { url: "https://www.youtube.com/embed/Y_oZiyaFC-E?rel=0&modestbranding=1", title: "Conseil Agendac 1" },
  { url: "https://www.youtube.com/embed/_5y4FhPW6Xo?rel=0&modestbranding=1", title: "Conseil Agendac 2" },
  { url: "https://www.youtube.com/embed/KRqBTiVQFAc?rel=0&modestbranding=1", title: "Conseil Agendac 3" },
  { url: "https://www.youtube.com/embed/wd8pbwE7CCM?rel=0&modestbranding=1", title: "Conseil Agendac 4" },
  { url: "https://www.youtube.com/embed/7IdgZV4WGnA?rel=0&modestbranding=1", title: "Conseil Agendac 5" },
];

const YouTubeShorts = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Lightbulb size={16} className="text-secondary" />
              <span className="text-sm font-medium text-foreground/80">Nos astuces en vidéo</span>
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

        <AnimatedSection delay={0.4} direction="up">
          <div
            className="infinite-slider-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="infinite-slider-track"
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
            >
              {shortsVideos.map((video, index) => (
                <div key={`a-${index}`} className="shorts-slide">
                  <iframe src={video.url} loading="lazy" allowFullScreen title={video.title} />
                </div>
              ))}
              {shortsVideos.map((video, index) => (
                <div key={`b-${index}`} className="shorts-slide">
                  <iframe src={video.url} loading="lazy" allowFullScreen title={video.title} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              asChild 
              size="xl" 
              className="bg-[#FF0000] hover:bg-[#CC0000] text-white shadow-lg hover:shadow-xl transition-transform hover:scale-105"
            >
              <a href="https://www.youtube.com/@agendac-fr/shorts" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Youtube size={24} />
                Voir notre chaîne YouTube
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default YouTubeShorts;
