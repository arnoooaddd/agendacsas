import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Vendez-vous des leads / prospects ?",
    answer: "Non. Agendac ne vend pas de leads.",
  },
  {
    question: "Que faites-vous chez Agendac ?",
    answer: "Nous mettons en place des infrastructures d'acquisition client via le digital et développons la notoriété des entreprises de rénovation de l'habitat. Notre travail repose sur la communication : contenus professionnels, image de marque et présence en ligne cohérente, afin d'attirer des clients qualifiés sans promesses trompeuses, fausses aides ou discours low-cost. L'objectif est clair : permettre à nos partenaires de se différencier par la qualité et la crédibilité de leur entreprise, pas par le prix.",
  },
  {
    question: "Pourquoi Agendac plutôt qu'un autre prestataire ?",
    answer: "Parce que nous sommes spécialisés dans la rénovation de l'habitat. Isolation, menuiserie, rénovation globale, piscine, aménagement… Nous connaissons vos métiers, votre clientèle et leurs attentes. Résultat : une communication alignée avec votre discours commercial, crédible, et pensée pour durer — pas une stratégie générique applicable à n'importe quel secteur.",
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
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 border-gradient">
              <HelpCircle size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground/80">
                Questions fréquentes
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Une question ?{" "}
              <span className="text-gradient">On y répond</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Retrouvez les réponses aux questions les plus fréquentes de nos partenaires.
            </p>
          </AnimatedSection>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="scale">
                <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <AccordionItem
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
                </motion.div>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;