import { Link } from "react-router-dom";
import { BadgeCheck, Target, Building2, Lightbulb, TrendingUp, AlertTriangle, Rocket } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleMarketingMarqueBtpNotoriete2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Dans un marché du bâtiment où la concurrence s'intensifie sur chaque territoire, les entreprises du BTP ne peuvent plus compter uniquement sur le bouche-à-oreille pour remplir leur carnet de commandes.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Le marketing de marque devient un levier stratégique pour exister durablement, attirer des clients en phase avec vos valeurs et justifier des prix cohérents avec la qualité de vos prestations. C'est ce qu'on appelle le <strong>branding BTP</strong>.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#definition-branding" className="hover:text-primary transition-colors">1. Marketing de marque BTP : de quoi parle-t-on ?</a></li>
            <li><a href="#notoriete-strategique" className="hover:text-primary transition-colors">2. Pourquoi la notoriété de marque est stratégique</a></li>
            <li><a href="#piliers-marque" className="hover:text-primary transition-colors">3. Les piliers d'une marque forte</a></li>
            <li><a href="#strategie-marque" className="hover:text-primary transition-colors">4. Construire une stratégie de marque</a></li>
            <li><a href="#marque-acquisition" className="hover:text-primary transition-colors">5. Marque et système d'acquisition : le duo gagnant</a></li>
            <li><a href="#erreurs-branding" className="hover:text-primary transition-colors">6. Erreurs fréquentes</a></li>
            <li><a href="#cta-marque" className="hover:text-primary transition-colors">7. Quand le marketing de marque devient un avantage décisif</a></li>
            <li><a href="#faq-branding" className="hover:text-primary transition-colors">8. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="definition-branding">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <BadgeCheck size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Marketing de marque BTP : de quoi parle-t-on exactement ?
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le marketing de marque dans le BTP désigne l'ensemble des actions visant à construire une identité reconnaissable et une réputation solide pour une entreprise du bâtiment, au-delà de ses simples prestations techniques.
      </p>
      <p className="text-muted-foreground mb-4">
        Contrairement à une action publicitaire ponctuelle qui cherche un résultat immédiat, le marketing de marque s'inscrit dans le temps long. Il ne s'agit pas de vendre un chantier, mais de faire en sorte que votre entreprise soit celle à qui l'on pense naturellement quand un projet de rénovation ou de construction se présente.
      </p>
      <p className="text-muted-foreground mb-4">
        Concrètement, le marketing de marque repose sur trois piliers :
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Une identité visuelle cohérente : logo, couleurs, charte graphique, signalétique chantier</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Un discours et des valeurs qui vous différencient : savoir-faire, engagement qualité, proximité</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Une présence homogène sur tous les points de contact : site web, réseaux sociaux, devis, véhicules, tenues</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="notoriete-strategique">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Target size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi la notoriété de marque est stratégique dans le BTP
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Dans un secteur où la décision d'achat est longue, engageante financièrement et souvent émotionnelle, la notoriété de la marque joue un rôle déterminant. Un client qui a déjà croisé le nom de votre entreprise à plusieurs reprises — via un article de blog, une publication LinkedIn, un panneau de chantier ou une recommandation — sera beaucoup plus enclin à vous solliciter pour un devis.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Les avantages concrets d'une marque reconnue :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li><strong>Confiance renforcée</strong> : une marque cohérente rassure sur la solidité et le professionnalisme de l'entreprise</li>
          <li><strong>Différenciation</strong> : face à des offres techniques souvent similaires, la marque devient le vrai critère de choix</li>
          <li><strong>Fidélisation</strong> : les clients qui adhèrent à votre marque reviennent et vous recommandent spontanément</li>
          <li><strong>Justification du prix</strong> : une marque bien construite légitime des tarifs plus élevés que la moyenne du marché</li>
        </ul>
      </div>

      <p className="text-muted-foreground mt-6 mb-4">
        Dans la pratique, une entreprise de rénovation qui investit dans sa marque ne vend plus seulement des travaux — elle vend une promesse, une méthode et une expérience.
      </p>
    </section>

    <section className="mb-12" id="piliers-marque">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Building2 size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les piliers d'une marque forte dans le bâtiment
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Construire une marque ne s'improvise pas. Voici les éléments fondamentaux à structurer pour une entreprise du BTP qui souhaite se démarquer.
      </p>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Identité visuelle professionnelle</h3>
          <p className="text-muted-foreground">Votre identité visuelle est le premier contact avec un prospect. Un logo mal conçu ou des couleurs incohérentes envoient un signal négatif sur votre sérieux. Investissez dans une charte graphique solide et appliquez-la systématiquement sur votre site web, vos devis, vos véhicules, vos tenues de chantier et votre signalétique.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Discours de marque clair</h3>
          <p className="text-muted-foreground">Qu'est-ce qui rend votre entreprise unique ? Spécialisation dans un type de chantier, engagement sur les délais, savoir-faire artisanal d'excellence ? Ce positionnement doit transparaître dans chaque communication, du premier échange téléphonique au compte-rendu de chantier.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Cohérence multicanal</h3>
          <p className="text-muted-foreground">Votre marque doit parler le même langage partout : sur votre site internet, sur vos réseaux sociaux, dans vos propositions commerciales, sur vos panneaux de chantier. La cohérence crée la reconnaissance, et la reconnaissance génère la confiance.</p>
        </div>
      </div>
    </section>

    <section className="mb-12" id="strategie-marque">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Lightbulb size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment construire une stratégie de marque pour votre entreprise
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Une stratégie de marque efficace suit une méthode structurée. Voici les étapes clés pour une entreprise du bâtiment.
      </p>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">1. Définissez vos valeurs et votre positionnement</h3>
          <p className="text-muted-foreground">Avant de communiquer, sachez ce que vous voulez incarner. Êtes-vous l'entreprise de rénovation haut de gamme, le spécialiste de la rénovation énergétique, l'artisan de confiance au service des particuliers ? Ce positionnement guidera toutes vos actions.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">2. Connaissez votre cible</h3>
          <p className="text-muted-foreground">Tous les clients ne se valent pas. Une entreprise de menuiserie ne ciblera pas les mêmes prospects qu'un couvreur. Définissez clairement votre client idéal : type de projet, budget, secteur géographique, valeurs.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">3. Fixez des objectifs mesurables</h3>
          <p className="text-muted-foreground">Une stratégie de marque doit produire des résultats tangibles : notoriété locale, taux de transformation des devis, nombre de recommandations, visibilité sur les moteurs de recherche.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">4. Construisez une communication cohérente</h3>
          <p className="text-muted-foreground">Choisissez un ton — professionnel, proche, exigeant — et tenez-le. Appliquez la même charte graphique sur tous vos supports. Chaque point de contact doit renforcer votre image.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">5. Planifiez une présence régulière</h3>
          <p className="text-muted-foreground">Une marque se construit dans la durée. Publiez régulièrement du contenu sur votre site et vos réseaux. Montrez vos chantiers, vos méthodes, vos équipes. La régularité compte plus que la performance d'une seule publication.</p>
        </div>
      </div>
    </section>

    <section className="mb-12" id="marque-acquisition">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Marque et système d'acquisition : le duo gagnant
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le marketing de marque ne remplace pas un système d'acquisition client, il le renforce. Une entreprise de rénovation qui dispose à la fois d'une marque reconnue et d'un système de génération de leads structuré obtient des résultats bien supérieurs à ceux qui ne font que l'un ou l'autre.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le bon réflexe :</p>
        <p className="text-muted-foreground mb-0">Concrètement, une marque forte améliore le taux de transformation de vos actions publicitaires, réduit votre <strong>coût d'acquisition client</strong> et augmente la valeur de chaque chantier signé.</p>
      </div>
    </section>

    <section className="mb-12" id="erreurs-branding">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreurs fréquentes en branding BTP
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Quelques pièges dans lesquels tombent encore trop d'entreprises du bâtiment :
      </p>

      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <ul className="space-y-2 text-muted-foreground">
          <li><strong>Négliger l'identité visuelle</strong> : un logo fait maison ou des couleurs changeantes donnent une image amateur</li>
          <li><strong>Copier les concurrents</strong> : ressembler à tout le monde, c'est ne pas exister</li>
          <li><strong>Communiquer de manière irrégulière</strong> : trois publications en un mois puis six mois de silence nuisent à la mémorisation</li>
          <li><strong>Ne pas mesurer l'impact</strong> : sans suivi, impossible d'ajuster sa stratégie de marque</li>
          <li><strong>Confondre marque et logo</strong> : la marque dépasse largement le cadre visuel, elle inclut l'expérience client complète</li>
        </ul>
      </div>
    </section>

    <section className="mb-16" id="cta-marque">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">
          Quand le marketing de marque devient un avantage concurrentiel décisif
        </h2>
        <p className="text-muted-foreground mb-4">
          Pour une entreprise du BTP qui réalise plus d'un million d'euros de chiffre d'affaires annuel, le marketing de marque n'est plus une option. C'est le levier qui permet de sortir de la guerre des prix, d'attirer des clients plus exigeants et plus fidèles, et de structurer une croissance durable.
        </p>
        <p className="text-muted-foreground mb-4">
          Les dirigeants qui investissent dans leur marque constatent généralement deux effets : une meilleure qualité de prospects entrants et une capacité accrue à signer des chantiers sans passer par une mise en concurrence systématique.
        </p>
        <p className="text-muted-foreground mb-6">
          Vous souhaitez structurer la communication et la visibilité de votre entreprise ? Découvrez notre offre <Link to="/gestion-communication" className="text-primary hover:underline">gestion de communication</Link> pour les entreprises du bâtiment.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-branding">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Qu'est-ce que le marketing de marque pour une entreprise du bâtiment ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Le marketing de marque dans le BTP est l'ensemble des actions qui construisent la réputation et l'identité d'une entreprise de construction ou de rénovation. Il vise à créer une reconnaissance durable auprès des clients potentiels, au-delà des campagnes publicitaires ponctuelles, en travaillant l'identité visuelle, le discours et la cohérence des supports.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Le branding BTP est-il utile pour une petite entreprise artisanale ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui, et même essentiel. Une petite entreprise qui construit sa marque se différencie immédiatement des concurrents qui communiquent de manière générique. La marque est un outil de crédibilité accessible à toutes les tailles d'entreprise, à condition d'être appliquée avec constance sur l'ensemble des points de contact.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien de temps faut-il pour construire une marque reconnue dans le BTP ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les premiers effets visibles — reconnaissance locale, hausse des demandes spontanées — apparaissent généralement entre 6 et 12 mois d'efforts cohérents. Une marque solidement implantée se construit sur 2 à 3 ans de communication régulière et de qualité de service constante. L'essentiel est la régularité plus que l'intensité ponctuelle.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleMarketingMarqueBtpNotoriete2026;
