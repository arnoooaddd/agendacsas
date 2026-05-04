import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BadgeCheck, Bot, Map, Search, Target, Wrench } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleReferencementBtpGoogleIa2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          En 2026, le référencement BTP ne se joue plus seulement sur Google. Vos prospects passent encore par la recherche classique, mais ils commencent aussi à poser leurs questions à ChatGPT, Gemini, Perplexity et aux réponses IA intégrées aux moteurs.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Pour une entreprise de rénovation déjà établie, l'enjeu n'est pas d'être visible partout. L'enjeu est d'être visible <strong>sur les bonnes requêtes, dans les bonnes zones, avec les bons contenus</strong> pour générer des demandes sérieuses et soutenables commercialement.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#pourquoi-seo-btp" className="hover:text-primary transition-colors">1. Pourquoi le référencement reste stratégique dans le BTP</a></li>
            <li><a href="#google-plus-suffisant" className="hover:text-primary transition-colors">2. Pourquoi Google seul ne suffit plus</a></li>
            <li><a href="#socle-seo-local" className="hover:text-primary transition-colors">3. Le socle SEO/local qu'une entreprise de rénovation doit maîtriser</a></li>
            <li><a href="#contenus-cites-ia" className="hover:text-primary transition-colors">4. Comment créer des contenus repris par les moteurs IA</a></li>
            <li><a href="#erreurs-frequentes-seo" className="hover:text-primary transition-colors">5. Les erreurs les plus fréquentes</a></li>
            <li><a href="#plan-90-jours" className="hover:text-primary transition-colors">6. La feuille de route 90 jours</a></li>
            <li><a href="#quand-se-faire-accompagner" className="hover:text-primary transition-colors">7. Quand faut-il se faire accompagner ?</a></li>
            <li><a href="#faq-referencement-btp" className="hover:text-primary transition-colors">8. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="pourquoi-seo-btp">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Search size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi le référencement reste stratégique dans le BTP
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Une stratégie de référencement BTP rentable est un système qui relie visibilité locale, pages métiers, preuves de réassurance et traitement commercial des demandes.
        Sans cette logique, le trafic ne devient pas un pipeline exploitable.
      </p>
      <p className="text-muted-foreground mb-4">
        Dans la rénovation de l'habitat, le site n'a pas pour seul rôle d'attirer des visiteurs. Il doit aider à faire émerger les bonnes recherches : isolation, toiture, pompe à chaleur, menuiserie, rénovation globale, audit énergétique, ou encore demandes localisées par ville ou zone d'intervention.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Un bon référencement sert à :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />capter une demande déjà active</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />rassurer avant même le premier appel</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />mieux qualifier les demandes entrantes</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />réduire la dépendance aux plateformes de leads achetés</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="google-plus-suffisant">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Bot size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi Google seul ne suffit plus
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Vos prospects utilisent toujours Google, Google Maps et les résultats locaux. Mais ils comparent aussi, résument et préqualifient via les moteurs IA. Ils demandent par exemple quel artisan choisir, quelle entreprise intervient sur leur zone, ou quelle solution semble la plus crédible pour leur type de travaux.
      </p>
      <p className="text-muted-foreground mb-4">
        Cela change la logique éditoriale. Vos contenus doivent rester bons pour le SEO classique, mais aussi faciles à comprendre, à citer et à reformuler. Un article confus, trop promotionnel ou mal structuré a moins de chances de remonter dans ces nouveaux usages.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le bon réflexe :</p>
        <p className="text-muted-foreground mb-0">
          Ne séparez pas “SEO Google” et “visibilité IA”. Travaillez un même socle : pages claires, FAQ utiles, exemples concrets, maillage logique et angle métier crédible.
        </p>
      </div>
    </section>

    <section className="mb-12" id="socle-seo-local">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Map size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le socle SEO/local qu'une entreprise de rénovation doit maîtriser
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Avant de vouloir “ressortir dans les IA”, il faut déjà que votre base soit solide. Pour une société de rénovation à +1 M€ de CA, cela passe rarement par un blog isolé. Cela passe par un ensemble cohérent de pages et de signaux locaux.
      </p>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">1. Des pages métiers distinctes</h3>
          <p className="text-muted-foreground">Isolation, toiture, façade, menuiserie, chauffage : chaque offre importante mérite sa page, avec sa promesse, ses preuves et ses questions fréquentes.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">2. Des pages locales crédibles</h3>
          <p className="text-muted-foreground">Votre zone d'intervention doit être visible et précise. Une entreprise qui couvre Lyon, Annecy ou Lille ne doit pas parler du territoire comme si tout se valait.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">3. Une fiche Google Business Profile cohérente</h3>
          <p className="text-muted-foreground">Avis, catégories, photos, cohérence des informations, rythme de publication : le local pack reste un point d'entrée majeur pour des demandes à forte intention.</p>
        </div>
      </div>

      <p className="text-muted-foreground mt-6">
        Si vous devez renforcer ce socle, relisez aussi <Link to="/blog/site-web-btp-erreurs-coutent-demandes-devis-2026" className="text-primary hover:underline">les erreurs de site web qui bloquent vos demandes</Link>.
      </p>
    </section>

    <section className="mb-12" id="contenus-cites-ia">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Wrench size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment créer des contenus repris par les moteurs IA
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Les moteurs IA aiment les contenus qui répondent clairement à une vraie question. Ils reprennent plus facilement un article qui explique bien un sujet concret qu'une page générique pleine de promesses vagues.
      </p>
      <p className="text-muted-foreground mb-4">
        Pour Agendac, cela veut dire produire des articles qui aident un dirigeant du BTP à comprendre une décision, un risque ou une méthode. Pas juste empiler des mots-clés.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Les contenus les plus utiles :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• des guides par métier ou problématique</li>
          <li>• des FAQ longues sur des questions concrètes</li>
          <li>• des pages locales enrichies de preuves et de cas terrain</li>
          <li>• des comparatifs et diagnostics orientés décision</li>
        </ul>
      </div>

      <p className="text-muted-foreground mt-6">
        Exemple terrain : une entreprise de rénovation énergétique qui publie un article précis sur “comment choisir une entreprise RGE à Toulouse pour une rénovation globale” sera plus utile aux moteurs qu'un texte flou sur “la qualité de service dans le bâtiment”.
      </p>
    </section>

    <section className="mb-12" id="erreurs-frequentes-seo">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <Target size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les erreurs les plus fréquentes
        </h2>
      </div>

      <ul className="space-y-3 text-muted-foreground">
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>viser des mots-clés trop larges au lieu de requêtes proches du chantier réel</li>
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>publier des articles génériques sans lien avec une offre, une zone ou une étape du parcours commercial</li>
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>oublier les pages locales et laisser la fiche Google Maps travailler seule</li>
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>ne jamais relier SEO, CRM et qualité des demandes remontées aux équipes</li>
      </ul>

      <p className="text-muted-foreground mt-6">
        Dans le BTP, le problème n'est presque jamais “on manque totalement de visibilité”. Le problème est plus souvent : on attire les mauvaises recherches, ou on convertit mal les bonnes.
      </p>
    </section>

    <section className="mb-12" id="plan-90-jours">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Target size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          La feuille de route 90 jours
        </h2>
      </div>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 1 à 30</h3>
          <p className="text-muted-foreground">Audit des pages métiers, vérification du SEO local, revue de la fiche Google Business Profile et des principales sources de trafic qualifié.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 31 à 60</h3>
          <p className="text-muted-foreground">Création ou refonte des pages prioritaires : offres à plus forte marge, zones les plus rentables, contenus FAQ et premiers articles de cluster.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 61 à 90</h3>
          <p className="text-muted-foreground">Mesure des demandes générées, qualification CRM, optimisation des contenus qui remontent déjà et extension des sujets les plus prometteurs.</p>
        </div>
      </div>
    </section>

    <section className="mb-16" id="quand-se-faire-accompagner">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Quand faut-il se faire accompagner ?</p>
        <p className="text-foreground font-semibold text-lg mb-4">
          Quand votre site existe déjà, mais que vous ne savez pas quelles pages doivent vraiment porter la croissance commerciale.
        </p>
        <p className="text-muted-foreground mb-6">
          Si vos équipes reçoivent peu de demandes organiques qualifiées, ou si votre visibilité locale reste faible malgré vos efforts, il faut souvent retravailler la structure, le ciblage et le lien entre contenu et traitement commercial.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-referencement-btp">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Le référencement BTP est-il encore rentable face à la publicité ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui, surtout pour les entreprises qui veulent réduire leur dépendance à l'achat de leads. Le SEO agit plus lentement, mais il crée un actif plus durable s'il est connecté à une vraie logique d'acquisition.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il créer du contenu pour Google ou pour les moteurs IA ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les deux. En pratique, un bon contenu pour Google est aussi un bon contenu pour les moteurs IA s'il est bien structuré, clair, concret et cohérent avec les questions réelles de vos prospects.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quel est le premier chantier SEO à lancer pour une entreprise de rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Commencez par vos pages métiers et vos pages locales les plus rentables. Ce sont souvent elles qui transforment le mieux la visibilité en demandes exploitables.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleReferencementBtpGoogleIa2026;
