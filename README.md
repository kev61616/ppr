# PPR Level 2 Certification Guide | Interactive Lesson

A beautiful, interactive web application for the PPR (Professional Pickleball Registry) Level 2 Certification study guide. This modern implementation uses Vite, React, TypeScript, and TailwindCSS to create an engaging learning experience with authentic PPR training content and images.

## Recent Updates - April 1, 2025

- **Chapter-Numbered Navigation**: Added clear chapter numbers in both top and side navigation for better user orientation.
- **Modular Component Architecture**: Restructured the app with dedicated components for each chapter section.
- **Improved Visual Hierarchy**: Enhanced chapter headers with numbered indicators to highlight chapter progression.
- **Reusable Section Components**: Created consistent styling for chapter sections, subsections, and content cards.
- **Simplified Codebase**: Moved from monolithic page component to modular chapter components for maintainability.

## Content Organization

The PPR Level 2 Certification content has been organized into a clear, structured format in the `ref` directory:

- **organized-content.md**: Contains a complete hierarchical outline of all chapters and subchapters
- **organized-content-detailed.md**: Contains the full content organized by section following the outline structure

### Content Structure

The material is organized into 9 main chapters:

1. **Introduction** - About the PPR Level 2 Certification, comparisons with Level 1, preparation
2. **Equipment and Safety** - Equipment needs, safety protocols, first aid
3. **Grip Techniques** - Continental, Eastern, and V-Shape grips
4. **The Hourglass Lesson Format** - Lesson timeline, technical and tactical competencies
5. **Opening the Lesson** - Introduction, warm-up procedures
6. **Skill Development** - Swing Volley, Lob, Overhead, ATP, Erne
7. **Advanced Strategies** - Creating opportunities, transition zone strategy, poaching, serving, returns, stacking, doubles strategy
8. **Closing the Lesson** - Cool down, recap, homework
9. **Additional Resources** - Drills, games, conclusion

Each main chapter is divided into logical subchapters with content from the original PPR material preserved and presented in a more accessible format.

This organized content provides a foundation for integrating the material into the interactive web application, making it easier to navigate and understand the comprehensive PPR Level 2 curriculum.

## Features

- **Modern UI Design**: Clean, responsive interface with smooth animations
- **Interactive Components**: Collapsible sections, animated transitions, and a fully interactive quiz
- **Mobile-Friendly**: Responsive design works on all device sizes
- **Performance Optimized**: Fast loading and rendering
- **Accessibility Focused**: Semantic HTML and proper contrast ratios

## Tech Stack

- **React**: UI component library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Modern build tool
- **TailwindCSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Framer Motion**: Animation library
- **Font Awesome**: Icon library

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Build for production: `npm run build`
5. Preview the production build: `npm run preview`

## Project Structure

```
pickleball-ppr/
├── public/               # Static assets
├── src/
│   ├── app/              # App router components
│   │   ├── layout.tsx    # Root layout with navigation
│   │   └── page.tsx      # Homepage with chapter structure
│   ├── components/       # Reusable components
│   │   ├── Navigation.tsx          # Top and side navigation with numbered chapters
│   │   ├── ChapterSection.tsx      # Reusable chapter and subsection components
│   │   ├── Chapters.tsx            # Modular chapter implementations
│   │   └── quiz/                   # Quiz components
│   │       ├── QuizComponent.tsx   # Core quiz component 
│   │       ├── QuizTypes.ts        # Type definitions
│   │       └── QuestionDatabase.ts # Question repository
│   ├── lib/              # Utility functions
│   │   └── fontawesome.ts    # Icon configuration
│   ├── App.tsx           # Main App component
│   ├── index.css         # Global styles and Tailwind
│   └── main.tsx          # Entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── ref/                  # Reference materials
│   ├── organized-content.md         # Chapter outline
│   └── organized-content-detailed.md # Detailed content
├── implementation-plan.md           # Implementation strategy document
└── component-structure.md           # Component architecture documentation
```

## Key Features

1. **Interactive Navigation**: Side navigation with highlighting of active sections
2. **Responsive Layout**: Mobile-friendly with hamburger menu on smaller screens
3. **Animated Content**: Content sections fade in sequentially for improved readability
4. **Collapsible Sections**: Toggle sections to show/hide detailed content
5. **Authentic Training Images**: Original PPR teaching graphics and instructional images
6. **Comprehensive Content Sections**:
   - Grip techniques with visual demonstrations (Continental, Eastern, V-Shape)
   - Hourglass Format lesson structure with original diagrams
   - Transition Zone strategy breakdowns with visual guides
7. **Modular Quiz System**: 
   - Section quizzes for specific topics
   - Midterm assessments with timed questions
   - Final comprehensive test
   - Detailed feedback and teaching tips
8. **Custom Styling**: Tailored design system with consistent color scheme and typography

## Quiz System

The application features a comprehensive quiz system with three types of assessments:

1. **Section Quizzes**: Short, focused assessments covering specific topics like grip techniques or teaching methodologies.
2. **Midterm Assessment**: A medium-length quiz covering multiple topics with a 15-minute time limit.
3. **Final Comprehensive Test**: A thorough assessment covering all PPR Level 2 concepts with a 30-minute time limit.

Each quiz provides:
- Immediate feedback on answers
- Detailed explanations for correct/incorrect responses
- Teaching tips for instructors
- Score tracking and pass/fail determination
- Category-specific performance feedback

## User Flow

The application is designed with a logical learning progression:
1. Introduction to the certification requirements
2. Technical details of grip techniques and teaching methods
3. Interactive quizzes to test understanding
4. Easy navigation between sections

## Future Enhancements

- Video integration for technique demonstrations
- User accounts to save progress
- More interactive diagrams and visualizations
- Expanded quiz system with additional question categories
