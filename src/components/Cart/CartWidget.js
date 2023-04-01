import { BsFillCartFill } from 'react-icons/bs';
import './Cart.css'

export default function CartWidget({count}) {
  return (
    <div className="cart-widget">
      <BsFillCartFill className="icon"/>
      {count>0?
      <span className="badge">{count}</span>:
      <></>}
    </div>
  );
}