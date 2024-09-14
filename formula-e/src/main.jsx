import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Times from './pages/Times.jsx'
import Home from './pages/home.jsx'
import Corridas from './pages/Corridas.jsx'
import Noticias from './pages/Noticias.jsx'
import Jogo from './pages/Jogo.jsx'
import Loja from './pages/Loja.jsx'
import Live from './pages/Aovivo.jsx'
import Contato from './pages/Contato.jsx'
import Login from './pages/Login.jsx'



const router = createBrowserRouter([
  
  { 
    path:'/',
    element: <App/>,
    children: [
      {index:true,element:<Home/>},
      {path:'times',element:<Times/>},
      {path:'Corridas',element:<Corridas/>},
      {path:'Noticias',element:<Noticias/>},
      {path:'Jogo',element:<Jogo/>},
      {path:'Loja',element:<Loja/>},
      {path:'Live',element:<Live/>},
      {path:'Contato',element:<Contato/>},
      {path:'Login',element:<Login/>}
    ]
  }

])

createRoot(document.getElementById('root')).render(


  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//)
