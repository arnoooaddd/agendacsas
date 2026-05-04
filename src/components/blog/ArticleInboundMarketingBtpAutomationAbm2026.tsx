import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Bot, Briefcase, CheckCircle2, FileStack, Layers3, Target, Workflow } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleInboundMarketingBtpAutomationAbm2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Beaucoup d'entreprises du bâtiment veulent “faire du marketing” sans vrai système. Elles publient quelques contenus, lancent parfois une campagne, puis espèrent que les commerciaux récupèreront le reste.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          En 2026, cette logique ne suffit plus. Pour développer votre business dans le BTP, il faut relier <strong>contenu, marketing automation et ciblage commercial</strong> afin de faire progresser un prospect jusqu'au bon moment de prise de contact.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#pourquoi-systeme" className="hover:text-primary transition-colors">1. Pourquoi les actions isolées ne suffisent plus</a></li>
            <li><a href="#role-inbound" className="hover:text-primary transition-colors">2. Le rôle réel de l'inbound marketing</a></li>
            <li><a href="#role-automation" className="hover:text-primary transition-colors">3. Où le marketing automation change la donne</a></li>
            <li><a href="#role-abm" className="hover:text-primary transition-colors">4. Quand l'ABM devient pertinent</a></li>
            <li><a href="#comment-combiner" className="hover:text-primary transition-colors">5. Comment combiner les 3 sans usine à gaz</a></li>
            <li><a href="#erreurs-courantes" className="hover:text-primary transition-colors">6. Les erreurs les plus fréquentes</a></li>
            <li><a href="#plan-90-jours" className="hover:text-primary transition-colors">7. Le plan d'action 90 jours</a></li>
            <li><a href="#faq-inbound-btp" className="hover:text-primary transition-colors">8. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="pourquoi-systeme">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Layers3 size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi les actions marketing isolées ne suffisent plus
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Dans le bâtiment, le cycle de décision est souvent long. Un dirigeant, un maître d'ouvrage ou un responsable travaux ne signe pas parce qu'il a vu une seule publication ou téléchargé un seul guide.
      </p>
      <p className="text-muted-foreground mb-4">
        Il avance par étapes : découverte, comparaison, réassurance, échange commercial, arbitrage. Si votre marketing ne suit pas cette logique, vous créez de l'activité mais pas assez d'opportunités réellement mûres.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Un système utile doit permettre de :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />attirer les bonnes recherches et les bonnes audiences</li>
          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />faire progresser les contacts froids sans mobiliser un commercial trop tôt</li>
          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />aider les équipes à se concentrer sur les comptes les plus prometteurs</li>
          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />mieux relier marketing, CRM et conversion réelle</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="role-inbound">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <FileStack size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le rôle réel de l'inbound marketing dans le BTP
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        L'inbound marketing ne consiste pas à publier “un peu de contenu”. Son rôle est de capter l'attention sur des sujets qui correspondent à une intention métier réelle, puis d'installer votre crédibilité avant même le premier appel.
      </p>
      <p className="text-muted-foreground mb-4">
        Pour Agendac, un bon contenu BTP doit répondre à une vraie question business : comment générer plus de demandes, mieux qualifier ses prospects, améliorer son référencement local, ou structurer sa communication digitale.
      </p>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Ce que le contenu doit faire</h3>
          <p className="text-muted-foreground">Clarifier un problème, démontrer votre compréhension du terrain et préparer la décision. Pas remplir un calendrier éditorial vide.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Ce qu'il ne doit pas faire</h3>
          <p className="text-muted-foreground">Empiler des articles génériques sans lien avec une offre, une zone, un type de chantier ou une étape du pipeline.</p>
        </div>
      </div>

      <p className="text-muted-foreground mt-6">
        Si votre base SEO doit encore être renforcée, relisez aussi <Link to="/blog/referencement-btp-google-ia-generatives-2026" className="text-primary hover:underline">notre guide sur le référencement BTP en 2026</Link>.
      </p>
    </section>

    <section className="mb-12" id="role-automation">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Workflow size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Où le marketing automation change vraiment la donne
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le marketing automation devient utile dès que vous avez des prospects qui montrent un intérêt, mais ne sont pas encore prêts à parler à un commercial. C'est précisément là que beaucoup d'entreprises du bâtiment perdent de la valeur.
      </p>
      <p className="text-muted-foreground mb-4">
        Sans automation, les téléchargements, visites répétées ou formulaires intermédiaires restent sous-exploités. Avec un bon scénario, vous pouvez nourrir la relation, pousser le bon contenu et détecter les signaux de maturité.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le bon usage :</p>
        <p className="text-muted-foreground mb-0">
          automatiser les relances utiles, segmenter les intérêts et faire remonter des signaux concrets au CRM. Pas envoyer des suites d'emails génériques qui ressemblent à du spam B2B.
        </p>
      </div>
    </section>

    <section className="mb-12" id="role-abm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Target size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Quand l'ABM devient pertinent pour développer votre business
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        L'ABM n'est pas réservé aux grands groupes. Il devient pertinent dès que vous voulez concentrer vos efforts sur quelques comptes, prescripteurs ou partenaires à forte valeur potentielle.
      </p>
      <p className="text-muted-foreground mb-4">
        Dans le BTP, cela peut concerner des promoteurs, des architectes, des bureaux d'études, des réseaux de franchise, ou des entreprises qui vendent des offres plus complexes avec plusieurs décideurs.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">L'ABM devient utile quand :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• vous connaissez vos comptes cibles</li>
          <li>• les commerciaux savent quels acteurs doivent être approchés</li>
          <li>• le marketing peut personnaliser contenus, messages ou preuves par segment</li>
          <li>• vous acceptez une logique qualité &gt; volume</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="comment-combiner">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Briefcase size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment combiner inbound, automation et ABM sans usine à gaz
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        La bonne approche n'est pas de lancer trois chantiers séparés. Il faut une séquence simple : le contenu attire, l'automation fait mûrir, et l'ABM concentre l'effort commercial sur les meilleurs comptes.
      </p>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">1. Créez 3 à 5 contenus vraiment stratégiques</h3>
          <p className="text-muted-foreground">Articles, pages d'expertise, études de cas ou guides qui répondent aux objections majeures de vos cibles.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">2. Connectez ces contenus à des scénarios simples</h3>
          <p className="text-muted-foreground">Segmentation, relances email utiles, scoring léger, remontée CRM des signaux clés.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">3. Réservez l'ABM aux comptes qui le méritent</h3>
          <p className="text-muted-foreground">Pas besoin de personnaliser tout votre marché. Ciblez les comptes à forte valeur et équipez les commerciaux avec les bons supports.</p>
        </div>
      </div>

      <p className="text-muted-foreground mt-6">
        Si votre site ne soutient pas encore bien cette logique, notre article sur <Link to="/blog/site-web-renovation-levier-commercial-2026" className="text-primary hover:underline">le site web comme levier commercial</Link> peut vous aider à remettre la base au propre.
      </p>
    </section>

    <section className="mb-12" id="erreurs-courantes">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <Bot size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les erreurs les plus fréquentes
        </h2>
      </div>

      <ul className="space-y-3 text-muted-foreground">
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>publier du contenu sans angle business clair</li>
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>mettre en place une automation trop complexe avant d'avoir un vrai volume de signaux utiles</li>
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>confondre ABM et simple prospection LinkedIn</li>
        <li className="flex items-start gap-3"><span className="text-primary mt-1">•</span>ne jamais relier les actions marketing à la qualité des rendez-vous ou des devis générés</li>
      </ul>

      <p className="text-muted-foreground mt-6">
        Le point critique n'est pas d'“avoir une stratégie moderne”. Le point critique est de savoir si le marketing aide vraiment votre équipe commerciale à gagner du temps et à signer plus proprement.
      </p>
    </section>

    <section className="mb-12" id="plan-90-jours">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Target size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le plan d'action 90 jours pour une entreprise déjà établie
        </h2>
      </div>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 1 à 30</h3>
          <p className="text-muted-foreground">Audit des contenus existants, des pages qui convertissent, des signaux CRM et des comptes cibles prioritaires.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 31 à 60</h3>
          <p className="text-muted-foreground">Création des contenus manquants, connexion des formulaires et mise en place des premiers scénarios d'automation simples.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 61 à 90</h3>
          <p className="text-muted-foreground">Lancement d'actions ciblées sur les comptes à fort potentiel, mesure des retours commerciaux et optimisation des parcours qui produisent les demandes les plus mûres.</p>
        </div>
      </div>
    </section>

    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Quand faut-il se faire accompagner ?</p>
        <p className="text-foreground font-semibold text-lg mb-4">
          Quand vos actions marketing existent déjà, mais qu'elles ne forment toujours pas un système cohérent au service du business.
        </p>
        <p className="text-muted-foreground mb-6">
          Si vos commerciaux reçoivent trop peu de demandes mûres, ou si votre communication produit de l'activité sans vraie visibilité sur la conversion, il faut souvent recadrer l'architecture d'acquisition plutôt qu'ajouter encore un canal.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-inbound-btp">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            L'inbound marketing suffit-il seul pour développer une entreprise du BTP ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Non. Il attire et éduque, mais il doit être relié à une logique de conversion, de suivi et parfois de ciblage commercial plus fin pour produire des résultats durables.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il mettre du marketing automation partout ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Non plus. Commencez par quelques scénarios utiles sur vos points d'entrée clés. Une automation simple et bien connectée au CRM vaut mieux qu'une mécanique lourde peu exploitée.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            À partir de quand l'ABM devient-il intéressant ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Dès que certains comptes ont une valeur bien supérieure au reste du marché et que vous pouvez adapter vos messages, vos preuves et votre approche commerciale à ces cibles prioritaires.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleInboundMarketingBtpAutomationAbm2026;
