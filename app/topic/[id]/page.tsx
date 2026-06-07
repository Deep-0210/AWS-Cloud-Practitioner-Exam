import { getTopicExam, getAllTopicExams } from "@/lib/topics";
import { notFound } from "next/navigation";
import QuizClient from "../../exam/[id]/QuizClient";

export function generateStaticParams() {
  const topics = getAllTopicExams();
  return topics.map((t) => ({ id: String(t.id) }));
}

export default async function TopicExamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const exam = getTopicExam(parseInt(id));
  if (!exam) notFound();

  return <QuizClient exam={exam} />;
}
