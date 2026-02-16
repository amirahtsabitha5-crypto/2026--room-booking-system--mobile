import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../styles/colors';
import { IRoom } from '../types/Room';

interface RoomCardProps {
  room: IRoom;
  onBook: () => void;
}

export default function RoomCard({ room, onBook }: RoomCardProps): JSX.Element {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{room.name}</Text>
          <Text style={styles.location}>{room.location}</Text>
        </View>
        <View style={[
          styles.statusBadge,
          { backgroundColor: room.status === 'available' ? colors.success : colors.warning }
        ]}>
          <Text style={styles.statusText}>{room.status}</Text>
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Icon name="users" size={16} color={colors.primary} />
          <Text style={styles.detailText}>{room.capacity} people</Text>
        </View>
        <View style={styles.detailItem}>
          <Icon name="door" size={16} color={colors.primary} />
          <Text style={styles.detailText}>{room.location}</Text>
        </View>
      </View>

      {room.amenities && room.amenities.length > 0 && (
        <View style={styles.amenities}>
          <Text style={styles.amenitiesTitle}>Amenities:</Text>
          <View style={styles.amenitiesList}>
            {room.amenities.map((amenity, index) => (
              <View key={index} style={styles.amenityTag}>
                <Text style={styles.amenityText}>{amenity}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      <TouchableOpacity
        style={[
          styles.bookButton,
          { opacity: room.status === 'available' ? 1 : 0.5 }
        ]}
        onPress={onBook}
        disabled={room.status !== 'available'}
      >
        <Icon name="calendar-plus" size={18} color={colors.white} />
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.darkGray,
  },
  location: {
    fontSize: 12,
    color: colors.gray,
    marginTop: 2,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.white,
    textTransform: 'capitalize',
  },
  details: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  detailText: {
    fontSize: 12,
    color: colors.darkGray,
  },
  amenities: {
    marginBottom: 12,
  },
  amenitiesTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.darkGray,
    marginBottom: 6,
  },
  amenitiesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  amenityTag: {
    backgroundColor: colors.lightBlue,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  amenityText: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: '500',
  },
  bookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: colors.primary,
    borderRadius: 8,
    gap: 6,
  },
  bookButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
});
