import React from 'react'
import logo from '../assets/images/logo-me.png'

function Logo() {
    return (
        <img 
            src={logo}
            alt="logo remifestou - orange planet"
            className="w-32 mt-4 md:mb-8 md:-mt-8"
            data-aos="fade-up"
        />
    );
}
  
export default Logo