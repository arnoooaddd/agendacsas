import { useParams, Link, Navigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogArticles } from "@/data/blogArticles";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { useEffect, lazy, Suspense } from "react";
import { getCoverImage } from "@/utils/blogImages";
import arnaudImg from "@/assets/team/arnaud-utille.webp";
import RelatedService, { type ServiceKey } from "@/components/RelatedService";

// Mapping article slug → most relevant Agendac service
const articleToService: Record<string, { service: ServiceKey; intro?: string }> = {
  "lead-renovation-demande-vraiment-qualifiee": {
    service: "prise-rendez-vous",
    intro: "Filtrez mieux vos demandes pour concentrer vos équipes sur les vrais prospects à signer.",
  },
  "devis-renovation-transformer-demandes-chantiers-signes": {
    service: "prise-rendez-vous",
    intro: "Transformez plus de demandes de devis en rendez-vous utiles et en chantiers signés.",
  },
  "site-internet-renovation-erreurs-demandes-devis": {
    service: "creation-site-internet",
    intro: "Corrigez les erreurs qui bloquent vos demandes de devis avec un site pensé pour convertir.",
  },
  "landing-page-renovation-rendez-vous": {
    service: "creation-site-internet",
    intro: "Transformez vos clics en demandes qualifiées avec une landing page pensée pour la rénovation.",
  },
  "branding-local-entreprise-renovation": {
    service: "creation-reseaux-sociaux",
    intro: "Devenez la marque locale que les prospects reconnaissent avant même le premier devis.",
  },
  "achat-leads-renovation-mauvaise-strategie": {
    service: "prise-rendez-vous",
    intro: "Au lieu d'acheter des leads partagés, construisez votre propre système d'acquisition.",
  },
  "internaliser-externaliser-marketing-renovation-btp": {
    service: "prise-rendez-vous",
    intro: "L'alternative concrète à un recrutement marketing en interne.",
  },
  "arreter-achat-leads-renovation-habitat": {
    service: "prise-rendez-vous",
    intro: "Sortez de la guerre des prix avec un système d'acquisition exclusif.",
  },
  "marketing-renovation-habitat-generation-leads": {
    service: "prise-rendez-vous",
    intro: "L'infrastructure complète pour transformer vos campagnes en chiffre d'affaires.",
  },
  "google-ads-vs-facebook-ads-renovation-habitat": {
    service: "prise-rendez-vous",
    intro: "Agendac orchestre Google Ads et Meta Ads pour vous — payable au RDV qualifié.",
  },
  "cout-publicite-google-ads-meta-ads-renovation": {
    service: "prise-rendez-vous",
    intro: "Maîtrisez votre coût d'acquisition : ne payez qu'au devis envoyé.",
  },
  "delai-resultats-acquisition-clients-renovation": {
    service: "prise-rendez-vous",
    intro: "Premiers rendez-vous qualifiés sous 21 jours après la mise en route.",
  },
  "choisir-agence-marketing-renovation-btp": {
    service: "prise-rendez-vous",
    intro: "Une agence spécialisée rénovation, payable au résultat.",
  },
  "externaliser-prise-rdv-entreprise-renovation": {
    service: "prise-rendez-vous",
    intro: "Notre offre dédiée pour ne plus jamais perdre un lead par manque de relance.",
  },
  "qualification-prospect-tunnel-vente-renovation": {
    service: "prise-rendez-vous",
    intro: "Notre équipe qualifie chaque prospect par téléphone avant tout RDV.",
  },
  "contacter-leads-facebook-ads-renovation-rdv": {
    service: "prise-rendez-vous",
    intro: "Externalisez le rappel et la qualification de vos leads Meta.",
  },
  "google-ads-meta-ads-entreprise-renovation": {
    service: "prise-rendez-vous",
    intro: "Multi-canal géré de A à Z : campagnes, qualification, prise de RDV.",
  },
  "retargeting-leads-perdus-renovation-habitat": {
    service: "creation-site-internet",
    intro: "Un site bien tracké est la base d'un retargeting performant.",
  },
  "strategie-publicite-entreprise-renovation-2026": {
    service: "tournage",
    intro: "Les vidéos qui performent en 2026 ne s'improvisent pas — production internalisée.",
  },
  "generation-leads-fiables-entreprise-renovation": {
    service: "creation-reseaux-sociaux",
    intro: "Crédibilité en ligne : la première arme pour vous démarquer des arnaques.",
  },
};

