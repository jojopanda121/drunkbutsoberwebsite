import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';
import { authService } from '../services/storage';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      authService.login(email, name);
      setLoading(false);
      onLogin();
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-[#0a0a0a] border border-white/20 p-8 shadow-2xl animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-display font-bold text-white mb-2">Join the Club</h2>
        <p className="text-neutral-400 text-sm mb-8">Enter your details to leave comments and sign the guestbook.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input 
            label="Display Name" 
            placeholder="e.g. CyberPunk99" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="you@drunkbutsober.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <div className="pt-4">
            <Button type="submit" fullWidth disabled={loading}>
              {loading ? 'Authenticating...' : 'Enter'}
            </Button>
          </div>
          
          <p className="text-xs text-neutral-600 text-center mt-4">
            *This is a demo. No data is sent to a server. Accounts are stored in your browser.
          </p>
        </form>
      </div>
    </div>
  );
};
