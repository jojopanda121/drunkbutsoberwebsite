import React from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_POSTS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-6xl mx-auto px-6">
      
      {/* Hero Section */}
      <div className="mb-24 border-l-2 border-white pl-8 py-4">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
          Clarity in Chaos.<br/>
          Structure in Noise.
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl font-light">
          A collection of thoughts on technology, sobriety, and the minimalist lifestyle.
          Welcome to the wireframe.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {INITIAL_POSTS.map((post) => (
          <article key={post.id} className="group flex flex-col h-full">
            <Link to={`/post/${post.id}`} className="block overflow-hidden mb-6 relative aspect-[4/3]">
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 z-10 transition-colors duration-300" />
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute bottom-4 left-4 z-20 bg-black/80 backdrop-blur px-3 py-1 border border-white/20">
                <span className="text-xs font-mono text-white uppercase">{post.category}</span>
              </div>
            </Link>

            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime} read</span>
              </div>
              
              <Link to={`/post/${post.id}`}>
                <h2 className="text-2xl font-display font-bold text-white mb-3 group-hover:underline decoration-1 underline-offset-4">
                  {post.title}
                </h2>
              </Link>
              
              <p className="text-neutral-400 line-clamp-3 mb-6 flex-1 text-sm leading-relaxed">
                {post.excerpt}
              </p>

              <Link 
                to={`/post/${post.id}`} 
                className="inline-flex items-center gap-2 text-white text-sm font-display uppercase tracking-widest hover:gap-4 transition-all"
              >
                Read Article <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
