import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-display">
          {label}
        </label>
      )}
      <input
        className={`w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-neutral-700 focus:border-white focus:outline-none transition-colors duration-300 font-sans ${className}`}
        {...props}
      />
    </div>
  );
};

export const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string }> = ({ label, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-display">
          {label}
        </label>
      )}
      <textarea
        className={`w-full bg-neutral-900/50 border border-white/10 px-4 py-3 text-white placeholder-neutral-700 focus:border-white/50 focus:outline-none transition-colors duration-300 font-sans min-h-[120px] resize-y ${className}`}
        {...props}
      />
    </div>
  );
};
