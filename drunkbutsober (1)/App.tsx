import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { PostDetail } from './pages/PostDetail';
import { Guestbook } from './pages/Guestbook';
import { AuthModal } from './components/AuthModal';
import { authService } from './services/storage';
import { User } from './types';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Footer = () => (
    <footer className="border-t border-white/10 py-12 text-center">
        <p className="text-neutral-600 font-mono text-sm uppercase tracking-widest">
            © {new Date().getFullYear()} DrunkbutSober. All rights reserved.
        </p>
    </footer>
);

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogin = () => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
  };

  const handleLogout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-background text-white flex flex-col font-sans selection:bg-white selection:text-black">
        <ScrollToTop />
        <Navbar 
          user={user} 
          onOpenAuth={() => setIsAuthModalOpen(true)}
          onLogout={handleLogout}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/post/:id" 
              element={<PostDetail user={user} onRequireAuth={() => setIsAuthModalOpen(true)} />} 
            />
            <Route 
              path="/guestbook" 
              element={<Guestbook user={user} onRequireAuth={() => setIsAuthModalOpen(true)} />} 
            />
          </Routes>
        </main>

        <Footer />

        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)}
          onLogin={handleLogin}
        />
      </div>
    </Router>
  );
}
