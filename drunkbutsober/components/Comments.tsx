import React, { useState, useEffect } from 'react';
import { User, Comment } from '../types';
import { commentService } from '../services/storage';
import { Button } from './Button';
import { TextArea } from './Input';
import { MessageSquare } from 'lucide-react';

interface CommentsProps {
  postId: string;
  currentUser: User | null;
  onRequireAuth: () => void;
}

export const Comments: React.FC<CommentsProps> = ({ postId, currentUser, onRequireAuth }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Load initial comments
    const loaded = commentService.getComments(postId);
    setComments(loaded);
  }, [postId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      onRequireAuth();
      return;
    }
    if (!newComment.trim()) return;

    const added = commentService.addComment(postId, newComment, currentUser);
    setComments([added, ...comments]);
    setNewComment('');
  };

  return (
    <div className="mt-16 border-t border-white/10 pt-10">
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="text-white" size={20} />
        <h3 className="text-xl font-display font-bold text-white">
          Discussion <span className="text-neutral-500">({comments.length})</span>
        </h3>
      </div>

      {/* Input Area */}
      <div className="mb-12">
        {currentUser ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextArea 
              placeholder="Write something profound..." 
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div className="flex justify-end">
              <Button type="submit" variant="outline">Post Comment</Button>
            </div>
          </form>
        ) : (
          <div className="bg-white/5 border border-white/10 p-6 text-center">
            <p className="text-neutral-400 mb-4">Log in to join the conversation.</p>
            <Button onClick={onRequireAuth}>Login to Comment</Button>
          </div>
        )}
      </div>

      {/* List */}
      <div className="space-y-8">
        {comments.map((comment) => (
          <div key={comment.id} className="group">
            <div className="flex items-baseline justify-between mb-2">
              <h4 className="font-display font-bold text-white">{comment.userName}</h4>
              <span className="text-xs text-neutral-600 font-mono">
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-neutral-300 font-sans leading-relaxed text-sm">
              {comment.content}
            </p>
            <div className="h-px bg-white/5 w-full mt-6 group-last:hidden" />
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-neutral-600 text-sm italic">Silence is golden. Be the first to break it.</p>
        )}
      </div>
    </div>
  );
};
