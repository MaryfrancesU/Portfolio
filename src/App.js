import './App.scss';
import Home from "./Home/Home";
import AboutMe from './AboutMe/AboutMe';
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';

function App() {
    
    useEffect(() => {
        const html = document.documentElement;
        const sessionTheme = window.sessionStorage.getItem("mu-portfolio--theme");

        if (sessionTheme == null){ 
            html.dataset.theme = "light";
            window.sessionStorage.setItem("mu-portfolio--theme", html.dataset.theme);
        }
        else {
            html.dataset.theme = sessionTheme;
        }
    },[])

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
