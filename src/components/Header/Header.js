import React from 'react';

import arrow from './arrow-mini-green.svg';
import logIn from './log-out.svg';
import openSvg from './menu-1.svg';
import closeSvg from  './cancel-1.svg'
import './top.scss';

function Header(){
   function openPopUp(){
      let  _this = document.querySelector('.popup-btn');
      let popUp = document.querySelector('.top-popUp');

      popUp.classList.toggle('top-popUp-open')
      _this.classList.toggle('popup-btn-click')
      if(popUp.classList.contains('top-popUp-open')){
         popUp.style.opacity = '1';
      }else{
         popUp.style.opacity = '0';
      }
   }
   function openBrg(){
      let brg = document.querySelector('.brg');
      let nav = document.querySelector('nav');
      
      brg.classList.toggle('open');
      brg.animate([{ transform: "rotate(0)" },
                  { transform: "rotate(360deg)" },],
                  {
                     duration: 300,
                     iterations: 1
                  });
      nav.classList.toggle('visible');

      if(brg.classList.contains('open')){
         document.body.style.overflow = 'hidden';
      }else{
         document.body.style.overflow = 'auto';
      }
      
   }

   return(
      <div className="bg">
         <div className="top-panell container">
            <nav>
               <ul className="top-panell-ul">
                  <li className="popup-btn" onClick={openPopUp}>
                     Про нас<img src={arrow} alt="arrow" />
                     <div className="top-popUp">
                        <ul className="top-popUp-ul">
                           <li><a href="/">Наша команда</a></li>
                           <li><a href="/">Партнери</a></li>
                           <li><a href="/">Договір</a></li>
                        </ul>
                     </div>
                  </li>
                  <li className='mob-link'><a href="/">Про компанію</a></li>
                  <li><a href="/">Каталог продукції</a></li>
                  <li><a href="/">Оплата і доставка</a></li>
                  <li><a href="/">Партнери</a></li>
                  <li><a href="/">Новини</a></li>
                  <li><a href="/">Контакти</a></li>
               </ul>
            </nav>
            <div className="dec"></div>
            <div className="log-out">
               <img src={logIn} alt="log-out" />
               <a href="/">Вхід</a> | 
               <a href="/">Реєстрація</a>
            </div>
            <div className="brg" onClick={openBrg}>
               <span className="brg_dec brg_open">
                  <img src={openSvg} alt="open" />
               </span>
               <span className="brg_dec brg_close">
                  <img src={closeSvg} alt="close" />
               </span>
            </div>
         </div>
      </div>
   )
}

export default Header;