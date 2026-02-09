import { Target, Shield, Award, Lightbulb } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionCTA from "./SectionCTA";

const pillars = [
  {
    number: "1",
    icon: Award,
    title: "Vous différencier des autres entreprises",
    description: "par votre marque, non par votre prix (les gens veulent soit le moins cher, soit le meilleur)",
    color: "from-primary to-primary-light",
  },
  {
    number: "2",
    icon: Shield,
    title: "Véhiculer une image sérieuse et cohérente",
    description: "de votre entreprise partout sur internet",
    color: "from-secondary to-orange-400",
  },
  {
    number: "3",
    icon: Target,
    title: "Vous positionner comme le partenaire de confiance",
    description: "face aux arnaques (pas de pub promettant 10 000 € d'aides)",
    color: "from-accent to-cyan-400",
  },
  {
    number: "4",
    icon: Lightbulb,
    title: "Ne plus être dans l'ombre",
    description: "des gros acteurs qui cassent les prix",
    color: "from-purple-500 to-pink-500",
  },
];

const Mission = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 border-gradient">
              <Target size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground/80">Notre mission</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              La mission{" "}
              <span className="text-gradient">Agendac</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nous aidons les entreprises de rénovation de l'habitat à se démarquer et à attirer des demandes entrantes qualifiées.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="scale">
              <div className="glass-card p-8 border-gradient group hover:glow-primary transition-all duration-500 relative overflow-hidden h-full hover:-translate-y-2 hover:scale-[1.02]">
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} text-white font-bold text-xl mb-6`}>
                    {pillar.number}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <SectionCTA className="mt-16" />
      </div>
    </section>
  );
};

export default Mission;
