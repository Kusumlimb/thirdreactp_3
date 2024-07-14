import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/Home";
import Home from "./pages/Home";
import Welcome from "./pages/About";
import Contact from "./pages/Projects";
import Blog from "./pages/Contact";
import Projects from "./pages/Projects";


const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter