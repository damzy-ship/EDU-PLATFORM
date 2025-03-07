import React from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import {
  Users,
  BookOpen,
  FileText,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Clock,
} from 'lucide-react';

export function AdminDashboard() {
  // Mock data - Replace with actual data from your backend
  const stats = {
    totalUsers: 50000,
    totalCourses: 1200,
    pendingContent: 45,
    totalEarnings: 2500000,
  };

  const recentActivities = [
    {
      id: '1',
      type: 'content_submitted',
      user: 'John Doe',
      course: 'Introduction to Computer Science',
      time: '2 hours ago',
    },
    {
      id: '2',
      type: 'user_registered',
      user: 'Jane Smith',
      time: '3 hours ago',
    },
    {
      id: '3',
      type: 'content_approved',
      user: 'Mike Johnson',
      course: 'Engineering Mathematics',
      time: '5 hours ago',
    },
  ];

  const pendingApprovals = [
    {
      id: '1',
      type: 'course_material',
      title: 'Week 1 Lecture Notes',
      course: 'Introduction to Computer Science',
      user: 'John Doe',
      submittedAt: '2024-03-20T10:00:00Z',
    },
    {
      id: '2',
      type: 'past_question',
      title: '2023 Final Exam',
      course: 'Engineering Mathematics',
      user: 'Jane Smith',
      submittedAt: '2024-03-19T15:30:00Z',
    },
  ];

  return (
    <AdminLayout>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Users className="w-8 h-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Users</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {stats.totalUsers.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <BookOpen className="w-8 h-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Courses</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {stats.totalCourses.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <FileText className="w-8 h-8 text-orange-600" />
            <div className="ml-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Pending Content</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {stats.pendingContent}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <TrendingUp className="w-8 h-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Earnings</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                ₦{stats.totalEarnings.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="p-4 border-b dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Recent Activities
            </h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0">
                    {activity.type === 'content_submitted' ? (
                      <AlertCircle className="w-5 h-5 text-orange-500" />
                    ) : activity.type === 'user_registered' ? (
                      <Users className="w-5 h-5 text-blue-500" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800 dark:text-white">
                      {activity.type === 'content_submitted'
                        ? `${activity.user} submitted content for ${activity.course}`
                        : activity.type === 'user_registered'
                        ? `${activity.user} registered`
                        : `${activity.user}'s content for ${activity.course} was approved`}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="p-4 border-b dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Pending Approvals
            </h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {pendingApprovals.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-gray-50 
                           dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-start space-x-3">
                    <FileText className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.course} • {item.user}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Submitted {new Date(item.submittedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-green-600 text-white rounded-lg 
                                   hover:bg-green-700 text-sm">
                      Approve
                    </button>
                    <button className="px-3 py-1 bg-red-600 text-white rounded-lg 
                                   hover:bg-red-700 text-sm">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}