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
          Un lead issu de <strong>Facebook Ads rénovation</strong> ou d'Instagram n'a rien à voir avec un prospect qui vous appelle de lui-même. Si vous les traitez de la même façon, vous perdez jusqu'à <strong>30 % de vos opportunités</strong>. Cet article détaille le process exact pour transformer vos leads réseaux sociaux en rendez-vous qualifiés.
        </p>
      </div>
    </section>

    {/* Sommaire */}
    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#nature" className="hover:text-primary transition-colors">1. Comprendre la nature des leads réseaux sociaux</a></li>
            <li><a href="#reactivite" className="hover:text-primary transition-colors">2. Réagir immédiatement (SMS / WhatsApp)</a></li>
            <li><a href="#double-appel" className="hover:text-primary transition-colors">3. Le système du double appel</a></li>
            <li><a href="#relances" className="hover:text-primary transition-colors">4. Relances structurées sur 5 jours</a></li>
            <li><a href="#confirmation" className="hover:text-primary transition-colors">5. Confirmation et sécurisation des RDV</a></li>
            <li><a href="#resultats" className="hover:text-primary transition-colors">6. Résultats concrets</a></li>
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
        80 % des leads issus de <strong>campagnes publicitaires rénovation</strong> ne répondent pas au premier appel. Ce n'est pas qu'ils ne sont pas intéressés — c'est qu'ils ont besoin d'être contactés correctement.
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
        Un lead issu de <strong>Facebook Ads rénovation</strong> ou Instagram n'était pas forcément en train de chercher vos services. Il a vu une publicité, a cliqué… mais il est encore loin de la décision.
      </p>

      <p className="text-muted-foreground mb-3">Ce qui caractérise ces leads :</p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Ils n'étaient <strong>pas en recherche active</strong></li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Ils ont encore des <strong>objections non résolues</strong></li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Ils <strong>comparent plusieurs entreprises</strong></li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Ils oublient vite s'ils ne sont pas relancés</li>
      </ul>

      <p className="text-foreground font-medium">
        👉 Pour les convertir, il faut <strong>rassurer</strong>, <strong>qualifier</strong> et <strong>accompagner</strong>. Sinon, ils disparaissent.
      </p>
    </section>

    {/* Section 2 */}
    <section className="mb-12" id="reactivite">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Send size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Réagir immédiatement (SMS / WhatsApp)
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Dès réception du lead, vous avez <strong>une fenêtre de 1 à 5 minutes</strong> pour réagir. Au-delà, le taux de réponse chute drastiquement.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Ce que vous devez envoyer :</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Confirmation de la demande</strong> — le prospect sait qu'il a été pris en charge</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Présentation rapide</strong> de votre entreprise (1 phrase)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Annonce d'un appel imminent</strong> — il s'y attend</li>
      </ul>

      <p className="text-foreground font-medium">
        👉 Le SMS / WhatsApp <strong>augmente de 40 % le taux de réponse</strong> au premier appel. C'est le geste le plus rentable que vous puissiez faire.
      </p>
    </section>

    {/* Section 3 */}
    <section className="mb-12" id="double-appel">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <Phone size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le système du double appel (clé de performance)
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Appeler une seule fois = inefficace. La majorité des prospects ne décrochent pas au 1er appel.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">La règle du double appel :</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span> <strong>Premier appel</strong> — si pas de réponse…</li>
        <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span> <strong>Rappeler immédiatement</strong> — dans les 30 secondes</li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Pourquoi ça fonctionne ?</h3>
      <ul className="space-y-2 text-muted-foreground mb-4">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Contourne les modes « ne pas déranger »</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Capte l'attention (un double appel = urgence perçue)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Augmente le taux de décroché de <strong>+25 %</strong></li>
      </ul>

      <p className="text-foreground font-medium">
        👉 Règle simple : <strong>2 appels consécutifs à chaque tentative</strong>. Toujours.
      </p>
    </section>

    {/* CTA milieu */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Vous n'avez pas le temps de gérer tout ça en interne ?
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          Découvrez pourquoi <strong>externaliser la prise de rendez-vous</strong> est le levier le plus rentable pour votre <strong>acquisition clients rénovation</strong>.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* Section 4 */}
    <section className="mb-12" id="relances">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Repeat size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Relances structurées sur 5 jours
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Les prospects travaillent, oublient, ne priorisent pas. Ce n'est pas un refus — c'est un manque de suivi de votre côté.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Process recommandé :</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-primary font-bold">J1 à J5</span> — <strong>2 appels par jour</strong> (double appel)</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">Après chaque tentative</span> — <strong>SMS de relance</strong> court et personnalisé</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">J5</span> — <strong>Dernier message</strong> de clôture</li>
        </ul>
      </div>

      <p className="text-foreground font-semibold mb-4">
        💡 Les meilleurs leads répondent souvent au <strong>4e ou 5e jour</strong>.
      </p>

      <p className="text-muted-foreground">
        Sans ce système, vous perdez des leads qualifiés et votre <strong>rentabilité marketing rénovation</strong> s'effondre silencieusement.
      </p>
    </section>

    {/* Section 5 */}
    <section className="mb-12" id="confirmation">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <CheckCircle size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Confirmation et sécurisation des RDV
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le RDV est pris ? Vous n'avez pas encore gagné. Un RDV non confirmé = un no-show = du temps perdu.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Le process de sécurisation :</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>SMS de confirmation immédiat</strong> avec les détails du RDV</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Rappel la veille</strong> — « On se voit demain à 14h »</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Rappel 2h avant</strong> — dernier point de contact</li>
      </ul>

      <p className="text-muted-foreground mb-3">Pourquoi c'est si important ?</p>
      <ul className="space-y-1 text-muted-foreground mb-4">
        <li>• C'est <strong>professionnel</strong> — vous vous démarquez immédiatement</li>
        <li>• Ça <strong>rassure</strong> le prospect</li>
        <li>• Presque personne ne le fait dans le BTP</li>
      </ul>

      <p className="text-foreground font-medium">
        👉 Résultat : réduction des no-shows de <strong>50 %</strong>.
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

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
        <div className="grid grid-cols-2 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-primary font-display">~37 %</p>
            <p className="text-sm text-muted-foreground mt-1">des leads → <strong>RDV qualifiés</strong></p>
            <p className="text-xs text-muted-foreground">Avec le process complet</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-destructive font-display">&lt;15 %</p>
            <p className="text-sm text-muted-foreground mt-1">des leads → RDV</p>
            <p className="text-xs text-muted-foreground">Sans process structuré</p>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground mb-4">
        Chez <Link to="/" className="text-primary hover:underline font-semibold">Agendac</Link>, chaque RDV comptabilisé = un devis réalisé. Le <strong>système d'acquisition client rénovation</strong> ne s'arrête pas au lead — il va jusqu'à l'opportunité commerciale concrète.
      </p>
      <p className="text-foreground font-medium">
        👉 Consultez nos <Link to="/resultats-clients-agendac" className="text-primary hover:underline font-semibold">résultats clients</Link> pour voir l'impact en conditions réelles.
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

      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Appeler une seule fois</strong> et passer au lead suivant</li>
        <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Ne pas envoyer de SMS</strong> avant l'appel</li>
        <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Pas de relance structurée</strong></li>
        <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Laisser les commerciaux gérer</strong> la prise de RDV en plus du closing</li>
        <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong>Aucune confirmation</strong> de RDV</li>
      </ul>

      <p className="text-muted-foreground mb-4">
        Ces erreurs sont responsables de la majorité des pertes dans la <strong>génération de leads rénovation</strong>. Ce n'est pas un problème de qualité de leads — c'est un problème de process.
      </p>
      <p className="text-foreground font-medium">
        👉 Pour aller plus loin : <Link to="/blog/externaliser-prise-rdv-entreprise-renovation" className="text-primary hover:underline font-semibold">Pourquoi externaliser sa prise de rendez-vous en rénovation</Link>.
      </p>
    </section>

    {/* CTA final */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Vous voulez transformer vos leads en clients ?
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          Chez <Link to="/" className="text-primary hover:underline font-semibold">Agendac</Link>, on gère la <strong>génération de leads BTP</strong>, la prise de RDV qualifiés et le suivi complet jusqu'au devis.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ */}
    <section id="faq">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Pourquoi les leads Facebook Ads rénovation ne répondent-ils pas ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les leads issus de <strong>Facebook Ads</strong> sont des leads d'interruption : ils n'étaient pas en recherche active. Ils ont besoin de plus de relances et de réassurance qu'un prospect issu de Google Ads ou du bouche-à-oreille.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien de fois faut-il appeler un lead avant d'abandonner ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Au minimum <strong>10 tentatives</strong> (2 appels/jour pendant 5 jours). Les meilleurs leads répondent souvent au 4e ou 5e jour. Abandonner après un seul appel, c'est gaspiller votre <strong>coût acquisition client rénovation</strong>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il externaliser la prise de RDV en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Si vous n'avez pas une personne dédiée à la relance avec un process strict, oui. Externaliser la prise de rendez-vous permet de maximiser chaque lead et d'augmenter votre taux de transformation de 15 % à plus de 35 %.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quel est le meilleur moment pour appeler un lead rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <strong>Immédiatement</strong>. Dans les 1 à 5 minutes suivant la réception du lead. Chaque minute qui passe réduit vos chances de décroché.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-5" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Comment réduire les no-shows en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Triple confirmation : SMS immédiat après la prise de RDV, rappel la veille, rappel 2h avant. Ce process simple réduit les no-shows de <strong>50 %</strong>.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleContacterLeadsReseauxSociaux;
