import React from 'react'
import './tailwind/index.css';
import './assets/stylesheets/main.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';

import Logo from './components/Logo.js'
import SocialNetwork from './components/SocialNetwork.js'
import Skills from './containers/Skills.js'

AOS.init({
  disable: "mobile"
});

function App() {
  return (
    <section className="w-full h-screen flex flex-col justify-between md:justify-center items-center">
      <Logo />
      <div className="md:mb-2">
        <Skills />
      </div>
      <div 
        className="flex justify-center items-center mb-4 md:mt-8"
        data-aos="fade-up"
        data-aos-delay="1600"
      >
        <SocialNetwork />
      </div>
    </section>
  );
}

export default App;
