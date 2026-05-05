import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "cycles-vente-longs-marketing", label: "Pourquoi les cycles de vente longs changent la logique marketing" },
  { id: "apports-inbound-btp", label: "Ce que l’inbound marketing apporte réellement" },
  { id: "piliers-inbound-btp", label: "Les 4 piliers d’une stratégie efficace" },
  { id: "pourquoi-adapte-renovation", label: "Pourquoi cette approche convient aux entreprises établies" },
  { id: "erreurs-inbound-btp", label: "Les erreurs qui rendent la méthode inefficace" },
  { id: "demarrer-sans-usine", label: "Comment démarrer sans usine à gaz" },
  { id: "quand-se-faire-accompagner-inbound", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-inbound-marketing-btp-cycles-longs", label: "FAQ" },
];

const ArticleInboundMarketingBtpCyclesLongs2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        Dans le BTP, un prospect avance rarement en ligne droite jusqu&apos;à la signature. L&apos;inbound marketing reste pertinent en 2026 parce qu&apos;il permet de rester visible, utile et crédible pendant tout le cycle de décision, puis de transmettre au commerce des demandes plus mûres.
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

    <section id="cycles-vente-longs-marketing" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Pourquoi les cycles de vente longs changent complètement la logique marketing</h2>
      <p className="mb-4 text-muted-foreground">Dans une entreprise de rénovation, de couverture, d&apos;isolation ou de menuiserie, la décision ne dépend pas seulement d&apos;un prix ou d&apos;une promotion. Le prospect veut comprendre la solution, comparer plusieurs prestataires, vérifier les garanties et s&apos;assurer que le chantier sera bien géré.</p>
      <p className="mb-4 text-muted-foreground">Quand plusieurs interlocuteurs interviennent — dirigeant, conjoint, responsable technique, maître d&apos;œuvre ou prescripteur — le temps de décision s&apos;allonge encore. Une publicité seule peut créer l&apos;impulsion, mais elle ne suffit pas à faire avancer la décision jusqu&apos;au devis signé.</p>
      <p className="text-muted-foreground"><strong>Dans le BTP, le problème n&apos;est presque jamais uniquement le manque de trafic.</strong> Il se situe souvent entre la première attention, la réassurance, la qualification et le suivi commercial. L&apos;inbound marketing permet justement de combler cet espace.</p>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>Il capte les recherches utiles dès la phase de réflexion.</li>
        <li>Il installe votre crédibilité avant le premier échange.</li>
        <li>Il donne au prospect des raisons de revenir sur votre site.</li>
        <li>Il aide vos équipes à repérer les signaux de maturité plus tôt.</li>
      </ul>
    </section>

    <section id="apports-inbound-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Ce que l’inbound marketing apporte réellement à une entreprise du BTP</h2>
      <p className="mb-4 text-muted-foreground">L&apos;inbound marketing ne consiste pas à publier des contenus pour “faire vivre le site”. Son rôle est de répondre à des questions que vos prospects se posent déjà, tout en structurant un parcours qui mène progressivement vers la prise de contact.</p>
      <p className="mb-4 text-muted-foreground">Pour une entreprise du bâtiment déjà établie, cela peut passer par des articles utiles, des pages métier solides, des études de cas, des checklists de préparation projet ou des contenus qui répondent aux objections les plus fréquentes.</p>
      <p className="mb-4 text-muted-foreground">Un dirigeant qui cherche comment structurer son <Link to="/gestion-communication" className="text-primary hover:underline">acquisition client en rénovation</Link> n&apos;attend pas un discours vague. Il veut comprendre quels leviers activent des demandes plus sérieuses, comment mieux filtrer les projets et à quel moment le marketing doit transmettre la main au commerce.</p>
      <div className="rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">Exemple terrain</p>
        <p className="text-muted-foreground">Une société de rénovation énergétique peut attirer un premier trafic sur des sujets liés à l&apos;isolation ou aux aides, puis faire progresser ce trafic vers une demande plus mûre grâce à des contenus de comparaison, des preuves chantier et un suivi plus structuré. Sans ce travail de maturation, beaucoup de contacts restent froids ou partent chez un concurrent mieux rassurant.</p>
      </div>
    </section>

    <section id="piliers-inbound-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les 4 piliers d’une stratégie inbound marketing BTP efficace</h2>
      <p className="mb-4 text-muted-foreground">Une stratégie inbound performante sur des cycles longs repose généralement sur quatre piliers complémentaires.</p>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">1. Attirer des recherches qui traduisent une vraie intention</h3>
      <p className="mb-4 text-muted-foreground">Le contenu doit viser des sujets qui préparent une prise de décision réelle : génération de leads rénovation, référencement local, qualité des demandes, conversion des devis, organisation commerciale ou visibilité locale. L&apos;objectif n&apos;est pas d&apos;empiler les articles, mais de traiter les sujets qui aident vos prospects à avancer.</p>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">2. Proposer des contenus qui rassurent au bon niveau</h3>
      <p className="mb-4 text-muted-foreground">Un prospect en début de réflexion ne cherche pas la même chose qu&apos;un décideur déjà en phase de comparaison. Les premiers auront besoin d&apos;explications claires, les seconds de preuves, de références ou de critères de choix plus précis.</p>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">3. Qualifier les signaux avant d’envoyer tout le monde au commerce</h3>
      <p className="mb-4 text-muted-foreground">Un téléchargement, une visite répétée ou la consultation de certaines pages doivent être interprétés comme des signaux, pas comme des ventes. L&apos;intérêt de l&apos;inbound marketing est aussi d&apos;éviter de mobiliser trop tôt les équipes commerciales sur des contacts encore peu mûrs.</p>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">4. Relier contenu, CRM et suivi commercial</h3>
      <p className="text-muted-foreground">Le vrai niveau de performance apparaît quand le marketing ne s&apos;arrête pas au formulaire. Si le CRM remonte les contenus consultés, l&apos;origine du contact et le niveau de maturité, les commerciaux peuvent mieux contextualiser leur prise de contact et gagner du temps.</p>
    </section>

    <section id="pourquoi-adapte-renovation" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Pourquoi cette approche est particulièrement adaptée aux entreprises de rénovation déjà établies</h2>
      <p className="mb-4 text-muted-foreground">Les entreprises de rénovation qui dépassent 1 M€ de chiffre d&apos;affaires ne cherchent généralement plus seulement “plus de visibilité”. Elles veulent une acquisition plus stable, des demandes mieux qualifiées et une meilleure lisibilité sur la rentabilité des actions marketing.</p>
      <p className="mb-4 text-muted-foreground">L&apos;inbound marketing répond bien à cette logique parce qu&apos;il aide à construire un actif durable : pages positionnées, contenus réutilisables, meilleures données dans le CRM, parcours plus cohérent entre marketing et commerce.</p>
      <p className="mb-4 text-muted-foreground">Il est particulièrement utile quand :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>la vente repose sur un cycle de décision long ;</li>
        <li>la demande doit être rassurée avant le devis ;</li>
        <li>plusieurs profils influencent la décision ;</li>
        <li>l&apos;entreprise veut réduire sa dépendance à l&apos;achat de leads ou aux actions ponctuelles.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Autrement dit, l&apos;inbound marketing ne remplace pas l&apos;acquisition payante ou la relance commerciale. Il leur donne plus de profondeur et améliore la qualité du pipe sur la durée.</p>
    </section>

    <section id="erreurs-inbound-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les erreurs qui rendent l’inbound marketing inefficace dans le BTP</h2>
      <p className="mb-4 text-muted-foreground">La méthode fonctionne mal quand elle est déployée comme un chantier éditorial isolé, sans lien avec les objectifs business ni avec le traitement commercial.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>Publier des contenus génériques sans angle rénovation ou BTP clair.</li>
        <li>Créer des articles qui génèrent du trafic, mais aucune demande exploitable.</li>
        <li>Lancer des tunnels trop complexes sans volume suffisant ni suivi CRM propre.</li>
        <li>Confondre nurturing et relances automatiques impersonnelles.</li>
        <li>Ne jamais mesurer la part des contenus qui débouchent sur des rendez-vous ou des devis sérieux.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Beaucoup d&apos;entreprises pensent que “le contenu ne marche pas”, alors que le vrai problème vient souvent d&apos;une promesse floue, d&apos;un site peu convaincant ou d&apos;un traitement commercial trop lent.</p>
    </section>

    <section id="demarrer-sans-usine" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Comment démarrer sans créer une usine à gaz</h2>
      <p className="mb-4 text-muted-foreground">Pour une entreprise du bâtiment, la meilleure approche consiste rarement à lancer un dispositif massif d&apos;un coup. Il vaut mieux commencer simple, mais bien relié au business.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>Choisir 3 à 5 sujets à forte intention liés à vos offres ou à vos blocages commerciaux.</li>
        <li>Renforcer les pages ou contenus qui servent déjà vos prises de contact.</li>
        <li>Mettre en place quelques scénarios de suivi sobres sur les points d&apos;entrée les plus utiles.</li>
        <li>Relier ces signaux au CRM pour mieux qualifier et prioriser.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Si votre site doit encore être renforcé côté structure ou conversion, cette base comptera souvent autant que le contenu lui-même. C&apos;est ce qui permet ensuite à l&apos;inbound marketing de produire de vraies opportunités plutôt qu&apos;un simple volume de visites. Pour aller plus loin, vous pouvez aussi lire notre article sur <Link to="/blog/site-web-renovation-levier-commercial-2026" className="text-primary hover:underline">le site web comme levier commercial</Link>.</p>
    </section>

    <section id="quand-se-faire-accompagner-inbound" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quand faut-il se faire accompagner ?</h2>
      <p className="mb-4 text-muted-foreground">L&apos;accompagnement devient pertinent quand votre entreprise publie déjà, communique déjà ou investit déjà en acquisition, mais que le système reste trop fragmenté pour produire des demandes vraiment mûres.</p>
      <p className="mb-4 text-muted-foreground">Si vos prospects visitent le site sans avancer, si les équipes commerciales récupèrent des contacts mal préparés ou si le contenu existe sans impact clair sur le pipe, il faut souvent recadrer l&apos;architecture globale : SEO, contenus, formulaires, CRM, nurturing et règles de passage au commerce.</p>
      <p className="mb-4 text-muted-foreground">Dans ce cas, l&apos;enjeu n&apos;est pas seulement de produire plus. Il est de construire un parcours d&apos;acquisition cohérent, capable de soutenir des cycles de vente longs avec plus de visibilité sur la qualité des opportunités.</p>
      <SectionCTA />
    </section>

    <section id="faq-inbound-marketing-btp-cycles-longs" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground font-display">FAQ sur l’inbound marketing BTP</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">L’inbound marketing remplace-t-il la publicité dans le BTP ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Non. La publicité peut accélérer l&apos;acquisition, tandis que l&apos;inbound marketing aide à nourrir et faire mûrir la demande sur la durée. Les deux se complètent souvent très bien.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Faut-il beaucoup de contenu pour que la méthode fonctionne ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Pas forcément. Quelques contenus très bien choisis, bien positionnés et reliés au parcours commercial peuvent produire plus de valeur qu&apos;un grand volume d&apos;articles génériques.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">À partir de quand cette approche devient-elle rentable ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Elle devient rentable quand elle améliore la qualité des demandes, réduit les pertes entre marketing et commerce et aide l&apos;entreprise à moins dépendre d&apos;actions ponctuelles ou de leads achetés.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleInboundMarketingBtpCyclesLongs2026;
