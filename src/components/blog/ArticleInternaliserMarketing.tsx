import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, TrendingUp, Users, BarChart3, Target, DollarSign } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleInternaliserMarketing = () => (
  <div className="prose-custom">
    {/* Hook / Introduction */}
    <section className="mb-12">
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Vous faites +1M€ dans la rénovation de l'habitat.
      </p>
      <p className="text-lg text-foreground font-medium mb-4">
        Et vous vous posez sûrement cette question :
      </p>
      <p className="text-foreground font-semibold text-xl mb-4">
        👉 Est-ce que je dois recruter en interne… ou passer par une agence ?
      </p>
      <p className="text-muted-foreground mb-4">Sur le papier, internaliser paraît logique.</p>
      <p className="text-foreground font-semibold">
        Dans la réalité, c'est souvent une erreur qui coûte très cher.
      </p>
    </section>

    {/* Section 1 - Pourquoi les entreprises internalisent */}
    <section className="mb-12">
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
        "On va recruter quelqu'un en marketing, ça sera plus rentable."
      </p>

      <p className="text-muted-foreground mb-3">Sauf que voilà ce qui se passe vraiment 👇</p>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Un salaire (souvent 3 500 à 4 000 € mensuels chargés)</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Des formations à plusieurs milliers d'euros</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Du budget pub… utilisé pour apprendre</li>
        </ul>
        <p className="text-foreground font-medium mt-4">👉 Résultat : des dizaines de milliers d'euros dépensés sans visibilité</p>
      </div>
    </section>

    {/* Section 2 - Le marketing digital est un métier */}
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Target size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le vrai problème : le marketing digital est un métier
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Faire de la publicité aujourd'hui, ce n'est pas "lancer une campagne Facebook".
      </p>
      <p className="text-muted-foreground mb-3">C'est :</p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Du tracking précis (sinon vous pilotez à l'aveugle)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Des tests structurés</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Une compréhension des algorithmes (qui changent en permanence)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Une stratégie globale (offre + créa + tunnel)</li>
      </ul>

      <p className="text-muted-foreground mb-2">Sans ça ?</p>
      <p className="text-foreground font-semibold">👉 Chaque euro sert à tester… pas à générer du chiffre.</p>
    </section>

    {/* Section 3 - Cas concret */}
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Users size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Cas concret : Arnaud, dirigeant dans l'extension de maison
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Arnaud (comme beaucoup) a commencé en interne.
      </p>
      <ul className="space-y-1 text-muted-foreground mb-4">
        <li>• Recrutement</li>
        <li>• Formation à 8 000 €</li>
        <li>• Budget pub conséquent</li>
      </ul>

      <p className="text-muted-foreground mb-3">Mais derrière ?</p>
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Tracking mal configuré</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Campagnes mal optimisées</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Aucune vision claire du ROI</li>
        </ul>
        <p className="text-foreground font-medium mt-4">👉 Impossible de savoir ce qui fonctionne.</p>
      </div>
    </section>

    {/* Section 4 - Ce qui change */}
    <section className="mb-12">
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
        On a appliqué des méthodes déjà validées.
      </p>
      <p className="text-foreground font-semibold mb-6">
        👉 Issues de +630 000 € dépensés en publicité.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
        <p className="font-semibold text-foreground mb-3">Résultat immédiat :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Plus de tests à l'aveugle</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Visibilité sur chaque euro investi</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Système d'acquisition structuré</li>
        </ul>
      </div>

      <p className="text-foreground font-medium">Et surtout :</p>
      <p className="text-foreground font-semibold text-lg mt-2">👉 Moins de stress, plus de contrôle</p>
    </section>

    {/* CTA milieu */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Si aujourd'hui vous dépendez encore de l'achat de leads ou que vos campagnes ne sont pas rentables,
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          il est temps de structurer un vrai système.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* Section 5 - Internaliser vs externaliser */}
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <BarChart3 size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Internaliser vs externaliser : la vérité business
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Internaliser, ce n'est pas mauvais.
      </p>
      <p className="text-muted-foreground mb-2">Mais dans 90% des cas :</p>
      <ul className="space-y-1 text-muted-foreground mb-6">
        <li>👉 Vous payez pour apprendre</li>
        <li>👉 Vous perdez du temps</li>
        <li>👉 Vous brûlez du cash</li>
      </ul>

      <p className="text-foreground font-medium mb-2">
        Externaliser, ce n'est pas "payer plus".
      </p>
      <p className="text-foreground font-semibold">
        👉 C'est payer pour aller plus vite et éviter les erreurs.
      </p>
    </section>

    {/* Section 6 - Ce que les entreprises qui réussissent font */}
    <section className="mb-12">
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
      <p className="text-muted-foreground mb-3">Elles :</p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Se concentrent sur leur cœur de métier</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> S'appuient sur des experts pour l'acquisition</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Structurent un vrai système (et pas juste des campagnes)</li>
      </ul>

      <p className="text-foreground font-semibold">👉 Résultat : croissance plus stable, plus prévisible</p>
    </section>

    {/* Section 7 - La vraie question */}
    <section className="mb-12">
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
        ❌ "Combien ça coûte d'externaliser ?"
      </p>
      <p className="text-muted-foreground mb-2">Mais plutôt :</p>
      <p className="text-foreground font-semibold text-lg">
        👉 Combien vous coûte le fait de ne pas être structuré aujourd'hui ?
      </p>
    </section>

    {/* À retenir */}
    <section className="mb-12">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-foreground font-display mb-4">📌 À retenir</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">Internaliser coûte souvent plus cher que prévu : salaire, formation, budget pub d'apprentissage.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">Externaliser, c'est acheter de l'expertise et de la vitesse — pas juste un prestataire.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">Les entreprises qui réussissent structurent un système d'acquisition, pas juste des campagnes.</span>
          </li>
        </ul>
      </div>
    </section>

    {/* Conclusion */}
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Conclusion</h2>
      <p className="text-muted-foreground mb-4">
        Le marketing dans la rénovation de l'habitat a changé.
      </p>
      <p className="text-muted-foreground mb-4">
        Ce n'est plus une option.
      </p>
      <p className="text-muted-foreground mb-4">
        Mais mal fait, c'est un centre de coût.
      </p>
      <p className="text-foreground font-medium mb-4">
        Bien structuré, c'est un levier de croissance énorme.
      </p>
      <p className="text-foreground font-semibold text-lg">
        👉 Et la différence entre les deux, c'est l'expertise.
      </p>
    </section>

    {/* CTA final */}
    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Vous faites +1M€ de CA dans la rénovation ?
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          Voyez comment structurer un système d'acquisition rentable.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ SEO */}
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Questions fréquentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien coûte l'internalisation du marketing en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            En comptant le salaire chargé (3 500 à 4 000 €/mois), les formations, les outils et le budget publicitaire
            d'apprentissage, le coût réel dépasse souvent 60 000 € la première année — sans garantie de résultats.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quels sont les avantages d'externaliser son marketing en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Vous bénéficiez immédiatement de l'expertise, des méthodes validées et d'un système déjà optimisé.
            Résultat : moins de tests à l'aveugle, une visibilité sur chaque euro investi et une montée en puissance
            plus rapide.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Comment choisir une agence marketing pour la rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Privilégiez une agence spécialisée dans votre secteur, avec des résultats prouvés (études de cas),
            un système d'acquisition structuré et une transparence totale sur les performances et le ROI.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Maillage interne */}
    <section className="mb-12">
      <div className="bg-muted/30 border border-border rounded-xl p-6">
        <p className="text-sm font-semibold text-foreground mb-3">📖 Articles & pages associés</p>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/blog/pourquoi-acheter-des-leads-renovation-mauvaise-strategie-2026" className="text-primary hover:underline">
              → Pourquoi acheter des leads en rénovation est une mauvaise stratégie en 2026
            </Link>
          </li>
          <li>
            <Link to="/results" className="text-primary hover:underline">
              → Nos résultats clients
            </Link>
          </li>
          <li>
            <a href="https://api.leadconnectorhq.com/widget/booking/57xP6cJ3bacw7ZTpsRXe" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              → Prendre rendez-vous
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
);

export default ArticleInternaliserMarketing;
