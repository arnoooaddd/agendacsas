import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, TrendingUp, Users, Shield, Star, Target } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";
import ArticleVideoSection from "./ArticleVideoSection";

const ArticleArreterAchatLeads = () => (
  <div className="prose-custom">
    {/* Résumé */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          Marre de dépendre de l'<strong>achat de leads rénovation</strong> ? Cet article vous donne <strong>5 étapes concrètes</strong> pour sortir de la guerre des prix, construire votre propre <em>système d'acquisition clients rénovation</em> et reprendre le contrôle de votre croissance — sans dépendre des plateformes.
        </p>
      </div>
    </section>

    {/* Sommaire */}
    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">📑 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#etape-1-arreter" className="hover:text-primary transition-colors">1. Arrêter d'acheter des leads</a></li>
            <li><a href="#etape-2-marque" className="hover:text-primary transition-colors">2. Générer ses propres opportunités via sa marque</a></li>
            <li><a href="#etape-3-rdv" className="hover:text-primary transition-colors">3. Transformer la prise de RDV en expérience premium</a></li>
            <li><a href="#etape-4-rassurer" className="hover:text-primary transition-colors">4. Rassurer AVANT même le rendez-vous</a></li>
            <li><a href="#etape-5-solide" className="hover:text-primary transition-colors">5. Montrer que vous êtes une entreprise solide</a></li>
            <li><a href="#conclusion-aal" className="hover:text-primary transition-colors">6. Conclusion</a></li>
            <li><a href="#faq-aal" className="hover:text-primary transition-colors">7. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    {/* Introduction */}
    <section className="mb-12">
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Aujourd'hui, une grande partie des entreprises de <strong>rénovation de l'habitat</strong> sont coincées dans le même schéma :
      </p>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Achat de leads</strong> en continu</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Concurrence agressive</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Marges sous pression</li>
        </ul>
      </div>
      <p className="text-muted-foreground mb-4">Et une conséquence directe :</p>
      <p className="text-foreground font-semibold text-xl mb-4">
        le prix devient le seul argument pour signer.
      </p>
      <p className="text-muted-foreground mb-4">
        Le problème, ce n'est pas le marché.<br />
        <strong className="text-foreground">C'est le <em>système d'acquisition</em>.</strong>
      </p>
      <p className="text-muted-foreground">
        Voici une approche simple en 5 étapes pour reprendre le contrôle et sortir définitivement de cette logique.
      </p>
    </section>

    {/* Étape 1 */}
    <section className="mb-12" id="etape-1-arreter">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          1. Arrêter d'acheter des leads
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le modèle des plateformes de <strong>leads rénovation</strong> est simple :
        <strong className="text-foreground"> vendre le même prospect à plusieurs entreprises.</strong>
      </p>
      <p className="text-muted-foreground mb-3">Résultat :</p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Le prospect reçoit plusieurs appels</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Les entreprises se ressemblent toutes</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Personne ne se différencie</li>
      </ul>
      <p className="text-muted-foreground mb-4">
        Et quand tout le monde est perçu comme identique…
      </p>
      <p className="text-foreground font-semibold mb-6">
        👉 le seul critère qui reste, c'est le prix
      </p>
      <p className="text-muted-foreground">
        Continuer à acheter des leads, c'est accepter d'entrer dans une guerre que vous ne pouvez pas gagner sur le long terme.
      </p>
      <p className="text-muted-foreground mt-2">
        <Link to="/blog/pourquoi-acheter-des-leads-renovation-mauvaise-strategie-2026" className="text-primary hover:underline font-medium">→ Pourquoi l'achat de leads est une mauvaise stratégie en 2026</Link>
      </p>
    </section>

    {/* Étape 2 */}
    <section className="mb-12" id="etape-2-marque">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Star size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          2. Générer ses propres opportunités via sa marque
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Quand un prospect vient à vous via votre <strong>communication</strong> :
      </p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vous n'êtes plus en concurrence directe</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vous contrôlez le message</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vous influencez la perception</li>
      </ul>

      <p className="text-foreground font-medium mb-2">Et c'est là que tout change.</p>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
        <p className="text-muted-foreground mb-2 italic">
          Une Rolex ne donne pas mieux l'heure qu'une autre montre.
        </p>
        <p className="text-muted-foreground mb-2">Pourtant, elle vaut 10 fois plus cher.</p>
        <p className="text-foreground font-semibold">👉 La différence, c'est la <strong>marque</strong>.</p>
      </div>

      <h3 className="text-xl font-bold text-foreground font-display mb-4">Dans la rénovation, c'est exactement pareil</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Une entreprise perçue comme sérieuse <strong>vend plus cher</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Une entreprise visible <em>inspire confiance</em></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Une entreprise structurée signe plus facilement</li>
      </ul>
      <p className="text-foreground font-semibold">
        Ce n'est plus une question de prix, mais de <strong>perception</strong>.
      </p>
    </section>

    {/* Étape 3 */}
    <section className="mb-12" id="etape-3-rdv">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Target size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          3. Transformer la prise de rendez-vous en expérience premium
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        La plupart des entreprises de <strong>BTP</strong> négligent complètement cette étape.
      </p>
      <p className="text-muted-foreground mb-4">
        Pourtant, c'est le premier point de contact réel avec le prospect.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Voici ce qui change tout :</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Confirmation immédiate du rendez-vous par SMS</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Rappel 24h avant</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Rappel 2h avant</li>
        </ul>
      </div>

      <p className="text-foreground font-medium mb-2">Simple. Automatisable. <em>Redoutablement efficace.</em></p>
      <p className="text-muted-foreground mb-3">Pourquoi ça marche ? Parce que :</p>
      <ul className="space-y-1 text-muted-foreground mb-4">
        <li>• C'est professionnel</li>
        <li>• Ça rassure</li>
        <li>• Et surtout… presque personne ne le fait</li>
      </ul>
      <p className="text-foreground font-semibold">👉 Vous passez instantanément au-dessus du lot.</p>
    </section>

    {/* Étape 4 */}
    <section className="mb-12" id="etape-4-rassurer">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Shield size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          4. Rassurer AVANT même le rendez-vous
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un prospect qui fait entrer quelqu'un chez lui ne prend pas ça à la légère.
      </p>
      <p className="text-muted-foreground mb-4">
        Si vous ne contrôlez pas ce moment… vous laissez place au doute.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Ce que vous devez mettre en place :</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Envoi d'une <strong>photo du commercial</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vidéo courte qui explique votre fonctionnement</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Réponses aux questions fréquentes via WhatsApp</li>
      </ul>

      <p className="text-muted-foreground mb-2">Tout ça peut être <em>automatisé</em>.</p>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <p className="font-semibold text-foreground mb-3">Résultat :</p>
        <ul className="space-y-1 text-muted-foreground">
          <li>👉 Le prospect sait déjà qui vous êtes avant de vous rencontrer</li>
          <li>👉 Le rendez-vous est plus fluide</li>
          <li>👉 Le <strong>taux de transformation</strong> augmente</li>
        </ul>
      </div>
    </section>

    {/* CTA milieu */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Si aujourd'hui votre entreprise dépend des leads et se bat uniquement sur les prix,
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          il est temps de reprendre le contrôle de votre <strong>acquisition clients rénovation</strong>.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* Étape 5 */}
    <section className="mb-12" id="etape-5-solide">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          5. Montrer que vous êtes une entreprise solide
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le client ne cherche pas uniquement le prix le plus bas.
      </p>
      <p className="text-foreground font-medium mb-4">
        Il cherche surtout à <strong>éviter une mauvaise décision</strong>.
      </p>
      <p className="text-muted-foreground mb-4">Votre rôle : le rassurer visuellement et concrètement.</p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Concrètement :</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Camions floqués</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Présence locale visible</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Image professionnelle (<strong>site internet</strong>, réseaux sociaux, avis)</li>
      </ul>

      <p className="text-muted-foreground mb-4">Ce sont des détails… qui n'en sont pas.</p>
      <ul className="space-y-1 text-muted-foreground mb-6">
        <li>👉 Ils construisent la <strong>confiance</strong></li>
        <li>👉 Ils réduisent la friction</li>
        <li>👉 Ils justifient votre prix</li>
      </ul>

      <p className="text-muted-foreground mb-4">
        À ce stade, vous n'êtes plus une option parmi d'autres.
      </p>
      <p className="text-foreground font-medium mb-2">
        Vous devenez la <em>référence</em> dans l'esprit du prospect.
      </p>
      <p className="text-foreground font-semibold text-lg">
        Et quand vous êtes la référence… 👉 le prix passe au second plan.
      </p>
    </section>

    {/* À retenir */}
    <section className="mb-12">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-foreground font-display mb-4">📌 À retenir</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">L'<strong>achat de leads</strong> vous enferme dans une guerre des prix — le seul moyen d'en sortir est de générer vos propres opportunités.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">Votre <strong>marque</strong> est votre actif le plus puissant : elle vous différencie et justifie vos prix.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">L'expérience client (avant, pendant, après le RDV) est ce qui transforme un prospect en client fidèle.</span>
          </li>
        </ul>
      </div>
    </section>

    {/* Conclusion */}
    <section className="mb-12" id="conclusion-aal">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Conclusion</h2>
      <p className="text-muted-foreground mb-4">
        Si aujourd'hui votre entreprise dépend des <em>leads</em> et se bat uniquement sur les prix :
      </p>
      <p className="text-foreground font-medium mb-4">
        ce n'est pas un problème de marché.
      </p>
      <p className="text-foreground font-semibold mb-6">
        👉 C'est un problème de <strong>positionnement</strong> et de <strong>système d'acquisition</strong>.
      </p>
      <p className="text-muted-foreground mb-3">Les entreprises qui performent dans la <strong>rénovation</strong> ne jouent pas le même jeu :</p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Elles génèrent leurs propres opportunités</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Elles contrôlent leur image</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Elles <strong>structurent leur acquisition</strong></li>
      </ul>
    </section>

    {/* CTA final */}
    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Vous dirigez une entreprise de <strong>rénovation</strong> à plus de 1M€ de CA et vous souhaitez sortir de la guerre des prix ?
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          Structurez un vrai <strong>système d'acquisition clients</strong>.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ SEO */}
    <section className="mb-12" id="faq-aal">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Questions fréquentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Comment arrêter d'acheter des leads en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            En construisant votre propre <strong>système d'acquisition</strong> : <em>publicité ciblée</em> sous votre marque, contenu qui crée la confiance, et un process commercial structuré. C'est ce qui vous permet de générer vos propres opportunités via votre <strong>marketing digital rénovation</strong>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Comment sortir de la guerre des prix dans le bâtiment ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            En travaillant votre <strong>image de marque</strong> et votre positionnement. Quand un prospect vous perçoit comme une référence, le prix n'est plus le critère principal — c'est la confiance et la perception de valeur. Une <Link to="/" className="text-primary hover:underline">agence marketing BTP</Link> spécialisée peut accélérer cette transformation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quelles alternatives à l'achat de leads en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            La <strong>publicité directe</strong> sous votre marque (<em>Facebook Ads rénovation</em>, <em>Google Ads rénovation</em>), le contenu vidéo, les avis clients mis en avant, et un <strong>tunnel de vente</strong> structuré. Ces méthodes vous permettent de contrôler votre <em>acquisition clients rénovation</em>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Comment trouver des clients en rénovation sans acheter de leads ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            En maîtrisant votre <strong>coût d'acquisition client</strong>, en montant en gamme grâce à une image de marque forte, et en structurant chaque étape du parcours client — de la <em>génération de leads rénovation</em> au rendez-vous et à la signature.
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
        <Link to="/blog/marketing-renovation-habitat-publicite-leads" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Marketing rénovation habitat : pourquoi la publicité fonctionne</p>
        </Link>
        <Link to="/blog/google-ads-vs-facebook-ads-renovation" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Google Ads vs Facebook Ads rénovation : lequel choisir ?</p>
        </Link>
        <Link to="/blog/internaliser-marketing-renovation" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Internaliser ou externaliser son marketing en rénovation</p>
        </Link>
      </div>
    </section>
  </div>
);

export default ArticleArreterAchatLeads;