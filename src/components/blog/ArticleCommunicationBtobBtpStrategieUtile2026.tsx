import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const toc = [
  { id: "pourquoi-communication-btob-btp-business", label: "Pourquoi la communication BtoB est devenue un sujet business" },
  { id: "piliers-strategie-marketing-btp", label: "Les piliers d’une stratégie crédible" },
  { id: "canaux-prioritaires-btp", label: "Quels canaux prioriser" },
  { id: "relier-communication-acquisition-btp", label: "Relier communication et acquisition" },
  { id: "erreurs-communication-digitale-batiment", label: "Les erreurs les plus fréquentes" },
  { id: "feuille-route-90-jours", label: "Feuille de route 90 jours" },
  { id: "quand-se-faire-accompagner", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-communication-btob-btp", label: "FAQ" },
];

const ArticleCommunicationBtobBtpStrategieUtile2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        Une stratégie de communication BtoB dans le BTP devient utile quand elle cesse d’être décorative et qu’elle
        soutient réellement la crédibilité, la qualification commerciale et le développement du pipeline.
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

    <section id="pourquoi-communication-btob-btp-business" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Pourquoi la communication BtoB est devenue un sujet business dans le BTP</h2>
      <p className="mb-4 text-muted-foreground">Le bouche-à-oreille ne suffit plus à lui seul pour soutenir une ambition de croissance. Dès qu’une entreprise veut sécuriser son pipeline, recruter de meilleurs partenaires, toucher des prescripteurs ou rassurer des décideurs avant un appel, sa communication devient un levier commercial.</p>
      <p className="mb-4 text-muted-foreground">Un promoteur, un syndic, un architecte ou un donneur d’ordre regarde rarement uniquement le prix. Il regarde aussi les signaux de sérieux : réalisations visibles, spécialisation claire, avis, capacité à expliquer son savoir-faire, cohérence entre discours commercial et présence en ligne.</p>
      <p className="text-muted-foreground"><strong>Dans le BTP, le problème n’est presque jamais uniquement la visibilité.</strong> Il se situe souvent entre la promesse, la réassurance et la manière dont les demandes sont traitées une fois qu’elles arrivent.</p>
    </section>

    <section id="piliers-strategie-marketing-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Les piliers d’une stratégie marketing BTP crédible en 2026</h2>
      <p className="mb-4 text-muted-foreground">Une communication BtoB utile repose sur quelques fondations simples, mais rarement bien structurées.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Un positionnement lisible</strong> : spécialités, typologie de chantiers, zone d’intervention, niveau de gamme, interlocuteurs visés.</li>
        <li><strong>Un site qui rassure</strong> : pages métier claires, réalisations, éléments de preuve, contact rapide, discours orienté bénéfices concrets.</li>
        <li><strong>Une présence locale et sectorielle cohérente</strong> : Google, LinkedIn, contenus métier, cas terrain, réseau de partenaires.</li>
        <li><strong>Des preuves visibles</strong> : photos de chantier, témoignages, certifications, avant/après, retours d’expérience.</li>
        <li><strong>Un suivi commercial structuré</strong> : CRM, délai de rappel, qualification, relance, traçabilité des sources.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Une entreprise de rénovation énergétique qui vise 3 à 5 chantiers signés par mois n’a pas besoin de publier partout. Elle a besoin d’un système où chaque point de contact renforce la confiance et facilite la prise de décision.</p>
    </section>

    <section id="canaux-prioritaires-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Quels canaux méritent vraiment votre attention</h2>
      <p className="mb-4 text-muted-foreground">Toutes les entreprises du bâtiment n’ont pas besoin des mêmes canaux. Le bon choix dépend du type d’offre, du cycle de vente et des interlocuteurs à convaincre.</p>
      <p className="mb-4 text-muted-foreground">En pratique, les canaux les plus utiles sont souvent :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Le site internet</strong>, parce qu’il centralise la preuve, l’offre et les points de conversion.</li>
        <li><strong>LinkedIn</strong>, quand il faut exister auprès de partenaires, prescripteurs, promoteurs ou profils BtoB.</li>
        <li><strong>Google Business Profile et le référencement local</strong>, quand la visibilité géographique influence directement les demandes entrantes.</li>
        <li><strong>Les contenus de preuve</strong> comme les études de cas, témoignages ou chantiers expliqués.</li>
        <li><strong>La publicité ciblée</strong>, si l’objectif est d’accélérer l’acquisition sur une offre précise.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Le bon arbitrage n’est pas “quel canal est à la mode ?”, mais “quel canal aide vraiment à trouver des clients BTP plus qualifiés et à mieux convertir les opportunités ?”.</p>
    </section>

    <section id="relier-communication-acquisition-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Comment relier communication et acquisition clients BTP</h2>
      <p className="mb-4 text-muted-foreground">Une stratégie de communication BtoB ne vaut rien si elle n’améliore pas la qualité du pipeline commercial. C’est là que beaucoup d’entreprises se trompent.</p>
      <p className="mb-4 text-muted-foreground">Elles investissent dans l’image, mais sans relier les actions à des indicateurs utiles : volume de demandes sérieuses, taux de qualification, délai de réponse, taux de devis, taux de signature, coût d’acquisition par chantier gagné.</p>
      <p className="mb-4 text-muted-foreground">Voici un cadre simple à suivre :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>identifier les offres ou segments prioritaires ;</li>
        <li>clarifier la promesse par cible ;</li>
        <li>créer des contenus et pages qui répondent aux vraies objections ;</li>
        <li>capter les demandes via formulaires, appels ou campagnes ;</li>
        <li>qualifier rapidement dans un CRM ;</li>
        <li>mesurer ce qui génère des opportunités réellement rentables.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Exemple concret : une entreprise de façade peut recevoir beaucoup de demandes peu sérieuses si sa communication reste trop large. En affinant sa promesse sur les copropriétés, en montrant des références comparables et en ajoutant un parcours de qualification plus précis, elle réduit le bruit commercial et augmente la qualité des rendez-vous.</p>
      <p className="mt-4 text-muted-foreground">Sur ce point, un travail de fond entre stratégie d’acquisition et suivi commercial fait souvent la différence. Une page bien conçue, reliée à un <Link to="/gestion-seo" className="text-primary hover:underline">pilotage SEO cohérent</Link> ou à un dispositif de <Link to="/gestion-communication" className="text-primary hover:underline">gestion de la communication orienté performance</Link>, transforme mieux qu’une présence digitale dispersée.</p>
    </section>

    <section id="erreurs-communication-digitale-batiment" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Les erreurs les plus fréquentes dans la communication digitale bâtiment</h2>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Confondre visibilité et performance</strong> : être vu n’est pas suffisant si cela ne produit pas de demandes exploitables.</li>
        <li><strong>Rester trop générique</strong> : “entreprise tous travaux” rassure peu et différencie mal.</li>
        <li><strong>Publier sans stratégie</strong> : des contenus dispersés sans objectif commercial clair saturent du temps sans retour mesurable.</li>
        <li><strong>Négliger la réassurance</strong> : peu d’avis, peu de réalisations, peu de preuves terrain.</li>
        <li><strong>Ne pas suivre le traitement commercial</strong> : une bonne acquisition peut paraître mauvaise si les demandes sont rappelées trop tard ou mal qualifiées.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Dans beaucoup d’entreprises du bâtiment, la faiblesse ne se situe ni dans le trafic ni dans le budget. Elle se situe dans l’alignement entre communication, offre et exécution commerciale.</p>
    </section>

    <section id="feuille-route-90-jours" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Feuille de route 90 jours pour structurer votre communication BtoB</h2>
      <p className="mb-4 text-muted-foreground">Pour une entreprise déjà active, mieux vaut une feuille de route simple et pilotable qu’un plan marketing théorique.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Jours 1 à 30</strong> : audit du site, des sources de demandes, des avis, du positionnement et du suivi commercial.</li>
        <li><strong>Jours 31 à 60</strong> : refonte des messages clés, optimisation des pages prioritaires, mise en avant des preuves et structuration des contenus métier.</li>
        <li><strong>Jours 61 à 90</strong> : activation des canaux retenus, suivi CRM, mesure des conversions réelles et arbitrage selon la rentabilité.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">L’objectif n’est pas de “communiquer plus”. L’objectif est de construire un système d’acquisition client rénovation ou BTP plus lisible, plus suivi et plus rentable.</p>
    </section>

    <section id="quand-se-faire-accompagner" className="mb-12 scroll-mt-28">
      <div className="rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Quand faut-il se faire accompagner ?</h2>
        <p className="mb-4 text-muted-foreground">Quand la communication repose sur quelques actions isolées, elle reste souvent décorative. L’accompagnement devient utile quand il faut relier plusieurs sujets à la fois : positionnement, contenu, visibilité locale, campagnes, pages de conversion et traitement commercial.</p>
        <p className="mb-4 text-muted-foreground">Pour une entreprise du bâtiment avec des objectifs de croissance clairs, l’enjeu n’est pas seulement d’avoir un site ou des réseaux sociaux. L’enjeu est de structurer un dispositif qui soutient réellement la prise de rendez-vous, la qualification et la signature.</p>
        <p className="text-muted-foreground">C’est précisément là qu’une <Link to="/agence-marketing" className="text-primary hover:underline">agence marketing BTP</Link> peut créer de la valeur : en transformant la communication en levier d’acquisition pilotable, pas en simple vitrine.</p>
      </div>
    </section>

    <section id="conclusion" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Conclusion</h2>
      <p className="text-muted-foreground">En 2026, la communication BtoB dans le BTP n’est plus un sujet secondaire. C’est un levier de crédibilité, de différenciation et d’acquisition. Les entreprises qui performent sont rarement celles qui communiquent le plus. Ce sont celles qui structurent le mieux le lien entre leur visibilité, leur preuve terrain et leur suivi commercial.</p>
    </section>

    <section id="faq-communication-btob-btp" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl font-bold text-foreground font-display md:text-3xl">FAQ</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quelle différence entre communication BtoB et communication grand public dans le BTP ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">La communication BtoB vise surtout à rassurer des prescripteurs, partenaires, donneurs d’ordre ou décideurs professionnels. Elle doit davantage mettre en avant la fiabilité, les références comparables, la capacité d’exécution et la solidité de l’entreprise.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Une entreprise du bâtiment doit-elle être présente sur LinkedIn ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Oui, si elle veut développer sa visibilité auprès d’acteurs professionnels, valoriser ses chantiers, renforcer sa marque employeur ou soutenir une stratégie de partenariat. LinkedIn n’est pas obligatoire pour tous, mais il est très utile dans beaucoup de contextes BtoB.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Comment savoir si une stratégie marketing BTP fonctionne vraiment ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Il faut suivre autre chose que l’audience ou les clics. Les bons indicateurs sont la qualité des demandes, le taux de qualification, le nombre de rendez-vous utiles, le taux de devis et la rentabilité des opportunités générées.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleCommunicationBtobBtpStrategieUtile2026;
