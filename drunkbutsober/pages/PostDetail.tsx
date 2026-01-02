import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { INITIAL_POSTS } from '../constants';
import { Comments } from '../components/Comments';
import { User } from '../types';

interface PostDetailProps {
  user: User | null;
  onRequireAuth: () => void;
}

export const PostDetail: React.FC<PostDetailProps> = ({ user, onRequireAuth }) => {
  const { id } = useParams<{ id: string }>();
  const post = INITIAL_POSTS.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/" />;
  }

  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <div className="flex items-center justify-center gap-4 text-xs font-mono text-neutral-400 mb-6 uppercase tracking-widest">
            <span>{post.category}</span>
            <span className="w-px h-3 bg-neutral-700"></span>
            <span>{post.date}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
          {post.title}
        </h1>
        <p className="text-xl text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
          {post.excerpt}
        </p>
      </div>

      {/* Image */}
      <div className="w-full h-[60vh] md:h-[70vh] relative mb-16 overflow-hidden">
         <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover filter grayscale opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6">
        <div 
          className="prose prose-invert prose-lg prose-headings:font-display prose-p:font-light prose-p:leading-loose prose-a:text-white prose-a:underline hover:prose-a:text-neutral-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags / Footer of Post */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center text-sm font-mono text-neutral-500">
           <span>Words by DrunkButSober</span>
           <span>Share via [Copy Link]</span>
        </div>

        {/* Comments Section */}
        <Comments 
          postId={post.id}
          currentUser={user}
          onRequireAuth={onRequireAuth}
        />
      </div>
    </div>
  );
};
