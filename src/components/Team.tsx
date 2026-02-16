import { Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionCTA from "./SectionCTA";

import arnaudImg from "@/assets/team/arnaud-utille.webp";
import kerimImg from "@/assets/team/kerim-jakupovic.webp";
import eduardoImg from "@/assets/team/eduardo-nery.webp";
import samiImg from "@/assets/team/sami-ait-hamou.webp";
import manonImg from "@/assets/team/rachad-ait-hamou.webp";
import paulineImg from "@/assets/team/pauline-pietre.webp";
import andreiImg from "@/assets/team/andrei-avadanii.webp";
import marceauImg from "@/assets/team/marceau-david.webp";
import omarImg from "@/assets/team/omar-troussi.webp";
import gabrielImg from "@/assets/team/gabriel-ageron.webp";
import mickaelImg from "@/assets/team/mickael-berjaz.webp";
import yasmineImg from "@/assets/team/yasmine-lale.webp";

const teamMembers = [
  { name: "Arnaud UTILLE", role: "Président", image: arnaudImg },
  { name: "Kerim JAKUPOVIC", role: "Directeur général", image: kerimImg },
  { name: "Eduardo Nery", role: "Vidéaste", image: eduardoImg },
  { name: "Sami AIT HAMOU", role: "Responsable communication", image: samiImg },
  { name: "Pauline PIETRÉ", role: "Vidéaste", image: paulineImg },
  { name: "Andrei AVADANII", role: "Monteur vidéo et designer", image: andreiImg },
  { name: "Marceau David", role: "Technico-commercial", image: marceauImg },
  { name: "Omar TROUSSI", role: "Responsable publicités", image: omarImg },
  { name: "Manon ODIER", role: "Gestion clientèle", image: manonImg },
  { name: "Gabriel AGERON", role: "Designer site internet", image: gabrielImg },
  { name: "Mickael BERJAZ", role: "Monteur et designer", image: mickaelImg },
  { name: "Yasmine LALE", role: "Responsable qualité", image: yasmineImg },
];

const Team = () => {
  return (
    <section id="equipe" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 border-gradient">
              <Users size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground/80">L'équipe Agendac</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Les experts{" "}
              <span className="text-gradient">Agendac</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground text-lg">Une équipe passionnée dédiée à votre réussite.</p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index} delay={index * 0.05} direction="scale">
              <div className="glass-card p-6 border-gradient group hover:glow-primary transition-all duration-500 text-center hover:-translate-y-2 hover:scale-[1.02]">
                <div className="relative w-28 h-28 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-full gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110" />
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="relative w-full h-full object-cover rounded-full border-2 border-border group-hover:border-primary transition-all duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <SectionCTA className="mt-16" />
      </div>
    </section>
  );
};

export default Team;
