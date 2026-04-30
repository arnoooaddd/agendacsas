import { Link } from "react-router-dom";
import { CheckCircle, FileText, LayoutTemplate, MousePointerClick, Smartphone, Target } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleLandingPageRenovation = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          Beaucoup d'entreprises de rénovation paient des clics Google Ads ou Meta Ads vers des pages qui <strong>n'aident pas vraiment le prospect à passer à l'action</strong>. Une bonne <strong>landing page rénovation</strong> ne doit pas juste être jolie : elle doit rassurer, filtrer et convertir plus de demandes qualifiées en rendez-vous.
        </p>
      </div>
    </section>

    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">📑 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#pourquoi-landing-page" className="hover:text-primary transition-colors">1. Pourquoi une landing page change la rentabilité des campagnes</a></li>
            <li><a href="#elements-conversion" className="hover:text-primary transition-colors">2. Les éléments qui font vraiment convertir</a></li>
            <li><a href="#erreurs-landing-page" className="hover:text-primary transition-colors">3. Les erreurs les plus fréquentes</a></li>
            <li><a href="#plan-30-jours" className="hover:text-primary transition-colors">4. Un plan simple pour améliorer votre page en 30 jours</a></li>
            <li><a href="#conclusion-landing-page" className="hover:text-primary transition-colors">5. Conclusion</a></li>
            <li><a href="#faq-landing-page" className="hover:text-primary transition-colors">6. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="pourquoi-landing-page">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <MousePointerClick size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi une landing page change la rentabilité de vos campagnes
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Une campagne peut générer du trafic sans générer de vrais rendez-vous. Le problème ne vient pas toujours du ciblage ou du coût par clic. Très souvent, le blocage se situe sur <strong>la page d'atterrissage</strong>.
      </p>
      <p className="text-muted-foreground mb-4">
        Si la page mélange trop d'informations, n'explique pas clairement l'offre, ne montre pas assez de preuves ou ne guide pas le prospect vers une action simple, vous payez pour des visiteurs qui repartent sans conversion.
      </p>
      <p className="text-foreground font-medium mb-6">
        En rénovation, une bonne landing page doit rassurer vite, montrer des preuves concrètes et donner envie de demander un rendez-vous sans friction.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Une bonne landing page vous aide à :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />Améliorer le taux de conversion de vos clics</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />Attirer des demandes plus qualifiées</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />Réduire le coût par rendez-vous</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />Mieux rentabiliser Google Ads, Meta Ads et le retargeting</li>
        </ul>
      </div>

      <p className="text-muted-foreground mt-6">
        Pour comprendre comment cette page s'insère dans l'ensemble du système, lisez aussi <Link to="/blog/marketing-renovation-habitat-generation-leads" className="text-primary hover:underline">pourquoi la publicité fonctionne (et pourquoi vous perdez de l'argent)</Link>.
      </p>
    </section>

    <section className="mb-12" id="elements-conversion">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <LayoutTemplate size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les éléments qui font vraiment convertir une landing page rénovation
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">1. Une promesse claire</h3>
          <p className="text-muted-foreground text-sm">Le prospect doit comprendre en quelques secondes ce que vous proposez, pour qui, et dans quelle zone.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">2. Des preuves visibles</h3>
          <p className="text-muted-foreground text-sm">Avis, chantiers, avant/après, résultats, photos réelles, vidéos et témoignages augmentent la confiance.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">3. Une offre simple</h3>
          <p className="text-muted-foreground text-sm">Un seul objectif principal : audit, devis, rappel, simulation ou prise de rendez-vous. Pas cinq CTA concurrents.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">4. Un formulaire sans friction</h3>
          <p className="text-muted-foreground text-sm">Demandez seulement les informations utiles. Trop de champs tuent la conversion.</p>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Les pages qui performent le mieux en rénovation ont souvent 3 qualités :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• elles parlent du problème du prospect avant de parler de l'entreprise</li>
          <li>• elles montrent des preuves rapidement</li>
          <li>• elles rendent l'étape suivante évidente</li>
        </ul>
      </div>

      <p className="text-muted-foreground mt-6">
        Si vous voulez améliorer la crédibilité globale qui entoure la page, lisez aussi <Link to="/blog/branding-local-entreprise-renovation" className="text-primary hover:underline">notre guide sur le branding local rénovation</Link>.
      </p>
    </section>

    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Une campagne rentable commence rarement par plus de budget,
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          mais souvent par une meilleure page entre le clic et le rendez-vous.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="erreurs-landing-page">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <FileText size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les erreurs les plus fréquentes sur une landing page rénovation
        </h2>
      </div>

      <ul className="space-y-3 text-muted-foreground">
        <li className="flex items-start gap-3"><span className="text-accent mt-1">•</span>Renvoi vers une page trop générale au lieu d'une page dédiée à l'offre ou à la campagne.</li>
        <li className="flex items-start gap-3"><span className="text-accent mt-1">•</span>Un design correct mais aucune preuve concrète que vous savez livrer.</li>
        <li className="flex items-start gap-3"><span className="text-accent mt-1">•</span>Trop de texte institutionnel et pas assez de réponses aux vraies objections.</li>
        <li className="flex items-start gap-3"><span className="text-accent mt-1">•</span>Une page peu lisible sur mobile alors qu'une grande partie du trafic vient du téléphone.</li>
      </ul>

      <div className="bg-muted/50 border border-border rounded-xl p-6 mt-6">
        <div className="flex items-center gap-3 mb-3">
          <Smartphone size={18} className="text-primary" />
          <p className="font-semibold text-foreground">Le mobile n'est pas un détail</p>
        </div>
        <p className="text-muted-foreground">
          Si vos sections sont trop longues, que le formulaire est mal placé ou que le texte devient pénible à lire sur téléphone, vous perdez des conversions avant même la qualification commerciale.
        </p>
      </div>
    </section>

    <section className="mb-12" id="plan-30-jours">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <Target size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Un plan simple en 30 jours pour améliorer votre page
        </h2>
      </div>

      <div className="space-y-6">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Semaine 1 — clarifier la promesse</h3>
          <p className="text-muted-foreground">Définissez l'offre, la cible, la zone et le CTA unique de la page. Supprimez le superflu.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Semaine 2 — renforcer les preuves</h3>
          <p className="text-muted-foreground">Ajoutez avis, cas concrets, photos ou captures utiles pour crédibiliser l'offre.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Semaine 3 — simplifier le parcours</h3>
          <p className="text-muted-foreground">Réduisez la friction du formulaire et vérifiez la lisibilité mobile sur les sections critiques.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Semaine 4 — mesurer et itérer</h3>
          <p className="text-muted-foreground">Comparez le taux de conversion, le coût par lead et surtout le coût par rendez-vous qualifié.</p>
        </div>
      </div>

      <p className="text-muted-foreground mt-6">
        Si vous vous demandez quel trafic envoyer en priorité sur cette page, consultez aussi <Link to="/blog/google-ads-meta-ads-entreprise-renovation" className="text-primary hover:underline">Google Ads vs Meta Ads en rénovation</Link>.
      </p>
    </section>

    <section className="mb-12" id="conclusion-landing-page">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Conclusion</h2>
      <p className="text-muted-foreground mb-4">
        Une landing page rénovation performante n'est pas une page "design" en plus. C'est un actif commercial qui transforme votre trafic en opportunités.
      </p>
      <p className="text-muted-foreground mb-4">
        Quand la promesse est claire, les preuves sont visibles et l'action est simple, la page convertit mieux — et vos campagnes deviennent enfin plus rentables.
      </p>
      <p className="text-foreground font-semibold text-lg">
        Si vous payez déjà pour du trafic, optimiser la page est souvent le levier le plus rapide à rentabiliser.
      </p>
    </section>

    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Vous voulez une page qui transforme vos clics en vrais rendez-vous qualifiés ?
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          Structurez une landing page pensée pour la conversion, pas juste pour la présence en ligne.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-landing-page">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Questions fréquentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quelle différence entre une landing page et une page classique de site ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Une landing page est pensée pour un objectif unique de conversion. Elle réduit les distractions et guide le prospect vers une action précise : demande, devis, rappel ou rendez-vous.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Une landing page améliore-t-elle vraiment Google Ads ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui. Une meilleure page peut augmenter le taux de conversion, réduire le coût par lead et améliorer la qualité perçue du prospect qui prend contact.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Que faut-il montrer en priorité sur une page rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Une promesse claire, votre zone d'intervention, des preuves concrètes, un appel à l'action simple et un formulaire sans friction. Le prospect doit comprendre vite pourquoi il peut vous faire confiance.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il une page différente pour chaque campagne ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Souvent oui. Plus la page est alignée avec l'intention de recherche ou le message publicitaire, plus elle a de chances de convertir proprement.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    <section className="mb-12">
      <h3 className="text-lg font-bold text-foreground font-display mb-4">📚 Articles connexes</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <Link to="/blog/branding-local-entreprise-renovation" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Branding local rénovation : devenir l'entreprise qu'on recommande</p>
        </Link>
        <Link to="/blog/google-ads-meta-ads-entreprise-renovation" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Google Ads vs Meta Ads : quelle plateforme lancer ?</p>
        </Link>
        <Link to="/blog/marketing-renovation-habitat-generation-leads" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Pourquoi la publicité fonctionne (et pourquoi vous perdez de l'argent)</p>
        </Link>
        <Link to="/blog/contacter-leads-facebook-ads-renovation-rdv" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Comment contacter efficacement des leads réseaux sociaux</p>
        </Link>
      </div>
    </section>
  </div>
);

export default ArticleLandingPageRenovation;
