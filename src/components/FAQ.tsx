import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Pour quels types d'entreprises travaillez-vous ?",
    answer: "Nous travaillons exclusivement avec les entreprises de rénovation de l'habitat : CVC, ENR, isolation, menuiseries, toiture, etc. Cette spécialisation nous permet d'avoir une expertise pointue dans votre secteur.",
  },
  {
    question: "Combien coûte un lead qualifié ?",
    answer: "Le coût par lead varie selon votre zone géographique, votre secteur d'activité et la saisonnalité. En moyenne, nos clients obtiennent un retour sur investissement de x6,7 sur leur marge brute.",
  },
  {
    question: "Quelle est la qualité des leads fournis ?",
    answer: "Nos leads sont 100% exclusifs et qualifiés. Ils ont exprimé un besoin réel, ont un projet concret et correspondent à vos critères de ciblage. Pas de leads partagés avec d'autres entreprises.",
  },
  {
    question: "En combien de temps vais-je voir des résultats ?",
    answer: "Les premiers rendez-vous arrivent généralement dans les 2 à 3 premières semaines. L'optimisation continue de vos campagnes permet d'améliorer les performances au fil du temps.",
  },
  {
    question: "Dois-je m'engager sur une durée minimum ?",
    answer: "Nous recommandons un engagement de 3 mois minimum pour voir des résultats significatifs et optimiser vos campagnes. Cela dit, nous restons flexibles et adaptons nos offres à vos besoins.",
  },
  {
    question: "Comment fonctionne le système de rendez-vous ?",
    answer: "Les leads qualifiés sont directement intégrés dans votre agenda. Vous recevez une notification avec toutes les informations du prospect et le rendez-vous est confirmé. Simple et efficace.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 border-gradient">
            <HelpCircle size={16} className="text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Questions fréquentes
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Une question ?{" "}
            <span className="text-gradient">On y répond</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Retrouvez les réponses aux questions les plus fréquentes de nos partenaires.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-gradient px-6 data-[state=open]:glow-primary transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
