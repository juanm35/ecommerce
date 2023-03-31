import React, {useEffect, useState} from 'react';
import monkeyImage from '../assets/Monkey.png'
import shipImage from '../assets/Ship.png'
import valleyImage from '../assets/Valley.png'
import ItemCard from './ItemCard'
import {getItemsFromDatabase, getItemsByCategoryFromDatabase} from '../services/firestore.js'

export default function ItemListContainer({category}) {
    const imagesSamples = [monkeyImage, shipImage, valleyImage, monkeyImage, shipImage, valleyImage, monkeyImage, shipImage, valleyImage, monkeyImage, shipImage, valleyImage,valleyImage]

    const [catalog, setCatalog] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function leerDatos() {
      if (category === undefined) {
        let respuesta = await getItemsFromDatabase();
        setCatalog(respuesta);
        setIsLoading(false);
      } else {
        let respuesta = await getItemsByCategoryFromDatabase(category);
        setCatalog(respuesta);
        setIsLoading(false);
      }
    }
  
    useEffect(() => {
      leerDatos();
    }, [category]);
    return (
      <>
      { isLoading? <div>Cargando...</div> :
        <div className="pt-12 text-jungle-green text-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 place-items-center">
          {catalog.map((item, i) => (
            <div key={`${item.id}${item.category}`}>
              <ItemCard
                id = {item.id}
                image={imagesSamples[i]}
                name={item.name}
                price={item.price}
                shortDescription={item.shortDescription}                                
              />
            </div>
          ))}
        </div>}
      </>
      );
    }