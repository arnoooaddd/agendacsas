import { Link } from "react-router-dom";
import { Clock, Zap, Search, BarChart3, Target, AlertTriangle, Rocket, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleDelaiResultatsAcquisition = () => (
  <div className="prose-custom">
    {/* Résumé */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          Combien de temps faut-il pour voir des résultats avec l'<strong><em>acquisition clients rénovation</em></strong> digitale ? Entre Meta Ads et <strong><em>Google Ads rénovation</em></strong>, les délais varient de 3 semaines à 3 mois. Cet article détaille les timelines réelles, les budgets nécessaires et les erreurs qui rallongent vos délais.
        </p>
      </div>
    </section>

    {/* Sommaire */}
    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">📑 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#budget-vitesse" className="hover:text-primary transition-colors">1. Budget = vitesse : le principe fondamental</a></li>
            <li><a href="#meta-ads-timeline" className="hover:text-primary transition-colors">2. Meta Ads : résultats en 3 à 5 semaines</a></li>
            <li><a href="#google-ads-timeline" className="hover:text-primary transition-colors">3. Google Ads : performance optimale en 2 à 3 mois</a></li>
            <li><a href="#cas-concret" className="hover:text-primary transition-colors">4. Cas concret : budget standard mois par mois</a></li>
            <li><a href="#levier-data" className="hover:text-primary transition-colors">5. Le vrai levier : la data</a></li>
            <li><a href="#erreurs" className="hover:text-primary transition-colors">6. Les erreurs qui rallongent tout</a></li>
            <li><a href="#raccourcir" className="hover:text-primary transition-colors">7. Comment raccourcir les délais</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">8. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    {/* Introduction */}
    <section className="mb-12">
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        <strong>Combien de temps pour lancer l'acquisition digitale et voir des résultats concrets ?</strong>
      </p>
      <p className="text-foreground font-semibold text-xl mb-4">
        👉 Entre <strong>3 semaines et 3 mois</strong> selon les plateformes et votre budget.
      </p>
      <p className="text-muted-foreground">
        Plus vous mettez de budget → plus vous allez vite. C'est un principe fondamental de la <strong><em>publicité rénovation</em></strong>.
      </p>
    </section>

    {/* Budget = vitesse */}
    <section className="mb-12" id="budget-vitesse">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Clock size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Budget = vitesse : le principe fondamental
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">
        Les plateformes fonctionnent sur un <strong>système d'enchères</strong>. En <strong><em>marketing digital rénovation</em></strong> :
      </p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vous êtes en concurrence avec d'autres entreprises BTP</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Plus vous investissez → plus vous gagnez en visibilité</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Plus vous avez de data → plus l'algorithme apprend vite</li>
      </ul>
      <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
        <p className="text-foreground font-semibold">
          ⚠️ Petit budget = peu de diffusion = apprentissage lent = résultats retardés
        </p>
      </div>
    </section>

    {/* Meta Ads */}
    <section className="mb-12" id="meta-ads-timeline">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Zap size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Meta Ads : résultats en 3 à 5 semaines
        </h2>
      </div>
      <p className="text-muted-foreground mb-6">
        <strong><em>Facebook Ads rénovation</em></strong> repose sur l'<strong>acquisition par interruption</strong> : vous allez chercher le prospect pendant qu'il scrolle.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">⏱️ Timeline réaliste</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> <strong>Phase d'apprentissage :</strong> 3 à 5 semaines</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> <strong>Premiers leads :</strong> quelques jours</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> <strong>Leads qualifiés + stables :</strong> 3 à 6 semaines</li>
        </ul>
      </div>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Pourquoi c'est rapide ?</h3>
      <ul className="space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Volume de diffusion élevé</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Algorithme basé sur l'IA (très réactif)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vous contrôlez le message (créa + offre)</li>
      </ul>
    </section>

    {/* Google Ads */}
    <section className="mb-12" id="google-ads-timeline">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Search size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Google Ads : performance optimale en 2 à 3 mois
        </h2>
      </div>
      <p className="text-muted-foreground mb-6">
        <strong><em>Google Ads rénovation</em></strong> fonctionne par <strong>intention directe</strong> : le prospect vous cherche activement.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">⏱️ Timeline réaliste</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> <strong>Phase d'apprentissage :</strong> 60 à 90 jours</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> <strong>Premiers leads :</strong> dès les premiers jours</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> <strong>Performance optimisée :</strong> 2 à 3 mois</li>
        </ul>
      </div>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Pourquoi c'est plus long ?</h3>
      <p className="text-muted-foreground mb-4">Google doit comprendre :</p>
      <ul className="space-y-1 text-muted-foreground mb-6">
        <li>• Qui est un <strong>bon lead</strong></li>
        <li>• Qui va signer un devis</li>
        <li>• Quelles recherches convertissent</li>
      </ul>
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <p className="text-foreground font-medium">
          👉 Sans data de conversion = Google envoie du trafic inutile. Vous devez remonter les conversions pour que l'algorithme s'optimise.
        </p>
      </div>
    </section>

    {/* Cas concret */}
    <section className="mb-12" id="cas-concret">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <BarChart3 size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Cas concret : budget standard mois par mois
        </h2>
      </div>
      <p className="text-muted-foreground mb-6">
        Hypothèse : <strong>Meta Ads : 1 500 €/mois</strong> + <strong>Google Ads : 1 500 €/mois</strong>
      </p>

      {["Mois 1 — Démarrage", "Mois 2 — Optimisation", "Mois 3 — Accélération"].map((title, i) => {
        const metaData = [
          ["30 à 60 leads", "Coût par lead : 25 – 40 €", "RDV : 8 à 15"],
          ["Amélioration du ciblage", "Leads plus qualifiés", "Coût par RDV : 80 à 150 €"],
          ["Scaling possible", "Volume stable", "Coûts maîtrisés"],
        ];
        const googleData = [
          ["10 à 20 leads", "Coût par lead : 80 – 120 €", "RDV : 7 à 14"],
          ["Meilleure compréhension", "Moins de clics inutiles", "Coût par RDV : 120 à 200 €"],
          ["Machine optimisée", "Leads très qualifiés", "Taux de closing élevé"],
        ];
        return (
          <div key={i} className="mb-8">
            <h3 className="text-lg font-bold text-foreground font-display mb-3">{title}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 border border-border rounded-xl p-5">
                <h4 className="font-bold text-foreground mb-3">Meta Ads</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  {metaData[i].map((item, j) => <li key={j}>• {item}</li>)}
                </ul>
              </div>
              <div className="bg-muted/50 border border-border rounded-xl p-5">
                <h4 className="font-bold text-foreground mb-3">Google Ads</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  {googleData[i].map((item, j) => <li key={j}>• {item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
      <p className="text-foreground font-semibold">
        👉 À ce stade, vous avez une <em>acquisition clients rénovation</em> <strong>prédictible et scalable</strong>.
      </p>
    </section>

    {/* CTA milieu */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Vous voulez savoir <strong>combien de temps</strong> il vous faut ?</p>
        <p className="text-foreground font-semibold text-lg mb-6">Structurez un vrai <strong>système d'acquisition</strong> rentable.</p>
        <SectionCTA />
      </div>
    </section>

    {/* Levier data */}
    <section className="mb-12" id="levier-data">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Target size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le vrai levier : la data
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">
        Les plateformes optimisent pour <strong>ce que vous leur montrez</strong> :
      </p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Lead qualifié</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> RDV pris</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Devis signé</li>
      </ul>
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <p className="text-foreground font-medium">
          👉 Si vous ne remontez pas ces données → vous perdez <strong>50% de performance</strong>. Les <Link to="/results" className="text-primary hover:underline font-medium">entreprises que nous accompagnons</Link> remontent systématiquement leurs conversions.
        </p>
      </div>
    </section>

    {/* Erreurs */}
    <section className="mb-12" id="erreurs">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les erreurs qui rallongent tout
        </h2>
      </div>
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Couper les campagnes</strong> → retour à zéro</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Changer tout toutes les semaines</strong> → pas d'apprentissage</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Budget trop faible</strong> → aucune donnée exploitable</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Pas de suivi des leads</strong> → impossible d'optimiser</li>
        </ul>
        <p className="text-foreground font-medium mt-4">
          👉 Une campagne, ça se <strong>pilote</strong>. Ça ne se "teste" pas 10 jours.
        </p>
      </div>
    </section>

    {/* Raccourcir */}
    <section className="mb-12" id="raccourcir">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Rocket size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment raccourcir les délais
        </h2>
      </div>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Budget suffisant</strong> dès le départ (minimum 3 000 €/mois)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Meta + Google en parallèle</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Tracker les conversions</strong> dès le jour 1</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Process commercial solide</strong> derrière chaque lead</li>
      </ul>
      <p className="text-muted-foreground">
        C'est exactement ce que nous mettons en place. <Link to="/" className="text-primary hover:underline font-medium">Découvrez notre approche →</Link>
      </p>
    </section>

    {/* À retenir */}
    <section className="mb-12">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-foreground font-display mb-4">📌 À retenir</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground"><strong>Meta Ads</strong> → résultats en 3 à 5 semaines</span></li>
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground"><strong>Google Ads</strong> → résultats solides en 2 à 3 mois</span></li>
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">Plus vous mettez de budget → plus ça va vite</span></li>
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">Couper les campagnes = perdre du temps + de l'argent</span></li>
        </ul>
      </div>
    </section>

    {/* CTA final */}
    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Vous dirigez une entreprise de <strong>rénovation à +1M€</strong> ?</p>
        <p className="text-foreground font-semibold text-lg mb-6">Découvrez combien de temps il vous faut pour obtenir des résultats.</p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ */}
    <section className="mb-12" id="faq">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Combien de temps pour avoir des leads avec Meta Ads ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Les premiers leads arrivent en quelques jours. Pour une <strong>génération de leads rénovation</strong> stable, comptez <strong>3 à 5 semaines</strong>.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Google Ads est-il rentable pour la rénovation ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Oui, c'est un des canaux les plus rentables à moyen terme. Comptez 60 à 90 jours pour l'optimisation complète.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Quel budget minimum pour lancer des campagnes ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Minimum <strong>3 000 €/mois</strong> (1 500 € Meta + 1 500 € Google). Les plus performants investissent 5 000 à 6 500 €/mois.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Pourquoi mes campagnes ne marchent pas ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Budget insuffisant, absence de tracking, campagnes coupées trop tôt ou absence de process commercial. Une <Link to="/blog/choisir-agence-marketing-renovation" className="text-primary hover:underline">agence spécialisée</Link> peut identifier ces blocages.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Articles connexes */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground font-display mb-6">📚 Articles connexes</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <Link to="/blog/cout-publicite-renovation-habitat" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
          <h3 className="font-semibold text-foreground mb-2">Combien coûte la publicité en rénovation ?</h3>
          <p className="text-sm text-muted-foreground">Budgets, coûts par lead et stratégie 2026</p>
        </Link>
        <Link to="/blog/google-ads-vs-facebook-ads-renovation" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
          <h3 className="font-semibold text-foreground mb-2">Google Ads vs Facebook Ads rénovation</h3>
          <p className="text-sm text-muted-foreground">Lequel choisir pour générer des clients ?</p>
        </Link>
      </div>
    </section>
  </div>
);

export default ArticleDelaiResultatsAcquisition;
