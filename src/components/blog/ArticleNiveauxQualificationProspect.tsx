import { Link } from "react-router-dom";
import SectionCTA from "@/components/SectionCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ArticleNiveauxQualificationProspect = () => {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      {/* Résumé */}
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
        <p className="text-muted-foreground m-0">
          Tous les leads ne se valent pas. Seulement <strong>3 %</strong> de vos prospects sont prêts à acheter maintenant — mais <strong>37 % peuvent être convertis</strong> avec la bonne stratégie. Cet article détaille les <strong>4 niveaux de qualification</strong> d'un prospect en rénovation et comment structurer votre <strong><em>tunnel de vente rénovation</em></strong> pour maximiser chaque opportunité d'<strong><em>acquisition clients rénovation</em></strong>.
        </p>
      </div>

      {/* Sommaire */}
      <nav className="bg-card border border-border rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-foreground mt-0 mb-4">📋 Sommaire</h2>
        <ol className="space-y-2 list-decimal list-inside m-0">
          <li><a href="#niveau-3" className="text-primary hover:underline">Les 3 % prêts à acheter : conversion directe</a></li>
          <li><a href="#niveau-17" className="text-primary hover:underline">Les 17 % en recherche active : choix du prestataire</a></li>
          <li><a href="#niveau-20" className="text-primary hover:underline">Les 20 % conscients du problème : éducation</a></li>
          <li><a href="#niveau-60" className="text-primary hover:underline">Les 60 % non conscients : long terme</a></li>
          <li><a href="#strategie" className="text-primary hover:underline">La vraie stratégie : faire monter les prospects</a></li>
          <li><a href="#erreur" className="text-primary hover:underline">L'erreur classique qui vous coûte cher</a></li>
          <li><a href="#faq" className="text-primary hover:underline">Questions fréquentes</a></li>
        </ol>
      </nav>

      {/* Introduction */}
      <section>
        <p>
          Si vous traitez tous vos prospects de la même manière, <strong>vous perdez de l'argent</strong>.
        </p>
        <p>
          En <strong><em>marketing digital rénovation</em></strong>, la maturité d'un prospect détermine tout : le message, le canal, le contenu et le coût pour le convertir.
        </p>
        <p>
          Comprendre ces 4 niveaux, c'est la base d'un <strong><em>système acquisition client rénovation</em></strong> rentable.
        </p>
      </section>

      {/* Niveau 3% */}
      <section id="niveau-3">
        <h2 className="text-2xl font-bold text-foreground">🔴 Les 3 % prêts à acheter — le cash immédiat</h2>
        <p>
          Ce sont les prospects qui :
        </p>
        <ul>
          <li><strong>Cherchent activement</strong> une entreprise</li>
          <li><strong>Comparent</strong> des devis</li>
          <li>Veulent <strong>passer à l'action</strong> rapidement</li>
        </ul>
        <p>
          Typiquement, ils tapent sur Google : <em>"installateur pompe à chaleur prix"</em> ou <em>"devis isolation combles"</em>.
        </p>

        <h3 className="text-xl font-semibold text-foreground">Stratégie : conversion directe</h3>
        <ul>
          <li><strong><em>Google Ads rénovation</em></strong> (search) → capter l'intention</li>
          <li>Landing page optimisée</li>
          <li>Prise de RDV rapide</li>
        </ul>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 my-6">
          <p className="m-0 font-semibold text-foreground">
            👉 Objectif : <strong>transformer immédiatement en devis</strong>. Ces prospects sont les plus rentables, mais aussi les plus disputés par la concurrence.
          </p>
        </div>
      </section>

      {/* Niveau 17% */}
      <section id="niveau-17">
        <h2 className="text-2xl font-bold text-foreground">🟠 Les 17 % en recherche active — choisir la bonne entreprise</h2>
        <p>
          Ils savent qu'ils ont un projet et qu'ils vont passer à l'action. Mais ils hésitent sur :
        </p>
        <ul>
          <li>Le <strong>prestataire</strong></li>
          <li>La <strong>crédibilité</strong></li>
          <li>La <strong>confiance</strong></li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground">Stratégie : notoriété + preuve sociale</h3>
        <ul>
          <li><strong>Témoignages clients</strong> en vidéo</li>
          <li>Vidéos de chantiers (avant / après)</li>
          <li>Présentation de l'équipe</li>
          <li><strong><em>Facebook Ads rénovation</em></strong> avec du contenu de réassurance</li>
        </ul>

        <p>
          👉 <strong>Objectif : devenir l'évidence.</strong> Quand ils sont prêts, c'est vous qu'ils appellent. Consultez nos <Link to="/results" className="text-primary hover:underline font-semibold">études de cas</Link> pour voir cette stratégie en action.
        </p>
      </section>

      {/* Niveau 20% */}
      <section id="niveau-20">
        <h2 className="text-2xl font-bold text-foreground">🟡 Les 20 % conscients du problème — mais pas encore prêts</h2>
        <p>
          Ils savent qu'ils ont un problème :
        </p>
        <ul>
          <li>Facture d'électricité trop élevée</li>
          <li>Mauvaise isolation</li>
          <li>Inconfort thermique</li>
        </ul>
        <p>
          Mais ils <strong>doutent des solutions</strong>, ont des objections et ne sont pas pressés.
        </p>

        <h3 className="text-xl font-semibold text-foreground">Stratégie : contenu éducatif</h3>
        <ul>
          <li><strong>FAQ</strong> (ex : <em>"est-ce que la PAC est rentable ?"</em>)</li>
          <li>Vidéos explicatives</li>
          <li>Articles de blog optimisés</li>
          <li>Réponses aux objections courantes</li>
        </ul>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 my-6">
          <p className="m-0 font-semibold text-foreground">
            👉 Objectif : les faire passer de <em>"je me pose des questions"</em> → <em>"je dois agir"</em>. C'est le cœur de la <strong><em>stratégie marketing rénovation</em></strong>.
          </p>
        </div>
      </section>

      {/* CTA milieu */}
      <SectionCTA />

      {/* Niveau 60% */}
      <section id="niveau-60">
        <h2 className="text-2xl font-bold text-foreground">🔵 Les 60 % non conscients — ne pas prioriser</h2>
        <p>
          Ces prospects :
        </p>
        <ul>
          <li>Ne savent pas qu'ils ont un problème</li>
          <li>Ne cherchent rien</li>
          <li>Ne sont pas dans une logique d'achat</li>
        </ul>

        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 my-6">
          <p className="m-0 font-semibold text-foreground">
            ⚠️ Aller les chercher en <strong><em>publicité rénovation</em></strong> directe = très coûteux et peu rentable.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-foreground">Approche recommandée</h3>
        <ul>
          <li>Contenu <strong>SEO</strong> (articles de blog)</li>
          <li>Contenu éducatif long terme</li>
          <li>Sensibilisation progressive via les réseaux sociaux</li>
        </ul>
        <p>
          👉 Objectif : les faire entrer dans la réflexion <strong>sans dépenser trop</strong>.
        </p>
      </section>

      {/* Stratégie globale */}
      <section id="strategie">
        <h2 className="text-2xl font-bold text-foreground">🔄 La vraie stratégie : faire monter les prospects dans la pyramide</h2>
        <p>
          Une bonne <strong><em>stratégie marketing rénovation</em></strong> ne se limite pas à la <strong><em>génération de leads rénovation</em></strong>. Elle fait <strong>évoluer les prospects</strong> :
        </p>
        <ul>
          <li><strong>20 % → 17 %</strong> (éducation)</li>
          <li><strong>17 % → 3 %</strong> (preuve + confiance)</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground">Exemple concret multi-touch</h3>
        <div className="bg-muted/50 border border-border rounded-xl p-5 my-4">
          <ol className="space-y-2 m-0">
            <li><strong>1.</strong> Le prospect voit une <strong>vidéo Facebook</strong> sur les économies d'énergie</li>
            <li><strong>2.</strong> Il comprend son problème</li>
            <li><strong>3.</strong> Il cherche sur <strong>Google</strong></li>
            <li><strong>4.</strong> Il tombe sur <strong>votre site</strong></li>
            <li><strong>5.</strong> Il voit vos <strong>témoignages clients</strong></li>
            <li><strong>6.</strong> Il demande un <strong>devis</strong> ✅</li>
          </ol>
        </div>

        <p>
          👉 C'est ce qu'on appelle le <strong>multi-touch</strong> : chaque point de contact fait avancer le prospect. C'est la base d'un <strong><em>tunnel de vente rénovation</em></strong> performant, comme nous le structurons chez <Link to="/" className="text-primary hover:underline font-semibold">Agendac</Link>.
        </p>
      </section>

      {/* Erreur classique */}
      <section id="erreur">
        <h2 className="text-2xl font-bold text-foreground">⚠️ L'erreur classique qui vous coûte cher</h2>
        <p>
          <strong>Faire uniquement de la conversion sur les 3 %.</strong>
        </p>
        <div className="space-y-3 my-4">
          <div className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-4">
            <span className="text-destructive font-bold">❌</span>
            <p className="m-0"><strong>Volume limité</strong> — seulement 3 % du marché</p>
          </div>
          <div className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-4">
            <span className="text-destructive font-bold">❌</span>
            <p className="m-0"><strong>Concurrence élevée</strong> — tout le monde se bat sur les mêmes prospects</p>
          </div>
          <div className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-4">
            <span className="text-destructive font-bold">❌</span>
            <p className="m-0"><strong><em>Coût lead rénovation</em> élevé</strong> — enchères élevées sur les mots-clés d'intention</p>
          </div>
        </div>
        <p>
          Les entreprises qui dominent leur marché travaillent <strong>les 4 niveaux</strong> simultanément. C'est ce qui différencie une simple campagne d'un vrai <strong><em>système acquisition client rénovation</em></strong>.
        </p>
      </section>

      {/* À retenir */}
      <div className="bg-muted/50 border border-border rounded-xl p-6 my-10">
        <h3 className="text-xl font-bold text-foreground mt-0 mb-4">🧠 À retenir</h3>
        <ul className="space-y-2 m-0">
          <li>Tous les prospects n'ont <strong>pas la même maturité</strong></li>
          <li>Chaque niveau demande un <strong>type de contenu spécifique</strong></li>
          <li>Le vrai levier = structurer un <strong><em>tunnel de vente rénovation</em></strong> complet</li>
        </ul>
        <p className="mt-4 mb-0 font-semibold">
          👉 Les entreprises qui gagnent ne génèrent pas juste des leads. <strong>Elles contrôlent le parcours complet.</strong>
        </p>
      </div>

      {/* CTA final */}
      <section className="my-12">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mt-0 mb-4">
            Vous voulez structurer votre acquisition de A à Z ?
          </h2>
          <p className="text-muted-foreground mb-6">
            Chez Agendac, nous construisons des <strong><em>systèmes d'acquisition client rénovation</em></strong> complets pour les entreprises à +1M€ de CA. De la publicité à la conversion.
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
              Comment qualifier un prospect en rénovation ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Il existe <strong>4 niveaux de maturité</strong> : 3 % prêts à acheter, 17 % en recherche active, 20 % conscients du problème et 60 % non conscients. Chaque niveau nécessite une approche différente : conversion directe, preuve sociale, contenu éducatif ou sensibilisation long terme.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-2" className="bg-muted/50 border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 font-medium">
              Comment structurer un tunnel de vente en rénovation ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Un <strong>tunnel de vente rénovation</strong> performant combine : publicité (Google + Meta) pour générer du trafic, contenu éducatif pour qualifier, preuve sociale pour rassurer, et un process commercial structuré pour convertir. C'est un <strong>système complet</strong>, pas juste des campagnes isolées.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-3" className="bg-muted/50 border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 font-medium">
              Pourquoi mes leads rénovation ne convertissent pas ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Souvent parce que vous traitez tous les prospects de la même manière. Un prospect à 60 % (non conscient) ne se convertit pas avec la même approche qu'un prospect à 3 % (prêt à acheter). Adapter votre message à chaque niveau de maturité est la clé d'une <strong>acquisition clients rénovation</strong> rentable.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-4" className="bg-muted/50 border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 font-medium">
              Faut-il utiliser Google Ads ou Facebook Ads pour la rénovation ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Les deux, mais pour des objectifs différents. <strong>Google Ads</strong> capte les 3 % prêts à acheter (intention directe). <strong>Facebook Ads</strong> travaille les 17-20 % en créant de la demande et de la notoriété. Les combiner dans un <strong>système d'acquisition</strong> est la stratégie la plus performante. En savoir plus dans notre <Link to="/blog/google-ads-vs-facebook-ads-renovation" className="text-primary hover:underline">comparatif Google vs Facebook Ads</Link>.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-5" className="bg-muted/50 border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 font-medium">
              Quel est le coût d'un lead en rénovation selon le niveau de qualification ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              Le <strong>coût lead rénovation</strong> varie fortement : 70 à 130 € pour un lead chaud (3 %) via Google Ads, 20 à 50 € pour un lead tiède (17-20 %) via Meta Ads. Plus le prospect est qualifié, plus le coût est élevé — mais le taux de conversion et le ROI le compensent largement.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Articles connexes */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-foreground">📚 Articles connexes</h2>
        <div className="grid sm:grid-cols-2 gap-4 not-prose">
          <Link to="/blog/cout-publicite-renovation-habitat" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
            <h3 className="font-semibold text-foreground mb-2">Combien coûte la publicité en rénovation ?</h3>
            <p className="text-sm text-muted-foreground m-0">Budgets, coûts par lead et stratégie 2026</p>
          </Link>
          <Link to="/blog/google-ads-vs-facebook-ads-renovation" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
            <h3 className="font-semibold text-foreground mb-2">Google Ads vs Facebook Ads rénovation</h3>
            <p className="text-sm text-muted-foreground m-0">Lequel choisir pour générer des clients ?</p>
          </Link>
          <Link to="/blog/externaliser-prise-rdv-renovation" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
            <h3 className="font-semibold text-foreground mb-2">Externaliser sa prise de rendez-vous</h3>
            <p className="text-sm text-muted-foreground m-0">Le levier que vous ignorez en rénovation</p>
          </Link>
          <Link to="/blog/marketing-renovation-habitat-publicite-leads" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
            <h3 className="font-semibold text-foreground mb-2">Marketing rénovation : la publicité fonctionne</h3>
            <p className="text-sm text-muted-foreground m-0">Pourquoi vous perdez de l'argent (et comment y remédier)</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArticleNiveauxQualificationProspect;
