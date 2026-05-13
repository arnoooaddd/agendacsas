import { useEffect } from "react";
import Header from "@/components/Header";
import ServiceFooter from "@/components/ServiceFooter";
import AnimatedSection from "@/components/AnimatedSection";
import SectionCTA from "@/components/SectionCTA";
import ServiceFloatingElements from "@/components/ServiceFloatingElements";
import ReviewsBands from "@/components/ReviewsBands";
import RelatedArticles from "@/components/RelatedArticles";
import { Share2, Facebook, Instagram, Youtube, Linkedin, MapPin, Settings, CheckCircle, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { usePageTitle, useCanonical, useMetaDescription } from "@/hooks/usePageTitle";

const platforms = [
  { name: "Facebook", icon: Facebook },
  { name: "Instagram", icon: Instagram },
  { name: "YouTube", icon: Youtube },
  { name: "LinkedIn", icon: Linkedin },
  { name: "Google Business Profile", icon: MapPin },
  { name: "Facebook Business Manager", icon: Settings },
];

const CreationReseaux = () => {
  usePageTitle("Création de réseaux sociaux");
  useEffect(() => {
    window.scrollTo(0, 0);
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const scrollToContact = () => {
    const footer = document.getElementById("contact");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-100" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
          <ServiceFloatingElements variant="reseaux" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 border-gradient">
                  <Share2 size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground/80">Prestation complémentaire</span>
                </div>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
              >
                Création de{" "}
                <span className="text-gradient">réseaux sociaux</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
              >
                Mise en place de vos plateformes digitales : création ou reprise de vos comptes existants, avec une structure propre, cohérente et prête à performer.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                <Button onClick={scrollToContact} variant="secondary" size="lg" className="group glow-secondary">
                  Demander un devis
                  <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Avis Google */}
        <section className="py-20 bg-[#DFF1FF] relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-40" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 bg-white/80">
                  <Star size={16} className="fill-yellow-500 text-yellow-500" />
                  <span className="text-sm font-medium text-foreground/80">Avis vérifiés Google</span>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
                  Ce qu'en disent <span className="text-gradient">vos confrères</span>
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} direction="scale">
              <ReviewsBands />
            </AnimatedSection>
          </div>
        </section>

        {/* Plateformes prises en charge */}
        <section className="py-24 relative overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                  Plateformes <span className="text-gradient">prises en charge</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="text-muted-foreground text-lg">Toutes les plateformes essentielles pour votre visibilité digitale</p>
              </AnimatedSection>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {platforms.map((platform, index) => (
                <AnimatedSection key={index} delay={index * 0.05} direction="scale">
                  <div className="glass-card p-6 border-gradient text-center hover:glow-primary transition-all duration-300">
                    <platform.icon size={32} className="text-primary mx-auto mb-3" />
                    <p className="font-medium text-foreground">{platform.name}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Ce qui est inclus */}
        <section className="py-24 relative overflow-hidden bg-muted/30">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                  Ce qui est <span className="text-gradient-warm">inclus</span>
                </h2>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Mise en place */}
              <AnimatedSection delay={0.1} direction="left">
                <div className="glass-card p-8 border-gradient h-full">
                  <h3 className="text-xl font-bold text-foreground mb-6">🌐 Mise en place</h3>
                  <ul className="space-y-4">
                    {[
                      "Comptes professionnels configurés correctement",
                      "Accès administrateurs sécurisés",
                      "Paramétrage conforme aux standards Meta & Google",
                      "Interconnexion complète entre Meta et Google Ads",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* SEO local */}
              <AnimatedSection delay={0.2} direction="right">
                <div className="glass-card p-8 border-gradient h-full">
                  <h3 className="text-xl font-bold text-foreground mb-6">📍 SEO & visibilité locale</h3>
                  <ul className="space-y-4">
                    {[
                      "Optimisation des informations clés (nom, activité, zones)",
                      "Paramétrage SEO natif des plateformes",
                      "Connexion Google Business Profile ↔ site internet",
                      "Préparation au référencement local (Google Maps)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="py-24 relative overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                  Nos <span className="text-gradient">formules</span>
                </h2>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <AnimatedSection delay={0.1} direction="scale">
                <div className="glass-card p-8 border-gradient h-full">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Formule Essentielle</h3>
                  <div className="text-3xl font-bold text-primary mb-6">397 € <span className="text-sm font-normal text-muted-foreground">HT</span></div>
                  <ul className="space-y-3">
                    {[
                      "2 plateformes au choix",
                      "Création ou reprise des comptes existants",
                      "Paramétrage professionnel",
                      "Connexion au site internet si existant",
                      "+47 € HT par plateforme supplémentaire",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} direction="scale">
                <div className="glass-card p-8 border-gradient h-full glow-primary relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">Populaire</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Formule Complète</h3>
                  <div className="text-3xl font-bold text-primary mb-6">497 € <span className="text-sm font-normal text-muted-foreground">HT</span></div>
                  <ul className="space-y-3">
                    {[
                      "Page Facebook",
                      "Instagram",
                      "Facebook Business Manager",
                      "Google Business Profile",
                      "Google Ads",
                      "YouTube",
                      "LinkedIn",
                      "Interconnexion complète Meta ↔ Google Ads",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            <SectionCTA className="mt-16" />
          </div>
        </section>

        {/* Partenaires */}
        <section className="py-20 relative overflow-hidden border-y border-border/30 bg-muted/20">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <AnimatedSection>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                  Ils sont <span className="text-gradient">partenaires Agendac</span>
                </h3>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} direction="scale">
              <div className="max-w-6xl mx-auto">
                <div className="elfsight-app-0635f11a-49f9-4b8a-99c5-6896695156b5" data-elfsight-app-lazy />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Rencontre des partenaires */}
        <section className="py-24 relative overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-40" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                  Rencontre des <span className="text-gradient-warm">partenaires Agendac</span>
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.3} direction="scale">
              <div className="w-full max-w-full">
                <div className="glass-card p-6 border-gradient">
                  <div className="elfsight-app-989ab5e2-99fb-4015-ab1f-50030f53aa48" data-elfsight-app-lazy />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <RelatedArticles
          slugs={["generation-leads-fiables-entreprise-renovation"]}
          subtitle="Des réseaux sociaux crédibles : la base pour vous démarquer des arnaques en rénovation."
        />
      </main>
      <ServiceFooter />
    </div>
  );
};

export default CreationReseaux;
