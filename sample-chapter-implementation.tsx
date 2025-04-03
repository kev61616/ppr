// Example implementation of Chapter 6: Skill Development

import { ChapterSection } from '../components/ChapterSection';
import { SubSection } from '../components/SubSection';
import { ContentCard } from '../components/ContentCard';
import { Collapsible } from '../components/Collapsible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VideoContainer } from '../components/interactive/VideoContainer';
import { TechniqueComparison } from '../components/interactive/TechniqueComparison';
import { CourtDiagram } from '../components/interactive/CourtDiagram';

export const SkillDevelopmentChapter: React.FC = () => {
  return (
    <ChapterSection id="skill-development" title="6. Skill Development">
      <p className="mb-6">
        This section represents the CLOSED section of the Hourglass format where we will introduce 
        and teach several shots that are appropriate for players moving from the 3.5 to 4.0 level.
      </p>
      
      {/* 6.1 Swing Volley */}
      <SubSection id="swing-volley" title="Swing Volley" delay={0.1}>
        <p className="mb-4">
          This is a dynamic shot that combines elements of both a volley and a groundstroke. 
          The Swing Volley is hit out of the air with a full swing, usually while standing near 
          the NVZ. This is a versatile shot that can be used to put pressure on the opponents, 
          create angles, or hit winners.
        </p>
        
        {/* 6.1.1 Technique */}
        <h4 className="font-semibold text-lg mb-2">Technique</h4>
        <p className="mb-4">
          Swing Volley technique in pickleball is crucial for effectively hitting the ball out of 
          the air before it bounces on the court. This shot is typically executed near the net, 
          typically at or close to the NVZ, but it can also be hit when transitioning.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 mb-4">
          <div className="md:w-1/2">
            <h4 className="font-semibold text-lg mb-2">Key Components:</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Position:</strong> Stand with knees slightly bent, weight on the balls of your feet, and paddle held in front of you at chest level.</li>
              <li><strong>Grip and Paddle Position:</strong> Hold the paddle with a firm yet relaxed grip. The paddle face should be open (angled slightly upwards).</li>
              <li><strong>Minimal Backswing:</strong> Unlike groundstrokes, volleys require very little backswing.</li>
              <li><strong>Contact Point:</strong> Make contact with the ball in front of your body for better accuracy and control.</li>
              <li><strong>Follow Through:</strong> Keep the follow-through short and controlled. Return to neutral position quickly.</li>
            </ol>
          </div>
          <div className="md:w-1/2">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-blue-700">Teaching Progression</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>Demonstrate proper stance and paddle position</li>
                <li>Practice without a ball to develop muscle memory</li>
                <li>Begin with slow feeds directly to the player</li>
                <li>Gradually increase ball speed and add movement</li>
                <li>Incorporate decision-making (when to swing vs block)</li>
              </ul>
            </div>
            
            <div className="tip-card mt-4">
              <h4 className="font-semibold text-blue-700">Coaching Tip</h4>
              <p>Many players over-swing on the volley. Encourage students to focus on control and placement before adding power.</p>
            </div>
          </div>
        </div>
        
        <VideoContainer 
          title="Swing Volley Technique" 
          description="Demonstration of proper swing volley technique and common errors to avoid" 
          videoPlaceholder="/images/video-placeholders/swing-volley.jpg"
          videoId="bz7fnb515gjw5csg"
        />
        
        {/* 6.1.2 Consistency */}
        <h4 className="font-semibold text-lg mb-2 mt-6">Consistency</h4>
        <p className="mb-4">
          Volley consistency refers to the ability to reliably and effectively execute volley shots 
          throughout a game or match. Consistency in volleying is crucial for maintaining control 
          during rallies and effectively countering the opponents' play.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h5 className="font-semibold mb-2">Elements of Volley Consistency</h5>
            <ul className="list-disc pl-5 space-y-1">
              <li>Controlled Shot Placement</li>
              <li>Steady Paddle Work</li>
              <li>Positioning and Footwork</li>
              <li>Adaptability to incoming shots</li>
              <li>Reduced Errors</li>
              <li>Strategic Awareness</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h5 className="font-semibold mb-2">Consistency Progression</h5>
            <p className="text-sm">As players advance from 3.5 to 4.0+, consistency evolves from:</p>
            <div className="mt-2">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm">Level 3.5: Number of shots landing in court</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Level 3.75: Shots to general target areas</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-sm">Level 4.0+: Precise placement to specific targets</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* 6.1.3 Accuracy */}
        <h4 className="font-semibold text-lg mb-2 mt-6">Accuracy</h4>
        <p className="mb-4">
          Volley accuracy refers to the precision with which a player executes their volley shots. 
          Accuracy in volleying is crucial for placing the ball effectively to challenge opponents, 
          control the point, and minimize the risk of unforced errors.
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="data-table">
            <thead>
              <tr>
                <th>Accuracy Aspect</th>
                <th>3.5 Level</th>
                <th>4.0+ Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Precise Placement</td>
                <td>General direction</td>
                <td>Specific targets (e.g., corners, middle)</td>
              </tr>
              <tr>
                <td>Controlled Angles</td>
                <td>Basic cross-court/down-line</td>
                <td>Sharp angles, varied trajectories</td>
              </tr>
              <tr>
                <td>Depth Control</td>
                <td>In bounds consistently</td>
                <td>Strategic depth to push opponents back</td>
              </tr>
              <tr>
                <td>Shot Selection</td>
                <td>Basic decision making</td>
                <td>Advanced tactical choices</td>
              </tr>
              <tr>
                <td>Under Pressure</td>
                <td>Maintains basic accuracy</td>
                <td>Precision even in fast exchanges</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* 6.1.4 Blocking */}
        <h4 className="font-semibold text-lg mb-2 mt-6">Blocking</h4>
        <p className="mb-4">
          Blocking refers to a defensive shot used to neutralize an opponent's powerful 
          or aggressive shot, particularly a smash or a hard-driven ball. The goal of a block 
          shot is to absorb the power of the incoming ball and return it gently over the net.
        </p>
        
        <TechniqueComparison 
          correctTechnique={{
            title: "Correct Blocking Technique",
            image: "/images/technique/correct-block.jpg",
            points: [
              "Relaxed grip - 'soft hands'",
              "Paddle positioned in front of body",
              "Minimal paddle movement",
              "Slight upward angle of paddle face",
              "Balanced stance with knees bent"
            ]
          }}
          incorrectTechnique={{
            title: "Common Blocking Errors",
            image: "/images/technique/incorrect-block.jpg",
            points: [
              "Tight grip causing ball to rebound too fast",
              "Swinging at the ball instead of blocking",
              "Paddle face angled down (into net)",
              "Stiff arms and locked elbows",
              "Off-balance stance"
            ]
          }}
        />
        
        {/* 6.1.5 Counter Attack */}
        <h4 className="font-semibold text-lg mb-2 mt-6">Counter Attack</h4>
        <p className="mb-4">
          Counter attacking refers to the strategy of responding aggressively to an opponent's attack, 
          turning a defensive situation into an offensive opportunity. This involves quickly and 
          decisively returning a strong shot from an opponent.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 mb-4">
          <div className="md:w-1/2">
            <CourtDiagram 
              showPlayers={true}
              showTrajectory={true}
              trajectoryPath="M150,400 C250,350 400,250 500,150"
            />
          </div>
          <div className="md:w-1/2">
            <h5 className="font-semibold mb-2">Counter Attack Strategy</h5>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Quick Reaction:</strong> Fast reflexes to respond to aggressive shots</li>
              <li><strong>Strategic Placement:</strong> Aim toward opponent's feet or gaps in coverage</li>
              <li><strong>Use Opponent's Pace:</strong> Redirect their power to your advantage</li>
              <li><strong>Paddle Readiness:</strong> Keep paddle up for quick transitions</li>
              <li><strong>Mental Composure:</strong> Stay calm during fast exchanges</li>
            </ul>
          </div>
        </div>
        
        <VideoContainer 
          title="Blocking vs Counter Attacking" 
          description="Learn when to block and when to counter attack based on the situation" 
          videoPlaceholder="/images/video-placeholders/blocking-counter.jpg"
          videoId="e4f74ovra3g9c2wm"
        />
        
        {/* 6.1.6 Handling Power */}
        <h4 className="font-semibold text-lg mb-2 mt-6">Handling Power</h4>
        <p className="mb-4">
          Handling power when volleying in pickleball refers to effectively managing and responding 
          to powerful volleys from your opponents. It involves techniques and strategies to control 
          and neutralize these fast, forceful shots rather than being overwhelmed by them.
        </p>
        
        <Collapsible title="Techniques for Handling Power">
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 text-blue-700">Physical Techniques</h5>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Soft hands with relaxed grip</li>
                  <li>Paddle positioned up and in front</li>
                  <li>Balanced, stable stance</li>
                  <li>Short, controlled strokes</li>
                  <li>Proper angle and placement</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 text-blue-700">Mental Techniques</h5>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Stay calm and focused</li>
                  <li>Anticipate powerful shots</li>
                  <li>Make quick decisions</li>
                  <li>Use visualization techniques</li>
                  <li>Maintain tactical awareness</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="font-semibold mb-2">Teaching Progression for Handling Power</h5>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Start with slow feeds to practice technique</li>
                <li>Gradually increase the pace of feeds</li>
                <li>Add movement and positioning challenges</li>
                <li>Incorporate reaction drills</li>
                <li>Practice in game-like situations</li>
              </ol>
            </div>
            
            <div className="warning-card mt-4">
              <h4 className="font-semibold text-amber-700">Common Teaching Error</h4>
              <p>Many coaches start with feeds that are too fast, causing students to develop bad habits. Start slow and focus on proper technique before increasing power.</p>
            </div>
          </div>
        </Collapsible>
      </SubSection>
      
      {/* Additional shots would follow the same pattern */}
      <SubSection id="the-lob" title="The Lob" delay={0.2}>
        {/* Lob content would go here */}
        <p className="mb-4">
          Lob technique refers to the specific method and skills used to execute a lob shot effectively. 
          A lob is a strategic play where the ball is hit in a high arc over the opponents, 
          ideally landing deep in their court.
        </p>
        {/* Additional content would be structured similarly to the Swing Volley section */}
      </SubSection>
      
      {/* Placeholder for the remaining sections */}
      <div className="text-center text-gray-500 italic p-8">
        Additional shot techniques (Overhead, Around the Post, Erne) would follow the same structure
      </div>
      
      {/* Chapter quiz */}
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500 mt-8">
        <h3 className="text-lg font-semibold mb-2">Chapter Quiz: Skill Development</h3>
        <p className="text-sm text-gray-600 mb-3">Test your knowledge on advanced shot techniques with these 5 focused questions.</p>
        {/* Quiz component would be inserted here */}
      </div>
    </ChapterSection>
  );
};
