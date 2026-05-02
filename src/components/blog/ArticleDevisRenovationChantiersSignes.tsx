import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock3, FileText, PhoneCall, Target, UserCheck } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleDevisRenovationChantiersSignes = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          Recevoir des demandes de devis ne suffit pas. En rénovation, beaucoup d'entreprises génèrent du volume mais <strong>transforment mal entre la demande initiale et le chantier signé</strong>. Le vrai sujet n'est pas seulement le lead. C'est tout le parcours : vitesse de rappel, qualification, réassurance, relance, prise de rendez-vous et qualité de la page qui capte la demande.
        </p>
      </div>
    </section>

    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#pourquoi-demandes-ne-deviennent-pas-chantiers" className="hover:text-primary transition-colors">1. Pourquoi les demandes ne deviennent pas des chantiers</a></li>
            <li><a href="#qualifier-vite-et-bien" className="hover:text-primary transition-colors">2. Qualifier vite et proprement</a></li>
            <li><a href="#rassurer-avant-le-rendez-vous" className="hover:text-primary transition-colors">3. Rassurer avant même le rendez-vous</a></li>
            <li><a href="#suivi-relance-rdv" className="hover:text-primary transition-colors">4. Relance, rendez-vous, suivi : là où se joue la signature</a></li>
            <li><a href="#optimiser-le-parcours" className="hover:text-primary transition-colors">5. Comment optimiser le parcours complet</a></li>
            <li><a href="#conclusion-devis" className="hover:text-primary transition-colors">6. Conclusion</a></li>
            <li><a href="#faq-devis" className="hover:text-primary transition-colors">7. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="pourquoi-demandes-ne-deviennent-pas-chantiers">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Target size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi beaucoup de demandes de devis ne deviennent jamais des chantiers
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Beaucoup d'entreprises de rénovation pensent que le problème vient uniquement du trafic ou de la qualité des leads. En réalité, une grande partie de la perte se produit <strong>après la demande</strong> : rappel trop tardif, qualification trop faible, proposition peu claire, rendez-vous mal préparé ou absence de vraie relance.
      </p>
      <p className="text-muted-foreground mb-4">
        Un prospect qui remplit un formulaire n'est pas encore un chantier. C'est une opportunité à transformer. Et cette transformation dépend d'un enchaînement précis d'actions commerciales et marketing.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Les fuites les plus fréquentes :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />rappel trop tardif après la demande</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />prise de rendez-vous sur des prospects mal qualifiés</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />manque de preuves ou de crédibilité avant le premier échange</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />absence de système de relance structuré</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="qualifier-vite-et-bien">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <PhoneCall size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Qualifier vite et proprement
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        La vitesse de contact joue énormément. Plus vous rappelez vite, plus vous augmentez vos chances de joindre le prospect pendant que l'intention est chaude. Mais vitesse ne veut pas dire précipitation. L'objectif est de qualifier sans friction : besoin, budget, zone, délai, niveau d'avancement.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">1. Rappel rapide</h3>
          <p className="text-muted-foreground text-sm">Idéalement dans les minutes qui suivent, ou à défaut avec un protocole de relance clair le jour même.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">2. Qualification utile</h3>
          <p className="text-muted-foreground text-sm">Ne prenez pas tous les rendez-vous. Filtrez pour protéger le temps commercial et améliorer le taux de signature.</p>
        </div>
      </div>

      <p className="text-muted-foreground">
        Si vous voulez mieux structurer cette étape, lisez aussi <Link to="/blog/qualification-prospect-tunnel-vente-renovation" className="text-primary hover:underline">les 4 niveaux de qualification d'un prospect en rénovation</Link>.
      </p>
    </section>

    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Le problème n'est pas seulement de générer plus de demandes.</p>
        <p className="text-foreground font-semibold text-lg mb-6">Le vrai levier, c'est de mieux transformer celles que vous avez déjà.</p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="rassurer-avant-le-rendez-vous">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <UserCheck size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Rassurer avant même le rendez-vous
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Beaucoup de prospects demandent plusieurs devis. Si vous n'installez pas rapidement de la confiance, vous entrez dans une comparaison purement tarifaire. La réassurance doit intervenir avant l'appel, avant le rendez-vous et avant l'envoi du devis.
      </p>

      <ul className="space-y-3 text-muted-foreground">
        <li className="flex items-start gap-3"><span className="text-accent mt-1">•</span>montrez des réalisations concrètes et locales</li>
        <li className="flex items-start gap-3"><span className="text-accent mt-1">•</span>envoyez des preuves simples : avis, avant/après, captures, références</li>
        <li className="flex items-start gap-3"><span className="text-accent mt-1">•</span>clarifiez le déroulé : appel, visite, devis, planning</li>
        <li className="flex items-start gap-3"><span className="text-accent mt-1">•</span>gardez un discours clair, expert, rassurant, sans jargon inutile</li>
      </ul>

      <div className="bg-muted/50 border border-border rounded-xl p-6 mt-6">
        <div className="flex items-center gap-3 mb-3">
          <FileText size={18} className="text-primary" />
          <p className="font-semibold text-foreground">Le rôle de la page qui capte la demande</p>
        </div>
        <p className="text-muted-foreground">
          Une page trop vague ou trop générique attire des demandes faibles. Une page claire, bien structurée et rassurante améliore déjà la qualité du prospect avant même la première prise de contact.
        </p>
      </div>
    </section>

    <section className="mb-12" id="suivi-relance-rdv">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Clock3 size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Relance, rendez-vous, suivi : là où se joue la signature
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        La plupart des entreprises relancent trop peu, trop tard, ou sans méthode. Pourtant, une relance structurée fait souvent la différence entre un devis oublié et un chantier signé.
      </p>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Avant le rendez-vous</h3>
          <p className="text-muted-foreground">Confirmez, rappelez l'objectif, montrez quelques preuves, réduisez le no-show.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Après le rendez-vous</h3>
          <p className="text-muted-foreground">Ne laissez pas le prospect seul avec le devis. Suivez, reformulez, traitez les objections et gardez le contact.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Pendant la phase de décision</h3>
          <p className="text-muted-foreground">Un bon suivi donne de la clarté, pas de la pression. Il faut rassurer, recadrer la valeur et maintenir le momentum.</p>
        </div>
      </div>

      <p className="text-muted-foreground mt-6">
        Pour la partie prise de rendez-vous, vous pouvez aussi lire <Link to="/blog/externaliser-prise-rdv-entreprise-renovation" className="text-primary hover:underline">pourquoi externaliser sa prise de rendez-vous en rénovation</Link>.
      </p>
    </section>

    <section className="mb-12" id="optimiser-le-parcours">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <Target size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment optimiser tout le parcours de la demande au chantier signé
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Clarifier l'entrée</h3>
          <p className="text-muted-foreground text-sm">Une meilleure landing page attire des demandes plus cohérentes et réduit le bruit commercial.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Standardiser la qualification</h3>
          <p className="text-muted-foreground text-sm">Questions, script, critères de priorité : moins d'improvisation, plus de qualité.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Structurer la relance</h3>
          <p className="text-muted-foreground text-sm">Une séquence claire évite que les devis s'évaporent après l'envoi.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Mesurer le vrai tunnel</h3>
          <p className="text-muted-foreground text-sm">Ne mesurez pas juste le nombre de demandes. Mesurez appels joints, rendez-vous tenus, devis envoyés et signatures.</p>
        </div>
      </div>
    </section>

    <section className="mb-12" id="conclusion-devis">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Conclusion</h2>
      <p className="text-muted-foreground mb-4">
        Transformer plus de demandes en chantiers signés n'est pas juste une affaire de closing. C'est la conséquence d'un parcours mieux pensé : meilleure page, meilleur filtrage, meilleure vitesse de rappel, meilleure réassurance et meilleur suivi.
      </p>
      <p className="text-foreground font-semibold text-lg">
        Si vous améliorez ce parcours de bout en bout, vous augmentez la valeur de chaque demande déjà générée.
      </p>
    </section>

    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Vous voulez transformer plus de demandes en vrais chantiers signés ?</p>
        <p className="text-foreground font-semibold text-lg mb-6">Structurez un parcours commercial clair entre le clic, la demande, le rendez-vous et la signature.</p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-devis">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Pourquoi mes demandes de devis ne se transforment pas ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Le plus souvent à cause d'un cumul : trafic trop peu qualifié, rappel trop lent, manque de relance, manque de preuves, rendez-vous mal préparé ou devis laissé sans suivi.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il améliorer d'abord la page ou la prise de rendez-vous ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les deux comptent. Une bonne page améliore la qualité des demandes. Une bonne prise de rendez-vous améliore la conversion derrière. Le meilleur résultat vient de l'ensemble du parcours.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quelle métrique suivre en priorité ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Ne regardez pas seulement le volume de leads. Suivez aussi le taux de joignabilité, le taux de rendez-vous, le taux de devis envoyés et surtout le taux de chantiers signés.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleDevisRenovationChantiersSignes;
