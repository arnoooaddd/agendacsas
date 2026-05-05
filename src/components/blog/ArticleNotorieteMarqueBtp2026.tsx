import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleNotorieteMarqueBtp2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Dans le bâtiment, la notoriété ne sert pas seulement à être plus visible. Elle conditionne la confiance, la qualité des demandes et votre capacité à être choisi avant même la comparaison finale.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          En 2026, les entreprises de rénovation qui ressortent durablement sont celles qui relient <strong>marque</strong>, <strong>preuves terrain</strong>, <strong>SEO</strong> et <strong>suivi commercial</strong> dans un système cohérent.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#notoriete-marque-btp-definition" className="hover:text-primary transition-colors">1. Ce que recouvre vraiment la notoriété de marque dans le BTP</a></li>
            <li><a href="#notoriete-developpement-commercial" className="hover:text-primary transition-colors">2. Pourquoi elle influence directement le développement commercial</a></li>
            <li><a href="#clarifier-positionnement" className="hover:text-primary transition-colors">3. Clarifier son positionnement avant de multiplier les canaux</a></li>
            <li><a href="#leviers-notoriete-btp" className="hover:text-primary transition-colors">4. Les 5 leviers qui construisent une notoriété solide</a></li>
            <li><a href="#mesurer-notoriete-utile" className="hover:text-primary transition-colors">5. Mesurer une notoriété utile</a></li>
            <li><a href="#feuille-route-90-jours" className="hover:text-primary transition-colors">6. Une feuille de route 90 jours</a></li>
            <li><a href="#quand-se-faire-accompagner" className="hover:text-primary transition-colors">7. Quand faut-il se faire accompagner ?</a></li>
            <li><a href="#faq-notoriete-btp" className="hover:text-primary transition-colors">8. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="notoriete-marque-btp-definition">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Qu&apos;appelle-t-on vraiment notoriété de marque dans le BTP ?
      </h2>
      <p className="text-muted-foreground mb-4">
        La notoriété de marque dans le BTP correspond au niveau de reconnaissance et de confiance dont bénéficie votre entreprise auprès des bons interlocuteurs : particuliers à fort potentiel, syndics, prescripteurs, architectes, partenaires locaux ou décideurs d&apos;actifs.
      </p>
      <p className="text-muted-foreground mb-4">
        Une notoriété utile n&apos;est pas une métrique décorative. C&apos;est un actif commercial qui permet de raccourcir la phase de réassurance, d&apos;améliorer la conversion de votre site et d&apos;augmenter la part de demandes déjà convaincues avant le premier échange.
      </p>
      <ul className="space-y-3 text-muted-foreground">
        <li>elle rend votre nom plus facile à retenir quand un besoin apparaît ;</li>
        <li>elle soutient la crédibilité au moment de la comparaison ;</li>
        <li>elle facilite la recommandation après chantier ;</li>
        <li>elle aide à défendre vos marges face à une concurrence plus banalisée.</li>
      </ul>
      <p className="text-muted-foreground mt-4">
        Dans la rénovation de l&apos;habitat, le problème n&apos;est presque jamais uniquement le trafic. Il se situe souvent entre la promesse perçue, la preuve apportée et le traitement commercial derrière. Une marque peu lisible génère rarement de la demande rentable, même avec un budget média correct.
      </p>
    </section>

    <section className="mb-12" id="notoriete-developpement-commercial">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Pourquoi la notoriété pèse directement sur votre développement commercial
      </h2>
      <p className="text-muted-foreground mb-4">
        Une entreprise peut très bien réaliser de bons chantiers et rester sous-radar sur son marché. Le résultat est simple : elle dépend davantage du bouche-à-oreille, subit des cycles irréguliers et laisse de la place à des concurrents parfois moins solides mais beaucoup plus visibles.
      </p>
      <ul className="space-y-3 text-muted-foreground mb-4">
        <li><strong>En amont</strong>, elle vous rend identifiable quand un besoin apparaît.</li>
        <li><strong>Pendant l&apos;évaluation</strong>, elle rassure au moment où le prospect compare plusieurs entreprises.</li>
        <li><strong>Au moment du devis</strong>, elle facilite la perception de sérieux, de spécialisation et de fiabilité.</li>
        <li><strong>Après chantier</strong>, elle nourrit la recommandation et la répétition des opportunités.</li>
      </ul>
      <p className="text-muted-foreground mb-0">
        Exemple concret : une entreprise de menuiserie extérieure à 3 M€ de chiffre d&apos;affaires peut générer un volume régulier de visites via Google Ads, mais continuer à perdre des rendez-vous si son nom n&apos;évoque rien, si ses réalisations sont mal valorisées et si ses avis ne soutiennent pas la promesse. La notoriété vient alors renforcer toute la chaîne, de la première impression à la signature.
      </p>
    </section>

    <section className="mb-12" id="clarifier-positionnement">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Commencer par clarifier votre positionnement avant de multiplier les canaux
      </h2>
      <p className="text-muted-foreground mb-4">
        Beaucoup d&apos;entreprises du bâtiment investissent dans des supports dispersés : un peu de réseaux sociaux, quelques campagnes, un site refondu, parfois une plaquette ou des salons. Le problème n&apos;est pas l&apos;outil. C&apos;est l&apos;absence de socle clair.
      </p>
      <p className="text-muted-foreground mb-4">Avant de chercher à gagner en visibilité, il faut cadrer quatre éléments :</p>
      <ul className="space-y-3 text-muted-foreground">
        <li>les typologies de clients ou prescripteurs à faire progresser ;</li>
        <li>la spécialité ou la promesse à associer immédiatement à votre nom ;</li>
        <li>les preuves à rendre visibles : réalisations, avis, labels, chiffres, méthode ;</li>
        <li>les situations de recherche dans lesquelles vous voulez être identifié.</li>
      </ul>
      <p className="text-muted-foreground mt-4 mb-0">
        Une entreprise de toiture, d&apos;isolation ou de rénovation globale n&apos;a pas intérêt à parler de tout pour tout le monde. Plus le territoire de marque est flou, plus la mémorisation s&apos;effondre.
      </p>
    </section>

    <section className="mb-12" id="leviers-notoriete-btp">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Les 5 leviers qui construisent une notoriété solide en rénovation et dans le BTP
      </h2>
      <h3 className="text-xl font-bold text-foreground font-display mb-3">1. Un site web qui transforme la visibilité en crédibilité</h3>
      <p className="text-muted-foreground mb-4">
        Votre site est souvent le premier endroit où votre notoriété se vérifie. Il doit faire ressortir rapidement vos métiers, vos zones d&apos;intervention, vos preuves terrain et les prochaines étapes pour demander un échange.
      </p>
      <p className="text-muted-foreground mb-4">
        Sur ce sujet, un <Link to="/gestion-seo" className="text-primary hover:underline">travail SEO structuré</Link> et une architecture orientée conversion comptent autant que le design.
      </p>

      <h3 className="text-xl font-bold text-foreground font-display mb-3">2. Une présence organique régulière sur les bons canaux</h3>
      <p className="text-muted-foreground mb-4">
        La notoriété se construit par répétition. Pour certaines entreprises, LinkedIn aide à exister auprès des prescripteurs et partenaires. Pour d&apos;autres, Google Business Profile, les pages locales et les contenus métier auront un impact plus direct.
      </p>
      <p className="text-muted-foreground mb-4">
        C&apos;est aussi pour cela qu&apos;une <Link to="/blog/referencement-btp-google-ia-generatives-2026" className="text-primary hover:underline">stratégie de référencement adaptée aux nouveaux usages de recherche</Link> devient un levier de marque, pas seulement un levier de trafic.
      </p>

      <h3 className="text-xl font-bold text-foreground font-display mb-3">3. Des contenus qui prouvent votre expertise</h3>
      <p className="text-muted-foreground mb-4">
        Articles, guides, FAQ métier, études de cas, comparatifs, retours chantier : une bonne stratégie de contenu ne parle pas seulement de l&apos;entreprise, elle répond aux questions que se posent vos futurs clients avant de vous consulter.
      </p>
      <p className="text-muted-foreground mb-4">
        Pour une société de rénovation énergétique, cela peut vouloir dire publier des contenus sur la qualification des projets, les délais, la coordination de chantier ou les écarts de devis selon le niveau de prestation.
      </p>

      <h3 className="text-xl font-bold text-foreground font-display mb-3">4. Les preuves sociales et terrain</h3>
      <p className="text-muted-foreground mb-4">
        Avis clients, références chantiers, témoignages, photos avant/après, labels, certifications : ce sont souvent eux qui transforment une marque “vue” en marque “retenue”. Sans ces preuves, la communication reste déclarative.
      </p>

      <h3 className="text-xl font-bold text-foreground font-display mb-3">5. Le suivi commercial des contacts déjà exposés à la marque</h3>
      <p className="text-muted-foreground mb-0">
        Si un prospect a vu votre entreprise plusieurs fois, a lu un article, consulté vos avis puis demandé un rappel, l&apos;expérience commerciale doit être au niveau. Une <Link to="/gestion-communication" className="text-primary hover:underline">gestion de communication pilotée avec une vraie logique d&apos;acquisition</Link> permet justement de ne pas dissocier visibilité et performance business.
      </p>
    </section>

    <section className="mb-12" id="mesurer-notoriete-utile">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Comment mesurer une notoriété utile sans se perdre dans des vanity metrics
      </h2>
      <p className="text-muted-foreground mb-4">
        Suivre uniquement les impressions ou les abonnés conduit souvent à de mauvaises décisions. Une entreprise de rénovation a besoin d&apos;indicateurs qui relient exposition et impact réel sur le pipeline.
      </p>
      <div className="bg-muted/40 rounded-2xl p-6 border border-border">
        <ul className="space-y-3 text-muted-foreground mb-0">
          <li>évolution des recherches de marque sur Google ;</li>
          <li>part des leads qui citent la marque spontanément ;</li>
          <li>volume de trafic direct ou brandé sur le site ;</li>
          <li>taux de conversion des visiteurs déjà exposés à votre nom ;</li>
          <li>qualité des demandes entrantes par canal ;</li>
          <li>délai de signature quand la marque est déjà connue avant le premier échange.</li>
        </ul>
      </div>
      <p className="text-muted-foreground mt-4 mb-0">
        La bonne lecture n&apos;est pas “avons-nous été plus visibles ?” mais plutôt : <strong>notre visibilité rend-elle la vente plus simple, plus rapide ou plus rentable ?</strong>
      </p>
    </section>

    <section className="mb-12" id="feuille-route-90-jours">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Une feuille de route 90 jours pour renforcer votre notoriété sans vous disperser
      </h2>
      <h3 className="text-xl font-bold text-foreground font-display mb-3">Jours 1 à 30 : poser le socle</h3>
      <ul className="space-y-3 text-muted-foreground mb-4">
        <li>clarifier votre positionnement et vos cibles prioritaires ;</li>
        <li>auditer le site, les pages clés, les avis et les preuves disponibles ;</li>
        <li>identifier les écarts entre votre promesse et votre perception actuelle.</li>
      </ul>
      <h3 className="text-xl font-bold text-foreground font-display mb-3">Jours 31 à 60 : rendre la marque visible de façon cohérente</h3>
      <ul className="space-y-3 text-muted-foreground mb-4">
        <li>mettre à niveau les pages stratégiques du site ;</li>
        <li>publier 2 à 4 contenus métier à forte utilité ;</li>
        <li>structurer la présence locale ou sociale sur les canaux prioritaires.</li>
      </ul>
      <h3 className="text-xl font-bold text-foreground font-display mb-3">Jours 61 à 90 : connecter notoriété et conversion</h3>
      <ul className="space-y-3 text-muted-foreground mb-0">
        <li>améliorer la collecte et la mise en avant des preuves sociales ;</li>
        <li>mettre en place un suivi des recherches de marque et des leads brandés ;</li>
        <li>aligner qualification commerciale, relance et reporting.</li>
      </ul>
    </section>

    <section className="mb-12" id="quand-se-faire-accompagner">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Quand faut-il se faire accompagner ?
      </h2>
      <p className="text-muted-foreground mb-4">
        Si votre entreprise est déjà connue par une partie du marché mais que cette reconnaissance ne se traduit pas en demandes sérieuses, le sujet dépasse souvent la simple communication. Il peut y avoir un problème de positionnement, de lisibilité digitale, de contenu, de preuve ou de suivi commercial.
      </p>
      <p className="text-muted-foreground mb-6">
        Si vous investissez déjà en acquisition mais que votre marque reste faible, vous payez probablement trop cher pour convaincre à chaque nouveau clic. Dans ce cas, travailler la notoriété permet de réduire la friction commerciale et de rendre vos autres leviers plus performants.
      </p>
      <SectionCTA
        title="Structurer une notoriété qui soutient vraiment l&apos;acquisition"
        subtitle="Chez Agendac, l&apos;enjeu n&apos;est pas seulement de faire parler de votre entreprise. Il s&apos;agit de construire une présence qui soutient la prise de rendez-vous, la confiance et la rentabilité des actions engagées."
        primaryButtonText="Découvrir notre gestion SEO"
        primaryButtonLink="/gestion-seo"
        secondaryButtonText="Voir notre gestion de communication"
        secondaryButtonLink="/gestion-communication"
      />
    </section>

    <section className="mb-12" id="faq-notoriete-btp">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        FAQ sur la notoriété de marque dans le BTP
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1" className="border border-border rounded-xl px-6">
          <AccordionTrigger className="text-left font-semibold text-foreground">Une petite entreprise du bâtiment peut-elle travailler sa notoriété sans gros budget ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui, à condition de se concentrer sur un positionnement clair, des preuves visibles et un nombre limité de canaux bien tenus. La cohérence compte souvent plus que la dépense brute.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border border-border rounded-xl px-6">
          <AccordionTrigger className="text-left font-semibold text-foreground">La notoriété sert-elle seulement aux grandes marques du secteur ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Non. Pour une entreprise locale ou régionale, elle aide à être choisie plus souvent, mieux recommandée et moins comparée uniquement sur le prix.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border border-border rounded-xl px-6">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quelle différence entre visibilité et notoriété ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            La visibilité correspond au fait d&apos;être vu. La notoriété ajoute la reconnaissance, la mémoire et la confiance. On peut avoir de la visibilité sans construire une vraie préférence de marque.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border border-border rounded-xl px-6">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quel est le lien entre notoriété et acquisition clients rénovation ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Une marque reconnue améliore le taux de clic, le taux de conversion et la qualité perçue des demandes entrantes. Elle rend l&apos;acquisition clients rénovation plus efficace à budget équivalent.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleNotorieteMarqueBtp2026;
