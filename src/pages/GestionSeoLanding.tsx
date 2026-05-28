import { useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle, MapPin, Bot, TrendingUp, Globe, FileText, BarChart3, Clock, CheckCircle2 } from "lucide-react";
import { usePageTitle, useCanonical, useMetaDescription } from "@/hooks/usePageTitle";

const WHATSAPP_URL =
  "https://wa.me/33628545978?text=" +
  encodeURIComponent(
    "Bonjour je souhaite plus d'informations concernant la gestion SEO à 250€ / mois"
  );

const CTA = ({ className = "", label = "Discuter sur WhatsApp" }: { className?: string; label?: string }) => (
  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={className}>
    <Button variant="secondary" size="lg" className="group glow-secondary">
      <MessageCircle className="w-5 h-5 mr-1" />
      {label}
    </Button>
  </a>
);

const GestionSeoLanding = () => {
  usePageTitle("Gestion SEO — 250€/mois");
  useMetaDescription(
    "Gestion locale de votre référencement organique (SEO) pour entreprises de rénovation. 250€/mois, engagement 12 mois. Google, Google Maps, Bing et IA."
  );
  useCanonical("/offre-gestion-seo");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero */}
        <section className="relative pt-20 pb-20 overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-100" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 border-gradient animate-fade-in">
                <Search size={16} className="text-primary" />
                <span className="text-sm font-medium text-foreground/80">Offre Gestion SEO</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.05] tracking-tight animate-slide-up">
                <span className="text-gradient">Gestion SEO</span>
                <br />
                <span className="text-foreground">Référencement organique</span>
              </h1>

              <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto mb-8 animate-fade-in">
                Sortez premier dans votre zone de chalandise sur <strong className="text-foreground">Google, Google Maps, Bing, ChatGPT, Gemini, Claude et Grok</strong>.
              </p>

              {/* Pricing highlight */}
              <div className="max-w-2xl mx-auto mb-10 animate-scale-in">
                <div className="glass-card border-gradient glow-primary p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                    <div className="text-center sm:text-left">
                      <div className="text-5xl sm:text-6xl font-bold text-gradient leading-none">250€</div>
                      <div className="text-sm text-muted-foreground mt-1">HT / mois</div>
                    </div>
                    <div className="hidden sm:block w-px h-16 bg-border" />
                    <div className="text-center sm:text-left">
                      <div className="text-xl sm:text-2xl font-bold text-foreground">Engagement 12 mois</div>
                      <div className="text-sm text-muted-foreground mt-1">Indispensable pour des résultats SEO durables</div>
                    </div>
                  </div>
                </div>
              </div>

              <CTA className="inline-block animate-fade-in" />
              <p className="text-xs text-muted-foreground mt-4">
                Réponse directe sur WhatsApp · +33 6 28 54 59 78
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi 12 mois */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 border-gradient">
                  <Clock size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground/80">Pourquoi un engagement de 12 mois ?</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                  Le SEO ne donne pas de résultats <span className="text-gradient">du jour au lendemain</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Le référencement organique est un travail de fond. Comptez généralement <strong className="text-foreground">6 à 12 mois</strong> avant de générer des demandes tangibles et récurrentes grâce au SEO. C'est le temps nécessaire pour que Google indexe le contenu, évalue l'autorité du site, et fasse remonter vos pages dans les premiers résultats de votre zone.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  C'est précisément pour cette raison que la prestation s'engage sur <strong className="text-foreground">12 mois</strong> : c'est la durée minimum pour mettre en place une stratégie cohérente, produire le contenu nécessaire, optimiser le site, et observer les positions monter durablement.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                {[
                  { months: "0–3 mois", text: "Audit, optimisations techniques et premières publications." },
                  { months: "3–6 mois", text: "Montée progressive des positions sur les mots-clés ciblés." },
                  { months: "6–12 mois", text: "Trafic qualifié et demandes entrantes qui deviennent récurrentes." },
                ].map((step, i) => (
                  <AnimatedSection key={i} delay={i * 0.1} direction="scale">
                    <div className="glass-card p-5 border-gradient h-full">
                      <div className="text-primary font-bold mb-2">{step.months}</div>
                      <p className="text-sm text-muted-foreground">{step.text}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <div className="text-center mt-12">
                <CTA />
              </div>
            </div>
          </div>
        </section>

        {/* Le service */}
        <section className="py-24 relative overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                  Ce qui est <span className="text-gradient">inclus chaque mois</span>
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

            <div className="text-center mt-16">
              <CTA />
            </div>
          </div>
        </section>

        {/* Récapitulatif offre */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <div className="glass-card border-gradient glow-primary p-8 sm:p-10 text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                    Récapitulatif de l'offre
                  </h2>
                  <ul className="text-left space-y-3 mb-8 max-w-xl mx-auto">
                    {[
                      "Gestion complète du référencement organique (SEO)",
                      "Google, Google Maps, Bing + moteurs IA (ChatGPT, Gemini, Claude…)",
                      "Création de contenu, optimisations techniques, suivi des positions",
                      "250€ HT / mois — engagement 12 mois",
                      "Résultats tangibles attendus sous 6 à 12 mois",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <CTA />
                  <p className="text-xs text-muted-foreground mt-4">
                    Réponse directe sur WhatsApp · +33 6 28 54 59 78
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GestionSeoLanding;