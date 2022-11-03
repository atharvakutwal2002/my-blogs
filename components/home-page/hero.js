import Image from 'next/image'
import classes from './hero.module.css'
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/profile.png' alt='An image showing Atharva' width={300} height={300}/>
      </div>
      <h1>Hi I'm Atharva</h1>
      <p>
        I blog about programming and web-development - especially about frameworks like React 
      </p>
    </section>
  );
}

export default Hero;
