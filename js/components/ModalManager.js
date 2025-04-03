/**
 * PPR Level 2 Certification - Modal Manager
 * Handles modal-related functionality:
 * - Image zoom functionality with modal
 * - Modal opening and closing
 */

const ModalManager = {
  modal: null,
  modalImage: null,
  modalClose: null,
  zoomableImages: null,
  
  /**
   * Initialize modal components
   */
  init() {
    this.setupImageZoomModal();
    this.setupEventListeners();
  },
  
  /**
   * Create and set up the image zoom modal
   */
  setupImageZoomModal() {
    // Create modal if it doesn't exist
    if (!document.querySelector('.modal')) {
      this.createModal();
    } else {
      this.modal = document.querySelector('.modal');
      this.modalImage = this.modal.querySelector('img');
      this.modalClose = this.modal.querySelector('.modal-close');
    }
    
    this.zoomableImages = document.querySelectorAll('.img-zoom');
  },
  
  /**
   * Create modal element and append to document
   */
  createModal() {
    this.modal = document.createElement('div');
    this.modal.className = 'modal';
    this.modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close"><i class="fas fa-times"></i></button>
        <img src="" alt="Enlarged image" class="w-full h-auto">
      </div>
    `;
    document.body.appendChild(this.modal);
    
    this.modalImage = this.modal.querySelector('img');
    this.modalClose = this.modal.querySelector('.modal-close');
  },
  
  /**
   * Set up event listeners for modal
   */
  setupEventListeners() {
    // Image click to open modal
    this.zoomableImages.forEach(img => {
      img.addEventListener('click', () => {
        this.openModal(img.src);
      });
    });
    
    // Close button
    if (this.modalClose) {
      this.modalClose.addEventListener('click', () => {
        this.closeModal();
      });
    }
    
    // Click outside modal to close
    if (this.modal) {
      this.modal.addEventListener('click', (event) => {
        if (event.target === this.modal) {
          this.closeModal();
        }
      });
      
      // ESC key to close modal
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && this.modal.classList.contains('open')) {
          this.closeModal();
        }
      });
    }
  },
  
  /**
   * Open modal with specified image source
   * @param {string} src - The source URL of the image
   */
  openModal(src) {
    if (this.modal && this.modalImage) {
      this.modalImage.src = src;
      this.modal.classList.add('open');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  },
  
  /**
   * Close the modal
   */
  closeModal() {
    if (this.modal) {
      this.modal.classList.remove('open');
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
  }
};
