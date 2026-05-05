import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "pourquoi-communication-habitat-change", label: "Pourquoi la communication habitat doit changer" },
  { id: "fondations-strategie-communication-habitat", label: "Les fondations d’une stratégie rentable" },
  { id: "canaux-prioritaires-communication-habitat", label: "Les canaux à prioriser" },
  { id: "erreurs-communication-habitat", label: "Les erreurs qui coûtent cher" },
  { id: "plan-action-90-jours-communication-habitat", label: "Un plan d’action sur 90 jours" },
  { id: "quand-se-faire-accompagner-communication-habitat", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-communication-habitat-2026", label: "FAQ" },
];

const ArticleCommunicationHabitatStrategie2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        Une stratégie de communication dans le secteur de l&apos;habitat ne consiste plus à publier un peu partout. En 2026, elle doit relier visibilité locale, réassurance, génération de demandes et capacité commerciale à traiter les contacts rapidement.
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

    <section id="pourquoi-communication-habitat-change" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Pourquoi la communication habitat doit changer en 2026</h2>
      <p className="mb-4 text-muted-foreground">Le marché de l&apos;habitat reste porteur, mais il est aussi plus concurrentiel. Les particuliers comparent davantage, lisent les avis, vérifient les réalisations, demandent plusieurs devis et attendent des preuves concrètes avant de prendre contact.</p>
      <p className="mb-4 text-muted-foreground">Une stratégie de communication habitat rentable est un système qui relie la promesse, la preuve, la visibilité et le traitement commercial. Si ces éléments ne sont pas alignés, l&apos;entreprise peut être visible sans générer assez de demandes sérieuses.</p>
      <p className="text-muted-foreground">Dans la rénovation, le problème n&apos;est presque jamais uniquement le manque de trafic. Il se situe souvent entre le message, la réassurance et la vitesse de traitement. Une entreprise de menuiserie, d&apos;isolation ou de couverture peut attirer des visites, puis perdre des opportunités parce que son site rassure mal, que ses avant/après sont peu visibles ou que les demandes restent trop longtemps sans rappel.</p>
    </section>

    <section id="fondations-strategie-communication-habitat" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les fondations d’une stratégie de communication habitat rentable</h2>
      <p className="mb-4 text-muted-foreground">Avant de choisir des canaux, il faut clarifier ce que la communication doit produire. Pour une entreprise de l&apos;habitat déjà établie, l&apos;objectif n&apos;est pas juste d&apos;être connue. Il est de faire émerger une préférence claire au moment où le prospect cherche un prestataire crédible.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>une promesse simple et lisible selon vos métiers ;</li>
        <li>des preuves concrètes : réalisations, avis, cas terrain, labels, garanties ;</li>
        <li>des points de contact cohérents entre site, Google, réseaux sociaux et campagnes ;</li>
        <li>un suivi commercial capable de rappeler vite et de qualifier proprement ;</li>
        <li>un pilotage qui distingue les demandes utiles des simples prises d&apos;information.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">C&apos;est ce socle qui permet ensuite d&apos;investir intelligemment. Sinon, la communication crée de l&apos;activité visible mais peu rentable.</p>
    </section>

    <section id="canaux-prioritaires-communication-habitat" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les canaux à prioriser pour mieux communiquer dans le secteur de l’habitat</h2>
      <p className="mb-4 text-muted-foreground">Les entreprises qui performent en habitat ne cherchent pas à être partout. Elles choisissent quelques canaux cohérents avec leur zone, leur panier moyen et leur vitesse commerciale.</p>

      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Un site web pensé comme un outil de réassurance et de conversion</h3>
      <p className="mb-4 text-muted-foreground">Le site doit répondre vite aux questions du prospect : que faites-vous, sur quelle zone, avec quelles preuves, et pourquoi vous faire confiance ? Pour beaucoup d&apos;entreprises, le vrai chantier consiste à transformer le site en outil commercial, pas seulement en vitrine. C&apos;est là qu&apos;un accompagnement en <Link to="/creation-site-internet" className="text-primary hover:underline">création de site internet</Link> ou en optimisation de pages métier peut changer le volume de demandes utiles.</p>

      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Le référencement local pour capter la demande existante</h3>
      <p className="mb-4 text-muted-foreground">Quand un particulier cherche une entreprise proche de chez lui, la visibilité sur Google et sur Google Maps reste décisive. Pages locales, fiches bien tenues, avis récents et contenus utiles renforcent cette présence. Pour des métiers comme la toiture, l&apos;isolation ou la menuiserie, le SEO local est souvent un des leviers les plus rentables à moyen terme.</p>

      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Les contenus qui rassurent avant le devis</h3>
      <p className="mb-4 text-muted-foreground">Articles, vidéos, avant/après, réponses aux objections et explications métier servent à réduire la méfiance. Un bon contenu ne remplit pas juste un calendrier éditorial : il prépare la prise de contact. Une entreprise de salles de bains qui montre un chantier avant/après, détaille son processus et explique les délais perçus aide déjà le prospect à se projeter.</p>

      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">La publicité quand la promesse et le suivi sont déjà propres</h3>
      <p className="mb-4 text-muted-foreground">La publicité accélère la demande, mais elle amplifie aussi les défauts du système. Si les formulaires sont trop faibles ou si les rappels sont lents, le budget est vite gaspillé. C&apos;est pour cela que beaucoup d&apos;entreprises de l&apos;habitat doivent d&apos;abord clarifier leur message et leur parcours avant d&apos;augmenter les volumes via la <Link to="/gestion-communication" className="text-primary hover:underline">gestion de la communication</Link>.</p>

      <div className="rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">Exemple terrain</p>
        <p className="text-muted-foreground">Une entreprise de couverture peut recevoir des demandes après une campagne Google Ads, mais convertir peu si la page d&apos;atterrissage ne montre ni réalisations locales, ni garanties, ni délai de rappel clair. Le sujet n&apos;est pas seulement le canal. Il est dans l&apos;enchaînement message, preuve, formulaire et relance commerciale.</p>
      </div>
    </section>

    <section id="erreurs-communication-habitat" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les erreurs de communication habitat qui coûtent le plus cher</h2>
      <p className="mb-4 text-muted-foreground">Les erreurs les plus coûteuses ne sont pas toujours visibles dans les statistiques de surface. Elles apparaissent surtout dans les devis non signés et les demandes peu qualifiées.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>parler de l&apos;entreprise sans expliquer clairement ce que le prospect gagne ;</li>
        <li>multiplier les canaux sans ligne éditoriale ni logique de conversion ;</li>
        <li>publier des contenus trop génériques, sans angle habitat ni preuve terrain ;</li>
        <li>négliger les avis, les chantiers réalisés et les éléments de réassurance ;</li>
        <li>lancer de la publicité sans process de rappel structuré ;</li>
        <li>mesurer la communication au volume de clics plutôt qu&apos;à la qualité des demandes.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Une erreur fréquente consiste aussi à séparer complètement communication et commerce. Or dans l&apos;habitat, la promesse marketing doit préparer le rendez-vous commercial, sinon l&apos;entreprise paie deux fois : pour attirer et pour rattraper une mauvaise première impression.</p>
    </section>

    <section id="plan-action-90-jours-communication-habitat" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Un plan d’action sur 90 jours pour remettre la communication à niveau</h2>
      <p className="mb-4 text-muted-foreground">Pour une direction qui veut remettre de l&apos;ordre rapidement, un plan simple sur 90 jours permet souvent de créer plus de valeur qu&apos;une refonte globale trop lourde.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Jours 1 à 30 :</strong> auditer les messages, les pages clés, les avis, les réalisations visibles et la qualité du suivi commercial.</li>
        <li><strong>Jours 31 à 60 :</strong> retravailler la promesse, renforcer les preuves, corriger les pages qui convertissent mal et clarifier les canaux à garder.</li>
        <li><strong>Jours 61 à 90 :</strong> publier des contenus utiles, relancer proprement la visibilité locale et brancher un reporting simple entre source des leads, qualification et rendez-vous.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Ce plan aide à sortir de la communication décorative. Il remet l&apos;effort sur ce qui soutient vraiment le pipe commercial.</p>
    </section>

    <section id="quand-se-faire-accompagner-communication-habitat" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quand faut-il se faire accompagner ?</h2>
      <p className="mb-4 text-muted-foreground">Quand la communication existe déjà mais ne produit pas assez de demandes sérieuses, le sujet dépasse souvent la simple création de contenus. Il faut alors revoir la cohérence entre positionnement, site, référencement local, campagnes et traitement des leads.</p>
      <p className="mb-4 text-muted-foreground">Pour une entreprise de l&apos;habitat déjà structurée, l&apos;accompagnement sert surtout à arbitrer vite : quels canaux garder, quelles pages renforcer, quelles preuves mettre en avant et comment aligner la communication avec les objectifs commerciaux. C&apos;est précisément le type de travail qui se joue entre <Link to="/gestion-communication" className="text-primary hover:underline">gestion de la communication</Link>, <Link to="/gestion-seo" className="text-primary hover:underline">gestion SEO</Link> et <Link to="/prise-rendez-vous" className="text-primary hover:underline">prise de rendez-vous</Link> quand la question de la conversion devient centrale.</p>
      <SectionCTA />
    </section>

    <section id="faq-communication-habitat-2026" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground font-display">FAQ sur la communication dans le secteur de l’habitat</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quels canaux faut-il prioriser pour une entreprise de l’habitat ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">En général, il faut prioriser le site, le référencement local, les avis, les preuves chantier et un ou deux canaux de visibilité adaptés à votre métier. Le bon mix dépend de la zone, du panier moyen et de votre capacité à traiter rapidement les demandes.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Pourquoi la communication ne génère-t-elle pas assez de devis dans l’habitat ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Souvent parce que la promesse est floue, que les preuves manquent ou que le suivi commercial n&apos;est pas assez rapide. Le problème est rarement seulement le canal. Il vient plutôt de l&apos;ensemble du parcours de conversion.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">La publicité suffit-elle pour développer une entreprise de rénovation ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Non. La publicité peut accélérer la demande, mais elle ne remplace ni la réassurance, ni la qualité du site, ni le référencement local, ni le suivi commercial. Sans ces fondations, elle amplifie surtout les pertes.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleCommunicationHabitatStrategie2026;
