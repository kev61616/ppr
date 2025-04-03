/**
 * PPR Level 2 Certification - Main JavaScript Entry Point
 * Initializes all components and modules
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize components
  NavigationManager.init();
  ModalManager.init();
  CollapsibleManager.init();
  QuizManager.init();
  
  // Initialize page progress bar
  ProgressManager.init();
  
  // Initialize tooltips
  TooltipManager.init();
  
  // Initialize scroll animations
  AnimationManager.init();
  
  // Initialize practice module
  PracticeModule.init();
  
  console.log('PPR Level 2 lesson module initialized successfully');
});
