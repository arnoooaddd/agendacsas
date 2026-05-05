import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "pourquoi-communication-btp-pilotage", label: "Pourquoi la communication BTP devient un sujet de pilotage" },
  { id: "preuve-et-recentrage", label: "Pourquoi la preuve reprend le dessus" },
  { id: "digitalisation-canaux-utiles", label: "Quels canaux restent utiles en 2026" },
  { id: "rse-et-expertise-terrain", label: "Comment éviter une communication creuse" },
  { id: "adapter-messages-selon-cibles", label: "Comment adapter les messages selon les cibles" },
  { id: "feuille-route-90-jours-communication-btp", label: "Feuille de route 90 jours" },
  { id: "quand-se-faire-accompagner-communication-btp", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-communication-btp-2026", label: "FAQ" },
];

const ArticleCommunicationBtpTendances2026EntreprisesHabitat = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        En 2026, la communication BTP devient rentable quand elle cesse d&apos;être une simple vitrine et qu&apos;elle soutient concrètement la preuve, la qualification des demandes et la conversion commerciale.
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

    <section id="pourquoi-communication-btp-pilotage" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Pourquoi la communication BTP devient un sujet de pilotage et plus seulement d’image</h2>
      <p className="mb-4 text-muted-foreground">Dans beaucoup d’entreprises du bâtiment, la communication a longtemps été gérée comme un sujet de notoriété. En 2026, ce modèle montre ses limites. Les budgets sont plus surveillés, les marges restent sous tension et les équipes commerciales ne peuvent plus absorber des demandes mal qualifiées.</p>
      <p className="mb-4 text-muted-foreground">Résultat : les entreprises les plus solides cherchent une <strong>stratégie marketing BTP</strong> directement connectée au terrain. Elles veulent savoir quels canaux génèrent des demandes utiles, quels contenus rassurent vraiment et quels messages aident à signer plus vite.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>Un site web doit soutenir la conversion, pas seulement présenter l’entreprise.</li>
        <li>Les contenus doivent répondre à de vraies objections commerciales.</li>
        <li>Les actions digitales doivent être suivies avec un niveau minimum de pilotage.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Dans le BTP, le problème n’est presque jamais uniquement le trafic. Il se situe souvent entre la promesse, la qualification et le traitement commercial.</p>
    </section>

    <section id="preuve-et-recentrage" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Les entreprises de rénovation qui performent recentrent leur communication sur la preuve</h2>
      <p className="mb-4 text-muted-foreground">Quand le marché se tend, les discours trop génériques perdent vite en efficacité. Les entreprises qui avancent continuent à communiquer, mais avec une logique plus resserrée : moins de dispersion, plus de démonstration.</p>
      <p className="mb-4 text-muted-foreground">Concrètement, cela veut dire :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>mettre en avant des cas concrets, des réalisations, des avant/après, des retours d’expérience ;</li>
        <li>prouver la valeur des offres avec des exemples de chantiers, des gains, des délais, des contextes précis ;</li>
        <li>adapter les messages selon les cibles : particuliers, prescripteurs, distributeurs, partenaires ou installateurs.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Une entreprise d’isolation ou de menuiserie qui vise 3 à 5 millions d’euros de chiffre d’affaires ne peut plus publier le même message sur tous les supports. Un dirigeant a besoin d’une logique d’acquisition. Un commercial a besoin d’arguments. Un prospect a besoin d’être rassuré. Un prescripteur a besoin de crédibilité technique.</p>
    </section>

    <section id="digitalisation-canaux-utiles" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Digitalisation, LinkedIn, emailing, contenus : ce qui reste utile en 2026</h2>
      <p className="mb-4 text-muted-foreground">La digitalisation continue, mais tout ne mérite pas le même effort. Pour une entreprise qui veut <strong>structurer acquisition client BTP</strong>, les canaux intéressants sont ceux qui soutiennent une vraie séquence commerciale.</p>
      <p className="mb-4 text-muted-foreground">En pratique, on retrouve souvent quatre piliers :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Le site web</strong>, pour capter, orienter et rassurer.</li>
        <li><strong>Le référencement</strong>, pour créer une visibilité organique durable sur les bonnes requêtes.</li>
        <li><strong>LinkedIn</strong>, surtout pour les sujets BtoB, prescription, recrutement ou image de marque experte.</li>
        <li><strong>L’emailing</strong>, quand il est segmenté et relié à un vrai suivi commercial.</li>
      </ul>
      <p className="mb-4 mt-4 text-muted-foreground">Les formats courts progressent parce qu’ils sont plus faciles à consommer : vidéos simples, carrousels, extraits terrain, réponses à questions fréquentes. Mais leur intérêt n’existe que s’ils s’intègrent dans un ensemble cohérent. Publier plus ne veut pas dire mieux communiquer.</p>
      <p className="text-muted-foreground">Pour une société de rénovation énergétique, par exemple, un contenu LinkedIn peut ouvrir une conversation, mais c’est souvent la combinaison avec une page service bien structurée, des preuves visibles et un suivi CRM propre qui transforme réellement la communication en rendez-vous.</p>
    </section>

    <section id="rse-et-expertise-terrain" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">RSE, durabilité, expertise terrain : comment éviter une communication creuse</h2>
      <p className="mb-4 text-muted-foreground">En 2026, parler d’engagements ne suffit plus. Les entreprises du bâtiment qui communiquent sur la durabilité, la qualité de pose, les certifications ou l’impact environnemental doivent sortir d’une logique déclarative.</p>
      <p className="mb-4 text-muted-foreground">Une <strong>agence communication BTP</strong> ou une direction marketing interne efficace va chercher à rendre ces sujets lisibles commercialement :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>preuves chiffrées ou labels compréhensibles ;</li>
        <li>cas d’usage terrain ;</li>
        <li>contenus pédagogiques qui aident vraiment à vendre ;</li>
        <li>mise en avant de bénéfices concrets pour le client final ou le partenaire.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Si le discours RSE n’aide ni à comprendre la valeur de l’offre ni à sécuriser la décision, il reste périphérique. À l’inverse, quand il est relié à la performance, à la conformité, à la durabilité ou au confort, il devient utile.</p>
    </section>

    <section id="adapter-messages-selon-cibles" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Le vrai enjeu : adapter les messages à des cibles qui n’attendent pas la même chose</h2>
      <p className="mb-4 text-muted-foreground">Un des grands écarts en communication BTP vient du fait que beaucoup d’entreprises parlent encore à “leur marché” comme à un bloc homogène. Or un artisan installateur, un bureau d’études, un distributeur ou un particulier premium n’entrent pas dans le même parcours.</p>
      <p className="mb-4 text-muted-foreground">Les entreprises les plus avancées segmentent davantage :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>message commercial plus direct pour les demandes à intention forte ;</li>
        <li>contenus d’aide à la vente pour les partenaires et prescripteurs ;</li>
        <li>supports simples et visuels pour les équipes terrain ;</li>
        <li>pages ou contenus dédiés aux expertises les plus rentables.</li>
      </ul>
      <div className="mt-6 rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">Exemple concret</p>
        <p className="text-muted-foreground">Une entreprise de couverture peut avoir un bon volume de trafic local et malgré tout manquer d’opportunités qualifiées si ses pages ne répondent pas clairement aux attentes d’un propriétaire, d’un syndic ou d’un prescripteur. La communication paraît active, mais elle nourrit mal le pipeline.</p>
      </div>
    </section>

    <section id="feuille-route-90-jours-communication-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Feuille de route 90 jours pour structurer une communication BTP plus rentable</h2>
      <p className="mb-4 text-muted-foreground">Pour une entreprise de rénovation déjà installée, inutile de tout refaire d’un coup. Le plus efficace est souvent de repartir d’un diagnostic simple puis de renforcer le système par étapes.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Jours 1 à 30 :</strong> auditer les canaux existants, identifier les pages ou actions qui génèrent des demandes, repérer les pertes entre trafic, contact, qualification et devis.</li>
        <li><strong>Jours 31 à 60 :</strong> clarifier le message, retravailler les preuves, prioriser 2 ou 3 canaux au lieu de disperser les efforts, mettre en place un suivi plus propre.</li>
        <li><strong>Jours 61 à 90 :</strong> produire des contenus utiles pour les cibles prioritaires, renforcer les pages les plus stratégiques, relier marketing et commerciaux avec des règles simples de traitement.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Ce type de démarche permet de <strong>structurer marketing rénovation</strong> sans alourdir inutilement l’organisation. Le bon objectif n’est pas de faire “plus de communication”, mais de faire mieux circuler la valeur entre visibilité, réassurance et conversion.</p>
    </section>

    <section id="quand-se-faire-accompagner-communication-btp" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Quand faut-il se faire accompagner ?</h2>
      <p className="mb-4 text-muted-foreground">Le sujet dépasse une simple action marketing quand l’entreprise cumule plusieurs symptômes : demandes irrégulières, site peu convaincant, contenus publiés sans impact, équipes commerciales qui se plaignent de la qualité des contacts ou absence de lecture claire du ROI.</p>
      <p className="mb-4 text-muted-foreground">À ce stade, il faut souvent un cadre plus structuré : priorisation des canaux, clarification du positionnement, travail sur la conversion et articulation avec le suivi commercial. C’est là qu’un accompagnement externe peut faire gagner du temps, surtout si l’objectif est d’installer un vrai <strong>système acquisition client rénovation</strong> plutôt que de lancer des actions isolées. Pour aller plus loin, les services <Link to="/gestion-communication" className="text-primary hover:underline">gestion de la communication</Link> et <Link to="/gestion-seo" className="text-primary hover:underline">gestion SEO</Link> permettent de relier visibilité, preuve et performance commerciale.</p>
      <SectionCTA />
    </section>

    <section id="faq-communication-btp-2026" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl font-bold text-foreground font-display md:text-3xl">FAQ</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quelles sont les tendances de communication BTP les plus importantes en 2026 ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Les tendances majeures sont le recentrage sur le ROI, la montée des contenus de preuve, une segmentation plus fine des messages, une digitalisation plus pragmatique et une communication plus utile pour les équipes commerciales comme pour les prospects.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Pourquoi une entreprise du bâtiment peut-elle communiquer beaucoup sans générer plus de demandes ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Parce que la communication ne suffit pas si la promesse est floue, si les contenus ne rassurent pas, si le site convertit mal ou si le suivi commercial ne traite pas correctement les contacts. Le volume d’actions ne compense pas un système mal structuré.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quels canaux prioriser pour une entreprise de rénovation déjà établie ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Le site web, le SEO, certains contenus sociaux comme LinkedIn selon la cible, et l’emailing segmenté restent les bases les plus utiles. Le choix exact dépend surtout du type d’offre, du cycle de vente et de la maturité commerciale de l’entreprise.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleCommunicationBtpTendances2026EntreprisesHabitat;
