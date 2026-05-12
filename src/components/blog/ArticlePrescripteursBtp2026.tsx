import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building2, FileText, Globe, Linkedin, Target, Users } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticlePrescripteursBtp2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Dans le BTP, les prescripteurs (architectes, bureaux d&apos;études, économistes) ne sont pas les signataires finaux des devis, mais leur influence sur le choix des solutions techniques est déterminante.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Une entreprise de rénovation qui ignore les prescripteurs laisse souvent un concurrent décider à sa place. Pourtant, peu d&apos;entreprises du bâtiment ont une stratégie de communication structurée vers ces acteurs clés.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#prescripteurs" className="hover:text-primary transition-colors">1. Qui sont les prescripteurs du BTP</a></li>
            <li><a href="#attentes" className="hover:text-primary transition-colors">2. Leurs attentes</a></li>
            <li><a href="#contenus" className="hover:text-primary transition-colors">3. Contenus pour les prescripteurs</a></li>
            <li><a href="#canaux" className="hover:text-primary transition-colors">4. Les canaux pour les toucher</a></li>
            <li><a href="#linkedin" className="hover:text-primary transition-colors">5. LinkedIn, un outil clé</a></li>
            <li><a href="#commercial" className="hover:text-primary transition-colors">6. De la prescription au projet</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <p className="text-muted-foreground mb-4">
      Les prescripteurs interviennent dès la phase de conception. Être identifié par eux, c&apos;est être intégré au projet avant toute concurrence.
    </p>

    <section className="mb-12" id="prescripteurs">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Users size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">Qui sont les prescripteurs du BTP</h2>
      </div>
      <p className="text-muted-foreground mb-4">Architectes, bureaux d&apos;études techniques, économistes de la construction : chacun peut recommander une entreprise ou une solution avant même la consultation des devis. Les ignorer, c&apos;est laisser ces décisions à vos concurrents.</p>
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-0"><strong>Être prescrit, c&apos;est ne pas être en concurrence directe sur le prix.</strong> Le choix est déjà orienté avant l&apos;appel d&apos;offres.</p>
      </div>
    </section>

    <section className="mb-12" id="attentes">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Target size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">Comprendre leurs attentes</h2>
      </div>
      <p className="text-muted-foreground mb-4">Un architecte cherche un professionnel fiable qui comprend ses contraintes. Un bureau d&apos;études a besoin de données précises. Votre communication doit répondre à ces attentes : études de cas techniques, fiches projets, références vérifiables.</p>
    </section>

    <section className="mb-12" id="contenus">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <FileText size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">Créer des contenus pour les prescripteurs</h2>
      </div>
      <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
        <li>fiches projets détaillées avec contraintes et solutions</li>
        <li>études de cas sur des chantiers complexes</li>
        <li>contenus pédagogiques sur les normes et réglementations</li>
        <li>témoignages d&apos;architectes ou maîtres d&apos;œuvre partenaires</li>
      </ul>
    </section>

    <section className="mb-12" id="canaux">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Globe size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">Les canaux pour toucher les prescripteurs</h2>
      </div>
      <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
        <li><strong>LinkedIn</strong> pour le réseau professionnel</li>
        <li><strong>Salons</strong> et événements BTP</li>
        <li><strong>Relations presse</strong> spécialisées</li>
        <li><strong>Référencement local</strong> sur les requêtes métier</li>
        <li><strong>Recommandations</strong> croisées entre prescripteurs</li>
      </ul>
    </section>

    <section className="mb-12" id="linkedin">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Linkedin size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">LinkedIn : un outil clé pour la prescription</h2>
      </div>
      <p className="text-muted-foreground mb-4">Publier des contenus techniques, commenter l&apos;actualité, interagir avec les architectes de votre zone permet de rester présent dans leur environnement professionnel. L&apos;objectif n&apos;est pas de vendre, mais d&apos;être recommandé quand un projet correspond à votre profil.</p>
    </section>

    <section className="mb-12" id="commercial">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Building2 size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">De la prescription au projet</h2>
      </div>
      <p className="text-muted-foreground mb-4">La communication prescripteurs ne remplace pas une force commerciale. Elle la renforce. Être connu des prescripteurs, c&apos;est être invité à répondre à un appel d&apos;offres au lieu d&apos;être snobé. Chez Agendac, nous aidons les entreprises du BTP à structurer leur communication vers les prescripteurs.</p>
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-6 md:p-8 border border-primary/10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">Structurez votre communication prescripteurs</h2>
        <p className="text-muted-foreground mb-6">Vous souhaitez être identifié par les architectes et bureaux d&apos;études de votre secteur ? Agendac vous accompagne dans votre stratégie de prescription.</p>
        <SectionCTA />
      </div>
    </section>
  </div>
);

export default ArticlePrescripteursBtp2026;
