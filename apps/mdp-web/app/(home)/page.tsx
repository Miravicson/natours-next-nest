import { Alert } from '@/components/alert';
import { PageHeader } from './page-header';
import { SearchBar } from './search-bar';
import styles from './home.module.scss';
import Link from 'next/link';
import WarningSVG from 'public/svg/warning.svg';
import { DreamVacationSpots } from './dream-vacation-spots';
import { GetInspiration } from './get-inspiration';
import { PopularHotels } from './popular-hotels';
import { DownloadApp } from './download-app';
import { ExploreWorld } from './explore-world';
import { Footer } from './footer';

export default async function Home() {
  return (
    <>
      <PageHeader />
      <SearchBar />
      <section className={`${styles.covidAlert} mt-8`}>
        <Alert
          icon={<WarningSVG />}
          content={
            <p>
              Check the latest COVID-19 restrictions before you travel.{' '}
              <Link href="/covid-19-restrictions" className="text-blue-500">
                Learn more
              </Link>
            </p>
          }
        />
      </section>
      <DreamVacationSpots />
      <GetInspiration />
      <PopularHotels />
      <DownloadApp />
      <ExploreWorld />
      <Footer />
    </>
  );
}
