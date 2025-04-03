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
 
       {/* Footer removed */}
     </div>
   );
 };
 
 // Footer component definition removed
 
 export default RootLayout;
