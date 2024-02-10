import { IoIosStar, IoMdPin, IoIosPerson } from 'react-icons/io';
import { FiTwitter, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi';
import styles from './footer.module.css';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <p className={styles.ratingTitle}>Rating</p>
        <div className={styles.ratingStars}>
          <IoIosStar className={styles.starIcon} />
          <IoIosStar className={styles.starIcon} />
          <IoIosStar className={styles.starIcon} />
          <IoIosStar className={styles.starIcon} />
          <IoIosStar className={styles.starIcon} />
        </div>
        <p className={styles.address}>
          <IoMdPin className={styles.icon} /> 123 Fake Street, City, Country
        </p>
        <p className={styles.reviews}>
          <IoIosPerson className={styles.icon} /> Based on 20,000 reviews
        </p>
      </div>

      <div className={styles.column}>
        <p className={styles.ratingTitle}>About Our Property</p>
        <ul className={styles.linksContainer}>
          <li className={styles.footerLink}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.footerLink}>
            <Link href="/rooms">Rooms</Link>
          </li>
          <li className={styles.footerLink}>
            <Link href="/policies">Policies</Link>
          </li>
          <li className={styles.footerLink}>
            <Link href="/eventsPage">Events</Link>
          </li>
          <li className={styles.footerLink}>
            <Link href="/">My Bookings</Link>
          </li>
        </ul>
      </div>

      {/* <div className={styles.column}>
        <p className={styles.ratingTitle}>About Our Property</p>
        <div className={styles.linksContainer}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>

          <a href="#" className={styles.footerLink}>
            Home
          </a>
          <a href="#" className={styles.footerLink}>
            Rooms
          </a>
          <a href="#" className={styles.footerLink}>
            Policies
          </a>
          <a href="#" className={styles.footerLink}>
            Amenities
          </a>
          <a href="#" className={styles.footerLink}>
            My Bookings
          </a>
        </div>
      </div> */}

      <div className={styles.column}>
        <p className={styles.ratingTitle}>News and Offers</p>
        <div className={styles.subscribeContainer}>
          <input
            type="email"
            className={styles.subscribeInput}
            placeholder="Subscribe to newsletter"
          />
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>

        <div className={styles.socialIcons}>
          <a href="https://twitter.com" className={styles.socialIconLink}>
            <FiTwitter className={styles.socialIcon} />
          </a>
          <a href="https://instagram.com" className={styles.socialIconLink}>
            <FiInstagram className={styles.socialIcon} />
          </a>
          <a href="https://facebook.com" className={styles.socialIconLink}>
            <FiFacebook className={styles.socialIcon} />
          </a>
          <a href="https://linkedin.com" className={styles.socialIconLink}>
            <FiLinkedin className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
