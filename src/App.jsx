import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages//Home";
import Portfolio from "./components/pages/Portfolio";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
