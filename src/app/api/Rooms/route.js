import Room from '../../(models)/Room';
import { NextResponse } from 'next/server';

// Add Rooms to the database
export async function POST(req) {
  try {
    const body = await req.json();
    const roomData = body.formData;
    await Room.create(roomData);

    return NextResponse.json({ message: 'Room created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

// Get Rooms from database
export async function GET(req) {
  try {
    const rooms = await Room.find();
    return NextResponse.json({ rooms }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}
