import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Users,
  TrendingUp,
  Target,
  BadgeCheck,
  Lightbulb,
  Rocket,
} from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleInfluenceursBtpCreateursContenu2026 = () => (
  <div className="prose-custom">
    {/* 1. INTRO BOX */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Les créateurs de contenu ne sont plus réservés aux secteurs du loisir
          ou de la décoration. Dans le bâtiment aussi, ils construisent une
          audience engagée et influencent les décisions d'achat.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Artisans, démonstrateurs de produits, experts métier&nbsp;: ces{" "}
          <strong>nouveaux influenceurs BTP</strong> transforment la manière
          dont les marques du secteur communiquent avec leurs cibles
          professionnelles comme particulières.
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
              <a
                href="#pourquoi-influence-btp"
                className="hover:text-primary transition-colors"
              >
                1. Pourquoi l&apos;influence marketing fonctionne dans le BTP
              </a>
            </li>
            <li>
              <a
                href="#profils-createurs"
                className="hover:text-primary transition-colors"
              >
                2. Les profils de créateurs de contenu dans le bâtiment
              </a>
            </li>
            <li>
              <a
                href="#strategie-influence"
                className="hover:text-primary transition-colors"
              >
                3. Les trois piliers d&apos;une stratégie d&apos;influence gagnante
              </a>
            </li>
            <li>
              <a
                href="#exemples-concrets"
                className="hover:text-primary transition-colors"
              >
                4. Exemples concrets d&apos;influenceurs du bâtiment
              </a>
            </li>
            <li>
              <a
                href="#transparence-reglementation"
                className="hover:text-primary transition-colors"
              >
                5. Transparence et cadre réglementaire
              </a>
            </li>
            <li>
              <a
                href="#faq-influenceurs-btp"
                className="hover:text-primary transition-colors"
              >
                Questions fréquentes
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </section>

    {/* 3. CONTENT SECTIONS */}

    {/* Section 1 : Pourquoi l'influence marketing dans le BTP */}
    <section className="mb-12" id="pourquoi-influence-btp">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi l&apos;influence marketing fonctionne dans le BTP
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Les Français consultent en moyenne 5,7 plateformes sociales chaque mois.
        Près d&apos;un Français sur trois utilise les réseaux sociaux pour
        rechercher des informations sur les marques et les produits, soit une
        progression de plus de 10 % par rapport à 2022.
      </p>

      <p className="text-muted-foreground mb-4">
        Le marketing d&apos;influence pèse désormais plus de 386 millions de
        dollars par an et représente 3,3 % des dépenses publicitaires numériques
        totales. Dans le BTP, ce canal gagne du terrain parce que les décideurs
        et les particuliers cherchant un artisan consultent de plus en plus de
        contenus avant de prendre une décision.
      </p>

      {/* Variant A : soft callout */}
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le bon réflexe :</p>
        <p className="text-muted-foreground mb-0">
          Intégrer le marketing d&apos;influence à votre stratégie de
          communication digitale, c&apos;est capitaliser sur une audience déjà
          engagée plutôt que de repartir de zéro. Les créateurs de contenu du
          bâtiment offrent une <strong>crédibilité immédiate</strong> auprès
          d&apos;une communauté qui leur fait confiance.
        </p>
      </div>
    </section>

    {/* Section 2 : Les profils de créateurs de contenu */}
    <section className="mb-12" id="profils-createurs">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Users size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les profils de créateurs de contenu dans le bâtiment
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        En BtoB, les créateurs de contenu du BTP n&apos;ont pas les mêmes
        profils que les influenceurs BtoC classiques. Ce sont avant tout des
        experts de leur métier : plombiers, carreleurs, menuisiers, peintres...
        Ils partagent leur savoir-faire au quotidien et vulgarisent une
        expertise technique pointue.
      </p>

      <p className="text-muted-foreground mb-4">
        Ces artisans-influenceurs s&apos;adressent aussi bien à un public de
        particuliers bricoleurs qu&apos;à d&apos;autres professionnels en quête
        de conseils techniques. Leur force ? Une légitimité incontestable
        acquise sur le terrain, renforcée par la démonstration concrète de leur
        travail.
      </p>

      {/* Variant B : checklist card */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">
          Ce qui distingue un créateur de contenu BTP d&apos;un influenceur
          classique :
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <BadgeCheck
              size={16}
              className="text-primary mt-0.5 shrink-0"
            />
            Une expertise métier réelle, issue de années de pratique sur les
            chantiers
          </li>
          <li className="flex items-start gap-2">
            <BadgeCheck
              size={16}
              className="text-primary mt-0.5 shrink-0"
            />
            Un contenu démonstratif : gestes techniques, tests de matériaux,
            étapes de chantier en temps réel
          </li>
          <li className="flex items-start gap-2">
            <BadgeCheck
              size={16}
              className="text-primary mt-0.5 shrink-0"
            />
            Une audience de niche, souvent très engagée, composée de confrères
            et de donneurs d&apos;ordre
          </li>
          <li className="flex items-start gap-2">
            <BadgeCheck
              size={16}
              className="text-primary mt-0.5 shrink-0"
            />
            Une capacité à créer du lien entre marques techniques et
            utilisateurs finaux
          </li>
        </ul>
      </div>
    </section>

    {/* Section 3 : Les trois piliers d'une stratégie d'influence */}
    <section className="mb-12" id="strategie-influence">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Target size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les trois piliers d&apos;une stratégie d&apos;influence gagnante
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Pour développer une stratégie d&apos;influence marketing efficace dans
        le BTP, trois composantes essentielles doivent être réunies : la
        pertinence, la portée et la résonance.
      </p>

      {/* Variant D : numbered cards */}
      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            1. La pertinence
          </h3>
          <p className="text-muted-foreground">
            L&apos;influenceur idéal partage du contenu en lien direct avec
            votre secteur d&apos;activité. Il doit s&apos;adresser à un public
            qui correspond à votre marché cible. Un carreleur suivi par des
            artisans du bâtiment sera plus pertinent pour une marque de
            matériaux qu&apos;un influenceur lifestyle générique.
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            2. La portée
          </h3>
          <p className="text-muted-foreground">
            La portée correspond au nombre de personnes que vous pouvez
            atteindre via la base d&apos;abonnés de l&apos;influenceur. Dans le
            BTP, une audience de 50 000 abonnés qualifiés dans la rénovation
            peut avoir plus de valeur que 500 000 abonnés généralistes.
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            3. La résonance
          </h3>
          <p className="text-muted-foreground">
            C&apos;est le niveau d&apos;engagement que l&apos;influenceur
            suscite auprès d&apos;un public pertinent pour votre marque. Le taux
            d&apos;engagement reste le meilleur KPI pour évaluer l&apos;efficacité
            d&apos;une campagne, bien devant le nombre d&apos;abonnés. Ce taux
            varie selon les interactions, la qualité du contenu, l&apos;activité
            du créateur et l&apos;algorithme de la plateforme.
          </p>
        </div>
      </div>
    </section>

    {/* Section 4 : Exemples concrets */}
    <section className="mb-12" id="exemples-concrets">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Lightbulb size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Exemples concrets d&apos;influenceurs du bâtiment
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Plusieurs artisans ont bâti une véritable communauté en ligne autour de
        leur métier. Voici quelques figures incontournables du paysage
        influenceur BTP en France.
      </p>

      {/* Variant D : named cards stack */}
      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            Éric Oblette &ndash; Éric le Carreleur
          </h3>
          <p className="text-muted-foreground">
            Avec plus de 188 000 abonnés sur YouTube, il propose des tutoriels
            détaillés sur la pose de carrelage, teste des matériaux et partage
            chaque étape de ses chantiers sur Facebook et Instagram. Un exemple
            parfait de <strong>créateur de contenu expert</strong> qui inspire
            confiance à sa communauté.
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            Cyril Julien &ndash; French Renovation
          </h3>
          <p className="text-muted-foreground">
            Expert de la peinture Airless, il cumule 193 000 abonnés sur YouTube
            et plus de 350 000 sur TikTok. Ses vidéos suivent l&apos;évolution
            de ses chantiers et fournissent des conseils pratiques très appréciés
            par les professionnels comme par les amateurs éclairés.
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            Laurent Jacquet &ndash; LJVS
          </h3>
          <p className="text-muted-foreground">
            Spécialiste de la plomberie, il partage ses chantiers depuis 2015
            et fédère plus de 326 000 abonnés sur YouTube. Ses contenus mêlent
            astuces techniques, déroulement de chantiers et retours
            d&apos;expérience qui parlent aussi bien aux confrères qu&apos;aux
            particuliers.
          </p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">
            Pascal Blache &ndash; Taka Yaka
          </h3>
          <p className="text-muted-foreground">
            Artisan plaquiste actif depuis 2010, il cumule plus de 204 000
            abonnés sur YouTube, 25 600 sur Instagram et 266 000 sur Facebook.
            Ses vidéos couvrent plusieurs corps de métier de la rénovation et
            constituent une référence pour toute une communauté de professionnels
            du bâtiment.
          </p>
        </div>
      </div>
    </section>

    {/* Section 5 : Transparence et réglementation */}
    <section className="mb-12" id="transparence-reglementation">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Rocket size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Transparence et cadre réglementaire
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Les stratégies d&apos;influence doivent aujourd&apos;hui faire preuve
        de transparence et d&apos;authenticité. En décembre 2022, Bercy a réuni
        les acteurs du secteur pour échanger sur la nécessité d&apos;instaurer
        un marketing d&apos;influence responsable et transparent. Une
        consultation publique a été lancée pour améliorer le cadre des activités
        des créateurs de contenu.
      </p>

      {/* Variant A : soft callout */}
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">À retenir :</p>
        <p className="text-muted-foreground mb-0">
          Les campagnes d&apos;influence doivent jouer la carte de la
          transparence totale : mentions claires des partenariats rémunérés,
          respect des réglementations en vigueur et authenticité dans le
          discours. Un influenceur BTP qui <strong>perd la confiance</strong> de
          sa communauté perd aussi sa valeur pour les marques.
        </p>
      </div>

      <p className="text-muted-foreground mb-4 mt-4">
        Pour les entreprises du BTP qui souhaitent intégrer l&apos;influence
        dans leur stratégie, il est essentiel de sélectionner des créateurs
        alignés avec leurs valeurs et de construire une relation de confiance
        durable, pas seulement une opération ponctuelle.
      </p>
    </section>

    {/* FINAL CTA SECTION */}
    <section className="mb-16" id="cta-influenceurs-btp">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">
          Quand l&apos;influence et la stratégie digitale font la différence
        </h2>
        <p className="text-muted-foreground mb-4">
          Le marketing d&apos;influence dans le BTP n&apos;est pas une mode
          passagère. C&apos;est un canal complémentaire qui, bien utilisé,
          renforce votre crédibilité, élargit votre audience et génère des
          opportunités qualifiées. La clé ? Choisir les bons créateurs,
          construire une relation authentique et mesurer l&apos;impact réel sur
          votre activité.
        </p>
        <p className="text-muted-foreground mb-6">
          Vous souhaitez structurer une stratégie de communication digitale
          complète, incluant l&apos;influence et d&apos;autres leviers
          d&apos;acquisition&nbsp;? Découvrez notre service{" "}
          <Link
            to="/gestion-communication"
            className="text-primary hover:underline"
          >
            de gestion de la communication digitale
          </Link>{" "}
          pour les entreprises du bâtiment et de la rénovation.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ */}
    <section className="mb-12" id="faq-influenceurs-btp">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Questions fréquentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien coûte une campagne d&apos;influence dans le BTP ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les tarifs varient fortement selon la notoriété du créateur, la
            plateforme et le format (post, vidéo, série). Un micro-influenceur
            BTP peut facturer quelques centaines d&apos;euros, tandis qu&apos;un
            créateur établi comme ceux cités dans cet article peut négocier des
            partenaires à plusieurs milliers d&apos;euros. L&apos;essentiel est
            de raisonner en coût par engagement qualifié plutôt qu&apos;en coût
            fixe.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quelles plateformes privilégier pour une campagne d&apos;influence
            BTP ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            YouTube et Facebook dominent encore dans le BTP grâce à la vidéo
            longue et aux communautés engagées. TikTok monte en puissance,
            surtout pour les contenus courts et démonstratifs. LinkedIn est
            pertinent pour le BtoB et les prescripteurs. Le choix dépend de
            votre cible : grand public ou professionnels du secteur.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Comment mesurer le retour sur investissement d&apos;une campagne
            d&apos;influence dans le bâtiment ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les indicateurs clés sont le taux d&apos;engagement (likes, partages,
            commentaires), la portée organique, le trafic référencé vers votre
            site web et, idéalement, le nombre de leads ou de devis générés via
            un lien traqué ou un code promo dédié. Dans le BTP, la notoriété et
            la crédibilité à long terme sont aussi des objectifs légitimes, même
            si plus difficiles à quantifier.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il obligatoirement mentionner qu&apos;un partenariat est
            rémunéré ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui, absolument. La réglementation française impose une mention
            claire et lisible de tout partenariat rémunéré ou avantage reçu
            (produit offert, voyage, etc.). Les mentions
            &laquo;&nbsp;Partenariat commercial&nbsp;&raquo; ou
            &laquo;&nbsp;Sponsorisé par&nbsp;&raquo; doivent apparaître dès le
            début du contenu. Le non-respect expose à des sanctions pouvant
            aller jusqu&apos;à 300 000 euros d&apos;amende.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleInfluenceursBtpCreateursContenu2026;
