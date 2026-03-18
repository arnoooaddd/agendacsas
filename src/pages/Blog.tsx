import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { blogArticles } from "@/data/blogArticles";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getCoverImage } from "@/utils/blogImages";

const Blog = () => {
  const featured = blogArticles.find((a) => a.featured);
  const others = blogArticles.filter((a) => !a.featured);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-16">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                Blog Agendac
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
                Nos articles & insights
              </h1>
              <p className="text-lg text-muted-foreground">
                Stratégies d'acquisition, marketing digital et conseils pour les entreprises de rénovation.
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* Featured article */}
        {featured && (
          <section className="container mx-auto px-4 mb-20">
            <AnimatedSection delay={0.1}>
              <Link
                to={`/blog/${featured.slug}`}
                className="group block rounded-2xl overflow-hidden border border-border bg-card shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                    <img
                      src={getCoverImage(featured.coverImage)}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <Badge className="bg-secondary text-secondary-foreground">À la une</Badge>
                      {featured.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-muted-foreground">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display group-hover:text-primary transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {formatDate(featured.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {featured.readTime} de lecture
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      Lire l'article <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </section>
        )}

        {/* Other articles grid */}
        {others.length > 0 && (
          <section className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8 font-display">Tous les articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {others.map((article, i) => (
                <AnimatedSection key={article.slug} delay={i * 0.1}>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="group block rounded-2xl overflow-hidden border border-border bg-card shadow-card hover:shadow-card-hover transition-all duration-500"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={getCoverImage(article.coverImage)}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs text-muted-foreground">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 font-display group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} /> {formatDate(article.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {article.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
