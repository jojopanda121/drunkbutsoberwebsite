import React from 'react';
import { Comments } from '../components/Comments';
import { User } from '../types';

interface GuestbookProps {
  user: User | null;
  onRequireAuth: () => void;
}

export const Guestbook: React.FC<GuestbookProps> = ({ user, onRequireAuth }) => {
  return (
    <div className="pt-32 pb-20 max-w-2xl mx-auto px-6 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-display font-bold text-white mb-4">Guestbook</h1>
        <p className="text-neutral-400">
          Leave your mark. Sign the digital ledger. 
          <br/>Tell us where you're from and what you're drinking (or not).
        </p>
      </div>

      <div className="bg-[#0a0a0a] border border-white/10 p-8 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-white/20"></div>
         <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-white/20"></div>
         
        <Comments 
          postId="guestbook" 
          currentUser={user} 
          onRequireAuth={onRequireAuth} 
        />
      </div>
    </div>
  );
};
