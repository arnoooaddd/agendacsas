import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "pourquoi-la-video-et-le-drone-prennent-plus-de-place-dans-la-communication-btp", label: "Pourquoi la vidéo et le drone prennent plus de place" },
  { id: "ce-que-ces-contenus-changent-vraiment-dans-le-parcours-commercial", label: "Leur impact sur le parcours commercial" },
  { id: "quels-formats-produire-pour-eviter-une-communication-gadget", label: "Les formats à produire" },
  { id: "les-erreurs-qui-font-perdre-de-la-valeur-a-vos-videos-de-chantier", label: "Les erreurs à éviter" },
  { id: "comment-structurer-une-production-video-vraiment-utile-en-2026", label: "Comment structurer la production" },
  { id: "quand-le-format-video-devient-un-vrai-avantage-concurrentiel", label: "Quand cela devient un avantage concurrentiel" },
  { id: "quand-faut-il-se-faire-accompagner", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-video-drone-btp", label: "FAQ" },
];

const ArticleVideoDroneBtpVisibiliteReassurance = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        En 2026, la vidéo de chantier et les prises de vue drone ne servent pas seulement à embellir la communication d’une entreprise du BTP. Bien utilisées, elles renforcent la réassurance, soutiennent les pages à fort enjeu de conversion et donnent plus de poids aux échanges commerciaux.
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

    <section id="pourquoi-la-video-et-le-drone-prennent-plus-de-place-dans-la-communication-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Pourquoi la vidéo et le drone prennent plus de place dans la communication BTP</h2>
      <p className="mb-4 text-muted-foreground">Dans le bâtiment, beaucoup d’entreprises disposent de réalisations solides, d’équipes compétentes et de chantiers visuellement impressionnants, mais leur communication ne montre presque rien de tout cela. Résultat : elles apparaissent comme des acteurs parmi d’autres alors qu’elles pourraient justifier un positionnement plus fort.</p>
      <p className="mb-4 text-muted-foreground">La vidéo et le drone répondent à ce problème parce qu’ils rendent le chantier visible, lisible et crédible. Une vue aérienne, un suivi de l’avancement ou un montage propre d’un avant/après permettent de montrer rapidement la réalité de l’exécution, la coordination des équipes et le niveau de finition.</p>
      <p className="text-muted-foreground">Pour une entreprise de couverture, de façade, de gros œuvre ou de rénovation énergétique, cette preuve visuelle compte souvent plus qu’un discours générique. Elle aide le prospect, le prescripteur ou le partenaire à se projeter avant même le premier rendez-vous.</p>
    </section>

    <section id="ce-que-ces-contenus-changent-vraiment-dans-le-parcours-commercial" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Ce que ces contenus changent vraiment dans le parcours commercial</h2>
      <p className="mb-4 text-muted-foreground">Une belle captation n’a de valeur que si elle sert le business. Dans le BTP, la vraie question n’est donc pas “est-ce que la vidéo est tendance ?”, mais “à quel moment elle raccourcit ou sécurise une décision ?”.</p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li><strong>En acquisition</strong> : elle améliore l’attention sur les campagnes Meta, YouTube ou Display.</li>
        <li><strong>Sur le site</strong> : elle rassure sur les pages métiers et renforce la crédibilité avant la demande de contact.</li>
        <li><strong>En rendez-vous</strong> : elle aide les commerciaux à illustrer des références sans devoir tout raconter oralement.</li>
        <li><strong>En suivi de projet</strong> : elle montre l’avancement ou la qualité d’exécution à distance.</li>
        <li><strong>En recrutement</strong> : elle valorise les équipes et le sérieux des opérations.</li>
      </ul>
      <p className="text-muted-foreground">Exemple concret : une entreprise de rénovation énergétique qui envoie après un premier échange une courte vidéo de chantier avec vues drone, séquences terrain et commentaire métier rassure beaucoup plus qu’une simple plaquette PDF. Dans le BTP, le problème n’est presque jamais uniquement le trafic. Il se situe souvent entre la promesse, la preuve et le traitement commercial.</p>
    </section>

    <section id="quels-formats-produire-pour-eviter-une-communication-gadget" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Quels formats produire pour éviter une communication gadget</h2>
      <p className="mb-4 text-muted-foreground">Le risque le plus fréquent est de financer une vidéo “institutionnelle” propre mais peu exploitable. Pour que le tournage devienne rentable, il faut penser les formats selon leur usage.</p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>vidéos courtes de chantier pour les réseaux sociaux et la publicité ;</li>
        <li>films de présentation d’entreprise pour renforcer la réassurance ;</li>
        <li>études de cas filmées avec contexte, exécution et résultat ;</li>
        <li>témoignages clients ou partenaires ;</li>
        <li>capsules métiers pour expliquer un procédé, une méthode ou un savoir-faire spécifique.</li>
      </ul>
      <p className="text-muted-foreground">Le bon arbitrage n’est donc pas “drone ou pas drone”, mais <strong>quel contenu soutient quelle étape du cycle de vente</strong>. C’est aussi pour cela qu’un <Link to="/tournage" className="text-primary hover:underline">tournage structuré</Link> peut devenir un actif commercial durable plutôt qu’un simple poste de communication.</p>
    </section>

    <section id="les-erreurs-qui-font-perdre-de-la-valeur-a-vos-videos-de-chantier" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Les erreurs qui font perdre de la valeur à vos vidéos de chantier</h2>
      <p className="mb-4 text-muted-foreground">Beaucoup d’entreprises du bâtiment disposent déjà d’images intéressantes, mais elles ne les transforment pas en opportunités commerciales. Les erreurs reviennent souvent :</p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>filmer sans objectif commercial précis ;</li>
        <li>produire un seul format long impossible à décliner ;</li>
        <li>ne pas relier la vidéo au site, aux pages métiers ou aux campagnes ;</li>
        <li>montrer le chantier sans expliquer le bénéfice final pour le client ou le donneur d’ordre ;</li>
        <li>laisser les rushs dormir sans calendrier de diffusion ;</li>
        <li>oublier sous-titrage, accroches et contextualisation métier.</li>
      </ul>
      <p className="text-muted-foreground">Dans la pratique, le vrai coût n’est pas celui du tournage. C’est celui d’un contenu mal exploité. Une entreprise peut avoir de très belles images et continuer à perdre des demandes si elles ne sont pas intégrées à une logique de <Link to="/gestion-communication" className="text-primary hover:underline">gestion de communication</Link> cohérente.</p>
    </section>

    <section id="comment-structurer-une-production-video-vraiment-utile-en-2026" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Comment structurer une production vidéo vraiment utile en 2026</h2>
      <p className="mb-4 text-muted-foreground">Une production rentable commence avant le jour du tournage. Il faut partir des objectifs commerciaux, des cibles à convaincre et des points du parcours où la preuve visuelle manque.</p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>identifier les pages, offres ou campagnes qui manquent de réassurance ;</li>
        <li>sélectionner 2 à 4 chantiers ou cas clients à forte valeur démonstrative ;</li>
        <li>prévoir une captation pensée pour plusieurs livrables ;</li>
        <li>rédiger les angles de message avant le montage ;</li>
        <li>intégrer les vidéos dans le site, les relances commerciales et les séquences CRM ;</li>
        <li>mesurer ensuite les impacts sur la qualité des demandes, le temps de vente et le taux de signature.</li>
      </ul>
      <p className="text-muted-foreground">Cette approche fonctionne particulièrement bien pour les entreprises du bâtiment déjà structurées, avec plusieurs équipes, des chantiers à forte valeur ou un objectif de montée en gamme. Plus l’offre est engageante, plus la preuve visuelle devient stratégique.</p>
    </section>

    <section id="quand-le-format-video-devient-un-vrai-avantage-concurrentiel" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Quand le format vidéo devient un vrai avantage concurrentiel</h2>
      <p className="mb-4 text-muted-foreground">Sur beaucoup de marchés locaux, les concurrents se ressemblent : mêmes promesses, mêmes visuels génériques, mêmes argumentaires. Une stratégie vidéo bien exécutée permet de montrer ce que les autres laissent invisible.</p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>valoriser des chantiers complexes ou premium ;</li>
        <li>justifier un positionnement plus haut de gamme ;</li>
        <li>appuyer le développement d’une nouvelle zone ;</li>
        <li>rassurer des prescripteurs, investisseurs ou partenaires ;</li>
        <li>aligner l’image de marque avec la qualité réelle de l’exécution.</li>
      </ul>
      <p className="text-muted-foreground">Autrement dit, la vidéo ne remplace pas une stratégie marketing. Elle devient un accélérateur quand elle soutient déjà une offre claire, un bon site, des preuves chantiers et un suivi commercial solide.</p>
    </section>

    <section id="quand-faut-il-se-faire-accompagner" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Quand faut-il se faire accompagner ?</h2>
      <p className="mb-4 text-muted-foreground">Si vos équipes savent produire des images mais n’ont pas de logique de distribution, d’intégration au site ou d’usage commercial, vous risquez de créer du contenu sans impact mesurable. À l’inverse, attendre le “chantier parfait” fait souvent perdre des mois de visibilité utile.</p>
      <p className="mb-4 text-muted-foreground">Le bon accompagnement consiste moins à filmer davantage qu’à définir quels contenus soutiennent vraiment la croissance, quelles pages doivent être renforcées, et comment réutiliser chaque tournage sur plusieurs points de contact.</p>
      <p className="mb-4 text-muted-foreground">Si votre enjeu est de mieux transformer vos preuves terrain en demandes qualifiées, il est souvent utile de relier tournage, pages métiers, acquisition et suivi commercial. Vous pouvez aussi travailler en parallèle votre <Link to="/creation-site-internet" className="text-primary hover:underline">site internet</Link> quand le sujet principal devient la conversion des visites en opportunités.</p>
      <SectionCTA />
    </section>

    <section id="faq-video-drone-btp" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl font-bold text-foreground font-display md:text-3xl">FAQ</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">La vidéo drone est-elle utile pour une entreprise locale du bâtiment ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Oui, si elle montre des preuves concrètes : chantiers, organisation, qualité d’exécution et contexte d’intervention. Sur un marché local, ce type de contenu peut renforcer fortement la confiance avant la demande de devis.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quel est le meilleur format vidéo pour générer des demandes dans le BTP ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Les formats les plus utiles sont souvent les études de cas filmées, les vidéos courtes de chantier, les témoignages et les contenus intégrés aux pages métiers. Le meilleur format dépend de l’étape du parcours que vous cherchez à renforcer.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Faut-il réserver les vidéos de chantier aux réseaux sociaux ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Non. Les meilleures retombées viennent souvent de leur réutilisation sur le site, dans les séquences commerciales, les pages à fort enjeu de conversion et certaines campagnes d’acquisition.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Le drone suffit-il à améliorer la communication d’une entreprise du BTP ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Non. Le drone est un outil de captation. La performance vient surtout du message, du montage, du contexte commercial et de l’intégration des contenus dans une stratégie cohérente.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleVideoDroneBtpVisibiliteReassurance;
