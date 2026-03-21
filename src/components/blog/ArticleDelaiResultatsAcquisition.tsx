import { Link } from "react-router-dom";
import SectionCTA from "@/components/SectionCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ArticleDelaiResultatsAcquisition = () => {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      {/* Résumé */}
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
        <p className="text-muted-foreground m-0">
          Combien de temps faut-il pour voir des résultats avec l'<strong><em>acquisition clients rénovation</em></strong> digitale ? Entre Meta Ads et <strong><em>Google Ads rénovation</em></strong>, les délais varient de 3 semaines à 3 mois. Cet article détaille les timelines réelles, les budgets nécessaires et les erreurs qui rallongent vos délais de <strong><em>génération de leads rénovation</em></strong>.
        </p>
      </div>

      {/* Sommaire */}
      <nav className="bg-card border border-border rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-foreground mt-0 mb-4">📋 Sommaire</h2>
        <ol className="space-y-2 list-decimal list-inside m-0">
          <li><a href="#budget-vitesse" className="text-primary hover:underline">Budget = vitesse : le principe fondamental</a></li>
          <li><a href="#meta-ads-timeline" className="text-primary hover:underline">Meta Ads : résultats en 3 à 5 semaines</a></li>
          <li><a href="#google-ads-timeline" className="text-primary hover:underline">Google Ads : performance optimale en 2 à 3 mois</a></li>
          <li><a href="#cas-concret" className="text-primary hover:underline">Cas concret : budget standard rénovation mois par mois</a></li>
          <li><a href="#levier-data" className="text-primary hover:underline">Le vrai levier : la data</a></li>
          <li><a href="#erreurs" className="text-primary hover:underline">Les erreurs qui rallongent tout</a></li>
          <li><a href="#raccourcir" className="text-primary hover:underline">Comment raccourcir les délais</a></li>
          <li><a href="#faq" className="text-primary hover:underline">Questions fréquentes</a></li>
        </ol>
      </nav>

      {/* Introduction */}
      <section>
        <p>
          <strong>Combien de temps pour lancer l'<em>acquisition digitale</em> et voir des résultats concrets ?</strong>
        </p>
        <p>
          👉 Entre <strong>3 semaines et 3 mois</strong> selon les plateformes et votre budget.
        </p>
        <p>
          Et oui, c'est directement lié à votre investissement. Plus vous mettez de budget → plus vous allez vite. C'est un principe fondamental de la <strong><em>publicité rénovation</em></strong>.
        </p>
      </section>

      {/* Budget = vitesse */}
      <section id="budget-vitesse">
        <h2 className="text-2xl font-bold text-foreground">💡 Budget = vitesse : le principe fondamental</h2>
        <p>
          Les plateformes publicitaires fonctionnent sur un <strong>système d'enchères</strong>. En <strong><em>marketing digital rénovation</em></strong>, cela signifie :
        </p>
        <ul>
          <li>Vous êtes en concurrence avec d'autres entreprises BTP</li>
          <li>Plus vous investissez → plus vous gagnez en visibilité</li>
          <li>Plus vous avez de data → plus l'algorithme apprend vite</li>
        </ul>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 my-6">
          <p className="m-0 font-semibold text-foreground">
            ⚠️ Petit budget = peu de diffusion = apprentissage lent = résultats retardés
          </p>
        </div>
        <p>
          C'est la raison pour laquelle les entreprises qui investissent sérieusement dans leurs <strong><em>campagnes publicitaires rénovation</em></strong> obtiennent des résultats plus rapidement.
        </p>
      </section>

      {/* Meta Ads Timeline */}
      <section id="meta-ads-timeline">
        <h2 className="text-2xl font-bold text-foreground">⚡ Meta Ads (Facebook / Instagram) : résultats en 3 à 5 semaines</h2>
        <p>
          <strong><em>Facebook Ads rénovation</em></strong> repose sur un principe d'<strong>acquisition par interruption</strong> : vous allez chercher le prospect pendant qu'il scrolle.
        </p>

        <h3 className="text-xl font-semibold text-foreground">Timeline réaliste</h3>
        <ul>
          <li><strong>Phase d'apprentissage :</strong> 3 à 5 semaines</li>
          <li><strong>Premiers leads :</strong> quelques jours seulement</li>
          <li><strong>Leads qualifiés + stables :</strong> 3 à 6 semaines</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground">Pourquoi c'est rapide ?</h3>
        <ul>
          <li>Volume de diffusion élevé</li>
          <li>Algorithme basé sur l'IA (très réactif)</li>
          <li>Vous contrôlez le message (créa + offre)</li>
        </ul>
        <p>
          C'est le canal idéal pour démarrer rapidement votre <strong><em>génération de leads rénovation</em></strong> et remplir votre pipeline commercial.
        </p>
      </section>

      {/* Google Ads Timeline */}
      <section id="google-ads-timeline">
        <h2 className="text-2xl font-bold text-foreground">🔍 Google Ads : performance optimale en 2 à 3 mois</h2>
        <p>
          <strong><em>Google Ads rénovation</em></strong> fonctionne par <strong>intention directe</strong> : le prospect vous cherche activement.
        </p>

        <h3 className="text-xl font-semibold text-foreground">Timeline réaliste</h3>
        <ul>
          <li><strong>Phase d'apprentissage :</strong> 60 à 90 jours</li>
          <li><strong>Premiers leads :</strong> dès les premiers jours</li>
          <li><strong>Performance optimisée :</strong> 2 à 3 mois</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground">Pourquoi c'est plus long ?</h3>
        <p>Google doit comprendre :</p>
        <ul>
          <li>Qui est un <strong>bon lead</strong></li>
          <li>Qui va signer un devis</li>
          <li>Quelles recherches convertissent</li>
        </ul>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 my-6">
          <p className="m-0 font-semibold text-foreground">
            👉 Sans data de conversion = Google envoie du trafic inutile. Vous devez remonter les conversions (lead qualifié, devis signé) pour que l'algorithme s'optimise.
          </p>
        </div>
      </section>

      {/* Cas concret */}
      <section id="cas-concret">
        <h2 className="text-2xl font-bold text-foreground">📊 Cas concret : budget standard rénovation mois par mois</h2>
        <p>
          Hypothèse : <strong>Meta Ads : 1 500 €/mois</strong> + <strong>Google Ads : 1 500 €/mois</strong>
        </p>

        <h3 className="text-xl font-semibold text-foreground">Mois 1 — Démarrage</h3>
        <div className="grid md:grid-cols-2 gap-4 not-prose my-4">
          <div className="bg-muted/50 border border-border rounded-xl p-5">
            <h4 className="font-bold text-foreground mb-3">Meta Ads</h4>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• 30 à 60 leads</li>
              <li>• Coût par lead : 25 – 40 €</li>
              <li>• RDV : 8 à 15</li>
            </ul>
          </div>
          <div className="bg-muted/50 border border-border rounded-xl p-5">
            <h4 className="font-bold text-foreground mb-3">Google Ads</h4>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• 10 à 20 leads</li>
              <li>• Coût par lead : 80 – 120 €</li>
              <li>• RDV : 7 à 14</li>
            </ul>
          </div>
        </div>
        <p>👉 <strong>Déjà des opportunités commerciales</strong> dès le premier mois.</p>

        <h3 className="text-xl font-semibold text-foreground">Mois 2 — Optimisation</h3>
        <div className="grid md:grid-cols-2 gap-4 not-prose my-4">
          <div className="bg-muted/50 border border-border rounded-xl p-5">
            <h4 className="font-bold text-foreground mb-3">Meta Ads</h4>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• Amélioration du ciblage</li>
              <li>• Leads plus qualifiés</li>
              <li>• Coût par RDV : 80 à 150 €</li>
            </ul>
          </div>
          <div className="bg-muted/50 border border-border rounded-xl p-5">
            <h4 className="font-bold text-foreground mb-3">Google Ads</h4>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• Meilleure compréhension des recherches</li>
              <li>• Moins de clics inutiles</li>
              <li>• Coût par RDV : 120 à 200 €</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground">Mois 3 — Accélération</h3>
        <div className="grid md:grid-cols-2 gap-4 not-prose my-4">
          <div className="bg-muted/50 border border-border rounded-xl p-5">
            <h4 className="font-bold text-foreground mb-3">Meta Ads</h4>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• Scaling possible</li>
              <li>• Volume stable</li>
              <li>• Coûts maîtrisés</li>
            </ul>
          </div>
          <div className="bg-muted/50 border border-border rounded-xl p-5">
            <h4 className="font-bold text-foreground mb-3">Google Ads</h4>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• Machine optimisée</li>
              <li>• Leads très qualifiés</li>
              <li>• Taux de closing élevé</li>
            </ul>
          </div>
        </div>
        <p>
          👉 <strong>À ce stade, vous avez une <em>acquisition clients rénovation</em> prédictible et scalable.</strong>
        </p>
      </section>

      {/* CTA milieu */}
      <SectionCTA />

      {/* Levier data */}
      <section id="levier-data">
        <h2 className="text-2xl font-bold text-foreground">🎯 Le vrai levier : la data</h2>
        <p>
          Les plateformes n'optimisent pas pour les leads. Elles optimisent pour <strong>ce que vous leur montrez</strong> :
        </p>
        <ul>
          <li>Lead qualifié ✅</li>
          <li>RDV pris ✅</li>
          <li>Devis signé ✅</li>
        </ul>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 my-6">
          <p className="m-0 font-semibold text-foreground">
            👉 Si vous ne remontez pas ces données → vous perdez <strong>50% de performance</strong> sur vos campagnes. C'est la base d'un <strong><em>système d'acquisition client rénovation</em></strong> efficace.
          </p>
        </div>
        <p>
          Les <Link to="/results" className="text-primary hover:underline font-semibold">entreprises que nous accompagnons</Link> remontent systématiquement leurs données de conversion pour maximiser le <strong><em>ROI publicité rénovation</em></strong>.
        </p>
      </section>

      {/* Erreurs */}
      <section id="erreurs">
        <h2 className="text-2xl font-bold text-foreground">⚠️ Les erreurs qui rallongent tout</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-4">
            <span className="text-destructive font-bold">❌</span>
            <p className="m-0"><strong>Couper les campagnes</strong> → retour à zéro, l'algorithme perd tout son apprentissage</p>
          </div>
          <div className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-4">
            <span className="text-destructive font-bold">❌</span>
            <p className="m-0"><strong>Changer tout toutes les semaines</strong> → pas d'apprentissage, résultats instables</p>
          </div>
          <div className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-4">
            <span className="text-destructive font-bold">❌</span>
            <p className="m-0"><strong>Budget trop faible</strong> → aucune donnée exploitable pour optimiser</p>
          </div>
          <div className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-4">
            <span className="text-destructive font-bold">❌</span>
            <p className="m-0"><strong>Pas de suivi des leads</strong> → impossible d'optimiser vos <em>campagnes publicitaires rénovation</em></p>
          </div>
        </div>
        <p className="mt-4">
          👉 Une campagne, ça se <strong>pilote</strong>. Ça ne se "teste" pas 10 jours. C'est pourquoi faire appel à une <Link to="/" className="text-primary hover:underline font-semibold"><strong><em>agence marketing rénovation</em></strong></Link> expérimentée fait la différence.
        </p>
      </section>

      {/* Raccourcir */}
      <section id="raccourcir">
        <h2 className="text-2xl font-bold text-foreground">🚀 Comment raccourcir les délais</h2>
        <ul>
          <li><strong>Mettre un budget suffisant</strong> dès le départ (minimum 3 000 €/mois)</li>
          <li><strong>Lancer Meta + Google en parallèle</strong> pour maximiser la couverture</li>
          <li><strong>Tracker les conversions</strong> dès le jour 1</li>
          <li><strong>Avoir un process commercial solide</strong> derrière chaque lead</li>
        </ul>
        <p>
          C'est exactement ce que nous mettons en place pour nos partenaires. Découvrez comment nous <Link to="/" className="text-primary hover:underline font-semibold">structurons l'acquisition</Link> de A à Z.
        </p>
      </section>

      {/* Résumé visuel */}
      <div className="bg-muted/50 border border-border rounded-xl p-6 my-10">
        <h3 className="text-xl font-bold text-foreground mt-0 mb-4">🧠 À retenir</h3>
        <ul className="space-y-2 m-0">
          <li><strong>Meta Ads</strong> → résultats en 3 à 5 semaines</li>
          <li><strong>Google Ads</strong> → résultats solides en 2 à 3 mois</li>
          <li>Plus vous mettez de budget → plus ça va vite</li>
          <li>Couper les campagnes = perdre du temps + de l'argent</li>
        </ul>
        <p className="mt-4 mb-0 font-semibold">
          👉 L'<strong><em>acquisition digitale</em></strong> en rénovation n'est pas instantanée. Mais une fois lancée correctement → elle devient <strong>prévisible et scalable</strong>.
        </p>
      </div>

      {/* CTA final */}
      <section className="my-12">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mt-0 mb-4">
            Vous dirigez une entreprise de rénovation à +1M€ ?
          </h2>
          <p className="text-muted-foreground mb-6">
            Vous voulez savoir combien de temps il vous faut pour obtenir des résultats concrets avec un <strong><em>système d'acquisition client rénovation</em></strong> structuré ?
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
              Combien de temps pour avoir des leads en rénovation avec Meta Ads ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Les premiers leads arrivent en quelques jours. Mais pour une <strong>génération de leads rénovation</strong> stable et qualifiée, comptez <strong>3 à 5 semaines</strong> de phase d'apprentissage. Le volume et la qualité s'améliorent progressivement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-2" className="bg-muted/50 border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 font-medium">
              Google Ads est-il rentable pour une entreprise de rénovation ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Oui, <strong>Google Ads rénovation</strong> est un des canaux les plus rentables à moyen terme. Les leads sont plus chers (70 à 130 €) mais bien plus qualifiés. Comptez 60 à 90 jours pour que l'algorithme soit pleinement optimisé.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-3" className="bg-muted/50 border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 font-medium">
              Quel budget minimum pour lancer des campagnes publicitaires en rénovation ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Pour des résultats sérieux, prévoyez un minimum de <strong>3 000 €/mois</strong> (1 500 € Meta + 1 500 € Google). Un budget trop faible ne génère pas assez de data pour que les algorithmes puissent s'optimiser. Les entreprises les plus performantes investissent entre 5 000 et 6 500 €/mois.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-4" className="bg-muted/50 border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 font-medium">
              Pourquoi mes campagnes publicitaires ne marchent pas en rénovation ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Les raisons les plus fréquentes : budget insuffisant, absence de tracking des conversions, campagnes coupées trop tôt, ou absence de process commercial structuré. Une <strong>agence marketing rénovation</strong> spécialisée peut identifier ces blocages et les résoudre rapidement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-5" className="bg-muted/50 border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 font-medium">
              Faut-il choisir entre Google Ads et Facebook Ads pour le BTP ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Non. Les entreprises qui performent utilisent <strong>les deux en parallèle</strong>. Meta Ads génère du volume rapidement, Google Ads capte la demande chaude. Combinés avec du retargeting, ils forment un <strong>système d'acquisition client rénovation</strong> complet et prédictible.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Articles connexes */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-foreground">📚 Articles connexes</h2>
        <div className="grid sm:grid-cols-2 gap-4 not-prose">
          <Link to="/blog/cout-publicite-renovation-habitat" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
            <h3 className="font-semibold text-foreground mb-2">Combien coûte la publicité en rénovation habitat ?</h3>
            <p className="text-sm text-muted-foreground m-0">Budgets, coûts par lead et stratégie 2026</p>
          </Link>
          <Link to="/blog/google-ads-vs-facebook-ads-renovation" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
            <h3 className="font-semibold text-foreground mb-2">Google Ads vs Facebook Ads rénovation</h3>
            <p className="text-sm text-muted-foreground m-0">Lequel choisir pour générer des clients ?</p>
          </Link>
          <Link to="/blog/marketing-renovation-habitat-publicite-leads" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
            <h3 className="font-semibold text-foreground mb-2">Marketing rénovation : la publicité fonctionne</h3>
            <p className="text-sm text-muted-foreground m-0">Pourquoi vous perdez de l'argent (et comment y remédier)</p>
          </Link>
          <Link to="/blog/arreter-achat-leads-renovation" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
            <h3 className="font-semibold text-foreground mb-2">Arrêter d'acheter des leads en rénovation</h3>
            <p className="text-sm text-muted-foreground m-0">Comment sortir de la guerre des prix en 5 étapes</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArticleDelaiResultatsAcquisition;
