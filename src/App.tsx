import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Header } from './Components/Header/header';



function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index path="/" element={<Home />} />
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export const Root = () =>{
  return(
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default App;
