import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Star } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
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
    <section id="hero" className="relative min-h-screen pt-16 sm:pt-24 pb-8 sm:pb-16 overflow-hidden bg-background">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 gradient-mesh opacity-100" />
      
      {/* Animated orbs - light version */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-accent/8 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" 
      />

      {/* Floating Calendar Elements */}
      <FloatingCalendars />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-4 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 glass-card px-4 sm:px-5 py-2 sm:py-2.5 border-gradient">
              <Sparkles size={14} className="text-primary sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium text-foreground/90">
                N°1 en France, Suisse et Belgique
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-[2rem] sm:text-5xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-[1.1] tracking-tight"
          >
            L'accélérateur de croissance{" "}
            <span className="text-gradient">N°1</span>
            <br />
            des sociétés de{" "}
            <span className="text-gradient-warm">rénovation de l'habitat</span>
          </motion.h1>

          {/* Subtitle - Updated */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-sm sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-10 max-w-3xl mx-auto px-2"
          >
            Nous accompagnons les entreprises réalisant plus de 500 000 € de CA annuel à bâtir une présence digitale solide et à générer une croissance prévisible et durable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <Button 
              onClick={scrollToContact}
              variant="secondary" 
              size="lg" 
              className="group glow-secondary text-sm sm:text-base"
            >
              Entrer en contact
              <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
            </Button>
            <Button 
              onClick={scrollToPresentation}
              variant="outline" 
              size="lg" 
              className="hidden sm:flex group bg-white/50 hover:bg-white/80 border-border text-foreground text-sm sm:text-base"
            >
              <Play size={16} className="mr-1 text-primary" />
              Voir la présentation
            </Button>
          </motion.div>

          {/* Social Proof under CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-2 mb-8 sm:mb-16"
          >
            <div className="glass-card px-3 sm:px-5 py-2 sm:py-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-gradient">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-500 text-yellow-500 sm:w-4 sm:h-4" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium text-foreground">
                4.9/5 sur Google
              </span>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <span className="text-xs sm:text-sm text-muted-foreground">
                +60 confrères accompagnés
              </span>
            </div>
          </motion.div>

          {/* VSL Video */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            id="vsl-video"
            className="max-w-4xl mx-auto"
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
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;