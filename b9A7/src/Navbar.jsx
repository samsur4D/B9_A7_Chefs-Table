import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

const Navbar = () => {
    return (
<div className='flex items-center justify-around mt-5 max-w-7xl mx-auto'>
        <div>
                <h1 className='font-extrabold text-3xl'>HiDDen Rec!pE 🍕</h1>
        </div>
        {/* ---------------------------------- */}
        <div>
             <button className=' ml-3 text-2xl bg-gray-300 p-3 rounded-2xl'>Home</button>
             <button className=' ml-3 text-2xl bg-gray-300 p-3 rounded-2xl'> Recipes</button>
             <button className=' ml-3 text-2xl bg-gray-300 p-3 rounded-2xl'>About</button>
             <button className=' ml-3 text-2xl bg-gray-300 p-3 rounded-2xl'>Search</button>
        </div>
        {/* ------------------------------------ */}
        <div className='flex space-x-3'>
              <button className=' text-3xl px-5 py-3 rounded-3xl bg-gray-300 flex items-center justify-between'>
                 <FaSearch/>  <button className='ml-40'>Search</button></button>
                 <button className='bg-red-300 text-6xl rounded-full p-3'><IoIosContact /></button>
        </div>
</div>
    );
};

export default Navbar;