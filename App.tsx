
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { useStore } from './store';
import WelcomePage from './pages/WelcomePage';
import TutorialPage from './pages/TutorialPage';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const { theme, user } = useStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col transition-colors duration-300 dark:bg-slate-900 dark:text-white">
        <Routes>
          {/* Public / Welcome Flow */}
          <Route path="/app/welcome" element={<WelcomePage />} />
          <Route path="/app/tutorial" element={<TutorialPage />} />
          
          {/* Main App */}
          <Route path="/app/*" element={
            user.userName ? (
              user.hasCompletedTutorial ? (
                <div className="flex flex-col min-h-screen">
                  <Navigation />
                  <main className="flex-1 container mx-auto px-4 py-8">
                    <Routes>
                      <Route path="home" element={<HomePage />} />
                      <Route path="*" element={<Navigate to="home" />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              ) : <Navigate to="/app/tutorial" />
            ) : <Navigate to="/app/welcome" />
          } />

          {/* Admin */}
          <Route path="/admin/*" element={<AdminDashboard />} />

          {/* Root Redirect */}
          <Route path="/" element={<Navigate to="/app/welcome" />} />
        </Routes>
      </div>
    </Router>
  );
};

const Footer: React.FC = () => (
  <footer className="py-8 bg-gray-100 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 mt-auto">
    <div className="container mx-auto px-4 text-center">
      <p className="text-gray-600 dark:text-gray-400">
        Developed by <span className="font-bold text-blue-600 dark:text-blue-400">Demian 임정훈</span>
      </p>
      <p className="text-sm mt-2">© 2025 AI Followership Master Academy. All rights reserved.</p>
    </div>
  </footer>
);

export default App;
