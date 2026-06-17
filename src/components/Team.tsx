import { Users, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

import arnaudImg from "@/assets/team/arnaud-utille.webp";
import kerimImg from "@/assets/team/kerim-jakupovic.webp";
import eduardoImg from "@/assets/team/eduardo-nery.webp";
import samiImg from "@/assets/team/sami-ait-hamou.webp";
import manonImg from "@/assets/team/rachad-ait-hamou.webp";
import paulineImg from "@/assets/team/pauline-pietre.webp";
import andreiImg from "@/assets/team/andrei-avadanii.webp";
import omarImg from "@/assets/team/omar-troussi.webp";
import gabrielImg from "@/assets/team/gabriel-ageron.webp";
import mickaelImg from "@/assets/team/mickael-berjaz.webp";
import yasmineImg from "@/assets/team/yasmine-lale.webp";


const leaders = [
  { name: "Arnaud UTILLE", role: "Président", image: arnaudImg },
  { name: "Kerim JAKUPOVIC", role: "Directeur général", image: kerimImg },
];

const otherMembers = [
  { name: "Eduardo NERY", image: eduardoImg },
  { name: "Sami AIT HAMOU", image: samiImg },
  { name: "Pauline PIETRÉ", image: paulineImg },
  { name: "Andrei AVADANII", image: andreiImg },
  { name: "Omar TROUSSI", image: omarImg },
  { name: "Manon ODIER", image: manonImg },
  { name: "Gabriel AGERON", image: gabrielImg },
  { name: "Mickael BERJAZ", image: mickaelImg },
  { name: "Sophia LALEG", image: yasmineImg },
  
];

const Team = () => {
  return (
    <section id="equipe" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
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
        </div>

        {/* Leaders */}
        <div className="flex justify-center gap-8 mb-10 max-w-md mx-auto">
          {leaders.map((leader, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="scale">
              <div className="text-center">
                <div className="relative w-28 h-28 mx-auto mb-3">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-full border-2 border-primary shadow-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground">{leader.name}</h3>
                <p className="text-primary font-medium text-sm">{leader.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Other members - compact row */}
        <AnimatedSection delay={0.3} direction="up">
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mb-10">
            {otherMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-14 h-14 object-cover rounded-full border border-border hover:border-primary transition-colors"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.4}>
          <div className="flex justify-center">
            <Button asChild variant="outline" size="lg" className="group">
              <a href="/equipe-agendac" className="flex items-center gap-2">
                En savoir plus sur l'équipe Agendac
                <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Team;
