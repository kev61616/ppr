import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { QuizQuestion, UserAnswer, QuizMode, quizConfigurations } from './QuizTypes';
import { getRandomQuestions } from './QuestionDatabase';

interface QuizComponentProps {
  mode: QuizMode;
  categories?: string[];
  onComplete?: (score: number, totalQuestions: number) => void;
}

export const QuizComponent = ({ mode = 'section', categories, onComplete }: QuizComponentProps) => {
  // Get configuration based on mode
  const config = quizConfigurations[mode];
  
  // States
  const [quizState, setQuizState] = useState<'splash' | 'question' | 'results'>('splash');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(config.timeLimit ? config.timeLimit * 60 : null);
  
  // Load questions
  useEffect(() => {
    setQuestions(getRandomQuestions(config.questionCount, categories));
  }, [config.questionCount, categories]);
  
  // Timer for timed quizzes
  useEffect(() => {
    if (quizState === 'question' && timeRemaining !== null && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0) {
      // Auto-submit when time runs out
      setQuizState('results');
    }
  }, [quizState, timeRemaining]);
  
  const startQuiz = () => {
    setQuizState('question');
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
    if (config.timeLimit) {
      setTimeRemaining(config.timeLimit * 60);
    }
  };

  const handleOptionSelect = (optionIndex: number, isCorrect: boolean) => {
    if (selectedOptionIndex !== null) return; // Prevent changing answer
    
    setSelectedOptionIndex(optionIndex);
    setShowFeedback(true);
    
    // Record the answer
    setUserAnswers([...userAnswers, {
      questionId: questions[currentQuestionIndex].id,
      selected: optionIndex,
      correct: isCorrect
    }]);
    
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionIndex(null);
      setShowFeedback(false);
    } else {
      setQuizState('results');
      if (onComplete) {
        onComplete(score, questions.length);
      }
    }
  };

  const restartQuiz = () => {
    // Get a new set of questions
    setQuestions(getRandomQuestions(config.questionCount, categories));
    
    // Reset quiz state
    setQuizState('splash');
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setShowFeedback(false);
    setScore(0);
    setUserAnswers([]);
    if (config.timeLimit) {
      setTimeRemaining(config.timeLimit * 60);
    }
  };

  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const renderQuizSplash = () => (
    <div className="text-center py-8 bg-white rounded-lg shadow-lg p-8">
      <div className="w-20 h-20 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-6">
        <FontAwesomeIcon icon="question-circle" className="text-primary-600 text-4xl" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{config.title}</h3>
      <p className="mb-6">{config.description}</p>
      <div className="space-y-4 max-w-md mx-auto mb-6">
        <div className="flex items-center text-left">
          <FontAwesomeIcon icon="check" className="text-green-500 mr-3" />
          <span>{config.questionCount} questions covering {categories ? categories.join(", ") : "essential PPR Level 2 concepts"}</span>
        </div>
        {config.timeLimit && (
          <div className="flex items-center text-left">
            <FontAwesomeIcon icon="clock" className="text-blue-500 mr-3" />
            <span>Time limit: {config.timeLimit} minutes</span>
          </div>
        )}
        <div className="flex items-center text-left">
          <FontAwesomeIcon icon="trophy" className="text-amber-500 mr-3" />
          <span>Passing score: {config.passingScore}%</span>
        </div>
      </div>
      <button 
        onClick={startQuiz} 
        className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center mx-auto"
      >
        <span>Start {config.title}</span>
        <FontAwesomeIcon icon="arrow-right" className="ml-2" />
      </button>
    </div>
  );

  const renderQuestion = () => {
    if (questions.length === 0) return <div>Loading questions...</div>;
    
    const question = questions[currentQuestionIndex];
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-primary-700 text-white px-6 py-4 flex justify-between items-center">
          <h3 className="font-medium flex items-center">
            <FontAwesomeIcon icon="question-circle" className="mr-2" />
            {config.title}
          </h3>
          <div className="flex items-center space-x-4">
            {timeRemaining !== null && (
              <span className="text-sm bg-white text-primary-700 px-3 py-1 rounded-full font-medium">
                <FontAwesomeIcon icon="clock" className="mr-1" />
                {formatTime(timeRemaining)}
              </span>
            )}
            <span className="text-sm">Question {currentQuestionIndex + 1} of {questions.length}</span>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="h-1 bg-gray-200">
          <div className="h-1 bg-primary-600" style={{ width: `${progressPercent}%` }}></div>
        </div>
        
        <div className="p-6">
          <div className="mb-2 text-xs text-gray-500 flex justify-between">
            <span>Category: {question.category}</span>
            <span>Difficulty: {question.difficulty}</span>
          </div>
          <h4 className="text-lg font-medium mb-4">{question.question}</h4>
          
          <div className="mt-6 space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`w-full text-left p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-center ${
                  selectedOptionIndex === index 
                    ? option.correct 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-red-500 bg-red-50'
                    : 'border-gray-300'
                } ${
                  selectedOptionIndex !== null && 
                  selectedOptionIndex !== index && 
                  option.correct 
                    ? 'border-green-500 bg-green-50' 
                    : ''
                }`}
                onClick={() => handleOptionSelect(index, option.correct)}
                disabled={selectedOptionIndex !== null}
              >
                <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center mr-3 flex-shrink-0">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option.text}</span>
                {selectedOptionIndex === index && option.correct && (
                  <FontAwesomeIcon icon="check" className="ml-auto text-green-600" />
                )}
                {selectedOptionIndex === index && !option.correct && (
                  <FontAwesomeIcon icon="times" className="ml-auto text-red-600" />
                )}
                {selectedOptionIndex !== null && selectedOptionIndex !== index && option.correct && (
                  <FontAwesomeIcon icon="check" className="ml-auto text-green-600" />
                )}
              </button>
            ))}
          </div>
          
          {showFeedback && (
            <div 
              className={`border mt-6 p-4 rounded-lg ${
                userAnswers[userAnswers.length - 1]?.correct
                  ? 'border-green-300 bg-green-50' 
                  : 'border-red-300 bg-red-50'
              }`}
            >
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <FontAwesomeIcon 
                    icon={userAnswers[userAnswers.length - 1]?.correct ? "check" : "times"} 
                    className={userAnswers[userAnswers.length - 1]?.correct ? "text-green-600" : "text-red-600"} 
                  />
                </div>
                <div>
                  <h5 className="font-semibold mb-1">
                    {userAnswers[userAnswers.length - 1]?.correct ? 'Correct!' : 'Incorrect'}
                  </h5>
                  <p>{question.explanation}</p>
                  
                  {config.showTips && question.tip && (
                    <div className="mt-3 bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r">
                      <div className="flex">
                        <FontAwesomeIcon icon="lightbulb" className="text-blue-600 mr-2 mt-1" />
                        <div>
                          <p className="font-medium text-blue-800 text-sm">Teaching Tip</p>
                          <p className="text-sm">{question.tip}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {showFeedback && (
            <div className="mt-6 text-right">
              <button 
                onClick={nextQuestion} 
                className="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center ml-auto"
              >
                <span>{currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Show Results'}</span>
                <FontAwesomeIcon icon="arrow-right" className="ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= config.passingScore;
    let resultIcon;
    let bgColor;
    let message;
    
    if (percentage >= 90) {
      message = 'Excellent! You have mastered the PPR Level 2 concepts!';
      resultIcon = <FontAwesomeIcon icon="trophy" className="text-primary-600 text-4xl" />;
      bgColor = 'bg-green-100';
    } else if (percentage >= 70) {
      message = 'Good job! You have a solid understanding of PPR Level 2 techniques.';
      resultIcon = <FontAwesomeIcon icon="check" className="text-primary-600 text-4xl" />;
      bgColor = 'bg-blue-100';
    } else if (percentage >= 50) {
      message = 'Not bad, but you may want to review some of the key concepts.';
      resultIcon = <FontAwesomeIcon icon="book-bookmark" className="text-primary-600 text-4xl" />;
      bgColor = 'bg-yellow-100';
    } else {
      message = 'You should review the material more thoroughly before proceeding.';
      resultIcon = <FontAwesomeIcon icon="book-open" className="text-primary-600 text-4xl" />;
      bgColor = 'bg-red-100';
    }
    
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-primary-700 text-white px-6 py-4 text-center">
          <h3 className="text-xl font-bold">{config.title} Complete!</h3>
        </div>
        
        <div className="p-8 text-center">
          <div className={`w-24 h-24 mx-auto ${bgColor} rounded-full flex items-center justify-center mb-6`}>
            {resultIcon}
          </div>
          
          <div className="text-4xl font-bold mb-2 text-primary-700">{percentage}%</div>
          <p className="mb-2 text-lg">Your score: {score}/{questions.length}</p>
          <p className="mb-4 text-lg font-semibold">
            {passed 
              ? <span className="text-green-600">Passed!</span> 
              : <span className="text-red-600">Not passed</span>
            }
            <span className="text-gray-500 text-sm ml-2">
              (Passing score: {config.passingScore}%)
            </span>
          </p>
          
          <div className="my-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
            <p className="text-lg">{message}</p>
          </div>
          
          {!passed && (
            <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-left">
              <div className="flex items-start">
                <FontAwesomeIcon icon="lightbulb" className="text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium">Study Tip</p>
                  <p>Focus on reviewing the sections where you missed questions. Pay special attention to {
                    [...new Set(userAnswers.filter(a => !a.correct).map(a => {
                      const q = questions.find(q => q.id === a.questionId);
                      return q?.category;
                    }))].join(', ')
                  }.</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={restartQuiz} 
              className="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center mx-auto"
            >
              <FontAwesomeIcon icon="redo" className="mr-2" />
              <span>Try Again</span>
            </button>
          </div>
          
          <p className="mt-6 text-sm text-gray-600">
            {mode === 'final' 
              ? 'Comprehensive assessment completed. Review results before proceeding to certification.' 
              : 'Continue to the next section to advance your learning journey.'}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto my-8">
      {quizState === 'splash' && renderQuizSplash()}
      {quizState === 'question' && renderQuestion()}
      {quizState === 'results' && renderResults()}
    </div>
  );
};
