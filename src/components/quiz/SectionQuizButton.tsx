import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { QuizComponent } from './QuizComponent'; // Assuming QuizComponent is in the same directory

interface SectionQuizButtonProps {
  categories: string[]; // Expecting categories for the quiz
}

export const SectionQuizButton: React.FC<SectionQuizButtonProps> = ({ categories }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Function to handle quiz completion if needed (e.g., close modal)
  const handleQuizComplete = () => {
    // For now, just close the modal upon completion
    closeModal();
  };

  return (
    <>
      {/* Pill-shaped button */}
      <div className="my-6 text-center"> {/* Added margin top/bottom */}
        <button
          onClick={openModal}
           className="inline-flex items-center px-6 py-2 bg-sky-600 text-white text-sm font-medium rounded-full shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in-out duration-150"
         >
           {/* Replaced pencil-alt with graduation-cap */}
           <FontAwesomeIcon icon="graduation-cap" className="mr-2 h-4 w-4" />
           Take Section Quiz
         </button>
      </div>

      {/* Basic Modal Implementation */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black opacity-60" onClick={closeModal}></div>

          {/* Modal Content */}
          <div className="relative bg-gray-100 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-2">
             {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 z-10"
               aria-label="Close quiz"
             >
               {/* Replaced times-circle with times */}
               <FontAwesomeIcon icon="times" className="h-6 w-6" />
             </button>
 
            {/* Render the actual QuizComponent inside the modal */}
            <QuizComponent
              mode="section"
              categories={categories}
              onComplete={handleQuizComplete} // Pass completion handler
            />
          </div>
        </div>
      )}
    </>
  );
};
