import React from 'react';
import './index.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Botspot from './Botspot';
import Services from './Services';

const App =()=>{
  return(
    <>
    <div className='first-background'>
     <Navbar/>
     <Hero/>
     </div>
     <Botspot/>
     <Services/>
     </>
  );
}

export default App;