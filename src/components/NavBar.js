import React from 'react';
import logo from '../Logo.png';
import CartWidget from './Cart/CartWidget.js'

export default function NavBar() {

    return(
        <nav className="flex text-3xl justify-between px-16 py-2 text-white bg-jungle-grey h-20 items-center">
            <img src={logo} className="w-1/6 max-h-full cursor-pointer" alt="log jungle" />
            <div className='flex gap-x-6 w-2/3 h-full cursor-pointer'>
                <div className='hover:text-jungle-green h-full p-2 flex items-center'>Art</div>
                <div className='hover:text-jungle-green h-full p-2 flex items-center'>Gaming</div>
                <div className='hover:text-jungle-green h-full p-2 flex items-center'>Photography</div>
            </div>
            <CartWidget className="w-1/6 cursor-pointer " />
            
        </nav>
    )
}