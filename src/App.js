import React from 'react'
import './tailwind/index.css';
import './assets/stylesheets/main.scss'

import { BrowserRouter as Router, Route } from "react-router-dom"

import Header from './components/Header'
import Index from './pages/Index'
import Contact from './pages/Contact'

function App() {
  return (
    <section className="w-full max-w-6xl pt-16 mx-auto h-screen relative">
      <Router>
        <Header />
        <Route exact path="/" component={Index} />
        <Route path="/contact" component={Contact} />
      </Router>
    </section>
  );
}

export default App;
