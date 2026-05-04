import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "pourquoi-actions-dispersent", label: "Pourquoi les actions dispersées ne suffisent plus" },
  { id: "google-ads-capte-demande", label: "1. Capter la demande avec Google Ads" },
  { id: "site-seo-pages-metier", label: "2. Transformer le site en levier d'acquisition" },
  { id: "preuves-contenus-confiance", label: "3. Publier des preuves qui rassurent" },
  { id: "lead-magnet-nurturing", label: "4. Structurer le nurturing" },
  { id: "crm-rappel-qualification", label: "5. Réduire les pertes entre lead et rendez-vous" },
  { id: "pilotage-priorites-2026", label: "6. Piloter les bonnes métriques" },
  { id: "plan-action-90-jours", label: "Plan d'action 90 jours" },
  { id: "quand-se-faire-accompagner", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-actions-marketing-btp", label: "FAQ" },
];

const ArticleActionsMarketingBtpDemandesQualifiees2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        Une entreprise du BTP ne manque pas toujours d&apos;idées marketing. Elle manque plus souvent d&apos;un système clair pour relier visibilité, qualification des demandes et chiffre d&apos;affaires signé.
      </p>
    </div>

    <div className="mb-8 rounded-xl border border-primary/15 bg-primary/5 p-5 md:p-6">
      <p className="text-muted-foreground leading-relaxed mb-0">
        En 2026, les actions les plus rentables sont celles qui améliorent à la fois <strong>l&apos;entrée de nouvelles demandes</strong>, <strong>la qualité des contacts</strong> et <strong>la vitesse de traitement commercial</strong>. Dans le BTP, le problème n&apos;est presque jamais uniquement le trafic. Il se situe souvent entre la promesse, le filtrage et le suivi.
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

    <section id="pourquoi-actions-dispersent" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Pourquoi les actions marketing dispersées ne suffisent plus dans le BTP</h2>
      <p className="mb-4 text-muted-foreground">Beaucoup d&apos;entreprises du bâtiment accumulent des actions sans logique d&apos;ensemble : un peu de publicité, quelques posts, une refonte de site, un salon, parfois un CRM partiellement utilisé.</p>
      <p className="mb-4 text-muted-foreground">Le résultat est prévisible : de l&apos;activité marketing, mais trop peu de demandes sérieuses ou trop peu de rendez-vous réellement exploitables.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>les campagnes attirent parfois des contacts trop larges ou mal ciblés ;</li>
        <li>le site ne rassure pas assez pour faire passer à l&apos;étape suivante ;</li>
        <li>les commerciaux reçoivent des demandes mal préparées ;</li>
        <li>la direction ne sait pas quel levier produit vraiment des opportunités rentables.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Une stratégie marketing BTP rentable est un système qui relie acquisition, qualification, suivi commercial et rentabilité chantier. Les 6 actions ci-dessous servent précisément à construire ce système.</p>
    </section>

    <section id="google-ads-capte-demande" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">1. Capter la demande active avec des campagnes Google Ads mieux cadrées</h2>
      <p className="mb-4 text-muted-foreground">Google Ads reste un levier puissant pour récupérer de la demande déjà exprimée. Encore faut-il cibler les bonnes intentions, les bonnes zones et les bons types de chantiers.</p>
      <p className="mb-4 text-muted-foreground">Dans le BTP, une campagne rentable n&apos;est pas celle qui génère le plus de formulaires. C&apos;est celle qui alimente des projets cohérents avec votre niveau de panier moyen, votre zone d&apos;intervention et votre capacité commerciale.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>travailler des mots-clés orientés demande réelle plutôt que des requêtes trop générales ;</li>
        <li>séparer les campagnes par métier, zone et promesse commerciale ;</li>
        <li>aligner les annonces avec une page d&apos;atterrissage spécifique ;</li>
        <li>suivre la qualité des demandes, pas seulement le coût par lead.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Si vous hésitez encore entre les plateformes, relisez aussi <Link to="/blog/google-ads-meta-ads-entreprise-renovation" className="text-primary hover:underline">notre analyse Google Ads vs Meta Ads en rénovation</Link>.</p>
    </section>

    <section id="site-seo-pages-metier" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">2. Transformer votre site en levier d&apos;acquisition, pas en simple vitrine</h2>
      <p className="mb-4 text-muted-foreground">Un site utile en 2026 ne se contente pas de présenter l&apos;entreprise. Il aide le prospect à comprendre rapidement si vous êtes le bon acteur pour son projet, dans sa zone, avec son niveau d&apos;exigence.</p>
      <p className="mb-4 text-muted-foreground">Cela passe par des pages métier claires, des preuves chantiers, des messages précis et un parcours de conversion simple.</p>
      <div className="rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">À renforcer en priorité :</p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>des pages locales ou pages métier adaptées aux requêtes prioritaires ;</li>
          <li>des formulaires qui filtrent mieux le besoin et la maturité ;</li>
          <li>des CTA cohérents avec l&apos;étape du prospect ;</li>
          <li>un contenu SEO qui attire des décideurs déjà en réflexion active.</li>
        </ul>
      </div>
      <p className="mt-4 text-muted-foreground">Sur ce point, l&apos;article <Link to="/blog/site-web-renovation-levier-commercial-2026" className="text-primary hover:underline">comment utiliser un site web comme levier commercial</Link> complète très bien cette action.</p>
    </section>

    <section id="preuves-contenus-confiance" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">3. Publier des preuves concrètes qui rassurent avant même l&apos;appel</h2>
      <p className="mb-4 text-muted-foreground">Les contenus qui aident le plus dans le BTP ne sont pas toujours les plus “créatifs”. Ce sont souvent les plus rassurants : cas clients, réalisations détaillées, explications pédagogiques, comparatifs utiles, réponses aux objections fréquentes.</p>
      <p className="mb-4 text-muted-foreground">Quand un prospect hésite entre plusieurs entreprises, la différence se joue souvent sur la clarté du discours, la preuve de sérieux et la capacité à rendre le projet concret.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>avant / après contextualisés avec contraintes de chantier ;</li>
        <li>études de cas reliées à un vrai objectif business ou technique ;</li>
        <li>FAQ métier qui traitent les objections de prix, délai, garantie ou méthode ;</li>
        <li>témoignages qui parlent résultat, process et relation de confiance.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Exemple terrain : une entreprise de rénovation énergétique peut générer plus de demandes utiles simplement en ajoutant trois cas clients précis par type de chantier, là où une galerie photo seule ne dit presque rien au prospect.</p>
    </section>

    <section id="lead-magnet-nurturing" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">4. Mettre en place un contenu à forte valeur et un nurturing simple</h2>
      <p className="mb-4 text-muted-foreground">Toutes les demandes ne sont pas mûres au moment du premier contact. Certaines ont besoin de temps, d&apos;un cadre de décision ou d&apos;une preuve supplémentaire. C&apos;est là qu&apos;un livre blanc, une checklist, un mini-guide ou une séquence de relance utile deviennent stratégiques.</p>
      <p className="mb-4 text-muted-foreground">L&apos;objectif n&apos;est pas d&apos;empiler des automatisations. L&apos;objectif est de faire avancer les demandes tièdes sans monopoliser vos commerciaux sur des relances répétitives.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>proposer un contenu utile sur une vraie question métier ;</li>
        <li>segmenter les relances selon le besoin exprimé ;</li>
        <li>envoyer des contenus de réassurance plutôt que des relances vides ;</li>
        <li>réchauffer les projets sur 7 à 30 jours au lieu de les abandonner trop vite.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Pour aller plus loin, vous pouvez lire <Link to="/blog/lead-nurturing-renovation-convertir-demandes-chantiers-2026" className="text-primary hover:underline">notre méthode de lead nurturing en rénovation</Link>.</p>
    </section>

    <section id="crm-rappel-qualification" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">5. Réduire les pertes entre lead, rappel, rendez-vous et devis</h2>
      <p className="mb-4 text-muted-foreground">Beaucoup d&apos;entreprises pensent manquer de leads alors qu&apos;elles perdent surtout de la valeur entre la première demande et le premier vrai échange commercial.</p>
      <p className="mb-4 text-muted-foreground">Le sujet clé est souvent le même : délai de rappel, manque de qualification, CRM mal mis à jour, aucune lecture claire des motifs de perte.</p>
      <div className="rounded-xl border border-border bg-background p-6 shadow-card">
        <p className="mb-3 font-semibold text-foreground">Le minimum viable à mettre en place :</p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>un rappel rapide sur les demandes chaudes ;</li>
          <li>quelques questions fixes pour filtrer budget, zone, type de projet, maturité ;</li>
          <li>des statuts CRM clairs entre contact, rendez-vous, devis et perdu ;</li>
          <li>une analyse mensuelle des raisons de non-transformation.</li>
        </ul>
      </div>
      <p className="mt-4 text-muted-foreground">Si le volume est là mais que les rendez-vous n&apos;avancent pas, revoyez aussi <Link to="/blog/lead-renovation-demande-vraiment-qualifiee" className="text-primary hover:underline">comment reconnaître une demande vraiment qualifiée</Link>.</p>
    </section>

    <section id="pilotage-priorites-2026" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">6. Piloter les bonnes métriques pour renforcer vos priorités 2026</h2>
      <p className="mb-4 text-muted-foreground">Sans lecture business, une action marketing reste difficile à arbitrer. Les indicateurs utiles ne sont pas uniquement les clics ou les impressions. Ce sont ceux qui relient investissement, qualité des demandes et rentabilité commerciale.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>nombre de demandes réellement exploitables ;</li>
        <li>taux de prise de rendez-vous ;</li>
        <li>taux de devis ;</li>
        <li>taux de signature ;</li>
        <li>coût d&apos;acquisition par canal ;</li>
        <li>délai moyen entre premier contact et décision.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Une entreprise du BTP qui suit ces indicateurs peut arbitrer beaucoup plus vite : couper un canal faible, renforcer une page rentable, ajuster une relance ou relier enfin marketing et commerce.</p>
    </section>

    <section id="plan-action-90-jours" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Plan d&apos;action 90 jours pour passer de l&apos;intention à l&apos;exécution</h2>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Jours 1 à 30 : clarifier</h3>
      <ul className="mb-5 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>identifier vos métiers et zones prioritaires ;</li>
        <li>lister les principales sources actuelles de demandes ;</li>
        <li>repérer où les demandes se perdent dans le pipeline ;</li>
        <li>choisir 2 ou 3 indicateurs commerciaux à suivre sérieusement.</li>
      </ul>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Jours 31 à 60 : renforcer</h3>
      <ul className="mb-5 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>revoir une campagne Google Ads ou une page métier prioritaire ;</li>
        <li>publier un cas client ou une étude de cas convaincante ;</li>
        <li>mettre à jour le formulaire et les statuts CRM ;</li>
        <li>créer une petite séquence de relance utile sur les demandes tièdes.</li>
      </ul>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Jours 61 à 90 : arbitrer</h3>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>mesurer la qualité réelle des demandes entrantes ;</li>
        <li>observer quels contenus aident la conversion ;</li>
        <li>réallouer le budget vers les canaux les plus rentables ;</li>
        <li>formaliser un rythme mensuel marketing + commercial.</li>
      </ul>
    </section>

    <section id="quand-se-faire-accompagner" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quand faut-il se faire accompagner ?</h2>
      <p className="mb-4 text-muted-foreground">Si votre entreprise reçoit trop peu de demandes, ou au contraire reçoit des contacts mais transforme mal, le problème dépasse rarement un seul levier isolé.</p>
      <p className="mb-4 text-muted-foreground">À partir d&apos;un certain niveau d&apos;activité, le vrai enjeu consiste à faire travailler ensemble le site, les campagnes, les contenus, la qualification et le suivi commercial. C&apos;est précisément là qu&apos;un accompagnement structuré permet d&apos;aller plus vite et d&apos;éviter des mois de dispersion.</p>
      <SectionCTA />
    </section>

    <section id="faq-actions-marketing-btp" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground font-display">FAQ : actions marketing BTP et acquisition</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quelle est l&apos;action marketing la plus rentable pour une entreprise du BTP ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Il n&apos;y a pas une seule action magique. Le levier le plus rentable dépend de votre maturité, mais en pratique ce sont souvent les actions qui relient intention forte, page adaptée et traitement commercial rapide qui produisent les meilleurs résultats.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Faut-il lancer Google Ads ou travailler d&apos;abord le site et le SEO ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Si vous avez besoin de capter rapidement de la demande, Google Ads peut accélérer. Mais sans site clair, sans preuves et sans bon suivi, vous risquez surtout d&apos;acheter du bruit. Les deux doivent être pensés ensemble.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">À partir de quand une stratégie de nurturing devient-elle utile ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Dès que vous perdez des demandes tièdes ou que vos commerciaux manquent de temps pour relancer proprement. Même une séquence simple de rappel, SMS et contenu de réassurance peut déjà améliorer la conversion.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quels indicateurs faut-il regarder en priorité ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Commencez par les demandes réellement exploitables, le taux de rendez-vous, le taux de devis, le taux de signature et le coût d&apos;acquisition par canal. Ce sont eux qui permettent d&apos;arbitrer utilement vos actions marketing BTP.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleActionsMarketingBtpDemandesQualifiees2026;
