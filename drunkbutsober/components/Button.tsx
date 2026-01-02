import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 font-display font-medium transition-all duration-300 ease-out border focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wider uppercase";
  
  const variants = {
    primary: "bg-white text-black border-white hover:bg-black hover:text-white",
    secondary: "bg-neutral-800 text-white border-neutral-800 hover:bg-neutral-700 hover:border-neutral-700",
    outline: "bg-transparent text-white border-white/30 hover:border-white hover:bg-white/5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
