import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Users,
  Target,
  BadgeCheck,
  Briefcase,
  Settings,
  Rocket,
} from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleClubProBtpFidelisationPrescription2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Un club PRO n’est pas un simple groupe de contacts. Pour une entreprise du BTP, c’est un levier pour rester présente dans l’esprit des prescripteurs, des partenaires et des apporteurs d’affaires avant même qu’un projet ne démarre.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          En 2026, la croissance ne vient pas seulement de la publicité ou du référencement. Elle vient aussi de la capacité à créer un réseau animé, utile et mesurable, capable de générer <strong>des recommandations régulières et mieux qualifiées</strong>.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#role-club-pro-btp" className="hover:text-primary transition-colors">1. À quoi sert un club PRO dans le BTP ?</a></li>
            <li><a href="#pourquoi-reseau-structure" className="hover:text-primary transition-colors">2. Pourquoi structurer son réseau change la performance commerciale</a></li>
            <li><a href="#qui-inviter-club-pro" className="hover:text-primary transition-colors">3. Qui inviter dans un club PRO ?</a></li>
            <li><a href="#animer-club-pro" className="hover:text-primary transition-colors">4. Comment animer un club PRO sans tomber dans l’événementiel vide</a></li>
            <li><a href="#mesurer-retour-club-pro" className="hover:text-primary transition-colors">5. Comment mesurer le retour commercial d’un club PRO</a></li>
            <li><a href="#cta-club-pro" className="hover:text-primary transition-colors">6. Quand la communication doit soutenir le réseau</a></li>
            <li><a href="#faq-club-pro-btp" className="hover:text-primary transition-colors">Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="role-club-pro-btp">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Users size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          À quoi sert un club PRO dans le BTP ?
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un club PRO est un cercle de professionnels que votre entreprise réunit autour de sujets utiles : tendances marché, retours chantier, nouveautés techniques, réglementation, expérience client ou développement commercial. L’objectif n’est pas de vendre à chaque rencontre, mais de devenir l’acteur que l’on consulte, recommande et rappelle quand une opportunité apparaît.
      </p>
      <p className="text-muted-foreground mb-4">
        Dans la rénovation, l’habitat et le BTP, beaucoup de projets circulent par recommandation : architectes, maîtres d’œuvre, bureaux d’études, agents immobiliers, syndics, promoteurs, fournisseurs ou artisans complémentaires. Un club PRO donne un cadre à ces relations au lieu de les laisser dépendre uniquement du hasard ou de quelques appels ponctuels.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le bon réflexe :</p>
        <p className="text-muted-foreground mb-0">
          Dans le BTP, le réseau ne devient un actif commercial que s’il est animé, documenté et suivi. Sinon, il reste une liste de contacts que personne ne relance au bon moment.
        </p>
      </div>
    </section>

    <section className="mb-12" id="pourquoi-reseau-structure">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Target size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi structurer son réseau change la performance commerciale
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Les entreprises du bâtiment cherchent souvent à générer plus de demandes via Google, les campagnes payantes ou les réseaux sociaux. Ces leviers restent utiles, mais ils ne remplacent pas la confiance déjà installée par un prescripteur. Une recommandation bien placée peut raccourcir le cycle de décision, améliorer la qualité du rendez-vous et réduire la pression sur le prix.
      </p>
      <p className="text-muted-foreground mb-4">
        Exemple concret : une entreprise de rénovation énergétique qui anime un club trimestriel avec des diagnostiqueurs, agences immobilières et maîtres d’œuvre peut être identifiée plus tôt sur les projets de rénovation globale. Elle n’attend plus seulement la demande entrante ; elle devient visible au moment où le besoin se forme.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Un club PRO bien structuré aide à :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />renforcer la notoriété locale auprès des bons relais ;</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />créer des occasions de contact sans démarchage agressif ;</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />faire circuler vos références chantier et vos preuves de sérieux ;</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />alimenter votre <Link to="/gestion-communication" className="text-primary hover:underline">communication digitale</Link> avec des contenus plus crédibles.</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="qui-inviter-club-pro">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Briefcase size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Qui inviter dans un club PRO ?
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        La qualité du club dépend moins du nombre d’invités que de leur proximité avec vos vrais projets. Un club trop large devient une newsletter en présentiel. Un club trop fermé manque d’énergie. Le bon équilibre consiste à réunir des acteurs qui peuvent apprendre quelque chose, se recommander mutuellement et croiser des opportunités cohérentes.
      </p>
      <p className="text-muted-foreground mb-4">
        Pour une entreprise de menuiserie extérieure, par exemple, les bons profils peuvent être des architectes, des maîtres d’œuvre, des courtiers en travaux, des agents immobiliers spécialisés dans les biens anciens, des artisans façade ou isolation, et quelques partenaires industriels. Le club devient alors un point de rencontre entre expertise technique et projets réels.
      </p>

      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <p className="font-semibold text-foreground mb-3">Les bons critères de sélection :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• proximité avec vos chantiers cibles ;</li>
          <li>• capacité à recommander ou à influencer une décision ;</li>
          <li>• crédibilité métier auprès de vos prospects ;</li>
          <li>• complémentarité avec votre offre, sans concurrence frontale ;</li>
          <li>• envie réelle d’échanger, pas seulement de distribuer des cartes.</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="animer-club-pro">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Settings size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment animer un club PRO sans tomber dans l’événementiel vide
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le piège classique consiste à organiser un petit-déjeuner sympathique, puis à ne rien faire ensuite. Un club PRO performant a besoin d’un rythme simple, d’un thème utile et d’un suivi commercial propre. Ce n’est pas l’événement qui crée la valeur, c’est la continuité entre les rencontres.
      </p>
      <p className="text-muted-foreground mb-4">
        Chaque rencontre doit produire un actif : une synthèse envoyée aux membres, une vidéo courte, un article, une liste d’actions ou une opportunité à suivre dans le CRM. C’est cette discipline qui transforme la convivialité en acquisition clients BTP mesurable.
      </p>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">1. Choisir un thème concret</h3>
          <p className="text-muted-foreground">Parlez d’un problème terrain : délais, financement, rénovation énergétique, coordination des lots, réception chantier, SAV ou rassurance client.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">2. Prévoir une suite commerciale</h3>
          <p className="text-muted-foreground">Après chaque rencontre, notez les signaux faibles : projet à venir, partenaire à revoir, besoin client identifié, contact à mettre en relation.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">3. Réutiliser le contenu</h3>
          <p className="text-muted-foreground">Un échange de 60 minutes peut devenir un post LinkedIn, une page de réassurance, une vidéo courte ou un email à vos prescripteurs.</p>
        </div>
      </div>
    </section>

    <section className="mb-12" id="mesurer-retour-club-pro">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <BadgeCheck size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment mesurer le retour commercial d’un club PRO
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un club PRO ne se pilote pas uniquement avec le nombre de participants. Le bon indicateur n’est pas la salle pleine, mais la qualité des conversations et des opportunités qui en sortent. Pour éviter l’effet vitrine, il faut relier le club à votre système commercial.
      </p>
      <p className="text-muted-foreground mb-4">
        La méthode la plus simple consiste à créer une source dédiée dans votre CRM : Club PRO, prescription, partenaire, événement, recommandation. Vous pouvez ensuite suivre le nombre d’opportunités créées, les rendez-vous obtenus, les devis émis, les signatures et le chiffre d’affaires attribuable au réseau.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">L’insight Agendac :</p>
        <p className="text-muted-foreground mb-0">
          Un club PRO n’a pas besoin de générer cinquante demandes pour être rentable. S’il ouvre quelques dossiers mieux qualifiés, avec un meilleur taux de signature et moins de concurrence sur le prix, son impact commercial peut dépasser celui d’une campagne mal ciblée.
        </p>
      </div>
    </section>

    <section className="mb-16" id="cta-club-pro">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <Rocket size={20} className="text-accent" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-0">
            Quand la communication doit soutenir le réseau
          </h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Créer un club PRO est utile si votre entreprise sait expliquer clairement ce qu’elle apporte, à qui elle s’adresse et pourquoi ses partenaires peuvent la recommander sans risque. Sans positionnement, sans contenus et sans suivi, le réseau s’essouffle vite.
        </p>
        <p className="text-muted-foreground mb-6">
          Agendac aide les entreprises de rénovation et du BTP à structurer une <Link to="/gestion-communication" className="text-primary hover:underline">communication plus cohérente avec leurs objectifs commerciaux</Link>, pour transformer la visibilité, les contenus et les relations partenaires en opportunités réellement suivies.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-club-pro-btp">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Un club PRO est-il réservé aux grandes entreprises du BTP ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Non. Une PME structurée peut créer un club PRO efficace si elle cible les bons prescripteurs et apporte une vraie valeur métier. Le sujet n’est pas la taille de l’entreprise, mais sa capacité à animer régulièrement un réseau utile et cohérent avec ses chantiers cibles.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien de fois par an faut-il réunir un club PRO ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Un rythme trimestriel suffit souvent pour commencer. L’important est de garder un contact entre les rencontres : email de synthèse, invitation ciblée, partage de contenu ou relance individuelle lorsqu’une opportunité apparaît.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Comment éviter qu’un club PRO devienne seulement un événement de networking ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Il faut définir un objectif commercial, choisir des thèmes utiles et tracer les suites dans le CRM. Sans suivi des contacts, des recommandations et des projets évoqués, le club reste sympathique mais difficile à relier à la croissance.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleClubProBtpFidelisationPrescription2026;
