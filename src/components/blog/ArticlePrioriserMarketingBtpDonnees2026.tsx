import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "pourquoi-entreprises-btp-suivent-mauvais-indicateurs", label: "Pourquoi beaucoup d’entreprises suivent les mauvais indicateurs" },
  { id: "familles-donnees-prioriser-marketing-btp", label: "Les 4 familles de données qui aident à prioriser" },
  { id: "prioriser-actions-impact-effort-business", label: "Comment prioriser avec une logique impact / effort / business" },
  { id: "signaux-orientent-investissements", label: "Les signaux qui montrent où investir" },
  { id: "tableau-bord-marketing-btp", label: "Le tableau de bord minimum à suivre" },
  { id: "quand-se-faire-accompagner-data-marketing-btp", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-analyse-marketing-btp", label: "FAQ" },
];

const ArticlePrioriserMarketingBtpDonnees2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        Prioriser son marketing BTP en 2026 ne consiste pas à suivre plus de chiffres. Il faut surtout relier visibilité, conversion et performance commerciale pour savoir quelles actions garder, corriger ou arrêter.
      </p>
    </div>

    <div className="mb-8 rounded-xl border border-border bg-background p-5 lg:hidden">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">Sommaire</p>
      <nav aria-label="Sommaire mobile">
        <ol className="space-y-2 text-sm text-muted-foreground">
          {toc.map((item, index) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="transition-colors hover:text-primary">{index + 1}. {item.label}</a>
            </li>
          ))}
        </ol>
      </nav>
    </div>

    <section id="pourquoi-entreprises-btp-suivent-mauvais-indicateurs" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">Pourquoi beaucoup d’entreprises BTP suivent les mauvais indicateurs</h2>
      <p className="mb-4 text-muted-foreground">Dans beaucoup d’entreprises du bâtiment, le pilotage marketing reste encore trop dépendant du ressenti : on garde une campagne parce qu’elle semble visible, on coupe un canal parce qu’il remonte peu de volume, ou on investit dans un nouveau support sans lien clair avec les devis signés.</p>
      <p className="mb-4 text-muted-foreground">Le problème, ce n’est pas le manque de données. C’est le manque de tri. Une entreprise de rénovation ou un acteur du BTP qui veut structurer son acquisition doit savoir distinguer les indicateurs de façade des données qui aident vraiment à arbitrer un budget, une priorité ou un plan d’action.</p>
      <p className="text-muted-foreground">Dans le BTP, le problème n’est presque jamais uniquement le trafic. Il se situe souvent entre la promesse marketing, la qualité des demandes, le suivi commercial et la rentabilité réelle des chantiers obtenus.</p>
    </section>

    <section id="familles-donnees-prioriser-marketing-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">Les 4 familles de données qui aident vraiment à prioriser</h2>
      <p className="mb-4 text-muted-foreground">Pour structurer une stratégie marketing BTP, il est plus utile de raisonner par familles de données que par outils.</p>

      <h3 className="mb-3 font-display text-xl font-semibold text-foreground">1. Les données de visibilité</h3>
      <p className="mb-4 text-muted-foreground">Elles servent à comprendre si votre entreprise existe réellement dans son marché digital.</p>
      <ul className="mb-5 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>positions sur vos requêtes clés ;</li>
        <li>trafic organique sur les pages stratégiques ;</li>
        <li>impressions et couverture des campagnes ;</li>
        <li>part de trafic lié à votre marque.</li>
      </ul>

      <h3 className="mb-3 font-display text-xl font-semibold text-foreground">2. Les données d’engagement</h3>
      <p className="mb-4 text-muted-foreground">Elles montrent si vos supports retiennent vraiment l’attention.</p>
      <ul className="mb-5 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>taux de clic ;</li>
        <li>temps passé sur les pages importantes ;</li>
        <li>clics sur les CTA ;</li>
        <li>navigation vers les pages devis, contact ou réalisations.</li>
      </ul>

      <h3 className="mb-3 font-display text-xl font-semibold text-foreground">3. Les données de conversion</h3>
      <p className="mb-4 text-muted-foreground">Ce sont elles qui permettent de mesurer la génération de leads rénovation ou BTP de façon sérieuse.</p>
      <ul className="mb-5 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>nombre de formulaires qualifiés ;</li>
        <li>appels entrants exploitables ;</li>
        <li>taux de conversion page par page ;</li>
        <li>coût par lead par canal.</li>
      </ul>

      <h3 className="mb-3 font-display text-xl font-semibold text-foreground">4. Les données commerciales</h3>
      <p className="mb-4 text-muted-foreground">C’est souvent la couche la moins bien connectée au marketing, alors que c’est la plus décisive.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>taux de joignabilité des leads ;</li>
        <li>taux de rendez-vous pris ;</li>
        <li>taux devis signé par source ;</li>
        <li>montant moyen ou marge moyenne par origine de demande.</li>
      </ul>
    </section>

    <section id="prioriser-actions-impact-effort-business" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">Comment prioriser vos actions marketing avec une logique impact / effort / business</h2>
      <p className="mb-4 text-muted-foreground">Une bonne priorisation ne consiste pas à faire d’abord ce qui est visible. Elle consiste à faire d’abord ce qui améliore le plus vite la performance commerciale globale.</p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>listez vos actions en cours : SEO, Google Ads, pages service, contenus, retargeting, relances, landing pages ;</li>
        <li>associez à chaque action les données de visibilité, d’engagement, de conversion et de vente ;</li>
        <li>estimez l’impact business potentiel si vous améliorez ce point ;</li>
        <li>estimez l’effort nécessaire en budget, temps et complexité ;</li>
        <li>classez les sujets en 3 catégories : à corriger maintenant, à planifier, à arrêter.</li>
      </ul>
      <p className="mb-4 text-muted-foreground">Exemple concret : une entreprise de rénovation énergétique reçoit beaucoup de trafic sur une page “pompe à chaleur”, mais le taux de demande est faible. Avant de produire dix nouveaux articles, il peut être plus rentable de retravailler cette page, sa preuve sociale, sa promesse et son formulaire.</p>
      <p className="text-muted-foreground">À l’inverse, si une campagne publicitaire génère des formulaires mais que les commerciaux n’arrivent pas à joindre les prospects, le sujet n’est plus seulement marketing. Il touche à la qualification, au délai de rappel et au traitement CRM.</p>
    </section>

    <section id="signaux-orientent-investissements" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">Les signaux qui montrent où investir en priorité</h2>
      <p className="mb-4 text-muted-foreground">Dans la pratique, certaines lectures de données orientent très vite les bonnes décisions.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Beaucoup d’impressions, peu de clics</strong> : retravailler l’accroche, le message ou le ciblage.</li>
        <li><strong>Beaucoup de clics, peu de formulaires</strong> : problème de page, d’offre, de réassurance ou d’expérience.</li>
        <li><strong>Des formulaires, mais peu de rendez-vous</strong> : problème de qualification ou de traitement commercial.</li>
        <li><strong>Des rendez-vous, mais peu de signatures</strong> : problème d’offre, de ciblage ou de rentabilité commerciale.</li>
        <li><strong>Un canal avec peu de volume mais beaucoup de ventes</strong> : canal à protéger et à développer avant les autres.</li>
      </ul>
      <div className="mt-6 rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">Exemple terrain</p>
        <p className="text-muted-foreground">Une entreprise d’isolation, de toiture ou de menuiserie peut croire que son problème vient du trafic. En réalité, les données montrent parfois que les pages attirent bien, mais que le formulaire est trop vague, le rappel trop lent ou le CRM incapable de distinguer les demandes sérieuses des comparaisons opportunistes.</p>
      </div>
    </section>

    <section id="tableau-bord-marketing-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">Le tableau de bord minimum à suivre chaque mois</h2>
      <p className="mb-4 text-muted-foreground">Pour une entreprise du bâtiment déjà structurée, un reporting utile peut rester simple. Il doit surtout être actionnable.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>trafic organique sur les pages métier et locales ;</li>
        <li>positions sur les requêtes à intention commerciale ;</li>
        <li>coût par lead par canal payant ;</li>
        <li>taux de conversion des principales landing pages ;</li>
        <li>nombre de demandes qualifiées par source ;</li>
        <li>taux de prise de rendez-vous ;</li>
        <li>taux devis signé par provenance ;</li>
        <li>chiffre d’affaires ou marge estimée liée aux principaux canaux.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Ce tableau de bord devient vraiment utile quand marketing et commerce regardent les mêmes chiffres. Sinon, chacun optimise son morceau sans vision globale. Pour aller plus loin, il est utile de relier ce suivi à un accompagnement en <Link to="/gestion-communication" className="text-primary hover:underline">gestion de la communication</Link> ou en <Link to="/gestion-seo" className="text-primary hover:underline">gestion SEO</Link> selon le levier dominant.</p>
    </section>

    <section id="quand-se-faire-accompagner-data-marketing-btp" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">Quand faut-il se faire accompagner ?</h2>
      <p className="mb-4 text-muted-foreground">Si vos données sont dispersées entre Google Ads, Analytics, Search Console, CRM et fichiers commerciaux, il devient vite difficile de piloter correctement votre stratégie marketing rénovation ou BTP.</p>
      <p className="mb-4 text-muted-foreground">L’enjeu n’est pas seulement de faire des reportings. Il est de construire un système où chaque action peut être reliée à une conséquence business : plus de demandes sérieuses, un meilleur taux de rendez-vous, un coût d’acquisition maîtrisé ou une marge mieux protégée.</p>
      <p className="mb-4 text-muted-foreground">Quand ce lien n’existe pas, les décisions se prennent à l’intuition. Et dans un marché tendu, c’est rarement durable.</p>
      <SectionCTA />
    </section>

    <section id="faq-analyse-marketing-btp" className="scroll-mt-28">
      <h2 className="mb-6 font-display text-2xl font-bold text-foreground md:text-3xl">FAQ : les questions fréquentes sur l’analyse marketing dans le BTP</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quelles sont les données les plus importantes pour une entreprise de rénovation ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Les plus utiles sont celles qui relient visibilité, demande entrante et résultat commercial : trafic utile, conversions, coût par lead, prise de rendez-vous et taux de signature.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Pourquoi le trafic seul ne suffit-il pas pour piloter le marketing BTP ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Parce qu’un volume de visites ne dit rien sur la qualité des demandes ni sur la rentabilité réelle des chantiers obtenus. Un trafic élevé peut masquer un mauvais ciblage ou une page inefficace.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Comment savoir quelles actions marketing arrêter ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Il faut croiser l’impact business et l’effort requis. Une action coûteuse qui n’améliore ni les demandes qualifiées, ni les rendez-vous, ni les ventes doit être remise en question rapidement.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quel lien faire entre marketing et CRM dans le bâtiment ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Le CRM permet de suivre ce que deviennent les leads après leur arrivée : rappel, qualification, rendez-vous, devis, signature. Sans cette lecture, il est impossible de mesurer une vraie rentabilité marketing.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticlePrioriserMarketingBtpDonnees2026;
