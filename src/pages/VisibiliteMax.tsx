import { useEffect } from "react";
import Header from "@/components/Header";
import ServiceFooter from "@/components/ServiceFooter";
import AnimatedSection from "@/components/AnimatedSection";
import SectionCTA from "@/components/SectionCTA";
import GoogleReviews from "@/components/GoogleReviews";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Interviews from "@/components/Interviews";
import RelatedArticles from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Sparkles, Megaphone, Brain, Layers, Search, Video, CalendarCheck, Facebook, Linkedin, Globe } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

const VisibiliteMax = () => {
  usePageTitle("Visibilité Max — Gestion de communication globale");
  useEffect(() => {
    window.scrollTo(0, 0);
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

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 border-gradient animate-fade-in">
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium text-foreground/80">Service phare Agendac · Formule Visibilité Max</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight animate-slide-up">
                Agendac pilote votre{" "}
                <span className="text-gradient">communication digitale payante</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8 animate-fade-in">
                On gère votre budget pub sur Facebook, Instagram, Google et YouTube pour vous apporter plus de demandes de devis chaque mois. Vous gardez la main sur le chantier, on s'occupe de remplir votre planning.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in">
                <Button onClick={scrollToContact} variant="secondary" size="lg" className="group glow-secondary">
                  Réserver un appel
                  <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
                </Button>
                <Button onClick={() => document.getElementById("formule")?.scrollIntoView({ behavior: "smooth" })} variant="outline" size="lg">
                  Voir la formule
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Avis Google */}
        <GoogleReviews />

        {/* La Formule Visibilité Max — présentée juste après les avis */}
        <section id="formule" className="py-24 relative overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 border-gradient">
                  <Sparkles size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground/80">Formule Visibilité Max</span>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
                  Une infrastructure complète de{" "}
                  <span className="text-gradient">visibilité digitale</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="text-muted-foreground text-lg">
                  Forfait mensuel — votre directeur marketing externalisé qui pilote toute votre communication.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { icon: Facebook, title: "Meta Ads", desc: "Gestion complète Facebook & Instagram : campagnes publicitaires, audiences, créatives, A/B testing." },
                { icon: Search, title: "Google Ads", desc: "Google Search & YouTube Ads : enchères pilotées, ciblage local, optimisation continue." },
                { icon: Linkedin, title: "LinkedIn Ads", desc: "Campagnes B2B pour toucher décideurs, prescripteurs et grands comptes dans votre zone." },
                { icon: Megaphone, title: "Posts organiques", desc: "Création et publication de contenu organique sur tous vos réseaux — vous n'avez plus à y penser." },
                { icon: Brain, title: "Système SCI", desc: "Suivi de Conversion par Intelligence Artificielle : chaque euro dépensé est tracé, attribué, optimisé en temps réel." },
                { icon: Layers, title: "Pilotage unifié", desc: "Une équipe dédiée : media buyer, content manager, responsable de compte. Un reporting transparent chaque mois." },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.05} direction="scale">
                  <div className="glass-card p-6 border-gradient h-full hover:glow-primary transition-all duration-300 hover:-translate-y-1">
                    <item.icon size={28} className="text-primary mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <SectionCTA className="mt-16" />
          </div>
        </section>

        {/* Chiffres clés */}
        <Stats />

        {/* Clients en cours */}
        <Clients />

        {/* Highlights vidéo résultats partenaires */}
        <Interviews />

        {/* Options complémentaires */}
        <section className="py-24 relative overflow-hidden bg-[#DFF1FF]">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                  Options <span className="text-gradient-warm">complémentaires</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="text-muted-foreground text-lg">
                  La Formule Visibilité Max s'associe à nos services additionnels pour couvrir l'ensemble de votre acquisition.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { icon: CalendarCheck, title: "Prise de rendez-vous qualifiés", desc: "Nos équipes contactent et qualifient vos prospects par téléphone. Un RDV est qualifié uniquement quand un devis a été envoyé. Vous ne payez qu'au résultat.", href: "/prise-rendez-vous" },
                { icon: Video, title: "Tournage professionnel", desc: "Scripts conversion, tournage sur site, montage performance. 100% internalisé, livraison rapide.", href: "/tournage" },
                { icon: Globe, title: "Gestion SEO complète", desc: "Référencement organique local sur Google, Bing, ChatGPT, Gemini, Claude. Sortez premier dans votre zone de chalandise.", href: "/gestion-seo" },
                { icon: Sparkles, title: "Création site & réseaux", desc: "Site internet conçu pour la conversion + paramétrage complet de vos plateformes Meta, Google, LinkedIn.", href: "/creation-site-internet" },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.08} direction="scale">
                  <a href={item.href} className="block h-full">
                    <div className="glass-card p-6 border-gradient h-full hover:glow-primary transition-all duration-300 hover:-translate-y-1 bg-white/80">
                      <item.icon size={28} className="text-primary mb-4" />
                      <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                      <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                        En savoir plus <ArrowRight size={14} />
                      </span>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <RelatedArticles
          slugs={[
            "internaliser-externaliser-marketing-renovation-btp",
            "google-ads-vs-facebook-ads-renovation-habitat",
            "strategie-marketing-btp-feuille-route-2026-demandes-rentables",
          ]}
          subtitle="Pour aller plus loin sur la gestion de votre communication digitale en rénovation."
        />
      </main>
      <ServiceFooter />
    </div>
  );
};

export default VisibiliteMax;