// Common types for quiz components
export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    correct: boolean;
  }[];
  explanation: string;
  tip?: string; // Optional tip for each question
  category: string; // Category/topic the question belongs to
  difficulty: 'basic' | 'intermediate' | 'advanced'; // Difficulty level
}

export interface UserAnswer {
  questionId: number;
  selected: number;
  correct: boolean;
}

export type QuizMode = 'section' | 'midterm' | 'final';

export interface QuizConfig {
  title: string;
  description: string;
  questionCount: number; // Number of questions to include
  passingScore: number; // Percentage required to pass
  timeLimit?: number; // Optional time limit in minutes
  categories?: string[]; // Optional specific categories to include
  showTips: boolean; // Whether to show teaching tips
}

export const quizConfigurations: Record<QuizMode, QuizConfig> = {
  section: {
    title: "Section Quiz",
    description: "Test your knowledge on specific pickleball teaching concepts. This short quiz focuses on key topics from the current section.",
    questionCount: 5,
    passingScore: 60,
    showTips: true
  },
  midterm: {
    title: "Midterm Assessment",
    description: "This comprehensive midterm covers multiple sections of the PPR Level 2 curriculum. Test your progress before moving on to advanced concepts.",
    questionCount: 10,
    passingScore: 70,
    timeLimit: 15,
    showTips: true
  },
  final: {
    title: "Final Comprehensive Test",
    description: "The final assessment covers the entire PPR Level 2 certification material. Successfully completing this test indicates readiness for certification.",
    questionCount: 20,
    passingScore: 80,
    timeLimit: 30,
    showTips: false
  }
};
