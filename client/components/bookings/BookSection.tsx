import Image from 'next/image';
import React from 'react';

import Form from '../form/form';
import styles from './BookSection.module.scss';

const BookSection: React.FC = () => {
  return (
    <section className={`${styles.section}`}>
      <div className="row">
        <div className={`${styles.book}`}>
          <Image src={'/img/nat-10.jpg'} alt="booking background" fill className={`${styles.bookBackgroundImage}`} />
          <div className={`${styles.bookBackground}`} />
          <div className={`${styles.bookForm}`}>
            <Form action="#">
              <Form.Heading>Start booking now</Form.Heading>
              <Form.Group>
                <Form.Input id="name" placeholder="Full Name" type="text" required />
                <Form.Label htmlFor="name">Full Name</Form.Label>
              </Form.Group>

              <Form.Group>
                <Form.Input id="email" placeholder="Email address" type="email" required />
                <Form.Label htmlFor="email">Email address</Form.Label>
              </Form.Group>

              <Form.Group className="u-margin-bottom-medium">
                <Form.RadioGroup>
                  <Form.RadioInput
                    labelText="Small tour group"
                    inputProps={{ name: 'size', id: 'small' }}
                    labelProps={{ htmlFor: 'small' }}
                  />
                </Form.RadioGroup>
                <Form.RadioGroup>
                  <Form.RadioInput
                    labelText="Large tour group"
                    inputProps={{ name: 'size', id: 'large' }}
                    labelProps={{ htmlFor: 'large' }}
                  />
                </Form.RadioGroup>
              </Form.Group>

              <Form.Group>
                <button className="btn btn--primary">Next step →</button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
