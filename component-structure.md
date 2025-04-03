# PPR Level 2 Component Structure

This document outlines the React component structure for implementing the 9-chapter content organization.

## Core Components

### 1. App Layout
```tsx
// src/app/layout.tsx
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
```

### 2. Chapter Section Component
```tsx
// src/components/ChapterSection.tsx
import { motion } from 'framer-motion';

interface ChapterSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
}

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export const ChapterSection: React.FC<ChapterSectionProps> = ({ 
  id, 
  title, 
  children, 
  delay = 0 
}) => {
  return (
    <section id={id} className="mb-12">
      <FadeIn delay={delay}>
        <h2 className="section-title">{title}</h2>
        {children}
      </FadeIn>
    </section>
  );
};
```

### 3. Subsection Component
```tsx
// src/components/SubSection.tsx
import { motion } from 'framer-motion';

interface SubSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
}

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export const SubSection: React.FC<SubSectionProps> = ({ 
  id, 
  title, 
  children, 
  delay = 0 
}) => {
  return (
    <div className="mb-6">
      <FadeIn delay={delay}>
        <h3 id={id} className="subsection-title">{title}</h3>
        <div className="card mb-6">
          {children}
        </div>
      </FadeIn>
    </div>
  );
};
```

### 4. Content Card Component
```tsx
// src/components/ContentCard.tsx
interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};
```

### 5. Collapsible Component
```tsx
// src/components/Collapsible.tsx
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ 
  title, 
  children,
  defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="mb-6">
      <button 
        className="flex justify-between items-center w-full bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{title}</span>
        <FontAwesomeIcon 
          icon="chevron-down" 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="border border-gray-200 rounded-b-lg overflow-hidden">
          <div style={{ opacity: isOpen ? 1 : 0 }}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
```

### 6. Navigation Component
```tsx
// src/components/Navigation.tsx
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NavItem {
  id: string;
  title: string;
  subItems?: { id: string, title: string }[];
}

const navigationItems: NavItem[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    subItems: [
      { id: "about", title: "About PPR Level 2" },
      { id: "comparison", title: "Level 1 vs Level 2" },
      { id: "preparation", title: "Preparation" }
    ]
  },
  {
    id: "equipment-safety",
    title: "2. Equipment and Safety",
    subItems: [
      { id: "equipment", title: "Equipment" },
      { id: "safety", title: "Safety" },
      { id: "first-aid", title: "First Aid" }
    ]
  },
  // Continue with all 9 chapters
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  
  const toggleExpand = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  return (
    <nav className="bg-white shadow-md">
      {/* Navigation implementation */}
    </nav>
  );
};
```

### 7. Quiz System Components

#### QuizCategories.ts
```tsx
// src/components/quiz/QuizCategories.ts
export const quizCategories = [
  "Introduction",
  "Equipment and Safety",
  "Grip Techniques",
  "Hourglass Lesson Format",
  "Opening the Lesson",
  "Skill Development",
  "Advanced Strategies",
  "Closing the Lesson",
  "Additional Resources"
];

// Map to track which quiz questions belong to which chapter
export const categoryToChapterMap: Record<string, number> = {
  "Introduction": 1,
  "Equipment and Safety": 2,
  "Grip Techniques": 3,
  "Hourglass Lesson Format": 4,
  "Opening the Lesson": 5,
  "Skill Development": 6,
  "Advanced Strategies": 7,
  "Closing the Lesson": 8,
  "Additional Resources": 9
};
```

## Chapter-Specific Components

