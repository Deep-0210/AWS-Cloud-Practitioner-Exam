import fs from "fs";
import path from "path";
import { Exam, Question } from "./types";
import { classifyDomain } from "./domains";

const TOPICS_DIR = path.join(
  process.cwd(),
  "AWS-Certified-Cloud-Practitioner-Notes/topic-wise-exam"
);

function parseTopicMarkdown(content: string, topicId: number): Exam {
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : `Topic ${topicId}`;

  const questions: Question[] = [];

  const questionBlocks = content.split(/\n(?=\d+\.\s)/);

  for (const block of questionBlocks) {
    const qMatch = block.match(/^(\d+)\.\s+([\s\S]*?)(?=\n\s+-\s+[A-E]\.)/);
    if (!qMatch) continue;

    const qId = parseInt(qMatch[1]);
    const qText = qMatch[2].trim().replace(/<br\s*\/?>/g, " ").replace(/\s+/g, " ");

    const options: { label: string; text: string }[] = [];
    const optionRegex = /-\s+([A-E])\.\s+(.+)/g;
    let optMatch;
    while ((optMatch = optionRegex.exec(block)) !== null) {
      options.push({ label: optMatch[1], text: optMatch[2].trim() });
    }

    const answerMatch = block.match(/Correct [Aa]nswer:\s*([^\n<]+)/i);
    let correctAnswers: string[] = [];
    if (answerMatch) {
      const raw = answerMatch[1].replace(/and/gi, ",").trim();
      const split = raw.split(/[,\s]+/).map((a) => a.trim().toUpperCase()).filter((a) => /^[A-E]$/.test(a));
      if (split.length > 1 || raw.includes(',') || raw.includes(' ')) {
        correctAnswers = split;
      } else {
        correctAnswers = raw.replace(/[^A-Ea-e]/g, "").toUpperCase().split("").filter((a) => /^[A-E]$/.test(a));
      }
    }

    if (options.length > 0 && correctAnswers.length > 0) {
      const optionsText = options.map((o) => o.text).join(" ");
      questions.push({
        id: qId,
        text: qText,
        options,
        correctAnswers,
        isMultiple: correctAnswers.length > 1,
        domain: classifyDomain(qText, optionsText),
      });
    }
  }

  return { id: topicId, title, questions };
}

export function getTopicExam(id: number): Exam | null {
  const filePath = path.join(TOPICS_DIR, `topic-${id}.md`);
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, "utf-8");
  return parseTopicMarkdown(content, id);
}

export function getAllTopicExams(): { id: number; title: string; questionCount: number }[] {
  const topics: { id: number; title: string; questionCount: number }[] = [];
  for (let i = 1; i <= 14; i++) {
    const topic = getTopicExam(i);
    if (topic && topic.questions.length > 0) {
      topics.push({ id: topic.id, title: topic.title, questionCount: topic.questions.length });
    }
  }
  return topics;
}
