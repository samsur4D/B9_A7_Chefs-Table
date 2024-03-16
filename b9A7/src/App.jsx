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
import RightSideCart from './RightSideCart';
  

function App() {
const[cards ,setCards] = useState([]);


            useEffect(() =>{
                fetch('recipe.json')
                .then(res => res.json())
                .then(data => setCards(data));
            },[]);
             
            
            console.log(cards);

            const handelAdd = (p) =>{
              console.log(p);
            }

            

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
                     <RecipeCart  card={card} handelAdd={handelAdd}></RecipeCart>
                     ) ) }
          </div>
            
            <RightSideCart></RightSideCart>
        </div>

   <ToastContainer />
    </>
  )
}

export default App
