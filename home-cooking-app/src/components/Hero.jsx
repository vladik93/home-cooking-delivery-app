import classes from './Hero.module.css';

const Hero = () => {
  return (
  <section className={classes.hero}>
    <div className={classes.titleWrapper}>
      <h1>Unlock the Joy of Cooking: Fresh Ingredients, Inspired Recipes"</h1>
      <h2>Fresh Ingredients, Easy Recipes: Delight in Home Cooking</h2>
    </div>

    <div className={classes.inputWrapper}>
      <input type="text" />
      <button>Get Started</button>
    </div>

    <div className={classes.textWrapper}>
      <p>SUBSCRIBE NOW AND SAVE 30% ON YOUR FIRST ORDER</p>
    </div>

    <img src="images/hero.webp" className={classes.image} />
    

    
  </section>
  
  )
}

export default Hero;
