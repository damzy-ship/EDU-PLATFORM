import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  FileText,
  Bell,
  Settings,
  LogOut,
  Menu,
  Sun,
  Moon,
} from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const { isDark, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
            >
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            <h1 className="text-xl font-bold text-gray-800 dark:text-white ml-2">
              EduNaija Admin
            </h1>
          </div>

          <div className="flex items-center space-x-4">
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
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-red-600 
                       dark:hover:text-red-400"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
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
                to="/admin"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                          ${isActivePath('/admin') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <LayoutDashboard className="w-6 h-6 text-green-600" />
                <span className="ml-3 text-gray-700 dark:text-gray-200">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700
                          ${isActivePath('/admin/users') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <Users className="w-6 h-6 text-green-600" />
                <span className="ml-3 text-gray-700 dark:text-gray-200">Users</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/courses"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700
                          ${isActivePath('/admin/courses') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <BookOpen className="w-6 h-6 text-green-600" />
                <span className="ml-3 text-gray-700 dark:text-gray-200">Courses</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/content"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700
                          ${isActivePath('/admin/content') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <FileText className="w-6 h-6 text-green-600" />
                <span className="ml-3 text-gray-700 dark:text-gray-200">Content</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/updates"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700
                          ${isActivePath('/admin/updates') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <Bell className="w-6 h-6 text-green-600" />
                <span className="ml-3 text-gray-700 dark:text-gray-200">Updates</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/settings"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700
                          ${isActivePath('/admin/settings') ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                <Settings className="w-6 h-6 text-green-600" />
                <span className="ml-3 text-gray-700 dark:text-gray-200">Settings</span>
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