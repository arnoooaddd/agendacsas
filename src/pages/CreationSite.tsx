import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionCTA from "@/components/SectionCTA";
import { Globe, CheckCircle, Star, ArrowRight, Smartphone, Search, BarChart3, MessageSquare, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CreationSite = () => {
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
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 border-gradient">
                  <Globe size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground/80">Prestation complémentaire</span>
                </div>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
              >
                Création de{" "}
                <span className="text-gradient">site internet</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
              >
                Un site 100 % optimisé, au design moderne et orienté conversion. Livraison clé en main après validation d'un cahier des charges complet.
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
              <div className="max-w-6xl mx-auto glass-card p-6 border-gradient bg-white/80">
                <div className="elfsight-app-7b392c24-b2f9-41a6-a0a1-e7b021fe02f7" data-elfsight-app-lazy />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-24 relative overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                  Un site <span className="text-gradient">professionnel & performant</span>
                </h2>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Smartphone,
                  title: "Responsive design",
                  items: ["100 % optimisé mobile, tablette et ordinateur", "Design moderne, clair et orienté conversion", "Livraison clé en main après validation du cahier des charges"],
                },
                {
                  icon: Search,
                  title: "SEO local",
                  items: ["Optimisation SEO locale dès la conception", "1 page par service optimisée pour le référencement", "Jusqu'à 10 sous-pages locales (villes / zones ciblées)", "Structure SEO pensée pour Google", "Connexion Google Business Profile", "Avis Google affichés en live"],
                },
                {
                  icon: MessageSquare,
                  title: "Contact & conversion",
                  items: ["Numéro de téléphone visible partout", "Bouton WhatsApp flottant", "Formulaire connecté au CRM", "Page contact dédiée"],
                },
                {
                  icon: BarChart3,
                  title: "Suivi & performance",
                  items: ["Tracking connecté à Meta Ads et Google Ads", "Google Analytics : trafic & performances", "Hotjar : comportement réel des visiteurs"],
                },
                {
                  icon: Globe,
                  title: "Réseaux sociaux & contenus",
                  items: ["Réseaux sociaux intégrés en temps réel", "Vidéos YouTube & interviews affichées automatiquement", "Contenus mis à jour sans intervention manuelle"],
                },
                {
                  icon: Languages,
                  title: "Langues & conformité",
                  items: ["Site disponible en Français et Anglais", "Conforme RGPD"],
                },
              ].map((feature, index) => (
                <AnimatedSection key={index} delay={index * 0.05} direction="scale">
                  <div className="glass-card p-6 border-gradient h-full hover:glow-primary transition-all duration-300">
                    <feature.icon size={28} className="text-primary mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-4">{feature.title}</h3>
                    <ul className="space-y-2">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Tarifs & étapes */}
        <section className="py-24 relative overflow-hidden bg-muted/30">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                  Tarifs & <span className="text-gradient-warm">conditions</span>
                </h2>
              </AnimatedSection>
            </div>

            <div className="max-w-3xl mx-auto">
              <AnimatedSection delay={0.1} direction="scale">
                <div className="glass-card p-8 border-gradient glow-primary">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Site internet professionnel</h3>
                    <div className="text-4xl font-bold text-primary">4 000 € <span className="text-sm font-normal text-muted-foreground">HT</span></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <p className="text-sm font-medium text-foreground mb-1">Hébergement</p>
                      <p className="text-muted-foreground text-sm">~25 € / mois (réglé directement par le client)</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <p className="text-sm font-medium text-foreground mb-1">Modifications</p>
                      <p className="text-muted-foreground text-sm">Année 1 : 29 €/h — Puis : 49 €/h</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-4">Étapes du projet</h4>
                    <div className="space-y-4">
                      {[
                        { step: "1", title: "Paiement de l'acompte", desc: "50% d'acompte — Dès que possible" },
                        { step: "2", title: "Appel de rédaction du cahier des charges", desc: "Rédaction de tous les éléments et signature avant lancement" },
                        { step: "3", title: "Création du site internet", desc: "En conformité stricte avec le cahier des charges — 7 à 14 jours" },
                        { step: "4", title: "Validation et paiement du solde", desc: "50% restants — Sous 72h" },
                        { step: "5", title: "Livraison clé en main", desc: "Remise des accès GitHub, GTM, GA4, Hotjar, Elfsight — Immédiatement" },
                      ].map((item) => (
                        <div key={item.step} className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {item.step}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <SectionCTA className="mt-16" />
            </div>
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
                <div className="elfsight-app-b1e000b2-31a9-48e4-8175-d63a0e2fdacd" data-elfsight-app-lazy />
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
      </main>
      <Footer />
    </div>
  );
};

export default CreationSite;
