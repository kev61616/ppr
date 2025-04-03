import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './app/layout';
import HomePage from './app/page';

// Import the font awesome icons
import './lib/fontawesome';

function App() {
  useEffect(() => {
    // Set the document title
    document.title = 'PPR Level 2 Certification Guide | Interactive Lesson';
  }, []);

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        {/* Additional routes can be added here */}
      </Route>
    </Routes>
  );
}

export default App;
