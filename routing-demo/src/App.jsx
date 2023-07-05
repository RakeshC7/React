import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import RootLayout from './pages/Root';
import BlogListing from './pages/Blog';
import AboutPage from './pages/About.jsx';
import ProductDetailPage from './pages/ProductDetail';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout />, children: [
        { index: true, element: <HomePage /> },
        { path: 'products', element: <ProductPage /> },
        { path: 'products/:productId', element: <ProductDetailPage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'blog', element: <BlogListing /> },
      ]
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>
}

export default App
