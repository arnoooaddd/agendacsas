import lbdmPhoto from "@/assets/results/lbdm.webp";
import basRencontre from "@/assets/results/bas-rencontre.webp";
import basEquipe from "@/assets/results/bas-equipe.webp";
import lynergiePhoto from "@/assets/results/lynergie.webp";
import plainePhoto from "@/assets/results/plaine-solaire.webp";
import dorianPhoto from "@/assets/results/dorian-climeco.webp";

export const INDUSTRIES = [
  "Toutes",
  "Menuiseries",
  "Isolation",
  "Photovoltaïque",
  "Pompe à chaleur",
  "Climatisation",
  "Plomberie",
  "Piscine",
  "Salle de bain",
  "IRVE",
  "Cuisine",
  "B2B",
  "Autre",
] as const;

export type Industry = (typeof INDUSTRIES)[number];

export interface CaseStudyPhoto {
  src: string;
  caption: string;
}

export interface CaseStudyReview {
  author: string;
  initials: string;
  date?: string;
  rating?: number;
  text: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  company: string;
  industries: Industry[];
  headline: string;
  summary: string;
  mainResult: string;
  siren?: string;
  website?: string;
  before?: string;
  after?: string;
  problem?: string;
  solution?: string;
  results?: string[];
  loomId?: string;
  youtubeEmbedUrl?: string;
  googleReviewLink?: string;
  manualReview?: CaseStudyReview;
  googleReview?: CaseStudyReview;
  photos: CaseStudyPhoto[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "la-boutique-du-menuisier-72",
    name: "La Boutique du Menuisier 72",
    company: "La Boutique du Menuisier",
    industries: ["Menuiseries"],
    headline: "+2 commerciaux embauchés en 90 jours pour suivre la demande",
    summary:
      "Réseau spécialisé fenêtres, portes, coulissants, volets, portails et menuiseries sur mesure : volume de demandes maîtrisé et embauches commerciales pour absorber la croissance.",
    mainResult: "+2 commerciaux embauchés en 90 jours",
    siren: "811662766",
    website: "https://laboutiquedumenuisier.fr",
    loomId: "c62dc9c3f6394a5c896c8234c396ae6a",
    youtubeEmbedUrl: "https://www.youtube.com/embed/aDHl-oZJ-Uk?rel=0&modestbranding=1",
    problem:
      "Difficulté à générer un volume constant de demandes qualifiées pour alimenter l'équipe commerciale dans un secteur menuiseries très concurrentiel.",
    solution:
      "Mise en place d'une infrastructure d'acquisition Agendac : publicités ciblées, tournage de contenus métier et qualification des prospects avant transmission à l'équipe.",
    results: [
      "+2 commerciaux embauchés en 90 jours",
      "Volume de RDV stable mois après mois",
      "Marque locale renforcée sur le secteur 72",
    ],
    photos: [{ src: lbdmPhoto, caption: "Rencontre avec les gérants — Janvier 2026" }],
  },
  {
    slug: "camille-bas-construction",
    name: "Camille BAS",
    company: "BAS Construction",
    industries: ["Autre"],
    headline: "47% de transformation",
    summary:
      "Sortie de la dépendance au bouche-à-oreille pour construire une acquisition prédictible et rentable.",
    mainResult: "x7,2 de ROI en 32 jours",
    siren: "952429967",
    before: "Dépendance au bouche-à-oreille, pas de croissance maîtrisée.",
    after: "x7,2 sur son investissement initial en 32 jours.",
    problem: "Croissance bloquée par une acquisition 100% bouche-à-oreille et imprévisible.",
    solution:
      "Stratégie Agendac complète : publicité, qualification, prise de RDV et accompagnement commercial.",
    results: [
      "47% de transformation des RDV en signatures",
      "x7,2 sur l'investissement initial en 32 jours",
      "Pipeline commercial stabilisé",
    ],
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
    slug: "stephane-viard-lynergie",
    name: "Stéphane VIARD",
    company: "Lynergie SARL",
    industries: ["Photovoltaïque", "Pompe à chaleur", "Isolation"],
    headline: "+2 embauches après 6 mois de collaboration",
    summary:
      "Spécialiste rénovation énergétique (photovoltaïque, PAC, isolation) qui passe d'une acquisition 100% bouche-à-oreille à une acquisition digitale maîtrisée.",
    mainResult: "60% des signatures viennent d'Agendac",
    siren: "893676015",
    website: "https://lynergie.fr",
    before: "100% d'entrants via le bouche-à-oreille.",
    after: "Acquisition digitale maîtrisée, 60% de signatures venant d'Agendac.",
    problem: "Pas de canal d'acquisition digital, dépendance totale au réseau personnel.",
    solution:
      "Campagnes Google + Facebook Ads, refonte du site, prise de RDV qualifiée et tournage vidéo pour la confiance.",
    results: [
      "+2 embauches en 6 mois",
      "60% des signatures venant d'Agendac",
      "Acquisition digitale maîtrisée",
    ],
    loomId: "5ed556b972924eedbea2a01d988d9221",
    googleReviewLink: "https://maps.app.goo.gl/1XPBTinq4aVMteWu5",
    manualReview: {
      author: "Stéphane VIARD",
      initials: "SV",
      date: "Gérant Lynergie · Avril 2024",
      rating: 5,
      text:
        "Une expérience de plusieurs mois déjà et les résultats sont excellents sur les campagnes Google, Facebook, site internet… Arnaud et son équipe sont hyper réactifs et disponibles. Ils m'accompagnent dans mon développement (1 embauche pour ma part après 3 mois de collaboration) et le meilleur est à venir. Je recommande fortement !",
    },
    photos: [{ src: lynergiePhoto, caption: "Rencontre avec Stéphane — Janvier 2025" }],
  },
  {
    slug: "olivier-tubeuf-avenir-conseils-habitat",
    name: "Olivier TUBEUF",
    company: "Avenir Conseils Habitat Consulting SAS",
    industries: ["Photovoltaïque", "Pompe à chaleur", "Isolation"],
    headline: "+600 000 € de CA en 4 mois",
    summary:
      "Sortie d'un budget mensuel de 10 000 € de leads inefficaces vers une infrastructure d'acquisition qui génère réellement du CA.",
    mainResult: "+600 000 € de CA généré en 4 mois",
    siren: "907941777",
    before: "10 000 € de budget mensuel de leads et plateformes de mise en relation, 0 résultats.",
    after: "+600 000 € générés grâce à l'infrastructure Agendac en 4 mois de collaboration.",
    problem:
      "Achat de leads et plateformes de mise en relation : budget important, aucun résultat tangible.",
    solution:
      "Migration vers une acquisition propriétaire Agendac : campagnes ciblées, qualification, prise de RDV interne.",
    results: [
      "+600 000 € de CA en 4 mois",
      "Sortie de la dépendance aux plateformes de leads",
      "ROI immédiat dès les premières semaines",
    ],
    loomId: "047c8bbfb0ff450fbe57eb827b577394",
    googleReviewLink: "https://maps.app.goo.gl/WrBcUhBEYcF9nKfZA",
    manualReview: {
      author: "Olivier TUBEUF",
      initials: "OT",
      date: "Avenir Conseils Habitat Consulting · Nov. 2025",
      rating: 5,
      text:
        "Une équipe au top, de vrais professionnels. Ça fait longtemps que je me procurais les services de gens incompétents — des sommes astronomiques dépensées. Je recommande vivement Agendac. Je ne suis qu'au 3ème mois mais j'ai déjà une forte hausse du chiffre d'affaires.",
    },
    photos: [],
  },
  {
    slug: "anthony-properzio-stores-fenetres-golfe",
    name: "Anthony PROPERZIO",
    company: "Stores et Fenêtres du Golfe",
    industries: ["Menuiseries"],
    headline: "11 signatures sur 18 RDV de son premier pack Agendac",
    summary:
      "Pergolas et menuiseries haut de gamme dans le Golfe de Saint-Tropez : passage du bouche-à-oreille à un pipeline régulier de prospects qualifiés.",
    mainResult: "11 signatures sur 18 RDV",
    before:
      "Entrants liés uniquement au bouche-à-oreille, dans un secteur premium très concurrentiel (pergolas et menuiseries haut de gamme dans le Golfe de Saint-Tropez).",
    after:
      "11/18 signés sur son premier pack de rendez-vous Agendac. Demandes régulières et prospects vraiment qualifiés. Collaboration lancée en décembre 2025.",
    problem: "Marché premium très concurrentiel, dépendance au bouche-à-oreille.",
    solution: "Pack de rendez-vous Agendac : ciblage premium et qualification fine des prospects.",
    results: [
      "11 signatures sur 18 RDV qualifiés",
      "Demandes régulières et qualifiées",
      "Lancement réussi dès décembre 2025",
    ],
    loomId: "1f323a8804894ab886bcccc0aee2d361",
    googleReviewLink: "https://share.google/TJder8Nu6I4vCLpJs",
    manualReview: {
      author: "Anthony PROPERZIO",
      initials: "AP",
      date: "Mai 2026",
      rating: 5,
      text:
        "J'ai actuellement le plaisir de pouvoir collaborer avec Agendac et je ne peux que mettre en avant leur travail exceptionnel. Dès le premier contact, l'ambiance s'est révélée à la fois dynamique et conviviale. Leurs compétences ont été cruciales pour donner vie à mes demandes : ils allient créativité, rigueur et une vraie expertise stratégique. Je remercie Arnaud, Kérim, Omar et tout particulièrement Manon. Je recommande cette agence les yeux fermés.",
    },
    photos: [],
  },
  {
    slug: "fabio-valero-avenir-energie",
    name: "Fabio VALERO",
    company: "Avenir Énergie",
    industries: ["Photovoltaïque", "Pompe à chaleur", "Isolation"],
    headline: "100% des demandes qualifiées",
    summary:
      "Énergies renouvelables : passage d'un sourcing de leads inefficace à un pipeline 100% qualifié.",
    mainResult: "93% de rendez-vous pertinents",
    siren: "952429967",
    before: "Fichiers de leads achetés, data à traiter, peu de résultats.",
    after: "93% de rendez-vous pertinents, planning rempli, partenariat essentiel.",
    problem: "Sourcing de leads achetés peu rentable.",
    solution: "Process Agendac de qualification et prise de RDV interne sur cahier des charges.",
    results: [
      "93% de RDV pertinents",
      "Planning commercial rempli",
      "Partenariat essentiel à la structure",
    ],
    loomId: "1fb4dd4067094adb9422a1e9a0c42500",
    googleReviewLink: "https://maps.app.goo.gl/igVcjpsA1EWhU2Qy9",
    manualReview: {
      author: "Fabio VALERO",
      initials: "FV",
      date: "Gérant Avenir Énergie · Janv. 2025",
      rating: 5,
      text:
        "Nous étions en pleine réflexion pour savoir comment obtenir du prospect de qualité, nous avons tout essayé : fichiers commandés, data à traiter, etc. Un de mes collaborateurs m'a mis en relation avec Agendac et ça a été un second souffle pour l'entreprise : du RDV 100% qualifié tout en respectant notre cahier des charges. J'ai une confiance totale avec Agendac et aujourd'hui c'est un partenariat essentiel pour notre structure.",
    },
    photos: [],
  },
  {
    slug: "burhan-unalan-plaine-solaire",
    name: "Burhan UNALAN",
    company: "UNLN Batiments (Plaine Solaire) SAS",
    industries: ["Photovoltaïque"],
    headline: "23 rendez-vous qualifiés par mois en moyenne",
    summary:
      "Spécialiste photovoltaïque : sortie des fluctuations du bouche-à-oreille pour une demande entrante constante.",
    mainResult: "23 RDV qualifiés / mois en moyenne",
    siren: "817973837",
    website: "https://plaine-solaire.fr",
    before: "Chantiers 100% via le bouche-à-oreille, fluctuations dues aux aléas de l'industrie.",
    after: "Demande entrante maîtrisée, rendez-vous chaque semaine même pendant les périodes tranquilles.",
    problem: "Fluctuations fortes de l'activité liées au bouche-à-oreille.",
    solution: "Acquisition digitale Agendac et prise de RDV continue.",
    results: [
      "23 RDV qualifiés / mois en moyenne",
      "Demande stable même en période creuse",
      "Visibilité locale renforcée",
    ],
    googleReviewLink: "https://maps.app.goo.gl/JRRB2dM5GyNDqEH68",
    manualReview: {
      author: "Burhan UNALAN",
      initials: "BU",
      date: "Gérant Plaine Solaire · Juill. 2024",
      rating: 5,
      text:
        "Je suis très content de travailler avec Arno, je suis très satisfait. Franchement il fait du bon boulot.",
    },
    photos: [{ src: plainePhoto, caption: "Rencontre avec M. Unalan à Veauche — Août 2025" }],
  },
  {
    slug: "dorian-perreaut-climeco-plomberie",
    name: "Dorian Perreaut",
    company: "Climeco Plomberie SASU",
    industries: ["Salle de bain", "Autre"],
    headline: "Premiers résultats sous 15 jours de lancement",
    summary:
      "Plomberie et peinture : sortie des solutions inefficaces (Pages Jaunes, Solocal, flyers) pour une acquisition Google maîtrisée.",
    mainResult: "1ère position Google Maps en 15 jours",
    siren: "913332102",
    website: "https://www.climeco-plomberie.fr",
    before: "Testé travaux.com, Pages Jaunes, Solocal, affiches, flyers... Aucun résultat et bloqué par contrat.",
    after: "Recruté 3 personnes en plus et ouvert une branche peinture (Climeco Peinture).",
    problem: "Multiples solutions testées sans résultats, contrats bloquants.",
    solution: "Référencement Google SEO + Ads + Google Maps + Local Service.",
    results: [
      "1ère position Google Maps en 15 jours",
      "+3 personnes recrutées",
      "Ouverture d'une branche Climeco Peinture",
    ],
    loomId: "959c01c42bde455bb1fef702f504dd0b",
    googleReviewLink: "https://maps.app.goo.gl/iVV3nzJJ532BXpMDA",
    manualReview: {
      author: "Dorian Perreaut",
      initials: "DP",
      date: "Gérant Climeco Plomberie · Avril 2024",
      rating: 5,
      text:
        "Super accueil, conseil et très sympathique. Arnaud a su comprendre ma demande et la traite avec efficacité. En l'espace de seulement 15 jours, je me suis retrouvé propulsé en première place de Maps. Allez-y les yeux fermés !",
    },
    photos: [{ src: dorianPhoto, caption: "Rencontre avec Dorian — Avril 2024" }],
  },
];

export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);