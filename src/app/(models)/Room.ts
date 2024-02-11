import mongoose, { Document, Schema } from 'mongoose';

// alternative is `mongoose.connect(process.env.MONGODB_URI as string)` but this is less safe and
// can lead to errors
if (typeof process.env.MONGODB_URI === 'string') {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  console.error('MONGODB_URI is not set');
  process.exit(1);
}
mongoose.Promise = global.Promise;

interface IRoom extends Document {
  room_type: string;
  description: string;
  image: string;
  price: number;
}

const roomSchema: Schema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  room_type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Room = mongoose.model<IRoom>('Room', roomSchema);

export default Room;
