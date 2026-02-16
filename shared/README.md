# Shared Module - Room Booking System

The `shared` module contains reusable code, types, utilities, and constants that are shared across both web and mobile applications of the Room Booking System.

## Structure

```
shared/
├── api-client.ts          # HTTP client for API communication
├── types.ts               # Shared TypeScript interfaces and types
├── constants.ts           # Configuration constants and enums
├── utils.ts               # Utility functions and helpers
├── index.ts               # Main export file
└── README.md              # This file
```

## Modules

### API Client (`api-client.ts`)

Provides a reusable HTTP client for making requests to the Room Booking API.

**Usage:**
```typescript
import { apiClient } from './shared';

const rooms = await apiClient.getRooms();
const booking = await apiClient.getBookingById('booking-123');
```

**Key Methods:**
- `getRooms()` - Get all available rooms
- `getRoomById(id)` - Get specific room details
- `getBookings()` - Get all bookings
- `getBookingById(id)` - Get specific booking
- `createBooking(data)` - Create new booking
- `updateBooking(id, data)` - Update booking
- `cancelBooking(id)` - Cancel booking
- `getBookingHistory(id)` - Get booking history

### Types (`types.ts`)

Shared TypeScript interfaces for type safety across applications.

**Main Types:**
- `IRoom` - Room data structure
- `IBooking` - Booking data structure
- `ICreateBookingRequest` - Booking creation request
- `IUpdateBookingRequest` - Booking update request
- `IUser` - User information
- `IBookingHistory` - Booking status history
- `IStandardResponse<T>` - Standard API response format

**Enums:**
- `BookingStatus` - Booking statuses (PENDING, CONFIRMED, IN_PROGRESS, COMPLETED, CANCELLED)
- `RoomStatus` - Room statuses (AVAILABLE, OCCUPIED, MAINTENANCE)

### Constants (`constants.ts`)

Configuration constants and values used throughout the application.

**Main Constants:**
- `API_CONFIG` - API base URL and settings
- `BOOKING_CONFIG` - Booking rules (max hours, max days, etc.)
- `ROOM_CAPACITY` - Standard room capacity levels
- `STATUS_COLORS` - Color codes for different statuses
- `ERROR_MESSAGES` - Standard error messages
- `SUCCESS_MESSAGES` - Standard success messages
- `DATE_TIME_FORMATS` - Date and time formatting patterns
- `VALIDATION_PATTERNS` - Regex patterns for validation
- `PAGINATION` - Pagination settings

**Usage:**
```typescript
import { API_CONFIG, BOOKING_CONFIG, ERROR_MESSAGES } from './shared';

const maxHours = BOOKING_CONFIG.MAX_BOOKING_HOURS;
const errorMsg = ERROR_MESSAGES.BOOKING_CONFLICT;
```

### Utilities (`utils.ts`)

Helper functions for common operations.

**Validation Functions:**
- `isValidEmail(email)` - Validate email format
- `isValidPhone(phone)` - Validate phone number
- `isValidPassword(password)` - Check password strength

**Date/Time Functions:**
- `formatDate(date, format)` - Format date to string
- `parseDate(dateString)` - Parse string to moment object
- `getHoursDifference(start, end)` - Get hours between two times
- `getMinutesDifference(start, end)` - Get minutes between two times
- `isPastDateTime(dateTime)` - Check if datetime is in past
- `isFutureDateTime(dateTime)` - Check if datetime is in future
- `formatDuration(hours)` - Convert hours to readable duration string

**String Functions:**
- `getInitials(name)` - Get name initials (e.g., "John Doe" → "JD")
- `truncateText(text, length)` - Truncate text with ellipsis

**Object Functions:**
- `deepClone(obj)` - Deep clone an object
- `isEmpty(obj)` - Check if object is empty

**Async Functions:**
- `debounce(func, wait)` - Debounce function calls
- `retryWithBackoff(fn, maxAttempts, delayMs)` - Retry with exponential backoff
- `sleep(ms)` - Delay function

**Error Handling:**
- `parseErrorMessage(error)` - Extract error message from various error formats

## Usage Examples

### Import Individual Items
```typescript
import { IRoom, API_CONFIG, formatDate } from './shared';

const config = API_CONFIG;
const date = formatDate(new Date());
```

### Import Everything
```typescript
import * as shared from './shared';

const rooms: shared.IRoom[] = [];
const formatted = shared.formatDate(new Date());
```

### Import API Client
```typescript
import { apiClient } from './shared';

const rooms = await apiClient.getRooms();
```

## Configuration

### API Base URL

Update the `API_BASE_URL` in `api-client.ts`:
```typescript
const API_BASE_URL = 'http://your-api-url:5000/api';
```

Or use constants from `constants.ts`:
```typescript
import { API_CONFIG } from './shared';
// API_CONFIG.BASE_URL = 'http://localhost:5000/api'
```

## Conventions

### Type Naming
- Interfaces start with `I` (e.g., `IRoom`, `IBooking`)
- Enums follow PascalCase (e.g., `BookingStatus`, `RoomStatus`)

### Constant Naming
- Constants use UPPER_SNAKE_CASE for simple values
- Config objects use camelCase (e.g., `API_CONFIG`, `BOOKING_CONFIG`)

### Function Naming
- Functions use camelCase (e.g., `formatDate`, `isValidEmail`)
- Utility functions are prefixed with action verbs (e.g., `is*`, `get*`, `format*`)

## Error Handling

Use standard error messages for consistency:
```typescript
import { ERROR_MESSAGES } from './shared';

try {
  const booking = await createBooking(data);
} catch (error) {
  console.error(ERROR_MESSAGES.BOOKING_CONFLICT);
}
```

## Testing

When testing functions from this module:
```typescript
import * as shared from './shared';

describe('Shared Utils', () => {
  test('should validate email', () => {
    expect(shared.isValidEmail('test@example.com')).toBe(true);
    expect(shared.isValidEmail('invalid')).toBe(false);
  });
});
```

## Contributing

When adding new shared utilities:
1. Add types to `types.ts`
2. Add constants to `constants.ts`
3. Add helper functions to `utils.ts`
4. Export from `index.ts`
5. Update this README with usage examples

## API Response Format

All API responses follow a standard format:
```typescript
interface IStandardResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
  timestamp?: string;
}
```

## Notes

- This module is framework-agnostic and can be used in any JavaScript/TypeScript environment
- All async functions should be properly error-handled
- Keep this module lightweight and focused on shared functionality
- Do not add platform-specific code (use conditional imports if necessary)
