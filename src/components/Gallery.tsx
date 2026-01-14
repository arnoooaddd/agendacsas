import { useEffect } from "react";
import { Camera } from "lucide-react";
import SectionCTA from "./SectionCTA";

const Gallery = () => {
  useEffect(() => {
    // Ensure Elfsight script is loaded
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 animate-slide-up">
            <Camera size={16} className="text-secondary" />
            <span className="text-sm font-medium text-foreground/80">
              Rencontre des partenaires Agendac
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            On rencontre{" "}
            <span className="text-gradient-warm">nos partenaires</span>
          </h2>
          <p className="text-muted-foreground text-lg animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Des relations humaines au cœur de notre approche.
          </p>
        </div>

        {/* Elfsight Photo Gallery Widget */}
        <div className="max-w-6xl mx-auto animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <div className="glass-card p-6 border-gradient">
            <div 
              className="elfsight-app-989ab5e2-99fb-4015-ab1f-50030f53aa48" 
              data-elfsight-app-lazy
            />
          </div>
        </div>

        <SectionCTA className="mt-16" />
      </div>
    </section>
  );
};

export default Gallery;