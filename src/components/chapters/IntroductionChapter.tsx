import React from 'react';
import { ChapterSection, SubSection, ContentCard } from '../ChapterSection'; // Adjust import path
import { SectionQuizButton } from '../quiz/SectionQuizButton'; // Import the new button component

/**
 * Chapter 1: Introduction
 */
export const IntroductionChapter: React.FC = () => {
  return (
    <ChapterSection id="introduction" number={1} title="Introduction to PPR Level 2 Certification">
      <ContentCard>
        <p className="mb-4">Welcome to the PPR (Professional Pickleball Registry) Level 2 Certification interactive study guide. This comprehensive resource is designed to help you prepare for your Level 2 certification assessment.</p>
        <p className="mb-4">As a Level 2 certified instructor, you'll possess the advanced skills, knowledge, and teaching abilities to effectively instruct and coach intermediate to advanced pickleball players. This certification represents a significant step in your professional development as a pickleball instructor.</p>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Teaching Methodology"]} />
      </ContentCard>

      <SubSection
        id="comparison"
        title="Level 1 vs Level 2: What's Different?"
        delay={0.1}
        chapterNumber={1}
        subchapterNumber={1} // Keep original numbering for display if needed
        accentColor="primary"
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Aspect</th>
                <th className="border border-gray-300 px-4 py-2">Level 1 (Basic)</th>
                <th className="border border-gray-300 px-4 py-2">Level 2 (Advanced)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Target Students</td>
                <td className="border border-gray-300 px-4 py-2">Beginners, novices</td>
                <td className="border border-gray-300 px-4 py-2">Intermediate, advanced players</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Technical Knowledge</td>
                <td className="border border-gray-300 px-4 py-2">Basic shots and rules</td>
                <td className="border border-gray-300 px-4 py-2">Advanced techniques, detailed mechanics</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Teaching Methodology</td>
                <td className="border border-gray-300 px-4 py-2">Simple progression</td>
                <td className="border border-gray-300 px-4 py-2">Hourglass format, detailed feedback</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Strategy Focus</td>
                <td className="border border-gray-300 px-4 py-2">Basic gameplay</td>
                <td className="border border-gray-300 px-4 py-2">Advanced tactics, court positioning</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Skill Demonstration</td>
                <td className="border border-gray-300 px-4 py-2">Basic competency</td>
                <td className="border border-gray-300 px-4 py-2">Advanced execution and analysis</td>
              </tr>
            </tbody>
          </table>
        </div>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Teaching Methodology"]} />
      </SubSection>

      <SubSection
        id="preparation"
        title="Preparation"
        delay={0.2}
        chapterNumber={1}
        subchapterNumber={2} // Keep original numbering
        accentColor="primary"
      >
        <p className="mb-4">Before attending the Level 2 certification workshop, coaches should review the materials provided and familiarize themselves with the concepts covered in Level 1. This preparation will ensure a smoother learning experience during the workshop.</p>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
          <h4 className="font-semibold text-blue-700 mb-2">Certification Tip</h4>
          <p>Practice your demonstration skills extensively. As a Level 2 instructor, your ability to clearly demonstrate proper technique is critical to the assessment process.</p>
        </div>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Teaching Methodology"]} />
      </SubSection>
    </ChapterSection>
  );
};

// Default export is good practice for page components if needed, but named export is fine here.
// export default IntroductionChapter;
