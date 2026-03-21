import { Link } from "react-router-dom";
import SectionCTA from "@/components/SectionCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ArticleExternaliserPriseRdv = () => {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      {/* Résumé */}
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
        <p className="text-muted-foreground m-0">
          Vous investissez dans la <strong><em>génération de leads rénovation</em></strong> mais vos prospects ne sont pas rappelés correctement ? Chaque appel manqué vous coûte de l'argent. Cet article explique pourquoi <strong>externaliser la prise de rendez-vous</strong> est un levier critique pour votre <strong><em>acquisition clients rénovation</em></strong> — et comment éviter de perdre jusqu'à 30 % de vos opportunités.
        </p>
      </div>

      {/* Sommaire */}
      <nav className="bg-card border border-border rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-foreground mt-0 mb-4">📋 Sommaire</h2>
        <ol className="space-y-2 list-decimal list-inside m-0">
          <li><a href="#friction" className="text-primary hover:underline">Leads internet = plus de friction (et plus de pertes)</a></li>
          <li><a href="#rigueur" className="text-primary hover:underline">La prise de RDV demande une rigueur extrême</a></li>
          <li><a href="#commerciaux" className="text-primary hover:underline">Vos commerciaux ne doivent pas faire ça</a></li>
          <li><a href="#cout" className="text-primary hover:underline">Coût réel : interne vs externalisé</a></li>
          <li><a href="#impact" className="text-primary hover:underline">Impact direct sur votre chiffre d'affaires</a></li>
          <li><a href="#modele" className="text-primary hover:underline">Modèle performant : le système Agendac</a></li>
          <li><a href="#red-flags" className="text-primary hover:underline">Red flags à surveiller</a></li>
          <li><a href="#faq" className="text-primary hover:underline">Questions fréquentes</a></li>
        </ol>
      </nav>

      {/* Introduction */}
      <section>
        <p>
          <strong>Vous payez des leads ? Alors chaque appel non traité vous coûte de l'argent.</strong> Simple.
        </p>
        <p>
          La plupart des entreprises de rénovation investissent dans la <strong><em>publicité rénovation</em></strong> mais négligent complètement le maillon le plus critique : <strong>la prise de rendez-vous</strong>.
        </p>
        <p>
          Résultat : des dizaines d'opportunités perdues chaque mois, un <strong><em>coût acquisition client rénovation</em></strong> qui explose et une frustration permanente côté commercial.
        </p>
      </section>

      {/* Section 1 */}
      <section id="friction">
        <h2 className="text-2xl font-bold text-foreground">1. Leads internet = plus de friction (et plus de pertes)</h2>
        <p>
          Contrairement au bouche-à-oreille, un lead issu de <strong><em>campagnes publicitaires rénovation</em></strong> présente des caractéristiques différentes :
        </p>
        <ul>
          <li>Le prospect <strong>ne vous connaît pas</strong> encore</li>
          <li>Il <strong>compare plusieurs entreprises</strong></li>
          <li>Il peut tester <strong>sans réelle intention</strong></li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground">Conséquences directes</h3>
        <ul>
          <li>Faux numéros</li>
          <li>Demandes floues</li>
          <li>Prospects hésitants</li>
        </ul>
        <p>
          👉 Plus d'appels nécessaires, plus de relances, plus de qualification. Si vous n'avez pas un <strong>process solide</strong> → les leads sont perdus.
        </p>
      </section>

      {/* Section 2 */}
      <section id="rigueur">
        <h2 className="text-2xl font-bold text-foreground">2. La prise de RDV demande une rigueur extrême</h2>
        <p>
          La réalité terrain en <strong><em>marketing digital rénovation</em></strong> :
        </p>
        <ul>
          <li>Un prospect <strong>répond rarement au 1er appel</strong></li>
          <li>Il travaille, il oublie, il reporte</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground">Ce qui fonctionne réellement</h3>
        <ul>
          <li><strong>Double appel par jour</strong></li>
          <li>Sur <strong>4 à 5 jours consécutifs</strong></li>
          <li><strong>SMS + relances</strong> systématiques</li>
        </ul>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 my-6">
          <p className="m-0 font-semibold text-foreground">
            👉 Les meilleurs leads répondent souvent au <strong>4e, 5e voire 6e appel</strong>. Sans cette rigueur, vous perdez des prospects qualifiés et vous dégradez votre <strong><em>rentabilité marketing rénovation</em></strong>.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section id="commerciaux">
        <h2 className="text-2xl font-bold text-foreground">3. Vos commerciaux ne doivent pas faire ça</h2>
        <p>
          Un commercial doit :
        </p>
        <ul>
          <li><strong>Closer</strong></li>
          <li>Faire des <strong>devis</strong></li>
          <li>Signer des <strong>chantiers</strong></li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground">Ce qu'il ne devrait PAS faire</h3>
        <ul>
          <li>Relancer 40 leads par semaine</li>
          <li>Tomber sur des faux numéros</li>
          <li>Gérer des refus en boucle</li>
        </ul>

        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 my-6">
          <p className="m-0 font-semibold text-foreground">
            ⚠️ Sinon : démotivation → perte de performance → mauvais taux de closing. Vos meilleurs éléments perdent leur temps sur des tâches à faible valeur.
          </p>
        </div>
      </section>

      {/* CTA milieu */}
      <SectionCTA />

      {/* Section 4 */}
      <section id="cout">
        <h2 className="text-2xl font-bold text-foreground">4. Coût réel : interne vs externalisé</h2>
        <p>
          Beaucoup pensent que c'est "moins cher en interne". <strong>Faux.</strong>
        </p>

        <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
            <h4 className="font-bold text-foreground mb-3">❌ En interne</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Salaire + charges</li>
              <li>• Temps perdu sur des leads non qualifiés</li>
              <li>• Manque de rigueur dans le suivi</li>
              <li>• Pertes invisibles (RDV non pris)</li>
            </ul>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <h4 className="font-bold text-foreground mb-3">✅ Externalisé</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Coût optimisé</li>
              <li>• Process rodé et éprouvé</li>
              <li>• Volume géré efficacement</li>
              <li>• Suivi structuré</li>
            </ul>
          </div>
        </div>

        <p>
          👉 Vous payez pour un <strong>résultat</strong>, pas pour du temps. C'est la logique même d'<strong><em>externaliser marketing rénovation</em></strong> intelligemment.
        </p>
      </section>

      {/* Section 5 */}
      <section id="impact">
        <h2 className="text-2xl font-bold text-foreground">5. Impact direct sur votre chiffre d'affaires</h2>
        <p>
          Un mauvais suivi = <strong>pertes massives</strong>.
        </p>

        <div className="bg-muted/50 border border-border rounded-xl p-6 my-6">
          <h4 className="font-bold text-foreground mb-3">📊 Exemple concret</h4>
          <ul className="space-y-2 m-0">
            <li>100 leads / mois</li>
            <li>15 % non rappelés correctement</li>
            <li>= <strong>15 opportunités perdues</strong></li>
            <li>Si 1 vente = 10 000 €</li>
          </ul>
          <p className="mt-4 mb-0 text-xl font-bold text-primary">
            👉 = 150 000 € de CA potentiel perdu. Chaque mois.
          </p>
        </div>
      </section>

      {/* Modèle performant */}
      <section id="modele">
        <h2 className="text-2xl font-bold text-foreground">🔁 Le modèle performant : le système Agendac</h2>
        <p>
          Un bon <strong><em>système acquisition client rénovation</em></strong> inclut :
        </p>
        <ul>
          <li><strong>Prise de RDV externalisée</strong> avec des équipes spécialisées</li>
          <li><strong>Qualification en amont</strong> avant le rendez-vous</li>
          <li><strong>Paiement basé sur le résultat</strong> (ex : devis réalisé)</li>
        </ul>
        <p>
          👉 Vous ne payez pas pour des leads. <strong>Vous payez pour des opportunités réelles.</strong>
        </p>
        <p>
          C'est exactement ce que nous mettons en place chez <Link to="/" className="text-primary hover:underline font-semibold">Agendac</Link>. Découvrez nos <Link to="/results" className="text-primary hover:underline font-semibold">résultats clients concrets</Link>.
        </p>
      </section>

      {/* Red flags */}
      <section id="red-flags">
        <h2 className="text-2xl font-bold text-foreground">🚩 Red flags à surveiller</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-4">
            <span className="text-destructive font-bold">❌</span>
            <p className="m-0"><strong>"On appelle une fois et on laisse un message"</strong> → insuffisant</p>
          </div>
          <div className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-4">
            <span className="text-destructive font-bold">❌</span>
            <p className="m-0"><strong>Aucun script d'appel</strong> → improvisation = leads perdus</p>
          </div>
          <div className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-4">
            <span className="text-destructive font-bold">❌</span>
            <p className="m-0"><strong>Pas de suivi des relances</strong> → impossible de mesurer la performance</p>
          </div>
          <div className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-4">
            <span className="text-destructive font-bold">❌</span>
            <p className="m-0"><strong>Commerciaux qui gèrent eux-mêmes le setting</strong> → perte de productivité</p>
          </div>
        </div>
      </section>

      {/* À retenir */}
      <div className="bg-muted/50 border border-border rounded-xl p-6 my-10">
        <h3 className="text-xl font-bold text-foreground mt-0 mb-4">🧠 À retenir</h3>
        <ul className="space-y-2 m-0">
          <li>La prise de RDV est un <strong>levier critique</strong> de votre <strong><em>acquisition clients rénovation</em></strong></li>
          <li>Ce n'est pas une tâche secondaire → c'est un <strong>système</strong></li>
          <li>Externaliser = plus de RDV, moins de pertes, meilleure rentabilité</li>
        </ul>
        <p className="mt-4 mb-0 font-semibold">
          👉 Vous pouvez avoir la meilleure <strong><em>stratégie marketing rénovation</em></strong> du monde. Si vos leads ne sont pas rappelés correctement, <strong>vous perdez de l'argent</strong>.
        </p>
      </div>

      {/* CTA final */}
      <section className="my-12">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mt-0 mb-4">
            Vous voulez arrêter de perdre des leads ?
          </h2>
          <p className="text-muted-foreground mb-6">
            Chez Agendac, nous structurons un <strong><em>système d'acquisition client rénovation</em></strong> complet : de la publicité à la prise de rendez-vous qualifiée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://agendac.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity no-underline">
              Découvrir Agendac →
            </a>
            <Link to="/results" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors no-underline">
              Voir les résultats clients
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="my-12">
        <h2 className="text-2xl font-bold text-foreground">❓ Questions fréquentes</h2>
        <Accordion type="single" collapsible className="not-prose space-y-3">
          <AccordionItem value="faq-1" className="bg-muted/50 border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 font-medium">
              Pourquoi externaliser la prise de rendez-vous en rénovation ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Parce que la prise de RDV sur des leads internet demande une rigueur extrême (4 à 6 tentatives par prospect). Vos commerciaux perdent du temps et de la motivation sur cette tâche. Externaliser permet d'<strong>augmenter le taux de RDV</strong> tout en libérant vos équipes pour le closing.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-2" className="bg-muted/50 border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 font-medium">
              Combien de leads sont perdus sans process de relance ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              En moyenne, <strong>15 à 30 % des leads</strong> ne sont jamais correctement rappelés. Sur 100 leads/mois à 10 000 € de panier moyen, cela représente jusqu'à 150 000 € de CA potentiel perdu chaque mois.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-3" className="bg-muted/50 border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 font-medium">
              Est-ce que l'externalisation coûte plus cher qu'un salarié ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Non, c'est souvent <strong>moins cher et plus performant</strong>. Un salarié coûte 3 000 à 4 000 €/mois chargé, sans garantie de résultat. L'externalisation vous fait payer au résultat avec un process déjà rodé. C'est le même principe que pour <Link to="/blog/internaliser-marketing-renovation" className="text-primary hover:underline">l'externalisation du marketing</Link>.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-4" className="bg-muted/50 border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 font-medium">
              Comment améliorer le taux de transformation de mes leads rénovation ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Trois leviers : <strong>1)</strong> un process de relance rigoureux (4-6 appels), <strong>2)</strong> une qualification en amont du RDV, <strong>3)</strong> un contenu de réassurance avant la visite (photo du commercial, vidéo, avis clients). C'est la base d'un <strong>système d'acquisition client rénovation</strong> performant.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-5" className="bg-muted/50 border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 font-medium">
              Quelle est la différence entre acheter des leads et avoir un système d'acquisition ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              L'<strong>achat de leads</strong> vous rend dépendant et met en concurrence directe. Un <strong>système d'acquisition</strong> inclut publicité + marque + prise de RDV + qualification : vous contrôlez tout. Découvrez pourquoi dans notre article sur <Link to="/blog/pourquoi-acheter-des-leads-renovation-mauvaise-strategie-2026" className="text-primary hover:underline">l'achat de leads en rénovation</Link>.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Articles connexes */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-foreground">📚 Articles connexes</h2>
        <div className="grid sm:grid-cols-2 gap-4 not-prose">
          <Link to="/blog/choisir-agence-marketing-renovation" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
            <h3 className="font-semibold text-foreground mb-2">Comment choisir une agence marketing rénovation</h3>
            <p className="text-sm text-muted-foreground m-0">Les 5 critères qui font la différence</p>
          </Link>
          <Link to="/blog/cout-publicite-renovation-habitat" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
            <h3 className="font-semibold text-foreground mb-2">Combien coûte la publicité en rénovation ?</h3>
            <p className="text-sm text-muted-foreground m-0">Budgets, coûts par lead et stratégie 2026</p>
          </Link>
          <Link to="/blog/arreter-achat-leads-renovation" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
            <h3 className="font-semibold text-foreground mb-2">Arrêter d'acheter des leads en rénovation</h3>
            <p className="text-sm text-muted-foreground m-0">Comment sortir de la guerre des prix en 5 étapes</p>
          </Link>
          <Link to="/blog/internaliser-marketing-renovation" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
            <h3 className="font-semibold text-foreground mb-2">Internaliser ou externaliser son marketing ?</h3>
            <p className="text-sm text-muted-foreground m-0">Le vrai coût caché pour les entreprises de rénovation</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArticleExternaliserPriseRdv;
