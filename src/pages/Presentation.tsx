import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviews from "@/components/GoogleReviews";
import AnimatedSection from "@/components/AnimatedSection";
import { X, Check, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/usePageTitle";

const Presentation = () => {
  usePageTitle("Présentation");
  useEffect(() => {
    window.scrollTo(0, 0);
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero 2 colonnes */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-100" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              {/* Colonne gauche : YouTube Short */}
              <AnimatedSection direction="scale">
                <div
                  className="mx-auto w-full"
                  style={{
                    maxWidth: 400,
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow: "0 6px 24px rgba(0,0,0,.12)",
                    aspectRatio: "9 / 16",
                    background: "#000",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/KPKC1RTiUxE"
                    title="YouTube Short player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    style={{ width: "100%", height: "100%", border: 0, display: "block" }}
                  />
                </div>
              </AnimatedSection>

              {/* Colonne droite : Ce que nous faisons / ne faisons pas */}
              <AnimatedSection delay={0.1}>
                <div className="space-y-6">
                  <div className="glass-card p-6 border-gradient bg-white/80">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                        <X size={20} className="text-destructive" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">Ce que nous ne faisons pas</h2>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Pratiques courantes du marché que nous refusons.</p>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li className="flex gap-2"><X size={16} className="text-destructive flex-shrink-0 mt-0.5" /> Nous ne vendons pas de leads (et encore moins les mêmes à 5 autres entreprises).</li>
                      <li className="flex gap-2"><X size={16} className="text-destructive flex-shrink-0 mt-0.5" /> Nous ne faisons pas de promesses de subventions qui n'existent pas.</li>
                      <li className="flex gap-2"><X size={16} className="text-destructive flex-shrink-0 mt-0.5" /> Nous ne sommes pas une agence de communication qui engloutit vos budgets publicitaires.</li>
                      <li className="flex gap-2"><X size={16} className="text-destructive flex-shrink-0 mt-0.5" /> Nous ne proposons pas de call centers à l'étranger.</li>
                    </ul>
                  </div>

                  <div className="glass-card p-6 border-gradient bg-white/80">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Check size={20} className="text-primary" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">Ce que nous faisons</h2>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">À la place, nous apportons :</p>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li className="flex gap-2"><Check size={16} className="text-primary flex-shrink-0 mt-0.5" /> L'ouverture de nouveaux canaux d'acquisition : pour ne plus dépendre uniquement du bouche-à-oreille, du « contexte économique tendu », des périodes creuses, de la concurrence, des agences de leads ou de la sous-traitance.</li>
                      <li className="flex gap-2"><Check size={16} className="text-primary flex-shrink-0 mt-0.5" /> Un retour sur investissement clair et mesurable.</li>
                      <li className="flex gap-2"><Check size={16} className="text-primary flex-shrink-0 mt-0.5" /> Un partenariat fiable et long terme.</li>
                    </ul>
                  </div>

                  <Button asChild variant="secondary" size="lg" className="group glow-secondary">
                    <a href="/rdv" className="flex items-center gap-2">
                      Prendre rendez-vous
                      <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Interview clients Agendac */}
        <section className="py-20 relative overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-40" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
                  Interview de vos confrères,{" "}
                  <span className="text-gradient-warm">partenaires Agendac</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="text-muted-foreground text-lg">Découvrez leurs retours d'expérience</p>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} direction="scale">
              <div className="max-w-4xl mx-auto">
                <div className="glass-card p-2 sm:p-3 border-gradient glow-primary">
                  <div className="flex items-center gap-2 px-3 py-2 mb-2">
                    <Play size={14} className="text-primary" />
                    <span className="text-xs font-medium text-muted-foreground">Moments clés des interviews</span>
                  </div>
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-card shadow-lg">
                    <iframe
                      src="https://www.loom.com/embed/c16266ef4214491eae19d087e0e02eea"
                      frameBorder="0"
                      loading="lazy"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <GoogleReviews />
      </main>
      <Footer />
    </div>
  );
};

export default Presentation;
