import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import {
  MessageSquare,
  Image as ImageIcon,
  FileText,
  Mic,
  Send,
  Bell,
  BellOff,
  Download,
} from 'lucide-react';

interface Update {
  id: string;
  content: string;
  contentType: 'text' | 'voice' | 'image' | 'document';
  fileUrl?: string;
  createdAt: string;
}

interface Channel {
  id: string;
  name: string;
  department: string;
  year: string;
  isSubscribed: boolean;
}

export function Updates() {
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
  
  // Mock data - Replace with actual data from your backend
  const channels: Channel[] = [
    {
      id: '1',
      name: 'Computer Science 2024',
      department: 'Computer Science',
      year: '2024',
      isSubscribed: true,
    },
    {
      id: '2',
      name: 'Engineering 2023',
      department: 'Engineering',
      year: '2023',
      isSubscribed: false,
    },
  ];

  const updates: Update[] = [
    {
      id: '1',
      content: 'Important announcement regarding the upcoming examinations.',
      contentType: 'text',
      createdAt: '2024-03-20T10:00:00Z',
    },
    {
      id: '2',
      content: 'lecture-notes.pdf',
      contentType: 'document',
      fileUrl: '#',
      createdAt: '2024-03-19T15:30:00Z',
    },
  ];

  const handleSubscribe = (channelId: string) => {
    // TODO: Implement subscription logic
    console.log('Subscribe to channel:', channelId);
  };

  const renderUpdateContent = (update: Update) => {
    switch (update.contentType) {
      case 'text':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <p className="text-gray-800 dark:text-white">{update.content}</p>
          </div>
        );
      case 'voice':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center">
            <Mic className="w-5 h-5 text-green-600 mr-3" />
            <audio controls className="w-full" src={update.fileUrl}>
              Your browser does not support the audio element.
            </audio>
          </div>
        );
      case 'image':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={update.fileUrl}
              alt="Update content"
              className="w-full h-auto"
            />
          </div>
        );
      case 'document':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FileText className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-gray-800 dark:text-white">
                  {update.content}
                </span>
              </div>
              <a
                href={update.fileUrl}
                className="text-green-600 hover:text-green-700 dark:text-green-400"
              >
                <Download className="w-5 h-5" />
              </a>
            </div>
          </div>
        );
    }
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Channels List */}
        <div className="md:col-span-1 space-y-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Update Channels
          </h2>
          
          {channels.map((channel) => (
            <button
              key={channel.id}
              onClick={() => setSelectedChannel(channel)}
              className={`w-full text-left p-4 rounded-lg transition-colors ${
                selectedChannel?.id === channel.id
                  ? 'bg-green-50 dark:bg-green-900/30 border-2 border-green-500'
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-800 dark:text-white">
                  {channel.name}
                </h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSubscribe(channel.id);
                  }}
                  className={`p-1 rounded-full transition-colors ${
                    channel.isSubscribed
                      ? 'text-green-600 hover:text-green-700'
                      : 'text-gray-400 hover:text-gray-500'
                  }`}
                >
                  {channel.isSubscribed ? (
                    <Bell className="w-5 h-5" />
                  ) : (
                    <BellOff className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {channel.department} - {channel.year}
              </p>
            </button>
          ))}
        </div>

        {/* Updates Feed */}
        <div className="md:col-span-3">
          {selectedChannel ? (
            <>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  {selectedChannel.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedChannel.department} - {selectedChannel.year}
                </p>
              </div>

              <div className="space-y-4">
                {updates.map((update) => (
                  <div key={update.id} className="space-y-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(update.createdAt).toLocaleString()}
                    </div>
                    {renderUpdateContent(update)}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              Select a channel to view updates
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}