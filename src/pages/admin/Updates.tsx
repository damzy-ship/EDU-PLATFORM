import React, { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import {
  Search,
  Filter,
  MessageSquare,
  Bell,
  Users,
  Send,
  Image as ImageIcon,
  FileText,
  Mic,
  Plus,
  MoreVertical,
} from 'lucide-react';

export function Updates() {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - Replace with actual data from your backend
  const channels = [
    {
      id: '1',
      name: 'Computer Science 2024',
      department: 'Computer Science',
      year: '2024',
      subscribers: 150,
      lastUpdate: '2024-03-20T10:00:00Z',
    },
    {
      id: '2',
      name: 'Engineering 2023',
      department: 'Engineering',
      year: '2023',
      subscribers: 200,
      lastUpdate: '2024-03-19T15:30:00Z',
    },
  ];

  const updates = [
    {
      id: '1',
      channelId: '1',
      type: 'text',
      content: 'Important announcement regarding the upcoming examinations.',
      createdAt: '2024-03-20T10:00:00Z',
    },
    {
      id: '2',
      channelId: '1',
      type: 'document',
      content: 'lecture-notes.pdf',
      createdAt: '2024-03-19T15:30:00Z',
    },
  ];

  const filteredChannels = channels.filter(channel =>
    channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    channel.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const channelUpdates = updates.filter(update => update.channelId === selectedChannel);

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Update Channels
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Channels List */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-4 border-b dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Channels
                  </h2>
                  <button className="p-2 text-green-600 hover:text-green-700 
                                 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search channels..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 
                             border border-gray-200 dark:border-gray-600 focus:outline-none 
                             focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="p-4">
                <div className="space-y-4">
                  {filteredChannels.map((channel) => (
                    <button
                      key={channel.id}
                      onClick={() => setSelectedChannel(channel.id)}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        selectedChannel === channel.id
                          ? 'bg-green-50 dark:bg-green-900/30 border-2 border-green-500'
                          : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-800 dark:text-white">
                          {channel.name}
                        </h3>
                        <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Users className="w-4 h-4 mr-1" />
                          {channel.subscribers}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {channel.department} - {channel.year}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                        Last update: {new Date(channel.lastUpdate).toLocaleDateString()}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Updates Feed */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              {selectedChannel ? (
                <>
                  <div className="p-4 border-b dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {channels.find(c => c.id === selectedChannel)?.name}
                      </h2>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                        <MoreVertical className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4 space-y-4">
                    {channelUpdates.map((update) => (
                      <div
                        key={update.id}
                        className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            {update.type === 'text' ? (
                              <MessageSquare className="w-5 h-5 text-blue-500" />
                            ) : update.type === 'document' ? (
                              <FileText className="w-5 h-5 text-orange-500" />
                            ) : update.type === 'image' ? (
                              <ImageIcon className="w-5 h-5 text-green-500" />
                            ) : (
                              <Mic className="w-5 h-5 text-purple-500" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-800 dark:text-white">
                              {update.content}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {new Date(update.createdAt).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* New Update Input */}
                    <div className="mt-4 p-4 border-t dark:border-gray-700">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-500 hover:text-gray-700 
                                       dark:text-gray-400 dark:hover:text-gray-300">
                          <ImageIcon className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 
                                       dark:text-gray-400 dark:hover:text-gray-300">
                          <FileText className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 
                                       dark:text-gray-400 dark:hover:text-gray-300">
                          <Mic className="w-5 h-5" />
                        </button>
                        <input
                          type="text"
                          placeholder="Type your update..."
                          className="flex-1 p-2 rounded-lg bg-gray-50 dark:bg-gray-700 
                                   border border-gray-200 dark:border-gray-600 
                                   focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button className="p-2 text-green-600 hover:text-green-700 
                                       dark:text-green-400">
                          <Send className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  Select a channel to view and manage updates
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}