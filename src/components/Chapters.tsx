import React from 'react';
import { ChapterSection, SubSection, ContentCard } from './ChapterSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Chapter 1: Introduction
 */
export const IntroductionChapter: React.FC = () => {
  return (
    <ChapterSection id="introduction" number={1} title="Introduction to PPR Level 2 Certification">
      <ContentCard>
        <p className="mb-4">Welcome to the PPR (Professional Pickleball Registry) Level 2 Certification interactive study guide. This comprehensive resource is designed to help you prepare for your Level 2 certification assessment.</p>
        <p className="mb-4">As a Level 2 certified instructor, you'll possess the advanced skills, knowledge, and teaching abilities to effectively instruct and coach intermediate to advanced pickleball players. This certification represents a significant step in your professional development as a pickleball instructor.</p>
      </ContentCard>
      
      <SubSection 
        id="comparison" 
        title="Level 1 vs Level 2: What's Different?" 
        delay={0.1}
        chapterNumber={1}
        subchapterNumber={1}
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
      </SubSection>
      
      <SubSection 
        id="preparation" 
        title="Preparation" 
        delay={0.2}
        chapterNumber={1}
        subchapterNumber={2}
        accentColor="primary"
      >
        <p className="mb-4">Before attending the Level 2 certification workshop, coaches should review the materials provided and familiarize themselves with the concepts covered in Level 1. This preparation will ensure a smoother learning experience during the workshop.</p>
        
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
          <h4 className="font-semibold text-blue-700 mb-2">Certification Tip</h4>
          <p>Practice your demonstration skills extensively. As a Level 2 instructor, your ability to clearly demonstrate proper technique is critical to the assessment process.</p>
        </div>
      </SubSection>
    </ChapterSection>
  );
};

/**
 * Chapter 2: Equipment and Safety
 */
export const EquipmentSafetyChapter: React.FC = () => {
  return (
    <ChapterSection id="equipment-safety" number={2} title="Equipment and Safety">
      <SubSection 
        id="equipment" 
        title="Equipment" 
        delay={0.1}
        chapterNumber={2}
        subchapterNumber={1}
        accentColor="blue"
      >
        <p className="mb-4">For effective and safe recreational or competitive play, one must have the right equipment.</p>
        
        <h4 className="font-semibold text-lg mb-2">Essential Items:</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Pickleball Paddle:</strong> Choose a paddle that feels comfortable in your hand, with the right weight and grip size for your style of play.</li>
          <li><strong>Pickleball Balls:</strong> There are balls specifically designed for pickleball, differing for indoor and outdoor play. Ensure you have the appropriate type.</li>
          <li><strong>Proper Footwear:</strong> Wear court shoes that provide good support and traction to prevent slips and falls. Pickleball involves a lot of lateral movement, so proper shoes are crucial.</li>
          <li><strong>Comfortable Clothing:</strong> Wear lightweight, breathable athletic clothing that allows easy movement.</li>
          <li><strong>Protective Eyewear:</strong> Important for pickleball players of all levels to wear protective eyewear to avoid injury from a paddle swing, flying balls and/or balls ricocheting off of a paddle.</li>
        </ul>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon="water" className="text-blue-500 mr-2" />
              <h5 className="font-semibold">Hydration</h5>
            </div>
            <p className="text-sm">Always bring a water bottle, especially during long games or in hot weather.</p>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon="first-aid" className="text-red-500 mr-2" />
              <h5 className="font-semibold">First Aid</h5>
            </div>
            <p className="text-sm">Have a basic first aid kit handy for minor injuries like cuts or scrapes.</p>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon="sun" className="text-yellow-500 mr-2" />
              <h5 className="font-semibold">Sun Protection</h5>
            </div>
            <p className="text-sm">If playing outdoors, use sunscreen, sunglasses, and a hat or visor to protect against sun exposure.</p>
          </div>
        </div>
      </SubSection>
      
      <SubSection 
        id="safety" 
        title="Safety" 
        delay={0.2}
        chapterNumber={2}
        subchapterNumber={2}
        accentColor="blue"
      >
        <p className="mb-4">Safety when playing pickleball is important to prevent injuries and ensure an enjoyable experience.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <h4 className="font-semibold text-lg mb-2">Key Safety Tips:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Warm-Up Properly:</strong> Before starting a game, do a proper warm-up that includes light cardio and dynamic stretching to get your muscles ready and reduce the risk of injury.</li>
              <li><strong>Wear Appropriate Gear:</strong> Use proper court shoes that provide good support and traction to avoid slips and falls.</li>
              <li><strong>Stay Hydrated:</strong> Drink plenty of water before, during, and after play to avoid dehydration especially on hot days.</li>
              <li><strong>Understand and Follow the Rules:</strong> Knowing the rules of the game can help avoid dangerous play and misunderstandings on the court.</li>
              <li><strong>Respect Non-Volley Zone Rules:</strong> Be cautious around the Non-Volley Zone (NVZ) to avoid stepping in it on volleys, which can lead to falls or ankle sprains.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Additional Safety Considerations:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Be Aware of Your Surroundings:</strong> Pay attention to other players and obstacles around you to prevent collisions and falls.</li>
              <li><strong>Know Your Limits:</strong> Play at a level and intensity that is suitable for your fitness and skill level. Overexerting yourself can lead to injuries.</li>
              <li><strong>Maintain a Safe Playing Environment:</strong> Ensure the playing surface is clean, dry, and free of hazards like puddles, debris, or cracks.</li>
              <li><strong>Listen to Your Body:</strong> If you feel pain or discomfort, stop playing and rest. Ignoring signals from your body can lead to more serious injuries.</li>
              <li><strong>Stay Cool:</strong> In hot weather, take breaks in the shade and use cooling towels or fans to prevent overheating.</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h4 className="font-semibold text-yellow-700 mb-2">Important Safety Note</h4>
          <p>Always prioritize safety over competition. No point is worth risking injury to yourself or others.</p>
        </div>
      </SubSection>
    </ChapterSection>
  );
};

