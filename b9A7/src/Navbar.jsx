import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

const Navbar = () => {
    return (
<div className='flex items-center justify-around mt-5 max-w-7xl mx-auto'>
        <div>
                <h1 className='font-extrabold text-3xl'>HiDDen <span className='text-red-500'>Rec<span className='text-black'>!</span>pE</span></h1>
        </div>
        {/* ---------------------------------- */}
        <div>
             <button className=' ml-3 text-2xl bg-gray-300 px-4 py-2 rounded-2xl'>Home</button>
             <button className=' ml-3 text-2xl bg-gray-300 px-4 py-2 rounded-2xl'> Recipes</button>
             <button className=' ml-3 text-2xl bg-gray-300 px-4 py-2 rounded-2xl'>About</button>
             {/* <button className=' ml-3 text-2xl bg-gray-300 p-3 rounded-2xl'>Search</button> */}
        </div>
        {/* ------------------------------------ */}
        <div className='flex space-x-2'>
              <div className='flex items-center justify-start   rounded-3xl '>
              <button className='px-10 py-2 bg-gray-300  rounded-2xl items-center flex justify-start'>
                 <FaSearch/> <span className='ml-16'>Search</span> </button>
              </div>

             <button className='bg-red-300 text-6xl rounded-full p-3'><IoIosContact /></button>
        </div>
</div>
    );
};

export default Navbar;
