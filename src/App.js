import React from 'react'
import './tailwind/index.css';
import './assets/stylesheets/main.scss'

// import AOS from 'aos';
// import 'aos/dist/aos.css';

import Header from './components/Header.js'
import Illustration from './components/Illustration.js'
// import SocialNetwork from './components/SocialNetwork.js'
// import Skills from './containers/Skills.js'

// AOS.init({
//   disable: "mobile"
// });

function App() {
  return (
    <section className="w-full max-w-6xl pt-16 mx-auto h-screen relative">
      <Header />
      <Illustration />
      {/* <Logo />
      <div className="md:mb-2">
        <Skills />
      </div>
      <div 
        className="flex justify-center items-center mb-4 md:mt-8"
        data-aos="fade-up"
        data-aos-delay="1600"
      >
        <SocialNetwork />
      </div> */}
    </section>
  );
}

export default App;
