// This file contains the old PracticeQuiz component for reference
// It has been replaced by the modular QuizComponent system

/*
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Define quiz question type
interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    correct: boolean;
  }[];
  explanation: string;
  tip?: string; // Optional tip for each question
}

// Quiz questions data with added tips
const practiceQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which grip is most versatile for handling a variety of shots including volleys and dinks?",
    options: [
      { text: "Continental Grip", correct: true },
      { text: "Eastern Grip", correct: false },
      { text: "V-Shape Grip", correct: false },
      { text: "Western Grip", correct: false }
    ],
    explanation: "The Continental grip is the most versatile as it allows for easy transitions between forehand and backhand shots without changing grip, making it ideal for fast-paced exchanges at the net.",
    tip: "When teaching Continental grip, have students form a 'V' shape with their thumb and index finger along the edge of the paddle."
  },
  // ... other questions ...
];

export const PracticeQuiz = () => {
  const [quizState, setQuizState] = useState<'splash' | 'question' | 'results'>('splash');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ questionId: number, selected: number, correct: boolean }[]>([]);

  // ... rest of the component ...
};
*/
