import './App.css';
import Nav from './Components/Nav';
import Banner from './Components/Banner';
import { Suspense, useState } from 'react';
import type { Itech } from './types';
import Techs from './Components/Technologies/Techs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[50vh] space-y-6">
      <div className="flex items-center justify-center space-x-2 h-16">
        <div className="w-3 h-8 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '-0.4s' }}></div>
        <div className="w-3 h-12 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '-0.2s' }}></div>
        <div className="w-3 h-16 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-3 h-12 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-8 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
      <p className="text-slate-500 text-sm font-bold tracking-[0.3em] animate-pulse">
         ASSEMBLING STACK...
      </p>
    </div>
  );
};

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
      <Suspense fallback={<Loading />}>
        <Techs techPromise={techPromise}/>
      </Suspense>       
      <ToastContainer position="bottom-right" autoClose={2000} theme='colored'/>     
    </div>
  )
}

export default App

