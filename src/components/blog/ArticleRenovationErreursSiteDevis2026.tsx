import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, Building2, EyeOff, MessageCircle, PhoneCall, Search, Target } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleRenovationErreursSiteDevis2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Un site internet d'entreprise de rénovation ne génère pas automatiquement des demandes de devis. Dans le bâtiment, où l'urgence et la confiance sont des déclencheurs d'achat majeurs, les erreurs de conception d'un site peuvent annuler tout le travail d'acquisition.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Nous analysons régulièrement des sites d'entreprises de rénovation et de plomberie, et les mêmes erreurs reviennent systématiquement. Voici les plus fréquentes, et surtout <strong>comment les corriger pour ne plus perdre de devis</strong>.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#erreur1" className="hover:text-primary transition-colors">1. Un site qui ignore la notion d'urgence</a></li>
            <li><a href="#erreur2" className="hover:text-primary transition-colors">2. Un numéro de téléphone invisible ou non cliquable</a></li>
            <li><a href="#erreur3" className="hover:text-primary transition-colors">3. Un discours technique qui ne parle pas au client</a></li>
            <li><a href="#erreur4" className="hover:text-primary transition-colors">4. Absence de réassurance et de preuves sociales</a></li>
            <li><a href="#erreur5" className="hover:text-primary transition-colors">5. Un site invisible localement</a></li>
            <li><a href="#erreur6" className="hover:text-primary transition-colors">6. Aucun appel à l'action clair</a></li>
            <li><a href="#pourquoi" className="hover:text-primary transition-colors">7. Pourquoi ces erreurs sont si fréquentes en rénovation</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">8. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <p className="text-muted-foreground mb-4">
      Un site internet pour une entreprise de rénovation ne se résume pas à un joli design. C'est un outil commercial qui doit rassurer, informer et guider le visiteur vers une action concrète : la demande de devis.
    </p>
    <p className="text-muted-foreground mb-8">
      Quand ces trois piliers sont faibles, les demandes ne suivent pas, quels que soient vos investissements publicitaires. Les entreprises de rénovation les plus performantes traitent leur site comme le maillon central d'un <strong>système d'acquisition cohérent</strong>.
    </p>

    <section className="mb-12" id="erreur1">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreur n°1 : Un site qui ignore la notion d'urgence
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        En rénovation comme en plomberie, le prospect ne navigue pas par hasard. Il a un problème concret : fuite, panne, besoin immédiat de rénovation. Pourtant, de nombreux sites enterrent l'information d'urgence au profit d'une présentation générique.
      </p>
      <p className="text-muted-foreground mb-4">
        Un site doit montrer la disponibilité et la réactivité dès le premier écran, pas après trois scrolls. Le visiteur doit comprendre en une fraction de seconde que vous pouvez intervenir rapidement sur son type de problème.
      </p>

      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Bonne pratique :</p>
        <p className="text-muted-foreground mb-0">
          Afficher clairement les interventions rapides, la zone d'intervention et un moyen de contact immédiat (téléphone visible, formulaire court). Ne laissez aucun doute sur votre capacité à répondre dans l'urgence.
        </p>
      </div>
    </section>

    <section className="mb-12" id="erreur2">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <PhoneCall size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreur n°2 : Un numéro de téléphone invisible ou non cliquable
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        C'est l'erreur la plus coûteuse. Un numéro en bas de page, en petit, ou non cliquable sur mobile dissuade le contact. Or, la majorité des recherches de professionnels du bâtiment se font aujourd'hui sur smartphone.
      </p>

      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Bonne pratique :</p>
        <p className="text-muted-foreground mb-0">
          Numéro visible dans l'en-tête, bouton d'appel clair, cliquable et répété à plusieurs endroits stratégiques de la page. Le contact ne doit jamais être à plus d'un clic.
        </p>
      </div>
    </section>

    <section className="mb-12" id="erreur3">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <MessageCircle size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreur n°3 : Un discours technique qui ne parle pas au client
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Beaucoup d'entreprises de rénovation décrivent leurs prestations avec un vocabulaire très métier. Si ce langage est juste entre professionnels, il devient un obstacle pour un particulier.
      </p>
      <p className="text-muted-foreground mb-4">
        Le client cherche des réponses simples : mon problème peut-il être résolu ? dans quel délai ? combien ça coûte ? Si votre site lui impose un effort de décodage, il part chez un concurrent plus clair.
      </p>

      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Bonne pratique :</p>
        <p className="text-muted-foreground mb-0">
          Utiliser un langage accessible, expliquer les bénéfices plutôt que les caractéristiques techniques, et structurer les informations par problème client plutôt que par catégorie de prestation.
        </p>
      </div>
    </section>

    <section className="mb-12" id="erreur4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <EyeOff size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreur n°4 : Absence de réassurance et de preuves sociales
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Faire intervenir un professionnel chez soi implique une forte attente de confiance. Pourtant, beaucoup de sites ne montrent ni avis clients, ni photos de chantiers, ni présentation de l'équipe.
      </p>
      <p className="text-muted-foreground mb-4">
        Sans ces éléments, le visiteur n'a aucune raison de vous préférer à un concurrent. Dans le bâtiment, la preuve par l'image et les avis clients sont les deux leviers de réassurance les plus puissants.
      </p>

      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Bonne pratique :</p>
        <p className="text-muted-foreground mb-0">
          Intégrer des avis Google récents, des photos avant/après de chantiers réels, une présentation claire de l'entreprise et de son ancienneté. Chaque preuve sociale réduit le temps de décision.
        </p>
      </div>
    </section>

    <section className="mb-12" id="erreur5">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Search size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreur n°5 : Un site invisible localement
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Avoir un site ne suffit pas. S'il n'est pas optimisé pour le référencement local, personne ne le trouve. Les erreurs classiques : absence de pages par zone d'intervention, structure SEO non adaptée, aucune cohérence avec la fiche Google Business Profile.
      </p>

      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Bonne pratique :</p>
        <p className="text-muted-foreground mb-0">
          Structurer le site par secteurs d'intervention, optimiser chaque page pour des requêtes locales, et synchroniser le contenu avec la fiche Google My Business pour maximiser la visibilité de proximité.
        </p>
      </div>
    </section>

    <section className="mb-12" id="erreur6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Target size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreur n°6 : Aucun appel à l'action clair
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un site qui explique bien ses prestations mais ne dit jamais clairement quoi faire ensuite ne convertit pas. Pas de bouton &laquo;&nbsp;Demander un devis&nbsp;&raquo;, formulaire trop long, absence d'incitation au contact : le visiteur repart sans agir.
      </p>

      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Bonne pratique :</p>
        <p className="text-muted-foreground mb-0">
          Chaque page doit proposer une action claire (appeler, demander un devis, poser une question). Le parcours de contact doit être simple, visible et rassurant. Ne laissez jamais le visiteur sans savoir quoi faire ensuite.
        </p>
      </div>
    </section>

    <section className="mb-12" id="pourquoi">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Building2 size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi ces erreurs sont si fréquentes en rénovation
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Dans les métiers du bâtiment, le site internet est souvent perçu comme une vitrine, pas comme un outil commercial. On investit dans un beau design, mais on oublie la stratégie de conversion, le suivi des visiteurs, et l'intégration avec le reste du système d'acquisition.
      </p>
      <p className="text-muted-foreground mb-4">
        Les entreprises de rénovation les plus performantes ne sont pas celles qui ont le plus beau site. Ce sont celles qui traitent leur site comme un maillon d'une chaîne : acquisition → site → formulaire → CRM → qualification → devis → signature. Quand un maillon est faible, toute la chaîne perd en efficacité.
      </p>
      <p className="text-muted-foreground mb-4">
        Chez Agendac, nous accompagnons les entreprises de rénovation sur l'ensemble de cette chaîne : de l'optimisation du site internet à la gestion des campagnes publicitaires, en passant par le suivi CRM et la qualification des leads.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-0">
          <strong>Le vrai problème n'est presque jamais uniquement le site.</strong> Il se situe souvent entre la promesse, la qualification et le traitement commercial. Un site performant ne suffit pas si les demandes ne sont pas traitées correctement en aval.
        </p>
      </div>
    </section>

    <section className="mb-12">
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-6 md:p-8 border border-primary/10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">
          Transformez votre site en moteur de demandes qualifiées
        </h2>
        <p className="text-muted-foreground mb-6">
          Vous reconnaissez certaines de ces erreurs sur votre site ? Agendac vous accompagne pour diagnostiquer, corriger et optimiser l'ensemble de votre système d'acquisition : site internet, campagnes publicitaires, CRM et suivi commercial.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Questions fréquentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="delai">
          <AccordionTrigger>Combien de temps faut-il pour qu'un nouveau site de rénovation génère des devis ?</AccordionTrigger>
          <AccordionContent>
            Tout dépend de la stratégie d'acquisition. Avec un site optimisé et des campagnes publicitaires actives, les premières demandes peuvent arriver en quelques jours. Sans acquisition, même le plus beau site peut rester vide pendant des mois. La clé est la combinaison site + trafic qualifié.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="vitrine">
          <AccordionTrigger>Est-ce qu'un site vitrine suffit pour une entreprise de rénovation ?</AccordionTrigger>
          <AccordionContent>
            Un site vitrine bien conçu et optimisé localement peut suffire si votre entreprise est déjà reconnue dans sa zone d'intervention. Pour générer de nouvelles demandes de devis de façon régulière, il faut en général combiner site + référencement local + campagnes publicitaires ciblées.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="blog">
          <AccordionTrigger>Faut-il absolument un blog sur le site d'une entreprise de rénovation ?</AccordionTrigger>
          <AccordionContent>
            Un blog n'est pas obligatoire, mais c'est un levier puissant pour le référencement naturel et pour répondre aux questions récurrentes de vos prospects avant qu'ils ne vous contactent. Les articles bien rédigés renforcent aussi l'autorité et la crédibilité de votre entreprise.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleRenovationErreursSiteDevis2026;
