import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BadgeCheck, Building2, FileText, PhoneCall, Shield, Target } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleSiteWebCouvreurConfianceDevis2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Un particulier qui cherche un couvreur ne compare pas que les tarifs. Il cherche un professionnel fiable, capable d'intervenir sur l'un des éléments les plus sensibles de sa maison : la toiture.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Votre site web est le premier filtre. En quelques secondes, le visiteur décide si vous êtes digne de confiance ou non. Un site bien construit ne se contente pas d'être beau : il rassure, il prouve, et il convertit. Voici comment construire un site de couvreur qui génère des <strong>demandes de devis qualifiées de façon régulière</strong>.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#confiance-premier-declencheur" className="hover:text-primary transition-colors">1. La confiance, premier déclencheur de contact</a></li>
            <li><a href="#elements-reassurance" className="hover:text-primary transition-colors">2. Les éléments qui rassurent avant le premier appel</a></li>
            <li><a href="#presentation-entreprise" className="hover:text-primary transition-colors">3. Pourquoi la présentation de votre entreprise fait la différence</a></li>
            <li><a href="#preuve-par-image" className="hover:text-primary transition-colors">4. Des réalisations visibles qui font la preuve par l'image</a></li>
            <li><a href="#avis-garanties" className="hover:text-primary transition-colors">5. Les avis clients et garanties : un levier sous-estimé</a></li>
            <li><a href="#site-prospect" className="hover:text-primary transition-colors">6. Le lien direct entre site et génération de prospects</a></li>
            <li><a href="#faq-site-couvreur" className="hover:text-primary transition-colors">7. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <p className="text-muted-foreground mb-4">
      Un site de couvreur performant est un site qui répond à une question simple avant même qu'elle ne soit posée : "Puis-je confier ma toiture à cette entreprise ?"
    </p>
    <p className="text-muted-foreground mb-4">
      Si la réponse n'est pas immédiatement évidente en quelques secondes, le visiteur passe au concurrent suivant. Dans le BTP et la rénovation de toiture, chaque seconde de doute coûte une opportunité commerciale.
    </p>
    <p className="text-muted-foreground mb-8">
      Les entreprises de couverture qui investissent dans un site optimisé pour la confiance constatent en moyenne <strong>3 à 6 contacts supplémentaires par semaine</strong> dans les premières semaines. À 2 500 € le devis moyen en rénovation de toiture, l'impact sur le chiffre d'affaires est immédiat.
    </p>

    <section className="mb-12" id="confiance-premier-declencheur">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Shield size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          La confiance, premier déclencheur de contact
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un problème de toiture génère des inquiétudes légitimes : infiltrations, coût des travaux, peur d'un travail mal exécuté, difficulté à juger du sérieux d'un artisan. Le client potentiel n'est pas encore prêt à appeler. Il cherche d'abord des signes de fiabilité.
      </p>
      <p className="text-muted-foreground mb-4">
        Avant même le premier échange téléphonique, votre site web doit répondre à cette question implicite : "Est-ce que je peux confier ma toiture à cette entreprise ?"
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le bon réflexe :</p>
        <p className="text-muted-foreground mb-0">
          Ne partez pas du principe que votre notoriété locale suffit. Un visiteur qui ne vous connaît pas a besoin de <strong>preuves visibles en moins de 5 secondes</strong> : qui vous êtes, où vous intervenez, ce que vous avez déjà réalisé.
        </p>
      </div>
    </section>

    <section className="mb-12" id="elements-reassurance">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <BadgeCheck size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les éléments qui rassurent un client avant même le premier appel
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un site de couvreur qui convertit bien repose sur plusieurs piliers de réassurance. En voici les plus déterminants pour le secteur de la couverture et de la rénovation de toiture.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Un site de couvreur crédible doit impérativement afficher :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Le nom de l'entreprise, sa zone d'intervention et son ancienneté</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Des photos de chantiers réels avec avant/après contextualisés</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Des avis Google récents et des témoignages clients vérifiables</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />L'assurance décennale, les garanties et les certifications</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Un numéro de téléphone visible et un formulaire de contact simple</li>
        </ul>
      </div>

      <p className="mt-4 text-muted-foreground">
        Chacun de ces éléments joue un rôle précis dans le processus de décision. Un particulier ne passe pas à l'action parce que votre site est joli. Il passe à l'action parce qu'il se sent en sécurité.
      </p>
    </section>

    <section className="mb-12" id="presentation-entreprise">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Building2 size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi la présentation de votre entreprise fait la différence
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        L'erreur la plus fréquente sur les sites d'artisans et d'entreprises de couverture : parler uniquement des prestations sans jamais présenter l'entreprise. Le visiteur lit "rénovation toiture, zinguerie, isolation" mais ne sait toujours pas à qui il a affaire.
      </p>
      <p className="text-muted-foreground mb-4">
        Un site de couvreur efficace affiche clairement : le nom de l'entreprise, les années d'expérience, la zone d'intervention (villes ou départements couverts), et la spécialisation précise (réparation, rénovation complète, zinguerie, toiture végétalisée).
      </p>

      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <p className="font-semibold text-foreground mb-3">Pourquoi c'est essentiel :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Un visiteur qui identifie immédiatement l'entreprise se sent plus en sécurité</li>
          <li>• Une entreprise identifiable inspire toujours plus confiance qu'un site anonyme</li>
          <li>• Les coordonnées et la zone d'intervention doivent être visibles sans scroller</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="preuve-par-image">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Target size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Des réalisations visibles qui font la preuve par l'image
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        En couverture comme en rénovation, les preuves visuelles sont ce qu'il y a de plus convaincant. Un particulier veut voir ce que vous êtes capable de réaliser avant de vous contacter. C'est un réflexe naturel : on achète ce qu'on peut visualiser.
      </p>
      <p className="text-muted-foreground mb-4">
        Les photos de chantiers réels, les avant/après, et les différents types de travaux (toiture, zinguerie, rénovation, réparation) doivent être mis en avant sur le site. Chaque réalisation gagne à être contextualisée : type de toiture, nature des travaux, zone géographique, problématique client résolue.
      </p>
      <p className="text-muted-foreground mb-4">
        Cette contextualisation permet au visiteur de se projeter et de se reconnaître dans des situations concrètes. Plus le cas présenté ressemble à son propre besoin, plus le passage à l'action est naturel et rapide.
      </p>
    </section>

    <section className="mb-12" id="avis-garanties">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <FileText size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les avis clients et garanties : un levier de conversion sous-estimé
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Les avis clients sont aujourd'hui l'un des éléments de réassurance les plus puissants pour les entreprises de couverture. Un couvreur bien noté sur Google inspire immédiatement plus de sérénité. Mais beaucoup d'entreprises les cachent ou les rendent difficiles à trouver sur leur site.
      </p>
      <p className="text-muted-foreground mb-4">
        Un site qui convertit bien affiche des avis Google récents, des témoignages clients réels, et éventuellement des notes ou extraits visibles dès la page d'accueil. L'impact est direct : les avis rassurent, réduisent les doutes, et augmentent significativement le taux de contact.
      </p>
      <p className="text-muted-foreground mb-4">
        De la même manière, l'assurance décennale, les garanties proposées et les certifications doivent être visibles sans avoir à les chercher. Beaucoup d'entreprises les mentionnent en bas de page ou les oublient complètement. Les afficher clairement, c'est transformer un argument juridique en levier commercial concret.
      </p>
    </section>

    <section className="mb-12" id="site-prospect">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <PhoneCall size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le lien direct entre site web et génération de prospects qualifiés
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un site de couvreur bien construit ne se limite pas à rassurer. Il devient un véritable outil de génération de leads. Chaque visiteur rassuré est un visiteur qui passe à l'action : appel téléphonique, demande de devis, formulaire de contact.
      </p>
      <p className="text-muted-foreground mb-4">
        Pour maximiser ce passage à l'action, le site doit guider le visiteur de manière claire : numéro de téléphone visible en haut de page, formulaire simple avec les informations essentielles, messages rassurants (devis gratuit, réponse rapide, intervention locale). Un visiteur rassuré mais sans indication claire ne passera pas à l'action.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le piège à éviter :</p>
        <p className="text-muted-foreground mb-0">
          Beaucoup d'entreprises investissent dans un site mais oublient que <strong>la performance ne s'arrête pas à la mise en ligne</strong>. Sans référencement local, sans Google Business Profile optimisé, sans avis récents, même le plus beau site reste invisible. C'est la combinaison d'un site professionnel et d'une stratégie de visibilité qui transforme une vitrine en machine à leads.
        </p>
      </div>
    </section>

    <section className="mb-16" id="quand-strategie-fait-difference">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">
          Quand le site ne suffit plus, la stratégie d'acquisition fait la différence
        </h2>
        <p className="text-muted-foreground mb-4">
          Créer un site de couvreur n'est pas le vrai problème. Le vrai problème, c'est de créer un site visible localement, qui génère des demandes qualifiées, et qui s'intègre dans un vrai système d'acquisition continue.
        </p>
        <p className="text-muted-foreground mb-4">
          Si vous avez déjà essayé de gérer votre site, vos annonces et votre suivi commercial en interne, vous savez que le temps passé sur le marketing est du temps que vous ne passez pas à développer votre entreprise, former vos équipes ou signer des chantiers.
        </p>
        <p className="text-muted-foreground mb-6">
          C'est précisément là qu'un accompagnement structuré en <Link to="/creation-site-internet" className="text-primary hover:underline">création de site internet orienté performance</Link> prend tout son sens : l'objectif n'est pas de vous vendre un site, mais de mettre en place un système de génération de leads prévisible qui ne s'arrête jamais.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-site-couvreur">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quels sont les éléments les plus importants sur un site de couvreur ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les photos de chantiers réels, les avis Google visibles, l'assurance décennale affichée, un numéro de téléphone clair, et une présentation de l'entreprise avec sa zone d'intervention. Ces cinq éléments couvrent l'essentiel de la réassurance avant le premier contact.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien de temps faut-il pour qu'un site web de couvreur génère des demandes ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Avec un site optimisé SEO local et une fiche Google Business Profile complète, les premiers contacts apparaissent généralement sous 4 à 8 semaines. Le volume augmente avec le nombre d'avis Google et la consolidation du référencement dans votre zone d'intervention.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il un site vitrine ou un site avec blog pour un couvreur ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Un site vitrine bien construit avec pages métiers, réalisations, avis et formulaire de contact suffit dans la majorité des cas. Un blog peut aider le référencement local si vous publiez régulièrement, mais ce n'est pas la priorité pour générer des demandes de devis en couverture.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quel budget prévoir pour un site web professionnel de couvreur en 2026 ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Le coût dépend du niveau d'accompagnement : un site simple peut démarrer autour de 1 500 €, tandis qu'un site professionnel avec stratégie de contenu, SEO local et accompagnement agence se situe entre 3 000 € et 8 000 €. L'essentiel est de choisir une solution qui inclut la visibilité, pas seulement la conception du site.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleSiteWebCouvreurConfianceDevis2026;
