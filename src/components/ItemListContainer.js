import React from 'react';
import Catalog from '../db.json'
import monkeyImage from '../assets/Monkey.png'
import shipImage from '../assets/Ship.png'
import valleyImage from '../assets/Valley.png'
import ItemCard from './ItemCard'

export default function ItemListContainer({category}) {
    const imagesSamples = [monkeyImage, shipImage, valleyImage, monkeyImage, shipImage, valleyImage, monkeyImage, shipImage, valleyImage, monkeyImage, shipImage, valleyImage,valleyImage]

    const catalog = category? Catalog.items.filter((item) => item.category === category) : Catalog.items
    return (
        <div className="pt-12 text-jungle-green text-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 place-items-center">
          {catalog.map((item, i) => (
            <div key={`${item.id}${item.category}`}>
              <ItemCard
                id = {item.id}
                image={imagesSamples[item.id-1]}
                name={item.name}
                price={item.price}
                shortDescription={item.shortDescription}                                
              />
            </div>
          ))}
        </div>
      );
    }