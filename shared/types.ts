/**
 * Shared TypeScript types and interfaces for Room Booking System
 * Used across both web and mobile applications
 */

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

export interface IBooking {
  id: string;
  roomId: string;
  startTime: string | Date;
  endTime: string | Date;
  bookedBy: string;
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
  createdAt?: string;
  updatedAt?: string;
}

export interface ICreateBookingRequest {
  roomId: string;
  startTime: string;
  endTime: string;
  bookedBy: string;
}

export interface IUpdateBookingRequest {
  startTime?: string;
  endTime?: string;
  status?: string;
}

export interface IStandardResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
  timestamp?: string;
}

export interface IBookingHistory {
  id: string;
  bookingId: string;
  status: string;
  changedAt: string;
  changedBy?: string;
  notes?: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role?: 'user' | 'admin';
}

export type ApiEndpoint = 
  | '/rooms'
  | '/rooms/:id'
  | '/bookings'
  | '/bookings/:id'
  | '/bookings/:id/history'
  | '/bookings/search';

export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export enum RoomStatus {
  AVAILABLE = 'available',
  OCCUPIED = 'occupied',
  MAINTENANCE = 'maintenance',
}
