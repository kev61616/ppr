import React from 'react';
import { ChapterSection, SubSection, ContentCard } from '../ChapterSection'; // Adjust import path
import { SectionQuizButton } from '../quiz/SectionQuizButton'; // Import the new button component

/**
 * Chapter 5: Opening the Lesson
 */
export const OpeningLessonChapter: React.FC = () => {
  return (
    <ChapterSection id="opening-lesson" number={5} title="Opening the Lesson">
      <SubSection id="lesson-intro" title="Introduction" delay={0.1} chapterNumber={5} subchapterNumber={1} accentColor="teal">
        <p>Facilitate introductions: names, origin, pre-existing injuries, sports history. Transition smoothly into the warm-up.</p>
        {/* Button to launch quiz */}
        <SectionQuizButton categories={["Teaching Methodology"]} />
      </SubSection>

      <SubSection id="warmup" title="Warm-Up Overview" delay={0.2} chapterNumber={5} subchapterNumber={2} accentColor="teal">
        <p>A proper warm-up prepares the body physically and mentally, enhancing performance and reducing injury risk.</p>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Teaching Methodology"]} />
      </SubSection>

      <SubSection id="athlete-activation" title="Athlete Activation" delay={0.3} chapterNumber={5} subchapterNumber={3} accentColor="teal">
        <p>Priming the body and mind through exercises that increase heart rate, enhance focus, mobilize muscles, and improve readiness.</p>
        <p className="mt-2"><strong>Example:</strong> Jogging baseline to net with increasing effort (20% - 40% - 60% - 100%), jumping jacks, or skipping rope.</p>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Teaching Methodology"]} />
      </SubSection>

      <SubSection id="dynamic-stretching" title="Dynamic Stretching" delay={0.4} chapterNumber={5} subchapterNumber={4} accentColor="teal">
        <p>Improve mobility and flexibility focusing on major muscle groups.</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Hip Openers (open and closed)</li>
          <li>Arm Circles</li>
          <li>Torso Twists</li>
          <li>60-40% Lunges</li>
          <li>Monster Walks</li>
          <li>Butt Kicks</li>
        </ul>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Teaching Methodology"]} />
      </SubSection>

      <SubSection id="athletic-skill" title="Athletic Skill Build" delay={0.5} chapterNumber={5} subchapterNumber={5} accentColor="teal">
        <p>Reinforce athletic skills by having students toss and catch a decompressed tennis ball as part of the warm-up.</p>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Teaching Methodology"]} />
      </SubSection>

      <SubSection id="paddle-hits" title="Paddle Hits" delay={0.6} chapterNumber={5} subchapterNumber={6} accentColor="teal">
        <p>Gradually increase intensity, starting with gentle dinking and progressing through various shots.</p>
        <h4 className="font-semibold mt-3 mb-2">Common Paddle Warm-up Components:</h4>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Shadow swings (proper technique, footwork)</li>
          <li>Forehand and Backhand Dinks (consistency, accuracy)</li>
          <li>Volley Drills (quick reflexes, soft hands, positioning)</li>
          <li>3rd Shot Drops/Drives (soft touch, placement)</li>
          <li>Serve and Return Practice (consistency, accuracy)</li>
        </ol>
        <p className="mt-3">After the paddle warm-up, observe students in OPEN competitive play (score-keeping) for skill assessment.</p>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Teaching Methodology"]} />
      </SubSection>
    </ChapterSection>
  );
};
