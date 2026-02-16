/**
 * Shared module index - re-exports all shared utilities, types, and constants
 * Usage: import { IRoom, API_CONFIG, formatDate } from './shared';
 */

// API Client
export { default as apiClient } from './api-client';
export type { ApiResponse, RequestOptions } from './api-client';

// Types
export type {
  IRoom,
  IBooking,
  ICreateBookingRequest,
  IUpdateBookingRequest,
  IStandardResponse,
  IBookingHistory,
  IUser,
  ApiEndpoint,
} from './types';

export { BookingStatus, RoomStatus } from './types';

// Constants
export { API_CONFIG, BOOKING_CONFIG, ROOM_CAPACITY, STATUS_COLORS, ERROR_MESSAGES, SUCCESS_MESSAGES, DATE_TIME_FORMATS, VALIDATION_PATTERNS, PAGINATION } from './constants';

// Utilities
export {
  isValidEmail,
  isValidPhone,
  isValidPassword,
  formatDate,
  parseDate,
  getHoursDifference,
  getMinutesDifference,
  isPastDateTime,
  isFutureDateTime,
  formatDuration,
  getInitials,
  truncateText,
  deepClone,
  debounce,
  retryWithBackoff,
  parseErrorMessage,
  isEmpty,
  sleep,
} from './utils';
