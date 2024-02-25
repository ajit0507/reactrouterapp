import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import User from './components/user/User';
import Github, { githubInfoLoader } from './components/github/Github';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
    
//     ]
//   }
// ])


let router = createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
     <Route path="" element={<Home/>}></Route>
     <Route path="about" element={<About/>}></Route>
     <Route path="contact" element={<Contact/>}></Route>
     <Route path="user/:userid" element={<User/>}></Route>
     <Route path="github" 
      loader={githubInfoLoader}
     element={<Github/>}></Route>
  </Route>
)

)
root.render(
  
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
