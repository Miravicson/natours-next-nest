import Image from 'next/image';
import styles from './home.module.scss';
import { Button } from '@/components/buttons/buttons';
export function DownloadApp() {
  return (
    <section className={`${styles.downloadApp}`}>
      <Image
        fill
        src={`/images/download-app-background.jpg`}
        alt="Download app background"
        className={`${styles.downloadAppImage}`}
      />
      <span className={`${styles.downloadAppBg}`}></span>
      <div>
        <h2>
          Download the mobile application for bonus coupons and travel codes
        </h2>
        <Button href={'/download-app'} kind="link" className="mt-[30px]">
          Download mobile app
        </Button>
      </div>

      <div className={`${styles.downloadAppAltImageCont}`}>
        <Image
          fill
          src={`/images/hand-holding-phone.png`}
          alt="hand holding phone"
          className={`${styles.downloadAppAltImage}`}
        />
      </div>
    </section>
  );
}
