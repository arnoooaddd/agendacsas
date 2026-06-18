import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Calculator,
  TrendingUp,
  Calendar,
  Wallet,
  Target,
  PieChart as PieIcon,
  ArrowRight,
  Phone,
  Info,
  Download,
  Star,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudy from "@/components/CaseStudy";
import GoogleReviews from "@/components/GoogleReviews";
import ReviewsBands from "@/components/ReviewsBands";
import ExemplesTournage from "@/components/ExemplesTournage";
import YouTubeShorts from "@/components/YouTubeShorts";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import anthonyProperzioPhoto from "@/assets/anthony-properzio.png";
import { usePageTitle, useMetaDescription, useCanonical } from "@/hooks/usePageTitle";

const BRAND = "#0074D4";

// Constantes Agendac (non modifiables côté utilisateur)
const GESTION_PUB = 1500;       // €/mois — frais de gestion publicitaire Agendac
const FEE_RDV = 59;             // € HT — frais secrétariat / prise de rendez-vous
const SIGN_RATE = 0.35;         // 35 % — taux de signature moyen des partenaires Agendac
const CPA_LOW = 110;            // € — coût publicitaire bas par RDV
const CPA_HIGH = 170;           // € — coût publicitaire haut par RDV
const SETUP_TOURNAGE = 1000;    // € — frais de tournage au démarrage (one-shot)
const SEO_FEE = 250;            // €/mois — option SEO Agendac
const SEO_RDV_LOW = 1;          // RDV supplémentaires bas avec SEO activé
const SEO_RDV_HIGH = 2;         // RDV supplémentaires haut avec SEO activé
const SIGN_DELAY_DAYS = 21;     // ~3 semaines de réflexion entre un RDV et la signature

const eur = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(Math.round(n)) + " €";
const pct = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 }).format(n) + " %";
const num1 = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 }).format(n);
const range = (a: number, b: number, fn: (n: number) => string) =>
  Math.round(a) === Math.round(b) ? fn(a) : `${fn(a)} – ${fn(b)}`;

type FieldProps = {
  label: string;
  help?: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  onChange: (v: number) => void;
};

const Field = ({ label, help, value, min, max, step = 1, suffix, onChange }: FieldProps) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between gap-3">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="flex items-center gap-1 rounded-lg border border-border bg-white px-2 py-1">
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (Number.isFinite(v)) onChange(Math.min(max, Math.max(min, v)));
          }}
          className="w-20 bg-transparent text-right text-sm font-semibold text-foreground outline-none"
        />
        {suffix && <span className="text-xs text-muted-foreground">{suffix}</span>}
      </div>
    </div>
    <Slider
      value={[value]}
      min={min}
      max={max}
      step={step}
      onValueChange={(v) => onChange(v[0])}
      className="[&_[role=slider]]:border-[#0074D4] [&_[role=slider]]:bg-white [&>span:first-child>span]:bg-[#0074D4]"
    />
    {help && <p className="text-xs text-muted-foreground leading-relaxed">{help}</p>}
  </div>
);

const ResultCard = ({
  icon,
  label,
  value,
  rangeLow,
  rangeHigh,
  sub,
  formula,
  highlight,
}: {
  icon?: React.ReactNode;
  label: string;
  value?: string;
  rangeLow?: string;
  rangeHigh?: string;
  sub?: string;
  formula?: string;
  highlight?: boolean;
}) => (
  <Card
    className={
      "p-5 rounded-2xl border-border/60 bg-white shadow-[0_4px_24px_-12px_rgba(0,116,212,0.18)] flex flex-col " +
      (highlight ? "ring-2 ring-[#0074D4] bg-gradient-to-br from-white to-[#EAF4FF]" : "")
    }
  >
    <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground mb-2">
      {icon}
      <span>{label}</span>
    </div>
    {rangeLow && rangeHigh ? (
      <div className="space-y-0.5">
        <div className={"text-base md:text-lg font-bold " + (highlight ? "text-[#0074D4]" : "text-foreground")}>
          max. : {rangeHigh}
        </div>
        <div className="text-sm font-medium text-muted-foreground">
          min. : {rangeLow}
        </div>
      </div>
    ) : (
      <div className={"text-xl md:text-2xl font-bold " + (highlight ? "text-[#0074D4]" : "text-foreground")}>
        {value}
      </div>
    )}
    {sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}
    {formula && (
      <div className="text-[11px] text-muted-foreground mt-2 pt-2 border-t border-border/40 leading-relaxed">
        {formula}
      </div>
    )}
  </Card>
);

