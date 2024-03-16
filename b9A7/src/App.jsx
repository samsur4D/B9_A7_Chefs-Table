import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Middle from './Middle';
  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Navbar></Navbar>
      <Banner></Banner>
      <Middle></Middle>
        

   <ToastContainer />
    </>
  )
}

export default App
