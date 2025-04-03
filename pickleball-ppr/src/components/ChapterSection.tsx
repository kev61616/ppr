import React from 'react';
import { motion } from 'framer-motion';

interface ChapterSectionProps {
  id: string;
  number: number;
  title: string;
  children: React.ReactNode;
  delay?: number;
}

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

/**
 * ChapterSection component for displaying a major chapter section
 * Includes chapter number and title, with fade-in animation
 */
export const ChapterSection: React.FC<ChapterSectionProps> = ({ 
  id, 
  number,
  title, 
  children, 
  delay = 0 
}) => {
  return (
    <section id={id} className="mb-12">
      <FadeIn delay={delay}>
        <h2 className="text-2xl font-bold text-primary-700 border-b border-gray-200 pb-2 mb-6 flex items-center">
          <span className="inline-flex items-center justify-center bg-primary-600 text-white rounded-full w-8 h-8 text-sm mr-3">
            {number}
          </span>
          {title}
        </h2>
        {children}
      </FadeIn>
    </section>
  );
};

/**
 * SubSection component for displaying a subsection within a chapter
 * Includes hierarchical chapter.subchapter numbering
 */
export interface SubSectionProps {
  id: string;
  chapterNumber?: number;
  subchapterNumber?: number;
  title: string;
  children: React.ReactNode;
  delay?: number;
  accentColor?: string;
}

export const SubSection: React.FC<SubSectionProps> = ({ 
  id, 
  chapterNumber,
  subchapterNumber,
  title, 
  children, 
  delay = 0,
  accentColor = "primary"
}) => {
  const hasNumbering = chapterNumber !== undefined && subchapterNumber !== undefined;
  
  return (
    <div className="mb-8 group">
      <FadeIn delay={delay}>
        <h3 id={id} className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          {hasNumbering && (
            <span className={`font-mono text-${accentColor}-800 py-1 px-2 bg-${accentColor}-100 
                            rounded-lg border-l-4 border-${accentColor}-500 mr-3 shadow-inner`}>
              {chapterNumber}.{subchapterNumber}
            </span>
          )}
          {title}
        </h3>
        <div className={`bg-white p-6 rounded-lg shadow-md mb-6 
                        transform transition-all duration-500 
                        border-l-4 border-${accentColor}-500
                        hover:shadow-xl hover:-translate-y-1 
                        ${hasNumbering ? `bg-gradient-to-br from-white to-${accentColor}-50` : ''}`}>
          {children}
        </div>
      </FadeIn>
    </div>
  );
};

/**
 * ContentCard component for displaying content within a subsection
 * With hover effects and animated transitions
 */
export const ContentCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  accentColor?: string;
}> = ({ children, className = "", accentColor = "primary" }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md mb-6 
                   hover:shadow-lg transition-all duration-300 
                   border border-gray-100 hover:border-${accentColor}-200 
                   ${className}`}>
      {children}
    </div>
  );
};

/**
 * Breadcrumb navigation component
 */
export const BreadcrumbNav: React.FC<{
  paths: {label: string; href: string}[];
}> = ({ paths }) => {
  return (
    <nav className="flex mb-6 text-sm" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {paths.map((path, index) => (
          <li key={path.href} className="inline-flex items-center">
            {index > 0 && (
              <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
            )}
            <a 
              href={path.href} 
              className={`inline-flex items-center text-sm font-medium hover:text-primary-600 transition-colors
                       ${index === paths.length - 1 
                        ? 'text-primary-600 hover:text-primary-800'
                        : 'text-gray-600 hover:text-gray-900'}`}
            >
              {index === 0 && (
                <svg className="w-3 h-3 mr-2 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8M1 5h18M8 10v6m4-6v6M7 5V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>
                </svg>
              )}
              {path.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
