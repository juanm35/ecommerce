import React, {useContext} from 'react';
import cartContext from "../context/cartContext";
import logo from '../Logo.png';
import CartWidget from './Cart/CartWidget.js'
import {Link} from 'react-router-dom';

export default function NavBar() {
  const { cart, removeItemFromCart, getPriceInCart, clearCart, getCountInCart } = useContext(cartContext);

  return (
    <nav className="flex items-center justify-between bg-jungle-grey px-6 py-4 lg:px-16 lg:py-2">
      <div className="flex items-center flex-shrink-0 mr-6">
      <Link to="/">
        <img src={logo} className="w-40 cursor-pointer" alt="log jungle" />
      </Link>
    </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-jungle-green hover:border-jungle-green">
          <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3a3 3 0 0 1 3-3h14a3 3 0 0 1 0 6H3a3 3 0 0 1-3-3zm0 8a3 3 0 0 1 3-3h14a3 3 0 0 1 0 6H3a3 3 0 0 1-3-3zm0 8a3 3 0 0 1 3-3h14a3 3 0 0 1 0 6H3a3 3 0 0 1-3-3z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-2xl lg:text-3xl lg:flex-grow lg:text-left">          
        | <Link to={`/category/fantasy`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-jungle-green">
            Fantasy
          </Link>
          <Link to={`/category/art`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-jungle-green mr-8 ml-8">
            Art
          </Link>
          <Link to={`/category/gaming`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-jungle-green mr-8">
            Gaming
          </Link>
        </div>
        <Link to={`/mycart`} className="pl-4 lg:pl-8">
          <CartWidget count={getCountInCart(cart)} className="w-12 h-12 cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
}
