export type CategoryId = 
  | 'principes-symboles'
  | 'histoire-figures'
  | 'institutions-politique'
  | 'droits-devoirs'
  | 'geographie-culture'
  | 'entretien-oral';

export interface Question {
  id: string;
  category: CategoryId;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  officialReference: string; // e.g. "Livret du citoyen - Chapitre 1"
  difficulty: 'facile' | 'moyen' | 'piege';
  isCommonInterviewQuestion?: boolean;
}

export interface ExamResult {
  date: string;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  timeSpentSeconds: number;
  answers: {
    questionId: string;
    selectedOption: number;
    isCorrect: boolean;
  }[];
}

export interface KeyDate {
  year: string;
  event: string;
  description: string;
  category: 'revolution' | 'republique' | 'guerre' | 'droits' | 'moderne';
}

export interface OfficialSection {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  summary: string;
  keyPoints: string[];
  commonQuestions: {
    q: string;
    a: string;
    tip?: string;
  }[];
  officialQuote?: string;
}

export interface Flashcard {
  id: string;
  category: CategoryId;
  front: string;
  back: string;
  details?: string;
}

export interface CommentItem {
  id: string;
  author: string;
  prefecture?: string;
  statusBadge: string;
  rating: number; // 1 to 5
  content: string;
  date: string;
  likes: number;
  liked?: boolean;
}
