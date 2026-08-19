type HexMarkProps = {
  tone?: "amber" | "navy" | "ink";
  children?: React.ReactNode;
  className?: string;
};

/** A small hexagon "cell" used in place of a generic bullet — every feature is one cell of the hive. */
export default function HexMark({ tone = "amber", children, className = "" }: HexMarkProps) {
  const bg =
    tone === "amber" ? "bg-amber" : tone === "navy" ? "bg-navy" : "bg-ink";
  const text = tone === "navy" ? "text-wax" : "text-ink";
  return (
    <span
      className={`hex ${bg} ${text} flex h-8 w-8 shrink-0 items-center justify-center font-mono text-[11px] font-medium ${className}`}
      aria-hidden={typeof children === "undefined"}
    >
      {children}
    </span>
  );
}
