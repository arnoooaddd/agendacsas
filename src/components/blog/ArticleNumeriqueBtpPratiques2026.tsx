import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BarChart3, Globe, Monitor, Smartphone, Target, TrendingUp } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleNumeriqueBtpPratiques2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Le secteur du BTP a longtemps résisté à la transformation numérique. Mais en 2026, la donne a changé.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Les entreprises du bâtiment qui adoptent les outils digitaux — du site internet optimisé au CRM en passant par la publicité ciblée — prennent un avantage concurrentiel décisif sur celles qui restent dépendantes du bouche-à-oreille. Cette transformation ne concerne pas uniquement les grands groupes : les entreprises de rénovation de taille intermédiaire sont aujourd'hui les mieux placées pour <strong>structurer leur acquisition clients grâce au numérique</strong>.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#pourquoi" className="hover:text-primary transition-colors">1. Pourquoi le numérique est devenu incontournable dans le BTP</a></li>
            <li><a href="#site-convertit" className="hover:text-primary transition-colors">2. Un site internet qui convertit</a></li>
            <li><a href="#campagnes" className="hover:text-primary transition-colors">3. Des campagnes publicitaires ciblées</a></li>
            <li><a href="#crm" className="hover:text-primary transition-colors">4. Un CRM pour piloter la relation client</a></li>
            <li><a href="#pratiques" className="hover:text-primary transition-colors">5. Les nouvelles pratiques qui font la différence</a></li>
            <li><a href="#obstacles" className="hover:text-primary transition-colors">6. Les obstacles à la transformation numérique</a></li>
            <li><a href="#accompagnement" className="hover:text-primary transition-colors">7. Quand faut-il se faire accompagner ?</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">8. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <p className="text-muted-foreground mb-4">
      Le comportement des clients a changé. Un particulier ou un donneur d'ordre ne cherche plus un artisan uniquement par recommandation. Il tape une requête sur Google, compare plusieurs sites, lit les avis, et contacte celui qui inspire le plus confiance.
    </p>
    <p className="text-muted-foreground mb-8">
      Les entreprises du BTP qui ne sont pas visibles en ligne perdent des opportunités chaque jour, sans même le savoir. Le numérique n'est plus une option : c'est le <strong>nouveau point d'entrée du parcours client</strong>.
    </p>

    <section className="mb-12" id="pourquoi">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi le numérique est devenu incontournable dans le BTP
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        La transition numérique du BTP n'est pas une tendance marketing, c'est une réponse à une évolution structurelle du marché. Les clients d'aujourd'hui sont plus informés, plus exigeants, et ils comparent avant d'acheter. Ne pas être visible en ligne, c'est laisser ses concurrents capter ces prospects sans combattre.
      </p>
      <p className="text-muted-foreground mb-4">
        Le numérique permet aussi de piloter son activité commerciale avec des données fiables, au lieu de se fier à son intuition ou au hasard des appels entrants.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-0">
          <strong>Dans le BTP, le problème n'est presque jamais uniquement le trafic.</strong> Il se situe souvent entre la promesse, la qualification et le traitement commercial. Le numérique apporte des solutions à chacun de ces maillons.
        </p>
      </div>
    </section>

    <section className="mb-12" id="site-convertit">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Monitor size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Un site internet qui convertit
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le site web est la colonne vertébrale de la présence numérique. Il doit être optimisé pour le référencement local, afficher des preuves de chantiers, intégrer des avis clients, et proposer un parcours de contact simple et visible.
      </p>
      <p className="text-muted-foreground mb-4">
        Un site bien construit peut multiplier par trois le nombre de demandes de devis. Mais encore faut-il qu'il soit pensé pour la conversion, pas seulement pour le design.
      </p>

      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-0">
          Un site performant combine une identité claire, des preuves visuelles, des avis clients, des garanties affichées et un parcours de contact fluide. C'est la base de tout système d'acquisition.
        </p>
      </div>
    </section>

    <section className="mb-12" id="campagnes">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Target size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Des campagnes publicitaires ciblées
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Les Google Ads et les campagnes Meta permettent d'aller chercher des clients là où ils se trouvent, avec un ciblage géographique et par centre d'intérêt. Bien configurées, elles génèrent un flux régulier de demandes qualifiées.
      </p>
      <p className="text-muted-foreground mb-4">
        L'avantage des campagnes publicitaires dans le BTP est leur prévisibilité : à budget constant et ciblage maîtrisé, le nombre de clics et de leads est reproductible d'un mois sur l'autre. C'est ce qui permet de dimensionner son acquisition en fonction de ses objectifs commerciaux.
      </p>
    </section>

    <section className="mb-12" id="crm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <BarChart3 size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Un CRM pour piloter la relation client
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le numérique ne sert à rien si les demandes ne sont pas suivies correctement. Un CRM permet de centraliser les contacts, de relancer les prospects, de suivre les devis et d'analyser la performance commerciale.
      </p>
      <p className="text-muted-foreground mb-4">
        C'est l'outil qui transforme un flux de demandes en chantiers signés. Sans CRM, des prospects qualifiés passent entre les mailles du filet tous les mois, sans que l'entreprise ne le sache.
      </p>
    </section>

    <section className="mb-12" id="pratiques">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Globe size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les nouvelles pratiques qui font la différence en 2026
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Au-delà des fondamentaux, certaines pratiques émergent et distinguent les entreprises qui performent :</p>
      <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
        <li>le <strong>référencement local</strong> optimisé avec Google Business Profile</li>
        <li>la <strong>publicité programmatique</strong> locale pour cibler très finement les zones d'intervention</li>
        <li>le <strong>retargeting</strong> des visiteurs site avant la demande de devis</li>
        <li>l'automatisation des <strong>relances commerciales</strong> via CRM</li>
        <li>la <strong>vidéo chantier</strong> comme outil de preuve sociale</li>
      </ul>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-0">
          Les entreprises de rénovation qui adoptent ces pratiques construisent un avantage concurrentiel durable, difficile à rattraper pour les retardataires.
        </p>
      </div>
    </section>

    <section className="mb-12" id="obstacles">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Smartphone size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les obstacles à la transformation numérique dans le BTP
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Malgré ces bénéfices, de nombreuses entreprises du bâtiment peinent à franchir le pas. Les obstacles sont rarement techniques : ils sont surtout culturels et organisationnels. Manque de temps, absence de compétences en interne, hésitation entre internaliser et externaliser, crainte de l'investissement.
      </p>
      <p className="text-muted-foreground mb-4">
        Les entreprises qui réussissent leur transformation numérique sont celles qui traitent le sujet comme un <strong>investissement stratégique</strong>, pas comme une dépense accessoire.
      </p>
    </section>

    <section className="mb-12" id="accompagnement">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Quand faut-il se faire accompagner ?
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        La transformation numérique peut être menée en interne si l'entreprise dispose déjà de compétences marketing. Mais dans la plupart des cas, les dirigeants de rénovation préfèrent se concentrer sur les chantiers et la gestion d'équipe.
      </p>
      <p className="text-muted-foreground mb-4">
        Chez Agendac, nous accompagnons les entreprises du BTP sur l'ensemble de la chaîne : site internet, campagnes publicitaires, CRM et suivi commercial. L'enjeu n'est pas de tout numériser, mais de mettre en place un <strong>système d'acquisition cohérent et pilotable</strong>.
      </p>

      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-6 md:p-8 border border-primary/10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">
          Passez au numérique pour structurer votre acquisition BTP
        </h2>
        <p className="text-muted-foreground mb-6">
          Vous êtes dirigeant d'une entreprise de rénovation et vous souhaitez structurer votre acquisition clients avec les bons outils numériques ? Agendac vous accompagne de la stratégie à l'exécution.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Questions fréquentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="budget">
          <AccordionTrigger>Quel budget pour une transformation numérique dans le BTP ?</AccordionTrigger>
          <AccordionContent>
            Le budget varie selon l'ampleur du projet : un site professionnel coûte entre 2 000 € et 8 000 €, un accompagnement publicité entre 1 500 € et 4 000 € par mois, et un CRM entre 50 € et 300 € par mois. L'essentiel est de commencer par les leviers à plus fort retour sur investissement.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="delai">
          <AccordionTrigger>Combien de temps faut-il pour voir les résultats ?</AccordionTrigger>
          <AccordionContent>
            Les premiers résultats d'une campagne publicitaire bien configurée apparaissent en quelques jours. La transformation complète du système d'acquisition produit ses pleins effets en 2 à 3 mois, le temps d'optimiser le site, les campagnes et le suivi CRM.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="internaliser">
          <AccordionTrigger>Faut-il internaliser le marketing ou le confier à une agence ?</AccordionTrigger>
          <AccordionContent>
            Tout dépend de vos ressources. Une agence spécialisée apporte une expertise immédiate et des résultats plus rapides. L'internalisation peut être pertinente à partir d'un certain volume de campagnes, mais elle nécessite du temps et des compétences dédiées. La plupart des entreprises de rénovation de taille intermédiaire choisissent une approche mixte.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleNumeriqueBtpPratiques2026;
