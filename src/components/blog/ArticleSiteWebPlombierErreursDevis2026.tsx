import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BadgeCheck, MapPin, PhoneCall, Shield, Target, Users } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleSiteWebPlombierErreursDevis2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Aujourd'hui, la majorité des particuliers cherchent un plombier sur Google. Avoir un site web est indispensable. Mais beaucoup de sites de plomberie ne génèrent ni appels ni demandes de devis.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Le problème ne vient pas du métier, mais de la façon dont le site est conçu. Chez Agendac, nous analysons régulièrement des sites de plombiers et d'artisans du bâtiment, et les mêmes erreurs reviennent systématiquement. Voici les six erreurs les plus fréquentes, et surtout <strong>comment les corriger pour transformer votre site en outil de génération de devis</strong>.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#site-vitrine-pas-urgence" className="hover:text-primary transition-colors">1. Un site trop vitrine, pas assez orienté urgence</a></li>
            <li><a href="#numero-contact-mal-place" className="hover:text-primary transition-colors">2. Un numéro de contact mal placé</a></li>
            <li><a href="#discours-technique-pas-client" className="hover:text-primary transition-colors">3. Un discours trop technique, pas orienté bénéfices client</a></li>
            <li><a href="#manque-reassurance" className="hover:text-primary transition-colors">4. L'absence de réassurance et de preuves de sérieux</a></li>
            <li><a href="#site-invisible-localement" className="hover:text-primary transition-colors">5. Un site invisible localement sur Google</a></li>
            <li><a href="#pas-de-cta" className="hover:text-primary transition-colors">6. Aucun appel à l'action clair</a></li>
            <li><a href="#faq-site-plombier" className="hover:text-primary transition-colors">7. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <p className="text-muted-foreground mb-4">
      Un particulier qui cherche un plombier n'explore pas par loisir. Il a un problème immédiat : une fuite d'eau, un chauffe-eau en panne, une canalisation bouchée, un dégât des eaux. Chaque minute compte.
    </p>
    <p className="text-muted-foreground mb-4">
      Votre site doit répondre à cette urgence en moins de trois secondes. S'il ne le fait pas, le visiteur passe au suivant.
    </p>
    <p className="text-muted-foreground mb-8">
      Les entreprises de plomberie qui corrigent ces six erreurs constatent en moyenne <strong>2 à 5 appels supplémentaires par semaine</strong> dès le premier mois. À 150 € le devis moyen en plomberie de rénovation, l'impact sur le chiffre d'affaires est rapide et mesurable.
    </p>

    <section className="mb-12" id="site-vitrine-pas-urgence">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Shield size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreur n°1 : un site trop vitrine, pas assez orienté urgence
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        La plomberie est un métier où l'urgence joue un rôle central. Pourtant, de nombreux sites de plombiers ne mettent pas en avant les interventions urgentes, n'indiquent pas clairement la disponibilité, et diluent l'information essentielle dans du contenu générique.
      </p>
      <p className="text-muted-foreground mb-4">
        Un visiteur qui arrive sur votre site pendant une fuite d'eau ne cherche pas à lire votre histoire. Il cherche un numéro, une confirmation que vous intervenez en urgence, et une preuve que vous êtes joignable maintenant.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le bon réflexe :</p>
        <p className="text-muted-foreground mb-0">
          Dès le premier écran, affichez clairement <strong>votre capacité d'intervention en urgence</strong>, votre zone d'intervention, et un moyen de contact direct. Ne laissez aucun doute sur votre disponibilité.
        </p>
      </div>
    </section>

    <section className="mb-12" id="numero-contact-mal-place">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <PhoneCall size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreur n°2 : un numéro de téléphone ou un formulaire mal placé
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        C'est l'une des erreurs les plus coûteuses, et la plus simple à corriger. Sur mobile — qui représente 70 à 80 % des visites de sites de plombiers — le numéro de téléphone est souvent caché en bas de page, trop petit pour être cliquable, ou absent du menu de navigation.
      </p>
      <p className="text-muted-foreground mb-4">
        Même problème pour les formulaires de demande de devis : trop longs, trop génériques, ou placés après un bloc de contenu qui décourage le passage à l'action.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Un site de plombier bien conçu doit :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Afficher le numéro en haut de page, visible sans scroller</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Rendre le numéro cliquable sur mobile</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Rappeler le contact en bas de chaque page</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Proposer un formulaire de devis court (3 à 5 champs maximum)</li>
        </ul>
      </div>

      <p className="mt-4 text-muted-foreground">
        En plomberie comme dans tous les métiers de rénovation, la friction fait fuir le prospect. Un contact visible en moins d'une seconde, c'est un appel de plus par jour.
      </p>
    </section>

    <section className="mb-12" id="discours-technique-pas-client">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Users size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreur n°3 : un discours trop technique, pas orienté bénéfices client
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Beaucoup de plombiers décrivent leurs prestations avec un vocabulaire technique parfaitement adapté entre professionnels, mais incompréhensible pour un particulier qui cherche simplement à résoudre un problème.
      </p>
      <p className="text-muted-foreground mb-4">
        Le client ne cherche pas à savoir comment vous remplacez un chauffe-eau. Il veut savoir : son problème peut-il être résolu ? dans quel délai ? à quel prix approximatif ? puis-je vous faire confiance ?
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le bon réflexe :</p>
        <p className="text-muted-foreground mb-0">
          Reformulez chaque page de service en partant du <strong>problème client</strong>, pas de votre technique. "Fuite d'eau réparée en 24h" est plus efficace que "Installation de raccords PER avec certification". Le bénéfice concret est ce qui convertit.
        </p>
      </div>
    </section>

    <section className="mb-12" id="manque-reassurance">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <BadgeCheck size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreur n°4 : absence de réassurance et de preuves de sérieux
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Faire intervenir un plombier chez soi implique un niveau de confiance élevé. Pourtant, beaucoup de sites ne présentent pas l'entreprise, n'affichent aucun avis client, et ne montrent pas de photos d'interventions réalisées.
      </p>
      <p className="text-muted-foreground mb-4">
        Dans un métier où la confiance est le premier critère de choix, cette absence de réassurance est un frein direct à la génération de leads. Le visiteur hésite, compare, et finit par contacter un concurrent mieux présenté.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Les éléments de réassurance indispensables sur un site de plombier :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Avis clients visibles et récents (Google Business Profile)</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Photos de chantiers et d'interventions réelles</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Assurance décennale et garanties affichées clairement</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Présentation de l'entreprise, de l'équipe et de la zone d'intervention</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="site-invisible-localement">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <MapPin size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreur n°5 : un site invisible localement sur Google
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Avoir un site web ne suffit pas. S'il n'est pas visible localement sur Google, il ne génèrera pas de contacts. Les erreurs fréquentes : absence de pages locales par zone d'intervention, structure non optimisée pour le SEO local, aucune cohérence entre le site et la fiche Google Business Profile.
      </p>

      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <p className="font-semibold text-foreground mb-3">Pour qu'un site de plombier soit trouvé localement :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Chaque ville d'intervention mérite une page dédiée</li>
          <li>• La fiche Google Business Profile doit être complète et active</li>
          <li>• Les informations (nom, adresse, téléphone) doivent être identiques entre le site et la fiche Google</li>
          <li>• Les avis clients réguliers améliorent le référencement local</li>
        </ul>
      </div>

      <p className="mt-4 text-muted-foreground">
        Sans référencement local, votre site est une vitrine qui n'existe pour personne. La connexion entre site web et fiche Google Business Profile est le pilier de la visibilité locale pour les entreprises de plomberie.
      </p>
    </section>

    <section className="mb-12" id="pas-de-cta">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Target size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreur n°6 : aucun appel à l'action clair
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Certains sites expliquent parfaitement les prestations, mais n'indiquent jamais clairement quoi faire ensuite. Pas de bouton "Demander un devis", formulaire trop complexe, absence d'incitation au contact.
      </p>
      <p className="text-muted-foreground mb-4">
        Chaque page de votre site doit guider le visiteur vers une action claire : appeler, demander un devis, envoyer un message. Un site efficace ne laisse jamais le doute sur la prochaine étape.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le bon réflexe :</p>
        <p className="text-muted-foreground mb-0">
          Sur chaque page de service, placez au moins <strong>un appel à l'action visible sans scroller</strong> et un second en bas de page. Ne laissez jamais le lecteur terminer sa lecture sans savoir quoi faire. Un CTA clair, c'est la différence entre une visite et un lead.
        </p>
      </div>
    </section>

    <section className="mb-16" id="quand-site-ne-suffit-pas">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">
          Quand le site web ne suffit plus, une stratégie d'acquisition fait la différence
        </h2>
        <p className="text-muted-foreground mb-4">
          Corriger ces six erreurs peut déjà doubler ou tripler le nombre de demandes de devis que vous recevez chaque semaine. Mais dans certains cas, le problème dépasse le site : les campagnes publicitaires ne sont pas calibrées, le suivi commercial n'est pas structuré, le système d'acquisition global n'est pas en place.
        </p>
        <p className="text-muted-foreground mb-4">
          C'est précisément là qu'un accompagnement structuré fait la différence. L'objectif n'est pas de vous vendre un site internet, mais de mettre en place un système de génération de leads prévisible pour votre entreprise de plomberie, qui relie site, visibilité locale, campagnes et suivi commercial.
        </p>
        <p className="text-muted-foreground mb-6">
          Si vous avez déjà essayé de gérer votre site, vos annonces et votre suivi commercial en interne, vous savez que le temps passé sur le marketing est du temps que vous ne passez pas à développer votre entreprise. Un accompagnement professionnel en <Link to="/creation-site-internet" className="text-primary hover:underline">création de site internet orienté performance</Link> permet de transformer votre site en véritable machine à générer des devis qualifiés.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-site-plombier">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien de temps faut-il pour qu'un site de plombier génère des appels ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Avec un site optimisé SEO local et une fiche Google Business Profile complète, les premiers appels arrivent généralement sous 2 à 6 semaines. En ajoutant des campagnes publicitaires locales, les résultats peuvent être immédiats dès les premiers jours.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il absolument un numéro d'urgence sur le site d'un plombier ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui, c'est même le premier élément à afficher. La majorité des recherches de plomberie sont urgentes. Si votre numéro n'est pas visible immédiatement, le prospect appelle un concurrent. Un bouton d'appel clair en haut de page est le meilleur investissement possible pour un site de plombier.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quel est le budget pour un site web professionnel de plombier en 2026 ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Le coût varie selon le niveau d'accompagnement : un site simple peut démarrer autour de 1 500 €, tandis qu'un site professionnel avec stratégie SEO locale, campagnes publicitaires et accompagnement agence se situe entre 3 000 € et 8 000 €. L'essentiel est de choisir une solution qui inclut la performance et la visibilité, pas seulement la conception graphique.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Mon site de plombier est beau mais ne génère pas de devis. Pourquoi ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Un site beau ne fait pas un site efficace. Les raisons les plus courantes sont : numéro de téléphone pas assez visible, pas d'appel à l'action clair, absence d'avis clients et de photos de chantier, ou référencement local inexistant. Un audit extérieur permet d'identifier les erreurs invisibles pour celui qui a construit le site.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleSiteWebPlombierErreursDevis2026;
