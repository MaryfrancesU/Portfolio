import './App.scss';
import Home from "./Home/Home";
import AboutMe from './AboutMe/AboutMe';
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';

function App() {
    const html = document.documentElement;
    const currentTheme = window.sessionStorage.getItem("mu-portfolio--theme");

    useEffect(() => {
        if (currentTheme != null)
            html.dataset.theme = currentTheme;
        else {
            html.dataset.theme = currentTheme;
            window.sessionStorage.setItem("mu-portfolio--theme", "dark");
        }
    },[currentTheme, html])

    return (
        <BrowserRouter basename="/Portfolio">
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
