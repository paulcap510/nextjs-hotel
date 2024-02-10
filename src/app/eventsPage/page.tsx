'use client';
import eventData from '../eventsData.json';
import styles from './eventsPage.module.css';

const EventsPage: React.FC = () => {
  return (
    <div className={styles.eventsContainer}>
      <div className={styles.eventsGrid}>
        {eventData.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <img
              src={event.image}
              alt={event.title}
              className={styles.eventImage}
            />
            <div className={styles.eventTitle}>{event.title}</div>
            <div className={styles.eventDescription}>{event.description}</div>
            <button className={styles.moreInfoButton}>More Info</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
