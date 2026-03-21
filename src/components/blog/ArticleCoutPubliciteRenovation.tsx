import { Link } from "react-router-dom";
import SectionCTA from "@/components/SectionCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ArticleCoutPubliciteRenovation = () => {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      {/* Résumé */}
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
        <p className="text-muted-foreground m-0">
          <strong>Combien coûte réellement la publicité</strong> pour une entreprise de <em>rénovation de l'habitat</em> ? Google Ads, Meta Ads (Facebook / Instagram), budgets réels, <strong>coût par lead</strong> et erreurs courantes : cet article vous donne les vrais chiffres et une stratégie claire pour maîtriser votre <strong>coût d'acquisition client rénovation</strong>.
        </p>
      </div>

      {/* Sommaire */}
      <nav className="bg-card border border-border rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-foreground mt-0 mb-4">📋 Sommaire</h2>
        <ol className="space-y-2 list-decimal list-inside m-0">
          <li><a href="#variables-couts" className="text-primary hover:underline">Ce qui impacte directement vos coûts publicitaires</a></li>
          <li><a href="#google-ads" className="text-primary hover:underline">Google Ads : intention directe, leads ultra qualifiés</a></li>
          <li><a href="#meta-ads" className="text-primary hover:underline">Meta Ads : volume rapide, coût réduit</a></li>
          <li><a href="#comparatif" className="text-primary hover:underline">Comparatif rapide Google Ads vs Meta Ads</a></li>
          <li><a href="#combiner" className="text-primary hover:underline">Le vrai levier : combiner les deux</a></li>
          <li><a href="#budget" className="text-primary hover:underline">Budget réaliste pour une entreprise &gt;1M€ CA</a></li>
          <li><a href="#erreurs" className="text-primary hover:underline">Erreurs qui vous coûtent (très) cher</a></li>
          <li><a href="#conclusion" className="text-primary hover:underline">Ce que vous achetez vraiment</a></li>
          <li><a href="#faq" className="text-primary hover:underline">Questions fréquentes</a></li>
        </ol>
      </nav>

      {/* Introduction */}
      <p>
        Pas de débat : si vous voulez <strong>scaler votre acquisition clients rénovation</strong>, vous devez acheter de la visibilité. La vraie question → <em>combien ça coûte réellement</em> et ce que vous obtenez derrière.
      </p>
      <p>
        Que ce soit via <strong>Google Ads</strong> ou <strong>Meta Ads</strong> (Facebook, Instagram, YouTube), les coûts varient énormément selon votre situation. Cet article vous donne les <strong>vrais chiffres</strong> issus de notre expérience avec des entreprises de <em>rénovation de l'habitat</em>.
      </p>

      {/* Section 1 */}
      <section id="variables-couts">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">🎯 Ce qui impacte directement vos coûts publicitaires</h2>
        <p>
          Avant de parler chiffres, voici les <strong>variables clés</strong> qui font exploser ou baisser votre <em>coût d'acquisition client rénovation</em> :
        </p>
        <ul>
          <li><strong>Zone de chalandise</strong> — zone dense = plus cher (Île-de-France, grandes métropoles)</li>
          <li><strong>Type de prestation</strong> — PAC &gt; isolation &gt; menuiserie (certaines niches sont plus compétitives)</li>
          <li><strong>Niveau de concurrence local</strong> — plus il y a d'annonceurs, plus le CPC monte</li>
          <li><strong>Qualité de votre offre</strong> — positionnement premium, prix, différenciation</li>
          <li><strong>Tracking + remontée de données</strong> — la clé absolue de toute campagne rentable</li>
        </ul>
        <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-6">
          <p className="m-0 font-semibold text-foreground">
            👉 Sans suivi de conversion propre = <em>campagnes publicitaires rénovation</em> non rentables, peu importe le budget.
          </p>
        </div>
      </section>

      {/* Section 2 - Google Ads */}
      <section id="google-ads">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">🔍 Google Ads : intention directe, leads ultra qualifiés</h2>
        <p>
          <strong>Google Ads</strong> repose sur un principe simple : vous captez une <strong>demande déjà existante</strong>. Vos prospects cherchent activement :
        </p>
        <ul>
          <li><em>"pompe à chaleur prix"</em></li>
          <li><em>"isolation combles aide 2026"</em></li>
          <li><em>"artisan menuiserie + ville"</em></li>
        </ul>
        <p>
          👉 C'est du <strong>lead chaud</strong>. Vous apparaissez exactement au moment où le prospect a une intention d'achat.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-3">💰 Coûts réels Google Ads rénovation</h3>
        <div className="bg-muted/50 border border-border rounded-xl p-6 my-4">
          <ul className="m-0">
            <li><strong>Budget minimum :</strong> 1 500 – 2 000 €/mois par zone</li>
            <li><strong>Coût par lead :</strong> 70 à 130 €</li>
            <li><strong>Taux de transformation en RDV :</strong> ~70%</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-3">⚙️ Spécificité clé</h3>
        <p>
          <strong>Phase d'apprentissage : 60 à 90 jours.</strong> Vous devez alimenter Google en data pour optimiser :
        </p>
        <ul>
          <li>Lead qualifié vs non qualifié</li>
          <li>Devis signé</li>
          <li>Chiffre d'affaires généré</li>
        </ul>
        <p>
          👉 <strong>Plus vous nourrissez l'algorithme, plus il devient rentable</strong>. C'est un investissement long terme.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-6">
          <h4 className="font-bold text-foreground mt-0 mb-2">À retenir sur Google Ads :</h4>
          <ul className="m-0">
            <li>Plus lent à démarrer</li>
            <li>Plus cher au lead</li>
            <li>Mais <strong>ultra stable et qualifié</strong> une fois optimisé</li>
          </ul>
        </div>
      </section>

      {/* Section 3 - Meta Ads */}
      <section id="meta-ads">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">📱 Meta Ads : volume rapide, coût réduit</h2>
        <p>
          À l'inverse, <strong>Facebook Ads</strong> et <strong>Instagram Ads</strong> fonctionnent sur un principe totalement différent : <strong>vous créez la demande</strong>.
        </p>
        <p>
          Vous interrompez vos prospects pendant qu'ils scrollent. Ils ne cherchaient pas forcément vos services, mais vous captez leur attention avec une <em>créa percutante</em>.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-3">💰 Coûts réels Meta Ads rénovation</h3>
        <div className="bg-muted/50 border border-border rounded-xl p-6 my-4">
          <ul className="m-0">
            <li><strong>Budget minimum :</strong> 1 200 €/mois par zone</li>
            <li><strong>Budget recommandé :</strong> 2 000 – 3 000 €</li>
            <li><strong>Coût par lead :</strong> 20 à 50 €</li>
            <li><strong>Taux de transformation en RDV :</strong> 25% à 35%</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-3">⚙️ Spécificité clé</h3>
        <p>
          <strong>Phase d'apprentissage : 3 à 5 semaines.</strong> La performance dépend fortement de :
        </p>
        <ul>
          <li>Vos <strong>créas</strong> (vidéo surtout)</li>
          <li>Votre <strong>angle</strong> (offre, promesse)</li>
          <li>Votre <strong>copywriting</strong></li>
        </ul>
        <p>
          👉 <em>Mauvaise pub = leads poubelle, même à 10 €.</em>
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-6">
          <h4 className="font-bold text-foreground mt-0 mb-2">À retenir sur Meta Ads :</h4>
          <ul className="m-0">
            <li>Rapide à lancer</li>
            <li>Leads moins chers</li>
            <li>Qualité plus variable — nécessite un <strong>process commercial solide</strong> derrière</li>
          </ul>
        </div>
      </section>

      {/* Section 4 - Comparatif */}
      <section id="comparatif">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">📊 Comparatif rapide Google Ads vs Meta Ads</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-border rounded-xl text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="border border-border p-3 text-left text-foreground">Critère</th>
                <th className="border border-border p-3 text-left text-foreground">Google Ads</th>
                <th className="border border-border p-3 text-left text-foreground">Meta Ads (FB / IG / YT)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3 font-semibold">Intention</td>
                <td className="border border-border p-3">Forte</td>
                <td className="border border-border p-3">Faible à moyenne</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border border-border p-3 font-semibold">Coût par lead</td>
                <td className="border border-border p-3">70 – 130 €</td>
                <td className="border border-border p-3">20 – 50 €</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-semibold">Qualité</td>
                <td className="border border-border p-3">Très élevée</td>
                <td className="border border-border p-3">Moyenne à bonne</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border border-border p-3 font-semibold">Délai</td>
                <td className="border border-border p-3">60 – 90 jours</td>
                <td className="border border-border p-3">3 – 5 semaines</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-semibold">Stabilité</td>
                <td className="border border-border p-3">Très stable</td>
                <td className="border border-border p-3">Variable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Milieu */}
      <SectionCTA />

      {/* Section 5 - Combiner */}
      <section id="combiner">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">🔁 Le vrai levier : combiner les deux</h2>
        <p>
          Les <Link to="/results" className="text-primary hover:underline font-semibold">entreprises de rénovation qui performent</Link> ne choisissent pas entre Google Ads et Meta Ads. <strong>Elles font les deux.</strong>
        </p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Cas concret de retargeting</h3>
        <ol>
          <li>Un prospect cherche sur Google → clique → <strong>ne convertit pas</strong></li>
          <li>Vous le <strong>retargetez sur Facebook / Instagram</strong></li>
          <li>Il revoit votre offre + preuve sociale + arguments</li>
          <li>Il <strong>convertit</strong></li>
        </ol>

        <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-6">
          <p className="m-0">
            👉 <strong>Sans retargeting = lead perdu.</strong><br />
            👉 <strong>Avec retargeting = client signé.</strong>
          </p>
        </div>

        <p>
          C'est exactement ce type de <strong>système d'acquisition structuré</strong> que mettent en place les <Link to="/results" className="text-primary hover:underline">entreprises accompagnées par Agendac</Link>.
        </p>
      </section>

      {/* Section 6 - Budget */}
      <section id="budget">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">💡 Budget réaliste pour une entreprise &gt;1M€ CA</h2>
        <p>
          Si vous voulez des résultats sérieux en <strong>publicité rénovation habitat</strong>, voici les budgets à prévoir :
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-muted/50 border border-border rounded-xl p-6">
            <h4 className="font-bold text-foreground mt-0 mb-3">🟡 Setup minimum</h4>
            <ul className="m-0">
              <li>Meta Ads : 1 200 – 2 000 €</li>
              <li>Google Ads : 1 500 – 2 000 €</li>
              <li className="font-bold mt-2">👉 Total : ~3 000 €/mois</li>
            </ul>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h4 className="font-bold text-foreground mt-0 mb-3">🟢 Setup performant</h4>
            <ul className="m-0">
              <li>Meta Ads : 2 000 – 3 000 €</li>
              <li>Google Ads : 2 500 – 3 500 €</li>
              <li className="font-bold mt-2">👉 Total : 5 000 à 6 500 €/mois</li>
            </ul>
          </div>
        </div>

        <p>
          👉 <strong>Si vous dépensez moins de 3 000 €/mois en <em>publicité rénovation</em> : vous ne jouez pas au bon niveau.</strong>
        </p>
      </section>

      {/* Section 7 - Erreurs */}
      <section id="erreurs">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">⚠️ Erreurs qui vous coûtent (très) cher</h2>
        <p>
          Voici les erreurs les plus courantes que nous observons chez les entreprises de <strong>rénovation de l'habitat</strong> :
        </p>
        <ul>
          <li><strong>Couper les campagnes</strong> → reset complet de l'algorithme, vous repartez de zéro</li>
          <li><strong>Lancer avec 500 €</strong> → aucune data exploitable, impossible d'optimiser</li>
          <li><strong>Ne pas qualifier les leads en interne</strong> → vous nourrissez mal l'algo</li>
          <li><strong>Pas de script commercial</strong> → leads gaspillés, <em>taux de transformation</em> effondré</li>
          <li><strong>Pas de différenciation</strong> → <Link to="/blog/arreter-achat-leads-renovation" className="text-primary hover:underline">guerre de prix</Link> assurée</li>
        </ul>
      </section>

      {/* Section 8 - Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">🧠 Ce que vous achetez vraiment</h2>
        <p>
          Vous n'achetez pas des leads. Vous achetez :
        </p>
        <ul>
          <li><strong>De la data</strong> — pour comprendre votre marché</li>
          <li><strong>De la compréhension marché</strong> — pour affiner votre offre</li>
          <li><strong>Un système prédictible</strong> — pour <em>scaler votre acquisition</em></li>
        </ul>

        <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-6">
          <h4 className="font-bold text-foreground mt-0 mb-2">👉 Une fois la machine lancée :</h4>
          <ul className="m-0">
            <li><strong>Coût d'acquisition maîtrisé</strong></li>
            <li><strong>Volume stable</strong></li>
            <li><strong>Croissance scalable</strong></li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-3">🎯 Résumé brut</h3>
        <ul>
          <li><strong>Meta Ads</strong> → rapide, moins cher, moins qualifié</li>
          <li><strong>Google Ads</strong> → lent, cher, très qualifié</li>
          <li><strong>Les deux ensemble</strong> → <em>machine à leads rénovation</em> rentable</li>
        </ul>
      </section>

      {/* CTA Final */}
      <div className="my-12">
        <SectionCTA />
      </div>

      {/* FAQ */}
      <section id="faq" className="my-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">❓ Questions fréquentes</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger className="text-left font-semibold">
              Quel budget minimum pour la publicité rénovation habitat ?
            </AccordionTrigger>
            <AccordionContent>
              <p>Pour obtenir des résultats exploitables, comptez au minimum <strong>3 000 €/mois</strong> répartis entre Google Ads et Meta Ads. En dessous, vous n'aurez pas assez de data pour optimiser vos <em>campagnes publicitaires rénovation</em>.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger className="text-left font-semibold">
              Combien coûte un lead en rénovation en 2026 ?
            </AccordionTrigger>
            <AccordionContent>
              <p>Le <strong>coût lead rénovation</strong> varie selon le canal : <strong>70 à 130 €</strong> sur Google Ads (lead chaud) et <strong>20 à 50 €</strong> sur Meta Ads (volume). Le coût réel dépend de votre zone, concurrence et qualité de campagne.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger className="text-left font-semibold">
              Google Ads ou Facebook Ads pour la rénovation ?
            </AccordionTrigger>
            <AccordionContent>
              <p>Les deux sont complémentaires. <strong>Google Ads rénovation</strong> capte la demande existante (leads qualifiés), <strong>Facebook Ads rénovation</strong> crée la demande (volume). Les entreprises qui performent utilisent les deux dans un <Link to="/blog/google-ads-vs-facebook-ads-renovation" className="text-primary hover:underline">système structuré</Link>.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger className="text-left font-semibold">
              Faut-il passer par une agence marketing rénovation ?
            </AccordionTrigger>
            <AccordionContent>
              <p><Link to="/blog/internaliser-marketing-renovation" className="text-primary hover:underline">Externaliser son marketing</Link> permet d'accéder à une expertise éprouvée sans les coûts de recrutement. Une <strong>agence marketing rénovation</strong> spécialisée comme Agendac a déjà investi +630 000 € en publicité BTP — vous bénéficiez de cette expérience immédiatement.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-5">
            <AccordionTrigger className="text-left font-semibold">
              Pourquoi mes campagnes publicitaires ne marchent pas en rénovation ?
            </AccordionTrigger>
            <AccordionContent>
              <p>Les causes les plus fréquentes : tracking mal configuré, budget insuffisant, absence de différenciation et pas de <strong>process commercial structuré</strong>. La <Link to="/blog/marketing-renovation-habitat-publicite-leads" className="text-primary hover:underline">publicité amplifie ce que vous êtes déjà</Link> — si la base n'est pas solide, les résultats ne suivent pas.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-6">
            <AccordionTrigger className="text-left font-semibold">
              Quel ROI attendre de la publicité en rénovation ?
            </AccordionTrigger>
            <AccordionContent>
              <p>Avec un <strong>système d'acquisition structuré</strong>, nos clients constatent un <Link to="/results" className="text-primary hover:underline">ROI de x3 à x7 sur leur investissement</Link>. La clé : combiner publicité, image de marque et process commercial pour maximiser la <em>rentabilité marketing rénovation</em>.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Articles liés */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">📚 Articles liés</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link to="/blog/google-ads-vs-facebook-ads-renovation" className="block p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors no-underline">
            <h3 className="font-bold text-foreground text-base m-0">Google Ads vs Facebook Ads rénovation : lequel choisir ?</h3>
            <p className="text-sm text-muted-foreground mt-2 m-0">Comparatif complet des deux plateformes pour la génération de leads en rénovation.</p>
          </Link>
          <Link to="/blog/marketing-renovation-habitat-publicite-leads" className="block p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors no-underline">
            <h3 className="font-bold text-foreground text-base m-0">Pourquoi la publicité fonctionne en rénovation</h3>
            <p className="text-sm text-muted-foreground mt-2 m-0">La publicité n'est pas le problème — c'est la stratégie derrière qui fait la différence.</p>
          </Link>
          <Link to="/blog/arreter-achat-leads-renovation" className="block p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors no-underline">
            <h3 className="font-bold text-foreground text-base m-0">Arrêter d'acheter des leads : 5 étapes pour reprendre le contrôle</h3>
            <p className="text-sm text-muted-foreground mt-2 m-0">Comment sortir de la guerre des prix et générer vos propres clients.</p>
          </Link>
          <Link to="/blog/pourquoi-acheter-des-leads-renovation-mauvaise-strategie-2026" className="block p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors no-underline">
            <h3 className="font-bold text-foreground text-base m-0">Pourquoi acheter des leads est une mauvaise stratégie en 2026</h3>
            <p className="text-sm text-muted-foreground mt-2 m-0">Les 3 raisons qui font de l'achat de leads un piège pour votre croissance.</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArticleCoutPubliciteRenovation;
