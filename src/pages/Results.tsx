import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionCTA from "@/components/SectionCTA";
import RelatedArticles from "@/components/RelatedArticles";
import { Star, Camera, Trophy, Play, ArrowRight, CheckCircle2, Filter, ExternalLink, Building2 } from "lucide-react";
import { usePageTitle, useMetaDescription, useCanonical } from "@/hooks/usePageTitle";
import { caseStudies, INDUSTRIES, type Industry, type CaseStudy } from "@/data/caseStudies";
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

  const handleIndustryChange = (ind: Industry) => {
    setSelectedIndustry(ind);
    if (typeof window !== "undefined") {
      const el = document.getElementById("etudes-de-cas");
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

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
        {/* Prominent industry selector */}
        <section className="py-14 sm:py-16 relative bg-gradient-to-b from-background to-primary/5 border-y border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-5">
                    <Filter size={16} className="text-primary" />
                    <span className="text-sm font-medium text-foreground/80">Filtrer par industrie</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
                    Choisissez votre <span className="text-gradient">secteur d'activité</span>
                  </h2>
                  <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                    Voyez uniquement les études de cas et avis Google pertinents pour votre métier.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center sm:overflow-visible scrollbar-none">
                  {INDUSTRIES.map((ind) => {
                    const active = ind === selectedIndustry;
                    return (
                      <button
                        key={ind}
                        type="button"
                        onClick={() => handleIndustryChange(ind)}
                        className={`flex-shrink-0 px-5 py-3 rounded-full text-sm sm:text-base font-semibold border-2 transition-all duration-200 ${
                          active
                            ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30 scale-105"
                            : "bg-background text-foreground border-border hover:border-primary hover:text-primary hover:scale-105"
                        }`}
                      >
                        {ind}
                      </button>
                    );
                  })}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Sticky compact filter */}
        <div className="sticky top-16 z-30 bg-background/90 backdrop-blur-md border-b border-border/40 py-3">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto scrollbar-none">
              {INDUSTRIES.map((ind) => {
                const active = ind === selectedIndustry;
                return (
                  <button
                    key={ind}
                    type="button"
                    onClick={() => handleIndustryChange(ind)}
                    className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                      active
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground/70 border-border hover:border-primary/40"
                    }`}
                  >
                    {ind}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

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

        {/* Case Studies — long-form blocks */}
        <section id="etudes-de-cas" className="py-16 sm:py-20 relative overflow-hidden bg-background">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <div className="flex items-baseline justify-between mb-10 gap-4 flex-wrap">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                    {selectedIndustry === "Toutes"
                      ? "Toutes les études de cas partenaires"
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
                <div key={selectedIndustry} className="space-y-12 animate-in fade-in duration-500">
                  {filtered.map((study, idx) => (
                    <CaseStudyBlock
                      key={study.slug}
                      study={study}
                      isLast={idx === filtered.length - 1}
                      onIndustryClick={handleIndustryChange}
                    />
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

interface CaseStudyBlockProps {
  study: CaseStudy;
  isLast: boolean;
  onIndustryClick: (ind: Industry) => void;
}

const CaseStudyBlock = ({ study, isLast, onIndustryClick }: CaseStudyBlockProps) => {
  const review = study.googleReview ?? study.manualReview;
  const hasMedia = !!(study.youtubeEmbedUrl || study.loomId || study.photos[0]);
  const videos = study.videos ?? [];
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <article className="relative">
      <div className="glass-card border border-border/50 rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-background to-primary/[0.03] shadow-sm">
        {/* Header */}
        <header className="mb-6 pb-6 border-b border-border/40">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {study.industries.map((ind) => (
              <button
                key={ind}
                type="button"
                onClick={() => onIndustryClick(ind)}
                className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {ind}
              </button>
            ))}
          </div>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                <Building2 size={14} />
                <span>{study.company}</span>
                {study.website && (
                  <a
                    href={study.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    <ExternalLink size={11} /> site
                  </a>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                {study.name}
              </h3>
              {study.headline && (
                <p className="text-base sm:text-lg text-foreground/80 mt-2 max-w-2xl">
                  {study.headline}
                </p>
              )}
            </div>
            <div className="rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 px-4 py-3">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Résultat clé</p>
              <p className="text-base sm:text-lg font-bold text-gradient">{study.mainResult}</p>
            </div>
          </div>
        </header>

        {/* Body — 2 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: context + results + review */}
          <div className="space-y-5">
            {study.summary && (
              <p className="text-foreground/80 leading-relaxed">{study.summary}</p>
            )}
            {study.problem && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Problème</p>
                <p className="text-sm text-foreground/80">{study.problem}</p>
              </div>
            )}
            {study.solution && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Solution Agendac</p>
                <p className="text-sm text-foreground/80">{study.solution}</p>
              </div>
            )}
            {study.results && study.results.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Résultats</p>
                <ul className="space-y-1.5">
                  {study.results.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-foreground/85">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {review && (
              <div className="rounded-2xl border border-border/60 bg-white/80 p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    {review.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground truncate">{review.author}</p>
                    {review.date && (
                      <p className="text-xs text-muted-foreground truncate">{review.date}</p>
                    )}
                  </div>
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                    alt="Google"
                    className="w-5 h-5"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-0.5 mb-2">
                  {Array.from({ length: review.rating ?? 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed">{review.text}</p>
                {study.googleReviewLink && (
                  <a
                    href={study.googleReviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-primary hover:underline"
                  >
                    <ExternalLink size={12} /> Voir sur Google
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right: media */}
          <div className="space-y-4">
            {hasMedia ? (
              <>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted shadow-md border border-border/40">
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
                  ) : (
                    <img
                      src={study.photos[0].src}
                      alt={study.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                {study.photos.length > 0 && (study.youtubeEmbedUrl || study.loomId) && (
                  <div className="grid grid-cols-2 gap-3">
                    {study.photos.slice(0, 2).map((p) => (
                      <figure key={p.src} className="rounded-xl overflow-hidden border border-border/40">
                        <img src={p.src} alt={p.caption} loading="lazy" className="w-full h-32 object-cover" />
                      </figure>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="aspect-video rounded-2xl border-2 border-dashed border-border/60 bg-muted/30 flex flex-col items-center justify-center text-muted-foreground gap-2">
                <Camera size={28} />
                <p className="text-sm font-medium">Média à ajouter</p>
                <p className="text-xs">Interview vidéo / photos bientôt disponibles</p>
              </div>
            )}
          </div>
        </div>

        {videos.length > 0 && (
          <div className="mt-8 pt-6 border-t border-border/40">
            <div className="flex items-baseline justify-between flex-wrap gap-2 mb-4">
              <h4 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                Vidéos tournées avec {study.company}
              </h4>
              <span className="text-xs text-muted-foreground">{videos.length} vidéo{videos.length > 1 ? "s" : ""}</span>
            </div>
            <div className="flex gap-4 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible snap-x snap-mandatory pb-2 -mx-2 px-2 sm:mx-0 sm:px-0">
              {videos.map((v, i) => {
                const id = extractYouTubeId(v.url);
                const isPortrait = v.format !== "16:9";
                return (
                  <div key={`${study.slug}-vid-${i}`} className="snap-start flex-shrink-0 w-[70%] sm:w-auto">
                    <div
                      className={`relative rounded-2xl overflow-hidden bg-muted shadow-md border border-border/40 ${
                        isPortrait ? "aspect-[9/16]" : "aspect-video"
                      }`}
                    >
                      {id ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                          loading="lazy"
                          allowFullScreen
                          title={v.label || `${study.name} vidéo ${i + 1}`}
                          className="absolute inset-0 w-full h-full"
                        />
                      ) : null}
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <span className="text-xs text-foreground/70 truncate">{v.label}</span>
                      {v.industry && (
                        <button
                          type="button"
                          onClick={() => onIndustryClick(v.industry as Industry)}
                          className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex-shrink-0"
                        >
                          {v.industry}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer: cross-filter + CTA */}
        <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {study.industries.filter((i) => i !== "Autre").slice(0, 3).map((ind) => (
              <button
                key={ind}
                type="button"
                onClick={() => onIndustryClick(ind)}
                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                <ArrowRight size={12} /> Voir d'autres résultats en {ind}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            Voir comment Agendac peut faire pareil pour vous
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {!isLast && (
        <div className="flex items-center justify-center py-6">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
          <Trophy size={16} className="mx-4 text-primary/40" />
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      )}
    </article>
  );
};
