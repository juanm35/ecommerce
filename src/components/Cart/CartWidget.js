import { BsFillCartFill } from 'react-icons/bs';
import './Cart.css'

export default function CartWidget() {
  return (
    <a href="#" className="cart-widget">
      <BsFillCartFill className="icon"/>
      <span className="badge">3</span>
    </a>
  );
}