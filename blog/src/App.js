import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import MainPage from "./pages/mainPage";
import SignPage from "./pages/signPage";
import GlobalStyle from "./style/global";
import WritePage from "./pages/writePage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign" element={<SignPage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
