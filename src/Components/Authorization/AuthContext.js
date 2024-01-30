// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(() => {
    // Initialize the authentication state from localStorage or other storage mechanism
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const login = () => {
    setAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  // Use useEffect to check the authentication state on component mount
  useEffect(() => {
    const storedAuthState = localStorage.getItem('isAuthenticated');
    if (storedAuthState === null) {
      setAuthenticated(storedAuthState === 'true');
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};