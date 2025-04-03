import React, { useState } from 'react';
import { navigationData, colorsByChapter } from './NavigationData';

// Enhanced SideNav component with beautiful hover effects
const SideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedChapters, setExpandedChapters] = useState<string[]>(['introduction']);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
        
          <div className="py-3 h-full overflow-y-auto">
            {navigationData.map((chapter) => (
              <div key={chapter.id} className="mb-4">
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
                    <span className="font-semibold tracking-wide">{chapter.title}</span>
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
              
                {expandedChapters.includes(chapter.id) && (
                  <div className="pl-6 mt-2 space-y-1.5 border-l-2 border-primary-300 ml-4 animate-[fadeIn_0.5s_ease-in-out]">
                    {chapter.subItems.map((subItem, index) => (
                      <a 
                        key={subItem.id}
                        href={`#${subItem.id}`} 
                        className={`block px-3 py-2 text-sm rounded-md flex items-center
                                 transition-all duration-300 group relative overflow-hidden
                                 ${activeSection === subItem.id 
                                   ? 'bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 shadow-sm scale-105' 
                                   : 'text-gray-600 hover:bg-blue-50'}`}
                        onClick={() => handleSectionClick(subItem.id)}
                      >
                        {/* Beautiful hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 
                                     opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-0 
                                     transition-all duration-500"></div>
                        
                        <span className="inline-flex items-center justify-center text-xs font-mono mr-2 
                                      bg-white border border-primary-200 text-primary-600 rounded-md px-1.5 py-0.5 min-w-[26px] text-center
                                      shadow-sm group-hover:bg-primary-50 transition-colors duration-300 relative z-10">
                          {chapter.number}.{index + 1}
                        </span>
                        <span className="leading-tight relative z-10 group-hover:translate-x-1 transition-transform duration-300">{subItem.title}</span>
                        
                        {/* Active indicator */}
                        {activeSection === subItem.id && (
                          <span className="ml-auto relative z-10">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                            </span>
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideNav;
