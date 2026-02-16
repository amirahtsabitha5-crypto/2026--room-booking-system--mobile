class Room {
  final int id;
  final String name;
  final String description;
  final int capacity;
  final List<String> amenities;

  Room({
    required this.id,
    required this.name,
    required this.description,
    required this.capacity,
    required this.amenities,
  });

  factory Room.fromJson(Map<String, dynamic> json) {
    return Room(
      id: json['id'],
      name: json['name'],
      description: json['description'],
      capacity: json['capacity'],
      amenities: List<String>.from(json['amenities'] ?? []),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'description': description,
      'capacity': capacity,
      'amenities': amenities,
    };
  }
}
