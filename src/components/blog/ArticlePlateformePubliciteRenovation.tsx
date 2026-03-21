import { Link } from "react-router-dom";
import { Search, Megaphone, Target, CheckCircle, AlertTriangle, BarChart3, Layers, Zap, TrendingUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticlePlateformePubliciteRenovation = () => (
  <div className="prose-custom">
    {/* Résumé */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          Google Ads, Facebook Ads, YouTube Ads… sur quelle plateforme investir quand on fait <strong>+1M€ de CA en rénovation</strong> ? Il ne s'agit pas de « tester » — il s'agit de structurer une <strong><em>acquisition clients rénovation</em></strong> scalable. Cet article compare les plateformes, leurs forces, et vous montre comment les <strong>combiner intelligemment</strong>.
        </p>
      </div>
    </section>

    {/* Sommaire */}
    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">📑 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#deux-types" className="hover:text-primary transition-colors">1. Les deux types de prospects à cibler</a></li>
            <li><a href="#google-ads" className="hover:text-primary transition-colors">2. Google Ads : capter la demande existante</a></li>
            <li><a href="#meta-youtube" className="hover:text-primary transition-colors">3. Meta / YouTube Ads : créer la demande</a></li>
            <li><a href="#choisir" className="hover:text-primary transition-colors">4. Quelle plateforme choisir selon votre objectif</a></li>
            <li><a href="#combiner" className="hover:text-primary transition-colors">5. Le vrai levier : combiner les deux</a></li>
            <li><a href="#erreurs" className="hover:text-primary transition-colors">6. Erreurs classiques à éviter</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">7. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    {/* Introduction */}
    <section className="mb-12">
      <p className="text-foreground font-semibold text-xl mb-4">
        Vous avez déjà du bouche-à-oreille. Le but n'est pas de « tester » — c'est de <strong>structurer une acquisition scalable</strong>.
      </p>
      <p className="text-muted-foreground mb-4">
        À +1M€ de CA, vous ne pouvez plus vous permettre de dépendre d'un seul canal. La <strong><em>publicité rénovation</em></strong> bien structurée vous donne un flux de prospects prévisible et maîtrisé.
      </p>
      <p className="text-foreground font-medium">
        Encore faut-il savoir <strong>quelle plateforme utiliser</strong>, et surtout <strong>comment les articuler</strong>.
      </p>
    </section>

    {/* Section 1 */}
    <section className="mb-12" id="deux-types">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Target size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les deux types de prospects à cibler
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Search size={18} className="text-primary" />
            <h3 className="text-base font-bold text-foreground font-display">Prospects intentionnistes</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">Ils <strong>cherchent activement</strong> une solution :</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>✅ Veulent un devis</li>
            <li>✅ Comparent les prestataires</li>
            <li>✅ Prêts à passer à l'action</li>
          </ul>
          <p className="text-xs text-primary font-semibold mt-3">→ Canal : Google Ads</p>
        </div>
        <div className="bg-accent/30 border border-accent/50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Megaphone size={18} className="text-primary" />
            <h3 className="text-base font-bold text-foreground font-display">Prospects passifs</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">Ils <strong>ne cherchent pas encore</strong> mais peuvent être intéressés :</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>✅ Découvrent votre offre</li>
            <li>✅ Ont des objections</li>
            <li>✅ Besoin de réassurance</li>
          </ul>
          <p className="text-xs text-primary font-semibold mt-3">→ Canal : Meta / YouTube Ads</p>
        </div>
      </div>

      <p className="text-foreground font-medium">
        👉 Une <strong><em>stratégie marketing rénovation</em></strong> performante cible les deux audiences — pas une seule.
      </p>
    </section>

    {/* Section 2 - Google Ads */}
    <section className="mb-12" id="google-ads">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Search size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Google Ads : capter la demande existante
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        <strong><em>Google Ads rénovation</em></strong> repose sur un principe simple : vous apparaissez quand un prospect <strong>cherche activement</strong> vos services. C'est le canal le plus qualifié.
      </p>

      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <h3 className="text-base font-bold text-foreground font-display mb-3">Exemples de recherches captées :</h3>
        <ul className="space-y-1 text-sm text-muted-foreground italic">
          <li>• « installateur panneaux solaires prix »</li>
          <li>• « isolation combles aides 2026 »</li>
          <li>• « devis rénovation salle de bain »</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
          <h4 className="text-sm font-bold text-foreground font-display mb-2">✅ Avantages</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Leads <strong>très qualifiés</strong></li>
            <li>• Forte intention d'achat</li>
            <li>• Taux de closing élevé</li>
            <li>• Acquisition <strong>stable</strong> dans le temps</li>
          </ul>
        </div>
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
          <h4 className="text-sm font-bold text-foreground font-display mb-2">⚠️ Inconvénients</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• <strong><em>Coût lead rénovation</em></strong> plus élevé</li>
            <li>• Phase d'apprentissage (60–90 jours)</li>
            <li>• Volume limité au marché existant</li>
          </ul>
        </div>
      </div>

      <p className="text-foreground font-medium">
        👉 <strong>Idéal pour</strong> : structurer une base d'acquisition solide et sécuriser du chiffre d'affaires de manière prévisible.
      </p>
    </section>

    {/* Section 3 - Meta / YouTube */}
    <section className="mb-12" id="meta-youtube">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/50 flex items-center justify-center">
          <Megaphone size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Meta / YouTube Ads : créer la demande
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        <strong><em>Facebook Ads rénovation</em></strong>, Instagram Ads et YouTube Ads fonctionnent sur un principe totalement différent : vous <strong>interrompez</strong> le prospect pour capter son attention.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
          <h4 className="text-sm font-bold text-foreground font-display mb-2">✅ Avantages</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• <strong>Volume rapide</strong></li>
            <li>• Coût par lead plus faible</li>
            <li>• Montée en puissance en <strong>3–5 semaines</strong></li>
            <li>• Idéal pour le <strong>retargeting</strong></li>
          </ul>
        </div>
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
          <h4 className="text-sm font-bold text-foreground font-display mb-2">⚠️ Inconvénients</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Leads <strong>moins qualifiés</strong> au départ</li>
            <li>• Besoin de contenu (vidéo + copy)</li>
            <li>• Plus de travail <strong>commercial</strong> derrière</li>
          </ul>
        </div>
      </div>

      <p className="text-foreground font-medium">
        👉 <strong>Idéal pour</strong> : remplir un pipe rapidement, lisser les périodes creuses et alimenter le retargeting.
      </p>
    </section>

    {/* CTA milieu */}
    <section className="mb-12">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
        <p className="text-foreground font-semibold text-lg mb-2">
          Vous ne savez pas par quelle plateforme commencer ?
        </p>
        <p className="text-muted-foreground mb-4">
          Chez <Link to="/" className="text-primary hover:underline font-semibold">Agendac</Link>, on construit des <strong><em>systèmes d'acquisition client rénovation</em></strong> multi-canal adaptés à votre situation.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* Section 4 - Choisir */}
    <section className="mb-12" id="choisir">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Layers size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Quelle plateforme choisir selon votre objectif
        </h2>
      </div>

      <div className="space-y-4 mb-6">
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={18} className="text-destructive" />
            <h3 className="text-base font-bold text-foreground font-display">Cas 1 : Trou de planning</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-2">👉 <strong>Priorité : Meta / YouTube Ads</strong></p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Résultats rapides (3–5 semaines)</li>
            <li>• Volume immédiat</li>
            <li>• Coût d'entrée plus faible</li>
          </ul>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={18} className="text-primary" />
            <h3 className="text-base font-bold text-foreground font-display">Cas 2 : Stabiliser l'acquisition</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-2">👉 <strong>Priorité : Google Ads</strong></p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Leads très qualifiés</li>
            <li>• Prévisibilité</li>
            <li>• Meilleure <strong><em>rentabilité marketing rénovation</em></strong> long terme</li>
          </ul>
        </div>

        <div className="bg-accent/30 border border-accent/50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 size={18} className="text-primary" />
            <h3 className="text-base font-bold text-foreground font-display">Cas 3 : Structuré (&gt;1M€ CA)</h3>
          </div>
          <p className="text-sm text-foreground font-semibold">👉 Vous devez faire les deux.</p>
          <p className="text-sm text-muted-foreground mt-1">Combiner Google + Meta = acquisition complète et scalable.</p>
        </div>
      </div>
    </section>

    {/* Section 5 - Combiner */}
    <section className="mb-12" id="combiner">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Layers size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le vrai levier : combiner les deux
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Les entreprises de rénovation qui dominent leur marché <strong>ne choisissent pas</strong> entre Google et Meta. Elles <strong>structurent</strong> un système multi-canal.
      </p>

      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <h3 className="text-base font-bold text-foreground font-display mb-4">🔁 Le parcours multi-canal type :</h3>
        <div className="space-y-3 text-muted-foreground">
          <p className="flex items-start gap-2">
            <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
            <span>Prospect cherche sur <strong>Google</strong> → clique → <strong>ne convertit pas</strong></span>
          </p>
          <p className="flex items-start gap-2">
            <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
            <span>Il voit vos <strong>vidéos sur Facebook / YouTube</strong> (retargeting)</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
            <span>Vous <strong>répondez à ses objections</strong> via le contenu</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
            <span>Il revient → <strong>demande un devis</strong></span>
          </p>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
        <h3 className="text-base font-bold text-foreground font-display mb-3">📊 L'effet levier du multi-canal :</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> <strong>Meta</strong> → crée la demande</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> <strong>Google</strong> → capture la demande</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> <strong>Retargeting</strong> → convertit les indécis</li>
        </ul>
      </div>

      <p className="text-foreground font-medium">
        👉 Résultat : plus de volume, meilleure qualité, <strong><em>coût acquisition client rénovation</em></strong> optimisé.
      </p>
      <p className="text-muted-foreground mt-4">
        Pour comprendre en détail la différence entre les deux canaux, consultez notre article : <Link to="/blog/google-ads-vs-facebook-ads-renovation" className="text-primary hover:underline font-semibold">Google Ads vs Facebook Ads rénovation : lequel choisir ?</Link>
      </p>
    </section>

    {/* Section 6 - Erreurs */}
    <section className="mb-12" id="erreurs">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreurs classiques à éviter
        </h2>
      </div>

      <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 mb-6">
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Choisir une seule plateforme</strong> et ignorer l'autre</li>
          <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Ne pas retargeter</strong> — chaque visiteur perdu = argent gaspillé</li>
          <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Pas de contenu vidéo</strong> — indispensable sur Meta et YouTube</li>
          <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Attendre des résultats immédiats</strong> sur Google — comptez 60–90 jours</li>
          <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Pas de tracking</strong> — impossible d'optimiser sans données</li>
        </ul>
      </div>

      <p className="text-muted-foreground">
        Ces erreurs sont responsables de la majorité des échecs en <strong><em>campagnes publicitaires rénovation</em></strong>. Le problème n'est pas la plateforme — c'est l'absence de système.
      </p>
    </section>

    {/* CTA final */}
    <section className="mb-12">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-foreground font-display mb-3">
          Prêt à structurer votre acquisition multi-canal ?
        </h2>
        <p className="text-muted-foreground mb-2">
          Chez <Link to="/" className="text-primary hover:underline font-semibold">Agendac</Link>, on construit des systèmes de <strong><em>génération de leads rénovation</em></strong> complets : Google Ads + Meta Ads + retargeting + process commercial.
        </p>
        <p className="text-muted-foreground mb-6">
          👉 Consultez nos <Link to="/results" className="text-primary hover:underline font-semibold">résultats clients</Link> pour voir ce que ça donne en conditions réelles.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ */}
    <section id="faq">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Target size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Questions fréquentes
        </h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1">
          <AccordionTrigger className="text-foreground font-semibold text-left">
            Google Ads ou Facebook Ads : lequel est le plus rentable en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <strong><em>Google Ads rénovation</em></strong> génère des leads plus qualifiés avec un meilleur taux de closing. <strong><em>Facebook Ads rénovation</em></strong> offre plus de volume à moindre coût. La meilleure rentabilité s'obtient en combinant les deux dans un <strong><em>système d'acquisition client rénovation</em></strong> structuré.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger className="text-foreground font-semibold text-left">
            Quel budget prévoir pour la publicité en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Pour une entreprise à +1M€ de CA, comptez minimum 3 000 €/mois (1 500 € Meta + 1 500 € Google). Un budget performant se situe entre 5 000 et 6 500 €/mois. Consultez notre article détaillé sur le <Link to="/blog/cout-publicite-renovation-habitat" className="text-primary hover:underline">coût de la publicité en rénovation</Link>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger className="text-foreground font-semibold text-left">
            Combien de temps pour voir des résultats avec la publicité en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Meta Ads : résultats en 3 à 5 semaines. Google Ads : 60 à 90 jours pour une performance optimisée. Découvrez les timelines détaillées dans notre article sur les <Link to="/blog/delai-resultats-acquisition-digitale-renovation" className="text-primary hover:underline">délais de résultats en acquisition digitale</Link>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4">
          <AccordionTrigger className="text-foreground font-semibold text-left">
            Faut-il une agence marketing pour gérer ses campagnes en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Si vous n'avez pas d'expertise en <strong><em>marketing digital rénovation</em></strong> en interne, oui. Une <strong><em>agence marketing rénovation</em></strong> spécialisée apporte l'expérience et les méthodes déjà validées. Découvrez nos <Link to="/blog/choisir-agence-marketing-renovation" className="text-primary hover:underline">5 critères pour choisir la bonne agence</Link>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-5">
          <AccordionTrigger className="text-foreground font-semibold text-left">
            Pourquoi le retargeting est-il indispensable en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Un prospect qui visite votre site sans convertir n'est pas perdu — à condition de le <strong>retargeter</strong>. En le reciblant sur Facebook, Instagram ou YouTube avec du contenu adapté, vous transformez un visiteur passif en demande de devis. Sans retargeting, vous perdez une part importante de vos investissements publicitaires.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticlePlateformePubliciteRenovation;
