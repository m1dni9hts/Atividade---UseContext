import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './App.css'; // para estilos

const ThemedApp = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1>Aplicação com Tema {theme}</h1>
        <button onClick={toggleTheme}>
          Alternar para Tema {theme === 'light' ? 'Escuro' : 'Claro'}
        </button>
      </header>
    </div>
  );
};

export default ThemedApp;