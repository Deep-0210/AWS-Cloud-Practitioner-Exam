import { getAllTopicExams } from "@/lib/topics";
import Link from "next/link";

export default function TopicsPage() {
  const topics = getAllTopicExams();

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          Topic-wise <span className="text-[#ff9900]">Practice Exams</span>
        </h1>
        <p className="text-[color:var(--muted)] text-lg">
          Master specific topics from the AWS Cloud Practitioner guide.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <Link key={topic.id} href={`/topic/${topic.id}`} className="card-gradient rounded-xl p-5 group">
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-lg bg-[#ff9900]/10 text-[#ff9900] font-bold flex items-center justify-center text-sm group-hover:bg-[#ff9900] group-hover:text-white transition-colors">
                {String(topic.id).padStart(2, "0")}
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-[#ff9900]/10 text-[#ff9900] font-medium">
                {topic.questionCount}Q
              </span>
            </div>
            <h2 className="font-semibold text-lg mt-3">{topic.title.replace(/^Topic \d+:\s*/, '')}</h2>
            <div className="flex items-center gap-2 mt-2 text-sm text-[color:var(--muted)]">
              <span>📚 Topic Focus</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
