import { TrendingUp, Calendar, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const results = [
  {
    icon: TrendingUp,
    stat: "+600 000€",
    label: "de CA en 4 mois",
    company: "Partenaire ENR",
  },
  {
    icon: CheckCircle,
    stat: "80%",
    label: "Taux de transformation",
    company: "Climeco Plomberie",
  },
  {
    icon: Calendar,
    stat: "15 jours",
    label: "Pour les premières signatures",
    company: "Lynergie",
  },
  {
    icon: Users,
    stat: "+12",
    label: "Chantiers par mois",
    company: "Client partenaire",
  },
];

const Results = () => {
  return (
    <section id="resultats" className="py-24 gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Résultats Concrets
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Des résultats qui parlent d'eux-mêmes
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Nos clients témoignent de leur succès avec Agendac.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 text-center hover:bg-primary-foreground/15 transition-colors"
            >
              <result.icon className="text-secondary mx-auto mb-4" size={40} />
              <div className="text-4xl font-extrabold text-primary-foreground mb-2">
                {result.stat}
              </div>
              <div className="text-primary-foreground/90 font-medium mb-2">
                {result.label}
              </div>
              <div className="text-primary-foreground/60 text-sm">
                {result.company}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            Obtenir les mêmes résultats
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Results;
