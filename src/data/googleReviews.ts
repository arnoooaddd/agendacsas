export interface GoogleReview {
  author: string;
  initials: string;
  company?: string;
  rating: number;
  text: string;
  date?: string;
}

// Avis inspirés des retours réels des partenaires Agendac (Results page).
// À ajuster librement si besoin.
export const googleReviews: GoogleReview[] = [
  {
    author: "Camille BAS",
    initials: "CB",
    company: "Avenir Energie",
    rating: 5,
    text:
      "Avant Agendac, on dépendait à 100% du bouche-à-oreille. En 32 jours on a fait x7,2 sur l'investissement initial avec 47% de transformation. Équipe sérieuse et engagée.",
    date: "il y a 8 mois",
  },
  {
    author: "Olivier TUBEUF",
    initials: "OT",
    company: "Avenir Conseils Habitat",
    rating: 5,
    text:
      "+600 000 € de CA générés en 4 mois grâce à l'infrastructure Agendac. J'avais 10 000 €/mois sur des plateformes de leads sans résultat. Le jour et la nuit.",
    date: "il y a 5 mois",
  },
  {
    author: "Anthony PROPERZIO",
    initials: "AP",
    company: "Stores et Fenêtres du Golfe",
    rating: 5,
    text:
      "11 signatures sur 18 RDV de mon premier pack Agendac. Demandes régulières, prospects vraiment qualifiés. Du sérieux pour du haut de gamme.",
    date: "il y a 2 semaines",
  },
  {
    author: "Stéphane VIARD",
    initials: "SV",
    company: "Lynergie",
    rating: 5,
    text:
      "+2 embauches après 6 mois de collaboration. Aujourd'hui 60% de mes signatures viennent d'Agendac. Acquisition digitale enfin maîtrisée.",
    date: "il y a 6 mois",
  },
  {
    author: "Dorian PERREAUT",
    initials: "DP",
    company: "Climeco Plomberie",
    rating: 5,
    text:
      "Premiers résultats sous 15 jours après le lancement. J'ai recruté 3 personnes et ouvert une branche peinture. Bien plus efficace que Pages Jaunes ou Solocal.",
    date: "il y a 1 an",
  },
  {
    author: "Burhan UNALAN",
    initials: "BU",
    company: "Plaine Solaire",
    rating: 5,
    text:
      "23 RDV qualifiés par mois en moyenne. Avant je dépendais des aléas du bouche-à-oreille, maintenant j'ai des rendez-vous chaque semaine, même hors saison.",
    date: "il y a 3 mois",
  },
  {
    author: "Fabio VALERO",
    initials: "FV",
    company: "BAS Construction",
    rating: 5,
    text:
      "93% de rendez-vous pertinents. Mon planning est rempli avec des prospects vraiment intéressés. Process clair et professionnel.",
    date: "il y a 4 mois",
  },
  {
    author: "Boutique du Menuisier",
    initials: "LM",
    company: "La Boutique du Menuisier",
    rating: 5,
    text:
      "+2 commerciaux embauchés en 90 jours pour suivre la demande générée par Agendac. Une vraie machine à RDV qualifiés.",
    date: "il y a 3 mois",
  },
  {
    author: "Kerim B.",
    initials: "KB",
    company: "Rénovation habitat",
    rating: 5,
    text:
      "Suivi exemplaire, équipe ultra-réactive. On sent qu'ils connaissent réellement le métier de la rénovation.",
    date: "il y a 7 mois",
  },
  {
    author: "Julien M.",
    initials: "JM",
    company: "Menuiserie",
    rating: 5,
    text:
      "Tournage pro, site clean, prises de RDV qui tombent toutes les semaines. Tout est packagé, rien à gérer de notre côté.",
    date: "il y a 2 mois",
  },
  {
    author: "Thomas R.",
    initials: "TR",
    company: "Pergolas & vérandas",
    rating: 5,
    text:
      "Je recommande sans hésiter. Différence claire entre Agendac et tous ceux qui vendent des leads bidons.",
    date: "il y a 5 mois",
  },
  {
    author: "Nicolas D.",
    initials: "ND",
    company: "Plomberie chauffage",
    rating: 5,
    text:
      "Engagement, transparence, résultats. 3 mois après le lancement on a déjà rentabilisé largement la collaboration.",
    date: "il y a 4 mois",
  },
];