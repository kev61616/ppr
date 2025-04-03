import { QuizQuestion } from './QuizTypes';

// Comprehensive question database organized by categories
export const questionDatabase: QuizQuestion[] = [
  // Grip Techniques Category
  {
    id: 101,
    category: "Grip Techniques",
    difficulty: "basic",
    question: "Which grip is most versatile for handling a variety of shots including volleys and dinks?",
    options: [
      { text: "Continental Grip", correct: true },
      { text: "Eastern Grip", correct: false },
      { text: "V-Shape Grip", correct: false },
      { text: "Western Grip", correct: false }
    ],
    explanation: "The Continental grip is the most versatile as it allows for easy transitions between forehand and backhand shots without changing grip, making it ideal for fast-paced exchanges at the net.",
    tip: "When teaching Continental grip, have students form a 'V' shape with their thumb and index finger along the edge of the paddle."
  },
  {
    id: 102,
    category: "Grip Techniques",
    difficulty: "basic",
    question: "Which grip is primarily used for powerful forehand shots?",
    options: [
      { text: "Continental Grip", correct: false },
      { text: "Eastern Grip", correct: true },
      { text: "V-Shape Grip", correct: false },
      { text: "Western Grip", correct: false }
    ],
    explanation: "The Eastern grip is commonly used for powerful forehand shots as it offers a good balance between power and control. It's particularly effective for forehand strokes, offering a natural and powerful swing motion.",
    tip: "When teaching the Eastern grip, start with a Continental grip and have students rotate their hand slightly clockwise (for right-handed players) until the base knuckle of the index finger is on the third bevel."
  },
  {
    id: 103,
    category: "Grip Techniques",
    difficulty: "intermediate",
    question: "What is a key advantage of the Continental grip?",
    options: [
      { text: "It produces maximum spin on the ball", correct: false },
      { text: "It's the easiest grip for beginners", correct: false },
      { text: "It allows for easy transitions between forehand and backhand strokes", correct: true },
      { text: "It's the most comfortable grip for long rallies", correct: false }
    ],
    explanation: "A key advantage of the Continental grip is that it allows for easy transitions between forehand and backhand strokes without changing grip, which is especially valuable during fast-paced exchanges at the net.",
    tip: "For teaching quick transitions, use drills that require students to alternate between forehand and backhand volleys rapidly, emphasizing grip stability throughout."
  },
  {
    id: 104,
    category: "Grip Techniques",
    difficulty: "advanced",
    question: "When using the Eastern backhand grip for a two-handed backhand, where should the index knuckle be positioned?",
    options: [
      { text: "On bevel 1", correct: false },
      { text: "On bevel 2", correct: false },
      { text: "On bevel 7", correct: true },
      { text: "On bevel 8", correct: false }
    ],
    explanation: "For the Eastern backhand grip used in a two-handed backhand, the index knuckle of the dominant hand should be positioned on bevel 7, which provides stability and control for backhand shots.",
    tip: "To help students find bevel 7 quickly, have them place the paddle face perpendicular to the ground with the edge facing them, then place their hand on the grip from that position."
  },

  // Teaching Methodology Category
  {
    id: 201,
    category: "Teaching Methodology",
    difficulty: "basic",
    question: "What is the primary purpose of the 'Hourglass Lesson Format'?",
    options: [
      { text: "To manage time efficiently in a one-hour lesson", correct: false },
      { text: "To guide players through different game situations with varying levels of structure", correct: true },
      { text: "To ensure equal time is spent on forehand and backhand", correct: false },
      { text: "To separate beginners from advanced players", correct: false }
    ],
    explanation: "The Hourglass Format is a structured approach to teaching pickleball that guides players through different game situations, from open play to focused skill development and back to game application.",
    tip: "When introducing the Hourglass Format to instructor candidates, use a visual diagram and walk through each phase with a real-world example to make the concept tangible."
  },
  {
    id: 202,
    category: "Teaching Methodology",
    difficulty: "intermediate",
    question: "Which section of the Hourglass format focuses on teaching technical skills to improve the game?",
    options: [
      { text: "Open", correct: false },
      { text: "Semi-Open", correct: false },
      { text: "Closed", correct: true },
      { text: "Semi-Closed", correct: false }
    ],
    explanation: "The 'Closed' section of the Hourglass format is where technical skills are taught to improve the game. This is the narrowest part of the hourglass where specific skills are developed.",
    tip: "In the Closed section, break down skills into clear, manageable components. Demonstrate each component slowly, then gradually build back to full speed execution."
  },
  {
    id: 203,
    category: "Teaching Methodology",
    difficulty: "intermediate",
    question: "What percentage of a lesson should be dedicated to Skill Development according to the recommended timeline?",
    options: [
      { text: "10%", correct: false },
      { text: "20-30%", correct: false },
      { text: "30-40%", correct: true },
      { text: "50-60%", correct: false }
    ],
    explanation: "According to the recommended lesson timeline, 30-40% of the time should be dedicated to Skill Development, which includes open competitive play observation, generating feedback, explaining, demonstrating, and teaching skills.",
    tip: "When planning lessons, use a timer or structured outline to ensure you're allocating the right amount of time to each phase of the Hourglass Format."
  },
  {
    id: 204,
    category: "Teaching Methodology",
    difficulty: "advanced",
    question: "What is the key difference between the Open and Semi-Open phases of the Hourglass Format?",
    options: [
      { text: "Open has no structure, while Semi-Open has minimal structure", correct: true },
      { text: "Open includes demonstration, while Semi-Open does not", correct: false },
      { text: "Open is for advanced players, while Semi-Open is for beginners", correct: false },
      { text: "Open requires partner work, while Semi-Open is individual", correct: false }
    ],
    explanation: "The key difference is that the Open phase has virtually no structure and is primarily for observation, while the Semi-Open phase introduces minimal structure or guidance while still allowing for free play.",
    tip: "When transitioning from Open to Semi-Open, clearly communicate one specific aspect to focus on without over-complicating instructions. This maintains the game flow while adding light direction."
  },

  // Shot Techniques Category
  {
    id: 301,
    category: "Shot Techniques",
    difficulty: "basic",
    question: "When executing a 'Swing Volley', what is the recommended backswing compared to groundstrokes?",
    options: [
      { text: "Longer backswing for more power", correct: false },
      { text: "The same backswing as groundstrokes", correct: false },
      { text: "Minimal backswing, power comes from ball speed and controlled movement", correct: true },
      { text: "No backswing at all", correct: false }
    ],
    explanation: "The Swing Volley requires a minimal backswing compared to groundstrokes. The power comes from the ball's incoming speed and your controlled movement, not from a large backswing.",
    tip: "When teaching the Swing Volley, emphasize that students should focus on paddle angle and contact point rather than generating power with a big backswing."
  },
  {
    id: 302,
    category: "Shot Techniques",
    difficulty: "basic",
    question: "Which of the following is a key element of blocking as a defensive shot?",
    options: [
      { text: "Using a full swing to counter the opponent's power", correct: false },
      { text: "Using soft hands to absorb power", correct: true },
      { text: "Hitting the ball with maximum force", correct: false },
      { text: "Aiming directly at the opponent", correct: false }
    ],
    explanation: "Blocking is a defensive shot that requires soft hands to absorb the power of the opponent's shot. Minimal paddle movement and proper positioning help redirect the ball effectively.",
    tip: "When teaching blocking, use the analogy of 'catching an egg' to help students understand the soft hands concept. Have them practice with progressively harder shots."
  },
  {
    id: 303,
    category: "Shot Techniques",
    difficulty: "intermediate",
    question: "When blocking an opponent's powerful shot, how should the paddle be positioned?",
    options: [
      { text: "Above your head for maximum reach", correct: false },
      { text: "Between your body and the net", correct: true },
      { text: "Close to the ground to catch low balls", correct: false },
      { text: "Behind your body to generate power", correct: false }
    ],
    explanation: "When blocking, the paddle should be positioned between your body and the net. This proper positioning helps to effectively neutralize the opponent's power shot.",
    tip: "To teach blocking, have students practice proper stance and paddle position before introducing live balls. Focus on stable positioning and quick reactions rather than power."
  },
  {
    id: 304,
    category: "Shot Techniques",
    difficulty: "intermediate",
    question: "What is the recommended contact point for a Swing Volley?",
    options: [
      { text: "Behind your body", correct: false },
      { text: "Directly above your head", correct: false },
      { text: "As far in front of your body as possible", correct: false },
      { text: "In front of your body for better accuracy and control", correct: true }
    ],
    explanation: "The recommended contact point for a Swing Volley is in front of your body, which provides better accuracy and control. This positioning allows you to direct the ball more effectively.",
    tip: "Use a physical marker like a cone or line to help students practice the correct contact point. Have them step forward to meet the ball in front of their body rather than reaching for it."
  },
  {
    id: 305,
    category: "Shot Techniques",
    difficulty: "advanced",
    question: "Which of the following shots is most effective against a hard-driven ball while you're at the non-volley zone?",
    options: [
      { text: "Hard counter-drive", correct: false },
      { text: "Reset (soft block)", correct: true },
      { text: "Overhead smash", correct: false },
      { text: "Lob", correct: false }
    ],
    explanation: "A reset (soft block) is most effective against a hard-driven ball when you're at the non-volley zone. It neutralizes the opponent's power and gives you time to reposition.",
    tip: "Teach students to angle their paddle face slightly upward when performing a reset, which helps to keep the ball low while absorbing power."
  },

  // Game Strategy Category
  {
    id: 401,
    category: "Game Strategy",
    difficulty: "basic",
    question: "In doubles play, what is the primary advantage of both players being at the non-volley zone line?",
    options: [
      { text: "It allows for more powerful shots", correct: false },
      { text: "It reduces the area your opponents can target", correct: true },
      { text: "It gives you more time to react", correct: false },
      { text: "It makes it easier to hit overheads", correct: false }
    ],
    explanation: "Having both players at the non-volley zone line reduces the court area your opponents can effectively target, forcing them to hit more difficult shots and increasing your chances of winning the point.",
    tip: "When teaching doubles positioning, use court markers to help students visualize how their position at the non-volley zone line shrinks the available court angles for opponents."
  },
  {
    id: 402,
    category: "Game Strategy",
    difficulty: "intermediate",
    question: "What is the most important consideration for the third shot in a typical doubles rally?",
    options: [
      { text: "Hitting with maximum power", correct: false },
      { text: "Creating a high arc over opponents", correct: false },
      { text: "Dropping the ball softly into the non-volley zone", correct: true },
      { text: "Aiming directly at one opponent", correct: false }
    ],
    explanation: "The most important consideration for the third shot is typically dropping the ball softly into the non-volley zone. This neutralizes the serving team's disadvantage and allows them to approach the net.",
    tip: "For teaching the third shot drop, emphasize a continental grip and a relaxed stroke that focuses more on touch than power. Have students practice making the ball land in the kitchen with minimal bounce."
  },
  {
    id: 403,
    category: "Game Strategy",
    difficulty: "advanced",
    question: "In mixed doubles, what strategy is generally recommended for shot direction when both opponents are at the non-volley zone?",
    options: [
      { text: "Always hit to the female player", correct: false },
      { text: "Always hit to the male player", correct: false },
      { text: "Hit down the middle between both players", correct: true },
      { text: "Alternate between both players equally", correct: false }
    ],
    explanation: "Hitting down the middle between both players creates confusion about who should take the shot, potentially leading to errors or weaker returns as players try to avoid colliding with their partners.",
    tip: "When teaching this strategy, set up drills where students practice precise targeting of the middle area between two opponents, focusing on accuracy rather than power."
  },
  {
    id: 404,
    category: "Game Strategy",
    difficulty: "advanced",
    question: "Which of the following factors is LEAST important when deciding whether to hit a third shot drop or drive?",
    options: [
      { text: "The position of your opponents", correct: false },
      { text: "The height of the returned serve", correct: false },
      { text: "Your partner's preferred strategy", correct: true },
      { text: "Your own position behind the baseline", correct: false }
    ],
    explanation: "While partner communication is important, the immediate tactical decision of whether to drop or drive should primarily be based on the ball you received and the opponents' positions, not predetermined preferences.",
    tip: "Teach students to make this decision based on objective factors of each specific situation rather than pre-set patterns. If the return is high, a drive might be better; if opponents are at the line, a good drop is usually preferred."
  },

  // Rules and Officiating Category
  {
    id: 501,
    category: "Rules and Officiating",
    difficulty: "basic",
    question: "What is the correct call when a player hits the ball before it bounces, while standing in the non-volley zone?",
    options: [
      { text: "Legal play - the point continues", correct: false },
      { text: "Fault - player loses the rally", correct: true },
      { text: "Warning - replay the point", correct: false },
      { text: "Depends on if the player stepped back out before contacting the ball", correct: false }
    ],
    explanation: "This is a fault - the player loses the rally. Players cannot volley the ball while standing in the non-volley zone (kitchen).",
    tip: "Create a drill where students practice recognizing and calling kitchen violations. This helps them internalize the rule while also preparing them for officiating scenarios."
  },
  {
    id: 502,
    category: "Rules and Officiating",
    difficulty: "intermediate",
    question: "During a tournament match, a ball from another court rolls into your court during a rally. What is the correct procedure?",
    options: [
      { text: "Immediately stop play and call a let", correct: true },
      { text: "Finish the rally, then decide if it was a hindrance", correct: false },
      { text: "Only stop if the ball interferes with a player", correct: false },
      { text: "Continue play unless the tournament director intervenes", correct: false }
    ],
    explanation: "The correct procedure is to immediately stop play and call a let when any foreign object enters the court. The point is replayed with no penalty.",
    tip: "When teaching tournament play, emphasize clear communication. Players should immediately call 'let' loudly so all players hear it, ensuring fair treatment of the situation."
  },
  {
    id: 503,
    category: "Rules and Officiating",
    difficulty: "advanced",
    question: "In a sanctioned tournament, what happens if a server's score call is challenged and found to be incorrect?",
    options: [
      { text: "The serving team automatically loses the rally", correct: false },
      { text: "A referee warning is issued to the serving team", correct: false },
      { text: "The score is corrected and the server re-serves with no penalty", correct: true },
      { text: "One serve is deducted from the server", correct: false }
    ],
    explanation: "In official tournament play, if a server calls the incorrect score, the score is simply corrected and the server re-serves with no penalty once all players acknowledge the correct score.",
    tip: "Teach players to listen carefully to score announcements and to speak up immediately if they think the wrong score was called, before the serve occurs."
  }
];

// Helper function to get questions by category
export const getQuestionsByCategory = (category: string): QuizQuestion[] => {
  return questionDatabase.filter(q => q.category === category);
};

// Helper function to get questions by difficulty
export const getQuestionsByDifficulty = (difficulty: 'basic' | 'intermediate' | 'advanced'): QuizQuestion[] => {
  return questionDatabase.filter(q => q.difficulty === difficulty);
};

// Helper function to get random questions
export const getRandomQuestions = (count: number, categories?: string[], excludeDifficulty?: 'basic' | 'intermediate' | 'advanced'): QuizQuestion[] => {
  let availableQuestions = [...questionDatabase];
  
  // Filter by categories if provided
  if (categories && categories.length > 0) {
    availableQuestions = availableQuestions.filter(q => categories.includes(q.category));
  }
  
  // Filter out questions by difficulty if needed
  if (excludeDifficulty) {
    availableQuestions = availableQuestions.filter(q => q.difficulty !== excludeDifficulty);
  }
  
  // Randomize questions
  availableQuestions.sort(() => Math.random() - 0.5);
  
  // Return requested number of questions (or all if count > available)
  return availableQuestions.slice(0, Math.min(count, availableQuestions.length));
};
