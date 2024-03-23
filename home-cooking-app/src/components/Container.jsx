import styles from './Container.module.css';
import React from 'react'


function Container({children}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Container
