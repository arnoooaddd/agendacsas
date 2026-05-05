import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ArticleGoogleKeywordPlannerBtpGoogleAds = () => {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-foreground/90 prose-li:text-foreground/90 prose-strong:text-foreground">
      <p>Le Google Keyword Planner est souvent utilisé comme un simple générateur d’idées. En réalité, pour une entreprise de rénovation ou du bâtiment, c’est surtout un outil de cadrage budgétaire et commercial.</p>
      <p>Bien utilisé, il permet d’éviter un problème fréquent : lancer des campagnes Google Ads sur des requêtes trop larges, trop chères ou trop éloignées des vrais chantiers à signer.</p>
      <p>Le Google Keyword Planner est l’outil de planification de mots-clés intégré à Google Ads. Il aide à estimer les volumes de recherche, le niveau de concurrence et les fourchettes d’enchères afin de construire une stratégie publicitaire plus rentable.</p>

      <Card className="my-8 border-primary/15 bg-primary/5">
        <CardContent className="p-6">
          <p className="m-0 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
          <ul className="mt-4 space-y-2 pl-5 text-base">
            <li>Le Keyword Planner aide à arbitrer entre volume, coût et intention réelle.</li>
            <li>Dans le BTP, les mots-clés les plus rentables sont souvent plus locaux et plus précis.</li>
            <li>Le bon usage de l’outil commence par vos offres et finit dans votre CRM.</li>
          </ul>
        </CardContent>
      </Card>

      <div className="mb-8 rounded-xl border border-border bg-muted/40 p-5 lg:hidden">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">Sommaire</p>
        <ul className="space-y-2 text-sm">
          <li><a href="#pourquoi-keyword-planner" className="text-primary hover:underline">Pourquoi le Google Keyword Planner reste un passage obligé</a></li>
          <li><a href="#donnees-prioritaires" className="text-primary hover:underline">Quelles données regarder en priorité</a></li>
          <li><a href="#choisir-mots-cles" className="text-primary hover:underline">Comment choisir les bons mots-clés</a></li>
          <li><a href="#plan-action-google-ads" className="text-primary hover:underline">Transformer la recherche en plan d’action</a></li>
          <li><a href="#erreurs-frequentes" className="text-primary hover:underline">Les erreurs les plus fréquentes</a></li>
          <li><a href="#quand-se-faire-accompagner" className="text-primary hover:underline">Quand faut-il se faire accompagner ?</a></li>
          <li><a href="#faq-keyword-planner" className="text-primary hover:underline">FAQ</a></li>
          <li><a href="#conclusion-keyword-planner" className="text-primary hover:underline">Conclusion</a></li>
        </ul>
      </div>

      <h2 id="pourquoi-keyword-planner">Pourquoi le Google Keyword Planner reste un passage obligé avant toute campagne</h2>
      <p>Beaucoup de dirigeants du BTP pensent que Google Ads commence au moment où l’on rédige une annonce. C’est faux. La rentabilité se joue d’abord au niveau du ciblage des requêtes.</p>
      <p>Si vous achetez du trafic sur des mots-clés imprécis, vous payez pour des clics qui n’aboutissent ni à des demandes sérieuses, ni à des devis qualifiés, ni à des signatures rentables.</p>
      <ul>
        <li>Vous estimez le niveau de demande sur un marché local ou un métier précis.</li>
        <li>Vous repérez les écarts de coût entre des requêtes génériques et des intentions plus mûres.</li>
        <li>Vous préparez un compte Google Ads cohérent avec vos objectifs commerciaux.</li>
      </ul>
      <p>Dans le BTP, le problème n’est presque jamais uniquement le trafic. Il se situe souvent entre la promesse, la qualification et le traitement commercial. Le planificateur aide justement à mieux filtrer en amont.</p>

      <h2 id="donnees-prioritaires">Quelles données regarder en priorité pour une entreprise de rénovation</h2>
      <p>L’outil affiche beaucoup d’informations, mais toutes n’ont pas la même valeur. Pour une stratégie de <strong>google ads rénovation</strong>, quatre signaux comptent vraiment.</p>
      <ul>
        <li><strong>Le volume de recherche</strong> : il indique si la requête mérite d’être travaillée ou si le marché local est trop étroit.</li>
        <li><strong>La concurrence</strong> : elle donne une première idée de la pression publicitaire sur le mot-clé.</li>
        <li><strong>Les enchères hautes et basses</strong> : elles permettent d’anticiper le niveau de budget nécessaire.</li>
        <li><strong>La pertinence commerciale</strong> : c’est le filtre le plus important, même s’il n’est pas fourni directement par Google.</li>
      </ul>
      <p>Un exemple simple : une entreprise de couverture peut voir du volume sur “toiture”, mais générera souvent de meilleures opportunités avec des expressions comme “réparation toiture fuite Toulon” ou “devis couvreur rénovation toiture”. Le volume est plus faible, mais l’intention est bien plus exploitable.</p>

      <h2 id="choisir-mots-cles">Comment choisir les bons mots-clés sans gonfler inutilement le budget</h2>
      <p>Le bon usage du Keyword Planner n’est pas de prendre les mots-clés les plus recherchés. C’est de construire un arbitrage entre volume, coût et probabilité de conversion.</p>
      <p>Pour une <strong>agence marketing BTP</strong> ou un dirigeant qui pilote ses campagnes, la logique la plus saine ressemble à ceci :</p>
      <ul>
        <li>garder une base de requêtes métier à forte intention ;</li>
        <li>ajouter des variantes locales ;</li>
        <li>séparer les recherches informationnelles des recherches de devis ;</li>
        <li>exclure rapidement les termes trop généralistes ou hors cible.</li>
      </ul>
      <p>Par exemple, “pompe à chaleur” peut coûter cher et attirer des profils très variés. “installation pompe à chaleur air eau devis” ou “entreprise pompe à chaleur Annecy” ont souvent moins de volume, mais servent mieux un objectif d’<strong>acquisition clients rénovation</strong>.</p>
      <p>C’est aussi là qu’une erreur classique apparaît : confondre audience large et audience rentable. Une campagne qui apporte beaucoup de clics mais peu de chantiers utiles détériore vite le coût d’acquisition.</p>

      <h2 id="plan-action-google-ads">La bonne méthode pour transformer une recherche de mots-clés en plan d’action Google Ads</h2>
      <p>Le plus efficace est de sortir du simple tableur de mots-clés pour bâtir une structure de campagne.</p>
      <ol>
        <li><strong>Partez de vos offres rentables</strong> : isolation, toiture, menuiserie, chauffage, photovoltaïque, rénovation globale.</li>
        <li><strong>Créez des groupes de requêtes par intention</strong> : information, comparaison, demande de devis, urgence.</li>
        <li><strong>Ajoutez le local</strong> : ville, zone d’intervention, typologie de chantier.</li>
        <li><strong>Projetez un budget test</strong> à partir des CPC observés.</li>
        <li><strong>Reliez chaque groupe à une page de destination cohérente</strong> et à un suivi commercial rapide.</li>
      </ol>
      <p>Une entreprise de plomberie qui envoie tout son trafic sur la page d’accueil perd souvent une partie de sa performance. Une campagne bien préparée avec le Keyword Planner doit déjà anticiper la suite : message, landing page, formulaire, rappel commercial, qualification CRM.</p>
      <p>Si votre page d’atterrissage n’est pas alignée avec la requête, votre <Link to="/creation-site-internet" className="text-primary hover:underline">site internet</Link> absorbe le budget sans transformer correctement.</p>

      <h2 id="erreurs-frequentes">Les erreurs les plus fréquentes avec le Keyword Planner</h2>
      <ul>
        <li><strong>Travailler uniquement des mots-clés génériques</strong> et surpayer des clics peu qualifiés.</li>
        <li><strong>Ignorer l’intention de recherche</strong> en mélangeant requêtes de découverte et requêtes de devis.</li>
        <li><strong>Oublier la géographie</strong>, alors que beaucoup d’entreprises du bâtiment ont un rayon d’action précis.</li>
        <li><strong>Prendre les estimations Google comme une vérité absolue</strong> sans les confronter à la réalité terrain.</li>
        <li><strong>Décorréler le marketing du commercial</strong> : sans suivi des appels, formulaires et devis, impossible de savoir quels mots-clés sont vraiment rentables.</li>
      </ul>
      <p>Le vrai sujet n’est pas seulement de lancer une campagne. C’est de créer un système où la publicité, le site, la qualification et le suivi commercial fonctionnent ensemble.</p>

      <Card className="my-8 border-border bg-muted/30">
        <CardContent className="p-6">
          <h3 className="mt-0">Checklist rapide avant de lancer vos annonces</h3>
          <ul className="mb-0 pl-5">
            <li>Vos mots-clés sont-ils regroupés par offre et par niveau d’intention ?</li>
            <li>Votre budget test est-il cohérent avec les CPC observés ?</li>
            <li>Chaque groupe renvoie-t-il vers une page dédiée ?</li>
            <li>Votre équipe sait-elle rappeler et qualifier une demande en moins de 15 minutes ?</li>
          </ul>
        </CardContent>
      </Card>

      <h2 id="quand-se-faire-accompagner">Quand faut-il se faire accompagner ?</h2>
      <p>Si votre entreprise investit déjà sur Google Ads, mais que vous ne savez pas clairement quels mots-clés génèrent des demandes sérieuses, quelles campagnes consomment du budget sans retour, ou où se situe la fuite entre clic, formulaire, appel, devis et vente, alors le sujet dépasse la simple recherche de mots-clés.</p>
      <p>À ce stade, il faut souvent reprendre l’ensemble de la mécanique : structure de campagne, pages d’atterrissage, argumentaire, suivi CRM et priorisation budgétaire. Pour une entreprise établie, c’est généralement ce qui fait la différence entre une dépense pub subie et une stratégie d’<strong>acquisition client bâtiment</strong> pilotée.</p>
      <p>Quand le sujet est principalement lié à la performance des campagnes, un accompagnement en <Link to="/gestion-communication" className="text-primary hover:underline">gestion de communication</Link> aide à relier publicité, messages et suivi business. Si le blocage est plutôt côté conversion, la <Link to="/prise-rendez-vous" className="text-primary hover:underline">prise de rendez-vous</Link> et la qualification deviennent souvent prioritaires.</p>

      <h2 id="faq-keyword-planner">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Le Google Keyword Planner suffit-il pour lancer une campagne rentable ?</AccordionTrigger>
          <AccordionContent>Non. Il aide à choisir et estimer les requêtes, mais il ne remplace ni la qualité des annonces, ni la page de destination, ni le traitement commercial des demandes.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Le Google Keyword Planner est-il utile pour le marketing digital bâtiment local ?</AccordionTrigger>
          <AccordionContent>Oui, surtout pour structurer des campagnes par métier et par zone. Il devient encore plus utile quand on croise les données avec la réalité des marges, des paniers moyens et des délais de traitement.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Faut-il viser les mots-clés avec le plus gros volume ?</AccordionTrigger>
          <AccordionContent>Pas forcément. Dans la rénovation, les expressions les plus rentables sont souvent plus spécifiques, plus locales et plus proches d’une intention de devis.</AccordionContent>
        </AccordionItem>
      </Accordion>

      <h2 id="conclusion-keyword-planner">Conclusion</h2>
      <p>Le Google Keyword Planner n’est pas juste un outil de suggestion. C’est un filtre stratégique pour éviter de brûler du budget sur des requêtes mal choisies.</p>
      <p>Pour les entreprises de rénovation et du BTP déjà structurées, sa vraie valeur est simple : mieux relier le budget publicitaire à la réalité commerciale, et transformer Google Ads en levier de croissance pilotable.</p>
    </div>
  );
};

export default ArticleGoogleKeywordPlannerBtpGoogleAds;
