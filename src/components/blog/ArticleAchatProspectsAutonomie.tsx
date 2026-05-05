import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle, ArrowRight, BadgeCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sections = [
  { id: "pourquoi-achat-leads-piege", label: "Pourquoi l'achat de prospects devient un piège" },
  { id: "cout-cache-dependance", label: "Le coût caché de la dépendance aux plateformes" },
  { id: "alternatives-systeme-acquisition", label: "Ce que font les entreprises qui reprennent le contrôle" },
  { id: "plan-action-90-jours", label: "Plan d'action sur 90 jours" },
  { id: "quand-faire-accompagner", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-achat-prospects", label: "FAQ" },
];

const ArticleAchatProspectsAutonomie = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-0">
          <strong>Acheter des prospects</strong> peut sembler rassurant quand il faut remplir vite le carnet de rendez-vous. En pratique, cela crée souvent une dépendance coûteuse, une pression sur les marges et un pipeline fragile. Voici comment une entreprise de rénovation peut reprendre la main en 2026.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="rounded-xl border border-border bg-muted/50 p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-sm text-muted-foreground">
            {sections.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="hover:text-primary transition-colors">
                  {index + 1}. {section.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12">
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Beaucoup de dirigeants du bâtiment achètent des contacts parce qu'ils veulent un flux immédiat de demandes. Le raisonnement paraît simple : payer une plateforme, recevoir des coordonnées, envoyer un commercial.
      </p>
      <p className="text-muted-foreground mb-4">
        Le problème, c'est que ce mécanisme ne construit ni votre visibilité, ni votre crédibilité, ni votre maîtrise commerciale. Il loue un volume de contacts sans corriger ce qui fait vraiment la différence : la promesse, la qualification et le traitement des opportunités.
      </p>
      <p className="text-foreground font-medium">
        <strong>Dans le BTP, le problème n'est presque jamais uniquement le trafic.</strong> Il se situe souvent entre la promesse, la qualification et le traitement commercial.
      </p>
      <p className="text-muted-foreground mt-4">
        Un <strong>système d'acquisition client en rénovation</strong> rentable est un dispositif qui relie visibilité, preuve, qualification, prise de rendez-vous et suivi CRM pour transformer des recherches locales en chantiers signés.
      </p>
    </section>

    <section className="mb-12" id="pourquoi-achat-leads-piege">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Pourquoi l'achat de prospects devient un piège pour beaucoup d'entreprises de rénovation
      </h2>
      <p className="text-muted-foreground mb-4">
        Quand vous achetez des prospects, vous n'achetez pas une préférence de marque. Vous achetez un accès temporaire à un particulier qui a souvent rempli plusieurs formulaires ou répondu à plusieurs publicités en parallèle.
      </p>
      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-3"><AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" /><span>Le contact est rarement exclusif, donc la comparaison par le prix commence avant même le premier appel.</span></li>
        <li className="flex items-start gap-3"><AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" /><span>La qualité est très hétérogène : budget flou, projet mal défini, zone hors cible, délai irréaliste.</span></li>
        <li className="flex items-start gap-3"><AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" /><span>Votre équipe commerciale perd du temps sur des dossiers peu mûrs alors que le coût d'acquisition, lui, est déjà engagé.</span></li>
      </ul>
      <p className="text-muted-foreground mb-4">
        Prenons un exemple concret : une entreprise d'isolation dépense chaque mois sur des leads achetés pour alimenter 3 commerciaux. Sur le papier, le volume semble suffisant. En réalité, une partie des demandes ne décroche jamais, une autre compare 4 devis en même temps, et les meilleurs chantiers partent à l'entreprise qui répond le plus vite ou rassure le mieux.
      </p>
      <p className="text-muted-foreground">
        Résultat : vous payez pour un flux qui vous occupe, mais pas forcément pour un flux qui vous fait grandir.
      </p>
    </section>

    <section className="mb-12" id="cout-cache-dependance">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Le coût caché de la dépendance aux plateformes d'achat de leads
      </h2>
      <p className="text-muted-foreground mb-4">
        Le vrai sujet n'est pas seulement le prix du lead. C'est la dépendance qu'il installe dans votre acquisition clients rénovation.
      </p>
      <div className="rounded-2xl border border-border bg-muted/40 p-6 mb-6">
        <h3 className="text-xl font-bold text-foreground font-display mb-4">Le cadre simple à garder en tête</h3>
        <ul className="space-y-3 text-muted-foreground">
          <li><strong>Coût direct :</strong> ce que vous payez à la plateforme.</li>
          <li><strong>Coût commercial :</strong> le temps des équipes à rappeler, relancer, qualifier et deviser.</li>
          <li><strong>Coût stratégique :</strong> l'absence d'actif marketing que vous construisez pour demain.</li>
        </ul>
      </div>
      <p className="text-muted-foreground mb-4">
        Si vous arrêtez d'acheter, le robinet se ferme. C'est tout l'inverse d'un dispositif fondé sur votre <strong>référencement local</strong>, votre site, vos campagnes et votre suivi commercial.
      </p>
      <p className="text-muted-foreground mb-4">
        Dans une société de menuiserie ou de pompe à chaleur déjà structurée, cette dépendance devient vite une limite de croissance : vous augmentez les volumes, mais pas votre maîtrise du pipeline.
      </p>
      <ul className="space-y-3 text-muted-foreground">
        <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>Vous ne savez pas toujours quels segments, zones ou offres performent réellement.</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>Vous n'améliorez pas vos pages, votre preuve sociale ou vos campagnes propriétaires.</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>Vous restez vulnérable à une hausse de prix, une baisse de qualité ou un changement de règle externe.</span></li>
      </ul>
    </section>

    <section className="mb-12" id="alternatives-systeme-acquisition">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Ce que font les entreprises qui veulent arrêter d'acheter des prospects
      </h2>
      <p className="text-muted-foreground mb-4">
        Les entreprises qui reprennent le contrôle ne cherchent pas seulement plus de volume. Elles structurent un système capable de générer des demandes plus cohérentes avec leurs objectifs de marge et de capacité de pose.
      </p>
      <div className="grid gap-4 md:grid-cols-2 mb-6 not-prose">
        <div className="rounded-2xl border border-border bg-background p-5">
          <h3 className="text-lg font-bold text-foreground mb-3">1. Clarifier la promesse</h3>
          <p className="text-sm text-muted-foreground mb-0">Pages métiers, zones desservies, cas clients, avis, garanties, photos chantier : tout doit aider le prospect à se projeter et à se sentir en confiance.</p>
        </div>
        <div className="rounded-2xl border border-border bg-background p-5">
          <h3 className="text-lg font-bold text-foreground mb-3">2. Générer ses propres demandes</h3>
          <p className="text-sm text-muted-foreground mb-0">SEO local, Google Ads, Meta Ads ou contenus de réassurance servent à créer un flux que vous contrôlez au lieu d'acheter un contact déjà sur-sollicité.</p>
        </div>
        <div className="rounded-2xl border border-border bg-background p-5">
          <h3 className="text-lg font-bold text-foreground mb-3">3. Qualifier vite</h3>
          <p className="text-sm text-muted-foreground mb-0">Script d'appel, critères de tri, relances automatiques et prise de rendez-vous rapide évitent d'envoyer les commerciaux sur des faux positifs.</p>
        </div>
        <div className="rounded-2xl border border-border bg-background p-5">
          <h3 className="text-lg font-bold text-foreground mb-3">4. Mesurer la rentabilité</h3>
          <p className="text-sm text-muted-foreground mb-0">Suivi CRM, taux de no-show, devis envoyés, chantiers signés et marge nette donnent enfin une lecture business de l'acquisition.</p>
        </div>
      </div>
      <p className="text-muted-foreground">
        Cette logique est plus exigeante au départ, mais elle vous rapproche d'une vraie <strong>machine à leads rénovation</strong> au lieu d'un approvisionnement fragile en contacts froids.
      </p>
    </section>

    <section className="mb-12" id="plan-action-90-jours">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Plan d'action sur 90 jours pour sortir progressivement de l'achat de leads
      </h2>
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 mb-6">
        <p className="text-foreground font-semibold mb-2">L'objectif n'est pas de couper brutalement un canal qui vous nourrit encore.</p>
        <p className="text-muted-foreground mb-0">L'objectif est de réduire la dépendance en construisant un système propriétaire parallèle.</p>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-foreground font-display mb-3">Jours 1 à 30 : auditer et trier</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Identifier quels leads achetés deviennent réellement des rendez-vous puis des chantiers.</li>
            <li>Analyser les zones, offres et typologies de projets les plus rentables.</li>
            <li>Vérifier si votre site et votre fiche Google inspirent assez confiance pour convertir une demande directe.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground font-display mb-3">Jours 31 à 60 : construire les fondations</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Créer ou corriger les pages qui portent votre promesse principale.</li>
            <li>Mettre en place un tunnel simple : formulaire, rappel rapide, qualification et suivi CRM.</li>
            <li>Lancer un canal propriétaire prioritaire selon votre contexte : SEO local ou publicité ciblée.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground font-display mb-3">Jours 61 à 90 : arbitrer avec des chiffres</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Comparer coût par rendez-vous utile, coût par devis envoyé et coût par chantier signé.</li>
            <li>Réduire progressivement les achats les moins rentables.</li>
            <li>Réinjecter le budget économisé dans les canaux que vous maîtrisez et qui construisent un actif durable.</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="mb-12" id="quand-faire-accompagner">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Quand faut-il se faire accompagner ?
      </h2>
      <p className="text-muted-foreground mb-4">
        Si vous avez déjà des équipes, des commerciaux et un budget d'acquisition, le sujet dépasse souvent la simple génération de contacts. Il faut relier trafic, qualification, relance et pilotage du pipeline.
      </p>
      <p className="text-muted-foreground mb-4">
        C'est généralement le bon moment pour se faire accompagner quand vous constatez au moins l'un de ces signaux :
      </p>
      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-3"><BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>vous achetez encore beaucoup de leads mais vous ne savez pas lesquels sont vraiment rentables ;</span></li>
        <li className="flex items-start gap-3"><BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>vos commerciaux se plaignent d'un trop grand nombre de demandes faibles ou mal cadrées ;</span></li>
        <li className="flex items-start gap-3"><BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>vous avez déjà du trafic ou des campagnes, mais pas de système solide entre premier clic et signature.</span></li>
      </ul>
      <div className="rounded-2xl border border-border bg-muted/40 p-6">
        <p className="text-foreground font-medium mb-0">
          Si vous travaillez déjà votre visibilité, notre page <Link to="/gestion-communication" className="text-primary hover:underline">gestion de la communication</Link> montre comment Agendac relie campagnes, suivi et performance commerciale sans vous enfermer dans la dépendance aux plateformes d'achat de contacts.
        </p>
      </div>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Ce qu'il faut retenir
      </h2>
      <p className="text-muted-foreground mb-4">
        Acheter des prospects peut dépanner. Mais pour une entreprise de rénovation déjà structurée, ce n'est pas une stratégie de croissance stable. Vous avez besoin d'un système qui construit votre propre demande, améliore la qualité des opportunités et protège vos marges.
      </p>
      <p className="text-muted-foreground">
        Plus vous attendez, plus vous laissez votre acquisition dépendre d'un tiers. Plus vous structurez tôt votre dispositif, plus vous gagnez en autonomie commerciale.
      </p>
    </section>

    <section className="mb-6" id="faq-achat-prospects">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        FAQ : achat de prospects et acquisition en rénovation
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-2xl border border-border px-6">
          <AccordionTrigger className="text-left text-base font-semibold text-foreground">
            Pourquoi l'achat de leads rénovation finit-il souvent par coûter plus cher que prévu ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Parce qu'il faut additionner le prix du lead, le temps de qualification, les devis non rentables et la pression sur les marges quand plusieurs entreprises contactent le même particulier.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-2xl border border-border px-6">
          <AccordionTrigger className="text-left text-base font-semibold text-foreground">
            Peut-on arrêter complètement d'acheter des prospects du jour au lendemain ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Rarement. Le plus sûr est de construire en parallèle un canal propriétaire, de mesurer la qualité réelle de chaque source, puis de réduire progressivement les achats les moins performants.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-2xl border border-border px-6">
          <AccordionTrigger className="text-left text-base font-semibold text-foreground">
            Quel est le premier levier à travailler pour trouver des clients en rénovation sans plateforme ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Il faut commencer par clarifier la promesse commerciale et la réassurance sur votre site, puis choisir un canal de génération maîtrisable comme le SEO local ou une publicité bien pilotée, reliée à une vraie qualification commerciale.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    <section className="mt-10">
      <Link to="/blog/lead-renovation-demande-vraiment-qualifiee" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
        Lire aussi : comment reconnaître une demande vraiment qualifiée <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  </div>
);

export default ArticleAchatProspectsAutonomie;
