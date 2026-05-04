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
import { Search, ArrowRight, MapPin, Bot, TrendingUp, Globe, Star, FileText, BarChart3 } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

const GestionSeo = () => {
  usePageTitle("Gestion SEO local — Référencement organique");
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
                <Search size={16} className="text-primary" />
                <span className="text-sm font-medium text-foreground/80">Option Visibilité Max · Forfait mensuel</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight animate-slide-up">
                Gestion locale de votre{" "}
                <span className="text-gradient">référencement organique</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8 animate-fade-in">
                Sortez premier dans votre zone de chalandise sur <strong className="text-foreground">Google, Bing, ChatGPT, Gemini et Claude</strong>. Une équipe dédiée à votre référencement organique, en forfait mensuel.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in">
                <Button onClick={scrollToContact} variant="secondary" size="lg" className="group glow-secondary">
                  Réserver un appel
                  <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Avis Google */}
        <GoogleReviews />

        {/* Le service */}
        <section className="py-24 relative overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                  Un référencement <span className="text-gradient">premier sur votre zone</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="text-muted-foreground text-lg">
                  On gère tout : audit, contenu, optimisations techniques, citations locales, suivi des positions.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { icon: MapPin, title: "SEO local", desc: "Optimisation Google Business Profile, citations locales, pages services par ville/zone d'intervention." },
                { icon: Bot, title: "Référencement IA", desc: "Optimisation pour ChatGPT, Gemini, Claude, Perplexity. Soyez la réponse citée par les IA dans votre secteur." },
                { icon: FileText, title: "Création de contenu", desc: "Articles SEO experts, fiches services, guides locaux. Tout est rédigé et publié pour vous." },
                { icon: TrendingUp, title: "Optimisation technique", desc: "Performance, balisage, schema.org, maillage interne, Core Web Vitals — un site irréprochable pour Google." },
                { icon: BarChart3, title: "Suivi des positions", desc: "Reporting mensuel transparent : mots-clés ciblés, positions, trafic, conversions." },
                { icon: Globe, title: "Multi-moteurs", desc: "Google, Bing, ChatGPT, Gemini, Claude — visibilité maximale sur l'ensemble des canaux de recherche." },
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

        {/* Social proof — chiffres */}
        <Stats />

        {/* Clients en cours */}
        <Clients />

        {/* Highlights vidéo */}
        <Interviews />

        <RelatedArticles
          slugs={[
            "referencement-btp-google-ia-2026",
            "strategie-marketing-btp-feuille-route-2026-demandes-rentables",
            "marketing-renovation",
          ]}
          subtitle="Approfondissez votre stratégie de référencement organique en rénovation."
        />
      </main>
      <ServiceFooter />
    </div>
  );
};

export default GestionSeo;