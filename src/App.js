import { BrowserRouter } from 'react-router-dom';
import { MainPage } from './pages';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import {lightTheme, darkTheme, GlobalStyles} from './themes.js';

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <BrowserRouter>
        <div className="App">
          <GlobalStyles/>
          <MainPage />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
