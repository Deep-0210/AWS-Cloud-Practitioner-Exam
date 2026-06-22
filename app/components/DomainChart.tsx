"use client";

import { ExamResult } from "@/lib/types";

const DOMAIN_COLORS: Record<string, { bar: string; text: string }> = {
  "Cloud Concepts": { bar: "bg-blue-500", text: "text-blue-500" },
  "Security & Compliance": { bar: "bg-rose-500", text: "text-rose-500" },
  "Technology": { bar: "bg-violet-500", text: "text-violet-500" },
  "Billing & Pricing": { bar: "bg-emerald-500", text: "text-emerald-500" },
};

export default function DomainChart({ results }: { results: ExamResult[] }) {
  // Aggregate domain scores across all results
  const agg: Record<string, { correct: number; total: number }> = {};
  for (const r of results) {
    if (!r.domainScores) continue;
    for (const ds of r.domainScores) {
      if (!agg[ds.domain]) agg[ds.domain] = { correct: 0, total: 0 };
      agg[ds.domain].correct += ds.correct;
      agg[ds.domain].total += ds.total;
    }
  }

  const domains = Object.entries(agg).map(([domain, { correct, total }]) => ({
    domain,
    correct,
    total,
    pct: parseFloat(((correct / total) * 100).toFixed(2)),
  }));

  if (domains.length === 0) return null;

  domains.sort((a, b) => b.pct - a.pct);

  return (
    <div className="card-gradient rounded-xl p-4 mb-8">
      <h3 className="text-lg font-bold mb-4">Performance by Domain</h3>
      <div className="space-y-4">
        {domains.map((d) => {
          const colors = DOMAIN_COLORS[d.domain] || { bar: "bg-gray-500", text: "text-gray-500" };
          return (
            <div key={d.domain}>
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-sm font-medium ${colors.text}`}>{d.domain}</span>
                <span className="text-sm font-bold">{d.pct}% <span className="text-[color:var(--muted)] font-normal text-xs">({d.correct}/{d.total})</span></span>
              </div>
              <div className="w-full bg-[color:var(--card-border)] rounded-full h-2.5">
                <div className={`h-2.5 rounded-full transition-all duration-700 ${colors.bar}`} style={{ width: `${d.pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
