import apiClient from './apiClient';
import { IBooking, ICreateBookingRequest } from '../types/Booking';

export const getBookings = async (): Promise<IBooking[]> => {
  try {
    const response = await apiClient.get<{ data: IBooking[] }>('/bookings');
    return response.data?.data || [];
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return [];
  }
};

export const getBookingById = async (id: string): Promise<IBooking | null> => {
  try {
    const response = await apiClient.get<{ data: IBooking }>(`/bookings/${id}`);
    return response.data?.data || null;
  } catch (error) {
    console.error('Error fetching booking:', error);
    return null;
  }
};

export const createBooking = async (bookingData: ICreateBookingRequest): Promise<IBooking | null> => {
  try {
    const response = await apiClient.post<{ data: IBooking }>('/bookings', bookingData);
    return response.data?.data || null;
  } catch (error) {
    console.error('Error creating booking:', error);
    return null;
  }
};

export const updateBooking = async (id: string, bookingData: Partial<IBooking>): Promise<IBooking | null> => {
  try {
    const response = await apiClient.put<{ data: IBooking }>(`/bookings/${id}`, bookingData);
    return response.data?.data || null;
  } catch (error) {
    console.error('Error updating booking:', error);
    return null;
  }
};

export const cancelBooking = async (id: string): Promise<boolean> => {
  try {
    await apiClient.delete(`/bookings/${id}`);
    return true;
  } catch (error) {
    console.error('Error cancelling booking:', error);
    return false;
  }
};

export const getBookingHistory = async (): Promise<IBooking[]> => {
  try {
    const response = await apiClient.get<{ data: IBooking[] }>('/bookings/history');
    return response.data?.data || [];
  } catch (error) {
    console.error('Error fetching booking history:', error);
    return [];
  }
};

export const getBookingStatusHistory = async (bookingId: string): Promise<any[]> => {
  try {
    const response = await apiClient.get<{ data: any[] }>(`/bookings/${bookingId}/history`);
    return response.data?.data || [];
  } catch (error) {
    console.error('Error fetching status history:', error);
    return [];
  }
};
