import React from 'react';

const Banner = () => {
    return (
<div className='banner-container   mt-5 rounded-3xl max-w-7xl mx-auto'>
                <div className='flex items-center justify-center mt-10'>
                   <h1 className='text-6xl text-white font-bold items-center justify-center mt-24'>Cooking is like love,it should be <br />
                    entered into  with complete <br />
                     abandon  or not at all...❗❗❗ </h1>
                </div>
       {/* --------------- */}
               <div>
                  <p className='text-white items-center justify-center ml-56'>A career in food service is more than a job—it is an extension of life. <br /> The best chefs understand the relationship between food and humanity; they understand the deep history of <br /> culinary tradition;  and they know that preparing good food is more than copying a recipe.</p>
               </div>
       {/* ------------------ */}
       <div className='flex items-center justify-center mt-16 gap-48'>
               <button className='bg-red-300 px-4 py-2 rounded-2xl font-bold'>Explore now</button>
               <button className='text-white font-bold border px-4 py-2 rounded-2xl'>Our Feedback</button>
       </div>
</div>
    );
};

export default Banner;