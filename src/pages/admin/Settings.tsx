import React, { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Save, Bell, Shield, Database, Globe, Mail } from 'lucide-react';

export function Settings() {
  const [settings, setSettings] = useState({
    siteName: 'EduNaija',
    siteDescription: 'Your comprehensive learning platform for Nigerian university students',
    emailNotifications: true,
    pushNotifications: true,
    contentApproval: true,
    autoBackup: true,
    maintenanceMode: false,
    language: 'en',
  });

  const handleSave = () => {
    // TODO: Implement settings save logic
    console.log('Saving settings:', settings);
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            System Settings
          </h1>
          <button
            onClick={handleSave}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg 
                     hover:bg-green-700"
          >
            <Save className="w-5 h-5 mr-2" />
            Save Changes
          </button>
        </div>

        <div className="space-y-6">
          {/* General Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="p-4 border-b dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                General Settings
              </h2>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Site Name
                </label>
                <input
                  type="text"
                  value={settings.siteName}
                  onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                  className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-700 
                           border border-gray-200 dark:border-gray-600 
                           focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Site Description
                </label>
                <textarea
                  value={settings.siteDescription}
                  onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                  rows={3}
                  className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-700 
                           border border-gray-200 dark:border-gray-600 
                           focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="p-4 border-b dark:border-gray-700">
              <div className="flex items-center">
                <Bell className="w-5 h-5 text-gray-400 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Notification Settings
                </h2>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Notifications
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Send email notifications for important updates
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.emailNotifications}
                    onChange={(e) => setSettings({ ...settings, emailNotifications: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                              peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full 
                              peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                              peer-checked:after:border-white after:content-[''] after:absolute 
                              after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 
                              after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                              dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Push Notifications
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Enable browser push notifications
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.pushNotifications}
                    onChange={(e) => setSettings({ ...settings, pushNotifications: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                              peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full 
                              peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                              peer-checked:after:border-white after:content-[''] after:absolute 
                              after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 
                              after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                              dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="p-4 border-b dark:border-gray-700">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-gray-400 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Security Settings
                </h2>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Content Approval
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Require approval for user-submitted content
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.contentApproval}
                    onChange={(e) => setSettings({ ...settings, contentApproval: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                              peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full 
                              peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                              peer-checked:after:border-white after:content-[''] after:absolute 
                              after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 
                              after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                              dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* System Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="p-4 border-b dark:border-gray-700">
              <div className="flex items-center">
                <Database className="w-5 h-5 text-gray-400 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  System Settings
                </h2>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Automatic Backup
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Enable daily automatic backups
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.autoBackup}
                    onChange={(e) => setSettings({ ...settings, autoBackup: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                              peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full 
                              peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                              peer-checked:after:border-white after:content-[''] after:absolute 
                              after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 
                              after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                              dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Maintenance Mode
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Enable maintenance mode for system updates
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.maintenanceMode}
                    onChange={(e) => setSettings({ ...settings, maintenanceMode: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                              peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full 
                              peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                              peer-checked:after:border-white after:content-[''] after:absolute 
                              after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 
                              after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                              dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Language Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="p-4 border-b dark:border-gray-700">
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-gray-400 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Language Settings
                </h2>
              </div>
            </div>
            <div className="p-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Default Language
                </label>
                <select
                  value={settings.language}
                  onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                  className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-700 
                           border border-gray-200 dark:border-gray-600 
                           focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="en">English</option>
                  <option value="ha">Hausa</option>
                  <option value="yo">Yoruba</option>
                  <option value="ig">Igbo</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}