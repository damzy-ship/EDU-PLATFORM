import React from 'react';
import { Menu, Search, Home, Book, Calendar, User, Sun, Moon, BookPlus, Upload, MessageSquare } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isDark, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search courses, materials..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
              />
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isDark ? (
              <Sun className="w-6 h-6 text-gray-300" />
            ) : (
              <Moon className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform 
                   bg-white dark:bg-gray-800 border-r dark:border-gray-700
                   ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                   md:translate-x-0`}
      >
        <nav className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                          ${isActivePath('/') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <Home className="w-6 h-6 text-green-600" />
                <span className="ml-3 text-gray-700 dark:text-gray-200">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700
                          ${isActivePath('/courses') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <Book className="w-6 h-6 text-green-600" />
                <span className="ml-3 text-gray-700 dark:text-gray-200">My Courses</span>
              </Link>
            </li>
            <li>
              <Link
                to="/find-courses"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700
                          ${isActivePath('/find-courses') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <BookPlus className="w-6 h-6 text-green-600" />
                <span className="ml-3 text-gray-700 dark:text-gray-200">Find Courses</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contribute"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700
                          ${isActivePath('/contribute') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <Upload className="w-6 h-6 text-green-600" />
                <span className="ml-3 text-gray-700 dark:text-gray-200">Contribute</span>
              </Link>
            </li>
            <li>
              <Link
                to="/updates"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700
                          ${isActivePath('/updates') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <MessageSquare className="w-6 h-6 text-green-600" />
                <span className="ml-3 text-gray-700 dark:text-gray-200">Updates</span>
              </Link>
            </li>
            <li>
              <Link
                to="/exams"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700
                          ${isActivePath('/exams') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <Calendar className="w-6 h-6 text-green-600" />
                <span className="ml-3 text-gray-700 dark:text-gray-200">Exam Schedule</span>
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700
                          ${isActivePath('/profile') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <User className="w-6 h-6 text-green-600" />
                <span className="ml-3 text-gray-700 dark:text-gray-200">Profile</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="pt-16 md:ml-64">
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
}