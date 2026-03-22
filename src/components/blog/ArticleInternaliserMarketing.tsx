import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, TrendingUp, Users, BarChart3, Target, DollarSign } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";
import ArticleVideoSection from "./ArticleVideoSection";

const ArticleInternaliserMarketing = () => (
  <div className="prose-custom">
    {/* Résumé */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          Faut-il <strong>internaliser ou externaliser son marketing</strong> quand on dirige une entreprise de rénovation à +1M€ ? Cet article compare le vrai <strong>coût agence marketing vs salarié</strong>, montre pourquoi 90% des internalisations échouent, et explique comment une <em>agence marketing rénovation</em> spécialisée accélère votre croissance.
        </p>
      </div>
    </section>

    {/* Sommaire */}
    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">📑 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#pourquoi-internalisent" className="hover:text-primary transition-colors">1. Pourquoi les entreprises internalisent (et se plantent)</a></li>
            <li><a href="#marketing-metier" className="hover:text-primary transition-colors">2. Le marketing digital est un métier</a></li>
            <li><a href="#cas-concret" className="hover:text-primary transition-colors">3. Cas concret : Arnaud, dirigeant en extension de maison</a></li>
            <li><a href="#externaliser-correctement" className="hover:text-primary transition-colors">4. Ce qui change quand vous externalisez correctement</a></li>
            <li><a href="#verite-business" className="hover:text-primary transition-colors">5. Internaliser vs externaliser : la vérité business</a></li>
            <li><a href="#entreprises-reussissent" className="hover:text-primary transition-colors">6. Ce que les entreprises qui réussissent font différemment</a></li>
            <li><a href="#vraie-question-im" className="hover:text-primary transition-colors">7. La vraie question à vous poser</a></li>
            <li><a href="#conclusion-im" className="hover:text-primary transition-colors">8. Conclusion</a></li>
            <li><a href="#faq-im" className="hover:text-primary transition-colors">9. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    {/* Introduction */}
    <section className="mb-12">
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Vous faites +1M€ dans la <strong>rénovation de l'habitat</strong>.
      </p>
      <p className="text-lg text-foreground font-medium mb-4">
        Et vous vous posez sûrement cette question :
      </p>
      <p className="text-foreground font-semibold text-xl mb-4">
        👉 Est-ce que je dois <strong>recruter en interne</strong>… ou passer par une <em>agence marketing rénovation</em> ?
      </p>
      <p className="text-muted-foreground mb-4">Sur le papier, <strong>internaliser</strong> paraît logique.</p>
      <p className="text-foreground font-semibold">
        Dans la réalité, c'est souvent une erreur qui coûte très cher.
      </p>
    </section>

    {/* Section 1 */}
    <section className="mb-12" id="pourquoi-internalisent">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi la plupart des entreprises de rénovation internalisent (et se plantent)
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Quand une boîte commence à structurer sa croissance, le réflexe est toujours le même :
      </p>
      <p className="text-foreground font-medium italic mb-6">
        "On va <strong>recruter quelqu'un en marketing</strong>, ça sera plus rentable."
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Sauf que voilà ce qui se passe vraiment 👇</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Un salaire (souvent <strong>3 500 à 4 000 € mensuels</strong> chargés)</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Des formations à plusieurs milliers d'euros</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Du budget pub… utilisé pour <em>apprendre</em></li>
        </ul>
        <p className="text-foreground font-medium mt-4">👉 Résultat : des dizaines de milliers d'euros dépensés sans visibilité sur le <strong>ROI</strong></p>
      </div>
    </section>

    {/* Section 2 */}
    <section className="mb-12" id="marketing-metier">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Target size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le vrai problème : le marketing digital est un métier
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Faire de la <strong>publicité rénovation</strong> aujourd'hui, ce n'est pas "lancer une campagne Facebook".
      </p>
      <h3 className="text-lg font-bold text-foreground font-display mb-3">C'est :</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Du <strong>tracking précis</strong> (sinon vous pilotez à l'aveugle)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Des tests structurés</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Une compréhension des <em>algorithmes</em> (qui changent en permanence)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Une <strong>stratégie marketing rénovation</strong> globale (offre + créa + tunnel)</li>
      </ul>

      <p className="text-muted-foreground mb-2">Sans ça ?</p>
      <p className="text-foreground font-semibold">👉 Chaque euro sert à tester… pas à générer du chiffre.</p>
    </section>

    {/* Section 3 */}
    <section className="mb-12" id="cas-concret">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Users size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Cas concret : Arnaud, dirigeant dans l'extension de maison
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Arnaud (comme beaucoup) a commencé en <strong>interne</strong>.
      </p>
      <ul className="space-y-1 text-muted-foreground mb-4">
        <li>• Recrutement</li>
        <li>• Formation à <strong>8 000 €</strong></li>
        <li>• Budget pub conséquent</li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Mais derrière ?</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Tracking <em>mal configuré</em></li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Campagnes mal optimisées</strong></li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Aucune vision claire du <strong>ROI publicité rénovation</strong></li>
        </ul>
        <p className="text-foreground font-medium mt-4">👉 Impossible de savoir ce qui fonctionne.</p>
      </div>
    </section>

    {/* Section 4 */}
    <section className="mb-12" id="externaliser-correctement">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Ce qui change quand vous externalisez correctement
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Quand on a commencé à travailler ensemble, on n'a pas "essayé".
      </p>
      <p className="text-foreground font-medium mb-2">
        On a appliqué des <strong>méthodes déjà validées</strong>.
      </p>
      <p className="text-foreground font-semibold mb-6">
        👉 Issues de <strong>+630 000 € dépensés en publicité</strong>.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
        <p className="font-semibold text-foreground mb-3">Résultat immédiat :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Plus de tests à l'aveugle</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Visibilité sur chaque euro investi</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Système d'acquisition</strong> structuré</li>
        </ul>
      </div>

      <p className="text-foreground font-medium">Et surtout :</p>
      <p className="text-foreground font-semibold text-lg mt-2">👉 Moins de stress, plus de contrôle</p>
      <p className="text-muted-foreground mt-2">
        <Link to="/resultats-clients-agendac" className="text-primary hover:underline font-medium">→ Voir nos résultats clients</Link>
      </p>
    </section>

    {/* CTA milieu */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Si aujourd'hui vous dépendez encore de l'<strong>achat de leads</strong> ou que vos campagnes ne sont pas rentables,
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          il est temps de structurer un vrai <strong>système d'acquisition</strong>.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* Section 5 */}
    <section className="mb-12" id="verite-business">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <BarChart3 size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Internaliser vs externaliser : la vérité business
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        <strong>Internaliser le marketing</strong>, ce n'est pas mauvais.
      </p>
      <p className="text-muted-foreground mb-2">Mais dans <strong>90% des cas</strong> :</p>
      <ul className="space-y-1 text-muted-foreground mb-6">
        <li>👉 Vous payez pour apprendre</li>
        <li>👉 Vous perdez du temps</li>
        <li>👉 Vous brûlez du cash</li>
      </ul>

      <p className="text-foreground font-medium mb-2">
        <strong>Externaliser le marketing</strong>, ce n'est pas "payer plus".
      </p>
      <p className="text-foreground font-semibold">
        👉 C'est payer pour aller plus vite et <em>éviter les erreurs</em>.
      </p>
    </section>

    {/* Section 6 */}
    <section className="mb-12" id="entreprises-reussissent">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Ce que les entreprises de rénovation qui réussissent font différemment
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Elles ne cherchent pas à tout faire elles-mêmes.
      </p>
      <h3 className="text-lg font-bold text-foreground font-display mb-3">Elles :</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Se concentrent sur leur cœur de métier</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> S'appuient sur des <strong>experts en acquisition</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Structurent un vrai <strong>système</strong> (et pas juste des campagnes)</li>
      </ul>

      <p className="text-foreground font-semibold">👉 Résultat : croissance plus stable, plus <em>prévisible</em></p>
    </section>

    {/* Section 7 */}
    <section className="mb-12" id="vraie-question-im">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <DollarSign size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          La vraie question à vous poser
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">Ce n'est pas :</p>
      <p className="text-muted-foreground line-through mb-4">
        ❌ "Combien ça coûte d'<strong>externaliser</strong> ?"
      </p>
      <p className="text-muted-foreground mb-2">Mais plutôt :</p>
      <p className="text-foreground font-semibold text-lg">
        👉 Combien vous coûte le fait de <strong>ne pas être structuré</strong> aujourd'hui ?
      </p>
    </section>

    {/* À retenir */}
    <section className="mb-12">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-foreground font-display mb-4">📌 À retenir</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground"><strong>Internaliser</strong> coûte souvent plus cher que prévu : salaire, formation, budget pub d'apprentissage.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground"><strong>Externaliser</strong>, c'est acheter de l'expertise et de la vitesse — pas juste un prestataire.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">Les entreprises qui réussissent structurent un <strong>système d'acquisition</strong>, pas juste des campagnes.</span>
          </li>
        </ul>
      </div>
    </section>

    {/* Conclusion */}
    <section className="mb-12" id="conclusion-im">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Conclusion</h2>
      <p className="text-muted-foreground mb-4">
        Le <strong>marketing dans la rénovation de l'habitat</strong> a changé.
      </p>
      <p className="text-muted-foreground mb-4">
        Ce n'est plus une option.
      </p>
      <p className="text-muted-foreground mb-4">
        Mais mal fait, c'est un centre de coût.
      </p>
      <p className="text-foreground font-medium mb-4">
        Bien structuré, c'est un <strong>levier de croissance</strong> énorme.
      </p>
      <p className="text-foreground font-semibold text-lg">
        👉 Et la différence entre les deux, c'est l'<em>expertise</em>.
      </p>
    </section>

    {/* CTA final */}
    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Vous faites +1M€ de CA dans la <strong>rénovation</strong> ?
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          Voyez comment structurer un <strong>système d'acquisition</strong> rentable.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ SEO */}
    <section className="mb-12" id="faq-im">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Questions fréquentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien coûte l'internalisation du marketing en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            En comptant le salaire chargé (<strong>3 500 à 4 000 €/mois</strong>), les formations, les outils et le budget publicitaire d'apprentissage, le <strong>coût réel dépasse souvent 60 000 € la première année</strong> — sans garantie de résultats.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quels sont les avantages d'externaliser son marketing en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Vous bénéficiez immédiatement de l'<strong>expertise</strong>, des méthodes validées et d'un <em>système d'acquisition</em> déjà optimisé. Résultat : moins de tests à l'aveugle, une visibilité sur chaque euro investi et une <strong>rentabilité marketing rénovation</strong> plus rapide.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Comment choisir une agence marketing pour la rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Privilégiez une <strong>agence marketing rénovation</strong> spécialisée dans votre secteur, avec des <Link to="/resultats-clients-agendac" className="text-primary hover:underline">résultats prouvés</Link>, un <em>système d'acquisition</em> structuré et une transparence totale sur les performances et le ROI.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Agence marketing ou salarié : que choisir pour le BTP ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Pour les entreprises de <strong>BTP et rénovation</strong> à +1M€ de CA, <em>externaliser le marketing</em> est presque toujours plus rentable au départ. Vous accédez à une expertise immédiate, vous évitez les coûts cachés du recrutement et vous obtenez des résultats mesurables dès les premiers mois.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Maillage interne */}
    <section className="mb-12">
      <h3 className="text-lg font-bold text-foreground font-display mb-4">📚 Articles connexes</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <Link to="/blog/pourquoi-acheter-des-leads-renovation-mauvaise-strategie-2026" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Pourquoi acheter des leads en rénovation est une mauvaise stratégie en 2026</p>
        </Link>
        <Link to="/blog/arreter-achat-leads-renovation" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Arrêter d'acheter des leads : sortir de la guerre des prix en 5 étapes</p>
        </Link>
        <Link to="/blog/marketing-renovation-habitat-publicite-leads" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Marketing rénovation habitat : pourquoi la publicité fonctionne</p>
        </Link>
        <Link to="/blog/google-ads-vs-facebook-ads-renovation" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Google Ads vs Facebook Ads rénovation : lequel choisir ?</p>
        </Link>
      </div>
    </section>
  </div>
);

export default ArticleInternaliserMarketing;