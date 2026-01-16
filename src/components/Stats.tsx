import { TrendingUp, Euro, Target } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stats = [
  {
    value: "x6,7",
    label: "Retour sur investissement moyen",
    sublabel: "de nos partenaires (marge brute)",
    icon: TrendingUp,
    color: "text-primary",
  },
  {
    value: "+7,4M €",
    label: "Générés pour vos confrères",
    sublabel: "ces trois dernières années",
    icon: Euro,
    color: "text-secondary",
  },
  {
    value: "+570K €",
    label: "Dépensé en publicité",
    sublabel: "exclusivement dans la rénovation de l'habitat",
    icon: Target,
    color: "text-accent",
  },
];

const Stats = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-[#DFF1FF]">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.15} direction="scale">
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 border-gradient text-center group hover:glow-primary transition-all duration-500 bg-white/80"
                >
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-card/60 mb-4 ${stat.color}`}
                  >
                    <stat.icon size={28} />
                  </motion.div>
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className={`text-4xl sm:text-5xl font-bold mb-3 ${stat.color}`}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-foreground font-medium mb-1">{stat.label}</p>
                  <p className="text-muted-foreground text-sm">{stat.sublabel}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;