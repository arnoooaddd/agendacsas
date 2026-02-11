import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Star } from "lucide-react";
import { useEffect } from "react";
import FloatingCalendars from "./FloatingCalendars";

const Hero = () => {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const scrollToContact = () => {
    const footer = document.getElementById("contact");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPresentation = () => {
    const video = document.getElementById("vsl-video");
    if (video) video.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-16 sm:pt-24 pb-8 sm:pb-16 overflow-hidden bg-background">
      <div className="absolute inset-0 gradient-mesh opacity-100" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "3s" }} />

      <FloatingCalendars />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-4 sm:mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 glass-card px-4 sm:px-5 py-2 sm:py-2.5 border-gradient">
              <Sparkles size={14} className="text-primary sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium text-foreground/90">N°1 en France, Suisse et Belgique</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-center text-[2rem] sm:text-5xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-[1.1] tracking-tight animate-slide-up" style={{ animationDelay: "0.2s" }}>
            L'accélérateur de croissance{" "}
            <span className="text-gradient">N°1</span>
            <br />
            des sociétés de{" "}
            <span className="text-gradient-warm">rénovation de l'habitat</span>
          </h1>

          {/* Subtitle */}
          <p className="text-center text-sm sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-10 max-w-3xl mx-auto px-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Nous accompagnons les entreprises réalisant plus de 1 000 000 € de CA annuel à bâtir une présence digitale solide et à générer une croissance prévisible et durable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button onClick={scrollToContact} variant="secondary" size="lg" className="group glow-secondary text-sm sm:text-base hover:scale-105 transition-transform">
              Entrer en contact
              <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
            </Button>
            <Button onClick={scrollToPresentation} variant="outline" size="lg" className="hidden sm:flex group bg-white/50 hover:bg-white/80 border-border text-foreground text-sm sm:text-base">
              <Play size={16} className="mr-1 text-primary" />
              Voir la présentation
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 mb-8 sm:mb-16 animate-scale-in" style={{ animationDelay: "0.5s" }}>
            <div className="glass-card px-3 sm:px-5 py-2 sm:py-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-gradient">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-500 text-yellow-500 sm:w-4 sm:h-4" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium text-foreground">4.9/5 sur Google</span>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <span className="text-xs sm:text-sm text-muted-foreground">+60 confrères accompagnés</span>
            </div>
          </div>

          {/* VSL Video */}
          <div id="vsl-video" className="max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <div className="glass-card p-2 border-gradient glow-primary">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-white shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/-JicDnVRJzU?rel=0&modestbranding=1"
                  title="Présentation Agendac"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
