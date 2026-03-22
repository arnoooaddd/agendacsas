import { Link } from "react-router-dom";
import { Search, Megaphone, Target, CheckCircle, AlertTriangle, BarChart3, Layers, TrendingUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";
import googleAdsLogo from "@/assets/logos/google-ads.png";
import metaLogo from "@/assets/logos/meta.png";

const ArticlePlateformePubliciteRenovation = () => (
  <div className="prose-custom">
    {/* Résumé */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          Google Ads, Facebook Ads, YouTube Ads… sur quelle plateforme investir quand on fait <strong>+1M€ de CA en rénovation</strong> ? Il ne s'agit pas de « tester » — il s'agit de structurer une <strong>acquisition clients rénovation</strong> scalable. Cet article compare les plateformes, leurs forces, et vous montre comment les combiner intelligemment.
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
        Vous avez déjà du bouche-à-oreille. Le but n'est pas de « tester » — c'est de structurer une acquisition scalable.
      </p>
      <p className="text-muted-foreground mb-4">
        À +1M€ de CA, vous ne pouvez plus vous permettre de dépendre d'un seul canal. La <strong>publicité rénovation</strong> bien structurée vous donne un flux de prospects prévisible et maîtrisé.
      </p>
      <p className="text-foreground font-medium">
        Encore faut-il savoir <strong>quelle plateforme utiliser</strong>, et surtout comment les articuler.
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

      <h3 className="text-lg font-bold text-foreground font-display mb-3">1. Prospects intentionnistes (Google)</h3>
      <p className="text-muted-foreground mb-4">Ils <strong>cherchent activement</strong> une solution :</p>
      <ul className="space-y-1 text-muted-foreground mb-6">
        <li>• Veulent un devis</li>
        <li>• Comparent les prestataires</li>
        <li>• Prêts à passer à l'action</li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">2. Prospects passifs (Meta / YouTube)</h3>
      <p className="text-muted-foreground mb-4">Ils ne cherchent pas encore mais peuvent être intéressés :</p>
      <ul className="space-y-1 text-muted-foreground mb-6">
        <li>• Découvrent votre offre</li>
        <li>• Ont des objections</li>
        <li>• Besoin de réassurance</li>
      </ul>

      <p className="text-foreground font-medium">
        👉 Une <strong>stratégie marketing rénovation</strong> performante cible les deux audiences — pas une seule.
      </p>
    </section>

    {/* Section 2 - Google Ads */}
    <section className="mb-12" id="google-ads">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
          <img src={googleAdsLogo} alt="Google Ads" className="w-8 h-8 object-contain" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Google Ads : capter la demande existante
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        <strong>Google Ads rénovation</strong> repose sur un principe simple : vous apparaissez quand un prospect cherche activement vos services. C'est le canal le plus qualifié.
      </p>

      <p className="text-muted-foreground mb-3">Exemples de recherches captées :</p>
      <ul className="space-y-1 text-muted-foreground italic mb-6">
        <li>• « installateur panneaux solaires prix »</li>
        <li>• « isolation combles aides 2026 »</li>
        <li>• « devis rénovation salle de bain »</li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Avantages</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Leads <strong>très qualifiés</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Forte intention d'achat</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Taux de closing élevé</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Acquisition <strong>stable</strong> dans le temps</li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Inconvénients</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Coût lead rénovation</strong> plus élevé</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Phase d'apprentissage (60–90 jours)</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Volume limité au marché existant</li>
      </ul>

      <p className="text-foreground font-medium">
        👉 Idéal pour structurer une base d'acquisition solide et sécuriser du chiffre d'affaires de manière prévisible.
      </p>
    </section>

    {/* Section 3 - Meta / YouTube */}
    <section className="mb-12" id="meta-youtube">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
          <img src={metaLogo} alt="Meta Ads" className="w-8 h-8 object-contain" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Meta / YouTube Ads : créer la demande
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        <strong>Facebook Ads rénovation</strong>, Instagram Ads et YouTube Ads fonctionnent sur un principe totalement différent : vous interrompez le prospect pour capter son attention.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Avantages</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Volume rapide</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Coût par lead plus faible</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Montée en puissance en <strong>3–5 semaines</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Idéal pour le retargeting</li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Inconvénients</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Leads <strong>moins qualifiés</strong> au départ</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Besoin de contenu (vidéo + copy)</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Plus de travail commercial derrière</li>
      </ul>

      <p className="text-foreground font-medium">
        👉 Idéal pour remplir un pipe rapidement, lisser les périodes creuses et alimenter le retargeting.
      </p>
    </section>

    {/* CTA milieu */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Vous ne savez pas par quelle plateforme commencer ?
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          Chez <Link to="/" className="text-primary hover:underline font-semibold">Agendac</Link>, on construit des <strong>systèmes d'acquisition client rénovation</strong> multi-canal adaptés à votre situation.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* Section 4 - Choisir */}
    <section className="mb-12" id="choisir">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Layers size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Quelle plateforme choisir selon votre objectif
        </h2>
      </div>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Cas 1 : Trou de planning</h3>
      <p className="text-muted-foreground mb-2">👉 Priorité : <strong>Meta / YouTube Ads</strong></p>
      <ul className="space-y-1 text-muted-foreground mb-6">
        <li>• Résultats rapides (3–5 semaines)</li>
        <li>• Volume immédiat</li>
        <li>• Coût d'entrée plus faible</li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Cas 2 : Stabiliser l'acquisition</h3>
      <p className="text-muted-foreground mb-2">👉 Priorité : <strong>Google Ads</strong></p>
      <ul className="space-y-1 text-muted-foreground mb-6">
        <li>• Leads très qualifiés</li>
        <li>• Prévisibilité</li>
        <li>• Meilleure <strong>rentabilité marketing rénovation</strong> long terme</li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Cas 3 : Entreprise structurée (&gt;1M€ CA)</h3>
      <p className="text-foreground font-semibold mb-4">
        👉 Vous devez faire les deux. Combiner Google + Meta = acquisition complète et scalable.
      </p>
    </section>

    {/* Section 5 - Combiner */}
    <section className="mb-12" id="combiner">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le vrai levier : combiner les deux
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Les entreprises de rénovation qui dominent leur marché ne choisissent pas entre Google et Meta. Elles structurent un système multi-canal.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Le parcours multi-canal type</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ol className="space-y-2 text-muted-foreground">
          <li><strong>1.</strong> Prospect cherche sur <strong>Google</strong> → clique → ne convertit pas</li>
          <li><strong>2.</strong> Il voit vos <strong>vidéos sur Facebook / YouTube</strong> (retargeting)</li>
          <li><strong>3.</strong> Vous répondez à ses <strong>objections</strong> via le contenu</li>
          <li><strong>4.</strong> Il revient → <strong>demande un devis</strong></li>
        </ol>
      </div>

      <p className="text-muted-foreground mb-3">L'effet levier du multi-canal :</p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Meta</strong> → crée la demande</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Google</strong> → capture la demande</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Retargeting</strong> → convertit les indécis</li>
      </ul>

      <p className="text-foreground font-medium">
        👉 Résultat : plus de volume, meilleure qualité, <strong>coût acquisition client rénovation</strong> optimisé.
      </p>
      <p className="text-muted-foreground mt-4">
        Pour comprendre en détail la différence entre les deux canaux : <Link to="/blog/google-ads-vs-facebook-ads-renovation" className="text-primary hover:underline font-semibold">Google Ads vs Facebook Ads rénovation : lequel choisir ?</Link>
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

      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Choisir une seule plateforme</strong> et ignorer l'autre</li>
        <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Ne pas retargeter</strong> — chaque visiteur perdu = argent gaspillé</li>
        <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Pas de contenu vidéo</strong> — indispensable sur Meta et YouTube</li>
        <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Attendre des résultats immédiats</strong> sur Google — comptez 60–90 jours</li>
        <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Pas de tracking</strong> — impossible d'optimiser sans données</li>
      </ul>

      <p className="text-muted-foreground">
        Ces erreurs sont responsables de la majorité des échecs en <strong>campagnes publicitaires rénovation</strong>. Le problème n'est pas la plateforme — c'est l'absence de système.
      </p>
    </section>

    {/* CTA final */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Prêt à structurer votre acquisition multi-canal ?
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          Chez <Link to="/" className="text-primary hover:underline font-semibold">Agendac</Link>, on construit des systèmes de <strong>génération de leads rénovation</strong> complets.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ */}
    <section id="faq">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Google Ads ou Facebook Ads : lequel est le plus rentable en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <strong>Google Ads</strong> génère des leads plus qualifiés avec un meilleur taux de closing. <strong>Facebook Ads</strong> offre plus de volume à moindre coût. La meilleure rentabilité s'obtient en combinant les deux dans un système d'<strong>acquisition client rénovation</strong> structuré.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quel budget prévoir pour la publicité en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Pour une entreprise à +1M€ de CA, comptez minimum 3 000 €/mois (1 500 € Meta + 1 500 € Google). Un budget performant se situe entre 5 000 et 6 500 €/mois. Consultez notre article sur le <Link to="/blog/cout-publicite-renovation-habitat" className="text-primary hover:underline">coût de la publicité en rénovation</Link>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien de temps pour voir des résultats avec la publicité en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Meta Ads : résultats en 3 à 5 semaines. Google Ads : 60 à 90 jours pour une performance optimisée. Découvrez les timelines détaillées dans notre article sur les <Link to="/blog/delai-resultats-acquisition-digitale-renovation" className="text-primary hover:underline">délais de résultats en acquisition digitale</Link>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il une agence marketing pour gérer ses campagnes en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Si vous n'avez pas d'expertise en <strong>marketing digital rénovation</strong> en interne, oui. Une <strong>agence marketing rénovation</strong> spécialisée apporte l'expérience et les méthodes déjà validées. Découvrez nos <Link to="/blog/choisir-agence-marketing-renovation" className="text-primary hover:underline">5 critères pour choisir la bonne agence</Link>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-5" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Pourquoi le retargeting est-il indispensable en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Un prospect qui visite votre site sans convertir n'est pas perdu — à condition de le retargeter. En le reciblant sur Facebook, Instagram ou YouTube avec du contenu adapté, vous transformez un visiteur passif en demande de devis.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticlePlateformePubliciteRenovation;
