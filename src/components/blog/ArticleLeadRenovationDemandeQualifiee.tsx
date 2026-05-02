import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BadgeCheck, CalendarClock, Euro, Filter, Home, PhoneCall, Target } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleLeadRenovationDemandeQualifiee = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          Toutes les demandes ne se valent pas. En rénovation, beaucoup d'entreprises perdent du temps à faire des devis pour des prospects qui <strong>n'ont ni le bon projet, ni le bon budget, ni la bonne maturité</strong>. Savoir reconnaître une demande vraiment qualifiée permet de protéger votre temps commercial, d'améliorer votre taux de signature et de rentabiliser beaucoup mieux votre acquisition.
        </p>
      </div>
    </section>

    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#pourquoi-qualifier-avant-deviser" className="hover:text-primary transition-colors">1. Pourquoi qualifier avant de faire un devis</a></li>
            <li><a href="#criteres-lead-qualifie" className="hover:text-primary transition-colors">2. Les critères d'un lead rénovation vraiment qualifié</a></li>
            <li><a href="#questions-a-poser" className="hover:text-primary transition-colors">3. Les bonnes questions à poser rapidement</a></li>
            <li><a href="#eviter-les-faux-bons-leads" className="hover:text-primary transition-colors">4. Comment éviter les faux bons leads</a></li>
            <li><a href="#mieux-filtrer-plus-signer" className="hover:text-primary transition-colors">5. Mieux filtrer pour signer plus</a></li>
            <li><a href="#conclusion-lead" className="hover:text-primary transition-colors">6. Conclusion</a></li>
            <li><a href="#faq-lead" className="hover:text-primary transition-colors">7. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="pourquoi-qualifier-avant-deviser">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Target size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi il faut qualifier une demande avant de passer du temps sur un devis
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Beaucoup d'entreprises réagissent à chaque demande comme si elle était automatiquement bonne. Résultat : rendez-vous inutiles, devis qui ne reviennent jamais signés, temps perdu, équipes frustrées et coût d'acquisition mal rentabilisé.
      </p>
      <p className="text-muted-foreground mb-4">
        En réalité, un lead qualifié n'est pas juste quelqu'un qui remplit un formulaire. C'est un prospect qui correspond à votre zone, à votre type de chantier, à votre niveau de prix, à votre planning et à votre façon de vendre.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Bien qualifier permet de :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />concentrer le temps commercial sur les bons prospects</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />réduire les devis envoyés pour rien</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />améliorer le taux de rendez-vous réellement utiles</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />augmenter le pourcentage de chantiers signés</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="criteres-lead-qualifie">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Filter size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les critères d'un lead rénovation vraiment qualifié
        </h2>
      </div>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2"><Home size={18} className="text-primary" /><h3 className="text-lg font-bold text-foreground font-display">1. Le type de projet</h3></div>
          <p className="text-muted-foreground">Le chantier correspond-il à ce que vous faites vraiment ? Isolation, toiture, rénovation globale, pompe à chaleur, menuiserie : plus le projet colle à votre spécialité, plus la demande a de valeur.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2"><Euro size={18} className="text-primary" /><h3 className="text-lg font-bold text-foreground font-display">2. Le budget</h3></div>
          <p className="text-muted-foreground">Un prospect peut être intéressé sans avoir la capacité financière de faire le chantier. Mieux vaut savoir tôt si le budget est réaliste pour éviter les devis hors cible.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2"><CalendarClock size={18} className="text-primary" /><h3 className="text-lg font-bold text-foreground font-display">3. Le timing</h3></div>
          <p className="text-muted-foreground">Travaux urgents, projet à 3 mois, réflexion vague pour l'année prochaine : ce n'est pas le même niveau de priorité. Le timing change totalement la qualité réelle du lead.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2"><PhoneCall size={18} className="text-primary" /><h3 className="text-lg font-bold text-foreground font-display">4. La joignabilité et la motivation</h3></div>
          <p className="text-muted-foreground">Un lead difficile à joindre ou peu impliqué peut vite consommer beaucoup d'énergie. La réactivité, la clarté des réponses et la motivation sont des signaux utiles.</p>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mt-6">
        <p className="text-foreground font-medium mb-2">Autres filtres importants :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• la zone géographique est-elle rentable pour vous ?</li>
          <li>• le prospect est-il propriétaire ou simple occupant ?</li>
          <li>• y a-t-il une vraie urgence ou juste de la curiosité ?</li>
          <li>• le projet est-il compatible avec votre niveau de prix et votre organisation ?</li>
        </ul>
      </div>
    </section>

    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Le bon lead n'est pas celui qui demande un devis.</p>
        <p className="text-foreground font-semibold text-lg mb-6">C'est celui qui correspond à votre offre, votre zone, votre prix et votre timing.</p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="questions-a-poser">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <PhoneCall size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les bonnes questions à poser rapidement
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un bon filtrage ne demande pas un interrogatoire de 20 minutes. Il demande les bonnes questions, posées tôt, avec une logique claire.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Projet</h3>
          <p className="text-muted-foreground text-sm">Quel type de travaux ? Sur quel bien ? Quelle surface ? Quel niveau d'avancement ?</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Budget</h3>
          <p className="text-muted-foreground text-sm">Le prospect a-t-il déjà une enveloppe ? Cherche-t-il uniquement un prix le plus bas ?</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Timing</h3>
          <p className="text-muted-foreground text-sm">Quand veut-il lancer ? Pourquoi maintenant ? Y a-t-il une contrainte ?</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Décision</h3>
          <p className="text-muted-foreground text-sm">Est-ce le décideur ? Est-il propriétaire ? Compare-t-il plusieurs entreprises ?</p>
        </div>
      </div>

      <p className="text-muted-foreground">
        Si vous voulez affiner cette étape, relisez aussi <Link to="/blog/lead-renovation-demande-vraiment-qualifiee" className="text-primary hover:underline">comment reconnaître une demande vraiment qualifiée</Link> et <Link to="/blog/devis-renovation-transformer-demandes-chantiers-signes" className="text-primary hover:underline">comment transformer plus de demandes en chantiers signés</Link>.
      </p>
    </section>

    <section className="mb-12" id="eviter-les-faux-bons-leads">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Filter size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment éviter les faux bons leads
        </h2>
      </div>

      <ul className="space-y-3 text-muted-foreground">
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>un prospect très pressé mais sans budget n'est pas forcément un bon lead</li>
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>un formulaire complet ne veut pas dire que le chantier vous correspond</li>
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>un lead motivé mais hors zone ou hors spécialité reste un mauvais usage du temps commercial</li>
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>un comparateur de prix sans vraie intention peut faire perdre beaucoup d'énergie pour peu de chance de signature</li>
      </ul>
    </section>

    <section className="mb-12" id="mieux-filtrer-plus-signer">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <Target size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Mieux filtrer pour signer plus
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le but n'est pas d'avoir moins de demandes. Le but est d'avoir <strong>plus de bonnes demandes</strong> et de mieux traiter celles qui comptent vraiment.
      </p>
      <p className="text-muted-foreground mb-4">
        En améliorant votre page, votre prise de contact, votre protocole de qualification et vos critères internes, vous augmentez la qualité moyenne du pipeline et la rentabilité de chaque campagne.
      </p>
    </section>

    <section className="mb-12" id="conclusion-lead">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Conclusion</h2>
      <p className="text-muted-foreground mb-4">
        Une demande vraiment qualifiée est celle qui a le bon projet, au bon moment, dans la bonne zone, avec la bonne motivation et une capacité réaliste à avancer.
      </p>
      <p className="text-foreground font-semibold text-lg">
        Plus vous reconnaissez tôt les bons leads, plus vous protégez votre temps et augmentez votre taux de chantiers signés.
      </p>
    </section>

    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Vous voulez filtrer mieux sans ralentir vos équipes ?</p>
        <p className="text-foreground font-semibold text-lg mb-6">Structurez un système simple qui distingue vite les demandes sérieuses des pertes de temps.</p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-lead">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Un lead qualifié, c'est juste quelqu'un qui répond au téléphone ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Non. Être joignable est un bon signal, mais la vraie qualification dépend aussi du projet, du budget, du timing, de la zone et de l'adéquation avec votre entreprise.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il demander le budget tout de suite ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui, mais intelligemment. Il ne s'agit pas de braquer le prospect, mais de savoir rapidement si le projet est réaliste par rapport à votre niveau de prestation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Un lead hors zone peut-il rester intéressant ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Parfois, mais seulement si le panier moyen et les conditions de chantier rendent l'opération rentable. Sinon, il vaut mieux filtrer tôt.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleLeadRenovationDemandeQualifiee;
