export interface Question {
  id: number;
  text: string;
  options: { label: string; text: string }[];
  correctAnswers: string[]; // e.g. ["A", "B"]
  isMultiple: boolean;
  domain: string;
}

export interface Exam {
  id: number;
  title: string;
  questions: Question[];
}

export interface DomainScore {
  domain: string;
  correct: number;
  total: number;
  percentage: number;
}

export interface ExamResult {
  examId: number;
  examTitle: string;
  score: number;
  total: number;
  percentage: number;
  date: string;
  answers: Record<number, string[]>;
  domainScores?: DomainScore[];
}
