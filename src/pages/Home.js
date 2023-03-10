import React from 'react';
import ItemListContainer from '../components/ItemListContainer.js'

export default function HomePage() {
  return (
    <div className="App">
       <h1 className="text-5xl font-bold text-center mt-16 mb-8">Jungle NFTs</h1>
       <h4 className="text-xl font-medium text-center">Choose your masterpiece!</h4>
      <ItemListContainer/>
    </div>
  )
}