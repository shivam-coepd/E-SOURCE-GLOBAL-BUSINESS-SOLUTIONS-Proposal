const links = [
  { href: "#model", label: "Dual-Wing Model" },
  { href: "#landscape", label: "Market" },
  { href: "#roadmap", label: "Execution Plan" },
  // { href: "#contact", label: "Get Started" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-wax-line bg-wax/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="hex bg-ink flex h-7 w-7 items-center justify-center text-sm text-wax">🐝</span>
          E-SOURCE GLOBAL BUSINESS SOLUTIONS
          <span className="hidden text-xs font-normal font-mono text-ink/50 sm:inline">
            / proposal
          </span>
        </a>
        <nav className="hidden gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/70 transition hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        {/* <a
          href="#contact"
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-wax transition hover:bg-navy-deep"
        >
          Request the deck
        </a> */}
      </div>
    </header>
  );
}
