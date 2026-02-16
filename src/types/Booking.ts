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
