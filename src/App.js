import GlobalStyle from "./globalStyles";
import { MainPage } from "./pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle/>
        <MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
