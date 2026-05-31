import { Link } from "react-router-dom";
import { MapPin, Search, Star, Shield, TrendingUp, BarChart3, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleTendancesRechercheLocaleGoogle2026Btp = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Google met à jour ses algorithmes de recherche locale en permanence. Pour une entreprise du BTP, ces évolutions sont une opportunité — à condition de savoir les exploiter.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Entre <strong>l'expérience Search Generative (SGE)</strong>, le renforcement des avis, les nouvelles vérifications téléphoniques et un Local Pack de plus en plus concurrentiel, les règles du jeu changent. Voici comment rester visible et transformer la recherche locale en flux de demandes qualifiées.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#pourquoi-local" className="hover:text-primary transition-colors">1. Pourquoi la recherche locale est devenue le canal d'acquisition principal</a></li>
            <li><a href="#sge" className="hover:text-primary transition-colors">2. SGE : comment l'expérience générative change la donne</a></li>
            <li><a href="#notoriete" className="hover:text-primary transition-colors">3. La notoriété de marque devient un facteur de classement local</a></li>
            <li><a href="#avis-perdus" className="hover:text-primary transition-colors">4. Récupérer les avis Google perdus</a></li>
            <li><a href="#verification" className="hover:text-primary transition-colors">5. La vérification téléphonique renforce la crédibilité</a></li>
            <li><a href="#veille" className="hover:text-primary transition-colors">6. Structurer une veille des tendances locales</a></li>
            <li><a href="#cta-local" className="hover:text-primary transition-colors">7. Passer à l'action sur votre visibilité locale</a></li>
            <li><a href="#faq-local" className="hover:text-primary transition-colors">8. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="pourquoi-local">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <MapPin size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi la recherche locale est devenue le premier canal d'acquisition dans le BTP
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Quand un propriétaire cherche un couvreur, un menuisier ou un spécialiste de l'isolation, il tape « couvreur près de chez moi » ou « entreprise rénovation toiture Nantes ». Google lui renvoie trois résultats locaux, une carte, puis une liste de sites. C'est ce qu'on appelle le Local Pack — et c'est devenu le point d'entrée principal pour les clients qui recherchent des entreprises du bâtiment.
      </p>
      <p className="text-muted-foreground mb-4">
        Dans le BTP, le cycle d'achat est long. Un prospect ne clique pas au hasard. Il compare, il regarde les avis, il visite les portfolios en ligne. Google le sait, et ses mises à jour récentes renforcent cette logique : montrer les entreprises les plus crédibles, les plus visibles et les mieux notées.
      </p>
      <p className="text-muted-foreground mb-4">
        Une <strong>stratégie marketing BTP</strong> rentable passe donc d'abord par une présence locale irréprochable. Sans elle, aucun volume de publicités ne compensera le manque de confiance.
      </p>
    </section>

    <section className="mb-12" id="sge">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Search size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Tendance n°1 : l'expérience de recherche générative (SGE) change la donne
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Google déploie progressivement sa Search Generative Experience (SGE). Concrètement, un internaute peut taper une requête très précise — par exemple : « entreprise de rénovation avec au moins 50 avis, 4 étoiles de moyenne et un portfolio de plus de 50 chantiers similaires au mien » — et Google génère une réponse directement dans la page de résultats.
      </p>

      <p className="text-muted-foreground mb-4">Pour une entreprise du bâtiment, cette évolution est double :</p>
      <ul className="space-y-2 text-muted-foreground mb-4">
        <li><strong>Plus de précision dans les critères</strong> — vos prospects peuvent filtrer avant même d'avoir cliqué. Si votre fiche Google est incomplète, vous êtes exclu avant la première visite.</li>
        <li><strong>Plus de valeur pour les profils riches en contenu</strong> — les entreprises qui publient régulièrement des chantiers, des photos avant/après, et obtiennent des avis récents sortent du lot.</li>
      </ul>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Comment en tirer parti concrètement :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><ChevronRight size={16} className="text-primary mt-0.5 shrink-0" /> Mettez à jour votre fiche Google Business Profile chaque mois avec des photos récentes de chantier</li>
          <li className="flex items-start gap-2"><ChevronRight size={16} className="text-primary mt-0.5 shrink-0" /> Encouragez les avis clients après chaque chantier terminé — pas en fin d'année, mais dans la foulée</li>
          <li className="flex items-start gap-2"><ChevronRight size={16} className="text-primary mt-0.5 shrink-0" /> Ajoutez des services précis et des descriptions détaillées : « Couverture » ne suffit plus, préférez « Réparation toiture après tempête, zingage, installation gouttières sur mesure »</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="notoriete">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Star size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Tendance n°2 : la notoriété de marque devient un facteur de classement local
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Avec l'essor de la SGE, Google pondère davantage la notoriété et l'autorité d'une entreprise. Ce n'est plus seulement une question de mots-clés. C'est une question de présence globale : site web, avis, réseaux sociaux, articles de blog, mentions presse, citations locales.
      </p>

      <p className="text-muted-foreground mb-4">Pour une société de rénovation, l'enjeu est clair :</p>
      <ul className="space-y-2 text-muted-foreground mb-4">
        <li>Publier régulièrement du contenu de qualité sur son site (avant/réalisation, fiches conseils, retours d'expérience)</li>
        <li>Avoir une présence active sur les plateformes où vos prospects vous cherchent — LinkedIn pour le BtoB, Instagram pour la valorisation des chantiers, Google pour la recherche directe</li>
        <li>Être cité sur des annuaires locaux et des sites partenaires</li>
      </ul>

      <p className="text-muted-foreground mb-4">
        La plupart des entreprises de rénovation négligent ce travail de fond. C'est pourtant lui qui construit la confiance suffisante pour qu'un prospect vous contacte sans avoir besoin de voir trois autres devis avant.
      </p>
    </section>

    <section className="mb-12" id="avis-perdus">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <BarChart3 size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Tendance n°3 : la récupération des avis perdus est désormais possible
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Google a introduit un formulaire dédié permettant aux entreprises de demander la réintégration d'avis supprimés. Si vous avez perdu des avis à cause d'une action anti-spam mal ciblée, ou pendant la période Covid où les avis se sont envolés, vous pouvez désormais contacter le support et demander leur rétablissement.
      </p>

      <p className="text-muted-foreground mb-4">
        Pourquoi c'est important ? Parce que le nombre et la fraîcheur des avis est un signal local majeur. Perdre 10 à 15 avis peut faire chuter votre note de 4,5 à 4,2 — et donc votre position dans le Local Pack.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Plan d'action pour sécuriser vos avis :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><ChevronRight size={16} className="text-primary mt-0.5 shrink-0" /> Auditez régulièrement votre compteur d'avis sur Google Business Profile</li>
          <li className="flex items-start gap-2"><ChevronRight size={16} className="text-primary mt-0.5 shrink-0" /> Si vous remarquez une baisse, utilisez le formulaire prévu par Google pour signaler le problème</li>
          <li className="flex items-start gap-2"><ChevronRight size={16} className="text-primary mt-0.5 shrink-0" /> Gardez un rythme régulier de collecte d'avis pour que Google voie une activité récente</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="verification">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Shield size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Tendance n°4 : la vérification téléphonique renforce la crédibilité locale
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Google a renforcé sa procédure de vérification des entreprises. Désormais, un code de vérification peut être envoyé par SMS au numéro de téléphone associé à votre fiche. Cette mesure vise à éliminer les fausses entreprises et les profils frauduleux.
      </p>

      <p className="text-muted-foreground mb-4">
        Pour les entreprises légitimes, c'est une bonne nouvelle : moins de concurrence déloyale. Mais cela implique aussi une vigilance :
      </p>
      <ul className="space-y-2 text-muted-foreground mb-4">
        <li>Votre numéro de téléphone doit être à jour sur Google Business Profile</li>
        <li>Répondez rapidement aux sollicitations de vérification</li>
        <li>Si vous changez de numéro, mettez-le à jour avant d'attendre le prochain cycle de vérification</li>
      </ul>

      <p className="text-muted-foreground mb-4">
        Un détail qui peut bloquer votre visibilité pendant plusieurs jours si vous ne répondez pas à temps.
      </p>
    </section>

    <section className="mb-12" id="veille">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment structurer une veille des tendances locales
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Plutôt que de réagir à chaque mise à jour Google dans l'urgence, mettez en place une routine simple :
      </p>
      <ul className="space-y-2 text-muted-foreground mb-4">
        <li>Une fois par mois, consultez les annonces officielles de Google pour les recherches locales</li>
        <li>Suivez 2 à 3 sources fiables (Search Engine Land, Google Search Central Blog)</li>
        <li>Adaptez ensuite votre fiche, votre site et votre stratégie de contenu en fonction des changements identifiés</li>
      </ul>

      <p className="text-muted-foreground mb-4">
        Dans la pratique, peu d'entreprises du bâtiment le font. C'est un avantage concurrentiel massif pour celles qui prennent le temps de le faire.
      </p>
    </section>

    <section className="mb-16" id="cta-local">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">
          Passer à l'action sur votre visibilité locale
        </h2>
        <p className="text-muted-foreground mb-4">
          Suivre les évolutions de Google, optimiser votre fiche, produire du contenu, gérer les avis, structurer votre pipeline d'acquisition… cela représente un investissement en temps réel. Pour une entreprise de rénovation qui réalise déjà 1 à 5 M€ de chiffre d'affaires, le choix se pose souvent entre recruter un profil marketing interne ou travailler avec une agence spécialisée.
        </p>
        <p className="text-muted-foreground mb-4">
          La question n'est pas de savoir si vous devez investir dans votre visibilité locale. La question est de savoir comment le faire efficacement sans perdre six mois à tester des approches qui ne marchent pas.
        </p>
        <p className="text-muted-foreground mb-6">
          Découvrez notre offre <Link to="/gestion-seo" className="text-primary hover:underline">gestion SEO et visibilité locale</Link> conçue pour les entreprises de rénovation et du BTP.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-local">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Qu'est-ce que le Local Pack Google ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Le Local Pack est le bloc de trois résultats locaux qui apparaît en haut des recherches avec intention locale (ex. « couvreur Lyon », « entreprise isolation Bordeaux »). Être présent dans ce bloc est le premier levier de <strong>génération de leads BTP</strong> pour une entreprise du bâtiment.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien de temps faut-il pour améliorer sa recherche locale ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les premiers résultats peuvent apparaître en 2 à 4 semaines si vous optimisez correctement votre fiche Google Business Profile et collectez des avis. Les résultats durables sur la recherche locale se construisent sur 3 à 6 mois de travail régulier.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il un site web si on a déjà une fiche Google Business Profile ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui. La fiche Google est la vitrine, le site web est la preuve. Les prospects qui cliquent sur votre fiche veulent voir vos réalisations, lire votre histoire, comprendre votre méthode. Sans site web, vous perdez une partie importante de la crédibilité que vous avez gagnée via la recherche locale.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Les avis Google influencent-ils vraiment le référencement local ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui, les avis sont l'un des principaux signaux de confiance pour l'algorithme local de Google. Une fiche avec plus de 30 avis récents et une note supérieure à 4,2 a statistiquement plus de chances d'apparaître dans le Local Pack qu'une fiche avec peu d'avis, même si les deux sont techniquement optimisées.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleTendancesRechercheLocaleGoogle2026Btp;
