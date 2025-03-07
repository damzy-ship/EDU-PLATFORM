import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Clock,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';

type QuestionType = 'multiple' | 'fillIn';

interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options?: string[];
  correctAnswer: string;
}

export function ExamDemo() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Sample questions
  const questions: Question[] = [
    {
      id: '1',
      type: 'multiple',
      text: 'What is the primary function of a computer\'s CPU?',
      options: [
        'Store data permanently',
        'Process instructions and perform calculations',
        'Display graphics on the screen',
        'Connect to the internet',
      ],
      correctAnswer: 'Process instructions and perform calculations',
    },
    {
      id: '2',
      type: 'multiple',
      text: 'Which of the following is not a programming paradigm?',
      options: [
        'Object-Oriented Programming',
        'Functional Programming',
        'Digital Programming',
        'Procedural Programming',
      ],
      correctAnswer: 'Digital Programming',
    },
    {
      id: '3',
      type: 'fillIn',
      text: 'The process of finding and fixing errors in a program is called _______.',
      correctAnswer: 'debugging',
    },
    {
      id: '4',
      type: 'multiple',
      text: 'Which data structure follows the LIFO principle?',
      options: [
        'Queue',
        'Stack',
        'Tree',
        'Graph',
      ],
      correctAnswer: 'Stack',
    },
    {
      id: '5',
      type: 'fillIn',
      text: 'A _______ is a named storage location in memory that holds a value.',
      correctAnswer: 'variable',
    },
  ];

  useEffect(() => {
    if (!examSubmitted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !examSubmitted) {
      handleSubmit();
    }
  }, [timeLeft, examSubmitted]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestionIndex].id]: answer,
    }));
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    questions.forEach((question) => {
      const userAnswer = answers[question.id]?.toLowerCase().trim();
      const correctAnswer = question.correctAnswer.toLowerCase().trim();
      if (userAnswer === correctAnswer) {
        correctAnswers++;
      }
    });
    setScore((correctAnswers / questions.length) * 100);
    setExamSubmitted(true);
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTimeLeft(1800);
    setExamSubmitted(false);
    setScore(0);
  };

  const renderQuestion = () => {
    const question = questions[currentQuestionIndex];

    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
            <span className={`font-mono ${
              timeLeft < 300 ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'
            }`}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
          {question.text}
        </h3>

        {question.type === 'multiple' ? (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`w-full text-left p-4 rounded-lg transition-colors ${
                  answers[question.id] === option
                    ? 'bg-green-50 dark:bg-green-900/30 border-2 border-green-500'
                    : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <input
            type="text"
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 
                     dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        )}
      </div>
    );
  };

  const renderResults = () => (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
      <div className="text-center mb-6">
        <div className="inline-block p-3 rounded-full bg-green-50 dark:bg-green-900/30 mb-4">
          {score >= 70 ? (
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          ) : (
            <XCircle className="w-12 h-12 text-red-500" />
          )}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Your Score: {score.toFixed(1)}%
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {score >= 70 ? 'Great job! You passed the exam.' : 'Keep practicing to improve your score.'}
        </p>
      </div>

      <div className="space-y-4 mb-6">
        {questions.map((question, index) => (
          <div
            key={question.id}
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
          >
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                {answers[question.id]?.toLowerCase().trim() === 
                  question.correctAnswer.toLowerCase().trim() ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
              <div>
                <p className="text-gray-800 dark:text-white mb-2">
                  {index + 1}. {question.text}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your answer: {answers[question.id] || 'Not answered'}
                </p>
                <p className="text-sm text-green-600 dark:text-green-400">
                  Correct answer: {question.correctAnswer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={handleRetry}
          className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg 
                   hover:bg-green-700 transition-colors"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Try Again
        </button>
        <button
          onClick={() => navigate(`/courses/${courseId}`)}
          className="flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg 
                   hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 
                   transition-colors"
        >
          Back to Course
        </button>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Practice Exam
          </h1>
        </div>

        {!examSubmitted && (
          <div className="mb-6">
            <div className="flex items-center bg-blue-50 dark:bg-blue-900/30 text-blue-800 
                          dark:text-blue-200 p-4 rounded-lg">
              <AlertCircle className="w-5 h-5 mr-2" />
              <p className="text-sm">
                You have 30 minutes to complete this exam. Answer all questions to the best of 
                your ability.
              </p>
            </div>
          </div>
        )}

        {examSubmitted ? renderResults() : (
          <>
            {renderQuestion()}
            
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 disabled:opacity-50"
              >
                Previous
              </button>
              
              {currentQuestionIndex === questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg 
                           hover:bg-green-700 transition-colors"
                >
                  Submit Exam
                </button>
              ) : (
                <button
                  onClick={() => setCurrentQuestionIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                  className="flex items-center px-4 py-2 text-green-600 hover:text-green-700 
                           dark:text-green-400"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}