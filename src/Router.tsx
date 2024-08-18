import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Home.page';
import AboutPage from './pages/AboutPage/AboutPage';
import AppShellComponent from './components/appShell/appShellComponent';
import Products from './pages/Products/Products';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path: '/',
    element: <AppShellComponent />,

    children:[
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
