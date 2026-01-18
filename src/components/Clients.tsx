import { useEffect } from "react";
import { Building2 } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionCTA from "./SectionCTA";

const Clients = () => {
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
    <section className="py-20 relative overflow-hidden border-y border-border/30 bg-muted/20">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-4">
              <Building2 size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground/80">
                Vos confrères
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
              Ils sont <span className="text-gradient">partenaires Agendac</span>
            </h3>
          </AnimatedSection>
        </div>

        {/* Elfsight Logo Showcase Widget */}
        <AnimatedSection delay={0.2} direction="scale">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <div 
              className="elfsight-app-b1e000b2-31a9-48e4-8175-d63a0e2fdacd" 
              data-elfsight-app-lazy
            />
          </motion.div>
        </AnimatedSection>

        <SectionCTA className="mt-12" />
      </div>
    </section>
  );
};

export default Clients;