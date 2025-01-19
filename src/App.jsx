import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import Header from "./header.jsx";

import Cafes from "./pages/Cafes.jsx";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="cafes" element={<Cafes />} />
      </Routes>
    </Router>
  );
}

export default App;
