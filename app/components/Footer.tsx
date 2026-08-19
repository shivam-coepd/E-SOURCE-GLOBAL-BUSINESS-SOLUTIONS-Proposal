export default function Footer() {
  return (
    <footer className="bg-ink text-wax/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} APT IT Solutions | Pune, Maharashtra — project proposal.</p>
        <div className="flex gap-6">
          <a href="#model" className="hover:text-wax">
            Dual-Wing Model
          </a>
          <a href="#roadmap" className="hover:text-wax">
            Execution Plan
          </a>
          <a href="#contact" className="hover:text-wax">
            Get Started
          </a>
        </div>
      </div>
    </footer>
  );
}
