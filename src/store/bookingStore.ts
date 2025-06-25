import { create } from 'zustand';

interface BookingData {
  propertyId: string;
  propertyName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  nights: number;
  pricePerNight: number;
  total: number;
}

interface BookingState {
  currentBooking: BookingData | null;
  bookings: any[];
  isLoading: boolean;
  setBookingData: (data: BookingData) => void;
  clearBooking: () => void;
  addBooking: (booking: any) => void;
  getBookings: () => any[];
}

export const useBookingStore = create<BookingState>((set, get) => ({
  currentBooking: null,
  bookings: [],
  isLoading: false,

  setBookingData: (data: BookingData) => {
    set({ currentBooking: data });
  },

  clearBooking: () => {
    set({ currentBooking: null });
  },

  addBooking: (booking: any) => {
    set(state => ({
      bookings: [...state.bookings, { ...booking, id: Date.now().toString() }]
    }));
  },

  getBookings: () => {
    return get().bookings;
  }
}));