import { ToastContainer } from 'react-toastify'
import './App.css'
import Nav from './Components/Nav'
import Banner from './Components/Banner'

function App() {
  return (
    <div >
      <Nav />
      <Banner />       
      <ToastContainer />     
    </div>
  )
}

export default App

