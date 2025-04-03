import React from 'react';
import { ChapterSection, SubSection, ContentCard } from '../ChapterSection'; // Adjust import path
import { SectionQuizButton } from '../quiz/SectionQuizButton'; // Import the new button component

/**
 * Chapter 6: Skill Development
 */
export const SkillDevelopmentChapter: React.FC = () => {
  return (
    <ChapterSection id="skill-development" number={6} title="Skill Development">
      <ContentCard>
        <p>This section represents the CLOSED section of the Hourglass format where we will introduce and teach several shots appropriate for players moving from the 3.5 to 4.0 level.</p>
      </ContentCard>

      {/* Swing Volley */}
      <SubSection id="swing-volley" title="Swing Volley" delay={0.1} chapterNumber={6} subchapterNumber={1} accentColor="amber">
        <p className="mb-3">A dynamic shot combining volley and groundstroke elements, hit out of the air with a full swing, usually near the NVZ. Used to apply pressure, create angles, or hit winners.</p>
        <h4 className="font-semibold text-lg mb-2">Technical Aspects:</h4>
        <ol className="list-decimal pl-6 space-y-1 mb-3">
          <li><strong>Position:</strong> Knees bent, weight on balls of feet, paddle up at chest level.</li>
          <li><strong>Grip/Paddle:</strong> Firm but relaxed grip, paddle face slightly open.</li>
          <li><strong>Backswing:</strong> Minimal. Power from ball speed and controlled paddle movement.</li>
          <li><strong>Movement:</strong> Short, slight swinging motion; guide the ball.</li>
          <li><strong>Contact Point:</strong> In front of the body.</li>
          <li><strong>Follow Through:</strong> Short and controlled; return to neutral.</li>
          <li><strong>Body Power:</strong> Use body (slight forward movement, weight transfer) for aggressive volleys.</li>
          <li><strong>Placement:</strong> Aim deliberately (away from opponent, difficult areas).</li>
          <li><strong>Footwork:</strong> Quick feet essential for optimal positioning.</li>
          <li><strong>Anticipation:</strong> Be alert and react quickly.</li>
        </ol>
        <h4 className="font-semibold text-lg mb-2">Tactical Aspects:</h4>
         <ul className="list-disc pl-6 space-y-1 mb-3">
           <li><strong>Consistency:</strong> Reliably execute volleys. Place shots accurately, maintain stable paddle work, good positioning/footwork, adapt to ball/opponents, reduce errors, strategic awareness (soft vs. hard volley).</li>
           <li><strong>Accuracy:</strong> Precision in placement. Target areas, control angles/depth, select right volley type, adjust to speed/spin, maintain accuracy under pressure.</li>
         </ul>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Shot Techniques"]} />
      </SubSection>

       {/* Blocking */}
       <SubSection id="blocking" title="Blocking" delay={0.2} chapterNumber={6} subchapterNumber={2} accentColor="amber">
         <p className="mb-3">A defensive shot to neutralize power (smashes, hard drives). Goal: absorb power, return gently over the net, place strategically.</p>
         <h4 className="font-semibold text-lg mb-2">Key Aspects:</h4>
         <ol className="list-decimal pl-6 space-y-1">
           <li><strong>Soft Hands:</strong> Relaxed grip to absorb energy.</li>
           <li><strong>Paddle Position:</strong> Up and in front, ready position.</li>
           <li><strong>Movement:</strong> Minimal paddle movement; position paddle, let ball hit.</li>
           <li><strong>Paddle Angle:</strong> Slightly open (upwards) to clear net and control direction.</li>
           <li><strong>Body Position:</strong> Balanced, knees bent; move body as a unit.</li>
           <li><strong>Placement:</strong> Aim where opponent cannot attack easily (NVZ, feet).</li>
           <li><strong>Follow Through:</strong> Minimal for control.</li>
           <li><strong>Recovery:</strong> Quick recovery for next shot.</li>
         </ol>
          {/* Button to launch quiz */}
         <SectionQuizButton categories={["Shot Techniques"]} />
       </SubSection>

        {/* Counter Attack */}
       <SubSection id="counter-attack" title="Counter Attack" delay={0.3} chapterNumber={6} subchapterNumber={3} accentColor="amber">
         <p className="mb-3">Responding aggressively to an opponent's attack, turning defense into offense.</p>
         <h4 className="font-semibold text-lg mb-2">Key Aspects:</h4>
         <ol className="list-decimal pl-6 space-y-1">
           <li><strong>Quick Reaction:</strong> Fast reflexes needed.</li>
           <li><strong>Placement:</strong> Aim where difficult to return (feet, open court, weaker side).</li>
           <li><strong>Use Pace:</strong> Redirect opponent's power effectively.</li>
           <li><strong>Paddle Readiness:</strong> Paddle up for quick transition.</li>
           <li><strong>Body Positioning:</strong> Balanced, ready to move; good footwork.</li>
           <li><strong>Shot Selection:</strong> Quick decision (drive, volley, placement).</li>
           <li><strong>Mental Composure:</strong> Stay calm under pressure.</li>
           <li><strong>Aggressive Play:</strong> Assertive strategy, willingness to take risks.</li>
         </ol>
          {/* Button to launch quiz */}
         <SectionQuizButton categories={["Shot Techniques"]} />
       </SubSection>

        {/* Handling Power */}
       <SubSection id="handling-power" title="Handling Power" delay={0.4} chapterNumber={6} subchapterNumber={4} accentColor="amber">
         <p className="mb-3">Managing and responding to powerful volleys from opponents.</p>
         <h4 className="font-semibold text-lg mb-2">Key Aspects:</h4>
         <ol className="list-decimal pl-6 space-y-1">
           <li><strong>Soft Hands:</strong> Relaxed grip, gentle touch to absorb power.</li>
           <li><strong>Paddle Positioning:</strong> Paddle up, in front, ready.</li>
           <li><strong>Body Position/Balance:</strong> Stable stance for controlled movement.</li>
           <li><strong>Strokes:</strong> Short, compact strokes for control.</li>
           <li><strong>Block Volleys:</strong> Use opponent's power to your advantage.</li>
           <li><strong>Angle/Placement:</strong> Redirect power with paddle angle.</li>
           <li><strong>Depth:</strong> Aim deep or soft into NVZ depending on situation.</li>
           <li><strong>Mental Composure:</strong> Stay calm and focused.</li>
         </ol>
          {/* Button to launch quiz */}
         <SectionQuizButton categories={["Shot Techniques"]} />
       </SubSection>

      {/* The Lob */}
      <SubSection id="lob" title="The Lob" delay={0.5} chapterNumber={6} subchapterNumber={5} accentColor="amber">
        <p className="mb-3">A strategic shot hit in a high arc over opponents, ideally landing deep.</p>
         <h4 className="font-semibold text-lg mb-2">Technical Aspects:</h4>
         <ol className="list-decimal pl-6 space-y-1 mb-3">
           <li><strong>Stance/Footwork:</strong> Balanced stance, ready to step in.</li>
           <li><strong>Grip/Paddle:</strong> Relaxed grip, open paddle face (tilted back).</li>
           <li><strong>Backswing/Contact:</strong> Smooth backswing, contact slightly under ball in front of body.</li>
           <li><strong>Swing Path:</strong> Upward motion for lift and arc.</li>
           <li><strong>Follow Through:</strong> Continue upward motion to guide ball.</li>
           <li><strong>Awareness:</strong> Know opponents' positions (best when they are at net).</li>
           <li><strong>Control/Precision:</strong> Control depth and height to land deep but in bounds.</li>
           <li><strong>Adjust:</strong> Adapt to wind, play style, court position.</li>
         </ol>
         <h4 className="font-semibold text-lg mb-2">Tactical Aspects:</h4>
         <ul className="list-disc pl-6 space-y-1 mb-3">
           <li><strong>Consistency:</strong> Reliably execute lobs. Accurate placement, controlled arc/depth, adaptability, reduced errors, strategic usage.</li>
           <li><strong>Accuracy:</strong> Precision in placement. Target areas, control trajectory, manage depth, adjust to conditions, purposeful use.</li>
           <li><strong>Offensive Lob:</strong> Proactive shot to gain advantage. Surprise element, lower/faster trajectory, aims deep to push opponents back, requires control/precision.</li>
           <li><strong>Defending the Lob:</strong> Anticipate, position correctly (just behind NVZ line), ready stance, turn and move back efficiently, paddle ready, communicate in doubles, judge depth, transition back quickly.</li>
         </ul>
          {/* Button to launch quiz */}
         <SectionQuizButton categories={["Shot Techniques"]} />
      </SubSection>

      {/* Overhead */}
      <SubSection id="overhead" title="Overhead" delay={0.6} chapterNumber={6} subchapterNumber={6} accentColor="amber">
        <p className="mb-3">Used to put away high balls or return lobs.</p>
         <h4 className="font-semibold text-lg mb-2">Technical Execution:</h4>
         <ol className="list-decimal pl-6 space-y-1 mb-3">
           <li><strong>Identify Opportunity:</strong> Watch for lob/high ball.</li>
           <li><strong>Position:</strong> Move quickly under ball, slightly behind it.</li>
           <li><strong>Stance:</strong> Balanced, slightly side-on, feet shoulder-width. Sideways shuffle when moving back.</li>
           <li><strong>Grip:</strong> Continental grip.</li>
           <li><strong>Backswing:</strong> Paddle back and up, arm bent, above/behind head. Non-paddle hand tracks ball/balances.</li>
           <li><strong>Eye on Ball:</strong> Track ball through contact.</li>
           <li><strong>Step/Swing:</strong> Step forward, transfer weight, uncoil body (legs, hips, arm).</li>
           <li><strong>Contact Point:</strong> Above and slightly in front of head for downward trajectory.</li>
           <li><strong>Follow Through:</strong> Continue swing towards target.</li>
           <li><strong>Recovery:</strong> Return quickly to ready position.</li>
         </ol>
         <h4 className="font-semibold text-lg mb-2">Tactical & Safety:</h4>
         <ul className="list-disc pl-6 space-y-1 mb-3">
           <li><strong>Safety (Executing):</strong> Balanced stance, watch ball, correct technique (body rotation), controlled grip, avoid overreaching, clear space.</li>
           <li><strong>Safety (Defending):</strong> Anticipate/position, ready stance, use paddle for protection, don't sacrifice safety, communicate, wear protective gear.</li>
           <li><strong>Placement:</strong> Aim deep, target weakness, hit middle (doubles), vary shots, use angles, aim for corners, watch opponent positioning, force high return, balance power/control, use spin wisely.</li>
         </ul>
          {/* Button to launch quiz */}
         <SectionQuizButton categories={["Shot Techniques"]} />
      </SubSection>

      {/* Around the Post (ATP) */}
      <SubSection id="atp" title="Around the Post (ATP)" delay={0.7} chapterNumber={6} subchapterNumber={7} accentColor="amber">
         <p className="mb-3">Hitting the ball around the net post when it's moving at a sharp angle near the sideline.</p>
         <h4 className="font-semibold text-lg mb-2">Technical Aspects:</h4>
         <ol className="list-decimal pl-6 space-y-1 mb-3">
           <li><strong>Positioning:</strong> Near sideline, ball coming at angle making over-net shot difficult.</li>
           <li><strong>Swing/Contact:</strong> Wide, sweeping motion. Contact ball at lowest point beside net post, angling around it.</li>
           <li><strong>Clearing Net:</strong> Ball must go around post and land within opponent's court boundaries.</li>
           <li><strong>Recovery:</strong> Reposition quickly after shot.</li>
         </ol>
         <p className="mb-3 italic">Note: High-risk, high-reward shot requiring exceptional timing and accuracy. Not recommended for routine play.</p>
         <h4 className="font-semibold text-lg mb-2">Tactical (Defending):</h4>
         <ul className="list-disc pl-6 space-y-1">
           <li>Anticipate (watch for wide, low shots setting it up).</li>
           <li>Position towards sideline, slightly back.</li>
           <li>Watch opponent's paddle/body language.</li>
           <li>Keep paddle ready for quick reaction.</li>
           <li>Be mindful of NVZ when moving laterally.</li>
           <li>Communicate in doubles.</li>
           <li>Stay balanced.</li>
           <li>Expect unusual angles/spins.</li>
           <li>Counter with an angle if possible.</li>
         </ul>
          {/* Button to launch quiz */}
         <SectionQuizButton categories={["Shot Techniques"]} />
      </SubSection>

      {/* Erne */}
      <SubSection id="erne" title="Erne" delay={0.8} chapterNumber={6} subchapterNumber={8} accentColor="amber">
        <p className="mb-3">Advanced shot involving quickly moving from near the sideline to the opposite side of the net post to intercept and hit the ball (often a volley).</p>
         <h4 className="font-semibold text-lg mb-2">Technical Aspects:</h4>
         <ol className="list-decimal pl-6 space-y-1 mb-3">
           <li><strong>Positioning:</strong> Start close to sideline near NVZ, anticipating shot near post.</li>
           <li><strong>Movement:</strong> Quick dart to opposite side of post, staying outside NVZ.</li>
           <li><strong>Execution:</strong> Hit ball before it crosses net (if volleying), quick compact swing, angle away from opponent.</li>
         </ol>
         <p className="mb-3 italic">Note: High-risk, high-reward advanced shot requiring timing, agility, anticipation.</p>
         <h4 className="font-semibold text-lg mb-2">Tactical (Defending):</h4>
         <ul className="list-disc pl-6 space-y-1">
           <li>Be aware of opponent positioning near sideline.</li>
           <li>Avoid predictable soft shots (dinks) to that area.</li>
           <li>Hit deeper shots.</li>
           <li>Target the opposite side of the court.</li>
           <li>Speed up the ball (drive).</li>
           <li>Keep shots low and tight over net.</li>
           <li>Communicate in doubles.</li>
           <li>Watch for NVZ violation by opponent.</li>
           <li>Practice defensive positioning.</li>
           <li>Stay calm and focused.</li>
         </ul>
          {/* Button to launch quiz */}
         <SectionQuizButton categories={["Shot Techniques"]} />
      </SubSection>
    </ChapterSection>
  );
};
