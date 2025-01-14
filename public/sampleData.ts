import { v4 as uuidv4 } from 'uuid';

export const sampleData = [
  { id: uuidv4(), value: 'Eat', isDone: true },
  { id: uuidv4(), value: 'Work', isDone: false },
  { id: uuidv4(), value: 'Ride', isDone: false },
];

export default sampleData;
