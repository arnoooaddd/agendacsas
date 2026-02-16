import { Video, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionCTA from "./SectionCTA";

const interviews = [
  { 
    id: "c62dc9c3f6394a5c896c8234c396ae6a",
    quote: "+2 commerciaux embauchés en 3 mois"
  },
  { 
    id: "2c3056d9a2c249319ebda1af5158a722",
    quote: "47% de transformation"
  },
  { 
    id: "047c8bbfb0ff450fbe57eb827b577394",
    quote: "+600 000 € de CA en 4 mois"
  },
  { 
    id: "959c01c42bde455bb1fef702f504dd0b",
    quote: "Premières signatures sous 15 jours"
  },
  { 
    id: "5ed556b972924eedbea2a01d988d9221",
    quote: "+2 embauches après 6 mois de collaboration"
  },
  { 
    id: "1fb4dd4067094adb9422a1e9a0c42500",
    quote: "100% de demande qualifiée"
  },
];

const Interviews = () => {
  return (
    <section id="resultats" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {interviews.map((interview, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="scale">
              <div className="glass-card p-3 border-gradient group hover:glow-primary transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-white shadow-lg">
                  <iframe
                    src={`https://www.loom.com/embed/${interview.id}`}
                    frameBorder="0"
                    loading="lazy"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Quote size={16} className="text-primary flex-shrink-0 mt-1" />
                    <p className="text-sm font-medium text-foreground italic">
                      {interview.quote.startsWith("47%") ? interview.quote : `"${interview.quote}"`}
                    </p>
                  </div>
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

export default Interviews;
