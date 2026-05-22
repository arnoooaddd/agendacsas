import lbdmPhoto from "@/assets/results/lbdm.webp";
import basRencontre from "@/assets/results/bas-rencontre.webp";
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

export interface CaseStudyVideo {
  url: string;
  format?: "9:16" | "16:9";
  industry?: Industry;
  industries?: Industry[];
  label?: string;
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
  videos?: CaseStudyVideo[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "la-boutique-du-menuisier-72",
    name: "La Boutique du Menuisier 72",
    company: "La Boutique du Menuisier",
    industries: ["Menuiseries", "Pompe à chaleur"],
    headline: "+2 commerciaux embauchés en 90 jours pour suivre la demande",
    summary:
      "Réseau spécialisé fenêtres, portes, coulissants, volets, portails et menuiseries sur mesure : volume de demandes maîtrisé et embauches commerciales pour absorber la croissance.",
    mainResult: "+2 commerciaux embauchés en 90 jours",
    siren: "811662766",
    website: "https://laboutiquedumenuisier.fr",
    loomId: "c16266ef4214491eae19d087e0e02eea",
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
    videos: [
      { url: "https://www.youtube.com/shorts/aDHl-oZJ-Uk", format: "9:16", industry: "Menuiseries", label: "Interview client - Menuiseries" },
      { url: "https://youtube.com/shorts/0ik5tpNjrCw", format: "9:16", industry: "Menuiseries", label: "Interview client - Menuiseries" },
      { url: "https://youtube.com/shorts/ABp_30VVboE", format: "9:16", industry: "Pompe à chaleur", label: "Interview client - Pompe à chaleur" },
    ],
  },
  {
    slug: "camille-bas-construction",
    name: "Camille BAS",
    company: "BAS Construction",
    industries: ["Photovoltaïque", "B2B"],
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
    googleReview: {
      author: "Camille BAS",
      initials: "CB",
      date: "il y a 6 mois",
      rating: 5,
      text: "Une équipe au top, fiable et à l'écoute. Je recommande vivement !",
    },
    photos: [
      { src: basRencontre, caption: "Rencontre avec Camille — Janvier 2025" },
    ],
    videos: [
      { url: "https://youtube.com/shorts/-6EfAAw6_A0", format: "9:16", industry: "B2B", label: "Interview client - B2B" },
      { url: "https://youtu.be/nNGLXcxBOoI", format: "9:16", industry: "Photovoltaïque", label: "Interview client - Photovoltaïque" },
      { url: "https://youtu.be/alEKDT9NnHI", format: "9:16", industry: "Photovoltaïque", label: "Interview client - Photovoltaïque" },
    ],
  },
  {
    slug: "stephane-viard-lynergie",
    name: "Stéphane VIARD",
    company: "Lynergie SARL",
    industries: ["Photovoltaïque", "Pompe à chaleur", "Climatisation", "IRVE"],
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
    googleReview: {
      author: "Stephane Viard",
      initials: "SV",
      date: "il y a 2 ans",
      rating: 5,
      text:
        "Une experience de plusieurs mois déjà et les résultats sont excellents sur les campagnes google, facebook, site internet… Arnaud et son equipe, sont hyper reactifs et disponibles. Ils m'accompagnent dans mon dévellopement (1 embauche pour ma part après 3 mois de collaboration) et le meilleur est a venir. Je recommande fortement !",
    },
    photos: [{ src: lynergiePhoto, caption: "Rencontre avec Stéphane — Janvier 2025" }],
    videos: [
      { url: "https://youtu.be/ANGX3NSQXog", format: "9:16", industry: "Pompe à chaleur", label: "Interview client - Pompe à chaleur" },
      { url: "https://youtu.be/HljnI1oC9Sc", format: "9:16", industries: ["Pompe à chaleur", "Photovoltaïque"], label: "Interview client - PAC & Photovoltaïque" },
      { url: "https://youtube.com/shorts/Jnfp0iIXNM8", format: "9:16", industries: ["Photovoltaïque", "Pompe à chaleur", "Climatisation", "IRVE"], label: "Interview client - Multi-énergie" },
    ],
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
    googleReview: {
      author: "Olivier Tubeuf",
      initials: "OT",
      date: "il y a 5 mois",
      rating: 5,
      text:
        "Une équipe au top, de vrai professionnels, ca fait longtemps que je me procurais les services de gens incompétent. Des sommes astronomique dépensées. Je recommande vivement Agendac. Je ne suis qu au 3 eme mois mais j ai deja une forte hausse du chiffre d affaire.",
    },
    photos: [],
    videos: [
      { url: "https://youtube.com/shorts/9bU-1VGjP0o", format: "9:16", industry: "Photovoltaïque", label: "Interview client - Photovoltaïque" },
      { url: "https://youtube.com/shorts/bPNHGWc5qpM", format: "9:16", industry: "Pompe à chaleur", label: "Interview client - Pompe à chaleur" },
      { url: "https://youtube.com/shorts/wx8sK6T6J0o", format: "9:16", industry: "Isolation", label: "Interview client - Isolation" },
    ],
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
    googleReview: {
      author: "Anthony PROPERZIO",
      initials: "AP",
      date: "il y a 2 semaines",
      rating: 5,
      text:
        "J'ai actuellement le plaisir de pouvoir collaborer avec Agendac et je ne peux que mettre en avant leur travail exceptionnel. L'identité de cette agence de communication se repose sur des bases saines et solides. Dès le premier contact, l'ambiance s'est révélée à la fois dynamique et conviviale, ce qui rend chaque échange agréable. Leurs compétences ont été cruciales pour donner vie à mes demandes : ils allient créativité, rigueur et une vraie expertise stratégique. Le suivi est irréprochable : ils prennent le temps de comprendre chaque besoin, restent disponibles et assurent une proximité rassurante. Je remercie Arnaud, Kérim, Omar et tout particulièrement Manon, qui, avec moi, passe du temps à sans cesse améliorer les différents points importants de notre collaboration pour booster le rendement de l'entreprise. Je recommande donc cette agence les yeux fermés à quiconque cherche un partenaire fiable, créatif et à l'écoute.",
    },
    photos: [],
  },
  {
    slug: "fabio-valero-avenir-energie",
    name: "Fabio VALERO",
    company: "Avenir Énergie",
    industries: ["Photovoltaïque", "Pompe à chaleur", "Isolation", "Climatisation"],
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
    googleReview: {
      author: "Avenir Energie",
      initials: "AE",
      date: "il y a un an",
      rating: 5,
      text:
        "Nous étions en pleine réflexion pour savoir comment obtenir du prospect de qualité, nous avons tout essayé ! les fichiers commandés, du data à traiter etc... Un de mes collaborateurs ma mis en relation avec Agendac et ca été un second souffle pour l'entreprise du rdv 100% qualifié tout en respectant notre cahier décharge. Aucune mauvaises surprises, une équipe plus qu'à l'écoute avec le respect du client ! J'ai une confiance total avec Agendac et aujourd'hui c'est un partenariat essentiel pour notre structure. Je recommande à 100% leurs services un grand merci encore à cette équipe jeune et dynamique qui travail sans relâche dans le but d'obtenir de très bon résultats.",
    },
    photos: [],
    videos: [
      { url: "https://youtube.com/shorts/LLzJBh9n21E", format: "9:16", industry: "Climatisation", label: "Interview client - Climatisation" },
    ],
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
    googleReview: {
      author: "unalan burhan",
      initials: "UB",
      date: "il y a un an",
      rating: 5,
      text:
        "Je suis très content de travailler avec Arno, je suis très satisfait. Franchement il fait du bon boulot. Je suis très content de travailler avec lui.",
    },
    photos: [{ src: plainePhoto, caption: "Rencontre avec M. Unalan à Veauche — Août 2025" }],
    videos: [
      { url: "https://youtube.com/shorts/o5U1Qe3yfHU", format: "9:16", industry: "Photovoltaïque", label: "Interview client - Photovoltaïque" },
      { url: "https://youtu.be/glU-1xmleZI", format: "9:16", industry: "Photovoltaïque", label: "Interview client - Photovoltaïque" },
    ],
  },
  {
    slug: "dorian-perreaut-climeco-plomberie",
    name: "Dorian Perreaut",
    company: "Climeco Plomberie SASU",
    industries: ["Plomberie", "Climatisation", "Pompe à chaleur", "Salle de bain"],
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
    googleReview: {
      author: "Climeco Plomberie",
      initials: "CP",
      date: "il y a 2 ans",
      rating: 5,
      text:
        "Super accueil, conseil et très sympathique. Arnaud a su comprendre ma demande et la traite avec efficacité. J'ai souvent été sollicité par des entreprises de référencement vendant monts et merveilles, mais surtout un contrat qui ne donne rien du tout et qui nous engage pendant plusieurs années. Il est conscient de l'importance du marché et connaît très bien son travail. Que ce soit pour du référencement Google SEO ou Google Ads, mais aussi pour le positionnement de notre site Internet, Google Maps, Google Local Service, pour avoir des appels ou des conversions via notre site… En l'espace de seulement 15 jours, je me suis retrouvé propulsé en première place de Maps. Dès que je peux, je lui fais de la bonne publicité et je recommande vivement car avec lui et son suivi hebdomadaire tout semble plus facile et évident. Allez y les yeux fermés!",
    },
    photos: [{ src: dorianPhoto, caption: "Rencontre avec Dorian — Avril 2024" }],
  },
  {
    slug: "benjamin-berkovicz-reva-energie",
    name: "Benjamin Berkovicz",
    company: "Reva Energie",
    industries: ["Climatisation"],
    headline: "Essayer c'est l'adopter",
    summary:
      "Spécialiste climatisation : adoption d'Agendac comme partenaire d'acquisition après les premiers résultats.",
    mainResult: "Partenariat reconduit après essai",
    website: "https://revaenergie.com/",
    googleReview: {
      author: "Benjamin Berkovicz",
      initials: "BB",
      date: "il y a 8 mois",
      rating: 5,
      text: "Essayer c'est l'adopter",
    },
    photos: [],
  },
  {
    slug: "bastien-enr",
    name: "Bastien ENR",
    company: "Bastien ENR",
    industries: ["Photovoltaïque"],
    headline: "Le partenaire d'acquisition tant attendu",
    summary:
      "Photovoltaïque : sortie des engagements mensuels d'agences de com pour un modèle 100% orienté résultats.",
    mainResult: "Partenariat 100% orienté résultats",
    googleReview: {
      author: "Bastien ENR",
      initials: "BE",
      date: "il y a un an",
      rating: 5,
      text:
        "Quel chance d'avoir rencontré Arnaud et ces équipes ! Après avoir tester beaucoups d'agence de com.. j'ai enfin trouver le partenaire dont j'ai toujours rêver ! A l'écoute jeune dynamique, beaucoups de solutions, de conseils et surtout d'écoute ! Notre buisness tourne autour des résultats et de comment les faire évoluer/améliorer plus d'autour de mensualitées/engagement etc.. Nous sommes écouté et cela se ressent sur les résultats. Merci Arnaud pour ta disponibilitée et les engagements que tiens à notre égard, vraiment top 💪👌",
    },
    photos: [],
  },
  {
    slug: "france-habitat-enr",
    name: "Steve Miranda",
    company: "France Habitat ENR",
    industries: ["Menuiseries", "Photovoltaïque"],
    headline: "Système d'acquisition bien huilé",
    summary:
      "Menuiseries et photovoltaïque : un process Agendac structuré et des RDV avec un réel intérêt.",
    mainResult: "RDV qualifiés avec intérêt confirmé",
    googleReview: {
      author: "Steve Miranda",
      initials: "SM",
      date: "il y a 2 semaines",
      rating: 5,
      text:
        "On a à faire à de vrais Pros sincèrement. Leur système est bien huilé ; Arnaud Utille au Top et Sophia Laleg également RDV avec un réel intérêt et nous attendent de pied ferme.",
    },
    photos: [],
  },
  {
    slug: "atmos-energie",
    name: "Atmos Énergie",
    company: "Atmos Énergie",
    industries: ["Photovoltaïque", "Climatisation"],
    headline: "Prise de RDV précise et efficace",
    summary:
      "Photovoltaïque et climatisation : excellent ciblage des besoins et zéro déplacement inutile grâce à la qualification Agendac.",
    mainResult: "Ciblage précis, zéro déplacement inutile",
    googleReview: {
      author: "Atmos Énergie",
      initials: "AÉ",
      date: "il y a une semaine",
      rating: 5,
      text:
        "Super équipe, réactive et professionnelle. J'ai régulièrement Manon au téléphone pour la prise de rendez-vous : elle gère les demandes avec précision et efficacité, ce qui permet un excellent ciblage des besoins et évite les déplacements inutiles. Merci à Arnaud et à toute son équipe pour leur sérieux et leur organisation.",
    },
    photos: [],
    videos: [
      { url: "https://youtube.com/shorts/V0ao7ZeP2Kw", format: "9:16", industry: "Photovoltaïque", label: "Interview client - Photovoltaïque" },
      { url: "https://youtu.be/NxF3Dxcdiao", format: "9:16", industry: "Photovoltaïque", label: "Interview client - Photovoltaïque" },
    ],
  },
  {
    slug: "ncen-jacques-passerat",
    name: "Jacques Passerat",
    company: "NCEN",
    industries: ["Climatisation", "Pompe à chaleur", "Plomberie"],
    headline: "Enfin un partenaire fiable et performant",
    summary:
      "CVC / plomberie : gestion à taille humaine, réactive, et qualification de leads de qualité.",
    mainResult: "Qualification de leads de réelle qualité",
    googleReview: {
      author: "Jacques Passerat",
      initials: "JP",
      date: "il y a 4 jours",
      rating: 5,
      text:
        "Non contents d'être très agréables humainement, l'ensemble de l'équipe est réellement professionnelle et aux petits soins. La gestion est à taille humaine et réactive. Nous avons enfin trouvé un partenaire fiable et performant. Une mention toute particulière pour MANON dont le sourire transparaît dans le voix, chaleureuse jeune femme cultivée prenant à cœur le retour d'expérience. Merci enfin à toute l'équipe pour la qualité du travail accompli dans une qualification de leads de réelle qualité. Je recommande très fortement. Jacques, gérant de NCEN.",
    },
    photos: [],
  },
  {
    slug: "zc-clim",
    name: "ZC CLIM",
    company: "ZC CLIM",
    industries: ["Climatisation", "Pompe à chaleur"],
    headline: "Une agence qui répond aux besoins des TPE en CVC",
    summary:
      "Climatisation / PAC : leads très qualifiés grâce au travail en amont d'Agendac sur la qualification.",
    mainResult: "Leads très qualifiés, travail en amont visible",
    googleReview: {
      author: "ZC CLIM",
      initials: "ZC",
      date: "il y a 3 jours",
      rating: 5,
      text:
        "Merci pour cette belle collaboration, Enfin une Agence qui as su répondre aux besoins d'une Tpe dans le CVC, Lead très qualifié, ont ressent le travail en amont qu'il y a avant que cela arrive chez Nous. Bravo et Merci à Arnaud, Kerim et Sophia qui font un travail remarquable et tout le reste de l'équipe. ps / Sophia que nous avons régulièrement en ligne, fait un travail de qualité (Acceuil patience et persévérance au standard) afin de bien qualifier et replanifier les rdv ! Merci 🙏 Je recommande +++++++ N'hésitez plus Passez chez AGENDAC ! 🚀",
    },
    photos: [],
  },
  {
    slug: "mickael-racine",
    name: "Mickael Racine",
    company: "Mickael Racine",
    industries: ["Piscine", "Plomberie", "Salle de bain"],
    headline: "Qualification de leads et écoute remarquables",
    summary:
      "Piscine, plomberie et salle de bain : qualité de qualifications et accompagnement humain au quotidien.",
    mainResult: "Qualité de qualifications saluée",
    googleReview: {
      author: "mikael Racine",
      initials: "MR",
      date: "il y a un jour",
      rating: 5,
      text:
        "Equipe professionnelle, réactive et de très bon conseil. Nous recommandons tout particulièrement Manon pour son excellent travail, la qualité des qualifications des leads, ainsi que sa sympathie et son écoute.",
    },
    photos: [],
  },
  {
    slug: "climapac",
    name: "ClimaPAC",
    company: "ClimaPAC",
    industries: ["Pompe à chaleur"],
    headline: "Témoignage vidéo - Pompe à chaleur",
    summary: "Spécialiste pompe à chaleur : retour terrain sur la collaboration avec Agendac.",
    mainResult: "Vidéo client tournée sur site",
    photos: [],
    videos: [
      { url: "https://www.youtube.com/shorts/lj1n0VSNT2s", format: "9:16", industry: "Pompe à chaleur", label: "Vidéo client - Pompe à chaleur" },
    ],
  },
  {
    slug: "ideal-therm",
    name: "Ideal Therm",
    company: "Ideal Therm",
    industries: ["Autre"],
    headline: "Témoignage vidéo partenaire",
    summary: "Retour terrain Ideal Therm sur la collaboration avec Agendac.",
    mainResult: "Vidéo client tournée sur site",
    photos: [],
    videos: [
      { url: "https://www.youtube.com/shorts/o_nC1OQoGCc", format: "9:16", industry: "Autre", label: "Vidéo client - Autre" },
    ],
  },
  {
    slug: "energie-service-france",
    name: "Energie Service France",
    company: "Energie Service France",
    industries: ["Photovoltaïque"],
    headline: "Témoignage vidéo - Photovoltaïque",
    summary: "Spécialiste photovoltaïque : retour terrain sur la collaboration avec Agendac.",
    mainResult: "Vidéo client tournée sur site",
    photos: [],
    videos: [
      { url: "https://www.youtube.com/shorts/keR0F0VJNsk", format: "9:16", industry: "Photovoltaïque", label: "Vidéo client - Photovoltaïque" },
      { url: "https://www.youtube.com/watch?v=Pj6KHKCk6D8", format: "16:9", industry: "Photovoltaïque", label: "Interview client - Photovoltaïque" },
    ],
  },
  {
    slug: "solaire-2f",
    name: "Solaire 2F",
    company: "Solaire 2F",
    industries: ["Photovoltaïque"],
    headline: "Témoignage vidéo - Photovoltaïque",
    summary: "Spécialiste photovoltaïque : retour terrain sur la collaboration avec Agendac.",
    mainResult: "Vidéo client tournée sur site",
    photos: [],
    videos: [
      { url: "https://www.youtube.com/shorts/keR0F0VJNsk", format: "9:16", industry: "Photovoltaïque", label: "Vidéo client - Photovoltaïque" },
    ],
  },
  {
    slug: "maisolia",
    name: "Maisolia",
    company: "Maisolia",
    industries: ["IRVE", "B2B", "Photovoltaïque"],
    headline: "Témoignage vidéo - IRVE, B2B & Photovoltaïque",
    summary: "Spécialiste IRVE / mobilité électrique et photovoltaïque : retours terrain sur la collaboration avec Agendac.",
    mainResult: "Vidéos clients tournées sur site",
    photos: [],
    videos: [
      { url: "https://www.youtube.com/shorts/48gviholwLc", format: "9:16", industry: "IRVE", label: "Vidéo client - IRVE" },
      { url: "https://youtube.com/shorts/zskLiLCaaDc", format: "9:16", industry: "B2B", label: "Vidéo client - B2B" },
      { url: "https://youtu.be/hVNLIbd4dVE", format: "16:9", industry: "Photovoltaïque", label: "Interview client - Photovoltaïque" },
    ],
  },
  {
    slug: "pergola-4-saison",
    name: "Pergola 4 Saison",
    company: "Pergola 4 Saison",
    industries: ["Menuiseries"],
    headline: "Témoignage vidéo - Menuiseries / Pergolas",
    summary: "Spécialiste pergolas et menuiseries extérieures : retour terrain sur la collaboration avec Agendac.",
    mainResult: "Vidéo client tournée sur site",
    photos: [],
    videos: [
      { url: "https://www.youtube.com/shorts/jtxqj3Mm4WM", format: "9:16", industry: "Menuiseries", label: "Vidéo client - Menuiseries" },
    ],
  },
  {
    slug: "cuisine-references",
    name: "Cuisine Références",
    company: "Cuisine Références",
    industries: ["Cuisine"],
    headline: "Témoignage vidéo - Cuisine",
    summary: "Cuisiniste : retour terrain sur la collaboration avec Agendac.",
    mainResult: "Vidéos clients tournées sur site",
    photos: [],
    videos: [
      { url: "https://youtube.com/shorts/sc6NEY9I84Q", format: "9:16", industry: "Cuisine", label: "Vidéo client - Cuisine" },
      { url: "https://youtu.be/zui-YQQwKvc", format: "16:9", industry: "Cuisine", label: "Interview client - Cuisine" },
      { url: "https://youtube.com/shorts/_nk7KDhOVlg", format: "9:16", industry: "Cuisine", label: "Vidéo client - Cuisine" },
    ],
  },
  {
    slug: "asch-pool",
    name: "ASCH POOL",
    company: "ASCH POOL",
    industries: ["Piscine"],
    headline: "Témoignage vidéo - Piscine",
    summary: "Pisciniste : retours terrain sur la collaboration avec Agendac.",
    mainResult: "Vidéos clients tournées sur site",
    photos: [],
    videos: [
      { url: "https://youtube.com/shorts/8ME7lZ1QcHE", format: "9:16", industry: "Piscine", label: "Vidéo client - Piscine" },
      { url: "https://youtube.com/shorts/_-n1jSy-Ps4", format: "9:16", industry: "Piscine", label: "Vidéo client - Piscine" },
      { url: "https://youtube.com/shorts/eGUxyZvcLqs", format: "9:16", industry: "Piscine", label: "Vidéo client - Piscine" },
      { url: "https://youtube.com/shorts/gztLQ92fDMs", format: "9:16", industry: "Piscine", label: "Vidéo client - Piscine" },
    ],
  },
];

export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);