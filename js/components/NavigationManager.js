/**
 * PPR Level 2 Certification - Navigation Manager
 * Handles all navigation-related functionality including:
 * - Mobile menu toggle
 * - Side navigation active state
 * - Smooth scrolling for anchor links
 */

const NavigationManager = {
  mobileMenuButton: null,
  mobileMenu: null,
  sideNavItems: null,
  sections: null,
  
  /**
   * Initialize navigation components
   */
  init() {
    this.mobileMenuButton = document.getElementById('mobile-menu-button');
    this.mobileMenu = document.getElementById('mobile-menu');
    this.sideNavItems = document.querySelectorAll('.side-nav-item');
    this.sections = document.querySelectorAll('section');
    
    this.setupMobileMenuToggle();
    this.setupScrollSpy();
    this.setupSmoothScrolling();
    
    // Set initial active nav item
    this.updateActiveNavItem();
  },
  
  /**
   * Set up mobile menu toggle functionality
   */
  setupMobileMenuToggle() {
    if (this.mobileMenuButton && this.mobileMenu) {
      this.mobileMenuButton.addEventListener('click', () => {
        this.mobileMenu.classList.toggle('hidden');
        // Add animation
        if (!this.mobileMenu.classList.contains('hidden')) {
          this.mobileMenu.classList.add('animate-fadeIn');
        }
      });
    }
  },
  
  /**
   * Set up scroll spy to update active nav item based on scroll position
   */
  setupScrollSpy() {
    if (this.sections.length > 0 && this.sideNavItems.length > 0) {
      // Listen for scroll events
      window.addEventListener('scroll', () => {
        this.updateActiveNavItem();
      });
    }
  },
  
  /**
   * Update active nav item based on current scroll position
   */
  updateActiveNavItem() {
    const scrollPosition = window.scrollY + 100; // Offset for header
    
    this.sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all nav items
        this.sideNavItems.forEach(item => {
          item.classList.remove('active');
        });
        
        // Add active class to corresponding nav item
        const activeItem = document.querySelector(`.side-nav-item[href="#${sectionId}"]`);
        if (activeItem) {
          activeItem.classList.add('active');
        }
      }
    });
  },
  
  /**
   * Set up smooth scrolling for anchor links
   */
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Close mobile menu if open
          if (this.mobileMenu && !this.mobileMenu.classList.contains('hidden')) {
            this.mobileMenu.classList.add('hidden');
          }
          
          // Scroll to target
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }
};
