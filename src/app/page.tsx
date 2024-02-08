import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h2 className={styles.formTitle}>Book Your Stay</h2>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="checkInDate">Check-in Date:</label>
            <input
              type="date"
              id="checkInDate"
              name="checkInDate"
              className={styles.dateInput}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="checkOutDate">Check-out Date:</label>
            <input
              type="date"
              id="checkOutDate"
              name="checkOutDate"
              className={styles.dateInput}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="numberOfGuests">Number of Guests:</label>
            <select
              id="numberOfGuests"
              name="numberOfGuests"
              className={styles.guestSelect}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
