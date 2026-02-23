import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionCTA from "@/components/SectionCTA";
import { TrendingUp, Phone, ExternalLink, Quote, Star, Camera, Trophy } from "lucide-react";

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
  phone?: string;
  phoneName?: string;
  website?: string;
  before?: string;
  after?: string;
  loomId?: string;
  elfsightReviewId?: string;
  photos: { src: string; caption: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    name: "La Boutique du Menuisier",
    headline: "+2 commerciaux embauchés en 90 jours pour suivre la demande",
    company: "La Boutique du Menuisier",
    siren: "811662766",
    phone: "06 42 07 36 46",
    phoneName: "Fabien Blondeau",
    website: "https://laboutiquedumenuisier.fr",
    loomId: "c62dc9c3f6394a5c896c8234c396ae6a",
    photos: [{ src: lbdmPhoto, caption: "Rencontre avec les gérants — Janvier 2026" }],
  },
  {
    name: "Camille BAS",
    headline: "47% de transformation",
    company: "Avenir Energie SAS",
    siren: "922344551",
    phone: "06 87 18 94 45",
    phoneName: "Camille",
    before: "Dépendance au bouche-à-oreille, pas de croissance maîtrisée.",
    after: "x7,2 sur son investissement initial en 32 jours.",
    loomId: "2c3056d9a2c249319ebda1af5158a722",
    elfsightReviewId: "8cf0bfac-5dd3-4a72-bdb0-c6a2b8f0ec73",
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
    phone: "06 23 66 68 39",
    phoneName: "Stéphane",
    website: "https://lynergie.fr",
    before: "100% d'entrants via le bouche-à-oreille.",
    after: "Acquisition digitale maîtrisée, 60% de signatures venant d'Agendac.",
    loomId: "5ed556b972924eedbea2a01d988d9221",
    elfsightReviewId: "2f790124-1ac3-4a5e-9392-fa54f2386cfb",
    photos: [{ src: lynergiePhoto, caption: "Rencontre avec Stéphane — Janvier 2025" }],
  },
  {
    name: "Olivier TUBEUF",
    headline: "+600 000 € de CA en 4 mois",
    company: "Avenir Conseils Habitat Consulting SAS",
    siren: "907941777",
    phone: "06 18 01 94 27",
    phoneName: "Olivier",
    before: "10 000 € de budget mensuel de leads et plateformes de mise en relation, 0 résultats.",
    after: "+600 000 € générés grâce à l'infrastructure Agendac en 4 mois de collaboration.",
    loomId: "047c8bbfb0ff450fbe57eb827b577394",
    elfsightReviewId: "7192817d-9083-4f15-bbd6-ad31e58b1d65",
    photos: [],
  },
  {
    name: "Fabio VALERO",
    headline: "100% des demandes qualifiées",
    company: "BAS Construction",
    siren: "952429967",
    phone: "06 62 26 07 90",
    phoneName: "Fabio",
    before: "Peu de visibilité en ligne.",
    after: "93% de rendez-vous pertinents, un planning rempli.",
    loomId: "1fb4dd4067094adb9422a1e9a0c42500",
    elfsightReviewId: "458e6f96-6f95-4a01-805b-f652d0c986b5",
    photos: [],
  },
  {
    name: "Burhan Unalan",
    headline: "23 rendez-vous qualifiés par mois en moyenne",
    company: "UNLN Batiments (Plaine Solaire) SAS",
    siren: "817973837",
    phone: "06 23 66 68 39",
    phoneName: "Burhan",
    website: "https://plaine-solaire.fr",
    before: "Chantiers 100% via le bouche-à-oreille, fluctuations dues aux aléas de l'industrie.",
    after: "Demande entrante maîtrisée, rendez-vous chaque semaine même pendant les périodes tranquilles.",
    elfsightReviewId: "f328e299-e046-405c-a121-2857dc1863d8",
    photos: [{ src: plainePhoto, caption: "Rencontre avec M. Unalan à Veauche — Août 2025" }],
  },
  {
    name: "Dorian Perreaut",
    headline: "Premiers résultats sous 15 jours de lancement",
    company: "Climeco Plomberie SASU",
    siren: "913332102",
    phone: "07 88 22 08 15",
    phoneName: "Dorian",
    website: "https://www.climeco-plomberie.fr",
    before: "Testé travaux.com, Pages Jaunes, Solocal, affiches, flyers... Aucun résultat et bloqué par contrat.",
    after: "Recruté 3 personnes en plus et ouvert une branche peinture (Climeco Peinture).",
    loomId: "959c01c42bde455bb1fef702f504dd0b",
    elfsightReviewId: "7d0b2930-81ae-4bc7-82da-ee1cd7dd8da0",
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
        <section className="pt-32 pb-16 relative overflow-hidden bg-[#DFF1FF]">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 bg-white/80">
                  <Trophy size={16} className="text-secondary" />
                  <span className="text-sm font-medium text-foreground/80">Résultats vérifiables</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                  Vos confrères obtiennent d'
                  <span className="text-gradient">excellents résultats</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  La preuve en chiffres, en vidéos et en rencontres. Chaque entreprise ci-dessous est vérifiable.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Logo showcase */}
        <section className="py-12 bg-background border-b border-border/30">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-6xl mx-auto">
                <div className="elfsight-app-b1e000b2-31a9-48e4-8175-d63a0e2fdacd" data-elfsight-app-lazy />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Case Studies */}
        {caseStudies.map((study, index) => (
          <section
            key={index}
            className={`py-20 relative overflow-hidden ${index % 2 === 0 ? "bg-[#DFF1FF]" : "bg-background"}`}
          >
            <div className="absolute inset-0 gradient-mesh opacity-20" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* LEFT COLUMN — Client info + photos */}
                  <AnimatedSection direction="left">
                    <div className="space-y-6">
                      {/* Name & headline */}
                      <div>
                        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-4 bg-white/80">
                          <TrendingUp size={16} className="text-primary" />
                          <span className="text-sm font-medium text-foreground/80">Étude de cas</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 tracking-tight">{study.name}</h2>
                        <p className="text-xl font-semibold mb-4">
                          <span className="text-gradient">{study.headline}</span>
                        </p>
                      </div>

                      {/* Company details */}
                      <div className="space-y-2 text-sm text-foreground">
                        <p className="font-semibold text-base">Société {study.company}</p>
                        <p className="text-muted-foreground italic">SIREN : {study.siren}</p>
                        {study.website && (
                          <a href={study.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                            <ExternalLink size={14} /> {study.website.replace("https://", "").replace("www.", "")}
                          </a>
                        )}
                        {study.phone && (
                          <p className="flex items-center gap-1">
                            <Phone size={14} className="text-primary" /> Ligne directe {study.phoneName} : {study.phone}
                          </p>
                        )}
                      </div>

                      {/* Before / After */}
                      {(study.before || study.after) && (
                        <div className="space-y-3">
                          {study.before && (
                            <div className="glass-card p-5 bg-white/80 border-l-4 border-red-400">
                              <p className="text-sm font-semibold text-red-500 mb-1">Avant</p>
                              <p className="text-sm text-foreground">{study.before}</p>
                            </div>
                          )}
                          {study.after && (
                            <div className="glass-card p-5 bg-white/80 border-l-4 border-green-500">
                              <p className="text-sm font-semibold text-green-600 mb-1">Aujourd'hui</p>
                              <p className="text-sm text-foreground">{study.after}</p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Photos */}
                      {study.photos.length > 0 && (
                        <div className="space-y-4">
                          {study.photos.map((photo, pi) => (
                            <div key={pi} className="glass-card p-3 bg-white/80 border-gradient">
                              <div className="rounded-xl overflow-hidden">
                                <img src={photo.src} alt={photo.caption} className="w-full h-auto object-cover" loading="lazy" />
                              </div>
                              <p className="text-sm text-muted-foreground mt-3 text-center">{photo.caption}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </AnimatedSection>

                  {/* RIGHT COLUMN — Video + Elfsight review */}
                  <AnimatedSection direction="right" delay={0.15}>
                    <div className="space-y-6 lg:sticky lg:top-28">
                      {/* Loom */}
                      {study.loomId && (
                        <div className="glass-card p-3 border-gradient bg-white/80">
                          <div className="relative aspect-video rounded-xl overflow-hidden bg-card shadow-lg">
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
                        <div className="glass-card p-6 bg-white/80 border-gradient">
                          <div className="flex items-center gap-2 mb-4">
                            <Star size={16} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-medium text-foreground/80">Avis Google vérifié</span>
                          </div>
                          <div className={`elfsight-app-${study.elfsightReviewId}`} data-elfsight-app-lazy />
                        </div>
                      )}
                    </div>
                  </AnimatedSection>
                </div>

                <SectionCTA className="mt-10" />
              </div>
            </div>
          </section>
        ))}

        {/* All Google Reviews */}
        <section className="py-24 relative overflow-hidden bg-[#DFF1FF]">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 bg-white/80">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-foreground/80">Tous nos avis</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
                  Nos avis <span className="text-gradient">Google</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  S'ils n'étaient pas satisfaits, ils n'auraient aucun mal à l'exprimer !
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="scale">
              <div className="max-w-6xl mx-auto glass-card p-6 bg-white/80 border-gradient">
                <div className="elfsight-app-7b392c24-b2f9-41a6-a0a1-e7b021fe02f7" data-elfsight-app-lazy />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-24 relative overflow-hidden bg-background">
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                  <Camera size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground/80">Rencontres</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
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
            <SectionCTA className="mt-16" />
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
