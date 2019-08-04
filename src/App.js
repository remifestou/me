import React from 'react'
import './tailwind/index.css';
import './assets/stylesheets/main.scss'

import { BrowserRouter as Router, Route } from "react-router-dom"

import Header from './components/Header'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Copyright from './components/Copyright'

function App() {
  return (
    <section className="w-full xl:max-w-6xl lg:max-w-4xl md:max-w-3xl pt-16 mx-auto h-screen relative">
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Copyright />
      </Router>
    </section>
  );
}

export default App;
