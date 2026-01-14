import { Video } from "lucide-react";
import SectionCTA from "./SectionCTA";

const interviews = [
  { id: "f8c09f08d3ef43f5a926961f4d912d93" },
  { id: "f8c09f08d3ef43f5a926961f4d912d93" },
  { id: "f8c09f08d3ef43f5a926961f4d912d93" },
  { id: "f8c09f08d3ef43f5a926961f4d912d93" },
  { id: "f8c09f08d3ef43f5a926961f4d912d93" },
  { id: "f8c09f08d3ef43f5a926961f4d912d93" },
];

const Interviews = () => {
  return (
    <section id="resultats" className="py-24 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 animate-slide-up">
            <Video size={16} className="text-secondary" />
            <span className="text-sm font-medium text-foreground/80">
              Interviews partenaires
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Témoignages{" "}
            <span className="text-gradient-warm">vidéo</span>
          </h2>
          <p className="text-muted-foreground text-lg animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Découvrez les retours d'expérience de nos partenaires Agendac.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {interviews.map((interview, index) => (
            <div
              key={index}
              className="glass-card p-3 border-gradient group hover:glow-primary transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-white shadow-lg">
                <iframe
                  src={`https://www.loom.com/embed/${interview.id}`}
                  frameBorder="0"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>

        <SectionCTA className="mt-16" />
      </div>
    </section>
  );
};

export default Interviews;