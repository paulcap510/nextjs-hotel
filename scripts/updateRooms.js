// At the top of your script to load environment variables
require('dotenv').config({ path: './.env.local' });

const Room = require('../src/app/(models)/Room.ts'); // Adjust the path as necessary

const updateStandardRooms = async () => {
  try {
    const imagePath = '/hotel2.jpeg';

    const description =
      'Comfortable and cozy, this room offers a queen-sized bed and modern amenities, perfect for budget travelers';

    const result = await Room.updateMany(
      { room_type: 'standard' },
      {
        $set: {
          description: description,
          image: imagePath,
        },
      }
    );

    console.log('Update operation successful:', result);
  } catch (error) {
    console.error('Error updating standard rooms:', error);
  }
};

updateStandardRooms();
