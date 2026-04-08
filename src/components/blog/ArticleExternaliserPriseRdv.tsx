import { Link } from "react-router-dom";
import { Phone, Clock, UserX, DollarSign, TrendingUp, AlertTriangle, CheckCircle, Target } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleExternaliserPriseRdv = () => (
  <div className="prose-custom">
    {/* Résumé */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          Vous investissez dans la <strong><em>génération de leads rénovation</em></strong> mais vos prospects ne sont pas rappelés correctement ? Chaque appel manqué vous coûte de l'argent. Cet article explique pourquoi <strong>externaliser la prise de rendez-vous</strong> est un levier critique pour votre <strong><em>acquisition clients rénovation</em></strong>.
        </p>
      </div>
    </section>

    {/* Sommaire */}
    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">📑 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#friction" className="hover:text-primary transition-colors">1. Leads internet = plus de friction</a></li>
            <li><a href="#rigueur" className="hover:text-primary transition-colors">2. La prise de RDV demande une rigueur extrême</a></li>
            <li><a href="#commerciaux" className="hover:text-primary transition-colors">3. Vos commerciaux ne doivent pas faire ça</a></li>
            <li><a href="#cout" className="hover:text-primary transition-colors">4. Coût réel : interne vs externalisé</a></li>
            <li><a href="#impact" className="hover:text-primary transition-colors">5. Impact direct sur votre chiffre d'affaires</a></li>
            <li><a href="#modele" className="hover:text-primary transition-colors">6. Le modèle performant : système Agendac</a></li>
            <li><a href="#red-flags" className="hover:text-primary transition-colors">7. Red flags à surveiller</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">8. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    {/* Introduction */}
    <section className="mb-12">
      <p className="text-foreground font-semibold text-xl mb-4">
        Vous payez des leads ? Alors chaque appel non traité vous coûte de l'argent.
      </p>
      <p className="text-muted-foreground mb-4">
        La plupart des entreprises de rénovation investissent dans la <strong><em>publicité rénovation</em></strong> mais négligent le maillon le plus critique : <strong>la prise de rendez-vous</strong>.
      </p>
      <p className="text-foreground font-medium">
        Résultat : des dizaines d'opportunités perdues chaque mois et un <strong><em>coût acquisition client rénovation</em></strong> qui explose.
      </p>
    </section>

    {/* Section 1 */}
    <section className="mb-12" id="friction">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Leads internet = plus de friction (et plus de pertes)
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">
        Contrairement au bouche-à-oreille, un lead issu de <strong><em>campagnes publicitaires rénovation</em></strong> :
      </p>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Le prospect <strong>ne vous connaît pas</strong> encore</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Il <strong>compare plusieurs entreprises</strong></li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Il peut tester <strong>sans réelle intention</strong></li>
        </ul>
      </div>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Conséquences directes</h3>
      <ul className="space-y-1 text-muted-foreground">
        <li>• Faux numéros</li>
        <li>• Demandes floues</li>
        <li>• Prospects hésitants</li>
      </ul>
      <p className="text-foreground font-medium mt-4">👉 Si vous n'avez pas un <strong>process solide</strong> → les leads sont perdus.</p>
    </section>

    {/* Section 2 */}
    <section className="mb-12" id="rigueur">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Phone size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          La prise de RDV demande une rigueur extrême
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">La réalité terrain :</p>
      <ul className="space-y-1 text-muted-foreground mb-6">
        <li>• Un prospect <strong>répond rarement au 1er appel</strong></li>
        <li>• Il travaille, il oublie, il reporte</li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Ce qui fonctionne réellement</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Double appel par jour</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Sur <strong>4 à 5 jours consécutifs</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>SMS + relances</strong> systématiques</li>
      </ul>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <p className="text-foreground font-medium">
          👉 Les meilleurs leads répondent souvent au <strong>4e, 5e voire 6e appel</strong>. Sans cette rigueur, vous dégradez votre <strong><em>rentabilité marketing rénovation</em></strong>.
        </p>
      </div>
    </section>

    {/* Section 3 */}
    <section className="mb-12" id="commerciaux">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <UserX size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Vos commerciaux ne doivent pas faire ça
        </h2>
      </div>
      <p className="text-muted-foreground mb-2">Un commercial doit :</p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Closer</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Faire des <strong>devis</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Signer des <strong>chantiers</strong></li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Ce qu'il ne devrait PAS faire 👇</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Relancer 40 leads par semaine</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Tomber sur des faux numéros</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Gérer des refus en boucle</li>
        </ul>
        <p className="text-foreground font-medium mt-4">⚠️ Sinon : démotivation → perte de performance → mauvais taux de closing</p>
      </div>
    </section>

    {/* CTA milieu */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Vous perdez des leads faute de <strong>relance structurée</strong> ?</p>
        <p className="text-foreground font-semibold text-lg mb-6">Structurez un vrai <strong>système de prise de RDV</strong>.</p>
        <SectionCTA />
      </div>
    </section>

    {/* Section 4 */}
    <section className="mb-12" id="cout">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <DollarSign size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Coût réel : interne vs externalisé
        </h2>
      </div>
      <p className="text-muted-foreground mb-2">Beaucoup pensent que c'est "moins cher en interne".</p>
      <p className="text-foreground font-semibold mb-6">Faux.</p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h4 className="font-bold text-foreground mb-3">❌ En interne</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Salaire + charges</li>
            <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Temps perdu sur des leads non qualifiés</li>
            <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Manque de rigueur</li>
            <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Pertes invisibles (RDV non pris)</li>
          </ul>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <h4 className="font-bold text-foreground mb-3">✅ Externalisé</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Coût optimisé</li>
            <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Process rodé et éprouvé</li>
            <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Volume géré efficacement</li>
            <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Suivi structuré</li>
          </ul>
        </div>
      </div>
      <p className="text-foreground font-medium">
        👉 Vous payez pour un <strong>résultat</strong>, pas pour du temps.
      </p>
    </section>

    {/* Section 5 */}
    <section className="mb-12" id="impact">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Impact direct sur votre chiffre d'affaires
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">Un mauvais suivi = <strong>pertes massives</strong>.</p>
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h4 className="font-bold text-foreground mb-3">📊 Exemple concret</h4>
        <ul className="space-y-1 text-muted-foreground">
          <li>• 100 leads / mois</li>
          <li>• 15 % non rappelés correctement</li>
          <li>• = <strong>15 opportunités perdues</strong></li>
          <li>• Si 1 vente = 10 000 €</li>
        </ul>
        <p className="text-primary font-bold text-xl mt-4">👉 = 150 000 € de CA potentiel perdu. Chaque mois.</p>
      </div>
    </section>

    {/* Modèle */}
    <section className="mb-12" id="modele">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Target size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le modèle performant : système Agendac
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">Un bon <strong><em>système acquisition client rénovation</em></strong> inclut :</p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Prise de RDV externalisée</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Qualification en amont</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Paiement basé sur le résultat</strong></li>
      </ul>
      <p className="text-foreground font-semibold mb-4">
        👉 Vous ne payez pas pour des leads. <strong>Vous payez pour des opportunités réelles.</strong>
      </p>
      <p className="text-muted-foreground">
        <Link to="/resultats-clients-agendac" className="text-primary hover:underline font-medium">→ Voir nos résultats clients concrets</Link>
      </p>
    </section>

    {/* Red flags */}
    <section className="mb-12" id="red-flags">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Red flags à surveiller
        </h2>
      </div>
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>"On appelle une fois et on laisse un message"</strong></li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Aucun script d'appel</strong></li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Pas de suivi des relances</strong></li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Commerciaux qui gèrent le setting</strong></li>
        </ul>
      </div>
    </section>

    {/* À retenir */}
    <section className="mb-12">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-foreground font-display mb-4">📌 À retenir</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">La prise de RDV est un <strong>levier critique</strong> de votre acquisition</span></li>
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">Ce n'est pas une tâche secondaire → c'est un <strong>système</strong></span></li>
          <li className="flex items-start gap-3"><CheckCircle size={20} className="text-primary mt-0.5 shrink-0" /><span className="text-foreground">Externaliser = plus de RDV, moins de pertes, meilleure <strong>rentabilité</strong></span></li>
        </ul>
        <p className="text-foreground font-semibold mt-4">
          👉 La meilleure <strong><em>stratégie marketing rénovation</em></strong> du monde est inutile si vos leads ne sont pas rappelés.
        </p>
      </div>
    </section>

    {/* CTA final */}
    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Vous voulez <strong>arrêter de perdre des leads</strong> ?</p>
        <p className="text-foreground font-semibold text-lg mb-6">De la publicité à la prise de RDV qualifiée, on structure tout.</p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ */}
    <section className="mb-12" id="faq">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Pourquoi externaliser la prise de rendez-vous ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">La prise de RDV sur des leads internet demande 4 à 6 tentatives par prospect. Externaliser libère vos commerciaux pour le closing.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Combien de leads sont perdus sans process de relance ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground"><strong>15 à 30 %</strong> des leads ne sont jamais correctement rappelés. Cela peut représenter 150 000 € de CA perdu par mois.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">L'externalisation coûte-t-elle plus cher qu'un salarié ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Non, c'est souvent <strong>moins cher et plus performant</strong>. Même logique que pour <Link to="/blog/internaliser-externaliser-marketing-renovation-btp" className="text-primary hover:underline">l'externalisation du marketing</Link>.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">Comment améliorer le taux de transformation de mes leads ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Process de relance rigoureux (4-6 appels), qualification en amont, et contenu de réassurance avant la visite.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Articles connexes */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground font-display mb-6">📚 Articles connexes</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <Link to="/blog/choisir-agence-marketing-renovation-btp" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
          <h3 className="font-semibold text-foreground mb-2">Comment choisir une agence marketing rénovation</h3>
          <p className="text-sm text-muted-foreground">Les 5 critères qui font la différence</p>
        </Link>
        <Link to="/blog/cout-publicite-google-ads-meta-ads-renovation" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
          <h3 className="font-semibold text-foreground mb-2">Combien coûte la publicité en rénovation ?</h3>
          <p className="text-sm text-muted-foreground">Budgets, coûts par lead et stratégie 2026</p>
        </Link>
      </div>
    </section>
  </div>
);

export default ArticleExternaliserPriseRdv;
