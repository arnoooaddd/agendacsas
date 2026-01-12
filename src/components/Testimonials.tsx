import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Olivier Tubeuf",
    role: "Dirigeant",
    content: "Une équipe au top, de vrais professionnels. Après avoir testé beaucoup d'agences, j'ai enfin trouvé le partenaire dont j'avais besoin. Forte hausse du chiffre d'affaires dès le 3ème mois.",
    rating: 5,
  },
  {
    name: "Bastien ENR",
    role: "Gérant",
    content: "Quelle chance d'avoir rencontré Arnaud et ses équipes ! Après avoir testé beaucoup d'agences, j'ai enfin trouvé le partenaire dont j'ai toujours rêvé. À l'écoute, jeune, dynamique.",
    rating: 5,
  },
  {
    name: "Avenir Energie",
    role: "Direction",
    content: "Un second souffle pour l'entreprise. Du RDV 100% qualifié tout en respectant notre cahier des charges. J'ai une confiance totale avec Agendac, c'est un partenariat essentiel.",
    rating: 5,
  },
  {
    name: "Camille BAS",
    role: "Responsable",
    content: "Une équipe au top, fiable et à l'écoute. Je recommande vivement !",
    rating: 5,
  },
  {
    name: "Marcus C",
    role: "Entrepreneur",
    content: "Super accueil. Arnaud et son équipe ont su prendre la main sur mon Google et Facebook. J'ai tout de suite observé l'augmentation du nombre d'appels et de formulaires.",
    rating: 5,
  },
  {
    name: "Pauline Pietré",
    role: "Gérante",
    content: "C'est un plaisir de collaborer avec Arnaud ! La communication est fluide et chaque projet est exécuté à la perfection ! Je recommande à 1000%.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="temoignages" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ils parlent d'Agendac
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-secondary text-secondary" />
              ))}
            </div>
            <span className="font-semibold">5.0</span>
            <span>sur Google Avis</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
            >
              <Quote className="text-primary/20 mb-4" size={32} />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
