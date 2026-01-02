import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User } from '../types';
import { Menu, X, User as UserIcon } from 'lucide-react';
import { SITE_NAME } from '../constants';

interface NavbarProps {
  user: User | null;
  onOpenAuth: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, onOpenAuth, onLogout }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Link 
        to={to} 
        className={`font-display uppercase tracking-widest text-sm transition-colors duration-300 ${isActive ? 'text-white border-b border-white' : 'text-neutral-400 hover:text-white'}`}
        onClick={() => setIsOpen(false)}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-3 group">
            {/* Logo simulation based on description */}
            <div className="relative w-8 h-8 flex items-center justify-center border border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                <div className="absolute inset-2 border border-current opacity-50"></div>
                <div className="w-2 h-2 bg-current rounded-full"></div>
            </div>
            <span className="font-display font-bold text-xl tracking-tighter uppercase hidden sm:block">
              {SITE_NAME}
            </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/">Journal</NavLink>
          <NavLink to="/guestbook">Guestbook</NavLink>
          <div className="w-px h-4 bg-white/20"></div>
          {user ? (
            <div className="flex items-center gap-4">
               <span className="text-xs text-neutral-500 font-mono">
                 {user.name}
               </span>
               <button 
                onClick={onLogout}
                className="text-xs uppercase tracking-widest text-white hover:text-neutral-400"
               >
                 Logout
               </button>
            </div>
          ) : (
            <button 
              onClick={onOpenAuth}
              className="flex items-center gap-2 text-sm font-display uppercase tracking-widest text-white hover:text-neutral-400"
            >
              <UserIcon size={16} />
              <span>Login</span>
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-white/10 p-6 flex flex-col gap-6 animate-fade-in-down">
          <NavLink to="/">Journal</NavLink>
          <NavLink to="/guestbook">Guestbook</NavLink>
          <div className="h-px bg-white/10 w-full"></div>
          {user ? (
             <div className="flex justify-between items-center">
                <span className="text-neutral-500">{user.name}</span>
                <button onClick={onLogout} className="text-white uppercase text-sm">Logout</button>
             </div>
          ) : (
            <button onClick={() => { onOpenAuth(); toggleMenu(); }} className="text-left text-white uppercase text-sm font-display">
              Login / Sign Up
            </button>
          )}
        </div>
      )}
    </nav>
  );
};
