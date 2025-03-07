import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { BookOpen, Clock, Download, Star } from 'lucide-react';

export function Courses() {
  const navigate = useNavigate();
  const courses = [
    {
      id: '1',
      title: 'Introduction to Computer Science',
      progress: 75,
      university: 'University of Lagos',
      department: 'Computer Science',
      level: '100',
      lastAccessed: '2024-03-10',
      downloads: 120,
    },
    {
      id: '2',
      title: 'Fundamentals of Economics',
      progress: 45,
      university: 'University of Nigeria',
      department: 'Economics',
      level: '200',
      lastAccessed: '2024-03-12',
      downloads: 85,
    },
    {
      id: '3',
      title: 'Engineering Mathematics',
      progress: 90,
      university: 'Ahmadu Bello University',
      department: 'Engineering',
      level: '300',
      lastAccessed: '2024-03-15',
      downloads: 250,
    },
  ];

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">My Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <BookOpen className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" />
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      {course.title}
                    </h3>
                  </div>
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Progress</p>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Last accessed: {course.lastAccessed}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Download className="w-4 h-4 mr-1" />
                    <span>{course.downloads} downloads</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    {course.university}
                  </span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded">
                    Level {course.level}
                  </span>
                  <button
                    onClick={() => navigate(`/courses/${course.id}`)}
                    className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}