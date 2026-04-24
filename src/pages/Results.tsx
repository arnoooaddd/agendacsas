import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionCTA from "@/components/SectionCTA";
import { TrendingUp, ExternalLink, Star, Camera, Trophy, Play } from "lucide-react";

import lbdmPhoto from "@/assets/results/lbdm.webp";
import basRencontre from "@/assets/results/bas-rencontre.webp";
import basEquipe from "@/assets/results/bas-equipe.webp";
import lynergiePhoto from "@/assets/results/lynergie.webp";
import plainePhoto from "@/assets/results/plaine-solaire.webp";
import dorianPhoto from "@/assets/results/dorian-climeco.webp";

interface CaseStudy {
  name: string;
  headline: string;
  company: string;
  siren: string;
  website?: string;
  before?: string;
  after?: string;
  loomId?: string;
  elfsightReviewId?: string;
  googleReviewLink?: string;
  photos: { src: string; caption: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    name: "La Boutique du Menuisier",
    headline: "+2 commerciaux embauchés en 90 jours pour suivre la demande",
    company: "La Boutique du Menuisier",
    siren: "811662766",
    website: "https://laboutiquedumenuisier.fr",
    loomId: "c62dc9c3f6394a5c896c8234c396ae6a",
    photos: [{ src: lbdmPhoto, caption: "Rencontre avec les gérants — Janvier 2026" }],
  },
  {
    name: "Camille BAS",
    headline: "47% de transformation",
    company: "Avenir Energie SAS",
    siren: "922344551",
    before: "Dépendance au bouche-à-oreille, pas de croissance maîtrisée.",
    after: "x7,2 sur son investissement initial en 32 jours.",
    loomId: "486a59765db8471e9175bc7dc26ee5dc",
    elfsightReviewId: "8cf0bfac-5dd3-4a72-bdb0-c6a2b8f0ec73",
    googleReviewLink: "https://maps.app.goo.gl/83onr3AhDpU9mGnt9",
    photos: [
      { src: basRencontre, caption: "Rencontre avec Camille — Janvier 2025" },
      { src: basEquipe, caption: "Équipe de 10 personnes au total" },
    ],
  },
  {
    name: "Stéphane Viard",
    headline: "+2 embauches après 6 mois de collaboration",
    company: "Lynergie SARL",
    siren: "893676015",
    website: "https://lynergie.fr",
    before: "100% d'entrants via le bouche-à-oreille.",
    after: "Acquisition digitale maîtrisée, 60% de signatures venant d'Agendac.",
    loomId: "5ed556b972924eedbea2a01d988d9221",
    elfsightReviewId: "2f790124-1ac3-4a5e-9392-fa54f2386cfb",
    googleReviewLink: "https://maps.app.goo.gl/1XPBTinq4aVMteWu5",
    photos: [{ src: lynergiePhoto, caption: "Rencontre avec Stéphane — Janvier 2025" }],
  },
  {
    name: "Olivier TUBEUF",
    headline: "+600 000 € de CA en 4 mois",
    company: "Avenir Conseils Habitat Consulting SAS",
    siren: "907941777",
    before: "10 000 € de budget mensuel de leads et plateformes de mise en relation, 0 résultats.",
    after: "+600 000 € générés grâce à l'infrastructure Agendac en 4 mois de collaboration.",
    loomId: "047c8bbfb0ff450fbe57eb827b577394",
    elfsightReviewId: "7192817d-9083-4f15-bbd6-ad31e58b1d65",
    googleReviewLink: "https://maps.app.goo.gl/WrBcUhBEYcF9nKfZA",
    photos: [],
  },
  {
    name: "Anthony PROPERZIO",
    headline: "11 signatures sur 18 RDV de son premier pack Agendac",
    company: "Stores et Fenêtres du Golfe",
    siren: "",
    before: "Entrants liés uniquement au bouche-à-oreille, dans un secteur premium très concurrentiel (pergolas et menuiseries haut de gamme dans le Golfe de Saint-Tropez).",
    after: "11/18 signés sur son premier pack de rendez-vous Agendac. Demandes régulières et prospects vraiment qualifiés. Collaboration lancée en décembre 2025.",
    loomId: "1f323a8804894ab886bcccc0aee2d361",
    photos: [],
  },
  {
    name: "Fabio VALERO",
    headline: "100% des demandes qualifiées",
    company: "BAS Construction",
    siren: "952429967",
    before: "Peu de visibilité en ligne.",
    after: "93% de rendez-vous pertinents, un planning rempli.",
    loomId: "1fb4dd4067094adb9422a1e9a0c42500",
    elfsightReviewId: "458e6f96-6f95-4a01-805b-f652d0c986b5",
    googleReviewLink: "https://maps.app.goo.gl/igVcjpsA1EWhU2Qy9",
    photos: [],
  },
  {
    name: "Burhan Unalan",
    headline: "23 rendez-vous qualifiés par mois en moyenne",
    company: "UNLN Batiments (Plaine Solaire) SAS",
    siren: "817973837",
    website: "https://plaine-solaire.fr",
    before: "Chantiers 100% via le bouche-à-oreille, fluctuations dues aux aléas de l'industrie.",
    after: "Demande entrante maîtrisée, rendez-vous chaque semaine même pendant les périodes tranquilles.",
    elfsightReviewId: "f328e299-e046-405c-a121-2857dc1863d8",
    googleReviewLink: "https://maps.app.goo.gl/JRRB2dM5GyNDqEH68",
    photos: [{ src: plainePhoto, caption: "Rencontre avec M. Unalan à Veauche — Août 2025" }],
  },
  {
    name: "Dorian Perreaut",
    headline: "Premiers résultats sous 15 jours de lancement",
    company: "Climeco Plomberie SASU",
    siren: "913332102",
    website: "https://www.climeco-plomberie.fr",
    before: "Testé travaux.com, Pages Jaunes, Solocal, affiches, flyers... Aucun résultat et bloqué par contrat.",
    after: "Recruté 3 personnes en plus et ouvert une branche peinture (Climeco Peinture).",
    loomId: "959c01c42bde455bb1fef702f504dd0b",
    elfsightReviewId: "7d0b2930-81ae-4bc7-82da-ee1cd7dd8da0",
    googleReviewLink: "https://maps.app.goo.gl/iVV3nzJJ532BXpMDA",
    photos: [{ src: dorianPhoto, caption: "Rencontre avec Dorian — Avril 2024" }],
  },
];

