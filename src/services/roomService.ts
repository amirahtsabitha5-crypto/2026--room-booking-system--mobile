import apiClient from './apiClient';
import { IRoom } from '../types/Room';

export const getRooms = async (): Promise<IRoom[]> => {
  try {
    const response = await apiClient.get<{ data: IRoom[] }>('/rooms');
    return response.data?.data || [];
  } catch (error) {
    console.error('Error fetching rooms:', error);
    return [];
  }
};

export const getRoomById = async (id: string): Promise<IRoom | null> => {
  try {
    const response = await apiClient.get<{ data: IRoom }>(`/rooms/${id}`);
    return response.data?.data || null;
  } catch (error) {
    console.error('Error fetching room:', error);
    return null;
  }
};

export const searchRooms = async (query: string): Promise<IRoom[]> => {
  try {
    const response = await apiClient.get<{ data: IRoom[] }>('/rooms/search', {
      params: { q: query },
    });
    return response.data?.data || [];
  } catch (error) {
    console.error('Error searching rooms:', error);
    return [];
  }
};
