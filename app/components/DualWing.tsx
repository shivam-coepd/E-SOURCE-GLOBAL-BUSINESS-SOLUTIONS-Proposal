import HexMark from "./HexMark";

const educationFeatures = [
  {
    title: "Work-linked degree programs",
    body: "Two years of accredited study followed by two years of paid, structured internships — built as a filterable catalog, not a static PDF."
  },
  {
    title: "Career roadmap for 10th & 12th grade",
    body: "A guided, question-by-question path that turns a student's stream and marks into a shortlist of diploma and degree options."
  },
  {
    title: "NBFC loan eligibility checker",
    body: "A short eligibility form that screens a student against partner-NBFC lending criteria before they ever pick up the phone."
  },
  {
    title: "Partner-university showcase",
    body: "Dedicated profile pages so partner institutions can be evaluated, compared, and pitched to enrolling students."
  }
];

const hrFeatures = [
  {
    title: "Corporate hiring, freshers to experienced",
    body: "A single intake funnel for companies hiring straight from the education wing's graduating cohorts or from the open market."
  },
  {
    title: "8.33% placement fee, made explicit",
    body: "Pricing and process shown upfront — statutory-fee framing that corporate HR teams already recognise and trust."
  },
  {
    title: "Manpower & staffing services",
    body: "Bulk and contract staffing requests, positioned against the TeamLease-style B2B outsourcing model clients already know."
  },
  {
    title: "Candidate screening intake",
    body: "Structured client-side forms today; the foundation for ATS-style scoring once the platform reaches the SaaS phase."
  }
];

function WingColumn({
  eyebrow,
  title,
  tone,
  features
}: {
  eyebrow: string;
  title: string;
  tone: "amber" | "navy";
  features: { title: string; body: string }[];
}) {
  const accent = tone === "amber" ? "text-amber-deep" : "text-navy";
  const panel = tone === "amber" ? "bg-wax-deep/60" : "bg-navy-deep text-wax";
  const border = tone === "amber" ? "border-amber/30" : "border-navy-pale/40";

  return (
    <div className={`rounded-3xl border ${border} ${panel} p-8`}>
      <p className={`font-mono text-xs uppercase tracking-[0.2em] ${tone === "amber" ? accent : "text-amber"}`}>
        {eyebrow}
      </p>
      <h3 className="mt-2 font-display text-2xl font-bold">{title}</h3>
      <ul className="mt-7 space-y-5">
        {features.map((f) => (
          <li key={f.title} className="flex gap-4">
            <HexMark tone={tone} />
            <div>
              <p className="font-medium">{f.title}</p>
              <p className={`mt-1 text-sm leading-relaxed ${tone === "navy" ? "text-wax/75" : "text-ink/70"}`}>
                {f.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DualWing() {
  return (
    <section id="model" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-deep">The platform</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Two combs, one hive.
        </h2>
        <p className="mt-4 text-ink/70">
          E-SOURCE GLOBAL BUSINESS SOLUTIONS runs two franchise wings from a single brand. The site needs to serve both audiences
          without either one feeling like an afterthought on the other's homepage.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <WingColumn
          eyebrow="Wing 01 — E-SOURCE GLOBAL BUSINESS SOLUTIONS EdTech"
          title="Education & admissions"
          tone="amber"
          features={educationFeatures}
        />
        <WingColumn
          eyebrow="Wing 02 — E-SOURCE GLOBAL BUSINESS SOLUTIONS HR"
          title="Corporate & staffing"
          tone="navy"
          features={hrFeatures}
        />
      </div>
    </section>
  );
}
