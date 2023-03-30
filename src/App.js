import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import HomePage from './pages/Home.js'
import Category from './pages/Category.js'
import ItemDetail from './pages/ItemDetail.js'
import MyCart from './pages/MyCart.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from "./context/cartContext";

function App() {

  return (
  <CartContextProvider>
    <BrowserRouter>
    <NavBar/> 
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category/:categoryId' element={<Category />} />
        <Route path='/item/:itemId' element={<ItemDetail />} />
        <Route path='/mycart' element={<MyCart />} />
    </Routes>
    </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;
