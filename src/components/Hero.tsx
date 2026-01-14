import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useEffect } from "react";
import FloatingCalendars from "./FloatingCalendars";

const Hero = () => {
  useEffect(() => {
    // Load Elfsight script
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
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPresentation = () => {
    const video = document.getElementById("vsl-video");
    if (video) {
      video.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-background">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 gradient-mesh opacity-100" />
      
      {/* Animated orbs - light version */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl animate-pulse-soft" />

      {/* Floating Calendar Elements */}
      <FloatingCalendars />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 border-gradient animate-bounce-soft">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground/90">
                Agence N°1 de la rénovation de l'habitat
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            L'accélérateur de croissance{" "}
            <span className="text-gradient">N°1</span>
            <br />
            des sociétés de{" "}
            <span className="text-gradient-warm">rénovation de l'habitat</span>
          </h1>

          {/* Subtitle */}
          <p className="text-center text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Des leads 100% exclusifs livrés directement dans votre agenda. Générez des rendez-vous qualifiés en automatique.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              onClick={scrollToContact}
              variant="secondary" 
              size="xl" 
              className="group glow-secondary"
            >
              Entrer en contact
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToPresentation}
              variant="outline" 
              size="xl" 
              className="group bg-white/50 hover:bg-white/80 border-border text-foreground"
            >
              <Play size={18} className="mr-1 text-primary" />
              Voir la présentation
            </Button>
          </div>

          {/* VSL Video */}
          <div 
            id="vsl-video"
            className="max-w-4xl mx-auto animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="glass-card p-2 border-gradient glow-primary">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-white shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/-JicDnVRJzU?rel=0&modestbranding=1"
                  title="Présentation Agendac"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2 text-muted-foreground glass-card px-4 py-2 animate-bounce-soft" style={{ animationDelay: "0s" }}>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm">+200 partenaires accompagnés</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground glass-card px-4 py-2 animate-bounce-soft" style={{ animationDelay: "0.2s" }}>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm">Google Partner</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground glass-card px-4 py-2 animate-bounce-soft" style={{ animationDelay: "0.4s" }}>
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm">Meta Business Partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;