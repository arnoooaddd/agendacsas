import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionCTA from "@/components/SectionCTA";
import RelatedArticles from "@/components/RelatedArticles";
import { TrendingUp, ExternalLink, Star, Camera, Trophy, Play } from "lucide-react";
import { usePageTitle, useMetaDescription, useCanonical } from "@/hooks/usePageTitle";

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
  manualReview?: {
    author: string;
    initials: string;
    date?: string;
    rating?: number;
    text: string;
  };
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
    company: "BAS Construction",
    siren: "952429967",
    before: "Dépendance au bouche-à-oreille, pas de croissance maîtrisée.",
    after: "x7,2 sur son investissement initial en 32 jours.",
    loomId: "486a59765db8471e9175bc7dc26ee5dc",
    googleReviewLink: "https://maps.app.goo.gl/83onr3AhDpU9mGnt9",
    manualReview: {
      author: "Camille BAS",
      initials: "CB",
      date: "Gérant BAS Construction · Déc. 2025",
      rating: 5,
      text: "Une équipe au top, fiable et à l'écoute. Je recommande vivement !",
    },
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
    googleReviewLink: "https://maps.app.goo.gl/1XPBTinq4aVMteWu5",
    manualReview: {
      author: "Stéphane VIARD",
      initials: "SV",
      date: "Gérant Lynergie · Avril 2024",
      rating: 5,
      text: "Une expérience de plusieurs mois déjà et les résultats sont excellents sur les campagnes Google, Facebook, site internet… Arnaud et son équipe sont hyper réactifs et disponibles. Ils m'accompagnent dans mon développement (1 embauche pour ma part après 3 mois de collaboration) et le meilleur est à venir. Je recommande fortement !",
    },
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
    googleReviewLink: "https://maps.app.goo.gl/WrBcUhBEYcF9nKfZA",
    manualReview: {
      author: "Olivier TUBEUF",
      initials: "OT",
      date: "Avenir Conseils Habitat Consulting · Nov. 2025",
      rating: 5,
      text: "Une équipe au top, de vrais professionnels. Ça fait longtemps que je me procurais les services de gens incompétents — des sommes astronomiques dépensées. Je recommande vivement Agendac. Je ne suis qu'au 3ème mois mais j'ai déjà une forte hausse du chiffre d'affaires.",
    },
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
    googleReviewLink: "https://share.google/TJder8Nu6I4vCLpJs",
    manualReview: {
      author: "Anthony PROPERZIO",
      initials: "AP",
      date: "Mai 2026",
      rating: 5,
      text:
        "J'ai actuellement le plaisir de pouvoir collaborer avec Agendac et je ne peux que mettre en avant leur travail exceptionnel. L'identité de cette agence de communication se repose sur des bases saines et solides. Dès le premier contact, l'ambiance s'est révélée à la fois dynamique et conviviale, ce qui rend chaque échange agréable. Leurs compétences ont été cruciales pour donner vie à mes demandes : ils allient créativité, rigueur et une vraie expertise stratégique. Le suivi est irréprochable : ils prennent le temps de comprendre chaque besoin, restent disponibles et assurent une proximité rassurante. Je remercie Arnaud, Kérim, Omar et tout particulièrement Manon, qui, avec moi, passe du temps à sans cesse améliorer les différents points importants de notre collaboration pour booster le rendement de l'entreprise. Je recommande donc cette agence les yeux fermés à quiconque cherche un partenaire fiable, créatif et à l'écoute.",
    },
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
    googleReviewLink: "https://maps.app.goo.gl/igVcjpsA1EWhU2Qy9",
    manualReview: {
      author: "Fabio VALERO",
      initials: "FV",
      date: "Gérant Avenir Énergie · Janv. 2025",
      rating: 5,
      text: "Nous étions en pleine réflexion pour savoir comment obtenir du prospect de qualité, nous avons tout essayé : fichiers commandés, data à traiter, etc. Un de mes collaborateurs m'a mis en relation avec Agendac et ça a été un second souffle pour l'entreprise : du RDV 100% qualifié tout en respectant notre cahier des charges. Aucune mauvaise surprise, une équipe plus qu'à l'écoute avec le respect du client. J'ai une confiance totale avec Agendac et aujourd'hui c'est un partenariat essentiel pour notre structure. Je recommande à 100% leurs services, un grand merci à cette équipe jeune et dynamique qui travaille sans relâche pour obtenir de très bons résultats.",
    },
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
    googleReviewLink: "https://maps.app.goo.gl/JRRB2dM5GyNDqEH68",
    manualReview: {
      author: "Burhan UNALAN",
      initials: "BU",
      date: "Gérant Plaine Solaire · Juill. 2024",
      rating: 5,
      text: "Je suis très content de travailler avec Arno, je suis très satisfait. Franchement il fait du bon boulot. Je suis très content de travailler avec lui.",
    },
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
    googleReviewLink: "https://maps.app.goo.gl/iVV3nzJJ532BXpMDA",
    manualReview: {
      author: "Dorian Perreaut",
      initials: "DP",
      date: "Gérant Climeco Plomberie · Avril 2024",
      rating: 5,
      text: "Super accueil, conseil et très sympathique. Arnaud a su comprendre ma demande et la traite avec efficacité. J'ai souvent été sollicité par des entreprises de référencement vendant monts et merveilles, mais surtout un contrat qui ne donne rien du tout et qui nous engage pendant plusieurs années. Il est conscient de l'importance du marché et connaît très bien son travail. Que ce soit pour du référencement Google SEO ou Google Ads, mais aussi pour le positionnement de notre site internet, Google Maps, Google Local Service, pour avoir des appels ou des conversions via notre site… En l'espace de seulement 15 jours, je me suis retrouvé propulsé en première place de Maps. Dès que je peux, je lui fais de la bonne publicité et je recommande vivement car avec lui et son suivi hebdomadaire tout semble plus facile et évident. Allez-y les yeux fermés !",
    },
    photos: [{ src: dorianPhoto, caption: "Rencontre avec Dorian — Avril 2024" }],
  },
];

const Results = () => {
  usePageTitle("Résultats partenaires");
  useMetaDescription("Découvrez les résultats concrets de nos partenaires : études de cas, témoignages vidéo et chiffres d'acquisition pour les entreprises de rénovation et du BTP.");
  useCanonical("/resultats-clients-agendac");
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

                      {/* Manual Google review (when no Elfsight widget) */}
                      {!study.elfsightReviewId && study.manualReview && (
                        <div className="rounded-2xl border border-border/30 p-5 bg-background shadow-sm">
                          <div className="flex items-center gap-2 mb-3">
                            <Star size={14} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-xs font-medium text-muted-foreground">Avis Google vérifié</span>
                          </div>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {study.manualReview.initials}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-semibold text-foreground truncate">{study.manualReview.author}</p>
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
