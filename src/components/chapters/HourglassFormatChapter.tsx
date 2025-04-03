import React from 'react';
import { ChapterSection, SubSection, ContentCard } from '../ChapterSection'; // Adjust import path
import { SectionQuizButton } from '../quiz/SectionQuizButton'; // Import the new button component

/**
 * Chapter 4: Hourglass Lesson Format
 */
export const HourglassFormatChapter: React.FC = () => {
  return (
    <ChapterSection id="hourglass-format" number={4} title="The Hourglass Lesson Format">
      <ContentCard>
        <p className="mb-4">The Hourglass Format is a structured teaching methodology that guides players through different game situations with varying levels of structure. It's named for its conceptual shape—starting wide with open play, narrowing for focused skill work, and then widening again to apply skills in game situations.</p>

        <div className="flex flex-col md:flex-row gap-6 mb-4">
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/images/hourglass-format.jpg"
                alt="Hourglass Format diagram"
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h4 className="font-semibold text-lg mb-2">Format Structure:</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Open:</strong> Free play for observation</li>
              <li><strong>Semi-Open:</strong> Guided play with specific focus</li>
              <li><strong>Closed:</strong> Technical skill development</li>
              <li><strong>Semi-Closed:</strong> Controlled practice drills</li>
              <li><strong>Open:</strong> Application in game situations</li>
            </ol>
          </div>
        </div>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Teaching Methodology"]} />
      </ContentCard>

      <SubSection
        id="lesson-timeline"
        title="Lesson Timeline"
        delay={0.1}
        chapterNumber={4}
        subchapterNumber={1}
        accentColor="purple"
      >
        <h4 className="font-semibold text-lg mb-2">Recommended Lesson Timeline:</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Phase</th>
                <th className="border border-gray-300 px-4 py-2">Time Allocation</th>
                <th className="border border-gray-300 px-4 py-2">Activities</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Open</td>
                <td className="border border-gray-300 px-4 py-2">10-15%</td>
                <td className="border border-gray-300 px-4 py-2">Warm-up games, free play, observation</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Semi-Open</td>
                <td className="border border-gray-300 px-4 py-2">15-20%</td>
                <td className="border border-gray-300 px-4 py-2">Guided play, focused observation, discussions</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Closed</td>
                <td className="border border-gray-300 px-4 py-2">30-40%</td>
                <td className="border border-gray-300 px-4 py-2">Skill development, demonstrations, focused practice</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Semi-Closed</td>
                <td className="border border-gray-300 px-4 py-2">15-20%</td>
                <td className="border border-gray-300 px-4 py-2">Controlled drills, skill application exercises</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Open</td>
                <td className="border border-gray-300 px-4 py-2">10-15%</td>
                <td className="border border-gray-300 px-4 py-2">Games, competitive play, skill application</td>
              </tr>
            </tbody>
          </table>
        </div>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Teaching Methodology"]} />
      </SubSection>

      <SubSection
        id="technical-competencies"
        title="Technical Competencies"
        delay={0.2}
        chapterNumber={4}
        subchapterNumber={2}
        accentColor="purple"
      >
        <p className="mb-4">These are the fundamental physical skills required:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Grip</li>
          <li>Stance</li>
          <li>Paddle Prep / Shape of Shot</li>
          <li>Contact Point / Weight Transfer</li>
          <li>Non-Dominant Hand / Neutral Ready</li>
        </ol>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Teaching Methodology", "Shot Techniques"]} />
      </SubSection>

      <SubSection
        id="tactical-competencies"
        title="Tactical Competencies"
        delay={0.3}
        chapterNumber={4}
        subchapterNumber={3}
        accentColor="purple"
      >
        <p className="mb-4">These involve the strategic application of skills:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Consistency</li>
          <li>Accuracy</li>
          <li>Positioning</li>
          <li>Play to Self/Partner Strength</li>
          <li>Play Opponent Weakness</li>
        </ol>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Teaching Methodology", "Game Strategy"]} />
      </SubSection>
    </ChapterSection>
  );
};
