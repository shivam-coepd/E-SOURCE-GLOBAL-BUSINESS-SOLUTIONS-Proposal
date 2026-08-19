const phases = [
  {
    num: "01",
    name: "Basic Plan",
    tag: "Lead-Generation MVP",
    stack: "CMS-based framework · Next.js front end · WebP/JPEG-optimised images",
    goal: "Get both wings live fast and start capturing inquiries.",
    items: [
      "Distinct landing pages for the Education wing and the HR wing",
      "Responsive UI, redesigned around the honeycomb system in this proposal",
      "Integrated contact and inquiry forms routed by wing",
      "Aggressive image compression for fast page loads on mobile data"
    ]
  },
  {
    num: "02",
    name: "Advanced Plan",
    tag: "Dynamic Portal",
    stack: "Custom-coded architecture · MySQL schemas",
    goal: "Turn the static pitch into a working tool students and clients can act on.",
    items: [
      "Logic-heavy career roadmap: filters diplomas and degrees by 10th/12th marks",
      "NBFC loan eligibility checker wired to real lending criteria",
      "Initial candidate screening tools for the HR wing's corporate clients",
      "Structured MySQL schemas for programs, students, and job requisitions"
    ]
  },
  {
    num: "03",
    name: "Large-Scale Plan",
    tag: "SaaS Ecosystem",
    stack: "Dedicated dashboards · OpenAI API · Mobile app",
    goal: "Scale from lead-gen site to a full platform, once funding is secured.",
    items: [
      "Separate dashboards for students and corporate clients",
      "Synchronised mobile application across both wings"
    ]
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-deep">Execution strategy</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Ship lean, prove demand, then scale.
        </h2>
        <p className="mt-4 text-ink/70">
          This is a real build order, not a feature menu — each phase is funded by what the previous one
          proves. Phase one is what we build in this engagement; phases two and three are the roadmap we
          scope funding against.
        </p>
      </div>

      <ol className="mt-14 space-y-0">
        {phases.map((p, i) => (
          <li key={p.num} className="relative grid gap-6 border-t border-wax-line py-10 md:grid-cols-[auto_1fr]">
            <div className="flex items-start gap-5 md:w-56">
              <span className="hex flex h-14 w-14 shrink-0 items-center justify-center bg-ink font-mono text-lg font-medium text-wax">
                {p.num}
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-ink/45">{p.tag}</p>
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-navy">{p.goal}</p>
              <p className="mt-1 font-mono text-xs text-ink/45">{p.stack}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {p.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                    <span className="hex mt-1 h-2.5 w-2.5 shrink-0 bg-amber-deep" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
