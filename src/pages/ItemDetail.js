import React, { useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from '../components/ItemDetailContainer.js'
export default function DetailPage() {
  const {itemId} = useParams();
  useEffect(() => {
    console.log("receive item: ", itemId );
    return () => {
      console.log("Will change item to: ", itemId );
    }
  }, [itemId])
  return (
    <div className="App">
      <ItemDetail itemId={itemId}/>
    </div>
  )
}