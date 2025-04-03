import { Outlet } from 'react-router-dom';
import SideNav from '../components/navigation/SideNav';

// Main Layout component with light mode styling
const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 text-gray-800">
      {/* Full-width layout with no top header */}
      <div className="flex flex-grow h-screen overflow-hidden">
        {/* Sidebar - fixed to left side */}
        <SideNav />
        
        {/* Main content - take all remaining width */}
        <main className="w-full lg:ml-64 p-6 overflow-y-auto">
          <div className="mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 to-blue-900 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">PPR Level 2 Certification</h3>
            <p className="text-gray-300 max-w-md">This interactive study guide is designed to help prospective instructors prepare for the PPR Level 2 certification exam.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Official PPR Website</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Equipment Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Certification FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2025 PPR Level 2 Interactive Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default RootLayout;
