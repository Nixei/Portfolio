import { BrowserRouter } from 'react-router-dom';
import { MainPage } from './pages';
import { useDarkMode } from './useDarkMode';
import { ThemeProvider } from 'styled-components';

import {lightTheme, darkTheme, GlobalStyles} from './themes.js';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <BrowserRouter>
        <div className="App">
          <GlobalStyles/>
          <MainPage toggleTheme={toggleTheme}/>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
