import HiveGrid from "./HiveGrid";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_1fr] md:pt-24">
        <div className="reveal">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-deep">
            Project Proposal · E-SOURCE GLOBAL BUSINESS SOLUTIONS EdTech &amp; HR Consulting
          </p>
          <h1 className="mt-5 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl">
            One hive.
            <br />
            <span className="text-amber-deep">Two working</span> wings.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/75">
            A single digital ecosystem where the <strong className="text-ink">Education wing</strong> guides
            students from a 10th-grade roadmap to a work-linked degree, and the{" "}
            <strong className="text-ink">HR wing</strong> turns that same talent pipeline into placements
            for corporate clients — built as a lean, fast lead-generation site first, with a clear path to a
            full SaaS platform.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#roadmap"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-wax transition hover:bg-navy-deep"
            >
              See the 3-phase plan
            </a>
            <a
              href="#model"
              className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition hover:border-ink/50"
            >
              Explore the platform
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-wax-line pt-6">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide text-ink/50">Wings</dt>
              <dd className="font-display text-2xl font-bold">2</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide text-ink/50">Placement fee</dt>
              <dd className="font-display text-2xl font-bold">8.33%</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide text-ink/50">Build phases</dt>
              <dd className="font-display text-2xl font-bold">3</dd>
            </div>
          </dl>
        </div>
        <div className="reveal [animation-delay:150ms]">
          <HiveGrid className="mx-auto w-full max-w-md drop-shadow-sm" />
          <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-wide text-ink/40">
            Amber cells — Education wing &nbsp;·&nbsp; Navy cells — HR wing
          </p>
        </div>
      </div>
      <div className="comb-seam h-3 w-full" />
    </section>
  );
}
