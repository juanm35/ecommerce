import React from 'react';
import logo from '../Logo.png';
import CartWidget from './Cart/CartWidget.js'

export default function NavBar() {

    return(
        <nav className="flex text-3xl justify-between px-16 py-2 text-white bg-jungle-grey items-center">
            <img src={logo} className="w-1/6" alt="log jungle" />
            <div className='flex gap-6 w-2/3 justify-center h-full'>
                <div className='hover:text-jungle-green'>Art</div>
                <div className='hover:text-jungle-green'>Gaming</div>
                <div className='hover:text-jungle-green'>Photography</div>
            </div>
            <CartWidget className="w-1/6"/>
            
        </nav>
    )
}