# Room Booking System

Aplikasi web untuk mengelola peminjaman ruangan kampus. Dibangun dengan React untuk frontend dan ASP.NET Core untuk backend.

## Tentang Project Ini

Awalnya ini dibuat untuk mengatasi masalah kepribadian dalam manajemen ruangan kampus - reservasi bentrok, konflik jadwal, dan admin yang kebanjiran request. Sekarang dengan aplikasi ini, mahasiswa bisa langsung reserve ruangan online dengan cek ketersediaan real-time, dan admin cukup lihat dashboard.

Fitur utama:
- Lihat ruangan mana aja yang tersedia
- Pesan ruangan dengan tanggal & waktu (otomatis cek bentrok atau nggak)
- Lihat history semua pemesanan
- Kelola daftar ruangan (tambah, edit, hapus)

## Project Structure

```
room-booking-system/
├── backend/              # Backend API
│   └── BackendApi/
│       ├── Controllers/  # API routes
│       ├── Models/       # Database models
│       ├── Services/     # Business logic & data access
│       └── Program.cs    # App configuration
├── frontend/             # Web interface
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── services/     # API client
│   │   └── styles/       # CSS
│   └── package.json
└── README.md
```



Buka 2 terminal di folder root project ini.

**Terminal 1 - Jalankan Backend:**
```bash
cd backend/BackendApi
dotnet run
```
Backend jalan di `http://localhost:8000`

**Terminal 2 - Jalankan Frontend:**
```bash
cd frontend
npm install  # jalankan ini sekali aja
npm run dev
```
Frontend jalan di `http://localhost:3000`

Buka browser, masuk ke `http://localhost:3000` 
