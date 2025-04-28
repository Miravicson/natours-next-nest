import Image from 'next/image';
import styles from './home.module.scss';

interface Inspiration {
  id: string;
  image: string;
  heading: string;
  content: string;
}

const inspirations: Inspiration[] = [
  {
    id: '1',
    image: '/images/sydney-inspiration.jpg',
    heading: 'Sydney’s 10 most fashionable 5 star hotels',
    content:
      'Browse the fastest growing tourism sector in the heart of Australia tourism capital ....',
  },
  {
    id: '2',
    image: '/images/vegan-travellers.jpg',
    heading: 'Top cities for Vegan Travellers',
    content:
      'Top sites where you do not have to worry about being a vegan. Our tourist guide is here...',
  },
  {
    id: '3',
    image: '/images/top-destination.jpg',
    heading: 'World’s top destinations during and post covid timeline',
    content:
      'Pandemic is still intact and will be here for a longer time. Here’s where your next destination...',
  },
];

type InspirationCardProps = {
  inspiration: Inspiration;
};
function InspirationCard({ inspiration }: InspirationCardProps) {
  return (
    <article className={`${styles.inspirationCard}`}>
      <Image
        fill
        src={inspiration.image}
        alt="Inspiration image"
        className={`${styles.inspirationCardImage}`}
      />
      <div className={`${styles.inspirationCardBg}`}></div>
      <div className={`${styles.inspirationCardContent}`}>
        <h2>{inspiration.heading}</h2>
        <p>{inspiration.content}</p>
      </div>
    </article>
  );
}

export function GetInspiration() {
  return (
    <section className={`${styles.getInspiration}`}>
      <h1>Get inspiration for your next trip</h1>
      <main>
        {inspirations.map((inspiration) => (
          <InspirationCard inspiration={inspiration} key={inspiration.id} />
        ))}
      </main>
    </section>
  );
}
