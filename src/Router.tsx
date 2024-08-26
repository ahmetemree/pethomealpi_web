import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Home.page';
import AboutPage from './pages/AboutPage/AboutPage';
import AppShellComponent from './components/appShell/appShellComponent';
import Products from './pages/Products/Products';
import Contact from './pages/Contact';
import LoginPage from './pages/loginPage/LoginPage';
import ShopNavbar from './components/navbar/ShopNavbar';
const router = createBrowserRouter([
{

  element:<ShopNavbar/>,
  children:[
    
    {
      path:'/',
      element:<HomePage/>
    },
    {
      path:'/login',
      element:<LoginPage/>
    },
    {
      path:'products',
      element: <Products />,
    },

    {
      path:'contact',
      element:<Contact/>
    },

    {
      path: 'about',
      element: <AboutPage />,
    },
  ]
},
  

  
  
]);

export function Router() {
  return <RouterProvider router={router} />;
}
