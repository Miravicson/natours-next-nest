import Link from 'next/link';
import styles from './home.module.scss';

export function ExploreWorld() {
  return (
    <section className={`${styles.exploreWorld}`}>
      <h1>Explore the world with My Dream place</h1>
      <Link href={'/explore-world'}>
        <p>Discover new places and experiences</p>
      </Link>
    </section>
  );
}
