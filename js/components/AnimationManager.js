/**
 * PPR Level 2 Certification - Animation Manager
 * Handles scroll-based animations and element reveals
 */

const AnimationManager = {
  animatedElements: null,
  observer: null,
  
  /**
   * Initialize animation components
   */
  init() {
    // Elements to observe for scroll-based animations
    this.animatedElements = document.querySelectorAll('.card, .tip-card, .warning-card, .practice-module');
    
    // Set up Intersection Observer
    this.setupIntersectionObserver();
    
    // Observe all target elements
    this.observeElements();
  },
  
  /**
   * Set up intersection observer for scroll animations
   */
  setupIntersectionObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
          this.observer.unobserve(entry.target); // Only animate once
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Adjust to trigger slightly before element is fully in view
    });
  },
  
  /**
   * Start observing all target elements
   */
  observeElements() {
    if (!this.observer || !this.animatedElements) return;
    
    this.animatedElements.forEach(element => {
      this.observer.observe(element);
    });
  },
  
  /**
   * Apply animation to element
   * @param {HTMLElement} element - The element to animate
   */
  animateElement(element) {
    // Default animation
    element.classList.add('animate-fadeIn');
    
    // Apply different animations based on element type or position
    if (element.classList.contains('tip-card')) {
      element.classList.add('animate-slideInRight');
    } else if (element.classList.contains('warning-card')) {
      element.classList.add('animate-slideInLeft');
    } else if (element.classList.contains('practice-module')) {
      // Add slight delay to practice module animation
      setTimeout(() => {
        element.classList.add('animate-fadeIn');
      }, 300);
    }
    
    // Optional: Add custom animation attributes
    if (element.dataset.animation) {
      element.classList.add(`animate-${element.dataset.animation}`);
    }
  },
  
  /**
   * Add element to be animated
   * @param {HTMLElement} element - The element to add for animation
   * @param {string} animationType - Optional animation type
   */
  addElement(element, animationType = null) {
    if (!this.observer || !element) return;
    
    if (animationType) {
      element.dataset.animation = animationType;
    }
    
    this.observer.observe(element);
  },
  
  /**
   * Trigger manual animation on element (not scroll-based)
   * @param {string} selector - CSS selector for element
   * @param {string} animation - Animation class to apply
   */
  triggerAnimation(selector, animation) {
    const element = document.querySelector(selector);
    if (!element) return;
    
    // Remove any existing animations
    element.classList.remove('animate-fadeIn', 'animate-slideInRight', 'animate-slideInLeft', 'animate-pulse', 'animate-bounce');
    
    // Force a reflow to restart the animation
    void element.offsetWidth;
    
    // Add the new animation
    element.classList.add(`animate-${animation}`);
  }
};
