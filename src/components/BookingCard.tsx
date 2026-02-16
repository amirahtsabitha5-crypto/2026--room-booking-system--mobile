import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import { colors } from '../styles/colors';
import { IBooking } from '../types/Booking';

interface BookingCardProps {
  booking: IBooking;
}

export default function BookingCard({ booking }: BookingCardProps): JSX.Element {
  const startTime = moment(booking.startTime);
  const endTime = moment(booking.endTime);
  const duration = endTime.diff(startTime, 'hours');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return colors.success;
      case 'pending':
        return colors.warning;
      case 'cancelled':
        return colors.danger;
      default:
        return colors.gray;
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.roomName}>Room Booking</Text>
          <Text style={styles.bookingId}>ID: {booking.id}</Text>
        </View>
        <View style={[
          styles.statusBadge,
          { backgroundColor: getStatusColor(booking.status) }
        ]}>
          <Text style={styles.statusText}>{booking.status}</Text>
        </View>
      </View>

      <View style={styles.timeSection}>
        <View style={styles.timeBlock}>
          <Icon name="clock-start" size={18} color={colors.primary} />
          <View style={styles.timeContent}>
            <Text style={styles.timeLabel}>Start</Text>
            <Text style={styles.timeValue}>{startTime.format('MMM DD, HH:mm')}</Text>
          </View>
        </View>
        <View style={styles.timeBlock}>
          <Icon name="clock-end" size={18} color={colors.primary} />
          <View style={styles.timeContent}>
            <Text style={styles.timeLabel}>End</Text>
            <Text style={styles.timeValue}>{endTime.format('MMM DD, HH:mm')}</Text>
          </View>
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Icon name="timer" size={16} color={colors.gray} />
          <Text style={styles.detailText}>{duration} hours</Text>
        </View>
        <View style={styles.detailRow}>
          <Icon name="account" size={16} color={colors.gray} />
          <Text style={styles.detailText}>{booking.bookedBy}</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={[styles.actionButton, styles.editButton]}>
          <Icon name="pencil" size={16} color={colors.primary} />
          <Text style={styles.actionText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.cancelButton]}>
          <Icon name="close" size={16} color={colors.danger} />
          <Text style={[styles.actionText, { color: colors.danger }]}>Cancel</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 15,
  },
  headerContent: {
    flex: 1,
  },
  roomName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.darkGray,
  },
  bookingId: {
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
  timeSection: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 15,
  },
  timeBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  timeContent: {
    marginLeft: 8,
    flex: 1,
  },
  timeLabel: {
    fontSize: 11,
    color: colors.gray,
  },
  timeValue: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.darkGray,
    marginTop: 2,
  },
  details: {
    backgroundColor: colors.background,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    gap: 8,
  },
  detailText: {
    fontSize: 12,
    color: colors.darkGray,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    gap: 4,
  },
  editButton: {
    borderColor: colors.primary,
    backgroundColor: colors.lightBlue,
  },
  cancelButton: {
    borderColor: colors.danger,
    backgroundColor: colors.lightRed,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
});
