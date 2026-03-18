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
    slug: "pourquoi-acheter-des-leads-renovation-mauvaise-strategie-2026",
    title: "Pourquoi acheter des leads en rénovation est une mauvaise stratégie en 2026",
    metaDescription: "Acheter des leads en rénovation semble simple… mais c'est une erreur stratégique. Découvrez pourquoi et quelle alternative fonctionne réellement.",
    excerpt: "Acheter des leads, c'est devenu la solution \"facile\" pour beaucoup d'entreprises de rénovation. Sur le papier, ça paraît logique. Dans la réalité ? C'est souvent une machine à détruire ta marge, ton image… et ta croissance.",
    coverImage: "/src/assets/blog/leads-renovation-2026.jpg",
    author: "Agendac",
    date: "2026-03-18",
    readTime: "4 min",
    featured: true,
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
