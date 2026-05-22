import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionCTA from "@/components/SectionCTA";
import RelatedArticles from "@/components/RelatedArticles";
import { TrendingUp, Star, Camera, Trophy, Play, ArrowRight, CheckCircle2 } from "lucide-react";
import { usePageTitle, useMetaDescription, useCanonical } from "@/hooks/usePageTitle";
import { caseStudies, INDUSTRIES, type Industry } from "@/data/caseStudies";
import ReviewsBands from "@/components/ReviewsBands";

const Results = () => {
  usePageTitle("Résultats partenaires");
  useMetaDescription("Découvrez les résultats concrets de nos partenaires : études de cas, témoignages vidéo et chiffres d'acquisition pour les entreprises de rénovation et du BTP.");
  useCanonical("/resultats-clients-agendac");
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>("Toutes");

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="elfsightcdn.com/platform.js"], script[src*="elfsight.com/platform/platform.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
    window.scrollTo(0, 0);
  }, []);

  const filtered = useMemo(
    () =>
      selectedIndustry === "Toutes"
        ? caseStudies
        : caseStudies.filter((c) => c.industries.includes(selectedIndustry)),
    [selectedIndustry]
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero — 2 columns desktop */}
        <section className="pt-32 pb-16 relative overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-40" />
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
              <AnimatedSection direction="left">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6">
                    <Trophy size={16} className="text-secondary" />
                    <span className="text-sm font-medium text-foreground/80">Résultats partenaires</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                    Vos confrères obtiennent d'
                    <span className="text-gradient">excellents résultats</span> avec Agendac
                  </h1>
                  <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-6">
                    La preuve en chiffres, en vidéos et en rencontres. Chaque entreprise ci-dessous est vérifiable.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><CheckCircle2 size={14} className="text-primary" /> +60 partenaires</span>
                    <span className="inline-flex items-center gap-1.5"><Star size={14} className="text-yellow-500 fill-yellow-500" /> 4.9/5 Google</span>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} direction="right">
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
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Industry filter */}
        <section className="py-8 sticky top-16 z-30 bg-background/85 backdrop-blur-md border-y border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 text-center lg:text-left font-medium">
                Filtrer par industrie
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {INDUSTRIES.map((ind) => {
                  const active = ind === selectedIndustry;
                  return (
                    <button
                      key={ind}
                      type="button"
                      onClick={() => setSelectedIndustry(ind)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                        active
                          ? "bg-primary text-primary-foreground border-primary shadow-md scale-[1.02]"
                          : "bg-background text-foreground/70 border-border hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      {ind}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Logo showcase */}
        <section className="py-12 bg-muted/20 border-y border-border/20">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-6xl mx-auto">
                <div className="elfsight-app-0635f11a-49f9-4b8a-99c5-6896695156b5" data-elfsight-app-lazy />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Case Studies grid (filtered) */}
        <section className="py-16 sm:py-20 relative overflow-hidden bg-background">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <div className="flex items-baseline justify-between mb-8 gap-4 flex-wrap">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                    {selectedIndustry === "Toutes"
                      ? "Toutes les études de cas"
                      : `Études de cas · ${selectedIndustry}`}
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    {filtered.length} étude{filtered.length > 1 ? "s" : ""} de cas
                  </span>
                </div>
              </AnimatedSection>

              {filtered.length === 0 ? (
                <div className="text-center py-20 text-muted-foreground">
                  Aucune étude de cas pour cette industrie pour le moment.
                </div>
              ) : (
                <div
                  key={selectedIndustry}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500"
                >
                  {filtered.map((study) => (
                    <Link
                      key={study.slug}
                      to={`/resultats-clients-agendac/${study.slug}`}
                      className="group glass-card border border-border/40 rounded-2xl overflow-hidden flex flex-col bg-background hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* Thumbnail video */}
                      <div className="relative aspect-video bg-muted overflow-hidden">
                        {study.youtubeEmbedUrl ? (
                          <iframe
                            src={study.youtubeEmbedUrl}
                            loading="lazy"
                            allowFullScreen
                            title={study.name}
                            className="absolute inset-0 w-full h-full"
                          />
                        ) : study.loomId ? (
                          <iframe
                            src={`https://www.loom.com/embed/${study.loomId}`}
                            loading="lazy"
                            allowFullScreen
                            title={study.name}
                            className="absolute inset-0 w-full h-full"
                          />
                        ) : study.photos[0] ? (
                          <img src={study.photos[0].src} alt={study.name} className="w-full h-full object-cover" loading="lazy" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                            <Play size={32} />
                          </div>
                        )}
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {study.industries.map((ind) => (
                            <span
                              key={ind}
                              className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary"
                            >
                              {ind}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-1 leading-tight">
                          {study.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-3">{study.company}</p>
                        <p className="text-sm text-foreground/80 mb-4 line-clamp-3 flex-1">
                          {study.summary}
                        </p>
                        <div className="rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 px-3 py-2 mb-4">
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Résultat clé</p>
                          <p className="text-sm font-bold text-gradient">{study.mainResult}</p>
                        </div>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                          Voir l'étude de cas <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              <SectionCTA className="mt-16" />
            </div>
          </div>
        </section>

        {/* All Google Reviews */}
        <section className="py-20 relative overflow-hidden bg-muted/20">
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-foreground/80">Avis Google</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
                  Ils parlent de leur <span className="text-gradient">expérience</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  S'ils n'étaient pas satisfaits, ils n'auraient aucun mal à l'exprimer !
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="scale">
              <ReviewsBands />
            </AnimatedSection>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-20 relative overflow-hidden bg-background">
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                  <Camera size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground/80">Rencontres</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
                  Dernières rencontres avec vos{" "}
                  <span className="text-gradient-warm">confrères partenaires</span>
                </h2>
                <p className="text-muted-foreground text-lg">Bientôt votre tour... !</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="scale">
              <div className="max-w-6xl mx-auto">
                <div className="elfsight-app-989ab5e2-99fb-4015-ab1f-50030f53aa48" data-elfsight-app-lazy />
              </div>
            </AnimatedSection>
            <SectionCTA className="mt-12" />
          </div>
        </section>

        {/* Desktop-only floating Google badge */}
        <div className="hidden lg:block">
          <div className="elfsight-app-a7ff1cfb-bff4-4e9a-845d-4c2803668e5a" data-elfsight-app-lazy />
        </div>
        <RelatedArticles
          slugs={["choisir-agence-marketing-renovation-btp"]}
          subtitle="Choisir le bon partenaire marketing en rénovation : ce qu'il faut vérifier avant de signer."
        />
      </main>
      <Footer />
    </div>
  );
};

export default Results;
