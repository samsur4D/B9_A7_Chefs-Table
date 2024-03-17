import { Children, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Bounce, ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Middle from './Middle';
import RecipeCart from './RecipeCart';
// import RightSideCart from './RightSideCart';


  

function App() {
const[cards ,setCards] = useState([]);
const [sidebar , setSidebar] = useState([]);
const [current , setCurrent] = useState([]);
const [total , seTotal] = useState([]);



const handelAdd = (p) =>{

   
  // console.log( "ami p",p);
   let isHere = sidebar.find(item => item.recipe_id === p.recipe_id);
   if(!isHere){
    setSidebar([...sidebar,p])
   }else{
     toast("👻I am Already Exist Here BRO😏")
    //  lala
   }
 };


            useEffect(() =>{
                fetch('recipe.json')
                .then(res => res.json())
                .then(data => setCards(data));
            },[]);
             
            
            // console.log(cards);


const handelDlt = (id)=>{
    const newCart = sidebar.filter(item => item.recipe_id != id.recipe_id) ;
     
    setSidebar(newCart);
    setCurrent([...current,id])
    
}

// useEffect(()=>{console.log(current)},[current])
const totaltime = current.reduce((total,current)=>{
  const timeInmin = total + parseInt(current.recipe_preparing_time)
  return timeInmin
},0);
console.log(totaltime);


const totalCalories = current.reduce((total,current)=>{
  const timeInmin = total + parseInt(current.calories)
  return timeInmin
},0);
console.log(totalCalories);

       
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
          <table className='hover:table-auto'>
                  <thead className=''>
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
                  <tr className='vugichugi items-center bg-[#bdc3c7]'>
                  <td className='basis-1/5'>{index+1}</td>
                  <td className='basis-1/5'>{item.recipe_name}</td>
                  <td className='basis-1/5'>{item.recipe_preparing_time}min</td>
                  <td className='basis-1/5'>{item.calories}calories</td>
                  <button  onClick={()=>handelDlt(item)}  className='items-center mt-5 font-semibold bg-red-400 px-5 py-2 rounded-xl'>Preparing</button>
                  {/* <td
                                        className='rounded-3xl px-3 bg-red-300  font-bold'>Preparing</td> */}
               </tr>
                ))
              }
                  </tbody>
            </table>
          </div>

          <div className='flex items-center justify-center -mt-0.5'>
                <h2 className='font-bold text-3xl mt-20'>Currently Cooking : {current.length}</h2>
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
                        current.map((pd , idx)=>(
                    <tr className='items-center'>
                          <td className='basis-1/5'>{idx + 1}</td>
                          <td className='basis-1/5'>{pd.recipe_name}</td>
                          <td className='basis-1/5'>{pd.recipe_preparing_time}min</td>
                          <td className='basis-1/5'>{pd.calories}calories</td>
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

            <table className='table-bottom mt-20'>
                <thead>
                    <tr>
                         <th>Total Time</th>
                         <th>Total Calories</th>
                    </tr>
                </thead>
                <tr className='border-b-10 border-y-black'>
                     <td>{totaltime} minutes</td>
                     <td>{totalCalories} calories</td>
                </tr>
            </table>
            
            <div className='items-center justify-center flex mt-10 bg-yellow-200 p-10 rounded-3xl'>
                 <h2 className='text-6xl font-mono font-extrabold'>What does it mean to calculate a recipe?</h2>
            </div>
            <p>We’ll basically tell you how much it cost to produce <br /> your dish
               and what’s your profit margin. Plain and simple.</p>
               <div className='mt-10'>

               <svg className='svg animate-ping' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 219" fill="none"><path d="M2 0.5C13.1667 50.3333 22 131.5 80.5 143.5C125.04 152.636 143.5 75.5 128.5 65.5C113.5 55.5 85 125.5 128.5 217M128.5 217L136.5 196M128.5 217L104 212.5" stroke="black" stroke-width="3"></path></svg>

                <img decoding='async' className='animate-bounce' src="https://i.ibb.co/XDQy5d4/Untitled-design-16.png" alt="" />
                 <hr />

                 <h1 className='text-3xl font-serif font-bold'>You sell the same dish in a delivery app?</h1>

               {/* <table>
                   <thead className='items-center justify-center flex'>
                        <tr >
                          <th className='text-4xl text-blue-600'>Delivey Profit</th>
                        </tr>
                   </thead>
                   <tbody className=''>
                    <tr>
                        <td className='text-2xl text-slate-900-600'>Pathao</td>
                        <td className='text-2xl text-slate-900-600'>Uber Eats</td>
                        <td className='text-2xl text-slate-900-600'>Zomatto</td>
                    </tr>
                    <tr>
                        <td className='text-xl text-blue-600'>24%</td>
                        <td className='text-xl text-blue-600'>39%</td>
                        <td className='text-xl text-blue-600'>Zomatto18%</td>
                    </tr>
                   </tbody>
               </table> */}
                  <div className='flex items-center justify-center mt-5'>
                         <h1 className='text-4xl font-extrabold text-blue-800'>Delivery Profitable</h1>
                  </div>
                  <div className='flex items-center justify-center mt-3'>
                    <h1 className='text-9xl font-extrabold text-red-600'>70<span className='text-yellow-600'>%</span></h1>
                  </div>
                  <div className='flex items-center justify-center mt-2'>
                    <h3 className='text-4xl font-extrabold text-blue-800'>Free For Pathao App</h3>
                  </div>
                  <div>
                    <img className='' src="https://i.ibb.co/jHCXMd4/motorcycle-delivery-food-isolated-icon-vector-10256640.jpg" alt="" />
                  </div>
               
               </div>

       </div>
                    </div>
                    


         


  {/* <RightSideCart></RightSideCart> */}
        </div>
        
               
   <ToastContainer
    position='top-center'
    theme='dark'
    autoClose={3000}
    transition={Bounce}
    />
    </>
  )
}

export default App
