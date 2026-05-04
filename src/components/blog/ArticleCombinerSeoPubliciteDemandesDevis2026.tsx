import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BadgeCheck, BarChart3, Globe, MapPinned, Rocket, Search, Target } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleCombinerSeoPubliciteDemandesDevis2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Beaucoup d'entreprises de rénovation opposent encore SEO et publicité. Elles pensent qu'il faut choisir entre travailler le long terme ou acheter des résultats immédiats.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          En réalité, les entreprises qui génèrent le plus de demandes sérieuses en 2026 combinent les deux. Le <strong>SEO crée un socle durable</strong>, la <strong>publicité accélère la captation de la demande</strong>, et l'ensemble fonctionne beaucoup mieux quand le site, les pages et le suivi commercial sont alignés.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#pourquoi-ne-pas-opposer" className="hover:text-primary transition-colors">1. Pourquoi il ne faut plus opposer SEO et publicité</a></li>
            <li><a href="#ce-que-fait-le-seo" className="hover:text-primary transition-colors">2. Ce que le SEO apporte vraiment</a></li>
            <li><a href="#ce-que-fait-la-pub" className="hover:text-primary transition-colors">3. Ce que la publicité apporte vraiment</a></li>
            <li><a href="#comment-les-combiner" className="hover:text-primary transition-colors">4. Comment les combiner intelligemment</a></li>
            <li><a href="#erreurs-courantes" className="hover:text-primary transition-colors">5. Les erreurs les plus fréquentes</a></li>
            <li><a href="#plan-90-jours" className="hover:text-primary transition-colors">6. Le plan d'action 90 jours</a></li>
            <li><a href="#faq-seo-publicite" className="hover:text-primary transition-colors">7. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="pourquoi-ne-pas-opposer">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Target size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi il ne faut plus opposer SEO et publicité
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le SEO et la publicité ne répondent pas au même horizon de temps, mais ils poursuivent le même objectif : faire apparaître votre entreprise au bon moment, face à la bonne demande, avec la bonne promesse.
      </p>
      <p className="text-muted-foreground mb-4">
        Dans la rénovation, un prospect peut découvrir votre marque via une publicité, revenir plus tard via Google, puis comparer vos pages, vos avis et vos réalisations avant de demander un devis. Si ces leviers ne sont pas pensés ensemble, vous perdez en cohérence et en rentabilité.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Une combinaison bien structurée permet de :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />générer des demandes plus vite</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />mieux convertir le trafic payé</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />réduire la dépendance à l'achat de leads</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />occuper davantage d'espace dans les résultats Google</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="ce-que-fait-le-seo">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Search size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Ce que le SEO apporte vraiment à une entreprise de rénovation
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le référencement naturel ne sert pas seulement à “faire du trafic”. Il sert à faire remonter les bonnes pages sur les bonnes requêtes : service, zone géographique, problème, besoin de devis, comparaison de solutions.
      </p>
      <p className="text-muted-foreground mb-4">
        Un bon SEO en rénovation repose rarement sur un seul blog. Il repose sur des pages métiers solides, des pages locales crédibles, une structure de site claire et des preuves qui rassurent avant le premier contact.
      </p>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Visibilité durable</h3>
          <p className="text-muted-foreground">Vous construisez un actif qui continue à attirer des demandes sans repayer chaque clic.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Crédibilité commerciale</h3>
          <p className="text-muted-foreground">Un prospect qui trouve une page claire, locale et rassurante arrive beaucoup plus mûr qu'un simple clic sans contexte.</p>
        </div>
      </div>

      <p className="text-muted-foreground mt-6">
        Si vous voulez renforcer ce socle, lisez aussi <Link to="/blog/referencement-btp-google-ia-generatives-2026" className="text-primary hover:underline">comment structurer votre référencement BTP en 2026</Link>.
      </p>
    </section>

    <section className="mb-12" id="ce-que-fait-la-pub">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Rocket size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Ce que la publicité apporte vraiment
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        La publicité permet d'accélérer. Elle vous positionne rapidement sur des requêtes à forte intention ou devant des audiences précises, même si votre SEO n'est pas encore suffisamment avancé.
      </p>
      <p className="text-muted-foreground mb-4">
        Mais une campagne ne vaut que par la page qu'elle alimente, le message qu'elle porte et la manière dont le lead est ensuite traité. Sinon, vous achetez du trafic sans système de conversion.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le bon usage :</p>
        <p className="text-muted-foreground mb-0">
          utiliser Google Ads, Meta Ads ou d'autres formats pour capter ou créer la demande, puis rediriger vers des pages conçues pour convertir vraiment.
        </p>
      </div>
    </section>

    <section className="mb-12" id="comment-les-combiner">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <BarChart3 size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment combiner SEO et publicité intelligemment
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        L'erreur classique consiste à gérer le SEO d'un côté et la publicité de l'autre. En réalité, les deux doivent se nourrir mutuellement.
      </p>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">1. Construire des pages utiles avant d'acheter du trafic</h3>
          <p className="text-muted-foreground">Des pages par service, des landing pages dédiées, des formulaires visibles et des preuves concrètes. Sans cette base, votre coût d'acquisition grimpe vite.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">2. Utiliser les données pub pour prioriser le SEO</h3>
          <p className="text-muted-foreground">Les termes qui cliquent, les zones qui convertissent et les offres qui performent donnent des signaux très utiles pour vos futures pages et contenus SEO.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">3. Relier le tout au suivi commercial</h3>
          <p className="text-muted-foreground">Le vrai arbitrage ne se fait pas au clic. Il se fait sur les rendez-vous, les devis utiles, le taux de signature et la rentabilité par canal.</p>
        </div>
      </div>

      <p className="text-muted-foreground mt-6">
        Si votre site ne soutient pas encore cette logique, commencez par <Link to="/blog/site-web-btp-erreurs-coutent-demandes-devis-2026" className="text-primary hover:underline">corriger les erreurs qui bloquent vos demandes</Link>.
      </p>
    </section>

    <section className="mb-12" id="erreurs-courantes">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <MapPinned size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les erreurs les plus fréquentes
        </h2>
      </div>

      <ul className="space-y-3 text-muted-foreground">
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>lancer des campagnes vers une page générique qui ne correspond pas à l'intention de recherche</li>
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>travailler le SEO sans pages locales ou sans offres clairement séparées</li>
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>mesurer les clics mais pas la qualité commerciale des demandes</li>
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>considérer le SEO comme un chantier éditorial isolé au lieu d'un levier d'acquisition connecté au reste</li>
      </ul>
    </section>

    <section className="mb-12" id="plan-90-jours">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Globe size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le plan d'action 90 jours
        </h2>
      </div>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 1 à 30</h3>
          <p className="text-muted-foreground">Audit des pages existantes, des zones prioritaires, du suivi CRM et des campagnes déjà actives.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 31 à 60</h3>
          <p className="text-muted-foreground">Création ou refonte des pages d'atterrissage prioritaires, lancement ou nettoyage des campagnes, premiers arbitrages par intention et zone.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 61 à 90</h3>
          <p className="text-muted-foreground">Exploitation des données pour le SEO, renforcement des pages qui convertissent, optimisation du coût par demande utile et amélioration du traitement commercial.</p>
        </div>
      </div>
    </section>

    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Quand faut-il se faire accompagner ?</p>
        <p className="text-foreground font-semibold text-lg mb-4">
          Quand vous avez déjà du trafic, des campagnes ou un site, mais pas encore un système clair pour transformer tout ça en demandes rentables.
        </p>
        <p className="text-muted-foreground mb-6">
          À ce stade, le sujet n'est plus “faut-il faire du SEO ou de la pub ?”. Le vrai sujet est comment les faire travailler ensemble avec les bons messages, les bonnes pages et le bon pilotage.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-seo-publicite">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il lancer la publicité avant d'avoir un bon SEO ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui, c'est possible, à condition d'avoir au moins des landing pages solides et un bon suivi. Sinon, vous achetez des clics sans créer de base durable.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Le SEO peut-il réduire le coût de la publicité ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui, indirectement. Un site mieux structuré et plus rassurant convertit mieux le trafic payé, ce qui améliore la rentabilité globale de vos campagnes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quelles données publicitaires sont les plus utiles pour le SEO ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les requêtes qui convertissent, les zones qui performent, les offres les plus demandées et les messages qui déclenchent les meilleurs taux de clic ou de conversion.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleCombinerSeoPubliciteDemandesDevis2026;
