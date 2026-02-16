# Room Booking System - Mobile App (Flutter)

This is the Flutter mobile application for the Room Booking System.

## Prerequisites

- Flutter SDK (>=3.0.0)
- Dart SDK (>=3.0.0)
- Android Studio / Xcode (for platform-specific development)

## Getting Started

### Installation

1. Install Flutter from [flutter.dev](https://flutter.dev/docs/get-started/install)

2. Clone the repository and navigate to the mobile directory:
```bash
cd mobile
```

3. Get dependencies:
```bash
flutter pub get
```

### Running the App

#### Development
```bash
flutter run
```

#### Build APK (Android)
```bash
flutter build apk --release
```

#### Build IPA (iOS)
```bash
flutter build ios --release
```

#### Build Web
```bash
flutter build web --release
```

## Project Structure

```
mobile/
├── lib/                 # Dart source code
│   └── main.dart       # App entry point
├── test/               # Test files
├── android/            # Android native code
├── ios/               # iOS native code
├── web/               # Web build files
├── pubspec.yaml       # Package dependencies
└── analysis_options.yaml  # Lint rules
```

## Features

- Room listing and search
- Booking management
- User profile management
- Real-time booking status updates

## Dependencies

- `http`: For API communication
- `provider`: State management
- `intl`: Internationalization
- `shared_preferences`: Local storage
- `flutter_lints`: Code analysis

## API Integration

The app communicates with the backend API running at `http://localhost:5000` (configurable).

## Testing

Run tests with:
```bash
flutter test
```

## Development Guidelines

- Follow Dart style guide
- Use provider for state management
- Keep business logic separate from UI
- Write tests for critical features
- Use meaningful variable and function names

## License

This project is part of the Room Booking System.
