import React from 'react';
import { ChapterSection, SubSection, ContentCard } from '../ChapterSection'; // Adjust import path
import { SectionQuizButton } from '../quiz/SectionQuizButton'; // Import the new button component

/**
 * Chapter 9: Additional Resources
 */
export const AdditionalResourcesChapter: React.FC = () => {
  return (
    <ChapterSection id="additional-resources" number={9} title="Additional Resources">
      <SubSection id="pickleball-drills" title="Pickleball Drills" delay={0.1} chapterNumber={9} subchapterNumber={1} accentColor="red">
        <p className="mb-3">Continuously evolving training repertoire keeps players engaged and improving. Drills target specific aspects: footwork, agility, accuracy, strategy.</p>
        <h4 className="font-semibold text-lg mb-2">Example Drills (Intermediate/Advanced Focus):</h4>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Transition Zone Pressure:</strong> Player 1 at NVZ, Player 2 in back of Zone 1. P1 feeds semi-aggressive. P2 hits 2 blocks/resets, then point is live. P2 needs 7 points before P1 gets 11.</li>
          <li><strong>Transition Bonus:</strong> Same setup as Drill 1. If P2 hits 2 blocks/resets AND neutralizes at NVZ, they get a bonus point. Play point out normally. First to 11 wins.</li>
          <li><strong>Dink Pattern (3 Dinks):</strong> Player A dinks straight, Player B returns straight. A dinks cross-court, B returns cross-court. A dinks straight again. Then players switch roles. Repeat on other side.</li>
          <li><strong>NVZ 5-Dink Start:</strong> All players at NVZ. Feeder starts cross-court. First 5 shots must bounce in NVZ before point becomes live. First team to 11 (win by 2) wins.</li>
        </ol>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Teaching Methodology"]} />
      </SubSection>

      <SubSection id="pickleball-games" title="Pickleball Games" delay={0.2} chapterNumber={9} subchapterNumber={2} accentColor="red">
        <p className="mb-3">Integrating games enhances learning and enjoyment. Focus on games reinforcing skills and strategies.</p>
        <h4 className="font-semibold text-lg mb-2">Example Games (Referenced in full.md):</h4>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>Capture The Net</li>
          <li>Transition</li>
          <li>The Zones (Transition)</li>
          <li>Keeping Opponents Back (4th Shot)</li>
          <li>Poaching</li>
          <li>Jackpot (NVZ)</li>
          <li>Corner to Corner (NVZ) - *Implied from image*</li>
           <li>ThreeFour (Return) - *Implied from image*</li>
         </ul>
         {/* Consider adding brief descriptions or links if available */}
         {/* Removed missing image references */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Images removed due to 404 errors */}
         </div>
          {/* Button to launch quiz */}
          <SectionQuizButton categories={["Teaching Methodology"]} />
      </SubSection>

       <SubSection id="conclusion" title="Conclusion" delay={0.3} chapterNumber={9} subchapterNumber={3} accentColor="red">
          <p className="mb-3">Know others who might be interested in becoming a certified pickleball instructor? Please share this infographic on your social media platforms and elsewhere!</p>
          {/* Removed missing image references */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
             {/* Images removed due to 404 errors */}
          </div>
          <p className="mb-3">Get Certified at pprpickleball.org. Click the link to see the schedule of upcoming workshops. Interested in hosting a Level 2 workshop? Click here to complete the form. Want to help fellow instructors? Click here to submit your favorite drill or game.</p>
           {/* Button to launch quiz */}
           {/* Using Rules as the closest fallback category */}
         <SectionQuizButton categories={["Rules and Officiating"]} />
      </SubSection>
    </ChapterSection>
  );
};
