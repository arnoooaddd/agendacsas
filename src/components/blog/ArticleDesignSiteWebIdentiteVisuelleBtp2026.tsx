import { Link } from "react-router-dom";
import { Eye, Layers, ArrowDown, Palette, Grid3X3, RefreshCw } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleDesignSiteWebIdentiteVisuelleBtp2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Dans le BTP et la rénovation de l'habitat, la première impression ne se fait pas sur le chantier — elle se fait sur un écran, sur une camionnette ou sur un panneau de chantier. Pourtant, beaucoup d'entreprises du bâtiment sous-estiment encore l'impact du design sur leur capacité à attirer des clients et à inspirer confiance.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Une identité visuelle soignée et un site web bien conçu ne sont pas des « gadgets marketing ». Ce sont des leviers concrets qui transforment une entreprise de rénovation en une <strong>marque reconnue, mémorisée et recommandée</strong>.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#levier-acquisition" className="hover:text-primary transition-colors">1. Pourquoi le design est un levier d'acquisition</a></li>
            <li><a href="#unite-visuelle" className="hover:text-primary transition-colors">2. Unité visuelle : être reconnu partout</a></li>
            <li><a href="#hierarchie-information" className="hover:text-primary transition-colors">3. Hiérarchie de l'information : guider le prospect</a></li>
            <li><a href="#contraste-emphase" className="hover:text-primary transition-colors">4. Contraste et emphase : ne pas passer inaperçu</a></li>
            <li><a href="#echelle-proportions" className="hover:text-primary transition-colors">5. Échelle et proportions : structurer le message</a></li>
            <li><a href="#repetition-marque" className="hover:text-primary transition-colors">6. Répétition : construire une marque mémorisable</a></li>
            <li><a href="#cta-design" className="hover:text-primary transition-colors">7. Quand le design devient un avantage concurrentiel</a></li>
            <li><a href="#faq-design" className="hover:text-primary transition-colors">8. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="levier-acquisition">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Eye size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi le design est un levier d'acquisition dans le BTP
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Une entreprise de rénovation qui investit dans son image visuelle envoie un signal clair à ses prospects : « nous sommes organisés, professionnels, et nous prenons notre travail au sérieux. » Dans un secteur où la confiance est le premier critère de choix, ce signal vaut de l'or.
      </p>
      <p className="text-muted-foreground mb-4">
        Le design ne se limite pas à un logo. Il englobe votre site internet, vos cartes de visite, la signalétique sur vos chantiers, le wrapping de vos véhicules, vos fiches Google Maps, et même la mise en page de vos devis. Chaque point de contact visuel est une opportunité de rassurer un prospect et de le convaincre de vous confier son projet.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le bon réflexe :</p>
        <p className="text-muted-foreground mb-0">Dans le BTP, le problème n'est presque jamais uniquement le trafic. Il se situe souvent entre <strong>la promesse, la qualification et le traitement commercial</strong>. Un design cohérent raccourcit ce chemin en créant de la confiance dès le premier regard.</p>
      </div>
    </section>

    <section className="mb-12" id="unite-visuelle">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Layers size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Unité visuelle : faire reconnaître votre entreprise partout
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Quand un prospect voit votre camion sur la route, puis visite votre site web le soir, et reçoit votre devis par email le lendemain, il doit ressentir une continuité. C'est ce qu'on appelle l'unité visuelle : des couleurs, des typographies et un style graphique cohérents sur tous vos supports.
      </p>
      <p className="text-muted-foreground mb-4">
        À l'inverse, un logo différent sur votre site et sur votre camion, des couleurs qui changent selon le support, ou une mise en page brouillonne sur vos devis créent un sentiment de désorganisation. Dans l'esprit du client, cela soulève des doutes : « cette entreprise est-elle vraiment fiable ? »
      </p>
      <p className="text-muted-foreground mb-4">
        Pour une entreprise de rénovation qui génère plusieurs centaines de demandes par an, cette cohérence visuelle n'est pas un luxe. C'est un facteur de différenciation qui permet de transformer plus de prospects en rendez-vous et en chantiers signés.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Les points à aligner pour une unité visuelle efficace :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">• Mêmes couleurs principales sur site, devis, cartes, véhicules et panneaux</li>
          <li className="flex items-start gap-2">• Mêmes typographies pour les titres et les textes courants</li>
          <li className="flex items-start gap-2">• Même logo, même signature visuelle partout</li>
          <li className="flex items-start gap-2">• Même ton et même promesse dans les messages</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="hierarchie-information">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <ArrowDown size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Hiérarchie de l'information : guider le prospect vers l'essentiel
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un site internet de rénovation ou une page de présentation doit répondre à une question en moins de trois secondes : « cette entreprise peut-elle résoudre mon problème ? » Pour y parvenir, il faut organiser l'information par ordre d'importance.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Les principes de la hiérarchie visuelle :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">• Le message principal (votre métier, votre zone) apparaît en premier, en grand et bien visible</li>
          <li className="flex items-start gap-2">• Les éléments secondaires (références, équipe) viennent ensuite</li>
          <li className="flex items-start gap-2">• L'appel à l'action (demander un devis, être rappelé) est mis en évidence par une couleur contrastée</li>
        </ul>
      </div>

      <p className="text-muted-foreground mt-6 mb-4">
        Ce principe s'applique aussi à vos supports physiques : un panneau de chantier doit immédiatement faire comprendre qui vous êtes et comment vous joindre. Votre nom d'entreprise doit dominer, suivi d'un numéro de téléphone ou d'un QR code vers votre site.
      </p>
      <p className="text-muted-foreground mb-4">
        Quand la hiérarchie est bien pensée, le prospect n'a pas à chercher l'information. Elle lui est servie naturellement, ce qui accélère sa décision et fluidifie votre pipeline commercial.
      </p>
    </section>

    <section className="mb-12" id="contraste-emphase">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Palette size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Contraste et emphase : ne pas passer inaperçu
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Dans un marché concurrentiel comme la rénovation de l'habitat, se fondre dans la masse est la pire des stratégies. Le contraste — par la couleur, la forme ou la taille — permet de capter l'attention là où d'autres passent inaperçus.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Exemples concrets :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Un panneau de chantier aux couleurs vives attire davantage le regard qu'un panneau standard</li>
          <li>• Un bouton « Devis gratuit » en couleur contrastée sur votre site augmente mécaniquement le taux de clic</li>
          <li>• Un véhicule signalé avec une identité forte se transforme en panneau publicitaire mobile qui génère des contacts</li>
        </ul>
      </div>

      <p className="text-muted-foreground mt-6 mb-4">
        L'emphase, quant à elle, consiste à choisir un élément central par support — votre logo sur le véhicule, votre numéro sur le panneau, votre offre sur la page d'accueil — et à le faire ressortir. Trop d'éléments mis en avant tuent l'emphase : un seul point focal par design, et tout le reste soutient ce point focal.
      </p>
    </section>

    <section className="mb-12" id="echelle-proportions">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Grid3X3 size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Échelle et proportions : structurer le message avec intention
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un site web où tout est à la même taille, une brochure où les images et le texte se concurrencent, un devis où les prix sont noyés dans un bloc de texte : ces erreurs nuisent à la lisibilité et à la crédibilité de votre entreprise.
      </p>
      <p className="text-muted-foreground mb-4">
        L'échelle et les proportions permettent de créer un parcours de lecture naturel. Les éléments les plus importants occupent plus d'espace. Les détails secondaires sont plus petits mais restent accessibles. Cette structuration visuelle guide l'œil et rend l'information immédiatement compréhensible.
      </p>
      <p className="text-muted-foreground mb-4">
        Pour une entreprise de rénovation qui reçoit des demandes via son site, cette lisibilité est directement liée au taux de transformation. Un prospect qui trouve facilement l'information qu'il cherche est plus enclin à remplir un formulaire ou à décrocher son téléphone.
      </p>
    </section>

    <section className="mb-12" id="repetition-marque">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <RefreshCw size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Répétition : construire une marque mémorisable
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Les marques les plus reconnues au monde utilisent toutes la répétition. Votre logo sur chaque support, vos couleurs sur chaque communication, votre signature visuelle dans chaque email : cette répétition crée un sentiment de familiarité et de confiance.
      </p>
      <p className="text-muted-foreground mb-4">
        Dans le BTP, où le cycle de décision est long et où le prospect compare plusieurs entreprises avant de choisir, être mémorisable est un avantage concurrentiel décisif. Si votre prospect reçoit trois devis et se souvient visuellement du vôtre parce que votre identité est forte et cohérente, vous augmentez vos chances d'être rappelé.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Conseil opérationnel :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">• Intégrez votre logo sur chaque document — factures, devis, signatures email, fiches chantier</li>
          <li className="flex items-start gap-2">• Utilisez les mêmes typographies et couleurs sur votre site, vos réseaux et vos supports imprimés</li>
          <li className="flex items-start gap-2">• Créez une signature visuelle qui se répète sans être lassante</li>
        </ul>
      </div>
    </section>

    <section className="mb-16" id="cta-design">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">
          Quand le design devient un avantage concurrentiel
        </h2>
        <p className="text-muted-foreground mb-4">
          Dans un marché où la qualité des travaux est souvent comparable d'une entreprise à l'autre, le design est ce qui fait la différence dans l'esprit du client avant même le premier rendez-vous. Une entreprise de rénovation qui soigne son image véhicule une promesse de sérieux et de professionnalisme qui rassure et convertit.
        </p>
        <p className="text-muted-foreground mb-4">
          Ce n'est pas une question de budget, mais de cohérence. Quelques règles simples appliquées à l'ensemble de vos supports peuvent transformer votre présence en ligne et votre image de marque — et, par conséquent, votre capacité à générer des <strong>demandes de devis qualifiées</strong>.
        </p>
        <p className="text-muted-foreground mb-6">
          Vous voulez un site web qui reflète vraiment la qualité de votre travail et convertit mieux ? Découvrez notre offre <Link to="/creation-site-internet" className="text-primary hover:underline">création de site internet</Link> pour les entreprises du bâtiment.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-design">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Dois-je refaire mon identité visuelle si mon entreprise existe depuis 10 ans ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Pas nécessairement. L'important n'est pas de tout changer, mais d'être cohérent. Si vos supports actuels sont disparates, une harmonisation progressive — site, cartes, devis, réseaux sociaux — peut suffire à créer une unité visuelle sans perdre votre capital de notoriété existant.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien coûte une refonte d'identité visuelle pour une entreprise de rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les budgets varient de quelques centaines à plusieurs milliers d'euros selon l'ampleur du projet. L'essentiel est de commencer par un audit de vos supports existants et de prioriser les points de contact les plus visibles : site web, fiche Google, panneaux de chantier, véhicules.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Le design a-t-il un impact direct sur le nombre de devis signés ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui, indirectement mais de manière mesurable. Un site clair et professionnel améliore le taux de conversion des visiteurs en leads. Des supports cohérents renforcent la confiance, ce qui facilite la décision du client. Sur des volumes importants de demandes, ces gains marginaux se traduisent en chiffre d'affaires supplémentaire.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleDesignSiteWebIdentiteVisuelleBtp2026;
