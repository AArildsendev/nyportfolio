import React from 'react';
import { Navigation } from './Navigation/Navigation';
import {Footer} from './Footer/Footer'
import {Hero} from './Hero/Hero'


function App() {
  return (
    <div className="App">
      <header>
      <Navigation/>
       
      </header>
      <Hero/>
      
  

      <Footer/>
    </div>
  );
}

export default App;
