import React from 'react'
import logo from '../assets/images/logo-me.png'

function Logo() {
    return (
        <img 
            src={logo}
            alt="logo remifestou - orange planet"
            className="w-32 mb-8 -mt-8"
            data-aos="fade-up"
        />
    );
}
  
export default Logo;