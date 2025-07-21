import prisma from "../config/db";
import { BookingSchema } from "../schemas/bookingSchema";

export const createBooking = async (booking: BookingSchema) => {
  const newBooking = await prisma.booking.create({
    data: booking,
  });
  return newBooking;
};
export const getBookings = async (userId: string) => {
  const bookings = await prisma.booking.findMany({
    where: {
      userId: userId,
    },
    include: {
      event: true,
    },
  });
  return bookings;
};

export const updateBooking = async (id: string, booking: BookingSchema) => {
  const updatedBooking = await prisma.booking.update({
    where: { id },
    data: booking,
  });
  return updatedBooking;
};
