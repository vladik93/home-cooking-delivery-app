import classes from './Hero.module.css';
import Button from './Button';

const Hero = () => {
  return (
  <section className={classes.hero}>
    <div className={classes.titleWrapper}>
      <h1 className={classes.title}>Unlock the Joy of Cooking</h1>
      <h1 className={classes.subtitle}>Fresh Ingredients, Inspired Recipes"</h1>
    </div>

    <div className={classes['input-wrapper']}>
      <input type="text" className={classes.input} placeholder="Enter Your Zip Code..." />
      <Button />
      
    </div>

    <div className={classes['text-wrapper']}>
      <p>SUBSCRIBE NOW AND SAVE 30% ON YOUR FIRST ORDER</p>
    </div>
    {/* <img src="images/hero_3.png" className={classes.image} /> */}
  </section>
  
  )
}

export default Hero;
