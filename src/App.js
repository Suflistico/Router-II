import "../src/Style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Views/Home";
import Personajes from "./Views/Personajes";
export default function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<Personajes />} />
        </Routes>
    </BrowserRouter>
  </div>
  );
}