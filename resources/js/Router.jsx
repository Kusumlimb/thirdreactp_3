import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/Home";
import Home from "./pages/Home";
// import Welcome from "./pages/Welcome";
// import Contact from "./pages/Contact";
// import Blog from "./pages/Blog";


const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/blog" element={<Blog/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter