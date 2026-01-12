import { useEffect } from "react";
import { Star } from "lucide-react";

const GoogleReviews = () => {
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
    <section id="temoignages" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Star size={16} className="text-secondary fill-secondary" />
            <span className="text-sm font-medium text-foreground/80">
              Avis vérifiés Google
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Ce que disent{" "}
            <span className="text-gradient">nos clients</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Plus de 200 entreprises nous font confiance pour leur acquisition client.
          </p>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-6 border-gradient">
            <div 
              className="elfsight-app-7b392c24-b2f9-41a6-a0a1-e7b021fe02f7" 
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
