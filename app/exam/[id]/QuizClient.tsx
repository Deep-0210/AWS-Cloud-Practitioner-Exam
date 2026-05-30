"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Exam, ExamResult, DomainScore } from "@/lib/types";
import Link from "next/link";

const TIMER_SECONDS = 60 * 60;

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

// Fisher-Yates shuffle
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const DOMAIN_COLORS: Record<string, string> = {
  "Cloud Concepts": "bg-blue-500/10 text-blue-500 border-blue-500/30",
  "Security & Compliance": "bg-rose-500/10 text-rose-500 border-rose-500/30",
  "Technology": "bg-violet-500/10 text-violet-500 border-violet-500/30",
  "Billing & Pricing": "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
};

const DOMAIN_BAR_COLORS: Record<string, string> = {
  "Cloud Concepts": "bg-blue-500",
  "Security & Compliance": "bg-rose-500",
  "Technology": "bg-violet-500",
  "Billing & Pricing": "bg-emerald-500",
};

export default function QuizClient({ exam }: { exam: Exam }) {
  // Shuffle questions and options once on mount, reassigning labels to keep A,B,C,D order
  const shuffledQuestions = useMemo(
    () =>
      shuffle(exam.questions).map((q) => {
        const shuffledOpts = shuffle(q.options);
        // Map original labels to new labels
        const labelMap: Record<string, string> = {};
        const LABELS = ["A", "B", "C", "D", "E"];
        shuffledOpts.forEach((opt, i) => {
          labelMap[opt.label] = LABELS[i];
        });
        return {
          ...q,
          options: shuffledOpts.map((opt, i) => ({ ...opt, label: LABELS[i] })),
          correctAnswers: q.correctAnswers.map((a) => labelMap[a]),
        };
      }),
    [exam.questions]
  );

  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [started, setStarted] = useState(false);
  const [skipped, setSkipped] = useState<Set<number>>(new Set());
  const [showConfirm, setShowConfirm] = useState(false);
  const [paused, setPaused] = useState(false);
  const [mode, setMode] = useState<"exam" | "practice" | null>(null);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [bookmarked, setBookmarked] = useState<Set<number>>(new Set());
  const [reviewingBookmarks, setReviewingBookmarks] = useState(false);
  const [bookmarkIndex, setBookmarkIndex] = useState(0);

  const isPractice = mode === "practice";

  const q = shuffledQuestions[currentQ];
  const answeredCount = Object.values(answers).filter((a) => a.length > 0).length;
  const skippedCount = skipped.size;
  const unansweredCount = shuffledQuestions.length - answeredCount;

  const computeDomainScores = useCallback((): DomainScore[] => {
    const map: Record<string, { correct: number; total: number }> = {};
    for (const q of shuffledQuestions) {
      if (!map[q.domain]) map[q.domain] = { correct: 0, total: 0 };
      map[q.domain].total++;
      const userAns = (answers[q.id] || []).sort().join(",");
      if (userAns === [...q.correctAnswers].sort().join(",")) map[q.domain].correct++;
    }
    return Object.entries(map).map(([domain, { correct, total }]) => ({
      domain,
      correct,
      total,
      percentage: Math.round((correct / total) * 100),
    }));
  }, [shuffledQuestions, answers]);

  const submit = useCallback(() => {
    if (submitted) return;
    let score = 0;
    for (const q of shuffledQuestions) {
      const userAns = (answers[q.id] || []).sort().join(",");
      if (userAns === [...q.correctAnswers].sort().join(",")) score++;
    }
    const domainScores = computeDomainScores();
    const result: ExamResult = {
      examId: exam.id,
      examTitle: exam.title,
      score,
      total: shuffledQuestions.length,
      percentage: Math.round((score / shuffledQuestions.length) * 100),
      date: new Date().toISOString(),
      answers,
      domainScores,
    };
    const existing = JSON.parse(localStorage.getItem("examResults") || "[]");
    existing.push(result);
    localStorage.setItem("examResults", JSON.stringify(existing));
    setSubmitted(true);
  }, [submitted, answers, exam, shuffledQuestions, computeDomainScores]);

  // Timer
  useEffect(() => {
    if (!started || submitted || paused || isPractice) return;
    if (timeLeft <= 0) { submit(); return; }
    const t = setTimeout(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, started, submitted, paused, submit]);

  // Keyboard navigation
  useEffect(() => {
    if (!started || paused) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setCurrentQ((p) => Math.max(0, p - 1));
      if (e.key === "ArrowRight") setCurrentQ((p) => Math.min(shuffledQuestions.length - 1, p + 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [started, paused, shuffledQuestions.length]);

  function toggleAnswer(qId: number, label: string, isMultiple: boolean) {
    if (submitted || paused) return;
    if (isPractice && revealed.has(qId)) return;
    setSkipped((prev) => { const next = new Set(prev); next.delete(qId); return next; });
    setAnswers((prev) => {
      const current = prev[qId] || [];
      if (isMultiple) {
        return { ...prev, [qId]: current.includes(label) ? current.filter((a) => a !== label) : [...current, label] };
      }
      return { ...prev, [qId]: [label] };
    });
  }

  function checkAnswer() {
    setRevealed((prev) => new Set(prev).add(q.id));
  }

  const practiceCorrect = isPractice
    ? shuffledQuestions.filter((q) => revealed.has(q.id) && (answers[q.id] || []).sort().join(",") === [...q.correctAnswers].sort().join(",")).length
    : 0;
  const practiceWrong = isPractice
    ? shuffledQuestions.filter((q) => revealed.has(q.id) && (answers[q.id] || []).sort().join(",") !== [...q.correctAnswers].sort().join(",")).length
    : 0;

  function skipQuestion() {
    setSkipped((prev) => new Set(prev).add(q.id));
    setAnswers((prev) => { const next = { ...prev }; delete next[q.id]; return next; });
    if (currentQ < shuffledQuestions.length - 1) setCurrentQ((p) => p + 1);
  }

  function toggleBookmark(qId: number) {
    setBookmarked((prev) => {
      const next = new Set(prev);
      next.has(qId) ? next.delete(qId) : next.add(qId);
      return next;
    });
  }

  const bookmarkedQuestions = useMemo(
    () => shuffledQuestions.filter((q) => bookmarked.has(q.id)),
    [shuffledQuestions, bookmarked]
  );

  function handleSubmitClick() {
    if (bookmarked.size > 0) {
      setBookmarkIndex(0);
      setReviewingBookmarks(true);
    } else if (unansweredCount > 0) setShowConfirm(true);
    else submit();
  }

  function handleFinalSubmit() {
    setReviewingBookmarks(false);
    const newUnanswered = shuffledQuestions.length - Object.values(answers).filter((a) => a.length > 0).length;
    if (newUnanswered > 0) setShowConfirm(true);
    else submit();
  }

  const score = submitted
    ? shuffledQuestions.filter((q) => {
        const userAns = (answers[q.id] || []).sort().join(",");
        return userAns === [...q.correctAnswers].sort().join(",");
      }).length
    : 0;
  const pct = Math.round((score / shuffledQuestions.length) * 100);
  const passed = pct >= 70;
  const timerUrgent = timeLeft < 300 && timeLeft > 0;
  const timerCritical = timeLeft < 60;
  const domainScores = submitted ? computeDomainScores() : [];

  // Domain tag component
  const DomainTag = ({ domain }: { domain: string }) => (
    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${DOMAIN_COLORS[domain] || "bg-gray-500/10 text-gray-500 border-gray-500/30"}`}>
      {domain}
    </span>
  );

  // Start screen
  if (!started) {
    return (
      <div className="animate-fade-in flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="w-20 h-20 rounded-2xl bg-[#ff9900]/10 text-[#ff9900] flex items-center justify-center text-4xl mb-6">📝</div>
        <h1 className="text-3xl font-bold mb-2">{exam.title}</h1>
        <div className="flex gap-4 text-[color:var(--muted)] mb-4">
          <span>{shuffledQuestions.length} questions</span>
          <span>·</span>
          <span>🔀 Shuffled</span>
        </div>
        <p className="text-sm text-[color:var(--muted)] mb-8">Choose your mode</p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <button onClick={() => { setMode("exam"); setStarted(true); }}
            className="px-8 py-4 rounded-xl bg-[#ff9900] text-white font-semibold text-lg hover:bg-[#e88a00] transition-colors shadow-lg shadow-[#ff9900]/25">
            <span className="text-2xl block mb-1">📝</span>
            Exam Mode
            <span className="block text-xs font-normal mt-1 text-white/70">60 min timer · Scored · 70% to pass</span>
          </button>
          <button onClick={() => { setMode("practice"); setStarted(true); }}
            className="px-8 py-4 rounded-xl border-2 border-[#ff9900] text-[#ff9900] font-semibold text-lg hover:bg-[#ff9900]/10 transition-colors">
            <span className="text-2xl block mb-1">🎯</span>
            Practice Mode
            <span className="block text-xs font-normal mt-1 text-[color:var(--muted)]">No timer · Instant feedback</span>
          </button>
        </div>
        <Link href="/" className="mt-6 text-[color:var(--muted)] hover:text-[#ff9900] transition-colors text-sm">← Back to exams</Link>
      </div>
    );
  }

  // Results screen
  if (submitted) {
    return (
      <div className="animate-fade-in">
        {/* Score banner */}
        <div className={`rounded-2xl p-8 text-center mb-8 ${passed ? "bg-emerald-500/10 border border-emerald-500/30" : "bg-red-500/10 border border-red-500/30"}`}>
          <div className="text-6xl mb-3">{passed ? "🎉" : "📚"}</div>
          <h2 className="text-3xl font-bold mb-1">{score}/{shuffledQuestions.length}</h2>
          <div className={`text-5xl font-black ${passed ? "text-emerald-500" : "text-red-500"}`}>{pct}%</div>
          <p className={`text-lg mt-2 font-medium ${passed ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
            {passed ? "Congratulations! You passed!" : "Keep practicing, you'll get there!"}
          </p>
          <div className="flex gap-3 justify-center mt-6">
            <Link href="/" className="px-5 py-2 rounded-lg bg-[color:var(--card)] border border-[color:var(--card-border)] hover:border-[#ff9900] transition-colors text-sm font-medium">All Exams</Link>
            <Link href="/results" className="px-5 py-2 rounded-lg bg-[#ff9900] text-white text-sm font-medium hover:bg-[#e88a00] transition-colors">View Results</Link>
          </div>
        </div>

        {/* Domain breakdown */}
        <h3 className="text-xl font-bold mb-4">Score by Domain</h3>
        <div className="grid gap-3 mb-8">
          {domainScores.map((ds) => (
            <div key={ds.domain} className="card-gradient rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <DomainTag domain={ds.domain} />
                <span className="text-sm font-bold">{ds.correct}/{ds.total} ({ds.percentage}%)</span>
              </div>
              <div className="w-full bg-[color:var(--card-border)] rounded-full h-2">
                <div className={`h-2 rounded-full transition-all duration-700 ${DOMAIN_BAR_COLORS[ds.domain] || "bg-gray-500"}`} style={{ width: `${ds.percentage}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Review header */}
        <h3 className="text-xl font-bold mb-4">Review Answers</h3>

        {/* Question dots */}
        <div className="flex gap-1.5 flex-wrap mb-6">
          {shuffledQuestions.map((question, i) => {
            const userAns = (answers[question.id] || []).sort().join(",");
            const wasUnanswered = (answers[question.id] || []).length === 0;
            const correct = userAns === [...question.correctAnswers].sort().join(",");
            return (
              <button key={i} onClick={() => setCurrentQ(i)}
                title={wasUnanswered ? `Q${i + 1} (Unanswered)` : correct ? `Q${i + 1} (Correct)` : `Q${i + 1} (Wrong)`}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${i === currentQ ? "ring-2 ring-offset-2 ring-[#ff9900] dark:ring-offset-[#0b1120]" : ""} ${wasUnanswered ? "bg-amber-500 text-white" : correct ? "bg-emerald-500 text-white" : "bg-red-500 text-white"}`}>
                {i + 1}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex gap-4 flex-wrap mb-6 text-xs text-[color:var(--muted)]">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-emerald-500 inline-block" /> Correct</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-red-500 inline-block" /> Incorrect</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-500 inline-block" /> Unanswered</span>
        </div>

        {/* Current question review */}
        <div className={`rounded-xl p-6 animate-slide-in border-2 ${
          (answers[q.id] || []).length === 0
            ? "border-amber-500/50 bg-amber-500/5"
            : (answers[q.id] || []).sort().join(",") === [...q.correctAnswers].sort().join(",")
            ? "border-emerald-500/30 bg-emerald-500/5"
            : "border-red-500/30 bg-red-500/5"
        }`} key={currentQ}>
          {(() => {
            const userAns = (answers[q.id] || []).sort().join(",");
            const isCorrect = userAns === [...q.correctAnswers].sort().join(",");
            const wasSkipped = (answers[q.id] || []).length === 0;
            return (
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${isCorrect ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"}`}>
                  {isCorrect ? "✓ Correct" : wasSkipped ? "⏭ Skipped — Not answered" : "✗ Incorrect"}
                </span>
                <DomainTag domain={q.domain} />
              </div>
            );
          })()}
          <p className="font-semibold text-lg mb-4">
            <span className="text-[#ff9900] mr-2">Q{currentQ + 1}.</span>{q.text}
          </p>
          <div className="space-y-2">
            {q.options.map((opt) => {
              const selected = (answers[q.id] || []).includes(opt.label);
              const isCorrect = q.correctAnswers.includes(opt.label);
              const isWrongPick = selected && !isCorrect;
              let cls = "rounded-xl p-4 border-2 transition-all flex items-start gap-3 ";
              if (isCorrect) cls += "border-emerald-500 bg-emerald-500/10 ";
              else if (isWrongPick) cls += "border-red-500 bg-red-500/10 ";
              else cls += "border-[color:var(--card-border)] opacity-50 ";
              return (
                <div key={opt.label} className={cls}>
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${isCorrect ? "bg-emerald-500 text-white" : isWrongPick ? "bg-red-500 text-white" : "bg-[color:var(--card)] border border-[color:var(--card-border)]"}`}>{opt.label}</span>
                  <div className="flex-1 pt-1">
                    <span>{opt.text}</span>
                    {isCorrect && selected && <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-500 font-medium">✓ Your answer</span>}
                    {isCorrect && !selected && <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-500 font-medium">Correct answer</span>}
                    {isWrongPick && <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-500 font-medium">✗ Your answer</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Review navigation */}
        <div className="flex justify-between mt-6">
          <button onClick={() => setCurrentQ((p) => Math.max(0, p - 1))} disabled={currentQ === 0} className="px-4 py-2 rounded-lg bg-[color:var(--card)] border border-[color:var(--card-border)] disabled:opacity-30 transition-colors hover:border-[#ff9900]">← Prev</button>
          <button onClick={() => setCurrentQ((p) => Math.min(shuffledQuestions.length - 1, p + 1))} disabled={currentQ === shuffledQuestions.length - 1} className="px-4 py-2 rounded-lg bg-[color:var(--card)] border border-[color:var(--card-border)] disabled:opacity-30 transition-colors hover:border-[#ff9900]">Next →</button>
        </div>
      </div>
    );
  }

  // Quiz screen
  return (
    <div className="animate-fade-in">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 truncate mr-4">
          <h1 className="text-xl font-bold truncate">{exam.title}</h1>
          {isPractice && <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/30 font-medium shrink-0">🎯 Practice</span>}
        </div>
        {isPractice ? (
          <div className="flex items-center gap-3 text-sm font-bold shrink-0">
            <span className="text-emerald-500">✓ {practiceCorrect}</span>
            <span className="text-red-500">✗ {practiceWrong}</span>
            <span className="text-[color:var(--muted)]">{revealed.size}/{shuffledQuestions.length}</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button onClick={() => setPaused((p) => !p)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all border ${paused ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/20" : "border-[color:var(--card-border)] text-[color:var(--muted)] hover:border-[#ff9900] hover:text-[#ff9900]"}`}>
              {paused ? "▶ Resume" : "⏸ Pause"}
            </button>
            <div className={`font-mono text-lg font-bold px-4 py-1.5 rounded-lg shrink-0 ${paused ? "bg-blue-500/20 text-blue-500" : timerCritical ? "bg-red-500 text-white timer-urgent" : timerUrgent ? "bg-[#ff9900]/20 text-[#ff9900]" : "bg-[color:var(--card)] border border-[color:var(--card-border)]"}`}>
              {paused ? "⏸" : "⏱"} {formatTime(timeLeft)}
            </div>
          </div>
        )}
      </div>

      {/* Stats bar */}
      <div className="flex items-center gap-4 text-sm text-[color:var(--muted)] mb-4">
        <span>Question {currentQ + 1}/{shuffledQuestions.length}</span>
        <span>·</span>
        <span>{isPractice ? `${revealed.size} checked` : `${answeredCount} answered`}</span>
        {!isPractice && skippedCount > 0 && (<><span>·</span><span className="text-amber-500 font-medium">{skippedCount} skipped</span></>)}
        <span>·</span>
        <span>{shuffledQuestions.length - (isPractice ? revealed.size : answeredCount)} remaining</span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-[color:var(--card-border)] rounded-full h-1.5 mb-6">
        <div className="bg-[#ff9900] h-1.5 rounded-full transition-all duration-500" style={{ width: `${((currentQ + 1) / shuffledQuestions.length) * 100}%` }} />
      </div>

      {/* Question card */}
      {(() => {
        const isRevealed = isPractice && revealed.has(q.id);
        const qUserAns = (answers[q.id] || []).sort().join(",");
        const qIsCorrect = isRevealed && qUserAns === [...q.correctAnswers].sort().join(",");
        return (
          <div className={`card-gradient rounded-xl p-6 mb-6 animate-slide-in ${skipped.has(q.id) ? "ring-2 ring-amber-400/50" : ""} ${isRevealed ? (qIsCorrect ? "ring-2 ring-emerald-500/50" : "ring-2 ring-red-500/50") : ""}`} key={currentQ}>
            <div className="flex items-start gap-3 mb-5">
              <span className="w-10 h-10 rounded-xl bg-[#ff9900] text-white font-bold flex items-center justify-center shrink-0">{currentQ + 1}</span>
              <div className="flex-1">
                <p className="font-semibold text-lg leading-relaxed">{q.text}</p>
                <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                  {skipped.has(q.id) && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-500 font-medium border border-amber-500/30">⏭ Skipped</span>
                  )}
                  {q.isMultiple && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#ff9900]/10 text-[#ff9900] font-medium">Select {q.correctAnswers.length} answers</span>
                  )}
                  {isRevealed && (
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${qIsCorrect ? "bg-emerald-500/15 text-emerald-500 border border-emerald-500/30" : "bg-red-500/15 text-red-500 border border-red-500/30"}`}>
                      {qIsCorrect ? "✓ Correct" : "✗ Incorrect"}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {q.options.map((opt) => {
                const selected = (answers[q.id] || []).includes(opt.label);
                const isCorrect = q.correctAnswers.includes(opt.label);
                const isWrongPick = selected && !isCorrect;

                if (isRevealed) {
                  let cls = "rounded-xl p-4 border-2 transition-all flex items-start gap-3 ";
                  if (isCorrect) cls += "border-emerald-500 bg-emerald-500/10 ";
                  else if (isWrongPick) cls += "border-red-500 bg-red-500/10 ";
                  else cls += "border-[color:var(--card-border)] opacity-50 ";
                  return (
                    <div key={opt.label} className={cls}>
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${isCorrect ? "bg-emerald-500 text-white" : isWrongPick ? "bg-red-500 text-white" : "bg-[color:var(--card)] border border-[color:var(--card-border)]"}`}>{opt.label}</span>
                      <div className="flex-1 pt-1">
                        <span>{opt.text}</span>
                        {isCorrect && selected && <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-500 font-medium">✓ Your answer</span>}
                        {isCorrect && !selected && <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-500 font-medium">Correct answer</span>}
                        {isWrongPick && <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-500 font-medium">✗ Your answer</span>}
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={opt.label} onClick={() => toggleAnswer(q.id, opt.label, q.isMultiple)}
                    className={`rounded-xl p-4 border-2 cursor-pointer transition-all flex items-start gap-3 hover:shadow-md ${selected ? "border-[#ff9900] bg-[#ff9900]/10 shadow-sm" : "border-[color:var(--card-border)] hover:border-[#ff9900]/50"}`}>
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${selected ? "bg-[#ff9900] text-white" : "bg-[color:var(--background)] border border-[color:var(--card-border)]"}`}>{opt.label}</span>
                    <span className="pt-1">{opt.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Check Answer button for practice mode */}
            {isPractice && !isRevealed && (
              <button onClick={checkAnswer} disabled={(answers[q.id] || []).length === 0}
                className="mt-4 w-full py-2.5 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                🔍 Check Answer
              </button>
            )}

            {/* Bookmark button */}
            {!isPractice && (
              <button onClick={() => toggleBookmark(q.id)}
                className={`mt-4 w-full py-2.5 rounded-xl font-semibold transition-colors border-2 ${bookmarked.has(q.id) ? "border-yellow-500 bg-yellow-500/10 text-yellow-500" : "border-[color:var(--card-border)] text-[color:var(--muted)] hover:border-yellow-500/50"}`}>
                {bookmarked.has(q.id) ? "🔖 Bookmarked" : "🏷️ Bookmark for Review"}
              </button>
            )}
          </div>
        );
      })()}

      {/* Question dots */}
      <div className="flex gap-1.5 flex-wrap justify-center mb-6">
        {shuffledQuestions.map((question, i) => {
          const answered = (answers[question.id] || []).length > 0;
          const isSkipped = skipped.has(question.id);
          const isRevealed = revealed.has(question.id);
          const isBookmarked = bookmarked.has(question.id);
          const revCorrect = isRevealed && (answers[question.id] || []).sort().join(",") === [...question.correctAnswers].sort().join(",");
          return (
            <button key={i} onClick={() => setCurrentQ(i)}
              title={isRevealed ? (revCorrect ? `Q${i + 1} (Correct)` : `Q${i + 1} (Wrong)`) : isBookmarked ? `Q${i + 1} (Bookmarked)` : isSkipped ? `Q${i + 1} (Skipped)` : answered ? `Q${i + 1} (Answered)` : `Q${i + 1}`}
              className={`w-7 h-7 rounded-md text-[10px] font-bold transition-all ${
                i === currentQ ? "bg-[#ff9900] text-white dot-active scale-110"
                : isRevealed ? (revCorrect ? "bg-emerald-500 text-white" : "bg-red-500 text-white")
                : isBookmarked ? "bg-yellow-500/30 text-yellow-500 border border-yellow-500/50 ring-1 ring-yellow-500/30"
                : isSkipped ? "bg-amber-400/30 text-amber-500 border border-amber-400/50"
                : answered ? "bg-[#ff9900]/30 text-[#ff9900]"
                : "bg-[color:var(--card)] border border-[color:var(--card-border)] text-[color:var(--muted)]"
              }`}>
              {i + 1}
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button onClick={() => setCurrentQ((p) => Math.max(0, p - 1))} disabled={currentQ === 0}
          className="px-5 py-2.5 rounded-xl bg-[color:var(--card)] border border-[color:var(--card-border)] disabled:opacity-30 transition-all hover:border-[#ff9900] font-medium">← Previous</button>
        {!isPractice && <button onClick={skipQuestion} className="px-5 py-2.5 rounded-xl border-2 border-amber-400/50 text-amber-500 font-medium transition-all hover:bg-amber-400/10 hover:border-amber-400">Skip ⏭</button>}
        {currentQ < shuffledQuestions.length - 1 ? (
          <button onClick={() => setCurrentQ((p) => p + 1)} className="px-5 py-2.5 rounded-xl bg-[color:var(--card)] border border-[color:var(--card-border)] transition-all hover:border-[#ff9900] font-medium">Next →</button>
        ) : isPractice ? (
          <button onClick={submit} className="px-6 py-2.5 rounded-xl bg-[#ff9900] text-white font-semibold hover:bg-[#e88a00] transition-colors shadow-lg shadow-[#ff9900]/25">Finish Practice</button>
        ) : (
          <button onClick={handleSubmitClick} className="px-6 py-2.5 rounded-xl bg-[#ff9900] text-white font-semibold hover:bg-[#e88a00] transition-colors shadow-lg shadow-[#ff9900]/25">Submit Exam ({answeredCount}/{shuffledQuestions.length})</button>
        )}
      </div>

      {bookmarked.size > 0 && !isPractice && (
        <p className="text-center text-xs text-yellow-500 mt-2">🔖 {bookmarked.size} bookmarked — will review before final submission</p>
      )}
      <p className="text-center text-xs text-[color:var(--muted)] mt-2">Use ← → arrow keys to navigate</p>

      {/* Pause overlay */}
      {paused && !isPractice && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-[color:var(--card)] border border-[color:var(--card-border)] rounded-2xl p-8 max-w-sm mx-4 shadow-2xl animate-fade-in text-center">
            <div className="text-5xl mb-4">⏸️</div>
            <h3 className="text-xl font-bold mb-2">Exam Paused</h3>
            <p className="text-sm text-[color:var(--muted)] mb-2">Timer is stopped. Your progress is saved.</p>
            <p className="text-sm text-[color:var(--muted)] mb-6">{answeredCount} answered · {formatTime(timeLeft)} remaining</p>
            <button onClick={() => setPaused(false)} className="w-full px-6 py-3 rounded-xl bg-[#ff9900] text-white font-semibold text-lg hover:bg-[#e88a00] transition-colors shadow-lg shadow-[#ff9900]/25">▶ Resume Exam</button>
          </div>
        </div>
      )}

      {/* Bookmark review overlay */}
      {reviewingBookmarks && bookmarkedQuestions.length > 0 && (() => {
        const bq = bookmarkedQuestions[bookmarkIndex];
        return (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50">
            <div className="bg-[color:var(--card)] border border-[color:var(--card-border)] rounded-2xl p-6 max-w-lg w-full mx-4 shadow-2xl animate-fade-in max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">🔖 Review Bookmarked ({bookmarkIndex + 1}/{bookmarkedQuestions.length})</h3>
                <button onClick={() => { toggleBookmark(bq.id); if (bookmarkedQuestions.length <= 1) { setReviewingBookmarks(false); handleFinalSubmit(); } else if (bookmarkIndex >= bookmarkedQuestions.length - 1) setBookmarkIndex((p) => p - 1); }}
                  className="text-xs px-2 py-1 rounded-lg border border-red-500/30 text-red-500 hover:bg-red-500/10">Remove Bookmark</button>
              </div>
              <p className="font-semibold mb-4"><span className="text-[#ff9900] mr-2">Q{shuffledQuestions.indexOf(bq) + 1}.</span>{bq.text}</p>
              <div className="space-y-2 mb-4">
                {bq.options.map((opt) => {
                  const selected = (answers[bq.id] || []).includes(opt.label);
                  return (
                    <div key={opt.label} onClick={() => toggleAnswer(bq.id, opt.label, bq.isMultiple)}
                      className={`rounded-xl p-3 border-2 cursor-pointer transition-all flex items-start gap-3 ${selected ? "border-[#ff9900] bg-[#ff9900]/10" : "border-[color:var(--card-border)] hover:border-[#ff9900]/50"}`}>
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${selected ? "bg-[#ff9900] text-white" : "bg-[color:var(--background)] border border-[color:var(--card-border)]"}`}>{opt.label}</span>
                      <span className="pt-0.5">{opt.text}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-3">
                <button onClick={() => setBookmarkIndex((p) => Math.max(0, p - 1))} disabled={bookmarkIndex === 0}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-[color:var(--card-border)] font-medium disabled:opacity-30">← Prev</button>
                {bookmarkIndex < bookmarkedQuestions.length - 1 ? (
                  <button onClick={() => setBookmarkIndex((p) => p + 1)}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-[color:var(--card-border)] font-medium hover:border-[#ff9900]">Next →</button>
                ) : (
                  <button onClick={handleFinalSubmit}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#ff9900] text-white font-semibold hover:bg-[#e88a00] transition-colors">Final Submit 🚀</button>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Confirmation modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowConfirm(false)}>
          <div className="bg-[color:var(--card)] border border-[color:var(--card-border)] rounded-2xl p-6 max-w-md mx-4 shadow-2xl animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="text-4xl text-center mb-3">⚠️</div>
            <h3 className="text-lg font-bold text-center mb-2">Submit with unanswered questions?</h3>
            <div className="text-sm text-[color:var(--muted)] text-center space-y-1 mb-6">
              <p>{answeredCount} of {shuffledQuestions.length} questions answered</p>
              {skippedCount > 0 && <p className="text-amber-500 font-medium">{skippedCount} skipped</p>}
              <p>{unansweredCount - skippedCount > 0 ? `${unansweredCount - skippedCount} not attempted` : ""}</p>
              <p className="text-xs mt-2">Unanswered questions will be marked incorrect.</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowConfirm(false)} className="flex-1 px-4 py-2.5 rounded-xl border border-[color:var(--card-border)] font-medium hover:border-[#ff9900] transition-colors">Go Back</button>
              <button onClick={() => { setShowConfirm(false); submit(); }} className="flex-1 px-4 py-2.5 rounded-xl bg-[#ff9900] text-white font-semibold hover:bg-[#e88a00] transition-colors">Submit Anyway</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
