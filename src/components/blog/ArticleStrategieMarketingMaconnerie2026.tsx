import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "communiquer-sans-retour", label: "Pourquoi ça ne rapporte pas" },
  { id: "positionnement-chantier", label: "Clarifier le positionnement" },
  { id: "site-demandes-qualifiees", label: "Un site qui convertit" },
  { id: "seo-local-maconnerie", label: "SEO local utile" },
  { id: "preuve-chantier", label: "Preuve chantier" },
  { id: "traitement-commercial", label: "Marketing + commercial" },
  { id: "feuille-route-90-jours", label: "Feuille de route 90 jours" },
  { id: "faq-communication-maconnerie", label: "FAQ" },
];

export default function ArticleStrategieMarketingMaconnerie2026() {
  return (
    <>
      <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
        <p className="text-base leading-relaxed text-foreground">
          Une stratégie marketing maçonnerie rentable ne consiste pas à publier plus. Elle relie visibilité locale, preuve chantier, qualification des demandes et suivi commercial jusqu’au devis signé.
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-primary/15 bg-primary/5 p-5 md:p-6">
        <p className="mb-0 leading-relaxed text-muted-foreground">
          Pour une entreprise de maçonnerie, la communication doit remplir le carnet de commandes avec des projets cohérents avec vos équipes, vos marges et votre zone d’intervention. En 2026, les acteurs qui performent relient leur présence digitale, leur preuve de savoir-faire et leur traitement commercial dans un système clair.
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-border bg-background p-5 lg:hidden">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">Sommaire</p>
        <nav aria-label="Sommaire mobile">
          <ol className="space-y-2 text-sm text-muted-foreground">
            {toc.map((item, index) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-primary">
                  {index + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <section id="communiquer-sans-retour" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Pourquoi beaucoup d’entreprises de maçonnerie communiquent sans vrai retour</h2>
        <p className="mb-4 text-muted-foreground">Beaucoup d’entreprises du gros œuvre ou de la rénovation structurelle investissent un peu partout : site web, réseaux sociaux, annuaires, parfois Google Ads. Pourtant, les résultats restent décevants.</p>
        <p className="mb-4 text-muted-foreground">Le problème vient rarement d’un seul levier. Dans la maçonnerie, la faiblesse se situe souvent entre la promesse, la précision de l’offre et le traitement des contacts entrants.</p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>Le site présente l’entreprise, mais ne montre pas clairement les types de chantiers visés.</li>
          <li>Les photos existent, mais ne rassurent pas sur la capacité à gérer un projet complet.</li>
          <li>Les demandes arrivent, mais elles sont mal triées ou rappelées trop tard.</li>
          <li>La communication parle de “travaux tous corps d’état” alors que l’entreprise est rentable sur certains chantiers précis.</li>
        </ul>
        <p className="text-muted-foreground">Dans le BTP, le problème n’est presque jamais uniquement le trafic. Il se situe souvent entre la promesse, la qualification et le traitement commercial.</p>
      </section>

      <section id="positionnement-chantier" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Commencer par clarifier votre positionnement chantier</h2>
        <p className="mb-4 text-muted-foreground">Avant de parler <strong>acquisition clients BTP</strong>, une entreprise de maçonnerie doit clarifier ce qu’elle veut vraiment vendre plus souvent.</p>
        <p className="mb-4 text-muted-foreground">Extensions, ouvertures de murs porteurs, reprises en sous-œuvre, dalles, terrasses, rénovation lourde ou gros œuvre neuf : tous ces chantiers n’ont pas la même valeur ni la même facilité de signature.</p>
        <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>Quels chantiers sont les plus rentables ?</li>
          <li>Quels chantiers voulez-vous développer dans les 12 prochains mois ?</li>
          <li>Quels profils de prospects avez-vous intérêt à attirer en priorité ?</li>
        </ul>
        <div className="rounded-xl border border-border bg-muted/30 p-6 md:p-7">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">Exemple terrain</p>
          <p className="mb-0 leading-relaxed text-muted-foreground">Une entreprise qui réalise surtout des extensions et reprises structurelles en rénovation ne doit pas communiquer comme un acteur généraliste. Elle doit montrer sa maîtrise technique, sa gestion des contraintes chantier et sa capacité à sécuriser un projet complexe.</p>
        </div>
      </section>

      <section id="site-demandes-qualifiees" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Construire un site qui transforme la crédibilité en demandes qualifiées</h2>
        <p className="mb-4 text-muted-foreground">Un bon site de maçonnerie ne sert pas seulement à “faire pro”. Il doit aider un particulier, un maître d’œuvre ou un prescripteur à comprendre rapidement si vous êtes le bon interlocuteur.</p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>Des pages dédiées aux prestations clés : extension, dalle béton, ouverture porteur, fondations, rénovation structurelle.</li>
          <li>Des exemples de chantiers avec contexte, contrainte, solution apportée et résultat.</li>
          <li>Des zones d’intervention clairement indiquées.</li>
          <li>Des formulaires simples, reliés à un vrai suivi commercial.</li>
          <li>Des appels à l’action orientés projet : demande d’étude, demande de devis, échange technique.</li>
        </ul>
        <p className="mb-4 text-muted-foreground">Une entreprise qui intervient sur des projets à plusieurs dizaines de milliers d’euros n’a pas besoin de beaucoup de formulaires. Elle a besoin de quelques points de contact bien placés et d’une promesse claire.</p>
        <p className="text-muted-foreground">Si votre site mélange tous vos services sans hiérarchie, vous diluez votre message. Pour aller plus loin, voyez aussi les <Link to="/blog/site-web-btp-erreurs-coutent-demandes-devis-2026" className="text-primary hover:underline">erreurs de site web BTP qui coûtent des demandes de devis</Link>.</p>
      </section>

      <section id="seo-local-maconnerie" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Travailler la visibilité locale et le SEO sur des requêtes à intention réelle</h2>
        <p className="mb-4 text-muted-foreground">Le référencement ne consiste pas à publier des dizaines d’articles génériques sur le bâtiment. Pour une entreprise de maçonnerie, la <strong>stratégie marketing BTP</strong> la plus utile consiste à capter les recherches qui précèdent une vraie prise de contact.</p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>la visibilité locale autour de la fiche Google Business Profile et des pages zone ;</li>
          <li>les pages services qui répondent à une intention de devis ;</li>
          <li>les contenus de réassurance qui lèvent les freins avant la demande.</li>
        </ul>
        <p className="mb-4 text-muted-foreground">Des requêtes comme “entreprise de maçonnerie + ville”, “ouverture mur porteur prix”, “extension maison maçonnerie” ou “dalle béton devis” sont souvent plus rentables que des mots-clés trop larges.</p>
        <p className="text-muted-foreground">Si vous voulez <strong>trouver des clients BTP</strong> de manière plus stable, votre SEO doit être lié à vos vraies offres, à vos secteurs géographiques et à vos cas concrets.</p>
      </section>

      <section id="preuve-chantier" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Utiliser la preuve chantier comme levier de conversion</h2>
        <p className="mb-4 text-muted-foreground">Dans la maçonnerie, la confiance se gagne rarement avec de grandes promesses marketing. Elle se gagne avec des preuves lisibles.</p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>Avant / après quand c’est pertinent.</li>
          <li>Explication courte du besoin du prospect.</li>
          <li>Détail de la solution technique retenue.</li>
          <li>Photos propres, légendées, non mélangées avec des visuels génériques.</li>
          <li>Témoignage ou validation du maître d’ouvrage quand c’est possible.</li>
        </ul>
        <p className="text-muted-foreground">Cette logique fonctionne sur le site, Google, les réseaux sociaux et dans le suivi commercial. Pour générer des prospects rénovation ou maçonnerie plus qualifiés, la preuve chantier vaut souvent plus qu’une communication trop institutionnelle.</p>
      </section>

      <section id="traitement-commercial" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Ne pas séparer marketing et traitement commercial</h2>
        <p className="mb-4 text-muted-foreground">Beaucoup d’entreprises pensent encore que le marketing s’arrête au moment où le téléphone sonne. C’est une erreur coûteuse.</p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>réponse rapide sur les demandes entrantes, idéalement sous 15 à 30 minutes ouvrées ;</li>
          <li>qualification minimale : type de chantier, localisation, budget, délai, niveau de maturité ;</li>
          <li>catégorisation dans un CRM ou un suivi partagé ;</li>
          <li>relances planifiées pour les projets non signés ;</li>
          <li>mesure du taux de transformation par source.</li>
        </ul>
        <p className="text-muted-foreground">Une stratégie marketing rénovation ou BTP devient rentable quand l’entreprise sait relier source du contact, qualité du projet, volume de devis et chiffre signé. Sinon, elle pilote à l’intuition.</p>
      </section>

      <section id="feuille-route-90-jours" className="mb-12 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quelle feuille de route 90 jours pour une entreprise de maçonnerie ?</h2>
        <p className="mb-4 text-muted-foreground">Pour structurer l’acquisition sans vous disperser, avancez en trois temps.</p>
        <h3 className="mb-3 mt-6 text-xl font-bold text-foreground font-display">Semaines 1 à 3 : cadrer</h3>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>identifier 2 à 4 prestations prioritaires ;</li>
          <li>clarifier les zones d’intervention ;</li>
          <li>définir les critères d’un bon prospect ;</li>
          <li>auditer le site, la fiche Google et le suivi commercial.</li>
        </ul>
        <h3 className="mb-3 mt-6 text-xl font-bold text-foreground font-display">Semaines 4 à 8 : renforcer les fondations</h3>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>créer ou refondre les pages services stratégiques ;</li>
          <li>mettre en ligne 3 à 5 références chantier solides ;</li>
          <li>corriger les points de friction sur les formulaires et appels à l’action ;</li>
          <li>mettre en place un suivi des demandes.</li>
        </ul>
        <h3 className="mb-3 mt-6 text-xl font-bold text-foreground font-display">Semaines 9 à 12 : accélérer</h3>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>travailler le SEO local sur les requêtes prioritaires ;</li>
          <li>tester un levier payant si les fondations sont prêtes ;</li>
          <li>mesurer les taux de contact, de rendez-vous et de devis ;</li>
          <li>réallouer l’effort vers les sources les plus rentables.</li>
        </ul>
        <p className="mb-4 text-muted-foreground">Cette approche évite de lancer de la publicité sur un site qui ne convertit pas ou de publier du contenu sans lien avec les chantiers que vous voulez réellement signer.</p>
        <p className="mb-4 text-muted-foreground">Si vous voulez passer d’une communication diffuse à un vrai système d’acquisition, l’enjeu n’est pas simplement d’être plus visible : c’est d’attirer les bons projets, de mieux les qualifier et de soutenir la rentabilité des chantiers signés.</p>
        <SectionCTA />
      </section>

      <section id="faq-communication-maconnerie" className="scroll-mt-28">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground font-display">FAQ : communication et acquisition pour une entreprise de maçonnerie</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-semibold text-foreground">Quels canaux prioriser pour une entreprise de maçonnerie en 2026 ?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">En général, il faut prioriser le site web, la fiche Google Business Profile, les pages services locales, les références chantier puis les leviers payants. Les réseaux sociaux seuls suffisent rarement à générer des demandes régulières et qualifiées.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-semibold text-foreground">Le SEO est-il vraiment utile pour trouver des clients en maçonnerie ?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Oui, à condition de cibler des requêtes liées à vos prestations et à votre zone. Un SEO trop générique génère peu de demandes utiles. Un SEO orienté intention de projet peut devenir un vrai levier commercial.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-semibold text-foreground">Faut-il lancer Google Ads tout de suite ?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Pas forcément. Si votre site, vos pages services et votre suivi commercial sont faibles, la publicité risque surtout d’acheter du bruit. Il vaut mieux sécuriser la conversion avant d’augmenter le trafic.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4" className="rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-semibold text-foreground">Comment savoir si la communication est rentable ?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Il faut suivre au minimum la source des demandes, leur qualité, le nombre de rendez-vous obtenus, les devis émis et le chiffre d’affaires signé. Sans cette chaîne, il est impossible de juger la vraie performance d’un canal.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
