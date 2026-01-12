import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Users, Target } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Team working on digital marketing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">
              Partenaire Google & Meta Ads
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 leading-tight animate-fade-in-up [text-shadow:_0_2px_20px_rgb(0_0_0_/_30%)]" style={{ animationDelay: "0.1s" }}>
            L'accélérateur de croissance N°1 des sociétés de{" "}
            <span className="text-secondary drop-shadow-lg">rénovation de l'habitat</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Des rendez-vous qualifiés 100% exclusifs pour développer votre activité CVC, ENR et rénovation énergétique.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="group">
              Voir les services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="lg" className="group">
              <Play size={18} className="mr-1" />
              Voir la présentation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <TrendingUp className="text-secondary mx-auto mb-3" size={28} />
              <div className="text-3xl font-bold text-primary-foreground mb-1">+600K€</div>
              <div className="text-primary-foreground/70 text-sm">CA généré en 4 mois</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Target className="text-secondary mx-auto mb-3" size={28} />
              <div className="text-3xl font-bold text-primary-foreground mb-1">80%</div>
              <div className="text-primary-foreground/70 text-sm">Taux de transformation</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Users className="text-secondary mx-auto mb-3" size={28} />
              <div className="text-3xl font-bold text-primary-foreground mb-1">+200</div>
              <div className="text-primary-foreground/70 text-sm">Entreprises accompagnées</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
