import React from 'react';
// Removed QuizComponent import as it's now within chapter components
import {
  IntroductionChapter,
  EquipmentSafetyChapter,
  GripTechniquesChapter,
  HourglassFormatChapter,
  OpeningLessonChapter,
  SkillDevelopmentChapter,
  AdvancedStrategiesChapter,
  ClosingLessonChapter,
  AdditionalResourcesChapter
} from '../components/chapters/index'; // Explicitly point to the index file

/**
 * Main page component rendering all PPR Level 2 chapters
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

      {/* Chapter 5: Opening the Lesson */}
      <OpeningLessonChapter />

      {/* Chapter 6: Skill Development */}
      <SkillDevelopmentChapter />

      {/* Chapter 7: Advanced Strategies */}
      <AdvancedStrategiesChapter />

      {/* Chapter 8: Closing the Lesson */}
      <ClosingLessonChapter />

      {/* Chapter 9: Additional Resources */}
      <AdditionalResourcesChapter />

      {/* Removed the old Practice Assessments section */}
    </>
  );
};

export default HomePage;
