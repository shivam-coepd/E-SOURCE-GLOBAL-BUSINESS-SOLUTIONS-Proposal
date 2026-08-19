type HiveGridProps = {
  className?: string;
};

/**
 * The signature visual: two interlocking fields of hexagon "cells" — amber for the
 * Education wing, navy for the HR wing — meeting at a shared seam. It is the same
 * hive-and-honeycomb idea that gives TeamBeez its name, rendered as the structure
 * of the business itself: one hive, two combs, many cells.
 */
export default function HiveGrid({ className = "" }: HiveGridProps) {
  const hexPath = (cx: number, cy: number, r: number) => {
    const pts = Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI / 180) * (60 * i - 30);
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    });
    return pts.join(" ");
  };

  const r = 34;
  const w = r * Math.sqrt(3);
  const h = r * 1.5;

  const cells: { cx: number; cy: number; wing: "amber" | "navy"; delay: number }[] = [];
  const cols = 9;
  const rows = 6;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = col * w + (row % 2 ? w / 2 : 0) + 40;
      const cy = row * h + 40;
      const wing = col + row < 7 ? "amber" : "navy";
      cells.push({ cx, cy, wing, delay: (row + col) * 0.03 });
    }
  }

  return (
    <svg
      viewBox="0 0 580 340"
      className={className}
      role="img"
      aria-label="Interlocking honeycomb grid representing the Education and HR wings of E-SOURCE GLOBAL BUSINESS SOLUTIONS"
    >
      <defs>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#1B1A17" floodOpacity="0.12" />
        </filter>
      </defs>
      {cells.map((c, i) => (
        <polygon
          key={i}
          points={hexPath(c.cx, c.cy, r - 3)}
          fill={c.wing === "amber" ? "#F2A93B" : "#21324A"}
          fillOpacity={c.wing === "amber" ? 0.9 : 0.92}
          stroke="#F7EEDA"
          strokeWidth={3}
          style={{
            transformOrigin: `${c.cx}px ${c.cy}px`,
            animation: `hive-pop 0.6s ease-out ${c.delay}s both`
          }}
        />
      ))}
      <style>{`
        @keyframes hive-pop {
          from { opacity: 0; transform: scale(0.4); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          polygon { animation: none !important; opacity: 1; }
        }
      `}</style>
    </svg>
  );
}
