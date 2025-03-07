export interface User {
  id: string;
  name: string;
  university: string;
  email: string;
  role: 'student' | 'admin' | 'contributor';
  language: 'en' | 'ha' | 'yo' | 'ig'; // English, Hausa, Yoruba, Igbo
  earnings?: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  university: string;
  faculty: string;
  department: string;
  level: '100' | '200' | '300' | '400' | '500';
  contributor: string;
  verified: boolean;
  downloads: number;
  createdAt: Date;
}

export interface Exam {
  id: string;
  courseId: string;
  date: Date;
  type: 'midterm' | 'final';
  notificationSent: boolean;
}

export interface ContentItem {
  id: string;
  courseId: string;
  title: string;
  type: 'note' | 'assignment' | 'pastQuestion' | 'resource';
  format: 'pdf' | 'doc' | 'video' | 'audio';
  url: string;
  offlineAvailable: boolean;
  verified: boolean;
  contributorId: string;
  downloads: number;
  earnings: number;
}

export interface CourseVote {
  id: string;
  courseId: string;
  userId: string;
  voteType: boolean;
  createdAt: Date;
}

export interface ContributedContent {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  contentType: 'material' | 'past_question';
  courseId: string;
  contributorId: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}