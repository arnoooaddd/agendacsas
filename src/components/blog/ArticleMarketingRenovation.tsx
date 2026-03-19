import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, TrendingUp, Target, BarChart3, Zap, Eye } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleMarketingRenovation = () => (
  <div className="prose-custom">
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
      <p className="text-foreground font-semibold text-xl mb-4">👉 la publicité fonctionne.</p>
      <p className="text-foreground font-medium">Mais pas comme vous le pensez.</p>
    </section>

    {/* Section 1 */}
    <section className="mb-12">
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
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Leur modèle repose quasi uniquement sur la publicité</li>
      </ul>

      <p className="text-muted-foreground mb-4">Maintenant posez-vous une question simple :</p>
      <p className="text-foreground font-semibold mb-4">👉 Si la publicité ne fonctionnait pas… qui paierait ?</p>
      <p className="text-foreground font-medium mb-4">Personne.</p>
      <p className="text-muted-foreground mb-4">Et pourtant, des millions d'entreprises injectent chaque mois des milliards d'euros.</p>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <p className="text-foreground font-medium mb-2">Conclusion :</p>
        <p className="text-muted-foreground mb-1">Le problème n'est pas la publicité.</p>
        <p className="text-foreground font-semibold">Le problème, c'est comment elle est utilisée.</p>
      </div>
    </section>

    {/* Section 2 */}
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Eye size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          2. La vraie question n'est pas "est-ce que ça marche"
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">Quand vous lancez une campagne publicitaire, vous payez pour une chose :</p>
      <p className="text-foreground font-semibold mb-4">👉 de la visibilité</p>
      <p className="text-muted-foreground mb-4">Et ça, c'est garanti. Vos annonces vont être vues. Votre entreprise va être exposée.</p>

      <p className="text-muted-foreground mb-3">Ce qui n'est pas garanti, en revanche :</p>
      <ul className="space-y-1 text-muted-foreground mb-6">
        <li>• Les leads</li>
        <li>• Les rendez-vous</li>
        <li>• Les chantiers signés</li>
      </ul>

      <p className="text-muted-foreground mb-4">Pourquoi ? Parce que la performance dépend de tout le reste :</p>

      <h3 className="text-xl font-bold text-foreground font-display mb-4">Ce qui fait vraiment la différence</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Votre positionnement (prix vs valeur)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Votre image de marque</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Votre offre</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Votre tunnel de conversion</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Votre suivi commercial</li>
      </ul>

      <p className="text-foreground font-medium mb-1">👉 La publicité ne fait pas le travail à votre place.</p>
      <p className="text-foreground font-semibold">👉 Elle amplifie ce que vous êtes déjà.</p>
    </section>

    {/* Deux réalités */}
    <section className="mb-12">
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
          <p className="text-foreground font-medium text-sm mt-3">👉 des milliers d'euros brûlés sans retour</p>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-3">✅ Bien utilisée</h3>
          <p className="text-muted-foreground text-sm mb-3">Elle devient une machine à chantiers :</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Leads qualifiés</li>
            <li>• RDV réguliers</li>
            <li>• Pipeline rempli</li>
            <li>• Croissance prévisible</li>
          </ul>
          <p className="text-foreground font-medium text-sm mt-3">👉 Ce n'est plus du hasard. C'est un système.</p>
        </div>
      </div>
    </section>

    {/* Section 3 - Terrain */}
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <BarChart3 size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          3. Ce qu'on observe tous les jours sur le terrain
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Chez Agendac, on travaille exclusivement avec :
      </p>
      <p className="text-foreground font-semibold mb-6">
        👉 des entreprises de rénovation de l'habitat à +1M€ de CA
      </p>
      <p className="text-muted-foreground mb-3">Et la réalité est simple :</p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Des milliers de leads générés chaque mois</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Des centaines de rendez-vous</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Des chantiers signés partout en France</li>
      </ul>
      <p className="text-muted-foreground mb-2">Pas en théorie.</p>
      <p className="text-foreground font-semibold">👉 En conditions réelles.</p>
    </section>

    {/* Ce qui change tout */}
    <section className="mb-12">
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
      <p className="text-foreground font-semibold mb-4">👉 un système d'acquisition complet</p>

      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <p className="text-foreground font-medium mb-3">Avec :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Publicité (Google / Meta)</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Image de marque solide</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Tunnel optimisé</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Équipe commerciale structurée</li>
        </ul>
      </div>
    </section>

    {/* CTA milieu */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Vous voulez savoir combien de chantiers votre publicité pourrait réellement générer ?
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          Découvrez ce qui fonctionne pour les entreprises de rénovation à +1M€.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* Dépendance aux leads */}
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le vrai problème : la dépendance aux leads
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Beaucoup d'entreprises pensent avoir trouvé la solution : <strong className="text-foreground">acheter des leads.</strong>
      </p>
      <p className="text-muted-foreground mb-3">Mais en réalité, elles créent un autre problème :</p>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Dépendance aux plateformes</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Qualité instable</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Concurrence directe sur les prix</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Marges compressées</li>
        </ul>
        <p className="text-foreground font-semibold mt-4">👉 Vous ne contrôlez rien.</p>
      </div>
    </section>

    {/* La vraie question */}
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Zap size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Ce qu'il faut comprendre une bonne fois pour toutes
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">La question n'est pas :</p>
      <p className="text-muted-foreground mb-4">👉 "Est-ce que la publicité fonctionne ?"</p>
      <p className="text-foreground font-medium mb-4">La réponse est oui.</p>

      <p className="text-muted-foreground mb-2">La vraie question est :</p>
      <p className="text-foreground font-semibold text-lg mb-6">
        👉 jusqu'à quel point êtes-vous capable de la faire fonctionner ?
      </p>

      <p className="text-muted-foreground mb-3">Et ça dépend uniquement de :</p>
      <ul className="space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> votre stratégie</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> votre structure</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> et surtout… qui la gère</li>
      </ul>
    </section>

    {/* À retenir */}
    <section className="mb-12">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-foreground font-display mb-4">📌 À retenir</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">La publicité fonctionne — le problème, c'est comment elle est utilisée et ce qu'il y a derrière.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">Acheter des leads crée de la dépendance — construire un système d'acquisition crée de la croissance.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">Les entreprises qui réussissent ne font pas "de la pub" — elles structurent publicité, marque, tunnel et process commercial.</span>
          </li>
        </ul>
      </div>
    </section>

    {/* Conclusion */}
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Conclusion : la publicité n'est pas le problème</h2>
      <p className="text-muted-foreground mb-4">La publicité est un levier. Puissant.</p>
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
          Vous voulez passer à un vrai système d'acquisition ?
        </p>
        <p className="text-muted-foreground mb-2">
          Si vous dirigez une entreprise de rénovation de l'habitat à +1M€ de CA, et que vous voulez arrêter de dépendre des leads, structurer votre acquisition et générer des chantiers de manière prévisible :
        </p>
        <p className="text-foreground font-semibold mb-2">👉 Rendez-vous sur Agendac.fr</p>
        <p className="text-xs text-muted-foreground mb-6">
          Article rédigé par <strong>Arnaud UTILLE</strong>, Président d'Agendac
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
            Est-ce que la publicité fonctionne vraiment dans la rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui. Des millions d'euros sont investis chaque mois en publicité dans le secteur de la rénovation avec des résultats concrets. La clé, c'est la stratégie derrière : positionnement, image de marque, tunnel de conversion et suivi commercial.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quelle est la différence entre acheter des leads et faire de la publicité ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Acheter des leads, c'est louer des contacts partagés avec d'autres entreprises. Faire de la publicité sous votre marque, c'est générer vos propres opportunités exclusives et construire un actif marketing durable.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien faut-il investir en publicité pour une entreprise de rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Le budget dépend de vos objectifs et de votre zone géographique. L'important n'est pas le montant investi, mais la structure derrière : un système d'acquisition complet qui transforme chaque euro en chantier signé.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Facebook ou Google Ads pour la rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les deux sont complémentaires. Facebook/Instagram permettent de toucher des propriétaires en phase de réflexion. Google Ads capte ceux qui cherchent activement. La meilleure approche combine les deux dans un système structuré.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Maillage interne */}
    <section className="mb-12">
      <div className="bg-muted/30 border border-border rounded-xl p-6">
        <p className="text-sm font-semibold text-foreground mb-3">📖 Articles & pages associés</p>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/blog/pourquoi-acheter-des-leads-renovation-mauvaise-strategie-2026" className="text-primary hover:underline">
              → Pourquoi acheter des leads en rénovation est une mauvaise stratégie en 2026
            </Link>
          </li>
          <li>
            <Link to="/blog/arreter-achat-leads-renovation" className="text-primary hover:underline">
              → Arrêter d'acheter des leads : comment sortir de la guerre des prix en 5 étapes
            </Link>
          </li>
          <li>
            <Link to="/blog/internaliser-marketing-renovation" className="text-primary hover:underline">
              → Internaliser ou externaliser son marketing en rénovation
            </Link>
          </li>
          <li>
            <Link to="/results" className="text-primary hover:underline">
              → Nos résultats clients
            </Link>
          </li>
          <li>
            <a href="https://api.leadconnectorhq.com/widget/booking/57xP6cJ3bacw7ZTpsRXe" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              → Prendre rendez-vous
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
);

export default ArticleMarketingRenovation;
