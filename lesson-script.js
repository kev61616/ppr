/**
 * PPR Level 2 Certification - Lesson Script
 * Handles interactive elements and behavior for the pickleball lesson module
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      // Add animation
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('animate-fadeIn');
      }
    });
  }
  
  // Side navigation active state handling
  const sideNavItems = document.querySelectorAll('.side-nav-item');
  const sections = document.querySelectorAll('section');
  
  // Function to set active nav item based on scroll position
  function setActiveNavItem() {
    const scrollPosition = window.scrollY + 100; // Offset for header
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all nav items
        sideNavItems.forEach(item => {
          item.classList.remove('active');
        });
        
        // Add active class to corresponding nav item
        const activeItem = document.querySelector(`.side-nav-item[href="#${sectionId}"]`);
        if (activeItem) {
          activeItem.classList.add('active');
        }
      }
    });
  }
  
  // Listen for scroll events
  window.addEventListener('scroll', setActiveNavItem);
  
  // Set initial active nav item
  setActiveNavItem();
  
  // Progress bar
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', function() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
  
  // Image zoom functionality
  const zoomableImages = document.querySelectorAll('.img-zoom');
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close"><i class="fas fa-times"></i></button>
      <img src="" alt="Enlarged image" class="w-full h-auto">
    </div>
  `;
  document.body.appendChild(modal);
  
  const modalImage = modal.querySelector('img');
  const modalClose = modal.querySelector('.modal-close');
  
  zoomableImages.forEach(img => {
    img.addEventListener('click', function() {
      modalImage.src = this.src;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
  
  modalClose.addEventListener('click', function() {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  });
  
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });
  
  // Collapsible sections
  const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
  
  collapsibleHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      content.classList.toggle('expanded');
      
      // Update icon
      const icon = this.querySelector('i');
      if (icon) {
        if (content.classList.contains('expanded')) {
          icon.classList.remove('fa-chevron-down');
          icon.classList.add('fa-chevron-up');
        } else {
          icon.classList.remove('fa-chevron-up');
          icon.classList.add('fa-chevron-down');
        }
      }
    });
  });
  
  // Video placeholders
  const videoPlaceholders = document.querySelectorAll('.video-placeholder');
  
  videoPlaceholders.forEach(placeholder => {
    placeholder.addEventListener('click', function() {
      // In a real implementation, this would open a video player
      // For now, we'll just show an alert
      alert('Video would play here in the full implementation.');
    });
  });
  
  // Basic quiz handling (for the simple quiz, not the practice module)
  const quizOptions = document.querySelectorAll('.quiz-option');
  const quizSubmit = document.querySelector('.quiz-submit');
  const quizExplanation = document.querySelector('.quiz-explanation');
  
  if (quizOptions.length > 0 && quizSubmit && quizExplanation) {
    quizOptions.forEach(option => {
      option.addEventListener('click', function() {
        // Clear previous selections
        quizOptions.forEach(opt => opt.classList.remove('selected'));
        
        // Mark this option as selected
        this.classList.add('selected');
        
        // Enable submit button
        quizSubmit.disabled = false;
      });
    });
    
    quizSubmit.addEventListener('click', function() {
      const selectedOption = document.querySelector('.quiz-option.selected');
      
      if (!selectedOption) return;
      
      // Clear previous results
      quizOptions.forEach(opt => {
        opt.classList.remove('correct', 'incorrect');
      });
      
      // Show correct/incorrect
      quizOptions.forEach(opt => {
        if (opt.dataset.correct === 'true') {
          opt.classList.add('correct');
        }
      });
      
      if (selectedOption.dataset.correct === 'true') {
        selectedOption.classList.add('correct');
      } else {
        selectedOption.classList.add('incorrect');
      }
      
      // Show explanation
      quizExplanation.classList.remove('hidden');
      quizExplanation.classList.add('visible');
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
        
        // Scroll to target
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Tooltip initialization - make sure tooltips are visible on hover
  const tooltips = document.querySelectorAll('.tooltip');
  tooltips.forEach(tooltip => {
    const tooltipText = tooltip.querySelector('.tooltip-text');
    if (tooltipText) {
      tooltip.addEventListener('mouseenter', function() {
        tooltipText.style.visibility = 'visible';
        tooltipText.style.opacity = '1';
      });
      
      tooltip.addEventListener('mouseleave', function() {
        tooltipText.style.visibility = 'hidden';
        tooltipText.style.opacity = '0';
      });
    }
  });
  
  // Add scroll animation for elements
  const animatedElements = document.querySelectorAll('.card, .tip-card, .warning-card, .practice-module');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  console.log('PPR Level 2 lesson script initialized successfully');
});
