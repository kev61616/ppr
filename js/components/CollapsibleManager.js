/**
 * PPR Level 2 Certification - Collapsible Manager
 * Handles collapsible sections functionality
 */

const CollapsibleManager = {
  collapsibleHeaders: null,
  
  /**
   * Initialize collapsible components
   */
  init() {
    this.collapsibleHeaders = document.querySelectorAll('.collapsible-header');
    this.setupEventListeners();
  },
  
  /**
   * Set up event listeners for collapsible sections
   */
  setupEventListeners() {
    this.collapsibleHeaders.forEach(header => {
      header.addEventListener('click', () => {
        this.toggleCollapsible(header);
      });
    });
  },
  
  /**
   * Toggle collapsible section open/closed
   * @param {HTMLElement} header - The header element of the collapsible section
   */
  toggleCollapsible(header) {
    const content = header.nextElementSibling;
    if (!content) return;
    
    content.classList.toggle('expanded');
    
    // Update icon if present
    const icon = header.querySelector('i');
    if (icon) {
      if (content.classList.contains('expanded')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
      } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
      }
    }
    
    // Optional: Scroll to make sure the expanded content is visible
    if (content.classList.contains('expanded')) {
      setTimeout(() => {
        const headerRect = header.getBoundingClientRect();
        if (headerRect.top < 0) {
          header.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  },
  
  /**
   * Expand a specific collapsible by selector
   * @param {string} selector - CSS selector for the collapsible header
   */
  expand(selector) {
    const header = document.querySelector(selector);
    if (header) {
      const content = header.nextElementSibling;
      if (content && !content.classList.contains('expanded')) {
        this.toggleCollapsible(header);
      }
    }
  },
  
  /**
   * Collapse a specific collapsible by selector
   * @param {string} selector - CSS selector for the collapsible header
   */
  collapse(selector) {
    const header = document.querySelector(selector);
    if (header) {
      const content = header.nextElementSibling;
      if (content && content.classList.contains('expanded')) {
        this.toggleCollapsible(header);
      }
    }
  }
};
