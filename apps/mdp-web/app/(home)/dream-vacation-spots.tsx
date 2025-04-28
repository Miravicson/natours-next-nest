import Image from 'next/image';
import styles from './home.module.scss';

interface VacationSpot {
  country: string;
  vacationSpots: number;
  image: string;
}

const vacationSpots: VacationSpot[] = [
  {
    country: 'Australia',
    vacationSpots: 2246,
    image: '/images/australia-dream-spot.jpg',
  },
  {
    country: 'Japan',
    vacationSpots: 1278,
    image: '/images/japan-dream-spot.jpg',
  },
  {
    country: 'New Zealand',
    vacationSpots: 480,
    image: '/images/new-zealand-dream-spot.jpg',
  },
  {
    country: 'Greece',
    vacationSpots: 320,
    image: '/images/greece-dream-spot.jpg',
  },
];

function VacationSpotCard({ vacationSpot }: { vacationSpot: VacationSpot }) {
  return (
    <article className={`${styles.vacationSpotCard}`}>
      <div className={`${styles.vacationSpotCardImageCont}`}>
        <Image
          fill
          src={vacationSpot.image}
          alt="vacation spot image"
          className={`${styles.vacationSpotCardImage}`}
        />
      </div>

      <div className={`${styles.vacationSpotCardText}`}>
        <h2>{vacationSpot.country}</h2>

        <p>{vacationSpot.vacationSpots} vacation spots</p>
      </div>
    </article>
  );
}

export function DreamVacationSpots() {
  return (
    <section className={`${styles.dreamVacation}`}>
      <h1>Enjoy your dream vacation</h1>
      <p>
        Plan and book our perfect trip with expert advice, travel tips,
        destination information and inspiration from us
      </p>

      <main>
        {vacationSpots.map((vacationSpot) => (
          <VacationSpotCard
            vacationSpot={vacationSpot}
            key={vacationSpot.country}
          />
        ))}
      </main>
    </section>
  );
}
