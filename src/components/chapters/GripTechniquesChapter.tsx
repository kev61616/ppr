import React from 'react';
import { ChapterSection, SubSection, ContentCard } from '../ChapterSection'; // Adjust import path
import { SectionQuizButton } from '../quiz/SectionQuizButton'; // Import the new button component

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
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Grip Techniques"]} />
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
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Grip Techniques"]} />
      </SubSection>

      <SubSection
        id="eastern"
        title="The Eastern Grip"
        delay={0.3}
        chapterNumber={3}
        subchapterNumber={3}
        accentColor="green"
      >
        <div className="flex flex-col md:flex-row gap-6 mb-4">
          <div className="md:w-1/2">
            <p className="mb-4">The Eastern grip in pickleball is a commonly used grip that offers a good balance between power and control, especially for forehand shots.</p>
            <h4 className="font-semibold text-lg mb-2">Key Elements:</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Positioning:</strong> Place the palm of your dominant hand so that the base knuckle of your index finger is aligned with the third bevel of the paddle handle (3 o'clock for right-handed, 9 o'clock for left-handed).</li>
              <li><strong>Grip Formation:</strong> Similar to shaking hands with the paddle. Fingers wrap comfortably, thumb flat against the other side.</li>
              <li><strong>Advantages:</strong> Effective for forehand strokes, allowing a natural and powerful swing with a flat paddle face.</li>
              <li><strong>Forehand Orientation:</strong> Paddle face is perpendicular to the ground at contact, aiding depth and power.</li>
              <li><strong>Versatility:</strong> While favored for forehands, adjustments allow for other strokes, though some prefer Continental for backhands/dinks.</li>
            </ol>
          </div>
          <div className="md:w-1/2 space-y-4">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/images/eastern-grip-1.jpg" alt="Eastern Grip Demonstration 1" className="w-full object-contain" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/images/eastern-grip-2.jpg" alt="Eastern Grip Demonstration 2" className="w-full object-contain" />
            </div>
          </div>
        </div>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Grip Techniques"]} />
      </SubSection>

      <SubSection
        id="v-shape"
        title="The V-Shape Grip"
        delay={0.4}
        chapterNumber={3}
        subchapterNumber={4}
        accentColor="green"
      >
        <div className="flex flex-col md:flex-row gap-6 mb-4">
          <div className="md:w-1/2">
            <p className="mb-4">The V-Shape grip in pickleball, also known as the "V-Grip," is a specific way of holding the paddle that is quite popular among players.</p>
            <h4 className="font-semibold text-lg mb-2">Key Elements:</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Formation:</strong> Named for the V formed between the thumb and index finger on the handle.</li>
              <li><strong>Position:</strong> The V aligns with the edge of the paddle, maintaining a neutral position for forehand and backhand.</li>
              <li><strong>Benefits:</strong> Good balance of control and power, allows easier wrist movement for spin and quick shots. Useful for finesse players.</li>
              <li><strong>Usage:</strong> Primarily for baseline strokes and serves. Less common for net play or dinking (Continental often preferred).</li>
              <li><strong>Adaptability:</strong> Players often adjust slightly depending on the shot.</li>
            </ol>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/images/v-shape-grip.jpg" alt="V-Shape Grip Demonstration" className="w-full object-contain" />
            </div>
          </div>
        </div>
         {/* Button to launch quiz */}
         <SectionQuizButton categories={["Grip Techniques"]} />
      </SubSection>
    </ChapterSection>
  );
};
