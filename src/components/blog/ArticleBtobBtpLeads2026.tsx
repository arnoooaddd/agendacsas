import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building2, FileText, Globe, BarChart3, Target } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleBtobBtpLeads2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Le marketing BtoB dans le BTP ne fonctionne pas comme le marketing grand public.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Les cycles de décision sont plus longs, les budgets plus importants, et les interlocuteurs multiples. Pourtant, beaucoup d&apos;entreprises du bâtiment traitent leur prospection BtoB comme si elles vendaient à des particuliers. Une stratégie BtoB efficace repose sur trois piliers : un ciblage précis, un contenu adapté au cycle d&apos;achat, et un suivi commercial structuré.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#ciblage" className="hover:text-primary transition-colors">1. Pourquoi le ciblage est la clé</a></li>
            <li><a href="#contenu" className="hover:text-primary transition-colors">2. Un contenu adapté au cycle d&apos;achat</a></li>
            <li><a href="#canaux" className="hover:text-primary transition-colors">3. Les canaux les plus efficaces</a></li>
            <li><a href="#suivi" className="hover:text-primary transition-colors">4. Un suivi qui transforme les leads</a></li>
            <li><a href="#quand" className="hover:text-primary transition-colors">5. Quand structurer une stratégie BtoB</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <p className="text-muted-foreground mb-4">
      Dans le BTP, le marketing BtoB est souvent négligé au profit du grand public. Pourtant, les chantiers professionnels représentent une part significative du chiffre d&apos;affaires pour de nombreuses entreprises du bâtiment.
    </p>

    <section className="mb-12" id="ciblage">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Target size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi le ciblage est la clé du marketing BtoB BTP
        </h2>
      </div>
      <p className="text-muted-foreground mb-4">Un promoteur, un constructeur et une entreprise de rénovation lourde n&apos;ont pas les mêmes besoins. Le premier réflexe est de segmenter son marché par typologie d&apos;entreprise, taille et zone géographique. Les entreprises qui performent en BtoB BTP construisent des listes de prospects qualifiés avant même de lancer une campagne.</p>
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-0"><strong>Dans le BTP, la segmentation est la moitié du travail.</strong> Un message adapté à un segment convertit cinq fois mieux qu&apos;un message générique.</p>
      </div>
    </section>

    <section className="mb-12" id="contenu">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <FileText size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">Un contenu adapté à chaque étape du cycle d&apos;achat</h2>
      </div>
      <p className="text-muted-foreground mb-4">Un prospect BtoB a besoin de plusieurs points de contact avant d&apos;être prêt à échanger :</p>
      <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
        <li><strong>Découverte</strong> : articles, livres blancs, études de cas</li>
        <li><strong>Considération</strong> : comparatifs, guides, webinaires</li>
        <li><strong>Décision</strong> : propositions sur-mesure, démonstrations, rendez-vous</li>
      </ul>
      <p className="text-muted-foreground mb-4">Chaque contenu doit répondre à une question que le prospect se pose réellement.</p>
    </section>

    <section className="mb-12" id="canaux">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Globe size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">Les canaux les plus efficaces pour le BtoB BTP</h2>
      </div>
      <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
        <li><strong>LinkedIn</strong> pour le ciblage nominatif des décideurs</li>
        <li><strong>Google Ads</strong> sur des mots-clés à forte intention professionnelle</li>
        <li><strong>L&apos;emailing</strong> ciblé sur des bases de prospects qualifiées</li>
        <li><strong>Les relations presse</strong> dans les médias spécialisés BTP</li>
        <li><strong>Les salons</strong> et événements professionnels</li>
      </ul>
      <p className="text-muted-foreground mb-4">Les entreprises qui combinent au moins trois canaux obtiennent des résultats bien supérieurs.</p>
    </section>

    <section className="mb-12" id="suivi">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <BarChart3 size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">Un suivi qui transforme les leads en rendez-vous</h2>
      </div>
      <p className="text-muted-foreground mb-4">Le maillon faible du marketing BtoB BTP est souvent le suivi. Un prospect intéressé sans nouvelle pendant une semaine passe chez un concurrent. Un CRM bien configuré avec des séquences de relance automatiques fait la différence.</p>
    </section>

    <section className="mb-12" id="quand">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Building2 size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">Quand structurer une stratégie BtoB BTP</h2>
      </div>
      <p className="text-muted-foreground mb-4">Si votre entreprise dépend uniquement du bouche-à-oreille ou des appels sortants pour trouver ses clients professionnels, il est temps de structurer une vraie stratégie. Les marges sont plus confortables et les chantiers plus gros qu&apos;en particulier.</p>
      <p className="text-muted-foreground mb-4">Chez Agendac, nous accompagnons les entreprises du BTP sur l&apos;ensemble de leur stratégie BtoB : ciblage, contenu, campagnes et suivi CRM.</p>
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-6 md:p-8 border border-primary/10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">Structurez votre acquisition BtoB BTP</h2>
        <p className="text-muted-foreground mb-6">Vous souhaitez générer plus de leads commerciaux qualifiés dans le BTP ? Agendac vous accompagne du ciblage à la signature.</p>
        <SectionCTA />
      </div>
    </section>
  </div>
);

export default ArticleBtobBtpLeads2026;
