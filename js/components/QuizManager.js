/**
 * PPR Level 2 Certification - Quiz Manager
 * Handles basic quiz functionality for knowledge checks
 */

const QuizManager = {
  quizOptions: null,
  quizSubmit: null,
  quizExplanation: null,
  
  /**
   * Initialize quiz components
   */
  init() {
    this.quizOptions = document.querySelectorAll('.quiz-option');
    this.quizSubmit = document.querySelector('.quiz-submit');
    this.quizExplanation = document.querySelector('.quiz-explanation');
    
    if (this.quizOptions.length > 0 && this.quizSubmit && this.quizExplanation) {
      this.setupEventListeners();
    }
  },
  
  /**
   * Set up event listeners for quiz components
   */
  setupEventListeners() {
    // Quiz option selection
    this.quizOptions.forEach(option => {
      option.addEventListener('click', () => {
        this.selectOption(option);
      });
    });
    
    // Quiz submit button
    this.quizSubmit.addEventListener('click', () => {
      this.checkAnswer();
    });
  },
  
  /**
   * Handle option selection
   * @param {HTMLElement} option - The selected option element
   */
  selectOption(option) {
    // Clear previous selections
    this.quizOptions.forEach(opt => {
      opt.classList.remove('selected');
    });
    
    // Mark this option as selected
    option.classList.add('selected');
    
    // Enable submit button
    this.quizSubmit.disabled = false;
  },
  
  /**
   * Check answer and show feedback
   */
  checkAnswer() {
    const selectedOption = document.querySelector('.quiz-option.selected');
    
    if (!selectedOption) return;
    
    // Clear previous results
    this.quizOptions.forEach(opt => {
      opt.classList.remove('correct', 'incorrect');
    });
    
    // Show correct answers
    this.quizOptions.forEach(opt => {
      if (opt.dataset.correct === 'true') {
        opt.classList.add('correct');
      }
    });
    
    // Mark selected option as correct or incorrect
    if (selectedOption.dataset.correct === 'true') {
      selectedOption.classList.add('correct');
    } else {
      selectedOption.classList.add('incorrect');
    }
    
    // Show explanation
    this.quizExplanation.classList.remove('hidden');
    this.quizExplanation.classList.add('visible');
    
    // Focus explanation for screen readers
    this.quizExplanation.setAttribute('tabindex', '-1');
    this.quizExplanation.focus();
  },
  
  /**
   * Reset the quiz to initial state
   * @param {string} quizSelector - CSS selector for the quiz container
   */
  resetQuiz(quizSelector) {
    const quizContainer = document.querySelector(quizSelector);
    if (!quizContainer) return;
    
    // Reset options
    const options = quizContainer.querySelectorAll('.quiz-option');
    options.forEach(opt => {
      opt.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Reset submit button
    const submitBtn = quizContainer.querySelector('.quiz-submit');
    if (submitBtn) {
      submitBtn.disabled = true;
    }
    
    // Hide explanation
    const explanation = quizContainer.querySelector('.quiz-explanation');
    if (explanation) {
      explanation.classList.add('hidden');
      explanation.classList.remove('visible');
    }
  }
};
