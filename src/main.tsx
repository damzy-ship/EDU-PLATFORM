import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App.tsx';
import { Courses } from './pages/Courses.tsx';
import { Exams } from './pages/Exams.tsx';
import { Profile } from './pages/Profile.tsx';
import { FindCourses } from './pages/FindCourses.tsx';
import { ExamDemo } from './pages/ExamDemo.tsx';
import { CourseDetails } from './pages/CourseDetails.tsx';
import { Contribute } from './pages/Contribute.tsx';
import { Updates } from './pages/Updates.tsx';
import { AdminDashboard } from './pages/admin/Dashboard.tsx';
import { Users } from './pages/admin/Users.tsx';
import { Courses as AdminCourses } from './pages/admin/Courses.tsx';
import { Content } from './pages/admin/Content.tsx';
import { Updates as AdminUpdates } from './pages/admin/Updates.tsx';
import { Settings } from './pages/admin/Settings.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/courses',
    element: <Courses />,
  },
  {
    path: '/courses/:courseId',
    element: <CourseDetails />,
  },
  {
    path: '/courses/:courseId/exam-demo',
    element: <ExamDemo />,
  },
  {
    path: '/find-courses',
    element: <FindCourses />,
  },
  {
    path: '/exams',
    element: <Exams />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/contribute',
    element: <Contribute />,
  },
  {
    path: '/updates',
    element: <Updates />,
  },
  {
    path: '/admin',
    element: <AdminDashboard />,
  },
  {
    path: '/admin/users',
    element: <Users />,
  },
  {
    path: '/admin/courses',
    element: <AdminCourses />,
  },
  {
    path: '/admin/content',
    element: <Content />,
  },
  {
    path: '/admin/updates',
    element: <AdminUpdates />,
  },
  {
    path: '/admin/settings',
    element: <Settings />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
