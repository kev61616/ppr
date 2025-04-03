import React from 'react';
import { ChapterSection, SubSection, ContentCard } from '../ChapterSection'; // Adjust import path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Keep FontAwesome import
import { SectionQuizButton } from '../quiz/SectionQuizButton'; // Import the new button component

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
         {/* Button to launch quiz */}
         {/* Using Rules as the closest category */}
         <SectionQuizButton categories={["Rules and Officiating"]} />
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
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Rules and Officiating"]} />
      </SubSection>

       {/* Add SubSection for First Aid */}
       <SubSection
        id="first-aid"
        title="First Aid"
        delay={0.3}
        chapterNumber={2}
        subchapterNumber={3}
        accentColor="blue"
      >
        <p className="mb-4">Having a basic first aid kit is wise for minor injuries.</p>
        <h4 className="font-semibold text-lg mb-2">Essential Kit Items:</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Band-Aids (various sizes)</li>
          <li>Antiseptic Wipes</li>
          <li>Antibacterial Ointment</li>
          <li>Sterile Gauze Pads & Adhesive Tape</li>
          <li>Elastic Bandages/Compression Wraps (for sprains/strains)</li>
          <li>Ice Packs (instant or reusable)</li>
          <li>Pain Relievers (e.g., ibuprofen)</li>
          <li>Blister Treatment Pads</li>
          <li>Tweezers</li>
          <li>Scissors</li>
          <li>Disposable Gloves</li>
          <li>Sports Drink/Electrolyte Packets</li>
          <li>Sunscreen & Lip Balm (for outdoor play)</li>
          <li>First Aid Manual</li>
          <li>Emergency Contact Information</li>
        </ul>
        <p className="mt-3 italic">Seek professional medical attention for serious injuries.</p>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Rules and Officiating"]} />
       </SubSection>
    </ChapterSection>
  );
};
