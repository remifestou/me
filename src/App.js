import React from 'react'
import './tailwind/index.css';
import './assets/stylesheets/main.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';

import Logo from './components/Logo.js'
import SocialNetwork from './components/SocialNetwork.js'
import Skills from './containers/Skills.js'

AOS.init();

function App() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <Logo />
      <div className="mb-2">
        <Skills />
      </div>
      <div 
        className="flex justify-center items-center"
        data-aos="fade-up"
        data-aos-delay="1600"
      >
        <SocialNetwork />
      </div>
    </section>
  );
}

export default App;
