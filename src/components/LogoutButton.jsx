// src/components/LogoutButton.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../services/firebase';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="text-red-500 hover:text-red-700"
    >
      Logout
    </button>
  );
};

export default LogoutButton;