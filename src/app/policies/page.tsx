import styles from './policies.module.css';

const PoliciesPage = () => {
  return (
    <div className={styles.policiesContainer}>
      <h1 className={styles.title}>Hotel Policies</h1>
      <h2 className={styles.subtitle}>Check-in / Check-out</h2>
      <p>Check-in: From 3:00 PM</p>
      <p>Check-out: Until 11:00 AM</p>

      <h2 className={styles.subtitle}>Cancellation / Prepayment</h2>
      <p>
        Cancellation and prepayment policies vary according to accommodation
        type. Please enter the dates of your stay and check the conditions of
        your required room.
      </p>

      <h2 className={styles.subtitle}>Children and Beds</h2>
      <p>Children of all ages are welcome.</p>
      <p>
        To see correct prices and occupancy information, please add the number
        of children in your group and their ages to your search.
      </p>

      <h2 className={styles.subtitle}>Pets</h2>
      <p>Pets are allowed on request. Charges may be applicable.</p>

      <h2 className={styles.subtitle}>Groups</h2>
      <p>
        When booking more than 9 rooms, different policies and additional
        supplements may apply.
      </p>

      <h2 className={styles.subtitle}>Age Restriction</h2>
      <p>The minimum age for check-in is 18.</p>

      <h2 className={styles.subtitle}>Smoking</h2>
      <p>Smoking is not allowed.</p>

      <h2 className={styles.subtitle}>Parties</h2>
      <p>Parties/events are not allowed.</p>

      <h2 className={styles.subtitle}>Quiet Hours</h2>
      <p>Guests must be quiet between 10:00 PM and 7:00 AM.</p>
    </div>
  );
};

export default PoliciesPage;
