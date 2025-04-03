/**
 * PPR Level 2 Certification - Tooltip Manager
 * Handles tooltip functionality
 */

const TooltipManager = {
  tooltips: null,
  
  /**
   * Initialize tooltip components
   */
  init() {
    this.tooltips = document.querySelectorAll('.tooltip');
    this.setupTooltips();
  },
  
  /**
   * Set up tooltips with event listeners
   */
  setupTooltips() {
    this.tooltips.forEach(tooltip => {
      const tooltipText = tooltip.querySelector('.tooltip-text');
      
      if (tooltipText) {
        // Mouse events
        tooltip.addEventListener('mouseenter', () => {
          this.showTooltip(tooltipText);
        });
        
        tooltip.addEventListener('mouseleave', () => {
          this.hideTooltip(tooltipText);
        });
        
        // Keyboard/focus events for accessibility
        tooltip.addEventListener('focus', () => {
          this.showTooltip(tooltipText);
        });
        
        tooltip.addEventListener('blur', () => {
          this.hideTooltip(tooltipText);
        });
        
        // Touch events for mobile
        tooltip.addEventListener('touchstart', (e) => {
          e.preventDefault();
          this.toggleTooltip(tooltipText);
        });
      }
    });
    
    // Close tooltips when clicking elsewhere
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.tooltip')) {
        this.hideAllTooltips();
      }
    });
  },
  
  /**
   * Show a specific tooltip
   * @param {HTMLElement} tooltipText - The tooltip text element to show
   */
  showTooltip(tooltipText) {
    tooltipText.style.visibility = 'visible';
    tooltipText.style.opacity = '1';
    
    // Position the tooltip to ensure it stays in viewport
    this.positionTooltip(tooltipText);
  },
  
  /**
   * Hide a specific tooltip
   * @param {HTMLElement} tooltipText - The tooltip text element to hide
   */
  hideTooltip(tooltipText) {
    tooltipText.style.visibility = 'hidden';
    tooltipText.style.opacity = '0';
  },
  
  /**
   * Toggle a tooltip's visibility
   * @param {HTMLElement} tooltipText - The tooltip text element to toggle
   */
  toggleTooltip(tooltipText) {
    if (tooltipText.style.visibility === 'visible') {
      this.hideTooltip(tooltipText);
    } else {
      this.hideAllTooltips(); // Hide all others first
      this.showTooltip(tooltipText);
    }
  },
  
  /**
   * Hide all tooltips
   */
  hideAllTooltips() {
    document.querySelectorAll('.tooltip-text').forEach(tooltip => {
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = '0';
    });
  },
  
  /**
   * Position tooltip to ensure it stays in viewport
   * @param {HTMLElement} tooltipText - The tooltip text element to position
   */
  positionTooltip(tooltipText) {
    const rect = tooltipText.getBoundingClientRect();
    const parentRect = tooltipText.parentElement.getBoundingClientRect();
    
    // Check if tooltip goes off-screen to the right
    if (rect.right > window.innerWidth) {
      tooltipText.style.left = 'auto';
      tooltipText.style.right = '0';
    }
    
    // Check if tooltip goes off-screen to the left
    if (rect.left < 0) {
      tooltipText.style.left = '0';
      tooltipText.style.right = 'auto';
    }
    
    // Check if tooltip goes off-screen at the top
    if (rect.top < 0) {
      tooltipText.style.top = `${parentRect.height + 5}px`;
      tooltipText.style.bottom = 'auto';
    }
  }
};
