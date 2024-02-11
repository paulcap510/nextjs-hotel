import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.hotelName}>Fancy Hotel</div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/rooms">Rooms</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/policies">Policies</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/eventsPage" className={styles.navLink}>
            Events
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link href="/login" className={styles.navLink}>
            My Booking
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
