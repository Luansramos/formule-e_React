import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Times from './pages/Times/Times.jsx'
import Home from './pages/Home/Home.jsx'
import Corridas from './pages/Corridas/Corridas.jsx'
import Noticias from './pages/Noticias/Noticias.jsx'
import Jogo from './pages/Jogo/Jogo.jsx'
import Loja from './pages/Loja/Loja.jsx'
import Live from './pages/Aovivo/Aovivo.jsx'
import Contato from './pages/Contato/Contato.jsx'
import Login from './pages/Login/Login.jsx'
import SaibaMais from './pages/Home/SaibaMais.jsx'



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
      {path:'Login',element:<Login/>},
      {path:'SaibaMais', element:<SaibaMais/>}
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
