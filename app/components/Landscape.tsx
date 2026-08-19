const rows = [
  {
    lane: "Education & career guidance",
    player: "Career Makers",
    does: "Admission guidance and one-to-one student counseling.",
    gap: "Counseling-led, not a self-serve digital roadmap — no loan checker, no online degree filtering."
  },
  {
    lane: "Work-integrated learning",
    player: "Internshala · UpGrad",
    does: "Outcome-driven learning blended with certification and placement programs.",
    gap: "Course-and-certificate model, not a university-backed work-linked degree with a built-in internship."
  },
  {
    lane: "HR staffing",
    player: "TeamLease",
    does: "B2B manpower outsourcing and candidate screening at scale.",
    gap: "Pure staffing play with no upstream education pipeline feeding it fresh, pre-screened graduates."
  }
];

export default function Landscape() {
  return (
    <section id="landscape" className="border-y border-wax-line bg-wax-deep/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-navy">Where E-SOURCE GLOBAL BUSINESS SOLUTIONS sits</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            No one else owns both ends of the pipeline.
          </h2>
          <p className="mt-4 text-ink/70">
            Each competitor is strong on one side of the funnel. E-SOURCE GLOBAL BUSINESS SOLUTION's advantage is structural: the
            students the education wing enrolls are the same graduates the HR wing places.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-wax-line bg-wax">
          <div className="hidden grid-cols-[1fr_1.4fr_1.4fr] gap-4 border-b border-wax-line bg-ink px-8 py-4 text-wax md:grid">
            <span className="font-mono text-xs uppercase tracking-wide">Lane</span>
            <span className="font-mono text-xs uppercase tracking-wide">What they do well</span>
            <span className="font-mono text-xs uppercase tracking-wide">Where E-SOURCE GLOBAL BUSINESS SOLUTIONS differs</span>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.player}
              className={`grid gap-3 px-8 py-7 md:grid-cols-[1fr_1.4fr_1.4fr] md:gap-4 ${
                i !== rows.length - 1 ? "border-b border-wax-line" : ""
              }`}
            >
              <div>
                <p className="text-xs font-mono uppercase tracking-wide text-ink/40">{r.lane}</p>
                <p className="mt-1 font-display text-lg font-bold">{r.player}</p>
              </div>
              <p className="text-sm leading-relaxed text-ink/70">{r.does}</p>
              <p className="text-sm leading-relaxed text-amber-deep">{r.gap}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
