import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx'; // Import Register

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<div>404</div>
  },
  {
    path:'/login',
    element:<Login/>,
    errorElement:<div>404</div>
  },
  {
    path:'/register', // Add a new route for Register
    element:<Register/>,
    errorElement:<div>404</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);