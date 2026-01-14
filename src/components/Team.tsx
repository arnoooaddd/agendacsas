import { Users } from "lucide-react";

const teamMembers = [
  {
    name: "Arnaud UTILLE",
    role: "Gérant",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Kerim JAKUPOVIC",
    role: "Chef des opérations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Eduardo Nery",
    role: "Vidéaste",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Rachad AIT HAMOU",
    role: "Responsable communication",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Pauline PIETRÉ",
    role: "Vidéaste",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Andrei AVADANII",
    role: "Monteur vidéo et designer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Marceau David",
    role: "Technico-commercial",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Omar TROUSSI",
    role: "Responsable publicités",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Majda KHADIRI",
    role: "Gestion clients et tournages",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
  },
];

const Team = () => {
  return (
    <section id="equipe" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 border-gradient">
            <Users size={16} className="text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Notre équipe
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Les experts{" "}
            <span className="text-gradient">Agendac</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Une équipe passionnée dédiée à votre réussite.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass-card p-6 border-gradient group hover:glow-primary transition-all duration-500 text-center"
            >
              {/* Avatar */}
              <div className="relative w-28 h-28 mx-auto mb-5">
                <div className="absolute inset-0 rounded-full gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-full h-full object-cover rounded-full border-2 border-border group-hover:border-primary transition-colors duration-300"
                />
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
