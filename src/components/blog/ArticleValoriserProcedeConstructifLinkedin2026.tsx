import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BadgeCheck, Briefcase, Calendar, Image, MapPin, TrendingUp } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleValoriserProcedeConstructifLinkedin2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Vous avez développé ou distribuez un procédé constructif innovant — isolation thermique par l'extérieur, étanchéité réflective, bardage ventilé, menuiserie technique ou système constructif modulaire — mais vos prescripteurs et maîtres d'ouvrage ne le connaissent pas encore.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          LinkedIn est aujourd'hui le canal le plus efficace pour le leur montrer, à condition de structurer une stratégie de contenu professionnelle adaptée au BTP. Contrairement aux idées reçues, la valorisation d'un procédé technique ne passe pas par des publications absconses. Elle repose sur une alternance de preuves terrain, de témoignages et de contenus pédagogiques qui démontrent l'efficacité sans noyer le lecteur dans des détails superflus. <strong>Une stratégie marketing BTP bien conçue sur LinkedIn peut transformer un inconnu technique en référence de marché.</strong>
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#linkedin-canal-prioritaire" className="hover:text-primary transition-colors">1. Pourquoi LinkedIn est le canal prioritaire pour les procédés constructifs</a></li>
            <li><a href="#trois-piliers-linkedin" className="hover:text-primary transition-colors">2. Les trois piliers d'une stratégie LinkedIn pour un procédé technique</a></li>
            <li><a href="#calendrier-contenu-linkedin" className="hover:text-primary transition-colors">3. Comment structurer un calendrier de contenu LinkedIn pour le BTP</a></li>
            <li><a href="#formats-engagement-batiment" className="hover:text-primary transition-colors">4. Les formats qui génèrent le plus d'engagement dans le bâtiment</a></li>
            <li><a href="#mesurer-impact-ajuster" className="hover:text-primary transition-colors">5. Mesurer l'impact et ajuster votre stratégie LinkedIn</a></li>
            <li><a href="#faq-valoriser-linkedin" className="hover:text-primary transition-colors">6. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="linkedin-canal-prioritaire">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <MapPin size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi LinkedIn est le canal prioritaire pour les procédés constructifs
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        LinkedIn concentre les décideurs du secteur : maîtres d'ouvrage, architectes, bureaux d'études, prescripteurs et donneurs d'ordre. C'est le seul réseau où un contenu bien construit peut être vu par l'AMO d'un programme de 200 logements ou par le dirigeant d'un cabinet d'architecture spécialisé dans le tertiaire.
      </p>
      <p className="text-muted-foreground mb-4">
        Un procédé constructif ne se vend pas sur un catalogue PDF. Il se démontre par des cas réels, des photos de chantier et des retours d'utilisation. LinkedIn offre le format et l'audience pour le faire sans intermédiaire. Les entreprises du bâtiment qui intègrent ce canal dans leur <strong>marketing digital bâtiment</strong> créent un avantage concurrentiel durable face à celles qui comptent uniquement sur leurs réseaux historiques.
      </p>
    </section>

    <section className="mb-12" id="trois-piliers-linkedin">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Briefcase size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les trois piliers d'une stratégie LinkedIn pour un procédé technique
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Une stratégie LinkedIn pour un procédé constructif repose sur trois types de contenus qui se renforcent mutuellement :
      </p>

      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-5">
        <p className="font-semibold text-foreground mb-3">Pilier 1 — Réalisations et références chantier :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Chaque chantier terminé est un argument de vente. Photographiez la mise en œuvre, montrez l'avant/après, détaillez les contraintes résolues et les performances atteintes.</li>
          <li>• Un post chantier bien rédigé fait plus pour la crédibilité d'un procédé qu'une plaquette commerciale distribuée sur un salon.</li>
          <li>• Ajoutez des données chiffrées quand c'est possible : surface traitée, temps de mise en œuvre, gain énergétique mesuré.</li>
        </ul>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card mb-5">
        <p className="font-semibold text-foreground mb-3">Pilier 2 — Témoignages et interviews d'experts :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Faites parler les prescripteurs qui ont spécifié votre procédé, les entreprises qui l'ont mis en œuvre et les maîtres d'ouvrage qui en ont bénéficié.</li>
          <li>• Le témoignage tiers est le format le plus performant pour lever les objections techniques sur LinkedIn.</li>
          <li>• Privilégiez le format vidéo court ou la citation visuelle, qui génèrent plus d'engagement que les textes longs.</li>
        </ul>
      </div>

      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <p className="font-semibold text-foreground mb-3">Pilier 3 — Contenus pédagogiques et éducatifs :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Expliquez le problème que votre procédé résout avant de présenter la solution. Les prescripteurs ont besoin de comprendre en quoi votre approche change la donne.</li>
          <li>• Carrousels, vidéos courtes, schémas comparatifs : variez les formats pour capter une audience qui ne lira pas un article long sur LinkedIn.</li>
          <li>• Un contenu éducatif bien conçu est partagé par les prescripteurs eux-mêmes, ce qui multiplie votre portée sans budget publicitaire.</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="calendrier-contenu-linkedin">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Calendar size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment structurer un calendrier de contenu LinkedIn pour le BTP
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        La régularité prime sur la perfection. L'objectif est de publier 3 à 4 fois par semaine avec un mix cohérent : une réalisation chantier, un contenu pédagogique, une interview ou témoignage, et un post plus large sur les enjeux du secteur.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Exemple de trame mensuelle :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Semaine 1 : présentation du procédé et de ses bénéfices clés</li>
          <li>• Semaine 2 : retour sur un chantier emblématique avec photos</li>
          <li>• Semaine 3 : interview d'un prescripteur ou d'une entreprise utilisatrice</li>
          <li>• Semaine 4 : comparatif ou analyse de performance (coût, durée, impact environnemental)</li>
        </ul>
      </div>

      <p className="text-muted-foreground mb-4">
        Cette alternance évite la lassitude et construit une narration crédible autour de votre solution technique. Les prescripteurs apprennent à vous connaître à travers ces différents prismes, ce qui accélère leur décision lorsqu'ils spécifient un procédé sur un projet.
      </p>
    </section>

    <section className="mb-12" id="formats-engagement-batiment">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Image size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les formats qui génèrent le plus d'engagement dans le bâtiment
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Tous les formats LinkedIn ne se valent pas pour les contenus techniques du BTP. Voici ceux qui performent le mieux :
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <ul className="space-y-2 text-muted-foreground">
          <li>• <strong>Les carrousels avant/après</strong> : idéaux pour montrer la transformation d'un chantier et les bénéfices visibles du procédé.</li>
          <li>• <strong>Les vidéos courtes terrain</strong> : 30 à 60 secondes de mise en œuvre sur le chantier, qui montrent le savoir-faire en conditions réelles.</li>
          <li>• <strong>Les posts comparatifs</strong> : procédé A vs procédé B sur un critère objectif — coût, délai, performance thermique, durabilité.</li>
          <li>• <strong>Les témoignages en citation</strong> : un prescripteur ou un maître d'ouvrage qui recommande votre solution avec ses mots.</li>
          <li>• <strong>Les infographies techniques</strong> : un schéma qui synthétise un cycle, un processus ou une comparaison, facile à mémoriser et à partager.</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="mesurer-impact-ajuster">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Mesurer l'impact et ajuster votre stratégie LinkedIn
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        LinkedIn fournit des indicateurs détaillés au niveau du post et de la page entreprise. Pour un procédé constructif, les métriques utiles ne sont pas les impressions brutes mais le taux d'engagement des décideurs ciblés et les messages reçus en privé après une publication.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le bon indicateur :</p>
        <p className="text-muted-foreground mb-0">
          Le nombre de prescripteurs ou de donneurs d'ordre qui vous contactent directement après avoir vu vos contenus. Ce canal indirect surpasse souvent une prospection commerciale classique en termes de qualité des opportunités générées.
        </p>
      </div>

      <p className="text-muted-foreground mb-4">
        Si l'engagement plafonne après quelques semaines, variez les angles : remplacez un post technique par un contenu sur les tendances réglementaires, les labels ou les retours d'expérience de chantier, qui intéressent un public plus large tout en restant dans votre domaine d'expertise.
      </p>
    </section>

    <section className="mb-16" id="accompagnement-linkedin-procede">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">
          Quand faut-il se faire accompagner sur LinkedIn ?
        </h2>
        <p className="text-muted-foreground mb-4">
          Animer une présence LinkedIn professionnelle pour un procédé constructif demande du temps, de la régularité et une vraie compétence éditoriale. Quand l'équipe interne est déjà mobilisée sur la R&D, la production et la relation commerciale, maintenir un rythme de publication cohérent devient compliqué.
        </p>
        <p className="text-muted-foreground mb-4">
          C'est dans cette situation qu'un accompagnement spécialisé en <strong>stratégie marketing BTP</strong> prend tout son sens : production de contenus adaptés au secteur, planification éditoriale, création visuelle et suivi de performance. L'objectif n'est pas de déléguer la stratégie, mais de professionnaliser son exécution pour qu'elle produise des résultats mesurables.
        </p>
        <p className="text-muted-foreground mb-6">
          Une agence comme Agendac peut structurer cette démarche : diagnostic de votre positionnement actuel, définition des messages clés, production de contenus chantier, et animation quotidienne pour construire une autorité durable autour de votre procédé constructif. Découvrez notre accompagnement en <Link to="/creation-reseaux-sociaux" className="text-primary hover:underline">création et gestion de réseaux sociaux professionnels</Link>.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-valoriser-linkedin">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien de temps faut-il pour voir des résultats sur LinkedIn avec un procédé constructif ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            En général, il faut compter 3 à 6 mois de publication régulière pour commencer à recevoir des messages de prescripteurs ou de donneurs d'ordre intéressés. LinkedIn est un canal de moyen terme qui récompense la constance et la qualité éditoriale, pas les coups ponctuels.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il privilégier une page entreprise ou un profil personnel pour promouvoir un procédé technique ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les deux sont complémentaires. Le profil personnel permet au dirigeant ou au responsable technique d'incarner l'expertise et de créer du lien direct avec les prescripteurs. La page entreprise centralise la marque et les contenus institutionnels. La meilleure stratégie consiste à publier sur les deux, avec des contenus adaptés à chaque format et à chaque audience.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quel budget prévoir pour une stratégie LinkedIn BTP externalisée ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les tarifs varient selon le volume de contenu et le niveau d'accompagnement souhaité. Une agence spécialisée dans la communication BTP propose des formules qui incluent la stratégie éditoriale, la production de contenus visuels, et l'animation quotidienne. Le retour sur investissement se mesure aux contacts prescripteurs générés et aux opportunités commerciales identifiées, pas au nombre de likes.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleValoriserProcedeConstructifLinkedin2026;
