export interface GoogleReview {
  author: string;
  initials: string;
  company?: string;
  rating: number;
  text: string;
  date?: string;
}

// Avis Google authentiques extraits de la fiche Agendac (https://maps.app.goo.gl/TNdbPMnYo7pMY9e18)
// + quelques retours partenaires (cas clients page Résultats) pour les profils n'ayant pas encore laissé d'avis Google.
export const googleReviews: GoogleReview[] = [
  {
    author: "Climeco Plomberie",
    initials: "CP",
    rating: 5,
    date: "Févr. 2024",
    text:
      "Super accueil, conseil et très sympathique. Arnaud a su comprendre ma demande et la traite avec efficacité. J'ai souvent été sollicité par des entreprises de référencement vendant monts et merveilles, mais surtout un contrat qui ne donne rien du tout et qui nous engage pendant plusieurs années. En l'espace de seulement 15 jours, je me suis retrouvé propulsé en première place de Maps. Allez-y les yeux fermés !",
  },
  {
    author: "Gabriel",
    initials: "G",
    rating: 5,
    date: "Févr. 2024",
    text:
      "Service impeccable ! Merci à l'équipe qui nous a mis en avant, beaucoup d'appels reçus et une bien meilleure visibilité dans le secteur. Je recommande ces services à 100%.",
  },
  {
    author: "Stéphane Viard",
    initials: "SV",
    company: "Lynergie",
    rating: 5,
    date: "Avril 2024",
    text:
      "Une expérience de plusieurs mois déjà et les résultats sont excellents sur les campagnes Google, Facebook, site internet… Arnaud et son équipe sont hyper réactifs et disponibles. Ils m'accompagnent dans mon développement (1 embauche pour ma part après 3 mois de collaboration) et le meilleur est à venir. Je recommande fortement !",
  },
  {
    author: "Burhan Unalan",
    initials: "BU",
    company: "Plaine Solaire",
    rating: 5,
    date: "Juin 2024",
    text:
      "Je suis très content de travailler avec Arno, je suis très satisfait. Franchement il fait du bon boulot. Je suis très content de travailler avec lui.",
  },
  {
    author: "Pauline Pietré",
    initials: "PP",
    rating: 5,
    date: "Janv. 2025",
    text:
      "C'est un plaisir de collaborer avec Arnaud ! La communication est fluide et chaque projet est exécuté à la perfection ! Je recommande à 1000% !!",
  },
  {
    author: "Avenir Energie",
    initials: "AE",
    company: "Camille BAS",
    rating: 5,
    date: "Janv. 2025",
    text:
      "Nous étions en pleine réflexion pour savoir comment obtenir du prospect de qualité, nous avons tout essayé ! Un de mes collaborateurs m'a mis en relation avec Agendac et ça a été un second souffle pour l'entreprise : du RDV 100% qualifié tout en respectant notre cahier des charges. J'ai une confiance totale avec Agendac, c'est un partenariat essentiel pour notre structure.",
  },
  {
    author: "Bastien ENR",
    initials: "BE",
    rating: 5,
    date: "Mars 2025",
    text:
      "Quelle chance d'avoir rencontré Arnaud et ses équipes ! Après avoir testé beaucoup d'agences de com, j'ai enfin trouvé le partenaire dont j'ai toujours rêvé ! À l'écoute, jeune, dynamique, beaucoup de solutions et de conseils. Notre business tourne autour des résultats et cela se ressent. Merci Arnaud pour ta disponibilité 💪👌",
  },
  {
    author: "Uliax",
    initials: "U",
    rating: 5,
    date: "Juill. 2025",
    text:
      "Une agence remarquable, à tous points de vue. Collaborer avec Agendac a été une expérience extrêmement positive, tant sur le plan professionnel que humain. Leur expertise pointue, leur sens de l'écoute et leur capacité à proposer des solutions réellement adaptées ont contribué au succès de plusieurs projets ! Une structure fiable, réactive et résolument tournée vers la performance.",
  },
  {
    author: "Benjamin Berkovicz",
    initials: "BB",
    rating: 5,
    date: "Sept. 2025",
    text: "Essayer c'est l'adopter.",
  },
  {
    author: "Camille BAS",
    initials: "CB",
    company: "Avenir Energie",
    rating: 5,
    date: "Nov. 2025",
    text: "Une équipe au top, fiable et à l'écoute. Je recommande vivement !",
  },
  {
    author: "Olivier Tubeuf",
    initials: "OT",
    company: "Avenir Conseils Habitat",
    rating: 5,
    date: "Nov. 2025",
    text:
      "Une équipe au top, de vrais professionnels. Ça fait longtemps que je me procurais les services de gens incompétents — des sommes astronomiques dépensées. Je recommande vivement Agendac. Je ne suis qu'au 3ème mois mais j'ai déjà une forte hausse du chiffre d'affaires.",
  },
  // Retours partenaires (cas clients) sans avis Google déposé
  {
    author: "Anthony PROPERZIO",
    initials: "AP",
    company: "Stores et Fenêtres du Golfe",
    rating: 5,
    date: "Retour partenaire",
    text:
      "11 signatures sur 18 RDV de mon premier pack Agendac. Demandes régulières, prospects vraiment qualifiés. Du sérieux pour du haut de gamme.",
  },
  {
    author: "La Boutique du Menuisier",
    initials: "LM",
    rating: 5,
    date: "Retour partenaire",
    text:
      "+2 commerciaux embauchés en 90 jours pour suivre la demande générée par Agendac. Une vraie machine à RDV qualifiés.",
  },
  {
    author: "Fabio VALERO",
    initials: "FV",
    company: "BAS Construction",
    rating: 5,
    date: "Retour partenaire",
    text:
      "93% de rendez-vous pertinents. Mon planning est rempli avec des prospects vraiment intéressés. Process clair et professionnel.",
  },
];