const articleComponents: Record<string, React.ComponentType> = {
  "lead-renovation-demande-vraiment-qualifiee": lazy(() => import("@/components/blog/ArticleLeadRenovationDemandeQualifiee")),
  "devis-renovation-transformer-demandes-chantiers-signes": lazy(() => import("@/components/blog/ArticleDevisRenovationChantiersSignes")),
  "site-internet-renovation-erreurs-demandes-devis": lazy(() => import("@/components/blog/ArticleSiteInternetRenovationErreurs")),
  "landing-page-renovation-rendez-vous": lazy(() => import("@/components/blog/ArticleLandingPageRenovation")),
  "branding-local-entreprise-renovation": lazy(() => import("@/components/blog/ArticleBrandingLocalRenovation")),
  "achat-leads-renovation-mauvaise-strategie": lazy(() => import("@/components/blog/ArticleLeadsRenovation")),
  "internaliser-externaliser-marketing-renovation-btp": lazy(() => import("@/components/blog/ArticleInternaliserMarketing")),
  "arreter-achat-leads-renovation-habitat": lazy(() => import("@/components/blog/ArticleArreterAchatLeads")),
  "marketing-renovation-habitat-generation-leads": lazy(() => import("@/components/blog/ArticleMarketingRenovation")),
  "google-ads-vs-facebook-ads-renovation-habitat": lazy(() => import("@/components/blog/ArticleGoogleVsFacebookAds")),
  "cout-publicite-google-ads-meta-ads-renovation": lazy(() => import("@/components/blog/ArticleCoutPubliciteRenovation")),
  "delai-resultats-acquisition-clients-renovation": lazy(() => import("@/components/blog/ArticleDelaiResultatsAcquisition")),
  "choisir-agence-marketing-renovation-btp": lazy(() => import("@/components/blog/ArticleChoisirAgenceMarketingRenovation")),
  "externaliser-prise-rdv-entreprise-renovation": lazy(() => import("@/components/blog/ArticleExternaliserPriseRdv")),
  "qualification-prospect-tunnel-vente-renovation": lazy(() => import("@/components/blog/ArticleNiveauxQualificationProspect")),
  "contacter-leads-facebook-ads-renovation-rdv": lazy(() => import("@/components/blog/ArticleContacterLeadsReseauxSociaux")),
  "google-ads-meta-ads-entreprise-renovation": lazy(() => import("@/components/blog/ArticlePlateformePubliciteRenovation")),
  "retargeting-leads-perdus-renovation-habitat": lazy(() => import("@/components/blog/ArticleRetargetingProspectsRenovation")),
  "strategie-publicite-entreprise-renovation-2026": lazy(() => import("@/components/blog/ArticlePubliciteRenovation2026")),
  "generation-leads-fiables-entreprise-renovation": lazy(() => import("@/components/blog/ArticleSeDemarquerArnaquesRenovation")),
};

