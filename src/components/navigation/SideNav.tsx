import React, { useState } from 'react';
import { navigationData, colorsByChapter } from './NavigationData';
import { AcademicCapIcon, DocumentTextIcon, BeakerIcon } from '@heroicons/react/24/outline'; // Import icons

// Define types matching NavigationData.ts (optional but good practice)
interface SubItem {
  id: string;
  title: string;
  isQuiz?: boolean;
}

interface NavigationItem {
  id: string;
  number: number;
  title: string;
  subItems?: SubItem[];
  isExam?: boolean;
}

// Enhanced SideNav component with beautiful hover effects
const SideNav: React.FC = () => {
  // Initialize with the first chapter's first subitem or the chapter itself if no subitems
  const firstChapter = navigationData[0];
  const initialSection = firstChapter?.subItems?.[0]?.id ?? firstChapter?.id ?? '';
  const [activeSection, setActiveSection] = useState<string>(initialSection);
  const [expandedChapters, setExpandedChapters] = useState<string[]>([firstChapter?.id].filter(Boolean) as string[]); // Start with first chapter expanded
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Separate final exam from chapters for distinct rendering
  const chapters = navigationData.filter(item => !item.isExam);
  const finalExam = navigationData.find(item => item.isExam);
  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false); // Close mobile menu when section is clicked
  };

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(current => 
      current.includes(chapterId)
        ? current.filter(id => id !== chapterId)
        : [...current, chapterId]
    );
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button 
          className="text-gray-700 hover:text-primary-600 focus:outline-none 
                   transition-all active:scale-95 transform fixed top-4 left-4 z-50
                   bg-white rounded-md shadow-lg p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    
      {/* Sidebar navigation - expanded on larger screens, conditional on mobile */}
      <aside 
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:block w-64 flex-shrink-0 
                  fixed lg:sticky top-0 left-0 h-full z-40 lg:z-auto overflow-y-auto
                  transform transition-transform duration-300 ease-in-out
                  ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="bg-gradient-to-br from-white to-blue-50 text-gray-800 
                     shadow-lg overflow-hidden h-full border-r border-blue-100"
        >
          <div className="bg-gradient-to-r from-primary-600 to-blue-700 text-white py-4 px-4 font-medium">
            <h2 className="text-lg font-bold tracking-tight">PPR Level 2 Guide</h2>
          </div>
        
          <div className="py-3 h-[calc(100%-60px)] overflow-y-auto"> {/* Adjust height for header */}
            {chapters.map((chapter) => (
              <div key={chapter.id} className="mb-2"> {/* Reduced margin */}
                {/* Chapter header with toggle */}
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-left font-medium 
                            text-gray-700 rounded-md transition-all duration-300 relative overflow-hidden
                            hover:bg-blue-50 hover:shadow-md hover:translate-x-1 group text-sm"
                  onClick={() => toggleChapter(chapter.id)}
                >
                  {/* Beautiful background effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent 
                                opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 
                                transition-all duration-1000"></div>
                  
                  <span className="flex items-center relative z-10">
                    <span className={`inline-flex items-center justify-center bg-${colorsByChapter[chapter.number]} 
                                    text-white rounded-full w-7 h-7 text-xs mr-3 shadow-md
                                    transition-transform duration-300 group-hover:scale-110`}>
                      {chapter.number}
                    </span>
                    <span className="font-semibold tracking-wide text-sm">{chapter.title}</span> {/* Slightly smaller font */}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 transition-transform duration-300 text-primary-500
                              ${expandedChapters.includes(chapter.id) ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              
                {expandedChapters.includes(chapter.id) && chapter.subItems && (
                  <div className="pl-5 mt-1 space-y-1 border-l-2 border-blue-200 ml-4 animate-[fadeIn_0.5s_ease-in-out]"> {/* Adjusted padding/margin */}
                    {chapter.subItems.map((subItem, index) => { // Use index for simple numbering
                      const itemNumber = `${chapter.number}.${index + 1}`; // Simple numbering

                      return (
                        <a
                          key={subItem.id}
                          href={`#${subItem.id}`}
                          className={`block px-3 py-1.5 text-xs rounded-md flex items-center group relative overflow-hidden transition-all duration-200 ease-in-out text-gray-600 ${ // Removed quiz-specific styling
                            activeSection === subItem.id
                              ? 'bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 font-medium shadow-sm scale-105'
                              : 'hover:bg-blue-50 hover:text-gray-800'
                          }`}
                          onClick={() => handleSectionClick(subItem.id)}
                        >
                          {/* Hover effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-50 transform -translate-x-full group-hover:translate-x-0 transition-all duration-300"></div>

                          {/* Number/Title */}
                          <span className="flex items-center relative z-10">
                             {/* Standard number badge */}
                            <span className="inline-flex items-center justify-center text-[10px] font-mono mr-1.5 bg-white border border-blue-200 text-blue-600 rounded px-1 py-0 min-w-[28px] text-center shadow-sm group-hover:bg-primary-50 transition-colors duration-200">
                              {itemNumber}
                            </span>
                            <span className={`leading-tight group-hover:translate-x-0.5 transition-transform duration-200`}> {/* Removed quiz-specific italic */}
                              {subItem.title}
                            </span>
                          </span>

                          {/* Active indicator */}
                          {activeSection === subItem.id && (
                            <span className="ml-auto relative z-10">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-500"></span>
                              </span>
                            </span>
                          )}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            {/* Render Final Exam Separately */}
            {finalExam && (
              <div className="mt-4 pt-4 border-t border-blue-200 px-3"> {/* Added padding */}
                <a
                  key={finalExam.id}
                  href={`#${finalExam.id}`}
                  className={`w-full flex items-center py-2 text-left font-medium rounded-md transition-all duration-300 relative overflow-hidden group text-sm ${
                    activeSection === finalExam.id
                      ? 'bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 shadow-md scale-105 font-semibold'
                      : 'text-gray-700 hover:bg-blue-100 hover:shadow-md hover:translate-x-1'
                  }`}
                  onClick={() => handleSectionClick(finalExam.id)}
                >
                  {/* Background hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-50 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-1000"></div>

                  {/* Icon, Number, and Title */}
                  <span className="flex items-center relative z-10">
                     {/* Number Badge similar to chapters */}
                    <span className={`inline-flex items-center justify-center bg-gray-500  /* Using gray for exam */
                                    text-white rounded-full w-7 h-7 text-xs mr-3 shadow-md
                                    transition-transform duration-300 group-hover:scale-110`}>
                      {finalExam.number} {/* Display the number */}
                    </span>
                    <AcademicCapIcon className="h-5 w-5 mr-1 text-primary-600 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" /> {/* Exam icon */}
                    <span className="font-semibold tracking-wide">{finalExam.title}</span>
                  </span>

                  {/* Active indicator */}
                  {activeSection === finalExam.id && (
                    <span className="ml-auto relative z-10">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                      </span>
                    </span>
                  )}
                </a>
              </div>
            )}
            {/* End of Final Exam Section */}

          </div> {/* End of scrollable content div */}
        </div> {/* End of sidebar background div */}
      </aside> {/* End of aside */}
    </> /* End of fragment */
  );
};

export default SideNav;
