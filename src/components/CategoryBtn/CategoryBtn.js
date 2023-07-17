import './CategoryBtn.scss';


import frame from './Frame.svg'
import frameWhite from './Frame-white.svg'
import farmer from './farmer.svg'
import farmerWhite from './farmer-white.svg'
import fertilizer from './fertilizer.svg'
import fertilizerWhite from './fertilizer-white.svg'
import sapling from './sapling.svg'
import saplingWhite from './sapling-white.svg'
import seeds from './seeds.svg'
import seedsWhite from './seeds-white.svg'
import arrowWhite from './arrow-mini-white.svg'

function CategoryBtn({id='seeds', size}){
   
   
   let arr = ['seeds','sapling','fertilizer','frame','farmer'];
   let obj = {"seeds":{
      img : seeds,
      imgWhite: seedsWhite,
      text: 'Насіння'
   },"sapling":{
      img : sapling,
      imgWhite: saplingWhite,
      text: 'Засоби захисту рослин'
   },"fertilizer":{
      img : fertilizer,
      imgWhite: fertilizerWhite,
      text: 'Добрива'
   },"frame":{
      img : frame,
      imgWhite: frameWhite,
      text: 'Кщрмова група'
   },"farmer":{
      img : farmer,
      imgWhite: farmerWhite,
      text: 'Агроному в поміч'
   }};

   function categoryPopUp(){
      let arrowBtn = document.querySelector('.category_arrow');
      let popUp = document.querySelector('.category_pop-up');

      arrowBtn.classList.toggle('category_arrow-active');
      popUp.classList.toggle('category_pop-up-open');

      if(popUp.classList.contains('category_pop-up-open')){
         popUp.style.opacity = '1';
         popUp.style.animationName = 'popUpOpen';
         popUp.style.animationDuration = '.3s';
      }else{
         popUp.style.opacity = '0'
         popUp.style.animationName = 'popUpCloses';
         popUp.style.animationDuration = '.3s';
      }

   }

   return(
      <div className="category">
         <div className="category_container container">
            <div className="category_body">
               {(size>920)?(<>
               <a href="/" className='category_btn'>
                  <div className="category_img category_img-green">
                     <img src={seeds} alt="seeds" />
                  </div>
                  <div className="category_img category_img-white">
                     <img src={seedsWhite} alt="seedsWhite" />
                  </div>
                  Насіння
               </a>
               <a href="/" className='category_btn'>
                  <div className="category_img category_img-green">
                     <img src={sapling} alt="sapling" />
                  </div>
                  <div className="category_img category_img-white">
                     <img src={saplingWhite} alt="saplingWhite" />
                  </div>
                  Засоби захисту рослин
               </a>
               <a href="/" className='category_btn'>
                  <div className="category_img category_img-green">
                     <img src={fertilizer} alt="fertilizer" />
                  </div>
                  <div className="category_img category_img-white">
                     <img src={fertilizerWhite} alt="fertilizerWhite" />
                  </div>
                  Добрива
               </a>
               <a href="/" className='category_btn'>
                  <div className="category_img category_img-green">
                     <img src={frame} alt="frame" />
                  </div>
                  <div className="category_img category_img-white">
                     <img src={frameWhite} alt="frameWhite" />
                  </div>
                  кормова група
               </a>
               <a href="/" className='category_btn'>
                  <div className="category_img category_img-green">
                     <img src={farmer} alt="farmer" />
                  </div>
                  <div className="category_img category_img-white">
                     <img src={farmerWhite} alt="farmerWhite" />
                  </div>
                  Агроному в поміч
               </a>
               </>):
               <>
                  <div className="category_btn-pop-up">
                     <div onClick={categoryPopUp} id={id} className='category_btn category_btn-mob category_btn-mob-active'>
                        <div className="category_img category_img-mob category_img-white">
                           <img src={obj[id].imgWhite} alt={id+"White"} />
                        </div>
                       <span className="category_btn-text">
                         {obj[id].text}
                       </span>
                        <span className='category_arrow'>
                           <img src={arrowWhite} alt="arrowWhite" />
                        </span>
                     </div>
                  </div>
                  <div className="category_pop-up">
                     {arr.map((item, index)=>{
                        if(item!=id){
                           return (
                              <a key={index} href="/" id={item} className='category_btn category_btn-mob'>
                                 <div className="category_img category_img-mob category_img-green">
                                    <img src={obj[item].img} alt={item} />
                                 </div>
                                 {/* <div className="category_img category_img-mob category_img-white">
                                    <img src={obj[item].imgWhite} alt={item+"White"} />
                                 </div> */}
                                 <span className="category_btn-text">
                                    {obj[item].text}
                                 </span>
                              </a>
                           )
                        }
                     })}
                  </div>
                  
               </>
            }
            </div>
         </div>
      </div>
   )
}


export default CategoryBtn;