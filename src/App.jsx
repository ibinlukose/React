
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Info from './pages/Info'
import Saved from './pages/Saved'
import Download from './pages/Download'
import Pnf from './pages/Pnf'
import Header from './Components/Header'
import Footer from './Components/Footer'
 import { ToastContainer } from 'react-toastify';
import View from './pages/View'



function App() {

  //pages : homepage,resume,userinfo,viewresume,all saved resume


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/resume-details' element={<Info />} />
        <Route path='/all-resumes' element={<Saved />} />
        <Route path='/resume/:id' element={<View />} />
        <Route path='/downloads' element={<Download />} />
        <Route path='/*' element={<Pnf />} />

      </Routes>
      <Footer/> 
      <ToastContainer position="top-center" theme="colored" autoClose={5000} />

    </>
  )
}

export default App