const Simulateur = () => {
  usePageTitle("Simulateur de rentabilité");
  useMetaDescription(
    "Simulateur Agendac : estimez rendez-vous, chantiers signés, chiffre d'affaires, marge brute et ROI selon votre budget publicitaire.",
  );
  useCanonical("/simulateur");

  // Variables ajustables uniquement
  const [budget, setBudget] = useState(3000);
  const [duration, setDuration] = useState(6);
  const [ticket, setTicket] = useState(6000);
  const [margin, setMargin] = useState(30);
  const [seo, setSeo] = useState(false);

  // Répartition pub : 100 % Meta < 2500 €, sinon 50/50
  const meta = budget < 2500 ? budget : budget / 2;
  const google = budget < 2500 ? 0 : budget / 2;
  const splitLabel = budget < 2500 ? "100 % Meta Ads" : "50 % Meta / 50 % Google";

  const m = useMemo(() => {
    const pubRdvHigh = budget / CPA_LOW;   // CPA bas => plus de RDV
    const pubRdvLow = budget / CPA_HIGH;
    const seoRdvLow = seo ? SEO_RDV_LOW : 0;
    const seoRdvHigh = seo ? SEO_RDV_HIGH : 0;
    const rdvMoisLow = pubRdvLow + seoRdvLow;
    const rdvMoisHigh = pubRdvHigh + seoRdvHigh;
    const rdvTotalLow = rdvMoisLow * duration;
    const rdvTotalHigh = rdvMoisHigh * duration;

    const chantiersLow = rdvTotalLow * SIGN_RATE;
    const chantiersHigh = rdvTotalHigh * SIGN_RATE;

    const fraisRdvMoisLow = rdvMoisLow * FEE_RDV;
    const fraisRdvMoisHigh = rdvMoisHigh * FEE_RDV;
    const seoMonthly = seo ? SEO_FEE : 0;

    const investMoisLow = budget + GESTION_PUB + fraisRdvMoisLow + seoMonthly;
    const investMoisHigh = budget + GESTION_PUB + fraisRdvMoisHigh + seoMonthly;
    const investTotalLow = investMoisLow * duration + SETUP_TOURNAGE;
    const investTotalHigh = investMoisHigh * duration + SETUP_TOURNAGE;

    const caLow = chantiersLow * ticket;
    const caHigh = chantiersHigh * ticket;
    const marginRatio = margin / 100;
    const margeLow = caLow * marginRatio;
    const margeHigh = caHigh * marginRatio;

    const gainNetLow = margeLow - investTotalHigh;
    const gainNetHigh = margeHigh - investTotalLow;

    const roiMargeLow = ((margeLow - investTotalHigh) / investTotalHigh) * 100;
    const roiMargeHigh = ((margeHigh - investTotalLow) / investTotalLow) * 100;

    return {
      pubRdvLow, pubRdvHigh, seoRdvLow, seoRdvHigh,
      rdvMoisLow, rdvMoisHigh, rdvTotalLow, rdvTotalHigh,
      chantiersLow, chantiersHigh,
      fraisRdvMoisLow, fraisRdvMoisHigh, seoMonthly,
      investMoisLow, investMoisHigh, investTotalLow, investTotalHigh,
      caLow, caHigh, margeLow, margeHigh,
      gainNetLow, gainNetHigh,
      roiMargeLow, roiMargeHigh,
    };
  }, [budget, duration, ticket, margin, seo]);

  // Vue mensuelle (pour le tableau de détail et le graphique marge)
  const monthly = useMemo(() => {
    const rows: any[] = [];
    let invCum = 0,
      margeLowCum = 0,
      margeHighCum = 0;
    for (let i = 1; i <= duration; i++) {
      const inv = (m.investMoisLow + m.investMoisHigh) / 2 + (i === 1 ? SETUP_TOURNAGE : 0);
      const chantiersL = m.rdvMoisLow * SIGN_RATE;
      const chantiersH = m.rdvMoisHigh * SIGN_RATE;
      const caL = chantiersL * ticket;
      const caH = chantiersH * ticket;
      const mL = caL * (margin / 100);
      const mH = caH * (margin / 100);
      invCum += inv;
      margeLowCum += mL;
      margeHighCum += mH;
      rows.push({
        mois: `M${i}`,
        rdvL: m.rdvMoisLow,
        rdvH: m.rdvMoisHigh,
        invMoyen: inv,
        chantiersL,
        chantiersH,
        caL, caH, mL, mH,
        invCum, margeLowCum, margeHighCum,
      });
    }
    return rows;
  }, [m, duration, ticket, margin]);

  // Courbe de trésorerie quotidienne (variable, réaliste)
  const cashflow = useMemo(() => {
    const days = duration * 30;
    const rows: { jour: number; tresorerie: number }[] = [];
    const rdvParJourMoyen = ((m.rdvMoisLow + m.rdvMoisHigh) / 2) / 30;
    let cash = 0;
    const wiggle = (i: number) => {
      const s = Math.sin(i * 12.9898) * 43758.5453;
      return s - Math.floor(s);
    };
    for (let d = 1; d <= days; d++) {
      const jourDuMois = ((d - 1) % 30) + 1;
      if (d === 1) cash -= SETUP_TOURNAGE;
      if (jourDuMois === 1) {
        cash -= GESTION_PUB;
        if (seo) cash -= SEO_FEE;
      }
      // Pub étalée avec variabilité ±25 %
      cash -= (budget / 30) * (0.75 + 0.5 * wiggle(d + 7));
      // Frais secrétariat pour les RDV pris dans la journée
      const rdvJour = rdvParJourMoyen * (0.6 + 0.8 * wiggle(d + 31));
      cash -= rdvJour * FEE_RDV;
      // Encaissements décalés de 3 semaines
      const dRdv = d - SIGN_DELAY_DAYS;
      if (dRdv >= 1) {
        const rdvSource = rdvParJourMoyen * (0.6 + 0.8 * wiggle(dRdv + 31));
        const chantiers = rdvSource * SIGN_RATE;
        cash += chantiers * ticket * (margin / 100);
      }
      rows.push({ jour: d, tresorerie: cash });
    }
    return rows;
  }, [budget, duration, ticket, margin, seo, m.rdvMoisLow, m.rdvMoisHigh]);

  const repartition = [
    { name: "Publicité", value: budget * duration, color: BRAND },
    { name: "Gestion publicitaire Agendac", value: GESTION_PUB * duration, color: "#5BA8E8" },
    { name: "Frais secrétariat (RDV)", value: ((m.fraisRdvMoisLow + m.fraisRdvMoisHigh) / 2) * duration, color: "#B5DAF6" },
    { name: "Tournage (one-shot)", value: SETUP_TOURNAGE, color: "#003F75" },
    ...(seo ? [{ name: "Option SEO Agendac", value: SEO_FEE * duration, color: "#83C0EF" }] : []),
  ];

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-[#F6FAFE] print:bg-white">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0074D4]/20 bg-white px-4 py-1.5 mb-5 shadow-sm">
              <Calculator size={14} className="text-[#0074D4]" />
              <span className="text-xs font-medium text-foreground/80">Outil de simulation</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Simulateur de rentabilité <span style={{ color: BRAND }}>Agendac</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Estimez vos rendez-vous, votre chiffre d'affaires potentiel, votre marge brute et votre
              retour sur investissement selon votre budget publicitaire.
            </p>
            <div className="mt-5 flex items-start gap-2 text-xs md:text-sm text-muted-foreground bg-white/70 border border-border/60 rounded-xl p-3 text-left">
              <Info size={16} className="shrink-0 mt-0.5 text-[#0074D4]" />
              <p>
                Cette simulation est indicative. Les résultats peuvent varier selon votre zone
                géographique, votre offre, votre réactivité commerciale, votre taux de transformation,
                votre panier moyen et la concurrence locale.
              </p>
            </div>
            <div className="mt-4 flex justify-center print:hidden">
              <Button
                variant="outline"
                onClick={handlePrint}
                className="border-[#0074D4]/30 text-[#0074D4] hover:bg-[#0074D4]/5"
              >
                <Download size={16} className="mr-2" />
                Télécharger la simulation en PDF
              </Button>
            </div>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Paramètres */}
            <Card className="lg:col-span-2 p-6 rounded-2xl bg-white shadow-[0_4px_24px_-12px_rgba(0,116,212,0.18)] border-border/60">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#0074D4]/10 flex items-center justify-center">
                  <Target size={16} className="text-[#0074D4]" />
                </span>
                Paramètres de simulation
              </h2>
              <div className="space-y-6">
                <Field
                  label="Budget publicitaire mensuel"
                  help="Budget investi directement en publicité (hors frais Agendac)."
                  value={budget}
                  min={1500}
                  max={10000}
                  step={100}
                  suffix="€"
                  onChange={setBudget}
                />
                <div className="rounded-xl bg-[#F6FAFE] border border-border/50 p-4">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    Répartition publicitaire — {splitLabel}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-white border border-border/60 p-3">
                      <div className="text-xs text-muted-foreground">Meta Ads</div>
                      <div className="text-lg font-bold text-[#0074D4]">{eur(meta)}</div>
                    </div>
                    <div className="rounded-lg bg-white border border-border/60 p-3">
                      <div className="text-xs text-muted-foreground">Google Ads</div>
                      <div className="text-lg font-bold text-[#0074D4]">{eur(google)}</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    En dessous de 2 500 € de budget mensuel, 100 % est alloué à Meta Ads. Au-delà, le budget est réparti à 50 / 50 entre Meta Ads et Google Ads.
                  </p>
                </div>

                <Field
                  label="Durée de projection"
                  value={duration}
                  min={3}
                  max={12}
                  step={1}
                  suffix="mois"
                  onChange={setDuration}
                />

                <Field
                  label="Ticket moyen d'un chantier signé"
                  help="Montant moyen d'un chantier signé. Fourchette indicative : 3 500 € à 12 000 €."
                  value={ticket}
                  min={3500}
                  max={12000}
                  step={500}
                  suffix="€"
                  onChange={setTicket}
                />

                <Field
                  label="Marge brute moyenne"
                  help="Exemple : avec 30 % de marge brute, 10 000 € de CA signé représentent 3 000 € de marge brute."
                  value={margin}
                  min={10}
                  max={70}
                  step={1}
                  suffix="%"
                  onChange={setMargin}
                />

                {/* Option SEO */}
                <div className="rounded-xl bg-[#F6FAFE] border border-border/50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-foreground">Option SEO Agendac</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        +250 € HT/mois — ajoute en moyenne 1 à 2 rendez-vous supplémentaires par mois en complément des rendez-vous générés par la publicité.
                      </div>
                    </div>
                    <Switch checked={seo} onCheckedChange={setSeo} />
                  </div>
                </div>

                {/* Constantes Agendac */}
                <div className="rounded-xl bg-white border border-dashed border-[#0074D4]/30 p-4">
                  <div className="text-xs uppercase tracking-wide text-[#0074D4] font-semibold mb-2">
                    Constantes Agendac (non modifiables)
                  </div>
                  <ul className="text-xs text-foreground/80 space-y-1.5">
                    <li>• <strong>Gestion publicitaire</strong> : 1 500 € HT / mois</li>
                    <li>• <strong>Frais secrétariat (prise de RDV)</strong> : 59 € HT / RDV</li>
                    <li>• <strong>Coût publicitaire par RDV</strong> : 110 € à 170 € (fourchette)</li>
                    <li>• <strong>Taux de signature moyen partenaires</strong> : 35 %</li>
                    <li>• <strong>Tournage initial</strong> : 1 000 € (one-shot, au démarrage)</li>
                    <li>• <strong>Délai moyen de réflexion</strong> : ~ 3 semaines entre RDV et signature</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Résultats */}
            <div className="lg:col-span-3 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                <ResultCard
                  icon={<Calendar size={14} className="text-[#0074D4]" />}
                  label="RDV / mois"
                  rangeLow={num1(m.rdvMoisLow)}
                  rangeHigh={num1(m.rdvMoisHigh)}
                  sub={seo ? `dont +${SEO_RDV_LOW}–${SEO_RDV_HIGH} via SEO` : "issus de la publicité"}
                  formula={`Budget pub ÷ coût par RDV (${CPA_LOW}–${CPA_HIGH} €)${seo ? ` + ${SEO_RDV_LOW}–${SEO_RDV_HIGH} RDV SEO` : ""}`}
                />
                <ResultCard
                  icon={<Calendar size={14} className="text-[#0074D4]" />}
                  label={`RDV sur ${duration} mois`}
                  rangeLow={num1(m.rdvTotalLow)}
                  rangeHigh={num1(m.rdvTotalHigh)}
                  formula={`RDV mensuels × ${duration} mois`}
                />
                <ResultCard
                  icon={<Target size={14} className="text-[#0074D4]" />}
                  label="Chantiers signés"
                  rangeLow={num1(m.chantiersLow)}
                  rangeHigh={num1(m.chantiersHigh)}
                  formula={`Total RDV × ${Math.round(SIGN_RATE * 100)} % de signature`}
                />
                <ResultCard
                  icon={<Wallet size={14} className="text-[#0074D4]" />}
                  label="Investissement total"
                  rangeLow={eur(m.investTotalLow)}
                  rangeHigh={eur(m.investTotalHigh)}
                  sub={`Tournage ${eur(SETUP_TOURNAGE)} + ~${eur((m.investMoisLow + m.investMoisHigh) / 2)} / mois`}
                  formula={`Pub + gestion (${eur(GESTION_PUB)}) + secrétariat${seo ? ` + SEO (${eur(SEO_FEE)})` : ""} + tournage`}
                />
                <ResultCard
                  icon={<TrendingUp size={14} className="text-[#0074D4]" />}
                  label="CA potentiel"
                  rangeLow={eur(m.caLow)}
                  rangeHigh={eur(m.caHigh)}
                  formula={`Chantiers signés × ticket moyen (${eur(ticket)})`}
                />
                <ResultCard
                  icon={<TrendingUp size={14} className="text-[#0074D4]" />}
                  label="Marge brute potentielle"
                  rangeLow={eur(m.margeLow)}
                  rangeHigh={eur(m.margeHigh)}
                  formula={`CA potentiel × ${margin} % de marge brute`}
                />
                <ResultCard
                  icon={<Wallet size={14} className="text-[#0074D4]" />}
                  label="Gain net estimé"
                  rangeLow={eur(m.gainNetLow)}
                  rangeHigh={eur(m.gainNetHigh)}
                  sub="Marge brute − investissement total"
                  formula={`Marge brute − (pub + gestion + secrétariat + tournage${seo ? ` + SEO` : ""})`}
                />
                <ResultCard
                  icon={<PieIcon size={14} className="text-white" />}
                  label="ROI sur marge brute"
                  rangeLow={pct(m.roiMargeLow)}
                  rangeHigh={pct(m.roiMargeHigh)}
                  sub="Indicateur le plus réaliste"
                  formula="(Marge brute − investissement) ÷ investissement"
                  highlight
                />
              </div>

              {/* Résumé auto */}
              <Card className="p-6 rounded-2xl bg-white border-border/60 shadow-[0_4px_24px_-12px_rgba(0,116,212,0.18)]">
                <h3 className="text-base font-semibold text-foreground mb-3">Résumé de la simulation</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Avec un budget publicitaire mensuel de <strong>{eur(budget)}</strong>, une durée de
                  projection de <strong>{duration} mois</strong>, un coût publicitaire compris entre{" "}
                  <strong>{eur(CPA_LOW)}</strong> et <strong>{eur(CPA_HIGH)}</strong> par rendez-vous et un taux de signature moyen partenaires de{" "}
                  <strong>{pct(SIGN_RATE * 100)}</strong>, vous pourriez générer entre{" "}
                  <strong>{num1(m.rdvMoisLow)}</strong> et <strong>{num1(m.rdvMoisHigh)} rendez-vous par mois</strong>
                  {seo ? ` (dont ${SEO_RDV_LOW} à ${SEO_RDV_HIGH} issus de l'option SEO)` : ""}, soit{" "}
                  <strong>{num1(m.rdvTotalLow)} à {num1(m.rdvTotalHigh)} rendez-vous sur la période</strong>. Cela représenterait{" "}
                  <strong>{num1(m.chantiersLow)} à {num1(m.chantiersHigh)} chantiers signés</strong>, pour un chiffre
                  d'affaires potentiel compris entre <strong>{eur(m.caLow)}</strong> et{" "}
                  <strong>{eur(m.caHigh)}</strong>. Avec une marge brute de{" "}
                  <strong>{pct(margin)}</strong>, la marge brute potentielle serait comprise entre{" "}
                  <strong>{eur(m.margeLow)}</strong> et <strong>{eur(m.margeHigh)}</strong>, à comparer
                  avec un investissement total estimé entre <strong>{eur(m.investTotalLow)}</strong> et{" "}
                  <strong>{eur(m.investTotalHigh)}</strong>.
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed mt-3">
                  Le <strong>ROI estimé sur marge brute</strong> serait compris entre{" "}
                  <strong style={{ color: BRAND }}>{pct(m.roiMargeLow)}</strong> et{" "}
                  <strong style={{ color: BRAND }}>{pct(m.roiMargeHigh)}</strong>.
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  Note : un délai moyen d'environ 3 semaines est appliqué entre un rendez-vous pris et la signature effective. Les encaissements apparaissent donc avec ce décalage sur la courbe de trésorerie.
                </p>
              </Card>

              {/* Avis Anthony PROPERZIO (desktop) */}
              <Card className="hidden lg:block p-6 rounded-2xl bg-white border-border/60 shadow-[0_4px_24px_-12px_rgba(0,116,212,0.18)]">
                <div className="flex items-center gap-2 mb-4">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-medium text-muted-foreground">Avis Google vérifié</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={anthonyProperzioPhoto}
                    alt="Anthony PROPERZIO"
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground truncate">Anthony PROPERZIO</p>
                    <p className="text-xs text-muted-foreground">Stores et Fenêtres du Golfe · Mai 2026</p>
                  </div>
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                    alt="Google"
                    className="w-5 h-5 flex-shrink-0"
                  />
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  J'ai actuellement le plaisir de pouvoir collaborer avec Agendac et je ne peux que mettre en avant leur travail exceptionnel. L'identité de cette agence de communication se repose sur des bases saines et solides. Dès le premier contact, l'ambiance s'est révélée à la fois dynamique et conviviale, ce qui rend chaque échange agréable. Leurs compétences ont été cruciales pour donner vie à mes demandes : ils allient créativité, rigueur et une vraie expertise stratégique. Le suivi est irréprochable : ils prennent le temps de comprendre chaque besoin, restent disponibles et assurent une proximité rassurante. Je remercie Arnaud, Kérim, Omar et tout particulièrement Manon, qui, avec moi, passe du temps à sans cesse améliorer les différents points importants de notre collaboration pour booster le rendement de l'entreprise. Je recommande donc cette agence les yeux fermés à quiconque cherche un partenaire fiable, créatif et à l'écoute.
                </p>
              </Card>
            </div>
          </div>

          {/* Graphiques */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Courbe de trésorerie variable */}
            <Card className="lg:col-span-2 p-5 rounded-2xl bg-white border-border/60 shadow-[0_4px_24px_-12px_rgba(0,116,212,0.18)]">
              <h3 className="text-base font-semibold text-foreground mb-1">
                Évolution de la trésorerie (jour par jour)
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                Au démarrage, la trésorerie passe immédiatement dans le rouge : tournage ({eur(SETUP_TOURNAGE)}) + frais de gestion Agendac ({eur(GESTION_PUB)}){seo ? ` + option SEO (${eur(SEO_FEE)})` : ""}. La publicité et les frais de rendez-vous se répartissent ensuite au fil du mois. Les premiers chantiers signés génèrent du chiffre d'affaires avec environ 3 semaines de décalage, ce qui inverse progressivement la courbe.
              </p>
              <ResponsiveContainer width="100%" height={320}>
                <AreaChart data={cashflow}>
                  <defs>
                    <linearGradient id="gCash" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={BRAND} stopOpacity={0.4} />
                      <stop offset="100%" stopColor={BRAND} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis
                    dataKey="jour"
                    stroke="#64748B"
                    fontSize={11}
                    tickFormatter={(v) => `J${v}`}
                    interval={Math.max(1, Math.floor(cashflow.length / 12))}
                  />
                  <YAxis stroke="#64748B" fontSize={11} tickFormatter={(v) => `${Math.round(v / 1000)}k`} />
                  <Tooltip
                    formatter={(v: number) => eur(v)}
                    labelFormatter={(v) => `Jour ${v}`}
                  />
                  <Area
                    type="monotone"
                    dataKey="tresorerie"
                    name="Trésorerie cumulée"
                    stroke={BRAND}
                    strokeWidth={2}
                    fill="url(#gCash)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-5 rounded-2xl bg-white border-border/60 shadow-[0_4px_24px_-12px_rgba(0,116,212,0.18)]">
              <h3 className="text-base font-semibold text-foreground mb-1">Marge brute potentielle (cumulée)</h3>
              <p className="text-xs text-muted-foreground mb-4">
                Rentabilité estimée mois après mois en tenant compte de votre marge brute.
              </p>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={monthly}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="mois" stroke="#64748B" fontSize={12} />
                  <YAxis stroke="#64748B" fontSize={12} tickFormatter={(v) => `${Math.round(v / 1000)}k`} />
                  <Tooltip formatter={(v: number) => eur(v)} />
                  <Legend />
                  <Bar dataKey="margeLowCum" name="Marge basse cumulée" fill="#5BA8E8" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="margeHighCum" name="Marge haute cumulée" fill={BRAND} radius={[6, 6, 0, 0]} />
                  <Line type="monotone" dataKey="invCum" name="Investi cumulé" stroke="#94A3B8" strokeWidth={2} dot={false} />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-5 rounded-2xl bg-white border-border/60 shadow-[0_4px_24px_-12px_rgba(0,116,212,0.18)]">
              <h3 className="text-base font-semibold text-foreground mb-1">Répartition des dépenses</h3>
              <p className="text-xs text-muted-foreground mb-4">Sur l'ensemble de la période ({duration} mois).</p>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie data={repartition} dataKey="value" nameKey="name" innerRadius={60} outerRadius={100} paddingAngle={2}>
                    {repartition.map((r) => (
                      <Cell key={r.name} fill={r.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v: number) => eur(v)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Tableau mensuel */}
          <Card className="mt-8 p-5 rounded-2xl bg-white border-border/60 shadow-[0_4px_24px_-12px_rgba(0,116,212,0.18)] overflow-hidden">
            <h3 className="text-base font-semibold text-foreground mb-4">Détail mois par mois</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground border-b border-border/60">
                    <th className="py-2 pr-3">Mois</th>
                    <th className="py-2 pr-3">RDV (bas)</th>
                    <th className="py-2 pr-3">RDV (haut)</th>
                    <th className="py-2 pr-3">Invest. mois</th>
                    <th className="py-2 pr-3">Chantiers</th>
                    <th className="py-2 pr-3">CA bas</th>
                    <th className="py-2 pr-3">CA haut</th>
                    <th className="py-2 pr-3">Marge basse</th>
                    <th className="py-2 pr-3">Marge haute</th>
                  </tr>
                </thead>
                <tbody>
                  {monthly.map((r) => (
                    <tr key={r.mois} className="border-b border-border/40 hover:bg-[#F6FAFE]">
                      <td className="py-2 pr-3 font-medium text-foreground">{r.mois}</td>
                      <td className="py-2 pr-3 text-foreground/80">{num1(r.rdvL)}</td>
                      <td className="py-2 pr-3 text-foreground/80">{num1(r.rdvH)}</td>
                      <td className="py-2 pr-3 font-medium text-foreground">{eur(r.invMoyen)}</td>
                      <td className="py-2 pr-3 text-foreground/80">
                        {num1(r.chantiersL)} – {num1(r.chantiersH)}
                      </td>
                      <td className="py-2 pr-3 text-foreground/80">{eur(r.caL)}</td>
                      <td className="py-2 pr-3 text-foreground/80">{eur(r.caH)}</td>
                      <td className="py-2 pr-3 text-foreground/80">{eur(r.mL)}</td>
                      <td className="py-2 pr-3 text-foreground/80">{eur(r.mH)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Disclaimer */}
          <p className="text-center text-xs text-muted-foreground mt-6 max-w-2xl mx-auto">
            Les résultats affichés sont des estimations. Ils ne constituent pas une garantie de chiffre
            d'affaires ou de rentabilité.
          </p>

          {/* CTA */}
          <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#0074D4] to-[#003F75] p-8 md:p-12 text-center text-white shadow-[0_20px_60px_-20px_rgba(0,116,212,0.5)] print:hidden">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Vous voulez une projection adaptée à votre entreprise ?
            </h3>
            <p className="text-white/85 max-w-2xl mx-auto mb-6">
              Chaque zone, chaque métier et chaque panier moyen sont différents. Agendac peut vous aider à
              estimer une stratégie réaliste selon votre marché.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-white text-[#0074D4] hover:bg-white/90">
                <Link to="/prise-rendez-vous">
                  Demander une projection personnalisée <ArrowRight size={16} className="ml-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/prise-rendez-vous">
                  <Phone size={16} className="mr-1" /> Réserver un appel avec Agendac
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Preuves sociales */}
        <div className="mt-16 print:hidden">
          <GoogleReviews />
        </div>
        <div className="print:hidden">
          <ReviewsBands />
          <CaseStudy />
          <ExemplesTournage />
          <YouTubeShorts />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Simulateur;
