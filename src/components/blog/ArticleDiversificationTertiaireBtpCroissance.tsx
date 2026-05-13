import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, Building2, ClipboardList, Map, Target, TrendingUp } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleDiversificationTertiaireBtpCroissance = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Le marché du logement neuf traverse une crise inédite. Face à la guerre des prix et à la baisse des mises en chantier, les entreprises de rénovation et du BTP doivent diversifier leurs sources de revenus.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Le secteur tertiaire — hôtels, cliniques, écoles, bureaux, résidences seniors — offre un gisement de 996 millions de m² à transformer. Mais conquérir ce segment suppose une <strong>stratégie d'acquisition clients BTP</strong> adaptée à des cycles longs, des interlocuteurs multiples et des critères de sélection exigeants.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#residentiel-contraint" className="hover:text-primary transition-colors">1. Pourquoi le résidentiel devient un terrain contraint</a></li>
            <li><a href="#marche-tertiaire" className="hover:text-primary transition-colors">2. Le tertiaire : 996 millions de m² à transformer</a></li>
            <li><a href="#defis-acquisition" className="hover:text-primary transition-colors">3. Les trois défis de l'acquisition sur le tertiaire</a></li>
            <li><a href="#methode-4-etapes" className="hover:text-primary transition-colors">4. Comment structurer votre système d'acquisition</a></li>
            <li><a href="#erreurs" className="hover:text-primary transition-colors">5. Les erreurs fréquentes à éviter</a></li>
            <li><a href="#accompagnement" className="hover:text-primary transition-colors">6. Quand se faire accompagner ?</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">7. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <p className="text-muted-foreground mb-4">
      Le marché du logement neuf traverse une période difficile. Face à la baisse des mises en chantier et à la guerre des prix dans le résidentiel, de plus en plus d'entreprises du BTP regardent vers le tertiaire — hôtels, bureaux, établissements de santé, bâtiments éducatifs — pour diversifier leur portefeuille clients et sécuriser leur carnet de commandes.
    </p>
    <p className="text-muted-foreground mb-8">
      Mais conquérir ce segment ne s'improvise pas. Les cycles de décision sont plus longs, les interlocuteurs multiples, et les critères de sélection bien différents de ce que connaissent les entreprises habituées au résidentiel. Cet article décrypte les spécificités du marché tertiaire et vous donne une méthode concrète pour <strong>structurer votre acquisition clients sur ce segment porteur</strong>.
    </p>

    <section className="mb-12" id="residentiel-contraint">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi le résidentiel devient un terrain de plus en plus contraint
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le constat est partagé par tous les acteurs du bâtiment : le marché du logement neuf n'a jamais été aussi tendu. Entre la baisse historique des autorisations de construire, la hausse des taux d'intérêt et le durcissement des conditions d'octroi de crédit, les marges des entreprises du résidentiel se compriment année après année.
      </p>
      <p className="text-muted-foreground mb-4">
        Dans ce contexte, les donneurs d'ordre résidentiels raisonnent avant tout sur le prix. La performance technique, la qualité des matériaux ou la durabilité des solutions passent au second plan face à l'impératif budgétaire. Résultat : il devient difficile pour une entreprise de rénovation ou de construction de valoriser son expertise et de se différencier sur autre chose que le tarif.
      </p>
      <p className="text-muted-foreground mb-4">
        Ce n'est pas une fatalité, mais un signal clair : les entreprises qui veulent continuer à croître doivent regarder au-delà du marché résidentiel traditionnel.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-0">
          <strong>Le bon réflexe :</strong> Ne pas attendre que le résidentiel se redresse pour diversifier votre portefeuille. Les entreprises du BTP qui anticipent leur positionnement sur le tertiaire dès aujourd'hui construiront un avantage concurrentiel durable sur leurs confrères.
        </p>
      </div>
    </section>

    <section className="mb-12" id="marche-tertiaire">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Building2 size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le tertiaire : un marché de 996 millions de m² à transformer
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Avec près d'un milliard de mètres carrés de bâtiments tertiaires en France, le gisement est colossal. Hôtels, cliniques, écoles, immeubles de bureaux, résidences seniors, bâtiments sportifs : autant de typologies qui nécessitent des travaux de rénovation énergétique, de mise aux normes, d'extension ou de restructuration lourde.
      </p>
      <p className="text-muted-foreground mb-4">
        Plusieurs facteurs rendent ce marché structurellement porteur pour les années à venir :
      </p>
      <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
        <li>Le <strong>décret tertiaire</strong> impose une réduction progressive de la consommation énergétique des bâtiments de plus de 1 000 m², avec des échéances contraignantes dès 2030.</li>
        <li>Le <strong>décret BACS</strong> rend obligatoire le pilotage technique des installations de chauffage, climatisation et ventilation dans les bâtiments tertiaires.</li>
        <li>Les <strong>collectivités territoriales</strong> et les bailleurs sociaux engagent des programmes pluriannuels de rénovation lourde.</li>
        <li>Les <strong>établissements de santé et d'hébergement</strong> doivent moderniser leurs infrastructures pour répondre aux nouvelles normes de sécurité et de confort.</li>
      </ul>
      <p className="text-muted-foreground mb-4">
        Mais la différence fondamentale avec le résidentiel réside dans les critères de décision. Dans le tertiaire, le maître d'ouvrage ne choisit pas au prix le plus bas. Il choisit une solution qui tient ses promesses de performance, de durabilité et de conformité réglementaire sur la durée.
      </p>

      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-3">Ce que recherche un maître d'ouvrage tertiaire :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>Une entreprise capable de justifier d'une référence comparable dans le secteur tertiaire</li>
          <li>Une proposition qui démontre la maîtrise des contraintes réglementaires spécifiques</li>
          <li>Des garanties de performance et de suivi dans la durée</li>
          <li>Une capacité à intervenir en site occupé sans perturber l'activité</li>
          <li>Un diagnostic précis et documenté plutôt qu'un devis générique</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="defis-acquisition">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Target size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les trois défis d'une stratégie d'acquisition clients BTP sur le tertiaire
        </h2>
      </div>

      <p className="text-muted-foreground mb-6">
        Se positionner sur le tertiaire ne se résume pas à adapter un catalogue de prestations. C'est un changement de modèle commercial qui suppose de relever trois défis spécifiques.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-6">
        <h3 className="text-lg font-bold text-foreground font-display mb-3">1. Se faire connaître et reconnaître comme un interlocuteur tertiaire légitime</h3>
        <p className="text-muted-foreground mb-0">
          Dans le résidentiel, votre réputation se construit chantier par chantier, par le bouche-à-oreille et les avis en ligne. Dans le tertiaire, les décideurs ne vous trouveront pas spontanément. Ils vous cherchent en fonction de votre visibilité dans leurs propres circuits : salons professionnels, presse spécialisée, moteurs de recherche sur des requêtes métier. Une entreprise de rénovation qui veut exister sur le tertiaire doit construire une présence en ligne qui parle à ces donneurs d'ordre : contenu technique, études de cas, certifications, retours d'expérience documentés.
        </p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-6">
        <h3 className="text-lg font-bold text-foreground font-display mb-3">2. Démontrer une expertise plutôt qu'un savoir-faire générique</h3>
        <p className="text-muted-foreground mb-0">
          Les maîtres d'ouvrage tertiaires ne cherchent pas un exécutant, mais un partenaire technique qui comprend leurs enjeux. Un hôpital n'a pas les mêmes contraintes qu'un hôtel ou qu'un immeuble de bureaux. La réglementation incendie, les normes d'accessibilité, les contraintes d'exploitation en site occupé : chaque secteur tertiaire a ses spécificités. L'enjeu est de documenter et diffuser cette expertise à travers des contenus qui rassurent et convainquent en amont de la mise en concurrence.
        </p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <h3 className="text-lg font-bold text-foreground font-display mb-3">3. Structurer un processus commercial adapté aux cycles longs</h3>
        <p className="text-muted-foreground mb-0">
          Là où le résidentiel traite souvent une demande en quelques jours, le tertiaire impose des cycles de décision qui peuvent s'étendre sur plusieurs mois, voire un an. Les appels d'offres sont formalisés, les comités de décision multiples, et le niveau d'exigence documentaire élevé. Cela suppose de ne pas traiter les opportunités tertiaires avec les mêmes outils et le même rythme que le résidentiel. Un CRM bien paramétré, un suivi structuré des contacts, une relance professionnelle et une capacité à nourrir la relation dans la durée sont des prérequis.
        </p>
      </div>
    </section>

    <section className="mb-12" id="methode-4-etapes">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <ClipboardList size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment structurer votre système d'acquisition clients BTP sur le tertiaire
        </h2>
      </div>

      <p className="text-muted-foreground mb-6">
        Pour les entreprises déjà établies dans le résidentiel qui veulent ouvrir le tertiaire, la clé n'est pas de tout changer, mais d'ajouter une couche stratégique cohérente à leur dispositif existant. Voici une méthode en quatre étapes.
      </p>

      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-4">
        <h3 className="text-lg font-bold text-foreground font-display mb-2">1. Auditer vos références existantes</h3>
        <p className="text-muted-foreground mb-0">
          Vous avez probablement déjà réalisé des chantiers qui touchent au tertiaire sans les avoir valorisés comme tels. Un petit immeuble de bureaux, une extension d'école, une rénovation de maison de retraite : recensez toutes vos interventions qui sortent du cadre résidentiel pur. Ce sont vos premières preuves de légitimité.
        </p>
      </div>

      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-4">
        <h3 className="text-lg font-bold text-foreground font-display mb-2">2. Créer des contenus qui parlent aux décideurs tertiaires</h3>
        <p className="text-muted-foreground mb-0">
          Un site vitrine ne suffit pas. Produisez des études de cas documentées, des fiches techniques, des retours sur contraintes réglementaires spécifiques. Ces contenus sont votre meilleur outil de <strong>génération de leads BTP</strong> qualifiés sur le segment tertiaire, car ils démontrent une compréhension des enjeux avant même le premier contact commercial.
        </p>
      </div>

      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-4">
        <h3 className="text-lg font-bold text-foreground font-display mb-2">3. Cibler les bons interlocuteurs avec les bons canaux</h3>
        <p className="text-muted-foreground mb-0">
          Dans le tertiaire, les prescripteurs sont multiples : maîtres d'ouvrage, architectes, bureaux d'études, économistes de la construction. Chacun a ses codes et ses canaux d'information. La publicité LinkedIn, le référencement sur des mots-clés métier et le marketing de contenu sont souvent plus efficaces que les approches traditionnelles de démarchage téléphonique.
        </p>
      </div>

      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h3 className="text-lg font-bold text-foreground font-display mb-2">4. Armer votre force commerciale pour les cycles longs</h3>
        <p className="text-muted-foreground mb-0">
          Formez vos équipes à la vente de solutions plutôt qu'à la vente de prestations. Un devis ne se négocie pas sur le prix mais sur la capacité à répondre à un cahier des charges exigeant. Outillez vos commerciaux avec des argumentaires documentés et un CRM qui permet de ne perdre aucune piste dans la phase de maturation longue.
        </p>
      </div>
    </section>

    <section className="mb-12" id="erreurs">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les erreurs fréquentes des entreprises de BTP qui abordent le tertiaire
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Plusieurs entreprises bien implantées dans le résidentiel ont tenté l'ouverture vers le tertiaire sans succès, souvent pour les mêmes raisons :
      </p>
      <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
        <li><strong>Vouloir appliquer les mêmes méthodes commerciales</strong> que dans le résidentiel, sans comprendre que le temps de décision et les critères de sélection sont radicalement différents.</li>
        <li><strong>Communiquer sur ce qu'on sait faire</strong> plutôt que sur les problèmes qu'on résout. Dans le tertiaire, le maître d'ouvrage achète une solution à un enjeu réglementaire ou fonctionnel, pas une prestation technique.</li>
        <li><strong>Négliger la phase de documentation</strong> et de contenu probant. Un maître d'ouvrage tertiaire veut voir des références, des chiffres, des certifications. Sans ces éléments, votre devis part avec un handicap.</li>
        <li><strong>Cibler trop large</strong> en voulant adresser tous les segments tertiaires à la fois. Mieux vaut devenir une référence sur un créneau — la rénovation énergétique des établissements de santé, par exemple — que d'être un généraliste sans spécialité reconnue.</li>
      </ul>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-0">
          <strong>L'erreur la plus coûteuse :</strong> Investir dans des campagnes de prospection tertiaire sans avoir préparé en amont les contenus, les références et le process commercial adaptés. Le résultat est un gaspillage budgétaire et une perception négative de votre sérieux auprès des donneurs d'ordre.
        </p>
      </div>
    </section>

    <section className="mb-12" id="accompagnement">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Map size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Quand faut-il structurer son approche du tertiaire avec un accompagnement externe ?
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Développer un nouveau segment de marché demande des ressources que toutes les entreprises n'ont pas en interne : compétences marketing, production de contenu technique, connaissance des canaux d'acquisition adaptés au tertiaire.
      </p>
      <p className="text-muted-foreground mb-4">
        Le vrai sujet n'est pas de savoir si vous devez externaliser ou internaliser cette démarche, mais de reconnaître quand vous atteignez le point où votre organisation actuelle ne vous permet plus de grandir sur ce nouveau terrain sans un coup de main structuré.
      </p>

      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-6 md:p-8 border border-primary/10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">
          Ouvrez le tertiaire avec une stratégie d'acquisition adaptée
        </h2>
        <p className="text-muted-foreground mb-6">
          Vous êtes dirigeant d'une entreprise de rénovation ou du BTP et vous souhaitez ouvrir ou renforcer votre présence sur le marché tertiaire ? Agendac vous accompagne de la définition de votre positionnement à la mise en place d'un système d'acquisition clients BTP adapté aux cycles longs de ce segment porteur.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Questions fréquentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="types-batiments">
          <AccordionTrigger>Quels types de bâtiments tertiaires offrent le meilleur potentiel pour une entreprise de rénovation ?</AccordionTrigger>
          <AccordionContent>
            Les établissements de santé et médico-sociaux (cliniques, Ehpad), les bâtiments scolaires et universitaires, les hôtels et les immeubles de bureaux de plus de 1 000 m² sont les segments les plus dynamiques, portés par des obligations réglementaires de rénovation énergétique et de mise en conformité.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="delai-resultats">
          <AccordionTrigger>Combien de temps faut-il pour qu'une stratégie d'acquisition sur le tertiaire porte ses fruits ?</AccordionTrigger>
          <AccordionContent>
            Les cycles tertiaires sont longs : comptez 6 à 12 mois entre les premières actions de prospection ou de mise en visibilité et la signature d'un premier chantier significatif. C'est pourquoi il est crucial de structurer un système qui permette de nourrir et suivre les opportunités sans les perdre dans cette période de maturation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="site-dedie">
          <AccordionTrigger>Faut-il un site internet différent pour le tertiaire quand on vient du résidentiel ?</AccordionTrigger>
          <AccordionContent>
            Pas nécessairement un site distinct, mais votre site existant doit comporter une section dédiée au tertiaire avec des études de cas, des fiches réglementaires et des témoignages spécifiques. Les décideurs tertiaires doivent pouvoir vérifier immédiatement que vous comprenez leur environnement et leurs contraintes. Sans cette preuve, votre légitimité sera remise en question.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleDiversificationTertiaireBtpCroissance;
