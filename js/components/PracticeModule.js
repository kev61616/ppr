/**
 * PPR Level 2 Certification - Practice Module
 * Handles the interactive practice quiz functionality
 */

const PracticeModule = {
  practiceQuestions: [
    {
      id: 1,
      question: "Which grip is most versatile for handling a variety of shots including volleys and dinks?",
      options: [
        { text: "Continental Grip", correct: true },
        { text: "Eastern Grip", correct: false },
        { text: "V-Shape Grip", correct: false },
        { text: "Western Grip", correct: false }
      ],
      explanation: "The Continental grip is the most versatile as it allows for easy transitions between forehand and backhand shots without changing grip, making it ideal for fast-paced exchanges at the net."
    },
    {
      id: 2,
      question: "What is the primary purpose of the 'Hourglass Lesson Format'?",
      options: [
        { text: "To manage time efficiently in a one-hour lesson", correct: false },
        { text: "To guide players through different game situations with varying levels of structure", correct: true },
        { text: "To ensure equal time is spent on forehand and backhand", correct: false },
        { text: "To separate beginners from advanced players", correct: false }
      ],
      explanation: "The Hourglass Format is a structured approach to teaching pickleball that guides players through different game situations, from open play to focused skill development and back to game application."
    },
    {
      id: 3,
      question: "When executing a 'Swing Volley', what is the recommended backswing compared to groundstrokes?",
      options: [
        { text: "Longer backswing for more power", correct: false },
        { text: "The same backswing as groundstrokes", correct: false },
        { text: "Minimal backswing, power comes from ball speed and controlled movement", correct: true },
        { text: "No backswing at all", correct: false }
      ],
      explanation: "The Swing Volley requires a minimal backswing compared to groundstrokes. The power comes from the ball's incoming speed and your controlled movement, not from a large backswing."
    },
    {
      id: 4,
      question: "Which of the following is a key element of blocking as a defensive shot?",
      options: [
        { text: "Using a full swing to counter the opponent's power", correct: false },
        { text: "Using soft hands to absorb power", correct: true },
        { text: "Hitting the ball with maximum force", correct: false },
        { text: "Aiming directly at the opponent", correct: false }
      ],
      explanation: "Blocking is a defensive shot that requires soft hands to absorb the power of the opponent's shot. Minimal paddle movement and proper positioning help redirect the ball effectively."
    },
    {
      id: 5,
      question: "What percentage of a lesson should be dedicated to Skill Development according to the recommended timeline?",
      options: [
        { text: "10%", correct: false },
        { text: "20-30%", correct: false },
        { text: "30-40%", correct: true },
        { text: "50-60%", correct: false }
      ],
      explanation: "According to the recommended lesson timeline, 30-40% of the time should be dedicated to Skill Development, which includes open competitive play observation, generating feedback, explaining, demonstrating, and teaching skills."
    },
    {
      id: 6,
      question: "Which grip is primarily used for powerful forehand shots?",
      options: [
        { text: "Continental Grip", correct: false },
        { text: "Eastern Grip", correct: true },
        { text: "V-Shape Grip", correct: false },
        { text: "Western Grip", correct: false }
      ],
      explanation: "The Eastern grip is commonly used for powerful forehand shots as it offers a good balance between power and control. It's particularly effective for forehand strokes, offering a natural and powerful swing motion."
    },
    {
      id: 7,
      question: "What is a key advantage of the Continental grip?",
      options: [
        { text: "It produces maximum spin on the ball", correct: false },
        { text: "It's the easiest grip for beginners", correct: false },
        { text: "It allows for easy transitions between forehand and backhand strokes", correct: true },
        { text: "It's the most comfortable grip for long rallies", correct: false }
      ],
      explanation: "A key advantage of the Continental grip is that it allows for easy transitions between forehand and backhand strokes without changing grip, which is especially valuable during fast-paced exchanges at the net."
    },
    {
      id: 8,
      question: "Which section of the Hourglass format focuses on teaching technical skills to improve the game?",
      options: [
        { text: "Open", correct: false },
        { text: "Semi-Open", correct: false },
        { text: "Closed", correct: true },
        { text: "Semi-Closed", correct: false }
      ],
      explanation: "The 'Closed' section of the Hourglass format is where technical skills are taught to improve the game. This is the narrowest part of the hourglass where specific skills are developed."
    },
    {
      id: 9,
      question: "When blocking an opponent's powerful shot, how should the paddle be positioned?",
      options: [
        { text: "Above your head for maximum reach", correct: false },
        { text: "Between your body and the net", correct: true },
        { text: "Close to the ground to catch low balls", correct: false },
        { text: "Behind your body to generate power", correct: false }
      ],
      explanation: "When blocking, the paddle should be positioned between your body and the net. This proper positioning helps to effectively neutralize the opponent's power shot."
    },
    {
      id: 10,
      question: "What is the recommended contact point for a Swing Volley?",
      options: [
        { text: "Behind your body", correct: false },
        { text: "Directly above your head", correct: false },
        { text: "As far in front of your body as possible", correct: false },
        { text: "In front of your body for better accuracy and control", correct: true }
      ],
      explanation: "The recommended contact point for a Swing Volley is in front of your body, which provides better accuracy and control. This positioning allows you to direct the ball more effectively."
    }
  ],
  
  practiceModule: null,
  currentQuestionIndex: 0,
  score: 0,
  userAnswers: [],
  
  /**
   * Initialize the practice module
   */
  init() {
    this.practiceModule = document.getElementById('practice-module');
    if (!this.practiceModule) return;
    
    this.setupEventListeners();
  },
  
  /**
   * Set up the initial event listeners
   */
  setupEventListeners() {
    const startButton = document.getElementById('start-practice');
    if (startButton) {
      startButton.addEventListener('click', () => {
        const practiceSplash = document.getElementById('practice-splash');
        practiceSplash.classList.add('hidden');
        this.showQuestion(this.currentQuestionIndex);
      });
    }
    
    const nextButton = document.getElementById('next-question');
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        this.nextQuestion();
      });
    }
    
    const restartButton = document.getElementById('restart-practice');
    if (restartButton) {
      restartButton.addEventListener('click', () => {
        this.restartQuiz();
      });
    }
  },
  
  /**
   * Display a question at the given index
   * @param {number} index - The index of the question to show
   */
  showQuestion(index) {
    if (index >= this.practiceQuestions.length) {
      this.showResults();
      return;
    }

    const question = this.practiceQuestions[index];
    const questionContainer = document.getElementById('question-container');
    questionContainer.classList.remove('hidden');
    
    // Update progress bar
    const progressBar = document.querySelector('.practice-progress-bar');
    const progressPercent = ((index + 1) / this.practiceQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    const questionIndicator = document.getElementById('question-indicator');
    questionIndicator.textContent = `Question ${index + 1} of ${this.practiceQuestions.length}`;
    
    const questionText = document.getElementById('question-text');
    questionText.textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // Create options
    question.options.forEach((option, optionIndex) => {
      const optionElement = document.createElement('div');
      optionElement.className = 'quiz-option mb-2 p-3 border border-gray-300 rounded-md cursor-pointer';
      optionElement.innerHTML = option.text;
      optionElement.dataset.optionIndex = optionIndex;
      
      optionElement.addEventListener('click', () => {
        this.selectOption(optionElement, option.correct);
      });
      
      optionsContainer.appendChild(optionElement);
    });
    
    // Hide feedback and next button
    const feedback = document.getElementById('feedback');
    feedback.classList.add('hidden');
    
    const nextButton = document.getElementById('next-question');
    nextButton.classList.add('hidden');
  },
  
  /**
   * Handle option selection
   * @param {HTMLElement} optionElement - The option element that was clicked
   * @param {boolean} isCorrect - Whether the selected option is correct
   */
  selectOption(optionElement, isCorrect) {
    const options = document.querySelectorAll('.quiz-option');
    
    // Reset all options
    options.forEach(opt => {
      opt.classList.remove('selected');
      opt.classList.remove('correct');
      opt.classList.remove('incorrect');
    });
    
    // Mark selected option
    optionElement.classList.add('selected');
    
    // Record answer
    this.userAnswers[this.currentQuestionIndex] = {
      questionId: this.practiceQuestions[this.currentQuestionIndex].id,
      selected: parseInt(optionElement.dataset.optionIndex),
      correct: isCorrect
    };
    
    // Show correct/incorrect immediately
    if (isCorrect) {
      optionElement.classList.add('correct');
      this.score++;
    } else {
      optionElement.classList.add('incorrect');
      
      // Show correct answer
      options.forEach((opt, index) => {
        if (this.practiceQuestions[this.currentQuestionIndex].options[index].correct) {
          opt.classList.add('correct');
        }
      });
    }
    
    // Show feedback
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('hidden');
    feedback.classList.remove('practice-feedback-correct', 'practice-feedback-incorrect');
    feedback.classList.add(isCorrect ? 'practice-feedback-correct' : 'practice-feedback-incorrect');
    
    const feedbackTitle = document.getElementById('feedback-title');
    feedbackTitle.textContent = isCorrect ? 'Correct!' : 'Incorrect';
    
    const feedbackText = document.getElementById('feedback-text');
    feedbackText.textContent = this.practiceQuestions[this.currentQuestionIndex].explanation;
    
    // Show next button
    const nextButton = document.getElementById('next-question');
    nextButton.classList.remove('hidden');
  },
  
  /**
   * Move to the next question
   */
  nextQuestion() {
    this.currentQuestionIndex++;
    this.showQuestion(this.currentQuestionIndex);
  },
  
  /**
   * Display the final results
   */
  showResults() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.classList.add('hidden');
    
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.classList.remove('hidden');
    
    const scoreElement = document.getElementById('final-score');
    const percentage = Math.round((this.score / this.practiceQuestions.length) * 100);
    scoreElement.textContent = `${this.score}/${this.practiceQuestions.length} (${percentage}%)`;
    
    const badgeElement = document.getElementById('score-badge');
    badgeElement.textContent = this.score;
    
    // Performance message
    const performanceMessage = document.getElementById('performance-message');
    let message = '';
    if (percentage >= 90) {
      message = 'Excellent! You have mastered the PPR Level 2 concepts!';
    } else if (percentage >= 70) {
      message = 'Good job! You have a solid understanding of PPR Level 2 techniques.';
    } else if (percentage >= 50) {
      message = 'Not bad, but you may want to review some of the key concepts.';
    } else {
      message = 'You should review the material more thoroughly before proceeding.';
    }
    performanceMessage.textContent = message;
  },
  
  /**
   * Restart the quiz
   */
  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.userAnswers = [];
    
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.classList.add('hidden');
    
    this.showQuestion(0);
  }
};
