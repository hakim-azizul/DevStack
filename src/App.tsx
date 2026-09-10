import { ToastContainer } from 'react-toastify'
import './App.css'
import Nav from './Components/Nav'
import Banner from './Components/Banner'
import { Suspense, useState } from 'react'
import type { Itech } from './types'
import Techs from './Components/Technologies/Techs'

const fetchTech = async ():Promise<Itech[]> =>{
  const res = await fetch('./data.json');
  const data = await res.json();
  return data;
}
function App() {
  const [techPromise] = useState(()=> fetchTech())

  return (
    <div >
      <Nav />
      <Banner />
      <Suspense fallback={<div className="flex justify-center items-center min-h-[50vh]">
        <span className="loading loading-spinner loading-lg text-secondary"></span></div>}>
        <Techs techPromise={techPromise}/>
      </Suspense>       
      <ToastContainer />     
    </div>
  )
}

export default App

