import React from 'react'
import  ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from 'react-router-dom'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
         <App />
    </BrowserRouter>
   
  </React.StrictMode>,
)
