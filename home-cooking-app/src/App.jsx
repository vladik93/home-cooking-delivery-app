import { useState } from 'react'
import Hero from './components/Hero';
import styles  from './App.module.css';

import Container from './components/Container';

function App() {
  return (
    <div className={styles.app}>
      <Container>
        <Hero />
      </Container>
    </div>
  )
}

export default App
