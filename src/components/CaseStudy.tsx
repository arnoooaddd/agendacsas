import { PlayCircle, TrendingUp, Calendar, Target } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionCTA from "./SectionCTA";

const CaseStudy = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#DFF1FF]">
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      {/* Decorative elements */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ scale: [1, 0.8, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" 
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 border-gradient bg-white/80">
              <TrendingUp size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground/80">
                Étude de cas concrète
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              +110 RDV qualifiés en{" "}
              <span className="text-gradient">90 jours</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Découvrez comment nous avons transformé l'acquisition client de cette entreprise.
            </p>
          </AnimatedSection>
        </div>

        {/* Stats row */}
        <AnimatedSection delay={0.3} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <motion.div 
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card p-6 text-center bg-white/80"
            >
              <Calendar className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold text-foreground mb-1">90</div>
              <div className="text-sm text-muted-foreground">Jours de campagne</div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card p-6 text-center bg-white/80"
            >
              <Target className="w-8 h-8 mx-auto mb-3 text-secondary" />
              <div className="text-3xl font-bold text-foreground mb-1">+110</div>
              <div className="text-sm text-muted-foreground">RDV qualifiés</div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card p-6 text-center bg-white/80"
            >
              <TrendingUp className="w-8 h-8 mx-auto mb-3 text-green-500" />
              <div className="text-3xl font-bold text-foreground mb-1">x8</div>
              <div className="text-sm text-muted-foreground">ROI généré</div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Video Embed */}
        <AnimatedSection delay={0.4} direction="scale">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-3 border-gradient glow-primary bg-white/80"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-card shadow-lg">
                <iframe
                  src="https://www.loom.com/embed/23fe4fb7694e405fb0aad84f672b8571"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
            
            {/* CTA under video */}
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Prêt à obtenir les mêmes résultats ?
              </p>
            </div>
          </div>
        </AnimatedSection>

        <SectionCTA className="mt-8" />
      </div>
    </section>
  );
};

export default CaseStudy;
