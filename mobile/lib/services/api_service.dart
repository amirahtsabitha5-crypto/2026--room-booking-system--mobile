import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:room_booking_mobile/models/room.dart';
import 'package:room_booking_mobile/models/booking.dart';

class ApiService {
  static const String baseUrl = 'http://localhost:5000/api';
  
  final http.Client _client = http.Client();

  // Room endpoints
  Future<List<Room>> getRooms() async {
    try {
      final response = await _client.get(
        Uri.parse('$baseUrl/rooms'),
      );

      if (response.statusCode == 200) {
        final List<dynamic> decoded = json.decode(response.body);
        return decoded.map((room) => Room.fromJson(room)).toList();
      } else {
        throw Exception('Failed to load rooms');
      }
    } catch (e) {
      throw Exception('Error: $e');
    }
  }

  Future<Room> getRoom(int id) async {
    try {
      final response = await _client.get(
        Uri.parse('$baseUrl/rooms/$id'),
      );

      if (response.statusCode == 200) {
        return Room.fromJson(json.decode(response.body));
      } else {
        throw Exception('Failed to load room');
      }
    } catch (e) {
      throw Exception('Error: $e');
    }
  }

  // Booking endpoints
  Future<List<Booking>> getBookings() async {
    try {
      final response = await _client.get(
        Uri.parse('$baseUrl/bookings'),
      );

      if (response.statusCode == 200) {
        final List<dynamic> decoded = json.decode(response.body);
        return decoded.map((booking) => Booking.fromJson(booking)).toList();
      } else {
        throw Exception('Failed to load bookings');
      }
    } catch (e) {
      throw Exception('Error: $e');
    }
  }

  Future<Booking> createBooking(Booking booking) async {
    try {
      final response = await _client.post(
        Uri.parse('$baseUrl/bookings'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode(booking.toJson()),
      );

      if (response.statusCode == 201 || response.statusCode == 200) {
        return Booking.fromJson(json.decode(response.body));
      } else {
        throw Exception('Failed to create booking');
      }
    } catch (e) {
      throw Exception('Error: $e');
    }
  }

  Future<void> deleteBooking(int id) async {
    try {
      final response = await _client.delete(
        Uri.parse('$baseUrl/bookings/$id'),
      );

      if (response.statusCode != 200 && response.statusCode != 204) {
        throw Exception('Failed to delete booking');
      }
    } catch (e) {
      throw Exception('Error: $e');
    }
  }
}
