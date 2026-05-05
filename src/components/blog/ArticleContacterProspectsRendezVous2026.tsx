import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const sections = [
  { id: "rapidite-rappel", label: "La vitesse de rappel change le taux de rendez-vous" },
  { id: "cadence-relance", label: "Une relance structurée vaut mieux qu’un appel isolé" },
  { id: "message-canal", label: "Le bon message et le bon canal font gagner du temps" },
  { id: "qualification-rdv", label: "Le vrai objectif n’est pas d’appeler, mais de qualifier" },
  { id: "quand-faire-accompagner", label: "Quand faut-il se faire accompagner ?" },
];

export default function ArticleContacterProspectsRendezVous2026() {
  return (
    <article className="space-y-10">
      <div className="space-y-4 text-lg leading-8 text-foreground/90">
        <p>
          Recevoir une demande ne suffit pas. Dans beaucoup d’entreprises de rénovation, le problème ne vient pas du volume de leads,
          mais du délai de rappel, du manque de méthode et d’un suivi commercial trop irrégulier.
        </p>
        <p>
          Si vos équipes rappellent tard, laissent peu de traces ou abandonnent après une seule tentative, vous perdez des rendez-vous
          avant même d’avoir pu qualifier le besoin.
        </p>
      </div>

      <section className="rounded-2xl border border-border bg-muted/30 p-6">
        <h2 className="text-xl font-semibold mb-4">Sommaire</h2>
        <ul className="space-y-2 text-sm md:text-base">
          {sections.map((section) => (
            <li key={section.id}>
              <a className="text-primary hover:underline" href={`#${section.id}`}>
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <p>
          Une prise de rendez-vous rentable en rénovation est un processus qui relie <strong>réactivité, relance, qualification et passage de relais</strong>
          au commercial. Dans le BTP, le problème n’est presque jamais uniquement le trafic. Il se situe souvent entre la promesse, la qualification
          et le traitement commercial.
        </p>
      </section>

      <section id="rapidite-rappel" className="space-y-4 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight">La vitesse de rappel change le taux de rendez-vous</h2>
        <p>
          Un prospect qui vient de demander un devis est encore dans sa fenêtre d’attention. Plus vous tardez, plus il compare, oublie,
          ou répond au premier concurrent qui le rappelle sérieusement.
        </p>
        <p>
          Pour une entreprise de couverture, de menuiserie ou de rénovation globale, rappeler vite ne veut pas dire appeler dans la précipitation.
          Cela veut dire avoir un système simple : notification immédiate, responsable identifié, script court et créneau de rappel prioritaire.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Visez un premier rappel dans les 5 à 15 minutes quand la demande arrive sur horaires ouvrés.</li>
          <li>Prévoyez une règle claire de reprise le matin suivant pour les formulaires reçus le soir ou le week-end.</li>
          <li>Ne laissez jamais un lead web sans propriétaire commercial désigné.</li>
        </ul>
        <p>
          Un dirigeant voit vite l’impact : moins de temps perdu sur des demandes froides, plus d’échanges utiles, et un agenda commercial mieux rempli.
        </p>
      </section>

      <section id="cadence-relance" className="space-y-4 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight">Une relance structurée vaut mieux qu’un appel isolé</h2>
        <p>
          Beaucoup d’équipes appellent une fois, n’obtiennent pas de réponse, puis concluent que le prospect n’était pas sérieux. C’est une erreur classique.
          En réalité, une grande partie des demandes non jointes sont simplement mal relancées.
        </p>
        <p>
          Une cadence simple est souvent suffisante : deux tentatives le premier jour, puis une à deux tentatives par jour pendant quelques jours,
          avec des horaires différents. L’enjeu n’est pas d’harceler, mais d’augmenter vos chances de contact réel.
        </p>
        <div className="rounded-2xl border border-border p-6 bg-background">
          <h3 className="text-xl font-semibold mb-3">Cadence minimale recommandée</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Jour 1 : un appel rapide puis une seconde tentative plus tard dans la journée.</li>
            <li>Jours 2 à 4 : une tentative le matin ou en fin de journée selon la cible.</li>
            <li>Après chaque tentative : une trace écrite courte et contextualisée.</li>
          </ul>
        </div>
        <p>
          Si vous gérez 20 à 40 demandes par semaine, cette discipline seule peut déjà améliorer le taux de rendez-vous sans augmenter votre budget d’acquisition.
        </p>
      </section>

      <section id="message-canal" className="space-y-4 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight">Le bon message et le bon canal font gagner du temps</h2>
        <p>
          Un appel manqué sans message laisse un doute. Un message trop générique passe inaperçu. Il faut rassurer vite et rappeler le contexte de la demande.
        </p>
        <p>
          Le bon réflexe consiste à combiner téléphone et message de suivi court par SMS ou WhatsApp, selon votre organisation commerciale.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Présentez l’entreprise et le motif du rappel en une phrase.</li>
          <li>Rappelez la demande formulée : isolation, toiture, fenêtres, pompe à chaleur, rénovation globale…</li>
          <li>Proposez une suite simple : rappel, créneau, ou retour par message.</li>
        </ul>
        <p>
          Exemple terrain : un prospect ayant demandé un devis menuiserie répond rarement à “Bonjour, essayez de me rappeler”. Il répond davantage à un message du type :
          “Bonjour, suite à votre demande pour vos fenêtres, je peux vous rappeler aujourd’hui entre 12h30 et 14h ou après 18h.”
        </p>
        <p>
          Cette précision réduit les allers-retours et donne une image plus professionnelle. Elle prépare aussi une meilleure <Link className="text-primary hover:underline" to="/blog/lead-renovation-demande-vraiment-qualifiee">qualification du lead</Link>.
        </p>
      </section>

      <section id="qualification-rdv" className="space-y-4 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight">Le vrai objectif n’est pas d’appeler, mais de qualifier</h2>
        <p>
          Chercher un rendez-vous à tout prix est rarement la bonne logique. Ce qui compte, c’est d’obtenir un rendez-vous utile : avec le bon interlocuteur,
          sur un besoin réel, dans une temporalité cohérente.
        </p>
        <p>
          Avant de bloquer un créneau, vos équipes doivent valider quelques points :
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>la nature exacte du projet ;</li>
          <li>la zone d’intervention ;</li>
          <li>le niveau de maturité ;</li>
          <li>la faisabilité budgétaire minimale ;</li>
          <li>la disponibilité pour une visite ou un échange commercial.</li>
        </ul>
        <p>
          C’est là qu’un bon système de <Link className="text-primary hover:underline" to="/prise-rendez-vous">prise de rendez-vous</Link> change la donne. Il évite de remplir l’agenda avec des contacts peu exploitables et aide à mieux relier marketing, CRM et taux de signature.
        </p>
        <p>
          Dans une entreprise du bâtiment, un rendez-vous mal qualifié coûte double : du temps commercial perdu aujourd’hui, et une lecture faussée de la performance d’acquisition demain.
        </p>
      </section>

      <section id="quand-faire-accompagner" className="space-y-4 scroll-mt-24 rounded-2xl border border-border bg-muted/30 p-6">
        <h2 className="text-3xl font-bold tracking-tight">Quand faut-il se faire accompagner ?</h2>
        <p>
          Si vos campagnes génèrent déjà des demandes mais que vos commerciaux n’arrivent pas à les traiter avec constance, le sujet dépasse une simple action marketing.
          Il faut revoir le passage de relais, la méthode de rappel, les critères de qualification et le suivi CRM.
        </p>
        <p>
          C’est souvent le bon moment pour structurer l’ensemble : source de lead, délai de rappel, script, relance, qualification et reporting. Sans cette chaîne,
          même un bon volume de demandes finit par produire une rentabilité décevante.
        </p>
        <p>
          Pour aller plus loin, vous pouvez aussi relier ce travail à votre <Link className="text-primary hover:underline" to="/blog/devis-renovation-transformer-demandes-chantiers-signes">taux de transformation devis</Link> et à votre système d’<Link className="text-primary hover:underline" to="/blog/marketing-btp-levier-croissance-2026">acquisition client BTP</Link>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Conclusion</h2>
        <p>
          Pour maximiser le nombre de rendez-vous, il faut surtout contacter vos prospects plus vite, plus régulièrement et avec une méthode claire.
          Les entreprises de rénovation qui progressent sur ce sujet ne rappellent pas seulement davantage : elles qualifient mieux, tracent mieux et exploitent mieux chaque demande.
        </p>
        <p>
          Quand la relance commerciale devient un processus, chaque lead a plus de chances de devenir une vraie opportunité.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Combien de temps faut-il attendre avant de rappeler un prospect rénovation ?</AccordionTrigger>
            <AccordionContent>
              Le plus tôt possible sur horaires ouvrés. En pratique, un rappel dans les 5 à 15 minutes maximise souvent les chances de contact, surtout après une demande de devis en ligne.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Faut-il laisser un message vocal à chaque tentative ?</AccordionTrigger>
            <AccordionContent>
              Oui, si le message reste court, contextualisé et utile. Il rassure le prospect et augmente la probabilité d’un retour, surtout s’il est complété par un SMS ou WhatsApp.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Pourquoi mes leads ne se transforment-ils pas en rendez-vous alors que les campagnes tournent ?</AccordionTrigger>
            <AccordionContent>
              Le problème vient souvent du traitement commercial : délai de rappel, manque de relance, qualification floue ou absence de suivi CRM. Le trafic seul n’explique pas tout.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Quel canal utiliser après un appel manqué ?</AccordionTrigger>
            <AccordionContent>
              Le SMS ou WhatsApp fonctionnent bien s’ils rappellent clairement la demande initiale et proposent une suite simple. L’important est de garder un message court, humain et précis.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </article>
  );
}
