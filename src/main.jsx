import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Main from './layouts/Main.jsx';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import Dashboard from './layouts/Dashboard.jsx';
import DashboardHome from './pages/dashboard/DashboardHome.jsx';
import AllBlogs from './pages/dashboard/AllBlogs.jsx';
import AddBlog from './pages/dashboard/AddBlog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blog/:id",
        element: <Blog />
      }
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "home",
        element: <DashboardHome />
      },
      {
        path: "blogs",
        element: <AllBlogs />
      },
      {
        path: "add-blogs",
        element: <AddBlog />
      }

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
