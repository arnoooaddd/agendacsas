
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "pourquoi-ga4-mal-utilise", label: "Pourquoi beaucoup d’entreprises utilisent mal GA4" },
  { id: "metriques-ga4-btp", label: "Les métriques qui comptent vraiment" },
  { id: "rapports-ga4-acquisition", label: "Lire les rapports avec une logique d’acquisition" },
  { id: "signaux-problemes-conversion", label: "Les signaux qui révèlent un blocage" },
  { id: "configurer-ga4-2026", label: "Comment configurer GA4 utilement" },
  { id: "decisions-apres-analyse", label: "Quelles décisions prendre" },
  { id: "quand-se-faire-accompagner", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-analyse-trafic-btp", label: "FAQ" },
];

const ArticleAnalyseTraficWebGa4Btp2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        Google Analytics 4 devient utile quand il aide à répondre à trois questions : d&apos;où viennent vos prospects, où votre site freine la conversion, et quels canaux méritent vraiment plus de budget.
      </p>
    </div>

    <div className="mb-8 rounded-xl border border-primary/15 bg-primary/5 p-5 md:p-6">
      <p className="text-muted-foreground leading-relaxed mb-0">
        Dans le BTP, le problème n&apos;est presque jamais uniquement le trafic. Il se situe souvent entre la promesse, la qualification et le traitement commercial. Une bonne lecture de GA4 sert donc à mieux arbitrer vos actions marketing, pas à accumuler des graphiques.
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

    <section id="pourquoi-ga4-mal-utilise" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Pourquoi beaucoup d’entreprises du bâtiment utilisent mal GA4</h2>
      <p className="mb-4 text-muted-foreground">GA4 est souvent installé, mais rarement exploité avec une logique business. Les équipes regardent les sessions, les pages vues ou les utilisateurs actifs, sans relier ces données aux vrais objectifs de l’entreprise.</p>
      <p className="mb-4 text-muted-foreground">Résultat : vous voyez du trafic, mais vous ne savez pas si ce trafic produit des demandes sérieuses, si votre site aide vos commerciaux, ou si vos campagnes payantes attirent les bons projets.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>les rapports sont consultés sans question commerciale claire ;</li>
        <li>les conversions ne sont pas configurées en fonction des vraies étapes de vente ;</li>
        <li>les canaux sont analysés au volume, pas à la qualité ;</li>
        <li>les décisions sont prises trop tard, faute de lecture simple.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">C’est un problème fréquent dans les entreprises de rénovation déjà structurées : le marketing produit de l’activité, mais le pilotage ne permet pas de distinguer ce qui nourrit vraiment le pipeline.</p>
    </section>

    <section id="metriques-ga4-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les métriques GA4 qui comptent vraiment pour une entreprise BTP</h2>
      <p className="mb-4 text-muted-foreground">Les indicateurs utiles sont ceux qui aident à arbitrer vos actions marketing. Pour une entreprise du bâtiment, il faut d’abord lire GA4 à travers trois niveaux : acquisition, engagement, conversion.</p>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">1. Acquisition : d’où vient la demande ?</h3>
      <p className="mb-4 text-muted-foreground">Identifiez les canaux qui amènent vos visiteurs : référencement naturel, campagnes Google Ads, trafic direct, réseaux sociaux ou emailing. Mais ne vous arrêtez pas au volume. Un canal peut générer beaucoup de visites et très peu de demandes exploitables.</p>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">2. Engagement : le site aide-t-il vraiment à avancer ?</h3>
      <p className="mb-4 text-muted-foreground">Analysez les pages consultées, le temps d’engagement, les scrolls, les clics sur les CTA et les parcours fréquents. Cela permet de repérer les pages qui rassurent… et celles qui font décrocher.</p>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">3. Conversion : quelles actions ont une vraie valeur ?</h3>
      <p className="mb-4 text-muted-foreground">Dans le BTP, les conversions importantes ne se limitent pas à l’envoi d’un formulaire. Selon votre fonctionnement, elles peuvent inclure :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>une demande de devis ;</li>
        <li>un clic vers un numéro de téléphone ;</li>
        <li>une prise de rendez-vous ;</li>
        <li>un téléchargement de guide sur un projet encore tiède.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Exemple terrain : une entreprise de couverture peut découvrir que son trafic local convertit surtout sur mobile via les appels. Sans cette lecture, elle sous-estime la valeur réelle de certaines campagnes.</p>
    </section>

    <section id="rapports-ga4-acquisition" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Comment lire vos rapports GA4 avec une logique d’acquisition client</h2>
      <p className="mb-4 text-muted-foreground">Le rapport d’acquisition devient utile quand il répond à une question simple : <strong>quel canal génère les demandes les plus utiles commercialement ?</strong></p>
      <p className="mb-4 text-muted-foreground">Pour cela, comparez vos sources de trafic sur plusieurs critères :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>taux de conversion par canal ;</li>
        <li>qualité des pages de destination ;</li>
        <li>engagement des visiteurs selon l’origine ;</li>
        <li>cohérence entre promesse publicitaire et comportement sur site.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Si une campagne attire des clics mais que les visiteurs quittent vite la page, le problème peut venir de la promesse, du ciblage ou de la page d’atterrissage. Si le SEO attire des visites sur des contenus trop génériques, vous captez peut-être du trafic peu mûr.</p>
      <p className="text-muted-foreground">C’est aussi là que l’analyse du trafic web devient un levier de pilotage : vous ne cherchez plus seulement à attirer du monde, mais à orienter l’investissement vers les bonnes intentions.</p>
    </section>

    <section id="signaux-problemes-conversion" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les signaux qui révèlent un problème entre trafic, site et conversion</h2>
      <p className="mb-4 text-muted-foreground">GA4 devient particulièrement utile quand il permet de diagnostiquer pourquoi vos demandes n’augmentent pas, malgré des efforts marketing réels.</p>
      <div className="rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">Quelques signaux à surveiller :</p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>beaucoup d’entrées sur une page métier, mais très peu de conversions ;</li>
          <li>un trafic payant correct, mais un engagement faible ;</li>
          <li>des conversions présentes, mais très peu de rendez-vous réellement tenus ensuite ;</li>
          <li>des écarts forts entre mobile et desktop sur les pages clés.</li>
        </ul>
      </div>
      <p className="mt-4 text-muted-foreground">GA4 vous aide à voir où le parcours se dégrade, mais il faut ensuite relier cette lecture au CRM et au suivi commercial.</p>
      <p className="text-muted-foreground">Si votre site attire du trafic mais transforme mal, vous pouvez aussi approfondir avec <Link to="/blog/site-web-renovation-levier-commercial-2026" className="text-primary hover:underline">notre article sur le site web comme levier commercial</Link>.</p>
    </section>

    <section id="configurer-ga4-2026" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Comment configurer GA4 pour prendre de vraies décisions en 2026</h2>
      <p className="mb-4 text-muted-foreground">Une bonne lecture dépend d’abord d’une bonne configuration. Sans plan de marquage simple, GA4 devient vite un outil verbeux mais peu utile.</p>
      <p className="mb-4 text-muted-foreground">Voici le minimum à mettre en place :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>des événements de conversion alignés sur vos vraies étapes business ;</li>
        <li>des pages de destination clairement identifiées par métier ou zone ;</li>
        <li>des conventions UTM propres pour vos campagnes ;</li>
        <li>une lecture séparée entre trafic de marque, trafic local et campagnes payantes.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Si vous faites de la rénovation de l’habitat sur plusieurs zones, segmenter vos campagnes et vos pages dans l’analyse vous aide à voir où la demande est la plus rentable.</p>
      <p className="text-muted-foreground">Ce travail permet aussi de mieux arbitrer entre SEO et acquisition payante. Si le sujet vous concerne, lisez aussi <Link to="/blog/combiner-seo-publicite-generer-demandes-devis-renovation-2026" className="text-primary hover:underline">comment combiner SEO et publicité pour générer plus de demandes</Link>.</p>
    </section>

    <section id="decisions-apres-analyse" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quelles décisions concrètes prendre après votre analyse du trafic</h2>
      <p className="mb-4 text-muted-foreground">Une analyse utile débouche sur des actions simples et nettes. En sortie de lecture GA4, vous devez pouvoir décider quoi renforcer, quoi corriger et quoi stopper.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>renforcer un canal qui génère peu de volume mais beaucoup de demandes sérieuses ;</li>
        <li>revoir une page métier qui reçoit du trafic mais rassure mal ;</li>
        <li>ajuster une campagne payante dont l’intention est trop large ;</li>
        <li>accélérer le rappel commercial sur certaines conversions mobiles.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">GA4 n’est pas un outil de curiosité. C’est un outil d’arbitrage. Utilisé correctement, il permet de relier visibilité, comportement et rentabilité.</p>
    </section>

    <section id="quand-se-faire-accompagner" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quand faut-il se faire accompagner sur le pilotage analytics ?</h2>
      <p className="mb-4 text-muted-foreground">Si vos tableaux de bord existent mais que vos équipes ne savent pas quoi en tirer, ou si vous avez du mal à relier trafic, demandes et chiffre d’affaires, l’accompagnement devient vite rentable.</p>
      <p className="mb-4 text-muted-foreground">À partir d’un certain niveau d’activité, le sujet n’est plus simplement technique. Il devient stratégique : comprendre quels leviers renforcent vraiment votre acquisition clients rénovation ou BTP, et lesquels occupent du temps sans produire assez de valeur.</p>
      <SectionCTA />
    </section>

    <section id="faq-analyse-trafic-btp" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground font-display">FAQ : analyse du trafic web et GA4 dans le BTP</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quelles conversions faut-il suivre dans GA4 pour une entreprise du bâtiment ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">En priorité : les demandes de devis, clics d’appel, prises de rendez-vous et autres actions qui ont un vrai lien avec votre processus commercial. Il faut éviter de traiter des micro-interactions comme si elles avaient la même valeur qu’un lead.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Peut-on piloter son acquisition BTP uniquement avec GA4 ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Non. GA4 aide à comprendre le comportement sur le site et la performance des canaux, mais il doit être relié à votre CRM ou à votre suivi commercial pour mesurer la qualité réelle des demandes.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Comment savoir si mon trafic SEO est rentable ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Regardez quelles pages attirent le trafic organique, si ce trafic convertit, et surtout s’il produit des demandes utiles. Un bon volume SEO a peu de valeur s’il attire surtout des recherches peu mûres.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">À quelle fréquence faut-il analyser ses rapports ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Un point hebdomadaire léger permet de détecter les écarts rapides. Un pilotage mensuel plus complet permet ensuite de décider quoi renforcer, corriger ou couper.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleAnalyseTraficWebGa4Btp2026;
