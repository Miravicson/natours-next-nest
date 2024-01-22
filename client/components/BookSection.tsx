import React from 'react';

import styles from './BookSection.module.css';

const BookSection: React.FC = () => {
  return (
    <section className={`${styles.BookSection}`}>
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <h2 className="heading-secondary u-margin-bottom-medium">Start booking now</h2>
              <div className="form__group">
                <input type="text" id="name" className="form__input" placeholder="Full Name" required />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>
              <div className="form__group">
                <input type="email" id="email" className="form__input" placeholder="Email address" required />
                <label htmlFor="email" className="form__label">
                  Email Address
                </label>
              </div>
              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input type="radio" id="small" className="form__radio-input" name="size" />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button"> </span>
                    Small tour group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input type="radio" id="large" className="form__radio-input" name="size" />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button"> </span>Large tour group
                  </label>
                </div>
              </div>
              <div className="form-group">
                <button className="btn btn--primary">Next step →</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
