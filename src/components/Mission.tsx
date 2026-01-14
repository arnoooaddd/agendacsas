import { Target, Shield, Award, Lightbulb } from "lucide-react";

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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 border-gradient">
            <Target size={16} className="text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Notre mission
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            La mission{" "}
            <span className="text-gradient">Agendac</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nous aidons les entreprises de rénovation de l'habitat à se démarquer et à attirer des clients qualifiés.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="glass-card p-8 border-gradient group hover:glow-primary transition-all duration-500 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Number badge */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} text-white font-bold text-xl mb-6`}>
                  {pillar.number}
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
