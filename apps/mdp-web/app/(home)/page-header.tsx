import Image from 'next/image';
import styles from './home.module.scss';
export function PageHeader() {
  return (
    <section className={`${styles.pageHeader}`}>
      <Image
        src="/images/page-header.jpg"
        alt="page header picture"
        fill
        className={styles.pageHeaderImg}
        priority
      />
      <div className={`${styles.pageHeaderBg}`}></div>
      <div className={`${styles.pageHeaderContent}`}>
        <h1>Enjoy Your Dream Vacation</h1>
        <span>Plan and book our perfect trip with expert advice, travel tips, destination information and  inspiration from us</span>
      </div>
    </section>
  );
}
