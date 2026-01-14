import { TrendingUp, Euro, Target } from "lucide-react";

const stats = [
  {
    value: "x6,7",
    label: "Retour sur investissement moyen",
    sublabel: "de nos partenaires (marge brute)",
    icon: TrendingUp,
    color: "text-primary",
  },
  {
    value: "+7 440 000 €",
    label: "Générés pour vos confrères",
    sublabel: "ces trois dernières années",
    icon: Euro,
    color: "text-secondary",
  },
  {
    value: "+570 000 €",
    label: "Dépensé en publicité",
    sublabel: "exclusivement dans la rénovation de l'habitat",
    icon: Target,
    color: "text-accent",
  },
];

const Stats = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-8 border-gradient text-center group hover:glow-primary transition-all duration-500"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-card/60 mb-4 ${stat.color}`}>
                  <stat.icon size={28} />
                </div>
                <div className={`text-4xl sm:text-5xl font-bold mb-3 ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="text-foreground font-medium mb-1">{stat.label}</p>
                <p className="text-muted-foreground text-sm">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
