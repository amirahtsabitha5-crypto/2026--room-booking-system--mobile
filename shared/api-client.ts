const API_BASE_URL = 'http://localhost:5000/api';

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface RequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    method: string = 'GET',
    data?: any,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    const options: RequestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    if (data && (method === 'POST' || method === 'PUT')) {
      options.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url, options as any);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }


  async getRooms(): Promise<ApiResponse<any[]>> {
    return this.request('/rooms');
  }

  async getRoomById(id: string): Promise<ApiResponse<any>> {
    return this.request(`/rooms/${id}`);
  }

  async getBookings(): Promise<ApiResponse<any[]>> {
    return this.request('/bookings');
  }

  async getBookingById(id: string): Promise<ApiResponse<any>> {
    return this.request(`/bookings/${id}`);
  }

  async createBooking(bookingData: any): Promise<ApiResponse<any>> {
    return this.request('/bookings', 'POST', bookingData);
  }

  async updateBooking(id: string, bookingData: any): Promise<ApiResponse<any>> {
    return this.request(`/bookings/${id}`, 'PUT', bookingData);
  }

  async cancelBooking(id: string): Promise<ApiResponse<any>> {
    return this.request(`/bookings/${id}`, 'DELETE');
  }

  async getBookingHistory(bookingId: string): Promise<ApiResponse<any[]>> {
    return this.request(`/bookings/${bookingId}/history`);
  }
}

export default new ApiClient();
