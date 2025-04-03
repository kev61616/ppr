import React from 'react';
import { ChapterSection, SubSection, ContentCard } from '../ChapterSection'; // Adjust import path
import { SectionQuizButton } from '../quiz/SectionQuizButton'; // Import the new button component

/**
 * Chapter 8: Closing the Lesson
 */
export const ClosingLessonChapter: React.FC = () => {
  return (
    <ChapterSection id="closing-lesson" number={8} title="Closing the Lesson">
      <SubSection id="static-cool-down" title="Static Cool Down" delay={0.1} chapterNumber={8} subchapterNumber={1} accentColor="indigo">
        <p className="mb-3">Essential post-game routine to transition body to resting state, aid recovery, reduce soreness, improve flexibility (10-15 mins).</p>
        <h4 className="font-semibold text-lg mb-2">Typical Routine:</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Hold stretches for 20-30 seconds, point of mild tension, no bouncing.</li>
          <li>Focus on major muscle groups: calves, hamstrings, quads, hip flexors, glutes, back, chest, shoulders, arms.</li>
          <li>Examples: Calf stretch (wall lean), Hamstring stretch (seated toe reach), Quad stretch (standing foot pull), Hip flexor stretch (lunge), Back/Shoulder stretches, Wrist/Forearm stretches.</li>
          <li>Finish with deep, slow breaths.</li>
        </ul>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Teaching Methodology"]} />
      </SubSection>

      <SubSection id="lesson-recap" title="Lesson Recap" delay={0.2} chapterNumber={8} subchapterNumber={2} accentColor="indigo">
        <p className="mb-3">Effectively summarizing the lesson and objectives.</p>
        <h4 className="font-semibold text-lg mb-2">Steps for Effective Recap:</h4>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Brief intro to conclusion (summarize overall objective).</li>
          <li>Recap main concepts (key points, techniques, clear language, examples).</li>
          <li>Review specific drills/exercises (purpose, relation to objective).</li>
          <li>Address common challenges/mistakes (awareness, clarification, guidance).</li>
          <li>Encourage questions/feedback (open environment, engagement).</li>
          <li>Summarize key takeaways (reinforce practice, application).</li>
        </ol>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Teaching Methodology"]} />
      </SubSection>

      <SubSection id="homework" title="Homework" delay={0.3} chapterNumber={8} subchapterNumber={3} accentColor="indigo">
        <p className="mb-3">Tailor assignments to align with the lesson focus.</p>
        <h4 className="font-semibold text-lg mb-2">General Suggestions:</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Practice skills taught in the lesson.</li>
          <li>Watch instructional pickleball videos.</li>
          <li>Play with a partner outside of lesson.</li>
          <li>Review pickleball rules.</li>
          <li>Engage in physical conditioning (cardio, strength, flexibility).</li>
        </ul>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Teaching Methodology"]} />
      </SubSection>
    </ChapterSection>
  );
};
