import { Request, Response } from "express";
import { createBooking, getBookings, updateBooking } from "../services/BookingService";
import { bookingSchema, BookingSchema } from "../schemas/bookingSchema";
import { getBookingById } from "../utls/EmailAlreadyExist";

export const createBookingController = async (req: Request, res: Response) => {
  try {
    console.log("booking -->", req.body);
    const booking = req.body;
    const validatedBooking = bookingSchema.parse(booking);
    const newBooking = await createBooking(validatedBooking);
    res.status(201).json({
      status: "success",
      message: "Booking created successfully",
      data: newBooking
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error instanceof Error ? error.message : "Internal server error"
    });
  }
};
export const getBookingsController = async (req: Request, res: Response) => {
  const bookings = await getBookings();
  res.status(200).json({
    status: "success",
    message: "Bookings fetched successfully",
    data: bookings
  });
};
export const updateBookingController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const bookingData = await getBookingById(id);
    if(!bookingData){
      return res.status(404).json({
        status: "error",
        message: "Booking not found"
      });
    }
    console.log("booking -->", bookingData);
    const validatedBooking = bookingSchema.parse({
      ...bookingData,
      status: 'CANCELLED'
    });
    const updatedBooking = await updateBooking(id, validatedBooking);
    res.status(200).json({
      status: "success", 
      message: "Booking cancelled successfully",
      data: updatedBooking
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error instanceof Error ? error.message : "Internal server error"
    });
  }
};