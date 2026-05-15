import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  TrendingUp,
  Target,
  BadgeCheck,
  Mic,
  Headphones,
  Rocket,
} from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticlePodcastsBtpCommunicationNotoriete2026 = () => (
  <div className="prose-custom">
    {/* 1. INTRO BOX */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          La radio a longtemps &eacute;t&eacute; le m&eacute;dia audio de r&eacute;f&eacute;rence pour toucher les professionnels du b&acirc;timent.
          En 2026, les podcasts ont pris le relais avec une souplesse d&apos;&eacute;coute que la diffusion en direct ne permet pas.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Pour une entreprise du BTP qui cherche &agrave; construire sa notori&eacute;t&eacute;, le podcast n&apos;est pas un gadget.
          C&apos;est un format de contenu qui permet de <strong>d&eacute;montrer son expertise</strong>, d&apos;&ecirc;tre &eacute;cout&eacute;
          sur les chantiers et de cr&eacute;er une relation durable avec des prescripteurs et des donneurs d&apos;ordre.
        </p>
      </div>
    </section>

    {/* 2. MOBILE SOMMAIRE */}
    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">
          Sommaire
        </h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li>
              <a href="#pourquoi-podcast-btp" className="hover:text-primary transition-colors">
                1. Pourquoi le podcast s&eacute;duit les professionnels du b&acirc;timent
              </a>
            </li>
            <li>
              <a href="#apport-podcast-communication" className="hover:text-primary transition-colors">
                2. Ce que le podcast apporte &agrave; votre strat&eacute;gie de communication BTP
              </a>
            </li>
            <li>
              <a href="#podcast-vs-radio" className="hover:text-primary transition-colors">
                3. Podcast vs radio : pourquoi le rapport de force a chang&eacute;
              </a>
            </li>
            <li>
              <a href="#lancer-podcast-btp" className="hover:text-primary transition-colors">
                4. Comment lancer un podcast BTP sans y passer trop de temps
              </a>
            </li>
            <li>
              <a href="#accompagnement-podcast" className="hover:text-primary transition-colors">
                5. Quand faut-il se faire accompagner sur un podcast BTP ?
              </a>
            </li>
            <li>
              <a href="#faq-podcasts-btp" className="hover:text-primary transition-colors">
                Questions fr&eacute;quentes
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </section>

    {/* Section 1 : Pourquoi le podcast séduit */}
    <section className="mb-12" id="pourquoi-podcast-btp">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi le podcast s&eacute;duit les professionnels du b&acirc;timent
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Les chiffres parlent d&apos;eux-m&ecirc;mes. Selon M&eacute;diam&eacute;trie, le nombre d&apos;auditeurs de podcasts a d&eacute;pass&eacute;
        celui des auditeurs de radio en France, avec 19,2 millions d&apos;auditeurs r&eacute;guliers. Dans le secteur du BTP, les artisans
        et les dirigeants d&apos;entreprise sont parmi les plus grands consommateurs de contenus audio&nbsp;: 73&nbsp;% d&apos;entre eux
        accordent une place importante &agrave; la radio dans leur quotidien, et un quart &eacute;coutent des programmes audio sur leur lieu de travail.
      </p>

      <p className="text-muted-foreground mb-4">
        Ce qui fait la force du podcast, c&apos;est sa flexibilit&eacute;. Contrairement &agrave; la radio diffus&eacute;e &agrave; heures fixes,
        un podcast s&apos;&eacute;coute quand on veut, o&ugrave; on veut. Sur le trajet du chantier, pendant une pause d&eacute;jeuner, ou en
        conduisant. Cette libert&eacute; d&apos;&eacute;coute correspond parfaitement aux journ&eacute;es morcel&eacute;es des professionnels
        du b&acirc;timent, qui bougent constamment entre le bureau, les chantiers et les rendez-vous clients.
      </p>

      {/* Variant A : soft callout */}
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le constat terrain&nbsp;:</p>
        <p className="text-muted-foreground mb-0">
          Les entrepreneurs du BTP qui &eacute;coutent d&eacute;j&agrave; des podcasts techniques sur leur m&eacute;tier sont les premiers
          &agrave; comprendre la puissance du format. Ils savent qu&apos;un &eacute;pisode de 20 minutes sur un sujet concret
          vaut mieux qu&apos;une heure de radio passive.
        </p>
      </div>
    </section>

    {/* Section 2 : Apport du podcast */}
    <section className="mb-12" id="apport-podcast-communication">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Mic size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Ce que le podcast apporte &agrave; votre strat&eacute;gie de communication BTP
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un podcast bien con&ccedil;u ne se contente pas de diffuser de l&apos;information. Il positionne votre entreprise comme
        une r&eacute;f&eacute;rence dans son domaine. Dans un secteur o&ugrave; la confiance et la cr&eacute;dibilit&eacute; sont
        des pr&eacute;requis avant d&apos;obtenir un rendez-vous ou de signer un devis, le podcast est un levier de
        r&eacute;assurance puissant.
      </p>

      <p className="text-muted-foreground mb-4">
        Voici ce qu&apos;il change concr&egrave;tement&nbsp;:
      </p>

      {/* Variant B : checklist card */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">
          Ce que le podcast apporte &agrave; votre communication BTP&nbsp;:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />
            Il donne une voix &agrave; votre entreprise, bien plus identifiable qu&apos;un article de blog ou qu&apos;une publication
            sur les r&eacute;seaux sociaux
          </li>
          <li className="flex items-start gap-2">
            <BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />
            Il permet d&apos;aborder des sujets techniques en profondeur, ce que les formats courts ne permettent pas
          </li>
          <li className="flex items-start gap-2">
            <BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />
            Il cr&eacute;e une relation d&apos;&eacute;coute r&eacute;guli&egrave;re avec vos auditeurs, qui deviennent des ambassadeurs
            de votre marque
          </li>
          <li className="flex items-start gap-2">
            <BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" />
            Il peut &ecirc;tre r&eacute;utilis&eacute; en contenu &eacute;crit, en posts LinkedIn ou en extraits vid&eacute;o
          </li>
        </ul>
      </div>
    </section>

    {/* Section 3 : Podcast vs radio */}
    <section className="mb-12" id="podcast-vs-radio">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Headphones size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Podcast vs radio&nbsp;: pourquoi le rapport de force a chang&eacute;
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        La radio conserve un avantage&nbsp;: l&apos;audience massive et imm&eacute;diate. Mais pour une entreprise du BTP qui
        souhaite construire une strat&eacute;gie de marque dans la dur&eacute;e, le podcast offre plusieurs avantages d&eacute;cisifs.
      </p>

      <p className="text-muted-foreground mb-4">
        Un &eacute;pisode de podcast reste disponible ind&eacute;finiment. Il continue de g&eacute;n&eacute;rer des &eacute;coutes des mois,
        voire des ann&eacute;es apr&egrave;s sa publication. C&apos;est un actif qui travaille pour vous sans co&ucirc;t suppl&eacute;mentaire.
        &Agrave; l&apos;inverse, un spot radio est diffus&eacute; une fois et dispara&icirc;t. Le podcast s&apos;int&egrave;gre aussi dans
        votre strat&eacute;gie de contenu globale&nbsp;: chaque &eacute;pisode peut &ecirc;tre retranscrit en article de blog, cit&eacute;
        dans vos newsletters, partag&eacute; sur LinkedIn, ou utilis&eacute; comme argument commercial lors d&apos;un rendez-vous.
      </p>

      <p className="text-muted-foreground mb-4">
        Enfin, le podcast permet de toucher une audience qualifi&eacute;e. Les auditeurs qui choisissent d&apos;&eacute;couter un
        &eacute;pisode sur un sujet technique li&eacute; &agrave; votre m&eacute;tier sont d&eacute;j&agrave; en recherche d&apos;expertise.
        Ce ne sont pas des auditeurs passifs&nbsp;: ce sont des prospects potentiels ou des prescripteurs qui vous d&eacute;couvrent
        dans un contexte de confiance.
      </p>

      {/* Variant C : muted bullet box */}
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <p className="font-semibold text-foreground mb-3">
          Les plateformes &agrave; conna&icirc;tre pour diffuser votre podcast&nbsp;:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li>&bull; Spotify &amp; Apple Podcasts&nbsp;: les deux leaders de l&apos;&eacute;coute audio en France</li>
          <li>&bull; YouTube&nbsp;: de plus en plus utilis&eacute; pour les podcasts vid&eacute;o</li>
          <li>&bull; LinkedIn&nbsp;: id&eacute;al pour partager des extraits courts de vos &eacute;pisodes</li>
          <li>&bull; Votre site web&nbsp;: pour h&eacute;berger et r&eacute;f&eacute;rencer vos &eacute;pisodes</li>
        </ul>
      </div>
    </section>

    {/* Section 4 : Comment lancer un podcast BTP */}
    <section className="mb-12" id="lancer-podcast-btp">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Target size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment lancer un podcast BTP sans y passer trop de temps
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        L&apos;obstacle principal que les dirigeants du BTP nous remontent, c&apos;est le temps. Entre la gestion des chantiers,
        les rendez-vous clients et le suivi administratif, produire un podcast peut sembler inaccessible. Pourtant, avec
        la bonne m&eacute;thode, lancer un podcast ne n&eacute;cessite pas d&apos;&eacute;quipe d&eacute;di&eacute;e ni de mat&eacute;riel
        professionnel co&ucirc;teux.
      </p>

      <p className="text-muted-foreground mb-4">
        Voici une approche minimaliste qui a fait ses preuves&nbsp;:
      </p>

      {/* Variant D : numbered cards */}
      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            1. &Eacute;quipement minimal
          </h3>
          <p className="text-muted-foreground">
            Enregistrez avec un simple micro-cravate et votre t&eacute;l&eacute;phone. La qualit&eacute; d&apos;&eacute;coute
            est largement suffisante pour un contenu de fond.
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            2. Dur&eacute;e ma&icirc;tris&eacute;e
          </h3>
          <p className="text-muted-foreground">
            Visez des &eacute;pisodes de 15 &agrave; 25 minutes, pas plus. La r&eacute;gularit&eacute; compte plus que la dur&eacute;e.
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            3. Fr&eacute;quence tenable
          </h3>
          <p className="text-muted-foreground">
            Planifiez un &eacute;pisode par mois pour commencer. L&apos;essentiel est de tenir dans la dur&eacute;e.
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            4. Sujets ma&icirc;tris&eacute;s
          </h3>
          <p className="text-muted-foreground">
            Choisissez des sujets que vous ma&icirc;trisez d&eacute;j&agrave;&nbsp;: un chantier marquant, une tendance que vous
            observez, une innovation que vous avez adopt&eacute;e.
          </p>
        </div>
      </div>

      <p className="text-muted-foreground mb-4 mt-4">
        La r&egrave;gle d&apos;or&nbsp;: ne cherchez pas la perfection. Un podcast authentique, m&ecirc;me imparfait techniquement,
        sera toujours plus efficace qu&apos;un podcast surproduit mais sans contenu solide. Les auditeurs du BTP viennent
        chercher de l&apos;expertise et des retours terrains, pas un show radio aseptis&eacute;.
      </p>
    </section>

    {/* Section 5 : Quand se faire accompagner */}
    <section className="mb-12" id="accompagnement-podcast">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Rocket size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Quand faut-il se faire accompagner sur un podcast BTP&nbsp;?
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Si la prise de parole orale ne fait pas partie de vos r&eacute;flexes, ou si vous souhaitez industrialiser la
        production de contenu audio, l&apos;accompagnement par une agence sp&eacute;cialis&eacute;e dans la communication BTP
        peut faire la diff&eacute;rence. Une agence comme Agendac peut vous aider &agrave; structurer votre ligne &eacute;ditoriale,
        &agrave; pr&eacute;parer vos interviews, &agrave; assurer le montage et la diffusion sur les bonnes plateformes.
      </p>

      <p className="text-muted-foreground mb-4">
        L&apos;essentiel n&apos;est pas de produire beaucoup d&apos;&eacute;pisodes. C&apos;est de produire les bons &eacute;pisodes, sur les
        bons sujets, et de les faire &eacute;couter par les bonnes personnes. Les prescripteurs du b&acirc;timent, les architectes,
        les ma&icirc;tres d&apos;ouvrage et les donneurs d&apos;ordre qui cherchent des partenaires fiables sont exactement le public
        que le podcast permet d&apos;atteindre avec autorit&eacute;.
      </p>

      {/* Variant A : soft callout */}
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">&Agrave; retenir&nbsp;:</p>
        <p className="text-muted-foreground mb-0">
          En 2026, alors que la concurrence s&apos;intensifie sur tous les canaux d&apos;acquisition, le podcast est l&apos;un des
          derniers formats o&ugrave; il est encore possible de <strong>se diff&eacute;rencier par la qualit&eacute; de son expertise</strong>
          plut&ocirc;t que par la taille de son budget publicitaire.
        </p>
      </div>
    </section>

    {/* FINAL CTA SECTION */}
    <section className="mb-16" id="cta-podcasts-btp">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">
          Quand le podcast et la strat&eacute;gie digitale font la diff&eacute;rence
        </h2>
        <p className="text-muted-foreground mb-4">
          Le podcast n&apos;a pas vocation &agrave; remplacer la radio dans le BTP. Il ouvre un canal de communication
          diff&eacute;rent, plus qualitatif et plus durable pour les entreprises qui veulent construire leur marque.
        </p>
        <p className="text-muted-foreground mb-4">
          Les entreprises du b&acirc;timent qui sauront prendre la parole avec r&eacute;gularit&eacute; et sinc&eacute;rit&eacute; sur
          les sujets qui comptent pour leurs clients et leurs prescripteurs construiront un avantage concurrentiel que
          les publicit&eacute;s seules ne peuvent pas offrir.
        </p>
        <p className="text-muted-foreground mb-6">
          Vous souhaitez structurer une strat&eacute;gie de communication digitale compl&egrave;te autour de votre expertise&nbsp;?
          D&eacute;couvrez notre service{" "}
          <Link to="/gestion-communication" className="text-primary hover:underline">
            de gestion de la communication digitale
          </Link>{" "}
          pour les entreprises du b&acirc;timent et de la r&eacute;novation.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ */}
    <section className="mb-12" id="faq-podcasts-btp">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Questions fr&eacute;quentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien co&ucirc;te la production d&apos;un podcast pour une entreprise du b&acirc;timent&nbsp;?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Avec un micro-cravate &agrave; moins de 50 &euro; et un h&eacute;bergement gratuit sur Spotify ou Apple Podcasts,
            le co&ucirc;t mat&eacute;riel est quasi nul. Si vous passez par une agence pour la production et la diffusion,
            comptez entre 500 et 2&nbsp;000 &euro; par mois selon la fr&eacute;quence et le niveau d&apos;accompagnement souhait&eacute;.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quelle dur&eacute;e id&eacute;ale pour un podcast destin&eacute; aux professionnels du BTP&nbsp;?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les &eacute;pisodes de 15 &agrave; 25 minutes sont les plus &eacute;cout&eacute;s par les professionnels du b&acirc;timent.
            C&apos;est le temps d&apos;un trajet chantier ou d&apos;une pause d&eacute;jeuner. Au-del&agrave; de 30 minutes,
            le taux d&apos;abandon augmente significativement.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il un podcast vid&eacute;o ou seulement audio pour le BTP&nbsp;?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Le format audio suffit pour d&eacute;marrer et reste le plus &eacute;cout&eacute;. Mais diffuser les &eacute;pisodes en
            vid&eacute;o sur YouTube et LinkedIn offre un levier de visibilit&eacute; suppl&eacute;mentaire. Les podcasts vid&eacute;o
            captent mieux l&apos;attention sur les r&eacute;seaux sociaux et permettent de montrer des visages, des chantiers
            ou des d&eacute;monstrations techniques.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Comment mesurer le retour sur investissement d&apos;un podcast dans le BTP&nbsp;?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les indicateurs cl&eacute;s sont le nombre d&apos;&eacute;coutes par &eacute;pisode, le taux de compl&eacute;tion,
            le nombre d&apos;abonn&eacute;s, le trafic r&eacute;f&eacute;renc&eacute; vers votre site et les contacts directs
            re&ccedil;us via votre podcast. &Agrave; plus long terme, le podcast renforce votre cr&eacute;dibilit&eacute; et votre
            notori&eacute;t&eacute; aupr&egrave;s des prescripteurs, ce qui se traduit par plus de rendez-vous et de devis sign&eacute;s.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticlePodcastsBtpCommunicationNotoriete2026;
