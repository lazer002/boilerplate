import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('token'));

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://vsee.netlify.app'
  : 'http://localhost:3523';
  
  

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout,SERVER_URL }}>
      {children}
    </AuthContext.Provider>
  );
}
