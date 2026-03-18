import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionCTA from "@/components/SectionCTA";
import { blogArticles } from "@/data/blogArticles";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Clock, Calendar, CheckCircle, AlertTriangle, TrendingUp, Zap, Target } from "lucide-react";
import coverImage from "@/assets/blog/leads-renovation-2026.jpg";
import { useEffect } from "react";

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

  // Only render the first article content for now
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.metaDescription,
            image: coverImage,
            author: { "@type": "Organization", name: "Agendac" },
            datePublished: article.date,
            publisher: { "@type": "Organization", name: "Agendac" },
            keywords: article.keywords.join(", "),
          }),
        }}
      />

      <main className="pt-28 pb-20">
        {/* Back link */}
        <div className="container mx-auto px-4 mb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
            <ArrowLeft size={16} /> Retour au blog
          </Link>
        </div>

        {/* Article header */}
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

          {/* Cover image */}
          <div className="rounded-2xl overflow-hidden mb-12 aspect-[16/8]">
            <img src={coverImage} alt={article.title} className="w-full h-full object-cover" />
          </div>

          {/* Article body */}
          <div className="prose-custom">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Acheter des leads, c'est devenu la solution "facile" pour beaucoup d'entreprises de rénovation.
              </p>
              <p className="text-lg text-foreground font-medium mb-4">
                Tu payes → tu reçois des contacts → tes commerciaux appellent → tu signes.
              </p>
              <p className="text-muted-foreground mb-4">Sur le papier, ça paraît logique.</p>
              <p className="text-foreground font-semibold mb-4">
                Dans la réalité ?<br />
                C'est souvent une machine à détruire ta marge, ton image… et ta croissance.
              </p>
              <p className="text-muted-foreground">
                Si tu fais +1M€ de CA dans la rénovation, continuer à acheter des leads en 2026 est une erreur stratégique.
              </p>
              <p className="text-foreground font-medium mt-4">Voici pourquoi — en 3 points simples.</p>
            </section>

            {/* Section 1 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle size={20} className="text-destructive" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
                  1. Vos intérêts ne sont pas alignés avec votre fournisseur de leads
                </h2>
              </div>

              <p className="text-muted-foreground mb-4">
                Ton objectif est simple :<br />
                👉 Avoir des prospects qualifiés, sérieux, qui correspondent à ton offre.
              </p>
              <p className="text-muted-foreground mb-6">
                Leur objectif à eux est encore plus simple :<br />
                👉 Vendre un maximum de leads, au maximum d'entreprises.
              </p>

              <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
                <p className="font-semibold text-foreground mb-3">Résultat :</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Le même lead est vendu à 2, 3, parfois 4 entreprises</li>
                  <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Tu arrives en concurrence directe dès le premier appel</li>
                  <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Tu es forcé de te battre sur le prix</li>
                </ul>
                <p className="text-foreground font-medium mt-4">👉 Tu ne contrôles ni la qualité, ni la distribution.</p>
              </div>

              <p className="text-muted-foreground mb-2">Et forcément, ça crée de la frustration :</p>
              <ul className="space-y-1 text-muted-foreground mb-4 italic">
                <li>"Les leads sont mauvais"</li>
                <li>"Les prospects ne répondent pas"</li>
                <li>"Ils ont déjà signé ailleurs"</li>
              </ul>
              <p className="text-foreground font-medium">
                Ce n'est pas un problème de marché.<br />
                C'est un problème de <span className="text-primary">modèle</span>.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Target size={20} className="text-secondary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
                  2. Les leads ne viennent pas de votre marque
                </h2>
              </div>

              <p className="text-muted-foreground mb-4">La plupart des leads que tu achètes viennent de :</p>
              <ul className="space-y-1 text-muted-foreground mb-6">
                <li>• Pages blanches</li>
                <li>• Sites génériques</li>
                <li>• Funnels sans identité claire</li>
              </ul>

              <p className="text-foreground font-medium mb-6">
                👉 Le prospect ne te connaît pas.<br />
                👉 Il ne t'a pas choisi.<br />
                👉 Il n'a aucune confiance en toi.
              </p>

              <p className="text-muted-foreground mb-4">
                Aujourd'hui, les clients sont méfiants. Surtout dans la rénovation.
              </p>

              <p className="text-muted-foreground mb-2">
                Un propriétaire avec un bon niveau de revenus ne laisse pas son numéro sur :
              </p>
              <ul className="space-y-1 text-muted-foreground mb-6">
                <li>• Une page douteuse</li>
                <li>• Une promesse trop belle</li>
                <li>• Un site sans visage</li>
              </ul>

              <div className="bg-muted/50 border border-border rounded-xl p-6">
                <p className="font-semibold text-foreground mb-3">Résultat :</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Les meilleurs prospects ne remplissent pas ces formulaires</li>
                  <li>• Tu récupères les plus froids, les plus hésitants… ou les plus sensibles au prix</li>
                </ul>
                <p className="text-foreground font-medium mt-4">👉 Tu construis ton acquisition sur une base faible.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap size={20} className="text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
                  3. Vous devenez dépendant
                </h2>
              </div>

              <p className="text-foreground font-semibold mb-4">C'est le vrai danger.</p>
              <p className="text-muted-foreground mb-2">Quand tu achètes des leads :</p>
              <ul className="space-y-1 text-muted-foreground mb-4">
                <li>• Tu n'as pas de marque</li>
                <li>• Tu n'as pas de visibilité</li>
                <li>• Tu n'as pas d'actif marketing</li>
              </ul>
              <p className="text-foreground font-medium mb-6">👉 Tu as juste un robinet.</p>

              <p className="text-muted-foreground mb-2">Et le jour où tu coupes :</p>
              <ul className="space-y-1 text-muted-foreground mb-6">
                <li>• Plus de leads</li>
                <li>• Plus de RDV</li>
                <li>• Plus de business</li>
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                <p className="text-foreground font-medium mb-2">À l'inverse, quand tu investis dans ta communication :</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Ta marque circule</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Les gens te reconnaissent</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Tu deviens une référence locale</li>
                </ul>
                <p className="text-foreground font-medium mt-4">
                  Même si tu pauses tes campagnes :<br />
                  👉 Tu continues d'exister dans la tête des gens.
                </p>
              </div>

              <p className="text-muted-foreground">
                C'est exactement pour ça que certaines marques sont appelées automatiquement.
                Le jour où tu as un problème, tu sais qui contacter.
              </p>
              <p className="text-foreground font-medium mt-2">Ce n'est pas un hasard. C'est de la stratégie.</p>
            </section>

            {/* Alternative */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <TrendingUp size={20} className="text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
                  Alors, quelle est l'alternative ?
                </h2>
              </div>

              <p className="text-muted-foreground mb-4">
                Arrêter d'acheter des leads… ne veut pas dire arrêter d'investir en acquisition.
              </p>
              <p className="text-foreground font-medium mb-6">Ça veut dire changer de modèle.</p>

              <p className="text-muted-foreground mb-2">
                👉 Passer de "je loue des prospects"<br />
                👉 À "je construis mon propre système d'acquisition"
              </p>

              <p className="text-muted-foreground mt-6 mb-3">Concrètement :</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Des publicités qui mettent en avant ta marque</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Du contenu qui crée de la confiance</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Un tunnel structuré (pas une page blanche)</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Un process commercial adapté derrière</li>
              </ul>

              <p className="text-foreground font-medium mb-4">
                Pas de promesses bullshit. Pas de raccourcis.
              </p>
              <p className="text-muted-foreground">Juste un système qui :</p>
              <ul className="space-y-1 text-muted-foreground mt-2">
                <li>• Génère des leads</li>
                <li>• Te différencie</li>
                <li>• Et améliore ta rentabilité</li>
              </ul>
            </section>

            {/* À retenir */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground font-display mb-4">📌 À retenir</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">L'achat de leads crée une dépendance toxique — tu ne construis aucun actif marketing durable.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">Les leads partagés entre plusieurs entreprises détruisent tes marges et ta compétitivité.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">Le vrai levier, c'est de construire ton propre système d'acquisition avec ta marque au centre.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Conclusion</h2>
              <p className="text-muted-foreground mb-4">Acheter des leads peut te dépanner à court terme.</p>
              <p className="text-muted-foreground mb-2">Mais si tu veux :</p>
              <ul className="space-y-1 text-muted-foreground mb-4">
                <li>• Monter en gamme</li>
                <li>• Améliorer tes marges</li>
                <li>• Arrêter de dépendre des plateformes</li>
              </ul>
              <p className="text-foreground font-semibold mb-6">👉 Ce n'est pas la bonne stratégie.</p>
              <p className="text-foreground font-medium text-lg">
                Le vrai levier, c'est la maîtrise de ton acquisition.
              </p>
            </section>

            {/* CTA */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
                <p className="text-muted-foreground mb-2">
                  Si tu diriges une entreprise de rénovation à +1M€ de CA
                </p>
                <p className="text-foreground font-semibold text-lg mb-6">
                  et que tu veux structurer un vrai système d'acquisition :
                </p>
                <SectionCTA />
              </div>
            </section>

            {/* FAQ SEO */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
                Questions fréquentes
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1" className="border-border">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    Est-ce que l'achat de leads est rentable en rénovation ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    À court terme parfois, mais rarement sur la durée. Les leads partagés entre plusieurs entreprises
                    font chuter le taux de conversion et augmentent le coût d'acquisition réel. À long terme, construire
                    sa propre stratégie d'acquisition est bien plus rentable.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2" className="border-border">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    Comment générer des leads en rénovation sans plateforme ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Via la publicité ciblée (Facebook Ads, Google Ads) mettant en avant ta marque, du contenu de qualité
                    qui crée de la confiance, et un tunnel de conversion structuré avec un process commercial adapté.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3" className="border-border">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    Pourquoi les leads sont partagés entre plusieurs entreprises ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    C'est le modèle économique des plateformes de vente de leads : elles maximisent leur revenu en
                    vendant le même contact à plusieurs entreprises simultanément, ce qui crée une concurrence directe
                    et fait baisser la qualité perçue du lead.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Keywords for SEO (hidden) */}
            <div className="sr-only">
              {article.keywords.join(", ")}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;
