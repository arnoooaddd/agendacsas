import { useEffect } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

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
    <section id="temoignages" className="py-24 relative overflow-hidden bg-[#DFF1FF]">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 bg-white/80">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-foreground/80">
                Avis vérifiés Google
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Ce qu'en disent{" "}
              <span className="text-gradient">vos confrères</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground text-lg">
              +60 entreprises déjà partenaires Agendac
            </p>
          </AnimatedSection>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <AnimatedSection delay={0.3} direction="scale">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 border-gradient bg-white/80"
            >
              <div 
                className="elfsight-app-7b392c24-b2f9-41a6-a0a1-e7b021fe02f7" 
                data-elfsight-app-lazy
              />
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GoogleReviews;