// Redirects from old blog slugs to new SEO-optimized URLs
const slugRedirects: Record<string, string> = {
  "se-demarquer-arnaques-renovation": "generation-leads-fiables-entreprise-renovation",
  "publicite-renovation-2026": "strategie-publicite-entreprise-renovation-2026",
  "retargeting-prospects-renovation": "retargeting-leads-perdus-renovation-habitat",
  "plateforme-publicite-renovation": "google-ads-meta-ads-entreprise-renovation",
  "contacter-leads-reseaux-sociaux-renovation": "contacter-leads-facebook-ads-renovation-rdv",
  "niveaux-qualification-prospect-renovation": "qualification-prospect-tunnel-vente-renovation",
  "externaliser-prise-rdv-renovation": "externaliser-prise-rdv-entreprise-renovation",
  "choisir-agence-marketing-renovation": "choisir-agence-marketing-renovation-btp",
  "delai-resultats-acquisition-digitale-renovation": "delai-resultats-acquisition-clients-renovation",
  "cout-publicite-renovation-habitat": "cout-publicite-google-ads-meta-ads-renovation",
  "google-ads-vs-facebook-ads-renovation": "google-ads-vs-facebook-ads-renovation-habitat",
  "marketing-renovation-habitat-publicite-leads": "marketing-renovation-habitat-generation-leads",
  "arreter-achat-leads-renovation": "arreter-achat-leads-renovation-habitat",
  "internaliser-marketing-renovation": "internaliser-externaliser-marketing-renovation-btp",
  "pourquoi-acheter-des-leads-renovation-mauvaise-strategie-2026": "achat-leads-renovation-mauvaise-strategie",
};

// Wrapper component that handles redirects before rendering the main component
const BlogArticleRedirectGuard = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();

  // If old slug, redirect immediately — no hooks below, clean early return
  if (slug && slugRedirects[slug]) {
    const search = searchParams.toString();
    const newUrl = `/blog/${slugRedirects[slug]}${search ? `?${search}` : ""}`;
    return <Navigate to={newUrl} replace />;
  }

  return <BlogArticleContent slug={slug} />;
};

const BlogArticleContent = ({ slug }: { slug: string | undefined }) => {
  const article = blogArticles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (article) {
      document.title = article.title + " | Agendac";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", article.metaDescription);
      else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = article.metaDescription;
        document.head.appendChild(meta);
      }
      const metaKw = document.querySelector('meta[name="keywords"]');
      if (metaKw) metaKw.setAttribute("content", article.keywords.join(", "));
      else {
        const meta = document.createElement("meta");
        meta.name = "keywords";
        meta.content = article.keywords.join(", ");
        document.head.appendChild(meta);
      }
    }
    return () => {
      document.title = "Agendac - Agence marketing rénovation habitat";
    };
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 pb-20 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article introuvable</h1>
          <Link to="/blog" className="text-primary hover:underline">← Retour au blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const ArticleContent = slug ? articleComponents[slug] : null;
  const cover = getCoverImage(article.coverImage);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.metaDescription,
            image: cover,
            author: {
              "@type": "Person",
              name: "Arnaud UTILLE",
              jobTitle: "Président",
              worksFor: { "@type": "Organization", name: "Agendac" },
            },
            datePublished: article.date,
            publisher: {
              "@type": "Organization",
              name: "Agendac",
              url: "https://agendac.fr",
            },
            keywords: article.keywords.join(", "),
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://agendac.fr/blog/${article.slug}`,
            },
          }),
        }}
      />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 mb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
            <ArrowLeft size={16} /> Retour au blog
          </Link>
        </div>

        <article className="container mx-auto px-4 max-w-4xl">
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-primary border-primary/30">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display leading-tight mb-6">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1"><Calendar size={14} /> {formatDate(article.date)}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime} de lecture</span>
            </div>
            {/* Author card */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border">
              <img
                src={arnaudImg}
                alt="Arnaud UTILLE, Président d'Agendac"
                className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <p className="font-semibold text-foreground">Arnaud UTILLE</p>
                <p className="text-sm text-muted-foreground">Président d'Agendac — <Link to="/" className="text-primary hover:underline">Agence marketing rénovation</Link></p>
              </div>
            </div>
          </header>

          <div className="rounded-2xl overflow-hidden mb-12 aspect-[16/8]">
            <img src={cover} alt={article.title} className="w-full h-full object-cover" />
          </div>

          {ArticleContent && (
            <Suspense fallback={<div className="text-center py-12 text-muted-foreground">Chargement…</div>}>
              <ArticleContent />
            </Suspense>
          )}

          {slug && articleToService[slug] && (
            <RelatedService
              service={articleToService[slug].service}
              intro={articleToService[slug].intro}
            />
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticleRedirectGuard;
