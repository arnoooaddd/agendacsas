import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Target,
  Building2,
  TrendingUp,
  BadgeCheck,
  AlertTriangle,
  Rocket,
} from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleInboundMarketingBtpCyclesLongs = () => (
  <div className="prose-custom">
    {/* 1. INTRO BOX */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Dans le BTP, un cycle de vente peut durer des semaines, voire des mois.
          Entre la premi&egrave;re recherche d&apos;information et la signature finale, les d&eacute;cideurs,
          prescripteurs et ma&icirc;tres d&apos;ouvrage passent par une longue phase d&apos;auto-information.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Une strat&eacute;gie marketing BTP qui ignore cette r&eacute;alit&eacute; laisse passer la majorit&eacute; des prospects
          avant m&ecirc;me qu&apos;ils ne soient m&ucirc;rs pour un &eacute;change commercial. L&apos;inbound marketing r&eacute;pond
          pr&eacute;cis&eacute;ment &agrave; ce probl&egrave;me&nbsp;: <strong>attirer les bons prospects avec du contenu utile</strong>,
          les accompagner pendant tout leur parcours, et se positionner comme le partenaire de confiance au moment de la d&eacute;cision.
        </p>
      </div>
    </section>

    {/* 2. MOBILE SOMMAIRE */}
    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li>
              <a href="#cycles-longs-btp" className="hover:text-primary transition-colors">
                1. Pourquoi les cycles longs du BTP imposent une approche diff&eacute;rente
              </a>
            </li>
            <li>
              <a href="#trois-piliers-inbound" className="hover:text-primary transition-colors">
                2. Les trois piliers d&apos;une strat&eacute;gie inbound marketing BTP qui convertit
              </a>
            </li>
            <li>
              <a href="#approche-classique-vs-inbound" className="hover:text-primary transition-colors">
                3. Ce qui change entre une approche classique et l&apos;inbound marketing
              </a>
            </li>
            <li>
              <a href="#structurer-strategie" className="hover:text-primary transition-colors">
                4. Comment structurer concr&egrave;tement votre strat&eacute;gie marketing BTP en 2026
              </a>
            </li>
            <li>
              <a href="#erreurs-inbound" className="hover:text-primary transition-colors">
                5. Les erreurs fr&eacute;quentes qui tuent les r&eacute;sultats
              </a>
            </li>
            <li>
              <a href="#quand-inbound-levier-croissance" className="hover:text-primary transition-colors">
                6. Quand l&apos;inbound marketing BTP devient un vrai levier de croissance
              </a>
            </li>
            <li>
              <a href="#faq-inbound-marketing-btp" className="hover:text-primary transition-colors">
                Questions fr&eacute;quentes
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </section>

    {/* Section 1 : Les cycles longs du BTP */}
    <section className="mb-12" id="cycles-longs-btp">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Building2 size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi les cycles longs du BTP imposent une approche diff&eacute;rente
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le b&acirc;timent cumule plusieurs sp&eacute;cificit&eacute;s qui rendent le d&eacute;marchage classique peu efficace
        et le contenu utile indispensable.
      </p>

      <p className="text-muted-foreground mb-4">
        Premi&egrave;re particularit&eacute;&nbsp;: la d&eacute;cision implique rarement une seule personne. Un projet de construction
        ou de r&eacute;novation mobilise des ma&icirc;tres d&apos;ouvrage, des architectes, des bureaux d&apos;&eacute;tudes,
        des prescripteurs, parfois des exploitants ou des syndics. Chacun a ses propres crit&egrave;res, son propre calendrier
        et ses propres sources d&apos;information. Un seul email ou un seul argument ne peut pas convaincre tout ce monde
        en m&ecirc;me temps.
      </p>

      <p className="text-muted-foreground mb-4">
        Deuxi&egrave;me particularit&eacute;&nbsp;: la phase de recherche pr&eacute;c&egrave;de largement la phase d&apos;achat.
        Avant m&ecirc;me de lancer un appel d&apos;offres, les professionnels du BTP cherchent des r&eacute;ponses sur Google,
        consultent des &eacute;tudes de cas, comparent des solutions techniques. C&apos;est pendant cette phase silencieuse que
        se joue une grande partie de la d&eacute;cision finale.
      </p>

      <p className="text-muted-foreground mb-4">
        Troisi&egrave;me particularit&eacute;&nbsp;: la confiance est un facteur d&eacute;cisif. Quand les montants engag&eacute;s
        sont &eacute;lev&eacute;s et les cons&eacute;quences op&eacute;rationnelles importantes, personne ne choisit un prestataire
        au hasard. Les entreprises qui ont pris le temps de montrer leur expertise, de partager des cas concrets et de r&eacute;pondre
        aux questions techniques partent avec une longueur d&apos;avance.
      </p>

      {/* Variant A : soft callout */}
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le bon r&eacute;flexe&nbsp;:</p>
        <p className="text-muted-foreground mb-0">
          Dans le BTP, le probl&egrave;me n&apos;est presque jamais uniquement le trafic. Il se situe souvent entre la promesse,
          la <strong>qualification et le traitement commercial</strong>. L&apos;inbound marketing ne sert &agrave; rien si les
          contacts g&eacute;n&eacute;r&eacute;s ne sont pas suivis et accompagn&eacute;s jusqu&apos;&agrave; la signature.
        </p>
      </div>
    </section>

    {/* Section 2 : Trois piliers */}
    <section className="mb-12" id="trois-piliers-inbound">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Target size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les trois piliers d&apos;une strat&eacute;gie inbound marketing BTP qui convertit
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Mettre en place une strat&eacute;gie d&apos;acquisition clients BTP avec l&apos;inbound marketing ne signifie pas
        simplement &eacute;crire quelques articles et esp&eacute;rer que les leads arrivent. Cela repose sur trois piliers
        concrets, adapt&eacute;s aux r&eacute;alit&eacute;s du terrain.
      </p>

      {/* Variant D : numbered cards */}
      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            1. Des contenus qui r&eacute;pondent aux vraies questions de chaque acteur
          </h3>
          <p className="text-muted-foreground">
            Un architecte ne cherche pas les m&ecirc;mes informations qu&apos;un ma&icirc;tre d&apos;ouvrage ou qu&apos;un
            exploitant. L&apos;un veut des donn&eacute;es techniques, l&apos;autre des garanties de co&ucirc;t et de d&eacute;lai,
            le troisi&egrave;me des &eacute;l&eacute;ments sur la durabilit&eacute;. Produire des contenus diff&eacute;rents
            pour chaque typologie d&apos;interlocuteur permet d&apos;&ecirc;tre visible au bon moment pour chaque acteur du projet.
            Livres blancs, fiches techniques, &eacute;tudes de cas chantier, comparatifs, guides r&eacute;glementaires&nbsp;:
            chaque format r&eacute;pond &agrave; un besoin sp&eacute;cifique.
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            2. Un tunnel de qualification qui capture l&apos;int&eacute;r&ecirc;t sans brusquer
          </h3>
          <p className="text-muted-foreground">
            Un visiteur qui lit un article n&apos;est pas encore pr&ecirc;t &agrave; acheter. Proposer une ressource
            t&eacute;l&eacute;chargeable (guide, checklist, simulateur) en &eacute;change d&apos;un contact permet de capturer
            l&apos;int&eacute;r&ecirc;t &agrave; un stade pr&eacute;coce, sans forcer la vente. Le lead est alors qualifi&eacute;
            progressivement&nbsp;: d&apos;abord par le contenu qu&apos;il consomme, ensuite par son comportement sur le site,
            enfin par un &eacute;change commercial pr&eacute;par&eacute;.
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            3. Un suivi nurturing qui maintient le lien pendant les mois d&apos;arbitrage
          </h3>
          <p className="text-muted-foreground">
            Entre le premier clic et la signature, il peut s&apos;&eacute;couler trois &agrave; six mois dans le BTP. Pendant
            cette p&eacute;riode, vos concurrents ne restent pas inactifs. Le nurturing consiste &agrave; envoyer des contenus
            adapt&eacute;s &agrave; chaque &eacute;tape du parcours&nbsp;: une &eacute;tude de cas &agrave; un prospect en phase
            de comparaison, un guide technique &agrave; un prescripteur en analyse, une newsletter m&eacute;tier &agrave; un
            d&eacute;cideur qui n&apos;a pas encore formalis&eacute; son projet. L&apos;objectif n&apos;est pas de relancer
            m&eacute;caniquement, mais d&apos;accompagner intelligemment.
          </p>
        </div>
      </div>
    </section>

    {/* Section 3 : Approche classique vs inbound */}
    <section className="mb-12" id="approche-classique-vs-inbound">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Ce qui change entre une approche classique et l&apos;inbound marketing
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        <strong>Approche classique&nbsp;:</strong> vous achetez une base de contacts, envoyez un emailing ou passez un appel
        froid. Vous interrompez des prospects qui ne vous ont pas sollicit&eacute;s. Le taux de transformation est faible,
        le co&ucirc;t d&apos;acquisition client est &eacute;lev&eacute;, et l&apos;impact sur votre image est discutable.
      </p>

      <p className="text-muted-foreground mb-4">
        <strong>Approche inbound&nbsp;:</strong> un ma&icirc;tre d&apos;ouvrage cherche sur Google &laquo;&nbsp;comment choisir
        un isolant pour toiture terrasse&nbsp;&raquo;. Il tombe sur votre article, le lit, le trouve utile. Il t&eacute;l&eacute;charge
        votre guide technique. Une semaine plus tard, il re&ccedil;oit un email avec une &eacute;tude de cas similaire &agrave; son
        projet. Un mois apr&egrave;s, il vous contacte directement. Quand il appelle, il conna&icirc;t d&eacute;j&agrave; votre
        expertise et votre positionnement. La conversation commerciale commence sur des bases solides.
      </p>

      <p className="text-muted-foreground mb-4">
        La diff&eacute;rence ne porte pas seulement sur le canal, mais sur la s&eacute;quence&nbsp;: dans un cas, vous forcez
        la relation. Dans l&apos;autre, vous la construisez.
      </p>

      {/* Variant B : checklist card */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">
          Les r&eacute;sultats concrets d&apos;une approche inbound bien men&eacute;e&nbsp;:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />
            Des prospects qui vous contactent d&eacute;j&agrave; convaincus de votre expertise
          </li>
          <li className="flex items-start gap-2">
            <BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />
            Un cycle de vente raccourci car la phase d&apos;information a d&eacute;j&agrave; &eacute;t&eacute; effectu&eacute;e
          </li>
          <li className="flex items-start gap-2">
            <BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />
            Des leads mieux qualifi&eacute;s, donc un meilleur ratio devis sign&eacute;s
          </li>
          <li className="flex items-start gap-2">
            <BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />
            Un co&ucirc;t d&apos;acquisition client plus ma&icirc;tris&eacute; dans la dur&eacute;e
          </li>
        </ul>
      </div>
    </section>

    {/* Section 4 : Comment structurer */}
    <section className="mb-12" id="structurer-strategie">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Rocket size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment structurer concr&egrave;tement votre strat&eacute;gie marketing BTP en 2026
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Passer d&apos;une approche r&eacute;active &agrave; une strat&eacute;gie inbound structur&eacute;e demande de la
        m&eacute;thode. Voici les quatre &eacute;tapes cl&eacute;s &agrave; poser.
      </p>

      {/* Variant B : checklist card */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">
          Les quatre &eacute;tapes pour structurer votre acquisition clients BTP&nbsp;:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />
            <strong>D&eacute;finir vos personas</strong>&nbsp;: architectes, prescripteurs, ma&icirc;tres d&apos;ouvrage,
            installateurs, acheteurs publics&hellip; Chaque cible a ses besoins, ses objections et ses canaux d&apos;information.
            Une strat&eacute;gie sans segmentation fine produit des contenus g&eacute;n&eacute;riques que personne ne lit.
          </li>
          <li className="flex items-start gap-2">
            <BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />
            <strong>Cartographier le parcours d&apos;achat</strong>&nbsp;: quelles questions se pose chaque acteur &agrave; chaque
            &eacute;tape du projet&nbsp;? Quels sont les moments cl&eacute;s o&ugrave; une information bien plac&eacute;e peut
            faire basculer la d&eacute;cision&nbsp;?
          </li>
          <li className="flex items-start gap-2">
            <BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />
            <strong>Produire les bons contenus aux bons formats</strong>&nbsp;: articles de blog pour la d&eacute;couverte,
            livres blancs pour l&apos;approfondissement, &eacute;tudes de cas pour la r&eacute;assurance, fiches techniques
            pour la d&eacute;cision. Chaque format a un r&ocirc;le dans le tunnel.
          </li>
          <li className="flex items-start gap-2">
            <BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />
            <strong>Relier contenu, CRM et suivi commercial</strong>&nbsp;: le contenu attire, le CRM qualifie, le commercial
            conclut. Sans int&eacute;gration entre ces trois briques, les leads se perdent. L&apos;inbound marketing n&apos;est
            pas un canal isol&eacute;, c&apos;est un syst&egrave;me.
          </li>
        </ul>
      </div>
    </section>

    {/* Section 5 : Erreurs fréquentes */}
    <section className="mb-12" id="erreurs-inbound">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les erreurs fr&eacute;quentes qui tuent les r&eacute;sultats de l&apos;inbound marketing BTP
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        M&ecirc;me avec une bonne intention, certaines pratiques compromettent l&apos;efficacit&eacute; de la d&eacute;marche.
      </p>

      <p className="text-muted-foreground mb-4">
        <strong>Produire du contenu sans strat&eacute;gie de distribution.</strong> Un excellent article que personne ne voit
        n&apos;existe pas. Sans SEO, sans relance email, sans partage sur les bons r&eacute;seaux, le contenu reste invisible.
        L&apos;inbound marketing ne fonctionne que si les contenus sont trouv&eacute;s.
      </p>

      <p className="text-muted-foreground mb-4">
        <strong>Cr&eacute;er des contenus trop g&eacute;n&eacute;riques.</strong> Un article qui parle de &laquo;&nbsp;l&apos;importance
        du marketing digital&nbsp;&raquo; sans ancrage m&eacute;tier n&apos;int&eacute;resse personne dans le BTP. Les professionnels
        du b&acirc;timent veulent des r&eacute;ponses concr&egrave;tes &agrave; leurs probl&egrave;mes concrets&nbsp;:
        r&eacute;glementation, co&ucirc;t, performance, d&eacute;lai, retour d&apos;exp&eacute;rience.
      </p>

      <p className="text-muted-foreground mb-4">
        <strong>N&eacute;gliger la qualification des leads.</strong> Recevoir 200 t&eacute;l&eacute;chargements d&apos;un livre
        blanc ne sert &agrave; rien si personne ne suit ces contacts. Sans CRM, sans scoring, sans transmission organis&eacute;e
        au commercial, les leads deviennent un gisement inexploit&eacute;. C&apos;est l&agrave; que se joue la diff&eacute;rence
        entre une strat&eacute;gie qui rapporte et une op&eacute;ration de communication.
      </p>

      <p className="text-muted-foreground mb-4">
        <strong>Abandonner trop t&ocirc;t.</strong> Dans le BTP, les cycles sont longs. Les premiers r&eacute;sultats d&apos;une
        strat&eacute;gie inbound peuvent mettre trois &agrave; six mois &agrave; se concr&eacute;tiser. Beaucoup d&apos;entreprises
        arr&ecirc;tent apr&egrave;s deux mois, justement au moment o&ugrave; le syst&egrave;me commence &agrave; porter ses fruits.
      </p>

      {/* Variant C : muted bullet box */}
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <p className="font-semibold text-foreground mb-3">
          Les signes que votre strat&eacute;gie n&eacute;cessite un ajustement&nbsp;:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li>&bull; Vous publiez mais personne ne lit ni ne commente</li>
          <li>&bull; Vous recevez des leads mais ils ne sont jamais transform&eacute;s</li>
          <li>&bull; Vous n&apos;avez pas de CRM ou ne l&apos;utilisez pas pour le suivi marketing</li>
          <li>&bull; Vos commerciaux se plaignent de la qualit&eacute; des contacts re&ccedil;us</li>
          <li>&bull; Vous ne mesurez pas l&apos;impact de vos contenus sur votre chiffre d&apos;affaires</li>
        </ul>
      </div>
    </section>

    {/* Section 6 : Quand leviers de croissance */}
    <section className="mb-12" id="quand-inbound-levier-croissance">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Quand l&apos;inbound marketing BTP devient un vrai levier de croissance
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Une strat&eacute;gie de g&eacute;n&eacute;ration de leads BTP bas&eacute;e sur l&apos;inbound marketing prend tout
        son sens quand les conditions suivantes sont r&eacute;unies&nbsp;:
      </p>

      {/* Variant B : checklist card */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">
          L&apos;inbound marketing est fait pour vous si&nbsp;:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />
            Vous avez un cycle de vente de plus de 4 semaines
          </li>
          <li className="flex items-start gap-2">
            <BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />
            Plusieurs interlocuteurs participent &agrave; la d&eacute;cision d&apos;achat
          </li>
          <li className="flex items-start gap-2">
            <BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />
            Vos prospects passent par une phase de recherche documentaire avant de vous contacter
          </li>
          <li className="flex items-start gap-2">
            <BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />
            Vous avez des cas clients ou des r&eacute;f&eacute;rences chantier &agrave; valoriser
          </li>
          <li className="flex items-start gap-2">
            <BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />
            Vous cherchez &agrave; r&eacute;duire votre d&eacute;pendance au d&eacute;marchage sortant
          </li>
        </ul>
      </div>

      <p className="text-muted-foreground mb-4 mt-4">
        Dans ce contexte, l&apos;inbound marketing n&apos;est pas une option&nbsp;: c&apos;est la m&eacute;thode la plus adapt&eacute;e
        pour structurer l&apos;acquisition clients BTP de mani&egrave;re pr&eacute;visible et rentable.
      </p>
    </section>

    {/* FINAL CTA SECTION */}
    <section className="mb-16" id="cta-inbound-btp">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">
          Quand l&apos;inbound marketing et la strat&eacute;gie de contenu font la diff&eacute;rence
        </h2>
        <p className="text-muted-foreground mb-4">
          Mettre en place une strat&eacute;gie inbound marketing dans le BTP ne s&apos;improvise pas. Entre la production de
          contenu technique, le SEO, le nurturing et l&apos;int&eacute;gration CRM, les entreprises qui vont le plus loin sont
          celles qui structurent leur d&eacute;marche avec une vision d&apos;ensemble.
        </p>
        <p className="text-muted-foreground mb-4">
          Les entreprises du b&acirc;timent qui construisent leur acquisition sur un socle de contenu utile et de suivi
          commercial bien organis&eacute; r&eacute;duisent leur d&eacute;pendance aux canaux payants et am&eacute;liorent la
          rentabilit&eacute; de chaque prospect trait&eacute;.
        </p>
        <p className="text-muted-foreground mb-6">
          Vous souhaitez structurer une strat&eacute;gie de contenu et d&apos;acquisition adapt&eacute;e aux cycles longs du
          b&acirc;timent&nbsp;? D&eacute;couvrez notre service{" "}
          <Link to="/gestion-communication" className="text-primary hover:underline">
            de gestion de la communication digitale
          </Link>{" "}
          pour les entreprises du b&acirc;timent et de la r&eacute;novation.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ */}
    <section className="mb-12" id="faq-inbound-marketing-btp">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Questions fr&eacute;quentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien de temps faut-il pour voir les premiers r&eacute;sultats d&apos;une strat&eacute;gie inbound marketing BTP&nbsp;?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Dans le BTP, les cycles &eacute;tant longs, il faut compter entre 3 et 6 mois pour observer des leads qualifi&eacute;s
            r&eacute;guliers. Les premiers signes (trafic, t&eacute;l&eacute;chargements, abonn&eacute;s) apparaissent souvent
            d&egrave;s le premier mois si la production de contenu est r&eacute;guli&egrave;re et le r&eacute;f&eacute;rencement
            naturel bien calibr&eacute;.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            L&apos;inbound marketing peut-il fonctionner sans CRM dans le BTP&nbsp;?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Techniquement oui, mais les r&eacute;sultats seront tr&egrave;s limit&eacute;s. Sans CRM, il est quasiment impossible
            de suivre le parcours d&apos;un prospect sur plusieurs mois, de qualifier son niveau de maturit&eacute; ou de
            transmettre des leads exploitables au commercial. L&apos;inbound marketing et le CRM sont indissociables dans le BTP.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quelle est la diff&eacute;rence entre inbound marketing et marketing automation dans le BTP&nbsp;?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            L&apos;inbound marketing est la strat&eacute;gie&nbsp;: attirer avec du contenu, convertir avec des formulaires,
            fid&eacute;liser avec du nurturing. Le marketing automation est l&apos;outil qui ex&eacute;cute cette strat&eacute;gie
            de mani&egrave;re automatis&eacute;e&nbsp;: envoi d&apos;emails cibl&eacute;s, scoring des leads, alertes
            commerciales. Les deux fonctionnent ensemble.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il internaliser ou externaliser sa strat&eacute;gie inbound marketing BTP&nbsp;?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Tout d&eacute;pend de vos ressources internes. Produire du contenu technique de qualit&eacute;, le distribuer,
            suivre les leads et ajuster la strat&eacute;gie demande du temps et des comp&eacute;tences sp&eacute;cifiques.
            Les entreprises du BTP qui internalisent sans avoir les talents d&eacute;di&eacute;s abandonnent souvent au bout
            de quelques mois. L&apos;accompagnement par une agence sp&eacute;cialis&eacute;e permet d&apos;avancer plus vite
            et d&apos;&eacute;viter les erreurs co&ucirc;teuses.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleInboundMarketingBtpCyclesLongs;
