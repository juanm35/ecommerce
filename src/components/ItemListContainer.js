import React, {useEffect, useState} from 'react';
import ItemCard from './ItemCard'
import {getItemsFromDatabase, getItemsByCategoryFromDatabase} from '../services/firestore.js'

export default function ItemListContainer({category}) {

    const [catalog, setCatalog] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function leerDatos() {
      if (category === undefined) {
        let respuesta = await getItemsFromDatabase();
        setCatalog(respuesta);
        setIsLoading(false);
        console.log("agaaaaaa000", respuesta)
      } else {
        let respuesta = await getItemsByCategoryFromDatabase(category);
        setCatalog(respuesta);
        setIsLoading(false);
        console.log("agaaaaaa", respuesta)
      }
    }
  
    useEffect(() => {
      leerDatos();
    }, [category]);
    return (
      <>
      { isLoading? <div>Cargando...</div> :
        <div className="p-4 pt-8 text-jungle-green text-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 place-items-center">
          {catalog.map((item, i) => (
            <div key={`${item.id}${item.category}`}>
              <ItemCard
                id = {item.id}
                image={`/images/${item.image}`}
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