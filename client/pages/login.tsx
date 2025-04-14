import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import AuthLayout from '@/components/auth-layout';
import Form from '@/components/form/form';
import { useAuth } from '@/lib/auth-provider-hooks';

import { schemas } from '../lib/api-client/_generated_schemas';
import { NextPageWithLayout } from './_app';
import styles from './login.module.scss';

type LoginSchema = z.infer<typeof schemas.LoginDto>;

const Login: NextPageWithLayout = () => {
  const { login } = useAuth();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(schemas.LoginDto),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: LoginSchema) {
    await login(values);
  }
  return (
    <main className={`${styles.login}`}>
      <Image fill alt="hero image" src={`/img/hero.jpg`} className={`${styles.backgroundImage}`} />

      <div className={`${styles.background}`}></div>
      <section className={`${classNames(styles.loginForm)} row`}>
        <div className={`${styles.loginFormBackground}`}></div>
        <Form onSubmit={form.handleSubmit(onSubmit)}>
          <Form.Heading>Login</Form.Heading>

          <Form.Group>
            <Form.Input id="email" placeholder="Email Address" type="email" required {...form.register('email')} />
            <Form.Label htmlFor="email">Email address</Form.Label>
          </Form.Group>

          <Form.Group>
            <Form.Input id="password" placeholder="Password" type="password" required {...form.register('password')} />
            <Form.Label htmlFor="email">Password</Form.Label>
          </Form.Group>

          <Form.Group className="flex items-center gap-x-6">
            <Form.Submit>Login</Form.Submit>
            <Link href={'/signup'} className="btn-text">
              Sign up &rarr;
            </Link>
          </Form.Group>
        </Form>
      </section>
    </main>
  );
};

export default Login;

Login.getLayout = function (page) {
  return <AuthLayout>{page}</AuthLayout>;
};
