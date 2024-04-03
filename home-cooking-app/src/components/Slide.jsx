import styles  from "./Slide.module.css";
import React from 'react';

import SlideItem from './SlideItem';

const Slide = () => {
  return (
    <div className={styles.slideWrapper}>
    <div className={styles.slide}>
      <SlideItem />
      <SlideItem />





    </div>
    <div className={styles.slide}>
      <SlideItem />
      <SlideItem />





    </div>
    </div>
  )
};

export default Slide;