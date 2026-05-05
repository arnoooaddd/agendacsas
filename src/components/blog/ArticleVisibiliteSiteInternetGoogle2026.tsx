import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "visibilite-google-ne-vient-pas-seule", label: "Pourquoi la visibilité Google ne vient pas toute seule" },
  { id: "bases-visibilite-site-google", label: "Les bases qui rendent un site visible" },
  { id: "contenus-qui-font-remonter", label: "Les contenus qui font vraiment remonter" },
  { id: "maillage-technique-experience", label: "Technique, maillage et expérience utilisateur" },
  { id: "mesurer-visibilite-utile", label: "Comment mesurer une visibilité utile" },
  { id: "quand-se-faire-accompagner-visibilite", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-visibilite-google", label: "FAQ" },
];

const ArticleVisibiliteSiteInternetGoogle2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        Améliorer la visibilité de son site internet sur Google en 2026 ne consiste pas à accumuler des astuces SEO. Pour une entreprise de rénovation ou du bâtiment, le vrai sujet est de publier des pages utiles, de structurer leur maillage et de transformer cette visibilité en demandes qualifiées.
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

    <section id="visibilite-google-ne-vient-pas-seule" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Pourquoi la visibilité Google ne vient pas toute seule</h2>
      <p className="mb-4 text-muted-foreground">Beaucoup d&apos;entreprises du bâtiment ont un site propre, une page d&apos;accueil correcte et quelques réalisations en ligne, mais restent peu visibles sur Google. Le problème ne vient pas forcément du design. Il vient souvent d&apos;un site qui parle de l&apos;entreprise sans répondre clairement aux recherches tapées par les prospects.</p>
      <p className="mb-4 text-muted-foreground">Améliorer la visibilité de son site internet sur Google, c&apos;est rendre chaque page compréhensible pour le moteur de recherche et utile pour l&apos;internaute. En 2026, cela veut dire aligner les contenus sur des intentions précises : isolation extérieure, pompe à chaleur, toiture, menuiserie, rénovation globale, audit énergétique, ou encore pages locales par zone d&apos;intervention.</p>
      <p className="text-muted-foreground">Dans la rénovation, le problème n&apos;est presque jamais seulement la position moyenne. Il se situe souvent entre le choix des sujets, la structure des pages et la capacité du site à rassurer assez vite pour déclencher un appel, un devis ou une demande de rendez-vous.</p>
    </section>

    <section id="bases-visibilite-site-google" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les bases qui rendent réellement un site visible sur Google</h2>
      <p className="mb-4 text-muted-foreground">Le référencement naturel repose d&apos;abord sur des fondations simples, mais trop souvent négligées. Un site peut publier du contenu pendant des mois sans progresser si ces bases ne sont pas propres.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>des balises title et meta descriptions cohérentes avec la recherche visée ;</li>
        <li>une hiérarchie claire entre H1, H2 et H3 ;</li>
        <li>des URL lisibles, centrées sur le sujet traité ;</li>
        <li>des pages métier distinctes au lieu d&apos;une seule page trop générique ;</li>
        <li>des signaux de confiance visibles : avis, réalisations, zones d&apos;intervention, méthode, délais de réponse.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Une stratégie SEO rentable pour une entreprise de rénovation est un système qui relie structure du site, contenus, maillage interne et conversion commerciale. Si une page attire mais ne rassure pas, elle crée de la visibilité sans valeur. Si elle rassure mais reste introuvable, elle ne sert pas non plus.</p>

      <div className="rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">Exemple terrain</p>
        <p className="text-muted-foreground">Une entreprise de couverture peut avoir une seule page “Nos services” qui mélange toiture, zinguerie, isolation et dépannage. Google comprend mal la spécialisation réelle de la page. En séparant ces sujets en pages métier distinctes, avec des exemples de chantiers et des formulations locales, l&apos;entreprise augmente ses chances d&apos;être visible sur des recherches plus qualifiées.</p>
      </div>
    </section>

    <section id="contenus-qui-font-remonter" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les contenus qui font vraiment remonter un site sur Google</h2>
      <p className="mb-4 text-muted-foreground">Pour améliorer la visibilité de son site internet sur Google, il ne suffit pas de publier “des articles de blog”. Il faut créer des contenus qui répondent à des questions précises et qui prolongent une logique commerciale.</p>
      <p className="mb-4 text-muted-foreground">Les formats qui fonctionnent bien dans le bâtiment sont souvent :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>les pages métier détaillées ;</li>
        <li>les pages locales par ville ou zone ;</li>
        <li>les articles qui expliquent un problème concret, un coût, un comparatif ou une méthode ;</li>
        <li>les cas clients et réalisations qui apportent une preuve terrain ;</li>
        <li>les FAQ utiles qui reprennent de vraies objections clients.</li>
      </ul>
      <p className="mb-4 text-muted-foreground">Le bon réflexe consiste à partir des demandes réelles reçues par les commerciaux. Quelles questions reviennent avant un devis ? Quelles hésitations bloquent la prise de contact ? Quelles recherches précèdent souvent un chantier ? Ce sont ces signaux qui doivent guider le contenu, pas un simple volume de mots-clés.</p>
      <p className="text-muted-foreground">Quand une entreprise publie des contenus trop généralistes, elle attire parfois du trafic peu utile. À l&apos;inverse, un contenu bien ciblé peut générer moins de visites mais davantage d&apos;opportunités sérieuses. C&apos;est précisément là qu&apos;une logique de <Link to="/gestion-seo" className="text-primary hover:underline">gestion SEO</Link> devient rentable : elle cherche la bonne visibilité, pas seulement plus de visibilité.</p>
    </section>

    <section id="maillage-technique-experience" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Technique, maillage interne et expérience utilisateur : le trio qui change tout</h2>
      <p className="mb-4 text-muted-foreground">Une page ne remonte pas seule. Google interprète aussi la manière dont votre site relie les sujets entre eux. Un bon maillage interne aide à faire circuler l&apos;autorité entre vos pages, mais surtout à montrer la cohérence de votre offre.</p>
      <p className="mb-4 text-muted-foreground">Par exemple, une page sur la rénovation globale peut renvoyer vers des contenus sur le coût d&apos;une pompe à chaleur, les aides disponibles, l&apos;isolation ou le parcours de devis. Cette logique aide le moteur à comprendre votre univers, et aide le prospect à avancer dans sa décision.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>Gardez des temps de chargement propres, surtout sur mobile.</li>
        <li>Évitez les pages dupliquées ou très proches sans angle distinct.</li>
        <li>Ajoutez des liens internes sur des ancres naturelles et utiles.</li>
        <li>Travaillez l&apos;ergonomie mobile, car une grande partie des recherches locales se joue sur smartphone.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Le responsive, la vitesse et la clarté du parcours restent essentiels. Un prospect qui ne trouve pas rapidement l&apos;information ou le bouton de contact n&apos;ira pas plus loin, même si la page est bien positionnée.</p>
    </section>

    <section id="mesurer-visibilite-utile" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Comment mesurer une visibilité Google vraiment utile</h2>
      <p className="mb-4 text-muted-foreground">Une meilleure position sur Google n&apos;est qu&apos;un début. Pour une entreprise déjà structurée, la bonne question est : est-ce que cette visibilité génère plus de demandes sérieuses et un meilleur coût d&apos;acquisition ?</p>
      <p className="mb-4 text-muted-foreground">Les indicateurs les plus utiles sont souvent :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>les clics organiques sur les pages métier et locales ;</li>
        <li>les requêtes qui déclenchent ces clics ;</li>
        <li>les formulaires, appels ou rendez-vous issus du trafic organique ;</li>
        <li>la qualité commerciale des demandes reçues ;</li>
        <li>le lien entre les contenus consultés et les devis ensuite signés.</li>
      </ul>
      <p className="text-muted-foreground">Une entreprise peut très bien gagner en impressions sans gagner en business. À l&apos;inverse, quelques pages bien construites peuvent suffire à nourrir durablement le pipeline commercial. Le but n&apos;est donc pas de “faire du SEO” en chambre, mais de connecter visibilité, suivi CRM et performance terrain.</p>
    </section>

    <section id="quand-se-faire-accompagner-visibilite" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quand faut-il se faire accompagner ?</h2>
      <p className="mb-4 text-muted-foreground">Si votre site existe déjà mais reste peu visible malgré plusieurs actions, le sujet dépasse souvent l&apos;optimisation de quelques balises. Il faut alors revoir la structure des pages, les intentions ciblées, le maillage, les contenus et la conversion.</p>
      <p className="mb-4 text-muted-foreground">Pour une entreprise de rénovation qui veut progresser sans disperser son budget, se faire accompagner permet d&apos;identifier les pages à retravailler, les sujets à publier en priorité et les signaux commerciaux à suivre. C&apos;est souvent le bon moment pour articuler le site, le référencement local et les pages de service avec une logique business plus nette, parfois en lien avec une <Link to="/creation-site-internet" className="text-primary hover:underline">création ou refonte de site internet</Link> si la base actuelle freine encore la conversion.</p>
      <SectionCTA />
    </section>

    <section id="faq-visibilite-google" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground font-display">FAQ sur la visibilité d&apos;un site internet sur Google</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Combien de temps faut-il pour améliorer la visibilité d&apos;un site internet sur Google ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Cela dépend du point de départ, de la concurrence locale et de la qualité du site. Sur des pages métier bien retravaillées, les premiers signaux peuvent apparaître en quelques semaines, mais une progression solide se construit généralement sur plusieurs mois.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Faut-il privilégier les articles de blog ou les pages service pour gagner en visibilité ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Les deux ont un rôle différent. Les pages service captent souvent l&apos;intention la plus proche du devis. Les articles servent à traiter les questions, comparatifs et objections qui préparent cette prise de contact.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Pourquoi mon site est-il joli mais presque invisible sur Google ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Parce qu&apos;un beau design ne suffit pas. Sans structure claire, sans ciblage des bonnes recherches, sans maillage interne et sans contenus utiles, Google comprend mal la valeur réelle du site et le classe difficilement sur des requêtes concurrentielles.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleVisibiliteSiteInternetGoogle2026;
