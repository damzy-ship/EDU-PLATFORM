import React from 'react';
import { Layout } from '../components/Layout';
import { Calendar, Bell, Clock, AlertCircle } from 'lucide-react';

export function Exams() {
  const exams = [
    {
      id: '1',
      course: 'Computer Science 101',
      type: 'midterm',
      date: '2024-03-25',
      time: '09:00 AM',
      venue: 'Main Hall A',
      notificationEnabled: true,
    },
    {
      id: '2',
      course: 'Economics 201',
      type: 'final',
      date: '2024-04-05',
      time: '10:00 AM',
      venue: 'Science Block B',
      notificationEnabled: true,
    },
    {
      id: '3',
      course: 'Engineering Mathematics',
      type: 'midterm',
      date: '2024-03-28',
      time: '02:00 PM',
      venue: 'Engineering Block',
      notificationEnabled: false,
    },
  ];

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Exam Schedule</h1>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-500 mt-0.5 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                Upcoming Exam Alert
              </h3>
              <p className="mt-1 text-sm text-yellow-700 dark:text-yellow-300">
                Your next exam is Computer Science 101 in 5 days. Make sure to prepare well!
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      {exam.course}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{exam.date} at {exam.time}</span>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      Venue: {exam.venue}
                    </div>
                  </div>
                </div>

                <button
                  className={`p-2 rounded-lg transition-colors ${
                    exam.notificationEnabled
                      ? 'text-green-600 bg-green-50 dark:bg-green-900/30'
                      : 'text-gray-400 bg-gray-50 dark:bg-gray-700'
                  }`}
                >
                  <Bell className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className={`px-2 py-1 rounded text-sm ${
                  exam.type === 'final'
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200'
                    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
                }`}>
                  {exam.type.charAt(0).toUpperCase() + exam.type.slice(1)}
                </span>
                <button className="text-sm text-green-600 hover:text-green-700 dark:text-green-400">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}