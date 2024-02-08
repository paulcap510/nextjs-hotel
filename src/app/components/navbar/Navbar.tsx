import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.hotelName}>Fancy Hotel</div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            Home
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            Rooms
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            Policies
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            Amenities
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            My Booking
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
