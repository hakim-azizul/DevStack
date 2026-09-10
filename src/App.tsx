import { ToastContainer } from 'react-toastify'
import './App.css'
import Nav from './Components/Nav'
import Banner from './Components/Banner'
import { useState } from 'react'
import type { Itech } from './types'

const fetchTech = async ():Promise<Itech> =>{
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
      <ToastContainer />     
    </div>
  )
}

export default App

