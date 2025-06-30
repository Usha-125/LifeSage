// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// Pages
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

// Components
import ProtectedRoute from './components/ProtectedRoute';
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-teal-600">🧘‍♀️ LifeSage</h1>
          <nav>
            <ul className="flex gap-4">
              <li><Link to="/" className="hover:text-teal-500">Home</Link></li>
              <li><Link to="/dashboard" className="hover:text-teal-500">Dashboard</Link></li>
              <li><Link to="/login" className="hover:text-teal-500">Login</Link></li>
              <li><Link to="/signup" className="hover:text-teal-500">Sign Up</Link></li>
              <li><LogoutButton /></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container mx-auto py-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white shadow-inner py-6 text-center text-sm text-gray-500 mt-auto">
          © {new Date().getFullYear()} LifeSage • Built with ❤️ for holistic well-being
        </footer>
      </div>
    </Router>
  );
}

export default App;