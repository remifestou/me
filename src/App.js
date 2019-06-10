import React from 'react'
import './tailwind/index.css';
import './assets/stylesheets/main.scss'

import Logo from './components/Logo.js'
import SocialNetwork from './components/SocialNetwork.js'
import Skills from './containers/Skills.js'

function App() {
  return (
    <section>
      <Logo />
      <Skills />
      <SocialNetwork />
    </section>
  );
}

export default App;
