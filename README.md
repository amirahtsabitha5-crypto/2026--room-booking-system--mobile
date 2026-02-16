# React Native Room Booking App

## Setup Instructions

### Prerequisites
- Node.js 16+ and npm
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)
- Java Development Kit (JDK) 11+

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Link native dependencies**
```bash
npx react-native-cli link
```

### Development

#### For Android
```bash
npm run android
```

#### For iOS
```bash
npm run ios
```

#### Start development server
```bash
npm start
```

### Build

#### Android Release Build
```bash
npm run build:android
```

#### iOS Release Build
```bash
npm run build:ios
```

## Project Structure

```
src/
├── App.tsx                 # Main app component
├── components/             # Reusable components
│   ├── RoomCard.tsx
│   ├── BookingCard.tsx
│   └── HistoryCard.tsx
├── screens/                # Screen components
│   ├── HomeScreen.tsx
│   ├── BookingsScreen.tsx
│   ├── HistoryScreen.tsx
│   └── ProfileScreen.tsx
├── services/               # API services
│   ├── apiClient.ts
│   ├── roomService.ts
│   └── bookingService.ts
├── types/                  # TypeScript interfaces
│   ├── Room.ts
│   └── Booking.ts
└── styles/                 # Styling
    └── colors.ts
```

## Features

- **Browse Rooms**: View all available rooms with details
- **Book Rooms**: Create new bookings with start/end times
- **View Bookings**: See all active bookings
- **Booking History**: Track past bookings and status changes
- **Profile Management**: View and manage user profile
- **Real-time Updates**: Refresh data with pull-to-refresh
- **Cross-platform**: Works on both Android and iOS

## Configuration

### API Endpoint
Update the API base URL in `src/services/apiClient.ts`:
```typescript
const API_BASE_URL = 'http://your-api-url:5000/api';
```

## Troubleshooting

### Issue: Metro bundler errors
```bash
npm start --reset-cache
```

### Issue: Android build failing
```bash
cd android && ./gradlew clean && cd ..
npm run android
```

### Issue: iOS build failing
```bash
cd ios
rm -rf Pods
pod install
cd ..
npm run ios
```

## API Integration

The app connects to the Room Booking Backend API. Ensure the backend is running and accessible.

### Available Endpoints
- `GET /api/rooms` - Get all rooms
- `GET /api/bookings` - Get all bookings
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Cancel booking
- `GET /api/bookings/:id/history` - Get booking history

## Dependencies

Main dependencies:
- **React Native**: Cross-platform mobile framework
- **React Navigation**: Navigation management
- **Axios**: HTTP client
- **TypeScript**: Type-safe JavaScript
- **React Native Vector Icons**: Icon library
- **Moment.js**: DateTime handling

## Testing

```bash
npm test
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly on both platforms
4. Submit a pull request

## License

MIT

## Support

For issues or questions, please contact: support@roombooking.local
