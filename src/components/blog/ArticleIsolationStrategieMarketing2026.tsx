import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "pourquoi-structurer-marche-isolation", label: "Pourquoi structurer votre marketing isolation" },
  { id: "clarifier-cible-isolation", label: "Clarifier votre cible" },
  { id: "canaux-acquisition-isolation", label: "Les canaux à prioriser" },
  { id: "site-web-filtrer-convertir", label: "Le site qui filtre et convertit" },
  { id: "contenu-rassure-isolation", label: "Le contenu qui rassure" },
  { id: "eviter-campagnes-peu-rentables", label: "Éviter les campagnes peu rentables" },
  { id: "quand-se-faire-accompagner-isolation", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-strategie-marketing-isolation", label: "FAQ" },
];

const ArticleIsolationStrategieMarketing2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        En 2026, une stratégie marketing isolation rentable relie positionnement, acquisition, qualification commerciale et suivi CRM pour transformer la visibilité en chantiers réellement signés.
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

    <section id="pourquoi-structurer-marche-isolation" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Pourquoi le marché de l’isolation exige une stratégie marketing plus structurée</h2>
      <p className="mb-4 text-muted-foreground">Dans l’isolation, la visibilité seule ne suffit pas. Une entreprise peut être présente sur Google, investir en publicité et publier du contenu, tout en recevant des demandes peu qualifiées, mal localisées ou difficiles à transformer en devis signés.</p>
      <p className="mb-4 text-muted-foreground">En 2026, une stratégie marketing isolation performante est un dispositif qui permet de capter les bonnes demandes, au bon endroit, avec une promesse claire, puis de les convertir en opportunités commerciales traitées rapidement.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>Les recherches sont souvent locales et urgentes.</li>
        <li>Les particuliers comparent vite plusieurs prestataires.</li>
        <li>Les aides et certifications influencent fortement la confiance.</li>
        <li>La qualité de traitement des contacts pèse autant que l’acquisition.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Dans l’habitat, le problème n’est presque jamais uniquement le trafic. Il se situe souvent entre la promesse marketing, la qualification des demandes et le suivi commercial après le premier contact.</p>
    </section>

    <section id="clarifier-cible-isolation" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Clarifier votre cible avant de lancer du trafic</h2>
      <p className="mb-4 text-muted-foreground">Beaucoup d’entreprises d’isolation veulent parler à tout le monde : combles, ITE, ITI, copropriétés, maisons individuelles, rénovation globale. Ce réflexe dilue le message.</p>
      <p className="mb-4 text-muted-foreground">Une stratégie marketing isolation efficace commence par un cadrage simple :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>quels chantiers vous voulez vraiment vendre ;</li>
        <li>dans quelles zones géographiques ;</li>
        <li>avec quel panier moyen et quelles contraintes de marge ;</li>
        <li>auprès de quels profils : particuliers, syndics, prescripteurs, maîtres d’œuvre ou bailleurs.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Exemple concret : une entreprise qui réalise surtout de l’isolation thermique par l’extérieur en maison individuelle n’a pas intérêt à communiquer comme un acteur généraliste. Elle doit montrer ses références façade, sa maîtrise des aides, sa capacité à gérer des chantiers visibles et son sérieux sur le suivi avant devis.</p>
    </section>

    <section id="canaux-acquisition-isolation" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les canaux qui comptent vraiment pour trouver des clients en isolation</h2>
      <p className="mb-4 text-muted-foreground">Pour trouver des clients en rénovation dans l’isolation, il faut construire un mix simple et cohérent, pas multiplier les leviers.</p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>SEO local</strong> pour capter les recherches déjà intentionnistes sur vos zones prioritaires.</li>
        <li><strong>Google Ads</strong> pour accélérer sur les requêtes à forte intention.</li>
        <li><strong>Pages métiers et pages locales</strong> pour transformer la demande par typologie de chantier.</li>
        <li><strong>Google Business Profile</strong> pour soutenir la preuve locale.</li>
        <li><strong>Preuves de chantier</strong> : photos avant/après, avis, cas concrets, témoignages.</li>
      </ul>
      <p className="mb-4 text-muted-foreground">Les réseaux sociaux peuvent aider, mais rarement comme premier levier de volume qualifié. Ils servent surtout à rassurer, nourrir la marque et recycler la preuve terrain.</p>
      <p className="text-muted-foreground">Si votre promesse est forte mais que votre site reste générique, vous attirez du clic, pas forcément des demandes sérieuses. Un visiteur doit comprendre en quelques secondes si vous traitez son besoin, sa zone et son type de projet.</p>
    </section>

    <section id="site-web-filtrer-convertir" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Le site web doit filtrer autant qu’il convertit</h2>
      <p className="mb-4 text-muted-foreground">Un site d’entreprise d’isolation ne doit pas seulement faire pro. Il doit orienter les bons contacts et limiter les demandes peu pertinentes.</p>
      <p className="mb-4 text-muted-foreground">Les pages qui performent le mieux remplissent souvent quatre fonctions :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>elles expliquent clairement les prestations : combles, murs, toiture, ITE, planchers ;</li>
        <li>elles apportent des éléments de réassurance : RGE, avis, chantiers, méthodologie ;</li>
        <li>elles cadrent les attentes : délais, périmètre d’intervention, étapes ;</li>
        <li>elles rendent le passage à l’action simple : appel, formulaire, demande d’étude.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Un bon site réduit aussi la friction côté commercial. Si un formulaire remonte automatiquement dans le CRM avec la zone, le type de chantier et le besoin exprimé, l’équipe gagne du temps et traite plus vite.</p>
      <p className="text-muted-foreground">Vous pouvez aussi renforcer certaines pages avec une <Link to="/gestion-seo" className="text-primary underline-offset-4 hover:underline">stratégie SEO dédiée</Link> et une architecture pensée pour la conversion, pas seulement pour la présentation.</p>
    </section>

    <section id="contenu-rassure-isolation" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Le contenu qui rassure vraiment dans le secteur de l’isolation</h2>
      <p className="mb-4 text-muted-foreground">Le contenu utile dans l’isolation ne consiste pas à publier des articles génériques sur les économies d’énergie. Il doit répondre à des questions qui bloquent une décision.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>guides sur les différences entre ITE, ITI et isolation des combles selon les cas ;</li>
        <li>explications sur les critères qui font varier un devis ;</li>
        <li>pages locales avec exemples de réalisations par zone ;</li>
        <li>études de cas de chantiers avec contraintes réelles ;</li>
        <li>contenus sur les erreurs de rénovation énergétique qui coûtent cher.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Un article bien ciblé peut attirer une demande, mais il sert surtout à préqualifier. Un dirigeant ou un responsable commercial doit voir le contenu comme un outil de tri et de réassurance, pas seulement comme un exercice de visibilité.</p>
      <p className="text-muted-foreground">Pour élargir la portée, vous pouvez ensuite relayer ces preuves via une <Link to="/gestion-communication" className="text-primary underline-offset-4 hover:underline">gestion de communication</Link> cohérente entre publicité, contenu et reporting.</p>
    </section>

    <section id="eviter-campagnes-peu-rentables" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Comment éviter les campagnes qui génèrent du volume mais peu de marge</h2>
      <p className="mb-4 text-muted-foreground">Beaucoup de campagnes dans l’habitat échouent parce qu’elles sont pilotées au coût par lead au lieu d’être pilotées à la qualité commerciale.</p>
      <p className="mb-4 text-muted-foreground">Pour améliorer la rentabilité marketing rénovation, suivez au minimum :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>la source exacte de chaque demande ;</li>
        <li>le taux de joignabilité ;</li>
        <li>le taux de qualification ;</li>
        <li>le taux de devis ;</li>
        <li>le taux de signature par canal ou par campagne ;</li>
        <li>la marge estimée par typologie de chantier.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Exemple terrain : une campagne Google Ads peut sembler chère sur le papier, mais devenir plus rentable que d’autres leviers si elle apporte des projets d’ITE mieux situés, mieux financés et mieux traités par l’équipe.</p>
      <p className="text-muted-foreground">À l’inverse, un flux de petits contacts mal qualifiés peut occuper les équipes, fatiguer le standard et faire croire que le marketing ne marche pas, alors que le problème vient du ciblage et du traitement commercial.</p>
    </section>

    <section id="quand-se-faire-accompagner-isolation" className="mb-10 scroll-mt-28 rounded-xl border border-border bg-muted/30 p-6 md:p-7">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quand faut-il se faire accompagner ?</h2>
      <p className="mb-4 text-muted-foreground">Si votre entreprise dépend encore majoritairement du bouche-à-oreille, des aides du moment ou de quelques prescripteurs historiques, structurer l’acquisition devient un sujet de direction, pas juste de communication.</p>
      <ul className="mb-5 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>prioriser les bons segments d’isolation ;</li>
        <li>mettre en place un système d’acquisition cohérent ;</li>
        <li>connecter site, formulaires, CRM et suivi commercial ;</li>
        <li>arbitrer entre SEO, publicité et contenus selon votre cycle de vente ;</li>
        <li>mesurer ce qui génère réellement du chiffre d’affaires.</li>
      </ul>
      <p className="mb-5 text-muted-foreground">Pour une entreprise d’isolation déjà structurée, l’enjeu n’est pas d’être présente partout. C’est de construire une machine commerciale capable de transformer la visibilité en chantiers rentables et prévisibles.</p>
      <SectionCTA />
    </section>

    <section id="faq-strategie-marketing-isolation" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground font-display">FAQ sur la stratégie marketing d’une entreprise d’isolation</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quels leviers activer en priorité pour une entreprise d’isolation ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Commencez par un site clair, des pages métiers solides, du SEO local, une fiche Google Business Profile bien tenue et, si le potentiel commercial le justifie, des campagnes Google Ads ciblées.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Les réseaux sociaux suffisent-ils pour générer des demandes en isolation ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Non. Ils peuvent soutenir la crédibilité et montrer vos réalisations, mais ils remplacent rarement un vrai système d’acquisition fondé sur la recherche locale, la preuve de chantier et le suivi commercial.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Comment savoir si mes leads isolation sont rentables ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Il faut suivre leur provenance, leur taux de qualification, leur transformation en devis puis en signature, ainsi que la marge des chantiers obtenus. Le coût par lead seul ne suffit pas.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleIsolationStrategieMarketing2026;
