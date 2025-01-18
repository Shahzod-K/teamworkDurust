import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import Main from './pages/main/main'
import Services from './pages/services/services'
import Services2 from './pages/services2/services2'
import CaseStudies from './pages/caseStudies/caseStudies'
import CaseStudies2 from './pages/caseStudies2/caseStudies2'
import AboutUs from './pages/aboutUs/aboutUs'
import AboutUs2 from './pages/aboutUs2/aboutUs2'
import Blog from './pages/blog/blog'
import Blog2 from './pages/blog2/blog2'
import Contacts from './pages/contacts/contacts'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {index: true, element: <Main />},
        {path: 'services', element: <Services />},
        {path: 'services2', element: <Services2 />},
        {path: 'caseStudies', element: <CaseStudies />},
        {path: 'caseStudies2', element: <CaseStudies2 />},
        {path: 'aboutUs', element: <AboutUs />},
        {path: 'aboutUs2', element: <AboutUs2 />},
        {path: 'blog', element: <Blog />},
        {path: 'blog2', element: <Blog2 />},
        {path: 'contacts', element: <Contacts />},
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
