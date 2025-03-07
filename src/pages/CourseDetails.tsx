import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { useParams, useNavigate } from 'react-router-dom';
import {
  BookOpen,
  FileText,
  PenTool,
  Clock,
  Download,
  FolderOpen,
  ChevronRight,
  FileQuestion,
  Calendar,
  PlayCircle,
} from 'lucide-react';

type ContentType = 'materials' | 'pastQuestions' | 'examDemo';
type MaterialType = 'notes' | 'assignments' | 'resources';

export function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [selectedContent, setSelectedContent] = useState<ContentType | null>(null);
  const [selectedMaterialType, setSelectedMaterialType] = useState<MaterialType | null>(null);

  const course = {
    id: courseId,
    title: 'Introduction to Computer Science',
    code: 'CSC101',
    university: 'University of Lagos',
    department: 'Computer Science',
    level: '100',
  };

  const materials = {
    notes: [
      {
        id: '1',
        title: 'Introduction to Programming Concepts',
        week: 1,
        uploadedBy: 'Dr. Adebayo',
        downloads: 234,
        fileType: 'pdf',
      },
      {
        id: '2',
        title: 'Data Types and Variables',
        week: 2,
        uploadedBy: 'Dr. Adebayo',
        downloads: 198,
        fileType: 'pdf',
      },
    ],
    assignments: [
      {
        id: '1',
        title: 'Programming Exercise 1',
        deadline: '2024-03-25',
        uploadedBy: 'Dr. Adebayo',
        downloads: 156,
        fileType: 'pdf',
      },
    ],
    resources: [
      {
        id: '1',
        title: 'Python Programming Guide',
        type: 'Book',
        uploadedBy: 'Department',
        downloads: 567,
        fileType: 'pdf',
      },
    ],
  };

  const pastQuestions = [
    {
      id: '1',
      year: '2023',
      semester: 'First',
      type: 'Final',
      downloads: 345,
      fileType: 'pdf',
    },
    {
      id: '2',
      year: '2022',
      semester: 'First',
      type: 'Final',
      downloads: 432,
      fileType: 'pdf',
    },
    {
      id: '3',
      year: '2022',
      semester: 'First',
      type: 'Midterm',
      downloads: 289,
      fileType: 'pdf',
    },
  ];

  const renderContentSelector = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <button
        onClick={() => setSelectedContent('materials')}
        className={`p-6 rounded-lg border-2 transition-all ${
          selectedContent === 'materials'
            ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
            : 'border-gray-200 dark:border-gray-700 hover:border-green-400'
        }`}
      >
        <BookOpen className="w-8 h-8 text-green-600 mb-3" />
        <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
          Course Materials
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Access lecture notes, assignments, and resources
        </p>
      </button>

      <button
        onClick={() => setSelectedContent('pastQuestions')}
        className={`p-6 rounded-lg border-2 transition-all ${
          selectedContent === 'pastQuestions'
            ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
            : 'border-gray-200 dark:border-gray-700 hover:border-green-400'
        }`}
      >
        <FileQuestion className="w-8 h-8 text-green-600 mb-3" />
        <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
          Past Questions
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Practice with previous exam questions
        </p>
      </button>

      <button
        onClick={() => setSelectedContent('examDemo')}
        className={`p-6 rounded-lg border-2 transition-all ${
          selectedContent === 'examDemo'
            ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
            : 'border-gray-200 dark:border-gray-700 hover:border-green-400'
        }`}
      >
        <PlayCircle className="w-8 h-8 text-green-600 mb-3" />
        <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
          Exam Demo
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Experience a simulated exam environment
        </p>
      </button>
    </div>
  );

  const renderMaterialTypes = () => (
    <div className="mb-8">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setSelectedMaterialType('notes')}
          className={`px-4 py-2 rounded-lg transition-all ${
            selectedMaterialType === 'notes'
              ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          Lecture Notes
        </button>
        <button
          onClick={() => setSelectedMaterialType('assignments')}
          className={`px-4 py-2 rounded-lg transition-all ${
            selectedMaterialType === 'assignments'
              ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          Assignments
        </button>
        <button
          onClick={() => setSelectedMaterialType('resources')}
          className={`px-4 py-2 rounded-lg transition-all ${
            selectedMaterialType === 'resources'
              ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          Resources
        </button>
      </div>

      {selectedMaterialType && (
        <div className="space-y-4">
          {materials[selectedMaterialType].map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between"
            >
              <div className="flex items-center flex-1">
                <FileText className="w-8 h-8 text-green-600 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    {'week' in item && (
                      <span className="flex items-center mr-4">
                        <Clock className="w-4 h-4 mr-1" />
                        Week {item.week}
                      </span>
                    )}
                    {'deadline' in item && (
                      <span className="flex items-center mr-4">
                        <Calendar className="w-4 h-4 mr-1" />
                        Due: {item.deadline}
                      </span>
                    )}
                    <span className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {item.downloads} downloads
                    </span>
                  </div>
                </div>
              </div>
              <button className="ml-4 px-4 py-2 text-green-600 hover:text-green-700 dark:text-green-400">
                Download
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderPastQuestions = () => (
    <div className="space-y-4">
      {pastQuestions.map((question) => (
        <div
          key={question.id}
          className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between"
        >
          <div className="flex items-center flex-1">
            <FileQuestion className="w-8 h-8 text-green-600 mr-4" />
            <div>
              <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                {question.year} {question.semester} Semester - {question.type}
              </h4>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Download className="w-4 h-4 mr-1" />
                {question.downloads} downloads
              </div>
            </div>
          </div>
          <button className="ml-4 px-4 py-2 text-green-600 hover:text-green-700 dark:text-green-400">
            Download
          </button>
        </div>
      ))}
    </div>
  );

  const renderExamDemo = () => (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Exam Simulation
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Experience a simulated exam environment with timed questions and instant feedback.
      </p>
      <button
        onClick={() => navigate(`/courses/${courseId}/exam-demo`)}
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Start Demo Exam
      </button>
    </div>
  );

  return (
    <Layout>
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <FolderOpen className="w-4 h-4 mr-1" />
          <span>{course.university}</span>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span>{course.department}</span>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span>Level {course.level}</span>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
              {course.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Course Code: {course.code}
            </p>
          </div>
        </div>

        {renderContentSelector()}

        {selectedContent === 'materials' && renderMaterialTypes()}
        {selectedContent === 'pastQuestions' && renderPastQuestions()}
        {selectedContent === 'examDemo' && renderExamDemo()}
      </div>
    </Layout>
  );
}