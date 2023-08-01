// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import ProductsDetailPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';

// 2nd approch to route definitions 
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<ProductsPage />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductPage /> },
      { path: 'products/:productId', element: <ProductsDetailPage /> },
    ]
  },
]);


// 2nd approch to route definitions
// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
