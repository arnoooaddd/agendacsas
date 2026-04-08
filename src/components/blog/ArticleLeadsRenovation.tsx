import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, TrendingUp, Zap, Target } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";
import ArticleVideoSection from "./ArticleVideoSection";

const ArticleLeadsRenovation = () => (
  <div className="prose-custom">
    {/* Résumé */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          <strong>Acheter des leads en rénovation</strong> semble simple, mais c'est une erreur stratégique coûteuse. Cet article vous explique pourquoi l'<em>achat de leads rénovation</em> détruit vos marges, pourquoi vos prospects ne vous font pas confiance, et comment construire un <strong>système de génération de leads rénovation</strong> performant sous votre propre marque.
        </p>
      </div>
    </section>

    {/* Sommaire */}
    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">📑 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#interets-non-alignes" className="hover:text-primary transition-colors">1. Vos intérêts ne sont pas alignés avec votre fournisseur de leads</a></li>
            <li><a href="#leads-pas-votre-marque" className="hover:text-primary transition-colors">2. Les leads ne viennent pas de votre marque</a></li>
            <li><a href="#dependance" className="hover:text-primary transition-colors">3. Vous devenez dépendant</a></li>
            <li><a href="#alternative" className="hover:text-primary transition-colors">4. Quelle est l'alternative ?</a></li>
            <li><a href="#conclusion-leads" className="hover:text-primary transition-colors">5. Conclusion</a></li>
            <li><a href="#faq-leads" className="hover:text-primary transition-colors">6. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <ArticleVideoSection
      videoId="Y_oZiyaFC-E"
      summary={
        <>
          <p>Découvrez en 60 secondes pourquoi <strong>acheter des leads en rénovation</strong> est une stratégie perdante — et ce que font les entreprises qui réussissent à la place.</p>
        </>
      }
    />

    {/* Introduction */}
    <section className="mb-12">
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Acheter des leads, c'est devenu la solution "facile" pour beaucoup d'entreprises de <strong>rénovation de l'habitat</strong>.
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
        Si tu fais +1M€ de CA dans la rénovation, continuer à acheter des <em>leads rénovation</em> en 2026 est une erreur stratégique.
      </p>
      <p className="text-foreground font-medium mt-4">Voici pourquoi — en 3 points simples.</p>
    </section>

    {/* Section 1 */}
    <section className="mb-12" id="interets-non-alignes">
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
        👉 Vendre un maximum de <strong>leads</strong>, au maximum d'entreprises.
      </p>

      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <p className="font-semibold text-foreground mb-3">Résultat :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Le même lead est vendu à 2, 3, parfois <strong>4 entreprises</strong></li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Tu arrives en <em>concurrence directe</em> dès le premier appel</li>
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
        C'est un problème de <span className="text-primary font-semibold">modèle d'acquisition</span>.
      </p>
    </section>

    {/* Section 2 */}
    <section className="mb-12" id="leads-pas-votre-marque">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Target size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          2. Les leads ne viennent pas de votre marque
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">La plupart des <strong>leads rénovation</strong> que tu achètes viennent de :</p>
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
        Aujourd'hui, les clients sont méfiants. Surtout dans la <strong>rénovation de l'habitat</strong>.
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
          <li>• Tu récupères les plus froids, les plus hésitants… ou les plus <em>sensibles au prix</em></li>
        </ul>
        <p className="text-foreground font-medium mt-4">👉 Tu construis ton <strong>acquisition clients rénovation</strong> sur une base faible.</p>
      </div>
    </section>

    {/* Section 3 */}
    <section className="mb-12" id="dependance">
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
        <li>• Tu n'as pas de <strong>marque</strong></li>
        <li>• Tu n'as pas de visibilité</li>
        <li>• Tu n'as pas d'<em>actif marketing</em></li>
      </ul>
      <p className="text-foreground font-medium mb-6">👉 Tu as juste un robinet.</p>

      <p className="text-muted-foreground mb-2">Et le jour où tu coupes :</p>
      <ul className="space-y-1 text-muted-foreground mb-6">
        <li>• Plus de leads</li>
        <li>• Plus de RDV</li>
        <li>• Plus de business</li>
      </ul>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
        <p className="text-foreground font-medium mb-2">À l'inverse, quand tu investis dans ta <strong>stratégie marketing rénovation</strong> :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Ta marque circule</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Les gens te reconnaissent</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Tu deviens une <strong>référence locale</strong></li>
        </ul>
        <p className="text-foreground font-medium mt-4">
          Même si tu pauses tes <em>campagnes publicitaires rénovation</em> :<br />
          👉 Tu continues d'exister dans la tête des gens.
        </p>
      </div>

      <p className="text-muted-foreground">
        C'est exactement pour ça que certaines marques sont appelées automatiquement.
        Le jour où tu as un problème, tu sais qui contacter.
      </p>
      <p className="text-foreground font-medium mt-2">Ce n'est pas un hasard. C'est de la <strong>stratégie d'acquisition</strong>.</p>
    </section>

    {/* CTA milieu */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Vous en avez marre de dépendre des plateformes de leads ?
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          Découvrez comment les entreprises de rénovation à +1M€ structurent leur <strong>système d'acquisition</strong>.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* Alternative */}
    <section className="mb-12" id="alternative">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Alors, quelle est l'alternative ?
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Arrêter d'acheter des leads… ne veut pas dire arrêter d'investir en <strong>acquisition clients rénovation</strong>.
      </p>
      <p className="text-foreground font-medium mb-6">Ça veut dire changer de modèle.</p>

      <p className="text-muted-foreground mb-2">
        👉 Passer de "je loue des prospects"<br />
        👉 À "je construis mon propre <strong>système de génération de leads rénovation</strong>"
      </p>

      <h3 className="text-xl font-bold text-foreground font-display mt-8 mb-4">Concrètement, que mettre en place ?</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Des <strong>publicités Facebook et Google</strong> qui mettent en avant <em>votre</em> marque</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Du contenu qui crée de la confiance</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Un <strong>tunnel de vente rénovation</strong> structuré (pas une page blanche)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Un <em>process commercial</em> adapté derrière</li>
      </ul>

      <p className="text-foreground font-medium mb-4">
        Pas de promesses bullshit. Pas de raccourcis.
      </p>
      <p className="text-muted-foreground">Juste un <strong>système d'acquisition client rénovation</strong> qui :</p>
      <ul className="space-y-1 text-muted-foreground mt-2">
        <li>• Génère des <strong>leads qualifiés</strong></li>
        <li>• Te différencie de la concurrence</li>
        <li>• Et améliore ta <em>rentabilité marketing</em></li>
      </ul>
    </section>

    {/* À retenir */}
    <section className="mb-12">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-foreground font-display mb-4">📌 À retenir</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">L'<strong>achat de leads</strong> crée une dépendance toxique — tu ne construis aucun actif marketing durable.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">Les leads partagés entre plusieurs entreprises détruisent tes marges et ton <strong>coût d'acquisition client rénovation</strong>.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">Le vrai levier, c'est de construire ton propre <strong>système d'acquisition</strong> avec ta marque au centre.</span>
          </li>
        </ul>
      </div>
    </section>

    {/* Conclusion */}
    <section className="mb-12" id="conclusion-leads">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Conclusion</h2>
      <p className="text-muted-foreground mb-4">Acheter des <em>leads rénovation</em> peut te dépanner à court terme.</p>
      <p className="text-muted-foreground mb-2">Mais si tu veux :</p>
      <ul className="space-y-1 text-muted-foreground mb-4">
        <li>• Monter en gamme</li>
        <li>• Améliorer tes marges</li>
        <li>• Arrêter de dépendre des plateformes</li>
      </ul>
      <p className="text-foreground font-semibold mb-6">👉 Ce n'est pas la bonne stratégie.</p>
      <p className="text-foreground font-medium text-lg">
        Le vrai levier, c'est la maîtrise de ton <strong>acquisition clients rénovation</strong>.
      </p>
    </section>

    {/* CTA */}
    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Si tu diriges une entreprise de rénovation à +1M€ de CA
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          et que tu veux structurer un vrai <strong>système d'acquisition</strong> :
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ SEO */}
    <section className="mb-12" id="faq-leads">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Questions fréquentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Est-ce que l'achat de leads est rentable en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            À court terme parfois, mais rarement sur la durée. Les leads partagés entre plusieurs entreprises font chuter le taux de conversion et augmentent le <strong>coût d'acquisition client rénovation</strong> réel. À long terme, construire sa propre <em>stratégie marketing rénovation</em> est bien plus rentable.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Comment générer des leads en rénovation sans plateforme ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Via la <strong>publicité ciblée</strong> (<em>Facebook Ads rénovation</em>, <em>Google Ads rénovation</em>) mettant en avant votre marque, du contenu de qualité qui crée de la confiance, et un <strong>tunnel de vente rénovation</strong> structuré avec un process commercial adapté.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Pourquoi les leads sont partagés entre plusieurs entreprises ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            C'est le modèle économique des plateformes de vente de leads : elles maximisent leur revenu en vendant le même contact à plusieurs entreprises simultanément, ce qui crée une concurrence directe et fait baisser la qualité perçue du lead.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Pourquoi je n'ai pas de leads en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Souvent, le problème n'est pas le marché mais le <strong>système d'acquisition</strong>. Sans marque forte, sans <em>publicité rénovation</em> bien structurée et sans tunnel de conversion optimisé, votre entreprise reste invisible face aux concurrents qui investissent dans leur <strong>marketing digital rénovation</strong>.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Maillage interne */}
    <section className="mb-12">
      <h3 className="text-lg font-bold text-foreground font-display mb-4">📚 Articles connexes</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <Link to="/blog/arreter-achat-leads-renovation-habitat" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Arrêter d'acheter des leads : sortir de la guerre des prix en 5 étapes</p>
        </Link>
        <Link to="/blog/marketing-renovation-habitat-generation-leads" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Marketing rénovation habitat : pourquoi la publicité fonctionne</p>
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

export default ArticleLeadsRenovation;