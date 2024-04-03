import { useState } from 'react'
import styles  from './App.module.css';
import Container from './components/Container';

import Hero from './components/Hero';
import Slide from './components/Slide'; 

function App() {
  return (
    <div className={styles.app}>
      <Container>
        <Hero />
        <Slide />
      </Container>
    </div>
  )
}

export default App