const Results = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-40" />
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6">
                  <Trophy size={16} className="text-secondary" />
                  <span className="text-sm font-medium text-foreground/80">Résultats partenaires</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                  Vos confrères obtiennent d'
                  <span className="text-gradient">excellents résultats</span> avec Agendac
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                  La preuve en chiffres, en vidéos et en rencontres. Chaque entreprise ci-dessous est vérifiable.
                </p>
              </div>
            </AnimatedSection>

            {/* Hero Loom highlight video */}
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

        {/* Case Studies */}
        {caseStudies.map((study, index) => (
          <section
            key={index}
            className={`py-16 sm:py-20 relative overflow-hidden ${index % 2 === 0 ? "bg-background" : "bg-muted/20"}`}
          >
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                {/* Case study number */}
                <AnimatedSection>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="h-px flex-1 bg-border/40" />
                    <div className="inline-flex items-center gap-2 glass-card px-4 py-2">
                      <TrendingUp size={14} className="text-primary" />
                      <span className="text-xs font-medium text-muted-foreground">Étude de cas</span>
                    </div>
                  </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* LEFT COLUMN — Client info + photos */}
                  <AnimatedSection direction="left">
                    <div className="space-y-5">
                      {/* Name & headline */}
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 tracking-tight">{study.name}</h2>
                        <p className="text-lg font-semibold">
                          <span className="text-gradient">{study.headline}</span>
                        </p>
                      </div>

                      {/* Company details */}
                      <div className="space-y-1.5 text-sm">
                        <p className="font-semibold text-foreground">Société {study.company}</p>
                        {study.siren && (
                          <p className="text-muted-foreground">SIREN : {study.siren}</p>
                        )}
                        {study.website && (
                          <a href={study.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline text-sm">
                            <ExternalLink size={13} /> {study.website.replace("https://", "").replace("www.", "")}
                          </a>
                        )}
                      </div>

                      {/* Before / After */}
                      {(study.before || study.after) && (
                        <div className="space-y-2.5">
                          {study.before && (
                            <div className="rounded-xl p-4 bg-red-50 border border-red-100">
                              <p className="text-xs font-bold text-red-500 uppercase tracking-wide mb-1">Avant</p>
                              <p className="text-sm text-foreground/80">{study.before}</p>
                            </div>
                          )}
                          {study.after && (
                            <div className="rounded-xl p-4 bg-green-50 border border-green-100">
                              <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-1">Aujourd'hui</p>
                              <p className="text-sm text-foreground/80">{study.after}</p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Photos */}
                      {study.photos.length > 0 && (
                        <div className="space-y-3">
                          {study.photos.map((photo, pi) => (
                            <div key={pi} className="rounded-2xl overflow-hidden border border-border/30 shadow-sm">
                              <img src={photo.src} alt={photo.caption} className="w-full h-auto object-cover" loading="lazy" />
                              <div className="px-4 py-2.5 bg-muted/30">
                                <p className="text-xs text-muted-foreground text-center">{photo.caption}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </AnimatedSection>

                  {/* RIGHT COLUMN — Video + Elfsight review + Google link */}
                  <AnimatedSection direction="right" delay={0.1}>
                    <div className="space-y-5 lg:sticky lg:top-28">
                      {/* Loom */}
                      {study.loomId && (
                        <div className="rounded-2xl overflow-hidden border border-border/30 shadow-sm">
                          <div className="relative aspect-video bg-card">
                            <iframe
                              src={`https://www.loom.com/embed/${study.loomId}`}
                              frameBorder="0"
                              loading="lazy"
                              allowFullScreen
                              className="absolute inset-0 w-full h-full"
                            />
                          </div>
                        </div>
                      )}

                      {/* Elfsight review */}
                      {study.elfsightReviewId && (
                        <div className="rounded-2xl border border-border/30 p-5 bg-background shadow-sm">
                          <div className="flex items-center gap-2 mb-3">
                            <Star size={14} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-xs font-medium text-muted-foreground">Avis Google vérifié</span>
                          </div>
                          <div className={`elfsight-app-${study.elfsightReviewId}`} data-elfsight-app-lazy />
                        </div>
                      )}

                      {/* Google review link */}
                      {study.googleReviewLink && (
                        <a
                          href={study.googleReviewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-primary hover:underline transition-colors"
                        >
                          <ExternalLink size={14} />
                          Lien de l'avis Google
                        </a>
                      )}
                    </div>
                  </AnimatedSection>
                </div>

                <SectionCTA className="mt-12" />
              </div>
            </div>
          </section>
        ))}

        {/* All Google Reviews */}
        <section className="py-20 relative overflow-hidden bg-muted/20">
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-foreground/80">Tous nos avis</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
                  Nos avis <span className="text-gradient">Google</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  S'ils n'étaient pas satisfaits, ils n'auraient aucun mal à l'exprimer !
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="scale">
              <div className="max-w-6xl mx-auto rounded-2xl border border-border/30 p-5 bg-background shadow-sm">
                <div className="elfsight-app-7b392c24-b2f9-41a6-a0a1-e7b021fe02f7" data-elfsight-app-lazy />
              </div>
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
      </main>
      <Footer />
    </div>
  );
};

export default Results;
