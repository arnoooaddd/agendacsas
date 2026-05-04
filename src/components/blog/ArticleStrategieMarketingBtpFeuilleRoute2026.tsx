import { Link } from "react-router-dom";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "pourquoi-changer-role", label: "Pourquoi le marketing BTP doit changer de rôle" },
  { id: "indicateurs-cles", label: "Les indicateurs qui comptent vraiment" },
  { id: "cadre-pilotage", label: "Le bon cadre de pilotage" },
  { id: "exemple-terrain", label: "Exemple terrain" },
  { id: "priorites-2026", label: "Les priorités à renforcer en 2026" },
  { id: "erreurs-frequentes", label: "Les erreurs les plus fréquentes" },
  { id: "feuille-route-90-jours", label: "Feuille de route 90 jours" },
  { id: "quand-se-faire-accompagner", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-strategie-marketing-btp", label: "FAQ" },
];

const ArticleStrategieMarketingBtpFeuilleRoute2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
        <p className="text-base leading-relaxed text-foreground">
          En 2026, une stratégie marketing BTP rentable ne se résume pas à produire plus de visibilité. Elle relie acquisition, qualification commerciale, suivi des opportunités et rentabilité des chantiers.
      </p>
    </div>

      <div className="mb-8 lg:hidden rounded-xl border border-border bg-background p-5">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">Sommaire</p>
        <nav>
          <ol className="space-y-2 text-sm text-muted-foreground">
            {toc.map((item, index) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-primary transition-colors">{index + 1}. {item.label}</a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <section id="pourquoi-changer-role" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Pourquoi le marketing BTP doit changer de rôle</h2>
        <p className="mb-4 text-muted-foreground">Dans beaucoup d’entreprises du bâtiment, le marketing reste encore associé au site internet, aux réseaux sociaux, aux salons ou aux supports commerciaux.</p>
        <p className="mb-4 text-muted-foreground">Ces éléments comptent. Mais tant qu’ils ne sont pas reliés au développement commercial, ils restent perçus comme des dépenses de communication et non comme un levier de croissance.</p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>Le site attire parfois du trafic, mais pas forcément les bonnes demandes.</li>
          <li>Les campagnes produisent des contacts, mais trop peu avancent jusqu’au devis.</li>
          <li>Les commerciaux récupèrent des demandes mal préparées ou mal ciblées.</li>
          <li>La direction manque de visibilité sur ce qui produit réellement du chiffre d’affaires.</li>
        </ul>
        <p className="text-muted-foreground">Chez Agendac, on constate souvent la même chose : dans le BTP, le problème n’est presque jamais uniquement le volume de trafic. Il se situe plus souvent entre la promesse, le filtrage des demandes et le traitement commercial.</p>
      </section>

      <section id="indicateurs-cles" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les indicateurs qui comptent vraiment pour piloter une stratégie marketing BTP</h2>
        <p className="mb-4 text-muted-foreground">Si vous pilotez encore votre marketing avec les impressions, les clics ou les visites, vous regardez trop haut dans le parcours d’achat.</p>
        <p className="mb-4 text-muted-foreground">Les indicateurs les plus utiles sont ceux qui relient vos actions marketing à la performance commerciale réelle.</p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>nombre de demandes entrantes</li>
          <li>part de demandes réellement exploitables</li>
          <li>taux de prise de rendez-vous</li>
          <li>taux de transformation en devis</li>
          <li>taux de signature</li>
          <li>coût d’acquisition client en rénovation ou dans le BTP</li>
          <li>rentabilité par canal d’acquisition</li>
          <li>délai moyen entre premier contact et signature</li>
        </ul>
      </section>

      <section id="cadre-pilotage" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Le vrai cadre de pilotage : acquisition, qualification, conversion</h2>
        <p className="mb-4 text-muted-foreground">Pour qu’une stratégie marketing BTP fonctionne, elle doit être pensée comme une chaîne complète, pas comme une juxtaposition de leviers.</p>

        <h3 className="mb-3 text-xl font-semibold text-foreground font-display">1. Acquisition</h3>
        <p className="mb-4 text-muted-foreground">Le premier objectif est d’attirer des contacts cohérents avec votre offre, votre zone, votre niveau de prix et votre type de chantier.</p>
        <ul className="mb-5 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>pages d’atterrissage plus précises</li>
          <li>contenus alignés avec les requêtes des décideurs BTP</li>
          <li>campagnes pilotées sur la qualité des demandes, pas seulement sur le coût par lead</li>
          <li>positionnement plus clair sur votre spécialité</li>
        </ul>

        <h3 className="mb-3 text-xl font-semibold text-foreground font-display">2. Qualification</h3>
        <p className="mb-4 text-muted-foreground">Beaucoup d’entreprises pensent manquer de volume alors qu’elles manquent surtout de tri en amont.</p>
        <ul className="mb-5 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>meilleures questions dans les formulaires</li>
          <li>segmentation par métier, zone, budget, urgence ou maturité</li>
          <li>règles simples pour distinguer une demande sérieuse d’un contact faible</li>
          <li>relances adaptées pour les prospects pas encore prêts</li>
        </ul>

        <h3 className="mb-3 text-xl font-semibold text-foreground font-display">3. Conversion</h3>
        <p className="mb-4 text-muted-foreground">Un bon contact mal repris reste une opportunité perdue.</p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>rapidité de rappel</li>
          <li>qualité de la qualification téléphonique</li>
          <li>rigueur du suivi commercial</li>
          <li>analyse des causes de non-signature</li>
        </ul>
      </section>

      <section id="exemple-terrain" className="mb-10 scroll-mt-28 rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Exemple terrain : ce qui bloque souvent dans une entreprise rénovation</h2>
        <p className="mb-4 text-muted-foreground">Prenons le cas classique d’une entreprise de rénovation énergétique qui investit dans Google Ads et commence enfin à recevoir plus de formulaires.</p>
        <p className="mb-4 text-muted-foreground">Sur le papier, la situation semble progresser. Pourtant, trois semaines plus tard, la direction dit que les demandes ne sont pas bonnes.</p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>le formulaire ne filtre pas assez le type de projet</li>
          <li>les rappels arrivent trop tard</li>
          <li>les commerciaux ne renseignent pas clairement les raisons de perte</li>
          <li>les prospects tièdes ne sont jamais retravaillés correctement</li>
        </ul>
        <p className="text-muted-foreground">Le problème ne vient donc pas uniquement de la campagne. Il vient du lien entre la promesse marketing, la qualification et le traitement commercial. Si vous voulez creuser ce point, relisez aussi <Link to="/blog/lead-renovation-demande-vraiment-qualifiee" className="text-primary hover:underline">comment reconnaître une demande vraiment qualifiée</Link>.</p>
      </section>

      <section id="priorites-2026" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les priorités à renforcer en 2026 si vous voulez structurer l’acquisition client dans le BTP</h2>
        <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Des contenus orientés intention, pas juste visibilité</h3>
        <p className="mb-4 text-muted-foreground">Un article ou une page ne doit pas essayer de répondre à tout le cluster SEO en même temps. Il doit répondre à une intention dominante claire.</p>
        <p className="mb-5 text-muted-foreground">Un contenu stratégique doit aider un dirigeant à comprendre comment organiser son acquisition, pas le noyer dans une liste de mots-clés ou dans un article trop généraliste.</p>
        <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Un site pensé pour faire avancer une décision</h3>
        <p className="mb-4 text-muted-foreground">Votre site doit aider le lecteur à comprendre rapidement pour qui votre offre est faite, quel problème vous résolvez, ce qui vous différencie et quelle est la prochaine étape logique.</p>
        <p className="mb-5 text-muted-foreground">Un site trop large attire souvent des demandes trop vagues. Un site plus net produit des opportunités plus cohérentes. Sur ce sujet, vous pouvez aussi lire <Link to="/blog/site-internet-renovation-erreurs-demandes-devis" className="text-primary hover:underline">les erreurs qui font perdre des demandes de devis</Link>.</p>
        <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Des campagnes analysées avec une vraie lecture business</h3>
        <p className="text-muted-foreground">Une campagne n’est pas rentable parce qu’elle génère un coût par contact bas. Elle est rentable si elle alimente des rendez-vous utiles, des devis sérieux et des signatures profitables. Pour comparer les plateformes, voyez aussi <Link to="/blog/google-ads-meta-ads-entreprise-renovation" className="text-primary hover:underline">Google Ads vs Meta Ads en rénovation</Link>.</p>
      </section>

      <section id="erreurs-frequentes" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les erreurs les plus fréquentes qui affaiblissent le marketing BTP</h2>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>confondre notoriété et acquisition</li>
          <li>chercher plus de volume sans améliorer la qualité des demandes</li>
          <li>produire du contenu trop large ou trop générique</li>
          <li>laisser le marketing et le commerce fonctionner sans boucle de retour</li>
          <li>ne pas exploiter les données commerciales pour améliorer les campagnes</li>
          <li>continuer à financer des canaux peu performants par habitude</li>
        </ul>
      </section>

      <section id="feuille-route-90-jours" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Feuille de route 90 jours pour repositionner le marketing comme levier de croissance</h2>
        <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Jours 1 à 30 : clarifier</h3>
        <ul className="mb-5 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>redéfinir la cible prioritaire</li>
          <li>clarifier la promesse commerciale</li>
          <li>identifier les sources actuelles de demandes</li>
          <li>repérer les points de rupture entre contact, devis et signature</li>
        </ul>
        <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Jours 31 à 60 : structurer</h3>
        <ul className="mb-5 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>revoir les formulaires et le niveau de qualification</li>
          <li>mettre à plat les bons statuts de suivi commercial</li>
          <li>prioriser les contenus et pages à plus forte intention business</li>
          <li>aligner marketing et commerce sur quelques indicateurs communs</li>
        </ul>
        <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Jours 61 à 90 : optimiser</h3>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>réduire les actions peu contributrices</li>
          <li>renforcer les canaux qui amènent les meilleures opportunités</li>
          <li>améliorer les délais et la qualité de prise en charge</li>
          <li>mesurer plus finement la performance par source et par typologie de demande</li>
        </ul>
      </section>

      <section id="quand-se-faire-accompagner" className="mb-12 scroll-mt-28 rounded-xl border border-primary/15 bg-primary/5 p-6 md:p-7">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quand faut-il se faire accompagner ?</h2>
        <p className="mb-4 text-muted-foreground">Si vous avez déjà du trafic, des campagnes actives ou une équipe commerciale en place, mais que vous ne savez pas clairement où la performance se perd, il devient utile de prendre du recul sur l’ensemble du dispositif.</p>
        <p className="mb-5 text-muted-foreground">Le bon accompagnement ne sert pas à faire plus de marketing. Il sert à remettre de la cohérence entre acquisition, qualification, suivi commercial, devis et rentabilité.</p>
        <SectionCTA />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Conclusion</h2>
        <p className="mb-4 text-muted-foreground">En 2026, une stratégie marketing BTP performante ne se juge pas au nombre d’actions lancées. Elle se juge à sa capacité à attirer les bonnes demandes, à mieux les faire avancer dans le parcours commercial et à améliorer la rentabilité globale.</p>
        <p className="text-muted-foreground">Les entreprises qui progresseront le plus ne seront pas celles qui communiqueront le plus. Ce seront celles qui sauront mieux relier marketing, qualification, suivi commercial et résultat économique.</p>
      </section>

      <section id="faq-strategie-marketing-btp" className="mb-8 scroll-mt-28">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground font-display">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-foreground font-display">Comment savoir si ma stratégie marketing BTP génère de vraies opportunités commerciales ?</h3>
            <p className="text-muted-foreground">Il faut regarder plus loin que le volume de formulaires. Une stratégie utile produit des demandes cohérentes avec votre offre, qui avancent jusqu’au rendez-vous, au devis puis à la signature. Si beaucoup de contacts entrent mais peu aboutissent, le problème se situe souvent dans le filtrage ou dans le traitement commercial.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-foreground font-display">Pourquoi une entreprise de rénovation peut-elle recevoir plus de demandes sans améliorer son chiffre d’affaires ?</h3>
            <p className="text-muted-foreground">Parce qu’un surplus de demandes n’améliore rien si ces contacts sont mal ciblés, rappelés trop tard ou mal suivis. Le volume n’a de valeur que si l’organisation commerciale derrière est capable de transformer ce flux en chantiers rentables.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-foreground font-display">Quels indicateurs une direction BTP devrait-elle suivre pour piloter son acquisition de manière sérieuse ?</h3>
            <p className="text-muted-foreground">Les plus utiles sont généralement la part de demandes qualifiées, la vitesse de prise en charge, le taux de devis, le taux de signature, le coût d’acquisition client et la rentabilité par canal. Ce sont eux qui permettent d’arbitrer les budgets plus intelligemment.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-foreground font-display">À quel moment faut-il revoir toute sa mécanique d’acquisition plutôt que lancer une nouvelle campagne ?</h3>
            <p className="text-muted-foreground">Quand vous investissez déjà dans la visibilité ou la publicité, mais que vous ne savez pas précisément ce qui transforme, ce qui fuit et ce qui détruit de la marge. C’est souvent le signe qu’il faut revoir la structure globale plutôt qu’ajouter une action isolée.</p>
          </div>
        </div>
      </section>
  </>
);

export default ArticleStrategieMarketingBtpFeuilleRoute2026;
