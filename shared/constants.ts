/**
 * Shared constants for Room Booking System
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL: 'http://localhost:5000/api',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
} as const;

// Booking Configuration
export const BOOKING_CONFIG = {
  MAX_BOOKING_HOURS: 8,
  MAX_BOOKING_DAYS: 30,
  MIN_ADVANCE_MINUTES: 15,
  DEFAULT_DURATION_HOURS: 1,
} as const;

// Room Capacity
export const ROOM_CAPACITY = {
  SMALL: 5,
  MEDIUM: 10,
  LARGE: 20,
  CONFERENCE: 50,
} as const;

// Status Colors (for UI consistency)
export const STATUS_COLORS = {
  AVAILABLE: '#10b981',  // Green
  OCCUPIED: '#ef4444',   // Red
  MAINTENANCE: '#f59e0b', // Amber
  PENDING: '#3b82f6',    // Blue
  CONFIRMED: '#10b981', // Green
  CANCELLED: '#6b7280',  // Gray
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  INVALID_BOOKING: 'Invalid booking details.',
  BOOKING_CONFLICT: 'Room is not available for selected time.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  SERVER_ERROR: 'Server error. Please try again later.',
  INVALID_CREDENTIALS: 'Invalid email or password.',
  USER_NOT_FOUND: 'User not found.',
  ROOM_NOT_FOUND: 'Room not found.',
  BOOKING_NOT_FOUND: 'Booking not found.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  BOOKING_CREATED: 'Booking created successfully.',
  BOOKING_UPDATED: 'Booking updated successfully.',
  BOOKING_CANCELLED: 'Booking cancelled successfully.',
  LOGIN_SUCCESS: 'Logged in successfully.',
  LOGOUT_SUCCESS: 'Logged out successfully.',
  PROFILE_UPDATED: 'Profile updated successfully.',
} as const;

// Date/Time Formats
export const DATE_TIME_FORMATS = {
  DATE: 'YYYY-MM-DD',
  TIME: 'HH:mm',
  DATETIME: 'YYYY-MM-DD HH:mm',
  DISPLAY_DATE: 'MMM DD, YYYY',
  DISPLAY_DATETIME: 'MMM DD, YYYY HH:mm',
} as const;

// Validation Patterns
export const VALIDATION_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
  STRONG_PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
} as const;
