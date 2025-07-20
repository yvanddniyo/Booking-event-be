import prisma from "../config/db";

export const EmailAlreadyExist = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
    if(user){
      return true;
    }
  return false;
};

export const getEventById = async (id: string) => {
  const event = await prisma.event.findUnique({
    where: { id },
  });
  return event;
};

export const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};

export const getBookingById = async (id: string) => {
  const booking = await prisma.booking.findUnique({
    where: { id },
  });
  return booking;
};