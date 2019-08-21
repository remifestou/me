import React from 'react'

import Illustration from './../components/illustrations/Home'
import Title from '../components/Title'
import Keywords from '../components/Keywords'

function Home() {
  return (
    <div className="page-content">
        <Title />
        <Keywords />
        <Illustration />
    </div>
  );
}

export default Home;