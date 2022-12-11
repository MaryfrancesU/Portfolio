import './App.scss';
import Home from "./Home/Home";
import AboutMe from './AboutMe/AboutMe';
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter baseName="/Portfolio">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe /> } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />}/> 
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
