import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Filter, School, Users, Calendar, ThumbsUp, ThumbsDown } from 'lucide-react';

interface CourseFilters {
  semester: 'first' | 'second' | 'all';
  department: string;
  level: '100' | '200' | '300' | '400' | '500' | 'all';
}

export function FindCourses() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<CourseFilters>({
    semester: 'all',
    department: 'all',
    level: 'all',
  });
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);

  // Mock data - In production, this would come from your backend
  const departments = [
    'Computer Science',
    'Economics',
    'Engineering',
    'Mathematics',
    'Physics',
  ];

  const courses = [
    {
      id: '1',
      title: 'Introduction to Computer Science',
      code: 'CSC101',
      department: 'Computer Science',
      level: '100',
      semester: 'first',
      students: 150,
      university: 'University of Lagos',
      description: 'Fundamental concepts of computer science and programming.',
      upvotes: 45,
      userVote: null,
    },
    {
      id: '2',
      title: 'Data Structures and Algorithms',
      code: 'CSC201',
      department: 'Computer Science',
      level: '200',
      semester: 'second',
      students: 120,
      university: 'University of Lagos',
      description: 'Study of fundamental data structures and algorithms.',
      upvotes: 32,
      userVote: 'up',
    },
    {
      id: '3',
      title: 'Engineering Mathematics',
      code: 'MTH301',
      department: 'Mathematics',
      level: '300',
      semester: 'first',
      students: 200,
      university: 'University of Lagos',
      description: 'Advanced mathematics for engineering applications.',
      upvotes: 28,
      userVote: 'down',
    },
  ];

  const filteredCourses = courses.filter((course) => {
    return (
      (filters.semester === 'all' || course.semester === filters.semester) &&
      (filters.department === 'all' || course.department === filters.department) &&
      (filters.level === 'all' || course.level === filters.level)
    );
  });

  const handleEnroll = (courseId: string) => {
    if (enrolledCourses.includes(courseId)) {
      navigate(`/courses/${courseId}`);
    } else {
      setEnrolledCourses([...enrolledCourses, courseId]);
    }
  };

  const handleVote = (courseId: string, voteType: 'up' | 'down') => {
    // TODO: Implement actual voting logic with backend
    console.log(`Voted ${voteType} for course ${courseId}`);
  };

  return (
    <Layout>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Find Courses
          </h1>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-green-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Filters
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Semester
              </label>
              <select
                value={filters.semester}
                onChange={(e) => setFilters({ ...filters, semester: e.target.value as any })}
                className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 
                         dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="all">All Semesters</option>
                <option value="first">First Semester</option>
                <option value="second">Second Semester</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Department
              </label>
              <select
                value={filters.department}
                onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 
                         dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="all">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Level
              </label>
              <select
                value={filters.level}
                onChange={(e) => setFilters({ ...filters, level: e.target.value as any })}
                className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 
                         dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="all">All Levels</option>
                <option value="100">100 Level</option>
                <option value="200">200 Level</option>
                <option value="300">300 Level</option>
                <option value="400">400 Level</option>
                <option value="500">500 Level</option>
              </select>
            </div>
          </div>
        </div>

        {/* Course List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {course.code}
                    </p>
                  </div>
                  <BookOpen className="w-6 h-6 text-green-600 flex-shrink-0" />
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {course.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <School className="w-4 h-4 mr-2" />
                    <span>{course.department}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{course.students} students enrolled</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{course.semester === 'first' ? 'First' : 'Second'} Semester</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 
                                dark:text-green-100 rounded text-sm">
                    Level {course.level}
                  </span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleVote(course.id, 'up')}
                        className={`p-1 rounded-full transition-colors ${
                          course.userVote === 'up'
                            ? 'text-green-600 bg-green-50 dark:bg-green-900/30'
                            : 'text-gray-400 hover:text-green-600'
                        }`}
                      >
                        <ThumbsUp className="w-5 h-5" />
                      </button>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {course.upvotes}
                      </span>
                      <button
                        onClick={() => handleVote(course.id, 'down')}
                        className={`p-1 rounded-full transition-colors ${
                          course.userVote === 'down'
                            ? 'text-red-600 bg-red-50 dark:bg-red-900/30'
                            : 'text-gray-400 hover:text-red-600'
                        }`}
                      >
                        <ThumbsDown className="w-5 h-5" />
                      </button>
                    </div>
                    <button
                      onClick={() => handleEnroll(course.id)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        enrolledCourses.includes(course.id)
                          ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
                          : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
                    >
                      {enrolledCourses.includes(course.id) ? 'Go to Course' : 'Add Course'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No courses found matching your filters.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}