# PPR Level 2 Certification Interactive Learning Module

An interactive, web-based learning resource for Pickleball Professional Registry (PPR) Level 2 certification candidates. This module provides comprehensive instruction on advanced pickleball techniques, strategies, and teaching methodologies required for the Level 2 certification.

## Features

- **Responsive Design**: Fully responsive user interface that works across desktop, tablet, and mobile devices.
- **Interactive Navigation**: Side navigation and section linking for easy content access.
- **Visual Learning Enhancements**: Interactive images, animations, and visual cues to improve learning.
- **Practice Module**: Interactive quiz system to test knowledge with immediate feedback.
- **Visual Learning Flow**: Mermaid diagram visualization of the learning journey.
- **Modern UI**: Built with TailwindCSS for a clean, modern interface.
- **Modular Architecture**: Component-based JavaScript and structured CSS for maintainability.

## Project Structure

```
ppr/
├── README.md                 # This documentation file
├── user-flow.mmd            # Mermaid diagram of learning journey
├── pickleball_lesson.html   # Main lesson content
├── css/                     # Modular CSS files
│   ├── variables.css        # CSS variables and theming
│   ├── animations.css       # Animation definitions
│   ├── components.css       # UI component styles
│   ├── navigation.css       # Navigation-specific styles
│   └── practice.css         # Practice module styles
├── js/                      # JavaScript modules
│   ├── main.js              # Main entry point that initializes all components
│   └── components/          # Modular JavaScript components
│       ├── NavigationManager.js  # Navigation functionality
│       ├── ModalManager.js       # Modal and lightbox functionality
│       ├── CollapsibleManager.js # Collapsible sections
│       ├── QuizManager.js        # Quiz interface management
│       ├── ProgressManager.js    # Progress indicators 
│       ├── TooltipManager.js     # Tooltips and hints
│       ├── AnimationManager.js   # Scroll and visual animations
│       └── PracticeModule.js     # Practice quiz functionality
└── images/                  # Directory containing all lesson images
```

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3/TailwindCSS**: Styling and responsive design
- **JavaScript (ES6+)**: Component-based interactive features
- **Font Awesome**: Icons and visual elements
- **Google Fonts**: Typography enhancement
- **Mermaid**: Diagramming for user flow visualization

## Architecture

The application follows a modular component-based architecture:

- **CSS Organization**: Styles are separated into logical files by function (variables, animations, components, etc.)
- **JavaScript Components**: Each functional area has its own module with clear responsibilities
- **Event-Driven Design**: Components communicate through events for loose coupling
- **Progressive Enhancement**: Core content is accessible without JavaScript, with interactivity added as an enhancement

## Learning Content

The learning module covers the following key areas required for PPR Level 2 certification:

1. **Introduction to PPR Level 2**
   - Comparison with Level 1
   - Certification requirements

2. **Fundamentals**
   - Equipment and safety
   - First aid knowledge
   - Grip techniques (Continental, Eastern, V-Shape)
   - Hourglass lesson format

3. **Shot Development**
   - Swing volley
   - Blocking and counter attack
   - Lob techniques
   - Overhead shots
   - Specialty shots (ATP, Erne)

4. **Advanced Strategies**
   - Middle court tactics
   - Transition zone play
   - 3rd and 4th shot strategies

5. **Doubles Play**
   - Poaching techniques
   - Advanced serves
   - Return strategies
   - Stacking techniques
   - Team tactics

6. **Assessment**
   - Practice module with interactive quiz
   - Knowledge check

## User Flow

The user flow diagram (`user-flow.mmd`) visualizes the learning journey from introduction to certification readiness. It maps the logical progression through the material and shows relationships between different learning sections.

To view the diagram:
1. Install a Mermaid viewer extension in your code editor, or
2. Use the [Mermaid Live Editor](https://mermaid.live/) and paste the contents of `user-flow.mmd`

## Interactive Practice Module

The practice module provides:

- Multiple-choice questions covering key concepts
- Immediate feedback on answers
- Explanations for correct answers
- Progress tracking
- Final score reporting with performance assessment

## Usage

1. Open `pickleball_lesson.html` in a web browser to access the full interactive lesson.
2. Navigate through sections using the side navigation or top menu.
3. Complete the practice quiz to test knowledge retention.

## Local Development

To modify or extend the module:

1. Edit `pickleball_lesson.html` to change content structure
2. Modify CSS files in the `css/` directory to adjust appearance
3. Update components in `js/components/` to change specific functionality
4. Edit `js/main.js` to modify initialization order

## Accessibility Features

- Semantic HTML structure
- ARIA attributes for interactive elements
- Keyboard navigation support
- Screen reader friendly content
- High contrast mode compatibility
- Reduced motion option for animations

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

This project is created for educational purposes. All content related to PPR certification is based on publicly available information and may need verification against official PPR resources.

## Future Enhancements

- Video integration for technique demonstrations
- Additional interactive drills and exercises
- Printable certification preparation checklists
- Mobile app version for offline learning
- Expanded practice question database
- User accounts for progress tracking
