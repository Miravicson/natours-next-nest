import Link from 'next/link';
import styles from './home.module.scss';
import Logo from 'public/svg/logo.svg';
import { Button } from '@/components/buttons/buttons';

export function LogoComponent() {
  return (
    <nav className={`${styles.headerLogoNav}`}>
      <Logo />
      <Link href={`/`}>my Dream Place</Link>
    </nav>
  );
}

export function HomeHeader() {
  return (
    <header className={`${styles.header}`}>
      <div>
        <nav className={`${styles.headerLogoNav}`}>
          <Logo />
          <Link href={`/`}>my Dream Place</Link>
        </nav>

        <nav>
          <ul>
            <li>
              <Link href="/" className={`${styles.headerNavLinks}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/discover" className={`${styles.headerNavLinks}`}>
                Discover
              </Link>
            </li>
            <li>
              <Link href="/activities" className={`${styles.headerNavLinks}`}>
                Activities
              </Link>
            </li>
            <li>
              <Link href="/about" className={`${styles.headerNavLinks}`}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`${styles.headerNavLinks}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.headerActionNav}>
          <Button kind="link" href={`/register`} variant="outline">
            Register
          </Button>
          <Button kind="link" href={`/register`}>
            Sign in
          </Button>
        </nav>
      </div>
    </header>
  );
}
