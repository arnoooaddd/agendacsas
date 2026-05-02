import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, BadgeCheck, FileText, LayoutGrid, Smartphone, Target } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleSiteWebBtpErreursDemandesDevis2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Beaucoup d'entreprises de rénovation investissent dans un site internet, puis s'étonnent de recevoir peu de demandes sérieuses.
          Le problème ne vient pas toujours du trafic. Il vient souvent d'un site qui <strong>rassure mal, oriente mal et convertit mal</strong>.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          En 2026, un bon site web BTP ne sert pas à “faire joli”. Il sert à filtrer les bons projets, soutenir le discours commercial et transformer une visite en demande exploitable.
        </p>
      </div>
    </section>

    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">📑 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#site-levier-commercial" className="hover:text-primary transition-colors">1. Penser site vitrine au lieu de penser levier commercial</a></li>
            <li><a href="#pages-metiers" className="hover:text-primary transition-colors">2. Mélanger tous les métiers dans un discours trop vague</a></li>
            <li><a href="#preuves-confiance" className="hover:text-primary transition-colors">3. Oublier les preuves qui déclenchent la confiance</a></li>
            <li><a href="#refonte-sans-cadrage" className="hover:text-primary transition-colors">4. Refaire le site sans logique business claire</a></li>
            <li><a href="#seo-ux-mobile" className="hover:text-primary transition-colors">5. Traiter le SEO, le mobile et la performance comme des détails</a></li>
            <li><a href="#plan-action" className="hover:text-primary transition-colors">6. Le plan d'action simple pour corriger les blocages</a></li>
            <li><a href="#quand-se-faire-accompagner" className="hover:text-primary transition-colors">7. Quand faut-il se faire accompagner ?</a></li>
            <li><a href="#faq-site-web-btp" className="hover:text-primary transition-colors">8. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="site-levier-commercial">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Target size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreur n°1 : penser “site vitrine” au lieu de penser “levier commercial”
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Beaucoup de sites d'entreprises du bâtiment racontent l'histoire de la société, listent quelques prestations et s'arrêtent là.
        Or un dirigeant de société de rénovation à +1 M€ de CA n'a pas besoin d'un simple support de présentation.
        Il a besoin d'un site capable d'aider ses équipes à transformer des visites en opportunités commerciales.
      </p>
      <p className="text-muted-foreground mb-4">
        Une entreprise de toiture, de menuiserie ou de rénovation globale peut avoir un bon trafic local et malgré tout perdre des demandes si le visiteur ne comprend pas vite :
        la zone couverte, le type de chantier visé, le niveau de gamme et la prochaine action à faire.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Un site utile doit aider à :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />qualifier rapidement le bon type de prospect</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />mettre en avant les métiers et les chantiers rentables</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />soutenir la prise de contact sans friction</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />préparer le travail commercial derrière le formulaire</li>
        </ul>
      </div>

      <p className="text-muted-foreground mt-6">
        Dans le BTP, le problème n'est presque jamais uniquement le trafic. Il se situe souvent entre la promesse affichée, la qualité perçue et le traitement commercial qui suit.
      </p>
    </section>

    <section className="mb-12" id="pages-metiers">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <LayoutGrid size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreur n°2 : mélanger tous les métiers dans un discours trop vague
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Une seule page “nos services” qui parle à la fois d'isolation, toiture, façade, menuiserie et rénovation intérieure finit souvent par ne convaincre personne.
        Le prospect voit un catalogue. Il ne voit pas une expertise adaptée à son projet.
      </p>
      <p className="text-muted-foreground mb-4">
        Pour une société déjà structurée, le site doit séparer les enjeux par métier, par typologie de chantier ou par objectif commercial.
        C'est ce qui permet de mieux répondre à l'intention de recherche et d'augmenter la conversion.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Ce qu'il faut éviter</h3>
          <p className="text-muted-foreground text-sm">Un discours trop large, des pages courtes, aucune différenciation entre les métiers et aucune précision sur les chantiers visés.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Ce qu'il faut construire</h3>
          <p className="text-muted-foreground text-sm">Des pages dédiées par expertise, des bénéfices concrets, des exemples de réalisations et des points de contact pensés pour chaque offre.</p>
        </div>
      </div>

      <p className="text-muted-foreground mt-6">
        Si votre entreprise traite plusieurs segments, relisez aussi <Link to="/blog/landing-page-renovation-rendez-vous" className="text-primary hover:underline">comment structurer une landing page rénovation qui génère des rendez-vous</Link>.
      </p>
    </section>

    <section className="mb-12" id="preuves-confiance">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <BadgeCheck size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreur n°3 : oublier les preuves qui déclenchent la confiance
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un visiteur qui envisage un chantier à plusieurs milliers d'euros ne se contente pas d'une belle promesse.
        Il cherche des signaux de sérieux : réalisations détaillées, avis clients, labels, photos de chantier crédibles, zone d'intervention, délais, capacité d'exécution.
      </p>
      <p className="text-muted-foreground mb-4">
        Beaucoup d'entreprises réduisent encore leurs références à une galerie photo sans contexte.
        Pourtant, une bonne fiche chantier explique le besoin, les contraintes, la solution retenue et le résultat livré.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-3">Exemple terrain :</p>
        <p className="text-muted-foreground mb-0">
          Une entreprise de rénovation énergétique qui intervient sur des maisons individuelles en Île-de-France convertira mieux avec 5 études de cas claires sur l'isolation, la pompe à chaleur ou les menuiseries qu'avec 40 photos non commentées.
        </p>
      </div>
    </section>

    <section className="mb-12" id="refonte-sans-cadrage">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <FileText size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreur n°4 : refaire le site sans logique business claire
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Une refonte de site pilotée uniquement par le design produit souvent un site plus moderne, mais pas forcément plus rentable.
        Avant de parler maquette, il faut cadrer les objectifs : plus de demandes locales, meilleure qualification, soutien au commercial, recrutement, visibilité métier, ou un mix précis de ces enjeux.
      </p>
      <p className="text-muted-foreground mb-4">
        Une entreprise de rénovation déjà en place doit définir en amont quelles activités elle veut pousser, quelles zones elle veut renforcer, quel panier moyen elle protège et quels prospects elle préfère écarter.
      </p>

      <ul className="space-y-3 text-muted-foreground">
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>Quelles pages doivent vraiment générer des demandes ?</li>
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>Quels formulaires servent à qualifier plutôt qu'à collecter du volume ?</li>
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>Quelles preuves commerciales doivent apparaître avant la prise de contact ?</li>
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>Comment les leads remontent-ils ensuite dans le CRM et le suivi commercial ?</li>
      </ul>
    </section>

    <section className="mb-12" id="seo-ux-mobile">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Smartphone size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Erreur n°5 : traiter le SEO, le mobile et la performance comme des détails
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        En 2026, un site lent, flou ou mal structuré perd sur tous les tableaux : expérience utilisateur, visibilité Google, reprise dans les moteurs IA et conversion.
      </p>
      <p className="text-muted-foreground mb-4">
        Sur beaucoup de comptes rénovation, les demandes arrivent après une consultation mobile entre deux rendez-vous, depuis Google Maps, une recherche locale ou une publicité.
        Si la page charge mal, si le CTA disparaît ou si la preuve sociale n'est pas visible, la visite s'arrête là.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Le minimum à contrôler :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• vitesse de chargement mobile</li>
          <li>• clarté du message au-dessus de la ligne de flottaison</li>
          <li>• cohérence SEO entre pages métiers, réalisations et maillage interne</li>
          <li>• qualité des redirections si le site a été refondu</li>
          <li>• lisibilité des formulaires et facilité d'appel</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="plan-action">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le plan d'action simple pour corriger les blocages
        </h2>
      </div>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">1. Revoir la promesse</h3>
          <p className="text-muted-foreground">Un visiteur doit comprendre en quelques secondes quel type de chantier vous traitez, dans quelle zone, et pour quel niveau de projet.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">2. Refaire la structure métier</h3>
          <p className="text-muted-foreground">Créez des pages dédiées par expertise et reliez-les à des preuves concrètes : cas chantier, avis, labels, questions fréquentes.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">3. Mesurer ce qui compte</h3>
          <p className="text-muted-foreground">Suivez non seulement les formulaires envoyés, mais aussi la qualité des demandes, le taux de rappel, le taux de devis et le taux de signature.</p>
        </div>
      </div>

      <p className="text-muted-foreground mt-6">
        Pour aller plus loin sur la rentabilité des demandes, vous pouvez aussi lire <Link to="/blog/devis-renovation-transformer-demandes-chantiers-signes" className="text-primary hover:underline">comment transformer plus de demandes en chantiers signés</Link>.
      </p>
    </section>

    <section className="mb-16" id="quand-se-faire-accompagner">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Quand faut-il se faire accompagner ?</p>
        <p className="text-foreground font-semibold text-lg mb-4">
          Quand le site ne sert plus seulement à “être présent”, mais doit soutenir une vraie logique d'acquisition, de qualification et de suivi commercial.
        </p>
        <p className="text-muted-foreground mb-6">
          Si votre entreprise reçoit déjà du trafic mais peu de demandes sérieuses, ou si vos commerciaux jugent les formulaires peu exploitables, le sujet n'est probablement pas juste graphique. Il est stratégique.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-site-web-btp">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Un site internet rénovation doit-il forcément avoir une page par métier ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui dans la majorité des cas. Dès qu'une entreprise traite plusieurs offres ou plusieurs types de chantiers, des pages dédiées améliorent la compréhension, le SEO et la conversion.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Qu'est-ce qui fait perdre le plus de demandes sur un site BTP ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Le plus fréquent est un mélange de promesse floue, preuves insuffisantes et parcours de contact mal pensé. Le trafic arrive, mais il ne se transforme pas en opportunités utiles.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il refaire tout le site pour améliorer les résultats ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Pas toujours. Parfois, quelques pages clés, de meilleures preuves de réassurance et un meilleur suivi des demandes suffisent à relancer la performance sans refonte complète.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleSiteWebBtpErreursDemandesDevis2026;
