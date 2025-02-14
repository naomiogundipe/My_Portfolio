import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Portfolio from './Components/MainPage/Portfolio.jsx'
import SkillsPage from './Pages/SkillsPage.jsx'
import Certifications from './Pages/Certifications.jsx'
import Testimonials from './Pages/Testimonials.jsx'
import Blogs from './Pages/Blogs.jsx'
import ProjectsPage from './Pages/ProjectsPage.jsx'
import Error from './Error.jsx'


const router = createBrowserRouter([
  {path:'/',element:<App/>,errorElement:<Error/>},
  {path:'/portfolio', element:<Portfolio/>},
  {path:'/skills', element:<SkillsPage/>},
  {path:'/certifications', element:<Certifications/>},
  {path:'/testimonials', element:<Testimonials/>},
  {path:'/blogs', element:<Blogs/>},
  {path:'/projectspage', element:<ProjectsPage/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
