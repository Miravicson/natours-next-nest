import Image from 'next/image';
import styles from './home.module.scss';
interface Hotel {
  name: string;
  id: string;
  reviews: number;
  image: string;
}

const hotels: Hotel[] = [
  {
    id: '1',
    name: 'Lakeside Motel Warefront',
    reviews: 2246,
    image: '/images/lakeside-motel.jpg',
  },
  {
    id: '2',
    name: 'Recce Graham resort',
    reviews: 1278,
    image: '/images/recce-hotel.jpg',
  },
  {
    id: '3',
    name: 'Fireside Dinners',
    reviews: 480,
    image: '/images/fireside-hotels.jpg',
  },
  {
    id: '4',
    name: 'Oculous Inn Stay',
    reviews: 480,
    image: '/images/oculous-inn.jpg',
  },
];

function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <article className={`${styles.hotelCard}`}>
      <div className={`${styles.vacationSpotCardImageCont}`}>
        <Image
          fill
          src={hotel.image}
          alt="hotel image"
          className={`${styles.hotelCardImage}`}
        />
      </div>

      <div className={`${styles.hotelCardText}`}>
        <h2>{hotel.name}</h2>

        <p>{hotel.reviews} reviews</p>
      </div>
    </article>
  );
}

export function PopularHotels() {
  return (
    <section className={`${styles.popularHotels}`}>
      <h1>Popular hotels</h1>

      <main>
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </main>
    </section>
  );
}
