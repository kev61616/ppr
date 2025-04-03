// Chapter color mapping
export const colorsByChapter: Record<number, string> = {
  1: 'primary-600',
  2: 'blue-600',
  3: 'green-600',
  4: 'purple-600',
  5: 'teal-600',
  6: 'amber-600',
  7: 'pink-600',
  8: 'indigo-600',
  9: 'red-600'
};

// Navigation data structure with all 9 chapters
export const navigationData = [
  {
    id: 'introduction',
    number: 1,
    title: 'Introduction',
    subItems: [
      { id: 'about', title: 'About PPR Level 2' },
      { id: 'comparison', title: 'Level 1 vs Level 2' },
      { id: 'preparation', title: 'Preparation' }
    ]
  },
  {
    id: 'equipment-safety',
    number: 2,
    title: 'Equipment and Safety',
    subItems: [
      { id: 'equipment', title: 'Equipment' },
      { id: 'safety', title: 'Safety' },
      { id: 'first-aid', title: 'First Aid' }
    ]
  },
  {
    id: 'grip-techniques',
    number: 3,
    title: 'Grip Techniques',
    subItems: [
      { id: 'general-grip', title: 'General' },
      { id: 'continental', title: 'Continental Grip' },
      { id: 'eastern', title: 'Eastern Grip' },
      { id: 'v-shape', title: 'V-Shape Grip' }
    ]
  },
  {
    id: 'hourglass-format',
    number: 4,
    title: 'Hourglass Lesson Format',
    subItems: [
      { id: 'lesson-timeline', title: 'Lesson Timeline' },
      { id: 'technical-competencies', title: 'Technical Competencies' },
      { id: 'tactical-competencies', title: 'Tactical Competencies' }
    ]
  },
  {
    id: 'opening-lesson',
    number: 5,
    title: 'Opening the Lesson',
    subItems: [
      { id: 'lesson-intro', title: 'Introduction' },
      { id: 'warmup', title: 'Warm-Up' },
      { id: 'athlete-activation', title: 'Athlete Activation' },
      { id: 'dynamic-stretching', title: 'Dynamic Stretching' },
      { id: 'athletic-skill', title: 'Athletic Skill Build' },
      { id: 'paddle-hits', title: 'Paddle Hits' }
    ]
  },
  {
    id: 'skill-development',
    number: 6,
    title: 'Skill Development',
    subItems: [
      { id: 'swing-volley', title: 'Swing Volley' },
      { id: 'lob', title: 'The Lob' },
      { id: 'overhead', title: 'Overhead' },
      { id: 'atp', title: 'Around the Post (ATP)' },
      { id: 'erne', title: 'Erne' }
    ]
  },
  {
    id: 'advanced-strategies',
    number: 7,
    title: 'Advanced Strategies',
    subItems: [
      { id: 'middle-opportunities', title: 'Creating Opportunities in the Middle' },
      { id: 'transition-zone', title: 'Transition Zone Strategy' },
      { id: 'poaching', title: 'Poaching' },
      { id: 'serve-strategies', title: 'Serve Strategies' },
      { id: 'returning-serve', title: 'Returning the Serve' },
      { id: 'stacking', title: 'Stacking' },
      { id: 'doubles-strategy', title: 'Doubles Strategy' }
    ]
  },
  {
    id: 'closing-lesson',
    number: 8,
    title: 'Closing the Lesson',
    subItems: [
      { id: 'static-cool-down', title: 'Static Cool Down' },
      { id: 'lesson-recap', title: 'Lesson Recap' },
      { id: 'homework', title: 'Homework' }
    ]
  },
  {
    id: 'additional-resources',
    number: 9,
    title: 'Additional Resources',
    subItems: [
      { id: 'pickleball-drills', title: 'Pickleball Drills' },
      { id: 'pickleball-games', title: 'Pickleball Games' },
      { id: 'conclusion', title: 'Conclusion' }
    ]
  }
];
