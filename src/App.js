import React from 'react';
import { ThemeProvider } from './components/Temas';
import ThemedApp from './ThemedApp';

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

export default App;