import React from 'react';

import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
  return (
     <section className={`${styles.AboutSection}`}>
       <div className="u-margin-bottom-big text-center">
         <h2 className="heading-secondary">Exciting tours for adventurous people</h2>
       </div>
       <div className="row">
         <div className="col-1-of-2">
           <h3 className="heading-tertiary u-margin-bottom-small">You&apos;re going to fall in love with nature</h3>
           <p className="paragraph">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae maxime reiciendis doloribus, ad
             minima itaque nesciunt doloremque at odit sit. Expedita modi porro quas atque molestias quia nam? Aperiam!
           </p>
           <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
           <p className="paragraph">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi distinctio odit illo, minima incidunt.
           </p>
           <a href="#" className="btn-text">
             Learn more →
           </a>
         </div>
         <div className="col-1-of-2">
           <div className="composition">
             <img
               srcSet="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
               alt=""
               sizes="(max-width: 56.25em) 17vw , (max-width: 37.5em) 25vw "
               className="composition__photo composition__photo--p1"
               src="img/nat-1-large.jpg"
             />
             <img
               srcSet="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
               alt=""
               sizes="(max-width: 56.25em) 17vw , (max-width: 37.5em) 25vw "
               className="composition__photo composition__photo--p2"
               src="img/nat-2-large.jpg"
             />
             <img
               srcSet="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
               alt=""
               sizes="(max-width: 56.25em) 17vw , (max-width: 37.5em) 25vw "
               className="composition__photo composition__photo--p3"
               src="img/nat-3-large.jpg"
             />
           </div>
         </div>
       </div>
     </section>
   );
};

export default AboutSection;
