import { Button } from '@/components/buttons/buttons';
import styles from './home.module.scss';
import LocationSVG from 'public/svg/location.svg';
import CalSVG from 'public/svg/calendar.svg';
import GuestSVG from 'public/svg/guest.svg';

export function SearchBar() {
  return (
    <div className={`${styles.searchBar}`}>
      <form>
        <div>
          <LocationSVG />
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Where are you going?"
          />
        </div>

        <div>
          <CalSVG />
          <input
            type="date"
            name="checkInDate"
            id="checkInDate"
            placeholder="Check in date"
          />
        </div>

        <div>
          <CalSVG />

          <input
            type="date"
            name="checkOutDate"
            id="checkOutDate"
            placeholder="Check out date"
          />
        </div>

        <div>
          <GuestSVG />
          <input
            type="number"
            name="guestNum"
            id="guestNum"
            placeholder="Guests"
            min={1}
          />
        </div>

        <div>
          <Button variant="primary" kind="button" type="submit">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}
