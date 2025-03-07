import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { SearchableSelect } from '../components/SearchableSelect';

interface ContributionForm {
  title: string;
  description: string;
  contentType: 'material' | 'past_question';
  course: string;
  file: File | null;
}

export function Contribute() {
  const [form, setForm] = useState<ContributionForm>({
    title: '',
    description: '',
    contentType: 'material',
    course: '',
    file: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Mock data - Replace with actual data from your backend
  const courses = [
    { id: '1', code: 'CSC101', title: 'Introduction to Computer Science' },
    { id: '2', code: 'CSC201', title: 'Data Structures and Algorithms' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement actual file upload and content submission
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Contribute Content
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Share your knowledge and earn by contributing course materials or past questions.
          </p>
        </div>

        {submitStatus && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              submitStatus === 'success'
                ? 'bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                : 'bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200'
            }`}
          >
            <div className="flex items-center">
              {submitStatus === 'success' ? (
                <CheckCircle className="w-5 h-5 mr-2" />
              ) : (
                <AlertCircle className="w-5 h-5 mr-2" />
              )}
              <p>
                {submitStatus === 'success'
                  ? 'Content submitted successfully! It will be reviewed shortly.'
                  : 'Failed to submit content. Please try again.'}
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Content Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setForm({ ...form, contentType: 'material' })}
                className={`p-4 rounded-lg border-2 transition-all ${
                  form.contentType === 'material'
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <FileText className="w-6 h-6 text-green-600 mb-2" />
                <h3 className="font-medium text-gray-800 dark:text-white">
                  Course Material
                </h3>
              </button>
              <button
                type="button"
                onClick={() => setForm({ ...form, contentType: 'past_question' })}
                className={`p-4 rounded-lg border-2 transition-all ${
                  form.contentType === 'past_question'
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <FileText className="w-6 h-6 text-green-600 mb-2" />
                <h3 className="font-medium text-gray-800 dark:text-white">
                  Past Question
                </h3>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Course
            </label>
            <SearchableSelect
              options={courses.map(course => ({
                id: course.id,
                label: `${course.code} - ${course.title}`,
              }))}
              value={form.course}
              onChange={(value) => setForm({ ...form, course: value })}
              placeholder="Search for a course..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Title
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 
                       dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 
                       dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Upload File
            </label>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6">
              <div className="flex flex-col items-center">
                <Upload className="w-8 h-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-2">
                  Drag and drop your file here, or click to select
                </p>
                <input
                  type="file"
                  onChange={(e) => setForm({ ...form, file: e.target.files?.[0] || null })}
                  className="block w-full text-sm text-gray-500 dark:text-gray-400
                           file:mr-4 file:py-2 file:px-4 file:rounded-lg
                           file:border-0 file:text-sm file:font-medium
                           file:bg-green-50 file:text-green-700
                           dark:file:bg-green-900/30 dark:file:text-green-200
                           hover:file:bg-green-100 dark:hover:file:bg-green-900/40"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 
                     transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Content'}
          </button>
        </form>
      </div>
    </Layout>
  );
}