import { User, Comment } from '../types';

const USERS_KEY = 'dbs_users';
const COMMENTS_KEY = 'dbs_comments';
const CURRENT_USER_KEY = 'dbs_current_user';

// Mock Auth Service
export const authService = {
  login: (email: string, name: string): User => {
    const user: User = {
      id: email, // simple ID generation
      email,
      name,
      avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${name}`
    };
    
    // Save to local session
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    
    // Save to "database" of users if not exists
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    if (!users.find((u: User) => u.email === email)) {
      users.push(user);
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }
    
    return user;
  },

  logout: () => {
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  getCurrentUser: (): User | null => {
    const stored = localStorage.getItem(CURRENT_USER_KEY);
    return stored ? JSON.parse(stored) : null;
  }
};

// Mock Comment Service
export const commentService = {
  getComments: (postId: string): Comment[] => {
    const allComments: Comment[] = JSON.parse(localStorage.getItem(COMMENTS_KEY) || '[]');
    return allComments
      .filter(c => c.postId === postId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  addComment: (postId: string, content: string, user: User): Comment => {
    const newComment: Comment = {
      id: Date.now().toString(),
      postId,
      userId: user.id,
      userName: user.name,
      content,
      createdAt: new Date().toISOString()
    };

    const allComments = JSON.parse(localStorage.getItem(COMMENTS_KEY) || '[]');
    allComments.push(newComment);
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(allComments));

    return newComment;
  }
};
