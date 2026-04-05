import { Video, ArrowRight, Play } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

const Interviews = () => {
  return (
    <section id="resultats" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Video size={16} className="text-secondary" />
              <span className="text-sm font-medium text-foreground/80">Interviews partenaires</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Interview de vos confrères,{" "}
              <span className="text-gradient-warm">partenaires Agendac</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground text-lg">Découvrez leurs retours d'expérience</p>
          </AnimatedSection>
        </div>

        {/* Single highlight video */}
        <AnimatedSection delay={0.3} direction="scale">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-2 sm:p-3 border-gradient glow-primary">
              <div className="flex items-center gap-2 px-3 py-2 mb-2">
                <Play size={14} className="text-primary" />
                <span className="text-xs font-medium text-muted-foreground">Moments clés des interviews</span>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-card shadow-lg">
                <iframe
                  src="https://www.loom.com/embed/c16266ef4214491eae19d087e0e02eea"
                  frameBorder="0"
                  loading="lazy"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA to results page */}
        <AnimatedSection delay={0.4}>
          <div className="flex justify-center mt-10">
            <Button asChild variant="secondary" size="lg" className="group glow-secondary">
              <a href="/resultats-clients-agendac" className="flex items-center gap-2">
                Découvrez les résultats partenaires
                <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Interviews;
