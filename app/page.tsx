import { getAllExams } from "@/lib/exams";
import Link from "next/link";

export default function Home() {
  const exams = getAllExams();

  return (
    <div className="animate-fade-in">
      <p className="sr-only">
        Free AWS Certified Cloud Practitioner (CLF-C02) practice exams. Study with 23 full-length
        mock tests covering AWS core services, cloud concepts, security, pricing models, and the
        shared responsibility model. No sign-up required. Ideal for first-time AWS certification
        candidates preparing for the CLF-C02 exam.
      </p>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          AWS Cloud Practitioner
          <span className="text-[#ff9900]"> Practice Exams</span>
        </h1>
        <p className="text-[color:var(--muted)] text-lg">
          {exams.length} exams · {exams.reduce((s, e) => s + e.questionCount, 0)} questions · 60 min each
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {exams.map((exam, i) => (
          <Link key={exam.id} href={`/exam/${exam.id}`} className="card-gradient rounded-xl p-5 group">
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-lg bg-[#ff9900]/10 text-[#ff9900] font-bold flex items-center justify-center text-sm group-hover:bg-[#ff9900] group-hover:text-white transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-[#ff9900]/10 text-[#ff9900] font-medium">
                {exam.questionCount}Q
              </span>
            </div>
            <h2 className="font-semibold text-lg mt-3">{exam.title}</h2>
            <div className="flex items-center gap-2 mt-2 text-sm text-[color:var(--muted)]">
              <span>⏱ 60 min</span>
              <span>·</span>
              <span>70% to pass</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
