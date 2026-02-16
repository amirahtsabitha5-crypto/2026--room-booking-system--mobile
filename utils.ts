/**
 * Shared utility functions for Room Booking System
 */

import moment, { Moment } from 'moment';
import { VALIDATION_PATTERNS } from './constants';

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  return VALIDATION_PATTERNS.EMAIL.test(email);
};

/**
 * Validate phone number format
 */
export const isValidPhone = (phone: string): boolean => {
  return VALIDATION_PATTERNS.PHONE.test(phone);
};

/**
 * Validate strong password
 */
export const isValidPassword = (password: string): boolean => {
  return VALIDATION_PATTERNS.STRONG_PASSWORD.test(password);
};

/**
 * Format date to string
 */
export const formatDate = (date: string | Date | Moment, format: string = 'YYYY-MM-DD'): string => {
  return moment(date).format(format);
};

/**
 * Parse date string to moment
 */
export const parseDate = (dateString: string): Moment | null => {
  const parsed = moment(dateString);
  return parsed.isValid() ? parsed : null;
};

/**
 * Get time difference in hours
 */
export const getHoursDifference = (startDate: string | Date, endDate: string | Date): number => {
  const start = moment(startDate);
  const end = moment(endDate);
  return end.diff(start, 'hours', true);
};

/**
 * Get time difference in minutes
 */
export const getMinutesDifference = (startDate: string | Date, endDate: string | Date): number => {
  const start = moment(startDate);
  const end = moment(endDate);
  return end.diff(start, 'minutes');
};

/**
 * Check if time slot is in past
 */
export const isPastDateTime = (dateTime: string | Date): boolean => {
  return moment(dateTime).isBefore(moment());
};

/**
 * Check if time slot is in future
 */
export const isFutureDateTime = (dateTime: string | Date): boolean => {
  return moment(dateTime).isAfter(moment());
};

/**
 * Format duration from hours to readable string
 */
export const formatDuration = (hours: number): string => {
  if (hours < 1) {
    return `${Math.round(hours * 60)} minutes`;
  }
  
  if (hours === 1) {
    return '1 hour';
  }
  
  const wholeHours = Math.floor(hours);
  const minutes = Math.round((hours - wholeHours) * 60);
  
  if (minutes === 0) {
    return `${wholeHours} hours`;
  }
  
  return `${wholeHours} hours ${minutes} minutes`;
};

/**
 * Get initials from name
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
    .substring(0, 2);
};

/**
 * Truncate text to specific length
 */
export const truncateText = (text: string, length: number = 50): string => {
  if (text.length <= length) {
    return text;
  }
  return `${text.substring(0, length)}...`;
};

/**
 * Deep clone object
 */
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Debounce function
 */
export const debounce = <T extends any[], R>(
  func: (...args: T) => R,
  wait: number,
): ((...args: T) => void) => {
  let timeout: number | null = null;

  return (...args: T) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Retry function with exponential backoff
 */
export const retryWithBackoff = async <T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  delayMs: number = 1000,
): Promise<T> => {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (attempt < maxAttempts) {
        const delay = delayMs * Math.pow(2, attempt - 1);
        await new Promise<void>((resolve) => {
          setTimeout(() => resolve(), delay);
        });
      }
    }
  }

  throw lastError || new Error('Max retries exceeded');
};

/**
 * Parse error response
 */
export const parseErrorMessage = (error: any): string => {
  if (typeof error === 'string') {
    return error;
  }

  if (error?.response?.data?.message) {
    return error.response.data.message;
  }

  if (error?.message) {
    return error.message;
  }

  return 'An unexpected error occurred';
};

/**
 * Check if object is empty
 */
export const isEmpty = (obj: any): boolean => {
  if (obj === null || obj === undefined) {
    return true;
  }

  if (typeof obj === 'string' || Array.isArray(obj)) {
    return obj.length === 0;
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).length === 0;
  }

  return false;
};

/**
 * Sleep/delay function
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
