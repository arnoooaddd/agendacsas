import { Link } from "react-router-dom";
import { MessageSquare, Phone, Clock, CheckCircle, AlertTriangle, Target, TrendingUp, BarChart3, Repeat, Send } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleContacterLeadsReseauxSociaux = () => (
  <div className="prose-custom">
    {/* Résumé */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          Un lead issu des <strong><em>Facebook Ads rénovation</em></strong> ou d'Instagram n'a rien à voir avec un prospect qui vous appelle de lui-même. Si vous les traitez de la même façon, vous perdez jusqu'à <strong>30 % de vos opportunités</strong>. Cet article détaille le process exact pour transformer vos leads réseaux sociaux en <strong><em>rendez-vous qualifiés</em></strong> — et booster votre <strong><em>acquisition clients rénovation</em></strong>.
        </p>
      </div>
    </section>

    {/* Sommaire */}
    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">📑 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#nature" className="hover:text-primary transition-colors">1. Comprendre la nature des leads réseaux sociaux</a></li>
            <li><a href="#reactivite" className="hover:text-primary transition-colors">2. Réagir immédiatement (SMS / WhatsApp)</a></li>
            <li><a href="#double-appel" className="hover:text-primary transition-colors">3. Le système du double appel</a></li>
            <li><a href="#relances" className="hover:text-primary transition-colors">4. Relances structurées sur 5 jours</a></li>
            <li><a href="#confirmation" className="hover:text-primary transition-colors">5. Confirmation et sécurisation des RDV</a></li>
            <li><a href="#resultats" className="hover:text-primary transition-colors">6. Résultats concrets (performance Agendac)</a></li>
            <li><a href="#erreurs" className="hover:text-primary transition-colors">7. Erreurs classiques à éviter</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">8. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    {/* Introduction */}
    <section className="mb-12">
      <p className="text-foreground font-semibold text-xl mb-4">
        Un lead Meta ≠ un lead bouche-à-oreille.
      </p>
      <p className="text-muted-foreground mb-4">
        80 % des leads issus de <strong><em>campagnes publicitaires rénovation</em></strong> ne répondent pas au premier appel. Ce n'est pas qu'ils ne sont pas intéressés — c'est qu'ils ont besoin d'être <strong>contactés correctement</strong>.
      </p>
      <p className="text-foreground font-medium">
        La différence entre une entreprise qui transforme 15 % de ses leads et une qui en transforme 37 % ? <strong>Le process de contact.</strong>
      </p>
    </section>

    {/* Section 1 */}
    <section className="mb-12" id="nature">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <MessageSquare size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comprendre la nature des leads réseaux sociaux
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">
        Un lead issu de <strong><em>Facebook Ads rénovation</em></strong> ou Instagram n'était <strong>pas forcément en train de chercher</strong> vos services. Il a vu une publicité, a cliqué… mais il est encore loin de la décision.
      </p>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <h3 className="text-base font-bold text-foreground font-display mb-3">Ce qui caractérise ces leads :</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Ils <strong>n'étaient pas en recherche active</strong></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Ils ont encore des <strong>objections non résolues</strong></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Ils <strong>comparent plusieurs entreprises</strong></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Ils oublient vite <strong>s'ils ne sont pas relancés</strong></li>
        </ul>
      </div>
      <p className="text-foreground font-medium">
        👉 Pour les convertir, il faut <strong>rassurer</strong>, <strong>qualifier</strong> et <strong>accompagner</strong>. Sinon, ils disparaissent.
      </p>
    </section>

    {/* Section 2 */}
    <section className="mb-12" id="reactivite">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
          <Send size={20} className="text-green-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Réagir immédiatement (SMS / WhatsApp)
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">
        Dès réception du lead, vous avez <strong>une fenêtre de 1 à 5 minutes</strong> pour réagir. Au-delà, le taux de réponse chute drastiquement.
      </p>

      <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6 mb-6">
        <h3 className="text-base font-bold text-foreground font-display mb-3">✅ Ce que vous devez envoyer :</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" /> <strong>Confirmation de la demande</strong> — le prospect sait qu'il a été pris en charge</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" /> <strong>Présentation rapide</strong> de votre entreprise (1 phrase)</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" /> <strong>Annonce d'un appel imminent</strong> — il s'y attend</li>
        </ul>
      </div>

      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <h4 className="text-sm font-bold text-foreground font-display mb-2">💬 Exemple de message :</h4>
        <p className="text-muted-foreground italic">
          « Bonjour [Prénom], merci pour votre demande ! Je suis [Nom], de [Entreprise]. Je vous appelle dans quelques instants pour en discuter. »
        </p>
      </div>

      <p className="text-foreground font-medium">
        👉 Le SMS / WhatsApp <strong>augmente de 40 % le taux de réponse</strong> au premier appel. C'est le geste le plus rentable que vous puissiez faire.
      </p>
    </section>

    {/* Section 3 */}
    <section className="mb-12" id="double-appel">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
          <Phone size={20} className="text-orange-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le système du double appel (clé de performance)
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">
        Appeler une seule fois = inefficace. <strong>La majorité des prospects ne décrochent pas au 1er appel.</strong>
      </p>
      <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-6 mb-6">
        <h3 className="text-base font-bold text-foreground font-display mb-3">🔁 La règle du double appel :</h3>
        <div className="space-y-3 text-muted-foreground">
          <p className="flex items-start gap-2">
            <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
            <span><strong>Premier appel</strong> — si pas de réponse…</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
            <span><strong>Rappeler immédiatement</strong> — dans les 30 secondes</span>
          </p>
        </div>
      </div>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Pourquoi ça fonctionne ?</h3>
      <ul className="space-y-2 text-muted-foreground mb-4">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> Contourne les <strong>modes « ne pas déranger »</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> Capte l'attention (un double appel = <strong>urgence perçue</strong>)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> Augmente le taux de décroché de <strong>+25 %</strong></li>
      </ul>
      <p className="text-foreground font-medium">
        👉 Règle simple : <strong>2 appels consécutifs à chaque tentative</strong>. Toujours.
      </p>
    </section>

    {/* CTA milieu */}
    <section className="mb-12">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
        <p className="text-foreground font-semibold text-lg mb-2">
          Vous n'avez pas le temps de gérer tout ça en interne ?
        </p>
        <p className="text-muted-foreground mb-4">
          Découvrez pourquoi <strong><em>externaliser la prise de rendez-vous</em></strong> est le levier le plus rentable pour votre <strong><em>acquisition clients rénovation</em></strong>.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* Section 4 */}
    <section className="mb-12" id="relances">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
          <Repeat size={20} className="text-blue-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Relances structurées sur 5 jours
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">
        Les prospects <strong>travaillent</strong>, <strong>oublient</strong>, <strong>ne priorisent pas</strong>. Ce n'est pas un refus — c'est un <strong>manque de suivi</strong> de votre côté.
      </p>

      <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6 mb-6">
        <h3 className="text-base font-bold text-foreground font-display mb-4">📋 Process recommandé :</h3>
        <div className="space-y-3 text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="bg-blue-500 text-white rounded-lg px-3 py-1 text-xs font-bold flex-shrink-0">J1 à J5</span>
            <span><strong>2 appels par jour</strong> (double appel)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-blue-500 text-white rounded-lg px-3 py-1 text-xs font-bold flex-shrink-0">Après chaque tentative</span>
            <span><strong>SMS de relance</strong> court et personnalisé</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-blue-500 text-white rounded-lg px-3 py-1 text-xs font-bold flex-shrink-0">J5</span>
            <span><strong>Dernier message</strong> de clôture</span>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
        <p className="text-foreground font-semibold text-center">
          💡 Les meilleurs leads répondent souvent au <strong>4e ou 5e jour</strong>
        </p>
      </div>

      <p className="text-muted-foreground">
        Sans ce système, vous perdez des leads qualifiés et votre <strong><em>rentabilité marketing rénovation</em></strong> s'effondre silencieusement.
      </p>
    </section>

    {/* Section 5 */}
    <section className="mb-12" id="confirmation">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
          <CheckCircle size={20} className="text-green-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Confirmation et sécurisation des RDV
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">
        Le RDV est pris ? <strong>Vous n'avez pas encore gagné.</strong> Un RDV non confirmé = un no-show = du temps perdu.
      </p>

      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <h3 className="text-base font-bold text-foreground font-display mb-3">🔒 Le process de sécurisation :</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" /> <strong>SMS de confirmation immédiat</strong> avec les détails du RDV</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" /> <strong>Rappel la veille</strong> — « On se voit demain à 14h »</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" /> <strong>Rappel 2h avant</strong> — dernier point de contact</li>
        </ul>
      </div>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Pourquoi c'est si important ?</h3>
      <ul className="space-y-1 text-muted-foreground mb-4">
        <li>• C'est <strong>professionnel</strong> — vous vous démarquez immédiatement</li>
        <li>• Ça <strong>rassure</strong> le prospect</li>
        <li>• Presque <strong>personne ne le fait</strong> dans le BTP</li>
      </ul>
      <p className="text-foreground font-medium">
        👉 Résultat : <strong>réduction des no-shows de 50 %</strong> et une expérience client qui commence avant même le premier rendez-vous.
      </p>
    </section>

    {/* Section 6 - Résultats */}
    <section className="mb-12" id="resultats">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <BarChart3 size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Résultats concrets (performance Agendac)
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
          <p className="text-3xl font-bold text-primary font-display">~37 %</p>
          <p className="text-sm text-muted-foreground mt-1">des leads → <strong>RDV qualifiés</strong></p>
          <p className="text-xs text-muted-foreground mt-1">Avec le process complet</p>
        </div>
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 text-center">
          <p className="text-3xl font-bold text-destructive font-display">&lt;15 %</p>
          <p className="text-sm text-muted-foreground mt-1">des leads → <strong>RDV</strong></p>
          <p className="text-xs text-muted-foreground mt-1">Sans process structuré</p>
        </div>
      </div>

      <p className="text-muted-foreground mb-4">
        Chez <Link to="/" className="text-primary hover:underline font-semibold">Agendac</Link>, chaque RDV comptabilisé = <strong>un devis réalisé</strong>. Le <strong><em>système d'acquisition client rénovation</em></strong> ne s'arrête pas au lead — il va jusqu'à l'opportunité commerciale concrète.
      </p>
      <p className="text-foreground font-medium">
        👉 Consultez nos <Link to="/results" className="text-primary hover:underline font-semibold">résultats clients</Link> pour voir l'impact de ce système en conditions réelles.
      </p>
    </section>

    {/* Section 7 - Erreurs */}
    <section className="mb-12" id="erreurs">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreurs classiques qui vous coûtent des clients
        </h2>
      </div>

      <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 mb-6">
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Appeler une seule fois</strong> et passer au lead suivant</li>
          <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Ne pas envoyer de SMS</strong> avant l'appel</li>
          <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Pas de relance structurée</strong> — un appel le lundi, un autre le jeudi…</li>
          <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Laisser les commerciaux gérer</strong> la prise de RDV en plus du closing</li>
          <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Aucune confirmation</strong> de RDV = no-shows garantis</li>
        </ul>
      </div>

      <p className="text-muted-foreground mb-4">
        Ces erreurs sont responsables de la majorité des pertes dans la <strong><em>génération de leads rénovation</em></strong>. Ce n'est pas un problème de qualité de leads — c'est un problème de <strong>process</strong>.
      </p>
      <p className="text-foreground font-medium">
        👉 Pour aller plus loin, lisez notre article : <Link to="/blog/externaliser-prise-rdv-renovation" className="text-primary hover:underline font-semibold">Pourquoi externaliser sa prise de rendez-vous en rénovation</Link>.
      </p>
    </section>

    {/* CTA final */}
    <section className="mb-12">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-foreground font-display mb-3">
          Vous voulez transformer vos leads en clients ?
        </h2>
        <p className="text-muted-foreground mb-2">
          Chez <Link to="/" className="text-primary hover:underline font-semibold">Agendac</Link>, on gère la <strong><em>génération de leads BTP</em></strong>, la prise de RDV qualifiés et le suivi complet jusqu'au devis.
        </p>
        <p className="text-muted-foreground mb-6">
          👉 Vous payez pour des <strong>opportunités réelles</strong>, pas pour des leads froids.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ */}
    <section id="faq">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Target size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Questions fréquentes
        </h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1">
          <AccordionTrigger className="text-foreground font-semibold text-left">
            Pourquoi les leads Facebook Ads rénovation ne répondent-ils pas ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les leads issus de <strong><em>Facebook Ads rénovation</em></strong> sont des leads d'interruption : ils n'étaient pas en recherche active. Ils ont besoin de plus de relances et de réassurance qu'un prospect issu de Google Ads ou du bouche-à-oreille.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger className="text-foreground font-semibold text-left">
            Combien de fois faut-il appeler un lead avant d'abandonner ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Au minimum <strong>10 tentatives</strong> (2 appels/jour pendant 5 jours). Les meilleurs leads répondent souvent au 4e ou 5e jour. Abandonner après un seul appel, c'est gaspiller votre <strong><em>coût acquisition client rénovation</em></strong>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger className="text-foreground font-semibold text-left">
            Faut-il externaliser la prise de RDV en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Si vous n'avez pas une personne dédiée à la relance avec un process strict, oui. <strong><em>Externaliser la prise de rendez-vous</em></strong> permet de maximiser chaque lead et d'augmenter votre taux de transformation de 15 % à plus de 35 %.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4">
          <AccordionTrigger className="text-foreground font-semibold text-left">
            Quel est le meilleur moment pour appeler un lead rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <strong>Immédiatement</strong>. Dans les 1 à 5 minutes suivant la réception du lead. Chaque minute qui passe réduit vos chances de décroché. Envoyez un SMS ou WhatsApp en parallèle pour maximiser l'impact.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-5">
          <AccordionTrigger className="text-foreground font-semibold text-left">
            Comment réduire les no-shows en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Triple confirmation : SMS immédiat après la prise de RDV, rappel la veille, rappel 2h avant. Ce process simple réduit les no-shows de <strong>50 %</strong> et professionnalise votre <strong><em>stratégie marketing rénovation</em></strong>.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleContacterLeadsReseauxSociaux;
