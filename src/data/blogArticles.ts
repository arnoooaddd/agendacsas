export interface BlogArticle {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  coverImage: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
  keywords: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "internaliser-marketing-renovation",
    title: "Internaliser ou externaliser son marketing en rénovation : ce que personne ne vous dit",
    metaDescription: "Faut-il recruter ou externaliser son marketing en rénovation ? Découvrez ce qui est vraiment rentable pour générer des leads.",
    excerpt: "Vous faites +1M€ dans la rénovation de l'habitat et vous vous demandez s'il faut recruter en interne ou passer par une agence ? Sur le papier, internaliser paraît logique. Dans la réalité, c'est souvent une erreur qui coûte très cher.",
    coverImage: "internaliser-marketing-renovation",
    author: "Agendac",
    date: "2026-03-18",
    readTime: "5 min",
    featured: true,
    tags: ["Stratégie", "Marketing", "Rénovation"],
    keywords: [
      "marketing rénovation habitat",
      "génération de leads rénovation",
      "agence marketing rénovation",
      "acquisition clients rénovation",
      "publicité rénovation habitat",
      "internaliser marketing vs externaliser",
      "coût acquisition client rénovation",
      "stratégie marketing entreprise bâtiment",
      "publicité Facebook rénovation",
      "leads travaux maison",
    ],
  },
  {
    slug: "pourquoi-acheter-des-leads-renovation-mauvaise-strategie-2026",
    title: "Pourquoi acheter des leads en rénovation est une mauvaise stratégie en 2026",
    metaDescription: "Acheter des leads en rénovation semble simple… mais c'est une erreur stratégique. Découvrez pourquoi et quelle alternative fonctionne réellement.",
    excerpt: "Acheter des leads, c'est devenu la solution \"facile\" pour beaucoup d'entreprises de rénovation. Sur le papier, ça paraît logique. Dans la réalité ? C'est souvent une machine à détruire ta marge, ton image… et ta croissance.",
    coverImage: "leads-renovation-2026",
    author: "Agendac",
    date: "2026-03-15",
    readTime: "4 min",
    featured: false,
    tags: ["Stratégie", "Rénovation", "Acquisition"],
    keywords: [
      "marketing rénovation habitat",
      "génération de leads rénovation",
      "achat de leads rénovation",
      "leads rénovation maison",
      "publicité rénovation habitat",
      "agence marketing rénovation",
      "acquisition clients rénovation",
      "leads qualifiés rénovation",
      "stratégie marketing artisan",
      "publicité Facebook rénovation",
      "marketing entreprise bâtiment",
    ],
  },
];
