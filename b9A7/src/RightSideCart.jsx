import React from 'react';

const RightSideCart = () => {
    return (
<div className='w-1/3 '>
            
            <div className='flex items-center justify-center -mt-0.5'>
                <h2 className='font-bold text-3xl mt-20'>Want to cook : 1</h2>
                <hr />
                <hr />
            </div>

          <div className='table-one'>
          <table>
                  <thead>
                         <tr>
                             <th>No</th>
                             <th>Name</th>
                             <th>Time</th>
                             <th>Calories</th>
                         </tr>
                  </thead>
                  <tbody>
                       <tr>
                          <td>1</td>
                          <td>Biriani</td>
                          <td>20 Minutes</td>
                          <td>32 Calories</td>
                       </tr>
                       <tr>
                          <td>2</td>
                          <td>Biriani</td>
                          <td>27 Minutes</td>
                          <td>62 Calories</td>
                       </tr>
                  </tbody>
            </table>
          </div>

          <div className='flex items-center justify-center -mt-0.5'>
                <h2 className='font-bold text-3xl mt-20'>Currently Cooking : 1</h2>
                <hr />
                <hr />
            </div>

               
<hr />

            <div className='table-one'>
          <table>
                  <thead>
                         <tr>
                             <th>No</th>
                             <th>Name</th>
                             <th>Time</th>
                             <th>Calories</th>
                         </tr>
                  </thead>
                  <tbody>
                       <tr>
                          <td>1</td>
                          <td>Biriani</td>
                          <td>20 Minutes</td>
                          <td>32 Calories</td>
                       </tr>
                       <tr>
                          <td>2</td>
                          <td>Biriani</td>
                          <td>27 Minutes</td>
                          <td>62 Calories</td>
                       </tr>
                  </tbody>
            </table>
          </div>

            <table className='table-bottom mt-20 '>
                <thead>
                    <tr>
                         <th>Total Time</th>
                         <th>Total Calories</th>
                    </tr>
                </thead>
                <tr className='border-b-10 border-y-black'>
                     <td>35 minutes</td>
                     <td>777 calories</td>
                </tr>
            </table>


            
{/* ------------------------------------------------------------------------------------------ */}

          {/* <h2 className='flex justify-center text-black font-bold text-xl mb-5 '> Want to Cook : 1</h2>
          <hr />
          <div className='flex items-start justify-around mt-5'>
                <h3>Name</h3>
                <h3>Time</h3>
                <h3>Calories</h3>
          </div> */}
          {/* short menu */}
          {/* <div className='flex items-start justify-around mt-2 bg-gray-200 p-6 mr-24 '> */}
            {/* <h3 className=''>1</h3> */}
              {/* <div className='flex items-start justify-around gap-5'>
              <h3>Noodles</h3>
              <h3>20 Minutes</h3>
              <h3>300 Calories</h3>
              <button className='bg-red-300 px-4 py-2 rounded-3xl'>Preparing</button>
              </div>
          </div> */}
          {/* ---------------------------- */}
          {/* current cookling */}
          {/* <h2 className='flex justify-center text-black font-bold text-xl mb-5  mt-5'> Currently Cookling : 2</h2>
          <hr />
          <div className='flex items-start justify-around mt-5'>
                <h3>Name</h3>
                <h3>Time</h3>
                <h3>Calories</h3>
          </div> */}
          {/* <div className='flex items-start justify-around mt-2 bg-gray-200 p-6 mr-24 '>
            <h3 className=''>1</h3>
              <div className='flex items-start justify-around gap-5'>
              <h3>Noodles</h3>
              <h3>20 Minutes</h3>
              <h3>300 Calories</h3>
              <button className='bg-red-300 px-4 py-2 rounded-3xl'>Preparing</button>
              </div>
          </div> */}
</div>
    );
};

export default RightSideCart;


