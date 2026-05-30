"use client";

import { ExamResult } from "@/lib/types";

const W = 600, H = 200, PAD = 40;

export default function TrendChart({ results }: { results: ExamResult[] }) {
  if (results.length < 2) return null;

  // Chronological order (results come in reverse)
  const data = [...results].reverse();
  const n = data.length;
  const xStep = (W - PAD * 2) / Math.max(n - 1, 1);

  const points = data.map((r, i) => ({
    x: PAD + i * xStep,
    y: PAD + (1 - r.percentage / 100) * (H - PAD * 2),
    pct: r.percentage,
    label: r.examTitle.replace("Practice Exam ", "#"),
  }));

  const polyline = points.map((p) => `${p.x},${p.y}`).join(" ");
  const passY = PAD + (1 - 70 / 100) * (H - PAD * 2);

  return (
    <div className="card-gradient rounded-xl p-4 mb-8 overflow-x-auto">
      <h3 className="text-lg font-bold mb-3">Score Trend</h3>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ minWidth: 400 }}>
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((v) => {
          const y = PAD + (1 - v / 100) * (H - PAD * 2);
          return (
            <g key={v}>
              <line x1={PAD} y1={y} x2={W - PAD} y2={y} stroke="currentColor" strokeOpacity={0.1} />
              <text x={PAD - 8} y={y + 4} textAnchor="end" fontSize={10} fill="currentColor" fillOpacity={0.4}>{v}%</text>
            </g>
          );
        })}

        {/* Pass line */}
        <line x1={PAD} y1={passY} x2={W - PAD} y2={passY} stroke="#22c55e" strokeDasharray="6 4" strokeOpacity={0.5} />
        <text x={W - PAD + 4} y={passY + 4} fontSize={9} fill="#22c55e" fillOpacity={0.7}>70%</text>

        {/* Area fill */}
        <polygon
          points={`${points[0].x},${H - PAD} ${polyline} ${points[n - 1].x},${H - PAD}`}
          fill="#ff9900" fillOpacity={0.08}
        />

        {/* Line */}
        <polyline points={polyline} fill="none" stroke="#ff9900" strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />

        {/* Dots + labels */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={4} fill="#ff9900" />
            <circle cx={p.x} cy={p.y} r={6} fill="#ff9900" fillOpacity={0.2} />
            <text x={p.x} y={p.y - 10} textAnchor="middle" fontSize={10} fontWeight="bold" fill="currentColor" fillOpacity={0.7}>{p.pct}%</text>
            {n <= 15 && (
              <text x={p.x} y={H - PAD + 16} textAnchor="middle" fontSize={8} fill="currentColor" fillOpacity={0.4}>{p.label}</text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
