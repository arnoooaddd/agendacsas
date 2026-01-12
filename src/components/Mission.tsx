import { Check, Shield, Award, Zap } from "lucide-react";

const missions = [
  {
    icon: Award,
    title: "Vous différencier par votre marque",
    description: "Les gens veulent soit le moins cher, soit le meilleur. Positionnez-vous comme le meilleur.",
  },
  {
    icon: Shield,
    title: "Véhiculer une image sérieuse",
    description: "Une image cohérente et professionnelle de votre entreprise partout sur internet.",
  },
  {
    icon: Check,
    title: "Partenaire de confiance",
    description: "Vous positionner comme le partenaire de confiance face aux arnaques du secteur.",
  },
  {
    icon: Zap,
    title: "Sortir de l'ombre",
    description: "Ne plus être dans l'ombre des gros acteurs qui cassent les prix.",
  },
];

const Mission = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Notre Mission
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Accélérer votre croissance avec des{" "}
            <span className="text-primary">leads qualifiés</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Nous vous aidons à attirer les meilleurs clients pour votre entreprise de rénovation.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <mission.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {mission.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {mission.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
