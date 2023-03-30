import React, { useState, useContext } from 'react';
import cartContext from "../context/cartContext";
import CartItem from './CartItem';

export default function CardDetailContainer() {
  const { cart, removeItemFromCart, getPriceInCart, clearCart, getCountInCart } = useContext(cartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    // Call an API to complete the purchase with the personal details
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-4xl mb-4 font-bold">My Cart</h2>
      <table className="table-fixed w-full max-w-6xl bg-white rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="w-1/12"></th>
            <th className="w-2/12">id</th>
            <th className="w-4/12">name</th>
            <th className="w-2/12">price</th>
            <th className="w-2/12">qty</th>
            <th className="w-1/12"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => (
            <CartItem key={product.id} product={product} index={index} />
          ))}
        </tbody>
      </table>

      <div className="flex justify-center w-full max-w-6xl mt-4">
        <div className="bg-white rounded-md p-4 shadow-lg">
          <span className="text-gray-500">Total amount:</span>
          <span className="font-bold ml-2">${getPriceInCart(cart).toFixed(2)}</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3 className="text-3xl font-bold m-8">Personal details</h3>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-2 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-400 p-2 rounded-lg"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-400 p-2 rounded-lg"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded">
          Buy products
        </button>
      </form>
    </div>
  )}

