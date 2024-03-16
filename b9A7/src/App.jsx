import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Middle from './Middle';
import RecipeCart from './RecipeCart';
// import RightSideCart from './RightSideCart';


  

function App() {
const[cards ,setCards] = useState([]);
const [sidebar , setSidebar] = useState([]);


const handelAdd = (p) =>{
setSidebar([...sidebar])
   setSidebar([...sidebar,p]);
  // console.log( "ami p",p);
  //  let isHere = sidebar.filter(item => item.id === p.recipe_id);
  //  if(!isHere){
  //   setSidebar([...sidebar,p])
  //  }else{
  //   toast("Already HEre")
     
  //  }
 };


            useEffect(() =>{
                fetch('recipe.json')
                .then(res => res.json())
                .then(data => setCards(data));
            },[]);
             
            
            // console.log(cards);



         
            
  return (
    <>
          

         


      <Navbar></Navbar>
      <Banner></Banner>
      <Middle></Middle>
        

        {/* last part */}
        <div className=' max-w-7xl mx-auto flex'>
          <div className='cards-container grid grid-cols-2 mt-20 mr-10'>
                   {
                     cards.map((card) =>(
                     <RecipeCart key={card.id}  card={card} handelAdd={handelAdd}></RecipeCart>
                     ) ) }
          </div>


                   <div className='w-1/3' >
                   <div>
       <div className=' items-center justify-center  grid grid-cols-1'>
                <h2 className='font-bold text-3xl mt-20 flex items-center justify-center'>Want to cook : {sidebar.length}</h2>
                <hr />
                <hr />
            </div>

          <div className='table-one'>
          <table>
                  <thead>
                         <tr>
                             <th className=''>No</th>
                             <th className='basis-1/5'>Name</th>
                             <th className='basis-1/5'>Time</th>
                             <th className='basis-1/5'>Calories</th>
                         </tr>
                  </thead>
                  <tbody className=''>
                      {
                        sidebar.map((item , index)=>(
                          <tr className='items-center'>
                          <td className='basis-1/5'>{index+1}</td>
                          <td className='basis-1/5'>{item.recipe_name}</td>
                          <td className='basis-1/5'>{item.recipe_preparing_time}</td>
                          <td className='basis-1/5'>{item.calories}</td>
                          <td className='rounded-3xl px-3 bg-red-400 font-bold'>Preparing</td>
                       </tr>
                        ))
                      }
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
                  {
                        sidebar.map((item , index)=>(
                          <tr className='items-center'>
                          <td className='basis-1/5'>{index+1}</td>
                          <td className='basis-1/5'>{item.recipe_name}</td>
                          <td className='basis-1/5'>{item.recipe_preparing_time}</td>
                          <td className='basis-1/5'>{item.calories}</td>
                          {/* <td className='rounded-3xl px-3 bg-red-400 font-bold'>Preparing</td> */}
                       </tr>
                        ))
                      }
                       {/* <tr>
                          <td>2</td>
                          <td>Biriani</td>
                          <td>27 Minutes</td>
                          <td>62 Calories</td>
                       </tr> */}
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

       </div>
                    </div>   


         


  {/* <RightSideCart></RightSideCart> */}
        </div>
               
   <ToastContainer />
    </>
  )
}

export default App
