import { Video, Quote } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionCTA from "./SectionCTA";

const interviews = [
  { 
    id: "2c3056d9a2c249319ebda1af5158a722",
    quote: "Premier RDV = première signature"
  },
  { 
    id: "4b8cbcae740e4a4c88a0456a56e978f9",
    quote: "+600 000 € de CA en 4 mois"
  },
  { 
    id: "f8c09f08d3ef43f5a926961f4d912d93",
    quote: "Premières signatures sous 15 jours"
  },
  { 
    id: "d1fc55cbb3954c378e7016a89cf999e2",
    quote: "+10 à +12 chantiers par mois, plus les parrainages"
  },
  { 
    id: "1006513ed2df4d4c8bdb5533705de579",
    quote: "100% de demande qualifiée"
  },
];

const Interviews = () => {
  return (
    <section id="resultats" className="py-24 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      
      {/* Decorative elements */}
      <motion.div 
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/8 rounded-full blur-3xl" 
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Video size={16} className="text-secondary" />
              <span className="text-sm font-medium text-foreground/80">
                Interviews partenaires
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Interview de vos confrères,{" "}
              <span className="text-gradient-warm">partenaires Agendac</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Découvrez leurs retours d'expérience
            </p>
          </AnimatedSection>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {interviews.map((interview, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="scale">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-3 border-gradient group hover:glow-primary transition-all duration-500"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-white shadow-lg">
                  <iframe
                    src={`https://www.loom.com/embed/${interview.id}`}
                    frameBorder="0"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                {/* Quote */}
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Quote size={16} className="text-primary flex-shrink-0 mt-1" />
                    <p className="text-sm font-medium text-foreground italic">
                      "{interview.quote}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <SectionCTA className="mt-16" />
      </div>
    </section>
  );
};

export default Interviews;