/**
 * PPR Level 2 Certification - Progress Manager
 * Handles the page scroll progress bar
 */

const ProgressManager = {
  progressBar: null,
  
  /**
   * Initialize progress indicator
   */
  init() {
    this.createProgressBar();
    this.setupScrollListener();
  },
  
  /**
   * Create and append progress bar to document
   */
  createProgressBar() {
    if (!document.querySelector('.progress-bar')) {
      this.progressBar = document.createElement('div');
      this.progressBar.className = 'progress-bar';
      document.body.appendChild(this.progressBar);
    } else {
      this.progressBar = document.querySelector('.progress-bar');
    }
  },
  
  /**
   * Set up scroll event listener to update progress bar
   */
  setupScrollListener() {
    window.addEventListener('scroll', () => {
      this.updateProgress();
    });
    
    // Initial update
    this.updateProgress();
  },
  
  /**
   * Update progress bar based on scroll position
   */
  updateProgress() {
    if (!this.progressBar) return;
    
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    
    this.progressBar.style.width = scrolled + '%';
    
    // Optional: Change color based on progress
    if (scrolled > 75) {
      this.progressBar.style.background = 'linear-gradient(to right, var(--success), var(--primary-light))';
    } else if (scrolled > 50) {
      this.progressBar.style.background = 'linear-gradient(to right, var(--primary), var(--accent))';
    } else {
      this.progressBar.style.background = 'linear-gradient(to right, var(--primary), var(--primary-light))';
    }
  },
  
  /**
   * Move progress bar to a specific percentage (useful for manual navigation)
   * @param {number} percentage - The percentage to set (0-100)
   */
  setProgress(percentage) {
    if (!this.progressBar) return;
    
    const validPercentage = Math.max(0, Math.min(100, percentage));
    this.progressBar.style.width = validPercentage + '%';
  }
};
