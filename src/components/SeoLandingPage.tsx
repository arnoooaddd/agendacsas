import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ServiceFooter from "@/components/ServiceFooter";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { usePageTitle, useCanonical, useMetaDescription } from "@/hooks/usePageTitle";

export interface SeoLandingPageProps {
  pageTitle: string;
  metaDescription: string;
  canonical: string;
  h1: string;
  intro: string;
  problem: { title: string; body: string };
  solution: { title: string; body: string };
  services: { title: string; items: string[] };
  why: { title: string; items: string[] };
  faq: { question: string; answer: string }[];
  ctaLabel?: string;
}

const SeoLandingPage = ({
  pageTitle, metaDescription, canonical, h1, intro,
  problem, solution, services, why, faq,
  ctaLabel = "Discuter de mon projet"
}: SeoLandingPageProps) => {
  usePageTitle(pageTitle);
  useMetaDescription(metaDescription);
  useCanonical(canonical);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(f => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <article>
          <section className="relative pt-32 pb-16 overflow-hidden bg-background">
            <div className="absolute inset-0 gradient-mesh opacity-100" />
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
              <AnimatedSection>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                  {h1}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  {intro}
                </p>
                <Link to="/prise-rendez-vous">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    {ctaLabel} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{problem.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{problem.body}</p>
              </AnimatedSection>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{solution.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{solution.body}</p>
              </AnimatedSection>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">{services.title}</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {services.items.map((s) => (
                    <li key={s} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{s}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">{why.title}</h2>
                <ul className="space-y-4">
                  {why.items.map((w) => (
                    <li key={w} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-lg text-foreground">{w}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Questions fréquentes</h2>
                <div className="space-y-6">
                  {faq.map((f) => (
                    <div key={f.question} className="p-6 rounded-lg bg-background border border-border">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{f.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-3xl text-center">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Prêt à structurer votre acquisition client ?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Échangeons sur votre situation et voyons comment Agendac peut accompagner la croissance de votre société de rénovation.
                </p>
                <Link to="/prise-rendez-vous">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    {ctaLabel} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </section>
        </article>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </main>
      <ServiceFooter />
    </div>
  );
};

export default SeoLandingPage;
