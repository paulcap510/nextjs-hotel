'use client';
import React, { useState } from 'react';
import roomData from '../roomsData.json';
import styles from './rooms.module.css';

const RoomsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRooms = roomData.filter((room) =>
    room.room_type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.roomsContainer}>
      <div className={styles.searchBar}>
        <input type="date" placeholder="Check-in" />
        <input type="date" placeholder="Check-out" />
        <input type="number" placeholder="Guests" min="1" />
        <button className={styles.searchButton}>Search</button>
      </div>
      <div className={styles.roomsGrid}>
        {filteredRooms.map((room) => (
          <div key={room.id} className={styles.roomCard}>
            <img
              src={room.image}
              alt={room.room_type}
              className={styles.roomImage}
            />
            <div className={styles.roomName}>{room.room_type}</div>
            <div className={styles.roomDescription}>{room.description}</div>
            <button className={styles.reserveButton}>Reserve</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
