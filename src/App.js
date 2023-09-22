import React from 'react';
import Header from "./Header.js";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import About from "./About.js";
import Security from "./Security.js";
import Peek from "./Peek.js";
import Blog from "./Blog.js";
import Download from "./Download.js";
import Getuno from "./Getuno.js";
import Home from "./Home.js";
function App() {
    return (
       
        <div >
    
             <BrowserRouter>
             
             
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/peek" element={<Peek />} />
                <Route path="/security" element={<Security />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/download" element={<Download />} />
                <Route path="/about" element={<About />} />
                <Route path="/getuno" element={<Getuno />}     />
                
            </Routes>
            <Header/>
            </BrowserRouter>
            
            
           
            
            </div>
          
    )
}

export default App
