import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { blogArticles } from "@/data/blogArticles";
import { ArrowRight, Clock, Calendar, Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCoverImage } from "@/utils/blogImages";
import { usePageTitle } from "@/hooks/usePageTitle";

const Blog = () => {
  usePageTitle("Blog");
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("recent");

  const allTags = useMemo(() => {
    const set = new Set<string>();
    blogArticles.forEach((a) => a.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b, "fr"));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = blogArticles.filter((a) => {
      const matchesTag = selectedTag === "all" || a.tags.includes(selectedTag);
      if (!matchesTag) return false;
      if (!q) return true;
      const haystack = [
        a.title,
        a.excerpt,
        a.metaDescription,
        a.tags.join(" "),
        a.keywords.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });

    list = [...list].sort((a, b) => {
      if (sortBy === "recent") return b.date.localeCompare(a.date);
      if (sortBy === "oldest") return a.date.localeCompare(b.date);
      if (sortBy === "title") return a.title.localeCompare(b.title, "fr");
      return 0;
    });
    return list;
  }, [query, selectedTag, sortBy]);

  const isFiltering =
    query.trim() !== "" || selectedTag !== "all" || sortBy !== "recent";

  const featured = !isFiltering ? blogArticles.find((a) => a.featured) : undefined;
  const others = isFiltering
    ? filtered
    : filtered.filter((a) => !a.featured);

  const resetFilters = () => {
    setQuery("");
    setSelectedTag("all");
    setSortBy("recent");
  };

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

        {/* Search & Filters */}
        <section className="container mx-auto px-4 mb-12">
          <AnimatedSection delay={0.05}>
            <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-4 md:p-6 shadow-card">
              <div className="grid gap-3 md:grid-cols-[1fr_auto_auto_auto] md:items-center">
                <div className="relative">
                  <Search
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Rechercher un article, un mot-clé…"
                    className="pl-9 h-11"
                    aria-label="Rechercher dans le blog"
                  />
                </div>
                <Select value={selectedTag} onValueChange={setSelectedTag}>
                  <SelectTrigger className="h-11 md:w-52" aria-label="Filtrer par thématique">
                    <SelectValue placeholder="Thématique" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="all">Toutes les thématiques</SelectItem>
                    {allTags.map((tag) => (
                      <SelectItem key={tag} value={tag}>
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-11 md:w-44" aria-label="Trier les articles">
                    <SelectValue placeholder="Trier" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="recent">Plus récents</SelectItem>
                    <SelectItem value="oldest">Plus anciens</SelectItem>
                    <SelectItem value="title">Titre (A-Z)</SelectItem>
                  </SelectContent>
                </Select>
                {isFiltering && (
                  <Button
                    variant="ghost"
                    onClick={resetFilters}
                    className="h-11"
                  >
                    <X size={16} /> Réinitialiser
                  </Button>
                )}
              </div>
              {isFiltering && (
                <p className="text-sm text-muted-foreground mt-4">
                  {filtered.length} article{filtered.length > 1 ? "s" : ""} trouvé
                  {filtered.length > 1 ? "s" : ""}
                </p>
              )}
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
            <h2 className="text-2xl font-bold text-foreground mb-8 font-display">
              {isFiltering ? "Résultats" : "Tous les articles"}
            </h2>
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

        {isFiltering && others.length === 0 && (
          <section className="container mx-auto px-4">
            <div className="text-center py-16 border border-dashed border-border rounded-2xl">
              <p className="text-lg text-foreground font-semibold mb-2">
                Aucun article trouvé
              </p>
              <p className="text-muted-foreground mb-6">
                Essayez d'autres mots-clés ou réinitialisez les filtres.
              </p>
              <Button onClick={resetFilters} variant="outline">
                <X size={16} /> Réinitialiser les filtres
              </Button>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
