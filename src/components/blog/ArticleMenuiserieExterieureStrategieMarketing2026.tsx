import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "pourquoi-menuiserie-visible-sans-devis", label: "Pourquoi certaines entreprises restent visibles sans générer assez de devis" },
  { id: "structurer-strategie-marketing-menuiserie", label: "Structurer une vraie stratégie marketing menuiserie extérieure" },
  { id: "site-internet-menuiserie-exterieure", label: "Le site internet doit rassurer et filtrer" },
  { id: "seo-local-menuiserie-exterieure", label: "SEO local, fiche Google et contenus" },
  { id: "publicite-menuiserie-exterieure", label: "Quand la publicité devient rentable" },
  { id: "erreurs-acquisition-menuiserie", label: "Les erreurs les plus fréquentes" },
  { id: "quand-se-faire-accompagner-menuiserie", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-menuiserie-exterieure", label: "FAQ" },
];

const ArticleMenuiserieExterieureStrategieMarketing2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        En 2026, une entreprise de menuiserie extérieure ne peut plus compter uniquement sur sa notoriété locale ou le bouche-à-oreille. La performance vient d&apos;un système qui relie visibilité, réassurance, qualification et suivi commercial.
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

    <section id="pourquoi-menuiserie-visible-sans-devis" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Pourquoi certaines entreprises de menuiserie extérieure restent visibles sans générer assez de devis</h2>
      <p className="mb-4 text-muted-foreground">Beaucoup d&apos;entreprises du secteur investissent dans un site, quelques campagnes ou une présence sociale, mais sans logique d&apos;ensemble. Résultat : du trafic, peu de demandes exploitables et un suivi commercial encore trop dépendant des habitudes terrain.</p>
      <p className="mb-4 text-muted-foreground">Dans la menuiserie extérieure, le problème n&apos;est presque jamais uniquement le trafic. Il se situe souvent entre la promesse, la qualification et le traitement commercial. Une entreprise peut recevoir des contacts pour des petits chantiers peu rentables, ou des demandes mal cadrées qui occupent les équipes sans produire de marge.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>Le site ne précise pas assez clairement les projets réellement recherchés.</li>
        <li>Les zones d&apos;intervention ne sont pas assez visibles.</li>
        <li>Les preuves de sérieux restent trop faibles : avis, réalisations, certifications, process.</li>
        <li>Les formulaires laissent entrer trop de demandes peu qualifiées.</li>
        <li>Le rappel commercial manque de vitesse ou de méthode.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Pour une entreprise qui pose fenêtres, baies vitrées, portes d&apos;entrée ou fermetures, la stratégie marketing doit donc servir à sélectionner et convertir, pas seulement à occuper le terrain digital.</p>
    </section>

    <section id="structurer-strategie-marketing-menuiserie" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Structurer une vraie stratégie marketing menuiserie extérieure</h2>
      <p className="mb-4 text-muted-foreground">La base consiste à partir des objectifs business. Cherchez-vous plus de devis particuliers sur une zone donnée ? Souhaitez-vous augmenter les demandes sur la rénovation énergétique ? Voulez-vous pousser des gammes plus rentables comme l&apos;aluminium sur mesure ou les baies grand format ?</p>
      <p className="mb-4 text-muted-foreground">Une stratégie marketing rénovation efficace pour la menuiserie extérieure doit aligner les cibles prioritaires, les offres à pousser, les zones réellement rentables, les canaux d&apos;acquisition à activer et la capacité de l&apos;équipe à traiter les demandes entrantes.</p>
      <div className="rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">Exemple terrain</p>
        <p className="text-muted-foreground">Une entreprise qui pose principalement des fenêtres PVC et aluminium dans un rayon de 40 km n&apos;a pas intérêt à communiquer trop large. Elle doit concentrer sa visibilité sur les requêtes locales, ses réalisations pertinentes et des appels à l&apos;action adaptés au type de projet qu&apos;elle veut vraiment signer.</p>
      </div>
    </section>

    <section id="site-internet-menuiserie-exterieure" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Le site internet doit rassurer, filtrer et faire avancer la demande</h2>
      <p className="mb-4 text-muted-foreground">Un site web de menuiserie extérieure performant ne doit pas seulement être propre visuellement. Il doit faire progresser le prospect vers la prise de contact tout en aidant l&apos;entreprise à récupérer des informations utiles pour qualifier l&apos;opportunité.</p>
      <p className="mb-4 text-muted-foreground">Les pages les plus rentables sont souvent celles qui répondent à une intention claire : remplacement de fenêtres, pose de baie vitrée, changement de porte d&apos;entrée, rénovation énergétique ou menuiserie aluminium sur mesure.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>une promesse claire ;</li>
        <li>des visuels de chantiers réels ;</li>
        <li>des éléments de réassurance concrets ;</li>
        <li>une explication simple du déroulé du projet ;</li>
        <li>un formulaire devis avec les bons champs de qualification.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Une entreprise qui intervient sur plusieurs villes a aussi intérêt à créer des pages locales solides. Cela aide le référencement local, mais surtout la cohérence entre la recherche du prospect et la réponse apportée. Sur ce point, un accompagnement en <Link to="/creation-site-internet" className="text-primary hover:underline">création de site internet</Link> ou en optimisation de pages métier peut rapidement faire la différence.</p>
    </section>

    <section id="seo-local-menuiserie-exterieure" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">SEO local, fiche Google et contenus : le trio qui construit une visibilité durable</h2>
      <p className="mb-4 text-muted-foreground">Pour générer des demandes de manière plus stable, une entreprise de menuiserie extérieure doit travailler son référencement local. Cela concerne le site, la fiche Google Business Profile et les contenus capables de répondre aux vraies questions des prospects.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>les prestations : pose de fenêtres, baies vitrées, portes d&apos;entrée, volets, coulissants ;</li>
        <li>les matériaux : PVC, aluminium, bois, mixte ;</li>
        <li>les zones géographiques ;</li>
        <li>les sujets liés à l&apos;isolation, à la sécurité ou au budget ;</li>
        <li>les critères de choix avant devis.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Une fiche Google Business Profile bien pilotée reste un levier fort. Avis récents, photos de chantiers, catégories cohérentes, zones desservies et régularité des mises à jour influencent directement la qualité des prises de contact locales. Pour les entreprises qui veulent consolider ce socle, la <Link to="/gestion-seo" className="text-primary hover:underline">gestion SEO</Link> devient un levier de demande, pas juste de visibilité.</p>
    </section>

    <section id="publicite-menuiserie-exterieure" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Quand la publicité devient rentable dans la menuiserie extérieure</h2>
      <p className="mb-4 text-muted-foreground">La publicité digitale peut accélérer les résultats, mais elle devient vite coûteuse si le pilotage est superficiel. Lancer des campagnes sans filtrage ni suivi CRM revient souvent à acheter de l&apos;activité non rentable.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>des offres ou angles précis ;</li>
        <li>des zones d&apos;intervention limitées ;</li>
        <li>des landing pages cohérentes avec les annonces ;</li>
        <li>une qualification minimale des demandes ;</li>
        <li>un rappel commercial rapide et structuré.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Si les campagnes génèrent des leads mais que peu de devis aboutissent, il faut lire la performance jusqu&apos;au bout : coût par demande, coût par devis, taux de transformation et valeur moyenne des chantiers signés. C&apos;est cette lecture qui permet d&apos;arbitrer intelligemment les budgets de <Link to="/gestion-communication" className="text-primary hover:underline">gestion de la communication</Link>.</p>
    </section>

    <section id="erreurs-acquisition-menuiserie" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Les erreurs les plus fréquentes dans l&apos;acquisition client pour la menuiserie extérieure</h2>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>communiquer sur tout au lieu de prioriser les offres les plus profitables ;</li>
        <li>envoyer le trafic vers une page d&apos;accueil trop générale ;</li>
        <li>négliger les avis, les photos et les cas concrets de chantier ;</li>
        <li>mesurer les clics mais pas la qualité des demandes ;</li>
        <li>laisser les commerciaux traiter les contacts sans script, sans relance et sans visibilité CRM.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Dans une entreprise déjà établie, ces erreurs coûtent cher : elles saturent les équipes, brouillent la lecture des canaux performants et ralentissent la croissance.</p>
    </section>

    <section id="quand-se-faire-accompagner-menuiserie" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Quand faut-il se faire accompagner ?</h2>
      <p className="mb-4 text-muted-foreground">Un accompagnement devient pertinent quand l&apos;entreprise a déjà une offre claire, une équipe capable d&apos;absorber plus de demandes, mais pas encore un système d&apos;acquisition assez lisible pour scaler proprement.</p>
      <p className="mb-4 text-muted-foreground">C&apos;est souvent le cas quand le volume de devis dépend encore trop des recommandations, quand le site existe mais convertit mal, quand les campagnes ont déjà été testées sans vraie rentabilité ou quand la direction veut mieux connecter marketing, qualification et suivi commercial. L&apos;enjeu n&apos;est pas d&apos;ajouter une action isolée, mais de structurer un système cohérent avec le terrain et les objectifs de chiffre d&apos;affaires.</p>
      <SectionCTA />
    </section>

    <section id="faq-menuiserie-exterieure" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl font-bold text-foreground font-display md:text-3xl">FAQ sur la stratégie marketing d&apos;une entreprise de menuiserie extérieure</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Comment trouver plus de clients en menuiserie extérieure sans dépendre uniquement du bouche-à-oreille ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Il faut combiner référencement local, site web orienté conversion, fiche Google Business Profile bien tenue et suivi commercial rapide. Le bouche-à-oreille reste utile, mais il ne suffit pas pour stabiliser l&apos;acquisition.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quel canal marketing est le plus rentable pour une entreprise de fenêtres ou portes d&apos;entrée ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Il n&apos;existe pas de réponse universelle. Le SEO local et Google Business Profile sont souvent très rentables sur la durée. La publicité peut accélérer les résultats si elle est cadrée par zone, par offre et par qualité de demande.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Pourquoi un site web de menuiserie extérieure peut-il générer du trafic sans produire assez de devis ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Souvent parce que la promesse est trop vague, les preuves sont insuffisantes, les pages ne répondent pas à une intention claire ou les formulaires ne qualifient pas assez les besoins. Le trafic n&apos;a de valeur que s&apos;il avance vers une vraie opportunité commerciale.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleMenuiserieExterieureStrategieMarketing2026;
