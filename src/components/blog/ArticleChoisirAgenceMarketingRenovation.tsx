import { Link } from "react-router-dom";
import { Shield, Users, Target, Camera, BarChart3, AlertTriangle, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleChoisirAgenceMarketingRenovation = () => (
  <div className="prose-custom">
    {/* Résumé */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          Comment choisir la bonne <strong><em>agence marketing rénovation</em></strong> ? 90 % des agences ne comprennent pas le BTP. Mauvais prestataire = budget perdu. Cet article vous donne les <strong>5 critères concrets</strong> pour identifier une <strong><em>agence génération de leads rénovation</em></strong> capable de construire un vrai système d'<strong><em>acquisition clients rénovation</em></strong> rentable.
        </p>
      </div>
    </section>

    {/* Sommaire */}
    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#specialisation" className="hover:text-primary transition-colors">1. Spécialisation rénovation : indispensable</a></li>
            <li><a href="#experience" className="hover:text-primary transition-colors">2. Expérience avec des entreprises &gt;1M€</a></li>
            <li><a href="#ecosysteme" className="hover:text-primary transition-colors">3. Capacité à construire un écosystème d'acquisition</a></li>
            <li><a href="#contenu" className="hover:text-primary transition-colors">4. Production de contenu terrain</a></li>
            <li><a href="#resultats" className="hover:text-primary transition-colors">5. Preuves et résultats concrets</a></li>
            <li><a href="#red-flags" className="hover:text-primary transition-colors">6. Red flags immédiats</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">7. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    {/* Introduction */}
    <section className="mb-12">
      <p className="text-foreground font-semibold text-xl mb-4">
        Mauvais prestataire = budget perdu + zéro croissance.
      </p>
      <p className="text-foreground font-semibold text-xl mb-4">
        Bon prestataire = <strong>machine à leads rentable</strong>.
      </p>
      <p className="text-muted-foreground mb-4">
        Le choix d'une <strong><em>agence marketing rénovation</em></strong> est une décision stratégique. La plupart des dirigeants la prennent sans grille de lecture claire.
      </p>
      <p className="text-foreground font-medium">
        Voici les <strong>5 critères non négociables</strong> pour faire le bon choix.
      </p>
    </section>

    {/* Critère 1 */}
    <section className="mb-12" id="specialisation">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Shield size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          1. Spécialisation rénovation : non négociable
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">
        Une <strong><em>agence marketing BTP</em></strong> spécialisée comprend :
      </p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vos <strong>cycles de vente longs</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vos <strong>marges chantier</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vos <strong>objections clients</strong> (prix, aides, délais)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vos <strong>offres</strong> (PAC, isolation, menuiserie…)</li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Ce qui se passe avec une agence généraliste 👇</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Elle attire des <strong>leads non qualifiés</strong></li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Elle crée un décalage marketing / commercial</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Elle fait perdre du temps à vos équipes</li>
        </ul>
      </div>
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
        <p className="text-foreground font-medium">✅ Check rapide : votre prestataire parle-t-il de <strong><em>leads rénovation</em></strong> ou de "visibilité" ?</p>
      </div>
    </section>

    {/* Critère 2 */}
    <section className="mb-12" id="experience">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Users size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          2. Expérience avec des entreprises à votre niveau
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">Le <strong><em>marketing digital rénovation</em></strong> change totalement entre un artisan à 500k€ et une entreprise à 3M€ qui veut scaler.</p>
      
      <h3 className="text-lg font-bold text-foreground font-display mb-3">Questions à poser</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Quel est votre <strong><em>coût lead rénovation</em></strong> moyen ?</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Quel coût par rendez-vous ?</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Combien de leads générés par mois ?</li>
        </ul>
      </div>
    </section>

    {/* Critère 3 */}
    <section className="mb-12" id="ecosysteme">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Target size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          3. Construisent-ils une vraie machine à leads ?
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">
        Une <strong><em>agence génération de leads rénovation</em></strong> sérieuse construit un <strong>système complet</strong> :
      </p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong><em>Google Ads rénovation</em></strong> → capter la demande</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong><em>Facebook Ads rénovation</em></strong> → créer la demande</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Retargeting</strong> → convertir les indécis</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Tunnel de vente</strong> → structurer le parcours</li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Exemple concret</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ol className="space-y-2 text-muted-foreground">
          <li><strong>1.</strong> Prospect tape <em>"pompe à chaleur prix"</em> sur Google</li>
          <li><strong>2.</strong> Il clique → ne convertit pas</li>
          <li><strong>3.</strong> Il est <strong>retargeté sur Facebook</strong> avec une vidéo</li>
          <li><strong>4.</strong> La vidéo répond à son objection</li>
          <li><strong>5.</strong> Il demande un devis ✅</li>
        </ol>
      </div>
      <p className="text-foreground font-semibold">
        👉 Sans système structuré → vous perdez des leads. C'est ce que nous mettons en place chez <Link to="/" className="text-primary hover:underline">Agendac</Link>.
      </p>
    </section>

    {/* CTA milieu */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Vous cherchez une agence qui <strong>comprend la rénovation</strong> ?</p>
        <p className="text-foreground font-semibold text-lg mb-6">Découvrez comment nous structurons l'acquisition.</p>
        <SectionCTA />
      </div>
    </section>

    {/* Critère 4 */}
    <section className="mb-12" id="contenu">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Camera size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          4. Production de contenu terrain : la clé
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">Dans la rénovation, <strong>la confiance fait tout</strong>. Une bonne <strong><em>agence communication rénovation</em></strong> :</p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Se déplace</strong> sur vos chantiers</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Filme</strong> vos équipes</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Capture</strong> des témoignages clients</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Produit</strong> des vidéos orientées vente</li>
      </ul>
      <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
        <p className="text-foreground font-medium">⚠️ Si on vous demande d'envoyer vos propres photos → le niveau est insuffisant.</p>
      </div>
    </section>

    {/* Critère 5 */}
    <section className="mb-12" id="resultats">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <BarChart3 size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          5. Résultats prouvés (pas des promesses)
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">Une agence sérieuse montre :</p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Études de cas détaillées</strong> avec chiffres</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Données concrètes : leads, RDV, <strong><em>coût acquisition client rénovation</em></strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Avis clients réels</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Présence marketing active</li>
      </ul>
      <p className="text-muted-foreground">
        <Link to="/resultats-clients-agendac" className="text-primary hover:underline font-medium">→ Voir nos résultats clients</Link>
      </p>
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
        <p className="text-foreground font-medium">
          👉 Une agence qui ne fait pas sa propre acquisition = <strong>incohérence totale</strong>.
        </p>
      </div>
    </section>

    {/* Red flags */}
    <section className="mb-12" id="red-flags">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Red flags immédiats
        </h2>
      </div>
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Modèle basé sur l'<strong><em>achat leads rénovation</em></strong> → dépendance</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Une seule plateforme</strong> → vision limitée</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Aucun tracking</strong> → impossible de mesurer le ROI</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Pas de vidéo</strong> → manque de crédibilité</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Promesses rapides sans stratégie</strong></li>
        </ul>
      </div>
    </section>

    {/* À retenir */}
    <section className="mb-12">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-foreground font-display mb-4">📌 À retenir</h3>
        <p className="text-foreground mb-3">Une bonne <strong><em>agence marketing rénovation</em></strong> :</p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">Comprend votre métier et vos enjeux</span></li>
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">Maîtrise <strong>Google Ads + Facebook Ads</strong></span></li>
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">Produit du contenu réel (tournage terrain)</span></li>
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">Pense en <strong>rentabilité</strong>, pas en vanity metrics</span></li>
        </ul>
        <p className="text-foreground font-semibold mt-4">
          👉 Si ce n'est pas le cas, <strong>vous avez un problème de prestataire</strong>.
        </p>
      </div>
    </section>

    {/* CTA final */}
    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Vous cherchez une agence qui comprend la <strong>rénovation</strong> ?</p>
        <p className="text-foreground font-semibold text-lg mb-6">Nous travaillons exclusivement avec des entreprises à +1M€ de CA.</p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ */}
    <section className="mb-12" id="faq">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Comment trouver une bonne agence marketing rénovation ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Vérifiez 5 critères : spécialisation BTP, expérience +1M€, système d'acquisition complet, contenu terrain et résultats prouvés.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Combien coûte une agence marketing BTP ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Comptez 2 000 à 5 000 €/mois pour une prestation complète. C'est souvent plus rentable qu'un <Link to="/blog/internaliser-externaliser-marketing-renovation-btp" className="text-primary hover:underline">recrutement interne</Link>.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Faut-il une agence spécialisée BTP ou généraliste ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Toujours une <strong>agence spécialisée</strong>. Une généraliste ne comprend pas vos cycles de vente ni vos marges.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Pourquoi l'achat de leads est un red flag ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">L'achat de leads crée une dépendance totale. En savoir plus dans notre article sur <Link to="/blog/achat-leads-renovation-mauvaise-strategie" className="text-primary hover:underline">les leads en rénovation</Link>.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Articles connexes */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground font-display mb-6">📚 Articles connexes</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <Link to="/blog/cout-publicite-google-ads-meta-ads-renovation" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
          <h3 className="font-semibold text-foreground mb-2">Combien coûte la publicité en rénovation ?</h3>
          <p className="text-sm text-muted-foreground">Budgets, coûts par lead et stratégie 2026</p>
        </Link>
        <Link to="/blog/internaliser-externaliser-marketing-renovation-btp" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
          <h3 className="font-semibold text-foreground mb-2">Internaliser ou externaliser son marketing ?</h3>
          <p className="text-sm text-muted-foreground">Le vrai coût caché pour les entreprises de rénovation</p>
        </Link>
      </div>
    </section>
  </div>
);

export default ArticleChoisirAgenceMarketingRenovation;
