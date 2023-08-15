import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Header } from './Components/Header/header';
import { Product } from './Pages/Product';
import { Products } from './Pages/Products';
import { Contact } from './Pages/Contact';
import { Faq } from './Pages/Faq';
import { SignIn } from './Pages/SignIn';



function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index path="/" element={<Home />} />
      <Route path="/products" element={<Products />}>
        <Route path=":category" element={<Products />}>
        <Route path=":subcategory" element={<Products />} />
        </Route>
      </Route>
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/signin" element={<SignIn />} />
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
