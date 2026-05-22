import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionCTA from "@/components/SectionCTA";
import ReviewsBands from "@/components/ReviewsBands";
import { getCaseStudyBySlug } from "@/data/caseStudies";
import { usePageTitle, useMetaDescription, useCanonical } from "@/hooks/usePageTitle";
import { ArrowLeft, ExternalLink, Star, CheckCircle2, TrendingUp, Trophy } from "lucide-react";

const CaseStudyPage = () => {
  const { slug = "" } = useParams();
  const study = getCaseStudyBySlug(slug);

  usePageTitle(study ? `${study.name} — Étude de cas` : "Étude de cas");
  useMetaDescription(
    study
      ? `${study.name} (${study.company}) : ${study.mainResult}. ${study.summary}`
      : "Étude de cas partenaire Agendac."
  );
  useCanonical(`/resultats-clients-agendac/${slug}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) return <Navigate to="/resultats-clients-agendac" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 relative overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-40" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <Link
                to="/resultats-clients-agendac"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft size={14} /> Retour aux résultats
              </Link>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <AnimatedSection direction="left">
                  <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-5">
                    <Trophy size={14} className="text-secondary" />
                    <span className="text-xs font-medium text-foreground/80">Étude de cas partenaire</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.industries.map((ind) => (
                      <span
                        key={ind}
                        className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 tracking-tight leading-tight">
                    {study.name}
                  </h1>
                  <p className="text-base text-muted-foreground mb-5">
                    Société <span className="font-semibold text-foreground">{study.company}</span>
                    {study.siren && <> · SIREN {study.siren}</>}
                  </p>
                  <p className="text-lg text-foreground/85 mb-6">{study.summary}</p>
                  <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 px-5 py-4 mb-6">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Résultat principal</p>
                    <p className="text-2xl font-bold text-gradient leading-tight">{study.mainResult}</p>
                  </div>
                  {study.website && (
                    <a
                      href={study.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                    >
                      <ExternalLink size={14} /> {study.website.replace("https://", "").replace("www.", "")}
                    </a>
                  )}
                </AnimatedSection>

                <AnimatedSection direction="right" delay={0.1}>
                  <div className="glass-card p-2 sm:p-3 border-gradient glow-primary">
                    {study.loomId ? (
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-card shadow-lg">
                        <iframe
                          src={`https://www.loom.com/embed/${study.loomId}`}
                          frameBorder="0"
                          loading="lazy"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                    ) : study.youtubeEmbedUrl ? (
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-card shadow-lg">
                        <iframe
                          src={study.youtubeEmbedUrl}
                          loading="lazy"
                          allowFullScreen
                          title={study.name}
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                    ) : study.photos[0] ? (
                      <img src={study.photos[0].src} alt={study.name} className="w-full h-auto rounded-xl object-cover" />
                    ) : null}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Contexte / Avant / Solution / Résultats */}
        <section className="py-16 bg-muted/20 border-y border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.before && (
                <AnimatedSection>
                  <div className="rounded-2xl p-6 bg-red-50 border border-red-100 h-full">
                    <p className="text-xs font-bold text-red-500 uppercase tracking-wide mb-2">Avant Agendac</p>
                    <p className="text-sm text-foreground/85 leading-relaxed">{study.before}</p>
                  </div>
                </AnimatedSection>
              )}
              {study.after && (
                <AnimatedSection delay={0.1}>
                  <div className="rounded-2xl p-6 bg-green-50 border border-green-100 h-full">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-2">Aujourd'hui</p>
                    <p className="text-sm text-foreground/85 leading-relaxed">{study.after}</p>
                  </div>
                </AnimatedSection>
              )}
              {study.problem && (
                <AnimatedSection delay={0.15}>
                  <div className="rounded-2xl p-6 bg-background border border-border/40 h-full">
                    <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-2">Problème rencontré</p>
                    <p className="text-sm text-foreground/85 leading-relaxed">{study.problem}</p>
                  </div>
                </AnimatedSection>
              )}
              {study.solution && (
                <AnimatedSection delay={0.2}>
                  <div className="rounded-2xl p-6 bg-background border border-primary/30 h-full">
                    <p className="text-xs font-bold text-primary uppercase tracking-wide mb-2">Ce qu'Agendac a mis en place</p>
                    <p className="text-sm text-foreground/85 leading-relaxed">{study.solution}</p>
                  </div>
                </AnimatedSection>
              )}
            </div>

            {study.results && study.results.length > 0 && (
              <div className="max-w-5xl mx-auto mt-10">
                <AnimatedSection>
                  <div className="flex items-center gap-2 mb-5">
                    <TrendingUp size={18} className="text-primary" />
                    <h2 className="text-xl font-bold text-foreground">Résultats obtenus</h2>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {study.results.map((r, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 rounded-xl bg-background border border-border/40 p-4"
                      >
                        <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/85">{r}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              </div>
            )}
          </div>
        </section>

        {/* Photos / preuves */}
        {study.photos.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {study.photos.map((photo, pi) => (
                  <div key={pi} className="rounded-2xl overflow-hidden border border-border/30 shadow-sm">
                    <img src={photo.src} alt={photo.caption} className="w-full h-auto object-cover" loading="lazy" />
                    <div className="px-4 py-2.5 bg-muted/30">
                      <p className="text-xs text-muted-foreground text-center">{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Avis Google du client */}
        {study.manualReview && (
          <section className="py-16 bg-muted/20 border-y border-border/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <AnimatedSection>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-4">
                      <Star size={14} className="fill-yellow-500 text-yellow-500" />
                      <span className="text-xs font-medium text-foreground/80">Avis Google vérifié</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                      L'avis de <span className="text-gradient">{study.manualReview.author}</span>
                    </h2>
                  </div>
                  <div className="rounded-2xl border border-border/40 p-6 bg-background shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {study.manualReview.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground">{study.manualReview.author}</p>
                        {study.manualReview.date && (
                          <p className="text-xs text-muted-foreground">{study.manualReview.date}</p>
                        )}
                      </div>
                      <img
                        src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                        alt="Google"
                        className="w-5 h-5 flex-shrink-0"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: study.manualReview.rating ?? 5 }).map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-sm text-foreground/85 leading-relaxed whitespace-pre-line">
                      {study.manualReview.text}
                    </p>
                    {study.googleReviewLink && (
                      <a
                        href={study.googleReviewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-4 text-sm text-primary hover:underline"
                      >
                        <ExternalLink size={14} /> Voir l'avis sur Google
                      </a>
                    )}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        )}

        {/* Autres avis Agendac */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                D'autres confrères témoignent
              </h2>
            </div>
            <ReviewsBands />
          </div>
        </section>

        <SectionCTA className="mb-20" />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyPage;