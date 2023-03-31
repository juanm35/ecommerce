import React, { useEffect, useState } from 'react';
import monkeyImage from '../assets/Monkey.png'
import shipImage from '../assets/Ship.png'
import valleyImage from '../assets/Valley.png'
import {Link} from 'react-router-dom';
import { useContext } from "react";
import cartContext from "../context/cartContext";
import {getSingleItemFromDatabase} from '../services/firestore'

export default function ItemDetail({ itemId }) {
  const imagesSamples = [monkeyImage, shipImage, valleyImage, monkeyImage, shipImage, valleyImage, monkeyImage, shipImage, valleyImage, monkeyImage, shipImage, valleyImage,valleyImage]
  const [item, setItem] = useState("Item not found");
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem, isInCart } = useContext(cartContext);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getSingleItemFromDatabase(itemId)
      .then((respuesta) => {
        setItem(respuesta);
      })
      .catch((error) => setItem("Item not found"));
  }, [itemId]);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleAddToCart = (count) => {
    setAddedToCart(true);
    addItem(item, count);
  };

  const handleGoToCart = () => {
    console.log("Go to cart");
  };

  const handleKeepShopping = () => {
    console.log("Keep shopping");
  };

  return (
    <>
      {item === "Item not found" ? 
        <h1 className="text-5xl font-bold text-center mt-16 mb-8">Item not found</h1>
      :
        <div className="flex flex-col items-center justify-center h-fit m-8">
          
            <div className="max-w-md w-full rounded-lg overflow-hidden shadow-lg">
              <img className="w-full" src={imagesSamples[0]} alt={item.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <div className="font-bold text-xl mb-2">${item.price}</div>
                <p className="text-gray-700 text-base">{item.longDescription}</p>
                {!addedToCart ? (
                  <div>
                  <div className="mt-4 flex items-center">
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <input
                    className="form-input block w-full rounded-none border-none bg-gray-200 px-4 py-2 text-center"
                    type="text"
                    value={count}
                    readOnly
                  />
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </div>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded"
                  onClick={() => handleAddToCart(count)}
                >
                  Add to cart
                </button>
              </div>
          ) : (
            <div className="max-w-md p-4 w-full rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center">
            <p className="font-bold text-xl mb-4 text-jungle-greyblue">{count} items added to cart!!!</p>
              <div className="flex flex-row">
              <Link to={`/mycart`} 
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-4 rounded"
                  onClick={handleGoToCart}
                >
                  Go to cart
                
              </Link>
              <Link to="/"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  onClick={handleKeepShopping}
                >
                  Keep shopping
              </Link>
              </div>
            </div>
          )}
            </div>
          </div>
        </div>
      }
    </>
  );
}
