import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "pourquoi-articles-btp-ne-produisent-rien", label: "Pourquoi tant d’articles BTP ne produisent presque rien" },
  { id: "partir-intention-recherche-claire", label: "Partir d’une intention de recherche claire" },
  { id: "structurer-article-blog-btp", label: "Structurer un article de blog BTP" },
  { id: "formats-articles-qui-fonctionnent", label: "Quels formats d’articles fonctionnent le mieux" },
  { id: "erreurs-redaction-coutent-positions", label: "Les erreurs de rédaction qui coûtent des devis" },
  { id: "relier-blog-acquisition-client", label: "Relier votre blog à votre acquisition client" },
  { id: "quand-se-faire-accompagner-redaction", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-redaction-articles-blog-batiment", label: "FAQ" },
];

const ArticleRedigerArticlesBlogBatiment2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        Un bon article de blog bâtiment ne sert pas seulement à publier du contenu. Il doit capter une vraie recherche, rassurer avant le devis et aider votre entreprise à transformer davantage de visibilité en demandes utiles.
      </p>
    </div>

    <div className="mb-8 lg:hidden rounded-xl border border-border bg-background p-5">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">Sommaire</p>
      <nav aria-label="Sommaire mobile">
        <ol className="space-y-2 text-sm text-muted-foreground">
          {toc.map((item, index) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="transition-colors hover:text-primary">{index + 1}. {item.label}</a>
            </li>
          ))}
        </ol>
      </nav>
    </div>

    <section id="pourquoi-articles-btp-ne-produisent-rien" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Pourquoi tant d’articles de blog BTP ne produisent presque rien</h2>
      <p className="mb-4 text-muted-foreground">Beaucoup d’entreprises publient des contenus trop génériques : actualités vagues, textes très descriptifs sur leur métier, ou articles rédigés pour “faire du SEO” sans répondre à une question réelle de prospect.</p>
      <p className="mb-4 text-muted-foreground">Le résultat est prévisible : peu de trafic utile, peu de demandes qualifiées, et une impression que le contenu ne sert à rien.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>Le sujet est mal choisi et ne correspond à aucune intention de recherche concrète.</li>
        <li>L’article reste trop institutionnel et parle surtout de l’entreprise.</li>
        <li>Le texte ne traite ni objection, ni coût, ni méthode, ni critère de décision.</li>
        <li>Le lien avec le site, les pages métier et le suivi commercial n’est pas pensé.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Dans le BTP, le problème n’est presque jamais uniquement le trafic. Il se situe souvent entre le choix des sujets, la promesse éditoriale et la capacité du contenu à préparer une vraie prise de contact.</p>
    </section>

    <section id="partir-intention-recherche-claire" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Partir d’une intention de recherche claire avant d’écrire</h2>
      <p className="mb-4 text-muted-foreground">La première étape consiste à choisir une requête utile, pas un thème trop large. Un bon article de blog bâtiment cible une question que vos prospects se posent avant de demander un devis, de comparer plusieurs solutions ou de vérifier votre crédibilité.</p>
      <p className="mb-4 text-muted-foreground">Les angles les plus efficaces se situent souvent autour de quatre familles :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>les problèmes concrets : pourquoi je n’ai pas de demandes, pourquoi mon site ne convertit pas, pourquoi mes campagnes ne marchent pas ;</li>
        <li>les comparatifs et arbitrages : SEO ou publicité, agence ou recrutement, Google Ads ou Meta Ads ;</li>
        <li>les sujets métier : isolation, toiture, menuiserie, pompe à chaleur, rénovation globale, pages locales ;</li>
        <li>les contenus de réassurance : cas client, méthode, critères de choix, erreurs à éviter.</li>
      </ul>
      <p className="text-muted-foreground">Si votre entreprise intervient en couverture, par exemple, un article sur les erreurs qui font perdre des devis sur un site de couvreur aura souvent plus d’impact qu’un contenu générique sur la communication digitale. Il répond à un besoin plus net, plus proche d’une décision.</p>
    </section>

    <section id="structurer-article-blog-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Structurer un article de blog BTP pour être lu, compris et bien référencé</h2>
      <p className="mb-4 text-muted-foreground">Un article efficace dans le bâtiment doit être simple à scanner. Le lecteur veut comprendre vite s’il est au bon endroit. Google, lui, doit identifier clairement le sujet traité.</p>
      <p className="mb-4 text-muted-foreground">La structure la plus fiable reste sobre :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>un titre centré sur le sujet exact ;</li>
        <li>une introduction courte qui pose le problème business ;</li>
        <li>des sections H2 qui répondent à des sous-questions claires ;</li>
        <li>des listes quand elles améliorent la lisibilité ;</li>
        <li>un passage orienté décision ou passage à l’action en fin d’article ;</li>
        <li>une FAQ utile quand le sujet s’y prête.</li>
      </ul>
      <p className="mb-4 text-muted-foreground">Les paragraphes doivent rester courts. Les exemples terrain sont essentiels. Un article sur la rénovation énergétique, la menuiserie extérieure ou la maçonnerie doit montrer que vous connaissez les réalités du secteur, pas seulement les règles générales du content marketing.</p>
      <p className="text-muted-foreground">Vous pouvez aussi renforcer l’ensemble avec quelques liens internes utiles vers vos pages de service, votre <Link to="/gestion-seo" className="text-primary hover:underline">accompagnement SEO</Link> ou un contenu connexe déjà publié. Le but n’est pas de surcharger, mais d’aider le prospect à continuer son parcours.</p>
    </section>

    <section id="formats-articles-qui-fonctionnent" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quels formats d’articles fonctionnent le mieux pour une entreprise du bâtiment</h2>
      <p className="mb-4 text-muted-foreground">Tous les formats ne se valent pas. Pour une entreprise déjà installée, les meilleurs articles sont souvent ceux qui servent à la fois la visibilité et la conversion douce.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Le guide pratique :</strong> utile pour expliquer une méthode, un process ou un sujet complexe.</li>
        <li><strong>L’article diagnostic :</strong> efficace pour partir d’un symptôme et orienter vers une solution.</li>
        <li><strong>Le comparatif :</strong> pertinent quand le prospect hésite entre plusieurs approches.</li>
        <li><strong>Le cas client ou la référence chantier :</strong> excellent pour rassurer et matérialiser votre expertise.</li>
        <li><strong>La FAQ longue :</strong> utile pour répondre à des objections très concrètes avant devis.</li>
      </ul>
      <div className="mt-6 rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">Exemple terrain</p>
        <p className="text-muted-foreground">Une entreprise de rénovation globale peut alterner entre pages pédagogiques sur les leviers d’acquisition, articles de réassurance sur ses réalisations, et contenus plus commerciaux sur la manière de structurer les demandes de devis. Cette variété nourrit mieux le SEO et la maturation commerciale qu’un blog composé uniquement de conseils génériques.</p>
      </div>
    </section>

    <section id="erreurs-redaction-coutent-positions" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les erreurs de rédaction qui coûtent des positions… et des devis</h2>
      <p className="mb-4 text-muted-foreground">Dans le bâtiment, un article mal pensé ne fait pas seulement perdre du temps. Il peut aussi brouiller votre positionnement et attirer une audience peu utile.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>Écrire pour “tout le monde” au lieu de viser une cible précise.</li>
        <li>Utiliser un ton trop scolaire ou trop abstrait.</li>
        <li>Empiler des mots-clés sans vraie logique de lecture.</li>
        <li>Parler de 2024 ou 2025 dans un contenu censé rester crédible en 2026.</li>
        <li>Publier un article sans lien avec les pages métier ou le parcours de conversion.</li>
        <li>Oublier les preuves terrain : exemples, réalisations, délais, contexte commercial.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Une autre erreur fréquente consiste à séparer complètement contenu et commerce. Or un bon article doit aussi préparer la suite : clic vers une page métier, demande de contact, lecture d’un cas client, ou prise de rendez-vous. Sans cette continuité, vous gagnez parfois des impressions, mais rarement des opportunités sérieuses.</p>
    </section>

    <section id="relier-blog-acquisition-client" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Comment relier votre blog à votre acquisition client en rénovation ou BTP</h2>
      <p className="mb-4 text-muted-foreground">Un blog performant ne vit pas à côté de votre acquisition. Il en fait partie. Chaque sujet doit contribuer à un objectif précis : mieux ressortir sur Google, répondre à une objection commerciale, nourrir un lead froid, ou orienter vers la bonne offre.</p>
      <p className="mb-4 text-muted-foreground">Le plus utile est souvent de construire un petit système :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>des pages métier pour capter l’intention la plus chaude ;</li>
        <li>des articles support pour répondre aux questions et objections ;</li>
        <li>un maillage clair entre les contenus ;</li>
        <li>un suivi CRM pour savoir quels sujets influencent vraiment les demandes ;</li>
        <li>une boucle de retour entre marketing et commerciaux.</li>
      </ul>
      <p className="text-muted-foreground">Quand ce système est en place, le blog cesse d’être un simple canal de visibilité. Il devient un appui commercial. C’est particulièrement vrai pour les entreprises de rénovation qui veulent moins dépendre du bouche-à-oreille ou des plateformes d’achat de leads.</p>
    </section>

    <section id="quand-se-faire-accompagner-redaction" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quand faut-il se faire accompagner sur la rédaction de contenu BTP ?</h2>
      <p className="mb-4 text-muted-foreground">Si vous publiez déjà mais que vos articles n’apportent ni positions solides ni demandes sérieuses, le sujet dépasse souvent la simple rédaction. Il faut revoir les intentions ciblées, la structure éditoriale, le maillage, les pages d’atterrissage et la façon dont les leads sont ensuite traités.</p>
      <p className="mb-4 text-muted-foreground">Pour une entreprise du bâtiment déjà structurée, se faire accompagner permet surtout de choisir les bons sujets, de produire des contenus vraiment utiles et de connecter le blog au reste du dispositif commercial. C’est souvent là qu’un accompagnement en <Link to="/gestion-seo" className="text-primary hover:underline">gestion SEO</Link> ou en structuration de l’acquisition devient le plus rentable.</p>
      <p className="mb-4 text-muted-foreground">Le bon objectif n’est pas de publier plus. C’est de publier des contenus qui soutiennent réellement la croissance.</p>
      <SectionCTA />
    </section>

    <section id="faq-redaction-articles-blog-batiment" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground font-display">FAQ sur la rédaction d’articles de blog dans le bâtiment</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quelle longueur viser pour un article de blog BTP ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Il n’existe pas de chiffre magique, mais un article doit être assez complet pour traiter le sujet sérieusement. Dans le bâtiment, les contenus les plus utiles dépassent souvent 1 000 mots quand ils répondent à une vraie question business ou technique.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Faut-il écrire pour Google ou pour les prospects ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Les deux, mais dans le bon ordre. Il faut d’abord répondre clairement à l’intention du prospect. Si la structure, le vocabulaire et le maillage sont propres, Google comprendra mieux le contenu sans que le texte devienne artificiel.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quels sujets de blog apportent le plus de valeur à une entreprise de rénovation ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">En général, les sujets les plus rentables sont ceux qui répondent à une objection, expliquent un coût, comparent des options, détaillent une méthode ou renforcent la réassurance avant devis.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleRedigerArticlesBlogBatiment2026;
