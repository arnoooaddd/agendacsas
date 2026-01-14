import { PlayCircle, TrendingUp } from "lucide-react";

const CaseStudy = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 border-gradient">
            <TrendingUp size={16} className="text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Étude de cas concrète
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Découvrez comment on{" "}
            <span className="text-gradient">transforme</span> votre business
          </h2>
          <p className="text-muted-foreground text-lg">
            Une présentation détaillée de notre méthode et de nos résultats concrets.
          </p>
        </div>

        {/* Video Embed */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-3 border-gradient glow-primary">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-card">
              <iframe
                src="https://www.loom.com/embed/f8c09f08d3ef43f5a926961f4d912d93"
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
          
          {/* CTA under video */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Prêt à obtenir les mêmes résultats ?
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-foreground hover:bg-primary px-6 py-3 rounded-xl transition-all duration-300"
            >
              <PlayCircle size={20} />
              Réserver un appel découverte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
