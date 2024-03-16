import React from 'react';
import { IoTimeOutline } from "react-icons/io5";
import { ImPower } from "react-icons/im";

const RecipeCart = () => {
    return (
 <div className='w-2/3'>

         <div>
{/* ------------------------------------------------------- */}
          <div className='border p-8 m-56 rounded-2xl'>
                  <img className='w-96 rounded-2xl' src="https://i.ibb.co/fYxFZPt/george-zheng-0-Kbjfwunink-unsplash-1.jpg" alt=""/>
                  <h3>Biriani</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, aspernatur.</p>
                  <hr />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <hr />
                  <div className='flex justify-around'>
                          <div className='flex items-center gap-1 mt-2'>
                          <IoTimeOutline />
                          <button>30 Minutes</button>
                          </div>
                          <div className='flex items-center gap-1 mt-2'>
                          <ImPower />
                          <button>65 Calorries</button>
                          </div>
                          
                  </div>
                  <button>Want To Cook</button>
          </div>
{/* -------------------------------------------------- */}
         </div>

 </div>
    );
};

export default RecipeCart;