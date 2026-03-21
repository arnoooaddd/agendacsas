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
        <p className="text-muted-foreground leading-relaxed m-0">
          <strong>Combien coûte réellement la publicité dans la rénovation de l'habitat ?</strong> Google Ads, Meta Ads (Facebook/Instagram) : cet article détaille les <em>budgets réels</em>, les <strong>coûts par lead</strong>, les délais de rentabilité et les erreurs qui vous font perdre de l'argent. Un guide complet pour les entreprises de rénovation qui veulent maîtriser leur <strong>coût d'acquisition client</strong>.
        </p>
      </div>

      {/* Sommaire */}
      <div className="bg-card border border-border rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-foreground mt-0 mb-4">📋 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-primary list-decimal list-inside m-0">
            <li><a href="#variables-couts" className="hover:underline">Ce qui impacte vos coûts publicitaires</a></li>
            <li><a href="#google-ads" className="hover:underline">Google Ads : intention directe, lead chaud</a></li>
            <li><a href="#meta-ads" className="hover:underline">Meta Ads : volume rapide, coût réduit</a></li>
            <li><a href="#comparatif" className="hover:underline">Comparatif Google Ads vs Meta Ads</a></li>
            <li><a href="#combiner" className="hover:underline">Le vrai levier : combiner les deux</a></li>
            <li><a href="#budget-realiste" className="hover:underline">Budget réaliste pour une entreprise à +1M€</a></li>
            <li><a href="#erreurs" className="hover:underline">Erreurs qui vous coûtent (très) cher</a></li>
            <li><a href="#ce-que-vous-achetez" className="hover:underline">Ce que vous achetez vraiment</a></li>
            <li><a href="#faq" className="hover:underline">Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>

      {/* Introduction */}
      <p>
        Pas de débat : si vous voulez <strong>scaler votre acquisition clients en rénovation</strong>, vous devez acheter de la visibilité.
      </p>
      <p>
        La vraie question → <em>combien ça coûte réellement</em> et ce que vous obtenez derrière.
      </p>
      <p>
        Trop d'entreprises du BTP lancent des campagnes publicitaires <strong>sans connaître les vrais chiffres</strong>. Résultat : budget mal calibré, leads de mauvaise qualité, et l'impression que "la pub ne marche pas".
      </p>
      <p>
        👉 Cet article vous donne les <strong>coûts réels</strong>, plateforme par plateforme, avec les clés pour rendre chaque euro investi rentable.
      </p>

      {/* Section 1 */}
      <h2 id="variables-couts" className="scroll-mt-24">Ce qui impacte directement vos coûts (peu importe la plateforme)</h2>

      <p>
        Avant de parler chiffres, voici les <strong>variables clés</strong> qui font exploser ou baisser votre <em>coût d'acquisition client rénovation</em> :
      </p>

      <ul>
        <li><strong>Zone de chalandise</strong> — zone dense = plus cher (Île-de-France, grandes métropoles)</li>
        <li><strong>Type de prestation</strong> — PAC &gt; isolation &gt; menuiserie… chaque métier a un CPA différent</li>
        <li><strong>Niveau de concurrence locale</strong> — plus il y a d'annonceurs, plus l'enchère monte</li>
        <li><strong>Qualité de votre offre</strong> — positionnement premium, prix, différenciation</li>
        <li><strong>Tracking + remontée de données</strong> — <em>la clé absolue</em></li>
      </ul>

      <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-6">
        <p className="m-0 font-semibold text-foreground">
          ⚠️ Sans suivi de conversion propre = campagnes non rentables, peu importe le budget.
        </p>
        <p className="m-0 mt-2 text-muted-foreground text-sm">
          Le tracking est la fondation. Sans lui, vous pilotez à l'aveugle et chaque euro dépensé en <strong>publicité rénovation</strong> est un pari.
        </p>
      </div>

      {/* Section 2 - Google Ads */}
      <h2 id="google-ads" className="scroll-mt-24">Google Ads (Search) → intention directe, lead chaud</h2>

      <p>
        Avec <strong>Google Ads rénovation</strong>, vous captez quelqu'un qui cherche <em>activement</em> une solution :
      </p>

      <ul>
        <li>"pompe à chaleur prix"</li>
        <li>"isolation combles aide 2026"</li>
        <li>"artisan menuiserie + ville"</li>
      </ul>

      <p>👉 C'est du <strong>lead chaud</strong>. Le prospect a une intention d'achat claire.</p>

      <h3>Coûts réels Google Ads rénovation</h3>

      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="bg-card border border-border rounded-xl p-5 text-center">
          <p className="text-sm text-muted-foreground mb-1 mt-0">Budget minimum</p>
          <p className="text-2xl font-bold text-primary m-0">1 500 – 2 000 €</p>
          <p className="text-xs text-muted-foreground mt-1 mb-0">par mois / par zone</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 text-center">
          <p className="text-sm text-muted-foreground mb-1 mt-0">Coût par lead</p>
          <p className="text-2xl font-bold text-primary m-0">70 – 130 €</p>
          <p className="text-xs text-muted-foreground mt-1 mb-0">selon la prestation</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 text-center">
          <p className="text-sm text-muted-foreground mb-1 mt-0">Taux de transfo en RDV</p>
          <p className="text-2xl font-bold text-primary m-0">~70%</p>
          <p className="text-xs text-muted-foreground mt-1 mb-0">leads très qualifiés</p>
        </div>
      </div>

      <h3>Phase d'apprentissage</h3>

      <p>
        Google Ads est un <strong>diesel</strong> : démarrage lent (<em>60 à 90 jours</em> pour être vraiment performant), mais une fois lancé → <strong>stable, prévisible, scalable</strong>.
      </p>

      <p>Vous devez alimenter l'algorithme en data :</p>
      <ul>
        <li>Lead qualifié vs non qualifié</li>
        <li>Devis signé</li>
        <li>Valeur du chantier</li>
      </ul>

      <p>👉 <strong>Plus vous nourrissez l'algo, plus il devient rentable.</strong></p>

      <div className="bg-muted/50 border border-border rounded-xl p-5 my-6">
        <h4 className="mt-0 mb-2 text-foreground">✅ À retenir sur Google Ads</h4>
        <ul className="m-0">
          <li>Plus lent à démarrer</li>
          <li>Plus cher au lead</li>
          <li>Mais <strong>ultra stable et qualifié</strong></li>
          <li>Idéal pour le long terme et la <em>rentabilité marketing rénovation</em></li>
        </ul>
      </div>

      {/* Section 3 - Meta Ads */}
      <h2 id="meta-ads" className="scroll-mt-24">Meta Ads (Facebook / Instagram) → volume rapide, coût réduit</h2>

      <p>
        À l'inverse, <strong>Facebook Ads rénovation</strong> fonctionne sur un principe totalement différent : <em>vous créez la demande</em>.
      </p>

      <p>
        Vous ciblez quelqu'un qui n'était pas en train de chercher vos services… mais qui peut être intéressé. C'est de l'interruption intelligente.
      </p>

      <h3>Coûts réels Meta Ads rénovation</h3>

      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="bg-card border border-border rounded-xl p-5 text-center">
          <p className="text-sm text-muted-foreground mb-1 mt-0">Budget minimum</p>
          <p className="text-2xl font-bold text-secondary m-0">1 200 €</p>
          <p className="text-xs text-muted-foreground mt-1 mb-0">par mois / par zone</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 text-center">
          <p className="text-sm text-muted-foreground mb-1 mt-0">Coût par lead</p>
          <p className="text-2xl font-bold text-secondary m-0">20 – 50 €</p>
          <p className="text-xs text-muted-foreground mt-1 mb-0">selon la créa et l'offre</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 text-center">
          <p className="text-sm text-muted-foreground mb-1 mt-0">Taux de transfo en RDV</p>
          <p className="text-2xl font-bold text-secondary m-0">25 – 35%</p>
          <p className="text-xs text-muted-foreground mt-1 mb-0">qualification variable</p>
        </div>
      </div>

      <h3>Phase d'apprentissage</h3>

      <p>
        Meta Ads est un <strong>accélérateur</strong> : résultats visibles en <em>3 à 5 semaines</em>. Mais la performance dépend fortement de :
      </p>

      <ul>
        <li>Vos <strong>créas</strong> (vidéo surtout)</li>
        <li>Votre <strong>angle</strong> (offre, promesse)</li>
        <li>Votre <strong>copywriting</strong></li>
      </ul>

      <p>👉 <em>Mauvaise pub = leads poubelle, même à 10 €.</em></p>

      <div className="bg-muted/50 border border-border rounded-xl p-5 my-6">
        <h4 className="mt-0 mb-2 text-foreground">✅ À retenir sur Meta Ads</h4>
        <ul className="m-0">
          <li>Rapide à lancer</li>
          <li>Leads moins chers</li>
          <li>Qualité plus variable</li>
          <li>Idéal pour générer du <strong>volume de leads rénovation</strong> rapidement</li>
        </ul>
      </div>

      {/* CTA milieu */}
      <div className="my-10 py-8 px-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 text-center">
        <h3 className="mt-0 mb-2 text-foreground">Vous voulez savoir quel budget activer en priorité ?</h3>
        <p className="text-muted-foreground mb-4">
          Nos experts analysent votre situation et vous recommandent la stratégie la plus rentable pour votre <strong>entreprise de rénovation</strong>.
        </p>
        <SectionCTA />
      </div>

      {/* Section 4 - Comparatif */}
      <h2 id="comparatif" className="scroll-mt-24">Comparatif rapide : Google Ads vs Meta Ads</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-3 text-foreground">Critère</th>
              <th className="text-center p-3 text-primary font-bold">Google Ads</th>
              <th className="text-center p-3 text-secondary font-bold">Meta Ads</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50">
              <td className="p-3 font-medium">Intention</td>
              <td className="p-3 text-center">Forte</td>
              <td className="p-3 text-center">Faible à moyenne</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="p-3 font-medium">Coût par lead</td>
              <td className="p-3 text-center">70 – 130 €</td>
              <td className="p-3 text-center">20 – 50 €</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="p-3 font-medium">Qualité</td>
              <td className="p-3 text-center">Très élevée</td>
              <td className="p-3 text-center">Moyenne à bonne</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="p-3 font-medium">Délai</td>
              <td className="p-3 text-center">60 – 90 jours</td>
              <td className="p-3 text-center">3 – 5 semaines</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="p-3 font-medium">Stabilité</td>
              <td className="p-3 text-center">Très stable</td>
              <td className="p-3 text-center">Variable</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 5 - Combiner */}
      <h2 id="combiner" className="scroll-mt-24">Le vrai levier : combiner les deux canaux</h2>

      <p>
        Les <strong>entreprises de rénovation qui performent</strong> ne choisissent pas entre Google et Facebook. Elles font les deux.
      </p>

      <h3>Cas concret de retargeting</h3>

      <ol>
        <li>Un prospect cherche sur <strong>Google</strong> → clique → ne convertit pas</li>
        <li>Vous le <strong>retargetez sur Facebook / Instagram</strong></li>
        <li>Il revoit votre offre + preuve sociale + arguments</li>
        <li>Il <strong>convertit</strong></li>
      </ol>

      <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-6">
        <p className="m-0">
          👉 <strong>Sans retargeting</strong> = lead perdu.<br />
          👉 <strong>Avec retargeting</strong> = client signé.
        </p>
      </div>

      <p>
        C'est exactement ce que font les entreprises qui dominent leur marché. Découvrez notre <Link to="/blog/google-ads-vs-facebook-ads-renovation" className="text-primary hover:underline font-semibold">comparatif détaillé Google Ads vs Facebook Ads pour la rénovation</Link>.
      </p>

      {/* Section 6 - Budget */}
      <h2 id="budget-realiste" className="scroll-mt-24">Budget réaliste pour une entreprise à +1M€ de CA</h2>

      <p>Si vous voulez des <strong>résultats sérieux</strong> en <em>acquisition clients rénovation</em>, voici les ordres de grandeur :</p>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <h4 className="mt-0 mb-3 text-muted-foreground text-sm uppercase tracking-wider">🟡 Setup minimum</h4>
          <ul className="m-0 space-y-1">
            <li>Meta Ads : <strong>1 200 – 2 000 €</strong></li>
            <li>Google Ads : <strong>1 500 – 2 000 €</strong></li>
          </ul>
          <p className="mt-3 mb-0 text-xl font-bold text-primary">Total : ~3 000 €/mois</p>
        </div>
        <div className="bg-card border-2 border-primary/30 rounded-xl p-6">
          <h4 className="mt-0 mb-3 text-primary text-sm uppercase tracking-wider">🟢 Setup performant</h4>
          <ul className="m-0 space-y-1">
            <li>Meta Ads : <strong>2 000 – 3 000 €</strong></li>
            <li>Google Ads : <strong>2 500 – 3 500 €</strong></li>
          </ul>
          <p className="mt-3 mb-0 text-xl font-bold text-primary">Total : 5 000 – 6 500 €/mois</p>
        </div>
      </div>

      <p>
        👉 Si vous dépensez moins de 3 000 €/mois en <strong>publicité rénovation</strong> : vous ne jouez pas au bon niveau.
      </p>

      {/* Section 7 - Erreurs */}
      <h2 id="erreurs" className="scroll-mt-24">Les erreurs qui vous coûtent (très) cher</h2>

      <div className="space-y-3 my-6">
        <div className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
          <span className="text-destructive font-bold">❌</span>
          <p className="m-0"><strong>Couper les campagnes</strong> → reset complet de l'algorithme, vous repartez de zéro</p>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
          <span className="text-destructive font-bold">❌</span>
          <p className="m-0"><strong>Lancer avec 500 €</strong> → aucune data exploitable, impossible d'optimiser</p>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
          <span className="text-destructive font-bold">❌</span>
          <p className="m-0"><strong>Ne pas qualifier les leads en interne</strong> → l'algo ne peut pas apprendre</p>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
          <span className="text-destructive font-bold">❌</span>
          <p className="m-0"><strong>Pas de script commercial</strong> → leads gaspillés, taux de closing faible</p>
        </div>
        <div className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
          <span className="text-destructive font-bold">❌</span>
          <p className="m-0"><strong>Pas de différenciation</strong> → <Link to="/blog/arreter-achat-leads-renovation" className="text-primary hover:underline">guerre des prix</Link></p>
        </div>
      </div>

      {/* Section 8 - Ce que vous achetez */}
      <h2 id="ce-que-vous-achetez" className="scroll-mt-24">Ce que vous achetez vraiment</h2>

      <p>Vous n'achetez pas des leads. Vous achetez :</p>

      <ul>
        <li><strong>De la data</strong> — chaque campagne enrichit votre connaissance marché</li>
        <li><strong>De la compréhension</strong> — vous savez ce qui fonctionne et ce qui ne fonctionne pas</li>
        <li><strong>Un système prédictible</strong> — une <Link to="/blog/marketing-renovation-habitat-publicite-leads" className="text-primary hover:underline">machine à leads rénovation</Link> que vous contrôlez</li>
      </ul>

      <p>👉 Une fois la machine lancée :</p>
      <ul>
        <li><strong>Coût d'acquisition maîtrisé</strong></li>
        <li><strong>Volume stable</strong></li>
        <li><strong>Croissance scalable</strong></li>
      </ul>

      <p>
        C'est l'approche que nous appliquons chez <Link to="/" className="text-primary hover:underline font-semibold">Agendac, agence marketing rénovation</Link>. Consultez nos <Link to="/results" className="text-primary hover:underline">études de cas</Link> pour voir les résultats concrets.
      </p>

      {/* Résumé brut */}
      <div className="bg-muted/50 border border-border rounded-xl p-6 my-8">
        <h3 className="mt-0 mb-3 text-foreground">🎯 En résumé</h3>
        <ul className="m-0 space-y-2">
          <li><strong>Meta Ads</strong> → rapide, moins cher, moins qualifié</li>
          <li><strong>Google Ads</strong> → lent, cher, très qualifié</li>
          <li><strong>Les deux ensemble</strong> → machine à leads rentable</li>
        </ul>
        <p className="mt-4 mb-0 font-semibold text-foreground">
          👉 Si vous ne savez pas <Link to="/blog/internaliser-marketing-renovation" className="text-primary hover:underline">externaliser ou internaliser votre marketing</Link>, commencez par structurer votre acquisition.
        </p>
      </div>

      {/* CTA final */}
      <div className="my-10 py-8 px-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 text-center">
        <h3 className="mt-0 mb-2 text-foreground">Vous dirigez une entreprise de rénovation à +1M€ ?</h3>
        <p className="text-muted-foreground mb-4">
          Découvrez quel canal activer en priorité, comment structurer votre acquisition et comment générer des RDV qualifiés en continu.
        </p>
        <SectionCTA />
      </div>

      {/* FAQ */}
      <h2 id="faq" className="scroll-mt-24">Questions fréquentes sur le coût de la publicité en rénovation</h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1">
          <AccordionTrigger className="text-left font-semibold">
            Quel budget minimum pour lancer des campagnes en rénovation ?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Comptez au minimum <strong>3 000 €/mois</strong> répartis entre Google Ads et Meta Ads. En dessous, vous n'aurez pas assez de data pour que l'algorithme optimise vos <strong>campagnes publicitaires rénovation</strong>.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq-2">
          <AccordionTrigger className="text-left font-semibold">
            Combien coûte un lead en rénovation en 2026 ?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Sur <strong>Google Ads</strong> : entre 70 et 130 € par lead qualifié. Sur <strong>Meta Ads</strong> : entre 20 et 50 €. Le <em>coût lead rénovation</em> varie selon la zone, la prestation et la qualité de vos campagnes.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq-3">
          <AccordionTrigger className="text-left font-semibold">
            Google Ads ou Facebook Ads : lequel est plus rentable pour le BTP ?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Les deux sont complémentaires. Google capte la <strong>demande existante</strong> (leads très qualifiés), Meta crée la demande (volume). Les meilleures <strong>agences marketing BTP</strong> combinent les deux pour maximiser le ROI.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq-4">
          <AccordionTrigger className="text-left font-semibold">
            Faut-il une agence marketing rénovation ou gérer en interne ?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              <Link to="/blog/internaliser-marketing-renovation" className="text-primary hover:underline">Internaliser coûte souvent plus cher</Link> qu'on ne le pense (salaire + formations + erreurs). Une <strong>agence génération de leads rénovation</strong> spécialisée apporte l'expertise et les résultats immédiatement.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq-5">
          <AccordionTrigger className="text-left font-semibold">
            Pourquoi l'achat de leads rénovation est moins rentable que la publicité directe ?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              L'<strong>achat leads rénovation</strong> implique des contacts partagés avec plusieurs entreprises, une qualité variable et aucune maîtrise de votre image. Avec vos propres campagnes, <Link to="/blog/pourquoi-acheter-des-leads-renovation-mauvaise-strategie-2026" className="text-primary hover:underline">vous contrôlez tout</Link> et construisez un actif durable.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq-6">
          <AccordionTrigger className="text-left font-semibold">
            Quel ROI attendre de la publicité en rénovation habitat ?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Avec un système structuré, les entreprises que nous accompagnons chez Agendac obtiennent un <strong>ROI publicité rénovation</strong> de x3 à x7 sur leur investissement initial. Découvrez nos <Link to="/results" className="text-primary hover:underline">résultats clients</Link>.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Articles liés */}
      <div className="mt-12 pt-8 border-t border-border">
        <h3 className="text-foreground">📚 Articles liés</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/blog/google-ads-vs-facebook-ads-renovation" className="text-primary hover:underline font-medium">
              Google Ads vs Facebook Ads rénovation : lequel choisir en 2026 ?
            </Link>
          </li>
          <li>
            <Link to="/blog/marketing-renovation-habitat-publicite-leads" className="text-primary hover:underline font-medium">
              Marketing rénovation habitat : pourquoi la publicité fonctionne
            </Link>
          </li>
          <li>
            <Link to="/blog/pourquoi-acheter-des-leads-renovation-mauvaise-strategie-2026" className="text-primary hover:underline font-medium">
              Pourquoi acheter des leads en rénovation est une mauvaise stratégie
            </Link>
          </li>
          <li>
            <Link to="/blog/arreter-achat-leads-renovation" className="text-primary hover:underline font-medium">
              Arrêter d'acheter des leads : sortir de la guerre des prix en 5 étapes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArticleCoutPubliciteRenovation;
