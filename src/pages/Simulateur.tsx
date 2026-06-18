import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
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
import { usePageTitle, useMetaDescription, useCanonical } from "@/hooks/usePageTitle";

const BRAND = "#0074D4";

const eur = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(Math.round(n)) + " €";
const pct = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 }).format(n) + " %";
const num1 = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 }).format(n);

type FieldProps = {
  label: string;
  help?: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  onChange: (v: number) => void;
  locked?: boolean;
};

const Field = ({ label, help, value, min, max, step = 1, suffix, onChange, locked }: FieldProps) => (
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
      disabled={locked}
    />
    {help && <p className="text-xs text-muted-foreground leading-relaxed">{help}</p>}
  </div>
);

const ResultCard = ({
  icon,
  label,
  value,
  sub,
  highlight,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
}) => (
  <Card
    className={
      "p-5 rounded-2xl border-border/60 bg-white shadow-[0_4px_24px_-12px_rgba(0,116,212,0.18)] " +
      (highlight ? "ring-2 ring-[#0074D4] bg-gradient-to-br from-white to-[#EAF4FF]" : "")
    }
  >
    <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground mb-2">
      {icon}
      <span>{label}</span>
    </div>
    <div className={"text-2xl font-bold " + (highlight ? "text-[#0074D4]" : "text-foreground")}>
      {value}
    </div>
    {sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}
  </Card>
);

const Simulateur = () => {
  usePageTitle("Simulateur de rentabilité");
  useMetaDescription(
    "Simulateur Agendac : estimez rendez-vous, chantiers signés, chiffre d'affaires, marge brute et ROI selon votre budget publicitaire.",
  );
  useCanonical("/simulateur");

  // Paramètres
  const [budget, setBudget] = useState(3000);
  const [duration, setDuration] = useState(6);
  const [gestion, setGestion] = useState(1500);
  const [cpa, setCpa] = useState(120);
  const [feeRdv, setFeeRdv] = useState(59);
  const [signRate, setSignRate] = useState(33);
  const [ticketLow, setTicketLow] = useState(4000);
  const [ticketHigh, setTicketHigh] = useState(8000);
  const [margin, setMargin] = useState(30);

  const meta = budget / 2;
  const google = budget / 2;

  const m = useMemo(() => {
    const rdvMois = budget / cpa;
    const rdvTotal = rdvMois * duration;
    const signRatio = signRate / 100;
    const marginRatio = margin / 100;
    const chantiers = rdvTotal * signRatio;
    const fraisRdvMois = rdvMois * feeRdv;
    const investMois = budget + gestion + fraisRdvMois;
    const investTotal = investMois * duration;
    const caLow = chantiers * ticketLow;
    const caHigh = chantiers * ticketHigh;
    const margeLow = caLow * marginRatio;
    const margeHigh = caHigh * marginRatio;
    const roiCaLow = ((caLow - investTotal) / investTotal) * 100;
    const roiCaHigh = ((caHigh - investTotal) / investTotal) * 100;
    const roiMargeLow = ((margeLow - investTotal) / investTotal) * 100;
    const roiMargeHigh = ((margeHigh - investTotal) / investTotal) * 100;

    return {
      rdvMois,
      rdvTotal,
      chantiers,
      fraisRdvMois,
      investMois,
      investTotal,
      caLow,
      caHigh,
      margeLow,
      margeHigh,
      roiCaLow,
      roiCaHigh,
      roiMargeLow,
      roiMargeHigh,
    };
  }, [budget, cpa, duration, gestion, feeRdv, signRate, ticketLow, ticketHigh, margin]);

  // Données mensuelles
  const monthly = useMemo(() => {
    const rows = [] as any[];
    let invCum = 0,
      caLowCum = 0,
      caHighCum = 0,
      margeLowCum = 0,
      margeHighCum = 0;
    for (let i = 1; i <= duration; i++) {
      const rdv = budget / cpa;
      const fraisRdv = rdv * feeRdv;
      const inv = budget + gestion + fraisRdv;
      const chantiers = rdv * (signRate / 100);
      const caL = chantiers * ticketLow;
      const caH = chantiers * ticketHigh;
      const mL = caL * (margin / 100);
      const mH = caH * (margin / 100);
      invCum += inv;
      caLowCum += caL;
      caHighCum += caH;
      margeLowCum += mL;
      margeHighCum += mH;
      rows.push({
        mois: `M${i}`,
        moisLabel: i,
        budget,
        gestion,
        rdv,
        fraisRdv,
        inv,
        chantiers,
        caL,
        caH,
        mL,
        mH,
        invCum,
        caLowCum,
        caHighCum,
        margeLowCum,
        margeHighCum,
        roiCaLow: ((caLowCum - invCum) / invCum) * 100,
        roiCaHigh: ((caHighCum - invCum) / invCum) * 100,
        roiMargeLow: ((margeLowCum - invCum) / invCum) * 100,
        roiMargeHigh: ((margeHighCum - invCum) / invCum) * 100,
      });
    }
    return rows;
  }, [budget, cpa, duration, gestion, feeRdv, signRate, ticketLow, ticketHigh, margin]);

  const repartition = [
    { name: "Publicité", value: budget * duration, color: BRAND },
    { name: "Gestion Agendac", value: gestion * duration, color: "#5BA8E8" },
    { name: "Frais RDV Agendac", value: m.fraisRdvMois * duration, color: "#B5DAF6" },
  ];

  return (
    <div className="min-h-screen bg-[#F6FAFE]">
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
                  help="Budget investi directement en publicité, hors frais de gestion Agendac."
                  value={budget}
                  min={1500}
                  max={10000}
                  step={100}
                  suffix="€"
                  onChange={setBudget}
                />
                <div className="rounded-xl bg-[#F6FAFE] border border-border/50 p-4">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    Répartition publicitaire (50 / 50)
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
                    Par défaut, le simulateur répartit le budget à 50 % sur Meta Ads et 50 % sur Google
                    Ads. Cette répartition peut être ajustée.
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
                  label="Frais de gestion Agendac"
                  help="Ces frais couvrent la gestion, l'optimisation, le suivi et le pilotage des campagnes."
                  value={gestion}
                  min={0}
                  max={5000}
                  step={100}
                  suffix="€ HT/mois"
                  onChange={setGestion}
                />
                <Field
                  label="Coût publicitaire moyen par rendez-vous"
                  help="Le coût publicitaire d'un rendez-vous varie généralement entre 90 € et 150 € selon le marché, la zone géographique, la concurrence et l'offre."
                  value={cpa}
                  min={90}
                  max={150}
                  step={5}
                  suffix="€"
                  onChange={setCpa}
                />
                <Field
                  label="Frais Agendac par rendez-vous (standard)"
                  help="Agendac facture 59 € HT par rendez-vous qualifié menant à un devis envoyé par l'entreprise."
                  value={feeRdv}
                  min={0}
                  max={150}
                  step={1}
                  suffix="€ HT/RDV"
                  onChange={setFeeRdv}
                />
                <Field
                  label="Taux de signature des rendez-vous"
                  help="Par défaut, la simulation considère qu'en moyenne 1 rendez-vous sur 3 est signé."
                  value={signRate}
                  min={10}
                  max={70}
                  step={1}
                  suffix="%"
                  onChange={setSignRate}
                />
                <div className="rounded-xl bg-[#F6FAFE] border border-border/50 p-4 space-y-4">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">
                    Ticket moyen d'un chantier signé
                  </div>
                  <Field
                    label="Ticket moyen bas"
                    value={ticketLow}
                    min={1000}
                    max={20000}
                    step={500}
                    suffix="€"
                    onChange={setTicketLow}
                  />
                  <Field
                    label="Ticket moyen haut"
                    value={ticketHigh}
                    min={1000}
                    max={30000}
                    step={500}
                    onChange={setTicketHigh}
                    suffix="€"
                  />
                  <p className="text-xs text-muted-foreground">
                    Le simulateur calcule une fourchette de chiffre d'affaires avec un chantier moyen
                    compris entre 4 000 € et 8 000 €.
                  </p>
                </div>
                <Field
                  label="Marge brute moyenne"
                  help="Exemple : si votre marge brute est de 30 %, alors 10 000 € de chiffre d'affaires signé représentent environ 3 000 € de marge brute."
                  value={margin}
                  min={10}
                  max={70}
                  step={1}
                  suffix="%"
                  onChange={setMargin}
                />
              </div>
            </Card>

            {/* Résultats */}
            <div className="lg:col-span-3 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                <ResultCard
                  icon={<Calendar size={14} className="text-[#0074D4]" />}
                  label="RDV / mois"
                  value={num1(m.rdvMois)}
                />
                <ResultCard
                  icon={<Calendar size={14} className="text-[#0074D4]" />}
                  label={`RDV sur ${duration} mois`}
                  value={num1(m.rdvTotal)}
                />
                <ResultCard
                  icon={<Target size={14} className="text-[#0074D4]" />}
                  label="Chantiers signés"
                  value={num1(m.chantiers)}
                />
                <ResultCard
                  icon={<Wallet size={14} className="text-[#0074D4]" />}
                  label="Investissement total"
                  value={eur(m.investTotal)}
                  sub={`Soit ${eur(m.investMois)} / mois`}
                />
                <ResultCard
                  icon={<TrendingUp size={14} className="text-[#0074D4]" />}
                  label="CA potentiel"
                  value={`${eur(m.caLow)} – ${eur(m.caHigh)}`}
                />
                <ResultCard
                  icon={<TrendingUp size={14} className="text-[#0074D4]" />}
                  label="Marge brute potentielle"
                  value={`${eur(m.margeLow)} – ${eur(m.margeHigh)}`}
                />
                <ResultCard
                  icon={<PieIcon size={14} className="text-[#0074D4]" />}
                  label="ROI sur CA"
                  value={`${pct(m.roiCaLow)} – ${pct(m.roiCaHigh)}`}
                  sub="Estimation indicative"
                />
                <ResultCard
                  icon={<TrendingUp size={14} className="text-white" />}
                  label="ROI sur marge brute"
                  value={`${pct(m.roiMargeLow)} – ${pct(m.roiMargeHigh)}`}
                  sub="Indicateur le plus réaliste"
                  highlight
                />
              </div>

              {/* Résumé auto */}
              <Card className="p-6 rounded-2xl bg-white border-border/60 shadow-[0_4px_24px_-12px_rgba(0,116,212,0.18)]">
                <h3 className="text-base font-semibold text-foreground mb-3">Résumé de la simulation</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Avec un budget publicitaire mensuel de <strong>{eur(budget)}</strong>, une durée de
                  projection de <strong>{duration} mois</strong>, un coût moyen de{" "}
                  <strong>{eur(cpa)}</strong> par rendez-vous et un taux de signature de{" "}
                  <strong>{pct(signRate)}</strong>, vous pourriez générer environ{" "}
                  <strong>{num1(m.rdvMois)} rendez-vous par mois</strong>, soit{" "}
                  <strong>{num1(m.rdvTotal)} rendez-vous sur la période</strong>. Cela représenterait
                  environ <strong>{num1(m.chantiers)} chantiers signés</strong>, pour un chiffre
                  d'affaires potentiel compris entre <strong>{eur(m.caLow)}</strong> et{" "}
                  <strong>{eur(m.caHigh)}</strong>. Avec une marge brute de{" "}
                  <strong>{pct(margin)}</strong>, la marge brute potentielle serait comprise entre{" "}
                  <strong>{eur(m.margeLow)}</strong> et <strong>{eur(m.margeHigh)}</strong>, à comparer
                  avec un investissement total estimé de <strong>{eur(m.investTotal)}</strong>.
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed mt-3">
                  Le <strong>ROI estimé sur marge brute</strong> serait compris entre{" "}
                  <strong style={{ color: BRAND }}>{pct(m.roiMargeLow)}</strong> et{" "}
                  <strong style={{ color: BRAND }}>{pct(m.roiMargeHigh)}</strong>.
                </p>
              </Card>
            </div>
          </div>

          {/* Graphiques */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-5 rounded-2xl bg-white border-border/60 shadow-[0_4px_24px_-12px_rgba(0,116,212,0.18)]">
              <h3 className="text-base font-semibold text-foreground mb-1">
                Investissement vs CA signé (cumulé)
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                À partir de quel mois le CA potentiel dépasse l'investissement.
              </p>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={monthly}>
                  <defs>
                    <linearGradient id="gInv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#94A3B8" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#94A3B8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gCa" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={BRAND} stopOpacity={0.4} />
                      <stop offset="100%" stopColor={BRAND} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="mois" stroke="#64748B" fontSize={12} />
                  <YAxis stroke="#64748B" fontSize={12} tickFormatter={(v) => `${Math.round(v / 1000)}k`} />
                  <Tooltip formatter={(v: number) => eur(v)} />
                  <Legend />
                  <Area type="monotone" dataKey="invCum" name="Investi cumulé" stroke="#94A3B8" fill="url(#gInv)" />
                  <Area type="monotone" dataKey="caLowCum" name="CA bas cumulé" stroke={BRAND} fill="url(#gCa)" />
                  <Area type="monotone" dataKey="caHighCum" name="CA haut cumulé" stroke="#003F75" fill="none" strokeDasharray="4 4" />
                </AreaChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-5 rounded-2xl bg-white border-border/60 shadow-[0_4px_24px_-12px_rgba(0,116,212,0.18)]">
              <h3 className="text-base font-semibold text-foreground mb-1">Évolution du ROI</h3>
              <p className="text-xs text-muted-foreground mb-4">ROI cumulé mois après mois.</p>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={monthly}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="mois" stroke="#64748B" fontSize={12} />
                  <YAxis stroke="#64748B" fontSize={12} tickFormatter={(v) => `${Math.round(v)}%`} />
                  <Tooltip formatter={(v: number) => pct(v)} />
                  <Legend />
                  <Line type="monotone" dataKey="roiCaLow" name="ROI CA bas" stroke="#94A3B8" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="roiCaHigh" name="ROI CA haut" stroke="#64748B" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="roiMargeLow" name="ROI marge basse" stroke={BRAND} strokeWidth={2.5} dot={false} />
                  <Line type="monotone" dataKey="roiMargeHigh" name="ROI marge haute" stroke="#003F75" strokeWidth={2.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-5 rounded-2xl bg-white border-border/60 shadow-[0_4px_24px_-12px_rgba(0,116,212,0.18)]">
              <h3 className="text-base font-semibold text-foreground mb-1">Marge brute potentielle (cumulée)</h3>
              <p className="text-xs text-muted-foreground mb-4">
                Rentabilité estimée en tenant compte de votre marge réelle.
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
              <p className="text-xs text-muted-foreground mb-4">
                Sur l'ensemble de la période ({duration} mois).
              </p>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={repartition}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                  >
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
                    <th className="py-2 pr-3">Budget pub</th>
                    <th className="py-2 pr-3">Gestion</th>
                    <th className="py-2 pr-3">RDV</th>
                    <th className="py-2 pr-3">Frais RDV</th>
                    <th className="py-2 pr-3">Invest. mois</th>
                    <th className="py-2 pr-3">Chantiers</th>
                    <th className="py-2 pr-3">CA bas</th>
                    <th className="py-2 pr-3">CA haut</th>
                    <th className="py-2 pr-3">Marge basse</th>
                    <th className="py-2 pr-3">Marge haute</th>
                    <th className="py-2 pr-3">ROI marge bas</th>
                    <th className="py-2 pr-3">ROI marge haut</th>
                  </tr>
                </thead>
                <tbody>
                  {monthly.map((r) => (
                    <tr key={r.mois} className="border-b border-border/40 hover:bg-[#F6FAFE]">
                      <td className="py-2 pr-3 font-medium text-foreground">{r.mois}</td>
                      <td className="py-2 pr-3 text-foreground/80">{eur(r.budget)}</td>
                      <td className="py-2 pr-3 text-foreground/80">{eur(r.gestion)}</td>
                      <td className="py-2 pr-3 text-foreground/80">{num1(r.rdv)}</td>
                      <td className="py-2 pr-3 text-foreground/80">{eur(r.fraisRdv)}</td>
                      <td className="py-2 pr-3 font-medium text-foreground">{eur(r.inv)}</td>
                      <td className="py-2 pr-3 text-foreground/80">{num1(r.chantiers)}</td>
                      <td className="py-2 pr-3 text-foreground/80">{eur(r.caL)}</td>
                      <td className="py-2 pr-3 text-foreground/80">{eur(r.caH)}</td>
                      <td className="py-2 pr-3 text-foreground/80">{eur(r.mL)}</td>
                      <td className="py-2 pr-3 text-foreground/80">{eur(r.mH)}</td>
                      <td className="py-2 pr-3 font-semibold" style={{ color: BRAND }}>{pct(r.roiMargeLow)}</td>
                      <td className="py-2 pr-3 font-semibold" style={{ color: BRAND }}>{pct(r.roiMargeHigh)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Détails des calculs */}
          <Card className="mt-8 p-6 rounded-2xl bg-white border-border/60 shadow-[0_4px_24px_-12px_rgba(0,116,212,0.18)]">
            <h3 className="text-lg font-semibold text-foreground mb-4">Comment sont calculés les résultats ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              {[
                ["Nombre de rendez-vous", "Budget pub mensuel ÷ coût moyen par RDV = RDV mensuels"],
                ["Coût total des rendez-vous", "Nombre de RDV × 59 € HT = frais RDV Agendac"],
                ["Dépense totale", "Budget pub + frais de gestion + frais RDV Agendac = dépense totale"],
                ["Chantiers signés", "Nombre de RDV × taux de signature = chantiers signés"],
                ["Chiffre d'affaires potentiel", "Chantiers signés × ticket moyen = CA potentiel"],
                ["Marge brute", "CA potentiel × taux de marge = marge brute potentielle"],
                ["ROI sur marge brute", "(Marge brute − investissement) ÷ investissement × 100 = ROI réel estimé"],
              ].map(([t, f]) => (
                <div key={t} className="rounded-xl bg-[#F6FAFE] border border-border/50 p-3">
                  <div className="text-xs uppercase tracking-wide text-[#0074D4] font-semibold">{t}</div>
                  <div className="text-foreground/80 mt-1">{f}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Le ROI sur marge brute permet d'estimer la rentabilité réelle après prise en compte de la marge
              moyenne de votre entreprise.
            </p>
          </Card>

          {/* Disclaimer */}
          <p className="text-center text-xs text-muted-foreground mt-6 max-w-2xl mx-auto">
            Les résultats affichés sont des estimations. Ils ne constituent pas une garantie de chiffre
            d'affaires ou de rentabilité.
          </p>

          {/* CTA */}
          <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#0074D4] to-[#003F75] p-8 md:p-12 text-center text-white shadow-[0_20px_60px_-20px_rgba(0,116,212,0.5)]">
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
        <div className="mt-16">
          <GoogleReviews />
        </div>
        <ReviewsBands />
        <CaseStudy />
        <ExemplesTournage />
        <YouTubeShorts />
      </main>
      <Footer />
    </div>
  );
};

export default Simulateur;