import { BsFillCartFill } from 'react-icons/bs';
import './Cart.css'

export default function CartWidget({count}) {
  return (
    <a href="#" className="cart-widget">
      <BsFillCartFill className="icon"/>
      {count>0?
      <span className="badge">{count}</span>:
      <></>}
    </a>
  );
}