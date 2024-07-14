import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [tema, setTema] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTema) => (prevTema === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ tema, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};