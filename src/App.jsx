
import { Route , Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import WatchHistory from './Pages/WatchHistory'
import PageNotFound from './Pages/PageNotFound'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
        {/*landing page path :http://localhost:5173/ */}
        <Route path='/' element={<LandingPage/>}/>
         {/*home page path :http://localhost:5173/home */}
         <Route path='/home' element={<Home/>}/>
          {/*watch history path :http://localhost:5173/watch history */}
          <Route path='/watch-history' element={<WatchHistory/>}/>
           {/*page not found path :http://localhost:5173/ */}
           <Route path='*' element={<PageNotFound/>}/>

     </Routes>
     <Footer/>
    </>
  )
}

export default App