### 1. Introduction Chapter
```tsx
// src/components/chapters/Introduction.tsx
import { ChapterSection } from '../ChapterSection';
import { SubSection } from '../SubSection';
import { ContentCard } from '../ContentCard';

export const IntroductionChapter: React.FC = () => {
  return (
    <ChapterSection id="introduction" title="Introduction to PPR Level 2 Certification">
      <SubSection id="about" title="About PPR Level 2 Certification" delay={0.1}>
        <p className="mb-4">The purpose of the Level 2 Certification is to teach coaches how to use tactical competencies, in conjunction with the technical competencies introduced in Level 1, and to help coaches take players from Improver (3.5) to Advanced (4.0+).</p>
        {/* Additional content */}
      </SubSection>
      
      <SubSection id="comparison" title="Level 1 vs Level 2: What's Different?" delay={0.2}>
        {/* Comparison content */}
      </SubSection>
      
      <SubSection id="preparation" title="Preparation" delay={0.3}>
        {/* Preparation content */}
      </SubSection>
    </ChapterSection>
  );
};
```

### 2-9. Other Chapter Components
Similar structure to Introduction Chapter, with chapter-specific content and components.

## Page Implementation

### Main Page Component
```tsx
// src/app/page.tsx
import { IntroductionChapter } from '../components/chapters/Introduction';
import { EquipmentSafetyChapter } from '../components/chapters/EquipmentSafety';
import { GripTechniquesChapter } from '../components/chapters/GripTechniques';
import { HourglassFormatChapter } from '../components/chapters/HourglassFormat';
import { OpeningLessonChapter } from '../components/chapters/OpeningLesson';
import { SkillDevelopmentChapter } from '../components/chapters/SkillDevelopment';
import { AdvancedStrategiesChapter } from '../components/chapters/AdvancedStrategies';
import { ClosingLessonChapter } from '../components/chapters/ClosingLesson';
import { AdditionalResourcesChapter } from '../components/chapters/AdditionalResources';
import { QuizSection } from '../components/quiz/QuizSection';

const HomePage = () => {
  return (
    <>
      <IntroductionChapter />
      <EquipmentSafetyChapter />
      <GripTechniquesChapter />
      <HourglassFormatChapter />
      <OpeningLessonChapter />
      <SkillDevelopmentChapter />
      <AdvancedStrategiesChapter />
      <ClosingLessonChapter />
      <AdditionalResourcesChapter />
      <QuizSection />
    </>
  );
};

export default HomePage;
```

## Special Components for Interactive Elements

### Interactive Court Diagram
```tsx
// src/components/interactive/CourtDiagram.tsx
interface CourtDiagramProps {
  highlightAreas?: string[];
  showPlayers?: boolean;
  playerPositions?: {x: number, y: number}[];
  showTrajectory?: boolean;
  trajectoryPath?: string;
}

export const CourtDiagram: React.FC<CourtDiagramProps> = ({
  highlightAreas = [],
  showPlayers = false,
  playerPositions = [],
  showTrajectory = false,
  trajectoryPath = ""
}) => {
  // Implementation of interactive court diagram
  return (
    <div className="court-container">
      {/* SVG court diagram with interactive elements */}
    </div>
  );
};
```

### Video Container
```tsx
// src/components/interactive/VideoContainer.tsx
interface VideoContainerProps {
  title: string;
  description?: string;
  videoPlaceholder: string;
  videoId?: string;
}

export const VideoContainer: React.FC<VideoContainerProps> = ({
  title,
  description,
  videoPlaceholder,
  videoId
}) => {
  // Implementation of video container
  return (
    <div className="video-container">
      {/* Video placeholder with play button */}
      <div className="video-info">
        <h4 className="font-semibold">{title}</h4>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
    </div>
  );
};
```

### Technique Comparison
```tsx
// src/components/interactive/TechniqueComparison.tsx
interface TechniqueComparisonProps {
  correctTechnique: {
    title: string;
    image: string;
    points: string[];
  };
  incorrectTechnique: {
    title: string;
    image: string;
    points: string[];
  };
}

export const TechniqueComparison: React.FC<TechniqueComparisonProps> = ({
  correctTechnique,
  incorrectTechnique
}) => {
  // Implementation of technique comparison component
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Correct vs incorrect technique comparison */}
    </div>
  );
};
```

This component structure provides a comprehensive framework for implementing all 9 chapters from our organized content into the web application, using a consistent and scalable approach that leverages React's component-based architecture.
