import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { blogArticles } from "@/data/blogArticles";
import { getCoverImage } from "@/utils/blogImages";

interface RelatedArticlesProps {
  slugs: string[];
  title?: string;
  subtitle?: string;
  variant?: "light" | "muted";
}

const RelatedArticles = ({
  slugs,
  title = "Pour aller plus loin",
  subtitle = "Nos derniers articles pour structurer votre acquisition en rénovation.",
  variant = "muted",
}: RelatedArticlesProps) => {
  const articles = slugs
    .map((slug) => blogArticles.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  if (articles.length === 0) return null;

  const bg = variant === "muted" ? "bg-muted/30" : "bg-background";

  return (
    <section className={`py-20 relative overflow-hidden ${bg}`}>
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 border-gradient">
              <BookOpen size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground/80">Ressources & guides</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              {title.includes("plus loin") ? (
                <>
                  Pour aller <span className="text-gradient">plus loin</span>
                </>
              ) : (
                title
              )}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-muted-foreground text-base">{subtitle}</p>
          </AnimatedSection>
        </div>

        <div
          className={`grid grid-cols-1 ${
            articles.length >= 3 ? "md:grid-cols-3" : articles.length === 2 ? "md:grid-cols-2" : ""
          } gap-6 max-w-6xl mx-auto`}
        >
          {articles.map((article, index) => (
            <AnimatedSection key={article.slug} delay={index * 0.08} direction="scale">
              <Link
                to={`/blog/${article.slug}`}
                className="group glass-card border-gradient overflow-hidden h-full flex flex-col hover:glow-primary transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[16/9] overflow-hidden bg-muted/30">
                  <img
                    src={getCoverImage(article.coverImage)}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-[11px] text-muted-foreground ml-auto">{article.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2 leading-snug line-clamp-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{article.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Lire l'article
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;