import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Times from './pages/Times.jsx'
import Home from './pages/home.jsx'



const router = createBrowserRouter([
  
  { 
    path:'/',
    element: <App/>,
    children: [
      {index:true,element:<Home/>},
      {path:'times',element:<Times/>}
      

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
