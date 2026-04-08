import { Link } from "react-router-dom";
import { Target, Search, BookOpen, Eye, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleNiveauxQualificationProspect = () => (
  <div className="prose-custom">
    {/* Résumé */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          Tous les leads ne se valent pas. Seulement <strong>3 %</strong> sont prêts à acheter — mais <strong>37 % peuvent être convertis</strong> avec la bonne stratégie. Découvrez les 4 niveaux de qualification d'un prospect en rénovation et comment structurer votre <strong>tunnel de vente</strong> pour maximiser chaque opportunité.
        </p>
      </div>
    </section>

    {/* Sommaire */}
    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">📑 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#niveau-3" className="hover:text-primary transition-colors">1. Les 3 % prêts à acheter : conversion directe</a></li>
            <li><a href="#niveau-17" className="hover:text-primary transition-colors">2. Les 17 % en recherche active : choix du prestataire</a></li>
            <li><a href="#niveau-20" className="hover:text-primary transition-colors">3. Les 20 % conscients du problème : éducation</a></li>
            <li><a href="#niveau-60" className="hover:text-primary transition-colors">4. Les 60 % non conscients : long terme</a></li>
            <li><a href="#strategie" className="hover:text-primary transition-colors">5. La vraie stratégie : faire monter les prospects</a></li>
            <li><a href="#erreur" className="hover:text-primary transition-colors">6. L'erreur classique qui vous coûte cher</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">7. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    {/* Introduction */}
    <section className="mb-12">
      <p className="text-foreground font-semibold text-xl mb-4">
        Si vous traitez tous vos prospects de la même manière, vous perdez de l'argent.
      </p>
      <p className="text-muted-foreground mb-4">
        En <strong>marketing digital rénovation</strong>, la maturité d'un prospect détermine tout : le message, le canal, le contenu et le coût pour le convertir.
      </p>
      <p className="text-foreground font-medium">
        Comprendre ces 4 niveaux, c'est la base d'un <strong>système d'acquisition client rénovation</strong> rentable.
      </p>
    </section>

    {/* Niveau 3% */}
    <section className="mb-12" id="niveau-3">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <Target size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les 3 % prêts à acheter — le cash immédiat
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">Ce sont les prospects qui :</p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Cherchent activement</strong> une entreprise</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Comparent</strong> des devis</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Veulent <strong>passer à l'action</strong> rapidement</li>
      </ul>

      <p className="text-muted-foreground mb-6">
        Typiquement : <em>"installateur pompe à chaleur prix"</em> ou <em>"devis isolation combles"</em>.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Stratégie : conversion directe</h3>
      <ul className="space-y-1 text-muted-foreground mb-4">
        <li>• <strong>Google Ads rénovation</strong> (search) → capter l'intention</li>
        <li>• Landing page optimisée</li>
        <li>• Prise de RDV rapide</li>
      </ul>
      <p className="text-foreground font-medium">
        👉 Objectif : <strong>transformer immédiatement en devis</strong>. Ces prospects sont les plus rentables, mais aussi les plus disputés.
      </p>
    </section>

    {/* Niveau 17% */}
    <section className="mb-12" id="niveau-17">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
          <Search size={20} className="text-orange-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les 17 % en recherche active — choisir la bonne entreprise
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Ils ont un projet et vont passer à l'action. Mais ils hésitent sur le <strong>prestataire</strong>, la <strong>crédibilité</strong> et la <strong>confiance</strong>.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Stratégie : notoriété + preuve sociale</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Témoignages clients</strong> en vidéo</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vidéos de chantiers (avant / après)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Présentation de l'équipe</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Facebook Ads rénovation</strong> avec du contenu de réassurance</li>
      </ul>

      <p className="text-foreground font-semibold">
        👉 Objectif : devenir l'évidence. <Link to="/resultats-clients-agendac" className="text-primary hover:underline">Voir cette stratégie en action →</Link>
      </p>
    </section>

    {/* Niveau 20% */}
    <section className="mb-12" id="niveau-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
          <BookOpen size={20} className="text-yellow-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les 20 % conscients du problème — mais pas encore prêts
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">Ils ont un problème :</p>
      <ul className="space-y-1 text-muted-foreground mb-4">
        <li>• Facture d'électricité trop élevée</li>
        <li>• Mauvaise isolation</li>
        <li>• Inconfort thermique</li>
      </ul>
      <p className="text-muted-foreground mb-6">Mais ils <strong>doutent des solutions</strong> et ne sont pas pressés.</p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Stratégie : contenu éducatif</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>FAQ</strong> (ex : <em>"est-ce que la PAC est rentable ?"</em>)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vidéos explicatives</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Articles de blog optimisés</li>
      </ul>

      <p className="text-foreground font-medium">
        👉 Objectif : les faire passer de <em>"je me pose des questions"</em> → <em>"je dois agir"</em>. C'est le cœur de la <strong>stratégie marketing rénovation</strong>.
      </p>
    </section>

    {/* CTA milieu */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Vous voulez <strong>structurer votre acquisition</strong> sur les 4 niveaux ?</p>
        <p className="text-foreground font-semibold text-lg mb-6">Découvrez notre approche complète.</p>
        <SectionCTA />
      </div>
    </section>

    {/* Niveau 60% */}
    <section className="mb-12" id="niveau-60">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
          <Eye size={20} className="text-blue-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les 60 % non conscients — ne pas prioriser
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Ils ne savent pas qu'ils ont un problème. Ils ne cherchent rien.
      </p>
      <p className="text-foreground font-medium mb-6">
        ⚠️ Aller les chercher en <strong>publicité rénovation</strong> directe = très coûteux et peu rentable.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Approche recommandée</h3>
      <ul className="space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Contenu <strong>SEO</strong> (articles de blog)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Contenu éducatif long terme</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Sensibilisation progressive via les réseaux</li>
      </ul>
    </section>

    {/* Stratégie globale */}
    <section className="mb-12" id="strategie">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          La vraie stratégie : faire monter les prospects
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Une bonne <strong>stratégie marketing rénovation</strong> fait évoluer les prospects :
      </p>
      <ul className="space-y-1 text-muted-foreground mb-6">
        <li>• <strong>20 % → 17 %</strong> (éducation)</li>
        <li>• <strong>17 % → 3 %</strong> (preuve + confiance)</li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Exemple concret multi-touch</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ol className="space-y-2 text-muted-foreground">
          <li><strong>1.</strong> Le prospect voit une <strong>vidéo Facebook</strong> sur les économies d'énergie</li>
          <li><strong>2.</strong> Il comprend son problème</li>
          <li><strong>3.</strong> Il cherche sur <strong>Google</strong></li>
          <li><strong>4.</strong> Il tombe sur <strong>votre site</strong></li>
          <li><strong>5.</strong> Il voit vos <strong>témoignages clients</strong></li>
          <li><strong>6.</strong> Il demande un <strong>devis</strong> ✅</li>
        </ol>
      </div>

      <p className="text-foreground font-medium">
        👉 C'est la base d'un <strong>tunnel de vente rénovation</strong> performant. C'est ce que nous structurons chez <Link to="/" className="text-primary hover:underline font-medium">Agendac</Link>.
      </p>
    </section>

    {/* Erreur */}
    <section className="mb-12" id="erreur">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          L'erreur classique qui vous coûte cher
        </h2>
      </div>

      <p className="text-foreground font-semibold mb-4">Faire uniquement de la conversion sur les 3 %.</p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Volume limité</strong> — seulement 3 % du marché</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Concurrence élevée</strong> — tout le monde se bat dessus</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Coût lead rénovation</strong> élevé — enchères maximales</li>
      </ul>
      <p className="text-foreground font-medium">
        Les entreprises qui dominent travaillent <strong>les 4 niveaux</strong> simultanément.
      </p>
    </section>

    {/* À retenir */}
    <section className="mb-12">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-foreground font-display mb-4">📌 À retenir</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">Tous les prospects n'ont <strong>pas la même maturité</strong></span></li>
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">Chaque niveau demande un <strong>type de contenu spécifique</strong></span></li>
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">Le vrai levier = structurer un <strong>tunnel de vente rénovation</strong> complet</span></li>
        </ul>
        <p className="text-foreground font-semibold mt-4">
          👉 Les entreprises qui gagnent <strong>contrôlent le parcours complet</strong>.
        </p>
      </div>
    </section>

    {/* CTA final */}
    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Vous voulez <strong>structurer votre acquisition</strong> de A à Z ?</p>
        <p className="text-foreground font-semibold text-lg mb-6">De la publicité à la conversion, on construit votre système.</p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ */}
    <section className="mb-12" id="faq">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Comment qualifier un prospect en rénovation ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Il existe <strong>4 niveaux de maturité</strong> : 3 % prêts à acheter, 17 % en recherche, 20 % conscients du problème, 60 % non conscients. Chaque niveau nécessite une approche différente en <strong>acquisition clients rénovation</strong>.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Comment structurer un tunnel de vente en rénovation ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Publicité (Google + Meta) pour le trafic, contenu éducatif pour qualifier, preuve sociale pour rassurer, et process commercial pour convertir.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Pourquoi mes leads ne convertissent pas ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Souvent parce que vous traitez tous les prospects de la même manière. Adaptez votre message à chaque niveau de maturité pour améliorer votre <strong>génération de leads rénovation</strong>.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Faut-il utiliser Google Ads ou Facebook Ads ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Les deux. <strong>Google Ads</strong> capte les 3 % (intention), <strong>Facebook Ads</strong> travaille les 17-20 %. En savoir plus dans notre <Link to="/blog/google-ads-vs-facebook-ads-renovation-habitat" className="text-primary hover:underline">comparatif</Link>.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Articles connexes */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground font-display mb-6">📚 Articles connexes</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <Link to="/blog/cout-publicite-google-ads-meta-ads-renovation" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
          <h3 className="font-semibold text-foreground mb-2">Combien coûte la publicité en rénovation ?</h3>
          <p className="text-sm text-muted-foreground">Budgets, coûts par lead et stratégie complète.</p>
        </Link>
        <Link to="/blog/google-ads-vs-facebook-ads-renovation-habitat" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
          <h3 className="font-semibold text-foreground mb-2">Google Ads vs Facebook Ads rénovation</h3>
          <p className="text-sm text-muted-foreground">Lequel choisir pour votre entreprise ?</p>
        </Link>
      </div>
    </section>
  </div>
);

export default ArticleNiveauxQualificationProspect;
