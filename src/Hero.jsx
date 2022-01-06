import React from 'react';
import './index.css';

const Hero=()=>{
    const offers = {
        top: '286px', 
        color: '#FFFFFF'
    }
    return(
        
        <div className="container">
        <h1 className="soul">The Soul Of The World</h1>
        <i className="fa fa-play d-flex justify-content-center"></i>
        <h2 className="solution">A Simple Solution</h2>
        
        <div className="d-flex justify-content-center">
            <div className="video-container">

            </div>
        </div>
        <div className='row  justify-content-center'>
          <div className="offers"  style={offers}>
           <p>For businesses and organizations - you can build communities and
            engage audiences with one easy-to-use mobile app platform.</p>
           <button>Know More </button>
            <button>Contact Us</button>
         </div>
       </div>
    </div>
    );
}

export default Hero;