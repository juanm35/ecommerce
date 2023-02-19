import React from 'react';

export default function ItemListContainer({greeting}) {
    return(
        <div className='pt-12 text-jungle-green text-4xl'>
            <p>{greeting}</p>
        </div>
    )
}