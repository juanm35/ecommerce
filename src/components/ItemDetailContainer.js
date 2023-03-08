import React, { useEffect, useState } from 'react';
import monkeyImage from '../assets/Monkey.png'
import shipImage from '../assets/Ship.png'
import valleyImage from '../assets/Valley.png'
import Catalog from '../db.json'

export default function ItemDetail({ itemId }) {
  const imagesSamples = [monkeyImage, shipImage, valleyImage, monkeyImage, shipImage, valleyImage, monkeyImage, shipImage, valleyImage, monkeyImage, shipImage, valleyImage,valleyImage]
  const [item, setItem] = useState("Item not found");
  useEffect(()=>{
    console.log("itemID recibido: ", itemId)
    setItem(Catalog.items[itemId-1] ?? "Item not found")
  }, [itemId])
  return (
    <>
    {item === "Item not found" ? 
    <h1 className="text-5xl font-bold text-center mt-16 mb-8">Item not found</h1>
    :
        <div className="flex flex-col items-center justify-center h-screen">
        <div className="max-w-md w-full rounded-lg overflow-hidden shadow-lg">
            <img className="w-full" src={imagesSamples[item.id-1]} alt={item.name} />
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.name}</div>
            <div className="font-bold text-xl mb-2">${item.price}</div>
            <p className="text-gray-700 text-base">{item.longDescription}</p>
            </div>
        </div>
        </div>

    }
    </>
  );
}