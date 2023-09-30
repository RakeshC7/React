import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/Home';
import CartPage from './pages/Cart';
import './App.css';

import store from './store/store';

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      { path: '', element: <HomePage /> },
      { path: 'cart', element: <CartPage /> },
    ]
  },
]);


function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
