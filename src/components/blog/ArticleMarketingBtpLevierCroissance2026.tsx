import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "pourquoi-marketing-btp-change-role", label: "Pourquoi le marketing BTP doit changer de rôle" },
  { id: "indicateurs-credibilite-marketing", label: "Les indicateurs qui redonnent de la crédibilité" },
  { id: "priorites-strategie-marketing-btp", label: "Les actions à prioriser" },
  { id: "marketing-et-commerciaux", label: "Le point de bascule avec les commerciaux" },
  { id: "feuille-route-90-jours-marketing-btp", label: "Une feuille de route sur 90 jours" },
  { id: "quand-se-faire-accompagner-marketing-btp", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-strategie-marketing-btp-2026", label: "FAQ" },
];

const ArticleMarketingBtpLevierCroissance2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        En 2026, une stratégie marketing BTP rentable ne se juge plus au nombre d&apos;actions lancées. Elle se mesure à sa capacité à générer des demandes sérieuses, à mieux les qualifier et à aider les équipes commerciales à signer plus proprement.
      </p>
    </div>

    <div className="mb-8 lg:hidden rounded-xl border border-border bg-background p-5">
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

    <section id="pourquoi-marketing-btp-change-role" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Pourquoi le marketing BTP doit changer de rôle</h2>
      <p className="mb-4 text-muted-foreground">Dans beaucoup d&apos;entreprises du BTP, le marketing reste évalué sur sa capacité à produire des supports, animer LinkedIn ou faire vivre le site. Le problème, c&apos;est que cette lecture devient vite insuffisante quand les objectifs commerciaux se tendent et que chaque budget doit se justifier.</p>
      <p className="mb-4 text-muted-foreground">En 2026, une stratégie marketing BTP rentable est un système qui relie visibilité, acquisition, qualification, suivi CRM et chiffre d&apos;affaires signé. Tant que ces maillons ne sont pas connectés, le marketing reste perçu comme un centre de coût. Quand ils le sont, il devient un levier de pilotage business.</p>
      <p className="text-muted-foreground">Dans le BTP, le problème n&apos;est presque jamais uniquement le trafic. Il se situe souvent entre la promesse, la qualification et le traitement commercial. Une entreprise de rénovation peut attirer des visiteurs sur ses pages isolation ou menuiserie, mais perdre des opportunités si les formulaires sont trop vagues, si le suivi est lent ou si le CRM ne remonte pas les signaux utiles.</p>
    </section>

    <section id="indicateurs-credibilite-marketing" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les indicateurs qui redonnent de la crédibilité au marketing</h2>
      <p className="mb-4 text-muted-foreground">Beaucoup d&apos;équipes suivent encore des métriques de surface : sessions, impressions, portée, taux d&apos;engagement. Ces données ont une utilité, mais elles ne suffisent pas à arbitrer un budget ni à défendre une feuille de route.</p>
      <p className="mb-4 text-muted-foreground">Pour repositionner le marketing comme levier de croissance, il faut bâtir un tableau de bord partagé avec la direction et les commerciaux. Les indicateurs les plus utiles sont généralement :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>le volume de demandes entrantes par canal ;</li>
        <li>la part de contacts réellement qualifiés ;</li>
        <li>le taux de transformation en rendez-vous, devis puis signature ;</li>
        <li>le coût d&apos;acquisition par source ;</li>
        <li>la durée moyenne entre premier contact et décision ;</li>
        <li>les contenus ou campagnes qui déclenchent le plus souvent une prise de contact.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Ce suivi change la discussion. Au lieu de débattre sur la fréquence de publication ou sur la couleur d&apos;une campagne, l&apos;entreprise arbitre sur ce qui nourrit réellement le pipe commercial.</p>
    </section>

    <section id="priorites-strategie-marketing-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les actions à prioriser pour structurer une stratégie marketing BTP</h2>
      <p className="mb-4 text-muted-foreground">Une stratégie marketing BTP efficace en 2026 n&apos;essaie pas d&apos;être partout. Elle choisit peu de leviers, mais les exécute avec une vraie logique de conversion.</p>

      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">1. Travailler l&apos;acquisition autour d&apos;intentions réelles</h3>
      <p className="mb-4 text-muted-foreground">Le contenu, le SEO, les campagnes payantes et les pages de service doivent répondre à des recherches qui traduisent une intention business. Une entreprise qui veut <Link to="/gestion-seo" className="text-primary hover:underline">structurer son acquisition organique</Link> ne doit pas produire des articles génériques : elle doit traiter des sujets qui préparent une demande, un devis ou un échange commercial.</p>

      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">2. Faire du site un outil commercial</h3>
      <p className="mb-4 text-muted-foreground">Un site performant dans le BTP ne se contente pas d&apos;être propre. Il doit rassurer, qualifier, orienter et faciliter le passage à l&apos;action. Cela passe souvent par des pages métier plus nettes, des preuves de réalisation, des formulaires intelligents et un meilleur lien entre le contenu consulté et le discours commercial ensuite.</p>

      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">3. Mettre en place un nurturing simple mais utile</h3>
      <p className="mb-4 text-muted-foreground">Les cycles étant souvent longs, tout ne se joue pas au premier clic. Une séquence d&apos;emails sobre, un rappel commercial rapide ou un contenu envoyé au bon moment peuvent faire la différence. Le but n&apos;est pas d&apos;automatiser pour automatiser, mais de ne pas laisser refroidir les demandes intéressantes.</p>

      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">4. Connecter marketing et CRM</h3>
      <p className="mb-4 text-muted-foreground">Quand le marketing voit seulement les formulaires et que les commerciaux voient seulement leur pipeline, personne ne pilote vraiment l&apos;acquisition. Relier campagnes, pages consultées, prise de rendez-vous et issue commerciale permet enfin de savoir ce qui produit de la marge, pas juste du trafic.</p>

      <div className="rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">Exemple terrain</p>
        <p className="text-muted-foreground">Une entreprise de rénovation énergétique peut générer beaucoup de formulaires via Google Ads sur la pompe à chaleur, tout en constatant un faible taux de rendez-vous. En analysant le parcours, elle découvre souvent que le problème vient d&apos;une promesse trop large, d&apos;un ciblage trop ouvert ou d&apos;un délai de rappel trop long. Le levier n&apos;est alors pas “plus de budget”, mais une meilleure qualification et un meilleur traitement des demandes.</p>
      </div>
    </section>

    <section id="marketing-et-commerciaux" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Le point de bascule : travailler vraiment avec les commerciaux</h2>
      <p className="mb-4 text-muted-foreground">Le marketing devient stratégique quand il aide les commerciaux à mieux vendre. Cela suppose un fonctionnement commun, pas une simple passation de leads.</p>
      <p className="mb-4 text-muted-foreground">Les équipes commerciales savent quels arguments rassurent, quelles objections reviennent et quels profils ferment le plus vite. Ces informations doivent remonter dans les pages, les campagnes, les emails et les contenus. À l&apos;inverse, le marketing doit faire remonter aux commerciaux l&apos;historique utile : pages visitées, contenu téléchargé, origine du lead, niveau de maturité perçu.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>Définissez ensemble ce qu&apos;est un lead qualifié.</li>
        <li>Suivez les mêmes étapes du tunnel : contact, qualification, rendez-vous, devis, signature.</li>
        <li>Créez une boucle de feedback courte sur la qualité des demandes entrantes.</li>
        <li>Corrigez les campagnes ou les contenus à partir des retours terrain, pas uniquement des stats publicitaires.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">C&apos;est souvent là que les entreprises du bâtiment débloquent de la performance. Elles arrêtent d&apos;opposer communication et commerce, et commencent à construire un système cohérent.</p>
    </section>

    <section id="feuille-route-90-jours-marketing-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Une feuille de route marketing BTP sur 90 jours</h2>
      <p className="mb-4 text-muted-foreground">Pour une direction qui veut remettre de l&apos;ordre sans repartir de zéro, une feuille de route simple sur 90 jours est souvent plus utile qu&apos;un plan annuel trop ambitieux.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Jours 1 à 30 :</strong> auditer les canaux d&apos;acquisition, clarifier les objectifs business, définir les bons KPIs et vérifier la qualité du suivi CRM.</li>
        <li><strong>Jours 31 à 60 :</strong> retravailler les pages ou campagnes qui génèrent du volume sans conversion, revoir la qualification des demandes et renforcer les contenus les plus proches de l&apos;intention commerciale.</li>
        <li><strong>Jours 61 à 90 :</strong> mettre en place un reporting partagé marketing-commerce-direction, tester un scénario de nurturing et arbitrer les budgets selon la rentabilité observée.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Cette approche évite la dispersion. Elle aide aussi à montrer rapidement des signaux concrets : meilleure qualité des demandes, cycle de rappel plus court, visibilité plus claire sur les canaux qui fonctionnent.</p>
    </section>

    <section id="quand-se-faire-accompagner-marketing-btp" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quand faut-il se faire accompagner ?</h2>
      <p className="mb-4 text-muted-foreground">Quand le marketing produit de l&apos;activité mais pas assez d&apos;opportunités, le sujet dépasse souvent la simple exécution. Il faut alors revoir l&apos;ensemble : positionnement, messages, acquisition, site, CRM, traitement commercial.</p>
      <p className="mb-4 text-muted-foreground">Pour une entreprise déjà structurée, se faire accompagner permet surtout d&apos;aller plus vite sur les arbitrages utiles : quels canaux garder, quelles campagnes couper, quelles pages retravailler, quels indicateurs partager avec la direction, et comment aligner l&apos;acquisition avec les objectifs de marge. C&apos;est précisément le type de sujet traité dans un accompagnement en <Link to="/gestion-communication" className="text-primary hover:underline">gestion de la communication</Link> ou en <Link to="/prise-rendez-vous" className="text-primary hover:underline">prise de rendez-vous</Link> quand le besoin porte davantage sur la qualification et la conversion.</p>
      <SectionCTA />
    </section>

    <section id="faq-strategie-marketing-btp-2026" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground font-display">FAQ sur la stratégie marketing BTP en 2026</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quels sont les indicateurs marketing les plus utiles dans le BTP ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Les plus utiles sont ceux qui relient l&apos;acquisition au commercial : volume de leads, qualité des demandes, coût d&apos;acquisition, taux de rendez-vous, taux de devis signés et durée du cycle de vente.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Faut-il privilégier le SEO ou la publicité dans une stratégie marketing BTP ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Tout dépend de l&apos;objectif. La publicité aide à activer la demande plus vite. Le SEO construit une visibilité durable. Dans beaucoup de cas, le bon choix consiste à articuler les deux autour des mêmes offres, des mêmes messages et d&apos;un suivi CRM propre.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Pourquoi le marketing ne génère-t-il pas assez de chiffre d&apos;affaires dans certaines entreprises du bâtiment ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Parce qu&apos;il est parfois piloté comme une fonction de communication, sans définition commune du lead qualifié, sans suivi de conversion réel et sans lien fort avec les commerciaux. Le manque de performance vient souvent du système global, pas d&apos;un seul canal.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleMarketingBtpLevierCroissance2026;
