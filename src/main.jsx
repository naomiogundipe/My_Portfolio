import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Portfolio from './Components/MainPage/Portfolio.jsx'

const router = createBrowserRouter([
  {path:'/',element:<App/>,errorElement:"page not found"},
  {path:'/portfolio', element:<Portfolio/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
