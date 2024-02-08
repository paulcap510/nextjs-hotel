import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h2>Book Your Stay</h2>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="checkInDate">Check-in Date:</label>
            <input type="date" id="checkInDate" name="checkInDate" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="checkOutDate">Check-out Date:</label>
            <input type="date" id="checkOutDate" name="checkOutDate" />
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
