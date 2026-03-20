import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogArticles } from "@/data/blogArticles";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { useEffect, lazy, Suspense } from "react";
import { getCoverImage } from "@/utils/blogImages";

const articleComponents: Record<string, React.ComponentType> = {
  "pourquoi-acheter-des-leads-renovation-mauvaise-strategie-2026": lazy(() => import("@/components/blog/ArticleLeadsRenovation")),
  "internaliser-marketing-renovation": lazy(() => import("@/components/blog/ArticleInternaliserMarketing")),
  "arreter-achat-leads-renovation": lazy(() => import("@/components/blog/ArticleArreterAchatLeads")),
  "marketing-renovation-habitat-publicite-leads": lazy(() => import("@/components/blog/ArticleMarketingRenovation")),
  "google-ads-vs-facebook-ads-renovation": lazy(() => import("@/components/blog/ArticleGoogleVsFacebookAds")),
};

const BlogArticle = () => {
  const { slug } = useParams();
  const article = blogArticles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
            author: { "@type": "Organization", name: "Agendac" },
            datePublished: article.date,
            publisher: { "@type": "Organization", name: "Agendac" },
            keywords: article.keywords.join(", "),
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
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar size={14} /> {formatDate(article.date)}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime} de lecture</span>
              <span>Par {article.author}</span>
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

          <div className="sr-only">{article.keywords.join(", ")}</div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;
