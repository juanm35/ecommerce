import React, { useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemListContainer from '../components/ItemListContainer.js'

export default function CategoryPage() {
  const {categoryId} = useParams();
  useEffect(() => {
    console.log("receive category: ", categoryId );
    return () => {
      console.log("Will change category to: ", categoryId );
    }
  }, [categoryId])
  return (
    <div className="App">
      <h1 className="text-5xl font-bold text-center mt-16 mb-8">{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Category</h1>
      <ItemListContainer category={categoryId}/>
    </div>
  )
}