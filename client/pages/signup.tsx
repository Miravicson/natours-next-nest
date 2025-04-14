import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import Form from '@/components/form/form';

import styles from './login.module.scss';

function Signup() {
  return (
    <main className={`${styles.login}`}>
      <Image fill alt="hero image" src={`/img/hero.jpg`} className={`${styles.backgroundImage}`} />

      <div className={`${styles.background}`}></div>
      <section className={`${classNames(styles.loginForm)} row`}>
        <div className={`${styles.loginFormBackground}`}></div>
        <Form>
          <Form.Heading>Sign Up</Form.Heading>

          <Form.Group>
            <Form.Input id="email" placeholder="Email Address" type="email" required />
            <Form.Label htmlFor="email">Email address</Form.Label>
          </Form.Group>

          <Form.Group>
            <Form.Input id="password" placeholder="Password" type="password" required />
            <Form.Label htmlFor="email">Password</Form.Label>
          </Form.Group>

          <Form.Group className="flex items-center gap-x-6">
            <Form.Submit>Sign up</Form.Submit>
            <Link href={'/login'} className="btn-text">
              Login &rarr;
            </Link>
          </Form.Group>
        </Form>
      </section>
    </main>
  );
}

export default Signup;
