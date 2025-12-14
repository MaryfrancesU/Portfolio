import './App.scss';
import Home from "./Home/Home";
import AboutMe from './AboutMe/AboutMe';
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import MouseTrailCanvas from './animations/MouseTrail';
import AmbientCircles from './animations/AmbientCircles';

function App() {
    
    useEffect(() => {
        const html = document.documentElement;
        const prevTheme = window.localStorage.getItem("mu-portfolio--theme");

        if (prevTheme == null){ 
            html.dataset.theme = "dark";
            window.localStorage.setItem("mu-portfolio--theme", html.dataset.theme);
        }
        else {
            html.dataset.theme = prevTheme;
        }
    },[])

    return (
        <BrowserRouter basename="/Portfolio">
            <AmbientCircles />
            <MouseTrailCanvas />
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
