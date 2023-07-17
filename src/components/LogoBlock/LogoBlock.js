import './LogoBlock.scss';

import Logo from './Logo.svg';
import Loupe from './loupe.svg';
import Call from './call.svg';
import CallWhite from './call-white.svg';
import Heart from './heart.svg';
import Cart from './cart-brown.svg';
import Compariso from './compariso-brown.svg';
import arrow  from './arrow-mini-green.svg';

function LogoBlock({size}){
   
   function clickNum(){
      let contentCall = document.querySelector('.logo-block_call-body');

      contentCall.classList.toggle('logo-block_call-pop-up-open');
   }


   return (
      <div className="logo-block">
         <div className="logo-block_container container">
            <div className="logo-block_body">
               <div className="logo-block_logo">
                  <img src={Logo} alt="Logo" />
               </div>
               <div className="logo-block_search">
                  <div className="logo-block_search-body">
                     <input type="text" placeholder='Пошук'/>
                     <div className="logo-block_serch-dec"></div>
                     <img src={Loupe} alt="Loupe" />
                  </div>
               </div>
               <div className="logo-block_call">
                  <div className="logo-block_call-body">
                     <div className="logo-block_call-img">
                        <a href="tel:380671150058">
                           <img src={Call} alt="Call" />
                        </a>
                     </div>
                     <div className="logo-block_contant">
                        <div className="logo-block_call-btn-pop-up">
                           <div className="logo-block_call-number" onClick={clickNum}>
                              <div className="logo-block_call-phone"  data-num="380671150058">
                                 +38 (067) 115 00 58
                              </div>
                              <img src={arrow} alt="arrow" className="arrow" />
                           </div>
                           <div className='logo-block_call-number-btn'>Замовити зворотній зв’язок</div>
                        </div>
                        <div className="logo-block_call-pop-up">
                           <div className="logo-block_call-pop-up-num" data-num="380501150058">
                              +38 (050) 115 00 58
                           </div>
                           <div className="logo-block_call-pop-up-num" data-num="380671150058">
                              +38 (050) 115 00 58
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="logo-block_icon">
                  <div className="logo-block_icon-item logo-block_icon-heart">
                     <span className='count'>1</span>
                     <img src={Heart} alt="Heart" />
                  </div>
                  <div className="logo-block_icon-item logo-block_icon-compariso">
                     <span className='count'>1</span>
                     <img src={Compariso} alt="Compariso" />
                  </div>
                  <div className="logo-block_icon-item logo-block_icon-cart">
                     <span className='count'>1</span>
                     <img src={Cart} alt="Cart" />
                     <div className="logo-block_icon-catr-sum">
                        <span className="sum">0,0</span>грн
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default LogoBlock;