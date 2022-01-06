import React from 'react';
import './index.css';

const offer = {
    top: '1289px'
}
const Services=()=>{
    return(
    <section>
      <div className="serve">
          <h2 className="d-flex justify-content-center align-items-center">Who We Serve</h2>
      </div>
      <div className=' row  justify-content-center '>
      <div className="offers " style={offer}>
        <p>Botspot AI serves businesses in all major sectors, providing exceptional software solutions for large corporation,
           mid-sized and startups. we use industry specific knowledge and custom tailor our products to each customer’s unique needs.
        </p>
        </div>
      </div>
     
      <section id="services-container"> 
        
        <div id="services">
            <div className="box">
              <img src="./images/finance.png" alt=""/>
                <h2 className="center h-secondary ">Finance and Insurance</h2>  
            </div>
            <div className="box">
              <img src="./images/healthcare.png" alt=""/>
                <h2 className="center h-secondary">Healthcare</h2> 
            </div>
            <div className="box">
                <img src="./images/construction.png" alt=""/>
                <h2 className="center h-secondary">Construction</h2> 
              </div>
              <div className="box">
                <img src="./images/wholesale.png" alt=""/>
                <h2 className="center h-secondary">Wholesale and retail</h2>   
              </div>
          
         
              <div className="box">
                <img src="./images/education.png" alt=""/>
                <h2 className="center h-secondary">Education</h2>  
              </div>
              <div className="box">
                <img src="./images/energy.png" alt=""/>
                <h2 className="center h-secondary">Energy and resources</h2>
              </div>
              <div className="box">
                <img src="./images/entertainment.png" alt=""/>
                <h2 className="center h-secondary">Entertainment</h2>
              </div>
              <div className="box">
                <img src="./images/transport.png" alt=""/>
                <h2 className="center h-secondary">Transportation</h2> 
              </div>
            </div>
        
    </section> 
  </section>
    );
}

export default Services;

