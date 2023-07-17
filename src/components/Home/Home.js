import { useState } from 'react';

import Agrarian from '../Agrarian/Agrarian';
import Header from '../Header/Header';

import './Home.scss'

function  Home(){
   let [size, setSize] = useState(window.innerWidth);
   window.addEventListener('resize', ()=>{
      let size = window.innerWidth;
      setSize(size);
   })

   return(
      <div className="home">
         <Header  size={size}/>
         <Agrarian size={size}/>
      </div>
   )
}

export default Home;