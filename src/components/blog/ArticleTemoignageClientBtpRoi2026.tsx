import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BadgeCheck, Building2, FileText, Target, Users, Video } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleTemoignageClientBtpRoi2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Dans le bâtiment et la rénovation, la meilleure preuve commerciale n'est pas un catalogue technique. C'est un chantier que vous avez déjà réalisé et un client prêt à en parler.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Les entreprises du BTP et de la rénovation qui capitalisent systématiquement sur leurs réalisations concrètes gagnent un avantage décisif : elles n'ont pas besoin de convaincre, elles montrent. En 2026, alors que la concurrence se dispute les mêmes appels d'offres, le témoignage client et le chantier de référence deviennent <strong>les actifs marketing au meilleur retour sur investissement</strong>.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#temoignage-vs-argumentaire" className="hover:text-primary transition-colors">1. Pourquoi le témoignage client est plus efficace qu'un argumentaire technique</a></li>
            <li><a href="#chantier-reference-acquisition" className="hover:text-primary transition-colors">2. Ce qu'un chantier de référence apporte concrètement à votre acquisition</a></li>
            <li><a href="#regles-temoignage-convertit" className="hover:text-primary transition-colors">3. Les 3 règles d'un témoignage qui convertit vraiment</a></li>
            <li><a href="#diffuser-temoignages-strategie" className="hover:text-primary transition-colors">4. Diffuser vos témoignages dans votre stratégie commerciale</a></li>
            <li><a href="#structurer-accompagnement" className="hover:text-primary transition-colors">5. Quand structurer une démarche de contenu avec un accompagnement</a></li>
            <li><a href="#faq-temoignage-btp" className="hover:text-primary transition-colors">6. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="temoignage-vs-argumentaire">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Users size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi le témoignage client est plus efficace qu'un argumentaire technique
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un argumentaire technique décrit ce que vous faites. Un témoignage client montre ce que vous avez déjà fait, avec les résultats obtenus et les problèmes résolus. Dans un secteur où la réputation se construit chantier après chantier, la différence est décisive.
      </p>
      <p className="text-muted-foreground mb-4">
        Un prospect qui lit ou regarde un témoignage se projette. Il reconnaît une situation familière, suit la résolution, et s'identifie au résultat. Ce mécanisme de projection émotionnelle et rationnelle est précisément ce qui manque aux fiches techniques et aux présentations institutionnelles.
      </p>
      <p className="text-muted-foreground mb-4">
        Dans le BTP et la rénovation, le problème n'est presque jamais uniquement le trafic ou la notoriété. Il se situe souvent entre la promesse, la preuve et la décision. Le témoignage client est le chaînon manquant : il rassure sans insister, il prouve sans argumenter.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Un témoignage bien structuré répond à trois objections implicites :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />« est-ce que cette entreprise comprend vraiment mon type de chantier ? »</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />« est-ce qu'elle a déjà résolu des problèmes comme les miens ? »</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />« est-ce que je peux lui faire confiance sur un budget significatif ? »</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="chantier-reference-acquisition">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Building2 size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Ce qu'un chantier de référence apporte concrètement à votre acquisition
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Chaque chantier terminé est une preuve commerciale dormante. Le travail de fond consiste à transformer ces preuves en contenus diffusables, réutilisables et partageables.
      </p>
      <p className="text-muted-foreground mb-4">
        Pour une entreprise de rénovation qui intervient sur des marchés de toiture, façade, isolation, menuiserie ou chauffage, un chantier de référence bien raconté devient un actif commercial durable :
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Les bénéfices concrets d'un chantier de référence :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Un support de vente utilisable en rendez-vous client</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Un contenu publiable sur LinkedIn, le site web et les newsletters</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Un argument de réassurance pour les prospects en phase de décision</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Un levier de prescription : les architectes et maîtres d'ouvrage partagent ces références entre confrères</li>
        </ul>
      </div>

      <p className="text-muted-foreground mb-4">
        Les entreprises qui documentent systématiquement leurs chantiers gagnent un avantage concurrentiel direct : elles ne passent plus leur temps à prouver leur légitimité, elles consacrent leur énergie commerciale à convaincre sur le fond du projet.
      </p>
    </section>

    <section className="mb-12" id="regles-temoignage-convertit">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Target size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les 3 règles d'un témoignage qui convertit vraiment
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Tous les témoignages ne se valent pas. Un témoignage mal cadré, trop générique ou trop corporate peut même affaiblir votre crédibilité. Voici ce qui fait la différence sur le terrain.
      </p>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">1. Un cadrage narratif clair</h3>
          <p className="text-muted-foreground">
            Le témoignage doit suivre une séquence simple : situation initiale du client, problème concret rencontré, solution apportée par votre entreprise, résultat obtenu et ressenti. Sans cette structure, le message manque d'impact et ne donne pas au prospect les éléments pour se projeter.
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">2. Une parole incarnée, pas un texte corporate</h3>
          <p className="text-muted-foreground">
            Le client doit parler avec ses mots, son ton, ses vrais critères de décision. Un témoignage trop lissé, réécrit en langage commercial, perd toute crédibilité. La spontanéité maîtrisée est plus convaincante qu'un texte parfait.
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">3. Un format adapté à chaque canal</h3>
          <p className="text-muted-foreground">
            Une vidéo de 60 à 90 secondes pour le site web et LinkedIn. Une version rédactionnelle pour la newsletter et les propositions commerciales. Chaque format a son usage, mais le fond du message reste le même. Ce qui change, c'est la porte d'entrée du prospect.
          </p>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mt-5">
        <p className="text-foreground font-medium mb-2">Le bon réflexe :</p>
        <p className="text-muted-foreground mb-0">
          Avant de produire un seul témoignage, définissez les chantiers les plus représentatifs de votre cœur de métier. Un chantier de 50 000 € bien raconté vaut mieux qu'un chantier de 500 000 € mal documenté.
        </p>
      </div>
    </section>

    <section className="mb-12" id="diffuser-temoignages-strategie">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <FileText size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Diffuser vos témoignages dans votre stratégie commerciale
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un chantier de référence ne doit pas rester dans un dossier ou sur un disque dur. Il doit alimenter plusieurs points de contact avec vos prospects :
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Les canaux de diffusion à activer :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Sur votre site web, dans une rubrique « réalisations » ou « nos chantiers »</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Sur LinkedIn, en format post court ou carrousel illustré</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Dans vos propositions commerciales, en lien direct vers la vidéo ou la fiche chantier</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />Dans vos emailings de suivi et de nurturing</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />En introduction de rendez-vous commercial, comme support visuel d'ouverture</li>
        </ul>
      </div>

      <p className="text-muted-foreground mb-4">
        Plus vous multipliez les points de contact avec la même preuve, plus l'effet de réassurance s'installe dans la durée. Le prospect finit par considérer votre entreprise comme l'évidence, pas comme un choix risqué.
      </p>
      <p className="text-muted-foreground mb-4">
        C'est aussi un contenu qui sert votre référencement local : les pages dédiées aux chantiers sont souvent bien positionnées sur des recherches très ciblées, comme « rénovation toiture Lyon » ou « isolation façade Marseille », avec un fort potentiel de conversion.
      </p>
    </section>

    <section className="mb-12" id="structurer-accompagnement">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Video size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Quand structurer une démarche de contenu avec un accompagnement
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Produire régulièrement des témoignages et des chantiers de référence demande une méthode : identifier les bons chantiers, cadrer les interviews, produire le contenu (vidéo ou texte), le diffuser, le réutiliser.
      </p>
      <p className="text-muted-foreground mb-4">
        Les entreprises de rénovation qui internalisent sans méthode finissent souvent avec trois ou quatre témoignages filmés mais jamais montés, ou des articles de chantier qui dorment dans un dossier. Ce n'est pas un problème de bonne volonté, c'est un problème de système.
      </p>
      <p className="text-muted-foreground mb-4">
        Un accompagnement structuré permet de transformer cette production ponctuelle en un processus récurrent : un calendrier éditorial, des formats standardisés, une diffusion planifiée. Le témoignage client devient un actif qui travaille pour vous tous les mois, pas un coup ponctuel.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le bon réflexe :</p>
        <p className="text-muted-foreground mb-0">
          Si vous avez déjà trois ou quatre chantiers remarquables non documentés, vous avez un trésor commercial inexploité. Avant d'investir dans plus de trafic, commencez par <strong>transformer ce qui existe déjà en preuve diffusable</strong>. C'est le plus court chemin vers une meilleure conversion.
        </p>
      </div>
    </section>

    <section className="mb-16" id="quand-contenu-fait-difference">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">
          Quand la production de contenu devient un levier d'acquisition structuré
        </h2>
        <p className="text-muted-foreground mb-4">
          Capitaliser sur vos témoignages et chantiers de référence est le moyen le plus direct de gagner en crédibilité et en conversion, sans dépendre uniquement du volume de trafic. Mais cette démarche devient bien plus efficace quand elle s'inscrit dans une stratégie plus large : production vidéo professionnelle, diffusion multi-canal, réutilisation commerciale.
        </p>
        <p className="text-muted-foreground mb-6">
          Une agence comme Agendac peut structurer cette production dans une stratégie cohérente : <Link to="/tournage" className="text-primary hover:underline">tournage vidéo de témoignages clients</Link>, rédaction de fiches chantier, publication LinkedIn, réutilisation pour le site et la prospection. Le témoignage devient alors un actif récurrent qui travaille pour votre acquisition tous les mois.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-temoignage-btp">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quelle durée idéale pour un témoignage client vidéo dans le BTP ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Entre 60 et 90 secondes pour une diffusion digitale. Le temps de poser le problème, montrer la solution et donner le résultat. Au-delà, l'attention du prospect chute significativement. Pour un usage en rendez-vous commercial, une version plus longue de 3 à 4 minutes peut être utile.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il une autorisation du client pour publier un chantier de référence ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui, et c'est aussi une occasion de renforcer la relation. Proposer à un client de valoriser son chantier, c'est le remercier et le mettre en valeur. La grande majorité des clients acceptent, surtout si le contenu les présente sous leur meilleur jour. Un simple accord écrit suffit dans la plupart des cas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quel canal prioriser pour diffuser un témoignage BTP en 2026 ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            LinkedIn pour toucher les prescripteurs et décideurs professionnels. Le site web pour nourrir le référencement local et rassurer les prospects en phase de recherche. La proposition commerciale pour conclure en rendez-vous. Les trois canaux sont complémentaires et doivent être activés ensemble pour un effet maximal.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien coûte la production d'un témoignage client professionnel ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Le coût varie selon le format et le niveau de finition : un tournage simple avec interview peut démarrer autour de 800 à 1 500 € par témoignage, tandis qu'une production complète avec cadrage stratégique, montage et multi-diffusion peut aller de 2 000 à 5 000 €. L'essentiel est de le considérer comme un actif réutilisable, pas comme une dépense ponctuelle.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleTemoignageClientBtpRoi2026;
