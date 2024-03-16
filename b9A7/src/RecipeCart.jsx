import React from 'react';
import { IoTimeOutline } from "react-icons/io5";
import { ImPower } from "react-icons/im";
import { GiVibratingShield } from "react-icons/gi";

const RecipeCart = (card,handelAdd) => {
    console.log(handelAdd);
    return (
 <div className='w-3/3 ml-4'>

         <div className=''>
{/* ------------------------------------------------------- */}
          <div className='border p-5  rounded-2xl mb-5 '>
                  <img className='w-96 h-[250px] rounded-xl' src={card.card.recipe_image} alt=""/>
                  <h3 className='text-2xl font-bold mt-3 underline'>{card.card.recipe_name}</h3>
                  <p className='text-sm mb-3  mt-3'>{card.card.short_description_recipe}</p>
                  <hr />
                  <p className='text-xl font-semibold mt-3 mb-3'>Ingredients:{card.card.recipe_ingredients} -</p>
                            <ul className='ml-32 text-lg font-semibold'>
                                <li>1. {card.card.ingredients_one}</li>
                                <li>2. {card.card.ingredients_two}</li>
                                <li>3. {card.card.ingredients_three}</li>
                            </ul>
                  <hr />
                  <div className='flex justify-around'>
                          <div className='flex items-center gap-1 mt-2'>
                          <IoTimeOutline />
                          <button>{card.card.recipe_preparing_time}</button>
                          </div>
                          <div className='flex items-center gap-1 mt-2'>
                          <ImPower />
                          <button>{card.card.calories} Calories</button>
                          </div>
                          
                  </div>
                  <button onClick={() => handelAdd(card)}  className='bg-red-300 px-4 py-2 rounded-2xl mt-5 font-semibold'>Want To Cook</button>
                  <div>
                <button className='flex items-center gap-2 bg-yellow-200 px-3 py-2 mt-3 rounded-2xl font-bold'> <GiVibratingShield />
                                                           Rating : 4.5 / 5</button>
            </div>
          </div>
{/* --------------------------------------------- */}
{/* comment kore dibo pore */}
          {/* <div className='border p-8  rounded-2xl'>
                  <img className='w-96 rounded-2xl' src="https://i.ibb.co/fYxFZPt/george-zheng-0-Kbjfwunink-unsplash-1.jpg" alt=""/>
                  <h3 className='text-2xl font-bold mt-3 underline'>Biriani</h3>
                  <p className='text-sm mb-3  mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, aspernatur.</p>
                  <hr />
                  <p className='text-xl font-semibold mt-3 mb-3'>Lorem ipsum dolor sit amet.</p>
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
                  <button className='bg-red-300 px-4 py-2 rounded-2xl mt-5 font-semibold'>Want To Cook</button>
                  <div>
                <button className='flex items-center gap-2 bg-yellow-200 px-3 py-2 mt-3 rounded-2xl font-bold'> <GiVibratingShield />
                                                           Rating : 4.5 / 5</button>
            </div>
          </div> */}



{/* ------------------------------------------------------------------------------------ */}
          
            
{/* -------------------------------------------------- */}
         </div>

 </div>
    );
};

export default RecipeCart;