import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './StoriesSection.module.scss';

interface TestimonialItem {
  title: string;
  description: string;
  image: string;
  name: string;
}

const testimonials: TestimonialItem[] = [
  {
    title: "I had the best week ever with my family.",
    name: 'Mary Smith',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione necessitatibus sint commodi mollitia officiis asperiores corrupti, quia nisi temporibus laboriosam ipsum spernatur, quas odio tenetur  omnis molestias deserunt fugit! Lorem, ipsum dolor sit amet consectetur adipisicing elit`,
    image: "/img/nat-8.jpg"
  },
  {
    title: "WOW! My life is completely different now.",
    name: 'Jack Wilson',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione necessitatibus sint commodi
              mollitia officiis asperiores corrupti, quia nisi temporibus laboriosam ipsum aspernatur, quas odio tenetur
              omnis molestias deserunt fugit!`,
    image: "/img/nat-9.jpg"
  }
]

function Testimonials({testimonial}: {testimonial: TestimonialItem}) {
  const {name, title, description, image} = testimonial;
  return (
    <div className={`${styles.story}`}>
    <figure className={`${styles.storyShape}`}>
      <Image src={image} alt="Person on a tour" className={`${styles.storyImage}`} fill />
      <figcaption className={`${styles.storyCaption}`}>{name}</figcaption>
    </figure>
    <div className={`${styles.storyText}`}>
      <div className="u-margin-bottom-small">
        <h3 className="heading-tertiary">{title}</h3>
      </div>
      <p>
        {description}
      </p>
    </div>
  </div>
  )
}

const StoriesSection: React.FC = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.backgroundVideo}`}>
        <video autoPlay muted loop className={`${styles.backgroundVideoContent}`}>
          <source src="img/video.mp4" type="video/mp4" />
          <source src="img/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>

      {testimonials.map((testimonial) => (
        <div className="row" key={testimonial.name}>
          <Testimonials testimonial={testimonial} />
        </div>
      ))}

      <div className="u-center-text u-margin-top-huge">
        <Link href="#" className="btn-text">
          Read All Stories →
        </Link>
      </div>
    </section>
  );
};

export default StoriesSection;
