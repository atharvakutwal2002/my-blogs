import Link from "next/link";
import Logo from './logo'
import classes from './main-navigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <nav>
        <ul>
          <li>
            <Link className='link' href="/posts">All Posts</Link>
          </li>
          <li>
            <Link className='link' href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
