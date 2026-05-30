import { getExam } from "@/lib/exams";
import { notFound } from "next/navigation";
import QuizClient from "./QuizClient";

export function generateStaticParams() {
  return Array.from({ length: 23 }, (_, i) => ({ id: String(i + 1) }));
}

export default async function ExamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const exam = getExam(parseInt(id));
  if (!exam) notFound();

  return <QuizClient exam={exam} />;
}
