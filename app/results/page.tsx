"use client";

import { useEffect, useState } from "react";
import { ExamResult } from "@/lib/types";
import Link from "next/link";
import TrendChart from "../components/TrendChart";
import DomainChart from "../components/DomainChart";

export default function ResultsPage() {
  const [results, setResults] = useState<ExamResult[]>([]);

  useEffect(() => {
    setResults(JSON.parse(localStorage.getItem("examResults") || "[]").reverse());
  }, []);

  function clearResults() {
    localStorage.removeItem("examResults");
    setResults([]);
  }

  const avgScore = results.length
    ? parseFloat((results.reduce((s, r) => s + r.percentage, 0) / results.length).toFixed(2))
    : 0;
  const passCount = results.filter((r) => r.percentage >= 70).length;
  const bestScore = results.length ? Math.max(...results.map((r) => r.percentage)) : 0;

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Results</h1>
        {results.length > 0 && (
          <button onClick={clearResults} className="text-sm text-red-500 hover:underline">Clear All</button>
        )}
      </div>

      {results.length === 0 ? (
        <div className="text-center py-20 text-[color:var(--muted)]">
          <div className="text-5xl mb-4">📊</div>
          <p className="text-lg mb-2">No results yet</p>
          <Link href="/" className="text-[#ff9900] hover:underline">Take a practice exam →</Link>
        </div>
      ) : (
        <>
          {/* Stats summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="card-gradient rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">{results.length}</p>
              <p className="text-sm text-[color:var(--muted)]">Attempts</p>
            </div>
            <div className="card-gradient rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">{avgScore}%</p>
              <p className="text-sm text-[color:var(--muted)]">Avg Score</p>
            </div>
            <div className="card-gradient rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#ff9900]">{bestScore}%</p>
              <p className="text-sm text-[color:var(--muted)]">Best Score</p>
            </div>
            <div className="card-gradient rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-emerald-500">{passCount}/{results.length}</p>
              <p className="text-sm text-[color:var(--muted)]">Passed</p>
            </div>
          </div>

          {/* Trend chart */}
          <TrendChart results={results} />

          {/* Domain breakdown */}
          <DomainChart results={results} />

          {/* Results list */}
          <h3 className="text-lg font-bold mb-4">All Attempts</h3>
          <div className="space-y-3">
            {results.map((r, i) => (
              <div key={i} className="card-gradient rounded-xl p-5 flex justify-between items-center">
                <div>
                  <p className="font-semibold">{r.examTitle}</p>
                  <p className="text-sm text-[color:var(--muted)] mt-1">
                    {new Date(r.date).toLocaleDateString()} at {new Date(r.date).toLocaleTimeString()}
                  </p>
                  {r.domainScores && (
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {r.domainScores.map((ds) => (
                        <span key={ds.domain} className="text-[10px] px-1.5 py-0.5 rounded bg-[color:var(--card-border)] text-[color:var(--muted)]">
                          {ds.domain.split(" ")[0]} {ds.percentage}%
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-right shrink-0 ml-4">
                  <p className="text-lg font-bold">{r.score}/{r.total}</p>
                  <p className={`text-sm font-bold ${r.percentage >= 70 ? "text-emerald-500" : "text-red-500"}`}>
                    {r.percentage}% {r.percentage >= 70 ? "✅" : "❌"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
