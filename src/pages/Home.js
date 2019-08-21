import React from 'react'

import Illustration from './../components/illustrations/Home'
import Title from '../components/Title'
import Keywords from '../components/Keywords'
import ContactForm from './../components/forms/Contact'

function Home() {
  return (
    <div className="page-content">
        <Title />
        <Keywords />
        <Illustration />
        <ContactForm />
    </div>
  );
}

export default Home;