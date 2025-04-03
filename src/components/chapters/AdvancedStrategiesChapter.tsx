import React from 'react';
import { ChapterSection, SubSection, ContentCard } from '../ChapterSection'; // Adjust import path
import { SectionQuizButton } from '../quiz/SectionQuizButton'; // Import the new button component

/**
 * Chapter 7: Advanced Strategies
 */
export const AdvancedStrategiesChapter: React.FC = () => {
  return (
    <ChapterSection id="advanced-strategies" number={7} title="Advanced Strategies">
       <ContentCard>
        <p>This section represents the SEMI-OPEN part of the Hourglass teaching model. Here the coach will layer in some form of tactical / strategic thinking associated with the given game situation / area of the court.</p>
      </ContentCard>

      <SubSection id="middle-opportunities" title="Creating Opportunities in the Middle" delay={0.1} chapterNumber={7} subchapterNumber={1} accentColor="pink">
        <p className="mb-3">The middle of the court can be used as a “weapon” from anywhere.</p>
        <h4 className="font-semibold text-lg mb-2">Dinking to the Middle:</h4>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li><strong>Control:</strong> Harder for opponents to hit aggressive shots/angles.</li>
          <li><strong>Split Opponents:</strong> Forces decision, can cause confusion/errors.</li>
          <li><strong>Neutralize Angles:</strong> Reduces opponent's ability to hit sharp angles.</li>
          <li><strong>Set Up Put-Away:</strong> Can lead to predictable return to attack.</li>
          <li><strong>Minimize Risk:</strong> Generally lower risk than hitting wide.</li>
        </ul>
         <h4 className="font-semibold text-lg mb-2">Using Outside Quadrants to Open Middle:</h4>
         <ul className="list-disc pl-6 space-y-1">
           <li>Forces opponents towards sidelines, challenging middle coverage.</li>
           <li>Creates predictable patterns, potentially leaving middle open.</li>
           <li>Can force weaker angled returns from opponents.</li>
           <li>Creates space in the middle for drop shots or lobs.</li>
         </ul>
          {/* Button to launch quiz */}
         <SectionQuizButton categories={["Game Strategy"]} />
      </SubSection>

      <SubSection id="transition-zone" title="Transition Zone Strategy" delay={0.2} chapterNumber={7} subchapterNumber={2} accentColor="pink">
         <p className="mb-3">Playing effectively in the area between baseline and NVZ.</p>
         <h4 className="font-semibold text-lg mb-2">General Tactics:</h4>
         <ol className="list-decimal pl-6 space-y-1 mb-3">
           <li>Move forward purposefully (after good drop/deep drive).</li>
           <li>Use the Drop Shot (3rd shot drop key).</li>
           <li>Stay low and balanced.</li>
           <li>Accelerate/Decelerate movement intentionally.</li>
           <li>Keep paddle ready (up and in front).</li>
           <li>Anticipate return (watch opponent).</li>
           <li>Control shot depth (aim deep).</li>
           <li>Avoid attacking too soon (be patient).</li>
           <li>Communicate in doubles (staggered approach).</li>
           <li>Be ready for defense.</li>
           <li>Practice transitioning regularly.</li>
         </ol>
          <h4 className="font-semibold text-lg mb-2">Transition Zones (1, 2, 3):</h4>
          <div className="flex flex-col md:flex-row gap-6 mb-4">
            <div className="md:w-1/2">
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Zone 1 (Baseline + 5ft):</strong> Serves, returns, deep returns, 3rd shot drops often hit here. Partner moves to Zone 2.</li>
                <li><strong>Zone 2 (Middle 5ft):</strong> Often challenging. Partner moves to Zone 1. Maintain stagger.</li>
                <li><strong>Zone 3 (Next 5ft to NVZ):</strong> More offensive position, side-by-side arrangement.</li>
              </ul>
              <p className="mt-2">Mastering movement through these zones is key for higher-level play.</p>
            </div>
             <div className="md:w-1/2 flex items-center justify-center">
              <div className="rounded-lg overflow-hidden shadow-md">
                {/* Placeholder - Update image path if available */}
                <img src="/images/transition-zones.jpg" alt="Transition Zones Diagram" className="w-full object-contain" />
              </div>
            </div>
          </div>
          <h4 className="font-semibold text-lg mb-2">Accelerating/Decelerating:</h4>
           <ul className="list-disc pl-6 space-y-1 mb-3">
             <li><strong>Accelerate:</strong> On offensive shots, after successful drop, responding to high ball, creating pressure.</li>
             <li><strong>Decelerate:</strong> After defensive shot, reading opponent's strong prep, non-ideal shot placement, observing opponent aggression, when out of position, covering for partner (doubles).</li>
             <li><strong>General:</strong> Prioritize balance/control, good footwork, anticipate based on strategy.</li>
           </ul>
            {/* Button to launch quiz */}
         <SectionQuizButton categories={["Game Strategy"]} />
      </SubSection>

       <SubSection id="3rd-shot-drive" title="3rd Shot Drive" delay={0.3} chapterNumber={7} subchapterNumber={3} accentColor="pink">
         <p className="mb-3">Hitting the 3rd shot fast and low over the net.</p>
         <h4 className="font-semibold text-lg mb-2">Technical Aspects:</h4>
         <ol className="list-decimal pl-6 space-y-1 mb-3">
            <li>Stance/Positioning: Balanced, ready.</li>
            <li>Grip/Paddle Angle: Correct hold for control/power.</li>
            <li>Stroke Mechanics: Fluid, controlled swing from shoulder, follow through.</li>
            <li>Contact Point: Optimal point, usually out front.</li>
            <li>Follow-Through: Ensures pace/direction.</li>
            <li>Strategic Intent: Know when to drive vs. drop.</li>
            <li>Consistency/Control: Execute reliably under pressure.</li>
         </ol>
          <h4 className="font-semibold text-lg mb-2">Tactical Aspects:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Consistency:</strong> Repeatedly execute with reliability/precision. Puts pressure, helps transition.</li>
            <li><strong>Accuracy:</strong> Precise placement. Target spots, control depth/trajectory, use strategically, maintain under pressure.</li>
            <li><strong>Placement (Down the Line):</strong> Hit parallel to sideline. Surprise element, forces opponent movement, reduces return angle, higher risk/reward.</li>
            <li><strong>Strategy:</strong> Purpose 1: Take time away on short return. Purpose 2: Allow serving team to move from defense to offense. Typically hit straight for max speed.</li>
          </ul>
           {/* Button to launch quiz */}
         <SectionQuizButton categories={["Shot Techniques", "Game Strategy"]} />
       </SubSection>

       <SubSection id="3rd-shot-drop" title="3rd Shot Drop" delay={0.4} chapterNumber={7} subchapterNumber={4} accentColor="pink">
         <p className="mb-3">A soft shot landing in the opponents' NVZ, often used during transition.</p>
         <h4 className="font-semibold text-lg mb-2">Strategic Placement (Outside Quadrants):</h4>
         <ul className="list-disc pl-6 space-y-1">
           <li>Targets corners of opponent's NVZ.</li>
           <li>Creates angles, making returns difficult.</li>
           <li>Forces opponent movement, potentially opening court.</li>
           <li>Can exploit weaker side (forehand/backhand).</li>
           <li>Disrupts opponent rhythm/positioning.</li>
           <li>Requires good communication in doubles.</li>
         </ul>
          {/* Button to launch quiz */}
         <SectionQuizButton categories={["Shot Techniques", "Game Strategy"]} />
       </SubSection>

       <SubSection id="4th-shot-strategy" title="4th Shot Strategy" delay={0.5} chapterNumber={7} subchapterNumber={5} accentColor="pink">
         <p className="mb-3">The shot hit by the returning team after the serving team's 3rd shot.</p>
         <p className="mb-3">Goal: Limit opponent options, force defensive position. Assuming return team is at NVZ, aim to hit a ball that bounces in front of the transitioning serving team (preventing poach/attack).</p>
         <p>Importance: Opportunity to gain control, maintain position, limit opponent, set tempo.</p>
          {/* Button to launch quiz */}
         <SectionQuizButton categories={["Game Strategy"]} />
       </SubSection>

      <SubSection id="poaching" title="Poaching" delay={0.6} chapterNumber={7} subchapterNumber={6} accentColor="pink">
        <p className="mb-3">Crossing into partner's area to intercept and hit a ball.</p>
        <h4 className="font-semibold text-lg mb-2">When to Poach:</h4>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>Strong offensive position.</li>
          <li>Predictable opponent shots.</li>
          <li>Covering for out-of-position partner.</li>
          <li>After return of serve (partner at net poaches 3rd shot).</li>
          <li>To disrupt opponent strategy/rhythm.</li>
          <li>Confident in making effective shot.</li>
        </ul>
        <h4 className="font-semibold text-lg mb-2">Considerations:</h4>
         <ul className="list-disc pl-6 space-y-1 mb-3">
           <li>Communicate with partner (verbal/signals).</li>
           <li>Assess risk vs. reward (can leave court open).</li>
           <li>Be mindful of opponent skill (angles, quick shots).</li>
           <li>Avoid over-poaching (becomes predictable).</li>
         </ul>
         <h4 className="font-semibold text-lg mb-2">After Poaching:</h4>
         <ul className="list-disc pl-6 space-y-1">
           <li>Reposition quickly.</li>
           <li>Assess outcome to inform future decisions.</li>
         </ul>
          {/* Button to launch quiz */}
         <SectionQuizButton categories={["Game Strategy"]} />
      </SubSection>

      <SubSection id="serve-strategies" title="Serve Strategies" delay={0.7} chapterNumber={7} subchapterNumber={7} accentColor="pink">
        <h4 className="font-semibold text-lg mb-2">Serving Down the “T”:</h4>
        <div className="flex flex-col md:flex-row gap-6 mb-4">
          <div className="md:w-1/2">
            <p className="mb-3">Serving down the centerline towards the intersection with the service line.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Advantage:</strong> Reduces return angle, surprise element, can pressure backhand.</li>
              <li><strong>Doubles Use:</strong> Can disrupt receiving team formation/communication.</li>
              <li><strong>Requires:</strong> Precision and control.</li>
              <li><strong>Effective When:</strong> Mixed with other serves (wide, spin).</li>
              <li><strong>Note:</strong> High probability return is often straight back down the line.</li>
            </ul>
          </div>
           <div className="md:w-1/2 space-y-4">
            <div className="rounded-lg overflow-hidden shadow-md">
               {/* Placeholder - Update image path if available */}
              <img src="/images/serve-down-t-1.jpg" alt="Serve Down the T Diagram 1" className="w-full object-contain" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
               {/* Placeholder - Update image path if available */}
              <img src="/images/serve-down-t-2.jpg" alt="Serve Down the T Diagram 2" className="w-full object-contain" />
            </div>
          </div>
        </div>
         <h4 className="font-semibold text-lg mb-2">Lob Serve:</h4>
         <p className="mb-3">High, loopy serve landing deep. Can elicit shorter return, allowing serving team control.</p>
         <ul className="list-disc pl-6 space-y-1">
           <li>Puts pressure on receiver.</li>
           <li>Can create opportunities for 3rd shot.</li>
           <li>Keeps opponents guessing, forces backward movement.</li>
           <li>Effectiveness depends on execution (avoid short lobs).</li>
         </ul>
          {/* Button to launch quiz */}
         <SectionQuizButton categories={["Shot Techniques", "Game Strategy"]} />
      </SubSection>

      <SubSection id="returning-serve" title="Returning the Serve" delay={0.8} chapterNumber={7} subchapterNumber={8} accentColor="pink">
         <h4 className="font-semibold text-lg mb-2">Return Down the Line:</h4>
         <p className="mb-3">Hitting return parallel to sideline. Can position returner closer to middle for better point control (intercept shots, set angles).</p>
         <h4 className="font-semibold text-lg mb-2">Return Positioning:</h4>
         <ul className="list-disc pl-6 space-y-1 mb-3">
           <li>Start behind baseline (space/time to react).</li>
           <li>Center yourself slightly (adjust based on server).</li>
           <li>Body orientation ready to move any direction (split-stance helps forward motion).</li>
           <li>Paddle ready (waist height).</li>
           <li>Watch server (position, paddle movement).</li>
           <li>Adjust to serve (forward for short, sideways for wide).</li>
           <li>Transition towards NVZ after return.</li>
         </ul>
         <h4 className="font-semibold text-lg mb-2">Return Variety:</h4>
         <ul className="list-disc pl-6 space-y-1">
           <li>Change pace (fast vs. slow).</li>
           <li>Vary depth (deep vs. short - short usually not ideal).</li>
           <li>Use spin (topspin, backspin, sidespin).</li>
           <li>Alter direction (cross-court, down-line, middle).</li>
           <li>Target weaknesses.</li>
           <li>Adapt to opponents.</li>
         </ul>
          {/* Button to launch quiz */}
         <SectionQuizButton categories={["Shot Techniques", "Game Strategy"]} />
      </SubSection>

      <SubSection id="stacking" title="Stacking" delay={0.9} chapterNumber={7} subchapterNumber={9} accentColor="pink">
        <p className="mb-3">Strategic positioning in doubles to maximize strengths/exploit weaknesses.</p>
        <h4 className="font-semibold text-lg mb-2">Types/Aspects:</h4>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li><strong>Regular Stacking:</strong> Often involves specific player (e.g., right-hander) serving first from right side, partner on left, aiming for forehands in middle. Rotation based on point outcome.</li>
          <li><strong>Signal Stacking:</strong> Using hand signals or verbal cues to communicate shot intentions or movements (e.g., switch sides, lob).</li>
          <li><strong>Half Stacking:</strong> Variation where one partner starts closer to centerline (e.g., left-hander) to control middle with forehand. Rotation follows point outcome.</li>
        </ul>
         <h4 className="font-semibold text-lg mb-2">Handling Return When Stacking:</h4>
         <ul className="list-disc pl-6 space-y-1">
           <li>Often, partner closer to middle takes initial return.</li>
           <li>Server covers their side, ready to help middle.</li>
           <li>Quick transition to desired stacked positions after return.</li>
           <li>Clear communication essential.</li>
           <li>Adapt based on return quality.</li>
         </ul>
          {/* Button to launch quiz */}
         <SectionQuizButton categories={["Game Strategy"]} />
      </SubSection>

       <SubSection id="doubles-strategy" title="Doubles Strategy Considerations" delay={1.0} chapterNumber={7} subchapterNumber={10} accentColor="pink">
         <h4 className="font-semibold text-lg mb-2">Timing and Trust:</h4>
         <ul className="list-disc pl-6 space-y-1 mb-3">
           <li><strong>Timing:</strong> Shot coordination, synchronized movement, building momentum, controlling pace.</li>
           <li><strong>Trust:</strong> Court coverage, shot selection, communication, emotional support, allows calculated risks.</li>
         </ul>
         <h4 className="font-semibold text-lg mb-2">Identify Strengths (Individual/Team):</h4>
         <ul className="list-disc pl-6 space-y-1 mb-3">
           <li>Play to dominant side, effective serving, aggressive net play, mobility/coverage, consistency, communication, strategy/shot selection, mental toughness, adaptability. Practice together.</li>
         </ul>
         <h4 className="font-semibold text-lg mb-2">Expose Weaknesses (Opponent):</h4>
         <ul className="list-disc pl-6 space-y-1">
           <li>Observe patterns, target weaker side (forehand/backhand), vary shots (angle, speed, spin), change pace, move opponent, use drop shots, serve strategically, stay composed, adapt during game, communicate with partner.</li>
         </ul>
          {/* Button to launch quiz */}
         <SectionQuizButton categories={["Game Strategy"]} />
       </SubSection>
    </ChapterSection>
  );
};
