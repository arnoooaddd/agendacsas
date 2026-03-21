import { Link } from "react-router-dom";
import { DollarSign, Search, Smartphone, BarChart3, AlertTriangle, CheckCircle, TrendingUp, Target } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleCoutPubliciteRenovation = () => (
  <div className="prose-custom">
    {/* Résumé */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          <strong>Combien coûte réellement la publicité</strong> pour une entreprise de <em>rénovation de l'habitat</em> ? Google Ads, Meta Ads (Facebook / Instagram), budgets réels, <strong>coût par lead</strong> et erreurs courantes : cet article vous donne les vrais chiffres et une stratégie claire pour maîtriser votre <strong><em>coût d'acquisition client rénovation</em></strong>.
        </p>
      </div>
    </section>

    {/* Sommaire */}
    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">📑 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#variables-couts" className="hover:text-primary transition-colors">1. Ce qui impacte directement vos coûts publicitaires</a></li>
            <li><a href="#google-ads" className="hover:text-primary transition-colors">2. Google Ads : intention directe, leads ultra qualifiés</a></li>
            <li><a href="#meta-ads" className="hover:text-primary transition-colors">3. Meta Ads : volume rapide, coût réduit</a></li>
            <li><a href="#comparatif" className="hover:text-primary transition-colors">4. Comparatif rapide Google Ads vs Meta Ads</a></li>
            <li><a href="#combiner" className="hover:text-primary transition-colors">5. Le vrai levier : combiner les deux</a></li>
            <li><a href="#budget" className="hover:text-primary transition-colors">6. Budget réaliste pour une entreprise &gt;1M€ CA</a></li>
            <li><a href="#erreurs" className="hover:text-primary transition-colors">7. Erreurs qui vous coûtent (très) cher</a></li>
            <li><a href="#conclusion" className="hover:text-primary transition-colors">8. Ce que vous achetez vraiment</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">9. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    {/* Introduction */}
    <section className="mb-12">
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Pas de débat : si vous voulez <strong>scaler votre acquisition clients rénovation</strong>, vous devez acheter de la visibilité.
      </p>
      <p className="text-foreground font-semibold text-xl mb-4">
        👉 La vraie question → <em>combien ça coûte réellement</em> et ce que vous obtenez derrière.
      </p>
      <p className="text-muted-foreground">
        Que ce soit via <strong>Google Ads</strong> ou <strong>Meta Ads</strong>, les coûts varient énormément selon votre situation. Cet article vous donne les <strong>vrais chiffres</strong> issus de notre expérience.
      </p>
    </section>

    {/* Section 1 */}
    <section className="mb-12" id="variables-couts">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Target size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Ce qui impacte directement vos coûts publicitaires
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">
        Avant de parler chiffres, voici les <strong>variables clés</strong> qui font exploser ou baisser votre <em>coût d'acquisition client rénovation</em> :
      </p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Zone de chalandise</strong> — zone dense = plus cher</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Type de prestation</strong> — PAC &gt; isolation &gt; menuiserie</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Niveau de concurrence local</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Qualité de votre offre</strong> (positionnement, différenciation)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Tracking + remontée de données</strong> — la clé absolue</li>
      </ul>
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <p className="text-foreground font-medium">
          👉 Sans suivi de conversion propre = <em>campagnes publicitaires rénovation</em> non rentables, peu importe le budget.
        </p>
      </div>
    </section>

    {/* Section 2 - Google Ads */}
    <section className="mb-12" id="google-ads">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Search size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Google Ads : intention directe, leads ultra qualifiés
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">
        <strong>Google Ads</strong> repose sur un principe simple : vous captez une <strong>demande déjà existante</strong>.
      </p>
      <p className="text-muted-foreground mb-6">Vos prospects cherchent activement :</p>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ul className="space-y-1 text-muted-foreground">
          <li>• <em>"pompe à chaleur prix"</em></li>
          <li>• <em>"isolation combles aide 2026"</em></li>
          <li>• <em>"artisan menuiserie + ville"</em></li>
        </ul>
      </div>
      <p className="text-foreground font-medium mb-6">👉 C'est du <strong>lead chaud</strong>.</p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">💰 Coûts réels Google Ads rénovation</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> <strong>Budget minimum :</strong> 1 500 – 2 000 €/mois par zone</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> <strong>Coût par lead :</strong> 70 à 130 €</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> <strong>Taux de transformation en RDV :</strong> ~70%</li>
        </ul>
      </div>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">⚙️ Spécificité clé</h3>
      <p className="text-muted-foreground mb-4">
        <strong>Phase d'apprentissage : 60 à 90 jours.</strong> Vous devez alimenter Google en data :
      </p>
      <ul className="space-y-1 text-muted-foreground mb-6">
        <li>• Lead qualifié vs non qualifié</li>
        <li>• Devis signé</li>
        <li>• Chiffre d'affaires généré</li>
      </ul>
      <p className="text-foreground font-semibold mb-6">👉 Plus vous nourrissez l'algorithme, plus il devient rentable.</p>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6">
        <h4 className="font-bold text-foreground mb-3">📌 À retenir sur Google Ads :</h4>
        <ul className="space-y-2">
          <li className="flex items-start gap-3"><CheckCircle size={18} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">Plus lent à démarrer</span></li>
          <li className="flex items-start gap-3"><CheckCircle size={18} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">Plus cher au lead</span></li>
          <li className="flex items-start gap-3"><CheckCircle size={18} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">Mais <strong>ultra stable et qualifié</strong> une fois optimisé</span></li>
        </ul>
      </div>
    </section>

    {/* Section 3 - Meta Ads */}
    <section className="mb-12" id="meta-ads">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Smartphone size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Meta Ads : volume rapide, coût réduit
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">
        <strong>Facebook Ads</strong> et <strong>Instagram Ads</strong> fonctionnent différemment : <strong>vous créez la demande</strong>.
      </p>
      <p className="text-muted-foreground mb-6">
        Vous interrompez vos prospects pendant qu'ils scrollent avec une <em>créa percutante</em>.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">💰 Coûts réels Meta Ads rénovation</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> <strong>Budget minimum :</strong> 1 200 €/mois par zone</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> <strong>Budget recommandé :</strong> 2 000 – 3 000 €</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> <strong>Coût par lead :</strong> 20 à 50 €</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> <strong>Taux de transformation en RDV :</strong> 25% à 35%</li>
        </ul>
      </div>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">⚙️ Spécificité clé</h3>
      <p className="text-muted-foreground mb-4">
        <strong>Phase d'apprentissage : 3 à 5 semaines.</strong> La performance dépend de :
      </p>
      <ul className="space-y-1 text-muted-foreground mb-4">
        <li>• Vos <strong>créas</strong> (vidéo surtout)</li>
        <li>• Votre <strong>angle</strong> (offre, promesse)</li>
        <li>• Votre <strong>copywriting</strong></li>
      </ul>
      <p className="text-foreground font-medium italic mb-6">👉 Mauvaise pub = leads poubelle, même à 10 €.</p>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6">
        <h4 className="font-bold text-foreground mb-3">📌 À retenir sur Meta Ads :</h4>
        <ul className="space-y-2">
          <li className="flex items-start gap-3"><CheckCircle size={18} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">Rapide à lancer</span></li>
          <li className="flex items-start gap-3"><CheckCircle size={18} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">Leads moins chers</span></li>
          <li className="flex items-start gap-3"><CheckCircle size={18} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">Qualité plus variable — nécessite un <strong>process commercial solide</strong></span></li>
        </ul>
      </div>
    </section>

    {/* Comparatif */}
    <section className="mb-12" id="comparatif">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <BarChart3 size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comparatif rapide Google Ads vs Meta Ads
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-border rounded-xl text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border p-3 text-left text-foreground">Critère</th>
              <th className="border border-border p-3 text-left text-foreground">Google Ads</th>
              <th className="border border-border p-3 text-left text-foreground">Meta Ads</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-border p-3 font-semibold">Intention</td><td className="border border-border p-3">Forte</td><td className="border border-border p-3">Faible à moyenne</td></tr>
            <tr className="bg-muted/30"><td className="border border-border p-3 font-semibold">Coût par lead</td><td className="border border-border p-3">70 – 130 €</td><td className="border border-border p-3">20 – 50 €</td></tr>
            <tr><td className="border border-border p-3 font-semibold">Qualité</td><td className="border border-border p-3">Très élevée</td><td className="border border-border p-3">Moyenne à bonne</td></tr>
            <tr className="bg-muted/30"><td className="border border-border p-3 font-semibold">Délai</td><td className="border border-border p-3">60 – 90 jours</td><td className="border border-border p-3">3 – 5 semaines</td></tr>
            <tr><td className="border border-border p-3 font-semibold">Stabilité</td><td className="border border-border p-3">Très stable</td><td className="border border-border p-3">Variable</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    {/* CTA Milieu */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Vous voulez savoir combien coûte <strong>votre acquisition</strong> ?</p>
        <p className="text-foreground font-semibold text-lg mb-6">Structurez un vrai <strong>système d'acquisition rentable</strong>.</p>
        <SectionCTA />
      </div>
    </section>

    {/* Combiner */}
    <section className="mb-12" id="combiner">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le vrai levier : combiner les deux
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">
        Les <Link to="/results" className="text-primary hover:underline font-medium">entreprises de rénovation qui performent</Link> ne choisissent pas. <strong>Elles font les deux.</strong>
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Cas concret de retargeting</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ol className="space-y-2 text-muted-foreground">
          <li><strong>1.</strong> Prospect cherche sur Google → clique → <strong>ne convertit pas</strong></li>
          <li><strong>2.</strong> Vous le <strong>retargetez sur Facebook / Instagram</strong></li>
          <li><strong>3.</strong> Il revoit votre offre + preuve sociale</li>
          <li><strong>4.</strong> Il <strong>convertit</strong> ✅</li>
        </ol>
      </div>
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <p className="text-foreground font-medium">
          👉 <strong>Sans retargeting = lead perdu.</strong> Avec retargeting = <strong>client signé</strong>.
        </p>
      </div>
    </section>

    {/* Budget */}
    <section className="mb-12" id="budget">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <DollarSign size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Budget réaliste pour une entreprise &gt;1M€ CA
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h4 className="font-bold text-foreground mb-3">🟡 Setup minimum</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Meta Ads : 1 200 – 2 000 €</li>
            <li>• Google Ads : 1 500 – 2 000 €</li>
          </ul>
          <p className="text-foreground font-bold mt-3">👉 Total : ~3 000 €/mois</p>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <h4 className="font-bold text-foreground mb-3">🟢 Setup performant</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Meta Ads : 2 000 – 3 000 €</li>
            <li>• Google Ads : 2 500 – 3 500 €</li>
          </ul>
          <p className="text-foreground font-bold mt-3">👉 Total : 5 000 à 6 500 €/mois</p>
        </div>
      </div>
      <p className="text-foreground font-semibold">
        👉 Si vous dépensez moins de 3 000 €/mois en <em>publicité rénovation</em> : vous ne jouez pas au bon niveau.
      </p>
    </section>

    {/* Erreurs */}
    <section className="mb-12" id="erreurs">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreurs qui vous coûtent (très) cher
        </h2>
      </div>
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Couper les campagnes</strong> → reset complet de l'algorithme</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Lancer avec 500 €</strong> → aucune data exploitable</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Ne pas qualifier les leads</strong> → algo mal nourri</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Pas de script commercial</strong> → leads gaspillés</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Pas de différenciation</strong> → <Link to="/blog/arreter-achat-leads-renovation" className="text-primary hover:underline">guerre de prix</Link></li>
        </ul>
      </div>
    </section>

    {/* Conclusion */}
    <section className="mb-12" id="conclusion">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Ce que vous achetez vraiment
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">Vous n'achetez pas des leads. Vous achetez :</p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>De la data</strong> — pour comprendre votre marché</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>De la compréhension marché</strong> — pour affiner votre offre</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Un système prédictible</strong> — pour scaler</li>
      </ul>
    </section>

    {/* À retenir */}
    <section className="mb-12">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-foreground font-display mb-4">📌 À retenir</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground"><strong>Meta Ads</strong> → rapide, moins cher, moins qualifié</span></li>
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground"><strong>Google Ads</strong> → lent, cher, très qualifié</span></li>
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground"><strong>Les deux ensemble</strong> → <em>machine à leads rénovation</em> rentable</span></li>
        </ul>
      </div>
    </section>

    {/* CTA final */}
    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Vous dirigez une entreprise de <strong>rénovation à +1M€</strong> ?</p>
        <p className="text-foreground font-semibold text-lg mb-6">Découvrez combien coûte <strong>votre acquisition</strong> et comment la rendre rentable.</p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ */}
    <section className="mb-12" id="faq">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Quel budget minimum pour la publicité rénovation habitat ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Pour obtenir des résultats exploitables, comptez au minimum <strong>3 000 €/mois</strong> répartis entre Google Ads et Meta Ads.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Combien coûte un lead en rénovation en 2026 ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Le <strong>coût lead rénovation</strong> varie : <strong>70 à 130 €</strong> sur Google Ads et <strong>20 à 50 €</strong> sur Meta Ads selon votre zone et concurrence.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Google Ads ou Facebook Ads pour la rénovation ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Les deux sont complémentaires. Les entreprises qui performent utilisent les deux dans un <Link to="/blog/google-ads-vs-facebook-ads-renovation" className="text-primary hover:underline">système structuré</Link>.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Comment réduire le coût d'acquisition client en rénovation ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">En remontant les données de conversion, en combinant Google + Meta, et en structurant un process commercial solide derrière chaque lead.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Articles connexes */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground font-display mb-6">📚 Articles connexes</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <Link to="/blog/google-ads-vs-facebook-ads-renovation" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
          <h3 className="font-semibold text-foreground mb-2">Google Ads vs Facebook Ads rénovation</h3>
          <p className="text-sm text-muted-foreground">Lequel choisir pour générer des clients ?</p>
        </Link>
        <Link to="/blog/delai-resultats-acquisition-digitale-renovation" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
          <h3 className="font-semibold text-foreground mb-2">Combien de temps pour voir des résultats ?</h3>
          <p className="text-sm text-muted-foreground">Timelines et budgets réels en acquisition digitale</p>
        </Link>
        <Link to="/blog/arreter-achat-leads-renovation" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
          <h3 className="font-semibold text-foreground mb-2">Arrêter d'acheter des leads en rénovation</h3>
          <p className="text-sm text-muted-foreground">Comment sortir de la guerre des prix</p>
        </Link>
        <Link to="/blog/internaliser-marketing-renovation" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
          <h3 className="font-semibold text-foreground mb-2">Internaliser ou externaliser son marketing ?</h3>
          <p className="text-sm text-muted-foreground">Le vrai coût caché pour les entreprises de rénovation</p>
        </Link>
      </div>
    </section>
  </div>
);

export default ArticleCoutPubliciteRenovation;
