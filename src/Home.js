import React from 'react'

import offer1 from "./offer1.png";
import offer2 from "./offer2.jpg";
import worng from "./worng.jpg";
import seven from "./seven.png";
import five from "./five.png";
import two from "./two.webp";
import offer3 from "./offer3.webp";
import secure2 from "./secure2.png";
import blue from "./blue.png";
import navy from "./navy.avif";
function Home() {
    return (
        <div className='home'>
        <img src={offer1} alt={offer1} id='offer' width={250} height={250}/>
        <img src={offer2} alt={offer2} id='offer2' width={250} height={250}/>
        <img src={worng} alt={worng} id='worng' width={250} height={250}/>
        <img src={seven} alt={seven} id='offer3' width={250} height={250}/>
        <img src={five} alt={five} id='offer4' width={250} height={250}/>
        <img src={two} alt={two} id='offer5' width={250} height={250}/>
        <img src={offer3} alt={offer3} id='offer6' width={200} height={200}/>
        <img src={secure2} alt={secure2} id='secure2' width={200} height={200}/>
        <img src={blue} alt={blue} id='blue' width={200} height={200}/>
        <img src={navy} alt={navy} id='navy' width={200} height={200}/>
        <h1 id='h1' > <span >The internet can be 
           hard to use</span>
            </h1>
          
        </div>
    )
}

export default Home
