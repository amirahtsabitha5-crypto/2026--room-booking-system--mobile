# Room Booking System - Backend

Backend API ASP.NET Core untuk Sistem Peminjaman Ruangan Kampus.

## Setup & Installation

### Prerequisites
- .NET 10.0 SDK
- Windows (atau adjust paths untuk OS lain)

### Build
```bash
cd backend/BackendApi
dotnet build
```

### Run
```bash
dotnet run
```
API akan berjalan di `https://localhost:7232`

## Struktur Folder

```
backend/
└── BackendApi/
    ├── Controllers/           # API Controllers
    │   ├── RoomsController.cs
    │   └── BookingsController.cs
    ├── Models/               # Data models
    │   ├── Room.cs
    │   └── Booking.cs
    ├── Services/             # Business logic
    │   ├── IBookingRepository.cs
    │   └── InMemoryBookingRepository.cs
    ├── Program.cs            # App configuration
    ├── appsettings.json      # Configuration
    ├── appsettings.Development.json
    └── BackendApi.csproj     # Project file
```

## API Endpoints

### Rooms Management

#### GET /api/rooms
Dapatkan daftar semua ruangan
```bash
curl https://localhost:7232/api/rooms
```

#### POST /api/rooms
Buat ruangan baru

### Booking Management

#### GET /api/bookings
Dapatkan daftar semua booking

#### POST /api/bookings
Buat booking baru

#### PUT /api/bookings/{id}
Update booking

#### DELETE /api/bookings/{id}
Hapus booking
