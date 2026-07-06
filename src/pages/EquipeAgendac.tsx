import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Users } from "lucide-react";
import { motion } from "framer-motion";
import RelatedArticles from "@/components/RelatedArticles";
import { usePageTitle } from "@/hooks/usePageTitle";

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
  { name: "Kerim JAKUPOVIC", role: "CFO", image: kerimImg },
];

const teamMembers = [
  { name: "Eduardo NERY", role: "Vidéaste", image: eduardoImg },
  { name: "Sami AIT HAMOU", role: "Responsable communication", image: samiImg },
  { name: "Pauline PIETRÉ", role: "Vidéaste", image: paulineImg },
  { name: "Andrei AVADANII", role: "Monteur vidéo et designer", image: andreiImg },
  { name: "Omar TROUSSI", role: "Responsable publicités", image: omarImg },
  { name: "Manon ODIER", role: "Gestion clientèle", image: manonImg },
  { name: "Gabriel AGERON", role: "Designer site internet", image: gabrielImg },
  { name: "Mickael BERJAZ", role: "Monteur et designer", image: mickaelImg },
  { name: "Sophia LALEG", role: "Responsable qualité", image: yasmineImg },
  
];

const EquipeAgendac = () => {
  usePageTitle("L'équipe Agendac");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-40" />
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl animate-pulse-soft" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 border-gradient">
                  <Users size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground/80">L'équipe Agendac</span>
                </div>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
              >
                Les experts{" "}
                <span className="text-gradient">Agendac</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground text-lg max-w-2xl mx-auto"
              >
                Une équipe passionnée et complémentaire, dédiée à la réussite de votre acquisition client.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Dirigeants */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <AnimatedSection>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                  Direction
                </h2>
              </AnimatedSection>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {leaders.map((member, index) => (
                <AnimatedSection key={index} delay={index * 0.1} direction="scale">
                  <div className="glass-card p-8 border-gradient group hover:glow-primary transition-all duration-500 text-center hover:-translate-y-2">
                    <div className="relative w-36 h-36 mx-auto mb-6">
                      <div className="absolute inset-0 rounded-full gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110" />
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="relative w-full h-full object-cover rounded-full border-2 border-border group-hover:border-primary transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                    <p className="text-primary font-semibold">{member.role}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Toute l'équipe */}
        <section className="py-20 relative overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <AnimatedSection>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                  Toute l'<span className="text-gradient-warm">équipe</span>
                </h2>
              </AnimatedSection>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <AnimatedSection key={index} delay={index * 0.05} direction="scale">
                  <div className="glass-card p-4 border-gradient group hover:glow-primary transition-all duration-500 text-center hover:-translate-y-1">
                    <div className="relative w-20 h-20 mx-auto mb-3">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="relative w-full h-full object-cover rounded-full border-2 border-border group-hover:border-primary transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-sm font-bold text-foreground mb-0.5">{member.name}</h3>
                    <p className="text-primary font-medium text-xs">{member.role}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <RelatedArticles
          slugs={[
            "choisir-agence-marketing-renovation-btp",
            "delai-resultats-acquisition-clients-renovation",
          ]}
          subtitle="Comprendre comment choisir une agence et combien de temps attendre des résultats en acquisition rénovation."
        />
      </main>
      <Footer />
    </div>
  );
};

export default EquipeAgendac;
