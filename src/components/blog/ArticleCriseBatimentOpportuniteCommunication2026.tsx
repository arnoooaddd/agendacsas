import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const toc = [
  { id: "pourquoi-entreprises-arretent-communiquer-en-crise", label: "Pourquoi les entreprises arrêtent de communiquer en période de crise" },
  { id: "ce-que-entreprises-qui-gagnent-font-different", label: "Ce que les entreprises qui gagnent font différemment" },
  { id: "pourquoi-cout-acquisition-baisse-en-crise", label: "Pourquoi le coût d'acquisition baisse en crise" },
  { id: "erreurs-a-ne-pas-commettre", label: "Les erreurs à ne pas commettre" },
  { id: "3-leviers-a-activer-des-maintenant", label: "Les 3 leviers à activer dès maintenant" },
  { id: "quand-se-faire-accompagner", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-crise-batiment-communication", label: "FAQ" },
];

const ArticleCriseBatimentOpportuniteCommunication2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        En période de ralentissement du marché, les entreprises de rénovation et du BTP ont tendance à réduire leurs
        budgets de communication. C'est souvent la pire décision possible : les crises sont cycliques, et celles qui
        continuent à communiquer en ressortent nettement plus fortes, avec un coût d'acquisition réduit et une
        notoriété renforcée.
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

    <p className="mb-4 text-muted-foreground">Quand le marché ralentit, la tentation est forte de réduire les budgets, d'attendre que ça passe, de reporter les projets marketing à des jours meilleurs. C'est humain. C'est aussi la pire décision possible.</p>
    <p className="mb-4 text-muted-foreground">Les crises sont cycliques dans le bâtiment. Inflation, hausse des taux, baisse des mises en chantier, incertitude économique : chaque cycle apporte son lot de turbulences. Pourtant, les entreprises de rénovation et du BTP qui en sortent renforcées ne sont pas celles qui ont attendu. Ce sont celles qui ont continué à communiquer, à exister, à capter l'attention quand leurs concurrents disparaissaient des écrans radar.</p>
    <p className="mb-8 text-muted-foreground"><strong>Une crise du bâtiment, bien exploitée, est l'un des meilleurs accélérateurs de positionnement marketing qu'une entreprise établie puisse connaître.</strong></p>

    <section id="pourquoi-entreprises-arretent-communiquer-en-crise" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Pourquoi les entreprises arrêtent de communiquer en période de crise</h2>
      <p className="mb-4 text-muted-foreground">La réaction la plus fréquente face à un ralentissement du marché est la prudence. On réduit les dépenses jugées non essentielles. Et le marketing, malheureusement, est souvent perçu comme un centre de coût plutôt qu'un levier de croissance.</p>
      <p className="mb-4 text-muted-foreground">C'est une erreur qui repose sur plusieurs mécanismes bien identifiés :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>L'effet de mimétisme</strong> : parce que les concurrents réduisent leur présence, on croit que c'est la bonne décision.</li>
        <li><strong>La pression sur la trésorerie</strong> : avec moins de chantiers signés, les budgets publicitaires passent en ligne de mire des arbitrages financiers.</li>
        <li><strong>L'incertitude sur le ROI</strong> : en période stable, un euro investi en acquisition donne des résultats prévisibles. En crise, on doute de l'efficacité des campagnes.</li>
        <li><strong>Le biais d'attentisme</strong> : « On attend que ça reparte, et on relancera les machines à ce moment-là. »</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Ces réactions sont compréhensibles. Mais elles ignorent un fait essentiel : <strong>en période de crise, le coût d'acquisition client baisse mécaniquement</strong> parce que la concurrence publicitaire est moins forte et que les prospects encore actifs sont plus qualifiés.</p>
    </section>

    <section id="ce-que-entreprises-qui-gagnent-font-different" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Ce que les entreprises qui gagnent font différemment</h2>
      <p className="mb-4 text-muted-foreground">Les dirigeants de rénovation et du BTP qui tirent leur épingle du jeu en période difficile partagent plusieurs réflexes communs :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>Ils <strong>maintiennent ou augmentent leur présence publicitaire</strong> quand les autres réduisent la voilure, ce qui fait baisser les CPC et remonter leur part d'impressions.</li>
        <li>Ils <strong>investissent dans le contenu et le référencement naturel</strong> : un article de blog publié en période de crise sera indexé et commencera à générer du trafic organique au moment de la reprise.</li>
        <li>Ils <strong>travaillent leur image de marque</strong> pour être perçus comme un acteur solide, pas comme une entreprise qui disparaît dès que le vent tourne.</li>
        <li>Ils <strong>structurent leur système d'acquisition</strong> : CRM, process de qualification, suivi commercial — tout ce qui faisait défaut en période de forte demande devient prioritaire quand le volume baisse.</li>
        <li>Ils <strong>soignent leur relation client existante</strong> : en crise, le bouche-à-oreille et les clients fidèles valent de l'or.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">C'est exactement l'inverse de l'attentisme. Et c'est payant parce que vous construisez une position que vos concurrents devront reconquérir à un coût bien plus élevé quand le marché repartira.</p>
    </section>

    <section id="pourquoi-cout-acquisition-baisse-en-crise" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Pourquoi le coût d'acquisition baisse en crise</h2>
      <p className="mb-4 text-muted-foreground">C'est un contre-intuitif puissant. En période de ralentissement du marché du bâtiment :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Moins d'annonceurs</strong> sur Google Ads et Meta Ads → les enchères baissent, donc le coût par clic diminue.</li>
        <li><strong>Les prospects encore actifs sont plus qualifiés</strong> : ceux qui cherchent un artisan ou une entreprise de rénovation en pleine crise ont un vrai besoin, pas une simple envie.</li>
        <li><strong>Moins de bruit concurrentiel</strong> → vos messages sont plus visibles et mieux retenus.</li>
        <li><strong>Le taux de conversion remonte</strong> parce que les contacts entrants ont une intention plus forte.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Résultat : une entreprise qui continue d'investir en acquisition en période de crise peut voir son coût par lead baisser de 20 à 40 % par rapport à une période normale. C'est l'un des rares moments où chaque euro dépensé en publicité travaille plus fort.</p>
    </section>

    <section id="erreurs-a-ne-pas-commettre" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Les erreurs à ne pas commettre</h2>
      <p className="mb-4 text-muted-foreground">Attention : communiquer en crise ne signifie pas faire n'importe quoi. Voici les erreurs les plus fréquentes :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Couper les budgets d'un coup sec</strong> : une coupure totale efface plusieurs mois de travail d'algorithme et de construction d'audience. Repartir après une pause coûte souvent plus cher que d'avoir maintenu une présence réduite.</li>
        <li><strong>Changer de message du jour au lendemain</strong> : passer d'un ton conquérant à un ton pessimiste ou plaintif est contre-productif. Restez utile, pas alarmiste.</li>
        <li><strong>Ne communiquer que sur le prix</strong> : en crise, la tentation de brader ses services est forte. Mais les clients qui achètent uniquement au prix sont rarement rentables.</li>
        <li><strong>Attendre sans rien préparer</strong> : le marketing ne se décrète pas le jour de la reprise. Les positions SEO, la notoriété et les processus commerciaux se construisent en amont.</li>
        <li><strong>Négliger le suivi commercial</strong> : si votre CRM est vide ou mal structuré, même les meilleures campagnes publicitaires ne compenseront pas un entonnoir de vente percé.</li>
      </ul>
    </section>

    <section id="3-leviers-a-activer-des-maintenant" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Les 3 leviers à activer dès maintenant</h2>
      <p className="mb-4 text-muted-foreground">Si vous dirigez une entreprise de rénovation ou du BTP et que le marché se tend, voici les trois actions concrètes à mettre en œuvre sans attendre :</p>
      <h3 className="mb-3 text-xl font-bold text-foreground font-display md:text-2xl">1. Structurez votre acquisition</h3>
      <p className="mb-4 text-muted-foreground">Un système d'acquisition client ne se limite pas à lancer des campagnes publicitaires. Il repose sur un pipeline complet : génération de trafic, formulaire de contact, qualification, relance commerciale, signature. En période de crise, c'est le moment idéal pour consolider les maillons faibles de cette chaîne.</p>
      <h3 className="mb-3 text-xl font-bold text-foreground font-display md:text-2xl">2. Maintenez une présence publicitaire, même réduite</h3>
      <p className="mb-4 text-muted-foreground">Plutôt que de couper à zéro, réduisez vos budgets de 30 à 50 % et concentrez-les sur les audiences les plus performantes. Vous garderez ainsi la main sur vos algorithmes et vos positions publicitaires. Un budget réduit mais continu est plus efficace qu'un budget fort mais irrégulier.</p>
      <h3 className="mb-3 text-xl font-bold text-foreground font-display md:text-2xl">3. Investissez dans le contenu et le SEO</h3>
      <p className="mb-4 text-muted-foreground">Un article de blog publié aujourd'hui commence à être indexé dans les semaines qui suivent. Dans 3 à 6 mois, il pourra générer du trafic organique sans coût d'acquisition supplémentaire. C'est le levier le plus sous-estimé par les entreprises de rénovation en période de crise.</p>
    </section>

    <section id="quand-se-faire-accompagner" className="mb-12 scroll-mt-28">
      <div className="rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Quand faut-il se faire accompagner ?</h2>
        <p className="mb-4 text-muted-foreground">Structurer son acquisition et sa communication en période de crise demande à la fois du temps, des compétences et une vision claire. Toutes les entreprises n'ont pas ces ressources en interne.</p>
        <p className="mb-4 text-muted-foreground">Si vos campagnes actuelles ne performent pas, si vous n'avez pas de visibilité sur votre coût d'acquisition, ou si votre suivi commercial repose encore sur des Post-it et des tableaux Excel, le moment est venu d'envisager un accompagnement spécialisé. <Link to="/gestion-communication" className="text-primary hover:underline">Une agence marketing BTP comme Agendac</Link> peut vous aider à diagnostiquer ce qui bloque, à structurer votre système d'acquisition et à le faire tourner sans que vous ayez à devenir expert en marketing digital.</p>
        <p className="text-muted-foreground">L'objectif n'est pas de dépenser plus. C'est de dépenser mieux, avec une stratégie adaptée à votre taille, vos marges et votre marché.</p>
      </div>
    </section>

    <p className="mb-8 text-muted-foreground">Les crises du bâtiment ne sont pas une fatalité. Ce sont des phases de recomposition du marché. Les entreprises qui communiquent intelligemment pendant ces périodes en ressortent avec un avantage concurrentiel durable : moins de concurrence publicitaire, des prospects plus qualifiés, un coût d'acquisition réduit et une notoriété renforcée.</p>
    <p className="mb-12 text-muted-foreground"><strong>Le pire moment pour réduire sa communication, c'est quand vos concurrents le font aussi.</strong></p>

    <section id="faq-crise-batiment-communication" className="mb-16 scroll-mt-28">
      <h2 className="mb-6 text-2xl font-bold text-foreground font-display md:text-3xl">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="arreter-campagnes-google-ads">
          <AccordionTrigger className="text-left text-base font-medium">Faut-il arrêter ses campagnes Google Ads en période de crise du bâtiment ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Non, sauf cas exceptionnel de trésorerie très tendue. Réduire le budget tout en maintenant les campagnes actives est presque toujours préférable à un arrêt complet, qui désapprend les algorithmes et augmente le coût de reprise.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="delai-resultats">
          <AccordionTrigger className="text-left text-base font-medium">Combien de temps faut-il pour voir les effets d'une communication maintenue en crise ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les effets sur la publicité sont immédiats (CPC plus bas, moins de concurrence). Les effets sur le référencement naturel et la notoriété se voient sur 3 à 6 mois. C'est pourquoi il ne faut pas attendre la reprise pour agir.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="savoir-si-investir">
          <AccordionTrigger className="text-left text-base font-medium">Comment savoir si mon entreprise doit investir dans la communication en période de crise ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Analysez votre coût d'acquisition actuel, votre trésorerie disponible et la solidité de votre système de suivi commercial. Si ces trois éléments sont sous contrôle, vous avez tout intérêt à maintenir ou accroître votre présence.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="reserve-grandes-entreprises">
          <AccordionTrigger className="text-left text-base font-medium">Est-ce que la communication en crise est réservée aux grandes entreprises du BTP ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Non. Les entreprises de rénovation de taille moyenne (1 à 5 M€ de CA) sont même celles qui ont le plus à gagner, car elles peuvent capter une part de marché que les grands groupes négligent temporairement.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleCriseBatimentOpportuniteCommunication2026;
