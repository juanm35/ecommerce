import React from 'react';
import ItemListContainer from '../components/ItemListContainer.js'
import {exportData} from '../services/firestore'

export default function HomePage() {
  return (
    <div className="App">
       <h1 className="text-5xl font-bold text-center mt-16 mb-8">Jungle NFTs</h1>
       <h4 className="text-xl font-medium text-center">Choose your masterpiece!</h4>
       <button className="hidden bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded" onClick={() => exportData()}>Export data</button>
      <ItemListContainer/>
    </div>
  )
}