import React from 'react';
import { Layout } from './components/Layout';
import { GraduationCap, BookOpen, Users, TrendingUp } from 'lucide-react';

function App() {
  return (
    <Layout>
      {/* Welcome Section */}
      <section className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to EduNaija
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Your comprehensive learning platform for Nigerian university students.
        </p>
      </section>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="flex items-center">
            <GraduationCap className="w-8 h-8 text-green-600" />
            <div className="ml-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">Universities</p>
              <p className="text-xl font-semibold text-gray-800 dark:text-white">50+</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="flex items-center">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <div className="ml-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">Courses</p>
              <p className="text-xl font-semibold text-gray-800 dark:text-white">1,200+</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Users className="w-8 h-8 text-purple-600" />
            <div className="ml-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">Students</p>
              <p className="text-xl font-semibold text-gray-800 dark:text-white">50,000+</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="flex items-center">
            <TrendingUp className="w-8 h-8 text-orange-600" />
            <div className="ml-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">Contributors</p>
              <p className="text-xl font-semibold text-gray-800 dark:text-white">2,000+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&q=80`}
                alt="Course thumbnail"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Introduction to Computer Science
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Learn the fundamentals of computer science and programming.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    University of Lagos
                  </span>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Access */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Quick Access
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Upload Content</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Share your notes and earn
            </p>
          </button>
          <button className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Exam Schedule</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              View upcoming exams
            </p>
          </button>
          <button className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Study Groups</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Join or create groups
            </p>
          </button>
          <button className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">My Earnings</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Track your contributions
            </p>
          </button>
        </div>
      </section>
    </Layout>
  );
}

export default App;