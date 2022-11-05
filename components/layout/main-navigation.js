import Link from "next/link";
import Logo from './logo'
import classes from './main-navigation.module.css'
import { FaPollH } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MainNavigation() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <header className={classes.header}>
      <Link href="/" >
        <a>
          <Logo />
        </a>
      </Link>

      <nav>
        <ul>
          <li data-aos="fade-left">
            <Link className='link' href="/posts">  Posts</Link>
          </li>
          <li data-aos="fade-left">
            <Link className='link' href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
