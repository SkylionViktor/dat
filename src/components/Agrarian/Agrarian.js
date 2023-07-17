import './Agrarian.scss';
import bg_2 from './main_bg-2.jpg';

import LogoBlock from '../LogoBlock/LogoBlock';
import CategoryBtn from '../CategoryBtn/CategoryBtn';

function Agrarian({size}){

   return(
      <div className="agrarian">
         <LogoBlock size={size}/>
         <CategoryBtn size={size}/>
         <div className="agrarian_body">
            <div className="agrarian_content">
               <div className="agrarian_container container">
                  <div className="agrarian_text">
                     <h1 className="agrarian_title"><span>Аграрний</span> 
                        інтернет-магазин
                     </h1>
                     <p className="agrarian_sub-text">
                        Основна сфера діяльності – дистрибуція насіння, засобів 
                        захисту рослин, мінеральних макро - та мікродобрив
                     </p>
                     <a href="/" className="agrarian_btn agrarian_btn-pc">Про компанію</a>
                  </div>
               </div>
            </div>
            <div className="agrarian_bg">
               <img src={bg_2} alt="bg" />
            </div>
            <div className="agrarian_btn-mob-container">
               <a href="/" className="agrarian_btn agrarian_btn-mob">Про компанію</a>
            </div>
         </div>
      </div>
   )
}

export default Agrarian;