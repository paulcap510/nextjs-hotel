'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './roomform.module.css';

const RoomForm = () => {
  const router = useRouter();

  const startingRoomData = {
    roomType: '',
    price: 0,
    image: '',
    description: '',
    quantity: 1,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/Rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) {
      throw new Error('Failed to create room');
    }

    router.refresh();
    router.push('/');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const isNumericField = name === 'price' || name === 'roomId';
    setFormData((prevState) => ({
      ...prevState,
      [name]: isNumericField ? parseFloat(value) || 0 : value,
    }));
  };

  const [formData, setFormData] = useState(startingRoomData);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add Room</h3>
        <div>
          <label htmlFor="roomType">Room Type:</label>
          <select
            id="roomType"
            name="roomType"
            onChange={handleChange}
            required
            value={formData.roomType}
          >
            <option value="">Select a room type</option>
            <option value="deluxe">Deluxe</option>
            <option value="standard">Standard</option>
            <option value="suite">Suite</option>
            <option value="family">Family</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            inputMode="numeric"
            id="roomId"
            name="roomId"
            onChange={handleChange}
            required
            value={formData.description}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            inputMode="decimal"
            pattern="[0-9]+"
            id="price"
            name="price"
            onChange={handleChange}
            required
            value={formData.price}
          />
        </div>

        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={handleChange}
            required
            value={formData.image}
          />
        </div>

        <button type="submit">Add Room</button>
      </form>
    </div>
  );
};

export default RoomForm;
