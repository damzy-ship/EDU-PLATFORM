import React from 'react';
import { Layout } from '../components/Layout';
import {
  User,
  Mail,
  Building,
  BookOpen,
  TrendingUp,
  Download,
  Settings,
  Languages,
} from 'lucide-react';

export function Profile() {
  const user = {
    name: 'Oluwaseun Adebayo',
    email: 'oluwaseun.a@unilag.edu.ng',
    university: 'University of Lagos',
    department: 'Computer Science',
    level: '300',
    contributions: 15,
    downloads: 1250,
    earnings: 25000,
    language: 'English',
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {user.name.charAt(0)}
                </span>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {user.name}
                </h1>
                <p className="text-gray-500 dark:text-gray-400">Student</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-600 dark:text-gray-300">{user.email}</span>
              </div>
              <div className="flex items-center">
                <Building className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-600 dark:text-gray-300">{user.university}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-600 dark:text-gray-300">
                  {user.department} - Level {user.level}
                </span>
              </div>
              <div className="flex items-center">
                <Languages className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-600 dark:text-gray-300">{user.language}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Contributions
                  </h3>
                </div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                  {user.contributions}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Download className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Downloads
                  </h3>
                </div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                  {user.downloads}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Earnings
                  </h3>
                </div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                  ₦{user.earnings}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t dark:border-gray-700 px-6 py-4">
            <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              <Settings className="w-5 h-5 mr-2" />
              Account Settings
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}