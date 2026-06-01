import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileText,
  Clock,
  TrendingUp,
  Scale,
  Calendar,
  HelpCircle,
} from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleContenuEvergreenActualiteMarketingBtp2026 = () => (
  <div className="prose-custom">
    {/* 1. INTRO BOX */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Vous publiez du contenu pour votre entreprise de r&eacute;novation ou de construction, mais vous ne savez pas quel dosage adopter entre des articles &laquo;&nbsp;intemporels&nbsp;&raquo; et des sujets d&rsquo;actualit&eacute;&nbsp;?
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Cette question est au c&oelig;ur d&rsquo;une <strong>strat&eacute;gie marketing BTP</strong> efficace. Produire sans &eacute;quilibre, c&rsquo;est risquer de passer &agrave; c&ocirc;t&eacute; des deux objectifs essentiels&nbsp;: g&eacute;n&eacute;rer du trafic durable et capter l&rsquo;attention imm&eacute;diate de vos prospects.
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
              <a href="#contenu-evergreen" className="hover:text-primary transition-colors">
                1. Qu&rsquo;est-ce que le contenu evergreen et pourquoi en avez-vous besoin&nbsp;?
              </a>
            </li>
            <li>
              <a href="#contenu-actualite" className="hover:text-primary transition-colors">
                2. Le contenu d&rsquo;actualit&eacute;&nbsp;: l&rsquo;acc&eacute;l&eacute;rateur de trafic imm&eacute;diat
              </a>
            </li>
            <li>
              <a href="#desequilibre-coute" className="hover:text-primary transition-colors">
                3. Pourquoi un d&eacute;s&eacute;quilibre vous co&ucirc;te des opportunit&eacute;s
              </a>
            </li>
            <li>
              <a href="#regle-80-20" className="hover:text-primary transition-colors">
                4. La r&egrave;gle des 80/20 pour votre strat&eacute;gie de contenu
              </a>
            </li>
            <li>
              <a href="#calendrier-editorial" className="hover:text-primary transition-colors">
                5. Comment organiser votre calendrier &eacute;ditorial BTP
              </a>
            </li>
            <li>
              <a href="#quand-se-faire-accompagner" className="hover:text-primary transition-colors">
                6. Quand faut-il se faire accompagner&nbsp;?
              </a>
            </li>
            <li>
              <a href="#faq-evergreen-actualite" className="hover:text-primary transition-colors">
                Questions fr&eacute;quentes
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </section>

    {/* Section 1 : Qu'est-ce que le contenu evergreen */}
    <section className="mb-12" id="contenu-evergreen">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <FileText size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Qu&rsquo;est-ce que le contenu evergreen et pourquoi en avez-vous besoin&nbsp;?
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un contenu evergreen (ou &laquo;&nbsp;contenu intemporel&nbsp;&raquo;) reste utile et pertinent longtemps apr&egrave;s sa publication. Dans le BTP, il s&rsquo;agit par exemple d&rsquo;un guide complet sur les diff&eacute;rentes techniques d&rsquo;isolation, d&rsquo;un article expliquant comment choisir entre une pompe &agrave; chaleur et une chaudi&egrave;re, ou encore d&rsquo;un checklist des points &agrave; v&eacute;rifier avant de signer un devis de r&eacute;novation.
      </p>

      <p className="text-muted-foreground mb-4">
        Ce type de contenu constitue la colonne vert&eacute;brale de votre <strong>marketing digital b&acirc;timent</strong>. Il attire des visiteurs mois apr&egrave;s mois, accumule des positions dans les moteurs de recherche, et construit votre autorit&eacute; sur le long terme.
      </p>

      <p className="text-muted-foreground mb-4">
        Mais attention&nbsp;: un contenu evergreen n&rsquo;est pas un contenu qu&rsquo;on publie et qu&rsquo;on oublie. Il demande une maintenance r&eacute;guli&egrave;re&nbsp;: mise &agrave; jour des liens, v&eacute;rification des donn&eacute;es, adaptation aux nouvelles r&eacute;glementations (comme la RE2026).
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mt-6">
        <p className="text-foreground font-medium mb-2">Le bon r&eacute;flexe&nbsp;:</p>
        <p className="text-muted-foreground mb-0">
          Dans le BTP, un contenu evergreen qui n&rsquo;est pas mis &agrave; jour peut devenir un handicap. Une page sur les aides &agrave; la r&eacute;novation qui cite des montants de 2024 n&rsquo;inspire plus confiance en 2026. Planifiez une revue trimestrielle de vos articles les plus visit&eacute;s.
        </p>
      </div>
    </section>

    {/* Section 2 : Le contenu d'actualité */}
    <section className="mb-12" id="contenu-actualite">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Clock size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le contenu d&rsquo;actualit&eacute;&nbsp;: l&rsquo;acc&eacute;l&eacute;rateur de trafic imm&eacute;diat
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le contenu d&rsquo;actualit&eacute; (ou &laquo;&nbsp;timely content&nbsp;&raquo;) r&eacute;pond &agrave; un &eacute;v&eacute;nement, une saison, une tendance ou une promotion. Pour une entreprise du b&acirc;timent, cela peut &ecirc;tre un article sur les tendances d&eacute;coration de printemps, un guide pour pr&eacute;parer sa maison &agrave; l&rsquo;hiver, ou une analyse des nouvelles aides MaPrimeR&eacute;nov&rsquo; pour 2026.
      </p>

      <p className="text-muted-foreground mb-4">
        Ce type de contenu g&eacute;n&egrave;re un pic de trafic &agrave; court terme. Il montre &agrave; votre audience que vous &ecirc;tes &agrave; l&rsquo;&eacute;coute du march&eacute;, r&eacute;actif et inform&eacute;. Pour les r&eacute;seaux sociaux et les newsletters, c&rsquo;est un excellent vecteur d&rsquo;engagement.
      </p>

      <p className="text-muted-foreground mb-4">
        Son inconv&eacute;nient&nbsp;: sa dur&eacute;e de vie est limit&eacute;e. Un article sur le bouclier tarifaire de l&rsquo;&eacute;nergie n&rsquo;aura plus d&rsquo;int&eacute;r&ecirc;t dans six mois.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card mt-6">
        <p className="font-semibold text-foreground mb-3">Ce que font les entreprises de r&eacute;novation qui performent&nbsp;:</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>Elles publient chaque mois au moins un contenu d&rsquo;actualit&eacute; li&eacute; &agrave; la saison ou aux r&eacute;glementations en cours</li>
          <li>Elles relaient ces contenus dans leurs newsletters et sur leurs r&eacute;seaux sociaux</li>
          <li>Elles ne n&eacute;gligent pas pour autant leur socle de contenus evergreen de fond</li>
          <li>Elles utilisent Google Trends pour identifier les sujets porteurs du moment</li>
        </ul>
      </div>
    </section>

    {/* Section 3 : Déséquilibre coûte des opportunités */}
    <section className="mb-12" id="desequilibre-coute">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi un d&eacute;s&eacute;quilibre vous co&ucirc;te des opportunit&eacute;s
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Si vous ne publiez que du contenu evergreen, votre audience peut avoir l&rsquo;impression que votre entreprise n&rsquo;est pas dans l&rsquo;air du temps. Vous passez &agrave; c&ocirc;t&eacute; des pics de recherche saisonniers qui g&eacute;n&egrave;rent des demandes de devis imm&eacute;diates.
      </p>

      <p className="text-muted-foreground mb-4">
        &Agrave; l&rsquo;inverse, si vous ne produisez que du contenu d&rsquo;actualit&eacute;, vous construisez peu d&rsquo;autorit&eacute; durable. Chaque article est un feu de paille qui retombe vite. Vous ne capitalisez pas sur un socle de contenu qui travaille pour vous en continu.
      </p>

      <p className="text-muted-foreground mb-4">
        Dans les deux cas, votre <strong>g&eacute;n&eacute;ration de leads BTP</strong> et votre <strong>acquisition clients r&eacute;novation</strong> en p&acirc;tissent.
      </p>
    </section>

    {/* Section 4 : La règle des 80/20 */}
    <section className="mb-12" id="regle-80-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Scale size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          La r&egrave;gle des 80/20 pour votre strat&eacute;gie de contenu
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le bon dosage, valid&eacute; par de nombreuses agences marketing BTP et par les pratiques des entreprises qui recrutent le mieux, se situe autour de 80&nbsp;% de contenu evergreen et 20&nbsp;% de contenu d&rsquo;actualit&eacute;.
      </p>

      <p className="text-muted-foreground mb-4">
        Concr&egrave;tement, sur 10 articles publi&eacute;s dans l&rsquo;ann&eacute;e&nbsp;:
      </p>

      <ul className="space-y-1 text-muted-foreground mb-4">
        <li><strong>8 articles</strong> sont des contenus de fond&nbsp;: guides pratiques, &eacute;tudes de cas, comparatifs techniques, checklists m&eacute;tiers.</li>
        <li><strong>2 articles</strong> sont des contenus r&eacute;actifs&nbsp;: actualit&eacute; r&eacute;glementaire, tendance saisonni&egrave;re, &eacute;v&eacute;nement du secteur.</li>
      </ul>

      <p className="text-muted-foreground mb-4">
        Cette proportion peut varier selon votre activit&eacute;. Un installateur de pompes &agrave; chaleur aura int&eacute;r&ecirc;t &agrave; produire plus de contenu d&rsquo;actualit&eacute; pendant les p&eacute;riodes d&rsquo;&eacute;volution des aides publiques. Un couvreur, plus de contenu evergreen sur les techniques de toiture.
      </p>

      <div className="bg-muted/50 border border-border rounded-xl p-6 mt-6">
        <p className="font-semibold text-foreground mb-3">&Agrave; surveiller chaque mois&nbsp;:</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>Google Trends pour rep&eacute;rer les pics de recherche sur vos m&eacute;tiers</li>
          <li>Les annonces gouvernementales sur MaPrimeR&eacute;nov&rsquo; et les CEE</li>
          <li>Les publications de vos f&eacute;d&eacute;rations professionnelles (FFB, CAPEB)</li>
          <li>Les tendances de recherche saisonni&egrave;res (isolation en automne, climatisation au printemps)</li>
        </ul>
      </div>
    </section>

    {/* Section 5 : Calendrier éditorial */}
    <section className="mb-12" id="calendrier-editorial">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Calendar size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment organiser votre calendrier &eacute;ditorial BTP
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Pour ne pas improviser, structurez votre plan de contenu sur 12 mois&nbsp;:
      </p>

      <ul className="space-y-2 text-muted-foreground mb-4">
        <li><strong>Trimestre 1</strong>&nbsp;: contenu evergreen sur les bases m&eacute;tiers (guides, comparatifs, checklists) + actualit&eacute; des nouvelles aides</li>
        <li><strong>Trimestre 2</strong>&nbsp;: contenu de fond sur les &eacute;tudes de cas clients + articles saisonniers (pr&eacute;parer l&rsquo;&eacute;t&eacute;, isolation par l&rsquo;ext&eacute;rieur)</li>
        <li><strong>Trimestre 3</strong>&nbsp;: mise &agrave; jour des contenus evergreen existants + contenu r&eacute;actif sur les tendances du march&eacute;</li>
        <li><strong>Trimestre 4</strong>&nbsp;: contenus de fond sur les projets de r&eacute;novation globale + anticipation des changements r&eacute;glementaires de l&rsquo;ann&eacute;e suivante</li>
      </ul>

      <p className="text-muted-foreground mb-4">
        Cette organisation vous permet de maintenir un flux constant sans vous &eacute;puiser, et de maximiser l&rsquo;impact de chaque publication sur votre <strong>acquisition clients</strong>.
      </p>
    </section>

    {/* Section 6 : Quand se faire accompagner */}
    <section className="mb-12" id="quand-se-faire-accompagner">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <HelpCircle size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Quand faut-il se faire accompagner&nbsp;?
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Produire r&eacute;guli&egrave;rement du contenu de qualit&eacute; demande du temps, de la rigueur et une vraie connaissance des m&eacute;canismes SEO. Beaucoup de dirigeants de PME du BTP lancent un blog avec enthousiasme, puis abandonnent au bout de trois mois faute de r&eacute;sultats visibles.
      </p>

      <p className="text-muted-foreground mb-4">
        Le probl&egrave;me est rarement un manque de comp&eacute;tence m&eacute;tier. Il se situe surtout dans la capacit&eacute; &agrave; tenir un rythme &eacute;ditorial tout en g&eacute;rant les chantiers et les devis au quotidien.
      </p>

      <p className="text-muted-foreground mb-4">
        Si vous sentez que votre strat&eacute;gie de contenu patine ou que vous n&rsquo;arrivez pas &agrave; trouver le bon &eacute;quilibre entre fond et actualit&eacute;, il peut &ecirc;tre pertinent de confier cette mission &agrave; des experts qui connaissent les sp&eacute;cificit&eacute;s du secteur.
      </p>
    </section>

    {/* 7. FINAL CTA SECTION */}
    <section className="mb-12">
      <SectionCTA
        title="Vous voulez une strat&eacute;gie de contenu qui g&eacute;n&egrave;re des leads&nbsp;?"
        description="Chez Agendac, nous aidons les entreprises de r&eacute;novation et du BTP &agrave; structurer leur marketing de contenu pour attirer les bons prospects, au bon moment. Planifions ensemble votre calendrier &eacute;ditorial 2026."
        buttonText="Prendre rendez-vous"
        buttonLink="/contact"
      />
    </section>

    {/* 8. FAQ */}
    <section className="mb-12" id="faq-evergreen-actualite">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <HelpCircle size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Questions fr&eacute;quentes
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="delai-trafic-evergreen">
          <AccordionTrigger className="text-foreground font-medium">
            Combien de temps faut-il pour qu&rsquo;un contenu evergreen rapporte du trafic&nbsp;?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              Cela d&eacute;pend de la concurrence sur votre sujet. Sur un mot-cl&eacute; de niche comme &laquo;&nbsp;guide isolation combles perdus&nbsp;&raquo;, comptez 3 &agrave; 6 mois pour voir les premi&egrave;res positions. Sur un sujet plus concurrentiel, l&rsquo;horizon peut &ecirc;tre de 6 &agrave; 12 mois. L&rsquo;avantage, c&rsquo;est que le trafic, une fois acquis, se maintient dans le temps.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="supprimer-contenu-obsolete">
          <AccordionTrigger className="text-foreground font-medium">
            Faut-il supprimer un contenu d&rsquo;actualit&eacute; une fois qu&rsquo;il est obsol&egrave;te&nbsp;?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              Pas forc&eacute;ment. Vous pouvez le transformer en contenu evergreen en supprimant les r&eacute;f&eacute;rences dat&eacute;es et en conservant la partie intemporelle. Par exemple, un article sur &laquo;&nbsp;les aides 2025&nbsp;&raquo; peut devenir un article g&eacute;n&eacute;ral sur &laquo;&nbsp;comment financer sa r&eacute;novation &eacute;nerg&eacute;tique&nbsp;&raquo;.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="publier-site-linkedin">
          <AccordionTrigger className="text-foreground font-medium">
            Dois-je publier tous ces contenus sur mon site ou aussi sur LinkedIn&nbsp;?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              Id&eacute;alement, les deux. Le contenu de fond vit sur votre site pour le r&eacute;f&eacute;rencement. Vous en extrayez des extraits pour LinkedIn, votre newsletter et vos r&eacute;seaux sociaux. Le contenu d&rsquo;actualit&eacute; peut d&rsquo;abord &ecirc;tre publi&eacute; sur LinkedIn pour tester la r&eacute;action, puis adapt&eacute; en article de blog s&rsquo;il fonctionne.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="frequence-publication">
          <AccordionTrigger className="text-foreground font-medium">
            Quelle est la fr&eacute;quence id&eacute;ale de publication pour une entreprise du BTP&nbsp;?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              Une publication par semaine est un bon rythme pour commencer&nbsp;: trois articles evergreen par mois et un article d&rsquo;actualit&eacute;. L&rsquo;essentiel est la r&eacute;gularit&eacute; sur la dur&eacute;e, pas le volume sur un mois.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleContenuEvergreenActualiteMarketingBtp2026;
