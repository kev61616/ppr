import React from 'react';
import { QuizComponent } from '../components/quiz/QuizComponent';
import {
  IntroductionChapter,
  EquipmentSafetyChapter,
  GripTechniquesChapter,
  HourglassFormatChapter
} from '../components/Chapters';

/**
 * Main page component with all PPR Level 2 chapters
 * Using modular chapter components for better organization
 */
const HomePage: React.FC = () => {
  return (
    <>
      {/* Chapter 1: Introduction */}
      <IntroductionChapter />
      
      {/* Chapter 2: Equipment and Safety */}
      <EquipmentSafetyChapter />
      
      {/* Chapter 3: Grip Techniques */}
      <GripTechniquesChapter />
      
      {/* Chapter 4: Hourglass Lesson Format */}
      <HourglassFormatChapter />
      
      {/* Additional Chapters would be added here */}
      {/* Chapter 5: Opening the Lesson */}
      {/* Chapter 6: Skill Development */}
      {/* Chapter 7: Advanced Strategies */}
      {/* Chapter 8: Closing the Lesson */}
      {/* Chapter 9: Additional Resources */}
      
      {/* Practice Assessments */}
      <section id="practice" className="mb-12">
        <h2 className="text-2xl font-bold text-primary-700 border-b border-gray-200 pb-2 mb-6">
          Practice Assessments
        </h2>
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold mb-2">Section Quiz</h3>
            <p className="text-sm text-gray-600 mb-3">Test your knowledge on a specific topic with 5 focused questions.</p>
            <QuizComponent mode="section" categories={["Grip Techniques"]} />
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-500">
            <h3 className="text-lg font-semibold mb-2">Midterm Assessment</h3>
            <p className="text-sm text-gray-600 mb-3">A comprehensive quiz covering multiple topics with a 15-minute time limit.</p>
            <QuizComponent mode="midterm" />
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 className="text-lg font-semibold mb-2">Final Comprehensive Test</h3>
            <p className="text-sm text-gray-600 mb-3">Test your readiness for certification with this complete assessment.</p>
            <QuizComponent mode="final" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
