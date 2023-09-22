import React from 'react'
import {Link} from "react-router-dom";

import uno1 from "./uno1.png"
function Header() {
  
    return(
        <div className='header' >
            <img src={uno1} alt={uno1} width={90} height={70} id='uno'/>
            <Link to="/"   id='home'>Home</Link>
                <Link to="/peek" id='peek'>Peekaboo</Link>
                <Link to="/security" id='secu'>Security</Link> 
                <Link to="/blog" id='blog'>Blog</Link>
                <Link to="/download" id='down'>Download</Link>
                <Link to="/about" id='about'>About</Link>
                <Link to="/getuno" id='get'>Get Uno  --  it's Free</Link>
           
           
          
         

</div>
           
       
    )
}

export default Header
