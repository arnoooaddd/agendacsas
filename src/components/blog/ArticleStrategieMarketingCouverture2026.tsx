import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "invisibilite-couverture", label: "Pourquoi beaucoup d’entreprises de couverture restent invisibles" },
  { id: "acquisition-clients-couverture", label: "Partir des bonnes intentions de recherche" },
  { id: "strategie-marketing-couverture", label: "Les piliers d’une stratégie rentable" },
  { id: "site-internet-couvreur", label: "Le site doit vendre la confiance" },
  { id: "referencement-local-toiture", label: "Le rôle clé du référencement local" },
  { id: "publicite-couverture", label: "Quand la publicité devient utile" },
  { id: "suivi-commercial-couverture", label: "Le suivi commercial souvent oublié" },
  { id: "feuille-route-90-jours", label: "Feuille de route 90 jours" },
  { id: "quand-se-faire-accompagner", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq", label: "FAQ" },
];

const ArticleStrategieMarketingCouverture2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        En couverture, la croissance ne dépend plus seulement du bouche-à-oreille. Les entreprises les plus solides structurent un système entre visibilité locale, preuve chantier, demandes entrantes et suivi commercial.
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

    <section id="invisibilite-couverture" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Pourquoi beaucoup d’entreprises de couverture restent invisibles malgré un vrai savoir-faire</h2>
      <p className="mb-4 text-muted-foreground">Beaucoup de couvreurs réalisent de bons chantiers mais restent faibles sur la manière de mettre leur expertise en marché. Le problème ne vient pas toujours du volume de recherche. Il vient souvent du fait que la promesse est floue, les preuves trop faibles et le parcours de conversion mal structuré.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>Le site n’explique pas clairement les spécialités traitées.</li>
        <li>Les zones d’intervention sont peu visibles.</li>
        <li>Les réalisations ne rassurent pas assez.</li>
        <li>Les demandes entrantes sont mal filtrées.</li>
        <li>Le suivi après formulaire ou appel est irrégulier.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Dans la couverture, le problème n’est presque jamais uniquement le trafic. Il se situe souvent entre la promesse, la réassurance, la qualification et la vitesse de rappel.</p>
    </section>

    <section id="acquisition-clients-couverture" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Acquisition clients couverture : partir des bonnes intentions de recherche</h2>
      <p className="mb-4 text-muted-foreground">Une stratégie efficace commence par une distinction simple entre les intentions de recherche. Tous les prospects ne cherchent pas la même prestation ni le même niveau d’urgence.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Urgence</strong> : fuite, infiltration, tuile cassée, bâchage, sinistre.</li>
        <li><strong>Projet de rénovation</strong> : réfection complète, zinguerie, isolation, étanchéité.</li>
        <li><strong>Projet à forte valeur</strong> : copropriétés, chantiers complexes, toiture avec solaire.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Si tout renvoie vers une seule page générique, vous perdez en référencement et en conversion. Une entreprise bien structurée relie pages métier, pages locales, preuves chantier et formulaire simple.</p>
    </section>

    <section id="strategie-marketing-couverture" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Les piliers d’une stratégie marketing couverture rentable</h2>
      <p className="mb-4 text-muted-foreground">Pour trouver des clients de manière plus prévisible, une entreprise de couverture doit construire un socle cohérent plutôt que multiplier les actions isolées.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Un site orienté conversion</strong> avec des pages métier claires.</li>
        <li><strong>Un référencement local solide</strong> sur les bonnes zones et prestations.</li>
        <li><strong>Un contenu de réassurance</strong> : avant/après, réalisations, réponses aux objections.</li>
        <li><strong>Une acquisition payante ciblée</strong> quand le marché ou l’objectif l’exige.</li>
        <li><strong>Un traitement commercial discipliné</strong> derrière chaque demande.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">L’enjeu n’est pas juste de générer plus de contacts, mais de générer des demandes compatibles avec vos équipes, vos marges et vos objectifs de chantier.</p>
    </section>

    <section id="site-internet-couvreur" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Le site internet d’un couvreur doit vendre la confiance avant de vendre le devis</h2>
      <p className="mb-4 text-muted-foreground">Un prospect compare souvent plusieurs entreprises de toiture dans la même journée. Votre site doit donc réduire le doute immédiatement.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>spécialités exactes : rénovation, fuite, zinguerie, isolation, toiture plate ou inclinée ;</li>
        <li>zones d’intervention réelles ;</li>
        <li>photos de chantiers crédibles et contextualisées ;</li>
        <li>avis et éléments de preuve ;</li>
        <li>appels à l’action adaptés à l’urgence ou à la demande de devis.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Exemple concret : un couvreur intervenant à Annecy, Chambéry et Aix-les-Bains aura intérêt à relier ses pages locales à des chantiers comparables et à un formulaire court plutôt qu’à une page généraliste unique.</p>
    </section>

    <section id="referencement-local-toiture" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Le référencement local reste le levier le plus rentable pour une entreprise de toiture</h2>
      <p className="mb-4 text-muted-foreground">Pour beaucoup d’acteurs de la couverture, le référencement local capte la demande la plus chaude. Encore faut-il travailler les bons signaux.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>optimisation de la fiche Google Business Profile ;</li>
        <li>avis récents et détaillés ;</li>
        <li>pages locales utiles et non dupliquées ;</li>
        <li>contenus qui répondent aux questions concrètes des prospects ;</li>
        <li>maillage entre services, zones et réalisations.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Le référencement local en couverture ne consiste pas à poser quelques mots-clés. Il sert à montrer que votre entreprise est légitime sur un territoire précis et sur des prestations précises. Pour approfondir ce levier, la <Link to="/gestion-seo" className="text-primary hover:underline">gestion SEO</Link> devient souvent le canal le plus stable.</p>
    </section>

    <section id="publicite-couverture" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Quand la publicité toiture devient utile — et quand elle fait perdre du budget</h2>
      <p className="mb-4 text-muted-foreground">La publicité peut accélérer les demandes en couverture, mais seulement si le site et le suivi commercial tiennent déjà la route.</p>
      <p className="mb-4 text-muted-foreground">Elle devient utile lorsque vous entrez sur une nouvelle zone, poussez une offre spécifique ou cherchez à remplir rapidement le planning.</p>
      <p className="mb-4 text-muted-foreground">Elle devient coûteuse quand les annonces renvoient vers une page trop générique, laissent entrer des demandes hors cible ou ne sont pas suivies jusqu’au devis puis à la signature.</p>
      <p className="text-muted-foreground">Dans la rénovation de l’habitat, une campagne n’est rentable que si le pilotage va jusqu’au chantier signé. C’est là que la <Link to="/gestion-communication" className="text-primary hover:underline">gestion de la communication</Link> et du trafic payant prend tout son sens.</p>
    </section>

    <section id="suivi-commercial-couverture" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Le point souvent oublié : le suivi commercial des demandes couverture</h2>
      <p className="mb-4 text-muted-foreground">Beaucoup d’entreprises pensent avoir un problème de marketing alors qu’elles ont surtout un problème de traitement des demandes. En couverture, quelques heures de délai peuvent suffire à perdre une opportunité.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>qualification immédiate du besoin ;</li>
        <li>tri entre urgence, projet standard et chantier à enjeu ;</li>
        <li>assignation claire au bon interlocuteur ;</li>
        <li>relance systématique des devis non signés ;</li>
        <li>lecture mensuelle du taux devis / signature par source.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Une demande mal suivie coûte souvent plus cher qu’un trafic insuffisant. C’est pour ça qu’une vraie stratégie marketing doit toujours être reliée à la mécanique commerciale.</p>
    </section>

    <section id="feuille-route-90-jours" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Feuille de route 90 jours pour structurer votre marketing toiture</h2>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Jours 1 à 30</strong> : audit du site, des sources de demandes, des avis, de la fiche Google et du traitement commercial.</li>
        <li><strong>Jours 31 à 60</strong> : refonte des pages métier critiques, clarification de l’offre, pages locales prioritaires et meilleures preuves.</li>
        <li><strong>Jours 61 à 90</strong> : déploiement contenu + SEO local + éventuel test publicitaire avec un suivi devis / signature réel.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">L’objectif n’est pas d’être présent partout, mais de construire un système d’acquisition plus prévisible.</p>
    </section>

    <section id="quand-se-faire-accompagner" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Quand faut-il se faire accompagner ?</h2>
      <p className="mb-4 text-muted-foreground">Si votre entreprise dépend trop du bouche-à-oreille, si les demandes sont irrégulières ou si les devis se transforment mal, le sujet dépasse souvent une simple action marketing.</p>
      <p className="mb-4 text-muted-foreground">Il faut alors revoir l’ensemble du parcours : positionnement, pages, visibilité locale, publicité éventuelle, qualification et suivi commercial.</p>
      <p className="mb-4 text-muted-foreground">Le bon accompagnement n’a pas pour rôle de faire “plus de com”. Il doit aider votre entreprise à relier visibilité, demandes sérieuses et rentabilité chantier.</p>
      <SectionCTA />
    </section>

    <section id="faq" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl font-bold text-foreground font-display md:text-3xl">FAQ</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quelle est la meilleure stratégie marketing pour une entreprise de couverture en 2026 ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">En général, la combinaison la plus rentable relie référencement local, site clair, preuves chantier, avis clients et suivi commercial rapide. La bonne priorité dépend ensuite de la zone et du type de chantiers visés.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Faut-il faire du Google Ads pour trouver des clients en couverture ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Oui, mais seulement si la page d’atterrissage, la qualification et le rappel sont bien structurés. Sinon, la publicité augmente surtout le volume de demandes peu rentables.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Pourquoi un site de couvreur ne génère-t-il pas assez de devis ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Le plus souvent parce que l’offre est mal expliquée, les preuves sont faibles, les pages trop généralistes ou le suivi commercial trop lent.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleStrategieMarketingCouverture2026;
