import styles from './roomstwo.module.css';

interface Room {
  id: string;
  roomType: string;
  image: string;
}

const getRooms = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/Rooms', {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    console.log('Failed to get rooms', error);
  }
};

const RoomsTwo = async () => {
  const { rooms } = await getRooms();

  const uniqueTypes = Array.from(
    new Set(rooms.map((room: Room) => room.roomType))
  ) as string[];

  return (
    <div className={styles.roomsContainer}>
      <div className={styles.roomsGrid}>
        {rooms.map((room: Room) => (
          <div key={room.id} className={styles.roomCard}>
            <img
              src={room.image}
              alt={room.roomType}
              className={styles.roomImage}
            />
            <div className={styles.roomName}>{room.roomType}</div>
            <button className={styles.reserveButton}>Reserve</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsTwo;