/**
 * Chapter 3: Grip Techniques
 */
export const GripTechniquesChapter: React.FC = () => {
  return (
    <ChapterSection id="grip-techniques" number={3} title="Grip Techniques">
      <SubSection 
        id="general-grip" 
        title="General Grip Information" 
        delay={0.1}
        chapterNumber={3}
        subchapterNumber={1}
        accentColor="green"
      >
        <p className="mb-4">The grip used to hold the paddle is a fundamental aspect of playing pickleball effectively for several reasons:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2 text-primary-600">Control and Accuracy</h4>
            <p>A proper grip allows for greater control and accuracy in your shots. It helps in precisely directing the ball, whether you are serving, volleying, or hitting groundstrokes.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2 text-primary-600">Power</h4>
            <p>While pickleball does not rely on power as much as other racquet sports, a good grip can still help in generating more force in your shots, especially for smashes and drives.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2 text-primary-600">Reduced Risk of Injury</h4>
            <p>An appropriate grip can reduce the strain on your wrist, elbow, and shoulder. This is particularly important for avoiding conditions like tennis elbow, which can occur from repetitive strain.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2 text-primary-600">Versatility in Shots</h4>
            <p>A good grip enables you to easily switch between different types of shots, like from a forehand to a backhand, or transitioning from a groundstroke to a volley.</p>
          </div>
        </div>
      </SubSection>
      
      <SubSection 
        id="continental" 
        title="The Continental Grip" 
        delay={0.2}
        chapterNumber={3}
        subchapterNumber={2}
        accentColor="green"
      >
        <div className="flex flex-col md:flex-row gap-6 mb-4">
          <div className="md:w-1/2">
            <p className="mb-4">The Continental grip in pickleball is a versatile and widely used grip, especially useful for a variety of shots. It is often referred to as the "hammer grip" due to the way the paddle is held, similar to holding a hammer.</p>
            
            <h4 className="font-semibold text-lg mb-2">Key Elements:</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Grip Formation:</strong> To achieve the Continental grip, place your hand on the paddle handle so that the base knuckle of your index finger and the heel of your hand are aligned with the second bevel of the paddle handle.</li>
              <li><strong>Characteristics:</strong> This grip aligns the paddle perpendicular to the ground and parallel to the net when your arm is extended. It allows for easy transitions between forehand and backhand strokes without the need to change the grip.</li>
              <li><strong>Advantages:</strong> Particularly effective for serves, volleys, and overhead smashes in pickleball. It provides a natural and balanced position for hitting the ball flat and straight, making it ideal for quick, reflex volleys at the net.</li>
            </ol>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/images/continental-grip.jpg" 
                alt="Continental Grip Demonstration" 
                className="w-full object-contain" 
              />
            </div>
          </div>
        </div>
      </SubSection>
    </ChapterSection>
  );
};

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
      </SubSection>
    </ChapterSection>
  );
};
