import { createContext, useState } from "react";

//1 crear el context
const cartContext = createContext({ cart: [] });
const Provider = cartContext.Provider;

// 2 crear el provider
export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(item, count) {
    const newCart = JSON.parse(JSON.stringify(cart));

    if (isInCart(item.id)) {
      // encontrar el item y actualizar la cantidad de unidades
      // lenny: 2 ----> lenny: 7
      let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
      newCart[index].count = newCart[index].count + count;
    } else {
      newCart.push({ ...item, count });
    }
    setCart(newCart);
  }

  function clearCart() {
    /* vaciar carrito */
    setCart([])
  }

  function removeItemFromCart(item) {
    /* eliminar/filtrar items con id recibido */
    /* ESTO ESTÁ MALLL  */
    let newCart = JSON.parse(JSON.stringify(cart));
    if (isInCart(item.id)) {
        // encontrar el item y eliminar
        let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
        newCart = newCart.filter( (item, i) => i !== index )
        console.log("es Agaa nc", newCart, index)
        setCart(newCart);
    }
  }

  function getCountInCart(items) {
    /* reduce */
    let total = items.reduce((acc, item) => acc + item.count, 0);
    return total;
  }

  function getPriceInCart(items) {
    let amount = items.reduce(
        (accumulator, item) => accumulator + item.price * item.count,
        0
      );
    return amount;
  }

  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }

  return (
    <Provider
      value={{
        cart,
        addItem,
        test: "ok",
        isInCart,
        removeItemFromCart,
        getPriceInCart,
        clearCart,
        getCountInCart
      }}
    >
      {children}
    </Provider>
  );
}

export default cartContext;
// ComponenteA -> useContext(cartContext) ----> value