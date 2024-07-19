import './App.css'; 
import { ThemeProvider } from './components/ThemeContext';
import Theme from './components/Theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Theme />
      </ThemeProvider>
    </div>
  );
}

export default App;