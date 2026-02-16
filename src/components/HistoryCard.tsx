import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import { colors } from '../styles/colors';
import { IBooking } from '../types/Booking';

interface HistoryCardProps {
  booking: IBooking;
}

export default function HistoryCard({ booking }: HistoryCardProps): JSX.Element {
  const startTime = moment(booking.startTime);
  const endTime = moment(booking.endTime);
  const duration = endTime.diff(startTime, 'hours');
  const completedDate = moment(endTime).format('MMM DD, YYYY');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return 'check-circle';
      case 'cancelled':
        return 'close-circle';
      default:
        return 'information-outline';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return colors.success;
      case 'cancelled':
        return colors.danger;
      default:
        return colors.gray;
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.statusIconContainer}>
          <Icon
            name={getStatusIcon(booking.status)}
            size={32}
            color={getStatusColor(booking.status)}
          />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.date}>{completedDate}</Text>
          <Text style={styles.duration}>{duration} hours booking</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Status:</Text>
          <View style={styles.statusPill}>
            <Text style={[styles.statusPillText, { color: getStatusColor(booking.status) }]}>
              {booking.status.toUpperCase()}
            </Text>
          </View>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Booking ID:</Text>
          <Text style={styles.detailValue}>{booking.id}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Time:</Text>
          <Text style={styles.detailValue}>
            {startTime.format('HH:mm')} - {endTime.format('HH:mm')}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Booked By:</Text>
          <Text style={styles.detailValue}>{booking.bookedBy}</Text>
        </View>
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
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  statusIconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerContent: {
    flex: 1,
    justifyContent: 'center',
  },
  date: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.darkGray,
  },
  duration: {
    fontSize: 12,
    color: colors.gray,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: colors.lightBorder,
    marginVertical: 12,
  },
  details: {
    gap: 8,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 12,
    color: colors.gray,
    fontWeight: '500',
  },
  detailValue: {
    fontSize: 12,
    color: colors.darkGray,
    fontWeight: '500',
  },
  statusPill: {
    backgroundColor: colors.background,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  statusPillText: {
    fontSize: 11,
    fontWeight: '600',
  },
});
