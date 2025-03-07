import React, { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Search, Filter, FileText, Download, CheckCircle, XCircle, MoreVertical } from 'lucide-react';

export function Content() {
  const [selectedType, setSelectedType] = useState<'all' | 'material' | 'past_question'>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - Replace with actual data from your backend
  const contents = [
    {
      id: '1',
      title: 'Week 1 Lecture Notes',
      type: 'material',
      course: 'Introduction to Computer Science',
      contributor: 'John Doe',
      downloads: 156,
      status: 'pending',
      submittedAt: '2024-03-20T10:00:00Z',
    },
    {
      id: '2',
      title: '2023 Final Exam',
      type: 'past_question',
      course: 'Engineering Mathematics',
      contributor: 'Jane Smith',
      downloads: 89,
      status: 'approved',
      submittedAt: '2024-03-19T15:30:00Z',
    },
  ];

  const filteredContents = contents.filter(content => {
    const matchesType = selectedType === 'all' || content.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || content.status === selectedStatus;
    const matchesSearch = 
      content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.course.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
  });

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Content Management
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-6">
          <div className="p-4 border-b dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 
                           border border-gray-200 dark:border-gray-600 focus:outline-none 
                           focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-4">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value as any)}
                    className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 
                             dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="all">All Types</option>
                    <option value="material">Materials</option>
                    <option value="past_question">Past Questions</option>
                  </select>

                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value as any)}
                    className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 
                             dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    Content
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    Course
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    Downloads
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    Submitted
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 dark:text-gray-400">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredContents.map((content) => (
                  <tr key={content.id}>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex 
                                    items-center justify-center">
                          <FileText className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-800 dark:text-white">
                            {content.title}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            By {content.contributor}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                      {content.course}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${content.type === 'material'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'
                          : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200'
                        }`}>
                        {content.type === 'material' ? 'Material' : 'Past Question'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Download className="w-4 h-4 mr-1" />
                        {content.downloads}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${content.status === 'approved'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
                          : content.status === 'rejected'
                          ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200'
                        }`}>
                        {content.status.charAt(0).toUpperCase() + content.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                      {new Date(content.submittedAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        {content.status === 'pending' && (
                          <>
                            <button className="p-1 text-green-600 hover:text-green-700 
                                           dark:text-green-400">
                              <CheckCircle className="w-5 h-5" />
                            </button>
                            <button className="p-1 text-red-600 hover:text-red-700 
                                           dark:text-red-400">
                              <XCircle className="w-5 h-5" />
                            </button>
                          </>
                        )}
                        <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                          <MoreVertical className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}