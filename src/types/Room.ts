export interface IRoom {
  id: string;
  name: string;
  capacity: number;
  location: string;
  amenities?: string[];
  status: 'available' | 'occupied' | 'maintenance';
  createdAt?: string;
  updatedAt?: string;
}
