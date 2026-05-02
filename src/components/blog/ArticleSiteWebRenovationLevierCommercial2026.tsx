import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BadgeCheck, Briefcase, ChartColumn, FileText, PhoneCall, Target, Wrench } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleSiteWebRenovationLevierCommercial2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          En 2026, le site web d'une entreprise de rénovation ne doit plus servir uniquement à "présenter la société". Il doit préparer la vente, rassurer avant le premier échange et aider vos équipes à traiter des demandes plus mûres.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Pour une structure déjà établie, l'enjeu n'est pas d'avoir plus de pages pour faire joli. L'enjeu est d'avoir un site qui relie <strong>trafic, qualification, prise de rendez-vous et conversion commerciale</strong>.
        </p>
      </div>
    </section>

    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#site-pas-vitrine" className="hover:text-primary transition-colors">1. Pourquoi un site ne peut plus rester une simple vitrine</a></li>
            <li><a href="#site-et-cycle-de-vente" className="hover:text-primary transition-colors">2. Comment le site doit soutenir le cycle de vente</a></li>
            <li><a href="#pages-qui-aident-les-commerciaux" className="hover:text-primary transition-colors">3. Les pages qui aident vraiment vos commerciaux</a></li>
            <li><a href="#points-de-conversion" className="hover:text-primary transition-colors">4. Où placer les points de conversion</a></li>
            <li><a href="#donnees-commerciales" className="hover:text-primary transition-colors">5. Les données à remonter pour mieux qualifier</a></li>
            <li><a href="#plan-90-jours-site" className="hover:text-primary transition-colors">6. Le plan d'action 90 jours</a></li>
            <li><a href="#quand-refondre" className="hover:text-primary transition-colors">7. Quand faut-il refondre ou recadrer le site ?</a></li>
            <li><a href="#faq-site-web-commercial" className="hover:text-primary transition-colors">8. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="site-pas-vitrine">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Briefcase size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi un site ne peut plus rester une simple vitrine
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un site web rénovation rentable est un outil qui aide vos prospects à comprendre votre offre, vos équipes à gagner du temps et votre direction à mieux piloter l'acquisition.
      </p>
      <p className="text-muted-foreground mb-4">
        Beaucoup d'entreprises de rénovation au-dessus de 1 M€ de chiffre d'affaires ont déjà un site correct visuellement, mais pas forcément un site utile commercialement. On y voit quelques réalisations, une page contact et une promesse trop générale. Résultat : le trafic existe parfois, mais il nourrit mal le pipeline.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Un site doit aujourd'hui pouvoir :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />capter une demande déjà active sur un métier ou une zone</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />rassurer avant même le premier appel avec des preuves claires</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />préqualifier le prospect avant qu'un commercial ne prenne le relais</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />faire remonter des signaux utiles dans votre logique CRM</li>
        </ul>
      </div>

      <p className="text-muted-foreground mt-6">
        Dans la rénovation, le problème n'est presque jamais uniquement le trafic. Le vrai sujet se situe souvent entre la promesse du site, le niveau de réassurance et la qualité du traitement commercial qui suit.
      </p>
    </section>

    <section className="mb-12" id="site-et-cycle-de-vente">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <ChartColumn size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment le site doit soutenir le cycle de vente
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un bon site ne remplace pas un commercial. En revanche, il peut faire une partie du travail en amont : cadrer l'offre, poser les bons critères, montrer des cas concrets et faire avancer la décision avant le rendez-vous.
      </p>
      <p className="text-muted-foreground mb-4">
        Prenons un cas terrain : une entreprise qui vend de la rénovation globale en Gironde. Si le prospect arrive sur une page floue qui parle de "travaux sur mesure" sans exemples, sans zones d'intervention, sans process et sans réassurance, l'appel aura lieu trop tôt ou ne se fera pas. À l'inverse, une page métier claire peut déjà filtrer les demandes les moins sérieuses.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le bon réflexe :</p>
        <p className="text-muted-foreground mb-0">
          Pensez le site comme une <strong>extension du cycle de vente</strong> : avant le contact, pendant la qualification et même après le premier échange quand il faut renvoyer une étude de cas, une FAQ ou une page métier.
        </p>
      </div>
    </section>

    <section className="mb-12" id="pages-qui-aident-les-commerciaux">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <FileText size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les pages qui aident vraiment vos commerciaux
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Toutes les pages n'ont pas la même utilité. Si vous voulez que le site nourrisse votre stratégie commerciale, certaines pages sont prioritaires.
      </p>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">1. Les pages métiers</h3>
          <p className="text-muted-foreground">Isolation, toiture, façade, menuiserie, pompe à chaleur : chaque offre importante mérite sa page dédiée, avec bénéfices, objections, preuves et appel à l'action cohérent.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">2. Les pages locales</h3>
          <p className="text-muted-foreground">Un dirigeant qui vise Lyon, Annecy ou Bordeaux n'a pas besoin d'un discours national abstrait. Il a besoin de pages qui ancrent l'offre sur la zone rentable.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">3. Les études de cas et preuves</h3>
          <p className="text-muted-foreground">Avant d'envoyer un devis, vos commerciaux ont besoin de renvoyer vers des exemples comparables : type de chantier, niveau d'accompagnement, résultats visibles, contexte client.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">4. Les contenus de clarification</h3>
          <p className="text-muted-foreground">FAQ, articles diagnostics, pages "comment choisir" ou "combien ça coûte" : ce sont souvent elles qui réduisent les objections et font gagner du temps au suivi commercial.</p>
        </div>
      </div>

      <p className="text-muted-foreground mt-6">
        Si votre base est encore fragile, lisez aussi <Link to="/blog/site-web-btp-erreurs-coutent-demandes-devis-2026" className="text-primary hover:underline">les erreurs de site web qui bloquent les demandes de devis</Link>.
      </p>
    </section>

    <section className="mb-12" id="points-de-conversion">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <PhoneCall size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Où placer les points de conversion
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Trop de sites se contentent d'un formulaire générique tout en bas. C'est insuffisant, parce que tous les visiteurs ne sont pas au même niveau de maturité.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Les bons points de conversion selon la page :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• sur une page métier : une demande de rappel ou d'audit</li>
          <li>• sur une page locale : une prise de contact liée à la zone</li>
          <li>• sur un article diagnostic : une proposition d'audit ou d'échange stratégique</li>
          <li>• sur une étude de cas : un CTA vers le service le plus proche de la problématique</li>
        </ul>
      </div>

      <p className="text-muted-foreground mt-6">
        L'objectif n'est pas de forcer la main. L'objectif est de proposer le bon passage à l'action au bon moment. C'est là qu'un site commence à devenir commercialement utile.
      </p>
    </section>

    <section className="mb-12" id="donnees-commerciales">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Wrench size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les données à remonter pour mieux qualifier
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un site utile commercialement ne se juge pas seulement au nombre de formulaires envoyés. Il doit faire remonter des informations exploitables : quelles pages déclenchent les demandes, quelles zones performent, quels contenus aident le plus à convertir.
      </p>
      <p className="text-muted-foreground mb-4">
        Cela permet ensuite de relier marketing et ventes. Si vos demandes issues d'une page "rénovation énergétique Nantes" signent mieux que celles d'une page générique, vous savez où concentrer vos prochains efforts.
      </p>

      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <p className="font-semibold text-foreground mb-3">À suivre en priorité :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• pages d'entrée qui génèrent les demandes les plus qualifiées</li>
          <li>• taux de conversion par page métier ou par zone</li>
          <li>• contenus consultés avant prise de contact</li>
          <li>• délais de traitement commercial après conversion</li>
          <li>• taux de rendez-vous, devis et signatures selon la source</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="plan-90-jours-site">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Target size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le plan d'action 90 jours
        </h2>
      </div>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 1 à 30</h3>
          <p className="text-muted-foreground">Audit du site, tri des pages utiles/inutiles, clarification de l'offre, revue des parcours de conversion et des zones à plus forte valeur.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 31 à 60</h3>
          <p className="text-muted-foreground">Refonte des pages métiers prioritaires, création des premières pages locales fortes, ajout des preuves, FAQ et CTA mieux contextualisés.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 61 à 90</h3>
          <p className="text-muted-foreground">Connexion aux indicateurs business, optimisation des pages qui attirent les meilleures demandes et création de contenus qui soutiennent les commerciaux.</p>
        </div>
      </div>
    </section>

    <section className="mb-16" id="quand-refondre">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Quand faut-il refondre ou recadrer le site ?</p>
        <p className="text-foreground font-semibold text-lg mb-4">
          Quand votre site génère un peu d'intérêt, mais ne produit pas assez de demandes vraiment exploitables commercialement.
        </p>
        <p className="text-muted-foreground mb-6">
          Si vos équipes passent leur temps à expliquer les bases, à rassurer sur votre positionnement ou à relancer des demandes peu mûres, le site ne fait pas assez son travail en amont. Il faut alors retravailler la structure, la promesse et les points de conversion.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-site-web-commercial">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Un site web peut-il vraiment aider les commerciaux dans une entreprise de rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui, s'il clarifie l'offre, montre les bons cas concrets, traite les objections fréquentes et propose des points de conversion adaptés au niveau de maturité du prospect.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il une refonte complète pour améliorer l'impact commercial du site ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Pas toujours. Certaines entreprises gagnent déjà beaucoup en retravaillant les pages métiers, les CTA, la réassurance et le maillage avec les contenus commerciaux.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quel est le premier indicateur à regarder ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Le plus utile est rarement le trafic seul. Regardez plutôt quelles pages génèrent les demandes les plus qualifiées, puis ce qu'elles deviennent dans le pipeline commercial.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleSiteWebRenovationLevierCommercial2026;
