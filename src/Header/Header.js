import React from 'react';
import './Header.css';

export default function Header({pick,number}) {
    console.log("vercel test");
    return (
        <div className='header-container'>
           <p onClick={pick} >Queer<span className='logo'>Shop</span></p>
           <div className='cart'>
           <img src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-cart-essentials-icongeek26-outline-gradient-icongeek26.png"/> 
           <span>{number}</span>
           </div>
        </div>
    )
}
