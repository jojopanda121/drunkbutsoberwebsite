export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Comment {
  id: string;
  postId: string | 'guestbook'; // 'guestbook' for site-wide comments
  userId: string;
  userName: string;
  content: string;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Markdown-like or HTML string
  coverImage: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
}

export type Theme = 'dark' | 'light';
