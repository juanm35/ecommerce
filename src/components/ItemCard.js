import React from 'react';
import {Link} from 'react-router-dom';


export default function ItemCard({id, image, name, price, shortDescription}) {
return (
    <Link to={`/item/${id}`}>
        <div className="cursor-pointer relative max-w-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <img className="w-full" src={image} alt={name} />
        <div className="absolute bottom-0 w-full p-6">
            <div className="text-white font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-300 text-base">{shortDescription}</p>
            <div className="mt-4">
            <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">${price}</span>
            </div>
        </div>
        </div>
    </Link>
  )
}
