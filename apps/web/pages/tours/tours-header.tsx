import Image from 'next/image';
import Link from 'next/link';
import styles from './tours.module.scss';
import classNames from 'classnames';

export function ToursHeader() {
  const user = true;
  return (
    <header className={`${classNames(styles.header)}`}>
      <nav className={classNames(styles.nav, styles.navTours)}>
        <Link href={'/tours'} className={`${styles.navEl}`}>
          All tours
        </Link>

        <div className={styles.headerLogo}>
          <Image src="/img/logo-white.png" alt="logo" fill />
        </div>
      </nav>

      <nav className={`${classNames(styles.nav, styles.navUser)}`}>
        {user ? (
          <>
            <button
              className={`${classNames(styles.navEl, styles.navElLogout)}`}
            >
              Log out
            </button>
            <Link href="/me" className={`${styles.navEl}`}>
              <div className={`${styles.navUserImage}`}>
                <Image
                  src="/img/users/user-2.jpg"
                  alt="user avatar"
                  width={128}
                  height={128}
                />
              </div>
              <span>User</span>
            </Link>
          </>
        ) : (
          <>
            <Link href="/login" className={styles.navEl}>
              Log in
            </Link>
            <Link
              href="/signup"
              className={`${classNames(styles.navEl, styles.navElCta)}`}
            >
              Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
