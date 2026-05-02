import { Link } from "react-router-dom";
import { Building2, CheckCircle, MapPin, Star, Target } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleBrandingLocalRenovation = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          En rénovation, <strong>la marque locale</strong> fait souvent la différence avant même le premier appel. Si votre entreprise n'est pas le nom qui revient spontanément dans votre zone, vous laissez vos concurrents capter les meilleurs dossiers. Voici comment construire un <strong>branding local rénovation</strong> qui rassure, attire plus de prospects qualifiés et augmente vos rendez-vous.
        </p>
      </div>
    </section>

    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#pourquoi-branding-local" className="hover:text-primary transition-colors">1. Pourquoi le branding local change votre acquisition</a></li>
            <li><a href="#signaux-a-travailler" className="hover:text-primary transition-colors">2. Les signaux qui font gagner la confiance</a></li>
            <li><a href="#plan-90-jours" className="hover:text-primary transition-colors">3. Un plan simple sur 90 jours</a></li>
            <li><a href="#erreurs-frequentes" className="hover:text-primary transition-colors">4. Les erreurs qui bloquent votre image</a></li>
            <li><a href="#conclusion-branding" className="hover:text-primary transition-colors">5. Conclusion</a></li>
            <li><a href="#faq-branding" className="hover:text-primary transition-colors">6. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="pourquoi-branding-local">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <MapPin size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi le branding local change votre acquisition
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        En théorie, un prospect compare des devis. En pratique, il compare d'abord un <strong>niveau de confiance</strong>.
      </p>
      <p className="text-muted-foreground mb-4">
        Quand une entreprise est déjà visible dans sa zone, qu'elle publie du contenu clair, qu'elle montre des chantiers cohérents et qu'on retrouve son nom plusieurs fois pendant la recherche, elle part avec une avance énorme.
      </p>
      <p className="text-foreground font-medium mb-6">
        Résultat : plus de clics, plus de réponses, plus de rendez-vous… et moins de pression sur le prix.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Concrètement, un bon branding local vous aide à :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />Être reconnu avant même la prise de contact</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />Améliorer le taux de conversion de vos campagnes Google Ads et Facebook Ads</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />Rassurer des prospects plus haut de gamme</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />Réduire la dépendance aux plateformes de leads</li>
        </ul>
      </div>

      <p className="text-muted-foreground mt-6">
        Si vous voulez d'abord comprendre pourquoi dépendre de plateformes externes fragilise votre acquisition, lisez aussi <Link to="/blog/achat-leads-renovation-mauvaise-strategie" className="text-primary hover:underline">pourquoi acheter des leads en rénovation est une mauvaise stratégie</Link>.
      </p>
    </section>

    <section className="mb-12" id="signaux-a-travailler">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Star size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les signaux qui font gagner la confiance localement
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le branding local n'est pas un logo plus joli. C'est l'accumulation de preuves qui disent au prospect : <em>"Cette entreprise est réelle, structurée, et déjà reconnue près de chez moi."</em>
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">1. Une présence cohérente</h3>
          <p className="text-muted-foreground text-sm">Même promesse, même positionnement, mêmes preuves sur le site, les réseaux et les campagnes.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">2. Des preuves locales</h3>
          <p className="text-muted-foreground text-sm">Chantiers, avis, avant/après, vidéos, témoignages et résultats ancrés dans votre zone réelle.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">3. Une prise de parole claire</h3>
          <p className="text-muted-foreground text-sm">Des messages simples sur le type de projet, la zone couverte et le niveau de service proposé.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">4. Un suivi commercial solide</h3>
          <p className="text-muted-foreground text-sm">Une image forte ne sert à rien si vos prospects ne sont pas rappelés vite et proprement.</p>
        </div>
      </div>

      <p className="text-muted-foreground">
        Sur le suivi commercial, cet article complète bien <Link to="/blog/contacter-leads-facebook-ads-renovation-rdv" className="text-primary hover:underline">notre guide pour contacter efficacement les leads réseaux sociaux</Link>.
      </p>
    </section>

    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Si votre entreprise est peu mémorisée localement,
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          vos campagnes paient souvent le manque de confiance de votre marque.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="plan-90-jours">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Target size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Un plan simple sur 90 jours pour devenir la référence de votre zone
        </h2>
      </div>

      <div className="space-y-6">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 1 à 30 — clarifier le positionnement</h3>
          <p className="text-muted-foreground">Définissez précisément votre zone, votre cible, vos offres les plus rentables et la promesse qui vous différencie. Sans ça, votre branding reste flou.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 31 à 60 — publier des preuves locales</h3>
          <p className="text-muted-foreground">Mettez en avant des chantiers, résultats, témoignages et explications pédagogiques. Le prospect doit se projeter facilement.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 61 à 90 — amplifier avec l'acquisition</h3>
          <p className="text-muted-foreground">Appuyez ce capital de confiance avec des campagnes Google Ads et Meta Ads bien ciblées, puis un process de relance rapide.</p>
        </div>
      </div>

      <p className="text-muted-foreground mt-6">
        Pour mieux calibrer les canaux à activer, consultez aussi <Link to="/blog/google-ads-meta-ads-entreprise-renovation" className="text-primary hover:underline">Google Ads vs Meta Ads en rénovation</Link> et <Link to="/blog/retargeting-leads-perdus-renovation-habitat" className="text-primary hover:underline">notre guide sur le retargeting des prospects perdus</Link>.
      </p>
    </section>

    <section className="mb-12" id="erreurs-frequentes">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <Building2 size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les erreurs qui bloquent votre image locale
        </h2>
      </div>

      <ul className="space-y-3 text-muted-foreground">
        <li className="flex items-start gap-3"><span className="text-destructive mt-1">•</span>Parler comme tout le monde avec des promesses vagues du type “qualité et sérieux”.</li>
        <li className="flex items-start gap-3"><span className="text-destructive mt-1">•</span>Changer de message selon le support, ce qui casse la mémorisation.</li>
        <li className="flex items-start gap-3"><span className="text-destructive mt-1">•</span>Montrer uniquement des visuels génériques au lieu de preuves terrain.</li>
        <li className="flex items-start gap-3"><span className="text-destructive mt-1">•</span>Investir en acquisition avant d'avoir une marque perçue comme crédible.</li>
      </ul>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mt-6">
        <p className="text-foreground font-medium">
          Le branding local ne remplace pas votre tunnel de vente. Il le rend plus efficace.
        </p>
        <p className="text-muted-foreground mt-2">
          Si le sujet du tunnel vous intéresse, lisez aussi <Link to="/blog/qualification-prospect-tunnel-vente-renovation" className="text-primary hover:underline">les 4 niveaux de qualification d'un prospect en rénovation</Link>.
        </p>
      </div>
    </section>

    <section className="mb-12" id="conclusion-branding">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Conclusion</h2>
      <p className="text-muted-foreground mb-4">
        Dans la rénovation, la bataille se gagne rarement uniquement sur le budget média.
      </p>
      <p className="text-muted-foreground mb-4">
        Elle se gagne quand votre entreprise devient <strong>le nom rassurant et évident</strong> dans la tête des bons prospects de votre zone.
      </p>
      <p className="text-foreground font-semibold text-lg">
        Plus votre branding local est fort, plus votre acquisition devient rentable.
      </p>
    </section>

    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Vous voulez générer plus de rendez-vous sans dépendre d'une marque invisible ?
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          Structurez une acquisition qui renforce votre image locale au lieu de la fragiliser.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-branding">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Questions fréquentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            C'est quoi le branding local pour une entreprise de rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            C'est l'ensemble des signaux qui font que votre entreprise est reconnue, rassurante et recommandable dans une zone géographique précise : identité claire, preuves locales, contenu cohérent, avis, visibilité et suivi commercial.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Le branding local aide-t-il vraiment Google Ads et Facebook Ads ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui. Une marque plus crédible améliore souvent le taux de clic, le taux de conversion et la qualité perçue du prospect. Les campagnes performent mieux quand elles amplifient une réputation cohérente au lieu de compenser une marque faible.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            En combien de temps peut-on sentir un effet ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les premiers signaux peuvent apparaître en quelques semaines, mais l'effet cumulatif se construit sur plusieurs mois. Le plus rapide est souvent de clarifier la promesse, publier des preuves locales et mieux relancer les prospects entrants.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il d'abord travailler la marque ou d'abord lancer de la pub ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les deux doivent avancer ensemble, mais une base de marque claire est essentielle. Sinon, vous achetez du trafic sans maximiser la confiance ni la conversion de vos rendez-vous.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    <section className="mb-12">
      <h3 className="text-lg font-bold text-foreground font-display mb-4">📚 Articles connexes</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <Link to="/blog/generation-leads-fiables-entreprise-renovation" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Comment se démarquer des arnaques en rénovation</p>
        </Link>
        <Link to="/blog/google-ads-meta-ads-entreprise-renovation" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Google Ads vs Meta Ads : quelle plateforme lancer en rénovation ?</p>
        </Link>
        <Link to="/blog/retargeting-leads-perdus-renovation-habitat" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Comment recibler ses prospects en rénovation</p>
        </Link>
        <Link to="/blog/qualification-prospect-tunnel-vente-renovation" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Les 4 niveaux de qualification d'un prospect en rénovation</p>
        </Link>
      </div>
    </section>
  </div>
);

export default ArticleBrandingLocalRenovation;
