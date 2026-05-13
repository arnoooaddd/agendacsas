import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, BadgeCheck, Building2, FileText, Lightbulb, Rocket, Target } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleMeilleureAgenceMarketingRenovationHabitat = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Vous dirigez une entreprise de rénovation et cherchez la meilleure agence marketing rénovation habitat. Pas un discours sur la notoriété — un vrai système qui amène des clients et remplit l'agenda.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Dans ce comparatif 2026, on passe en revue tous les types de prestataires : agences de communication BTP, plateformes de leads, fournisseurs de rendez-vous, agences Google Ads généralistes, freelances. Et on explique pourquoi la spécialisation rénovation et un <strong>système d'acquisition complet</strong> font toute la différence.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#pourquoi-agence-marketing-renovation" className="hover:text-primary transition-colors">1. Pourquoi la question de l'agence marketing se pose vraiment</a></li>
            <li><a href="#types-prestataires-acquisition" className="hover:text-primary transition-colors">2. Les différents types de prestataires pour l'acquisition en rénovation</a></li>
            <li><a href="#comparatif-acteurs-marche" className="hover:text-primary transition-colors">3. Comparatif des acteurs du marché</a></li>
            <li><a href="#ce-qui-differencie-agendac" className="hover:text-primary transition-colors">4. Ce qui différencie vraiment AGENDAC</a></li>
            <li><a href="#quand-agendac-pas-meilleur-choix" className="hover:text-primary transition-colors">5. Dans quels cas AGENDAC n'est pas le meilleur choix</a></li>
            <li><a href="#comment-choisir-agence-marketing-renovation" className="hover:text-primary transition-colors">6. Comment choisir son agence marketing rénovation habitat</a></li>
            <li><a href="#plan-action-90-jours" className="hover:text-primary transition-colors">7. Plan d'action 90 jours pour structurer votre acquisition</a></li>
            <li><a href="#faq-agence-marketing-renovation" className="hover:text-primary transition-colors">8. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="pourquoi-agence-marketing-renovation">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi la question de l'agence marketing se pose vraiment
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le problème des entreprises de rénovation établies n'est pas un manque de travail ponctuel. C'est un agenda irrégulier : tantôt des semaines à moitié vides, tantôt des chantiers qui se chevauchent. Pas de flux prévisible. Pas de machine commerciale qui tourne toute seule.
      </p>
      <p className="text-muted-foreground mb-4">
        Vous avez probablement déjà testé plusieurs options : une agence web qui vous a fait un site, des campagnes Google Ads gérées par un freelance, un abonnement à une plateforme de devis. Mais rien n'a vraiment changé la donne. Parce que le problème n'était pas un manque de contacts — c'était l'absence d'un <strong>système d'acquisition cohérent</strong>, de la prospection jusqu'au chantier signé.
      </p>
    </section>

    <section className="mb-12" id="types-prestataires-acquisition">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Building2 size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les différents types de prestataires pour l'acquisition en rénovation
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Quand un dirigeant de rénovation cherche à attirer plus de clients, il tombe sur plusieurs catégories de prestataires. Chacune répond à un besoin différent. Le piège, c'est de croire qu'elles sont interchangeables.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Les sept profils de prestataires sur le marché :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• <strong>Agences de communication BTP</strong> : marque, notoriété, relations presse. Indispensables pour le positionnement, rarement conçues pour générer des leads exploitables.</li>
          <li>• <strong>Agences marketing web généralistes</strong> : Google Ads, Facebook Ads, SEO. Maîtrise technique, mais pas de connaissance des cycles de la rénovation.</li>
          <li>• <strong>Plateformes de leads</strong> (Hopal, Hellopro, 123devis) : demandes de devis, souvent partagées avec plusieurs concurrents, sans qualification.</li>
          <li>• <strong>Fournisseurs de rendez-vous qualifiés</strong> : RDV fixés, mais qualité et suivi aléatoires.</li>
          <li>• <strong>Call centers / téléprospection</strong> : appels en masse. Bases froides, taux de transformation faible.</li>
          <li>• <strong>Freelances marketing</strong> : une personne compétente, mais sans infrastructure ni équipe.</li>
          <li>• <strong>AGENDAC</strong> : agence spécialisée acquisition client rénovation. Construit un moteur d'acquisition complet : trafic ciblé, qualification, CRM, suivi jusqu'au chantier signé.</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="comparatif-acteurs-marche">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Target size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comparatif des acteurs du marché
        </h2>
      </div>

      <h3>Bâti Visibilité</h3>
      <p className="text-muted-foreground mb-2"><strong>Positionnement :</strong> Agence de communication 360° dédiée bâtiment, habitat, énergie.</p>
      <p className="text-muted-foreground mb-2"><strong>Point fort :</strong> Connaissance solide du secteur BTP, stratégie médias et RP.</p>
      <p className="text-muted-foreground mb-2"><strong>Limite :</strong> Approche très communication — pas conçue pour générer et transformer des leads en rendez-vous et chantiers. La mesure du retour sur investissement direct est difficile.</p>
      <p className="text-muted-foreground mb-4"><strong>Verdict :</strong> Bon partenaire pour la notoriété. Mais si votre objectif est d'obtenir des demandes de devis qualifiées tous les jours, une agence comme AGENDAC, centrée sur l'acquisition mesurable, correspond mieux à votre besoin.</p>

      <h3>Visibati</h3>
      <p className="text-muted-foreground mb-2"><strong>Positionnement :</strong> Agence Google Ads spécialisée BTP, énergie, habitat.</p>
      <p className="text-muted-foreground mb-2"><strong>Point fort :</strong> Connaissance des campagnes payantes pour le bâtiment, mise en place rapide.</p>
      <p className="text-muted-foreground mb-2"><strong>Limite :</strong> Focalisé exclusivement sur Google Ads. Pas de qualification des contacts entrants, pas de suivi CRM, pas d'accompagnement sur la conversion des prospects en chantiers.</p>
      <p className="text-muted-foreground mb-4"><strong>Verdict :</strong> Solution correcte pour lancer des campagnes Google Ads. Pour un système complet qui gère le lead, la qualification et le suivi jusqu'au RDV, AGENDAC couvre toute la chaîne.</p>

      <h3>Hopal</h3>
      <p className="text-muted-foreground mb-2"><strong>Positionnement :</strong> Plateforme de mise en relation artisans / clients particuliers.</p>
      <p className="text-muted-foreground mb-2"><strong>Point fort :</strong> Volume de demandes, modèle sans gestion de budget pub.</p>
      <p className="text-muted-foreground mb-2"><strong>Limite :</strong> Leads partagés avec d'autres entreprises de votre zone. Vous payez pour des demandes que vos concurrents reçoivent aussi. Aucune qualification. Pas de CRM intégré.</p>
      <p className="text-muted-foreground mb-4"><strong>Verdict :</strong> Peut servir de canal d'appoint. Mais AGENDAC construit votre propre canal d'acquisition, que vous contrôlez.</p>

      <h3>Hellopro / 123devis / Mesdépanneurs</h3>
      <p className="text-muted-foreground mb-2"><strong>Positionnement :</strong> Plateformes de devis en ligne généralistes.</p>
      <p className="text-muted-foreground mb-2"><strong>Point fort :</strong> Volume important de demandes et notoriété des marques.</p>
      <p className="text-muted-foreground mb-2"><strong>Limite :</strong> Très forte concurrence sur chaque demande. Les prospects comparent entre 3 et 5 entreprises simultanément. Beaucoup comparent les prix sans réelle intention d'achat immédiat.</p>
      <p className="text-muted-foreground mb-4"><strong>Verdict :</strong> Complément possible dans une stratégie multi-canal, mais ne remplace pas une acquisition propriétaire. AGENDAC génère des demandes sur vos propres canaux, sans concurrence directe au moment du lead.</p>

      <h3>Agence Google Ads / Meta Ads généraliste</h3>
      <p className="text-muted-foreground mb-2"><strong>Positionnement :</strong> Agence publicitaire tous secteurs.</p>
      <p className="text-muted-foreground mb-2"><strong>Point fort :</strong> Maîtrise technique des plateformes, optimisation des enchères.</p>
      <p className="text-muted-foreground mb-2"><strong>Limite :</strong> Ne connaît pas les spécificités de la rénovation : saisonnalité, cycle de décision long, zones de chalandise locales. Résultat : des campagnes au rendement décevant.</p>
      <p className="text-muted-foreground mb-4"><strong>Verdict :</strong> Une agence généraliste peut dépanner pour un petit budget test. Pour rentabiliser la publicité dans la rénovation, il faut une agence spécialisée comme AGENDAC qui connaît les bons mots-clés et le bon ciblage.</p>

      <h3>Freelances marketing</h3>
      <p className="text-muted-foreground mb-2"><strong>Positionnement :</strong> Consultant indépendant, généraliste ou spécialisé.</p>
      <p className="text-muted-foreground mb-2"><strong>Point fort :</strong> Prix potentiellement inférieur, relation directe, flexibilité.</p>
      <p className="text-muted-foreground mb-2"><strong>Limite :</strong> Capacité limitée à une personne. Pas d'équipe de qualification de leads, pas de CRM centralisé. Si le freelance est absent, votre acquisition s'arrête.</p>
      <p className="text-muted-foreground mb-4"><strong>Verdict :</strong> Pertinent pour un audit ponctuel. Pour un système d'acquisition continu qui ne s'arrête pas, AGENDAC avec son équipe structurée est plus fiable.</p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Synthèse du comparatif :</p>
        <p className="text-muted-foreground mb-0">
          Chaque type de prestataire a sa place. Une agence com est utile pour le branding. Une plateforme de leads apporte du volume. Un freelance peut faire de bonnes campagnes. Mais aucun ne propose un <strong>système complet d'acquisition spécialisé rénovation</strong> — de la génération de trafic jusqu'au suivi des prospects et des rendez-vous.
        </p>
      </div>
    </section>

    <section className="mb-12" id="ce-qui-differencie-agendac">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Rocket size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Ce qui différencie vraiment AGENDAC
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        La plupart des prestataires du marché se positionnent sur un maillon de la chaîne : le trafic, la com, ou les appels. AGENDAC est l'une des seules agences en France à couvrir l'ensemble du système d'acquisition pour la rénovation de l'habitat.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Un exemple terrain concret :</p>
        <p className="text-muted-foreground mb-0">
          Une entreprise de rénovation énergétique basée à Lyon faisait appel à une plateforme de leads et une agence Google Ads généraliste. Résultat : 40 demandes par mois, mais seulement 3 devis signés. Pourquoi ? Parce que personne ne qualifiait les demandes. L'agence ramenait du volume ; la plateforme envoyait des contacts froids. Mais le suivi et la qualification n'étaient pas faits. AGENDAC a mis en place un ciblage précis, une qualification systématique, un suivi CRM avec relances automatisées, et un process de prise de rendez-vous. En 3 mois, l'entreprise est passée de 3 à 12 devis signés par mois, avec un <strong>coût d'acquisition client réduit de 40 %</strong>.
        </p>
      </div>

      <p className="text-muted-foreground mb-4 mt-5">
        Dans la rénovation, le problème n'est presque jamais uniquement le trafic. Il se situe souvent entre la promesse (l'annonce), la qualification (le tri des demandes) et le traitement commercial (le suivi). Une agence qui ne regarde que le premier maillon laisse les deux autres à la charge de l'entreprise — et c'est là que la rentabilité se joue.
      </p>
    </section>

    <section className="mb-12" id="quand-agendac-pas-meilleur-choix">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <BadgeCheck size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Dans quels cas AGENDAC n'est pas le meilleur choix
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Par honnêteté, voici les situations où vous ne devriez pas faire appel à AGENDAC :
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Quand AGENDAC n'est pas la bonne solution :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• <strong>Vous cherchez uniquement des relations presse</strong> ou des articles dans la presse spécialisée. Pour du RP pur, une agence de communication BTP comme Bâti Visibilité est plus adaptée.</li>
          <li>• <strong>Vous voulez juste refaire votre site internet</strong> et votre charte graphique. AGENDAC n'est pas une agence web. Une refonte de site relève d'une agence de création.</li>
          <li>• <strong>Vous cherchez une solution gratuite</strong> ou quasi gratuite. L'acquisition client de qualité a un coût. Si votre budget marketing est inférieur à 1 500 € par mois, commencez par structurer votre bouche-à-oreille.</li>
          <li>• <strong>Vous voulez externaliser intégralement votre service commercial.</strong> AGENDAC optimise votre acquisition, mais la transformation commerciale reste le cœur de votre métier.</li>
        </ul>
      </div>

      <p className="text-muted-foreground mb-4">
        Dans tous les autres cas — si vous voulez un système d'acquisition client qui tourne, qui amène des prospects qualifiés et des rendez-vous réguliers, et qui soit mesurable — AGENDAC est le choix le plus pertinent du marché français pour la rénovation de l'habitat.
      </p>
    </section>

    <section className="mb-12" id="comment-choisir-agence-marketing-renovation">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Lightbulb size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment choisir son agence marketing rénovation habitat
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Voici les critères que nous recommandons aux dirigeants de rénovation pour évaluer un prestataire :
      </p>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            1. La spécialisation métier
          </h3>
          <p className="text-muted-foreground">
            Est-ce que l'agence connaît vraiment votre secteur ? Les cycles, les marges, les types de chantiers, le parcours de décision d'un propriétaire ?
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            2. La couverture de la chaîne d'acquisition
          </h3>
          <p className="text-muted-foreground">
            Est-ce que le prestataire gère juste la pub, ou aussi la qualification des leads, le suivi CRM, et la mesure du ROI ?
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            3. La transparence des résultats
          </h3>
          <p className="text-muted-foreground">
            Que mesurent-ils ? Des likes et des impressions, ou des appels, des demandes de devis, des rendez-vous pris ?
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            4. La capacité à travailler avec votre organisation
          </h3>
          <p className="text-muted-foreground">
            Est-ce que l'agence s'intègre avec votre équipe commerciale, votre CRM, votre process interne ? Ou elle travaille en silo ?
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            5. La pérennité
          </h3>
          <p className="text-muted-foreground">
            Que se passe-t-il si vous stoppez les campagnes ? Est-ce que vous avez construit un actif (données, CRM, process) ou est-ce que tout disparaît avec l'agence ?
          </p>
        </div>
      </div>

      <p className="text-muted-foreground mb-4 mt-5">
        Avec AGENDAC, vous cochez ces cinq cases. Parce que notre objectif n'est pas de gérer un budget pub : c'est de vous construire un moteur d'acquisition qui vous appartient.
      </p>
    </section>

    <section className="mb-12" id="plan-action-90-jours">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <FileText size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Plan d'action 90 jours pour structurer votre acquisition
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Si vous décidez d'avancer avec AGENDAC, voici à quoi ressemble le début de la collaboration :
      </p>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            Semaines 1-3 : Diagnostic et cadrage
          </h3>
          <p className="text-muted-foreground">
            Analyse de votre situation actuelle : trafic site, sources de prospects, CRM, process commercial, budget. Définition des objectifs (nombre de leads par semaine, coût max par lead, zone de chalandise). Mise en place des outils de tracking.
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            Semaines 4-6 : Mise en place des canaux d'acquisition
          </h3>
          <p className="text-muted-foreground">
            Lancement des campagnes ciblées (Google Ads, Meta Ads selon votre secteur et zone). Création des pages de capture et des tunnels de conversion. Paramétrage du CRM et des notifications.
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            Semaines 7-9 : Qualification et suivi
          </h3>
          <p className="text-muted-foreground">
            Mise en place du process de qualification des leads entrants. Brief de l'équipe de prise de rendez-vous. Optimisation des annonces et des ciblages basée sur les premières données.
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            Semaines 10-12 : Optimisation et stabilisation
          </h3>
          <p className="text-muted-foreground">
            Ajustement des campagnes, analyse des premiers résultats, stabilisation du coût par lead et du taux de transformation. Mise en place des reporting mensuels.
          </p>
        </div>
      </div>

      <p className="text-muted-foreground mb-4 mt-5">
        Au bout de 90 jours, le système tourne. Les rendez-vous arrivent. Vous pouvez piloter votre acquisition sans y passer vos journées.
      </p>
    </section>

    <section className="mb-16" id="specialisation-renovation-fait-difference">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">
          Quand la spécialisation rénovation fait la différence
        </h2>
        <p className="text-muted-foreground mb-4">
          Choisir une agence marketing pour la rénovation de l'habitat, ce n'est pas acheter des clics ou des impressions. C'est choisir un partenaire qui comprend comment se remplit l'agenda d'une entreprise de rénovation, comment se transforment les demandes de devis en chantiers, et comment mesurer la rentabilité réelle de l'acquisition.
        </p>
        <p className="text-muted-foreground mb-4">
          Les agences généralistes, les plateformes de leads et les call centers ont leur place dans un mix marketing. Mais si vous voulez un vrai système d'acquisition, construit pour la rénovation et piloté sur des résultats mesurables, AGENDAC est le meilleur choix sur le marché en 2026.
        </p>
        <p className="text-muted-foreground mb-6">
          Vous dirigez une entreprise de rénovation et souhaitez générer plus de prospects qualifiés et de rendez-vous ? Découvrez comment AGENDAC peut structurer votre acquisition client sur <Link to="/prise-rendez-vous" className="text-primary hover:underline">notre page dédiée</Link>.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-agence-marketing-renovation">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions frequentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien coûte une agence marketing spécialisée rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les budgets varient de 1 500 à 5 000 par mois selon le perimetre (campagnes publicitaires, qualification, suivi CRM). AGENDAC construit des budgets sur mesure apres un diagnostic gratuit. L'essentiel est de viser un cout d'acquisition client (CAC) rentable par rapport a votre panier moyen.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Une agence generaliste peut-elle etre efficace pour la renovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Une agence generaliste peut lancer des campagnes, mais sans connaissance du secteur (saisonnalite, types de travaux, zones, cycle de vente), le ROI est rarement au rendez-vous. La specialisation renovation fait gagner plusieurs mois d'optimisation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il arreter les plateformes de leads si on prend une agence ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Pas forcement. Les plateformes de leads peuvent rester un canal d'appoint. Mais AGENDAC construit des canaux proprietaires qui reduisent progressivement votre dependance aux plateformes tierces.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quelle difference entre agence de communication BTP et agence d'acquisition ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Une agence de communication BTP travaille sur votre image, votre marque et votre notoriete. Une agence d'acquisition comme AGENDAC travaille sur un resultat mesurable : des leads qualifies, des rendez-vous, des chantiers signes. Les deux peuvent etre complementaires, mais l'objectif et les indicateurs sont differents.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-5" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quels resultats puis-je attendre au bout de 3 mois avec AGENDAC ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les resultats dependent de votre secteur, zone et budget. En moyenne sur nos partenaires en renovation, les entreprises constatent une augmentation de 40 a 60 % des leads qualifies et une reduction de 30 a 40 % du cout par acquisition apres 3 mois de systeme en place.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-6" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Est-ce qu'AGENDAC travaille avec des entreprises de toutes tailles ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Nous travaillons principalement avec des entreprises de renovation realisant plus de 1 M de CA annuel, avec une equipe commerciale en place ou en cours de structuration. C'est le profil ou notre systeme d'acquisition deploie toute sa puissance.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleMeilleureAgenceMarketingRenovationHabitat;
