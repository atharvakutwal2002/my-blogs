import Image from "next/image";
import classes from "./hero.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <section  className={classes.hero}>
      <div data-aos="fade-left" className={classes.image}>
        <Image
          src="/images/site/profile.png"
          alt="An image showing Atharva"
          width={300}
          height={300}
        />
      </div>
      <h1 data-aos="fade-right">Hi I'm Atharva</h1>
      <p data-aos="fade-down">
        
        Currently embarking on my engineering journey from D.Y. Patil College Of
        Engineering, Akurdi, Pune.
      </p>
      <p data-aos="fade-up">
        I blog about programming and web-development - especially about
        frameworks like React .
      </p>
    </section>
  );
}

export default Hero;
