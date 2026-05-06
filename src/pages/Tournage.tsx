import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionCTA from "@/components/SectionCTA";
import ServiceFloatingElements from "@/components/ServiceFloatingElements";
import ExemplesTournage from "@/components/ExemplesTournage";
import ReviewsBands from "@/components/ReviewsBands";
import RelatedArticles from "@/components/RelatedArticles";
import { Video, CheckCircle, Star, ArrowRight, FileText, Clock, Film, Repeat, Package, Building2, HelpCircle, Megaphone, MessageCircle, HardHat, ClipboardList, ArrowLeftRight, Layers, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { usePageTitle } from "@/hooks/usePageTitle";

const Tournage = () => {
  usePageTitle("Réalisation d'un tournage professionnel pour votre société de rénovation de l'habitat");
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
          <ServiceFloatingElements variant="tournage" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 border-gradient">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-foreground/80">Service phare Agendac</span>
                </div>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
              >
                Réalisation d'un tournage{" "}
                <span className="text-gradient">professionnel</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
              >
                Pour votre société de rénovation de l'habitat. Scripts sur-mesure, tournage sur site, montage et livraison — 100 % internalisé.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button onClick={scrollToContact} variant="secondary" size="lg" className="group glow-secondary">
                  Demander un devis
                  <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
                </Button>
                <Button
                  onClick={() => document.getElementById("exemples-tournage")?.scrollIntoView({ behavior: "smooth" })}
                  variant="outline" size="lg" className="group"
                >
                  Voir des exemples
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

        {/* Ce qui est inclus — étapes */}
        <section className="py-24 relative overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                  Notre offre <span className="text-gradient">tournage</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="text-muted-foreground text-lg">
                  Un process clair en 6 étapes, 100 % maîtrisé en interne.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: FileText, title: "Scripts & messages", desc: "Scripts ultra-optimisés pour capter l'attention de votre clientèle et inciter au remplissage de formulaire." },
                { icon: Film, title: "Tournage dans vos locaux", desc: "Tournage sur site : bureaux, équipes, véhicules, chantiers, installations. Rendu aligné avec votre image de marque." },
                { icon: Video, title: "Production 100% internalisée", desc: "Équipe interne, process maîtrisé de A à Z. Aucune sous-traitance, aucune perte de contrôle." },
                { icon: Package, title: "Montage orienté performance", desc: "Vidéos dynamiques, pensées pour la publicité et les réseaux. Livraison rapide après le tournage." },
                { icon: Repeat, title: "Modifications illimitées", desc: "Ajustements sans limite jusqu'à validation finale du client." },
                { icon: Clock, title: "Livraison rapide", desc: "Première version livrée sous 7 à 10 jours après le jour du tournage." },
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.05} direction="scale">
                  <div className="glass-card p-6 border-gradient h-full hover:glow-primary transition-all duration-300 relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <item.icon size={28} className="text-primary mb-4 mt-2" />
                    <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Votre livrable — formats */}
        <section className="py-24 relative overflow-hidden border-y border-border/30 bg-muted/20">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                  <Package size={16} className="text-secondary" />
                  <span className="text-sm font-medium text-foreground/80">Votre livrable</span>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                  Entre <span className="text-gradient">8 et 20 vidéos</span> finales par tournage
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="text-muted-foreground text-lg mb-4">
                  Un seul jour de tournage suffit pour alimenter vos canaux de communication sur plusieurs mois.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                  <div className="inline-flex items-center gap-2 glass-card px-4 py-2">
                    <Target size={16} className="text-secondary" />
                    <span className="text-sm font-medium text-foreground/80">Orienté <span className="font-bold">conversion</span> (passage à l'action)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 glass-card px-4 py-2">
                    <Award size={16} className="text-primary" />
                    <span className="text-sm font-medium text-foreground/80">Orienté <span className="font-bold">notoriété</span> (confiance & marque)</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: Building2, title: "Présentation d'entreprise", desc: "Mettez en avant votre équipe, vos locaux et votre savoir-faire pour rassurer vos prospects." },
                { icon: HelpCircle, title: "FAQ & réponses aux questions", desc: "Anticipez les objections de vos prospects avec des réponses claires et engageantes." },
                { icon: Megaphone, title: "Publicité orientée conversion", desc: "Mise en avant d'offres, promotions et services pour inciter à l'action immédiate." },
                { icon: MessageCircle, title: "Interview client", desc: "Témoignages authentiques qui renforcent la confiance et la crédibilité de votre société." },
                { icon: HardHat, title: "Suivi de chantier", desc: "Montrez l'évolution de vos projets et la rigueur de votre travail sur le terrain." },
                { icon: ClipboardList, title: "Explication de chantier", desc: "Détaillez vos techniques et matériaux pour démontrer votre expertise technique." },
                { icon: ArrowLeftRight, title: "Avant / après chantier", desc: "Des visuels impactants qui prouvent concrètement la qualité de vos réalisations." },
                { icon: Layers, title: "Autres contenus adaptés", desc: "Des formats personnalisés selon votre activité, vos besoins et vos objectifs de croissance." },
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.05} direction="scale">
                  <div className="glass-card p-6 border-gradient h-full hover:glow-primary transition-all duration-300">
                    <item.icon size={28} className="text-primary mb-4" />
                    <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Exemples de tournage */}
        <ExemplesTournage ctaMode="contact" />

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

        <RelatedArticles
          slugs={[
            "video-drone-btp-visibilite-reassurance",
            "branding-local-entreprise-renovation",
            "generation-leads-fiables-entreprise-renovation",
          ]}
          subtitle="Construisez une image de marque qui rassure et démarquez-vous des arnaques en rénovation."
        />
      </main>
      <Footer />
    </div>
  );
};

export default Tournage;
