import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, TrendingUp, Target, BarChart3, Zap, Eye } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";
import ArticleVideoSection from "./ArticleVideoSection";

const ArticleMarketingRenovation = () => (
  <div className="prose-custom">
    {/* Résumé */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          Vous pensez que la <strong>publicité rénovation habitat</strong> ne fonctionne pas ? Cet article démonte cette idée reçue et vous montre pourquoi les entreprises de rénovation à +1M€ qui investissent dans un <strong>système d'acquisition structuré</strong> explosent leurs résultats — tandis que celles qui achètent des leads stagnent.
        </p>
      </div>
    </section>

    {/* Sommaire */}
    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#pub-fonctionne" className="hover:text-primary transition-colors">1. Si la publicité ne marchait pas, Google et Meta n'existeraient pas</a></li>
            <li><a href="#vraie-question" className="hover:text-primary transition-colors">2. La vraie question n'est pas "est-ce que ça marche"</a></li>
            <li><a href="#deux-realites" className="hover:text-primary transition-colors">3. Deux réalités que personne ne vous dit</a></li>
            <li><a href="#terrain" className="hover:text-primary transition-colors">4. Ce qu'on observe tous les jours sur le terrain</a></li>
            <li><a href="#ce-qui-change" className="hover:text-primary transition-colors">5. Ce qui change tout</a></li>
            <li><a href="#dependance-leads-mr" className="hover:text-primary transition-colors">6. Le vrai problème : la dépendance aux leads</a></li>
            <li><a href="#comprendre-mr" className="hover:text-primary transition-colors">7. Ce qu'il faut comprendre une bonne fois pour toutes</a></li>
            <li><a href="#conclusion-mr" className="hover:text-primary transition-colors">8. Conclusion</a></li>
            <li><a href="#faq-mr" className="hover:text-primary transition-colors">9. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <ArticleVideoSection
      videoId="wd8pbwE7CCM"
      summary={
        <>
          <p>La publicité en rénovation fonctionne — mais pas comme vous le pensez. Découvrez comment un <strong>système d'acquisition structuré</strong> change la donne.</p>
        </>
      }
    />

    {/* Introduction */}
    <section className="mb-12">
      <p className="text-lg text-muted-foreground leading-relaxed mb-4 italic">
        "J'ai une société dans la rénovation de l'habitat à plus de 1M€ de CA… mais faire de la publicité en ligne, ça ne sert à rien."
      </p>
      <p className="text-muted-foreground mb-4">
        C'est exactement ce que pensent la majorité des dirigeants du secteur.
      </p>
      <p className="text-foreground font-medium mb-4">
        Et c'est précisément pour ça que certains stagnent… pendant que d'autres explosent.
      </p>
      <p className="text-muted-foreground mb-2">On va être clair :</p>
      <p className="text-foreground font-semibold text-xl mb-4">👉 la <strong>publicité rénovation</strong> fonctionne.</p>
      <p className="text-foreground font-medium">Mais pas comme vous le pensez.</p>
    </section>

    {/* Section 1 */}
    <section className="mb-12" id="pub-fonctionne">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          1. Si la publicité ne marchait pas, Google et Meta n'existeraient pas
        </h2>
      </div>

      <p className="text-muted-foreground mb-3">C'est le point le plus simple.</p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Google est une des entreprises les plus puissantes au monde</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Meta (Facebook, Instagram) pareil</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Leur modèle repose quasi uniquement sur la <strong>publicité</strong></li>
      </ul>

      <p className="text-muted-foreground mb-4">Maintenant posez-vous une question simple :</p>
      <p className="text-foreground font-semibold mb-4">👉 Si la publicité ne fonctionnait pas… qui paierait ?</p>
      <p className="text-foreground font-medium mb-4">Personne.</p>
      <p className="text-muted-foreground mb-4">Et pourtant, des millions d'entreprises injectent chaque mois des milliards d'euros en <em>campagnes publicitaires</em>.</p>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <p className="text-foreground font-medium mb-2">Conclusion :</p>
        <p className="text-muted-foreground mb-1">Le problème n'est pas la publicité.</p>
        <p className="text-foreground font-semibold">Le problème, c'est <strong>comment elle est utilisée</strong>.</p>
      </div>
    </section>

    {/* Section 2 */}
    <section className="mb-12" id="vraie-question">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Eye size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          2. La vraie question n'est pas "est-ce que ça marche"
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">Quand vous lancez une <strong>campagne publicitaire rénovation</strong>, vous payez pour une chose :</p>
      <p className="text-foreground font-semibold mb-4">👉 de la visibilité</p>
      <p className="text-muted-foreground mb-4">Et ça, c'est garanti. Vos annonces vont être vues. Votre entreprise va être exposée.</p>

      <p className="text-muted-foreground mb-3">Ce qui n'est pas garanti, en revanche :</p>
      <ul className="space-y-1 text-muted-foreground mb-6">
        <li>• Les <strong>leads</strong></li>
        <li>• Les rendez-vous</li>
        <li>• Les chantiers signés</li>
      </ul>

      <p className="text-muted-foreground mb-4">Pourquoi ? Parce que la performance dépend de tout le reste :</p>

      <h3 className="text-xl font-bold text-foreground font-display mb-4">Ce qui fait vraiment la différence</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Votre <strong>positionnement</strong> (prix vs valeur)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Votre <em>image de marque</em></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Votre offre</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Votre <strong>tunnel de vente rénovation</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Votre suivi commercial</li>
      </ul>

      <p className="text-foreground font-medium mb-1">👉 La <strong>publicité rénovation</strong> ne fait pas le travail à votre place.</p>
      <p className="text-foreground font-semibold">👉 Elle amplifie ce que vous êtes déjà.</p>
    </section>

    {/* Deux réalités */}
    <section className="mb-12" id="deux-realites">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Deux réalités que personne ne vous dit
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-3">❌ Mal utilisée</h3>
          <p className="text-muted-foreground text-sm mb-3">La publicité détruit du cash :</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Mauvais ciblage</li>
            <li>• Message flou</li>
            <li>• Aucune différenciation</li>
            <li>• Pas de process derrière</li>
          </ul>
          <p className="text-foreground font-medium text-sm mt-3">👉 des milliers d'euros brûlés sans <em>ROI publicité rénovation</em></p>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-3">✅ Bien utilisée</h3>
          <p className="text-muted-foreground text-sm mb-3">Elle devient une <strong>machine à leads rénovation</strong> :</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• <strong>Leads qualifiés</strong></li>
            <li>• RDV réguliers</li>
            <li>• Pipeline rempli</li>
            <li>• Croissance prévisible</li>
          </ul>
          <p className="text-foreground font-medium text-sm mt-3">👉 Ce n'est plus du hasard. C'est un <strong>système</strong>.</p>
        </div>
      </div>
    </section>

    {/* Section 3 - Terrain */}
    <section className="mb-12" id="terrain">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <BarChart3 size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          3. Ce qu'on observe tous les jours sur le terrain
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Chez <Link to="/" className="text-primary hover:underline font-semibold">Agendac</Link>, on travaille exclusivement avec :
      </p>
      <p className="text-foreground font-semibold mb-6">
        👉 des entreprises de <strong>rénovation de l'habitat</strong> à +1M€ de CA
      </p>
      <p className="text-muted-foreground mb-3">Et la réalité est simple :</p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Des milliers de <strong>leads</strong> générés chaque mois</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Des centaines de rendez-vous</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Des chantiers signés partout en France</li>
      </ul>
      <p className="text-muted-foreground mb-2">Pas en théorie.</p>
      <p className="text-foreground font-semibold">👉 En conditions réelles. <Link to="/resultats-clients-agendac" className="text-primary hover:underline">Voir nos résultats clients →</Link></p>
    </section>

    {/* Ce qui change tout */}
    <section className="mb-12" id="ce-qui-change">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Target size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Ce qui change tout
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">Les entreprises qui réussissent ne font pas "de la pub".</p>
      <p className="text-foreground font-medium mb-4">Elles construisent :</p>
      <p className="text-foreground font-semibold mb-4">👉 un <strong>système d'acquisition client rénovation</strong> complet</p>

      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <p className="text-foreground font-medium mb-3">Avec :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Publicité</strong> (<em>Google Ads</em> / <em>Facebook Ads</em>)</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Image de marque solide</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Tunnel de vente</strong> optimisé</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Équipe commerciale structurée</li>
        </ul>
      </div>
    </section>

    {/* CTA milieu */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Vous voulez savoir combien de chantiers votre <strong>publicité</strong> pourrait réellement générer ?
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          Découvrez ce qui fonctionne pour les entreprises de <strong>rénovation</strong> à +1M€.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* Dépendance aux leads */}
    <section className="mb-12" id="dependance-leads-mr">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le vrai problème : la dépendance aux leads
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Beaucoup d'entreprises pensent avoir trouvé la solution : <strong className="text-foreground">acheter des leads rénovation.</strong>
      </p>
      <p className="text-muted-foreground mb-3">Mais en réalité, elles créent un autre problème :</p>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Dépendance aux plateformes</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Qualité instable</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Concurrence directe sur les prix</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Marges compressées</strong></li>
        </ul>
        <p className="text-foreground font-semibold mt-4">👉 Vous ne contrôlez rien.</p>
      </div>

      <p className="text-muted-foreground">
        <Link to="/blog/achat-leads-renovation-mauvaise-strategie" className="text-primary hover:underline font-medium">→ Lire aussi : Pourquoi acheter des leads en rénovation est une mauvaise stratégie en 2026</Link>
      </p>
    </section>

    {/* La vraie question */}
    <section className="mb-12" id="comprendre-mr">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Zap size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Ce qu'il faut comprendre une bonne fois pour toutes
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">La question n'est pas :</p>
      <p className="text-muted-foreground mb-4">👉 "Est-ce que la <em>publicité rénovation</em> fonctionne ?"</p>
      <p className="text-foreground font-medium mb-4">La réponse est oui.</p>

      <p className="text-muted-foreground mb-2">La vraie question est :</p>
      <p className="text-foreground font-semibold text-lg mb-6">
        👉 jusqu'à quel point êtes-vous capable de la faire fonctionner ?
      </p>

      <p className="text-muted-foreground mb-3">Et ça dépend uniquement de :</p>
      <ul className="space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> votre <strong>stratégie marketing rénovation</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> votre structure</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> et surtout… <strong>qui la gère</strong></li>
      </ul>
    </section>

    {/* À retenir */}
    <section className="mb-12">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-foreground font-display mb-4">📌 À retenir</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">La <strong>publicité rénovation</strong> fonctionne — le problème, c'est comment elle est utilisée et ce qu'il y a derrière.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">L'<strong>achat de leads</strong> crée de la dépendance — construire un <em>système d'acquisition</em> crée de la croissance.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">Les entreprises qui réussissent structurent <strong>publicité, marque, tunnel et process commercial</strong>.</span>
          </li>
        </ul>
      </div>
    </section>

    {/* Conclusion */}
    <section className="mb-12" id="conclusion-mr">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Conclusion : la publicité n'est pas le problème</h2>
      <p className="text-muted-foreground mb-4">La <strong>publicité</strong> est un levier. Puissant.</p>
      <p className="text-muted-foreground mb-4">Mais comme tous les leviers :</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 text-center">
          <p className="text-foreground font-medium text-sm">👉 mal utilisé → <span className="text-destructive font-semibold">perte</span></p>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-center">
          <p className="text-foreground font-medium text-sm">👉 bien utilisé → <span className="text-primary font-semibold">croissance</span></p>
        </div>
      </div>
    </section>

    {/* CTA final */}
    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-foreground font-semibold text-lg mb-2">
          Vous voulez passer à un vrai <strong>système d'acquisition clients rénovation</strong> ?
        </p>
        <p className="text-muted-foreground mb-6">
          Si vous dirigez une entreprise de <strong>rénovation de l'habitat</strong> à +1M€ de CA, et que vous voulez arrêter de dépendre des leads, <em>structurer votre acquisition</em> et générer des chantiers de manière prévisible :
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ SEO */}
    <section className="mb-12" id="faq-mr">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Questions fréquentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Est-ce que la publicité fonctionne vraiment dans la rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui. Des millions d'euros sont investis chaque mois en <strong>publicité rénovation habitat</strong> avec des résultats concrets. La clé, c'est la <em>stratégie marketing</em> derrière : positionnement, image de marque, tunnel de conversion et suivi commercial.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quelle est la différence entre acheter des leads et faire de la publicité ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            L'<strong>achat de leads</strong>, c'est louer des contacts partagés avec d'autres entreprises. La <strong>publicité sous votre marque</strong>, c'est générer vos propres opportunités exclusives et construire un actif <em>marketing digital</em> durable.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien faut-il investir en publicité pour une entreprise de rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Le budget dépend de vos objectifs et de votre zone géographique. L'important n'est pas le montant investi, mais la structure derrière : un <strong>système d'acquisition</strong> complet qui optimise le <em>coût d'acquisition client rénovation</em>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Pourquoi mes campagnes ne marchent pas en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les <em>campagnes publicitaires rénovation</em> qui échouent manquent généralement d'un élément clé : le système. Sans <strong>tunnel de vente</strong>, sans image de marque et sans process commercial structuré, même le meilleur ciblage ne convertira pas. Une <Link to="/" className="text-primary hover:underline">agence marketing rénovation</Link> spécialisée résout ces problèmes.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Maillage interne */}
    <section className="mb-12">
      <h3 className="text-lg font-bold text-foreground font-display mb-4">📚 Articles connexes</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <Link to="/blog/achat-leads-renovation-mauvaise-strategie" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Pourquoi acheter des leads en rénovation est une mauvaise stratégie en 2026</p>
        </Link>
        <Link to="/blog/arreter-achat-leads-renovation-habitat" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Arrêter d'acheter des leads : sortir de la guerre des prix en 5 étapes</p>
        </Link>
        <Link to="/blog/google-ads-vs-facebook-ads-renovation-habitat" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Google Ads vs Facebook Ads rénovation : lequel choisir ?</p>
        </Link>
        <Link to="/blog/internaliser-externaliser-marketing-renovation-btp" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Internaliser ou externaliser son marketing en rénovation</p>
        </Link>
      </div>
    </section>
  </div>
);

export default ArticleMarketingRenovation;