import classNames from 'classnames';
import Image from 'next/image';

import styles from './ToursSection.module.scss';

interface TourCardItem {
  title: string;
  features: string[];
  price: number;
  image: string;
  cardNumber: number;
}


const tourCards: TourCardItem[] = [
  {
    title: 'The Sea Explorer',
    features: ['3 day tours', 'Up to 30 people', '2 tour guides', 'Sleep in cozy hotels', 'Difficulty: easy'],
    price: 297,
    image: '/img/nat-5.jpg',

    cardNumber: 0,
  },
  {
    title: 'The Forest Hiker',
    features: ['7 day tours', 'Up to 40 people', '6 tour guides', 'Sleep in provided tents', 'Difficulty: medium'],
    price: 497,
    image: '/img/nat-6.jpg',

    cardNumber: 1,
  },
  {
    title: 'The Snow Adventurer',
    features: ['5 day tours', 'Up to 15 people', '3 tour guides', 'Sleep in provided tents', 'Difficulty: hard'],
    price: 897,
    image: '/img/nat-7.jpg',

    cardNumber: 2
  },
]

function TourCard({ title, features, price, image, cardNumber }: TourCardItem) {
  const headingSpanStyles = [styles.cardHeadingSpan1, styles.cardHeadingSpan2, styles.cardHeadingSpan3]
  const cardBackStyles = [styles.cardBack1, styles.cardBack2, styles.cardBack3];
  const cardPictureStyles = [styles.cardPicture1, styles.cardPicture2, styles.cardPicture3]
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.cardSide} ${styles.cardFront}`}>
        <div className={`${classNames(styles.cardPicture, cardPictureStyles[cardNumber])}`}>
        <Image alt="tour card image" fill  src={image} className={styles.image} />
        </div>
        <h4 className={`${styles.cardHeading}`}>
          <span className={`${classNames(styles.cardHeadingSpan, headingSpanStyles[cardNumber])}`}>{title}</span>
        </h4>
        <div className={`${styles.cardDetails}`}>
          <ul>
            {features.map((feature, index) => (
              <li key={`${feature}-${index}`}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`${classNames(styles.cardSide, styles.cardBack, cardBackStyles[cardNumber])}`}>
        <div className={`${styles.cardCta}`}>
          <div className={`${styles.cardPriceBox}`}>
            <p className={`${styles.cardPriceOnly}`}>Only</p>
            <p className={`${styles.cardPriceValue}`}>${price}</p>
          </div>
          <a href="#popup" className="btn btn--white">
            Book now!
          </a>
        </div>
      </div>
    </div>
  );
}

function ToursSection() {
  return (
    <section className={`${styles.section}`} id="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most Popular Tours</h2>
      </div>
      <div className="row">
        {tourCards.map((tourCard, index) => (
          <div className="col-1-of-3" key={index}>
            <TourCard
              title={tourCard.title}
              features={tourCard.features}
              price={tourCard.price}
              image={tourCard.image}
              cardNumber={tourCard.cardNumber}
            />
          </div>
        ))}
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="#section-tours" className="btn btn--primary">
          Discover all tours
        </a>
      </div>
    </section>
  );
}

export default ToursSection;
