import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faMapMarkerAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <p className={styles.ratingText}>Rating</p>
        <p>
          <FontAwesomeIcon icon={faStar} className={styles.faIcon} /> *****
        </p>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.faIcon} />{' '}
          123 Fake Street, City, Country
        </p>
        <p>
          <FontAwesomeIcon icon={faUser} className={styles.faIcon} /> Based on
          20,000 reviews
        </p>
      </div>

      <div className={styles.column}>
        <h3>About the Property</h3>
        <ul className={styles.footerLinks}>
          <li>
            <a href="#" className={styles.link}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Rooms
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Policies
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Amenities
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              My Bookings
            </a>
          </li>
        </ul>
      </div>
      {/* <div className={styles.column}>
        <h3>News and Offers</h3>
        <input
          type="email"
          className={styles.subscribeInput}
          placeholder="Subscribe to newsletter"
        />
        <div>
          <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
          <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
          <FontAwesomeIcon icon={faFacebookF} className={styles.socialIcon} />
          <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialIcon} />
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
