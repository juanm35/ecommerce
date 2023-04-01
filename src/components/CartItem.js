import React, { useContext } from 'react';
import cartContext from "../context/cartContext";
import PropTypes from 'prop-types';
import trash from '../trash-icon.svg'

export default function CartItem({ product, index }) {
  const { cart, removeItemFromCart, getPriceInCart, clearCart, getCountInCart } = useContext(cartContext);

  return (
    <tr className="bg-gray-100">
      <td className="border">
        <img src={`/images/${product.image}`} alt={product.name} className="w-16" />
      </td>
      <td className="border">{product.id}</td>
      <td className="border">{product.name}</td>
      <td className="border">${product.price.toFixed(2)}</td>
      <td className="border">{product.count}</td>
      <td className="border cursor-pointer flex justify-center" onClick={() => removeItemFromCart(product)}><img src={trash} className="h-4 border-none flex justify-center items-center m-auto"></img></td>
    </tr>
  );
}

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
};


